---
title: Linting and Quick Fixes
weight: 9
pager: true
---

In addition to syntax validation, Sigasi Studio also checks your code for
semantic problems (**Linting**, or **Linter checks**). Some of these
problems can be automatically resolved with **Quick Fixes**. Both syntax
checking and linting happen at type-time: new markers appear *as you are
typing* your code.

# Linting {: #linting-linting}

VHDL code **Lint** is defined as code that is strictly correct according
to the language definition, but still suspicious or problematic.
Sigasi Studio has a built-in VHDL linter, which provides info about code lint
in the design.

## Marker Icons {: #linting-icons}

* ![](/img/icons/info.png) marks an info message.
* ![](/img/icons/warning_lightbulb.png) marks a warning that can be resolved automatically with a Quick Fix.
* ![](/img/icons/warning.png) marks a warning that cannot be resolved automatically.
* ![](/img/icons/error_lightbulb.png) marks an error that can be resolved automatically with a Quick Fix.
* ![](/img/icons/error.png) marks an error that cannot be resolved automatically.

## Configuring the Severity Level {: #linting-severity-level}

The Sigasi Studio VHDL linter has reasonable defaults for the severity level of
reported lint problems. However, the severity level of certain classes
of lint is configurable for additional flexibility. The configuration
interface is available in **Window \> Preferences \> VHDL \>
Errors/Warnings**.

{{< figure src="/img/manual/problemseveritypreferencepage.png" alt="Configuring the severity of Sigasi Studio linting checks" >}}

[You can also configure the severity level per project][#project-specific-linting-settings]

## Suppressing warnings

Specific warnings can be suppressed in your code by adding a `@suppress` comment (`-- @suppress` for VHDL, `// @suppress` for SystemVerilog), on the same line as the warning.

You can limit the suppression to a specific warning by putting a prefix of the warning message between quotes after `@suppress`. Sigasi also recommends adding a reason why the warning was suppressed by adding an extra comment after `@suppress`:
```
<line with warning> // @suppress "Warning message prefix" Reason why warning is suppressed
```

Since [/releasenotes/sigasi-4.02] the `@suppress` comment also suppresses Errors.
Since [/releasenotes/sigasi-4.03] warnings have a quickfix to automatically add the `@suppress` comment with a matching warning message prefix.

## No Linting for Common Libraries {: #linting-common-libraries}

Common Libraries are considered to be production ready libraries.
Linting is skipped for all files in the Common Libraries folder.

# Quick Fixes {: #linting-quick-fix}

Some of the VHDL lint problems can be automatically resolved with *Quick Fixes*.
These problems have *markers* annotated with a lightbulb icon (like ![](/img/icons/warning\_lightbulb.png)).
To trigger a Quick Fix, click the problem marker or press **Ctrl-1** and select the Quick Fix.

# List of (System)Verilog code rules

The table below lists the (System)Verilog code rules that can be checked automatically by Sigasi Studio. These checks require a [xprt] license.

| Quick Fix                        | Description                                                                                                             | ID |
|----------------------------------|-------------------------------------------------------------------------------------------------------------------------|---:|
|                                  | Null loops                                                                                                              |  1 |
|                                  | Naming convention                                                                                                       |  2 |
| ![](/img/icons/warning_lightbulb.png) | Disallow 'reg' datatype                                                                                                 |  3 |
|                                  | VHDL keyword as module name                                                                                             |  7 |

# List of VHDL code rules

The table below lists the VHDL code rules that can be checked automatically by Sigasi Studio.
The availability of code rules depends on the license requirements.

* ST code rules are available for all licenses including [starter]
* CR code rules require at least a [creator] license.
* XL code rules are only available with a [xl] or [xprt] license.

| License | Quick Fix                        | Description                                                                                                             |  ID |
|---------|----------------------------------|-------------------------------------------------------------------------------------------------------------------------|----:|
| ST      | ![](/img/icons/warning_lightbulb.png) | Declaration could not be found                                                                                          |     |
| ST      |                                  | Duplicate declarations                                                                                                  |     |
| ST      | ![](/img/icons/warning_lightbulb.png) | Signal/variable assignment operator                                                                                     |     |
| ST      | ![](/img/icons/warning_lightbulb.png) | Case statement does not cover all choices                                                                               |     |
| ST      | ![](/img/icons/warning_lightbulb.png) | Missing enumeration literal in case statements                                                                          |     |
| ST      |                                  | Instantiation statement validation                                                                                      |     |
| ST      |                                  | Library validation                                                                                                      |     |
| ST      |                                  | Subprograms in packages (e.g. function body in a package, rather than in the package body)                              |     |
| ST      |                                  | Missing return statement in function bodies                                                                             |     |
| ST      | ![](/img/icons/warning_lightbulb.png) | Correct attribute entity class in attribute specifications                                                              |     |
| ST      | ![](/img/icons/warning_lightbulb.png) | C-style equality and inequality operator (`=` and `/=` vs `==` and `!=`)                                                |     |
| ST      | ![](/img/icons/warning_lightbulb.png) | VHDL 2008 features in VHDL 93 mode (Learn about [choosing your VHDL version][/manual/config#configure-version])         |     |
| ST      | ![](/img/icons/warning_lightbulb.png) | Port/Generic lists cannot be terminated with a ','                                                                      |     |
| ST      | ![](/img/icons/warning_lightbulb.png) | Port/Generic maps cannot be terminated with a ';'                                                                       |     |
| CR      | ![](/img/icons/warning_lightbulb.png) | [Deprecated IEEE packages](#deprecated-ieee-packages-non-standard-packages)                                             |   8 |
| CR      | ![](/img/icons/warning_lightbulb.png) | [Non-standard packages](#deprecated-ieee-packages-non-standard-packages)                                                |  37 |
| CR      | ![](/img/icons/warning_lightbulb.png) | [A process must either have a sensitivity list or contain one or more wait statements](#sensitivity-list)               |  38 |
| CR      |                                  | [There has to be a whitespace before physical units](#space-physical-unit)                                              |  47 |
| CR      |                                  | [Superfluous library clause](#superfluous-library-clause)                                                               |  49 |
| CR      | ![](/img/icons/warning_lightbulb.png) | Library is not available [Configure Altera, Xilinx, ModelSim and VUnit libraries](#quick-fix-for-third-party-libraries) |  50 |
| CR      | ![](/img/icons/warning_lightbulb.png) | [Find unused declarations](#dead-code-lint)                                                                             |  55 |
| CR      |                                  | Bitstrings may only contain std\_logic metavalues                                                                       |  57 |
| CR      |                                  | Duplicate, conflicting design unit names                                                                                |  64 |
| CR      |                                  | [Find unused ports](#dead-code-lint)                                                                                    |  67 |
| CR      |                                  | [Find unused generics](#dead-code-lint)                                                                                 |  68 |
| CR      | ![](/img/icons/warning_lightbulb.png) | [Find incomplete sensitivity lists](#sensitivity-list)                                                                  |  72 |
| CR      |                                  | [Find superfluous signals in sensitivity lists](#sensitivity-list)                                                      |  73 |
| CR      |                                  | Report encrypted files                                                                                                  |  84 |
| CR      |                                  | [Find duplicate signals in sensitivity lists](#sensitivity-list)                                                        |  85 |
| CR      |                                  | Incorrect use of keyword all                                                                                            | 184 |
| XL      |                                  | [Null range: The left argument is strictly larger than the right](#null-range)                                          |   1 |
| XL      |                                  | Case alternative contains redundant choices                                                                             |  12 |
| XL      |                                  | [Case statement contains all choices explicitly. You can safely remove the redundant 'others'](#redundant-others)       |  13 |
| XL      |                                  | Infinite loop. Loop is missing a wait                                                                                   |  20 |
| XL      |                                  | [Null range: The left argument is strictly smaller than the right](#null-range)                                         |  26 |
| XL      |                                  | Unbound component instantiations                                                                                        |  48 |
| XL      |                                  | [Find dead states in state machines](#dead-code)                                                                        |  71 |
| XL      |                                  | [Find dead code (unreachable statements)](#dead-code)                                                                   |  79 |
| XL      |                                  | Detect signals and variables that are never written                                                                     |  88 |
| XL      |                                  | Detect signals and variables that are never read                                                                        |  89 |
| XL      |                                  | None or multiple matching entities for component                                                                        |  90 |
| XL      |                                  | [Check naming conventions](#naming-conventions)                                                                         |  92 |
| XL      | ![](/img/icons/warning_lightbulb.png) | [Incomplete port map or generic map](#incomplete-port-maps-and-generic-maps)                                            |  94 |
| XL      |                                  | [Vector width in assignments and port maps](#vector-width)                                                              | 144 |
| XL      | ![](/img/icons/warning_lightbulb.png) | [All references must have the same capitalization as their declaration](#capitalization-of-identifiers)                 | 163 |
| XL      | ![](/img/icons/warning_lightbulb.png) | [Check for positional associations in instantiations](#positional-association-in-instantiations)                        | 164 |
| XL      |                                  | Invalid port associations (incompatible port modes in instantiations)                                                   | 169 |
| XL      | ![](/img/icons/warning_lightbulb.png) | [Order of generic and port associations](#order-of-associations)                                                        | 177 |
| XL      |                                  | Incorrect component name in configuration                                                                               | 180 |
| XL      |                                  | Incorrect instantiation statement label in configuration                                                                | 181 |
| XL      |                                  | Missing or incorrect binding indication                                                                                 | 182 |
| XL      |                                  | Incorrect name in binding indication                                                                                    | 183 |
| XL      |                                  | Redundant boolean equality check with true                                                                              | 185 |
| XL      |                                  | Boolean equality check with false                                                                                       | 186 |
| XL      | ![](/img/icons/warning_lightbulb.png) | [Check for component/entity mismatch](#component-entity)                                                                | 187 |
| XL      |                                  | [Header comment check](#header-comment)                                                                                 | 188 |
| XL      |                                  | [Filename must contain primary unit name](#file-name)                                                                   | 189 |
| XL      |                                  | Empty loop  statement                                                                                                   | 190 |

# Detailed explanation of VHDL code rules

## Dead Code lint

Dead code is code that is does have any effect in your simulation or
synthesis. Examples of dead code are signals that are never used, or
conditions that are never triggered.

Dead code does not bother the simulator nor the synthesis tool. However,
it consumes mental energy of anybody reading the code. People will try
to figure the puropose of a given statement and it may take a while
before they realize that they are dealing with dead code. This makes it
more expensive to review code and to reuse code. In general, dead code
is a form of technological debt that should be avoided.

Sigasi Studio flags some kinds of dead code:

* unused declarations (signals, constants, …)
* unused ports
* unreachable statements (see [Dead code](#dead-code))

For unused declarations, there is also a Quick Fix to help you remove
unused declarations fast.

## Deprecated IEEE Packages, Non-Standard Packages

Some packages are widely spread, but were never standardized by IEEE.
Different vendors have shipped different versions, with incompatible
implementation. These packages should not be used and are flagged as
**Deprecated IEEE packages**.

```vhdl
ieee.std_logic_arith
ieee.std_logic_signed
ieee.std_logic_unsigned
```

Instead, use the standard `ieee.numeric_std` package.

The package `ieee.std_logic_misc` has the same problem of not being standardized by IEEE. Contrary to the packages above, there is no consensus on how to replace this package.  
Sigasi Studio flags this package as **Non-standard package**.

Read more in [/tech/deprecated-ieee-libraries].

## Incomplete Port Maps and Generic Maps

Available since Sigasi 2.25

Sigasi Studio warns about port maps and generic maps that are not complete:  
**Port map is using default values. Missing optional actuals: yourport**

Input ports and generics need to be be assigned in your instantiation
statement, if they don’t already have a default value. If you don’t do
this, you are writing illegal VHDL. Sigasi Studio will mark an error, and so
will all other tools.

Input ports and generics with a default value, as well as output ports
do not need to be assigned explicitly. However, this is often not
intended. For that reason, Sigasi Studio can warn you about this.

{{< figure src="/img/manual/warn-incomplete-map.png" >}}

## Positional Association in Instantiations

Available since Sigasi 2.30

Most VHDL designers prefer named associations in port and generic maps in instantiations. This makes it a lot easier to spot wrong connections.
By default Sigasi Studio warns when positional associations are used. You can change the severity of this check via **Preferences > Sigasi > VHDL > Errors/Warnings** in the **Instantiation statement valiadation** section.

## Quick Fix for Third Party Libraries

If you are using vendor libraries from Altera or Xilinx (ISE or Vivado),
you do not need to set up these libraries by hand. Sigasi Studio has a Quick Fix
to do this for you.

{{< figure src="/img/manual/alteraquickfix.png" >}}

The `library` statement that tries to import a missing library (like
`altera`) will be have a yellow warning marker next to it. Click this
marker and select **Configure library altera**. If the path to your
Altera Quartus (or Xilinx ISE) installation is not yet set, Sigasi Studio will
ask to set the path now. You can always change these paths in **Window
\> Preferences \> Sigasi \> Toolchains**.
Note that for the Xilinx libraries we only map the packages with the
component declarations. By default all entity and architecture
declarations are not mapped (excluded). This significantly reduces the
time for a clean build. If you use direct entity instantiations, you can
easily map the entities you need.

## Redundant "others"

If a case statement contains all the possible choices (usually in an
enumerated datatype), you can safely remove the `when others` clause.
Sigasi Studio warns about this:

**Case statement contains all choices explicitly. You can safely remove
the redundant `others`.**

There is some debate on this coding rule. However, the vast majority of
synthesis tools do not take the `others` into account if all choices are
enumerated. If the synthesis tool is set up to generate fault-tolerant
hardware, the fallback state is the same as the reset state (for most
synthesis tools). Check the manual of your synthesis tools and run some
experiments.
For more information, see [/tech/vhdl-case-statements-can-do-without-others]

## Sensitivity List

VHDL requires a sensitivity list for each process (or wait statements in
the project).

Since VHDL-2008, you can write `process (all)` to make sure you have all
signals in the sensitivity list. In all earlier versions, incomplete
sensitivity lists can cause unexpected behavior. That is: your
simulation results may be different from your synthesis results. Most
synthesis tools ignore your sensitivity list. In traditional workflows,
only the synthesis warnings will give you a hint that your sensitivity
list is incomplete. This report will be available only hours or even
days after you have finished typing your code. Flagging this problem
earlier saves time and lets you catch the problem early.

Sigasi Studio can warn about problems with your sensitivity list:

* **Incomplete sensitivity list** (there is Quick Fix for this)
* **Superfluous signals in sensitivity list**
* **Duplicate signals in sensitivity list**

## Superfluous Library Clause {: superfluous-library-clause }

The VHDL language reference manual states that:

*Every design unit except package STANDARD is assumed to contain the following implicit context items as part of its context clause:*

```vhdl
    library STD, WORK;
    use STD.STANDARD.all;
```

Hence, any extra library statement that includes `STD` or `WORK` is
pointless, as is any use clause that includes `std.standard.all`. Hardly
anybody would type the use clause, but quite some people start all of
their files with two extra library clauses. Sigasi Studio flags this as
warning.

{{< figure src="/img/manual/warn-superfluous-library.png" >}}

## Dead Code (unreachable code) {: #dead-code}

If the Sigasi Studio analyzer can determine that a condition is always false,
it will mark the if-statement because it contains dead code.

{{< figure src="/img/manual/unreachable_code.png" >}}

## Null Range (empty range) {: #null-range}

In VHDL, you can use ranges with `to` and `downto`. But, if you use the
wrong direction, you get an empty range, which is usually not what you
want: `7 downto 0` is a range of eight. `7 to 0` is an null range.
We have a lint check that warns about this, even if you use constants
(or some simple arithmetic).

{{< figure src="/img/manual/nullrange.png" >}}

## Space Before the Physical Unit {: #space-physical-unit }

If you type a numeric literal with a physical unit, there should be a
space between the number and the unit.

```vhdl
    T := 25ns; -- ILLEGAL, but accepted by ModelSim
    T := 25 ns; -- OK; according to VHDL language standard
```

Mentor Graphics’ ModelSim and QuestaSim accept the former (illegal)
version. As a result, some VHDL designers got used to writing the
incorrect version, producing code that is not portable to other
simulators. Sigasi Studio accepts the ModelSim-style physical literals, but
warns about this.

## Capitalization of Identifiers

Although VHDL is not case sensitive, it is recommend to always use the same capitalization when referring to the same declaration. Since version 2.30, Sigasi Studio warns when the capitalization of a reference differs from the capitalization of the declaration. Because external libraries can have different code styles, this linting only checks references in the same library as its declaration.

Since [/releasenotes/sigasi-2.31] this can easily be fixed with a Quick Fix.

{{< figure src="/img/manual/captalization_references.png" >}}

Since [/releasenotes/sigasi-3.06] all capitalization issues in a file can be fixed in one click.

{{< figure src="/img/releasenotes/3.6/capitalization_all.png" >}}

## Naming Conventions

On the **Navigation conventions** preference page (**Window \>
Preferences \> Sigasi \> VHDL/(System)Verilog \> Naming conventions**) you can configure
patterns to check correct naming of your VHDL and SystemVerilog identifiers. Patterns are
configured with [Java regex syntax][JavaRegexSyntax].

Only names with a specified pattern are checked. Empty patterns are
omitted.

**Example:** to enforce a style where all variables have a `_v` suffix,
you would specify `.*_v` pattern in the **Variable name** field.

## Vector width in assignments and port maps {: #vector-width }

Sigasi Studio checks the vector size in assignments (Since [/releasenotes/sigasi-2.28]) and port maps (Since [/releasenotes/sigasi-3.01]). This check works at type-time and takes the (symbolic) value of generics into account.

{{< figure src="/img/manual/linting_vector_width.png" >}}

Sigasi Studio will not take into account the value assigned to a generic in instantiations. The reasoning begind this is explained in [/tech/generic-port-width].

## Order of associations

Sigasi Studio gives a warning when the **order** of generics or ports in a `map` differs from the original generics or ports declaration order.

## Check for component/entity mismatch {: #component-entity }

Sigasi Studio gives a warning if a component declaration is not equal to its matching entity. You can easily fix this by applying the quick fix.

{{< figure src="/img/manual/linting_component_entity.png" >}}

## Check header comment {: #header-comment}

Sigasi Studio can check that the **header comment** matches a specified pattern. A **header comment** is the comment that starts at the first character of your file (*no leading whitespace*).

The check can be enabled in **Preferences > Sigasi > VHDL > Naming conventions**.  The pattern can be set on the same page.

{{< figure src="/img/releasenotes/3.8/header_comment.png" alt="Check header comments" >}}

## Check that filename contains primary unit name {:file-name}

Sigasi Studio can check that the filename contains the name of at least one of the design unit names inside that file.  Note that this check is **ignored** by default. You can enable it in the VHDL **Errors/Warnings** preference page (**Style Validation > Filename must contain primary name**).

{{< figure src="/img/releasenotes/3.8/filename_linting.png" alt="Check file name" >}}


# Project specific Linting settings

## Severity of Linting checks

The default way to configure the severity of the Sigasi Studio linting checks is to set their severity in the **Errors/Warnings** preference page.
You can override these setting by creating a settings file for your projects.

In each project, you can override the coding rules settings. You can override rules for the **entire project**, for **folders** in the project, or for individual **files**.

## Errors/Warnings property page

To configure the severity level, right click the project (or file or folder) in the Project Explorer and select **Properties > VHDL Errors/Warnings** or **Properties > SystemVerilog Errors/Warnings**.

[{{< figure src="/img/manual/linting_severity_per_project.png" alt="Configure linting severity per project" >}}](images/linting_severity_per_project.png)

Project settings are stored in this settings file:

```text
    ${project location}/.settings/com.sigasi.hdt.vhdl.linting.prefs
```

You can search for a specific rule, by using the search field at the top of the property page.

[{{< figure src="/img/manual/linting_severity_per_project_search.png" alt="Search for a specific rule" >}}](images/linting_severity_per_project_search.png)

## Manual configuration

To configure the severity of validations, add a line for each validation:

```text
    ${validation id}/severity/${path}=${severity}
```

Where `${validation id}` can be

* the number of the validation ID (e.g. 140)
* `all` to specify all validation ids in one rule

Validation ID numbers are listed in the [List of VHDL code rules](#list-of-vhdl-code-rules)
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

While [Naming Conventions](#naming-conventions) can be configured
globally for a workspace, they can also be defined per project.
The project-specific Naming Conventions are stored in this settings file:

```text
    ${project location}/.settings/com.sigasi.hdt.vhdl.linting.prefs
```

The validation ID for Naming Conventions is *92*.
Therefore all lines that configure Naming Conventions should start
with *92* and are of this format:

```text
    92/params/${identifier}/${lib}=${convention}
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

Naming Conventions can be restricted to a specific library using `${lib}`.
Possible values are:

* `<project>` (literally, with brackets!) to set Naming Conventions for the entire project
* the library name to which the Naming Convention should apply

The pattern that defines the Naming Convention is set in `${convention}`.
Patterns are configured with [Java regex syntax][JavaRegexSyntax].

Naming Conventions for a project and setting the severity of the linting checks
are configured in the same settings file. Examples:

```text
    92/severity/<project>=INFO
    92/params/constant_name/<project>=c_.*
    92/params/entity_name/my_lib=e_([A-Z_0-9])*
```

Errors in the patterns will be reported in the log file: **Help > Open Log**.

[JavaRegexSyntax]: http://www.vogella.com/tutorials/JavaRegularExpressions/article.html
