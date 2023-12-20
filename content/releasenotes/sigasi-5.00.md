---
title: Sigasi Studio 5.0
date: 2023-01-06
lastmod: 2023-03-30
comments: true
pager: true
menu:
  insightsmenu:
    parent: releasenotes
    weight: 100
---

{{< figure src="/img/releasenotes/5.0/splash.png" link="/img/releasenotes/5.0/splash.png" title="New Sigasi 5 theme" class="uk-align-center" >}}

We proudly present the all-new **Sigasi Studio 5**.
In this release, we introduce the **unique Sigasi analysis engine for Verilog and SystemVerilog**, improved **autocomplete**, and faster **documentation generation**.

Note that [Veresta](https://www.sigasi.com/veresta/) and our [VS Code extension](https://marketplace.visualstudio.com/items?itemName=Sigasi.sigasi-vscode) benefit from all of the changes not explicitly marked as {{< pill text="Eclipse" >}}.

# Next Level Verilog and SystemVerilog Support

**Speed**, **Accuracy**, **Consistency**: To enable new levels of productivity and usability we've engineered the new Sigasi analysis engine with these primary goals in mind. It is the foundation for the new features in this and future releases. We can confidently say that we raised our support for Verilog and SystemVerilog to the next level.

The Sigasi analysis engine continuously powers through your project to provide precise and immediate feedback. Due to its massively parallelized approach, it scales up to any kind of project. The engine is agnostic to your design methodology, provides feedback at type time, and directs your focus to the root cause of potential problems.  
Rest assured: **while you design, we verify, let's keep moving**!

## Smart Error Reporting and Navigation

Sigasi 5 has a vastly improved understanding of the designs in your project. Based on the analysis that continuously runs in the background, Sigasi provides reliable and consistent feedback about missing declarations, broken references, and other semantic problems. The reported errors will guide you to the root cause of the issues, hiding distracting consequential problems.

{{< figure src="/img/releasenotes/5.0/rootcause.png" link="/img/releasenotes/5.0/rootcause.png" title="Focus on root cause of issues" width="450" >}}

<div class="annotated-list">

* The variable `veggies` is declared with an unknown type. This is the root cause of the problem.
* The usage of `veggies` does not report any consequential problems.
* `potatoes` is accessed on an unresolved object `no`. That is reported as the root cause, no consequential error is reported on `potatoes`.

</div>

Even the most complex design hierarchies are understood and validated instantaneously. Sigasi 5 analyzes the regular instantiations, the module tree, and bind directives. No matter how complex or deep your design is, the hierarchy information is immediately available at your fingertips. You can follow your hierarchical references, navigate to the referenced instances and structures, and immediately get an accurate understanding of your design. No matter how many top-level units your project contains. Everything is discovered, analyzed, and checked.

{{< figure src="/img/releasenotes/5.0/hierarchical.png" link="/img/releasenotes/5.0/hierarchical.png" title="Hierarchical accessibility" width="450" >}}

The hierarchy is created from four different modules, `top`, `a`, `b`, and `c`. They form a tree. The screenshot demonstrates that lower-level modules can readily reference items above them in the hierarchy.

Duplicate declarations, ambiguous references, or simply a copy-and-paste mistake can sometimes be hard to track down. Occasionally, a duplicate top-level design can be on purpose, depending on your project setup. Sigasi will power through anyhow and provide all the information you need to make the right decisions and remain in the flow.

{{< figure src="/img/releasenotes/5.0/fulladder.png" link="/img/releasenotes/5.0/fulladder.png" title="Duplicate declarations of 'fulladder'" width="500" >}}

In a misconfigured project it can be the case that multiple declarations with the same name are available. The screenshot above shows an example, where a copy of an older `fulladder` implementation is lingering around accidentally.

{{< figure src="/img/releasenotes/5.0/duplicate decl 2.png" link="/img/releasenotes/5.0/duplicate decl 2.png" title="Error on use of a duplicate declaration" width="450" >}}

Sigasi 5 will reveal this configuration problem and point out the ambiguity when `fulladder` is being instantiated.

{{< figure src="/img/releasenotes/5.0/duplicate decl 3.png" link="/img/releasenotes/5.0/duplicate decl 3.png" title="Navigation on use of a duplicate declaration" width="400" >}}

All the ambiguous declarations are revealed when you choose Go-to-declaration (Ctrl+Hover). Sigasi will point out the duplicates and show their location such that you can directly jump to them.

## Labels and Hovers

Rich and accurate visualizations of your design elements are at the heart of Sigasi. The hovers and the label representations show detailed information augmented with the results of the project analysis.

{{< figure src="/img/releasenotes/5.0/outline-code.png" link="/img/releasenotes/5.0/outline-code.png" title="Verilog code example to showcase the outline" width="350" >}}

{{< figure src="/img/releasenotes/5.0/outline-outline.png" link="/img/releasenotes/5.0/outline-outline.png" title="Outline with consistent, accurate labels" width="350" >}}

The explicit and implicit properties of Verilog and SystemVerilog objects are rendered in the outline view and all other locations in Sigasi. The details also include information about the object types. Similarly, rich data is also shown in the hover for all declarations and all usages.

{{< figure src="/img/releasenotes/5.0/hovers 1.png" link="/img/releasenotes/5.0/hovers 1.png" title="Hover with consistent, accurate labels" width="450" >}}

The hover information includes details about split declarations or ambiguously resolved references.

## Extended SystemVerilog Support

### Generic Interfaces

Sigasi 5 has sophisticated support for SV `interface`s and `modport`s. Error checking, code navigation, and occurrence highlighting fundamentally help to understand the design and to follow the port mappings. We support named as well as generic interfaces.

{{< figure src="/img/releasenotes/5.0/interfaces with numbers.png" link="/img/releasenotes/5.0/interfaces with numbers.png" title="Deep analysis of generic interfaces" width="350" >}}

The example illustrates the superb support for interfaces in Sigasi 5. The interface declaration <span style="color:#ec6508">➊</span> defines two ports `gnt` and `ack`. The `top` module <span style="color:#ec6508">➋</span> uses a generic, untyped interface port. Upon instantiation <span style="color:#ec6508">➌</span> of the module, Sigasi 5 understands that `ack` and `gnt` <span style="color:#ec6508">➍</span> are accessible on `a` in the module body, but `data` is not. All Sigasi features work accordingly, e.g. navigation, autocomplete, and highlighting.

### Complex Enum Declarations

SystemVerilog has concise means to define enum types, which are fully understood by Sigasi 5. Usages of the enum literals are accurately detected, analyzed, and highlighted. 

{{< figure src="/img/releasenotes/5.0/enums.png" link="/img/releasenotes/5.0/enums.png" title="Deep understanding of enums" width="350" >}}

The capabilities when working with enum declarations are demonstrated in the screenshot. The `fancy_enum` is defined with 10 literals, one of them being a simple enum literal, the other 9 remaining literals are unfolded from the range declaration on `complex`.

# Improved Autocomplete

**Higher relevance**, **better prioritization**, and **improved usability** of the autocomplete suggestions embrace the reliability and consistency focus of this release.

Selecting the best autocomplete suggestion has never been easier. Autocomplete now uses substring matching for VHDL, Verilog, and SystemVerilog to filter relevant suggestions, even when you only remember part of the name. The autocomplete pop-up displays the type of each suggestion and matching characters are shown in bold as you are typing.

{{< video_control src="/img/releasenotes/5.0/SubsequenceDemoVhdl.mp4" link="/img/releasenotes/5.0/SubsequenceDemoVhdl.mp4" title="Autocomplete using subsequence" thumb="/img/releasenotes/5.0/SubsequenceDemoVhdl.jpg" width="450" >}}

Specifically for Verilog and SystemVerilog, accuracy improved across the board but especially in scopes like `$unit`, `$root`, `local::`, hierarchical references, structs, and enumeration type ranges i.e. `enumeration[N]`.

{{< figure src="/img/releasenotes/5.0/unitAutocomplete.png" link="/img/releasenotes/5.0/unitAutocomplete.png" title="$unit autocomplete" width="350" >}}

A new prioritization mechanism offers you the best matching suggestions first. It is based on a self-adapting statistical model incorporating code-usage statistics (how often an identifier is used) and user-usage statistics (how often a similar autocomplete was selected in a similar context). The image above demonstrates prioritization based on proximity (`STOP` is closer to the cursor than `SLEEP`), while the one below demonstrates code-usage statistics.

{{< figure src="/img/releasenotes/5.0/AutocompletePrioritization.png" link="/img/releasenotes/5.0/AutocompletePrioritization.png" title="Statistical suggestion prioritization">}}

Finally, autocomplete now conveniently works inside macro parameters.

{{< video_control src="/img/releasenotes/5.0/MacroParameterAutocomplete.mp4" link="/img/releasenotes/5.0/MacroParameterAutocomplete.mp4" title="Autocomplete in macro invocations" thumb="/img/releasenotes/5.0/MacroParameterAutocomplete.jpg" width="450" >}}

# Documentation Improvements

The focus in this release, in addition to some smaller refinements, is on faster documentation export in {{< pill text="Eclipse" >}}.

## Documentation Performance

Documentation generation speed has been massively improved by running the most lengthy part, the diagram generation, in parallel. This approach scales linearly with the number of assigned threads. The average 8-core machine can now generate documentation up to 8x faster.
{{< figure src="/img/releasenotes/5.0/ParallelDocumentationGeneration.png" link="/img/releasenotes/5.0/ParallelDocumentationGeneration.png" title="Parallel diagram generation during documentation export" width="450" >}}

The number of threads that should be used for diagram generation can be configured in **Preferences > Sigasi > Advanced**.
{{< figure src="/img/releasenotes/5.0/ParallelDiagramOptions.png" link="/img/releasenotes/5.0/ParallelDiagramOptions.png" title="Change number of threads for parallel diagram generation" width="450" >}}

## Small Refinements

* The generated HTML now adheres to the HTML and CSS standards
* Classes now only show their directly declared members, not the inherited ones
* All function return types are shown
* Source code and identifiers always use a monospace font

{{< figure src="/img/releasenotes/5.0/MonospaceInDocumentation.png" link="/img/releasenotes/5.0/MonospaceInDocumentation.png" title="Source code uses monospace fonts in documentation" width="350" >}}

# Removals

* Support for Mac has been dropped
* {{< pill text="Eclipse" >}} OneSpin integration has been dropped
* {{< pill text="Verilog" >}} Renaming identifiers has been disabled pending a rework of the rename functionality on top of the new Verilog analysis engine
* {{< pill text="Verilog" >}} {{< pill text="Eclipse" >}} The [rename design unit to match filename quickfix]({{< ref "manual/rules/verilog_style.md#file-name-does-not-match-design-unit" >}}) was disabled for the same reason

# Talkback Changes

* Talkback notes which license a user uses
* {{< pill text="Eclipse" >}} Talkback now automatically offers to enable itself for educational users
* {{< pill text="Eclipse" >}} Pressing the `without features` link on the welcome page when you have no (valid) license opens a dialog offering to enable talkback
* {{< pill text="Eclipse" >}} Talkback no longer notes the command line arguments used to start Eclipse

# Further New and Noteworthy Changes

* Introduced a new theme with all-new Sigasi logos and artwork
* Our tutorials have been updated to reflect the new 5.0 functionality
* {{< pill text="Eclipse" >}} Made icons in our import and export wizards consistent
* {{< pill text="Eclipse" >}} Improved consistency & typography between Sigasi views, wizards, and dialogs
* {{< pill text="Eclipse" >}} The Verilog tutorial is now available at **Help > Sigasi > Start Verilog Tutorial**
* {{< pill text="Verilog" >}} Navigation has been improved to feel snappier. It now immediately opens the relevant region
* {{< pill text="Verilog" >}} Added support for include-directives using absolute paths e.g. ``` `include "/libraries/includes/my_include_file.svh"```. These include paths will be resolved starting from the root of your Sigasi project and ignore the include search paths that were configured.
* {{< pill text="Verilog" >}} Changed default severity of the [Disallow reg datatype]({{< ref "manual/rules/verilog_reg.md" >}}) linting from `WARNING` to `INFO`
* {{< pill text="Verilog" >}} Sigasi now also checks that untagged unions do not use dynamic types or `chandle`s
* {{< pill text="Verilog" >}} {{< pill text="Eclipse" >}} Assigns to interfaces are now also shown in the [Block Diagram]({{< ref "manual/eclipse/views.md#block-diagram-view" >}})
* {{< pill text="Verilog" >}} {{< pill text="Eclipse" >}} Library names are no longer shown as part of the name of design units in the [Libraries View]({{< ref "manual/eclipse/views.md#libraries-view" >}})
* {{< pill text="VHDL" >}} Component instantiations now insert default values and no longer add a redundant space before the semicolon
* {{< pill text="VHDL" >}} {{< pill text="Eclipse" >}} [Sigasi Auto Export]({{< ref "manual/eclipse/tools.md#auto-export" >}}) now restricts top levels to those present in the given project
* {{< pill text="VHDL" >}} A warning is shown when assigning identifiers using string literals that include underscores, as this is only possible in bit string literals

{{< figure src="/img/releasenotes/5.0/ErrorOnUnderscoreInString.png" link="/img/releasenotes/5.0/ErrorOnUnderscoreInString.png" title="Underscores are illegal in string literals" width="550" >}}

# Updates

* {{< pill text="Eclipse" >}} Updated to Chromium 88 for rendering graphics and the [Documentation View]({{< ref "manual/eclipse/views.md#documentation-view" >}}). This improves the performance and stability of these views

# Bug Fixes

* [Open Design Unit]({{< ref "manual/eclipse/editor.md#open-design-unit" >}}) now always has icons for all items
* {{< pill text="Eclipse" >}} Fixed alphabetical sorting in the [Hierarchy View]({{< ref "manual/eclipse/views.md#hierarchy-view" >}})
* {{< pill text="Eclipse" >}} VHDL preference page options are now properly aligned
* {{< pill text="Eclipse" >}} Missing python installations are now correctly reported to the user
* {{< pill text="Verilog" >}} {{< pill text="Eclipse" >}} Preprocessor property page buttons are now more responsive
* {{< pill text="VHDL" >}} Fixed VHDL 2019 conditional variable processing in singular, non-project files
* {{< pill text="VHDL" >}} Fixed a rare formatting case where it did not apply to parts of the code
* {{< pill text="VHDL" >}} Range checks now work in VHDL 2019
* {{< pill text="VHDL" >}} {{< pill text="Eclipse" >}} The quickfix for the [component/entity mismatch]({{< ref "manual/rules/check-for-component-entity-mismatch.md" >}}) now shows up when the entity contains empty ports

Thank you for all the [bug reports](mailto:support@sigasi.com) and for enabling [Talkback]({{< ref "manual/common/talkback.md" >}}). All your reports have helped us fix many issues that would otherwise go unnoticed.

# System Requirements

* Sigasi Studio standalone is supported on:
  * Windows: Windows 10 or Windows 11 64-bit
  * Linux: RedHat Enterprise Linux RHEL 7.7 64-bit or newer, including RHEL 8
    * Sigasi Studio depends on `libXss.so` which can be obtained by installing `libXScrnSaver`
    * More information on supported OSes can be found [on the Eclipse website](https://www.eclipse.org/projects/project-plan.php?planurl=http://www.eclipse.org/eclipse/development/plans/eclipse_project_plan_4_18.xml#target_environments)
* Sigasi Studio as plugin in your own Eclipse installation:
  * Eclipse IDE 2021-03 up to and including Eclipse IDE 2022-12
  * Java JRE 11 or 17

We recommend at least **4GB of memory** available for Sigasi Studio,
and you need **about 1GB** of free disk space.

**NOTE:** you may run into the warning dialog below when installing Sigasi Studio in your **own {{< pill text="Eclipse 2022-12" >}} or above** installation because this Eclipse version introduces GPG signing.
{{< figure src="/img/releasenotes/5.0/GPGSigningWarning.png" link="/img/releasenotes/5.0/GPGSigningWarning.png" title="Expected GPG signing warning in Eclipse 2022-12 and above." >}}

# Sigasi Studio 5.0.1 Point Release

On February 14, we released Sigasi Studio 5.0.1.
This release contains the following bug fixes and improvements:

* Autocomplete proposals ignore `_` in the prefix. This results in better ordering for snake_case identifiers i.e. `my_clk` will be one of the top proposals when using the prefix `mycl`
* {{< pill text="Eclipse" >}} Sigasi Studio is installable as plugin in your own Eclipse installation given these prerequisites
  * Eclipse IDE 2021-03 up to and including Eclipse IDE 2022-12
  * Java JRE 11 or 17
* {{< pill text="Eclipse" >}} Hover windows correctly resize to fit their full content
* {{< pill text="Eclipse" >}} Applying an autocomplete only moves the viewport if the cursor is not yet within it
* {{< pill text="Eclipse" >}} Fixed an issue where **Window > Preferences > Sigasi > Advanced** could only be opened once per session

# Sigasi Studio 5.0.2 Point Release

On March 1, we released Sigasi Studio 5.0.2.
This release contains solutions for the following reported bugs:

* Templates are not the top suggestion during autocomplete
* {{< pill text="Eclipse" >}} Error dialog is shown when opening Sigasi Studio
* {{< pill text="Eclipse" >}} Caching error for specific files
* {{< pill text="Eclipse" >}} Hover and autocomplete block the editor and take a long time to pop-up
