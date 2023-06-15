---
title: Verilog Parameters
---

Sigasi Studio validates the use of parameters in (System)Verilog.

## Parameters without a default value

Sigasi Studio warns if a parameter is declared without a default value (rule 19). Syntactically this is allowed since the instantiating modules should provide the value to the instance parameter.
However, it is undesirable since it makes the definition dependent on a particular hierarchy and limits code reusability.
In addition, it is creating elaboration errors when attempting to use such modules as a top-level.

<pre>module badcode;
	<span class="info">parameter P</span>;
	initial
	    $display(P);
endmodule

module goodcode;
	parameter P<span class="goodcode"> = 0</span>;
	initial
	    $display(P);
endmodule</pre>

## Parameters width mismatch

Sigasi Studio flags an error if a parameter with a defined width is declared is assigned a value of differing width (rule 48).

<pre><span class="warning">parameter int         p = 'h764321098</span>;   // Number of bits set a04a (35) wider than the expected bit width (32)

<span class="goodcode">parameter signed [36] q = 'h764321098;</pre>

## Empty parameter not allowed

The Verilog standard does not allow empty parameters (rule 53).

<pre>
module dut # (parameter WIDTH = 42<span class="warning">, </span>) (input clk); endmodule; // dangling comma is not allowed

module dut # (parameter WIDTH = 42<span class="goodcode"> </span>) (input clk); endmodule;
</pre>

## Empty parameter overrides not allowed

The Verilog standard does not allow empty parameter overrides (rule 54).

<pre>
module test;
    sub#(8, 16<span class="warning">, </span>) inst(); // dangling comma is not allowed
endmodule

module test;
    sub#(8, 16<span class="goodcode"> </span>) inst();
endmodule
</pre>

## Local parameter has to be initialized

The Verilog standard requires that local parameters are initialized (rule 69).

<pre>
<span class="error">localparam p;</span>             // initialization missing

<span class="goodcode">localparam p = 1;</span>
</pre>

## Local parameter cannot be overridden

The Verilog standard does not allow the overriding of local parameters (rule 70).

<pre>
module name(
    input clk,
    input rst
);
    localparam int test = 42;

    <span class="error">defparam test = 0;</span>    // override not allowed
endmodule : name
</pre>

{{% lintrule sv 19 48 53 54 69 70 %}}

<!-- 69 and 70 not configurable in preferences, only in file -->