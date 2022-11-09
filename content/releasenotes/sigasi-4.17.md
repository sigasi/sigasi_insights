---
title: Sigasi Studio 4.17
date: 2022-09-16
lastmod: 2022-11-09
comments: true
pager: true
---

With the Sigasi Studio 4.17 release, we focus on the topic of Documentation Generation.

As always, there are many other improvements that enhance speed and usability to offer you a better experience. Read on to discover them all.

Also note, that we're deprecating the [Graphics Configuration]({{< ref "manual/graphics.md" >}}).  
If you're actively using the current implementation: we are interested in your current use-cases and/or insights. **[Talk to us](https://www.sigasi.com/support/)** to influence our future design choices.  

# Documentation improvements

## Documentation pagination

When your design grows, the generated documentation might become a bit unwieldy. To combat this issue, it's now possible to enable pagination by checking `Split pages by element count`.

{{< figure src="/img/releasenotes/4.17/SplitPages.png" link="/img/releasenotes/4.17/SplitPages.png" title="Enable HTML pagination">}}

The summary information about the design appears on the first page and fans out to subsequent pages that will contain the individual design elements' documentation.

{{< figure src="/img/releasenotes/4.17/SplitPageHtml.png" link="/img/releasenotes/4.17/SplitPageHtml.png" title="Paginated HTML">}}

## Introducing: problems

We've added two new sections: one for an _introduction_ and one for _problems_.

### Introduction

Adding an introduction to your design - in the form of a `sigasi-doc.md` file in the root directory of your project - will automatically include it in the exported documentation as an introductory chapter.  
As usual with our documentation, this is a [MarkDown]({{< ref "/manual/documentation.md#comment-markup-with-markdown" >}}) file. This allows you to easily annotate the text.

{{< figure src="/img/releasenotes/4.17/IntroductionText.png" link="/img/releasenotes/4.17/IntroductionText.png" title="Introduction section">}}

### Problems

Problems in Sigasi Studio are [always within reach]({{< ref "/manual/views.md#problems-view" >}}), but when generating documentation this overview is lost. To keep track of (and document) these problems, you can now include them by checking the `Include problem information`.  
Of course, you can choose whether you want to show only the errors and warnings or the infos as well. You can optionally include [suppressed warnings]({{< ref "/manual/linting.md#suppressing-warnings" >}}) as well.

{{< figure src="/img/releasenotes/4.17/EnableProblemsSection.png" link="/img/releasenotes/4.17/EnableProblemsSection.png" title="Enable problems section">}}

{{< figure src="/img/releasenotes/4.17/ProblemsDocumentation.png" link="/img/releasenotes/4.17/ProblemsDocumentation.png" title="Problems section">}}

## Small refinements

* Processes now show their associated comments
* TOC items now have an `li` prefix to make it easier to hide these entries e.g. when hiding block diagrams through the following CSS, the TOC entries are also hidden `div[id$=".blockDiagram"] { display: none; }`
* The content of extended identifiers is now sanitized (i.e. `\<html>\`) before inserting them into HTML
* Correctly use `td` instead of `th` where necessary
* The default value for uninitialized generics is now shown as _Unspecified_
* The documentation export is now faster since it runs with a higher priority
* Documentation generation now waits for running builds to finish. This ensures that the exported documentation is complete and correct
* The `Project files overview` diagram now correctly shows either the exported top level, or the entire project depending on your choice
* Design units are now generated in a stable order
* Unnamed, undocumented `process` statements, `initial`, `always`, and `final` blocks are now grouped together  
  {{< figure src="/img/releasenotes/4.17/GroupedProcesses.png" link="/img/releasenotes/4.17/GroupedProcesses.png" title="Grouped processes">}}  
* **[Verilog]** Added `initial`, `always`, and `final` blocks
* **[Verilog]** Improved documentation for vector types
* **[VHDL]** Added protected type instantiations
* **[VHDL]** Subprograms are now shown independent of where they're defined

Learn more about Documentation Generation in [the manual]({{< ref "/manual/documentation.md" >}}).

# New and Noteworthy Changes

* Removed outdated documentation from Eclipse's help pages
* It's now possible to disable the [automatic wrapping in quotes or parentheses of selected code]({{< ref "/manual/editor.md#add-parentheses-or-create-a-string" >}})  
  {{< figure src="/img/releasenotes/4.17/EncloseWithParenthesisOption.png" link="/img/releasenotes/4.17/EncloseWithParenthesisOption.png" title="Toggle quote enclosing">}}
* Fixed various typos and UI/UX inconsistencies
* **[VUnit]** `Run VUnit tests` now only shows up when there are VUnit tests in the selected file
* **[VHDL]** Added an autocomplete template for `(others => '0')`
* **[VHDL]** Added support for aliasing to enums
* **[VHDL]** Added a warning when assigning a string to an aggregate (`(s1, s2, s3) <= "abc";`)
* **[VHDL]** Added a warning when using an incorrect range to constrain vectors or their initial values (`constant a : std_logic_vector(-1 downto 0) := (-1 downto 0 => '1');`)
* **[Verilog]** Improved warning annotation for [multiple design units in the same file]({{< ref "manual/rules/verilog_style.md#file-contains-multiple-design-unit" >}}) on anonymous subprograms
* **[Verilog]** Improved error message when [Verible]({{< ref "/manual/editor.md#verilog-and-systemverilog-code-formatting" >}}) failed to format
* **[Verilog]** Added checker instantiation autocomplete in `checker` constructs
* **[Verilog]** Added instantiation autocomplete in more contexts
* **[Verilog]** Added the `Anywhere` context for custom autocomplete templates
* **[Verilog]** Added an error when invoking a macro with arguments but no name (``` `(x)```)
* **[Verilog]** Improved support for macro concatenations used as a macro argument

# Updates

* [JustJ](https://www.eclipse.org/justj/) (the JRE shipped with Sigasi Studio) has been updated to 17.0.4  
  **Note that you may run into the error dialog below, when you restart Sigasi Studio after the update** because the JRE has changed. If you close the dialog, and restart Sigasi Studio manually, everything should work as expected.
{{< figure src="/img/releasenotes/4.14/jre_update_error.png" link="/img/releasenotes/4.14/jre_update_error.png" title="Expected error after update. Restart will solve the issue." width="300">}}

# Bug fixes

* Added icons to the `Set Top Level` dialog
* Fixed error dialog when pressing `Delete` right before applying an autocomplete
* Fixed rare racy [CSV compile-order export]({{< ref "manual/tools.md#export" >}})
* The info, warning, error, and Quick Fix light bulb icons are now consistent
* Fixed rare error dialog during `Checking Sigasi license`
* Made the our styling of tree views (such as [Outline]({{< ref "manual/views.md#outline-view" >}}), [Hierarchy]({{< ref "manual/views.md#hierarchy-view" >}}), and [Open Design Unit]({{< ref "manual/editor.md#open-design-unit" >}})) more consistent
* Made sure all Sigasi features work flawlessly after opening a recently closed project
* Normalized the content of different type of design unit instantiations
* Leafs in the Hierarchy View are no longer expandable
* The filter for Open design unit (`Ctrl+Shift+D`) now correctly interprets `*` and `?` and always searches for substrings instead of exact matches
* **[VUnit]** All executed tests now always show up in the [VUnit View]({{< ref "manual/views.md#vunit-view" >}})
* **[VUnit]** The history of the VUnit View is now sorted in descending chronological order
* **[VUnit]** Added a checkbox in the history view to identify the current results
* **[VHDL]** Fixed rare case where hovers didn't show
* **[VHDL]** Fixed false-positive [Unused declaration]({{< ref "manual/rules/dead-code-lint.md" >}}) for records when only elements of the record are used
* **[VHDL]** VHDL keywords used in tool directives are no longer highlighted
* **[VHDL]** Fixed recognition of generic package instantiations
* **[VHDL]** Removed Quick Fix for adding a sensitivity list to empty processes
* **[VHDL]** Fixed empty Hierarchy View when a formal is added twice in an instantiation
* **[Verilog]** Instantiation autocomplete for design units using extended identifiers (`\ext$ended"` or `\My!dentifier\`) now works correctly
* **[Verilog]** Removed enclosing design unit for instantiation autocomplete
* **[Verilog]** Fixed crash in documentation export when empty ports are present
* **[Verilog]** Fixed empty [Class Hierarchy View]({{< ref "manual/views.md#class-hierarchy-view" >}}) when one of the classes in the hierarchy is unnamed
* **[Verilog]** Fixed highlighting of numbers
* **[Verilog]** Improved error marker range for incorrect preprocessor directives
* **[Verilog]** Fixed rare case where the [Preprocessor View]({{< ref "manual/views.md#preprocessor-view" >}}) shows incorrect contents when no editors are open
* A lot of other issues we could fix thanks to your Talkback reports

# System requirements

* Sigasi Studio standalone is supported on:
  * Windows: Windows 10 (64 bit) or newer
  * macOS 11.6 Big Sur or newer
  * Linux: RedHat Enterprise Linux RHEL 7.7 (64 bit) or newer
    * Sigasi Studio depends on `libXss.so` which can be obtained by installing `libXScrnSaver`
    * More information on supported OSes can be found [on the Eclipse website](https://www.eclipse.org/projects/project-plan.php?planurl=http://www.eclipse.org/eclipse/development/plans/eclipse_project_plan_4_18.xml#target_environments)
* Sigasi Studio as plugin in your own Eclipse installation:
  * Eclipse IDE 2021-03 up to and including Eclipse IDE 2022-03
  * Java JRE 11 or 17

We recommend at least **4GB of memory** available for Sigasi Studio,
and you need **about 1GB** of free disk space.

Thanks for all the [bug reports](mailto:support@sigasi.com) and enabling [Talkback]({{< ref "manual/talkback.md" >}}).

# Sigasi Studio 4.17.1 point release

On October 17 we released Sigasi Studio 4.17.1.
This release fixes the following reported issues:

* Graphical views not working in certain Eclipse flavors (e.g. JDT)
* Cannot import Quartus projects when certain Quartus vendor libraries are missing
* Cannot install the Sigasi Studio Plugin in Eclipse 2022-09 because of a dependency conflict
* Autocomplete template does not work when the template contains a plain dollar sign

# Sigasi Studio 4.17.2 point release

On November 9 we released Sigasi Studio 4.17.2.

This release improves the Sigasi Launcher for seamless use on multi-user systems.
It's no longer needed to [switch to the Eclipse Launcher]({{< ref "/manual/setup.md#running-sigasi-studio-with-multiple-users-on-the-same-server" >}}) or make any other additional configuration to make sure files can be opened from the command line into an existing session when working with multiple users on the same server.  
This also means it's no longer necessary to [open firewall port 4444]({{< ref "/manual/opening.md#opening-files-from-the-command-line" >}}).
The updated Launcher will choose a random free port.
