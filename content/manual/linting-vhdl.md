---
title: VHDL Linting
showinmenu: true
weight: 11
pager: true
---

# List of VHDL code rules

The table below lists the VHDL code rules that can be checked automatically by Sigasi Studio.
The availability of code rules depends on the license requirements.

* ST code rules are available for all licenses including {{< starter >}}
* CR code rules require at least a {{< creator >}} license.
* XL code rules are only available with a {{< xl >}} or {{< xprt >}} license.

| License | Quick Fix                             | Description                                                                                                             |  ID |
|---------|---------------------------------------|-------------------------------------------------------------------------------------------------------------------------|----:|
| ST      | ![](/img/icons/warning_lightbulb.png) | Declaration could not be found                                                                                          |     |
| ST      |                                       | Duplicate declarations                                                                                                  |     |
| ST      | ![](/img/icons/warning_lightbulb.png) | Signal/variable assignment operator                                                                                |     |
| ST      | ![](/img/icons/warning_lightbulb.png) | Case statement does not cover all choices                                                                          |     |
| ST      | ![](/img/icons/warning_lightbulb.png) | Missing enumeration literal in case statements                                                                     |     |
| ST      |                                  | Instantiation statement validation                                                                                      |     |
| ST      |                                  | Library validation                                                                                                      |     |
| ST      |                                  | Subprograms in packages (e.g. function body in a package, rather than in the package body)                              |     |
| ST      |                                  | Missing return statement in function bodies                                                                             |     |
| ST      | ![](/img/icons/warning_lightbulb.png) | Correct attribute entity class in attribute specifications                                                         |     |
| ST      | ![](/img/icons/warning_lightbulb.png) | C-style equality and inequality operator (`=` and `/=` vs `==` and `!=`)                                           |     |
| ST      | ![](/img/icons/warning_lightbulb.png) | VHDL 2008 features in VHDL 93 mode (Learn about [choosing your VHDL version](/manual/config#choosing-your-vhdl-and-verilog-version))         |     |
| ST      | ![](/img/icons/warning_lightbulb.png) | Port/Generic lists cannot be terminated with a ';'                                                                 |     |
| ST      | ![](/img/icons/warning_lightbulb.png) | Port/Generic maps cannot be terminated with a ','                                                                  |     |
| CR      | ![](/img/icons/warning_lightbulb.png) | [Deprecated IEEE packages]({{< ref "deprecated-ieee-packages-non-standard-packages" >}})                                        |   8 |
| CR      | ![](/img/icons/warning_lightbulb.png) | [Non-standard packages]({{< ref "deprecated-ieee-packages-non-standard-packages" >}})                                           |  37 |
| CR      | ![](/img/icons/warning_lightbulb.png) | [A process must either have a sensitivity list or contain one or more wait statements]({{< ref "sensitivity-list" >}})          |  38 |
| CR      |                                  | [There has to be a whitespace before physical units]({{< ref "space-before-the-physical-unit" >}})                                   |  47 |
| CR      |                                  | [Superfluous library clause]({{< ref "superfluous-library-clause" >}})                                                               |  49 |
| CR      | ![](/img/icons/warning_lightbulb.png) | Library is not available [Configure Altera, Xilinx, ModelSim and VUnit libraries]({{< ref "quick-fix-for-third-party-libraries" >}}) |  50 |
| CR      | ![](/img/icons/warning_lightbulb.png) | [Find unused declarations]({{< ref "dead-code-lint" >}})                                                                        |  55 |
| CR      |                                  | Bitstrings may only contain std\_logic metavalues                                                                       |  57 |
| CR      |                                  | Duplicate, conflicting design unit names                                                                                |  64 |
| CR      |                                  | [Find unused ports]({{< ref "dead-code-lint" >}})                                                                                    |  67 |
| CR      |                                  | [Find unused generics]({{< ref "dead-code-lint" >}})                                                                                 |  68 |
| CR      | ![](/img/icons/warning_lightbulb.png) | [Find incomplete sensitivity lists]({{< ref "sensitivity-list" >}})                                                             |  72 |
| CR      |                                  | [Find superfluous signals in sensitivity lists]({{< ref "sensitivity-list" >}})                                                      |  73 |
| CR      |                                  | Report encrypted files                                                                                                  |  84 |
| CR      |                                  | [Find duplicate signals in sensitivity lists]({{< ref "sensitivity-list" >}})                                                        |  85 |
| CR      |                                  | Incorrect use of keyword all                                                                                            | 184 |
| XL      |                                  | [Null range: The left argument is strictly larger than the right]({{< ref "null-range-empty-range" >}})                              |   1 |
| XL      |                                  | Case alternative contains redundant choices                                                                             |  12 |
| XL      |                                  | [Case statement contains all choices explicitly. You can safely remove the redundant 'others']({{< ref "redundant-others" >}})       |  13 |
| XL      |                                  | [Infinite loop. Loop is missing a wait]({{< ref "loops" >}})                                                            |  20 |
| XL      |                                  | [Null range: The left argument is strictly smaller than the right]({{< ref "null-range-empty-range" >}})                             |  26 |
| XL      |                                  | Unbound component instantiations                                                                                        |  48 |
| XL      |                                  | [Find dead states in state machines]({{< ref "dead-code-lint" >}})                                                       |  71 |
| XL      |                                  | [Find dead code (unreachable statements)]({{< ref "dead-code-lint" >}})                                                  |  79 |
| XL      |                                  | Detect signals and variables that are never written                                                                     |  88 |
| XL      |                                  | Detect signals and variables that are never read                                                                        |  89 |
| XL      |                                  | None or multiple matching entities for component                                                                        |  90 |
| XL      |                                  | [Check naming conventions]({{< ref "rules/naming-conventions" >}})                                                                         |  92 |
| XL      | ![](/img/icons/warning_lightbulb.png) | [Incomplete port map or generic map]({{< ref "incomplete-port-maps-and-generic-maps" >}})                                       |  94 |
| XL      |                                  | [Vector width in assignments and port maps]({{< ref "vector-width-in-assignments-and-port-maps" >}})                                 | 144 |
| XL      | ![](/img/icons/warning_lightbulb.png) | [All references must have the same capitalization as their declaration]({{< ref "capitalization-of-identifiers" >}})            | 163 |
| XL      | ![](/img/icons/warning_lightbulb.png) | [Check for positional associations in instantiations]({{< ref "positional-association-in-instantiations" >}})                   | 164 |
| XL      |                                  | Invalid port associations (incompatible port modes in instantiations)                                                   | 169 |
| XL      | ![](/img/icons/warning_lightbulb.png) | [Order of generic and port associations]({{< ref "order-of-associations" >}})                                                   | 177 |
| XL      |                                  | Incorrect component name in configuration                                                                               | 180 |
| XL      |                                  | Incorrect instantiation statement label in configuration                                                                | 181 |
| XL      |                                  | Missing or incorrect binding indication                                                                                 | 182 |
| XL      |                                  | Incorrect name in binding indication                                                                                    | 183 |
| XL      |                                  | [Redundant boolean equality check with true]({{< ref "boolean-test" >}})                                                | 185 |
| XL      |                                  | [Boolean equality check with false]({{< ref "boolean-test" >}})                                                         | 186 |
| XL      | ![](/img/icons/warning_lightbulb.png) | [Check for component/entity mismatch]({{< ref "check-for-component-entity-mismatch" >}})                                        | 187 |
| XL      |                                  | [Header comment check]({{< ref "check-header-comment" >}})                                                                           | 188 |
| XL      |                                  | [Filename must contain primary unit name]({{< ref "check-that-filename-contains-primary-unit-name" >}})                              | 189 |
| XL      |                                  | [Empty loop statement]({{< ref "loops" >}})                                                                                          | 190 |
| XL      |                                  | [Entity name is a Verilog or SystemVerilog keyword]({{< ref "verilog-keywords" >}})                                                  | 192 |

