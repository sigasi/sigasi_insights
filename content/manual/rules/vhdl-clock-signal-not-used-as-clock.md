---
title: Clock Signal Not Used as Clock
linting: vhdl
---

To prevent issues during synthesis or static timing analysis, it's important to use a signal that is used as a clock exclusively for that purpose, and not as e.g. reset or data. Sigasi Studio will mark all instances where a clock signal is incorrectly used in this manner.

<pre>
p : process (clk) is
    variable data : std_logic_vector(15 downto 0);
begin
    if rising_edge(clk) then
        if rst = '1' then
            ...
        else
            data(8) := <span class="warning">clk</span>;
        end if;
    end if;
end process p;
</pre>

{{% lintrule 249 %}}
