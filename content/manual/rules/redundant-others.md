---
title: Redundant "others"
linting: vhdl
---

If a case statement contains all the possible choices (usually in an
enumerated datatype), you can safely remove the `when others` clause.
Sigasi Studio warns about this:

**Case statement contains all choices explicitly. You can safely remove
the redundant `others`.**

<pre>case bits is
  when "00" => -- code
  when "01" => -- code
  when "10" => -- code
  when "11" => -- code
  when <span class="warning">others</span> => -- never reached: all cases are covered
end case;
</pre>

There is some debate on this coding rule. However, the vast majority of
synthesis tools do not take the `others` into account if all choices are
enumerated. If the synthesis tool is set up to generate fault-tolerant
hardware, the fallback state is the same as the reset state (for most
synthesis tools). Check the manual of your synthesis tools and run some
experiments.
For more information, see [VHDL case statements can do without the "others"](/tech/vhdl-case-statements-can-do-without-others).

{{% ruleConfiguration %}}
{{< rule id=13 />}}
{{% /ruleConfiguration %}}
