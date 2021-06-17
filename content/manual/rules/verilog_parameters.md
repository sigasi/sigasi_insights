---
title: Verilog parameters
---

Sigasi Studio validates the use of parameters in (System)Verilog.

## Parameters without a default value

Sigasi Studio flags a warning if a parameter is declared without a default value (rule 19). Syntactically this is allowed, since the instantiating modules should provide the value to the instance parameter.
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

## Parameters wider than 32 bits

Sigasi Studio flags an error if a parameter is declared with a default
value which is wider than 32 bits (rule 48). If a parameter needs to
be wider than 32 bits, its width must be specified.

<pre><span class="badcode">parameter        p = 'h764321098</span>;   // default value is 36 bits wide, width must be specified

<span class="goodcode">parameter [35:0] q = 'h764321098</span>;</pre>

## Empty parameter not allowed

The Verilog standard doesn't allow empty parameters.

<pre>
module dut # (parameter WIDTH = 42<span class="badcode">, </span>) (input clk); endmodule; // dangling comma is not allowed

module dut # (parameter WIDTH = 42<span class="goodcode"> </span>) (input clk); endmodule;
</pre>

## Empty parameter overrides not allowed

The Verilog standard doesn't allow empty parameter overrides.

<pre>
module test;
    sub#(8, 16<span class="badcode">, </span>) inst(); // dangling comma is not allowed
endmodule


module test;
    sub#(8, 16<span class="goodcode"> </span>) inst();
endmodule
</pre>


{{% lintrule sv 19 48 53 54 %}}
