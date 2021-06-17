---
title: VHDL Linting
showinmenu: true
weight: 11
pager: true
---

# List of VHDL code rules

The table below lists the VHDL code rules that can be checked automatically by Sigasi Studio.
The availability of code rules depends on the license requirements.

## ST code rules
ST code rules are available for all licenses including {{< starter >}}.

|                           | Description                                                                                                                          |  ID |
|---------------------------|--------------------------------------------------------------------------------------------------------------------------------------|----:|
| {{< warning_lightbulb >}} | Declaration could not be found                                                                                                       |     |
|                           | Duplicate declarations                                                                                                               |     |
| {{< warning_lightbulb >}} | Signal/variable assignment operator                                                                                                  |     |
| {{< warning_lightbulb >}} | Case statement does not cover all choices                                                                                            |     |
| {{< warning_lightbulb >}} | Missing enumeration literal in case statements                                                                                       |     |
|                           | Instantiation statement validation                                                                                                   |     |
|                           | Library validation                                                                                                                   |     |
|                           | Subprograms in packages (e.g. function body in a package, rather than in the package body)                                           |     |
|                           | Missing return statement in function bodies                                                                                          |     |
| {{< warning_lightbulb >}} | Correct attribute entity class in attribute specifications                                                                           |     |
| {{< warning_lightbulb >}} | C-style equality and inequality operator (`=` and `/=` vs `==` and `!=`)                                                             |     |
| {{< warning_lightbulb >}} | VHDL 2008 features in VHDL 93 mode (Learn about [choosing your VHDL version](/manual/config#choosing-your-vhdl-and-verilog-version)) |     |
| {{< warning_lightbulb >}} | Port/Generic lists cannot be terminated with a ';'                                                                                   |     |
| {{< warning_lightbulb >}} | Port/Generic maps cannot be terminated with a ','                                                                                    |     |

## XL code rules
XL code rules require a {{< xl >}} or {{< xprt >}} license.

|                           | Description                                                                                                                          |  ID |
|---------------------------|--------------------------------------------------------------------------------------------------------------------------------------|----:|
|                           | [Null range: The left argument is strictly larger than the right]({{< ref "null-range-empty-range" >}})                              |   1 |
| {{< warning_lightbulb >}} | [Deprecated IEEE packages]({{< ref "deprecated-ieee-packages-non-standard-packages" >}})                                             |   8 |
|                           | Case alternative contains redundant choices                                                                                          |  12 |
|                           | [Case statement contains all choices explicitly. You can safely remove the redundant 'others']({{< ref "redundant-others" >}})       |  13 |
|                           | [Infinite loop. Loop is missing a wait]({{< ref "loops" >}})                                                                         |  20 |
|                           | [Null range: The left argument is strictly smaller than the right]({{< ref "null-range-empty-range" >}})                             |  26 |
| {{< warning_lightbulb >}} | [Non-standard packages]({{< ref "deprecated-ieee-packages-non-standard-packages" >}})                                                |  37 |
| {{< warning_lightbulb >}} | [A process must either have a sensitivity list or contain one or more wait statements]({{< ref "sensitivity-list" >}})               |  38 |
|                           | [There has to be a whitespace before physical units]({{< ref "space-before-the-physical-unit" >}})                                   |  47 |
|                           | Unbound component instantiations                                                                                                     |  48 |
|                           | [Superfluous library clause]({{< ref "superfluous-library-clause" >}})                                                               |  49 |
| {{< warning_lightbulb >}} | Library is not available [Configure Altera, Xilinx, ModelSim and VUnit libraries]({{< ref "quick-fix-for-third-party-libraries" >}}) |  50 |
| {{< warning_lightbulb >}} | [Find unused declarations]({{< ref "dead-code-lint" >}})                                                                             |  55 |
|                           | Bitstrings may only contain std\_logic metavalues                                                                                    |  57 |
|                           | Duplicate, conflicting design unit names                                                                                             |  64 |
|                           | [Find unused ports]({{< ref "dead-code-lint" >}})                                                                                    |  67 |
|                           | [Find unused generics]({{< ref "dead-code-lint" >}})                                                                                 |  68 |
|                           | [Find dead states in state machines]({{< ref "dead-code-lint" >}})                                                                   |  71 |
| {{< warning_lightbulb >}} | [Find incomplete sensitivity lists]({{< ref "sensitivity-list" >}})                                                                  |  72 |
|                           | [Find superfluous signals in sensitivity lists]({{< ref "sensitivity-list" >}})                                                      |  73 |
|                           | [Find dead code (unreachable statements)]({{< ref "dead-code-lint" >}})                                                              |  79 |
|                           | Report encrypted files                                                                                                               |  84 |
|                           | [Find duplicate signals in sensitivity lists]({{< ref "sensitivity-list" >}})                                                        |  85 |
|                           | Detect signals and variables that are never written                                                                                  |  88 |
|                           | Detect signals and variables that are never read                                                                                     |  89 |
|                           | None or multiple matching entities for component                                                                                     |  90 |
|                           | [Check naming conventions]({{< ref "rules/naming-conventions" >}})                                                                   |  92 |
| {{< warning_lightbulb >}} | [Incomplete port map or generic map]({{< ref "incomplete-port-maps-and-generic-maps" >}})                                            |  94 |
|                           | [Vector width in assignments and port maps]({{< ref "vector-width-in-assignments-and-port-maps" >}})                                 | 144 |
| {{< warning_lightbulb >}} | [All references must have the same capitalization as their declaration]({{< ref "capitalization-of-identifiers" >}})                 | 163 |
| {{< warning_lightbulb >}} | [Check for positional associations in instantiations]({{< ref "positional-association-in-instantiations" >}})                        | 164 |
|                           | Invalid port associations (incompatible port modes in instantiations)                                                                | 169 |
| {{< warning_lightbulb >}} | [Order of generic and port associations]({{< ref "order-of-associations" >}})                                                        | 177 |
|                           | Incorrect component name in configuration                                                                                            | 180 |
|                           | Incorrect instantiation statement label in configuration                                                                             | 181 |
|                           | Missing or incorrect binding indication                                                                                              | 182 |
|                           | Incorrect name in binding indication                                                                                                 | 183 |
|                           | Incorrect use of keyword all                                                                                                         | 184 |
|                           | [Redundant boolean equality check with true]({{< ref "boolean-test" >}})                                                             | 185 |
|                           | [Boolean equality check with false]({{< ref "boolean-test" >}})                                                                      | 186 |
| {{< warning_lightbulb >}} | [Check for component/entity mismatch]({{< ref "check-for-component-entity-mismatch" >}})                                             | 187 |
|                           | [Header comment check]({{< ref "check-header-comment" >}})                                                                           | 188 |
|                           | [Filename must contain primary unit name]({{< ref "check-that-filename-contains-primary-unit-name" >}})                              | 189 |
|                           | [Empty loop statement]({{< ref "loops" >}})                                                                                          | 190 |
|                           | [Entity name is a Verilog or SystemVerilog keyword]({{< ref "verilog-keywords" >}})                                                  | 192 |
|                           | [Instantiation mismatch]({{< ref "vhdl_entity_instance" >}})                                                                         | 198 |
|                           | Circular compilation dependency                                                                                                      | 203 |
|                           | [Type declaration not allowed in expression]({{< ref "vhdl_type_expr" >}})                                                           | 209 |
|                           | [Index out of range]({{< ref "vhdl_array_range" >}})                                                                                 | 210 |
|                           | [Slice has wrong direction]({{< ref "vhdl_array_range" >}})                                                                          | 211 |
|                           | Unterminated string literal                                                                                                          | 215 |
