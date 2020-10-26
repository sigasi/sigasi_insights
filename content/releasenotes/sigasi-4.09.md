---
title: Sigasi Studio 4.9
date: 2020-09-17
comments: true
pager: true
---

Sigasi Studio 4.9 brings another set of improvements.
Our **speed, memory and caching performance** got better, and we have implemented new **VHDL** and **(System)Verilog** improvements.
And one more thing ... a lot of new **(System)Verilog** linting checks.

Read on for more details and other improvements.

# VHDL improvements 

We improved **autocomplete for function and procedure arguments**. When autocompleting a function or procedure Sigasi Studio now presents the complete list of arguments. 

{{< figure src="/img/releasenotes/4.9/autocomplete_args.png" title="Autocomplete function or procedure">}}

The quickfix for **Add Declaration**, **Add All Declarations** was improved. When the quickfix is applied, the editor scrolls to the new declaration and the data type is selected.  
If this quickfix is triggered from the **Problems View**, multiple fixes can be selected. A subsequent undo, will undo all changes in a single step.

{{< figure src="/img/releasenotes/4.9/declare_all.png" title="Add All Declarations">}}

When you type a `use` clause for a `package`, but you did not declare the `library` yet: Sigasi Studio now offers a quickfix to add the `library` declaration automatically.

{{< figure src="/img/releasenotes/4.9/library_quickfix.png" title="Library quickfix">}}


# (System)Verilog improvements

The biggest improvement in this release is the addition of many new (System)Verilog linting checks. This will surely help you save time on typical coding mistakes, especially if you have to follow strict coding guidelines and naming conventions.

In addition to the new linting checks Sigasi Studio 4.9 has following (System)Verilog improvements:

* Multiple SystemVerilog parser improvements and refinements
* Support `` `include`` paths with angle brackets (`<filename>`)
* Properly display UDP items in hovers
* Respect `` `default_nettype`` directive in unspecified `net` type of ANSI ports
{{< figure src="/img/releasenotes/4.9/default_nettype.png" title="`default_nettype">}}
* Better support for SystemVerilog `bind` feature

## (System)Verilog linting checks

Sigasi Studio 4.9 introduces a long list of new [linting checks for Verilog and SystemVerilog]({{< ref "../../manual/linting-verilog/" >}}).

#### Syntax checks

A syntax error is reported for:
- a mix of named and positional [port connections]({{< ref "../../manual/rules/verilog_associations/#named-and-positional-associations-cannot-be-mixed" >}}) or [parameter overrides]({{< ref "../../manual/rules/verilog_associations/#named-and-positional-associations-cannot-be-mixed" >}})
- an empty parameter port list
- default values on ports where defaults are not allowed
- [instance ports that are connected more than once]({{< ref "../../manual/rules/verilog_associations/#duplicate-port-and-parameter-connections" >}})
{{< figure src="/img/releasenotes/4.9/svval_duplicateport.png" title="Duplicate port mapping">}} 
- [too many instance port connections when ordered connections are used]({{< ref "../../manual/rules/verilog_associations/#excessive-number-of-actuals-in-ordered-notation" >}})
- packed structs and unions without the `packed` keyword
- [multiple default members in an assignment]({{< ref "../../manual/rules/verilog_assignments/#only-one-default-member-expression-is-allowed" >}})
- incomplete `for` loops
- incorrect use of semicolon
- empty assignments of ordered parameters


#### Case statement checks

A warning or error is reported for a case statement

- [that does not cover all cases (likely mistake)]({{< ref "../../manual/rules/verilog_case/#case-statement-does-not-cover-all-cases" >}})
- [with multiple `default` clauses (only one is allowed)]({{< ref "../../manual/rules/verilog_case/#case-statement-can-only-have-one-default-clause" >}})
- [where the `default` clause is not the last item (recommended)]({{< ref "../../manual/rules/verilog_case/#default-clause-has-to-be-the-last-item-in-a-case-statement" >}})
- [without a `default` clause (recommended to have one)]({{< ref "../../manual/rules/verilog_case/#default-clause-missing-from-case-statement" >}})

{{< figure src="/img/releasenotes/4.9/svval_case_final.png" title="Case statement validation">}} 

#### Array and union assignment checks
Sigasi Studio checks for the following mistakes and recommendations:

- [The `default` member of an assignment pattern must be the last item]({{< ref "../../manual/rules/verilog_assignments/#default-member-must-be-last" >}})
- [A type key in assignment pattern is being overwritten]({{< ref "../../manual/rules/verilog_assignments/#overwritten-type-key-in-assignment-pattern" >}})
- [Mixed named and ordered notation was used in an assignment pattern]({{< ref "../../manual/rules/verilog_assignments/#mixed-named-and-ordered-notation-in-assignment-pattern" >}})
- [A member key is present more than once in a structure assignment pattern]({{< ref "../../manual/rules/verilog_assignments/#duplicate-member-key-in-structure-assignment-pattern" >}})
{{< figure src="/img/releasenotes/4.9/svval_assign_final.png" title="Assignment pattern validation">}}

#### Port and parameter checks
An error or warning is flagged if

- [a parameter or port is not found within the instantiated unit]({{< ref "../../manual/rules/verilog_associations/#unresolved-formal-names" >}})
{{< figure src="/img/releasenotes/4.9/svval_portnotfound.png" title="Nonexistent instance port check">}} 
- [a parameter or port, which does not have a default value, is missing in an instantiation]({{< ref "../../manual/rules/verilog_associations/#missing-actuals-for-formals-that-have-no-default-value" >}})
{{< figure src="/img/releasenotes/4.9/svval_missingport.png" title="Missing instance port check">}} 

#### Miscellaneous checks
Sigasi Studio reports code where

- [event control is not present at the top of an `always` construct (not synthesizable)]({{< ref "../../manual/rules/verilog_process/" >}})
- [non-blocking assignments are used in functions (semantic error)]({{< ref "../../manual/rules/verilog_function/#non-blocking-assignments-are-not-allowed-in-functions" >}})
- [a register is initialized where it is declared (the initialization may not be synthesizable)]({{< ref "../../manual/rules/verilog_init/" >}})


#### Code style checks

Sigasi Studio checks for a number of recommendations and guidelines that make (System)Verilog easier to understand and maintain. A warning or info marker is placed if the code does not comply with these rules. Note that some of these rules are set to *ignore* by default to avoid an excessive number of warnings in legacy code. If you want to enable these rules you can do so in **Window > Preferences > Sigasi > (System)Verilog > Errors/Warnings**.
Sigasi Studio optionally checks for these rules:

- [The file name matches the design unit (e.g. module)]({{< ref "../../manual/rules/verilog_style/#file-name-does-not-match-design-unit" >}})
- [A file contains only one design unit]({{< ref "../../manual/rules/verilog_style/#file-contains-multiple-design-unit" >}})
- [Code lines are kept short (default 120 characters, so each line fits on the screen: easier to read)]({{< ref "../../manual/rules/verilog_style/#verilog-code-line-too-long" >}})
- [Spaces are used for indentation (so the code looks the same regardless of tab settings)]({{< ref "../../manual/rules/verilog_style/#tabs-are-not-allowed" >}})
- [In each file, a header comment is present and matches a certain pattern (e.g. with the company name and copyright statement)]({{< ref "../../manual/rules/verilog_style/#file-header-comment-does-not-match-required-pattern" >}})
- [Named port connections are used for all instances with many ports (default for 3+ ports)]({{< ref "../../manual/rules/verilog_associations/#named-parameter-and-port-connections-have-to-be-used-for-all-instances-with-many-parameters--ports" >}})
- [Named parameter overrides are used for all instantiations with many parameters (default for 3+ parameters)]({{< ref "../../manual/rules/verilog_associations/#named-parameter-and-port-connections-have-to-be-used-for-all-instances-with-many-parameters--ports" >}})
- [Unit and port identifiers don't contain successive or trailing underscores]({{< ref "../../manual/rules/verilog_identifiers/#underscores-in-identifier-names" >}})
- [A function prototype has an explicit return type]({{< ref "../../manual/rules/verilog_function/#function-prototype-has-implicit-return-type" >}})
- [Function and task ports have an explicit direction]({{< ref "../../manual/rules/verilog_input/" >}})
- [Parameters have a default value]({{< ref "../../manual/rules/verilog_parameters" >}})

# Other New and Noteworthy Changes

* Sigasi Studio can now run on **Java 11**
* The included Java Runtime Environment (JRE) in the stand alone version of Sigasi Studio was updated to Java 11. Note that the JRE is not updated with the update mechanism. If you want want to update the JRE, we recommend a new download.
* Improved layouting in graphical views
* We updated Eclipse in the standalone version to Eclipse [2020-06](https://www.eclipse.org/eclipseide/2020-06/noteworthy/)
* Updated the Xtext dependency to 2.22.0
* Better editor message when a browser view can not be loaded
* Removed the Sigasi Solarized themes
* Improved logging of system variables to help troubleshoot issues caused by third-party tool setup scripts.
* Improved the priorities of quick fixes. The **Suppress** quickfix is now presented as the last option.  
{{< figure src="/img/releasenotes/4.9/quickfix_ordering.png" title="Quick fix ordering">}}
* Tweaked subword selection for the `snake_case` naming convention. This makes editing identifiers easier in Sigasi Studio. We have made a [screencast]({{< ref "/screencasts/snake_case.md" >}}) to demonstrate this.
* The Sigasi Studio Talkback server address was changed from `https://sigasi-talkback.appspot.com` to `https://talkback-sigasi.sigasi.com`. The option to enable unencrypted talkback was dropped.

# Bug fixes

* Sigasi Studio hangs when projects properties are changed while it is analyzing the project
* \[(System)Verilog] Preprocessor: fixed issue with multi line string concatenation
* \[VHDL] Allow to set VHDL version number when properties dialog is opened from an editor
* \[(System)Verilog] Avoid duplicate design units in documentation export for (System)Verilog projects
* Plugin installation in Eclipse 2020-06 C/C++
* Wrong indentation in component quickfix
* **Open design unit** does not jump to declaration
* \[(System)Verilog] Unexpected autocomplete suggestions in preprocessor directives
* \[(System)Verilog] Ansi port connection is linked to wrong declaration

+ A lot of other issues we could fix thanks to your Talkback reports

# Startup time on Windows

If you experience long start-up delays on Windows 10, excluding the installation folder from the Microsoft Defender Antivirus scan might improve the start-up time.
This is not specific for Sigasi Studio but affects all [Eclipse installations](https://bugs.eclipse.org/bugs/show_bug.cgi?id=548443).

Instructions on excluding the installation folder are available in [this Microsoft support article](https://support.microsoft.com/en-us/help/4028485/windows-10-add-an-exclusion-to-windows-security).

# System requirements

* Sigasi Studio Standalone is supported on:
    * Windows: Windows 10 (64 bit) or newer
    * macOS 10.15 Catilina
    * Linux: RedHat Enterprise Linux RHEL 7.7 (64 bit) or newer
    * More information on supported OSes can be found [on the Eclipse website](https://www.eclipse.org/projects/project-plan.php?planurl=http://www.eclipse.org/eclipse/development/plans/eclipse_project_plan_4_10.xml#target_environments)
* Sigasi Studio as Plugin in your own Eclipse installation:
    * Eclipse 4.7.3a *Oxygen* up to Eclipse IDE 2020-06
    * Java JRE 8, 11 or 14

We recommend at least **4GB of memory** available for Sigasi Studio,
and you need **about 300MB** of free disk space.

Thanks for all the bug reports and enabling Talkback.
