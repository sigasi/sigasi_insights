---
title: "VUnit projects in Sigasi Studio"
layout: page 
pager: true
author: Wim Meeus
date: 2021-01-12
comments: true
bannerad: true
tags:
  - VUnit
---

[VUnit](https://vunit.github.io) is an open source **unit testing framework for VHDL/SystemVerilog** that helps to write, and automatically run, tests. 
The VUnit project was started by [Lars Asplund](https://github.com/LarsAsplund) from *Synective Labs* and [Olof Kraigher](https://github.com/kraigher). The source code is hosted at [GitHub](https://github.com/VUnit/vunit).
VUnit automatically **scans your projects for unit tests** (aka test benches), **runs them** with your favorite simulator and **reports the results**.
This automation helps to run tests frequently and iterate faster.

# Installing VUnit

VUnit scripts are written in **Python**, so first make sure Python is installed on your system. A recent version of Python 3 is recommended. Windows users must install a [full version of Python](https://www.python.org/downloads/windows/), not from the Windows Store.

The recommended way to install the latest stable release of VUnit is via `pip` or `pip3`. On most systems running the following command should do the trick:
```sh
pip install vunit_hdl
```
Make sure you use `vunit_hdl` and not `vunit`. The latter is a completely different Python library.

You can check that VUnit is installed correctly by for example running:
```sh
pip freeze
```
In the list of installed Python packages you will find a `vunit-hdl` entry and its version number.

# Using VUnit

**Running VUnit tests** requires two elements: VHDL or SystemVerilog
  **testbenches** and a **Python script** `run.py` which controls the
  execution.

VUnit will **recognize** a VHDL entity or a SystemVerilog module as a
**testbench** if it has a `runner_cfg` generic (VHDL) or parameter
(SV). Testbench entity and module names should have either a `tb_`
prefix or a `_tb` suffix. VUnit will warn if that is not the case.

A **VHDL VUnit test bench** has the following structure. Note that
**VHDL 2008 is required**, a.o. for support of a VHDL *context*. The
main process has function calls to set up and terminate the
simulation. Between these function calls, one or more tests may be
run.

```vhdl
library vunit_lib;                             -- VUnit library and context (VHDL2008 required!)
context vunit_lib.vunit_context;

entity tb_example is                           -- Entity name with tb_ prefix
  generic (runner_cfg : string);               -- Generic indicates that this is a VUnit testbench
end entity;

architecture tb of tb_example is
begin
  main : process
  begin
    test_runner_setup(runner, runner_cfg);     -- Set up and start simulation
    report "This test will pass!";             -- Single, trivial test in this example
    test_runner_cleanup(runner);               -- Simulation ends
  end process;
end architecture;
```

In SystemVerilog it looks a bit different. The `runner_cfg` parameter, which 
marks the module as a VUnit testbench, is defined in `TEST_SUITE`.

```systemverilog
`include "vunit_defines.svh"                   // Include VUnit definitions

module tb_sv_example;
  `TEST_SUITE begin                            // Includes the definition of parameter runner_cfg
                                               // which makes this module a VUnit testbench
     // Note: Do not place any code here.

    `TEST_SUITE_SETUP begin
      $display("Running test suite setup code");
      // Start clocks, assert resets etc. here
    end

    `TEST_CASE_SETUP begin
      $display("Running test case setup code");
      // Leave empty for simple cases
    end

    `TEST_CASE("Test that a successful test case passes") begin
      $display("This test case is expected to pass");
      `CHECK_EQUAL(1, 1);
    end

    `TEST_CASE("Test that a failing test case actually fails") begin
      $display("This test case is expected to fail");
      `CHECK_EQUAL(0, 1, "You may also optionally add a diagnostic message to CHECK_EQUAL");
    end

    `TEST_CASE_CLEANUP begin
      $display("Cleaning up after a test case");
      // Leave empty for simple cases
    end

    `TEST_SUITE_CLEANUP begin
      $display("Cleaning up after running the complete test suite");
      // Leave empty for simple cases
    end
  end;

  // Optional, but recommended.
  `WATCHDOG(1ns);
endmodule

```

Note the presence of the **watchdog** near the end of the above
example. The watchdog ensures that *hanging* tests terminate as failed
rather than keep on running *forever*.

Finally, a Python script `run.py` is required to control the VUnit
tests. In it simplest form, `run.py` for a VHDL project could look
like this. The script creates a VUnit instance, adds libraries and
design files to it, and runs the tests.

```python
# The following line works for VHDL
from vunit import VUnit
# If your project is SystemVerilog, use the following one instead:
# from vunit.verilog import VUnit

# Create VUnit instance by parsing command line arguments
vu = VUnit.from_argv()

# Create library 'lib'
lib = vu.add_library("lib")

# Add all files ending in .vhd in current working directory to library
lib.add_source_files("*.vhd")

# Run vunit tests
vu.main()
```

Note that VUnit does not support a library named `work`. In VHDL,
*`work`* is a keyword which means *the same library where this element
is defined*. While in many VHDL projects, the work library is called
`work`, a different name must be chosen in VUnit. In the above
example, the work library is named `lib`. Given the special meaning of
`work`, this won't break any references to `work` in the VHDL code.

[VUnit's user guide](https://vunit.github.io/user_guide.html) offers
further details on how to use VUnit.

If your project has multiple source code directories and/or libraries,
`run.py` will need to reflect that. `run.py` is meant to be stored in
revision control. For that reason, generating `run.py` (e.g. from
other scripts) is discouraged. However, the full power of Python is
available to configure VUnit's libraries and source files from within
`run.py`. We'll give a few examples later.

# Using VUnit in Sigasi Studio

**Sigasi Studio** can help you **manage VUnit projects** and enables
you to **run and inspect test results** straight from the IDE.  VUnit
support in Sigasi Studio requires an [XPRT
license](https://www.sigasi.com/products).

Details of how to run VUnit tests in Sigasi Studio can be found in
[the Sigasi manual](/manual/vunit). Once your tests are running,
Sigasi Studio opens the VUnit view from where you can see test results
and inspect the details.

![vunit...](/img/manual/vunit_verilog.png)

# Complex VUnit projects: Python to the rescue

VUnit makes use of a single `run.py` script which configures libraries
and controls the execution. It is **not desirable to duplicate the
library configuration** from other tools in `run.py`. First of all,
the library configuration would need regular updates as the project
evolves, which means **additional work** for the designers and a
possible source of errors. Generating `run.py` from other scripts or
tools is not recommended either, because **`run.py` is meant to be
kept in revision control**.

Fortunately, the full **strength of the Python programming language**
is available to help manage VUnit's configuration.  We present a few
examples of how Python can be used to automate the VUnit setup.

## Determine libraries from folder names

In this example, we have a VHDL project with one level of
subfolders. Each subfolder is mapped to a library with the same
name. Over the course of the project, subfolders may be added or
renamed. 

![vunit...](/img/tech/vunit/vunit-dirs.png)

The following `run.py` script **extracts the libraries from the folder
names**. The designer doesn't need to change anything to the script when
the folder / library structure is changed.

```python
from vunit import VUnit
import os

# Create VUnit instance by parsing command line arguments
vu = VUnit.from_argv()

# For each folder, create a library with the same name as the folder.
# Map all VHDL files in the folder into the library.
for fpath in os.scandir('.'):
    if fpath.is_dir() and not fpath.name.startswith('.'):
        vu.add_library(fpath.name).add_source_files(os.path.join(fpath.path, "*.vhd"))

# Add all files ending in .vhd in the top level directory to library "libwork"
vu.add_library("libwork").add_source_files("*.vhd")

# Run vunit function
vu.main()
```

## Find all SystemVerilog files in a folder hierarchy

In this example, libraries are not the problem because SystemVerilog
uses one single library. The difficulty here is that design files are
present at various depths in the file hierarchy.

![vunit...](/img/tech/vunit/vunit-sv.png)

Again, Python proves to be a powerful tool to **find the design files**
and configure VUnit tests.

```python
from vunit.verilog import VUnit
import glob

# Create VUnit instance by parsing command line arguments
vu = VUnit.from_argv()

# Create library 'lib'
lib = vu.add_library("lib")

# Hierarchically add all files ending in .v and .sv in current working directory to library
for file in glob.glob("**/*.v",  recursive=True):
    lib.add_source_files(file)
for file in glob.glob("**/*.sv", recursive=True):
    lib.add_source_files(file)

# Run vunit function
vu.main()
```

Obviously, the example could be extended. For example, one could read
a list with files to exclude from a file, and not add those files to
the library. 

## Read VUnit configuration from Sigasi Studio project files

Oftentimes, information about design files, libraries, excludes
etc. is available in other design tools, e.g. Sigasi Studio. With some
clever use of Python, **`run.py` can retrieve this information from
Sigasi Studio's project files**, making the **configuration of VUnit
tests entirely automatic**. Just use [this
`run.py` ![vunit...logo](/img/tech/vunit/python-logo.png)](/resources/tech/vunit-integration/run.py) in your project,
sit back and run your tests.
