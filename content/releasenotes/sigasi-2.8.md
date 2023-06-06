---
title: Sigasi 2.8
layout: page
pager: true
date: 2012-10-10
---

Sigasi 2.8 brings Makefile and CSV-file generation plus multiple other improvements and bug fixes.

Export Project Makefile
-----------------------

Sigasi's vcom integration is a
real time-saver for VHDL-design. But you may also want to build your
project in batch mode. A typical approach is to use
[Makefiles](http://en.wikipedia.org/wiki/Make_(software)) for command
line builds. Sigasi can help you by **generating a Makefile** for
compiling your project with Modelsim.

![ModelSim Makefile](/img/releasenotes/2.8/makefile_a.png "ModelSim Makefile")

In some cases you don't need a Makefile, but you just need a list of
your VHDL files in the correct compilation order. For these cases we
offer an **Export as CSV File** wizard. This wizard generates a file
which lists the VHDL files in your project in a valid compile order. You
can use your own simple scripts to manipulate such list and run any EDA
tool, including simulators, synthesis and linter tools.

Example file (for the Sigasi tutorial project):

    work, dut.vhd
    work, clock_generator.vhd
    work, testbench.vhd

Other new and noteworthy improvements
-------------------------------------

-   The `modelsim.ini` configuration file is now taken into account when
    running vcom.
-   Better autocompletes:
    -   We have cleaned up the VHDL templates
    -   The use of UPPERCASE/lowercase in the STD and IEEE libraries (93
        and 2008) is now more consistent. This results in consistent
        casing of autocompletes from these libraries.
    -   Added Autocomplete template for file declaration:
    -   Added Autocomplete template for sequential assert statement
-   Bit string literals (e.g. <code>X"0000CAFE"</code>) are now
    supported in the hierarchy/generics view
-   Added tutorial on library mapping
-   The timestamp is removed from the library mapping xml file
    (`.library_mapping.xml`). This makes this file more version control
    system friendly
-   The hover over a signal name now displays its initial value
    ![Hover initial value](/img/releasenotes/2.8/signal_hover.png "Hover initial value")
-   Sigasi's VHDL builder now detects ands skips encrypted VHDL files
    (instead of trying to compile and then throwing errors)
-   Removed Xilinx and Altera Cheat Sheets. Their content has been
    obsoleted by the Library Quickfix.

### Bugfixes

-   Fixed library mapping caching bug : when unmapped files were mapped
    again, they did not compile until Sigasi was restarted.
-   ticket 2221 : Fix "Remove trailing whitespace" action in VHDL editor
-   ticket 2224 : Instantiation not working if label contains a number
-   ticket 2227 : Generics view should show all generics, even if there
    is no default value in the top level
-   ticket 2238 : Library mapping is not written when resource is
    deleted
-   ticket 2242 : Remove incorrect "set as toplevel" action in context
    menu of the root outline node
-   ticket 2189 : Formatting a file declaration should not insert new
    line
-   ticket 2229 : Attribute formatting does not look good

End User License Agreement
--------------------------

We have updated the [eula](/eula) to clarify a few
points, to make it more clear how the licensing (node-locked and floating licenses) works, and to update the third party open source licenses.
If you update your Sigasi installation, you will be required to read an accept the new terms. Should you have any questions about the new license agreement, please contact us at <legal@sigasi.com>.

Download/Update
---------------

If you have Sigasi 2 installed, you can {{< update_sigasi >}}. You can also {{< download_latest >}}.
