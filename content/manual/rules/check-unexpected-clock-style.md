---
title: Unexpected Clock Edge Specification
linting: vhdl
---

Sigasi Studio can check that the same **clock edge specification style** is used throughout the entire **design**. This standard rule provides a clean **coding style** guaranteeing **consistency** in clock checks. This rule consists of three configurable options:

- **event attribute**, ensures that all clock conditions are using the **event attribute**, for example, `clk'event and clk = '1'`
- **stable attribute**, ensures that all clock conditions are using the **stable attribute**, for example, `not clk'stable and clk = '1'`
- **edge function**, ensures that all clock conditions are using an edge function, for example, `rising_edge(clk)` `falling_edge(clk)`

The default configured type is `edge_function`, but this can be changed in the [project linting settings](/manual/eclipse/linting/#manual-configuration) (`${project_location}/.settings/com.sigasi.hdt.vhdl.linting.prefs`). For example:

```text
250/params/style//=edge_function
```

**Example** with `edge_function` selected
<pre>
process(clk) is
    variable count : natural := 0;
begin
    if <span class="warning">clk'event</span> and clk='0' then -- Wrong clock style!
        count := count + 1;
    end if;
end process;
</pre>

<pre>
process(clk) is
    variable count : natural := 0;
begin
    if <span class="goodcode">falling_edge(clk)</span> then
        count := count - 1;
    end if;
end process;
</pre>

**Note** that using clock attributes is **deprecated** since VHDL 93 by the IEEE 1164 standard, use **edge functions** instead.

{{% lintrule 250 %}}
