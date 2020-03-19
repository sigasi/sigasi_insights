---
title: Sigasi Studio 4.4
layout: page
pager: true
date: 2019-06-20
comments: true
---
We are proud to present the Sigasi Studio 4.4 release: Automatic project configuration, SystemVerilog Class Hierarchy View and more.

# "Auto-configure project" in VHDL project importer

The VHDL project importer now has an option "**Auto-configure project**" that makes Sigasi Studio automatically configure the VHDL library setup. Based on a quick analysis of the `library` clauses, `use` clauses, filenames, ... Sigasi Studio now automatically initializes the libraries of your VHDL files.

{{< figure src="/img/releasenotes/4.4/import_auto_configure.png" alt="Auto-configure project libraries during import" title="Auto-configure project libraries during import" link="/img/releasenotes/4.4/import_auto_configure.png" >}}

# Comment handling changes

Since [Sigasi Studio 3.8]({{< ref "/releasenotes/sigasi-3.08.md" >}}) Sigasi Studio processes all comments with a [Markdown processor](https://en.wikipedia.org/wiki/Markdown). In general this results in nicer hovers and documentation. However, there is one typical use case in (System)Verilog and VHDL code where this resulted in unwanted markup: In Markdown, lines with `=============` are used for titles; In HDL code they are used as a separators. For that reason we decided to strip these lines from the comments before calculating hovers or documentation.

{{< figure alt="No titles in comments" src="/img/releasenotes/4.4/comments_with_separators.png" title="No titles in comments" link="/img/releasenotes/4.4/comments_with_separators.png" >}}

We also changed the way we handle comments in the **header comment** naming convention check. In earlier versions of Sigasi we stripped the comment symbol (`--`) and leading whitespace from the text that was checked. Starting with [Sigasi Studio 4.4]({{< ref "/releasenotes/sigasi-4.04.md" >}}) the raw string of the header comment is checked to allow for very strict compliance checking.
Note that this means that when a new line is matched, users should use `\r?\n` or the newly introduced `\\R` to make sure the naming conventions work on all platforms. ([documentation]({{< ref "/manual/linting#check-header-comment" >}})).

# SystemVerilog Class Hierarchy View

We added a new **Class Hierarchy View** in Sigasi Studio that visualizes the class hierarchy of SystemVerilog classes. The Class Hierarchy View visualizes superclass and subclass relationships and also shows the class members. To open the Class Hierarchy for a certain
class, click the class name, right-click and select **Open Class in Hierarchy** (or press **F4**). ([documentation]({{< ref "/manual/views#class-hierarchy-view" >}}))

{{< youtube NYu2cFTwZ0Y >}}

# (System)Verilog performance improvements

We have put a lot of effort in making the SystemVerilog editor faster. 
Not all improvements made the deadline for this 4.4 release, so stay tuned.

# Other New and Noteworthy Changes

- Added support for a **Library** variable to launch configurations. This allows you to query the library of a resource when starting an external tool. ([documentation]({{< ref "/manual/tools#variables-in-arguments" >}}))
- Semantic highlighting for SystemVerilog classes  
{{< figure alt="Semantic highlighting for SystemVerilog classes" src="/img/releasenotes/4.4/sv_semantic_highlighting_classes.png" title="Semantic highlighting for SystemVerilog classes" link="/img/releasenotes/4.4/sv_semantic_highlighting_classes.png" >}}
- Improved hyperlinks in external compiler output in console: we now only highlight the actual path, and not the entire line  
{{< figure alt="Improved hyperlinks in the console view" src="/img/releasenotes/4.4/alint_pro_console_hyperlinks.png" title="Improved hyperlinks in the console view" link="/img/releasenotes/4.4/alint_pro_console_hyperlinks.png" >}}
- A better hover for SystemVerilog `interface` classes and constructors (`new`)
- Display VHDL **block**s in the Hierarchy View  
{{< figure alt="VHDL blocks in Hierarchy View" src="/img/releasenotes/4.4/osvvm_block_hierarchy.png" title="VHDL blocks in Hierarchy View" link="/img/releasenotes/4.4/osvvm_block_hierarchy.png" >}}
- SystemVerilog Classes are now shown in the outline
- Enable "**Show in > Block Diagram**" for ports in port maps of instantiations
- We now pass the VHDL version to GHDL when starting a simulation from the Hierarchy View
- Updated Xtext dependency to 2.17.1
- The stand-alone version of Sigasi Studio is now based on Eclipse 2019-03 (4.11) and is shipped with the OpenJDK Java virtual machine. The plugin version works on Eclipse 4.7.3a and newer (unchanged)


## Graphics and Documentation improvements

- \[PDF] Scale diagrams to always fit on the page and to not overlap with titles
- \[PDF] Removed unwanted spaces in front of underscores (on Windows)
- \[PDF] Better text placement in graphics (on windows)
- \[Graphics Configuration] Improved color palette

# Bugfixes

- \[VHDL2008] Linking error on record subtype indication
- \[VHDL] Show decimal value of bit string literals in hover
- \[VHDL] Take entity→architecture *dependency* into account when exporting (compilation order, graphics and documentation)
- \[VHDL] Sensitivity list quickfix is wrong for array of records
- \[(System)Verilog] Incorrect placement of errors and warnings in preprocessor view for incorrect macro invocations
- \[VHDL] Missing dependencies when the current *work* library refers to a library name different from *"work"*
- \[VHDL] Hierarchy View shows unresolved entity instantiation when no architecture specified in a multi-project setup
- \[(System)Verilog] Multiple, non ansi, port declarations should have the same type
- \[VHDL] Formatting issue in multi-line assignment (with comments)
- \[Block Diagram] Error when left clicking on a wire (when nothing else is selected)
- \[VHDL2008] Incorrect error marker on unary operator without parentheses
- \[(System)Verilog] Incorrect error marker when defining an external constraint
- \[(System)Verilog] Incorrect error marker on `solve`
- \[VHDL2008\] linking issue in a generic package with generic types and generic access type
- \[VUnit] Add support for release candidate versions
- \[VHDL] Quickfix for missing generic map modifies wrong instantiation with certain comments
- \[VHDL] Sort Associations quickfix should not put an end bracket in the trailing comment
- \[VHDL] Report error marker for `entity` instantiations with a missing `entity` keyword
- \[VHDL] Quickfix for sensitivity list when list is empty (`()`)
- \[(System)Verilog] Rename refactoring breaks the Preprocessor View
- \[VUnit] Running VUnit commands should never block the UI
- License change from {{< xl >}} to {{< xprt >}} should not trigger clean build

+ A lot of other issues we could fix thanks to your Talkback reports

# System requirements

* Sigasi Studio Standalone is supported on:
    * Windows: Windows 10 (64 bit) or newer
    * macOS 10.14 Mojave
    * Linux: RedHat Enterprise Linux RHEL 7.5 (64 bit) or newer
    * More information on supported OSes can be found [on the Eclipse website](https://www.eclipse.org/projects/project-plan.php?planurl=http://www.eclipse.org/eclipse/development/plans/eclipse_project_plan_4_10.xml#target_environments)
* Sigasi Studio as Plugin in your own Eclipse installation:
    * Eclipse 4.7.3a *Oxygen* up to Eclipse IDE 2019-03
    * Java JRE 8 or higher  

We recommend at least **2GB of memory**, and you need **about 300MB** of free disk space.

Thanks for all the bug reports and enabling Talkback.
