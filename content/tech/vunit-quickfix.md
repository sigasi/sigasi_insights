---
title: "VUnit projects in Sigasi"
layout: page 
pager: true
author: Hendrik Eeckhaut
date: 2017-09-14
comments: true
bannerad: true
tags:
  - VUnit
---

Since [version 3.6](/releasenotes/sigasi-3.06), Sigasi Studio has a **Quick Fix** to automatically add the VUnit `vunit_lib` VHDL library to your project.

<strong>In [Sigasi Studio 4.1](/releasenotes/sigasi-4.01), VUnit Integration was added.
The instructions below are outdated. Use the [manual page on VUnit](/manual/vunit) instead.</strong>

# About VUnit

VUnit is an open source **unit testing framework for VHDL/SystemVerilog** that helps to write, and automatically run, tests. 
The VUnit project was started by Lars Asplund from [Synective Labs](http://www.synective.se) and [Olof Kraigher](https://github.com/kraigher). The source code is hosted at [GitHub](https://github.com/VUnit/vunit).
VUnit automatically scans your projects for unit tests (aka test benches), runs them with your favorite simulator and reports you the results.
This automation helps to run tests frequently and iterate faster.

The VUnit scripts are written in Python, so first make sure python is installed on your system. The recommended way to install the latest stable release of VUnit is via `pip`. On most systems running the following command should do the trick:
```sh
pip install vunit_hdl
```
Make sure you use `vunit_hdl` and not `vunit`. The latter is a completely different Python library.

You can check that VUnit is installed correctly by for example running:
```sh
pip freeze
```
In the list of installed Python packages you will find a `vunit-hdl` entry and its version number.


# Using VUnit in Sigasi Studio

If you want to use VUnit in your VHDL testbenches. You need to add a library clause for the `vunit_lib` library. All necessary packages can be imported with the predefined `vunit_context` context.

A typical VUnit test bench file will have following entity declaration:
```vhdl
library vunit_lib;
context vunit_lib.vunit_context;

entity tb_example is
  generic (runner_cfg : string);
end entity;
```
*Note that the `context` clause is VHDL-2008 syntax. So, make sure your project is configured accordingly: Right click project, **Properties > VHDL Version > VHDL-2008**.*

When you enter this VHDL snippet in a VHDL file in a Sigasi Studio project, you will see a warning (*Library "vunit\_lib" is not available*) on the library clause and multiple errors because of references to missing declarations.
![vunit...](/img/tech/vunit/before.png)

To automatically add the VUnit library to your project, click the light bulb icon to trigger the Quick Fix (or press **Ctrl-F1** on the line with the warning).

![vunit...](/img/tech/vunit/quickfix.png)

As a result the `vunit_lib` is added to your project (Note that this also adds the `osvvm` library). Under the hood, Sigasi Studio runs a Python script to query VUnit for the correct paths to the VUnit VHDL source files.

![vunit...](/img/tech/vunit/after.png)

This also resolves the unresolved references to `test_runner_setup` and `test_runner_cleanup`. You can now easily navigate to their declaration with **F3** ("Open Declaration"). You can also use autocomplete to quickly add other VUnit function calls.

Happy coding.



