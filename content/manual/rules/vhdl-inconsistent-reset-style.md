---
title: Inconsistent Reset Style
linting: vhdl
---

There are two types of resets for a synchronous design, synchronous resets and asynchronous resets. It can be good practice to consistently use only one of these throughout a project. This rule can be configured to prefer either a synchronous or asynchronous **reset style** and will mark all reset branches that do not follow the selected style.

For example, if the validation is configured to prefer a synchronous reset style:
<pre>
async_p : process (clk, rst) is
begin
    if rst = '1' <span class="warning">then</span>
        ...
    elsif rising_edge(clk) then
        ...
    end if;
end process async_p;
</pre>
<pre>
sync_p : process (clk) is
begin
    if rising_edge(clk) then
        if rst = '1' <span class="goodcode">then</span>
            ...
        else
            ...
        end if;
    end if;
end process sync_p;
</pre>

{{% lintrule 252 %}}
