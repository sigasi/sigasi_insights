---
title: Sigasi Studio Preview (4.17)
layout: page
pager: true
date: 2022-06-27
comments: true
---

For those users who want to get early access to the features and bugfixes of upcoming Sigasi Studio releases, we have set up an extra release channel, called `Sigasi Preview`.

The Sigasi Preview release channel offers more frequent releases than the official releases. This page gives an introduction to the most important changes.

Although these preview releases are less rigorously tested than the official releases, they are stable enough for daily use.

**If you run into any problems, [please let us know](https://www.sigasi.com/support/)**.

# Current preview release

The changes since the {{< page "releasenotes/sigasi-4.16.md" >}} release are documented below

## New and Noteworthy Changes

* Removed outdated documentation in Eclipse's help pages
* You can now use the `${filename_ext}` variable in your custom autocomplete templates. It inserts the filename with its extension
* It's now possible to disable the [automatic wrapping in quotes or parenthesis of selected code]({{< ref "/manual/editor.md#add-parentheses-or-create-a-string" >}})  
  {{< figure src="/img/releasenotes/4.17/EncloseWithParenthesesoption.png" link="/img/releasenotes/4.17/EncloseWithParenthesesoption.png" title="Toggle quote enclosing">}}
* **[VHDL]** Component instantiation autocompletes now insert default values for ports
* **[VHDL]** Added an autocomplete template for `(others => '0')`
* **[VHDL]** Added support for aliasing to enums
* **[VHDL]** Added a warning when assigning a string to an aggregate (`(s1, s2, s3) <= "abc";`)
* **[VHDL]** Added a warning when using an incorrect range to constrain vectors or their initial values (`constant a : std_logic_vector(-1 downto 0) := (-1 downto 0 => '1');`)
* **[Verilog]** Improved warning annotation for [multiple design units in the same file]({{< ref "manual/rules/verilog_style.md#file-contains-multiple-design-unit" >}}) on anonymous subprograms
* **[Verilog]** Improved error message when Verible failed to format
* **[Verilog]** Added checker instantiation autocomplete in `checker` constructs
* **[Verilog]** Added the instantiation autocomplete in more contexts
* **[Verilog]** Added the `Anywhere` context for custom autocomplete templates
* **[Verilog]** Added an error when invoking a macro with arguments but no name (``` `(x)```)

## Bug fixes

* Fixed slew of errors when using Sigasi Studio in Eclipse 2022-06
* Added icons to the `Set Top Level` dialog
* Fixed error dialog when pressing `Delete` right before applying an autocomplete
* Fixed rare racy [CSV compile-order export]({{< ref "manual/tools.md#export" >}})
* The info, warning, error, and Quick Fix light bulb icons are now consistent
* Fixed rare error dialog during `Checking Sigasi license`
* Made the our styling of tree views (such as [Outline]({{< ref "manual/views.md#outline-view" >}}), [Hierarchy]({{< ref "manual/views.md#hierarchy-view" >}}), and [Open Design Unit]({{< ref "manual/editor.md#open-design-unit" >}})) more consistent
* Made sure all Sigasi features work flawlessly after opening a recently closed project
* Normalized the content of different type of design unit instantiations
* Leafs in the Hierarchy View are no longer expandable
* **[VUnit]** Made sure that executed tests always show up in the [VUnit View]({{< ref "manual/views.md#vunit-view" >}})
* **[VUnit]** The history of the VUnit View is now sorted chronologically descending
* **[VUnit]** Added a checkbox in the history view to identify the current results
* **[VHDL]** Fixed false-positive [Unused declaration]({{< ref "manual/rules/dead-code-lint.md" >}}) for records when only elements of the record are used
* **[VHDL]** VHDL keywords used in tool directives are no longer highlighted
* **[VHDL]** Fixed recognition of generic package instantiations
* **[VHDL]** Removed Quick Fix for adding a sensitivity list to empty processes
* **[VHDL]** Fixed empty Hierarchy View when a formal is added twice in an instantiation
* **[Verilog]** Instantiation autocomplete for design units using extended identifiers (`\ext$ended"` or `\My!dentifier\`) now works correctly
* **[Verilog]** Removed enclosing instantiation for instantiation autocomplete
* **[Verilog]** Fixed empty [Class Hierarchy View]({{< ref "manual/views.md#class-hierarchy-view" >}}) when one of the classes in the hierarchy has no name
* **[Verilog]** Fixed highlighting of numbers
* **[Verilog]** Improved error marker range for incorrect preprocessor directives

# Update or install?

You can download the stand-alone version of the latest preview from:

* <https://download.sigasi.com/preview/latest/com.sigasi.hdt.product-linux.gtk.x86_64.zip>
* <https://download.sigasi.com/preview/latest/com.sigasi.hdt.product-macosx.cocoa.x86_64.zip>
* <https://download.sigasi.com/preview/latest/com.sigasi.hdt.product-win32.win32.x86_64.zip>

You can also update automatically when setting **Preferences > Install/Update > Available Software Sites > Add...** :
`https://download.sigasi.com/preview/studio/`

SHA sums ([more info]({{< ref "/faq.md#how-can-i-check-a-sha-sum" >}})) can be checked via <https://download.sigasi.com/preview/latest/sigasistudio-sha1.txt>.

# System requirements

* Sigasi Studio standalone is supported on:
  * Windows: Windows 10 (64 bit) or newer
  * macOS 11.6 Big Sur or newer
  * Linux: RedHat Enterprise Linux RHEL 7.7 (64 bit) or newer
    * Sigasi Studio depends on `libXss.so` which can be obtained by installing `libXScrnSaver`
  * More information on supported OSes can be found [on the Eclipse website](https://www.eclipse.org/projects/project-plan.php?planurl=http://www.eclipse.org/eclipse/development/plans/eclipse_project_plan_4_18.xml#target_environments)
* Sigasi Studio as plugin in your own Eclipse installation:
  * Eclipse 4.8 _Photon_ up to and including Eclipse IDE 2022-03
  * Java JRE 11 or 17

We recommend at least **4GB of memory** available for Sigasi Studio,
and you need **about 1GB** of free disk space.

# Feedback

We welcome your feedback through the usual channels or the comments below. Note that comments are cleared after each [official release](/releasenotes).
