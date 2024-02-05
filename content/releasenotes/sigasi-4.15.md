---
title: Sigasi Studio 4.15
date: 2022-03-17
lastmod: 2022-05-17
comments: true
pager: true
---

We are proud to present the Sigasi Studio 4.15 release.
This release adds **formatting of Verilog and SystemVerilog** using the Verible formatter, and support for **VHDL 2019** is being extended with support for **instantiated protected types**.
As always, there are many other improvements that enhance speed and usability to give you a better experience.

# Verilog Formatting

Sigasi now ships with [Verible](https://github.com/chipsalliance/verible/tree/master/verilog/tools/formatter) built-in. Verible is an ambitious (System)Verilog formatter that is agnostic to macro invocations and includes and therefore produces a consistent formatting result also in heavily preprocessed code.

You can enable the Verible formatter for your installation by going to `Window > Preferences > Sigasi > Verilog/SystemVerilog > Formatting`.

{{< figure src="/img/releasenotes/4.15/ChooseFormatter.png" link="/img/releasenotes/4.15/ChooseFormatter.png" title="Choose between Sigasi or Verible formatter">}}  

Sigasi ships with a recent version by default, but if you'd rather run your own Verible installation, this can be achieved in `Window > Preferences > Sigasi > Verilog/SystemVerilog > Formatting > Verible`. This page allows you to customize its rules by pressing the `Edit...` button.

{{< figure src="/img/releasenotes/4.15/VeribleConfiguration.png" link="/img/releasenotes/4.15/VeribleConfiguration.png" title="Verible configuration">}}  

To see this in action, you can have a look at [our screencast]({{< ref "/screencasts/choose_your_verilog_formatter.md" >}}).

# VHDL 2019

In this release we've added support for VHDL 2019 instantiated protected types. Defining one of these creates a generic-mapped protected type, equivalent to one created through a protected type declaration and its respective protected type body.

{{< figure src="/img/releasenotes/4.15/ProtectedTypeInstantiation.png" link="/img/releasenotes/4.15/ProtectedTypeInstantiation.png" title="Example of a VHDL 2019 protected type instantiation" caption="Protected type instantiation `shared_counter_inst` of `SharedCounter`" >}}

# New and Noteworthy Changes

* Greatly enhanced File Search (**Ctrl+H**) speed  
{{< video src="/img/releasenotes/4.15/FastSearch.mp4" link="/img/releasenotes/4.15/FastSearch.mp4" title="Greatly enhanced File Search speed" >}}  
* The [Quick Outline]({{< ref "manual/eclipse/views.md#quick-outline-view" >}}) initial expansion has been adjusted such that modules, entities, and classes are immediately expanded. This gives a better overview of the design at a first glance.
* Improved the consistency of the ordering, grouping, casing, and punctuation in the preferences and `New...` dialogs
* The performance of instantiation autocompletes has been _greatly_ improved
* The performance of autocompletes in general has - independently from the previous item - also been _greatly_ improved  
{{< video src="/img/releasenotes/4.15/FastAutocomplete.mp4" link="/img/releasenotes/4.15/FastAutocomplete.mp4" title="Vastly faster autocomplete" width="900" >}}
* Autocompleting design unit (`entity`, `component`, or Verilog `module`) instantiations is now supported for design units denoted by an extended identifier (e.g. `\Cool Name$\` in VHDL, or `\$amazing^name ` in Verilog)
* Added the ability to run [performance logging]({{< ref "manual/eclipse/trouble.md#create-performance-and-memory-snapshots" >}}) to help us analyze potential user issues
* The colors used in the `Set top level` dialog have been made consistent with Sigasi's other views
* The [Sigasi Auto Export]({{< ref "manual/eclipse/tools.md#auto-export" >}}) now validates that the given `Top level name` exists, and gives you an option to browse through valid ones  
{{< figure src="/img/releasenotes/4.15/AutoExportCsv.png" link="/img/releasenotes/4.15/AutoExportCsv.png" title="Sigasi auto export improvements">}}  
* Improved responsiveness when enabling or disabling [Talkback]({{< ref "manual/common/talkback.md" >}})
* The `Verilog Version` and `Verilog Errors/Warnings` pages are now hidden in the VHDL file properties. The same was done for the corresponding VHDL pages in Verilog file properties
* The selected project or top level is now always visible in the export documentation dialog
* The link to [Sigasi's website](https://sigasi.com) in the exported markers document now uses HTTPS instead of HTTP
* The [Hierarchy]({{< ref "manual/eclipse/views.md#hierarchy-view" >}}), [VUnit]({{< ref "manual/eclipse/views.md#vunit-view" >}}), [Net Search]({{< ref "manual/eclipse/views.md#net-search-view" >}}) and [Libraries View]({{< ref "manual/eclipse/views.md#libraries-view" >}}) now honor the single-click navigation preference (`Preferences > General > Open mode`)
* Added the option to disable smart caret positioning in identifiers, both in VHDL and (System)Verilog. Smart caret allows you to easily jump between words in identifiers, no matter if you use camelCase or snake_case, by using **Ctrl+Left arrow** and **Ctrl+Right arrow**.  
{{< figure src="/img/releasenotes/4.15/SmartCaret.gif" link="/img/releasenotes/4.15/SmartCaret.gif" title="Smart Caret in Verilog">}}  
* **[VHDL]** Added a red squiggly line under subprograms in packages when the corresponding subprogram body in the package body is missing
* **[VHDL]** Added new constructs to the outline:
  * labels for concurrent statements
  * package and type declarations in entity generic lists
* **[VHDL]** As setting an `entity` as top level does not make sense, trying to set an `entity` as top level will now always set - or give you the option to select - its architecture as top level  
{{< figure src="/img/releasenotes/4.15/SetEntityAsTopLevel.gif" link="/img/releasenotes/4.15/SetEntityAsTopLevel.gif" title="Setting an entity as top level" >}}  
* **[VHDL]** Improved handling of strings at invalid places
* **[VHDL]** Formatting support has been added for attribute expressions e.g. `integer'image(s_MyInteger + 1)`
* **[VHDL]** Autocompleting a function call no longer adds the semicolon at the end. The semicolon at the end is rarely useful.
* **[VHDL]** Added formatting for generic package and function declarations
* **[VHDL]** Improved auto indentation of many constructs (type declarations, functions, packages,...)
* **[VHDL]** The [index out of range validation]({{< ref "manual/rules/vhdl_array_range.md" >}}) now supports the `open` expression in `subtype` declarations
* **[VHDL]** The [VHDL version mismatch]({{< ref "manual/rules/vhdl_version.md" >}}) Quick Fix can now update your project version
* **[VHDL]** The incomplete associations Quick Fix now adds the missing associations and also sorts them as in the declaration
* **[Verilog]** Added variable declarations to the outline, using a qualified path to describe their type
* **[Verilog]** Added predefined Verilog macros (matching `` `SV_COV_*``) for use with the `$coverage_control` system function
* **[Verilog]** Added folding for subprograms
* **[Verilog]** Changing the default nettype in an included file is now supported
* **[Verilog]** The selection color in the [Preprocessor View]({{< ref "manual/eclipse/views.md#preprocessor-view" >}}) now adapts to the theme being used
* **[Verilog]** Verilog `module` instantiations are now shown with more detail in the hierarchy view  
{{< figure src="/img/releasenotes/4.15/HierarchyViewVerilogInstantiation.png" link="/img/releasenotes/4.15/HierarchyViewVerilogInstantiation.png" title="Verilog module instantiations in the Hierarchy View">}}  
* **[Verilog]** Non-active preprocessor code is now deemphasized instead of emphasized in the dark theme
* **[Verilog]** [Block diagrams]({{< ref "manual/common/views.md#block-diagram-view" >}}) now show more connections, especially towards `always` blocks
* **[Verilog]** Improved preprocessor recovery for unbalanced parentheses in preprocessor directives
* **[Graphics]** Exported graphics now default to `.png` when no extension was explicitly mentioned
* **[VUnit]** Added support for custom preprocessors

# Updates

* [JustJ](https://www.eclipse.org/justj/) (the JRE shipped with Sigasi Studio) has been updated to 17.0.2  
  **Note that you may run into the error dialog below, when you restart Sigasi Studio after the update** because the JRE has changed. If you close the dialog, and restart Sigasi Studio manually, everything should work as expected.
{{< figure src="/img/releasenotes/4.14/jre_update_error.png" link="/img/releasenotes/4.14/jre_update_error.png" title="Expected error after update. Restart will solve the issue." width="300">}}
* The minimum VUnit version required by Sigasi is now `4.5.0`
* Sigasi now uses Chromium 80 for rendering graphics and the [Documentation View]({{< ref "manual/eclipse/views.md#documentation-view" >}}). This improves the performance and stability of these views
* Eclipse has been updated to 2021-12
* MouseFeed - an optional plugin shipped with Sigasi - has been replaced by the Eclipse option `General > Keys > Through mouse click`

# Bug fixes

* Made unintentionally transparent icons on Windows non-transparent again
* Fixed missing editor support when a file from a closed project is externally opened and the project is opened again
* Fixed rare behavior that caused the outline and the coloring to be applied only after the first edit in a file
* Fixed rare case where editing operations cleared the [Find References]({{< ref "manual/eclipse/editor.md#find-references" >}}) view unexpectedly
* Fixed selection linking between the libraries view and the editor
* The hover window now sizes more accurately according to its content
* Prevent excessive vmap calls to external compiler when using the same pre-compiled library in multiple open projects
* When instantiating a Verilog module in VHDL, undefined VHDL signals in the instantiation are now flagged
* Fixed PNGs - exported from the graphical views - being cut off for very large designs on low resolution displays
* Fixed the classpath for [snapshot_uploader.bat]({{< ref "manual/eclipse/trouble.md#create-performance-and-memory-snapshots" >}})
* Made sure that [projects opened through the command line]({{< ref "manual/eclipse/opening.md" >}}) always open
* Fixed documentation generation for simple entities
* **[VHDL]** Made sure that the `Add missing association` Quick Fix can always be applied
* **[VHDL]** Fixed formatting failure with unbalanced multiline comments
* **[VHDL]** Fixed rare cases in which the formatter would not apply any formatting
* **[VHDL]** Fixed name conflicts between components and entities, and components and libraries
* **[VHDL]** Fixed [Smart Indentation]({{< ref "manual/eclipse/editor.md#smart-indentation" >}}) after pressing enter at the end of a type declaration
* **[VHDL]** Made sure the Quick Fix to update the file to VHDL 2008 - when `open` is used as a range - is available

```vhdl
package name is
    type array_type is array (integer range <>) of string'base;
    subtype T is array_type(open)(1 to 10);
end package name;
```

* **[Verilog]** Fixed an issue where the cursor in the editor would jump to somewhere else after moving it, when the preprocessor view was open
* **[Verilog]** Reduced memory consumption during linking
* **[Verilog]** Made sure to only propose [Quick Fixes]({{< ref "manual/eclipse/linting.md#quick-fixes" >}}) for valid paths when the argument of an `` `include`` can not be found in the current include path
* **[Verilog]** When folding a module instantiation, Sigasi now correctly shows the first line of the instantiation
* **[Verilog]** Fixed labels when using increment, decrement or streaming operators
* **[Verilog]** Fixed broken hierarchy view for incomplete loop generate statements
* **[Verilog]** Fixed highlighting of ports in user-defined primitives
* **[Verilog]** Fixed linking of
  * the end identifier in blocks
  * incomplete bind directives
* **[Verilog]** Fixed the values for the `` `__FILE__`` and `` `__LINE__`` macros
* **[Verilog]** Fixed resolution of nested include paths
* **[Verilog]** Fixed focus of the bottom pane in the [Class Hierarchy View]({{< ref "manual/eclipse/views.md#class-hierarchy-view" >}})
* **[Verilog]** A performance regression in the preprocessor that slipped into [4.14]({{< ref "releasenotes/sigasi-4.14.md" >}}) has been alleviated
* **[VUnit]** Added missing text in `Browse` button in project importer
* **[VUnit]** `/` is now always used as path separator to save the VUnit location, making it interchangeable between platforms
* **[VUnit]** Made sure the `Browse...` button in the `Add VUnit support` dialog allows you to browse
* A lot of other issues we could fix thanks to your Talkback reports

# System requirements

* Sigasi Studio standalone is supported on:
  * Windows: Windows 10 (64 bit) or newer
  * macOS 11.6 Big Sur or newer
  * Linux: RedHat Enterprise Linux RHEL 7.7 (64 bit) or newer
    * Sigasi Studio depends on `libXss.so` which can be obtained by installing `libXScrnSaver`
    * More information on supported OSes can be found [on the Eclipse website](https://www.eclipse.org/projects/project-plan.php?planurl=http://www.eclipse.org/eclipse/development/plans/eclipse_project_plan_4_18.xml#target_environments)
* Sigasi Studio as plugin in your own Eclipse installation:
  * Eclipse IDE 2021-03 up to and including Eclipse IDE 2021-12
  * Java JRE 11 or 17

We recommend at least **4GB of memory** available for Sigasi Studio,
and you need **about 1GB** of free disk space.

Thanks for all the [bug reports](mailto:support@sigasi.com) and enabling [Talkback]({{< ref "manual/common/talkback.md" >}}).

# Sigasi Studio 4.15.1 point release

On April 12 we released Sigasi Studio 4.15.1.
This release fixes the following reported issues:

* Hang when typing at a very specific speed with the autocomplete window open
* **[VHDL]** Missing autocompletes for attributes

# Sigasi Studio 4.15.2 point release

On May 17 we released Sigasi Studio 4.15.2.
This release fixes the following reported issues:

* **[VHDL]** Missing autocomplete options before context declaration
* **[VHDL]** `Open Matching Declaration` context menu item and keyboard shortcut not working
* **[VHDL]** 2-process `std_logic_vector` state machines not being detected by `State Machines` view
