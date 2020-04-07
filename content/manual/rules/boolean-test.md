---
title: Testing equality of booleans to true or false
---

When using booleans, it is unnecessary to test whether they're equal to `true` (rule 185) or `false` (rule 186). Simply testing the boolean results in cleaner code.

<pre>signal valid: boolean;
-- some code omitted
if <span class="goodcode">valid</span> then
   -- ...
end if;

if <span class="badcode">valid = true</span> then
   -- ...
end if;

if <span class="goodcode">not valid</span> then
   -- ...
end if;

if <span class="badcode">valid = false</span> then
   -- ...
end if;

if <span class="badcode">valid /= true</span> then
   -- ...
end if;
</pre>

Note that the equals-false rule (186) is disabled (set to `IGNORE`) by default.

{{% lintrule 185 186 %}}
