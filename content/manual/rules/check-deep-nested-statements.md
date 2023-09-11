---
title: Deep Nesting of Conditional and Loop Statements
linting: vhdl
---

Deeply nested conditional and loop statements reduce code readability. Restructuring code or extracting logic to functions can help to keep code in a maintainable state.

Another problem is that deep nesting can result in complicated prioritized logic being synthesized increasing circuit size significantly.

Sigasi Studio can report deeply nested sequential loops and conditions. Note that this rule has the maximum nested depth set to `5` and is **ignored** by default. You can enable it in the VHDL **Errors/Warnings** preference page (**Style Validation > Deep nesting of conditional and loop statements**).

**Example** with a nesting limit of 2:
<pre>
procedure nested(a : natural) is
begin
    if a >= 1 then -- nesting depth 0
        if a < 42 then -- nesting depth 1
            for I in 0 to 1 loop -- nesting depth 2
                <span class="warning">case</span> a is -- Statement exceeds conditional and loop nesting limit of 2
                    when 21 => report integer'image(a) severity note;
                    when others => null;
                end case;
            end loop;
        end if;
    end if;
end procedure nested;
</pre>

{{% ruleConfiguration %}}
{{< rule id=239 >}}
{{< param/int name=limit min=1 >}}
{{< /rule >}}
{{% /ruleConfiguration %}}
