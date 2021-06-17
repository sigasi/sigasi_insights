---
title: Verilog functions
---

## Non-blocking assignments are not allowed in functions

A non-blocking assignment (`<=`) is not allowed in a (System)Verilog function.
While syntactically correct, it will generally not lead to the desired behaviour, and will likely cause synthesis-simulation mismatch.
Sigasi Studio flags an error if a blocking assignment is used in a function (rule 41).

A good fix to correct the problem is to replace non-blocking assignments (`<=`) with blocking assignments (`=`)

<pre>module badcode;
	function plus_one;
		input integer a;
		begin
			plus_one <span class="badcode"><=</span> a + 1;  // Incorrect: non-blocking assignment
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

## Function prototype has implicit return type

SystemVerilog function prototypes (`pure virtual` functions) should have a return type. Sigasi Studio flags a warning for function prototypes without return type (rule 10).

<pre>virtual class badclass;
    <span class="uglycode">pure virtual function myfunc</span>(input bit[31:0] data);           // return type missing
endclass

virtual class goodclass;
    pure virtual function <span class="goodcode">integer</span> myfunc(input bit[31:0] data);
endclass
</pre>


{{% lintrule sv 10 41 %}}
