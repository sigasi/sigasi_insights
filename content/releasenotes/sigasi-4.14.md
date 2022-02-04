---
title: Sigasi Studio 4.14
date: 2021-12-16
lastmod: 2022-02-08
comments: true
pager: true
---
We are proud to present the Sigasi Studio 4.14 release.
This release continues to improve the user experience with **improved semantic highlighting** in VHDL, Verilog and SystemVerilog, **better navigation** in Verilog and SystemVerilog and **speed improvements** for clean builds.
The **handling of multiple language versions** has been improved.
Also, **VUnit** projects now handle their own library mapping.

# Improved highlighting for VHDL, Verilog and SystemVerilog

Recently, we've been requested to allow color customization of more constructs. This update allows users to customize the highlighting of 6 new VHDL and (System)Verilog constructs to their needs. However, the default for these constructs remains identical to the previous releases for those who are happy with what Sigasi Studio offers out of the box.  
While we were looking into the highlighting anyway, we've alleviated a bottleneck, greatly improving the performance of highlighting in Sigasi Studio.

For **VHDL**, Sigasi Studio now allows custom `entity`, `architecture`, `library`, `package`, `operator`, and `assignment` highlighting  
{{< figure src="/img/releasenotes/4.14/VhdlHighlighting.png" title="All new custom VHDL highlighting">}}  

For **[(System)Verilog]**, Sigasi Studio now allows custom `data`, `enum`, `function`, `module`, `operator`, and `assignment` highlighting
{{< figure src="/img/releasenotes/4.14/VerilogHighlighting.png" title="All new custom Verilog highlighting">}}

# Improved navigation in Verilog and SystemVerilog

This release, we've further increased the correctness and accuracy of our core (System)Verilog engine, which brings with it improved navigation.

We've added navigation for

* ports being referenced in `specify` blocks
* references in the initialization expressions in UDP ports
* type and parameter declarations from subclasses to superclasses
* hierarchical references in clock variable initialization expressions
* references in default clocking rules
* variable references in `randsequence` constructs
* arguments of `randomize` calls
* return types of top level functions when there are multiple constructs with the same name as the return type
* static-property references of parameterized classes
* unqualified constructor invocations
* `super` and parameter references used in parameterization of a super class

# VUnit automated library mapping

The {{< page "/manual/vunit.md" >}} has been improved.
The information from the VUnit `run.py` file is used to automatically handle libraries in Sigasi Studio.
There is no more need to maintain a redundant library configuration yourself. This saves time and reduces the potential for errors.

# Improved handling of language version mismatches

Sigasi Studio uses the concept of [Common Libraries]({{< ref "manual/libraries.md#common-libraries" >}}). This is a folder in which to add reusable libraries. These can be vendor libraries, third-party IP libraries or your own reusable libraries. By default, the STD and IEEE libraries are added to this folder.

When a VHDL project's language level changes, or when one of the VHDL files within has to be parsed with a higher language level, the Common Libraries need to be updated.
In this release we've improved the fixing of mismatches between the Common Libraries' and the project's VHDL version.

* Changing the project VHDL version will now reset the Common Libraries
* When VHDL support is added to a project, Common Libraries with the correct version are automatically added
* Improved the message for the `Reset Library Mapping` action
* Added new, and modified existing, validations, that can reveal additional errors on existing projects
  * Added a validation when a file's VHDL version is higher than the project's
  * Improved the validation when the Common Libraries' and the project's VHDL version differ
* It's no longer possible to set the VHDL version of a file higher than the project's VHDL version  
{{< figure src="/img/releasenotes/4.14/FileVersionMismatch.png" title="File <-> project VHDL version mismatch" width="700px">}}  
* Added a warning when the VHDL version of a folder or an entire project is changed, since it affects all contained files and will reset their versions too  
{{< figure src="/img/releasenotes/4.14/NestedResourceVersionOverride.png" title="Nested resource VHDL version reset" width="700px">}}

# Other New and Noteworthy Changes

* The dependencies view now hides implied libraries in the qualified name where possible (e.g. `pkg` instead of `work.pkg`)

<div class="uk-grid">
  <div class="uk-width-2-5 uk-flex uk-flex-middle uk-flex-center" style="text-align: center">
    {{< figure src="/img/releasenotes/4.14/OldDependencies.png" width="300px" title="Old dependencies view" caption="Old view">}}
  </div>
  <div class="uk-width-1-5 uk-flex uk-flex-middle uk-flex-center" style="text-align: center;">
    <span uk-icon="icon: arrow-right; ratio: 10"></span>
  </div>
  <div class="uk-width-2-5 uk-flex uk-flex-middle uk-flex-center" style="text-align: center">
    {{< figure src="/img/releasenotes/4.14/NewDependencies.png" width="300px" title="New dependencies view" caption="New view">}}
  </div>
</div>

* Improved support for deeply nested expressions (e.g. `1 + 1 + 1 + ...`). As a side effect, clean (successive) builds are now **up to 20% faster**
* Added an option to be reminded of your outdated Sigasi Studio version instead of having to close the dialog every time you open Sigasi Studio  
{{< figure src="/img/releasenotes/4.14/SigasiVersionOutdated.png" title="UDP in outline view">}}  
* Reordered, deduplicated, and cleaned up the `New` menu when right clicking files/projects. To make new Sigasi example projects you can use **File > New > Sigasi > Other > Examples**
* Sigasi now uses a monospace font in autocomplete template view. This should help to achieve the desired formatting more easily
* Placed Verilog and VHDL next to each other in the Sigasi preferences
* Hovers now use the font and font size configured in **General > Appearance > Colors and Fonts > Basic > Text Font**  
{{< figure src="/img/releasenotes/4.14/HoverFont.png" title="Hovers follow font and font size">}}  
* **[VHDL]** Sigasi now reports errors when the library `work` is defined or referenced in `context` declarations  
{{< figure src="/img/releasenotes/4.14/WorkInContext.png" title="Work declaration or reference in a context declaration">}}  
* **[VHDL]** Improved quick fix for removing unused declarations such that it always removes the entire declaration
* **[VHDL]** Added processes that are nested in generate statements to the documentation  
{{< figure src="/img/releasenotes/4.14/ProcessInGeneratesDocumentation.png" title="Processes nested in generate statements in documentation">}}  
* **[Verilog]** Added inherited members to the quick outline. You can show them by pressing **Ctrl+O** again when you already have the [Quick Outline]({{< ref "manual/views.md#quick-outline-view" >}}) open  
{{< figure src="/img/manual/quick_outline_with_inherited_members.png" title="Show inherited members in quick outline">}}  
* **[Verilog]** Improved formatting for `constraint`, `sequence` and `property` blocks
* **[Verilog]** Improved handling of recursive file inclusion
* **[Verilog]** Added user-defined primitives to the outline  
{{< figure src="/img/releasenotes/4.14/UdpOutline.png" title="UDP in outline view">}}  
* **[VUnit]** You can now view the history of your VUnit runs  
{{< figure src="/img/releasenotes/4.14/VUnitHistory.png" title="History of VUnit runs">}}  
* **[VUnit]** Sigasi now shows different icons when a test failed, throws an error, or is successful  
{{< figure src="/img/releasenotes/4.14/BetterVUnitImages.png" title="Better VUnit icons">}}  
* **[OneSpin]** Improved error message when the `$ONESPINROOT` environment variable is not set, or is set incorrectly
* **[Documentation]** FSMs are now shown with the processes or always blocks that define them, instead of in there own section  
{{< figure src="/img/releasenotes/4.14/FsmWithProcess.png" title="FSM now lives next to its defining process">}}  
* **[Documentation]** When there is no documentation to show for the current file, the documentation view now shows `No documentation to show` instead of a blank page

# Updates

* The JRE shipped with Sigasi Studio is now **Java 17**
  **Note that you may run into the error dialog below, when you restart Sigasi Studio after the update** because the JRE has changed. If you close the dialog, and restart Sigasi Studio manually, everything should work as expected
{{< figure src="/img/releasenotes/4.14/jre_update_error.png" link="/img/releasenotes/4.14/jre_update_error.png" title="Expected error after update. Restart will solve the issue" width="200">}}
* We've updated Eclipse in the standalone Sigasi Studio to **[Eclipse 2021-09](https://www.eclipse.org/eclipseide/2021-09/noteworthy/)**

# Bug fixes

* Made sure graphics run flawlessly under Java 17
* Sigasi now allows refactoring with the cursor positioned at the end of an identifier
* The `Start Async Sampling` button has been disabled on Windows since [YourKit](https://www.yourkit.com/) does not support this feature on Windows
* Made sure the quick fix for mismatched components works when the `entity` or `module` declarations are incomplete
* Removed duplicated **Edit > Toggle Block Selection** menu entry
* Added a missing decoration for HDL projects in the project explorer
* Trying to open a file in Sigasi Studio from the command line will no longer crash
* Mapping files to a [library with ignored markers]({{< ref "/manual/libraries.md#how-is-common-libraries-different-from-another-folder" >}}) will now correctly remove the markers on said files
* **[VHDL]** When writing to a `std_(u)logic_vector` variable, different from the one selected in a `case` statement, a state machine will no longer be produced
* **[VHDL]** The icon for `component`s in the outline view that was lost in the 4.13 release has been reinstated
* **[VHDL]** Removed false positive errors in Sigasi Studio Starter
* **[VHDL]** Removed false positive errors for incomplete port and generic declarations
* **[VHDL]** Fixed missing validations when an invalid `return` expression is used
* **[VHDL]** Fixed regressions in auto indentation near lines ending with parenthesis
* **[Verilog]** Fixed a rare missing autocomplete for hierarchical references
* **[Verilog]** Fixed the symbol for `part select` in the outline
* **[Verilog]** Removed false positive errors for `class` extensions with incorrect syntax
* **[Verilog]** Added missing type error when assigning a `byte` array, on which a built-in method is called, to a `string`
* **[Verilog]** Fixed highlighting of non-ANSI parameters in classes
* **[Verilog]** Fixed rare error in hover and outline of `let` declarations
* **[VUnit]** Fixed initialization issues with VUnit projects
* **[VUnit]** Sigasi now only shows `Run VUnit tests` in HDL editors for projects configured for VUnit
* **[Vivado]** Fixed compilation issues when editing an architecture whose entity is defined in a separate file
* **[Documentation]** Fixed documentation export for some incomplete designs
* **[Graphics]** Fixed `open` port visualization in block diagrams
* **[Graphics]** Fixed error message when hovering over elements in graphical views
* A lot of other issues we could fix thanks to your Talkback reports

# System requirements

* Sigasi Studio standalone is supported on:
  * Windows: Windows 10 (64 bit) or newer
  * macOS 11.6 Big Sur or newer
  * Linux: RedHat Enterprise Linux RHEL 7.7 (64 bit) or newer
    * Sigasi Studio depends on `libXss.so` which can be obtained by installing `libXScrnSaver`
    * More information on supported OSes can be found [on the Eclipse website](https://www.eclipse.org/projects/project-plan.php?planurl=http://www.eclipse.org/eclipse/development/plans/eclipse_project_plan_4_18.xml#target_environments)
* Sigasi Studio as plugin in your own Eclipse installation:
  * Eclipse 4.8 _Photon_ up to and including Eclipse IDE 2021-09
  * Java JRE 11 or 17

We recommend at least **4GB of memory** available for Sigasi Studio,
and you need **about 1GB** of free disk space.

# Sigasi Studio 4.14.1 point release

On February 1 we released Sigasi Studio 4.14.1.
This release fixes the following reported issues:

* Project specific validations not working when there are spaces in the path
* Added Java 17 support to our [profiling features]({{< ref "manual/trouble.md#create-performance-and-memory-snapshots" >}})
* **[Verilog]** [Class Hierarchy View]({{< ref "manual/views.md#class-hierarchy-view" >}}) not working when opening it from a class instance instead of the class' identifier

# Sigasi Studio 4.14.2 point release

On February 8 we released Sigasi Studio 4.14.2.
This release fixes the following reported issues:

* Language versions not working when there are spaces in the path

Thanks for all the [bug reports](mailto:support@sigasi.com) and enabling [Talkback]({{< ref "manual/talkback.md" >}}).
