---
title: Verilog Incorrect Port Declaration
---

In Verilog, there are two ways to declare a port list:
- ANSI style: The ports are fully declared in the port list.
- Non-ANSI style: The declarations of the ports are placed inside the body of the design unit.

<pre>
module correct_ansi(<span class="goodcode">input a</span>, b, output c);
endmodule

module correct_non_ansi(a, b, c);
    input a, b;
    output c;
endmodule
</pre>

When using the ANSI style, the first port of the port list must have either a direction, port type, or data type. If none of these are provided, the code is invalid (rule 135). 

<pre>
module missing_direction_ansi(<span class="error">a</span>, input b, output c);
endmodule
</pre>

When using the non-ANSI style, all ports in the port list must be declared in the body of the design unit and vice versa (rule 136 and 137).  

<pre>
module missing_port_non_ansi_136(<span class="error">a</span>, b, c);
    input b;
    output c;
endmodule

module missing_port_non_ansi_137(b, c);
    input <span class="error">a</span>, b;
    output c;
endmodule
</pre>

It is not legal to mix ANSI style port declarations and non-ANSI style port declarations within a single port list (rule 138).

<pre>
module ansi_style_mixing(input a, b, c);
    output <span class="error">c</span>;
endmodule
</pre>

<!-- Not configurable -->