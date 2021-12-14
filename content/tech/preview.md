---
title: Sigasi Studio Preview (4.14)
layout: page
pager: true
date: 2021-12-03
comments: true
---

For those users who want to get early access to the features and bugfixes of upcoming Sigasi Studio releases, we have set up an extra release channel, called "_Sigasi Preview_".

The Sigasi Preview release channel offers more frequent releases than the official releases. This page gives an introduction to the most important changes.

Although these preview releases are less rigorously tested than the official releases, they are stable enough for daily use.

**If you run into any problems, [please let us know](https://www.sigasi.com/support/)**.

# Current preview release

Since the {{< page "releasenotes/sigasi-4.13.md" >}} release, the following changes have been made.

# Common Libraries mismatch

Sigasi Studio uses the concept of [Common Libraries]({{< ref "manual/libraries.md#common-libraries" >}}). This is a folder in which to add reusable libraries. These can be vendor libraries, third party IP libraries or your own reusable libraries. By default, the STD and IEEE libraries are added to this folder.

When a VHDL project's language level changes, or when one of the VHDL files within has to be parsed with a higher language level, the Common Libraries need to be updated.
In this release we've improved the fixing of mismatches between the Common Libraries' and the project's VHDL version.

* Changing the project VHDL version will now reset the Common Libraries
* When VHDL support is added to a project, Common Libraries with the correct version are automatically added
* Improved the message for the `Reset Library Mapping` action
* Added new, and modified existing validations, that can reveal additional errors on existing projects
  * Added a validation when a file's VHDL version is higher than the project's
  * Improved the validation when the Common Libraries' and the project's VHDL version differ
* It's no longer possible to set the VHDL version of a file higher than the project's VHDL version  
{{< figure src="/img/releasenotes/4.14/FileVersionMismatch.png" title="File <-> project VHDL version mismatch" width="700px">}}  
* Added a warning when the VHDL version of a folder or an entire project is changed, since it affects all contained files and will reset their versions too  
{{< figure src="/img/releasenotes/4.14/NestedResourceVersionOverride.png" title="Nested resource VHDL version reset" width="700px">}}  

# Improved highlighting for VHDL, Verilog and SystemVerilog

Recently, we've been requested to allow for color customization of more constructs. This update allows users to customize the highlighting of 6 new VHDL and (System)Verilog constructs to their needs. However, the default for these constructs remains identical to the previous releases for those who are happy with what Sigasi Studio offers out of the box.  
While we were looking into the highlighting anyway, we've alleviated a few bottlenecks, greatly improving the performance of highlighting in Sigasi Studio.

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

# Updates

* The JRE shipped with Sigasi Studio is now **Java 17**
* Updated to Eclipse 2021-09

# Improvements

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
* **[OneSpin]** Improved error message when the `$ONESPINROOT` environment variable is not, or incorrectly, set
* **[Documentation]** FSMs are now shown with the processes or always blocks that define them, instead of in there own section  
{{< figure src="/img/releasenotes/4.14/FsmWithProcess.png" title="FSM now lives next to its defining process">}}  
* **[Documentation]** When there is no documentation to show for the current file, the documentation view now shows `No documentation to show` instead of a blank screen

# Bug fixes

* Made sure graphics run effortlessly under Java 17
* Sigasi now allows refactoring with the cursor standing at the end of an identifier
* The `Start Async Sampling` button has been disabled on Windows since [YourKit](https://www.yourkit.com/) does not support this feature on Windows
* Made sure the quick fix for mismatched components works when the entity or module declarations are incomplete
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
* **[Verilog]** Added missing type error when assigning a byte array, on which a built-in method is called, to a `string`
* **[Verilog]** Fixed highlighting of non-ANSI parameters in classes
* **[Verilog]** Fixed rare error in hover and outline of `let` declarations
* **[VUnit]** Fixed initialization issues with VUnit projects
* **[VUnit]** Sigasi now only shows `Run VUnit tests` in HDL editors for projects configured for VUnit
* **[Vivado]** Fixed compilation issues when editing an architecture whose entity is defined in a separate file
* **[Documentation]** Fixed documentation export for some incomplete designs
* **[Graphics]** Fixed `open` port visualization in block diagrams
* **[Graphics]** Fixed error message when hovering over elements in graphical views

# Update or install?

You can download the stand-alone version of the latest preview from:

* <https://download.sigasi.com/preview/latest/com.sigasi.hdt.product-linux.gtk.x86_64.zip>
* <https://download.sigasi.com/preview/latest/com.sigasi.hdt.product-macosx.cocoa.x86_64.zip>
* <https://download.sigasi.com/preview/latest/com.sigasi.hdt.product-win32.win32.x86_64.zip>

You can also update automatically when setting **Preferences > Install/Update > Available Software Sites > Add...** :
`https://download.sigasi.com/preview/studio/`

SHA sums ([more info]({{< ref "/faq.md#how-can-i-check-a-sha-sum" >}})) can be checked via <https://download.sigasi.com/preview/latest/sha1.txt>.

# System requirements

* Sigasi Studio standalone is supported on:
  * Windows: Windows 10 (64 bit) or newer
  * macOS 10.15 Catalina or newer
  * Linux: RedHat Enterprise Linux RHEL 7.7 (64 bit) or newer
    * Sigasi Studio depends on `libXss.so` which can be obtained by installing `libXScrnSaver`
  * More information on supported OSes can be found [on the Eclipse website](https://www.eclipse.org/projects/project-plan.php?planurl=http://www.eclipse.org/eclipse/development/plans/eclipse_project_plan_4_18.xml#target_environments)
* Sigasi Studio as plugin in your own Eclipse installation:
  * Eclipse 4.8 _Photon_ up to and including Eclipse IDE 2021-09
  * Java JRE 11 or 17

We recommend at least **4GB of memory** available for Sigasi Studio,
and you need **about 300MB** of free disk space.

# Feedback

We welcome your feedback through the usual channels or the comments below. Note that comments are cleared after each [official release](/releasenotes).
