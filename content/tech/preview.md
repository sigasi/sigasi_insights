---
title: Sigasi Studio Preview (4.14)
layout: page
pager: true
date: 2021-11-16
comments: true
---

For those users who want to get early access to the features and bugfixes of upcoming Sigasi Studio releases, we have set up an extra release channel, called "_Sigasi Preview_".

The Sigasi Preview release channel offers more frequent releases than the official releases. This page gives an introduction to the most important changes.

Although these preview releases are less rigorously tested than the official releases, they are stable enough for daily use.

**If you run into any problems, [please let us know](https://www.sigasi.com/support/)**.

# Current preview release

Since the {{< page "releasenotes/sigasi-4.13.md" >}} release, the following changes have been made.

# Common Libraries mismatch

When a VHDL project's language level changes, or when one of the VHDL files within has to be parsed with a higher language level, the Common Libraries should be updated.
In this release we've improved the fixing of mismatches between the Common Libraries' and the project's VHDL version.

* Changing the project VHDL version will now reset the Common Libraries
* When VHDL support is added to a project, Common Libraries with the correct version are automatically added
* It's no longer possible to set the VHDL version of a file higher than the project's VHDL version  
{{< figure src="/img/releasenotes/4.14/FileVersionMismatch.png" title="File <-> project VHDL version mismatch">}}  
* Added new, and modified existing validations, that can reveal additional errors on existing projects
  * Added a validation when a file's VHDL version is higher than the project's
  * Improved the validation when the Common Libraries' and the project's VHDL version differ.
* Added a warning when the VHDL version of a folder or an entire project is changed, since it affects all contained files and will reset their versions too  
{{< figure src="/img/releasenotes/4.14/NestedResourceVersionOverride.png" title="Nested resource VHDL version reset">}}  
* Improved the message for the `Reset Library Mapping` action

# Updates

* The JRE shipped with Sigasi Studio is now Java 17
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

* Greatly improved highlighting performance
* Improved support for deeply nested expressions (e.g. `1 + 1 + 1 + ...`). As a side effect, clean (successive) builds are now up to 20% faster
* Added an option to be reminded of your outdated Sigasi Studio version instead of having to close the dialog every time you open Sigasi Studio  
{{< figure src="/img/releasenotes/4.14/SigasiVersionOutdated.png" title="UDP in outline view">}}  
* Reordered, deduplicated and cleaned up the `New` menu when right clicking files/projects. To make new Sigasi example projects you can use **File > New > Sigasi > Other > Examples**
* Sigasi now uses a monospace font for autocomplete content editing. This should help you to achieve the formatting you want more easily
* Placed Verilog and VHDL next to each other in the Sigasi preferences
* Hovers now use the font and font size configured in **General > Appearance > Colors and Fonts > Basic > Text Font**  
{{< figure src="/img/releasenotes/4.14/HoverFont.png" title="Hovers follow font and font size">}}  
* **[VHDL]** Allow custom `entity`, `architecture`, `library`, `package`, `operator` and `assignment` highlighting  
{{< figure src="/img/releasenotes/4.14/VhdlHighlighting.png" title="All new custom VHDL highlighting">}}  
* **[VHDL]** Sigasi now reports errors when the library `work` is defined or referenced in `context` declarations  
{{< figure src="/img/releasenotes/4.14/WorkInContext.png" title="Work declaration or reference in a context declaration">}}  
* **[VHDL]** Improved quick fix for removing unused declarations
* **[VHDL]** Added processes that are nested in generate statements to the documentation  
{{< figure src="/img/releasenotes/4.14/ProcessInGeneratesDocumentation.png" title="Processes nested in generate statements in documentation">}}  
* **[Verilog]** Allow custom `data`, `enum`, `function`, `module`, `operator` and `assignment` highlighting
{{< figure src="/img/releasenotes/4.14/VerilogHighlighting.png" title="All new custom Verilog highlighting">}}  
* **[Verilog]** Added inherited members to the quick outline. You can show them by pressing **Ctrl+O** again when you already have the [Quick Outline]({{< ref "manual/views.md#quick-outline-view" >}}) open  
{{< figure src="/img/manual/quick_outline_with_inherited_members.png" title="Show inherited members in quick outline">}}  
* **[Verilog]** Improved formatting for `constraint`, `sequence` and `property` blocks
* **[Verilog]** Added user-defined primitives to the outline  
{{< figure src="/img/releasenotes/4.14/UdpOutline.png" title="UDP in outline view">}}  
* **[VUnit]** You can now view the history of your VUnit runs  
{{< figure src="/img/releasenotes/4.14/VUnitHistory.png" title="History of VUnit runs">}}  
* **[VUnit]** We now show correct icons when a test failed or throws an error  
{{< figure src="/img/releasenotes/4.14/BetterVUnitImages.png" title="Better VUnit icons">}}  
* **[OneSpin]** Improved error message when `$ONESPINROOT` is not/incorrectly set
* **[Documentation]** FSMs are now shown with the processes or always blocks that define them, instead of in there own section  
{{< figure src="/img/releasenotes/4.14/FsmWithProcess.png" title="FSM now lives next to its defining process">}}  
* **[Documentation]** When there is no documentation to show for the current file, the documentation view now shows `No documentation to show` instead of a blank screen

# Bug fixes

* Made sure graphics run correctly under Java >= 16
* Sigasi now allows refactoring with the cursor standing behind an identifier
* The `Start Async Sampling` button has been disabled on Windows since YourKit does not support this feature on Windows
* Made sure the quick fix for mismatched components works when the entity or module declarations are incomplete
* Removed duplicated **Edit > Toggle Block Selection** menu entry
* Added back the missing decoration for HDL projects in the project explorer
* **[VHDL]** The icon for components in the outline view got scrambled up in the 4.13 release. This has since been fixed
* **[VHDL]** Removed false positive errors in Sigasi Studio Starter
* **[VHDL]** Fixed missing validations when an incorrect `return` expression is used
* **[Verilog]** Fixed rare missing autocomplete for hierarchical references
* **[Verilog]** Fixed navigation for
  * ports being referenced in `specify` blocks
  * references in the initialization expressions in UDP ports
  * type and parameter declarations from subclasses to superclasses
  * hierarchical references in clock variable initialization expressions
  * references in default clocking rules
  * variable references in `randsequence`s
  * arguments of `randomize` calls
  * return types of top level functions when there are multiple constructs with the same name as the return type
  * static-property references of parameterized classes
  * unqualified constructor invocations
  * `super` and parameter references used in parameterization of a super class
* **[Verilog]** Fixed part select symbol in outline
* **[Verilog]** Fixed false positive error for class extensions with incorrect syntax
* **[Verilog]** Added missing type error when assigning a byte array, on which a built-in method is called, to a string
* **[Verilog]** Fixed highlighting of non-ansi parameters in classes
* **[VUnit]** Fixed initialization issues with VUnit projects
* **[VUnit]** Sigasi now only shows `Run VUnit tests` in HDL editors for projects configured for VUnit
* **[Vivado]** Fixed compilation issues when editing an architecture whose entity is defined in a separate file
* **[Documentation]** Fixed documentation export for some incomplete designs
* **[Graphics]** Fixed `open` port visualization in block diagrams

# Update or install?

You can download the stand-alone version of the latest preview from:

- <https://download.sigasi.com/preview/latest/com.sigasi.hdt.product-linux.gtk.x86_64.zip>
- <https://download.sigasi.com/preview/latest/com.sigasi.hdt.product-macosx.cocoa.x86_64.zip>
- <https://download.sigasi.com/preview/latest/com.sigasi.hdt.product-win32.win32.x86_64.zip>

You can also update automatically when setting **Preferences > Install/Update > Available Software Sites > Add...** :
`https://download.sigasi.com/preview/studio/`

SHA sums ([more info]({{< ref "/faq.md#how-can-i-check-a-sha-sum" >}})) can be checked via <https://download.sigasi.com/preview/latest/sha1.txt>.

# System requirements

- Sigasi Studio standalone is supported on:
  - Windows: Windows 10 (64 bit) or newer
  - macOS 10.15 Catalina or newer
  - Linux: RedHat Enterprise Linux RHEL 7.7 (64 bit) or newer
    - Sigasi Studio depends on `libXss.so` which can be obtained by installing `libXScrnSaver`
  - More information on supported OSes can be found [on the Eclipse website](https://www.eclipse.org/projects/project-plan.php?planurl=http://www.eclipse.org/eclipse/development/plans/eclipse_project_plan_4_18.xml#target_environments)
- Sigasi Studio as plugin in your own Eclipse installation:
  - Eclipse 4.8 _Photon_ up to and including Eclipse IDE 2021-09
  - Java JRE 11 or 17

We recommend at least **4GB of memory** available for Sigasi Studio,
and you need **about 300MB** of free disk space.

# Feedback

We welcome your feedback through the usual channels or the comments below. Note that comments are cleared after each [official release](/releasenotes).
