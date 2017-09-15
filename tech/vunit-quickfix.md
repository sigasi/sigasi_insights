---
title: "VUnit projects in Sigasi"
layout: page 
pager: true
author: Hendrik Eeckhaut
date: 2017-09-14
comments: true
bannerad: true
---

Since [version 3.6](/releasenotes/sigasi-3.06), Sigasi Studio has a **quickfix** to automatically add the VUnit `vunit_lib` VHDL library to your project.

# About VUnit

VUnit is an open source **unit testing framework for VHDL/SystemVerilog** that helps to write, and automatically run, tests. 
The VUnit project was started by Lars Asplund from [Synective Labs](http://www.synective.se) and its source code is hosted at [GitHub](https://github.com/VUnit/vunit).
VUnit automatically scans your projects for unit tests (aka test benches), runs your them with your favorite simulator and reports you the results.
This automation helps to run tests frequently and iterate faster.

The VUnit scripts are written in Python, so first make sure python is installed on your system. The recommended way to install the latest stable release of VUnit is via `pip`. On most system running the following command should do the trick:
```sh
pip install vunit_hdl
```
Make sure you use `vunit_hdl` and not `vunit`. The latter is a completely different Python library.

You can check that VUnit is installed correctly by for example running:
```sh
echo -e "import vunit\nprint dir(vunit)" | python
```
The expected output is:
```txt
['ROOT', 'VUnit', 'VUnitCLI', '__builtins__', '__doc__', '__file__', '__name__', '__package__', '__path__', '__version__', 'about', 'abspath', 'activehdl_interface', 'builtins', 'cached', 'cds_file', 'check_preprocessor', 'color_printer', 'com', 'configuration', 'database', 'dependency_graph', 'design_unit', 'dirname', 'doc', 'exceptions', 'ghdl_interface', 'hashing', 'incisive_interface', 'join', 'location_preprocessor', 'modelsim_interface', 'ostools', 'parsing', 'persistent_tcl_shell', 'project', 'rivierapro_interface', 'simulator_factory', 'simulator_interface', 'test_bench', 'test_bench_list', 'test_list', 'test_report', 'test_runner', 'test_suites', 'ui', 'version', 'version_check', 'vhdl_parser', 'vsim_simulator_mixin', 'vunit', 'vunit_cli']
```

# Using VUnit in Sigasi Studio

If you want to use VUnit in your VHDL testbenches. You need to add a library clause for the `vunit_lib` library. All necesary packages can be imported with the predifined `vunit_context` context.

A typical VUnit test bench file will have following entity declaration:
```vhdl
library vunit_lib;
context vunit_lib.vunit_context;

entity tb_example is
  generic (runner_cfg : string);
end entity;
```
*Note that the `context` clause is VHDL-2008 syntax. So, make sure your project is configured accordingly: Right click project, **Properties > VHDL Version > VHDL-2008**.*

When you enter this VHDL snippet in a VHDL file in a Sigasi Studio project, you will see a warning (*Library "vunit\_lib" is not available*) on the library clause and multiple errors because references to missing declarations.
![vunit...](/tech/vunit/before.png)

To automatically add the VUnit library to your project, click the light bulb icon to trigger the quick fix (or press **Ctrl-F1** on the line with the warning).

![vunit...](/tech/vunit/quickfix.png)

As a result the `vunit_lib` is added to your project (Note that this also adds the `osvvm` library). Under the hood, Sigasi Studio runs a Python script to query VUnit for the correct paths to the VUnit VHDL source files.

![vunit...](/tech/vunit/after.png)

This also resolves the unresolved references to `test_runner_setup` and `test_runner_cleanup`. You can now easily navigate to their declaration with **F3** ("Open Declaration"). You can also use autocomplete to quickly add other VUnit function calls.

Happy coding.



