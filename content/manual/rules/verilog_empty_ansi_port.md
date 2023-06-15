---
title: Verilog Empty Port in ANSI Port List
---

When using the ANSI style, it is not legal to declare empty ports in the port list. Such empty ports will be flagged as errors by Sigasi (rule 141).

<pre>
module empty_ansi_port(
    input a, 
    <span class="error">,</span>
    output b
);
endmodule
</pre>

<!-- Not configurable -->