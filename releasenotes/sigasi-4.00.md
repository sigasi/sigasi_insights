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

[![Sigasi Studio XPRT license](/releasenotes/4.0/xprt.png "Sigasi Studio XPRT license")](/releasenotes/4.0/xprt.png)

- Dropped support for legacy Sigasi 2.0 licenses

**TODO** add note about perspectives (fall back : close all editors and reset perspective)

# Block Diagrams for (System)Verilog modules

[![Block Diagram View for SystemVerilog](/releasenotes/4.0/sv_block_diagram.png "Block Diagram View for SystemVerilog")](/releasenotes/4.0/sv_block_diagram.png)


[![Block Diagram Graphics Configuration for SystemVerilog](/releasenotes/4.0/sv_graphic_configuration.png "Block Diagram Graphics Configuration for SystemVerilog")](/releasenotes/4.0/sv_graphic_configuration.png)

* **Block Diagram** view for SystemVerilog modules
* \+ Graphics Configuration

# SystemVerilog State Machines

* **State Machine** view for enum-based statemachines in **SystemVerilog**.
[![State Machine View for SystemVerilog](/releasenotes/4.0/systemverilog_fsm.png)](/releasenotes/4.0/systemverilog_fsm.png)

* \+ Graphics Configuration

# SystemVerilog and Mixed Hierarchies in the Hierarchy View

- Hierarchy for System Verilog and Mixed

[![SystemVerilog and Mixed Hierarchies in the Hierarchy View](/releasenotes/4.0/mixed_hierarchy.png "SystemVerilog and Mixed Hierarchies in the Hierarchy View")](/releasenotes/4.0/mixed_hierarchy.png)

# More SystemVerilog improvements

- Autocomplete for preprocessor directives
[![Autocomplete for (System)Verilog preprocessor directives](/releasenotes/4.0/autocomplete_verilog_directives.png "Autocomplete for (System)Verilog preprocessor directives")](/releasenotes/4.0/autocomplete_verilog_directives.png)
- Report error markers for incorrect (System)Verilog preprocessor directives
[![Report errors in (System)Verilog preprocessor directives](/releasenotes/4.0/directive_errors.png "Report errors in (System)Verilog preprocessor directives")](/releasenotes/4.0/directive_errors.png)
- Improved Systemverilog scoping (show warnings with ...)
- Improved SV outline
- Autocomplete templates for SystemVerilog assertions
[![Autocomplete templates for SystemVerilog assertions](/releasenotes/4.0/assertion_templates.png "Autocomplete templates for SystemVerilog assertions")](/releasenotes/4.0/assertion_templates.png)
- Add wizard to import existing verilog project
[![Import wizard for existing (System)Verilog projects](/releasenotes/4.0/import_existing_systemverilog_project.png "Import wizard for existing (System)Verilog projects")](/releasenotes/4.0/import_existing_systemverilog_project.png)
- Improved handling of include files (formatting, outline ,...)
- Improved (System)Verilog preprocessor view: ...
[![(System)Verilog preprocessor view](/releasenotes/4.0/better_preprocessor_view.png "(System)Verilog preprocessor view")](/releasenotes/4.0/better_preprocessor_view.png)
- Improved performance for SystemVerilog autocomplete


# Other new and noteworthy improvements

- Update to Xtext 2.14
- Documentation: support alignment in tables
[![Alignment in tables](/releasenotes/4.0/alignment_in_tables.png "Alignment in tables")](/releasenotes/4.0/alignment_in_tables.png)
- Mixed: missing link from VHDL component declaration/instantiation to SV module declaration
- Component declaration autocomplete should copy comments

[![Entity comments in component (instantiation) hovers](/releasenotes/4.0/component_instantiation_hover.png "Entity comments in component (instantiation) hovers")](/releasenotes/4.0/component_instantiation_hover.png)



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


