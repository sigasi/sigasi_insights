---
title: Sigasi Studio Preview (4.15)
layout: page
pager: true
date: 2022-02-01
comments: true
---

For those users who want to get early access to the features and bugfixes of upcoming Sigasi Studio releases, we have set up an extra release channel, called "_Sigasi Preview_".

The Sigasi Preview release channel offers more frequent releases than the official releases. This page gives an introduction to the most important changes.

Although these preview releases are less rigorously tested than the official releases, they are stable enough for daily use.

**If you run into any problems, [please let us know](https://www.sigasi.com/support/)**.

# Current preview release

# Updates

* The minimum VUnit version required by Sigasi is now `4.5.0`
* Sigasi now uses Chromium 80.0.15 for rendering graphics and the [Documentation View]({{< ref "manual/views.md#documentation-view" >}}). This improves the performance and stability of these views
* Eclipse has been updated to 2021-12
* Chromium - which is used for documentation generation and the graphical views - has been updated to version 80
* MouseFeed - an optional plugin shipped with Sigasi - has been replaced by the Eclipse option `General > Keys > Through mouse click`

# New and Noteworthy Changes

* The [Quick Outline]({{< ref "manual/views.md#quick-outline-view" >}}) initial expansion has been adjusted such that modules, entities, and classes are immediately expanded. This gives a better overview of the design at a first glance
* Improved the consistency of our ordering, grouping, casing, and punctuation in the preferences and `New...` dialogs
* The performance of instantiation autocompletes has been _greatly_ improved
* Autocompleting design unit (`entity`, `component`, or Verilog `module`) instantiations is now supported for design units denoted by an extended identifier (e.g. `\Cool Name$\` in VHDL, or `\$amazing^name ` in Verilog)
* Added the ability to run performance logging to help us analyze potential user issues
* The colors used in the `Set top level` dialog have been made consistent with our other views
* The [Sigasi Auto Export]({{< ref "manual/tools.md#auto-export" >}}) now validates that the given `Top level name` exists, and gives you an option to browse through valid ones  
{{< figure src="/img/releasenotes/4.15/AutoExportCsv.png" title="Sigasi auto export improvements">}}  
* Improved responsiveness when enabling or disabling [Talkback]({{< ref "manual/talkback.md" >}})
* The `Verilog Version` and `Verilog Errors/Warnings` pages are now hidden in the VHDL file properties. The same was done for the corresponding VHDL pages in Verilog file properties.
* The [Hierarchy]({{< ref "manual/views.md#hierarchy-view" >}}), [VUnit]({{< ref "manual/views.md#vunit-view" >}}), [Net Search]({{< ref "manual/views.md#net-search-view" >}}) and [Libraries View]({{< ref "manual/views.md#libraries-view" >}}) now honor the single-click navigation preference (`Preferences > General > Open mode`)
* **[VHDL]** Added a red squiggly line under subprograms in packages when the corresponding subprogram body in the package body is missing
* **[VHDL]** Added new constructs to the outline:
    * labels for concurrent statements
    * package and type declarations in entity generic lists
* **[VHDL]** Improved handling of strings at invalid places
* **[VHDL]** Autocompleting a function call no longer adds the semicolon at the end. The semicolon at the end is rarely useful
* **[VHDL]** Added formatting for generic package and function declarations
* **[VHDL]** Improved auto indentation of many constructs (type declarations, functions, packages,...)
* **[VHDL]** The link to [Sigasi's website](https://sigasi.com) in the exported markers document now uses HTTPS instead of HTTP
* **[VHDL]** The [index out of range validation]({{< ref "manual/rules/vhdl_array_range.md" >}}) now supports the `open` expression in `subtype` declarations
* **[VHDL]** Added support for VHDL 2019 protected type instantiations
{{< figure src="/img/releasenotes/4.15/ProtectedTypeInstantiation.png" title="Example of a VHDL 2019 protected type instantiation">}}  
* **[Verilog]** Added variable declarations to the outline, using a qualified path to describe their type
* **[Verilog]** Added predefined Verilog macros (matching `` `SV_COV_*``) for use with the `$coverage_control` system function
* **[Verilog]** The selection color in the [Preprocessor View]({{< ref "manual/views.md#preprocessor-view" >}}) now adapts to the theme being used
* **[Verilog]** Verilog `module` instantiations are now shown with more detail in the hierarchy view  
{{< figure src="/img/releasenotes/4.15/HierarchyViewVerilogInstantiation.png" title="Verilog module instantiations in the Hierarchy View">}}  
* **[Verilog]** Non-active preprocessor code is now deemphasized instead of emphasized in the dark theme
* **[Graphics]** Exported graphics now default to `.png` when no extension was explicitly mentioned

# Bug fixes

* Made unintentionally transparent icons on Windows non-transparent again
* Fixed missing editor support when a file from a closed project is externally opened and the project is opened again
* Fixed rare behavior that caused the outline and the coloring to be applied only after the first edit in a file
* Fixed rare case where editing operations cleared the [Find References]({{< ref "manual/editor.md#find-references" >}}) view unexpectedly
* Fixed selection linking between the libraries view and the editor
* The hover window now sizes more accurately according to its content
* Prevent excessive vmap calls to external compiler when using the same pre-compiled library in multiple open projects
* **[VHDL]** Made sure that the `Add missing association` Quick Fix can always be applied
* **[VHDL]** Fixed rare cases in which the formatter would not apply any formatting
* **[VHDL]** Fixed name conflicts between components and entities, and components and libraries
* **[VHDL]** Fixed [Smart Indentation]({{< ref "manual/editor.md#smart-indentation" >}}) after pressing enter at the end of a type declaration
* **[Verilog]** Made sure to only propose [Quick Fixes]({{< ref "manual/linting.md#quick-fixes" >}}) for valid paths when the argument of an `` `include`` can not be found in the current include path
* **[Verilog]** When folding a module instantiation, Sigasi now correctly shows the first line of the instantiation
* **[Verilog]** Fixed labels when using increment, decrement or streaming operators
* **[Verilog]** Fixed broken hierarchy view for incomplete loop generate statements
* **[Verilog]** Fixed highlighting of ports in user-defined primitives
* **[Verilog]** Fixed linking of
    * the end identifier in blocks
    * incomplete bind directives
* **[Verilog]** Fixed the values for the `` `__FILE__`` and `` `__LINE__`` macros
* **[Verilog]** Fixed resolution of nested include paths
* **[Verilog]** Fixed focus of the bottom pane in the [Class Hierarchy View]({{< ref "manual/views.md#class-hierarchy-view" >}})
* **[VUnit]** Added missing text in `Browse` button in project importer
* A lot of other issues we could fix thanks to your talkback reports

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
