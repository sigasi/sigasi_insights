---
title: Verilog Implicit Net
linting: verilog
---

When a previously undeclared name is used in a port connection, a continuous assignment, or an alias, it will be implicitly declared as a scalar net of the default nettype. Such implicit declarations often arise from coding errors, such as a typo in the name or an attempt to reference something that is not available in the current scope. For this reason, all implicit net declarations will be marked as warnings.

<pre>
module inner(input wire logic x, y);
    ...
endmodule


module error_prone_code;
    wire logic declared_net = 0;

    inner inner_inst(<span class="goodcode">declared_net</span>, <span class="warning">implicit_net</span>);
endmodule
</pre>

{{% ruleConfiguration %}}
{{< rule id=97 />}}
{{% /ruleConfiguration %}}
