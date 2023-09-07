---
title: Inconsistent clock edge usage
linting: vhdl
---

Sigasi Studio can check that the same **clock edge** is used throughout the entire **design**. It provides a clean **coding style** simplifying **maintainability** and enhancing **safety**. If using a single edge is too restrictive, this rule can be configured to check the clock edge usage consistency for each **design file**. This rule consists of three check types:

- **rising**, ensures that all clock edges are **rising edges**
- **falling**, ensures that all clock edges are **falling edges**
- **consistent**, adapts the rule to the **most** used edge per **design file**. If there are equal amounts of rising and falling edges, the **first** encountered edge will be chosen

The default configured type is `consistent`, but this can be changed in the [project linting settings](/manual/eclipse/linting/#manual-configuration) (`${project_location}/.settings/com.sigasi.hdt.vhdl.linting.prefs`). For example:

```text
254/params/expected_edge//=rising
```

**Example** with `rising` edge selected
<pre>
process(clk) is
    variable count : natural := 0;
begin
    if rising_edge(clk) then
        count := count + 1;
    end if;

    if <span class="warning">falling_edge(clk)</span> then -- Inconsistent!
        count := count - 1;
    end if;
end process;
</pre>

**Note** that this rule also works with the old-school clock edge condition:
<pre>
process(clk) is
    variable count : natural := 0;
begin
    if clk'event and clk = '1' then
        count := count + 1;
    end if;

    if <span class="warning">clk'event and clk = '0'</span> then -- Inconsistent!
        count := count - 1;
    end if;
end process;
</pre>

{{% lintrule 254 %}}
