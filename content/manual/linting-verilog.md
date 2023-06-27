---
title: Verilog and SystemVerilog Linting
showinmenu: true
weight: 10
pager: true
---

<!-- prettier-ignore -->
# List of Verilog and SystemVerilog Linting Rules

The table below lists the Verilog and SystemVerilog linting rules that can be checked automatically by Sigasi.
The availability of linting rules depends on the license requirements.

## ST Linting Rules

ST linting rules are available for all licenses including {{< starter >}}.

<!-- prettier-ignore -->
|                          | Description                                                                                                                                                    |       ID |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------: |
| {{< severity error 0 >}} | [Named and positional port connections cannot be mixed]({{< ref "rules/verilog_associations/#named-and-positional-associations-cannot-be-mixed" >}})           |        5 |
| {{< severity error 0 >}} | The `packed` keyword is required in packed structs and unions                                                                                                  |        6 |
| {{< severity error 0 >}} | The `for` loop statement misses mandatory part (Verilog)                                                                                                       |        9 |
| {{< severity error 0 >}} | Parameter port list cannot be empty                                                                                                                            |       11 |
| {{< severity error 0 >}} | No semicolon expected at this point (Verilog)                                                                                                                  |       12 |
| {{< severity error 0 >}} | Verilog disallows empty assignments of ordered parameters (Verilog)                                                                                            |       13 |
| {{< severity error 0 >}} | [Named and positional parameter overrides cannot be mixed]({{< ref "rules/verilog_associations/#named-and-positional-associations-cannot-be-mixed" >}})        |       25 |
| {{< severity error 0 >}} | [Only one default member expression is allowed per assignment pattern]({{< ref "rules/verilog_assignments/#only-one-default-member-expression-is-allowed" >}}) |       29 |
| {{< severity error 0 >}} | Only variable output ports can have a default value in non-ANSI notation                                                                                       |       33 |
| {{< severity error 0 >}} | Only input or variable output ports can have a default value in ANSI notation                                                                                  |       34 |
| {{< severity error 0 >}} | [Duplicate formal item within the instantiated unit]({{< ref "rules/verilog_associations/#duplicate-port-and-parameter-connections" >}})                       |       37 |
| {{< severity error 0 >}} | [Excessive number of actuals in ordered notation]({{< ref "rules/verilog_associations/#excessive-number-of-actuals-in-ordered-notation" >}})                   |       39 |
| {{< severity error 0 >}} | Timing controls are not allowed in functions                                                                                                                   |       46 |
| {{< severity error 0 >}} | Net data types must be 4-state                                                                                                                                 |       50 |
| {{< severity error 0 >}} | Net data types integral                                                                                                                                        |       51 |
| {{< severity error 0 >}} | [Empty parameters]({{< ref "rules/verilog_empty_parameters" >}})                                                                                               |   53, 54 |
| {{< severity error 0 >}} | Invalid package item                                                                                                                                           |       55 |
| {{< severity error 0 >}} | Unexpected preprocessor directive inside design elements                                                                                                       |       57 |
| {{< severity error 0 >}} | [Non-packed member in packed structure]({{< ref "rules/verilog_identifiers/#non-packed-member-in-packed-structure" >}})                                        |       59 |
| {{< severity error 0 >}} | [Illegal type in untagged union]({{< ref "rules/verilog_identifiers/#illegal-type-in-untagged-union" >}})                                                      |       60 |
| {{< severity error 0 >}} | [Illegal class member access]({{< ref "rules/verilog_class_item_visibility" >}})                                                                               |       61 |
| {{< severity error 0 >}} | Declaration not found                                                                                                                                          |       71 |
| {{< severity error 0 >}} | Attempted implicit declaration with default nettype none                                                                                                       |       73 |
| {{< severity error 0 >}} | Invalid enumeration element range format                                                                                                                       |       74 |
| {{< severity error 0 >}} | Range of enumeration element is too large                                                                                                                      |       75 |
| {{< severity error 0 >}} | Invalid construct                                                                                                                                              |       76 |
| {{< severity error 0 >}} | Invalid randomize argument                                                                                                                                     |       77 |
| {{< severity error 0 >}} | Not a value expression                                                                                                                                         |       78 |
| {{< severity error 0 >}} | Type not assignment compatible                                                                                                                                 |       79 |
| {{< severity error 0 >}} | Constraint class scope missing                                                                                                                                 |       80 |
| {{< severity error 0 >}} | Constraint class with packed dimensions                                                                                                                        |       81 |
| {{< severity error 0 >}} | [Ambiguous reference]({{< ref "rules/verilog_ambiguous_reference" >}})                                                                                         |       93 |
| {{< severity error 0 >}} | [Duplicate declaration]({{< ref "rules/verilog_duplicate_declaration" >}})                                                                                     |       95 |
| {{< severity error 0 >}} | Invalid UDP initial value                                                                                                                                      |       96 |
| {{< severity error 0 >}} | Different file encoding for including file and included file                                                                                                   |      102 |
| {{< severity error 0 >}} | Missing macro identifier                                                                                                                                       |      103 |
| {{< severity error 0 >}} | Undefined macro                                                                                                                                                |      104 |
| {{< severity error 0 >}} | Forbidden macro identifier                                                                                                                                     |      105 |
| {{< severity error 0 >}} | Missing `endif                                                                                                                                                 |      106 |
| {{< severity error 0 >}} | Missing identifier following expansion                                                                                                                         |      107 |
| {{< severity error 1 >}} | Failed include                                                                                                                                                 |      108 |
| {{< severity error 0 >}} | Macro expansion depth limit reached                                                                                                                            |      109 |
| {{< severity error 0 >}} | Inclusion loop                                                                                                                                                 |      110 |
| {{< severity error 0 >}} | Issues found while expanding macro                                                                                                                             |      111 |
| {{< severity error 0 >}} | Missing macro argument list                                                                                                                                    |      112 |
| {{< severity error 0 >}} | Mismatched number of arguments                                                                                                                                 |      113 |
| {{< severity error 0 >}} | Unexpected directive operand                                                                                                                                   |      114 |
| {{< severity error 0 >}} | Identifier expansion with an invalid sequence of tokens                                                                                                        |      115 |
| {{< severity error 0 >}} | Unexpected conditional compiler directive                                                                                                                      |      116 |
| {{< severity error 0 >}} | Unknown time literal                                                                                                                                           |      118 |
| {{< severity error 0 >}} | Unexpected operand                                                                                                                                             |      119 |
| {{< severity error 0 >}} | Missing operand                                                                                                                                                |      120 |
| {{< severity error 0 >}} | Unsupported include path                                                                                                                                       |      122 |
| {{< severity error 0 >}} | Syntax error                                                                                                                                                   | 123, 124 |
| {{< severity error 0 >}} | Invalid macro argument list                                                                                                                                    |      125 |
| {{< severity error 0 >}} | Unbalanced expression                                                                                                                                          |      126 |
| {{< severity error 0 >}} | Unbalanced directive invocation                                                                                                                                |      127 |
| {{< severity error 0 >}} | [Incorect port declaration]({{< ref "rules/verilog_incorrect_port_declaration" >}})                                                                            |  135-139 |
| {{< severity error 0 >}} | [Empty port in ANSI port list]({{< ref "rules/verilog_empty_ansi_port" >}})                                                                                    |      141 |

## XL Linting Rules

XL linting rules require a {{< xl >}} or {{< xprt >}} license.

<!-- prettier-ignore -->
|                            | Description                                                                                                                                                              |  ID |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --: |
| {{< severity warning 0 >}} | [Empty loops and conditional branches]({{< ref "rules/verilog_style/#empty-loops-and-conditional-branches" >}})                                                          |   1 |
| {{< severity warning 0 >}} | [Check naming conventions]({{< ref "rules/naming-conventions" >}})                                                                                                       |   2 |
| {{< severity ignore 1 >}}  | [Disallow `reg` datatype]({{< ref "rules/verilog_reg" >}})                                                                                                               |   3 |
| {{< severity info 0 >}}    | [The module name is a keyword in VHDL and may cause problems in mixed language projects]({{< ref "rules/verilog_identifiers/#vhdl-keywords-as-module-name" >}})          |   7 |
| {{< severity warning 0 >}} | [Case statement does not cover all cases]({{< ref "rules/verilog_case/#case-statement-does-not-cover-all-cases" >}})                                                     |   8 |
| {{< severity warning 1 >}} | [Function prototype has implicit return type]({{< ref "rules/verilog_function/#function-prototype-has-implicit-return-type" >}})                                         |  10 |
| {{< severity info 1 >}}    | [Implicit subprogram port direction]({{< ref "rules/verilog_input" >}})                                                                                                  |  14 |
| {{< severity warning 0 >}} | [Default clause has to be the last item in a case statement]({{< ref "rules/verilog_case/#default-clause-has-to-be-the-last-item-in-a-case-statement" >}})               |  15 |
| {{< severity error 0 >}}   | [Case statement has multiple default clauses, but only one default clause is allowed]({{< ref "rules/verilog_case/#case-statement-can-only-have-one-default-clause" >}}) |  16 |
| {{< severity warning 0 >}} | [File name does not match design unit]({{< ref "rules/verilog_style/#file-name-does-not-match-design-unit" >}})                                                          |  17 |
| {{< severity warning 0 >}} | [File contains multiple design units]({{< ref "rules/verilog_style/#file-contains-multiple-design-unit" >}})                                                             |  18 |
| {{< severity info 0 >}}    | [Parameters must have a default value]({{< ref "rules/verilog_parameters/#parameters-without-a-default-value" >}})                                                       |  19 |
| {{< severity ignore 0 >}}  | [Verilog code line too long]({{< ref "rules/verilog_style/#verilog-code-line-too-long" >}})                                                                              |  20 |
| {{< severity ignore 0 >}}  | [Tabs are not allowed]({{< ref "rules/verilog_style/#tabs-are-not-allowed" >}})                                                                                          |  21 |
| {{< severity ignore 0 >}}  | [File header comment does not match required pattern]({{< ref "rules/verilog_style/#file-header-comment-does-not-match-required-pattern" >}})                            |  22 |
| {{< severity warning 0 >}} | [Named port connections have to be used for all instances with many ports]({{< ref "rules/verilog_associations/#named-parameter-and-port-connections-have-to-be-used-for-all-instances-with-many-parameters--ports" >}}) |                   24 |
| {{< severity warning 0 >}} | [Named parameter overrides have to be used for all instantiations with many parameters]({{< ref "rules/verilog_associations/#named-parameter-and-port-connections-have-to-be-used-for-all-instances-with-many-parameters--ports" >}}) |                   26 |
| {{< severity warning 0 >}} | [No event control at the top of `always` construct]({{< ref "rules/verilog_process" >}})                                                                                 |  27 |
| {{< severity warning 0 >}} | [Default member must be last in assignment pattern]({{< ref "rules/verilog_assignments/#default-member-must-be-last" >}})                                                |  28 |
| {{< severity warning 0 >}} | [Overwritten type key in assignment pattern]({{< ref "rules/verilog_assignments/#overwritten-type-key-in-assignment-pattern" >}})                                        |  30 |
| {{< severity error 0 >}}   | [Duplicate member key in structure assignment pattern]({{< ref "rules/verilog_assignments/#duplicate-member-key-in-structure-assignment-pattern" >}})                    |  31 |
| {{< severity warning 0 >}} | [Mixed named and ordered notation in assignment pattern]({{< ref "rules/verilog_assignments/#mixed-named-and-ordered-notation-in-assignment-pattern" >}})                |  32 |
| {{< severity warning 0 >}} | [Register initialization in declarations]({{< ref "rules/verilog_init" >}})                                                                                              |  35 |
| {{< severity warning 0 >}} | [Missing actuals for formals that have no default value]({{< ref "rules/verilog_associations/#missing-actuals-for-formals-that-have-no-default-value" >}})               |  38 |
| {{< severity warning 0 >}} | [Default clause missing from case statement]({{< ref "rules/verilog_case/#default-clause-missing-from-case-statement" >}})                                               |  40 |
| {{< severity error 0 >}}   | [Non-blocking assignments are not allowed in functions]({{< ref "rules/verilog_function/#non-blocking-assignments-are-not-allowed-in-functions" >}})                     |  41 |
| {{< severity warning 0 >}} | [Consecutive underscores in unit / port identifier]({{< ref "rules/verilog_identifiers/#underscores-in-identifier-names" >}})                                            |  42 |
| {{< severity warning 0 >}} | [Underscores at end of unit / port identifier]({{< ref "rules/verilog_identifiers/#underscores-in-identifier-names" >}})                                                 |  43 |
| {{< severity ignore 0 >}}  | [Report encrypted regions]({{< ref "rules/verilog_style/#report-encrypted-regions" >}})                                                                                  |  44 |
| {{< severity warning 0 >}} | [Multiple statements per line]({{< ref "rules/verilog_style/#multiple-statements-per-line" >}})                                                                          |  47 |
| {{< severity warning 0 >}} | [Missing bit width for parameters wider than 32 bits]({{< ref "rules/verilog_parameters/#parameters-wider-than-32-bits" >}})                                             |  48 |
| {{< severity warning 0 >}} | [Named connections are not allowed with blank ports]({{< ref "rules/verilog_parameters/#project-specific-setting-of-these-rules" >}})                                    |  56 |
| {{< severity warning 1 >}} | [Regular expressions (RE2/J) compatibility check]({{< ref "rules/verilog_style/#regular-expressions-compatibility" >}})                                                  |  58 |
 |{{< severity error 0 >}}   | [Overridden method signature mismatch]({{< ref "rules/verilog_overridden_method_signature_mismatch" >}})                                                                 |  62-68 |
| {{< severity error 0 >}}   | [Local parameter has to be initialized]({{< ref "rules/verilog_parameters/#local-parameter-has-to-be-initialized" >}})                                                   |  69 |
| {{< severity error 0 >}}   | [Local parameter cannot be overridden]({{< ref "rules/verilog_parameters/#local-parameter-cannot-be-overridden" >}})                                                     |  70 |
| {{< severity error 0 >}}   | [Type checking]({{< ref "rules/verilog_type_checking" >}})                                                                                                               | 78, 79, 94, 100, 131 |
| {{< severity error 0 >}}   | [Out-of-bound method signature mismatch]({{< ref "rules/verilog_out_of_bound_method_declarations/" >}})                                                                  |  82-92 |
| {{< severity warning 0 >}} | [Implicit net]({{< ref "rules/verilog_implicit_net/" >}})                                                                                                                |  97 |
| {{< severity warning 0 >}} | [Duplicate conditions]({{< ref "rules/verilog_duplicate_conditions" >}})                                                                                                 |  98 |
| {{< severity warning 0 >}} | [Upward reference]({{< ref "rules/upward_reference/" >}})                                                                                                                |  99 |
| {{< severity warning 0 >}} | [Duplicate continuous assignments]({{< ref "rules/verilog_duplicate_continuous_assignments" >}})                                                                         | 101 |
| {{< severity warning 0 >}} | [Whitespace following a backtick]({{< ref "rules/verilog_tool_compatibility/#whitespace-following-a-backtick" >}})                                                       | 117 |
| {{< severity warning 0 >}} | [Invalid preprocessor syntax]({{< ref "rules/verilog_tool_compatibility/#invalid-preprocessor-syntax-outside-macro-body" >}})                                            | 121 |
| {{< severity warning 0 >}} | [Unused macros]({{< ref "rules/verilog_unused_macros" >}})                                                                                                               | 128 |
| {{< severity warning 0 >}} | [Unused declaration]({{< ref "rules/verilog_unused_declaration" >}})                                                                                                     | 130 |
| {{< severity warning 0 >}} | [Hidden non-virtual methods]({{< ref "rules/verilog_hiding_non_virtual_methods" >}})                                                                                     | 132 |
| {{< severity error 0 >}}   | [Unexpected empty concatenation]({{< ref "rules/verilog_empty_concatenation" >}})                                                                                        | 133 |
| {{< severity error 0 >}}   | [Unexpected empty assignment pattern]({{< ref "rules/verilog_empty_assignment_pattern" >}})                                                                              | 134 |
| {{< severity warning 0 >}} | [Duplicate port]({{< ref "rules/verilog_duplicate_port" >}})                                                                                                             | 140 |
| {{< severity warning 0 >}} | [Empty port]({{< ref "rules/verilog_empty_non_ansi_port" >}})                                                                                                            | 142 |

## Deprecated Linting Rules

Deprecated linting rules were used by Sigasi at some point, but they've been removed or superseded in the most recent version.

<!-- prettier-ignore -->
| Description                                                                   | Reason                                                                                                          |  ID |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --: |
| A Verilog `net` type keyword cannot be followed directly by the `reg` keyword | Superseded by a syntax error                                                                                    |   4 |
| Formal item not found within the instantiated unit                            | Superseded by a syntax error                                                                                    |  36 |
| Unexpected trailing `,` in parameter list                                     | Superseded by the [Empty parameters]({{< ref "rules/verilog_empty_parameters" >}}) rule (rule 53)               |  52 |
| Ambiguous design unit reference                                               | Superseded by the more general [Ambiguous reference]({{< ref "rules/verilog_ambiguous_reference" >}}) (rule 93) |  72 |
