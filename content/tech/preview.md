---
title: Sigasi Studio Preview (5.4)
layout: page
date: 2023-09-07
lastmod: 2023-12-05
comments: true
pager: true
excludefromlatest: true
---

For those users who want to get early access to the features and bugfixes of upcoming Sigasi Studio releases, we have set up an extra release channel, called `Sigasi Preview`.

The Sigasi Preview release channel offers more frequent releases than the official releases. This page gives an introduction to the most important changes.

Although these preview releases are less rigorously tested than the official releases, they are stable enough for daily use.

**If you run into any problems, [please let us know](https://www.sigasi.com/support/)**.

# Sigasi 5.4 Preview

Sigasi 5.4 brings **many new linting rules**, most of which are **specific to UVM**, **enhanced linting rule preference pages**, as well as **VS Code diagrams and documentation export**.

As per usual, [Veresta](https://www.sigasi.com/veresta/) and our [VS Code extension](https://www.sigasi.com/vscode/) benefit from all of the changes not explicitly marked as {{< pill text="Eclipse" >}}.

## Linting Rules

### UVM Linting Rules

The 5.4 release introduces a range of new linting rules specifically for UVM, which are meant for our XPRT license; however, we'd like to offer our Sigasi Studio XL license users a chance to enjoy these UVM linting rules for a limited time through our new {{< pill text="✨ XPRT preview" >}}.
As of the 5.5 version, these features will be integrated _only_ in the Sigasi Studio XPRT license.

Want to know more about our UVM features or to upgrade your license? [Contact us](mailto:sales@sigasi.com).

- Incorrect instantiation of UVM object
- Unregistered UVM object
- Incorrect utility macro and an accompanying quick fix
- UVM object name does not match variable name
- Unexpected output system task
- Type argument value does not match containing class
- UVM phase method does not call superclass method
- Incorrect override of UVM object
- Deprecated UVM API
- Incorrect constructor for UVM object or component

### Other Linting Rules

- {{< pill text="VHDL" >}} Added a highly configurable linting rule for missing labels
- {{< pill text="Verilog" >}} Added the Prohibited macro linting rule

## Enhanced Linting Rule Preference Pages

This release, we improved the linting rule preference page

- Added validation for all rule configuration values
- Added a search bar
- Improved usability of the multi-text input fields

## VS Code Sneak Peek

Our VS Code extension is picking up steam. This release adds **full diagram support**, **documentation export**, and a **linting rule preference page**.

## Quality of Life

- Lowered priority for [formatter tags]({{< ref "/manual/eclipse/editor.md#disable-formatting-in-defined-regions" >}}) autocomplete suggestions
- Improved [Hierarchy View]({{< ref "/manual/eclipse/views.md#hierarchy-view" >}})
  - {{< pill text="VHDL" >}} Removed redundant `No constants/generics` nodes
  - {{< pill text="VHDL" >}} Added missing labels for positional generic associations in instantiations
  - {{< pill text="Verilog" >}} Added missing branches for conditional statements
  - {{< pill text="Verilog" >}} Added missing labels for assignments to arrays
- {{< pill text="VHDL" >}} Fixed [Auto Indentation]({{< ref "/manual/eclipse/editor.md#smart-caret-positioning" >}}) following function prototype declarations and assignment statements with `when` clauses
- {{< pill text="VHDL" >}} Shown units of measurement in a well-known unit instead of using the smallest one e.g. `10000 fs` → `10 ps`
- {{< pill text="Verilog" >}} {{< pill text="Eclipse" >}} Added differentiating icons for variables, tasks, classes, constructors, enums, and more in the [Class Hierarchy View]({{< ref "/manual/eclipse/views.md#class-hierarchy-view" >}})
- {{< pill text="Verilog" >}} {{< pill text="Eclipse" >}} Added a visual indication of member visibility and whether a member is static or overridden in the Class Hierarchy View
- {{< pill text="Eclipse" >}} Added a new icon for the Hierarchy View to differentiate it from the Class Hierarchy View
- {{< pill text="Eclipse" >}} Fixed the sizing of hovers such that they are always exactly sized to show all the information
- {{< pill text="Eclipse" >}} Improved the initial selection of export wizards
- {{< pill text="Eclipse" >}} Vastly improved the error messages in the [License Preference Page]({{< ref "/manual/eclipse/license-key.md#configure-the-license-server-in-sigasi-studio" >}})
- {{< pill text="Eclipse" >}} Pick up renamed [VUnit]({{< ref "/manual/eclipse/vunit.md" >}}) tests when rerunning a test suite

## Further New and Noteworthy

- Allows suppressing issues file-, library-, or project-wide through a single quick fix
- Added automatic building following a filesystem change to the `.settings` folder and/or its files
- Extended the [Verilog Keywords in VHDL]({{< ref "/manual/rules/verilog-keywords" >}}) linting rule with entity ports and generics
- {{< pill text="VHDL" >}} Added vertical alignment to [Template Autocomplete]({{< ref "/manual/eclipse/editor.md#based-on-templates" >}}) suggestions
- {{< pill text="VHDL" >}} Added support for VHDL 2019 attributes
- {{< pill text="VHDL" >}} Added constant propagation in hovers and linting rules for the `'reverse_range` attribute
- {{< pill text="VHDL" >}} Added formula and solution to hovers when constant propagation is applied
- {{< pill text="Verilog" >}} Added formatting rules for
  - `typedef`
  - `constraint`
  - anonymous `program`
  - `randsequence`
  - `randcase`
  - `primitive`
  - `module` parameters
  - `covergroup`
- {{< pill text="Verilog" >}} Improved preprocessor syntax error messages
- {{< pill text="Eclipse" >}} Using the `Add to build` context menu item adds the selected resource to the parent library instead of `work`
- {{< pill text="Eclipse" >}} Added link to VUnit documentation in its preference page
- {{< pill text="Eclipse" >}} Allow linking to a VUnit `run.py` within the [Common Libraries]({{< ref "/manual/eclipse/libraries.md#common-libraries" >}}) folder
- {{< pill text="Eclipse" >}} Allow using extended identifiers (`\RT L\` and `\sv$module `) in the [Sigasi CSV Auto Export]({{< ref "/manual/eclipse/tools.md#auto-export" >}})
- {{< pill text="Eclipse" >}} Added the `${sigasi_toplevel:alt}` [variable]({{< ref "/manual/eclipse/tools.md#variables-in-arguments" >}})
- {{< pill text="Eclipse" >}} Started using Cadence XCelium binaries instead of the deprecated Cadence NCsim ones when Cadence is selected as [Toolchain]({{< ref "/manual/eclipse/tools.md#configure-external-compiler" >}})
- {{< pill text="Eclipse" >}} Menu items use consistent capitalization

## Updates and Deprecations

- Removed the `Naming convention configuration uses syntax which is deprecated` validation
- [JustJ](https://www.eclipse.org/justj/) - the JRE shipped with Sigasi Studio - has been updated to 17.0.9  
   **Note that an error dialog might be shown upon restarting Sigasi Studio after updating** because the JRE was updated. Closing the dialog, and restarting Sigasi Studio manually will fix the issue.
  {{< figure src="/img/releasenotes/4.14/jre_update_error.png" link="/img/releasenotes/4.14/jre_update_error.png" title="Expected error after update. Restart will solve the issue." width="400" class="uk-align-center" >}}

Some {{< pill text="VHDL" >}} linting rules had their default severity adjusted. If you did not specify a custom severity for them, you will see fewer or more issues.

| Rule                                                                                                                                  | Old     | New             |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------- | --------------- |
| [Deprecated IEEE Packages and Non-Standard Packages]({{< ref "/manual/rules/deprecated-ieee-packages-non-standard-packages" >}})      | warning | info            |
| [Space Before the Physical Unit]({{< ref "/manual/rules/space-before-the-physical-unit" >}})                                          | warning | info            |
| [Naming Conventions]({{< ref "manual/rules/naming-conventions" >}})                                                                   | warning | ignore          |
| [Incomplete Port Maps and Generic Maps]({{< ref "/manual/rules/incomplete-port-maps-and-generic-maps" >}})                            | warning | ignore          |
| [Capitalization of Identifiers]({{< ref "/manual/rules/capitalization-of-identifiers" >}})                                            | warning | ignore          |
| [Positional Association in Instantiations]({{< ref "/manual/rules/positional-association-in-instantiations" >}})                      | warning | ignore          |
| [Order of Associations]({{< ref "/manual/rules/order-of-associations" >}})                                                            | warning | ignore          |
| Type validation                                                                                                                       | warning | error           |
| [Unconstrained Signal or Variable of Integer Type]({{< ref "/manual/rules/vhdl-unconstrained-signal-or-variable-of-integer-type" >}}) | ignore  | warning for RTL |

# Talkback Changes

[Talkback]({{< ref "manual/common/talkback.md" >}}) messages were enhanced to include the Sigasi version in every event.

## Bug Fixes

- Fixed missing [Block Diagram View]({{< ref "/manual/eclipse/views.md#block-diagram-view" >}}) update when changing only a port direction
- Removed self-references in the Dependencies View
- Fixed missing connections after collapsing a block in the Block Diagram View
- Fixed behavior of up and down icons in the [Net Search]({{< ref "/manual/eclipse/views.md#net-search-view" >}}) in the presence of duplicate nodes
- {{< pill text="VHDL" >}} Added a `P` character in the otherwise empty block of unnamed processes in the Block Diagram View
- {{< pill text="VHDL" >}} Fixed empty argument names and types in procedure autocomplete suggestions
- {{< pill text="VHDL" >}} Removed invalid entity instantiation suggestions from autocomplete
- {{< pill text="VHDL" >}} Fixed addition of a trailing comma when applying the `Add missing associations` Quick Fix
- {{< pill text="VHDL" >}} Fixed rare cases where the `Add missing associations` Quick Fix was not applied
- {{< pill text="VHDL" >}} Fixed addition of an empty line when applying the `Missing generic map` Quick Fix
- {{< pill text="VHDL" >}} Fixed missing autocomplete in the `configuration` construct
- {{< pill text="VHDL" >}} Added missing formatting for parameter types
- {{< pill text="VHDL" >}} Fixed false positive `No matching subprogram` when using VHDL 2008 or 2019
- {{< pill text="Verilog" >}} Fixed rare case where formatting produced invalid code
- {{< pill text="Verilog" >}} Fixed highlighting of backticks in preprocessor directives
- {{< pill text="Verilog" >}} Added missing links (**Ctrl+click**) when two conditional blocks have the same label
- {{< pill text="Verilog" >}} Removed duplicate enum member naming convention warning when using enumeration element ranges (`enum {A[0:100]} e`)
- {{< pill text="Verilog" >}} Fixed rare missing preprocessor autocomplete
- {{< pill text="Verilog" >}} {{< pill text="Eclipse" >}} Fixed missing updates to the Class Hierarchy
- {{< pill text="Eclipse" >}} Fixed qualified name in the [Find References]({{< ref "/manual/eclipse/editor.md#find-references" >}}) title
- {{< pill text="Eclipse" >}} Fixed missing updates to the [Libraries View]({{< ref "/manual/eclipse/views.md#libraries-view" >}})
- {{< pill text="Eclipse" >}} Fixed incorrect project name shown in the [Project Explorer]({{< ref "/manual/eclipse/views.md#project-explorer-view" >}})
- {{< pill text="Eclipse" >}} Fixed overriding of the selected text when holding **Ctrl** while applying an autocomplete suggestion
- {{< pill text="Eclipse" >}} Renamed references to `Intel Quartus II` to `Intel Quartus`
- {{< pill text="Eclipse" >}} Fixed severity editing on the Linting Rule Preference Page on the Turkish locale

# Update or Install

## Sigasi Studio for Eclipse

You can download the stand-alone version of the latest preview.

- Linux: <https://download.sigasi.com/sigasi-studio/preview/latest/com.sigasi.hdt.product-linux.gtk.x86_64.zip>
- Windows: <https://download.sigasi.com/sigasi-studio/preview/latest/com.sigasi.hdt.product-win32.win32.x86_64.zip>

You can also update automatically when setting **Preferences > Install/Update > Available Software Sites > Add...** :
`https://download.sigasi.com/sigasi-studio/preview/studio/`

SHA sums ([more info]({{< ref "/faq.md#how-can-i-check-a-sha-sum" >}})) can be checked via <https://download.sigasi.com/sigasi-studio/preview/latest/sigasistudio-sha1.txt>.

## Sigasi Studio for VS Code

You can download a `.vsix` file and [manually install](https://code.visualstudio.com/docs/editor/extension-marketplace#_install-from-a-vsix) it in VS Code.

- Linux: <https://download.sigasi.com/vs-code/preview/latest/sigasi-vscode-linux.vsix>
- Windows: <https://download.sigasi.com/vs-code/preview/latest/sigasi-vscode-win32.vsix>

The SHA sum can be downloaded from <https://download.sigasi.com/vs-code/preview/latest/vscode-sha1.txt>.

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
- Sigasi Studio extension for VS Code:
  - Windows 10 or Windows 11 64-bit
  - RedHat Enterprise Linux RHEL 8 or 9 64-bit
  - VS Code >= 1.77 and < 2.0
  - Java JRE 11 or 17 (shipped with the extension)

We recommend having at least **4GB of memory** and **about 1GB** of free disk space available for Sigasi Studio.

# Feedback

We welcome your feedback through the usual channels or the comments below. Note that comments on this page are cleared after each [official release](/releasenotes).
