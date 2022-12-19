---
title: Sigasi Studio Preview (5.0)
layout: page
pager: true
date: 2022-09-16
lastmod: 2022-12-19
comments: true
---

For those users who want to get early access to the features and bugfixes of upcoming Sigasi Studio releases, we have set up an extra release channel, called `Sigasi Preview`.

The Sigasi Preview release channel offers more frequent releases than the official releases. This page gives an introduction to the most important changes.

Although these preview releases are less rigorously tested than the official releases, they are stable enough for daily use.

**If you run into any problems, [please let us know](https://www.sigasi.com/support/)**.

# Current preview release

We're proud to announce the initial preview of the all-new **Sigasi Studio 5.0** release.
In this release, we introduce a completely new architecture for our Verilog and SystemVerilog engine, improvements to autocomplete, and further improvements to documentation generation.

Introducing our new Sigasi 5 wave of products, we feel confident we'll be able to embody our new philosophy: **You design. We verify. Let's keep moving**.

# New engine for Verilog and SystemVerilog

Our Verilog and SystemVerilog engine was rewritten from scratch, allowing us to focus on both performance (with high parallelism) *and* accuracy.
While this release brings many improvements toward accuracy and language support for Verilog and SystemVerilog, worry not, this is just the tip of the iceberg.
The new engine forms a strong basis that empowers us to quickly offer new and exciting features in the upcoming 5.* releases.

## Language features

A whole slew of features was improved. You'll notice that navigation, hover, and outline all work much better and consistently. They'll also show more, and more accurate, information. We've worked hard on improving the user experience while editing. When there are two possible declarations for an identifier, both of them are presented when you Ctrl+Hover over the identifier. This is useful in broken/under-construction designs or designs with multiple top levels. Here's a succinct, non-exhaustive list of other improvements we've made.

* The use of SV `interface`s has become much more powerful and accurate. We've improved navigation and errors depending on which `modport`s are wired up  
{{< video src="/img/releasenotes/5.0/Interfaces.mp4" link="/img/releasenotes/5.0/Interfaces.mp4" title="Better experience using interfaces and modports" >}}

* When using the generic `interface` keyword, Sigasi's now able to infer the actual properties by analyzing how the interface was wired up  
{{< video src="/img/releasenotes/5.0/GenericInterfaces.mp4" link="/img/releasenotes/5.0/GenericInterfaces.mp4" title="Interfaces using the generic 'interface' keyword" >}}

* Missing declarations are now shown at type-time
* We've improved our focus on the root cause of errors. Sometimes an error can create a sequence of subsequent errors that are irrelevant e.g. if the `a` in `a.b.c` is not defined we only give errors on `a`, not on `b` and `c`. When the right-hand side of an assignment is incorrect, we also don't propagate it to the left-hand side
{{< figure src="/img/releasenotes/5.0/LessErrors.png" link="/img/releasenotes/5.0/LessErrors.png" title="Less errors are propagated">}}
* Full support for hierarchical references e.g. `a.b.c`
* Good support for `bind` directives

## Improved autocomplete

Autocomplete is the first feature that makes full use of our stable new basis. Using this new basis, we're able to only provide suggestions that are truly relevant in a given context. A new prioritization mechanism shows more likely suggestions at the top of the suggestion list. It's now also easier to autocomplete fitting identifiers. By default, our autocomplete now uses a subsequence match, meaning if the autocomplete prefix matches subsequent letters in the autocomplete, it will be suggested.
The autocomplete pop-up now also displays the type and matching characters will become bold as you're typing.
{{< video src="/img/releasenotes/5.0/SubSequenceDemo.mp4" link="/img/releasenotes/5.0/SubSequenceDemo.mp4" title="Autocomplete using subsequence" >}}

Amongst others, we've also improved the following:

* Additional support for Verilog `config` declarations
* Better support for enumeration type ranges i.e. `name[N]`
* Members of structs and arrays of structs now show up reliably
* More, and more accurate, types are now presented next to identifiers
* Add `$unit`-scope support
{{< figure src="/img/releasenotes/5.0/unitAutocomplete.png" link="/img/releasenotes/5.0/unitAutocomplete.png" title="$unit autocomplete">}}
* Autocomplete now also works inside macro parameters
{{< video src="/img/releasenotes/5.0/MacroParameterAutocomplete.mp4" link="/img/releasenotes/5.0/MacroParameterAutocomplete.mp4" title="Autocomplete in macro invocations" >}}

# Documentation improvements

## Small refinements

* The generated HTML now contains an `html` DOCTYPE, completely adhering to the HTML and CSS standards
* Source code and identifiers always use a monospace font
{{< figure src="/img/releasenotes/5.0/MonospaceInDocumentation.png" link="/img/releasenotes/5.0/MonospaceInDocumentation.png" title="Source code uses monospace fonts in documentation">}}
* A dialog is shown if errors occur during the documentation export
* Classes now only show their directly declared members, not the inherited ones
* Made sure that all function return types are shown

# Deprecations

* Support for Mac has been dropped. As a workaround, the [Sigasi plugin](https://marketplace.eclipse.org/content/sigasi-studio) can still be installed in Eclipse on Mac.
* After careful consideration, the OneSpin integration has been dropped. Sigasi aims to provide results at type time, this is a fundamental incompatibility compared to OneSpin's processing time.
* **[Verilog]** Rename has been disabled as it was not providing useful results.

# Talkback changes

* Talkback is now automatically offered to be enabled for educational licenses
* Pressing the `without features` link on the welcome page when you have no (valid) license opens a dialog offering to enable talkback
* Talkback also notes which license a user uses
* Talkback no longer notes the command line arguments used to start Eclipse

# New and Noteworthy Changes

* It's now possible to start a Verilog tutorial through **Help > Sigasi > Start Verilog Tutorial**
* Introduced a new theme with all-new Sigasi logos and artwork
* Made icons in our import and export wizards consistent
* Improved consistency & typography between our views, wizards, and dialogs
* Changed default severity of the [Disallow reg datatype]({{< ref "manual/rules/verilog_reg.md" >}}) linting from `WARNING` to `INFO`
* **[Verilog]** Sigasi now supports include paths starting from the root (`/`) e.g. ``` `include "/libraries/includes/include.svh"```
* **[Verilog]** Library name is no longer shown in the names of design units in the [Libraries View]({{< ref "manual/views.md#libraries-view" >}})
* **[Verilog]** Navigation has been improved to feel snappier. It will now immediately open the relevant region
* **[Verilog]** Assigns to interfaces are now also shown in the [Block Diagram]({{< ref "manual/views.md#block-diagram-view" >}})
* **[Verilog]** Sigasi now also checks that untagged unions do not use dynamic types or `chandle`s
* **[VHDL]** You can now only select top levels of the given project in [Sigasi Auto Export]({{< ref "manual/tools.md#auto-export" >}})
* **[VHDL]** Component instantiations now insert default values and no longer add a redundant space before the semicolon
* **[VHDL]** When assigning identifiers using string literals that include underscores, Sigasi now shows a warning as this is only possible in bit string literals
{{< figure src="/img/releasenotes/5.0/ErrorOnUnderscoreInString.png" link="/img/releasenotes/5.0/ErrorOnUnderscoreInString.png" title="Underscores are illegal in string literals">}}

# Updates

* Sigasi now uses Chromium 88 for rendering graphics and the [Documentation View]({{< ref "manual/views.md#documentation-view" >}}). This improves the performance and stability of these views

# Bug fixes

* Fixed alphabetical sorting in the [Hierarchy View]({{< ref "manual/views.md#hierarchy-view" >}})
* Made sure all items have icons in [Open Design Unit]({{< ref "manual/editor.md#open-design-unit" >}})
* Fixed alignment of options on the VHDL preference page
* **[VUnit]** Missing python installations are now correctly reported to the user
* **[Verilog]** Made buttons on the preprocessor property page more responsive
* **[VHDL]** Fixed VHDL 2019 conditional variable processing in singular, non-project files
* **[VHDL]** Fixed a rare case where formatting didn't apply to parts of the code
* **[VHDL]** The quickfix for the [component/entity mismatch]({{< ref "manual/rules/check-for-component-entity-mismatch.md" >}}) now shows up when the entity contains empty ports
* **[VHDL]** Range checks now also work in VHDL 2019

# Update or install?

You can download the stand-alone version of the latest preview from:

* <https://download.sigasi.com/preview/latest/com.sigasi.hdt.product-linux.gtk.x86_64.zip>
* <https://download.sigasi.com/preview/latest/com.sigasi.hdt.product-win32.win32.x86_64.zip>

You can also update automatically when setting **Preferences > Install/Update > Available Software Sites > Add...** :
`https://download.sigasi.com/preview/studio/`

SHA sums ([more info]({{< ref "/faq.md#how-can-i-check-a-sha-sum" >}})) can be checked via <https://download.sigasi.com/preview/latest/sigasistudio-sha1.txt>.

# System requirements

* Sigasi Studio standalone is supported on:
  * Windows: Windows 10 (64-bit) or newer
  * Linux: RedHat Enterprise Linux RHEL 7.7 (64-bit) or newer
    * Sigasi Studio depends on `libXss.so` which can be obtained by installing `libXScrnSaver`
  * More information on supported OSes can be found [on the Eclipse website](https://www.eclipse.org/projects/project-plan.php?planurl=http://www.eclipse.org/eclipse/development/plans/eclipse_project_plan_4_18.xml#target_environments)
* Sigasi Studio as a plugin in your Eclipse installation:
  * Eclipse IDE 2021-03 up to and including Eclipse IDE 2022-03
  * Java JRE 11 or 17

We recommend at least **4GB of memory** available for Sigasi Studio,
and you need **about 1GB** of free disk space.

# Feedback

We welcome your feedback through the usual channels or the comments below. Note that comments are cleared after each [official release](/releasenotes).
