---
title: Comparison of Vectors with Different Sizes
linting: vhdl
---

Comparing vectors of different sizes can result in unexpected behavior, and should therefore be avoided. Sigasi Studio will flag all comparisons of vectors whose ranges do not match. Note that potential mismatches will also be flagged when generics are used in one or both of the ranges, more information about such cases can be found in [this article]({{< ref "/tech/generic-port-width" >}}).

<pre>
...
s_in : in std_logic_vector(WIDTH downto 0);
s_out : out std_logic_vector(7 downto 0);
...
if (s_in <span class="warning">></span> s_out) then
...
</pre>

<pre>
...
s_in : in std_logic_vector(WIDTH downto 0);
s_out : out std_logic_vector(<span class="goodcode">WIDTH</span> downto 0);
...
if (s_in > s_out) then
...
</pre>

{{% ruleConfiguration %}}
{{< rule id=232 />}}
{{% /ruleConfiguration %}}
