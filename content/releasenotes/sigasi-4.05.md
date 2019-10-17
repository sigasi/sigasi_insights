---
title: Sigasi Studio 4.5
layout: page
pager: true
date: 2019-09-19
comments: true
---
Productivity cannot improve without speed. So we are proud to present the Sigasi Studio 4.5 release, where Sigasi Studio’s editor became **a lot faster**, as in up to 3 times faster. We also added **HTML documentation**, a lot of new **lintings**, and more.

# Faster Editor

We have put a lot of effort in improving the speed of Sigasi Studio’s editor for Verilog, SystemVerilog and VHDL. We have redesigned Sigasi's engine for the editor to run more tasks in the background. This prevents you from blocking the user interface, even when you are editing big source files. If you are working with `UVM`, the difference will be very noticeable. For projects with lots of `` `include`` files, Sigasi Studio is now even **3 times faster**.

# HTML documentation export

{{< figure src="/img/releasenotes/4.5/export-html.png" alt="Export documentation as HTML" title="Export documentation as HTML" link="/img/releasenotes/4.5/export-html.png" width="300" class="uk-align-right" >}}

We implemented a **new documentation engine** in Sigasi Studio. This new engine produces **HTML** straight from your HDL sources. This is much **faster** and **simpler** than the previous "[DocBook based flow]({{< ref "/tech/generate-vhdl-documentation-sigasi" >}})". The DocBook based flow was too complicated and too difficult to customize.
The new HTML output is a lot easier to share and customize (for example with Microsoft Word).

Sigasi Studio offers two versions of html output:

  * HTML with embedded diagrams: the result is saved in one self-contained html file. This file is very easy to share.
  * HTML with linked diagrams: the diagram files are saved in separate files. This makes it easier to customize the documentation

{{% youtube 1jcs-DwAQc4 %}}

# More lintings

**New (System)Verilog lintings**:

  * Check `packed struct`, `packed union` and `untagged union` {{< figure src="/img/releasenotes/4.5/packed-structs.png" alt="Check packed structs, packed unions and untagged unions" title="Check packed structs, packed unions and untagged unions" link="/img/releasenotes/4.5/packed-structs.png" width="500" >}}
  * Check for missing `case` items in SystemVerilog `case` statements {{< figure src="/img/releasenotes/4.5/sv-casestatements.png" alt="Check for missing case items in SystemVerilog case statements" title="Check for missing case items in SystemVerilog case statements" link="/img/releasenotes/4.5/sv-casestatements.png" width="500" >}}

**New VHDL lintings**:

  * Report unused declarations in `package body` {{< figure src="/img/releasenotes/4.5/unused-in-package.png" alt="Unused declarations in packages" title="Unused declarations in packages" link="/img/releasenotes/4.5/unused-in-package.png" width="500" >}}
  * Report unused declarations in `protected` types {{< figure src="/img/releasenotes/4.5/unused-in-protected-type.png" alt="Unused declarations in protected types" title="Unused declarations in protected types" link="/img/releasenotes/4.5/unused-in-protected-type.png" width="500" >}}
  * Check that all fields are set in `record` initializations {{< figure src="/img/releasenotes/4.5/record-initialization.png" alt="Check that all fields are set in record initializations" title="Check that all fields are set in record initializations" link="/img/releasenotes/4.5/record-initialization.png" width="500" >}}
  * Check for duplicate `package body` declarations {{< figure src="/img/releasenotes/4.5/duplicate-package-bodies.png" alt="Check for duplicate package bodies" title="Check for duplicate package bodies" link="/img/releasenotes/4.5/duplicate-package-bodies.png" width="500" >}}
  * Do not allow VHDL keywords as `library` name {{< figure src="/img/releasenotes/4.5/disallow-keywords-as-library-name.png" alt="Do not allow VHDL keywords as library name" title="Do not allow VHDL keywords as library name" link="/img/releasenotes/4.5/disallow-keywords-as-library-name.png" width="500" >}}
  * Check for **duplicate labels** in sequential statements {{< figure src="/img/releasenotes/4.5/duplicate-labels.png" alt="Check for duplicate labels in sequential statements" title="Check for duplicate labels in sequential statements" link="/img/releasenotes/4.5/duplicate-labels.png" width="500" >}}
  * Check **vector width** when assigning to aggregate {{< figure src="/img/releasenotes/4.5/aggregates-size.png" alt="Check vector width when assigning to aggregate" title="Check vector width when assigning to aggregate" link="/img/releasenotes/4.5/aggregates-size.png" width="500" >}}
  * Report for `output ports` that are never assigned {{< figure src="/img/releasenotes/4.5/unwritten-port.png" alt="Report output ports that are never assigned" title="Report output ports that are never assigned" link="/img/releasenotes/4.5/unwritten-port.png" width="500" >}}

# Split Editor View

The [Split Editor]({{< ref "editor#split-editor" >}}) has been enabled for VHDL and (System)Verilog editors.

{{% youtube oKkAKjCemuk %}}

# Other New and Noteworthy Changes

* **Set Top Level** now has an icon {{< figure src="/img/releasenotes/4.5/set-top.png" alt="Set top level" title="Set top level" link="/img/releasenotes/4.5/set-top.png" class="uk-align-right" >}}
* \[Block Diagram] Support non-ANSI port declarations in (System)Verilog block diagrams
* \[Block Diagram] Only show content of the active SystemVerilog editor in the block diagram, filter content of `` `include`` files.
* \[VHDL] Improved **outline** for `record` field assignments
* \[VHDL] Improved hover over `procedure` parameters: show mode (`in`, `out`, `inout`) {{< figure src="/img/releasenotes/4.5/procedure-hovers.png" alt="Show mode in procedure parameter hover" title="Show mode in procedure parameter hover" link="/img/releasenotes/4.5/procedure-hovers.png" width="500" >}}
* \[VHDL] The `use` clause quickfix now tries to reuse existing `library` clauses instead of adding duplicates
{{< figure src="/img/releasenotes/4.5/use-clause.png" alt="Improved use-clause prefix" title="Improved use-clause prefix" link="/img/releasenotes/4.5/use-clause.png" width="600" >}}
* Updated Xtext dependency to `2.18.0`
* The stand-alone version of Sigasi Studio is now based on **Eclipse 2019-06 (4.12)**. The plugin version works on Eclipse 4.7.3a and newer (unchanged)
* The default heap size in `sigasi.ini` has been updated from `1.5G` to `3G`. In case you want to adjust the heap size, follow [these instructions]({{< ref "faq#how-do-i-increase-the-heap-size-for-eclipse" >}}).

# Bugfixes

- \[Toolchains] Allow empty default parameters in the toolchain preference pages
- \[(System)Verilog] Comment folding in include files
- \[VHDL] Hover declarative items in protected types
- \[(System)Verilog] auto complete in Preprocessor property page
- \[(System)Verilog] allow empty content in the Preprocessor property page
- \[(System)Verilog] Reevaluate the Preprocessor property page when *Undo* is used.
- \[VUnit] Support linked resources in `run.py`
- \[(System)Verilog] No syntax error for anonymous nested sequential blocks
- \[VHDL] Net search not showing load when net is used in `if` statement with binary or unary expressions
- \[VHDL] VHDL Formatting bug in indexed port map
- \[(System)Verilog] *Out of Memory* bug evaluating invalid preprocessor code
- \[(System)Verilog] Find references fails on `` `includes ``
- \[VHDL] Nicer hovers for record types
- \[Mixed] Unexpected errors on verilog module instantiations in VHDL code
- \[Mixed] A VHDL component declaration autocomplete of a Verilog module should use integer types for generics for parameters
- \[Other] CSV top level export does not always update when you set a new top level

- A lot of other issues we could fix thanks to your [Talkback]({{< ref "talkback" >}}) reports

# System requirements

* Sigasi Studio Standalone is supported on:
    * Windows: Windows 10 (64 bit) or newer
    * macOS 10.14 Mojave
    * Linux: RedHat Enterprise Linux RHEL 7.5 (64 bit) or newer
    * More information on supported OSes can be found [on the Eclipse website](https://www.eclipse.org/projects/project-plan.php?planurl=http://www.eclipse.org/eclipse/development/plans/eclipse_project_plan_4_10.xml#target_environments)
* Sigasi Studio as Plugin in your own Eclipse installation:
    * Eclipse 4.7.3a *Oxygen* up to Eclipse IDE 2019-03
    * Java JRE 8 or higher

We recommend at least **4GB of memory** available for Sigasi Studio,
and you need **about 300MB** of free disk space.

# Sigasi Studio 4.5.1 point release

On September 30 we released Sigasi Studio 4.5.1. This release fixes the following reported issues:

* The EGit plugin can't be updated in Sigasi Studio 4.5.0 stand-alone
* Avoid a pop-up error dialog when a graphical view is opened for the first time on Linux
* VHDL formatting: formatter does not remove whitespace before `` `attributes``
* VUnit integration: VUnit empty script error is not removed when the script is fixed

# Sigasi Studio 4.5.2 point release

On October 17 we released Sigasi Studio 4.5.2. This release fixes the following reported issues:

* The Quick Fix to declare all signals in a port map sometimes is very slow
* The Quick Fix to declare all signals in a port map can hang the user interface
* The Open Declaration context menu item does not work in VHDL
* The Occurrence highlighting occasionally does not work
* Navigating using Ctrl+Click can be very slow

Thanks for all the bug reports and enabling Talkback.
