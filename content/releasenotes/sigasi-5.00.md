---
title: Sigasi Studio 5.0
date: 2023-01-05
lastmod: 2023-01-05
comments: true
pager: true
---

{{< figure src="/img/releasenotes/5.0/splash.png" link="/img/releasenotes/5.0/splash.png" title="New Sigasi 5 theme" class="uk-align-center" >}}

We proudly present the all-new **Sigasi Studio 5**.
In this release, we introduce the **unique Sigasi analysis engine for Verilog and SystemVerilog**, improved **autocomplete**, and faster **documentation generation**.

# Next Level Verilog and SystemVerilog Support

**Speed**, **Accuracy**, **Consistency**: To enable new levels of productivity and usability we've engineered the new Sigasi analysis engine with these primary goals in mind. It is the foundation for the new features in this and future releases. We can confidently say that we raised our support for Verilog and SystemVerilog to the next level.

The Sigasi analysis engine continuously powers through your project to provide precise and immediate feedback. Due to its massively parallelized approach, it scales up to any kind of project. The engine is agnostic to your design methodology, provides feedback at type time, and directs your focus to the root cause of potential problems.  
Rest assured: **while you design, we verify, let's keep moving**!

## Smart Error Reporting and Navigation

Sigasi 5 has a vastly improved understanding of the designs in your project. Based on the analysis that continuously runs in the background, Sigasi provides reliable and consistent feedback about missing declarations, broken references, and other semantic problems. The reported errors will guide you to the root cause of the issues, hiding distracting consequential problems.

{{< figure src="/img/releasenotes/5.0/rootcause.png" link="/img/releasenotes/5.0/rootcause.png" title="Focus on root cause of issues" width="450" >}}

<style>
  #annotated-list li::marker {
    color: #f37825
  }
  #annotated-list li:nth-child(1)::marker {
    content: '➊ '
  }
  #annotated-list li:nth-child(2)::marker {
    content: '➋ '
  }
  #annotated-list li:nth-child(3)::marker {
    content: '➌ '
  }
</style>
<ol id="annotated-list">
  <li>
    The variable <code>veggies</code> is declared with an unknown type. This is the root cause of the problem.
  </li>
  <li>
    The usage of <code>veggies</code> does not report any consequential problems.
  </li>
  <li>
    <code>potatoes</code> is accessed on an unresolved object <code>no</code>. That is reported as the root cause, no consequential error is reported on <code>potatoes</code>.
  </li>
</ol>

Even the most complex design hierarchies are understood and validated instantaneously.  Sigasi 5 analyzes the regular instantiations, the module tree, and bind directives. No matter how complex or deep your design is, the hierarchy information is immediately available at your fingertips. You can follow your hierarchical references, navigate to the referenced instances and structures, and immediately get an accurate understanding of your design. No matter how many top-level units your project contains. Everything is discovered, analyzed, and checked.

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

The example illustrates the superb support for interfaces in Sigasi 5. The interface declaration <span style="color:#f37825">➊</span> defines two ports `gnt` and `ack`.  The `top` module <span style="color:#f37825">➋</span> uses a generic, untyped interface port. Upon instantiation <span style="color:#f37825">➌</span> of the module, Sigasi 5 understands that `ack` and `gnt` <span style="color:#f37825">➍</span> are accessible on `a` in the module body, but `data` is not. All Sigasi features work accordingly, e.g. navigation, autocomplete, and highlighting.

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

For this release, in addition to some smaller refinements, the focus is on faster documentation export.

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
* OneSpin integration has been dropped
* **[Verilog]** Renaming of identifiers has been disabled pending a rework of the rename functionality on top of the new Verilog analysis engine
* **[Verilog]** The [rename design unit to match filename quickfix]({{< ref "manual/rules/verilog_style.md#file-name-does-not-match-design-unit" >}}) was disabled for the same reason

# Talkback Changes

* Talkback now automatically offers to enable itself for educational users
* Pressing the `without features` link on the welcome page when you have no (valid) license opens a dialog offering to enable talkback
* Talkback notes which license a user uses
* Talkback no longer notes the command line arguments used to start Eclipse

# Further New and Noteworthy Changes

* Introduced a new theme with all-new Sigasi logos and artwork
* Made icons in our import and export wizards consistent
* Improved consistency & typography between Sigasi views, wizards, and dialogs
* The Verilog tutorial is now available through **Help > Sigasi > Start Verilog Tutorial**
* Our tutorials have been updated to reflect the new 5.0 functionality
* **[Verilog]** Navigation has been improved to feel snappier. It now immediately opens the relevant region
* **[Verilog]** Added support for include-directives using absolute paths e.g. ``` `include "/libraries/includes/my_include_file.svh"```.  These include paths will be resolved starting from the root of your Sigasi project and ignore the include search paths that were configured.
* **[Verilog]** Changed default severity of the [Disallow reg datatype]({{< ref "manual/rules/verilog_reg.md" >}}) linting from `WARNING` to `INFO`
* **[Verilog]** Library names are no longer shown as part of the name of design units in the [Libraries View]({{< ref "manual/views.md#libraries-view" >}})
* **[Verilog]** Assigns to interfaces are now also shown in the [Block Diagram]({{< ref "manual/views.md#block-diagram-view" >}})
* **[Verilog]** Sigasi now also checks that untagged unions do not use dynamic types or `chandle`s
* **[VHDL]** [Sigasi Auto Export]({{< ref "manual/tools.md#auto-export" >}}) nor restricts top levels to those present in the given project
* **[VHDL]** Component instantiations now insert default values and no longer add a redundant space before the semicolon
* **[VHDL]** A warning is shown when assigning identifiers using string literals that include underscores, as this is only possible in bit string literals

{{< figure src="/img/releasenotes/5.0/ErrorOnUnderscoreInString.png" link="/img/releasenotes/5.0/ErrorOnUnderscoreInString.png" title="Underscores are illegal in string literals"  width="550" >}}

# Updates

* Updated to Chromium 88 for rendering graphics and the [Documentation View]({{< ref "manual/views.md#documentation-view" >}}). This improves the performance and stability of these views

# Bug Fixes

* Fixed alphabetical sorting in the [Hierarchy View]({{< ref "manual/views.md#hierarchy-view" >}})
* [Open Design Unit]({{< ref "manual/editor.md#open-design-unit" >}}) now always has icons for all items
* VHDL preference page options are now properly aligned
* **[VUnit]** Missing python installations are now correctly reported to the user
* **[Verilog]** Preprocessor property page buttons are now more responsive
* **[VHDL]** Fixed VHDL 2019 conditional variable processing in singular, non-project files
* **[VHDL]** Fixed a rare formatting case where it did not apply to parts of the code
* **[VHDL]** The quickfix for the [component/entity mismatch]({{< ref "manual/rules/check-for-component-entity-mismatch.md" >}}) now shows up when the entity contains empty ports
* **[VHDL]** Range checks now work in VHDL 2019

Thank you for all the [bug reports](mailto:support@sigasi.com) and for enabling [Talkback]({{< ref "manual/talkback.md" >}}). All your reports have helped us fix many issues that would otherwise go unnoticed.

# System Requirements

* Sigasi Studio standalone is supported on:
  * Windows: Windows 10 or Windows 11 64-bit
  * Linux: RedHat Enterprise Linux RHEL 7.7 64-bit or newer, including RHEL 8
    * Sigasi Studio depends on `libXss.so` which can be obtained by installing `libXScrnSaver`
    * More information on supported OSes can be found [on the Eclipse website](https://www.eclipse.org/projects/project-plan.php?planurl=http://www.eclipse.org/eclipse/development/plans/eclipse_project_plan_4_18.xml#target_environments)

We recommend at least **4GB of memory** available for Sigasi Studio,
and you need **about 1GB** of free disk space.
