---
title: Prohibited Macro
linting: verilog
---

Some macros might be deprecated, or their use might be discouraged by certain guidelines. This check can be configured with a list of prohibited macros, all uses of these macros will be flagged as a warning.

For example, if the `size` macro is configured to be prohibited:

<pre>
// Deprecated
`define size 42

...

module my_module(input logic clk, rst);
   logic [`<span class="warning">size</span> : 0] data;
   ...
endmodule
</pre>

{{% ruleConfiguration %}}
{{< rule id=129 />}}
{{< param/list name="prohibited_macros" type="macro">}}
{{% /ruleConfiguration %}}
