---
title: Sigasi Studio 5.3
date: 2023-09-07
lastmod: 2023-10-10
comments: true
pager: true
menu:
  insightsmenu:
    parent: releasenotes
    weight: 97
---

Sigasi Studio 5.3 introduces many **new DO-254 compatible VHDL design linting rules**, more ways to **check coding guidelines and naming conventions**, means to **differentiate between RTL and non-RTL code**, as well as new **Verilog vector linting rules** and enhanced support for **SystemVerilog parameterized classes**.

As per usual, [Veresta](https://www.sigasi.com/veresta/) and our [VS Code extension](https://www.sigasi.com/vscode/) benefit from all of the changes not explicitly marked as {{< pill text="Eclipse" >}}. Additionally, Veresta 5.3 brings **project documentation generation** to your **CI/CD** environment.

## TL;DR

Sigasi 5.3 introduces **many new {{< pill text="VHDL" >}} style rules** to implement your **project-specific coding guidelines and naming conventions**. You can now enforce coding conventions such as line length, prohibited language features, consistent vector directions, keyword capitalization, and many more. Furthermore, we are adding new naming conventions for constructs such as input/output/inout ports, enumeration literals, functions, and procedures. These can be configured with **new visually pleasing preference pages**.
These allow you to configure **different severities for RTL code and non-RTL code**. Finally, we have split off header comment pattern matching into separate preferences, e.g., for entities, packages, and function header comments.

Aside from the _style_ rules mentioned above, **five {{< pill text="VHDL" >}} design linting rules** make their entrance:

- Clock signal not used as clock
- Incomplete reset branch
- Comparison of vectors with different sizes
- Missing full constant declaration
- Duplicate choices in case statements

Many of these new design and style linting rules apply to the **DO-254 standard**. Sigasi 5.3 is an essential tool for working towards a fully compliant DO-254 design process.

Beyond VHDL, there are **two new {{< pill text="Verilog" >}} linting rules** regarding vector usage:

- Implicit vector to boolean conversion
- Vector as edge event expression

{{< pill text="SystemVerilog" >}} designers will be pleased to learn that Sigasi's support for parameterized classes was greatly improved in this release, too. Navigating complex class hierarchies is a breeze and meaningful feedback is provided at type-time.

**Autocomplete** for all languages has received a **speedup** of up to 50% for large projects and a more complete list of suggestions is offered.

As announced in the previous releases, we have removed the support for the [Graphics Configuration Language]({{< ref "/manual/eclipse/graphics" >}}).

Finally, this release is once again packed with many bug fixes and small improvements.

## VHDL Linting Rules

Sigasi 5.3 offers more than 250 VHDL linting rules.

### New Preference Pages

All of these new preference pages are available in {{< pill text="Eclipse" >}}.

#### Linting Configuration

Before we jump into all the {{< pill text="VHDL" >}} linting rules, let us first show you how to configure them using the redesigned linting rule preference page (**Right-click project > Properties > Verilog/VHDL Errors/Warnings**).

- New foldable families allow for easy grouping of linting rules and editing their severities
- Improved descriptions of all linting rules
- Icons now visually highlight the currently configured severity
- Many linting rules have parameters that can be tweaked in this view
- Linting rule severities can be set separately for RTL and non-RTL code

{{< figure src="/img/releasenotes/5.3/NewPreferencePage.png" link="/img/releasenotes/5.3/NewPreferencePage.png" title="Brand new ways to configure rules" class="uk-align-center" width="80%">}}

#### VHDL Identification

The RTL code detection mechanism can be configured per project by going to **Right-click project > Properties > VHDL Identification**.

- Via a naming convention for an RTL architecture
- By detecting verification code

This allows you to set different linting rule severities for RTL and non-RTL code.

{{< learn_more "/manual/common/description-style" >}}

{{< figure src="/img/releasenotes/5.3/VhdlIdentification.png" link="/img/releasenotes/5.3/VhdlIdentification.png" title="Configure RTL detection mechanism" class="uk-align-center"  width="80%">}}

#### Naming Conventions

We have extended the Naming Conventions preference page at **Window > Preferences > Sigasi > VHDL > Naming Conventions**. Naming conventions can now also be configured using an invalid pattern and many additional naming conventions are available.

{{< learn_more "/manual/rules/naming-conventions" >}}

{{< figure src="/img/releasenotes/5.3/NewNamingConventions.png" link="/img/releasenotes/5.3/NewNamingConventions.png" title="New naming conventions and invalid pattern support" class="uk-align-center"  width="80%">}}

#### Comment Headers

The Comment Header configuration moved from the naming conventions to a new preference page at **Window > Preferences > Sigasi > VHDL > Header Comments**. Aside from files, headers describing constructs such as entities, packages, and functions can now also be validated.

{{< learn_more "/manual/rules/check-header-comment" >}}

{{< figure src="/img/releasenotes/5.3/HeaderComments.png" link="/img/releasenotes/5.3/HeaderComments.png" title="Separate header comments page" class="uk-align-center"  width="80%" >}}

<style>
    .uk-card-default {
      background-color:#fff;
      color:#666;
      box-shadow: 0 10px 25px rgba(0,0,0,.15);
      padding-left: 20px;
      padding-right: 20px;
      border-radius: 10px;
      align-items: center;
    }

    .uk-card-media-left {
      padding-top: 20px;
      padding-bottom: 20px;
    }

    .uk-card-media-right {
      padding-top: 20px;
      padding-bottom: 20px;
    }

    .uk-card-body {
      padding-top: 20px;
      padding-bottom: 20px;
      padding-left: 0;
      padding-right: 0;
    }

    .uk-first-column {
      padding-right: 20px;
    }

    .uk-grid {
      margin-right: 0
    }

    .sigasi-rule-card img {
      margin-bottom: 0;
      box-shadow: 5px 5px 5px rgba(0,0,0,.10);
    }
</style>

### Design Linting Rules

These rules check for potential design flaws and coding errors. They are enabled by default, but you can usually edit their severity and parameters through your project preferences: **Right-click project > Properties > VHDL Errors/Warnings**.

#### Clock Signal Not Used as Clock

{{< lcard learn="/manual/rules/vhdl-clock-signal-not-used-as-clock" caption="Clock signals should only be used to clock registers. Other usages can cause problems during logic synthesis or static timing analysis.">}}
{{< figure src="/img/releasenotes/5.3/ClockAsClock.png" link="/img/releasenotes/5.3/ClockAsClock.png" title="Clock not used as clock" class="uk-align-center" >}}
{{< /lcard >}}

#### Incomplete Reset Branch

{{< rcard learn="/manual/rules/vhdl-incomplete-reset-branch" caption="A reset branch should reset all registers defined in the clocked branch of a process. Otherwise, unexpected enable or clock gating logic can be synthesized for non-reset registers." >}}
{{< figure src="/img/releasenotes/5.3/IncompleteResetBranch.png" link="/img/releasenotes/5.3/IncompleteResetBranch.png" title="Missing reset in branch" class="uk-align-center" >}}
{{< /rcard >}}

#### Comparison of Vectors with Different Size

{{< lcard learn="/manual/rules/vhdl-comparison-of-vectors-with-different-sizes" caption="When comparing vectors with default comparators, they should be *exactly* the same size. The use of a generic to define this size can potentially cause issues down the road, e.g., when later design reconfiguration makes the compared vectors differently sized." >}}
{{< figure src="/img/releasenotes/5.3/DifferentSizedVectors.png" link="/img/releasenotes/5.3/DifferentSizedVectors.png" title="Vector ranges need to be exactly the same size" class="uk-align-center" >}}
{{< /lcard >}}

#### Missing Full Constant Declaration

{{< rcard learn="/manual/rules/vhdl_deferred_constants" caption="The VHDL language specification mandates that an uninitialized, deferred constant declaration in a package declaration must have a corresponding fully initialized constant declaration in the package body." >}}
{{< figure src="/img/releasenotes/5.3/MissingFullDeclaration.png" link="/img/releasenotes/5.3/MissingFullDeclaration.png" title="Missing full constant declaration in package body" class="uk-align-center" >}}
{{< /rcard >}}

#### Case Alternative Contains Duplicate Choices

{{< lcard learn="/manual/rules/check-case-duplicated-statements" caption="In VHDL every choice in a case statement must be unique. This pre-existing rule was extended to check all values, not only enumerations." >}}
{{< figure src="/img/releasenotes/5.3/DuplicateChoiceInCase.png" link="/img/releasenotes/5.3/DuplicateChoiceInCase.png" title="Duplicate choice in case statement" class="uk-align-center" >}}
{{< /lcard >}}

### Style Rules

Style rules check a certain coding style. Since they are a question of taste, they are set to {{< severity ignore 0 >}} `ignore` by default. You can enable them in your project preferences: **Right-click project > Properties > VHDL Errors/Warnings**.

#### Sequence of Operators without Parentheses

{{< rcard learn="/manual/rules/vhdl_style/#sequence-of-operators-without-parentheses" caption=`While it is not necessary to add parentheses, they can clarify evaluation order in expressions with operators of different associativity. 

You might wonder, is it <code>2 ** (8 - 1)</code> or <code>(2 ** 8) - 1</code>?  (Narrator: _It is the latter_)
` >}}
{{< figure src="/img/releasenotes/5.3/RequireParentheses.png" link="/img/releasenotes/5.3/RequireParentheses.png" title="Unclear math without parentheses" class="uk-align-center" >}}
{{< /rcard >}}

#### Unconstrained Signal or Variable of Integer Type

{{< lcard learn="/manual/rules/vhdl-unconstrained-signal-or-variable-of-integer-type" caption="Integers with a range constraint allow the synthesis tool to optimize the number of bits used by the signal or variable. This rule requires all signals and variables of integer types to be range-constrained to benefit from that optimization." >}}
{{< figure src="/img/releasenotes/5.3/UnconstrainedInteger.png" link="/img/releasenotes/5.3/UnconstrainedInteger.png" title="Use of unconstrained integer" class="uk-align-center" >}}
{{< /lcard >}}

#### Constant Width Vector Assigned to Signal

{{< rcard learn="/manual/rules/vhdl_style/#constant-width-vector-assigned-to-signal" caption="For portability and maintainability reasons, you may want to prohibit constant width vector assignments to a signal. Using constant values or aggregates (`(others -> '0')`) prevent potential maintainability hurdles." >}}
{{< figure src="/img/releasenotes/5.3/ConstantWidthVectorToSignal.png" link="/img/releasenotes/5.3/ConstantWidthVectorToSignal.png" title="Constant width vector assigned to a signal" >}}
{{< /rcard >}}

#### Inconsistent Reset Style

{{< lcard learn="/manual/rules/vhdl-inconsistent-reset-style" caption="It is good practice to use either only async reset blocks or only sync reset blocks. You can configure whether you prefer the synchronous or asynchronous reset style." >}}
{{< figure src="/img/releasenotes/5.3/InconsistentResetStyle.png" link="/img/releasenotes/5.3/InconsistentResetStyle.png" title="Synchronous reset used while asynchronous is preferred" class="uk-align-center" >}}
{{< /lcard >}}

#### Incorrect Vector Range Direction

{{< rcard learn="/manual/rules/incorrect-vector-range-direction" caption="For clarity and maintainability, it is best to use either ascending or descending ranges for all the vectors in your design. We recommend a descending range (`downto`) as this causes the leftmost bit to be the most significant and the rightmost to be least significant; this is what the VHDL standard library's arithmetic operators assume as well." >}}
{{< figure src="/img/releasenotes/5.3/IncorrectVectorRange.png" link="/img/releasenotes/5.3/IncorrectVectorRange.png" title="Incorrect vector range direction is used" class="uk-align-center" >}}
{{< /rcard >}}

#### Unexpected Keyword Capitalization

{{< lcard learn="/manual/rules/incorrect-keyword-capitalization" caption="VHDL is case-insensitive in almost all aspects, including keywords. Using a consistent casing for keywords improves the readability of the design. We recommend synchronizing this setting with the VHDL [Lowercase/Uppercase keywords](/manual/eclipse/editor#configuration) formatting option." >}}
{{< figure src="/img/releasenotes/5.3/UnexpectedKeywordCapitalization.png" link="/img/releasenotes/5.3/UnexpectedKeywordCapitalization.png" title="Lower case 'and' expected but found upper case" class="uk-align-center" >}}
{{< /lcard >}}

#### File Contains Multiple Primary Units

{{< rcard learn="/manual/rules/vhdl_library_unit_location#file-contains-multiple-primary-units" caption=`
For clarity, you may want to have each primary unit described in its own file. A primary unit is one of the following

- entity
- configuration
- package
- package instantiation
- context
` >}}
{{< figure src="/img/releasenotes/5.3/MultiplePrimaryUnits.png" link="/img/releasenotes/5.3/MultiplePrimaryUnits.png" title="Multiple primary units defined in the same file" class="uk-align-center" >}}
{{< /rcard >}}

#### Secondary Unit in Unexpected File: Separate File from Primary Unit

{{< lcard learn="/manual/rules/vhdl_library_unit_location#secondary-unit-in-unexpected-file" caption="For clarity, you may want to have secondary units described in their own file. A secondary unit is an architecture or a package body. The rule can be configured differently for each of them." >}}
{{< figure src="/img/releasenotes/5.3/SecondaryInSeparateFile.png" link="/img/releasenotes/5.3/SecondaryInSeparateFile.png" title="The secondary unit is expected in a separate file, but it is not" class="uk-align-center" >}}
{{< /lcard >}}

#### Secondary Unit in Unexpected File: Same File as Primary Unit

{{< rcard learn="/manual/rules/vhdl_library_unit_location#secondary-unit-in-unexpected-file" caption="You may want to have secondary units described in the same file as their corresponding primary unit to emphasize their close connection. A secondary unit is an architecture or a package body. The rule can be configured differently for each of them." >}}
{{< figure src="/img/releasenotes/5.3/SecondaryInSameFile.png" link="/img/releasenotes/5.3/SecondaryInSameFile.png" title="The secondary unit is expected in the same file, but it is not" class="uk-align-center" >}}
{{< /rcard >}}

#### Multiple Objects in One Declaration

{{< lcard learn="/manual/rules/vhdl-multiple-objects-declaration" caption="Multiple objects in one declaration can decrease readability making it harder to maintain code." >}}
{{< figure src="/img/releasenotes/5.3/MultipleObjects.png" link="/img/releasenotes/5.3/MultipleObjects.png" title="Declaration of multiple objects at once" class="uk-align-center" >}}
{{< /lcard >}}

#### Unexpected FSM State Type

{{< rcard learn="/manual/rules/unexpected-fsm-state-type" caption="We recommend declaring the FSM states as enumerated data types. Other state types can be configured, for example, an array of bits. Enumerated state types make VHDL code generally more readable and facilitate flexibility in the synthesis implementation since the encoding style can be selected without modifying the code." >}}
{{< figure src="/img/releasenotes/5.3/UnexpectedFsmStateType.png" link="/img/releasenotes/5.3/UnexpectedFsmStateType.png" title="Using array of std_logic as state in FSM but expected enumeration" class="uk-align-center" >}}
{{< /rcard >}}

#### Line is Too Long

{{< lcard learn="/manual/rules/vhdl_style/#vhdl-code-line-too-long" caption="Many coding guidelines mandate a maximum line length for readability." >}}
{{< figure src="/img/releasenotes/5.3/LineIsTooLong.png" link="/img/releasenotes/5.3/LineIsTooLong.png" title="Line is too long" class="uk-align-center" >}}
{{< /lcard >}}

#### Magic Number, Bitstring, or String in Statement

{{< rcard learn="/manual/rules/vhdl_style/#magic-number-bitstring-or-string-in-statement" caption="Magic numbers can impact maintainability. While their purpose was probably clear during implementation, it might no longer be later in the design cycle. Hardcoding the magic numbers everywhere instead of using constants also requires increased effort if they ever need changing." >}}
{{< figure src="/img/releasenotes/5.3/MagicNumber.png" link="/img/releasenotes/5.3/MagicNumber.png" title="Magic numbers or (bit)strings being used in reset" class="uk-align-center" >}}
{{< /rcard >}}

#### Inconsistent Clock Edge Usage

{{< lcard learn="/manual/rules/check-inconsistent-clock-edge" caption="Depending on the technology, you may want to use either the rising or falling edge of the clock. Using both clock edges requires greater attention to maintain correctness." >}}
{{< figure src="/img/releasenotes/5.3/InconsistentClockEdge.png" link="/img/releasenotes/5.3/InconsistentClockEdge.png" title="Different clock edges being used in design" class="uk-align-center" >}}
{{< /lcard >}}

#### Unexpected Clock Edge Specification Style

{{< rcard learn="/manual/rules/check-unexpected-clock-style" caption="A clock edge can be specified by using edge functions (`rising_edge` and `falling_edge`) or event attributes (`not clk'STABLE` or `clk'EVENT`) and checking the clock signal level. We recommend using edge functions; however, whether you use the recommended style or not, you may find it beneficial to use a consistent style for readability. The preferred style can be configured." >}}
{{< figure src="/img/releasenotes/5.3/UnexpectedClockEdge.png" link="/img/releasenotes/5.3/UnexpectedClockEdge.png" title="Event attribute clock edge specification found but expected edge function" class="uk-align-center" >}}
{{< /rcard >}}

#### Deep Nesting of Conditional and Loop Statements

{{< lcard learn="/manual/rules/check-deep-nested-statements" caption="Many coding guidelines discourage deeply nested conditional and loop statements, as they reduce code readability. The limit can be configured." >}}
{{< figure src="/img/releasenotes/5.3/DeepNesting.png" link="/img/releasenotes/5.3/DeepNesting.png" title="Nesting limit exceeded" class="uk-align-center" >}}
{{< /lcard >}}

#### Prohibited Attribute

{{< rcard learn="/manual/rules/feature-restrictions#prohibited-attribute" caption="Consider this rule if certain attributes are deprecated, discouraged, or not applicable to your design. Note that you can add prohibitions specifically for RTL or non-RTL code." >}}
{{< figure src="/img/releasenotes/5.3/ProhibitedAttribute.png" link="/img/releasenotes/5.3/ProhibitedAttribute.png" title="The attribute 'length' is prohibited" class="uk-align-center" >}}
{{< /rcard >}}

#### Prohibited Keyword or Operator

{{< lcard learn="/manual/rules/feature-restrictions#prohibited-keyword-or-operator" caption="Consider this rule if certain keywords or operators are deprecated, discouraged, or not applicable to your design, for example, to prevent the use of a certain construct. Note that you can add prohibitions specifically for RTL or non-RTL code." >}}
{{< figure src="/img/releasenotes/5.3/ProhibitedKeyword.png" link="/img/releasenotes/5.3/ProhibitedKeyword.png" title="'linkage' keyword is prohibited" class="uk-align-center" >}}
{{< /lcard >}}

#### Prohibited Library

{{< rcard learn="/manual/rules/feature-restrictions#prohibited-library" caption="Consider this rule if certain libraries are deprecated, discouraged, or not applicable to your design, for example, an old version of an IP block. Note that you can add prohibitions specifically for RTL or non-RTL code." >}}
{{< figure src="/img/releasenotes/5.3/ProhibitedLibrary.png" link="/img/releasenotes/5.3/ProhibitedLibrary.png" title="Using two prohibited libraries" class="uk-align-center" >}}
{{< /rcard >}}

#### Prohibited Package

{{< lcard learn="/manual/rules/feature-restrictions#prohibited-package" caption="Consider this rule if certain packages are deprecated, discouraged, or not applicable to your design. Note that you can add prohibitions specifically for RTL or non-RTL code." >}}
{{< figure src="/img/releasenotes/5.3/ProhibitedPackage.png" link="/img/releasenotes/5.3/ProhibitedPackage.png" title="Using a prohibited package" class="uk-align-center" >}}
{{< /lcard >}}

#### Prohibited Pragma

{{< rcard learn="/manual/rules/feature-restrictions#prohibited-pragma" caption="Consider this rule if certain pragmas are deprecated, discouraged, or not applicable to your design, for example, because you want to ensure compatibility with your synthesis tool. Note that you can add prohibitions specifically for RTL or non-RTL code." >}}
{{< figure src="/img/releasenotes/5.3/ProhibitedPragma.png" link="/img/releasenotes/5.3/ProhibitedPragma.png" title="Using a prohibited pragma" class="uk-align-center" >}}
{{< /rcard >}}

## Verilog Linting Rules

### Implicit Vector to Boolean Conversion

{{< lcard learn="/manual/rules/verilog_vector_to_boolean_conversion" caption="A vector in an `if` statement is implicitly converted to a boolean by comparing it to 0. This is a valid code style, but it could also have happened accidentally. In this case, `rst` was accidentally assigned the type `logic [7:0]` instead of `logic`." >}}
{{< figure src="/img/releasenotes/5.3/ImplicitVectorToBooleanConversion.png" link="/img/releasenotes/5.3/ImplicitVectorToBooleanConversion.png" title="'rst' implicitly converted to boolean" class="uk-align-center" >}}
{{< /lcard >}}

### Vector as Edge Event Expression

{{< rcard learn="/manual/rules/verilog_vector_as_edge_expression" caption="Using a vector as an edge event expression is valid, but you have to be aware that only changes to the least significant bit will be considered as an edge event. In this case, `clk` was accidentally declared with the type `logic [7:0]` instead of `logic`." >}}
{{< figure src="/img/releasenotes/5.3/VectorAsEdgeEvent.png" link="/img/releasenotes/5.3/VectorAsEdgeEvent.png" title="'clk' vector used as edge event" class="uk-align-center" >}}
{{< /rcard >}}

## Further New and Noteworthy

- {{< pill text="Eclipse" >}} Added feedback to unsuccessful project imports
- {{< pill text="Eclipse" >}} Improved highlighting for multiline strings and numbers
- {{< pill text="Eclipse" >}} The [Libraries View]({{< ref "/manual/eclipse/views.md#libraries-view" >}}) now shows whether code is RTL, behavioral, or a testbench
  {{< figure src="/img/releasenotes/5.3/libraries-view-description-style.png" link="/img/releasenotes/5.3/libraries-view-description-style.png" title="Examine design units' description style" class="uk-align-center" >}}
- {{< pill text="Eclipse" >}} {{< pill text="VHDL" >}} Allow configuring separate severities for RTL and non-RTL
- {{< pill text="Verilog" >}} The [Multiple Statements per Line]({{< ref "/manual/rules/verilog_style.md#multiple-statements-per-line" >}}) linting rule's severity is now configurable

## Quality of Life

- {{< pill text="Eclipse" >}} Removed viewport scrolling on format, greatly reducing interruptions caused by [formatting]({{< ref "/manual/eclipse/editor.md#code-formatting" >}})
- {{< pill text="Eclipse" >}} Improved consistency of menu items
- {{< pill text="Eclipse" >}} Added keybindings to the **Keys** preference page allowing them to be rebound. This regards keybindings like [Quick Outline]({{< ref "/manual/eclipse/views.md#quick-outline-view" >}}) (**Ctrl+O**) and [Class Hierarchy]({{< ref "/manual/eclipse/views.md#class-hierarchy-view" >}}) (**F4**).
- {{< pill text="Eclipse" >}} {{< pill text="Verilog" >}} Enum members are grouped in the Class Hierarchy member pane
- {{< pill text="Verilog" >}} Improved autocomplete performance by up to 50% for large projects
- {{< pill text="Verilog" >}} Improved formatting when using includes and macro invocations
- {{< pill text="Verilog" >}} Improved formatting inside of included files
- {{< pill text="Verilog" >}} Improved [Smart Indent]({{< ref "/manual/eclipse/editor.md#smart-indentation" >}}) when using interfaces as module ports
- {{< pill text="Verilog" >}} The [File Contains Multiple Design Units]({{< ref "/manual/rules/verilog_style.md#file-contains-multiple-design-unit" >}}) linting rule is only reported on the second design unit, greatly reducing noise
- {{< pill text="VHDL" >}} Added missing squiggly line for the [Process with Missing Sensitivity List and Wait Statements]({{< ref "/manual/rules/sensitivity-list#presence-of-either-a-sensitivity-list-or-one-or-more-wait-statements-in-a-process" >}}) linting rule

## Updates and Deprecations

- As announced in the previous releases, we have removed the support for the [Graphics Configuration Language]({{< ref "/manual/eclipse/graphics" >}}).

## Bug Fixes

- Fixed formatting when zero width no-break spaces are used
- {{< pill text="Eclipse" >}} Fixed prefix highlighting in autocomplete suggestions
- {{< pill text="Eclipse" >}} Fixed editor <-> [Hierarchy View]({{< ref "/manual/eclipse/views.md#hierarchy-view" >}}) cursor synchronization when duplicate entries are present
- {{< pill text="Eclipse" >}} Fixed missing autocomplete when specific syntax errors are present
- {{< pill text="Eclipse" >}} Fixed missing date for [User-defined Autocomplete Templates]({{< ref "/manual/eclipse/editor.md#based-on-templates" >}}) using custom date formats
- {{< pill text="Eclipse" >}} {{< pill text="Verilog" >}} Fixed missing autocomplete when typing `$` with the autocomplete dialog open
- {{< pill text="Eclipse" >}} {{< pill text="Verilog" >}} Fixed missing [Block Diagram]({{< ref "/manual/eclipse/views.md#block-diagram-view" >}}) elements for complex assign statements
- {{< pill text="Eclipse" >}} {{< pill text="Verilog" >}} Fixed editor <-> [Preprocessor View]({{< ref "/manual/eclipse/views.md#preprocessor-view" >}}) cursor synchronization when double or triple-click selecting
- {{< pill text="Verilog" >}} Fixed the Add Declaration Quick Fix when used in if statements
- {{< pill text="Verilog" >}} Fixed missing autocompletes following a function invocation
- {{< pill text="Verilog" >}} Fixed missing autocompletes on large projects
- {{< pill text="Verilog" >}} Fixed incorrect hover when using include files
- {{< pill text="Verilog" >}} Allow interface classes in SystemVerilog packages
- {{< pill text="Verilog" >}} Predefined SystemVerilog macros (e.g., `` `SV_COV_NOCOV``) are recognized in unmapped files
- {{< pill text="VHDL" >}} Fixed false positive [dead code]({{< ref "/manual/rules/dead-code-lint.md" >}}) error
- {{< pill text="VHDL" >}} Fixed the label of entity and component autocomplete instantiations when the **Formatting > Lowercase/Uppercase keywords** preference is enabled
- {{< pill text="VHDL" >}} Fixed missing autocomplete in empty package
- {{< pill text="VHDL" >}} Fixed missing first character following a [Type Conversion Autocomplete]({{< ref "/manual/eclipse/editor.md#type-conversion" >}})

Thank you for all the [bug reports](mailto:support@sigasi.com) and for enabling [Talkback]({{< ref "manual/common/talkback.md" >}}). All your reports have helped us fix many issues that would otherwise have gone unnoticed.

# Sigasi Studio 5.3.1 Point Release

On October 10, we released Sigasi Studio 5.3.1.
This release contains the following changes and bug fixes:

- More resilient processing of `.project` files
- Parameters in the `.prefs` files are case-insensitive
- {{< pill text="Eclipse" >}} Fixed `Errors/Warnings` page not opening when [creating a builder]({{< ref "/manual/eclipse/tools.md#creating-a-builder">}})

# System Requirements

- Sigasi Studio standalone is supported on:
  - Windows 10 or Windows 11 64-bit
  - RedHat Enterprise Linux RHEL 7.9 64-bit or newer, including RHEL 8 and 9
    - Sigasi Studio depends on `libXss.so` which can be obtained by installing `libXScrnSaver`
    - Sigasi Studio depends on `webkit2gtk4.0` which can be installed through your package manager of choice
  - More information on supported Linux OSes can be found [on the Eclipse website](https://www.eclipse.org/projects/project-plan.php?planurl=http://www.eclipse.org/eclipse/development/plans/eclipse_project_plan_4_19.xml#target_environments)
- Sigasi Studio as a plugin in your Eclipse installation:
  - Eclipse IDE 2021-03 up to and including Eclipse IDE 2023-03
  - Java JRE 11 or 17
- Sigasi Studio [extension](https://www.sigasi.com/vscode/) for VS Code:
  - Windows 10 or Windows 11 64-bit
  - RedHat Enterprise Linux RHEL 8 or 9 64-bit
  - VS Code >= 1.77 and < 2.0
  - Java JRE 11 or 17 (shipped with the extension)
- [Veresta](https://www.sigasi.com/veresta/)
  - Windows 10 or Windows 11 64-bit
  - RedHat Enterprise Linux RHEL 7.9 64-bit or newer, including RHEL 8 and 9
  - Java JRE 11 or 17 (shipped with Veresta)

We recommend having at least **4GB of memory** and **about 1GB** of free disk space available for Sigasi Studio.
