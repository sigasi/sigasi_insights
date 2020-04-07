---
title: Sensitivity List
---

VHDL requires a **sensitivity list** for each process (or wait statements in the process body).

Sigasi Studio can warn about problems with your sensitivity list:

* **Presence of either a sensitivity list or one or more wait statements in a process** (rule 38)

* **Incomplete sensitivity list** (rule 72) (there is Quick Fix for this)
<pre>process(a<span class="badcode">  </span>)
begin
       c <= a and b;
end process;</pre>

* **Superfluous signals in sensitivity list** (rule 73)
<pre>process(a, b<span class="badcode">, c</span>)
begin
       c <= a and b;
end process;</pre>

* **Duplicate signals in sensitivity list** (rule 85)
<pre>process(a, b<span class="badcode">, b</span>)
begin
       c <= a and b;
end process;</pre>

A **sensitivity list** should contain **all signals that are read
asynchronously in the process**. For a _combinatorial process_, all
signals read by the process should be in the sensitivity list. For a
_synchronous or clocked process_, only the clock signal and an
asynchronous reset signal (if present) should be in the sensitivity
list.  If that is not the case, your simulation results may be
different from your synthesis results. <!--TODO needs rephrasing-->
Most synthesis tools ignore the sensitivity list. In traditional
workflows, only the synthesis warnings will give you a hint that your
sensitivity list is incomplete. This report will be available only
hours or even days after you have finished typing your code. Flagging
this problem earlier saves time and lets you catch the problem early.

Since VHDL-2008, you can write `process (all)` to make sure you have
all necessary signals in the sensitivity list.

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

{{% lintrule 38 72 73 85 %}}
