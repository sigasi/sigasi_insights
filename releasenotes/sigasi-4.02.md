---
title: Sigasi Studio 4.2
layout: page
pager: true
date: 2018-12-11
comments: true
---
Sigasi Studio 4.2 brings a lot of extra SystemVerilog and VHDL linting and code checks. The Sigasi team also made it easier to configure linting rules per project. On top of that, Sigasi Studio 4.2 now has type time support for suppressing specific warnings.

Read below for more new and noteworthy changes and bug fixes.

# More linting and code checks

## New (System)Verilog checks

* Warn for usage of `reg` instead of `logic` (with QuickFix)  
[![Warn for usage of `reg` instead of `logic` (with QuickFix)](/releasenotes/4.2/systemverilog_linting_reglogic.png "Warn for usage of `reg` instead of `logic` (with QuickFix)")](/releasenotes/4.2/systemverilog_linting_reglogic.png)
* Warn when using compiler directives as macro names  
[![Warn when using compiler directives as macro names](/releasenotes/4.2/systemverilog_linting_macronames.png "Warn when using compiler directives as macro names")](/releasenotes/4.2/systemverilog_linting_macronames.png)
* Check for `packed` keyword in packed structs and unions  
[![Check for `packed` keyword in packed structs and unions](/releasenotes/4.2/systemverilog_linting_packed.png "Check for `packed` keyword in packed structs and unions")](/releasenotes/4.2/systemverilog_linting_packed.png)
* Check for mix positional and named port connections in instantiations  
[![Check for mix positional and named port connections in instantiations](/releasenotes/4.2/systemverilog_linting_mixedports.png "Check for mix positional and named port connections in instantiations")](/releasenotes/4.2/systemverilog_linting_mixedports.png)
* `reg` keyword is not allowed directly after a `net` type  
[![`reg` keyword is not allowed directly after a `net` type](/releasenotes/4.2/systemverilog_linting_reg.png "`reg` keyword is not allowed directly after a `net` type")](/releasenotes/4.2/systemverilog_linting_reg.png)
* Warn when using VHDL keywords as identifiers for (System)Verilog declarations  
[![Warn when using VHDL keywords as identifiers for (System)Verilog declarations](/releasenotes/4.2/systemverilog_linting_vhdl_keywords.png "Warn when using VHDL keywords as identifiers for (System)Verilog declarations")](/releasenotes/4.2/systemverilog_linting_vhdl_keywords.png)

## New VHDL checks

* Warn when (System)Verilog keywords are used as VHDL identifiers  
[![Warn when (System)Verilog keywords are used as VHDL identifiers](/releasenotes/4.2/vhdl_linting_verilog_keyword.png "Warn when (System)Verilog keywords are used as VHDL identifiers")](/releasenotes/4.2/vhdl_linting_verilog_keyword.png)
* Flag VHDL 87 file declarations as error  
[![Flag VHDL 87 file declarations as error](/releasenotes/4.2/vhdl_file87.png "Flag VHDL 87 file declarations as error")](/releasenotes/4.2/vhdl_file87.png)
* Warn on empty loops  
[![ Warn on empty loops](/releasenotes/4.2/vhdl_empty_loops.png " Warn on empty loops")](/releasenotes/4.2/vhdl_empty_loops.png)

# Suppress warnings

Type time MarkerManager (@suppress)
[![Suppress warnings](/releasenotes/4.2/suppress_a.png "Suppress warnings")](/releasenotes/4.2/suppress_a.png)


# Configure linting severity per project \[VHDL]

Support upgrading project specific validation preferences
Add UI to set project specific Validation settings (errors/warning)

[![Text](/releasenotes/4.2/korean_in_documentation.png "Text")](/releasenotes/4.2/korean_in_documentation.png)
[![Text](/releasenotes/4.2/linting_severity_per_project.png "Text")](/releasenotes/4.2/linting_severity_per_project.png)

[![Text](/releasenotes/4.2/systemverilog_linting_settings.png "Text")](/releasenotes/4.2/systemverilog_linting_settings.png)
[![Text](/releasenotes/4.2/vhdl_component_port_link_verilog.png "Text")](/releasenotes/4.2/vhdl_component_port_link_verilog.png)

[![Text](/releasenotes/4.2/vhdl_hover_show_datatype.png "Text")](/releasenotes/4.2/vhdl_hover_show_datatype.png)
# Other New and Noteworthy Changes

* \[VHDL2008] Support defaults in function generics
* \[Mixed] Add link from (VHDL) component ports to (System)Verilog module ports
* Support Chinese, Japanese and Korean characters missing in documentation export (PDF)
* Apply dark theme on new Console View
* \[Verilog] Disabled .v extension interpretation for .sv files
* Block diagram export should not use dark theme when the darkt theme is enabled
* Updated Sigasi Studio Standalone version to [Eclipse 2018-09](https://www.eclipse.org/eclipse/news/4.9/)
* Update to Xtext dependency to 2.15
* Dropped support for Eclipse 4.5
* \[VHDL] Better hovers for signals: also show type declaration
* \[VHDL] Better hovers for component instantiations
* Better VUnit integration (requires [VUnit version 4.0](https://vunit.github.io/cli.html#json-export))

# Bug Fixes

* `specify` blocks have an unexpected formatting
* Removed empty entries in (System)Verilog outline
* Fixed invalid errors on SystemVerilog sequences
* Fixed error in rename refactoring
* Fixed error in in SystemVerilog template editor
* Fixed Sigasi Studio freeze when license server disconnects
* Fixed error with grouped ports in custom block diagram configurations
* Fixed VUnit and GHDL preferences resetting on restart
* Fixed problem with temporary files in documentation generation
* Fixed problem with empty empty markdown lists in documentation generation
* Updating Sigasi Studio should not reset update sites configuration
* Block diagram export should not highlight selected items
* Fixed incorrect dead code warning
* Correctly handle comments in sort associations quick fix
* Fixed incorrect hierarchy for vector constant value
* Do not check out a Sigasi license when starting Sigasi as Eclipse plugin on a new workspace
* Fixed warning for components when ports in the entity are declared on the same line but the components are on separate lines

# How to update?

If you have Sigasi Studio 4 installed, you can [update][/manual/setup#Software Updates] or [download a fresh install of the latest version][download_latest].