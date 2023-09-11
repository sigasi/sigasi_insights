---
title: Testing Equality of Booleans to true or false
linting: vhdl
---

When using booleans, it is unnecessary to test whether they're equal to `true` (rule 185) or `false` (rule 186). Simply testing the boolean results in cleaner code.

<pre>signal valid: boolean;
-- some code omitted
if <span class="goodcode">valid</span> then
   -- ...
end if;

if <span class="warning">valid = true</span> then
   -- ...
end if;

if <span class="goodcode">not valid</span> then
   -- ...
end if;

if <span class="info">valid = false</span> then
   -- ...
end if;

if <span class="info">valid /= true</span> then
   -- ...
end if;
</pre>

Note that the equals-false rule (186) is disabled (set to `IGNORE`) by default.

{{% ruleConfiguration many=yes %}}
{{< rule id=185 />}}
{{< rule id=186 />}}
{{% /ruleConfiguration %}}
