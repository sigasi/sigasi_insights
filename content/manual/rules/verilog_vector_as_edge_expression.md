---
title: Vector as Edge Event Expression
---

SystemVerilog allows the use of vector types as edge event expressions. However, in this case, the transition would be detected only for the least significant bit of the vector. Edge detection is usually used for clocks and asynchronous reset signals which are supposed to be scalar. Sigasi Studio reports usages of vectors in edge event controls, as they're most likely an indication of signal name typo or an incorrect data type of a control signal.

<pre>module ff(input [7:0] d, clk, output [7:0] q);
    always_ff @(posedge <span class="warning">clk</span>) begin // Edge event detection on 'logic [7:0]'. Only changes to the LSB of the vector will be detected
        q <= d;
    end
endmodule
</pre>

If detecting the edge on a single bit of the vector signal is intentional, using bit-selection can show this decision explicitly:

<pre>module ffs#(WIDTH = 8) (input [WIDTH-1:0] d, clk, output [WIDTH-1:0] q);
    for (genvar i = 0; i < WIDTH; i++) begin
        always_ff @(posedge <span class="goodcode">clk[i]</span>) begin
            q[i] <= d[i];
        end
    end
endmodule
</pre>

{{% lintrule sv 143 %}}
