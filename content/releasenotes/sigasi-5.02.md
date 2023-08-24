---
title: Sigasi Studio 5.2
date: 2023-06-15
lastmod: 2023-08-09
comments: true
pager: true
menu:
  insightsmenu:
    parent: releasenotes
    weight: 98
---

For Verilog and SystemVerilog, Sigasi Studio 5.2 reintroduces **rename**, includes many **new linting rules**, and **improves type checking** by adding more contexts and rules.

As per usual, [Veresta](https://www.sigasi.com/veresta/) and our [VS Code extension](https://marketplace.visualstudio.com/items?itemName=Sigasi.sigasi-vscode) benefit from all of the changes not explicitly marked as {{< pill text="Eclipse" >}}. VS Code specific changes can be examined in its [changelog](https://marketplace.visualstudio.com/items/Sigasi.sigasi-vscode/changelog#user-content-new-in-5.2.0).

# Smart Rename Refactoring

Naming things is hard and we often get it wrong the first time. Maybe we have ignored a naming convention or we think of a better term later in the design. Whatever the reason, we often want to rename variables, functions, methods, or other elements over the entire design. Enter Sigasi's new and improved [Rename Refactoring]({{< ref "manual/eclipse/editor.md#rename-refactoring" >}}).

Sigasi understands hardware design and knows which identifiers link to which. It knows not to look in comments or inapplicable preprocessor code. By combining this information with our strong [Find References]({{< ref "manual/eclipse/editor.md#find-references" >}}) feature, we can safely carry out a rename over thousands of files, without introducing syntactic or semantic errors.

{{< video_control src="/img/releasenotes/5.2/Rename.mp4" link="/img/releasenotes/5.2/Rename.mp4" title="" thumb="/img/releasenotes/5.2/Rename.png" class="uk-align-center" >}}

{{< figure src="/img/releasenotes/5.2/RenameAnnotated.png" link="/img/releasenotes/5.2/RenameAnnotated.png" title="A difficult renaming situation" class="uk-align-center" >}}

The image above illustrates the difficulty of renaming. Clicking the image enlarges it.

Situations <span class="annotated">➋</span>-<span class="annotated">➐</span> are all locations where a `clk` identifier is used. However, in these cases, the `clk` identifier is actually referring to unrelated objects like ports in different modules, comments, local nets, or packages. Sigasi's rename refactoring only modifies the relevant usages of `clk` in <span class="annotated">➊</span> and leaves the others untouched.

# New Verilog and SystemVerilog Linting Rules

Like all languages, Verilog and SystemVerilog contain some areas that are more error-prone or harder to reason about than others. For this release, we worked on a few of these: compliance with language specifications, unused declarations, copy-and-paste slip-ups, and confusion in design hierarchy.

## Unused Declarations

Even with helpful features like [Occurrence Highlighting]({{< ref "/manual/eclipse/editor.md#occurrence-highlighting" >}}), [Semantic Highlighting]({{< ref "/manual/eclipse/editor.md#code-highlighting-syntax-coloring" >}}), and [Find References]({{< ref "/manual/eclipse/editor.md#find-references" >}}), interruptions in the data flow can be hard to spot. Sometimes, we rename something manually, other times, we remove a declaration, and occasionally we might make a typo. In all of these cases, we can end up with unused (macro) declarations or references to declarations that no longer exist. For the latter, Verilog and SystemVerilog try to be helpful by creating an _implicit net_. However, this is seldom what the designer intended.

{{< figure src="/img/releasenotes/5.2/Dataflow.png" link="/img/releasenotes/5.2/Dataflow.png" title="Unused declarations and implicit nets" class="uk-align-center" >}}

<div class="annotated-list">

- We were debugging earlier but forgot to remove the now unused macro declaration `` `DEBUG``. {{< learn_more "/manual/rules/verilog_unused_macros" >}}
- We create a separate net to connect to a module instance in <span class="annotated">➌</span>. {{< learn_more "/manual/rules/verilog_unused_declaration" >}}
- The net defined in <span class="annotated">➋</span> is used to connect up a module instantiation, but we made a typo. An implicit net is created for the misspelled `my_clok`. {{< learn_more "/manual/rules/verilog_implicit_net" >}}

</div>

## Compliance with Language Specification

The Verilog and SystemVerilog specification allow and forbid certain constructs. Some of the allowed constructs have dubious value. Sigasi helps write correct and unambiguous code, avoiding pitfalls and corner cases along the way.

### Multi-bit initial values for UDPs

The initial values for a `user-defined primitive` must all be single-bit. Assigning a multi-bit value is not allowed in Verilog and SystemVerilog.

{{< figure src="/img/releasenotes/5.2/UDPLint.png" link="/img/releasenotes/5.2/UDPLint.png" title="UDP initial values must be single-bit" class="uk-align-center" >}}

### Empty Concatenation and Assignment Pattern

Only queues and dynamic arrays can be initialized by an empty concatenation or an empty assignment pattern.

{{< figure src="/img/releasenotes/5.2/EmptyConcatenationAndAssignmentPattern.png" link="/img/releasenotes/5.2/EmptyConcatenationAndAssignmentPattern.png" title="Forbidden use of concatenation and assignment pattern" class="uk-align-center" >}}

<div class="annotated-list">

- Initializing an associative array by using a concatenation is not allowed. {{< learn_more "/manual/rules/verilog_empty_concatenation" >}}
- An assignment pattern can only be used for initialization if the number of elements in the pattern matches the number of elements in the target. {{< learn_more "/manual/rules/verilog_empty_assignment_pattern" >}}

</div>

### ANSI and Non-ANSI Ports

Modern ANSI port declarations were introduced in SystemVerilog. However, Verilog's original non-ANSI port declarations are still supported for backward compatibility. This burdens the designer by doubling the number of rules they must remember when creating port declarations.

{{< learn_more "/manual/rules/verilog_incorrect_port_declaration" >}}

#### ANSI Ports

ANSI ports are fully declared in the port list, in contrast to non-ANSI where only the name is present in the list, but the port declaration must be completed in a separate statement.

{{< figure src="/img/releasenotes/5.2/AnsiPorts.png" link="/img/releasenotes/5.2/AnsiPorts.png" title="ANSI port rules" class="uk-align-center" >}}

<div class="annotated-list">

- To use ANSI port declarations, the first port must declare its direction, port kind, or data type
- Mixing ANSI and non-ANSI styles is not allowed. Non-ANSI is only available for backward compatibility.
- Empty ports are only allowed (but discouraged) in non-ANSI port declarations. {{< learn_more "/manual/rules/verilog_empty_ansi_port" >}}

</div>

#### Non-ANSI Ports

Non-ANSI port declarations only define the name. The net and datatype are declared further on in the design unit.

{{< figure src="/img/releasenotes/5.2/NonAnsiPorts.png" link="/img/releasenotes/5.2/NonAnsiPorts.png" title="Non-ANSI port rules" class="uk-align-center" >}}

<div class="annotated-list">

- Ports can only be further declared if they are present in the port list
- Every defined port needs to be assigned a direction, data type, or net type
- Empty ports are allowed for non-ANSI, but they are most often a typo and do not reflect the intended design. {{< learn_more "/manual/rules/verilog_empty_non_ansi_port" >}}

</div>

## Hierarchical Confusion

Keeping an overview can be a challenge, but Sigasi keeps an eye on design and component hierarchies warning us when dubious patterns show up.

### Hiding Superclass Methods

When we "override" a non-virtual method with a virtual one we are not actually overriding it, it is being hidden.

{{< figure src="/img/releasenotes/5.2/NonVirtualMethodOverride.png" link="/img/releasenotes/5.2/NonVirtualMethodOverride.png" title="Hiding a non-virtual super method" class="uk-align-center" >}}

Looking at the example above, it would be fair to assume <span class="annotated">➎</span> and <span class="annotated">➏</span> would display the same value.

<div class="annotated-list">

- A method called `talk` is created on the superclass `Cat` and outputs `meow`
- A method called `talk` is created on the subclass `Garfield` and outputs `feed me`. This function hides `Cat.talk()` instead of overriding it.
- `garfield` is of type `Garfield`
- `garfield` is upcasted to `Cat`
- As `garfield` is of type `Garfield`, `talk()` outputs `feed me` as expected
- Surprisingly, the result is different from <span class="annotated">➎</span> because <span class="annotated">➋</span> was only **hiding** <span class="annotated">➊</span>, not overriding it. `meow` is printed.

</div>

{{< learn_more "/manual/rules/verilog_hiding_non_virtual_methods" >}}

### Hierarchical Upward References

Verilog and SystemVerilog allow referencing upwards in the component hierarchy. However, keeping the hierarchy in mind is a difficult task by itself, so referring to single lines within it affects the readability of the code, hurting debugability and maintainability.

{{< figure src="/img/releasenotes/5.2/UpwardReferencing.png" link="/img/releasenotes/5.2/UpwardReferencing.png" title="" class="uk-align-center" >}}

`clk_generator.clk` is only available because `clk_consumer` was instantiated in `clk_generator`. When a different top level is selected, the `clk` that is referred to might change depending on who instantiates `clk_consumer`.

{{< learn_more "/manual/rules/upward_reference" >}}

## Copy and Pasting

All good designers are lazy. We copy-paste to fill in recurring structures. However, once in a while, a lapse of attention causes us to forget to edit this copied code. Other times - due to a lack of caffeine - we accidentally add a few seemingly harmless characters, which end up structurally changing the design.

{{< figure src="/img/releasenotes/5.2/CopyPaste1.png" link="/img/releasenotes/5.2/CopyPaste1.png" title="Typographical slip-ups" class="uk-align-center" >}}

<div class="annotated-list">

- Being trigger-happy, we accidentally entered two commas. Verilog and SystemVerilog forbid empty parameters in parameter lists. {{< learn_more "/manual/rules/verilog_empty_parameters" >}}
- The port on line 10 was copy-pasted but we forgot to rename the port. {{< learn_more "/manual/rules/verilog_duplicate_port" >}}
- When fully declaring our ports, we forgot to rename the copy-pasted `sum` once more. {{< learn_more "/manual/rules/verilog_duplicate_declaration" >}}

</div>

Continuing from the previous example:

{{< figure src="/img/releasenotes/5.2/CopyPaste2.png" link="/img/releasenotes/5.2/CopyPaste2.png" title="Duplicate conditions and assignments" class="uk-align-center" >}}

<div class="annotated-list">

- `d1` and `d2` are added to `sum` using a continuous assignment
- We check whether `rst` is high
- Having copy-pasted <span class="annotated">➋</span>, we mistakenly check the same condition in the `else if`. {{< learn_more "/manual/rules/verilog_duplicate_conditions" >}}
- Being in the flow of writing the logic of <span class="annotated">➋</span> and <span class="annotated">➌</span>, we forgot we had already written this line in <span class="annotated">➊</span>. {{< learn_more "/manual/rules/verilog_duplicate_continuous_assignments" >}}

</div>

# Type Checking

As promised in previous releases, we have expanded our type checker with more rules and enabled it in more contexts.
As we write code, sometimes we go on auto-pilot or rely on autocomplete too much.
This is where - in hindsight - obvious mistakes can be made. Below are a few examples of the many hundreds of situations one can end up in.
Sigasi catches these instantly, instead of hours or days after writing, shifting left and thereby drastically improving the design flow.

## Class Extending

{{< figure src="/img/releasenotes/5.2/Classes.png" link="/img/releasenotes/5.2/Classes.png" title="Class extends vs implements confusion" class="uk-align-center" >}}

Classes can only be **extended** while interface classes can only be **implemented**.

- `Canine` cannot extend the interface class `Animal`, but it can _implement_ it
- `Dog` cannot implement the class `Canine`, but it can _extend_ it

{{< learn_more "/manual/rules/verilog_type_checking#extending-and-implementing" >}}

## Streaming Operators

{{< figure src="/img/releasenotes/5.2/BitStream.png" link="/img/releasenotes/5.2/BitStream.png" title="Streaming operator on non bit-stream type" class="uk-align-center" >}}

We are trying to unpack `data` into `payload` but `data` is not of a bit-stream type.

{{< learn_more "/manual/rules/verilog_type_checking#bit-stream-types" >}}

## Let Declarations

{{< figure src="/img/releasenotes/5.2/LetDeclaration.png" link="/img/releasenotes/5.2/LetDeclaration.png" title="Let declaration only allows values" class="uk-align-center" >}}

Unlike their system function (`$typename`) counterpart, `let` declarations can only accept values, not types.

{{< learn_more "/manual/rules/verilog_type_checking#types-vs-value-expressions" >}}

## Unary Reduction Operator

{{< figure src="/img/releasenotes/5.2/ReductionOperator.png" link="/img/releasenotes/5.2/ReductionOperator.png" title="Cannot reduce non-integral types" class="uk-align-center" >}}

Unary reduction operators perform a bitwise operation to produce a single-bit result. However, their operand must be of the `integral` type. `shortreal` is not integral, some valid types are `int`, `logic`, and `bit`.

{{< learn_more "/manual/rules/verilog_type_checking#operand-data-types" >}}

# Further New and Noteworthy Changes

- Brought consistent styling to capitalization of menus and commands
- The autocomplete description dialog now shows the same information as hovers
- {{< pill text="Eclipse" >}} The performance of [Export Documentation]({{< ref "manual/eclipse/documentation.md#export-documentation" >}}) was improved further
- {{< pill text="Verilog" >}} Increased incremental preprocessing speed by up to 300% on large projects
- {{< pill text="Verilog" >}} Added hovers for range enum members e.g. `B4` in `typedef enum {B[5:3]} E`
- {{< pill text="Verilog" >}} [Adding VUnit support]({{< ref "manual/eclipse/vunit.md#systemverilog" >}}) now also links in the required `vunit_defines.sh`
- {{< pill text="Verilog" >}} The [local parameter cannot be overridden]({{< ref "manual/rules/verilog_parameters.md#local-parameter-cannot-be-overridden" >}})  linting rule was improved and detects more cases
- {{< pill text="Verilog" >}} Added a description for `$unit` in our information views, e.g., [outline]({{< ref "manual/eclipse/views.md#outline-view" >}}), [hover]({{< ref "manual/eclipse/editor.md#hover" >}}), and [autocomplete]({{< ref "manual/eclipse/editor.md#autocomplete-and-content-assist" >}})
- {{< pill text="Verilog" >}} Improved accuracy of [Semantic Highlighting]({{< ref "manual/eclipse/editor.md#code-highlighting-syntax-coloring" >}})
- {{< pill text="Verilog" >}} Added navigation for `export` statements
- {{< pill text="Verilog" >}} Added error when trying to include a folder, e.g., `` `include "folder/"``
- {{< pill text="Verilog" >}} Added navigation and [Occurrence Highlighting]({{< ref "manual/eclipse/editor.md#occurrence-highlighting" >}}) for `.*` port connections
- {{< pill text="Verilog" >}} Added support for empty assignment patterns, e.g., `logic queue[$] = '{}`
- {{< pill text="Verilog" >}} [Preprocessor tool compatibility linting rules]({{< ref "/manual/rules/verilog_tool_compatibility.md" >}}) are now configurable

# Quality of Life

- Improved readability of very long linting messages
- The outline no longer repositions the `Parameters` and `Ports` when `Sort alphabetically` is enabled
- The autocomplete description dialog now wraps lines instead of cutting them off
- {{< pill text="Eclipse" >}} The [Open Design Unit Dialog]({{< ref "manual/eclipse/editor.md#open-design-unit" >}}) now highlights matched characters and is more keyboard friendly
- {{< pill text="Eclipse" >}} {{< pill text="VHDL" >}} Typing backslash (`\`) with an identifier selected now forms an extended identifier, e.g., `\identifier\`
- {{< pill text="VHDL" >}} The [incomplete sensitivity list]({{< ref "manual/rules/sensitivity-list.md" >}}) Quick Fix adds the whole array instead of every array element separately
- {{< pill text="Verilog" >}} Added autocomplete templates for `struct` and `union`
- {{< pill text="Verilog" >}} The default name for the autocomplete template of `module`s was changed to the filename
- {{< pill text="Verilog" >}} Corrected the [Smart Indentation]({{< ref "manual/eclipse/editor.md#smart-indentation" >}}) following a `typedef` in `interface`s

# Updates and Deprecations

- The [Graphics Configuration]({{< ref "manual/eclipse/graphics.md" >}}) is deprecated and will be removed in Sigasi 5.3
- [JustJ](https://www.eclipse.org/justj/) - the JRE shipped with Sigasi Studio - has been updated to 17.0.7  
   **Note that an error dialog might be shown upon restarting Sigasi Studio after updating** because the JRE was updated. Closing the dialog, and restarting Sigasi Studio manually will fix the issue.
  {{< figure src="/img/releasenotes/4.14/jre_update_error.png" link="/img/releasenotes/4.14/jre_update_error.png" title="Expected error after update. Restart will solve the issue." width="300">}}

# Talkback Changes

[Talkback]({{< ref "manual/common/talkback.md" >}}) messages include information about

- the currently checked-out and available license types
- the currently used product, e.g., [Sigasi Studio Eclipse](https://www.sigasi.com/download/) or [Sigasi Studio for VS Code](https://marketplace.visualstudio.com/items?itemName=Sigasi.sigasi-vscode)

# Bug Fixes

- The `Unresolved declaration` linting rule uses correct capitalization in its message
- Improved cursor handling during autocomplete
- [Redundant license servers]({{< ref "manual/eclipse/license-key.md#configure-the-license-server-in-sigasi-studio" >}}) are taken into account
- Fixed performance regression in the [Quick Outline]({{< ref "/manual/eclipse/views.md#quick-outline-view" >}})
- {{< pill text="Eclipse" >}} No more temporary license check-outs are done on boot
- {{< pill text="Eclipse" >}} The [Errors/Warnings]({{< ref "manual/eclipse/linting.md#configuring-the-severity-level" >}}) preference page is populated even if the checked-out license is invalid
- {{< pill text="Eclipse" >}} Fixed incorrect navigation from the [Hierarchy View]({{< ref "manual/eclipse/views.md#hierarchy-view" >}}) to include files
- {{< pill text="Eclipse" >}} {{< pill text="Verilog" >}} After saving a file with the [Class Hierarchy]({{< ref "manual/eclipse/views.md#class-hierarchy-view" >}}) open, the focus remains on the editor
- {{< pill text="VHDL" >}} The `Add missing port associations` Quick Fix also succeeds if the port map contains a capitalization mismatch
- {{< pill text="VHDL" >}} Case statement linting supports port selections
- {{< pill text="VHDL" >}} Fixed highlighting and double-click behavior for character pairs, e.g., quotes, parenthesis and backslashes
- {{< pill text="VHDL" >}} Fixed occasional blank autocomplete suggestions
- {{< pill text="VHDL" >}} Fixed false positive error on local parameters in protected types
- {{< pill text="Verilog" >}} The module instantiation autocomplete inserts an unconnected port when necessary
- {{< pill text="Verilog" >}} The `randcase` statement no longer triggers the same linting as the regular `case` statement
- {{< pill text="Verilog" >}} Keyword proposals take the configured language level into account
- {{< pill text="Verilog" >}} Fixed navigation from the outline to the editor when dealing with included files
- {{< pill text="Verilog" >}} Fixed occasional missing navigation in the [Preprocessor View]({{< ref "manual/eclipse/views.md#preprocessor-view" >}})
- {{< pill text="Verilog" >}} Fixed occurrence highlighting near the usage of double backticks (` `` `)
- {{< pill text="Verilog" >}} Fixed missing markers for the [Check line length]({{< ref "manual/rules/verilog_style.md#verilog-code-line-too-long" >}}) linting rule
- {{< pill text="Verilog" >}} Fixed missing navigation targets for wildcard imports, e.g., `import p::*`
- {{< pill text="Verilog" >}} Fixed the [surrounding of selected text]({{< ref "tech/sigasi-editing-tricks.md#10-surround-selection-with-parentheses" >}}) by character pairs by typing a double quote, parenthesis, or other
- {{< pill text="Verilog" >}} Fixed navigation for duplicate non-ANSI subprogram arguments
- {{< pill text="Verilog" >}} Fixed false positive error on calls to `new` when an invalid function called `new` is present
- {{< pill text="Verilog" >}} Fixed false positive error when importing from packages defined in unmapped files
- {{< pill text="Verilog" >}} Fixed false positive `Net data type must be integral` error for `interconnect`s
- {{< pill text="Verilog" >}} Fixed false positive [Consider using named port connections]({{< ref "manual/rules/verilog_associations.md#named-parameter-and-port-connections-have-to-be-used-for-all-instances-with-many-parameters--ports" >}}) warning when named connections cannot be used

Thank you for all the [bug reports](mailto:support@sigasi.com) and for enabling [Talkback]({{< ref "manual/common/talkback.md" >}}). All your reports have helped us fix many issues that would otherwise have gone unnoticed.

# Sigasi Studio 5.2.1 Point Release

On June 30, we released Sigasi Studio 5.2.1.
This release contains the following changes and bug fixes:

* Fixed empty outline after startup
* {{< pill text="Eclipse" >}} Corrected paths in compile order [CSV Export]({{< ref "/manual/eclipse/tools.md#export" >}})
* {{< pill text="Eclipse" >}} `Right-click > Show In` is available for Graphical Views
* {{< pill text="Verilog" >}} Fixed startup slowdown when using the cache

# Sigasi Studio 5.2.2 Point Release

On August 9, we released Sigasi Studio 5.2.2.
This release contains the following changes and bug fixes:

* Learn how to deal with files containing a pound sign (`#`)
* {{< pill text="Eclipse" >}} Updated to Eclipse 2023-03
* {{< pill text="Eclipse" >}} Fixed bad interaction with `webkit-gtk-4.0`

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
- Sigasi Studio [extension](https://marketplace.visualstudio.com/items?itemName=Sigasi.sigasi-vscode) for VS Code:
  - Windows 10 or Windows 11 64-bit
  - RedHat Enterprise Linux RHEL 8 or 9 64-bit
  - VS Code >= 1.77 and < 2.0
  - Java JRE 11 or 17 (shipped with the extension)
- [Veresta](https://www.sigasi.com/veresta/)
  - Windows 10 or Windows 11 64-bit
  - RedHat Enterprise Linux RHEL 7.9 64-bit or newer, including RHEL 8 and 9
  - Java JRE 11 or 17 (shipped with Veresta)

We recommend at least **4GB of memory** and **about 1GB** of free disk space available for Sigasi Studio.

# Feedback

We welcome your feedback through the usual channels or the comments below. Note that comments on this page are cleared after each [official release](/releasenotes).
