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

**Note:** The Naming Conventions preference page is not yet available in the project preferences.
If you require project-based configuration of the naming conventions rather than workspace preferences,
please refer to the manual [Rule configuration](#rule-configuration) detailed below.

Only names with a specified pattern are checked. Empty patterns are omitted.

**Example:** to enforce a style where all variables have a `_v` suffix, and don't contain numbers,
you would specify `.*_v` for the valid pattern and `.*[0-9].*` for the invalid pattern in the **Variable name** field.

{{% ruleConfiguration many=yes %}}
# Note: two patterns can be specified. These patterns are separated by a tab
# character. The first pattern specifies a *valid* pattern (something that must
# match), and the second pattern specifies an *invalid* pattern (something that
# can not match). If only a valid pattern is required, the tab character can
# be left out. If only an invalid pattern is required, the pattern should be
# specified after a (backslash-escaped) tab character.

{{< rule id=92 comment="In the VHDL linting preferences file" >}}
{{< param/posneg name="alias_name" >}}
{{< param/posneg name="architecture_name" >}}
{{< param/posneg name="comment_header" >}}
{{< param/posneg name="concurrent_assignment_name" >}}
{{< param/posneg name="configuration_name" >}}
{{< param/posneg name="constant_name" >}}
{{< param/posneg name="context_declaration" >}}
{{< param/posneg name="entity_name" >}}
{{< param/posneg name="enumeration_literal_name" >}}
{{< param/posneg name="file_name" >}}
{{< param/posneg name="fsm_enumeration_literal_name" >}}
{{< param/posneg name="fsm_state_name" >}}
{{< param/posneg name="function_name" >}}
{{< param/posneg name="generate_statement_name" >}}
{{< param/posneg name="generic_name" >}}
{{< param/posneg name="instantiation_statement_name" >}}
{{< param/posneg name="label" >}}
{{< param/posneg name="package_name" >}}
{{< param/posneg name="procedure_name" >}}
{{< param/posneg name="port_name" >}}
{{< param/posneg name="input_port_name" >}}
{{< param/posneg name="output_port_name" >}}
{{< param/posneg name="inout_port_name" >}}
{{< param/posneg name="process_statement_name" >}}
{{< param/posneg name="signal_name" >}}
{{< param/posneg name="type_name" >}}
{{< param/posneg name="variable_name" >}}
{{< /rule >}}
{{< rule id=2 comment="In the Verilog linting preferences file" >}}
{{< param/posneg name="class_name" >}}
{{< param/posneg name="comment_header" >}}
{{< param/posneg name="instantiation" >}}
{{< param/posneg name="interface_class_name" >}}
{{< param/posneg name="interface_name" >}}
{{< param/posneg name="module_name" >}}
{{< param/posneg name="package_name" >}}
{{< param/posneg name="program_name" >}}
{{< param/posneg name="subprogram_name" >}}
{{< param/posneg name="port_name" >}}
{{< param/posneg name="input_name" >}}
{{< param/posneg name="output_name" >}}
{{< param/posneg name="inout_name" >}}
{{< param/posneg name="parameter_name" >}}
{{< param/posneg name="net_name" >}}
{{< param/posneg name="var_name" >}}
{{< param/posneg name="ud_nettype_name" >}}
{{< param/posneg name="typedef_name" >}}
{{< param/posneg name="enum_typedef_name" >}}
{{< param/posneg name="enum_member_name" >}}
{{< param/posneg name="generate_block_name" >}}
{{% /rule %}}
{{% /ruleConfiguration %}}

### Example

A manual VHDL configuration were all ports must start with `p_`
except inout ports which must start with `b_`,
and where input ports cannot contain numbers.
We mark the ports with error markers if they don't comply.

```text
92/severity//<project>=ERROR
92/params/port_name=p_.*
92/params/input_port_name=\	.*[0-9].*
92/params/inout_port_name=b_.*
eclipse.preferences.version=1
isEnabled=true
```
