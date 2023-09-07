---
title: Unconstrained Signal or Variable of Integer Type
linting: vhdl
---

In VHDL, it is good practice to constrain integer types (or types derived from integer types) when they are used for signals. Doing so will allow the synthesis tool to optimize the number of bits used for this signal. If this rule is enabled, Sigasi will report all unconstrained integer types used for signals.

<pre>
...
signal sig_a : <span class="warning">integer</span>;
signal sig_b : <span class="goodcode">integer range 0 to 100</span>;
...
</pre>

{{% lintrule 236 %}}
