---
title: Sigasi Studio Preview (4.16)
layout: page
pager: true
date: 2022-05-27
comments: true
---

For those users who want to get early access to the features and bugfixes of upcoming Sigasi Studio releases, we have set up an extra release channel, called "_Sigasi Preview_".

The Sigasi Preview release channel offers more frequent releases than the official releases. This page gives an introduction to the most important changes.

Although these preview releases are less rigorously tested than the official releases, they are stable enough for daily use.

**If you run into any problems, [please let us know](https://www.sigasi.com/support/)**.

# Current preview release

# New and Noteworthy Changes

* We've reformatted our license files to improve readability, the actual content was **not** changed
* Sigasi on linux now shows missing dependencies for Chromium in an error dialog at startup. Mac and Windows have no need for such a dialog as they always have all the necessary dependencies available
* Improved the consistency of our tutorial projects
* All mentions to the Creator license have been removed
* The automatic autocomplete after typing `.` or `` ` `` can now be disabled in `Preferences > VHDL` or `Preferences > Verilog/SystemVerilog`  
  {{< figure src="/img/releasenotes/4.16/AutocompleteAfterDot.png" link="/img/releasenotes/4.16/AutocompleteAfterDot.png" title="Toggle automatic autocomplete after character">}}
* Formatting has been enabled for files that use keywords of a higher language version
* **Ctrl + hover** has been enabled for the last character of identifiers
* Improved resilience to changes in the project for the [Find References View]({{< ref "manual/editor.md#find-references" >}})
* Improved responsiveness for the Find References View
* Removed the <span uk-icon="question"></span> button from views in which they were redundant
* Removed outdated documentation from Eclipse's internal documentation pages
* Navigating from the [Outline View]({{< ref "manual/views.md#outline-view" >}}) or the [Hierarchy View]({{< ref "manual/views.md#hierarchy-view" >}}) to the editor now selects more relevant constructs
* A warning is now issued on the `.library_mapping.xml` when it references non-existent files. A Quick Fix to remove the offending mapping has been also been added.
* Errors reported by external toolchains that do not contain a location are now propagated to Sigasi Studio as errors on the project  
  {{< figure src="/img/releasenotes/4.16/LocationlessErrors.png" link="/img/releasenotes/4.16/LocationlessErrors.png" title="Toolchain's errors without location are linked to project">}}
* The [Documentation View]({{< ref "manual/views.md#documentation-view" >}}) now reacts better to all kinds of changes to the project, assuring it never misses a refresh
* `Show In > Dependencies` tries harder to select the right element, preventing disturbing **beep** sounds
* Colors changed through `Preferences > Sigasi > VHDL or Verilog/SystemVerilog> Syntax Coloring` are now immediately applied
* The [State Machine View]({{< ref "manual/views.md#state-machine-view" >}}) icon to show edge labels (![show labels icon](/img/releasenotes/4.16/font.png)) has been replaced by an icon to hide comments (![hide comments icon](/img/releasenotes/4.16/hide_comments.png)) and an icon to hide the conditions (![hide conditions icon](/img/releasenotes/4.16/hide_conditions.png)). The [Graphics Configuration]({{< ref "manual/graphics.md" >}}) now also offers the ability to show only comments or conditions separately through `labels comment` or `labels condition`.
* All of our tree views (Hierarchy View, [Open Design Unit]({{< ref "manual/views.md#open-design-unit-view" >}}), Export diagrams, ...) now use consistent capitalization and coloring
* It's now possible to select the project for which to configure VUnit in the [Add VUnit support]({{< ref "manual/vunit.md#add-vunit-support-to-an-existing-sigasi-project" >}}) dialog
  {{< figure src="/img/releasenotes/4.16/AddVUnitSupport.png" link="/img/releasenotes/4.16/AddVUnitSupport.png" title="Add VUnit Support wizard with project selection">}}  
* Improved cleanup of OS resources in autocompletes
* **[VHDL]** Attributes now have an icon and are marked as attributes in the autocomplete pop-up window
* **[VHDL]** Added support for VHDL 2019 tool directives  
```vhdl
entity ent is
    port(
        clk      : in  std_logic;
        rst      : in  std_logic;
        `if DEBUG then
        debug    : in  std_logic;
        `end if
        data_in  : in  std_logic;
        data_out : out std_logic
    );
end entity;
```

* **[VHDL]** `open` in ranges is now taken into account for validations
* **[VHDL]** `configuration`s are now included in the [exported documentation]({{< ref "manual/documentation.md" >}})  
  {{< figure src="/img/releasenotes/4.16/ConfigurationInDocumentation.png" link="/img/releasenotes/4.16/ConfigurationInDocumentation.png" title="Configurations are now included in documentation">}}
* **[Verilog]** Greatly decreased memory usage and increased performance when using many include files
* **[Verilog]** All macro invocations are now highlighted
* **[Verilog]** Added support for `edge` in timing checks
* **[Verilog]** Added support for assignment patterns in initial blocks

```verilog
initial begin
    '{c} = s;
end
```

* **[Verilog]** Removed `localparameter`s from the `Parameters` table in exported documentation as these are not externally modifiable
* **[Verilog]** Added linking support for `let` declarations in `clocking` blocks
* **[Verilog]** Using invalid constructs - such as `modules` or `interfaces` - in `packages` will now generate an error
* **[Verilog]** Pressing `enter` at the end of many constructs (`package`, `class`, `interface`, ...) will now trigger [Smart Indent]({{< ref "manual/editor.md#smart-indentation-1" >}}) to unindent the ending line
* **[Verilog]** Stuttering has been removed from Verilog as it's only useful for VHDL
* **[Verilog]** Improved highlighting of the `Invalid package item` validation
* **[Verilog]** Xilinx encrypted files (starting with `Xlx`) are now ignored by the Verilog engine
* **[Verilog]** Added new validations for
  * infinitely nested preprocessing directives  
    {{< figure src="/img/releasenotes/4.16/NestedExpansion.png" link="/img/releasenotes/4.16/NestedExpansion.png" title="Validation of infinitely nested expansions">}}
  * allowed locations of preprocessor directives
    {{< figure src="/img/releasenotes/4.16/PreprocessorDirectiveLocationValidation.png" link="/img/releasenotes/4.16/PreprocessorDirectiveLocationValidation.png" title="Validation of allowed locations for preprocessor directives">}}  
  * spaces between the backtick and the preprocess directive's name  
    {{< figure src="/img/releasenotes/4.16/SpaceInPreprocessorDirective.png" link="/img/releasenotes/4.16/SpaceInPreprocessorDirective.png" title="Space after backtick of preprocessing directive">}}

# Updates

* Eclipse has been updated to 2022-03

# Bug fixes

* **[VHDL]** Fixed linking for array types that use `open` in their ranges
* **[VHDL]** Fixed formatting for `else` clauses that have a trailing single line comment
* **[VHDL]** Only present Quick Fix suggestion for subprogram invocations without matching subprogram when the Quick Fix can improve the situation
* **[VHDL]** Fixed missing autocompletes
* **[Verilog]** Fixed false positive errors for blank ports in modules
* **[Verilog]** `` `ifdef``, `` `else``, `` `endif`` directives are now correctly greyed out in disabled preprocessor branches
* **[Verilog]** The right file encoding is now passed to Verible
* **[Verilog]** [Block Diagram]({{< ref "manual/views.md#block-diagram-view" >}}) generation will no longer fail for net declarations without a name
* **[Verilog]** Fixed formatting for files containing unclosed multiline comments
* **[Verilog]** Fixed Verible formatting when there is a space in the Verible installation path
* **[Verilog]** Fixed missing autocomplete when typing a single backtick in an empty file

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
  * Eclipse 4.8 _Photon_ up to and including Eclipse IDE 2021-12
  * Java JRE 11 or 17

We recommend at least **4GB of memory** available for Sigasi Studio,
and you need **about 1GB** of free disk space.

# Feedback

We welcome your feedback through the usual channels or the comments below. Note that comments are cleared after each [official release](/releasenotes).
