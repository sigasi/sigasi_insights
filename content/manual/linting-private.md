---
title: Private Linting
draft: "true"
---

# Linting Documentation

Some rules are not meant to be public, but documenting them is nice.

## Verilog

### Unused numbers

* 23
* 45
* 49
* 129

## VHDL

### ZAT Rules

| Availability | Description                                                                                                          | ID  |
| ------------ | -------------------------------------------------------------------------------------------------------------------- | --: |
| Exclusive    | Check ZAT style rules                                                                                                |  93 |
| Shared       | [Incomplete port map or generic map: using defaults]({{< ref "incomplete-port-maps-and-generic-maps" >}})            |  94 |
| Exclusive    | Subprogram length                                                                                                    |  95 |
| Exclusive    | Check for multiple statements per line                                                                               |  96 |
| Exclusive    | Check for tabs                                                                                                       |  99 |
| Exclusive    | Use parenthesis in expressions to enhance the readability                                                            | 109 |
| Exclusive    | Naming validation: output driver                                                                                     | 140 |
| Exclusive    | Comparison of vectors with different size                                                                            | 147 |
| Exclusive    | Don't use port mode 'buffer'                                                                                         | 155 |
| Exclusive    | Forbidden default values                                                                                             | 156 |
| Exclusive    | Magic numbers                                                                                                        | 157 |
| Exclusive    | One primary design unit per file                                                                                     | 158 |
| Exclusive    | Vectors should use 'downto' ranges                                                                                   | 159 |
| Exclusive    | Comments are required                                                                                                | 160 |
| Exclusive    | Process statements require a label                                                                                   | 161 |
| Exclusive    | A port map must not contain any operations                                                                           | 162 |
| Shared       | [All references must have the same capitalization as their declaration]({{< ref "capitalization-of-identifiers" >}}) | 163 |
| Shared       | [Check for positional associations in instantiations]({{< ref "positional-association-in-instantiations" >}})        | 164 |

### Thales Rules

| Availability | Description                                                                                                            | ID  |
| ------------ | ---------------------------------------------------------------------------------------------------------------------- | --: |
| Shared       | [Deprecated IEEE packages]({{< ref "deprecated-ieee-packages-non-standard-packages" >}})                               | 8   |
| Shared       | [Non-standard packages]({{< ref "deprecated-ieee-packages-non-standard-packages" >}})                                  | 37  |
| Shared       | [A process must either have a sensitivity list or contain one or more wait statements]({{< ref "sensitivity-list" >}}) | 38  |
| Shared       | [Find unused declarations]({{< ref "dead-code-lint" >}})                                                               | 55  |
| Shared       | [Find unused ports]({{< ref "dead-code-lint" >}})                                                                      | 67  |
| Shared       | [Find unused generics]({{< ref "dead-code-lint" >}})                                                                   | 68  |
| Shared       | [Find incomplete sensitivity lists]({{< ref "sensitivity-list" >}})                                                    | 72  |
| Exclusive    | Find internal tri state usage                                                                                          | 77  |
| Shared       | [Check naming conventions]({{< ref "rules/naming-conventions" >}})                                                     | 92  |
| Exclusive    | Subprogram length                                                                                                      | 95  |
| Exclusive    | Check for multiple statements per line                                                                                 | 96  |
| Shared       | [Check line length]({{< ref "rules/vhdl_style/#vhdl-code-line-too-long" >}})                                           | 97  |
| Exclusive    | Check for missing required comments                                                                                    | 98  |
| Exclusive    | Check for tabs                                                                                                         | 99  |
| Exclusive    | Check case of keywords                                                                                                 | 100 |
| Exclusive    | Check that end name/label is used                                                                                      | 102 |
| Exclusive    | Entity declarations                                                                                                    | 103 |
| Exclusive    | One return statement per function                                                                                      | 104 |
| Exclusive    | Entity instantiations should not be used                                                                               | 105 |
| Exclusive    | Restricted port modes                                                                                                  | 106 |
| Exclusive    | Check that named association is used                                                                                   | 107 |
| Exclusive    | Subprogram interface restrictions                                                                                      | 108 |
| Exclusive    | Use parenthesis in expressions to enhance the readability                                                              | 109 |
| Exclusive    | Subprogram side effects                                                                                                | 111 |
| Exclusive    | Process instruction nesting                                                                                            | 112 |
| Exclusive    | No 'next' or 'exit' in in loops                                                                                        | 113 |
| Exclusive    | Static slices                                                                                                          | 114 |
| Exclusive    | Pragma restrictions                                                                                                    | 115 |
| Exclusive    | Filename paths must be relative                                                                                        | 117 |
| Exclusive    | Missing labels                                                                                                         | 118 |
| Exclusive    | Signals/Variables should not be initialized                                                                            | 119 |
| Exclusive    | Type restrictions                                                                                                      | 120 |
| Exclusive    | Code comments lower limit                                                                                              | 121 |
| Exclusive    | Blank lines lower limit                                                                                                | 122 |
| Exclusive    | Integer type constraints                                                                                               | 123 |
| Exclusive    | Vector dimension direction                                                                                             | 124 |
| Exclusive    | No standard package overloading                                                                                        | 125 |
| Exclusive    | Attribute restrictions                                                                                                 | 126 |
| Exclusive    | Type restrictions                                                                                                      | 127 |
| Exclusive    | Keyword restrictions                                                                                                   | 128 |
| Exclusive    | Array dimension restrictions                                                                                           | 129 |
| Exclusive    | Global signal restrictions                                                                                             | 130 |
| Exclusive    | Package nesting restrictions                                                                                           | 131 |
| Exclusive    | Instantiation level restrictions                                                                                       | 132 |
| Exclusive    | Filename restrictions                                                                                                  | 133 |
| Exclusive    | Asynchronous loops                                                                                                     | 134 |
| Exclusive    | FSM encoding with std_logic_vector                                                                                     | 135 |
| Exclusive    | FSM encoding with enums                                                                                                | 136 |
| Exclusive    | Multiple process FSMs                                                                                                  | 137 |
| Exclusive    | Naming validation: active low signals                                                                                  | 138 |
| Exclusive    | Naming validation: falling edge                                                                                        | 139 |
| Exclusive    | Naming validation: output driver                                                                                       | 140 |
| Exclusive    | Naming validation: pipelines                                                                                           | 141 |
| Exclusive    | Naming validation: component instantiation                                                                             | 143 |
| Exclusive    | Recursive subprograms                                                                                                  | 145 |
| Exclusive    | Unique identifiers                                                                                                     | 146 |
| Exclusive    | Comparison of vectors with different size                                                                              | 147 |
| Exclusive    | Naming Convention: Clock names                                                                                         | 148 |
| Exclusive    | Naming Convention: Reset names                                                                                         | 149 |
| Exclusive    | Clock reassignments                                                                                                    | 150 |
| Exclusive    | Multiple clock edges in one process                                                                                    | 151 |
| Exclusive    | Missing reset for registers                                                                                            | 152 |
| Exclusive    | Generics must have a default value                                                                                     | 165 |
| Exclusive    | SourceFileEncoding ISO-8859-1                                                                                          | 167 |
| Shared       | [File header comment]({{< ref "check-header-comment" >}})                                                              | 188 |
| Exclusive    | Naming validation: component declaration                                                                               | 193 |
| Exclusive    | Signals/Variables that are not reset, should be initialized                                                            | 195 |
| Exclusive    | No mixed register resets                                                                                               | 196 |
| Exclusive    | Discouraged reset value                                                                                                | 204 |
| Exclusive    | Discouraged sensitivity list for synchronous processes                                                                 | 205 |
| Exclusive    | Filename restrictions                                                                                                  | 206 |
| Exclusive    | Maximum one secondary unit per file                                                                                    | 207 |
| Exclusive    | Naming validation: asynchronous signals                                                                                | 208 |
| Exclusive    | Each line must contain no more than one port or generic declaration                                                    | 216 |
| Exclusive    | Avoid assigning a vector of constant width to a signal                                                                 | 217 |
| Shared       | Check case of non-keywords                                                                                             | 224 |

### Deprecated Thales code rules
| Description                                                                       | Reason                     | ID  |
| --------------------------------------------------------------------------------- | -------------------------- | --: |
| Find unsynchronized use of top level input ports                                  | No longer needed by Thales |  78 |
| Check that secondary units are specified in the the same file as its primary unit | No longer needed by Thales | 101 |
| Subprogram signal parameters of type out are not allowed                          | No longer needed by Thales | 110 |
| Naming convention violation busses                                                | No longer needed by Thales | 116 |
| If-Then-Alignment                                                                 | No longer needed by Thales | 166 |

### Deprecated ZAT code rules
| Description                                | Reason           | ID  |
| ------------------------------------------ | ---------------- | --: |
| Instantiation validation: assign all ports | Superseded by 94 | 154 |

### Internal only
| Description                                |  ID |
| ------------------------------------------ | --: |
| Missing return statement                   |  66 |
| Find constant expressions are not constant |  74 |
| Naming validation: clock domain crossing   | 142 |
| Naming validation: registers               | 153 |
| Circular compilation dependency            | 203 |