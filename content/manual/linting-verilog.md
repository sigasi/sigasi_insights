---
title: Verilog and SystemVerilog Linting
showinmenu: true
weight: 10
pager: true
---

# List of (System)Verilog code rules

The table below lists the (System)Verilog code rules that can be checked automatically by Sigasi Studio.
The availability of code rules depends on the license requirements.

## ST code rules
ST code rules are available for all licenses including {{< starter >}}.

|                                       | Description                                                                                                                                                    | ID |
|---------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|---:|
|                                       | File encoding differences between including and included files                                                                                                 |    |
|                                       | [Named and positional port connections cannot be mixed]({{< ref "rules/verilog_associations/#named-and-positional-associations-cannot-be-mixed" >}})           |  5 |
|                                       | The `packed` keyword is required in packed structs and unions                                                                                                  |  6 |
|                                       | The `for` loop statement misses mandatory part (Verilog)                                                                                                       |  9 |
|                                       | Parameter port list cannot be empty                                                                                                                            | 11 |
|                                       | No semicolon expected at this point (Verilog)                                                                                                                  | 12 |
|                                       | Verilog disallows empty assignments of ordered parameters (Verilog)                                                                                            | 13 |
|                                       | [Named and positional parameter overrides cannot be mixed]({{< ref "rules/verilog_associations/#named-and-positional-associations-cannot-be-mixed" >}})        | 25 |
|                                       | [Only one default member expression is allowed per assignment pattern]({{< ref "rules/verilog_assignments/#only-one-default-member-expression-is-allowed" >}}) | 29 |
|                                       | Only variable output ports can have a default value in non-ANSI notation                                                                                       | 33 |
|                                       | Only input or variable output ports can have a default value in ANSI notation                                                                                  | 34 |
|                                       | [Duplicate formal item within the instantiated unit]({{< ref "rules/verilog_associations/#duplicate-port-and-parameter-connections" >}})                       | 37 |
|                                       | [Excessive number of actuals in ordered notation]({{< ref "rules/verilog_associations/#excessive-number-of-actuals-in-ordered-notation" >}})                   | 39 |
|                                       | Timing controls are not allowed in functions                                                                                                                   | 46 |
|                                       | Net data types must be 4-state                                                                                                                                 | 50 |
|                                       | Net data types integral                                                                                                                                        | 51 |
|                                       | Invalid package item                                                                                                                                           | 55 |
|                                       | Unexpected preprocessor directive inside design elements                                                                                                       | 57 |
|                                       | [Non-packed member in packed structure]({{< ref "rules/verilog_identifiers/#non-packed-member-in-packed-structure" >}})                                        | 59 |
|                                       | [Illegal type in untagged union]({{< ref "rules/verilog_identifiers/#illegal-type-in-untagged-union" >}})                                                      | 60 |
|                                       | Declaration not found                                                                                                                                          | 71 |
|                                       | Ambiguous design unit reference                                                                                                                                | 72 |
|                                       | Attempted implicit declaration with default nettype none                                                                                                       | 73 |
|                                       | Invalid enumeration element range format                                                                                                                       | 74 |
|                                       | Range of enumeration element is too large                                                                                                                      | 75 |
|                                       | Invalid construct                                                                                                                                              | 76 |
|                                       | Invalid randomize argument                                                                                                                                     | 77 |
|                                       | Not a value expression                                                                                                                                         | 78 |
|                                       | Type not assignment compatible                                                                                                                                 | 79 |
|                                       | Constraint class scope missing                                                                                                                                 | 80 |
|                                       | Constraint class with packed dimensions                                                                                                                        | 81 |

<!--|                                       | A verilog `net` type keyword cannot be followed directly by the `reg` keyword                                                                                  |  4 |-->

## XL code rules
XL code rules require a {{< xl >}} or {{< xprt >}} license.

|                           | Description                                                                                                                                                    | ID |
|---------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|---:|
|                           | [Empty loops and conditional branches]({{< ref "rules/verilog_style/#empty-loops-and-conditional-branches" >}})                                                |  1 |
|                           | [Check Naming Conventions]({{< ref "rules/naming-conventions" >}})                                                                                             |  2 |
| {{< warning_lightbulb >}} | [Disallow `reg` datatype]({{< ref "rules/verilog_reg" >}})                                                                                                     |  3 |
|                           | [The module name is a keyword in VHDL and may cause problems in mixed language projects]({{< ref "rules/verilog_identifiers/#vhdl-keywords-as-module-name" >}})|  7 |
|                           | [Case statement does not cover all cases]({{< ref "rules/verilog_case/#case-statement-does-not-cover-all-cases" >}})                                           |  8 |
|                           | [Function prototype has implicit return type]({{< ref "rules/verilog_function/#function-prototype-has-implicit-return-type" >}})                               | 10 |
| {{< info_lightbulb >}}    | [Implicit subprogram port direction]({{< ref "rules/verilog_input" >}})                                                                                        | 14 |
|                           | [Default clause has to be the last item in a case statement]({{< ref "rules/verilog_case/#default-clause-has-to-be-the-last-item-in-a-case-statement" >}})     | 15 |
|                           | [Case statement has multiple default clauses, but only one default clause is allowed]({{< ref "rules/verilog_case/#case-statement-can-only-have-one-default-clause" >}}) | 16 |
|                           | [File name does not match design unit]({{< ref "rules/verilog_style/#file-name-does-not-match-design-unit" >}})                                                | 17 |
|                           | [File contains multiple design units]({{< ref "rules/verilog_style/#file-contains-multiple-design-unit" >}})                                                   | 18 |
|                           | [Parameters must have a default value]({{< ref "rules/verilog_parameters/#parameters-without-a-default-value" >}})                                             | 19 |
|                           | [Verilog code line too long]({{< ref "rules/verilog_style/#verilog-code-line-too-long" >}})                                                                    | 20 |
|                           | [Tabs are not allowed]({{< ref "rules/verilog_style/#tabs-are-not-allowed" >}})                                                                                | 21 |
|                           | [File header comment does not match required pattern]({{< ref "rules/verilog_style/#file-header-comment-does-not-match-required-pattern" >}})                  | 22 |
|                           | [Named port connections have to be used for all instances with many ports]({{< ref "rules/verilog_associations/#named-parameter-and-port-connections-have-to-be-used-for-all-instances-with-many-parameters--ports" >}})                 | 24 |
|                           | [Named parameter overrides have to be used for all instantiations with many parameters]({{< ref "rules/verilog_associations/#named-parameter-and-port-connections-have-to-be-used-for-all-instances-with-many-parameters--ports" >}})    | 26 |
|                           | [No event control at the top of `always` construct]({{< ref "rules/verilog_process" >}})                                                                       | 27 |
|                           | [Default member must be last in assignment pattern]({{< ref "rules/verilog_assignments/#default-member-must-be-last" >}})                                      | 28 |
|                           | [Overwritten type key in assignment pattern]({{< ref "rules/verilog_assignments/#overwritten-type-key-in-assignment-pattern" >}})                              | 30 |
|                           | [Duplicate member key in structure assignment pattern]({{< ref "rules/verilog_assignments/#duplicate-member-key-in-structure-assignment-pattern" >}})          | 31 |
|                           | [Mixed named and ordered notation in assignment pattern]({{< ref "rules/verilog_assignments/#mixed-named-and-ordered-notation-in-assignment-pattern" >}})      | 32 |
|                           | [Register initialization in declarations]({{< ref "rules/verilog_init" >}})                                                                                    | 35 |
|                           | [Formal item not found within the instantiated unit]({{< ref "rules/verilog_associations/#unresolved-formal-names" >}})                                        | 36 |
|                           | [Missing actuals for formals that have no default value]({{< ref "rules/verilog_associations/#missing-actuals-for-formals-that-have-no-default-value" >}})     | 38 |
|                           | [Default clause missing from case statement]({{< ref "rules/verilog_case/#default-clause-missing-from-case-statement" >}})                                     | 40 |
|                           | [Non-blocking assignments are not allowed in functions]({{< ref "rules/verilog_function/#non-blocking-assignments-are-not-allowed-in-functions" >}})           | 41 |
|                           | [Consecutive underscores in unit / port identifier]({{< ref "rules/verilog_identifiers/#underscores-in-identifier-names" >}})                                  | 42 |
|                           | [Underscores at end of unit / port identifier]({{< ref "rules/verilog_identifiers/#underscores-in-identifier-names" >}})                                       | 43 |
|                           | [Report encrypted regions]({{< ref "rules/verilog_style/#report-encrypted-regions" >}})                                                                        | 44 |
|                           | [Multiple statements per line]({{< ref "rules/verilog_style/#multiple-statements-per-line" >}})                                                                | 47 |
|                           | [Missing bit width for parameters wider than 32 bits]({{< ref "rules/verilog_parameters/#parameters-wider-than-32-bits" >}})                                   | 48 |
|                           | [Trailing comma is not recommended]({{< ref "rules/verilog_style/#trailing-comma-is-not-recommended" >}})                                                      | 52 |
|                           | [Empty parameter not allowed]({{< ref "rules/verilog_parameters/#empty-parameter-not-allowed" >}})                                                             | 53 |
|                           | [Empty parameter overrides not allowed]({{< ref "rules/verilog_parameters/#empty-parameter-overrides-not-allowed" >}})                                         | 54 |
|                           | [Named connections are not allowed with blank ports]({{< ref "rules/verilog_parameters/#project-specific-setting-of-these-rules" >}})                          | 56 |
|                           | [Regular expressions (RE2/J) compatibility check]({{< ref "rules/verilog_style/#regular-expressions-compatibility" >}})                                        | 58 |
|                           | [Local parameter has to be initialized]({{< ref "rules/verilog_parameters/#local-parameter-has-to-be-initialized" >}})                                         | 69 |
|                           | [Local parameter cannot be overwritten]({{< ref "rules/verilog_parameters/#local-parameter-cannot-be-overwritten" >}})                                         | 70 |
