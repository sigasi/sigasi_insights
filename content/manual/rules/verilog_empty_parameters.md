---
title: Verilog Empty Parameters
linting: verilog
---

In Verilog and SystemVerilog, it is legal to have empty ports or port connections to indicate unused ports. However, this is not allowed for parameters or parameter overrides. Such errors are detected and marked by Sigasi (rules 53 and 54).

<pre>
module parameterized#(
    parameter p = 10,
    <span class="error">,</span>
    parameter q = 20
);
    ...
endmodule
</pre>

<pre>
module inner#(
    parameter p = 10,
    parameter q = 20,
    parameter r = 30
)
    ...
endmodule


module outer;
    inner#( 
        25,
        <span class="error">,</span>
        50
    ) inner_inst();
endmodule
</pre>

<!-- Not configurable -->