---
title: Sigasi Studio 4.0
layout: page
pager: true
date: 2018-06-20
comments: true
---
Sigasi Studio 4.0 ...
Read below to find more new and noteworthy changes.

# Sigasi Studio 4.0

- XL_DOC -> XPRT
- Dropped support for legacy Sigasi 2.0 licenses

**TODO** add note about perspectives (fall back : close all editors and reset perspective)

# SystemVerilog Block Diagrams

* **Block Diagram** view for SystemVerilog modules
* \+ Graphics Configuration

# SystemVerilog State Machines

* **State Machine** view for enum-based statemachines in **SystemVerilog**.
[![State Machine View for SystemVerilog](/releasenotes/4.0/systemverilog_fsm.png)](/releasenotes/4.0/systemverilog_fsm.png)

* \+ Graphics Configuration

# SystemVerilog and Mixed Hierarchies in the Hierarchy View

- Hierarchy for System Verilog and Mixed

# More SystemVerilog improvements

- Autocomplete for preprocessor directives
- Show error markers for incorrect Verilog preprocessor directives
- Improved Systemverilog scoping (show warnings with ...)
- Improved SV outline
- SystemVerilog assertion templates
- Add wizard to import existing verilog project
- Improved handling of include files (formatting, outline ,...)
- Improved SV preprocessor view
- Improved performance for SystemVerilog autocomplete

# Other new and noteworthy improvements

- Update to Xtext 2.14
- Documentation: support alignment in tables
- Mixed: missing link from VHDL component declaration/instantiation to SV module declaration
- Component declaration autocomplete should copy comments

# Bug fixes

- ticket 4292 : \[VHDL] `others` in VHDL FSM breaks graphics configuration
- ticket 4237 : \[Mixed] Broken PDF (DocBook xml) for "<=" and "------------------" in comments
- ticket 4318 : \[Mixed] Component declaration generation for modules should use `std_logic_vector` for vector types
- ticket 4317 : \[SystemVerilog] Unexpected formatting
- ticket 4301 : \[SystemVerilog] Parser error with ` `{}`
- ticket 4296 : \[SystemVerilog] `SVH`-files are treated as Verilog files instead of SystemVerilog (when they are not included)
- ticket 4240 : \[SystemVerilog] Parser error with missing arguments in `$width`
- ticket 4238 : \[SystemVerilog] Formatter should indent clocking blocks
- ticket 4151 : \[SystemVerilog] Pre-processor definitions in project properties have no visible effect
- ticket 4152 : \[SystemVerilog] New type is not available in the editor until editor is closed and reopened

# How to update?

If you have Sigasi Studio 3 installed, you can [update][/manual/setup#Software Updates] or [download a fresh install of the latest version][download_latest].


