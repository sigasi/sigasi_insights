---
title: Verilog Upward Reference
---

When talking about hierarchy, references can be divided into three groups:

* Downward references, starting from current module items;
* Hierarchical references, starting from the top level; and
* Upward references, starting from some module in between the top level and the current module.

Upward references can make the code very hard to understand, and hence to debug and maintain, so Sigasi warns you against their usage (rule 99).

<pre>
module top(input i1, i2, output o1, o2);
	mid mid1_inst(.i(i1), .o(o1));
	mid mid2_inst(.i(i2), .o(o2));
endmodule

module mid(input i, output o);
	int x;
	assign x <= 3 * i;
	assign o <= 3 * x;
	bottom bottom_inst();
endmodule

module bottom();
	initial $display(<span class="warning">mid</span>.x); // whichever mid's x could it be?
endmodule
</pre>

{{% lintrule sv 99 %}}
