---
title: "VUnit projects in Sigasi"
layout: page 
pager: true
author: Hendrik Eeckhaut
date: 2017-09-14
comments: true
bannerad: true
---

Since version 3.6, Sigasi Studio has a quickfix to automatically add the VUnit `vunit_lib` VHDL library to your project.

VUnit is an open source **unit testing framework for VHDL/SystemVerilog** that helps to write, and automatically run, tests. 
The VUnit project was started by Lars Asplund from [Synective Labs](http://www.synective.se) and its source code is hosted at [GitHub](https://github.com/VUnit/vunit).
VUnit automatically scans your projects for unit tests (aka test benches), runs your them with your favorite simulator and reports you the results.
This automation helps to run tests frequently and iterate faster.

The VUnit scripts are written in Python, so first make sure python is installed on your system. The recommended way to install the latest stable release of VUnit is via `pip`. On most system running `pip install vunit_hdl` should do the trick. Make sure you use `vunit_hdl` and not `vunit`. The latter is a completely different Python library.

# Using VUnit in Sigasi Studio

A typical VUnit test bench file will have following entity declaration:

```vhdl
library vunit_lib;
context vunit_lib.vunit_context;

entity tb_example is
  generic (runner_cfg : string);
end entity;
```
_Note that the `context` clause is VHDL-2008 syntax. So, make sure your project is configured accordingly: Right click project, **Properties > VHDL Version > VHDL-2008**._

When you enter this VHDL snippet in a VHDL file in a Sigasi Studio project, you will see a warning on the library clause:
![vunit...](/tech/vunit/before.png)

![vunit...](/tech/vunit/quickfix.png)

![vunit...](/tech/vunit/after.png)
