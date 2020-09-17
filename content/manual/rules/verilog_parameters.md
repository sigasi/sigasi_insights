---
title: Verilog parameters
---

Sigasi Studio flags a warning if a parameter is declared without a default value. Syntactically this is allowed, since the instantiating modules should provide the value to the instance parameter.
However, it is undesirable since it makes the definition dependent on particular hierarchy and limits code reusability.
In addition, it is creating elaboration errors when attempting to use such module as a top-level.

<pre>module badcode;
	<span class="uglycode">parameter P</span>;
	initial
	    $display(P);
endmodule

module goodcode;
	parameter P<span class="goodcode"> = 0</span>;
	initial
	    $display(P);
endmodule</pre>

{{% lintrule sv 19 %}}
