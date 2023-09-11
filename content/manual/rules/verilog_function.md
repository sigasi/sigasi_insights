---
title: Verilog Functions
linting: verilog
---

### Non-blocking assignments are not allowed in functions

A non-blocking assignment (`<=`) is not allowed in a (System)Verilog function.
While syntactically correct, it will generally not lead to the desired behavior, and will likely cause synthesis-simulation mismatch.
Sigasi Studio flags an error if a blocking assignment is used in a function (rule 41).

A good fix to correct the problem is to replace non-blocking assignments (`<=`) with blocking assignments (`=`)

<pre>module badcode;
	function plus_one;
		input integer a;
		begin
			plus_one <span class="error"><=</span> a + 1;  // Incorrect: non-blocking assignment
		end
	endfunction
endmodule

module goodcode;
	function plus_one;
		input integer a;
		begin
			plus_one <span class="goodcode">=</span> a + 1;   // Correct: blocking assignment
		end
	endfunction
endmodule</pre>

### Function prototype has implicit return type

SystemVerilog function prototypes (`pure virtual` functions) should have a return type. Sigasi Studio warns for function prototypes without return type (rule 10).

<pre>virtual class badclass;
    <span class="warning">pure virtual function myfunc</span>(input bit[31:0] data);           // return type missing
endclass

virtual class goodclass;
    pure virtual function <span class="goodcode">integer</span> myfunc(input bit[31:0] data);
endclass
</pre>

{{% ruleConfiguration many=yes %}}
{{< rule id=41 postcomment="Non-blocking assignment in function" />}}
{{< rule id=10 postcomment="Function prototype with implicit return type" />}}
{{% /ruleConfiguration %}}

<!-- 41 not configurable in preferences, only in file -->
