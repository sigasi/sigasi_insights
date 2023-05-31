---
title: Sigasi Studio Preview (5.2)
layout: page
pager: true
date: 2023-03-26
lastmod: 2023-05-30
comments: true
---

For those users who want to get early access to the features and bugfixes of upcoming Sigasi Studio releases, we have set up an extra release channel, called `Sigasi Preview`.

The Sigasi Preview release channel offers more frequent releases than the official releases. This page gives an introduction to the most important changes.

Although these preview releases are less rigorously tested than the official releases, they are stable enough for daily use.

**If you run into any problems, [please let us know](https://www.sigasi.com/support/)**.

# Current Preview Release

We are proud to announce the initial preview of Sigasi Studio 5.2.
In this release, we introduce many new linting rules for {{< pill text="Verilog" >}} and {{< pill text="SystemVerilog" >}}.

# New Linting Rules

## Errors

The following cases are now marked with an <span class="error">error</span>:
* Multi-bit initial values for UDPs
* Empty ports and parameters
* Trailing commas in a module port or parameter list

## Warnings

The following cases are now marked with a <span class="warning">warning</span>:
* Implicit nets
* Unused declarations
* Unused macro declarations
* Copy and paste mistakes in conditions and continuous assignments
* Textually duplicate continuous assignments
* Class methods that hide super class methods
* Hierarchically upward references

# Further New and Noteworthy Changes
* Brought consistent styling to capitalization of menus and commands
* The autocomplete description dialog now shows the same information as hovers
* {{< pill text="Eclipse" >}} The performance of [Export documentation]({{< ref "manual/documentation.md#export-documentation" >}}) was improved further
* {{< pill text="Verilog" >}} Added hovers for range enum members e.g. `B4` in `typedef enum {B[5:3]} E`
* {{< pill text="Verilog" >}} [Adding VUnit support]({{< ref "manual/vunit.md#systemverilog" >}}) now also links in the required `vunit_defines.sh`
* {{< pill text="Verilog" >}} The [Local parameter cannot be overridden linting rule]({{< ref "manual/rules/verilog_parameters.md#local-parameter-cannot-be-overridden" >}}) was improved and detects more cases
* {{< pill text="Verilog" >}} Added a description for `$unit` in our information views ([outline]({{< ref "manual/views.md#outline-view" >}}), [hover]({{< ref "manual/editor.md#hover" >}}), [autocomplete]({{< ref "manual/editor.md#auto-complete-and-content-assist" >}}) ...)
* {{< pill text="Verilog" >}} Improved accuracy of [Semantic Highlighting]({{< ref "manual/editor.md#code-highlighting-syntax-coloring" >}})
* {{< pill text="Verilog" >}} Added navigation for `export` statements
* {{< pill text="Verilog" >}} Added error when trying to include a folder, e.g., `` `include "folder/"``
* {{< pill text="Verilog" >}} Added navigation and [Occurrence Highlighting]({{< ref "manual/editor.md#occurrence-highlighting" >}}) for `.*` port connections

# Quality of Life
* Improved readability of very long linting messages
* The outline no longer repositions the `Parameters` and `Ports` when `Sort alphabetically` is enabled
* The autocomplete description dialog now wraps lines instead of cutting them off
* {{< pill text="Eclipse" >}} The [Open Design Unit Dialog]({{< ref "manual/editor.md#open-design-unit" >}}) now highlights matched characters and is more keyboard friendly
* {{< pill text="Eclipse" >}} {{< pill text="VHDL" >}} Typing backslash (`\`) with an identifier selected now forms an extended identifier, e.g., `\identifier\`
* {{< pill text="VHDL" >}} The [Incomplete sensitivity list Quick Fix]({{< ref "manual/rules/sensitivity-list.md" >}}) adds the whole array instead of every array element separately
* {{< pill text="Verilog" >}} Added autocomplete templates for `struct` and `union`
* {{< pill text="Verilog" >}} The default name for the autocomplete template of `module`s was changed to the filename
* {{< pill text="Verilog" >}} Corrected the [Smart Indentation]({{< ref "manual/editor.md#smart-indentation" >}}) following a `typedef` in `interface`s

# Updates
* {{< pill text="Eclipse" >}} Upgraded Chromium to 95 from 80, maintaining the stability of 80 but unlocking more features and higher performance, especially for large block diagrams, state machine diagrams, and documentation generation

# Talkback Changes
[Talkback]({{< ref "manual/talkback.md" >}}) messages include information about
* the currently checked-out and available license types
* the currently used product, e.g., Sigasi Studio Eclipse, [Sigasi Studio for VS Code](https://marketplace.visualstudio.com/items?itemName=Sigasi.sigasi-vscode) ...

# Bug Fixes
* The `Unresolved declaration` linting rule uses correct capitalization in its message
* Improved cursor handling during autocomplete
* [Redundant license servers]({{< ref "manual/license-key.md#configure-the-license-server-in-sigasi-studio" >}}) are taken into account
* {{< pill text="Eclipse" >}} No more temporary license check-outs are done on boot
* {{< pill text="Eclipse" >}} The [Errors/Warnings preference page]({{< ref "manual/linting.md#configuring-the-severity-level" >}}) is populated even if the checked-out license is invalid
* {{< pill text="Eclipse" >}} {{< pill text="Verilog" >}} After saving a file with the [Class Hierarchy]({{< ref "manual/views.md#class-hierarchy-view" >}}) open, the focus remains on the editor
* {{< pill text="VHDL" >}} The `Add missing port associations` Quick Fix also succeeds if the port map contains a capitalization mismatch
* {{< pill text="VHDL" >}} Case statement linting supports port selections
* {{< pill text="VHDL" >}} Fixed highlighting and double-click behavior for character pairs, e.g., quotes, parentheses, backslashes ...
* {{< pill text="VHDL" >}} Fixed occasional blank autocomplete suggestions
* {{< pill text="Verilog" >}} The module instantiation autocomplete inserts an unconnected port when necessary
* {{< pill text="Verilog" >}} The `randcase` statement no longer triggers the same linting as the regular `case` statement
* {{< pill text="Verilog" >}} Keyword proposals take the configured language level into account
* {{< pill text="Verilog" >}} Fixed navigation from the outline to the editor when dealing with included files
* {{< pill text="Verilog" >}} Fixed occasional missing navigation in the [Preprocessor View]({{< ref "manual/views.md#preprocessor-view" >}})
* {{< pill text="Verilog" >}} Fixed occurrence highlighting near the usage of double backticks (``` `` ```)
* {{< pill text="Verilog" >}} Fixed missing markers for the [Check line length linting rule]({{< ref "manual/rules/verilog_style.md#verilog-code-line-too-long" >}})
* {{< pill text="Verilog" >}} Fixed missing navigation targets for wildcard imports, e.g., `import p::*`
* {{< pill text="Verilog" >}} Fixed navigation for for duplicate non-ANSI subprogram arguments
* {{< pill text="Verilog" >}} Fixed false positive error on calls to `new` when an invalid function called `new` is present
* {{< pill text="Verilog" >}} Fixed false positive error when importing from packages defined in unmapped files
* {{< pill text="Verilog" >}} Fixed false positive `Net data type must be integral` error for `interconnect`s
* {{< pill text="Verilog" >}} Fixed false positive [Consider using named port connections]({{< ref "manual/rules/verilog_associations.md#named-parameter-and-port-connections-have-to-be-used-for-all-instances-with-many-parameters--ports" >}}) warning when named connections cannot be used
* {{< pill text="Verilog" >}} Fixed the [surrounding of selected text]({{< ref "tech/sigasi-editing-tricks.md#10-surround-selection-with-parentheses" >}}) by character pairs by typing a double quote, parenthesis ...

Thank you for all the [bug reports](mailto:support@sigasi.com) and for enabling [Talkback]({{< ref "manual/talkback.md" >}}). All your reports have helped us fix many issues that would otherwise go unnoticed.

# Update or Install

## Sigasi Studio for Eclipse

You can download the stand-alone version of the latest preview from:

* <https://download.sigasi.com/sigasi-studio/preview/latest/com.sigasi.hdt.product-linux.gtk.x86_64.zip>
* <https://download.sigasi.com/sigasi-studio/preview/latest/com.sigasi.hdt.product-win32.win32.x86_64.zip>

You can also update automatically when setting **Preferences > Install/Update > Available Software Sites > Add...** :
`https://download.sigasi.com/sigasi-studio/preview/studio/`

SHA sums ([more info]({{< ref "/faq.md#how-can-i-check-a-sha-sum" >}})) can be checked via <https://download.sigasi.com/sigasi-studio/preview/latest/sigasistudio-sha1.txt>.

## Sigasi Studio for VS Code

You can download a `.vsix` file to [manually install](https://code.visualstudio.com/docs/editor/extension-marketplace#_install-from-a-vsix) in VS Code.

* <https://download.sigasi.com/vs-code/preview/latest/sigasi-vscode.vsix>

The SHA sum can be downloaded from <https://download.sigasi.com/vs-code/preview/latest/vscode-sha1.txt>.

# System Requirements

* Sigasi Studio standalone is supported on:
  * Windows: Windows 10 or Windows 11 64-bit
  * Linux: RedHat Enterprise Linux RHEL 7.9 64-bit or newer, including RHEL 8
    * Sigasi Studio depends on `libXss.so` which can be obtained by installing `libXScrnSaver`
  * More information on supported Linux OSes can be found [on the Eclipse website](https://www.eclipse.org/projects/project-plan.php?planurl=http://www.eclipse.org/eclipse/development/plans/eclipse_project_plan_4_19.xml#target_environments)
* Sigasi Studio as a plugin in your Eclipse installation:
  * Eclipse IDE 2021-03 up to and including Eclipse IDE 2022-12
  * Java JRE 11 or 17

We recommend at least **4GB of memory** available for Sigasi Studio,
and you need **about 1GB** of free disk space.

# Feedback

We welcome your feedback through the usual channels or the comments below. Note that comments on this page are cleared after each [official release](/releasenotes).
