---
title: Naming Conventions
linting:
  - vhdl
  - verilog
---

On the [**Naming Conventions**](/manual/eclipse/linting/#naming-conventions) preference page (**Window \>
Preferences \> Sigasi \> VHDL|Verilog/SystemVerilog \> Naming Conventions**) you can configure
patterns to check the correct naming of your VHDL, Verilog, and SystemVerilog identifiers. Two patterns can be set for an identifier: a valid pattern that the name of the identifier should match, and an invalid pattern that the name shouldn't match.
An identifier has to fulfill both conditions, so a name that matches both patterns is not valid.
Patterns are configured using [regex syntax](https://sigasi.com/app/regex).

Only names with a specified pattern are checked. Empty patterns are omitted.

**Example:** to enforce a style where all variables have a `_v` suffix, and don't contain numbers,
you would specify `.*_v` for the valid pattern and `.*[0-9].*` for the invalid pattern in the **Variable name** field.

{{% lintrule 92 %}}

{{% lintrule sv 2 %}}
