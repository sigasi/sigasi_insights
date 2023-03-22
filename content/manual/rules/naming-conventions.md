---
title: Naming Conventions
---

On the [**Naming Conventions**](/manual/linting/#naming-conventions) preference page (**Window \>
Preferences \> Sigasi \> VHDL|Verilog/SystemVerilog \> Naming Conventions**) you can configure
patterns to check the correct naming of your VHDL, Verilog, and SystemVerilog identifiers. Patterns are
configured using [regex syntax](https://sigasi.com/app/regex).

The above defines the Naming Conventions for the entire workspace.
To specify Naming Conventions for a project instead of for the entire workspace, have a look at [Naming Conventions per project]({{< ref "/manual/linting.md#naming-conventions-per-project" >}}).

Only names with a specified pattern are checked. Empty patterns are omitted.

**Example:** to enforce a style where all variables have a `_v` suffix,
you would specify `.*_v` pattern in the **Variable name** field.

{{% lintrule 92 %}}

{{% lintrule sv 2 %}}
