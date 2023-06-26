---
title: Verilog Duplicate Declaration
linting: verilog
---

In Verilog and SystemVerilog, you are not allowed to declare the same identifier multiple times within the same scope. All duplicate declarations are marked as errors (rule 95).

<pre>
module bad_code;
    parameter p = 0;
    parameter <span class="error">p</span> = 1;
endmodule
</pre>

<pre>
parameter p = 0;

module good_code;
    parameter <span class="goodcode">p</span> = 1;
endmodule
</pre>

<!-- Not configurable -->