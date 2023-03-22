---
title: Linting Rules for Loops
---

Sigasi Studio can check for a number of loop-related problems:

* Infinite loop missing a wait (rule 20). Note that infinite `while` and `for` loops will not be checked by this rule.

<pre>process
begin
   <span class="warning">loop</span>
      -- statements go here
   end loop;
end process;

process
begin
   loop
      -- statements go here
      <span class="goodcode">wait for 1 ns;</span>
   end loop;
end process;</pre>

* Empty loop statement (rule 190): the loop body doesn't contain any statements

<pre>for loopvar in </span> loop
<span class="warning">   -- nothing going on here...</span>
end loop;</pre>

* `for` loops that will not execute due to a loop variable with a null range will be flagged with the [Null range linting rule]({{< ref "null-range-empty-range" >}}).


{{% lintrule 20 190 %}}
