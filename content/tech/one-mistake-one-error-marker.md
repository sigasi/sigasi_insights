---
title: "One mistake, one error marker"
layout: page 
pager: true
author: Philippe Faes
date: 2012-09-21
tags: 
  - recovering parser
  - VHDL
  - compiler
comments: true
bannerad: true
---

Ideally, if you make one mistake in VHDL, you want your compiler to show one error marker. Here is a small example.

For this single mistake, Sigasi flags one error marker:
![For this single mistake, Sigasi flags one error marker](/img/tech/recovering-vhdl-parser.png)


A traditional VHDL compiler gives eight (!) errors. You have to read through 14 lines of compiler output and put up with seven irrelevant error messages. This consumes mental energy, and you need all of you mental energy to tackle the complex design problems that you are dealing with.
```
$ vcom -work work -93 /media/psf/Home/workspaceSigasi/recovering_parser_demo/dut.vhd
Model Technology ModelSim ALTERA vcom 10.0c Compiler 2011.09 Sep 21 2011
-- Loading package STANDARD
-- Loading package TEXTIO
-- Loading package std_logic_1164
-- Compiling entity dut
-- Compiling architecture RTL of dut
** Error: /media/psf/Home/workspaceSigasi/recovering_parser_demo/dut.vhd(16): (vcom-1136) Unknown identifier "intiger".
** Error: /media/psf/Home/workspaceSigasi/recovering_parser_demo/dut.vhd(16): Integer literal 5 is not of type (error).
** Error: /media/psf/Home/workspaceSigasi/recovering_parser_demo/dut.vhd(17): (vcom-1079) Range left bound type Integer is not the same as right bound type (error).
** Error: /media/psf/Home/workspaceSigasi/recovering_parser_demo/dut.vhd(22): No feasible entries for infix operator "=".
** Error: /media/psf/Home/workspaceSigasi/recovering_parser_demo/dut.vhd(22): Type error resolving infix expression "=" as type std.STANDARD.BOOLEAN.
** Error: /media/psf/Home/workspaceSigasi/recovering_parser_demo/dut.vhd(38): No feasible entries for infix operator "<".
** Error: /media/psf/Home/workspaceSigasi/recovering_parser_demo/dut.vhd(38): Type error resolving infix expression "<" as type std.STANDARD.BOOLEAN.
** Error: /media/psf/Home/workspaceSigasi/recovering_parser_demo/dut.vhd(43): VHDL Compiler exiting
```
