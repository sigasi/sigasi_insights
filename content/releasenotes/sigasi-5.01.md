---
title: Sigasi Studio 5.1
date: 2023-03-17
lastmod: 2023-03-17
comments: true
pager: true
---

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
  #annotated-list li:nth-child(4)::marker {
    content: '➍ '
  }
  #annotated-list li:nth-child(5)::marker {
    content: '➎ '
  }
  #annotated-list li:nth-child(6)::marker {
    content: '➏ '
  }
  #annotated-list li:nth-child(7)::marker {
    content: '➐ '
  }
  #annotated-list li:nth-child(8)::marker {
    content: '➑ '
  }
  #annotated-list li:nth-child(9)::marker {
    content: '➒ '
  }
</style>

{{< figure src="/img/releasenotes/5.1/NewLintingRules.png" link="/img/releasenotes/5.1/NewLintingRules.png" title="A host of new linting rules" class="uk-align-center" width=550 >}}

The Sigasi Studio 5.1 release focuses on **productivity** and **verification** for Verilog and SystemVerilog. Building on the new foundations laid in the {{< page "releasenotes/sigasi-5.00.md" >}} release, we added a **type checker**, many **new linting rules**, improved our **performance and memory usage**, and further refined our **information-rich hovers and views**. These improvements increase the designer's efficiency and liberate them from many intricacies of Verilog and SystemVerilog.

# New Verilog and SystemVerilog Linting Rules

**Precision**, **correctness**, and **insight** are of paramount value when creating your design, all the more when it quickly becomes more and more complicated. Trying to balance project setup, expansive languages like Verilog and SystemVerilog, legacy code, and external IP can be daunting. Here is where our linting rules shine, alleviating these difficulties and allowing you to focus on the design.

Problems ranging from **implicit casting** to **missing code** or **ambiguous references** are a thing of the past. No need to wait for your linter or synthesis tool to wade through a sea of errors and warnings. Sigasi 5.1 helps you catch problems **early**, instantly detecting them at every keystroke.

## Type Checker

Verilog and SystemVerilog's type compatibility rules can be obscure, especially considering implicit type conversion and complex expression evaluation rules. To help you avoid any pitfalls, the type checker ensures that assigning ports, nets, or variables is done safely. You can find a preview of the type checker's manyfold capabilities below.

<!-- https://gitlab.sigasi.com/dev/sigasi/-/issues/9174 -->
<!-- https://gitlab.sigasi.com/dev/sigasi/-/issues/9175 -->
<!-- https://gitlab.sigasi.com/dev/sigasi/-/issues/9585 -->
<!-- https://gitlab.sigasi.com/dev/sigasi/-/issues/9173 -->
<!-- https://gitlab.sigasi.com/dev/sigasi/-/issues/9170 -->

### Unions and Structs

{{< figure src="/img/releasenotes/5.1/TypeCheckerUnionAndStruct.png" link="/img/releasenotes/5.1/TypeCheckerUnionAndStruct.png" title="Type checking of structs and unions" class="uk-align-center" width=550 >}}

Even though these two `union`s and `struct`s have the same signature, they implicitly define two anonymous types; they are thus not assignment compatible.

### String Variables and Literals

{{< figure src="/img/releasenotes/5.1/TypeCheckerStringVariablesAndLiterals.png" link="/img/releasenotes/5.1/TypeCheckerStringVariablesAndLiterals.png" title="Type checking for string variables and literals" class="uk-align-center" width=550 >}}

`string` variables and literals behave differently.

<ol id="annotated-list">
  <li>
    <code>null</code> cannot be assigned to <code>string</code> variables.  
  </li>
  <li>
    String variables cannot be assigned to <code>int</code> variables because they are dynamically sized ordered collections of characters that are not assignment compatible to <code>int</code>.
  </li>
  <li>
    However, string literals can be used to initialize <code>int</code>s as they are treated as <code>unsigned integer</code> constants.
  </li>
</ol>

### Syntax Confusion and Implicit Casting

{{< figure src="/img/releasenotes/5.1/TypeCheckerAssignmentVsCast.png" link="/img/releasenotes/5.1/TypeCheckerAssignmentVsCast.png" title="Assignments can easily be confused with concatenation" class="uk-align-center" width=550 >}}

<ol id="annotated-list">
  <li>
    The concatenation and assignment pattern syntax confusingly resemble each other a lot. 
  </li>
  <li>
    It is not always clear what assignments will be implicitly cast. <code>enum</code>s are implicitly cast to </code>int</code>s, but not the other way around.
  </li>
</ol>

### Classes

{{< figure src="/img/releasenotes/5.1/TypeCheckerClassHierarchy.png" link="/img/releasenotes/5.1/TypeCheckerClassHierarchy.png" title="Type checking class hierarchies" class="uk-align-center" width=550 >}}

Subclasses can be assigned to superclasses, but not vice-versa. Every `Apple` is a fruit, but not every `Fruit` is an `Apple`. Similarly, classes unrelated to one another (`Fruit` and `Vegetable`) are not assignment compatible.

Sigasi Studio also helps with the other type compatibility rules defined in SystemVerilog. For example:
- The type of the actual value should be **equivalent** to the formal `ref` port type
- Argument types should **match** when comparing overridden or extern method signatures

If you like what we presented here, you will be happy to hear that we will expand further upon our type checker release by release.

## New Linting Rules

Small oversights, ambiguity, and keeping track of a language's many rules and restrictions are struggles you deal with daily. Instead of waiting for elaboration or synthesis to spot in hindsight obvious mistakes, Sigasi 5.1 instantly points these out.

### Ambiguous Reference

<!-- https://gitlab.sigasi.com/dev/sigasi/-/issues/9531 -->

{{< figure src="/img/releasenotes/5.1/AmbiguousReferences.png" link="/img/releasenotes/5.1/AmbiguousReferences.png" title="Ambiguous references" class="uk-align-center" width=550 >}}

Inaccuracies in the project setup can result in multiple declarations with the same name. Sigasi flags references to these names as ambiguous.

[Learn more <span uk-icon="forward"></span>]({{< ref "manual/rules/verilog_ambiguous_reference.md" >}})

### Duplicate Declaration

<!-- https://gitlab.sigasi.com/dev/sigasi/-/issues/9532 -->

{{< figure src="/img/releasenotes/5.1/DuplicateDeclarations.png" link="/img/releasenotes/5.1/DuplicateDeclarations.png" title="Duplicate declarations" class="uk-align-center" width=550 >}}

Similarly, multiple declarations with the same name within the same file - or scope - will be flagged as duplicates.

[Learn more <span uk-icon="forward"></span>]({{< ref "manual/rules/verilog_duplicate_declaration.md" >}})

### Localparam Override

<!-- https://gitlab.sigasi.com/dev/sigasi/-/issues/9656 -->

{{< figure src="/img/releasenotes/5.1/LocalparamOverride.png" link="/img/releasenotes/5.1/LocalparamOverride.png" title="Localparam cannot be overridden" class="uk-align-center" width=550 >}}

Verilog and SystemVerilog forbid `localparam`s from being overridden. This is a simple enough restriction, but you also have to be aware of `parameter`s that are implicit `localparam`s.

<ol id="annotated-list">
  <li>
    <code>HEIGHT</code> is defined as a parameter but it implicitly is a </code>localparam</code>.  
  </li>
  <li>
    Overriding <code>HEIGHT</code> is not allowed as it is actually a <code>localparam</code>.
  </li>
</ol>

[Learn more <span uk-icon="forward"></span>]({{< ref "manual/rules/verilog_parameters.md#local-parameter-cannot-be-overwritten" >}})

### Overridden Method Signature Mismatch

<!-- https://gitlab.sigasi.com/dev/sigasi/-/issues/9590 -->

{{< figure src="/img/releasenotes/5.1/MethodSignatureMismatch.png" link="/img/releasenotes/5.1/MethodSignatureMismatch.png" title="Method signature mismatch" class="uk-align-center" width=550 >}}

In SystemVerilog, the types, names, qualifiers, and directions of the arguments of `virtual` method overrides must match their prototype. There are even more checks on the return type and the assigned default values of arguments.

[Learn more <span uk-icon="forward"></span>]({{< ref "manual/rules/verilog_overridden_method_signature_mismatch.md" >}})

### Extern Subroutine Signature Mismatch

<!-- https://gitlab.sigasi.com/dev/sigasi/-/issues/9613 -->

{{< figure src="/img/releasenotes/5.1/ExternSubroutineSignatureMismatch.png" link="/img/releasenotes/5.1/ExternSubroutineSignatureMismatch.png" title="Extern subroutine signature mismatch" class="uk-align-center" width=550 >}}

Similarly, method declarations must match their prototypes exactly ... though there are some exceptions for default arguments.

[Learn more <span uk-icon="forward"></span>]({{< ref "manual/rules/verilog_out_of_bound_method_declarations.md" >}})

### Class Member Visibility

<!-- https://gitlab.sigasi.com/dev/sigasi/-/issues/9534 -->

{{< figure src="/img/releasenotes/5.1/ClassMemberVisibility.png" link="/img/releasenotes/5.1/ClassMemberVisibility.png" title="Class member visibility" class="uk-align-center" width=550 >}}

When working with classes, it can be hard to keep track of what properties, methods, classes ... you have access to.
Sigasi flags illegal accesses such that you can easily correct the access modifier.

[Learn more <span uk-icon="forward"></span>]({{< ref "manual/rules/verilog_class_item_visibility.md" >}})

### Empty Loops and Conditionals

<!-- https://gitlab.sigasi.com/dev/sigasi/-/issues/9647 -->

{{< figure src="/img/releasenotes/5.1/EmptyLoopsAndConditionals.png" link="/img/releasenotes/5.1/EmptyLoopsAndConditionals.png" title="Empty loop and conditional linting" class="uk-align-center" width=550 >}}

Empty loop bodies are most likely unintended. They consume compute cycles without any useful contribution to the functionality of your design. Empty conditional branches can cause unwanted latches to be generated. They can also result from a typo or indicate some missing cases.

[Learn more <span uk-icon="forward"></span>]({{< ref "manual/rules/verilog_style.md#empty-loops-and-conditional-branches" >}})

# Improved Performance and Reduced Memory Usage

Since we are obsessed with performance, we kept ourselves busy for Sigasi 5.1, further improving the interactive feedback of your favorite IDE.
After all, to enable **productivity**, a snappy experience is of the utmost importance.

For that purpose, we worked on different parts of the analysis pipeline and carefully assessed various usage patterns and scenarios. For the use cases that we focused on for this release, we managed to reduce the runtime on average by 80% compared to Sigasi 5.0. For some parts of the analysis engine, an improvement of up to 95% could be achieved.

{{< figure src="/img/releasenotes/5.1/PerformanceChart.png" link="/img/releasenotes/5.1/PerformanceChart.png" title="Relative Performance Improvements" class="uk-align-center" width=550 >}}

The chart shows the relative timing measurements of two different, sizable projects as a comparison between Sigasi 5.0 and 5.1. Starting from a baseline of 100%, we see that the same operation takes only a fraction of the time in Sigasi 5.1.

Besides performance, we also worked towards reduced memory consumption of Sigasi. Especially in large projects, you will find that Sigasi 5.1 requires, on average, 30% less memory depending on the structure of your project.

# Information-rich Hovers and Views

To keep you in _the flow_, we introduced rich and accurate labels and hovers in {{< page "releasenotes/sigasi-5.00.md" >}}. Context switches to look up small details are unnecessary as you are presented with many details at a glance through our information-rich hovers and views. In this release, we have refined our existing labels, added more information, and fixed a few incorrect labels across the board - be it in [hovers]({{< ref "manual/editor.md#hover" >}}), the [Outline View]({{< ref "manual/views.md#outline-view" >}}), or the [Hierarchy View]({{< ref "manual/views.md#hierarchy-view" >}}) - in VHDL, Verilog, or SystemVerilog.

* {{< pvhd >}} Improved labels in the Hierarchy View to show the configured name if a design unit binding indication is used, e.g., `for all : test use entity work.low(RTL);`
* {{< pvhd >}} The Hierarchy View now shows the `generate` body label
* {{< psv >}} Added hovers for built-in functions
* {{< psv >}} Added type information to `genvar` labels
* {{< psv >}} Added `pure` and `virtual` information to `interface class`'s function labels
* {{< psv >}} Improved the labels within a `randsequence`
* {{< psv >}} Improved the labels of named assertions
* {{< psv >}} Improved the labels of (un)packed arrays
* {{< psv >}} Improved the labels of anonymous types
* {{< psv >}} Fixed the label of references to ports of concatenated packed arrays, e.g., `a` in `module m(.a({b, c}))`

# GPG Signing

Eclipse 4.26 (2022-12) added GPG certificate checking capabilities. When you install new _plugins_, you will be prompted to trust any not-yet-trusted GPG keys or unsigned artifacts. Because Sigasi artifacts are correctly signed using GPG, you can expect to see the following screen the first time you install or update Sigasi in an Eclipse >= 4.26.

{{< figure src="/img/releasenotes/5.1/GPGDuringInstallation.png" link="/img/releasenotes/5.1/GPGDuringInstallation.png" title="GPG Trust Prompt" class="uk-align-center" width=550 >}}

Previously trusted keys can be inspected by going to **Window > Preferences > Install/Update > Trust**.

{{< figure src="/img/releasenotes/5.1/TrustPreferences.png" link="/img/releasenotes/5.1/TrustPreferences.png" title="GPG Trust Preferences" class="uk-align-center" width=750 >}}

You can refer to [this page]({{< ref "GPG.md" >}}) for all information regarding GPG at Sigasi.

# Further New and Noteworthy Changes

* The upper limit for the amount of autocomplete proposals has been increased. In practice, this means that important proposals will always be included.
* [Generated documentation]({{< ref "manual/documentation.md" >}}) now shows an empty cell instead of `unspecified` when no default is specified
* {{< pvhd >}} Added a linting rule to check that the characters in a string literal are legal  
{{< figure src="/img/releasenotes/5.1/IllegalStringLiteralCharacters.png" link="/img/releasenotes/5.1/IllegalStringLiteralCharacters.png" title="Illegal characters in string literal as initializer" class="uk-align-center" width=550 >}}  
* {{< pvhd >}} Added a linting rule to check whether spaces are used in extended identifiers referable from Verilog and SystemVerilog as these cannot be referenced in those languages  
{{< figure src="/img/releasenotes/5.1/ExtendedIdentifiersWithSpaces.png" link="/img/releasenotes/5.1/ExtendedIdentifiersWithSpaces.png" title="Unsupported extended identifiers" class="uk-align-center" width=550 >}}  
* {{< pvhd >}} Added formatting for `force` and `release` assignments
* {{< psv >}} Improved preprocessing performance
* {{< psv >}} Added navigation to identifiers in `showcancelled`, `noshowcancelled`, `pulsestyle_onevent`, `pulsestyle_ondetect`
* {{< psv >}} Added an error when a `genvar` is referenced outside the loop's body

# Quality of Life

* The [Problems View]({{< ref "manual/views.md#problems-view" >}}) `Sort by Location` now sorts by line number
* The VUnit installation path is now updated when you set your `python` path, even if there are no VUnit projects open
* The descriptions of the options in the Documentation Generation Wizard no longer change when you enable or disable them
* Added a description to the Export Marker wizard
* Added missing keybind for [Quick Outline]({{< ref "manual/views.md#quick-outline-view" >}})
* Added queueing for diagram exports. If an export is already in the works, it will not be canceled.
* Improved caret positioning after formatting such that it jumps around only when strictly necessary
* Improved icons for `typedef` and `nettype` in the Outline View
* Improved priorities for keywords in autocomplete. Relevant keywords are now listed higher.
* Fixed autocomplete proposals to highlight the matching prefix characters in bold
* Removed hovers that are empty for whatever reason
* Removed syntax highlighting of keywords in extended identifiers, e.g., `\extended id\` or `\extended$id `
* Removed [Suppress Warning]({{< ref "manual/linting.md#suppressing-warnings" >}}) Quick Fix when the problem is already suppressed
* {{< pvhd >}} Improved wording in many of our error messages
* {{< pvhd >}} Fixed extra whitespace in the [Add sensitivity list]({{< ref "manual/rules/sensitivity-list.md" >}}) Quick Fix
* {{< psv >}} Holding **Ctrl** while autocompleting a macro parameter now only replaces the parameter under the cursor instead of the rest of the line
* {{< psv >}} The variable being declared is no longer shown as autocomplete proposal when you are initializing it

# Bug Fixes

* The include directive autocomplete now shows proposals for files that need encoding, e.g., when they contain a space or non-ASCII characters
* Fixed the [Capture Heap Dump]({{< ref "manual/trouble.md#memory-snapshot" >}}) command
* Fixed a deadlock when closing a tab while the autocomplete window is open
* Fixed backspace inadvertently deleting multiple whitespace characters
* Fixed mac-style newlines (`\r`) breaking the Documentation Export
* Fixed unintended character substitution in the CSV Marker Export
* Fixed empty autocomplete when it is called very early during startup
* Fixed an occasional hang during navigation
* Fixed occasional incorrect navigation on **Ctrl+Click**
* {{< pvhd >}} The `Increase VHDL version` Quick Fix will now only update the file if the project already has the correct version
* {{< pvhd >}} Added linting when assigning `"-"` to a vector
* {{< pvhd >}} Added support for the standard library's `read` function to VHDL 2008 and 2019
* {{< pvhd >}} Fixed false positive warning when using `unsigned'()` as the default value for a `constant`
* {{< pvhd >}} Fixed indentation of comments during formatting when they are placed after instantiations
* {{< pvhd >}} Fixed false positive `variable is never written` when using non-shared protected type variables
* {{< psv >}} Include directives that start with a `/` now correctly resolve relative to the project root
* {{< psv >}} All inherited members in the [Class Hierarchy View]({{< ref "manual/views.md#class-hierarchy-view" >}}) are now colored consistently
* {{< psv >}} Added instance names to the Hierarchy View
* {{< psv >}} Added navigation from implicit port connections (e.g., `.clk`) to both the port/net and the actual
* {{< psv >}} Fixed highlighting for multiline string literals
* {{< psv >}} Fixed positioning of errors with unusual define directives
* {{< psv >}} Fixed links to parent classes in generated documentation
* {{< psv >}} Fixed empty Class Hierarchy View when opening it on a class that has a `task` and `function` with the same name
* {{< psv >}} Fixed type inference for real literals
* {{< psv >}} Fixed highlighting of parameters in multi declarations, e.g., `parameter WIDTH, SIZE`
* {{< psv >}} Fixed navigation of functions when a target is available in the enclosing class and the parent class
* {{< psv >}} Removed false positive override annotation in the Class Hierarchy View
* {{< psv >}} Removed duplicate `Open Declaration` links when a file is included multiple times
* {{< psv >}} Removed empty blocks in the Block Diagram for empty `for` loops

Thank you for all the [bug reports](mailto:support@sigasi.com) and for enabling [Talkback]({{< ref "manual/talkback.md" >}}). All your reports have helped us fix many issues that would otherwise go unnoticed.

# System Requirements

* Sigasi Studio standalone is supported on:
  * Windows: Windows 10 or Windows 11 64-bit
  * Linux: RedHat Enterprise Linux RHEL 7.7 64-bit or newer, including RHEL 8
    * Sigasi Studio depends on `libXss.so` which can be obtained by installing `libXScrnSaver`
    * More information on supported OSes can be found [on the Eclipse website](https://www.eclipse.org/projects/project-plan.php?planurl=http://www.eclipse.org/eclipse/development/plans/eclipse_project_plan_4_18.xml#target_environments)
* Sigasi Studio as a plugin in your Eclipse installation:
  * Eclipse IDE 2021-03 up to and including Eclipse IDE 2022-12
  * Java JRE 11 or 17

We recommend at least **4GB of memory** available for Sigasi Studio,
and you need **about 1GB** of free disk space.
