---
title: Sigasi Studio Preview (5.3)
layout: page
date: 2023-08-11
lastmod: 2023-08-11
comments: true
pager: true
excludefromlatest: true
---

For those users who want to get early access to the features and bugfixes of upcoming Sigasi Studio releases, we have set up an extra release channel, called `Sigasi Preview`.

The Sigasi Preview release channel offers more frequent releases than the official releases. This page gives an introduction to the most important changes.

Although these preview releases are less rigorously tested than the official releases, they are stable enough for daily use.

**If you run into any problems, [please let us know](https://www.sigasi.com/support/)**.

# Sigasi 5.3 Preview

Sigasi Studio 5.3 introduces many **new VHDL linting rules** and new ways to **check coding conventions**.

As per usual, [Veresta](https://www.sigasi.com/veresta/) and our [VS Code extension](https://marketplace.visualstudio.com/items?itemName=Sigasi.sigasi-vscode) benefit from all of the changes not explicitly marked as {{< pill text="Eclipse" >}}.

## VHDL Linting Rules

Going to the linting rule preference page (**Right-click project > Properties > Verilog/VHDL Errors/Warnings**), you can see that we have redesigned the entire page.
New families were introduced to more effectively group linting rules. These families can also be folded for your convenience.
The descriptions of all linting rules have been improved and the current severity is now visually highlighted.

### Coding Error Rules

- Comparison of vectors with different sizes
- Missing full declaration for deferred constants
- Duplicate choices in case statements

### Style Rules

These rules check a certain style and are set to `ignore` by default. You can enable them in your project preferences: **Right-click project > Properties > VHDL Errors/Warnings**.

- Implicit vector to boolean conversion
- Require parentheses for sequences of non-associative operators, e.g., `+` and `*` used in the same expression
- Constant width vector instead of an aggregate assigned to a signal
- Magic number, bitstring, or string in statement
- Incorrect keyword capitalization
- Secondary unit not in same file as primary
- Deep nesting of conditional and loop statements
- Incorrect FSM state type
- Check line length
- File contains multiple primary units
- Prohibited keyword or operator is used
- Prohibited library is used

## Coding Conventions

- Redesigned the [Naming Conventions]({{< ref "/manual/rules/naming-conventions" >}}) preference page
  - Many new naming conventions were added
  - An anti-pattern can now be defined for naming conventions
- Added a new rule to check design unit comment headers

## Further New and Noteworthy

- {{< pill text="Eclipse" >}} Added feedback to unsuccessful project imports
- {{< pill text="Eclipse" >}} Improved highlighting of multiline strings and numbers
- {{< pill text="Eclipse" >}} {{< pill text="VHDL" >}} Allow to configure separate severities for RTL and non-RTL
- {{< pill text="Verilog" >}} The [Multiple Statements per Line]({{< ref "/manual/rules/verilog_style.md#multiple-statements-per-line" >}}) linting rule is now configurable

## Quality of Life

- {{< pill text="Eclipse" >}} Removed viewport scrolling on format, greatly reducing interruptions caused by [formatting]({{< ref "/manual/eclipse/editor.md#code-formatting" >}})
- {{< pill text="Eclipse" >}} Improved consistency of menu items
- {{< pill text="Eclipse" >}} Added keybindings to the **Keys** preference page allowing them to be rebound. This regards keybindings like [Quick Outline]({{< ref "/manual/eclipse/views.md#quick-outline-view" >}}) (**Ctrl+O**) and [Class Hierarchy]({{< ref "/manual/eclipse/views.md#class-hierarchy-view" >}}) (**F4**).
- {{< pill text="Eclipse" >}} {{< pill text="Verilog" >}} Enum members are grouped in the Class Hierarchy member pane
- {{< pill text="Verilog" >}} Improved autocomplete speed by up to 50% for large projects
- {{< pill text="Verilog" >}} Improved formatting when using includes and macro invocations
- {{< pill text="Verilog" >}} Improved formatting inside of included files
- {{< pill text="Verilog" >}} Improved [Smart Indent]({{< ref "/manual/eclipse/editor.md#smart-indentation" >}}) when using interfaces as module ports
- {{< pill text="Verilog" >}} The [File Contains Multiple Design Units]({{< ref "/manual/rules/verilog_style.md#file-contains-multiple-design-unit" >}}) linting rule is only reported on the second design unit, greatly reducing noise
- {{< pill text="VHDL" >}} Added missing squiggly line for the [Process with Missing Sensitivity List and Wait Statements]({{< ref "/manual/rules/sensitivity-list" >}}) linting rule

## Updates and Deprecations

* The [Graphics Configuration Language]({{< ref "/manual/eclipse/graphics" >}}) has been removed

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
- {{< pill text="VHDL" >}} Fixed the label of entity and component autocomplete instantiations when the **Formatting > Lowercase/Uppercase keywords** preference is enabled
- {{< pill text="VHDL" >}} Fixed missing autocomplete in empty package
- {{< pill text="VHDL" >}} Fixed missing first character following a [Type Conversion Autocomplete]({{< ref "/manual/eclipse/editor.md#type-conversion" >}})

Thank you for all the [bug reports](mailto:support@sigasi.com) and for enabling [Talkback]({{< ref "manual/common/talkback.md" >}}). All your reports have helped us fix many issues that would otherwise have gone unnoticed.

# Update or Install

## Sigasi Studio for Eclipse

You can download the stand-alone version of the latest preview.

* Linux: <https://download.sigasi.com/sigasi-studio/preview/latest/com.sigasi.hdt.product-linux.gtk.x86_64.zip>
* Windows: <https://download.sigasi.com/sigasi-studio/preview/latest/com.sigasi.hdt.product-win32.win32.x86_64.zip>

You can also update automatically when setting **Preferences > Install/Update > Available Software Sites > Add...** :
`https://download.sigasi.com/sigasi-studio/preview/studio/`

SHA sums ([more info]({{< ref "/faq.md#how-can-i-check-a-sha-sum" >}})) can be checked via <https://download.sigasi.com/sigasi-studio/preview/latest/sigasistudio-sha1.txt>.

## Sigasi Studio for VS Code

You can download a `.vsix` file to [manually install](https://code.visualstudio.com/docs/editor/extension-marketplace#_install-from-a-vsix) in VS Code.

* Linux: <https://download.sigasi.com/vs-code/preview/latest/sigasi-vscode-linux.vsix>
* Windows: <https://download.sigasi.com/vs-code/preview/latest/sigasi-vscode-win32.vsix>

The SHA sum can be downloaded from <https://download.sigasi.com/vs-code/preview/latest/vscode-sha1.txt>.

# System Requirements

- Sigasi Studio standalone is supported on:
  - Windows 10 or Windows 11 64-bit
  - RedHat Enterprise Linux RHEL 7.9 64-bit or newer, including RHEL 8 and 9
    - Sigasi Studio depends on `libXss.so` which can be obtained by installing `libXScrnSaver`
  - More information on supported Linux OSes can be found [on the Eclipse website](https://www.eclipse.org/projects/project-plan.php?planurl=http://www.eclipse.org/eclipse/development/plans/eclipse_project_plan_4_19.xml#target_environments)
- Sigasi Studio as a plugin in your Eclipse installation:
  - Eclipse IDE 2021-03 up to and including Eclipse IDE 2023-03
  - Java JRE 11 or 17
- Sigasi Studio extension for VS Code:
  - Windows 10 or Windows 11 64-bit
  - RedHat Enterprise Linux RHEL 8 or 9 64-bit
  - VS Code >= 1.77 and < 2.0
  - Java JRE 11 or 17 (shipped with the extension)

We recommend at least **4GB of memory** and **about 1GB** of free disk space available for Sigasi Studio.

# Feedback

We welcome your feedback through the usual channels or the comments below. Note that comments on this page are cleared after each [official release](/releasenotes).
