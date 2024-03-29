---
title: Verilog Case Statements
linting: verilog
---

Sigasi Studio has a number of checks on Verilog case statements.

### Case statement does not cover all cases

A `case` statement should cover all options, either enumerating all options explicitly or with a `default`
clause (rule 8). This rule is checked for `enum` types only, not for scalar or vector types.

<pre>module badcode(input clk);
    typedef enum {INIT, IDLE, START, READY} t_state;
    t_state state;

    always @(posedge clk) begin
        case (state)                      // <span class="warning">Error: case `INIT` is missing</span>
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

### Default clause has to be the last item in a case statement

The `default` clause should be at the end after all the other options (rule 15). Sigasi Studio warns if that is not the case.

<pre>module badcode(input clk);
    typedef enum {INIT, IDLE, START, READY} t_state;
    t_state state;

    always @(posedge clk) begin
        case (state)
            IDLE    : state = START;
            START   : state = READY;
            <span class="warning">default : state = IDLE</span> ;      // The `default` clause must be at the end
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
        <span class="warning">default:  // The `default` clause must be at the end</span>
        <span class="warning">    begin</span> // others - carry look-ahead adder
        <span class="warning">        adder_cla #(WIDTH) x3(co, sum, a, b, ci);</span>
        <span class="warning">    end</span>
        1: begin // 1-bit adder implementation
            adder_1bit x1(co, sum, a, b, ci);
        end
        // other cases
    endcase
    endgenerate

endmodule
</pre>

### Case statement can only have one default clause

A case statement can only have one `default` clause (rule 16). A warning is flagged if more than one `default` clause is present.

<pre>module badcode(input clk);
    typedef enum {INIT, IDLE, START, READY} t_state;
    t_state state;

    always @(posedge clk) begin
        case (state)
            IDLE    : state = START;
            START   : state = READY;
            READY   : state = IDLE ;
            <span class="warning">default : state = IDLE</span> ;      // Error: two `default` clauses
            <span class="warning">default : state = START</span>;
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
        <span class="warning">default:  // Error: two `default` clauses</span>
        <span class="warning">    begin</span> // others - carry look-ahead adder
        <span class="warning">        adder_cla #(WIDTH) x3(co, sum, a, b, ci);</span>
        <span class="warning">    end</span>
        1: begin // 1-bit adder implementation
            adder_1bit x1(co, sum, a, b, ci);
        end
        // other cases
        <span class="warning">default:  // Error: two `default` clauses</span>
        <span class="warning">    begin</span> // others - carry look-ahead adder
        <span class="warning">        adder_cla #(WIDTH) x3(co, sum, a, b, ci);</span>
        <span class="warning">    end</span>
    endcase
    endgenerate

endmodule
</pre>

### Default clause missing from case statement

Sigasi Studio warns for case statements without a `default` clause (rule 40). While a case statement without a `default` branch is syntactically correct, many guidelines recommend attaching a default branch, even if the case statement is completely defined. This ensures no latch would be inferred during synthesis if the case is incomplete (sometimes difficult to judge, esp with casex/casez semantics or larger widths).

<pre>module rather_ok_code(input clk);
    typedef enum {INIT, IDLE, START, READY} t_state;
    t_state state;

    always @(posedge clk) begin
        case (state)
            INIT    : state = IDLE ;
            IDLE    : state = START;
            START   : state = READY;
            READY   : state = IDLE ;
            <span class="warning">// no default branch</span>
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

{{% ruleConfiguration many=yes %}}
{{< rule id=8 postcomment="Missing cases" />}}
{{< rule id=15 postcomment="Default clause must be last" />}}
{{< rule id=16 postcomment="Multiple default clauses" />}}
{{< rule id=40 postcomment="Missing default clause" />}}
{{% /ruleConfiguration %}}
