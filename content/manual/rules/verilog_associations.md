---
title: Verilog port and parameter associations
---

Sigasi Studio has several checks on Verilog port and parameter associations.

## Named parameter and port connections have to be used for all instances with many parameters / ports

A long list of positional parameter or port connections is difficult to read and maintain. Therefor, Sigasi Studio warns if a
list of positional connections is longer than 3 items (rules 24 and 26). If the number of associations is larger than 3, named connections should be used.

<pre>module sub(input clk, arst, enable, data, output reg data_out);
    always @(posedge clk or negedge arst)
    if (~arst)
        data_out <= 1'b0;
    else if (enable)
        data_out <= data;
endmodule

module badtop;
    logic clk, arst, en, a, b;
    sub sub_inst(<span class="badcode">clk, arst, en, a, b</span>); // 5 ordered associations: difficult to read and maintain
endmodule

module goodtop;
    logic clk, arst, en, a, b;
    sub sub_instance (
        <span class="goodcode">.clk(clk)</span>,
        <span class="goodcode">.arst(arst)</span>,
        <span class="goodcode">.enable(enable)</span>,
        <span class="goodcode">.data(a)</span>,
        <span class="goodcode">.data_out(b)</span>
    );
endmodule</pre>

The maximum number of 3 items is a default value, it can be changed in the
[project linting settings](/manual/linting/#project-specific-linting-settings) (`${project_location}/.settings/com.sigasi.hdt.verilog.linting.prefs`). E.g.:

```
24/params/max_ordered_port_connections/<project>=4
26/params/max_ordered_parameter_overrides/<project>=2
```

## Named and positional associations cannot be mixed

Sigasi Studio flags an error when attempting to mix named and positional port or parameter associations (rule 25).

<pre>module sub#(PARAM_1=2, PARAM_2=3) ();
endmodule

module badtop;
    // Syntax error: mix of named (`PARAM_1`) and positional (`3`) association
    sub#(<span class="badcode">.PARAM_1(2), 3</span>) sub_inst();
endmodule

module ok_top;
    // All associations are positional: OK but harder to understand and maintain
    sub#(<span class="uglycode">2, 3</span>) sub_inst();
endmodule

module goodtop;
    // All associations are named: best practice
    sub#(<span class="goodcode">.PARAM_1(2), .PARAM_2(3)</span>) sub_inst();
endmodule</pre>

## Unresolved formal names

Sigasi Studio flags an error for named port and parameter connections if the instantiated module doesn't have ports with these names (rule 36).

<pre>module sub(i1, i2, o1);
    parameter WIDTH = 8;
    input[WIDTH-1:0] i1, i2;
    output[WIDTH-1:0] o1;
endmodule

module badtop;
    logic aa, bb, cc;
    // parameter `HEIGHT` and ports `a`, `b`, `c` do not exists in module `sub`
    sub#(.<span class="badcode">HEIGHT</span>(4)) sub_inst(
        .<span class="badcode">a</span>(aa),
        .<span class="badcode">b</span>(bb),
        .<span class="badcode">c</span>(cc)
    );
endmodule

module goodtop;
    logic aa, bb, cc;
    sub#(.<span class="goodcode">WIDTH</span>(4)) sub_inst(
        .<span class="goodcode">i1</span>(aa),
        .<span class="goodcode">i2</span>(bb),
        .<span class="goodcode">o1</span>(cc)
    );
endmodule</pre>

## Duplicate port and parameter connections

Sigasi Studio flags an error for duplicate named port and parameter connections (rule 37).

<pre>module sub#(WIDTH=8) (input[WIDTH-1:0] i1=1'b0, i2, output[WIDTH-1:0] o1);
endmodule

module badtop;
    logic a, b, c;
    // parameter `WIDTH` and port `i1` are connected twice
    sub#(.<span class="badcode">WIDTH</span>(4), .<span class="badcode">WIDTH</span>(6)) sub_inst(
        .<span class="badcode">i1</span>(a),
        .<span class="badcode">i1</span>(b),
        .o1(c)
    );
endmodule

module goodtop;
    logic a, b, c;
    // parameter `WIDTH` and port `i1` are connected once
    sub#(<span class="goodcode">.WIDTH(4)</span>) sub_inst(
        <span class="goodcode">.i1(a)</span>,
        .o1(c)
    );
endmodule</pre>

## Missing actuals for formals that have no default value

Sigasi Studio flags a warning for missing port or parameter connections if the ports or parameters don't have a default value (rule 38).

<pre>module sub
 #(LHS, RHS=0)
 (input[LHS:RHS] i1=1'b0, i2, output[LHS:RHS] o1);
endmodule

module badtop;
    logic[7:0] x;
    // parameter `LHS` and port `i2` don't have a default value so they must be connected
    sub <span class="badcode">sub_inst(.o1(x))</span>;
endmodule

module goodtop;
    logic[7:0] x;
    wire[7:0] y;
    sub#(<span class="goodcode">.LHS(7)</span>) sub_inst(
         <span class="goodcode">.i2(y)</span>,
         <span class="goodcode">.o1(x)</span>
    );
endmodule</pre>

## Excessive number of actuals in ordered notation

Sigasi Studio flags an error if the number of positional parameter or port connections is larger than the number of parameters or ports of the instantiated module (rule 39).

<pre>module sub#(WIDTH=8) (input[WIDTH-1:0] i1=1'b0, i2, output[WIDTH-1:0] o1);
endmodule

module badtop;
    logic a, b, c, d;
    // Expecting 1 parameter connection and 3 port connections instead of 2 and 4
    sub#(4<span class="badcode">, 6</span>) sub_inst(a, b, c<span class="badcode">, d</span>);
endmodule

module goodtop;
    logic a, b, c;
    sub#(<span class="goodcode">4</span>) sub_inst(<span class="goodcode">a, b, c</span>);
endmodule</pre>

Note that if there are too few positional parameter or port connections, an error for [missing connections]({{< ref "#missing-actuals-for-formals-that-have-no-default-value" >}}) will be flagged.

{{% lintrule sv 24 26 36 38 %}}
