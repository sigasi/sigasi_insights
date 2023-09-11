---
title: Sensitivity List
linting: vhdl
---

Sigasi Studio can warn about problems with your sensitivity list:

### Presence of either a sensitivity list or one or more wait statements in a process

VHDL requires a **sensitivity list** for each process or `wait` statements in the process body.

### Incomplete sensitivity list

A sensitivity list should contain all signals the process is sensitive to.

<pre><span class="warning">process</span>(a)
begin
   c <= a and b;
end process;</pre>

### Superfluous signals in sensitivity list

A sensitivity list should only contain signals the process is sensitive to. Adding more signals will only slow down your simulations.

<pre>process(a, b, <span class="warning">c</span>)
begin
   c <= a and b;
end process;</pre>

### Duplicate signals in sensitivity list

A sensitivity list should only contain signals the process is sensitive to. Adding duplicate signals is likely a typo and doesn't have any practical effect.

<pre>process(a, b, <span class="warning">b</span>)
begin
   c <= a and b;
end process;</pre>

A **sensitivity list** should contain **all signals that are read
asynchronously in the process**. For a _combinatorial process_, all
signals read by the process should be in the sensitivity list. For a
_synchronous or clocked process_, only the clock signal and an
asynchronous reset signal (if present) should be in the sensitivity
list.  In synthesizable code, an incomplete sensitivity list will
likely cause a synthesis-simulation mismatch.  Even in test benches and
purely behavioral code, an incomplete sensitivity list is often
unintended and may lead to an unexpected simulation result.  Most
synthesis tools ignore the sensitivity list. In traditional workflows,
only the synthesis warnings will give you a hint that your sensitivity
list is incomplete. This report will be available only hours or even
days after you have finished typing your code. Flagging this problem
early can save a lot of time.

Since VHDL-2008, you can write `process (all)` to make sure you have
all the necessary signals in the sensitivity list.

<pre>process(<span class="goodcode">a, b</span>)
begin
   c <= a and b;
end process;</pre>

<pre>process(<span class="goodcode">clk</span>)
begin
   if rising_edge(clk) then
      -- code
   end if;
end process;</pre>

<pre>process(<span class="goodcode">clk, rst</span>)
begin
   if rst = '1' then
      -- reset code
   elsif rising_edge(clk) then
      -- code
   end if;
end process;</pre>

<pre>process(<span class="goodcode">all</span>)
begin
   c <= a and b;
end process;</pre>

{{% ruleConfiguration many=yes %}}
{{< rule id=38 postcomment="Neither sensitivity nor wait" />}}
{{< rule id=72 postcomment="Incomplete sensitivity list" />}}
{{< rule id=73 postcomment="Superfluous signals" />}}
{{< rule id=85 postcomment="Duplicate signals" />}}
{{% /ruleConfiguration %}}
