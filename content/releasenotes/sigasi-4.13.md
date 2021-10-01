---
title: Sigasi Studio 4.13
date: 2021-09-17
lastmod: 2021-10-01
comments: true
pager: true
---
We are proud to present the Sigasi Studio 4.13 release. This release contains a lot of overall improvements, a **better editing experience**, **richer documentation** and many other new and noteworthy changes for Sigasi Studio's Verilog, VHDL and SystemVerilog support.

# Improved editing experience

* We improved the behavior of using **backspace** for "indentation whitespace". If you are using spaces for indentation, **backspace** now removes one level of indentation instead of a single space character  
  {{< figure src="/img/releasenotes/4.13/backspace-deindent.gif" title="Backspace deindent">}}
* We made it easier to put an expression between **parentheses**: When you select a region and press **`(`** or **`[`**, the selected region is enclosed with the *matching closing parentheses* (`)` or `]`)
{{< figure src="/img/releasenotes/4.13/parentheses.gif" title="Easier to put parentheses">}}
* We made it easier to create **strings**. When you select some text and press **`"`**, the selected text will be transformed into a string. This works for both **regular** and **multi-line strings**
{{< figure src="/img/releasenotes/4.13/strings.gif" title="Easier to make strings">}}
{{< figure src="/img/releasenotes/4.13/multiline-strings.gif" title="Easier to make multiline strings">}}
* Improved auto de-indentation (`case` statements, `function` signatures, `intial`, ...)  
{{< figure src="/img/releasenotes/4.13/deindent-initial.gif" title="Better de-indent">}}
* Improved warning hovers: long texts are now trimmed to make sure quickfixes are always visible

# Other New and Noteworthy Changes

## Improved documentation generation

We enriched the [Documentation Generation]({{< ref "manual/documentation.md" >}}) export with an overview of the [dependencies]({{< ref "manual/views.md#dependencies-view" >}}) between all project files.
  {{< figure src="/img/releasenotes/4.13/ProjectFilesOverviewDocgen.png" title="Project files overview in generated documentation" width="600">}}
If your design units contain multiple state machines, we now add them all to the documentation (instead of only the first).
  <!-- {{< figure src="/img/releasenotes/4.13/MultipleFsm.png" title="Multiple state machines in a design unit" width="200">}} -->
For Verilog projects we now also add `always` blocks to the generated documentation.
  {{< figure src="/img/releasenotes/4.13/AlwaysBlocksDocgen.png" title="Named always blocks in documentation generation">}}
We also improved the order in which classes are added to the [documentation]({{< ref "manual/documentation.md" >}}). The table of contents is now in alphabetical order.

## (System)Verilog Improvements

* Added support for Verilog files with `.vp` and `.svp` extensions
* `Open Class Hierarchy` in the context menu now shows its keybinding (**F4**) and `Open Class Hierarchy` is now shown as a hyperlink when hovering over classes
  {{< figure src="/img/releasenotes/4.13/ClassHierarchyInHover.png" title="Open Class Hierarchy in hover">}}
* Improved hover information for VHDL `entity` instantiations in Verilog code
* Improved covergroup's `sample` method support
* Named `always` blocks are now shown in the [Outline View]({{< ref "manual/views.md#outline-view" >}}) and [Hierarchy View]({{< ref "manual/views.md#hierarchy-view" >}})
  {{< figure src="/img/releasenotes/4.13/AlwaysBlockHierarchyOutline.png" title="Named always blocks in hierarchy and outline view">}}
* Faster **preprocessor** performance
* Added support for `config` declarations
  {{< figure src="/img/releasenotes/4.13/ConfigDeclarationSupport.png" title="Support for the SV config declaration construct">}}
* Better navigation support for:
   * tagged unions expressions
   * `foreach` loop variables that are multidimensional arrays
   * match patterns
   * `disable` statements

## VHDL improvements

* We added **folding** support for `record` types, `generics` and `ports`
  {{< figure src="/img/releasenotes/4.13/RecordFolding.png" title="Folding of record types">}}
  {{< figure src="/img/releasenotes/4.13/GenericPortFolding.png" title="Folding of generics and ports">}}
* **Formatting** support for *signature filter path element* (in `alias`es)
* Improved **formatting** for `assertion` statements and `procedure`s with `generic`s
* Added `package bodies` to the [Dependencies View]({{< ref "manual/views.md#dependencies-view" >}})

## Other Improvements

* ALINT support has been removed in favor of **ALINT-PRO**
* Support projects with spaces in its paths in the [OneSpin]({{< ref "manual/onespin.md" >}}) and [GHDL]({{< ref "manual/ghdl.md" >}}) toolchains
* Renamed "Altera Quartus II" to "Intel Quartus II"
  {{< figure src="/img/releasenotes/4.13/IntelQuartus.png" title="Intel Quartus II preference page">}}
* Use **secure `https`** to download from our **update site**
* Improved general user experience and error feedback on our [Talkback]({{< ref "manual/talkback.md" >}}) page
* Added decorations to the [Hierarchy View]({{< ref "manual/views.md#hierarchy-view" >}})'s nodes
  {{< figure src="/img/releasenotes/4.13/HierarchyViewDecorations.png" title="Decorations in hierarchy view">}}
* SVG export can now handle extended identifiers (`\VHDL___Extended____IdEnTiFiEr\`, `\verilog___*`)
* We improved the [VUnit View]({{< ref "manual/views.md#vunit-view" >}}). It now **shows progress** while the tests are running and it also shows the total run time of the tests
  {{< figure src="/img/releasenotes/4.13/VUnitSuiteDuration.png" title="Total duration of VUnit suites">}}
* Added the functionality to create [memory and performance snapshots]({{< ref "manual/trouble.md#create-performance-and-memory-snapshots" >}}). These (anonymized) snapshots can help the Sigasi development team analyse performance issues offline
  {{< figure src="/img/releasenotes/4.13/performance.png" title="Record performance and memory snapshots inside Sigasi Studio">}}

# Bug fixes

* Fixed problem with `@` symbol on the license preference page
* Made sure color customization in the [Graphics Configurations]({{< ref "manual/graphics.md" >}}) does not affect labels
* Fixed overflow issue in state machine headers
* Fixed user defined auto-complete templates with `Anywhere` context with empty prefix
* Fixed rare case in which pressing the graphical views' `pin` button wouldn't work
* **[VHDL]** Fixed **Sort associations** quickfix for long association lists
* **[VHDL]** Made sure to always show VHDL versions in chronological order where applicable
* **[VHDL]** Fixed hover for negative exponents
* **[VHDL]** Fixed incorrect error on decorators for overloaded `entity` tags
* **[VHDL]** Fixed syntax highlighting in extended identifiers when those contain keywords
* **[Verilog]** Fixed formatting for files containing incomplete macro invocations (a lonely backtick)
* **[Verilog]** Fixed incorrect error when using tagged unions inside ternary conditional expressions
* **[Verilog]** Made sure the [Preprocessor View]({{< ref "manual/views.md#preprocessor-view" >}}) also works when opening previous versions of a file through version control
* **[Verilog]** Fixed a rare error in verilog autocompletes
* **[Verilog]** Added an icon for UDP in [Open Design Unit]({{< ref "manual/editor.md#open-design-unit" >}})
  {{< figure src="/img/releasenotes/4.13/UdpIcon.png" title="UDP icon in Open Design Unit" width="500">}}
* **[Verilog]** Fixed incorrect error for include path auto-configuration when including files from a folder
* **[Verilog]** Fixed overwrite mode (hold `Ctrl` while selecting an entry from the context menu) for autocomplete for macros
* **[Verilog]** Fixed incorrect error for parameterized range of UDP instances with delay
* **[Verilog]** Fixed incorrect error for assignment patterns
* **[Verilog]** Fixed incorrect warning for attributed port connections
* **[Verilog]** Fixed incorrect warning for targets of disable statements
* **[Verilog]** Fixed export of symbols in packages
* **[VUnit]** Fixed automatic library mapping based on `run.py` contents

\+ A lot of other issues we could fix thanks to your [Talkback]({{< ref "manual/talkback.md" >}}) reports

# System requirements

+ Sigasi Studio Standalone is supported on:
  + Windows: Windows 10 (64 bit) or newer
  + macOS 10.15 Catilina or newer
  + Linux: RedHat Enterprise Linux RHEL 7.7 (64 bit) or newer
    + Sigasi Studio depends on `libXss.so` which can be obtained by installing `libXScrnSaver`
    + More information on supported OSes can be found [on the Eclipse website](https://www.eclipse.org/projects/project-plan.php?planurl=http://www.eclipse.org/eclipse/development/plans/eclipse_project_plan_4_10.xml#target_environments)
+ Sigasi Studio as Plugin in your own Eclipse installation:
  + Eclipse 4.8 *Photon* up to Eclipse IDE 2021-06
  + Java JRE 11

We recommend at least **4GB of memory** available for Sigasi Studio, and you need **about 300MB** of free disk space.

# Sigasi Studio 4.13.1 point release

On October 1 we released Sigasi Studio 4.13.1.
This release fixes the following reported issues:

* Netsearch often does not work
* Using the rename dialog does not work
* The [Hierarchy View]({{< ref "manual/views.md#hierarchy-view" >}}) doesn't show up for certain entities
* Fixed `Check Matching Components` for components of incomplete Verilog modules
* **[VHDL]** No hovers for declarations with an incomplete conditional initializer
* **[VHDL]** False positive errors on scientific exponent notation
* **[VHDL]** Dead state machine states are not being reported when an enum has duplicate literals
* **[Verilog]** The `Show Inherited Members` in the [Class Hierarchy View]({{< ref "manual/views.md#class-hierarchy-view" >}}) doesn't work
* **[Verilog]** Support for `config` constructs is incomplete

Thanks for all the [bug reports](mailto:support@sigasi.com) and enabling [Talkback]({{< ref "manual/talkback.md" >}}).
