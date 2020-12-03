---
title: Verilog case statements
---

Sigasi Studio has a number of checks on Verilog case statements.

## Case statement does not cover all cases

A `case` statement should cover all options, either enumerating all options explicitly or with a `default`
clause (rule 8). This rule is checked for `enum` types only, not for scalar or vector types.

<pre>module badcode(input clk);
    typedef enum {INIT, IDLE, START, READY} t_state;
    t_state state;

    always @(posedge clk) begin
        case (state)                      // <span class="badcode">Error: case `INIT` is missing</span>
            IDLE    : state = START;
            START   : state = READY;
            READY   : state = IDLE ;
        endcase
    end
endmodule

module bettercode(input clk);
    typedef enum {INIT, IDLE, START, READY} t_state;
    t_state state;

    always @(posedge clk) begin
        case (state)
            <span class="goodcode">INIT    : state = IDLE</span> ;
            IDLE    : state = START;
            START   : state = READY;
            READY   : state = IDLE ;
        endcase
    end
endmodule</pre>

Note that Sigasi Studio also warns for [case statements without a default clause](#default-clause-missing-from-case-statement)

## Default clause has to be the last item in a case statement

The `default` clause should be at the end, after all other options (rule 15). Sigasi Studio flags a warning if that is not the case.

<pre>module badcode(input clk);
    typedef enum {INIT, IDLE, START, READY} t_state;
    t_state state;

    always @(posedge clk) begin
        case (state)
            IDLE    : state = START;
            START   : state = READY;
            <span class="uglycode">default : state = IDLE</span> ;      // The `default` clause must be at the end
            READY   : state = IDLE ;
        endcase
    end
endmodule

module goodcode(input clk);
    typedef enum {INIT, IDLE, START, READY} t_state;
    t_state state;

    always @(posedge clk) begin
        case (state)
            IDLE    : state = START;
            START   : state = READY;
            READY   : state = IDLE ;
            <span class="goodcode">default : state = IDLE</span> ;
        endcase
    end
endmodule</pre>

This rule also applies to `generate case` statements, e.g.

<pre>module bad_example#(parameter WIDTH=8);

    generate
    case (WIDTH)
        <span class="uglycode">default:  // The `default` clause must be at the end</span>
        <span class="uglycode">    begin</span> // others - carry look-ahead adder
        <span class="uglycode">        adder_cla #(WIDTH) x3(co, sum, a, b, ci);</span>
        <span class="uglycode">    end</span>
        1: begin // 1-bit adder implementation
            adder_1bit x1(co, sum, a, b, ci);
        end
        // other cases
    endcase
    endgenerate

endmodule
</pre>

## Case statement can only have one default clause

A case statement can only have one `default` clause (rule 16). An error is flagged if more than one `default` clause is present.

<pre>module badcode(input clk);
    typedef enum {INIT, IDLE, START, READY} t_state;
    t_state state;

    always @(posedge clk) begin
        case (state)
            IDLE    : state = START;
            START   : state = READY;
            READY   : state = IDLE ;
            <span class="badcode">default : state = IDLE</span> ;      // Error: two `default` clauses
            <span class="badcode">default : state = START</span>;
        endcase
    end
endmodule

module goodcode(input clk);
    typedef enum {INIT, IDLE, START, READY} t_state;
    t_state state;

    always @(posedge clk) begin
        case (state)
            IDLE    : state = START;
            START   : state = READY;
            READY   : state = IDLE ;
            <span class="goodcode">default : state = IDLE</span> ;
        endcase
    end
endmodule</pre>

This rule also applies to `generate case` statements, e.g.

<pre>module bad_example#(parameter WIDTH=8);

    generate
    case (WIDTH)
        <span class="badcode">default:  // Error: two `default` clauses</span>
        <span class="badcode">    begin</span> // others - carry look-ahead adder
        <span class="badcode">        adder_cla #(WIDTH) x3(co, sum, a, b, ci);</span>
        <span class="badcode">    end</span>
        1: begin // 1-bit adder implementation
            adder_1bit x1(co, sum, a, b, ci);
        end
        // other cases
        <span class="badcode">default:  // Error: two `default` clauses</span>
        <span class="badcode">    begin</span> // others - carry look-ahead adder
        <span class="badcode">        adder_cla #(WIDTH) x3(co, sum, a, b, ci);</span>
        <span class="badcode">    end</span>
    endcase
    endgenerate

endmodule
</pre>

## Default clause missing from case statement

Sigasi Studio flags a warning for case statements without a `default` clause (rule 40). While a case statement without a `default` branch is syntactically correct, many guidelines recommend to attach default branch, even if the case statement is completely defined. This ensures no latch would be inferred during synthesis, if case is incomplete (sometimes difficult to judge, esp with casex/casez semantics or larger widths).

<pre>module rather_ok_code(input clk);
    typedef enum {INIT, IDLE, START, READY} t_state;
    t_state state;

    always @(posedge clk) begin
        case (state)
            INIT    : state = IDLE ;
            IDLE    : state = START;
            START   : state = READY;
            READY   : state = IDLE ;
            <span class="uglycode">// no default branch</span>
        endcase
    end
endmodule

module goodcode(input clk);
    typedef enum {INIT, IDLE, START, READY} t_state;
    t_state state;

    always @(posedge clk) begin
        case (state)
            INIT    : state = IDLE ;
            IDLE    : state = START;
            START   : state = READY;
            READY   : state = IDLE ;
            <span class="goodcode">default : state = IDLE</span> ;
        endcase
    end
endmodule</pre>

{{% lintrule sv 8 15 16 40 %}}
