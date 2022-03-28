---
title: Linting and Quick Fixes
showinmenu: true
weight: 9
pager: true
---

In addition to syntax validation, Sigasi Studio also checks your code for
semantic problems (**Linting**, or **Linter checks**). Some of these
problems can be automatically resolved with **Quick Fixes**. Both syntax
checking and linting happen at type-time: new markers appear *as you are
typing* your code.

# Linting

VHDL code **Lint** is defined as **code that is strictly correct** according
to the language definition, but still **suspicious or problematic**.
Sigasi Studio has a built-in linter, which provides info about code lint
in the design.

In addition to code linting, Sigasi Studio can also check that file
headers and symbol names (entities, signals, varibles...) follow
certain patterns.  This is discussed under [naming conventions](#naming-conventions).

## Marker Icons

* ![](/img/icons/info_lightbulb.png) marks an info message that can be resolved automatically with a Quick Fix.
* ![](/img/icons/info.png) marks an info message.
* ![](/img/icons/warning_lightbulb.png) marks a warning that can be resolved automatically with a Quick Fix.
* ![](/img/icons/warning.png) marks a warning that cannot be resolved automatically.
* ![](/img/icons/error_lightbulb.png) marks an error that can be resolved automatically with a Quick Fix.
* ![](/img/icons/error.png) marks an error that cannot be resolved automatically.

## Configuring the Severity Level

The Sigasi Studio VHDL linter has reasonable defaults for the severity level of
reported lint problems. However, the severity level of certain classes
of linting rules is configurable for additional flexibility. The configuration
interface to configure severities for the entire workspace is available through:

* For (System)Verilog rules: **Window > Preferences > Sigasi > (System)Verilog > Errors/Warnings**
* For VHDL rules: **Window > Preferences > Sigasi > VHDL > Errors/Warnings**

{{< figure src="/img/manual/problemseveritypreferencepage.png" alt="Configuring the severity of Sigasi Studio linting checks" link="/img/manual/problemseveritypreferencepage.png" >}}

You can also [configure the severity level per project](#project-specific-linting-settings).

## Suppressing warnings

Specific warnings can be suppressed in your code by adding a `@suppress` comment (`-- @suppress` for VHDL, `// @suppress` for SystemVerilog), on the same line as the warning.

You can limit the suppression to a specific warning by putting a prefix of the warning message between quotes after `@suppress`. Sigasi also recommends adding a reason why the warning was suppressed by adding an extra comment after `@suppress`:
```
<line with warning> // @suppress "Warning message prefix" Reason why warning is suppressed
```

Since [Sigasi Studio 4.2](/releasenotes/sigasi-4.02) the `@suppress` comment also suppresses Errors.
Since [Sigasi Studio 4.3](/releasenotes/sigasi-4.03) warnings have a quickfix to automatically add the `@suppress` comment with a matching warning message prefix.

## No Linting for Common Libraries

Common Libraries are considered to be production ready libraries.
Linting is skipped for all files in the Common Libraries folder.

## Naming conventions

Sigasi Studio can check whether all sorts of names in the design -
entities, instances, modules, signals, variables... - follow
particular patterns.  This may help designers to follow their
company's or team's coding rules. For example, coding rules may
prescribe that signal names must have a `s_` prefix, that generics
names must be written in capitals, or that variable names must use
CamelCase. Empty rules (which is the default) means that the
particular rule is not checked.

In addition, Sigasi Studio can also check for file header comments,
e.g. whether a copyright notice or disclaimer have been included.

**Workspace wide naming conventions settings** are accessed via  
**Window > Preferences > Sigasi > Verilog/SystemVerilog > Naming Conventions**  
**Window > Preferences > Sigasi > VHDL > Naming Conventions**

At the top, you can set the severity of naming convention and file
header comment non-conformities. Below, you can enter the validation
patterns. Patterns use the Java regular expressions
syntax. Information on Java regular expressions is available through
the link above the severity settings. Note that names are not
validated if the corresponding validation pattern is empty.

{{< figure src="/img/manual/preferences_naming_conventions.png" alt="Configuring naming conventions" >}}

You can also **configure naming conventions per project**, or even per
file or folder. Documentation on how to do that is
[here](#naming-conventions-per-project).

# Quick Fixes

Some of the VHDL lint problems can be automatically resolved with *Quick Fixes*.
These problems have *markers* annotated with a lightbulb icon (like ![](/img/icons/warning\_lightbulb.png)).
To trigger a Quick Fix, click the problem marker or press **Ctrl+1** and select the Quick Fix.

# Language specific code rules

The currently available linting rules are described in detail on the following pages.

* [List of code rules for Verilog and SystemVerilog]({{< ref "linting-verilog" >}})
* [List of code rules for VHDL]({{< ref "linting-vhdl" >}})

# Project specific Linting settings

## Severity of Linting checks

Sigasi Studio offers 2 ways of configuring the severity of linting checks.

* For the entire workspace, through the **Window > Preferences** dialog as [described above](#configuring-the-severity-level).
* You can override these setting by creating a settings file for your projects.  
In each project, you can override the coding rules settings. You can override rules for the **entire project**, for **folders** in the project, or for individual **files**.

## Errors/Warnings property page

To configure the severity level, right click the project (or file or folder) in the Project Explorer and select **Properties > VHDL Errors/Warnings** or **Properties > SystemVerilog Errors/Warnings**.

{{< figure src="/img/manual/linting_severity_per_project.png" alt="Configure linting severity per project" link="/img/manual/linting_severity_per_project.png" >}}

On the top of the dialog, select *Enable project specific settings* to activate the severity level on a project base.
Enabling this setting will override any settings specified at the workspace level.
For each of the available ID's, you can choose from a drop-down list or you can set all severities at once using the drop-down list on top.

Note that choosing the *default* setting does _not_ inherit from the workspace settings.
It will apply the Sigasi built-in default for a linting rule.

Project settings are stored in this settings file:

```text
    ${project location}/.settings/com.sigasi.hdt.vhdl.linting.prefs
```

You can search for a specific rule, by using the search field at the top of the property page.

{{< figure src="/img/manual/linting_severity_per_project_search.png" alt="Search for a specific rule" link="/img/manual/linting_severity_per_project_search.png" >}}

## Manual configuration

To configure the severity of validations, add a line for each validation:

```text
    ${validation id}/severity/${path}=${severity}
```

Where `${validation id}` can be

* the number of the validation ID (e.g. 140)
* `all` to specify all validation ids in one rule

Validation ID numbers are listed in the [list of VHDL code rules]({{< ref "/manual/linting-vhdl.md" >}}),
the [list of (System)Verilog code rules]({{< ref "/manual/linting-verilog.md" >}})
and can also be found in the **Project Properties** under **VHDL Errors/Warnings**.

Where `${path}` can be:

* `<project>` (literally, with brackets!) to set the severity of the entire project
* `/path/to/folder` to set the severity of an entire folder
* `/path/to/file.vhd` to set the severity of a specific file

Where `${severity}` can be:

* ERROR
* WARNING
* INFO
* IGNORE

Whitespace must be escaped with a back slash (`\`). You can add comments with `#`.

Examples:

```text
    72/severity/<project>=IGNORE
    72/severity//Folder\ name/Extra\ folder=INFO
    72/severity//test/top.vhd=WARNING
    all/severity/<project>=IGNORE
```

## Naming Conventions per project
While [Naming Conventions and the Header Comment check can be configured
globally for a workspace]({{< ref "#naming-conventions" >}}), they can also be defined per project, per folder or per file.

If you only want to change the severity of naming convention and/or
file header checks for an entire project, you can change them through
the dialog in Sigasi Studio:  
**Project > Properties > Verilog Errors/Warnings** (look for ID 92 and 188)  
**Project > Properties > VHDL Errors/Warnings** (look for ID 2 and 22)

Other project specific naming convention and/or file header check
settings can be configured in the configuration files.

The project-specific Naming Conventions and Header Comment are stored in this settings file for VHDL related settings:
```text
    ${project location}/.settings/com.sigasi.hdt.vhdl.linting.prefs
```

For (System)Verilog related settings, this settings file is used:
```text
    ${project location}/.settings/com.sigasi.hdt.verilog.linting.prefs
```

The validation ID for Naming Conventions is *92*. The validation ID for the Header Comment is *188*.

### Syntax for Naming conventions

All lines that configure Naming Conventions should start with *92* and are of this format:

```text
    92/params/${identifier}/${path}=${convention}
```

Valid `${identifier}` values are:
```text
    architecture_name
    configuration_name
    constant_name
    entity_name
    generate_statement_name
    generic_name
    instantiation_statement_name
    label
    package_name
    port_name
    process_statement_name
    signal_name
    type_name
    variable_name
```

Naming Conventions can be restricted to a specific file or folder using `${path}`.
Possible values are:

* `<project>` (literally, with brackets!) to set Naming Conventions for the entire project
* the folder name to which the Naming Convention should apply
* the full path of the file to which the Naming Convention should apply

The pattern that defines the Naming Convention is set in `${convention}`.
Patterns are configured with [Java regex syntax][JavaRegexSyntax].

Naming Conventions for a project and setting the severity of the linting checks
are configured in the same settings file.

### Syntax for Header Comment

Lines that configure the Header Comment should start with *188* and are of this format:

```text
    188/params/comment_header/${path}=${convention}
```

The meaning of `${path}` and `${convention}` is equal to the definitions for Naming Conventions.

### Examples:

```text
    92/severity/<project>=INFO
    92/params/constant_name/<project>=c_.*
    92/params/entity_name/my_folder=e_([A-Z_0-9])*
    188/severity/<project>=WARNING
    188/params/comment_header//<project>=-- Project specific header comment\r?\n-- Second line
    188/params/comment_header//my_folder=-- Folder specific header comment
```

Note that to use `\R` in the configurarion file the `\` needs to be escaped.
So you'll need to put `\\R` in the configuration file.

Errors in the patterns will be reported in the log file: **Help > Open Log**.

[JavaRegexSyntax]: http://www.vogella.com/tutorials/JavaRegularExpressions/article.html
