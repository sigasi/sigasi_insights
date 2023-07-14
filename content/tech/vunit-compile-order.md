---
title: "VUnit: managing input files and compile order"
layout: page 
pager: true
author: Wim Meeus
date: 2022-09-29
comments: true
bannerad: true
tags:
  - VUnit
---

Some time ago, while preparing for an [earlier article on VUnit and
UVM](/tech/vunit-uvm), a warning message in a
[VUnit](https://vunit.github.io) run caught my attention.

```
Compiling into lib:       vhdl_adder_tb.sv          passed
WARNING VCP2515 "Undefined module: vhdl_adder was used. Port connection rules will not be checked
                 at such instantiations." ".../vhdl_adder_tb.sv" 20  6
Compiling into lib:       vhdl_adder.vhd            passed
```

The tests themselves were running nicely, but hey! VUnit compiles
the testbench before the relevant design under test (DUT) and the
compiler complains that the DUT is not available when compiling the
testbench. Wasn't **VUnit** supposed to **figure out the compile
order** by itself?

### Guiding VUnit's compile order

The answer is that indeed, VUnit is *supposed* to figure out the
compile order. But **determining a viable compile order** from a set
of HDL files is **far from trivial**, so I wasn't too surprised (or
even disappointed) -- tests were running, so the initial goal was
achieved.

But then I got curious whether I could **guide VUnit** to find the
right compile order. I had already noticed that even if I was adding
the HDL files in the right order, VUnit would change the order --
incorrectly in this case.  Soon I found that VUnit has
`add_dependency_on()` methods to **enforce dependencies** between HDL
files. [Sigasi Studio](https://www.sigasi.com) can [export a compile
order](/manual/eclipse/tools/#auto-export).  So the
idea came to use the **compile order from Sigasi Studio** -- which
is correct for our project -- and set a dependency in VUnit
between each pair of successive files in Sigasi's compile order.  As
VUnit tests are driven by a Python script, the implementation was not
all that difficult:

```python
last_file = None
with open('compilation_order.csv') as csv_file:
    # Read the CSV file from Sigasi Studio, line by line
    # Each line contains the library name (not needed here) and the filename.
    csv_reader = csv.reader(csv_file, skipinitialspace=True)
    for library_name, file_name in csv_reader:
        this_file = vu.get_source_file(file_name)
            if last_file is not None:
                print("Add dependency of " + file_name + " on " + last_file.name)
                this_file.add_dependency_on(last_file)
            last_file = this_file
```

The result was an unpleasant surprise. Suddenly I was seeing
*circular dependencies* between files!

```
  ERROR - Found circular dependency:
/home/wmeeus/git/uvm-in-vunit-tutorial-simple-adder/vhdl_adder_tb.sv ->
/home/wmeeus/git/uvm-in-vunit-tutorial-simple-adder/simpleadder_top_tb.sv ->
/home/wmeeus/git/uvm-in-vunit-tutorial-simple-adder/vhdl_adder_tb.sv
```

So clearly, VUnit still does its own dependency analysis in addition
to the added dependencies from the script. But there shouldn't haven
been a dependency between these testbenches to begin with...

As it turned out, there was a problem with the SystemVerilog
testbenches themselves: a SystemVerilog package was included in both
testbenches, rather than being compiled by itself.

<pre><span class="error">`include "simpleadder_pkg.sv"</span>
`include "simpleadder_if.sv"
`include "vunit_defines.svh"
`include "uvm_macros.svh"

module simpleadder_top_tb;
// ...</pre>

Once that was fixed (i.e.: `` `include "simpleadder_pkg.sv"`` removed
from testbenches and added to the project as a separate file), VUnit
worked like a charm. With the **added dependencies**, the **compile
order** was **exactly as expected**. But best of all, we didn't even
need to add dependencies any more. With the code fixed, VUnit can
determine a correct compile order without assistance.

### Managing VUnit source files

In the process of resolving the compile order, **another VUnit method**
caught my attention: `add_source_files_from_csv()`. Hey, Sigasi Studio
writes the compile order as a CSV file, in the correct format for use
by VUnit...

So far we've been **maintaining a list of design files** in the VUnit
`run.py` script **by hand**.  Wildcards in the list may help to
automatically include new design files as they are added to the
project, but excluding files is difficult. As shown in an [earlier
article](/tech/vunit-integration/#read-vunit-configuration-from-sigasi-studio-project-files),
VUnit can be made to read the list of design files from Sigasi
Studio's `.project` file, but that requires additional python code in
`run.py`.

So now we have an **alternative**: have Sigasi Studio [write out the
compile order](/manual/eclipse/tools/#auto-export),
and read the generated CSV file in `run.py`. As a fallback, you can
still maintain a static list, e.g. to run VUnit tests outside Sigasi
Studio, or for importing your project into Sigasi Studio, when the CSV
file hasn't been generated yet.

```python
if os.path.exists("compilation_order.csv"):
    print("Using compilation_order.csv for input files")
    vu.add_source_files_from_csv("compilation_order.csv")
else:
    print("Using static list in run.py for input files")
    # Create library 'lib'
    lib = vu.add_library("lib")
    # Add design files to library
    lib.add_source_files([
        "simpleadder_pkg.sv",
        "simpleadder.v", "simpleadder_top_tb.sv",
        "vhdl_adder.vhd", "vhdl_adder_tb.sv"
        ])
```

### Conclusion

In this article, we've seen that VUnit sometimes fails to determine
the compile order of the design files. It is possible to **add
dependencies** between files to **guide VUnit's dependency analysis**.
The compile order, generated by Sigasi Studio, can be used to force
VUnit to use a particular compile order.  In our case, adding
dependencies helped us find and fix a design flaw, after which
VUnit could determine the compile order correctly.

The **compile order, exported from Sigasi Studio**, can also be used
directly as a **list of source files for VUnit**. This may reduce the
amount of maintenance to the VUnit `run.py` script.