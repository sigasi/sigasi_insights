---
title: Linting and Quick Fixes
showinmenu: true
weight: 9
pager: true
aliases:
  - /manual/linting/
---

In addition to syntax validation, Sigasi also checks your code for
semantic problems. This is often referred to as **Linting**,or **Linter checks**. Some of these
problems can be automatically resolved with **Quick Fixes**. Both syntax
checking and linting happen at type-time: problems are revealed *as you are
typing* your code.

# Linting

A **Code Linter** is defined as a tool that finds **code that is strictly correct** according
to the language definition, but still **suspicious or problematic**.
Sigasi has a built-in linter, which provides info about code lint
in the design.

## Configuring the Linting Rules

The Sigasi linter has reasonable defaults for the configuration
of reported problems. Nevertheless, the severity level of certain
linting rules is configurable for additional flexibility.
Furthermore, some linting rules, such as the VHDL [maximum line width
rule](/manual/rules/vhdl_style/#vhdl-code-line-too-long), are parameterized and can be tweaked
to your preference.

Sigasi Studio offers two ways of configuring linting rules.

* The recommended way is to override these settings for the **entire project**, **folders** in the project, or individual **files**. This configuration is stored in the `.settings` folder in your project and shared amongst team members.
* Alternatively, in {{< pill text="Eclipse" >}} you can configure the settings for the entire workspace. This configuration is stored for the Sigasi installation and not shared.

For each linting rule, you can set the severity of non-conformities
in all code or RTL-specific code. For some linting rules, more
configuration options are available in the sidebar of the preference page. Look into the
documentation of the [specific rule](#language-specific-linting-rules)
for more details on their effect.

Depending on your preferred platform, refer to the following pages for more detailed instructions

* [Eclipse]({{< ref "/manual/eclipse/linting.md#configuring-the-linting-rules" >}})
* [VS Code]({{< ref "/manual/vscode/views.md#preferences-view" >}})

### Project-specific Linting Rule Configuration

Refer to the pages mentioned above to enable the project-level configuration.
For each of the available rules, you can configure the parameters in the sidebar.

It will apply the Sigasi built-in default for a linting rule.

Project linting rule settings are stored in the following settings file.

* `${project location}/.settings/com.sigasi.hdt.vhdl.linting.prefs`
* `${project location}/.settings/com.sigasi.hdt.verilog.linting.prefs`

These settings can also be [configured manually](#manual-configuration) if necessary.

## Suppressing Problems

Specific problems can be suppressed in your code by adding a `@suppress` comment (`-- @suppress` for VHDL and `// @suppress` for SystemVerilog), on the same line as the problem.

You can limit the suppression to a specific problem by adding a prefix of the problem message between quotes after `@suppress`. Sigasi also recommends adding a reason why the problem was suppressed by adding an extra comment after `@suppress`:

```text
<line with problem> // @suppress "Problem message prefix" Reason why problem is suppressed
```

Changes through Sigasi version:

* Since [Sigasi Studio 4.2](/releasenotes/sigasi-4.02) the `@suppress` comment also suppresses errors.
* Since [Sigasi Studio 4.3](/releasenotes/sigasi-4.03) problems have a quick fix to automatically add the `@suppress` comment with a matching problem message prefix.
* Since [Sigasi Studio 5.4](/releasenotes/sigasi-5.04) it is possible to suppress all the problems file-, library-, or project-wide through a single quick fix.

## No Linting for Common Libraries

Common Libraries are considered to be production-ready libraries.
Linting is skipped for all files in the Common Libraries folder.

# Language-specific Linting Rules

The currently available linting rules are described in detail on the following pages.

* [List of Linting Rules for Verilog and SystemVerilog]({{< ref "linting-verilog" >}})
* [List of Linting Rules for VHDL]({{< ref "linting-vhdl" >}})

# Manual Configuration

**Note:** manual configuration is discouraged, especially for rule parameters other than severity,
because it's easy to get the syntax wrong.

To configure the severity of the rules, add a line using this template:

```text
${rule id}/severity/${path}={error|warning|info|ignore}
```

To configure a parameter of a rule, add a line using this template:

```text
${rule id}/params/${parameter}/${path}=${value}
```

* Where `${rule id}` can be the number of the rule (e.g. 140),
  or `all` to specify preferences for all rule IDs at once.

  Rule IDs can be found in the **Errors/Warnings** settings under the **Project Properties** and **Workspace Preferences**.
  They are also included in the [list of VHDL Linting Rules]({{< ref "/manual/eclipse/linting-vhdl.md" >}})
  and the [list of Verilog/SystemVerilog Linting Rules]({{< ref "/manual/eclipse/linting-verilog.md" >}}).

* Where `${path}` can be `<project>` (literally, with brackets!) to set the severity of the entire project,
  `/path/to/folder` to set the severity of an entire folder,
  or `/path/to/file.vhd` to set the severity of a specific file.

The valid values for the parameters are documented on the individual linting rule pages.
They are described according to these rules:

* `{value1|value2}` means that either `value1` or `value2` must be used,
  e.g. `true` for `{true|false}` or `bit_vector` for `{enumeration|bit_vector|std_logic_vector}`.

* `${integer}` means the value must be an integral number, e.g. `5`.
  If the number must fall within a range, it is specified in a comment.

* `[keyword...]` means the value is any number of keywords (or other strings) separated by tab characters,
  e.g.

  <pre>ENTITY	PACKAGE</pre>

  If any of the strings must contain a tab character or a single quote, escape it using a single quote.
  For example, below is a list of 2 items, the first `a<Tab>tab` and the second `a'quote`.

  <pre>a'	tab	a''quote</pre>

* `${regex}` means the value must be an [RE2/J][] regular expression, e.g. `0|1`.

Whitespace in keys must be escaped with a backslash (`\``). You can add comments
using a `#`.

## Examples

```text
72/severity/<project>=IGNORE
72/severity//Folder\ name/Extra\ folder=INFO
72/severity//test/top.vhd=WARNING
237/params/fsm_state_type//test/top.vhd=ARRAY_OF_LOGIC
236/params/allowed_literal_pattern/<project>=0|1
```

[RE2/J]: https://www.sigasi.com/app/regex
