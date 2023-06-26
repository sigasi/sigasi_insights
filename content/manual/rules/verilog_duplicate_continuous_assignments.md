---
title: Verilog Duplicate Continuous Assignments
linting: verilog
---

Sigasi Studio warns if a signal is assigned a value in
multiple continuous assignments (rule 101).  Duplicate continuous assignments are
optimized away during synthesis. Having duplicates decreases the
readability of the code and may lead to mistakes.

<pre>
module bad_sumff(input clk, rst_n, logic[31:0] d1, d2, output logic[31:0] q);
    wire logic[31:0] <span class="warning">sum</span> = d1 + d2;

    assign <span class="warning">sum</span> = d1 + d2;

    always @(posedge clk or negedge rst_n)
    if (~rst_n)
        q <= 32'b0;
    else
        q <= sum;

    assign <span class="warning">sum</span> = d1 + d2;
endmodule
</pre>

<pre>
module sumff(input clk, rst_n, logic[31:0] d1, d2, output logic[31:0] q);
    wire logic[31:0] sum;

    assign <span class="goodcode">sum</span> = d1 + d2;

    always @(posedge clk or negedge rst_n)
    if (~rst_n)
        q <= 32'b0;
    else
        q <= sum;
endmodule
</pre>

{{% lintrule sv 101 %}}