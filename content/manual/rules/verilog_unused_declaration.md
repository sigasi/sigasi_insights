---
title: Verilog Unused Declaration
---

A declaration that is never used does not contribute anything to a design and can be an indication of a coding error. Unused declarations will be marked as warnings.

<pre>
module code;
    logic <span class="warning">var1</span> = 0;
    logic <span class="goodcode">var2</span> = 1;

    initial $display(<span class="goodcode">var2</span>);
endmodule
</pre>

{{% lintrule sv 130 %}}