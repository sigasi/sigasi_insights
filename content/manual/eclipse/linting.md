---
title: Linting and Quick Fixes
showinmenu: true
weight: 9
pager: true
---

Linting is largely shared between our products. This page only covers {{< pill text="Eclipse" >}} specific use cases. Refer to the [common documentation]({{< ref "/manual/common/linting.md" >}}) to learn more.

# Configuring the Linting Rules

Linting rules can be configured per project, folder, or file by **right-clicking a project, folder, or file > Properties** and select **Verilog Errors/Warnings** or **VHDL Errors/Warnings**.
On the top of the dialog, select *Enable project specific settings* to activate the rule configuration.

You can also configure the rules for the entire workspace through

* **Window > Preferences > Sigasi > Verilog/SystemVerilog > Errors/Warnings** for Verilog/SystemVerilog rules.
* **Window > Preferences > Sigasi > VHDL > Errors/Warnings** for VHDL rules.

{{< figure src="/img/manual/linting-rule-preference-page.png" alt="Configuring the parameters of Sigasi linting checks" link="/img/manual/linting-rule-preference-page.png" >}}

# Marker Icons

* ![Ignore icon with lightbulb](/img/icons/ignore_lightbulb.png) marks an ignored problem that has a Quick Fix.
* ![Ignore icon](/img/icons/ignore.png) marks an ignored problem.
* ![Info icon with lightbulb](/img/icons/info_lightbulb.png) marks an info message that can be resolved automatically with a Quick Fix.
* ![Info icon](/img/icons/info.png) marks an info message.
* ![Warning icon with lightbulb](/img/icons/warning_lightbulb.png) marks a warning that can be resolved automatically with a Quick Fix.
* ![Warning icon](/img/icons/warning.png) marks a warning that cannot be resolved automatically.
* ![Error icon with lightbulb](/img/icons/error_lightbulb.png) marks an error that can be resolved automatically with a Quick Fix.
* ![Error icon](/img/icons/error.png) marks an error that cannot be resolved automatically.

# Export Markers

You can export markers for the entire project via the **Export…** menu. This feature is quite useful if you want to focus on the markers without [generating documentation]({{< ref "/manual/eclipse/documentation.md" >}}).

First, you have to check the box that is located next to the name of your project. You can then select the format of the file (either HTML or CSV) to be generated.

{{< figure src="/img/manual/export_markers_popup.png" link="/img/manual/export_markers_popup.png" alt="Export Markers pop-up window" >}}

## Markers Report

In the report, you can see all the markers in your project. The entries in the report are layed out in six columns:

* **Description**: shows what the marker is about
* **Location**: shows in which file the problem is marked
* **Line number**: line number of the marker
* **Type** of the marker
* **Severity**: [severity](#configuring-the-severity-level) that is set in the linting preferences
* **Code**: [linting rule](#language-specific-linting-rules) number for problem type

Note that [suppressed markers](#suppressing-warnings) are also listed in the report (see the last line in the image below).

{{< figure src="/img/manual/export_markers_report.png" link="/img/manual/export_markers_report.png" alt="Export Markers report" >}}

# Naming Conventions

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

**Workspace-wide naming conventions settings** are accessed via

* **Window > Preferences > Sigasi > Verilog/SystemVerilog > Naming Conventions** for Verilog and SystemVerilog, and
* **Window > Preferences > Sigasi > VHDL > Naming Conventions** for VHDL.

**Workspace-wide header conventions settings** are accessed via

* **Window > Preferences > Sigasi > Verilog/SystemVerilog > Header Comments** for Verilog and SystemVerilog, and
* **Window > Preferences > Sigasi > VHDL > Header Comments** for VHDL.

At the top, you can set the severity of naming convention non-conformities.
Below, you can enter the validation patterns.
Patterns use the [RE2/J][] regular expressions syntax.
Note that names are not validated if the corresponding validation pattern is empty.

Note that you can add two patterns per name: a **valid pattern** that the name must match (a marker will appear if it does not match) and an
**invalid pattern** that the name must not match (a marker will appear if
it does). You can set either or both patterns per name.

{{< figure src="/img/manual/preferences_naming_conventions.png" alt="Configuring naming conventions" >}}

You can also **configure naming conventions per project**, or even per
file or folder. Documentation on how to do that is
[here]({{< ref "/manual/rules/naming-conventions.md#rule-configuration" >}}).

# Quick Fixes

Some of the lint problems can be automatically resolved with *Quick Fixes*.
These problems have *markers* annotated with a lightbulb icon (like ![Warning icon with lightbulb](/img/icons/warning\_lightbulb.png)).
To trigger a Quick Fix, click the problem marker or press **Ctrl+1** and select the Quick Fix.

[RE2/J]: https://www.sigasi.com/app/regex
