---
title: Sigasi Studio 5.4
date: 2023-12-15
lastmod: 2024-02-13
comments: true
pager: true
menu:
  insightsmenu:
    parent: releasenotes
    weight: 96
---

Sigasi 5.4 introduces **many new UVM linting rules**, **simpler linting rule configuration**, as well as **VS Code diagrams and documentation generation**.

As usual, [Veresta](https://www.sigasi.com/veresta/) and our [VS Code extension](https://www.sigasi.com/vscode/) benefit from all the changes not explicitly marked as {{< pill text="Eclipse" >}}.

# TL;DR

The Sigasi 5.4 release introduces a range of **new XPRT linting rules specifically for UVM**. For a limited time, we would like to offer our {{< xl >}} license users a chance to enjoy these UVM linting rules through our new {{< pill text="✨ XPRT preview" >}}.
As of the 5.5 version, these features will be available _only_ to Sigasi Studio XPRT users.  
Want to know more about our UVM features, or would you like to upgrade your license? [Contact us](mailto:sales@sigasi.com).

To complement these UVM linting rules, we added a bonus general Verilog linting to **prohibit certain macros**.

Meanwhile, we gave {{< pill text="VHDL" >}} a _highly configurable_ linting rule to **flag missing labels**.

Keeping with the theme of linting rules, their **configuration just got simpler and safer** in {{< pill text="Eclipse" >}}. The preference page contains a search field to quickly find the rule to configure.
Parameter values are now validated when configuring rules. On top of that, you will find the multi-text editor is more streamlined.

Eclipse is not the only IDE favored in this release; {{< pill text="VS Code" >}} has received many new features, too.
It gained **linting rule configurability** through a new preference page, though, more importantly, we added **full diagram support** and **documentation generation** for our VS Code users, too.

Finally, this release sees a wide range of **over 60 bug fixes and improvements**.

**P.S.:** For consistency and ease of use, we updated some default linting rule severities. As a result, you might see a different number of linting violations at differing severity levels in your projects after upgrading to Sigasi 5.4. {{< learn_more "#updated-linting-rule-severity" >}}

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

# UVM Linting Rules

Note that these rules are temporarily available to {{< xl >}} users in this 5.4 release through {{< pill text="✨ XPRT preview" >}}. As of 5.5, they will only be available to {{< xprt >}} license holders.

## Unregistered UVM Object

{{< lcard learn="/manual/rules/verilog_uvm_unregistered_uvm_object" caption=`
To fully utilize UVM's functionality, objects and components need to be registered with the factory through one of the utility macros.

This rule can be configured to allow unregistered _virtual_ UVM objects.` >}}

{{< figure src="/img/releasenotes/5.4/unregistered_object.png" link="/img/releasenotes/5.4/unregistered_object.png" title="Unregistered object misses UVM functionality" class="uk-align-center" >}}
{{< /lcard >}}

## Incorrect Utility Macro

{{< rcard learn="/manual/rules/verilog_uvm_incorrect_utility_macro" caption=`
UVM _objects_ are registered through <code>uvm_object_utils</code>. However, UVM _components_ have to be registered using <code>uvm_component_utils</code>.

<code>my_object</code> is a <code>uvm_object</code> so it requires <code>uvm_object_utils</code>. There is a Quick Fix for these kinds of small oversights.`
>}}
{{< figure src="/img/releasenotes/5.4/incorrect_utility_macro.png" link="/img/releasenotes/5.4/incorrect_utility_macro.png" title="Incorrect utility macro" class="uk-align-center" >}}
{{< /rcard >}}

## UVM Object Name Does Not Match Variable Name

{{< lcard learn="/manual/rules/verilog_uvm_object_name" caption=`
To facilitate debugging, the variable name in a <code>create</code> method should equal the UVM object name.

In this instance, the variable name <code>m_sequencer</code> does not match the object's name "sequencer1"</code>. Such a mismatch can be confusing, especially when debugging.`
>}}
{{< figure src="/img/releasenotes/5.4/non_matching_object_name.png" link="/img/releasenotes/5.4/non_matching_object_name.png" title="Incorrect utility macro" class="uk-align-center" >}}
{{< /lcard >}}

## Type Argument Value Does Not Match Containing Class

{{< rcard learn="/manual/rules/verilog_uvm_type_argument_does_not_match_containing_class" caption=`
Some UVM macros require the first argument to equal the containing class.

Due to copy-pasting code from <code>my_component</code> to <code>my_other component</code>, the incorrect class is passed to the <code>uvm_component_utils</code> macro.`
>}}
{{< figure src="/img/releasenotes/5.4/non_matching_type_argument.png" link="/img/releasenotes/5.4/non_matching_type_argument.png" title="" class="uk-align-center" >}}
{{< /rcard >}}

## Unexpected Output System Task

{{< lcard learn="/manual/rules/verilog_uvm_unexpected_output_system_task" caption=`
To prevent overloading your simulations, you should use UVM's granular logging.

<code>$display</code> will indiscriminately log at all times, while <code>&#96;uvm_info</code> allows for control over the logging verbosity.

This rule can be configured to report file output system tasks such as <code>$fdisplay</code> and <code>$fwrite</code> too.`
>}}
{{< figure src="/img/releasenotes/5.4/unexpected_output_task.png" link="/img/releasenotes/5.4/unexpected_output_task.png" title="Unexpected $display usage" class="uk-align-center" >}}
{{< /lcard >}}

## UVM Phase Method Does Not Call Superclass Method

{{< rcard learn="/manual/rules/verilog_uvm_phase_method_does_not_call_super" caption=`
Whenever you subclass a user-defined class, the superclass' phase method should be called when they are overridden.

<code>leaf_comp::build_phase</code> overrides <code>middle_comp::build_phase</code>, and thus the former should call the latter.`
>}}
{{< figure src="/img/releasenotes/5.4/missing_super_phase.png" link="/img/releasenotes/5.4/missing_super_phase.png" title="Missing super call to overridden phase method" class="uk-align-center" >}}
{{< /rcard >}}

## Incorrect Instantiation of UVM Object

{{< lcard learn="/manual/rules/verilog_uvm_object_instantiation" caption=`
Instead of calling the raw constructor <code>new()</code>, UVM objects and components must be instantiated by the factory to allow UVM to use overloaded types.`
>}}
{{< figure src="/img/releasenotes/5.4/raw_instantiation.png" link="/img/releasenotes/5.4/raw_instantiation.png" title="Incorrect type override" class="uk-align-center" >}}
{{< /lcard >}}

## Incorrect Override of UVM Object

{{< rcard learn="/manual/rules/verilog_uvm_object_override" caption=`
When overriding UVM objects or components, the overriding type needs to be a subclass of the overridden type.

In this case, <code>my_component</code> is not a subclass of <code>base_object</code>.`
>}}
{{< figure src="/img/releasenotes/5.4/incorrect_override.png" link="/img/releasenotes/5.4/incorrect_override.png" title="Incorrect type override" class="uk-align-center" >}}
{{< /rcard >}}

## Deprecated UVM API

{{< lcard learn="/manual/rules/verilog_uvm_deprecated_api" caption=`
With the many UVM versions come many deprecations.

For example, the <code>uvm_do_with</code> macro was deprecated in UVM 1.2 and was subsequently removed in UVM 2017.

This rule can be configured to target a specific UVM version, allowing you to gradually prepare for UVM upgrades.`
>}}
{{< figure src="/img/releasenotes/5.4/deprecated_api.png" link="/img/releasenotes/5.4/deprecated_api.png" title="Deprecated uvm_random_sequence" class="uk-align-center" >}}
{{< /lcard >}}

## Incorrect Constructor for UVM Object or Component

{{< rcard learn="/manual/rules/verilog_uvm_incorrect_constructor" caption=`
UVM mandates that a UVM component has a constructor with a <code>string name</code> and <code>uvm_component parent</code> argument. The implicit constructor does not have these.

A similar constraint is validated for UVM objects.`
>}}
{{< figure src="/img/releasenotes/5.4/incorrect_constructor.png" link="/img/releasenotes/5.4/incorrect_constructor.png" title="Incorrect UVM component constructor" class="uk-align-center" >}}
{{< /rcard >}}

## Bonus: Prohibited Macro

{{< lcard learn="/manual/rules/verilog_prohibited_macro" caption=`
In UVM and {{< pill text="Verilog" >}} in general, some macros are often discouraged, whether because of deprecation, coding style, or company guidelines. It is now possible to flag such prohibited macros in Sigasi.

In UVM, for example, you can choose to create transactions manually. Prohibiting <code>&#96;uvm_do</code> would then be a good idea.
`
>}}
{{< figure src="/img/releasenotes/5.4/prohibited_macro.png" link="/img/releasenotes/5.4/prohibited_macro.png" title="Prohibited deprecated macro" class="uk-align-center" >}}
{{< /lcard >}}

# Missing Label

{{< rcard learn="/manual/rules/check-missing-labels" caption=`
In {{< pill text="VHDL" >}}, coding guidelines often enforce the use of labels for certain constructs.

This _highly configurable_ linting rule allows you to do just that. You can differentiate between labels, end labels, names, and end names where applicable.
`
>}}
{{< figure src="/img/releasenotes/5.4/missing_label.png" link="/img/releasenotes/5.4/missing_label.png" title="Missing entity, process, and architecture labels" class="uk-align-center" >}}
{{< /rcard >}}

# Simpler Linting Rule Configuration

In this release, we made linting rule configuration simpler through changes to the preference page.

- <span class="annotated">➊</span> Added a search bar
- <span class="annotated">➋</span> Added validation for all rule configuration values
- Improved usability of the multi-text input fields

{{< learn_more "/manual/eclipse/linting" >}}

{{< figure src="/img/releasenotes/5.4/eclipse_preference_page.png" link="/img/releasenotes/5.4/eclipse_preference_page.png" title="Example of an Eclipse linting rule preference page" class="uk-align-center" >}}

# VS Code Sneak Peek

Our {{< pill text="VS Code" >}} extension is picking up steam. This release adds **full diagram support**, **documentation generation**, and **linting rule configurability**. Read up on all the new changes in the [changelog](https://marketplace.visualstudio.com/items/Sigasi.sigasi-vscode/changelog#user-content-new-in-5.4.0).

## Full Diagram Support

**All the diagrams** in Sigasi Studio for Eclipse are now available in VS Code: Block Diagram, State Machines, and Dependencies. {{< learn_more "/manual/common/views#graphical-views/" >}}

Note that a {{< xprt >}} license is required for these.

<ul uk-tab style="margin-left: 2em; margin-right: 2em">
  <li><a href="#">Light modern</a></li>
  <li><a href="#">Solarized light</a></li>
  <li><a href="#">Tomorrow night blue</a></li>
  <li><a href="#">Monokai</a></li>
</ul>

<ul class="uk-switcher" style="margin-left: 2em; margin-right: 2em">
  <li>
  {{< figure src="/img/releasenotes/5.4/diagrams/light_modern.png" link="/img/releasenotes/5.4/diagrams/light_modern.png" title="All the VS Code diagrams at once" >}}
  </li><li>
  {{< figure src="/img/releasenotes/5.4/diagrams/solarized_light.png" link="/img/releasenotes/5.4/diagrams/solarized_light.png" title="All the VS Code diagrams at once" >}}
  </li><li>
  {{< figure src="/img/releasenotes/5.4/diagrams/tomorrow_night_blue.png" link="/img/releasenotes/5.4/diagrams/tomorrow_night_blue.png" title="All the VS Code diagrams at once" >}}
  </li><li>
  {{< figure src="/img/releasenotes/5.4/diagrams/monokai.png" link="/img/releasenotes/5.4/diagrams/monokai.png" title="All the VS Code diagrams at once" >}}
  </li>
</ul>

## Documentation Generation

With diagram support added, generating and exporting the documentation from VS Code is also possible.  
{{< learn_more "/manual/vscode/documentation" >}}

{{< video_control src="/img/releasenotes/5.4/vscode_documentation_generation.mp4" link="/img/releasenotes/5.4/vscode_documentation_generation.mp4" title="Documentation export wizard in VS Code" >}}

## Linting Rule Configuration

All Sigasi linting rules are now fully configurable per file, folder, or project.  
{{< learn_more "/manual/vscode/views#preferences-view" >}}

<ul uk-tab style="margin-left: 2em; margin-right: 2em">
  <li><a href="#">Light modern</a></li>
  <li><a href="#">Solarized light</a></li>
  <li><a href="#">Tomorrow night blue</a></li>
  <li><a href="#">Monokai</a></li>
</ul>

<ul class="uk-switcher" style="margin-left: 2em; margin-right: 2em">
  <li>
  {{< figure src="/img/releasenotes/5.4/preferences/light_modern.png" link="/img/releasenotes/5.4/preferences/light_modern.png" title="Preferences View" >}}
  </li><li>
  {{< figure src="/img/releasenotes/5.4/preferences/solarized_light.png" link="/img/releasenotes/5.4/preferences/solarized_light.png" title="Preferences View" >}}
  </li><li>
  {{< figure src="/img/releasenotes/5.4/preferences/tomorrow_night_blue.png" link="/img/releasenotes/5.4/preferences/tomorrow_night_blue.png" title="Preferences View" >}}
  </li><li>
  {{< figure src="/img/releasenotes/5.4/preferences/monokai.png" link="/img/releasenotes/5.4/preferences/monokai.png" title="Preferences View" >}}
  </li>
</ul>

# Quality of Life

- Lowered priority for [formatter tags]({{< ref "/manual/eclipse/editor.md#disable-formatting-in-defined-regions" >}}) autocomplete suggestions
- {{< pill text="VHDL" >}} Fixed [Auto Indentation]({{< ref "/manual/eclipse/editor.md#smart-caret-positioning" >}}) following function prototype declarations and assignment statements with `when` clauses
- {{< pill text="VHDL" >}} Show units of measurement in a well-known unit instead of using the smallest one, e.g., `10000 fs` → `10 ps`
- {{< pill text="VHDL" >}} Added formula <span class="annotated">➊</span> and solution <span class="annotated">➋</span> to hovers when constant propagation is applied
  {{< figure src="/img/releasenotes/5.4/units_of_measurement.png" link="/img/releasenotes/5.4/units_of_measurement.png" title="Simplified units of measurements with formula and solution" width="250" >}}
- Improved [Hierarchy View]({{< ref "/manual/eclipse/views.md#hierarchy-view" >}})
  - {{< pill text="VHDL" >}} Removed redundant `No constants/generics` nodes
  - {{< pill text="VHDL" >}} Added missing labels for positional generic associations in instantiations
  - {{< pill text="Verilog" >}} Added missing branches for conditional statements
  - {{< pill text="Verilog" >}} Added missing labels for assignments to arrays
  - {{< pill text="Eclipse" >}} Adopted a new icon ![Hierarchy icon](/img/releasenotes/5.4/hierarchy_icon.png) to differentiate from the Class Hierarchy View
- {{< pill text="Verilog" >}} {{< pill text="Eclipse" >}} Improved [Class Hierarchy View]({{< ref "/manual/eclipse/views.md#class-hierarchy-view" >}})
  - Added differentiating icons for variables, tasks, classes, constructors, enums, and more
  - Added a visual indication of member visibility and whether a member is static or overridden
- {{< pill text="Eclipse" >}} Fixed issue with inconsistent sizing of hovers on Linux
- {{< pill text="Eclipse" >}} Improved the initial selection of export wizards
- {{< pill text="Eclipse" >}} Improved the available information on the [License Preference Page]({{< ref "/manual/eclipse/license-key.md#configure-the-license-server-in-sigasi-studio" >}})
- {{< pill text="Eclipse" >}} Pick up renamed [VUnit]({{< ref "/manual/eclipse/vunit.md" >}}) tests when rerunning a test suite

# Further New and Noteworthy

- Added Quick Fixes to [suppress problems]({{< ref "/manual/common/linting.md#suppressing-problems" >}}) file-, library-, or project-wide
- Added automatic building following a change to the contents of the `.settings` folder
- Extended the [Verilog Keywords in VHDL]({{< ref "/manual/rules/verilog-keywords" >}}) linting rule with entity ports and generics
- {{< pill text="VHDL" >}} Added vertical alignment to [Template Autocomplete]({{< ref "/manual/eclipse/editor.md#based-on-templates" >}}) suggestions
- {{< pill text="VHDL" >}} Added support for VHDL 2019 attributes
- {{< pill text="VHDL" >}} Added constant propagation in hovers and linting rules for the `'reverse_range` attribute
- {{< pill text="Verilog" >}} Improved preprocessor syntax error messages
- {{< pill text="Verilog" >}} Added formatting rules for
  - `typedef`
  - `constraint`
  - anonymous `program`
  - `randsequence`
  - `randcase`
  - `primitive`
  - `module` parameters
  - `covergroup`
- {{< pill text="Eclipse" >}} `Add to build` adds the selected resource to the parent library instead of `work`
- {{< pill text="Eclipse" >}} Improved VUnit support
  - Added link to VUnit documentation in its preference page
  - Support using a `run.py` within the [Common Libraries]({{< ref "/manual/eclipse/libraries.md#common-libraries" >}}) folder
  - The VUnit JSON library is now automatically linked when it is used in the `run.py`
- {{< pill text="Eclipse" >}} Handle extended identifiers (`\RT L\` and `\sv$module `) in the [Sigasi CSV Auto Export]({{< ref "/manual/eclipse/tools.md#auto-export" >}})
- {{< pill text="Eclipse" >}} Added the `${sigasi_toplevel:alt}` [variable]({{< ref "/manual/eclipse/tools.md#variables-in-arguments" >}})
- {{< pill text="Eclipse" >}} Capitalized menu items consistently
- {{< pill text="Eclipse" >}} Started using Cadence XCelium binaries instead of the deprecated Cadence NCsim ones when Cadence is selected as [Toolchain]({{< ref "/manual/eclipse/tools.md#configure-external-compiler" >}})

# Updates and Deprecations

- Removed the `Naming convention configuration uses syntax which is deprecated` validation
- {{< pill text="Eclipse" >}} [JustJ](https://www.eclipse.org/justj/) - Sigasi Studio ships with JustJ JRE 17.0.9.  

## Updated Linting Rule Severity

Some {{< pill text="VHDL" >}} linting rules had their default severity adjusted. If you did not specify a custom severity for them, you might see fewer (or more) problems in existing projects.

| Rule                                                                                                                                  | Old     | New             |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------- | --------------- |
| [Deprecated IEEE Packages and Non-Standard Packages]({{< ref "/manual/rules/deprecated-ieee-packages-non-standard-packages" >}})      | warning | info            |
| [Space Before the Physical Unit]({{< ref "/manual/rules/space-before-the-physical-unit" >}})                                          | warning | info            |
| [Incomplete Port Maps and Generic Maps]({{< ref "/manual/rules/incomplete-port-maps-and-generic-maps" >}})                            | warning | ignore          |
| [Capitalization of Identifiers]({{< ref "/manual/rules/capitalization-of-identifiers" >}})                                            | warning | ignore          |
| [Positional Association in Instantiations]({{< ref "/manual/rules/positional-association-in-instantiations" >}})                      | warning | ignore          |
| [Order of Associations]({{< ref "/manual/rules/order-of-associations" >}})                                                            | warning | ignore          |
| Type validation                                                                                                                       | warning | error           |
| [Unconstrained Signal or Variable of Integer Type]({{< ref "/manual/rules/vhdl-unconstrained-signal-or-variable-of-integer-type" >}}) | ignore  | warning for RTL |

# Talkback Changes

- Added the Sigasi version to every [Talkback]({{< ref "manual/common/talkback.md" >}}) message

# Bug Fixes

- Fixed the up and down icons in the [Net Search]({{< ref "/manual/eclipse/views.md#net-search-view" >}}) in the presence of duplicate nodes
- Improved [Block Diagram View]({{< ref "/manual/common/views.md#block-diagram-view" >}})
  - Fixed missing update when changing only a port direction
  - Fixed missing connections after collapsing a block
  - {{< pill text="VHDL" >}} Added a `P` character in the otherwise empty block of unnamed processes
- Improved the [Dependencies View]({{< ref "/manual/common/views.md#dependencies-view" >}})
  - Removed self-references
  - Fixed the initial state of the `Show all files in project` button
- Improved [Autocomplete]({{< ref "/manual/eclipse/editor.md#autocomplete-and-content-assist" >}})
  - {{< pill text="VHDL" >}} Fixed empty argument names and types in procedure suggestions
  - {{< pill text="VHDL" >}} Removed invalid entity instantiation suggestions
  - {{< pill text="VHDL" >}} Fixed missing autocomplete in the `configuration` construct
  - {{< pill text="Verilog" >}} Fixed rare missing preprocessor autocomplete
  - {{< pill text="Eclipse" >}} Fixed overriding of the selected text when holding **Ctrl** while applying an autocomplete suggestion
- Improved [Formatting]({{< ref "/manual/eclipse/editor.md#code-formatting" >}})
  - {{< pill text="VHDL" >}} Added missing formatting for parameter types
  - {{< pill text="Verilog" >}} Fixed leading whitespace during formatting of included files
  - {{< pill text="Verilog" >}} Fixed rare case where formatting produced invalid code
- {{< pill text="VHDL" >}} Improved [Quick Fixes]({{< ref "/manual/eclipse/linting.md#quick-fixes" >}})
  - Fixed the addition of a trailing comma when applying the `Add missing associations` Quick Fix
  - Fixed the addition of an empty line when applying the `Missing generic map` Quick Fix
  - Fixed rare cases where the `Add missing associations` Quick Fix was not applied
- {{< pill text="VHDL" >}} Fixed false positive `No matching subprogram` when using VHDL 2008 or 2019
- {{< pill text="Verilog" >}} Fixed highlighting of backticks in preprocessor directives
- {{< pill text="Verilog" >}} Added missing links (**Ctrl+click**) when two conditional blocks have the same label
- {{< pill text="Verilog" >}} Removed duplicate [naming convention]({{< ref "/manual/eclipse/linting.md#naming-conventions" >}}) warning when using enum element ranges e.g. `enum {A[0:100]} e`
- {{< pill text="Verilog" >}} {{< pill text="Eclipse" >}} Fixed missing updates to the Class Hierarchy
- {{< pill text="Eclipse" >}} Fixed qualified name in the [Find References]({{< ref "/manual/eclipse/editor.md#find-references" >}}) title
- {{< pill text="Eclipse" >}} Fixed missing updates to the [Libraries View]({{< ref "/manual/eclipse/views.md#libraries-view" >}})
- {{< pill text="Eclipse" >}} Fixed incorrect project name shown in the [Project Explorer]({{< ref "/manual/eclipse/views.md#project-explorer-view" >}})
- {{< pill text="Eclipse" >}} Renamed references from `Intel Quartus II` to `Intel Quartus`
- {{< pill text="Eclipse" >}} Fixed severity editing on the linting rule preference page on the Turkish locale
- {{< pill text="Eclipse" >}} Fixed small inconsistencies in the tutorial project

Thank you for all the [bug reports](mailto:support@sigasi.com) and for enabling [Talkback]({{< ref "manual/common/talkback.md" >}}). All your reports have helped us fix many issues that would otherwise have gone unnoticed.

# Sigasi Studio 5.4.1 Point Release

On December 22, we released Sigasi Studio 5.4.1.
This release contains the following changes and bug fixes:

- Fixed context menus not filtering their menu items
- {{< pill text="VHDL" >}} Fixed [Project Formatting]({{< ref "/manual/eclipse/editor.md#format-files-without-opening-them" >}}) in combination with [Formatter Tags]({{< ref "/manual/eclipse/editor.md#disable-formatting-in-defined-regions" >}})

# Sigasi Studio 5.4.2 Point Release

On February 13, we released Sigasi Studio 5.4.2.
This release contains the following changes and bug fixes:

- {{< pill text="Verilog" >}} Fixed missing [naming convention]({{< ref "/manual/eclipse/linting.md#naming-conventions" >}}) warning on generate blocks

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
