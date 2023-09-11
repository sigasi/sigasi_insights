---
title: Incorrect Vector Range Direction
linting: vhdl
---

VHDL allows arrays with both ascending (`to`) and descending ranges (`downto`). For vectors (one-dimensional arrays of scalars, e.g. `bit` or `(u)logic`) using a descending range is recommended. In this case leftmost bit is the MSB and the rightmost bit is the LSB, and that is what is assumed by the VHDL standard library's arithmetic operators. Using an ascending range for vectors is also possible, however, it's recommended to use a consistent style.

<pre>entity Downto_vectors is
   port(
       G0_g    : bit_vector(<span class="warning">0 to 7</span>);
       G1_g    : bit_vector(<span class="goodcode">7 downto 0</span>);
   );
end entity Downto_vectors;
</pre>

This rule can be configured by setting the desired **vector range direction**, either ascending or descending.

Note that this rule is set to {{< severity ignore 0 >}} `ignore` by default.

{{% ruleConfiguration %}}
{{< rule id=241 >}}
{{< param/enumeration direction downto to >}}
{{< /rule >}}
{{% /ruleConfiguration %}}
