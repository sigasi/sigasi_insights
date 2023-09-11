---
title: Implicit Vector to Boolean Conversion
---

When a vector signal is used as a conditional expression or as an argument to logical operators (e.g. `&&`, `||`, `!`) it's implicitly converted to scalar value `0` (false) if all vector bits are zero or to `1` (true) otherwise. It's not clear in this case if such conversion was intentional or by mistake, and a scalar type or bitwise operator, such as `&`, `|`, or `~` was expected.

<pre>module ff(input clk, [7:0] d, rst, output [7:0] q);
    always_ff @(posedge clk) begin
        if (<span class="warning">rst</span>)                   // Implicit conversion of 'logic [7:0]' to boolean
            q <= 0;
        else
            q <= !<span class="warning">d</span>;               // Implicit conversion of 'logic [7:0]' to boolean
    end
endmodule
</pre>

It may be better to explicitly compare the vector with zero (`vec == 0` or `vec != 0`) if that's your intent.

Note that this rule is disabled (set to `IGNORE`) by default.

{{% ruleConfiguration %}}
{{< rule id=144 />}}
{{% /ruleConfiguration %}}
