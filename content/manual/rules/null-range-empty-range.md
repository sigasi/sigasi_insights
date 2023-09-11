---
title: Null or Empty Range
linting: vhdl
---

In VHDL, you can use ranges with `to` and `downto`. But, if you use the
wrong direction, you get an empty range, which is usually not what you
want.

<pre>signal foo: std_logic_vector(<span class="goodcode">7 downto 0</span>)  -- range of 8;
signal foo: std_logic_vector(<span class="warning">7 to 0</span>)      -- null range;</pre>

We have a lint check that warns about this, even if you use constants or some simple arithmetic.

{{< figure src="/img/manual/nullrange.png" >}}

{{% ruleConfiguration many=yes %}}
{{< rule id=1 comment="For ascending ranges" />}}
{{< rule id=26 comment="For descending ranges" />}}
{{% /ruleConfiguration %}}
