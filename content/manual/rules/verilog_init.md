---
title: Verilog Checks on Initialization
---

Initializing registers at the point of declaration may be tricky. If your (System)Verilog code is not going
to be synthesized (e.g. testbench), it is completely acceptable. FPGA synthesis tools may also take initialization
into account, so depending on your FPGA project, initializing registers when they are declared in the code may be
a viable (or even preferred) option. 

ASIC synthesis tools however will ignore initialization as in the first example, which may lead to a mismatch between
synthesis and simulation. In such a case, initialization should be done using resets, as in the second example.

By default, Sigasi Studio flags a warning for register initialization at the point of the declaration. For FPGA projects
it may be desirable to turn the warning off, whereas for ASIC projects one may want to raise the severity to *error*.


<pre>module fpga_only(input clk, input rst, input ii, <span class="warning">output logic oo = 1'b0</span>);
    <span class="warning">logic sig = 1'b0</span>;

    // ...
endmodule</pre>

<pre>module asic_fpga(input clk, input rst, input ii, output logic oo);
    logic sig;

    always @(posedge clk) begin
        <span class="goodcode">if (rst == 1) begin</span>
            <span class="goodcode">sig = 1'b0;</span>
            <span class="goodcode">oo  = 1'b0;</span>
        <span class="goodcode">end</span>
        else begin
            // ...
        end
    end
endmodule</pre>


{{% lintrule sv 35 %}}
