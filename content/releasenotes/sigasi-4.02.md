---
title: Sigasi Studio 4.2
layout: page
pager: true
date: 2018-12-12
comments: true
---
Sigasi Studio 4.2 brings a lot of extra SystemVerilog and VHDL linting and code checks. The Sigasi team also made it easier to configure linting rules per project. On top of that, Sigasi Studio 4.2 now has type time support for suppressing specific warnings.

Read below for more new and noteworthy changes and bug fixes.

# More linting and code checks

New (System)Verilog checks:

* Warn for usage of `reg` instead of `logic` (with QuickFix)  
{{< figure src="/img/releasenotes/4.2/systemverilog_linting_reglogic.png" alt="Warn for usage of `reg` instead of `logic` (with QuickFix)" title="Warn for usage of `reg` instead of `logic` (with QuickFix)" link="/img/releasenotes/4.2/systemverilog_linting_reglogic.png" >}}
* Warn when using compiler directives as macro names  
{{< figure src="/img/releasenotes/4.2/systemverilog_linting_macronames.png" alt="Warn when using compiler directives as macro names" title="Warn when using compiler directives as macro names" link="/img/releasenotes/4.2/systemverilog_linting_macronames.png" >}}
* Check for `packed` keyword in packed structs and unions  
{{< figure src="/img/releasenotes/4.2/systemverilog_linting_packed.png" alt="Check for `packed` keyword in packed structs and unions" title="Check for `packed` keyword in packed structs and unions" link="/img/releasenotes/4.2/systemverilog_linting_packed.png" >}}
* Check for mixed positional and named port connections in instantiations  
{{< figure src="/img/releasenotes/4.2/systemverilog_linting_mixedports.png" alt="Check for mixed positional and named port connections in instantiations" title="Check for mixed positional and named port connections in instantiations" link="/img/releasenotes/4.2/systemverilog_linting_mixedports.png" >}}
* `reg` keyword is not allowed directly after a `net` type  
{{< figure src="/img/releasenotes/4.2/systemverilog_linting_reg.png" alt="`reg` keyword is not allowed directly after a `net` type" title="`reg` keyword is not allowed directly after a `net` type" link="/img/releasenotes/4.2/systemverilog_linting_reg.png" >}}
* Warn when using VHDL keywords as identifiers for (System)Verilog declarations  
{{< figure src="/img/releasenotes/4.2/systemverilog_linting_vhdl_keywords.png" alt="Warn when using VHDL keywords as identifiers for (System)Verilog declarations" title="Warn when using VHDL keywords as identifiers for (System)Verilog declarations" link="/img/releasenotes/4.2/systemverilog_linting_vhdl_keywords.png" >}}

The severity of the (non-syntax) checks can be configured in **Window > Preferences > Sigasi > (System)Verilog > Errors/warnings**  
{{< figure src="/img/releasenotes/4.2/systemverilog_linting_settings.png" alt="Configure severity" title="Configure severity" link="/img/releasenotes/4.2/systemverilog_linting_settings.png" >}}

New VHDL checks:

* Warn when (System)Verilog keywords are used as VHDL identifiers  
{{< figure src="/img/releasenotes/4.2/vhdl_linting_verilog_keyword.png" alt="Warn when (System)Verilog keywords are used as VHDL identifiers" title="Warn when (System)Verilog keywords are used as VHDL identifiers" link="/img/releasenotes/4.2/vhdl_linting_verilog_keyword.png" >}}
* Flag VHDL 87 file declarations as error  
{{< figure src="/img/releasenotes/4.2/vhdl_file87.png" alt="Flag VHDL 87 file declarations as error" title="Flag VHDL 87 file declarations as error" link="/img/releasenotes/4.2/vhdl_file87.png" >}}
* Warn on empty loops  
{{< figure src="/img/releasenotes/4.2/vhdl_empty_loops.png" alt=" Warn on empty loops" title=" Warn on empty loops" link="/img/releasenotes/4.2/vhdl_empty_loops.png" >}}

# Suppress warnings

In earlier versions of Sigasi Studio you could suppress (also known as *waive*) warnings via the *MarkerManager* plugin. In Sigasi Studio 4.2 we refined this feature and now give type time feedback on suppressed markers. ([documentation](/manual/linting#suppressing-warnings))

{{< figure src="/img/releasenotes/4.2/suppress_a.png" alt="Suppress warnings" title="Suppress warnings" link="/img/releasenotes/4.2/suppress_a.png" >}}

Check [this video](/screencasts/suppress) for an introduction to suppressing warnings in Sigasi Studio.

# Configure linting severity per project \[VHDL]

Sigasi Studio 4.2 presents a new Property Page that makes it easier to configure linting settings per project (or per file or folder).
Right click a project, folder or file and select **Properties > VHDL Errors/Warnings**. The settings are stored in the `.settings` folder in your project. ([documentation](/manual/linting#project-specific-linting-settings))


{{< figure src="/img/releasenotes/4.2/linting_severity_per_project.png" alt="Configure linting severity per project" title="Configure linting severity per project" link="/img/releasenotes/4.2/linting_severity_per_project.png" >}}


# Other New and Noteworthy Changes

* (System)Verilog build performance enhancements
* \[VHDL2008] Support defaults in **function generics**
* \[Mixed] Add link from (VHDL) component ports to (System)Verilog module ports
{{< figure src="/img/releasenotes/4.2/vhdl_component_port_link_verilog.png" alt="Text" title="Text" link="/img/releasenotes/4.2/vhdl_component_port_link_verilog.png" >}}
* Support for Chinese, Japanese and Korean characters in documentation export (PDF)
{{< figure src="/img/releasenotes/4.2/korean_in_documentation.png" alt="Text" title="Text" link="/img/releasenotes/4.2/korean_in_documentation.png" >}}
* Apply dark theme on new Console View
* \[Verilog] Disabled `.v` extension interpretation for `.sv` files. `.sv` files are always processed as SystemVerilog.
* Block diagram export should not use dark theme when the dark theme is enabled
* Updated Sigasi Studio Standalone version to [Eclipse 2018-09](https://www.eclipse.org/eclipse/news/4.9/)
* Update to Xtext dependency to 2.15
* \[VHDL] Better hovers for signals: also show type declaration
{{< figure src="/img/releasenotes/4.2/vhdl_hover_show_datatype.png" alt="Text" title="Text" link="/img/releasenotes/4.2/vhdl_hover_show_datatype.png" >}}
* \[VHDL] Better hovers for component instantiations
* Better VUnit integration (requires [VUnit version 4.0](https://vunit.github.io/cli.html#json-export))

# Bug Fixes

* `specify` blocks had an unexpected formatting
* Removed empty entries in (System)Verilog outline
* Fixed invalid errors on SystemVerilog sequences
* Fixed error in rename refactoring
* Fixed error in in SystemVerilog template editor
* Fixed Sigasi Studio freeze when license server disconnects
* Fixed error with grouped ports in custom block diagram configurations
* Fixed VUnit and GHDL preferences resetting on restart
* Fixed problem with temporary files in documentation generation
* Fixed problem with empty markdown lists in documentation generation
* Updating Sigasi Studio should not reset update sites configuration
* Block diagram export should not highlight selected items
* Fixed incorrect dead code warning
* Correctly handle comments in sort associations quick fix
* Fixed incorrect hierarchy for vector constant value
* Do not check out a Sigasi license when starting Sigasi as Eclipse plugin on a new workspace
* Fixed warning for components when ports in the entity are declared on the same line but the components are on separate lines

# How to update?

If you have Sigasi Studio 4 installed, you can [update](/manual/setup#software-updates) or {{< download_latest >}} for a fresh install.
