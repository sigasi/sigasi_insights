---
title: Naming Conventions
---

On the **Navigation conventions** preference page (**Window \>
Preferences \> Sigasi \> VHDL/(System)Verilog \> Naming conventions**) you can configure
patterns to check correct naming of your VHDL and SystemVerilog identifiers. Patterns are
configured with [Java regex syntax](https://docs.oracle.com/javase/8/docs/api/index.html?java/util/regex/Pattern.html).

Only names with a specified pattern are checked. Empty patterns are
omitted.

**Example:** to enforce a style where all variables have a `_v` suffix,
you would specify `.*_v` pattern in the **Variable name** field.

{{% lintrule 92 %}}
