---
title: Verilog processes
---

(System)Verilog `always` constructs without an event control statement at the top cannot be synthesized.
Additionally, they would activate in random order at the moment 0 at beginning of a simulation.

Sigasi Studio flags a warning for `always` blocks without event control statement at the start.

A good way to correct this description is to place the timing control statement at the top.

<pre>module test(clk, data_in, data_out);
    input clk;
    input[3:0] data_in;
    output reg[3:0] data_out;
    
    always
    begin
        data_out <= data_in;
        <span class="uglycode">@(posedge clk);</span> // Timing control not at the top of 'always'
    end
endmodule

module test(clk, data_in, data_out);
    input clk;
    input[3:0] data_in;
    output reg[3:0] data_out;
    
    always <span class="goodcode">@(posedge clk)</span>
       data_out <= data_in;
    
endmodule</pre>

{{% lintrule sv 27 %}}
