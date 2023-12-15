---
title: VHDL Linting
showinmenu: true
weight: 11
pager: true
aliases:
  - /manual/linting-vhdl/
---

# List of VHDL Linting Rules

The table below lists the VHDL linting rules that can be checked automatically by Sigasi.
The availability of linting rules depends on the license requirements.

## ST Linting Rules

ST linting rules are available for all licenses including {{< starter >}}.

<!-- prettier-ignore -->
|                          | Description                                                                      |       ID |
| ------------------------ | -------------------------------------------------------------------------------- | -------: |
| {{< severity error 0 >}} | Positional associations order                                                    |        2 |
| {{< severity error 0 >}} | 'Others' position in associations                                                |        3 |
| {{< severity error 0 >}} | Multiple others in associations                                                  |        4 |
| {{< severity error 0 >}} | Input port cannot be assigned                                                    |        5 |
| {{< severity error 0 >}} | Subprogram parameter cannot be assigned                                          |        6 |
| {{< severity error 0 >}} | Constant cannot be assigned                                                      |        7 |
| {{< severity error 0 >}} | 'others' has to be the last alternative in a case statement                      |        9 |
| {{< severity error 0 >}} | Only one 'others' choice is allowed                                              |       10 |
| {{< severity error 1 >}} | Case statement does not cover all cases                                          |       11 |
| {{< severity error 0 >}} | [Case alternative contains duplicate choices]({{< ref "check-case-duplicated-statements" >}}) |       14 |
| {{< severity error 1 >}} | C style equality operator                                                        |       15 |
| {{< severity error 1 >}} | C style inequality operator                                                      |       16 |
| {{< severity error 1 >}} | Incomplete associations                                                          |       17 |
| {{< severity error 0 >}} | Duplicate associations                                                           |       18 |
| {{< severity error 0 >}} | Invalid character literal                                                        |       19 |
| {{< severity error 0 >}} | Function declarations in a package cannot have a function body                   |       21 |
| {{< severity error 0 >}} | Missing function body                                                            |       22 |
| {{< severity error 0 >}} | Invalid bit string literal                                                       |       23 |
| {{< severity error 0 >}} | Duplicate named associations                                                     |       27 |
| {{< severity error 0 >}} | Duplicate 'all' -style binding for component declaration                         |       28 |
| {{< severity error 0 >}} | Duplicate component instantiation binding                                        |       29 |
| {{< severity error 0 >}} | Duplicate component instantiation binding                                        |       30 |
| {{< severity error 0 >}} | Incorrect number of associations found in mapping                                |       32 |
| {{< severity error 0 >}} | A positional association cannot follow after a named association                 |       33 |
| {{< severity error 1 >}} | A signal cannot be the target of a variable assignment                           |       34 |
| {{< severity error 1 >}} | A port cannot be the target of a variable assignment                             |       35 |
| {{< severity error 1 >}} | A variable cannot be the target of a signal assignment                           |       36 |
| {{< severity error 0 >}} | A process with a sensitivity list cannot contain any wait statements             |       39 |
| {{< severity error 0 >}} | Procedure declarations in a package cannot have a procedure body                 |       40 |
| {{< severity error 0 >}} | Procedure declarations in a package body must have a procedure body              |       41 |
| {{< severity error 0 >}} | Generate statements must have a label                                            |       42 |
| {{< severity error 0 >}} | Instantiation statements must have a label                                       |       43 |
| {{< severity error 0 >}} | Block statements must have a label                                               |       44 |
| {{< severity error 0 >}} | Matching case statement                                                          |       51 |
| {{< severity error 0 >}} | External name alias                                                              |       52 |
| {{< severity error 1 >}} | VHDL version check                                                               |       53 |
| {{< severity error 0 >}} | Duplicate declaration                                                            |       54 |
| {{< severity error 0 >}} | A unary condition operator parentheses                                           |       58 |
| {{< severity error 0 >}} | Duplicate enum literal                                                           |       69 |
| {{< severity error 0 >}} | Invalid identifier                                                               |       70 |
| {{< severity error 0 >}} | Function pureness validation                                                     |       76 |
| {{< severity error 0 >}} | Missing implementation                                                           |       80 |
| {{< severity error 1 >}} | Incorrect attribute class                                                        |       81 |
| {{< severity error 0 >}} | Invalid variable assignment                                                      |       82 |
| {{< severity error 0 >}} | Invalid signal assignment                                                        |       83 |
| {{< severity error 0 >}} | A subprogram call cannot have an empty parameter lis                             |       86 |
| {{< severity error 0 >}} | Unexpected tokens                                                                |       91 |
| {{< severity error 0 >}} | Protected type bodies are not allowed in a package                               |      168 |
| {{< severity error 0 >}} | Invalid use of 'bus' keyword                                                     |      171 |
| {{< severity error 0 >}} | Invalid function parameter mode                                                  |      172 |
| {{< severity error 0 >}} | Invalid variable parameter in function                                           |      173 |
| {{< severity error 0 >}} | Invalid function return type                                                     |      174 |
| {{< severity error 0 >}} | Invalid deferred constant declaration                                            |      175 |
| {{< severity error 0 >}} | This declaration is not allowed in the current declarative region                |      176 |
| {{< severity error 0 >}} | VHDL 87 file declarations                                                        |      191 |
| {{< severity error 0 >}} | Concatenation of unconstrained aggregate                                         |      194 |
| {{< severity error 1 >}} | Empty sensitivity list                                                           |      197 |
| {{< severity error 1 >}} | [Instantiation mismatch]({{< ref "vhdl_entity_instance" >}})                     |      198 |
| {{< severity error 0 >}} | Range wrapped inside parentheses                                                 |      199 |
| {{< severity error 0 >}} | Incomplete record aggregate                                                      |      200 |
| {{< severity error 0 >}} | No elements in a list                                                            |      201 |
| {{< severity error 1 >}} | Trailing separator in a list                                                     |      202 |
| {{< severity error 1 >}} | VHDL version check                                                               |      212 |
| {{< severity error 1 >}} | Invalid use of return type identifiers                                           |      213 |
| {{< severity error 1 >}} | Conditional return statements                                                    |      214 |
| {{< severity error 0 >}} | String literal is not properly closed                                            |      215 |
| {{< severity error 0 >}} | An exponent for an integer literal shall not be negative                         |      218 |
| {{< severity error 0 >}} | Declaring the library 'work' is not allowed inside a context declaration         |      219 |
| {{< severity error 0 >}} | Referencing the library 'work' is not allowed inside a context declaration       | 220, 221 |
| {{< severity error 0 >}} | Loop variables cannot be assigned                                                |      227 |
| {{< severity error 0 >}} | Declaration not found                                                            |      229 |
| {{< severity error 0 >}} | [Missing full constant declaration]({{< ref "vhdl_deferred_constants#missing-deferred-constant-value" >}}) | 233 |
| {{< severity error 0 >}} | [Incorrect full constant subtype]({{< ref "vhdl_deferred_constants#incorrect-full-constant-declaration-subtype" >}}) | 234 |

## XL Linting Rules

XL linting rules require a {{< xl >}} or {{< xprt >}} license.

<!-- prettier-ignore -->
|                            | Description                                                                                                                    |  ID |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | --: |
| {{< severity warning 0 >}} | [Null range: The left argument is strictly larger than the right]({{< ref "null-range-empty-range" >}})                        |   1 |
| {{< severity warning 1 >}} | [Deprecated IEEE packages]({{< ref "deprecated-ieee-packages-non-standard-packages" >}})                                       |   8 |
| {{< severity warning 0 >}} | Case alternative contains redundant choices                                                                                    |  12 |
| {{< severity warning 0 >}} | [Case statement contains all choices explicitly. You can safely remove the redundant 'others']({{< ref "redundant-others" >}}) |  13 |
| {{< severity warning 0 >}} | [Infinite loop. Loop is missing a wait, return or exit statement]({{< ref "loops" >}})                                         |  20 |
| {{< severity warning 0 >}} | [Null range: The left argument is strictly smaller than the right]({{< ref "null-range-empty-range" >}})                       |  26 |
| {{< severity info 1 >}}    | [Non-standard packages]({{< ref "deprecated-ieee-packages-non-standard-packages" >}})                                          |  37 |
| {{< severity warning 1 >}} | [A process must either have a sensitivity list or contain one or more wait statements]({{< ref "sensitivity-list" >}})         |  38 |
| {{< severity info 0 >}}    | [There has to be a whitespace before physical units]({{< ref "space-before-the-physical-unit" >}})                             |  47 |
| {{< severity ignore 0 >}}  | Unbound component instantiations                                                                                               |  48 |
| {{< severity warning 0 >}} | [Superfluous library clause]({{< ref "superfluous-library-clause" >}})                                                         |  49 |
| {{< severity warning 1 >}} | [Library is not available]({{< ref "quick-fix-for-third-party-libraries" >}})                                                  |  50 |
| {{< severity warning 1 >}} | [Find unused declarations]({{< ref "dead-code-lint" >}})                                                                       |  55 |
| {{< severity warning 0 >}} | Bitstrings may only contain std_logic metavalues                                                                               |  57 |
| {{< severity error 0 >}}   | Duplicate design units                                                                                                         |  64 |
| {{< severity warning 0 >}} | [Find unused ports]({{< ref "dead-code-lint" >}})                                                                              |  67 |
| {{< severity warning 0 >}} | [Find unused generics]({{< ref "dead-code-lint" >}})                                                                           |  68 |
| {{< severity warning 0 >}} | [Find dead states in state machines]({{< ref "dead-code-lint" >}})                                                             |  71 |
| {{< severity warning 1 >}} | [Find incomplete sensitivity lists]({{< ref "sensitivity-list" >}})                                                            |  72 |
| {{< severity warning 0 >}} | [Find superfluous signals in sensitivity lists]({{< ref "sensitivity-list" >}})                                                |  73 |
| {{< severity warning 0 >}} | [Find dead code]({{< ref "dead-code-lint" >}})                                                                                 |  79 |
| {{< severity ignore 0 >}}  | Report encrypted files                                                                                                         |  84 |
| {{< severity warning 0 >}} | [Find duplicate signals in sensitivity lists]({{< ref "sensitivity-list" >}})                                                  |  85 |
| {{< severity warning 0 >}} | Detect signals and variables that are never written                                                                            |  88 |
| {{< severity warning 0 >}} | Detect signals and variables that are never read                                                                               |  89 |
| {{< severity warning 0 >}} | None or multiple matching entities for component                                                                               |  90 |
| {{< severity ignore  0 >}} | [Check naming conventions]({{< ref "../rules/naming-conventions" >}})                                                          |  92 |
| {{< severity ignore  1 >}} | [Incomplete port map or generic map: using defaults]({{< ref "incomplete-port-maps-and-generic-maps" >}})                      |  94 |
| {{< severity ignore 0 >}}  | [Check line length]({{< ref "../rules/vhdl_style/#vhdl-code-line-too-long" >}})                                                |  97 |
| {{< severity warning 0 >}} | [Array assignment validation]({{< ref "vector-width-in-assignments-and-port-maps" >}})                                         | 144 |
| {{< severity ignore 1 >}}  | [All references must have the same capitalization as their declaration]({{< ref "capitalization-of-identifiers" >}})           | 163 |
| {{< severity ignore 0 >}}  | [Check for positional associations in instantiations]({{< ref "positional-association-in-instantiations" >}})                  | 164 |
| {{< severity error 0 >}}   | Invalid port associations                                                                                                      | 169 |
| {{< severity error 0 >}}   | [VHDL version mismatch]({{< ref "../rules/vhdl_version" >}})                                                                   | 170 |
| {{< severity ignore 1 >}}  | [Order of generic and port associations]({{< ref "order-of-associations" >}})                                                  | 177 |
| {{< severity error 1 >}}   | Name mismatch                                                                                                                  | 178 |
| {{< severity error 0 >}}   | Unexpected return type                                                                                                         | 179 |
| {{< severity error 0 >}}   | Configuration issue: Incorrect component name                                                                                  | 180 |
| {{< severity error 0 >}}   | Configuration issue: Incorrect instantiation statement label                                                                   | 181 |
| {{< severity warning 0 >}} | Configuration issue: Missing or incorrect binding indication                                                                   | 182 |
| {{< severity error 0 >}}   | Configuration issue: Incorrect name in binding indication                                                                      | 183 |
| {{< severity error 0 >}}   | Incorrect use of keyword all                                                                                                   | 184 |
| {{< severity warning 0 >}} | [Redundant boolean equality check with true]({{< ref "boolean-test" >}})                                                       | 185 |
| {{< severity ignore 0 >}}  | [Boolean equality check with false]({{< ref "boolean-test" >}})                                                                | 186 |
| {{< severity warning 1 >}} | [Check for component/entity mismatch]({{< ref "check-for-component-entity-mismatch" >}})                                       | 187 |
| {{< severity ignore 0 >}}  | [Header comment does not match pattern]({{< ref "check-header-comment" >}})                                                    | 188 |
| {{< severity ignore 0 >}}  | [Filename must contain primary unit name]({{< ref "check-that-filename-contains-primary-unit-name" >}})                        | 189 |
| {{< severity warning 0 >}} | [Empty loop statement]({{< ref "loops" >}})                                                                                    | 190 |
| {{< severity info 0 >}}    | [Entity name is a keyword in Verilog and may cause problems in mixed projects]({{< ref "verilog-keywords" >}})                 | 192 |
| {{< severity error 0 >}}   | [Cannot case on a type declaration]({{< ref "vhdl_type_expr" >}})                                                              | 209 |
| {{< severity warning 0 >}} | [Index out of range]({{< ref "vhdl_array_range" >}})                                                                           | 210 |
| {{< severity warning 0 >}} | [Slice has wrong direction]({{< ref "vhdl_array_range" >}})                                                                    | 211 |
| {{< severity error 0 >}}   | Referencing the library 'work' is not allowed inside a context declaration                                                     | 220 |
| {{< severity error 1 >}}   | Common Libraries version mismatch                                                                                              | 222 |
| {{< severity error 1 >}}   | VHDL version check                                                                                                             | 223 |
| {{< severity ignore 0 >}}  | Check case of non-keywords                                                                                                     | 224 |
| {{< severity error 0 >}}   | Type validation                                                                                                                | 226 |
| {{< severity info 0 >}}    | [Whitespace in extended identifier]({{< ref "vhdl_style#extended-identifier-contains-whitespace" >}})                          | 228 |
| {{< severity ignore 0 >}}  | [Sequence of operators without parentheses]({{< ref "vhdl_style#sequence-of-operators-without-parentheses" >}})                | 230 |
| {{< severity ignore 0 >}}  | [Constant width vector assigned to signal]({{< ref "vhdl_style#constant-width-vector-assigned-to-signal" >}})                  | 231 |
| {{< severity warning 0 >}} | [Comparison of vectors with different sizes]({{< ref "vhdl-comparison-of-vectors-with-different-sizes" >}})                    | 232 |
| {{< severity ignore 0 >}}  | [Magic number, bitstring, or string in statement]({{< ref "vhdl_style#magic-number-bitstring-or-string-in-statement" >}})      | 235 |
| {{< severity ignore 0 >}}  | [Unconstrained signal or variable of integer type]({{< ref "vhdl-unconstrained-signal-or-variable-of-integer-type" >}})        | 236 |
| {{< severity ignore 0 >}}  | [Unexpected FSM state type]({{< ref "unexpected-fsm-state-type" >}})                                                           | 237 |
| {{< severity ignore 0 >}}  | [Incomplete reset branch]({{< ref "vhdl-incomplete-reset-branch" >}})                                                          | 238 |
| {{< severity ignore 0 >}}  | [Deep nesting of conditional and loop statements]({{< ref "check-deep-nested-statements" >}})                                  | 239 |
| {{< severity ignore 0 >}}  | [Unexpected keyword capitalization]({{< ref "incorrect-keyword-capitalization" >}})                                            | 240 |
| {{< severity ignore 0 >}}  | [Incorrect vector range direction]({{< ref "incorrect-vector-range-direction" >}})                                             | 241 |
| {{< severity ignore 0 >}}  | [File contains multiple primary units]({{< ref "vhdl_library_unit_location#file-contains-multiple-primary-units" >}})          | 242 |
| {{< severity ignore 0 >}}  | [Secondary unit in unexpected file]({{< ref "vhdl_library_unit_location#secondary-unit-in-unexpected-file" >}})                | 243 |
| {{< severity ignore 0 >}}  | [Prohibited attribute]({{< ref "feature-restrictions#prohibited-attribute" >}})                                                | 244 |
| {{< severity ignore 0 >}}  | [Prohibited keyword or operator]({{< ref "feature-restrictions#prohibited-keyword-or-operator" >}})                            | 245 |
| {{< severity ignore 0 >}}  | [Prohibited package]({{< ref "feature-restrictions#prohibited-package" >}})                                                    | 246 |
| {{< severity ignore 0 >}}  | [Prohibited pragma]({{< ref "feature-restrictions#prohibited-pragma" >}})                                                      | 247 |
| {{< severity ignore 0 >}}  | [Prohibited library]({{< ref "feature-restrictions#prohibited-library" >}})                                                    | 248 |
| {{< severity ignore 0 >}}  | [Clock signal not used as clock]({{< ref "vhdl-clock-signal-not-used-as-clock" >}})                                            | 249 |
| {{< severity ignore 0 >}}  | [Unexpected clock edge specification]({{< ref "check-unexpected-clock-style" >}})                                              | 250 |
| {{< severity ignore 0 >}}  | [Missing label]({{< ref "check-missing-labels" >}})                                                                            | 251 |
| {{< severity ignore 0 >}}  | [Inconsistent reset style]({{< ref "vhdl-inconsistent-reset-style" >}})                                                        | 252 |
| {{< severity ignore 0 >}}  | [Multiple objects in one declaration]({{< ref "vhdl-multiple-objects-declaration" >}})                                         | 253 |
| {{< severity ignore 0 >}}  | [Inconsistent clock edge usage]({{< ref "check-inconsistent-clock-edge" >}})                                                   | 254 |

## Deprecated Linting Rules

Deprecated linting rules were used by Sigasi at some point, but they've been removed or superseded in the most recent version.

<!-- prettier-ignore -->
| Description                                                |                    Reason | ID  |
| ---------------------------------------------------------- | ------------------------: | --: |
| Invalid generic list                                       |         Superseded by 202 |  24 |
| Invalid generic map                                        |         Superseded by 202 |  25 |
| Duplicate architecture for entity                          |          Superseded by 64 |  31 |
| Port map lists cannot be terminated with a `,`             |         Superseded by 202 |  45 |
| Port lists cannot be terminated with a `,`                 |         Superseded by 202 |  46 |
| Signal declarations are not allowed in a process statement |         Superseded by 176 |  56 |
| End clause validation                                      |          Superseded by 51 |  59 |
| Duplicate entity for library                               |          Superseded by 64 |  60 |
| Duplicate package for library                              |          Superseded by 64 |  61 |
| Duplicate configuration for library                        |          Superseded by 64 |  62 |
| Invalid use clause                                         | Removed as it was invalid |  63 |
| Duplicate design unit in IEEE                              | Removed as it was invalid |  65 |
| Find unregistered output ports                             | Removed as it was invalid |  75 |
| Undefined identifier                                       |  Superseded by the linker |  87 |
| RE2/J compatibility check                                  |  Superseded by checks in the preferences | 225 |
