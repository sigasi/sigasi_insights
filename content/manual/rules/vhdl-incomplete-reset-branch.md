---
title: Incomplete Reset Branch
linting: vhdl
---

A reset branch should always reset all registers modified by the corresponding clocked block. An incomplete reset branch could cause unexpected enable or clock gating logic to be synthesized for the registers that were not reset. Sigasi will let you know if a reset branch is incomplete, and what registers are missing.

<pre>
p : process (clk) is
    variable a: integer;
    variable b: integer;
    variable c: integer;
begin
    if rising_edge(clk) then
        if rst = '1' <span class="warning">then</span> -- c is not reset
            a := 0;
            b := 0;
        else
            a := a + 1;
            b := b + 2;
            c := c + 3;
        end if;
    end if;
end process p;
</pre>

{{% ruleConfiguration %}}
{{< rule id=238 />}}
{{% /ruleConfiguration %}}
