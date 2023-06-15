---
title: Verilog Duplicate Conditions
---

Duplicate conditions decrease readability and could lead to unused code. Duplicate conditions are often an unintended result of copy-pasting. Sigasi marks these duplicates as warnings (rule 98).

<pre>
module bad_code(input clk);
    if(<span class="warning">clk && clk</span>) begin
        // Do something
    end
endmodule
</pre>

<pre>
module good_code(input clk);
    if(clk) begin
        // Do something
    end
endmodule
</pre>

This is also the case for if-else chains or switch cases.

<pre>
module bad_code(input clk);
    if(clk) begin
        // Do something
    end else if(<span class="warning">clk</span>) begin
        // Never called
    end

    typedef enum {INIT, IDLE, START, READY} t_state;
    t_state state;

    always @(posedge clk) begin
        case (state)
            IDLE    : state = START;
            <span class="warning">IDLE</span>    : state = READY; // Never called
            READY   : state = IDLE ;
        endcase
    end
endmodule
</pre>

{{% lintrule sv 98 %}}
