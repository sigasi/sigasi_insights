---
title: Verilog Unused Macros
linting: verilog
---

Sigasi Studio warns about unused macros. Unused macros are
often a side effect of code modifications. They can be safely removed.

<pre>
`define <span class="warning">UNUSED_MACRO</span>(a) $display(a)
module sumff(input clk, rst_n, logic[31:0] d1, d2, output logic[31:0] q);
    wire logic[31:0] sum;

    assign sum = d1 + d2;

    always @(posedge clk or negedge rst_n)
    if (~rst_n)
        q <= 32'b0;
    else
        q <= sum;
endmodule
</pre>

{{% ruleConfiguration %}}
{{< rule id=128 />}}
{{% /ruleConfiguration %}}
