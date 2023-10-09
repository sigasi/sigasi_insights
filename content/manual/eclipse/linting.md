---
title: Linting and Quick Fixes
showinmenu: true
weight: 9
pager: true
aliases:
  - /manual/linting/
---

In addition to syntax validation, Sigasi also checks your code for
semantic problems (**Linting**, or **Linter checks**). Some of these
problems can be automatically resolved with **Quick Fixes**. Both syntax
checking and linting happen at type-time: new markers appear *as you are
typing* your code.

# Linting

**Code Lint** is defined as **code that is strictly correct** according
to the language definition, but still **suspicious or problematic**.
Sigasi has a built-in linter, which provides info about code lint
in the design.

In addition to code linting, Sigasi can also check that file
headers and symbol names (entities, signals, variables...) follow
certain patterns.  This is discussed under [naming conventions](#naming-conventions).

## Marker Icons

* ![Info icon with lightbulb](/img/icons/info_lightbulb.png) marks an info message that can be resolved automatically with a Quick Fix.
* ![Info icon](/img/icons/info.png) marks an info message.
* ![Warning icon with lightbulb](/img/icons/warning_lightbulb.png) marks a warning that can be resolved automatically with a Quick Fix.
* ![Warning icon](/img/icons/warning.png) marks a warning that cannot be resolved automatically.
* ![Error icon with lightbulb](/img/icons/error_lightbulb.png) marks an error that can be resolved automatically with a Quick Fix.
* ![Error icon](/img/icons/error.png) marks an error that cannot be resolved automatically.

## Configuring the Linting Rules

The Sigasi linter has reasonable defaults for the configuration
of reported lint problems. However, the severity level of certain
classes of linting rules is configurable for additional flexibility.
Furthermore, some linting rules, such as the VHDL [maximum line width
rule](/manual/rules/vhdl_style/#vhdl-code-line-too-long), can be tweaked
to your preference. The configuration interface to configure linting
rules for the entire workspace is available through:

* **Window > Preferences > Sigasi > Verilog/SystemVerilog > Errors/Warnings** for Verilog/SystemVerilog rules.
* **Window > Preferences > Sigasi > VHDL > Errors/Warnings** for VHDL rules.

{{< figure src="/img/manual/linting-rule-preference-page.png" alt="Configuring the parameters of Sigasi linting checks" link="/img/manual/linting-rule-preference-page.png" >}}

You can also [configure the linting rules per project](#project-specific-linting-settings).

For each linting rule, you can set the severity of non-conformities
in all code or in RTL-specific code. For some linting rules, more
configuration options will appear in the sidebar. Look into the
documentation of the [specific rule](#language-specific-linting-rules)
for more details on their effect.

## Suppressing Warnings

Specific warnings can be suppressed in your code by adding a `@suppress` comment (`-- @suppress` for VHDL and `// @suppress` for SystemVerilog), on the same line as the warning.

You can limit the suppression to a specific warning by putting a prefix of the warning message between quotes after `@suppress`. Sigasi also recommends adding a reason why the warning was suppressed by adding an extra comment after `@suppress`:

```text
<line with warning> // @suppress "Warning message prefix" Reason why warning is suppressed
```

Since [Sigasi Studio 4.2](/releasenotes/sigasi-4.02) the `@suppress` comment also suppresses Errors.
Since [Sigasi Studio 4.3](/releasenotes/sigasi-4.03) warnings have a quickfix to automatically add the `@suppress` comment with a matching warning message prefix.

## Export Markers

You can export markers for the entire project via the **Export…** menu. This feature is quite useful, if you want to focus on the markers without [generating documentation]({{< ref "/manual/eclipse/documentation.md" >}}).

First you have to check the box that is located next to the name of your project. You can then select the format of the file (either HTML or CSV) to be generated.

{{< figure src="/img/manual/export_markers_popup.png" link="/img/manual/export_markers_popup.png" alt="Export Markers pop-up window" >}}

### Markers Report

In the report you can see all the markers in your project. The entries in the report are layed out in six columns:

* **Description**: shows what the marker is about
* **Location**: shows in which file the problem is marked
* **Line number**: line number of the marker
* **Type** of the marker
* **Severity**: [severity](#configuring-the-severity-level) that is set in the linting preferences
* **Code**: [linting rule](#language-specific-linting-rules) number for problem type

Note that [suppressed markers](#suppressing-warnings) are also listed in the report (see the last line in the image below).

{{< figure src="/img/manual/export_markers_report.png" link="/img/manual/export_markers_report.png" alt="Export Markers report" >}}

## No Linting for Common Libraries

Common Libraries are considered to be production ready libraries.
Linting is skipped for all files in the Common Libraries folder.

## Naming Conventions

Sigasi can check whether all sorts of names in the design -
entities, instances, modules, signals, variables... - follow
particular patterns.  This may help designers to follow their
company's or team's coding rules. For example, coding rules may
prescribe that signal names must have a `s_` prefix, that generics
names must be written in capitals, or that variable names must use
CamelCase. A naming convention rule is empty by default, which means
that the particular rule is not checked.

In addition, Sigasi can also check for header comments of files,
design units, subprograms, etc. This could for instance be used to
check whether a copyright notice or disclaimer has been included in
the file header comment.

**Workspace wide naming conventions settings** are accessed via
* **Window > Preferences > Sigasi > Verilog/SystemVerilog > Naming Conventions** for Verilog and SystemVerilog, and
* **Window > Preferences > Sigasi > VHDL > Naming Conventions** for VHDL.

**Workspace wide header conventions settings** are accessed via
* **Window > Preferences > Sigasi > Verilog/SystemVerilog > Header Comments** for Verilog and SystemVerilog, and
* **Window > Preferences > Sigasi > VHDL > Header Comments** for VHDL.

At the top, you can set the severity of naming convention non-conformities.
Below, you can enter the validation patterns.
Patterns use the [RE2/J][] regular expressions syntax.
Note that names are not validated if the corresponding validation pattern is empty.

Note that you can add two patterns per name: a **valid pattern** which
the name must match (a marker will appear if it does not match) and an
**invalid pattern** which the name cannot match (a marker will appear if
it does). You can set either or both patterns per name.

{{< figure src="/img/manual/preferences_naming_conventions.png" alt="Configuring naming conventions" >}}

You can also **configure naming conventions per project**, or even per
file or folder. Documentation on how to do that is
[here](#naming-conventions-per-project).

# Quick Fixes

Some of the VHDL lint problems can be automatically resolved with *Quick Fixes*.
These problems have *markers* annotated with a lightbulb icon (like ![Warning icon with lightbulb](/img/icons/warning\_lightbulb.png)).
To trigger a Quick Fix, click the problem marker or press **Ctrl+1** and select the Quick Fix.

# Language-specific Linting Rules

The currently available linting rules are described in detail on the following pages.

* [List of Linting Rules for Verilog and SystemVerilog]({{< ref "linting-verilog" >}})
* [List of Linting Rules for VHDL]({{< ref "linting-vhdl" >}})

# Project-specific Linting Settings

## Severity of Linting Checks

Sigasi Studio offers 2 ways of configuring the severity of linting checks.

* For the entire workspace, through the **Window > Preferences** dialog as [described above](#configuring-the-severity-level).
* You can override these setting by creating a settings file for your projects.  
In each project, you can override the coding rules settings. You can override rules for the **entire project**, for **folders** in the project, or for individual **files**.

## Errors/Warnings Property Page

To configure the severity level, right click the project (or file or folder) in the Project Explorer and select **Properties > VHDL Errors/Warnings** or **Properties > SystemVerilog Errors/Warnings**.

{{< figure src="/img/manual/linting-rule-project-settings-page.png" alt="Configure linting severity per project" link="/img/manual/linting-rule-project-settings-page.png" >}}

On the top of the dialog, select *Enable project specific settings* to activate the rule configuration on a project base.
Enabling this setting will override any settings specified at the workspace level.
For each of the available rules, you can choose from a drop-down list or you can set all severities at once by using `Ctrl-A`.

Note that choosing the *default* setting does *not* inherit from the workspace settings.
It will apply the Sigasi built-in default for a linting rule.

Project settings are stored in this settings file:

```text
${project location}/.settings/com.sigasi.hdt.${language}.linting.prefs
```

## Manual Configuration

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

Whitespace in keys must be escaped with a back slash (`\`). You can add comments
with `#`.

### Examples

```text
72/severity/<project>=IGNORE
72/severity//Folder\ name/Extra\ folder=INFO
72/severity//test/top.vhd=WARNING
237/params/fsm_state_type//test/top.vhd=ARRAY_OF_LOGIC
236/params/allowed_literal_pattern/<project>=0|1
```

[RE2/J]: https://www.sigasi.com/app/regex
