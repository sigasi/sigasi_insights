---
title: "Actual? Formal? What do they mean?"
layout: page 
pager: true
author: Wim Meeus
date: 2020-10-14
tags: 
  - SystemVerilog
  - Verilog
  - VHDL
comments: true
bannerad: true
---

In this article, we discuss the terms **actual** and **formal**. These
terms show up in the **Language Reference Manual** of VHDL and
(System)Verilog, and they also show up in some of the error messages
in Sigasi Studio. Actuals and formals are short for actual and formal
**arguments** of functions, procedures, entities, modules...

A **formal** is an argument in the **definition** of a function,
procedure, entity, module etc. In other words, a formal is a **port**,
a **generic** or a **parameter**. 

```vhdl
package func is
    function my_function(
        arg1 : natural;         -- `arg1` and `arg2` are formals
        arg2 : natural
    ) return natural;

end package func;

entity enti is
    generic(
        aa : integer := 2;      -- `aa` and `bb` are formals
        bb : natural := 1
    );
    port(
        clk :  in std_logic;    -- `clk`, `rst` and `foo` are formals
        rst :  in std_logic;
        foo : out std_logic
    );
end entity enti;
```

An **actual** is the **value** which is assigned to a formal e.g. in a
function or procedure **call**, or in a module or entity
**instantiation**. An actual can be an **identifier** (signal,
variable...), an **expression**, or a special **keyword** like `open` in VHDL.

```vhdl
architecture RTL of insta is
    signal val1, val2 : natural;
    constant c1       : natural := 5;
    constant c2       : natural := 7;

begin                                                   -- `arg1` and `arg2` are formals
    val1 <= my_function(       c1,           c2 - c1);  -- `c1` and `(c2 - c1)` are actuals 
    val2 <= my_function(arg1 => 1, arg2 => val1 + c1);  -- `1` and `(val1 + c1)` are actuals

    enti_inst : entity work.enti
        generic map(
            aa => val2,                                 -- `aa` and `bb` are formals
            bb => val1 - 3                              -- `val2` and `(val1 - 3)` are actuals
        )
        port map(
            clk => clock,                               -- `clk`, `rst` and `foo` are formals
            rst => reset,                               -- `clock`, `reset` and `open` are actuals
            foo => open
        );
end architecture RTL;
```

In Sigasi Studio, the terms **formal** and **actual** are used in a
number of [**warning** and **error messages**](/manual/linting). Here are some examples,
in which a module `demo` with 4 ports (formals) is instantiated a few
times. Each instantiation demonstrates one particular error involving
formals and/or actuals.

<PRE>
module demo(
	input clk,
	input rst,
	input int data,
	output int rslt
);
endmodule

module top (
    input clk,
    input rst,
    input int topdata,
    output int rslt1, rslt2, rslt3, rslt4
);

demo demo_instance1 (  <span class="badcode">// Too many actual ports: there are 5 actuals for 4 formals</span>
    clk,
    rst,
    <span class="badcode">topdata</span>,
    <span class="badcode">topdata</span>,           <span class="badcode">// Unintended duplication?</span>
    rslt1
);

demo demo_instance2 (
    .clk(clk),
    .rst(rst),
    <span class="badcode">.data</span>(topdata+1),
    <span class="badcode">.data</span>(topdata+2),   <span class="badcode">// Duplicate formal port `data` used in the instantiation statement</span>
    .rslt(rslt2)
);

demo demo_instance3 (   <span class="badcode">// Missing actual for formal port `rslt`</span>
    .clk(clk),
    .rst(rst),
    .data(topdata)      <span class="badcode">// Where is the value for `rslt`?</span>
);

demo demo_instance4 (
    .clk(clk),
    .rst(rst),
    .data(topdata),
    <span class="badcode">.foo</span>(rslt3),        <span class="badcode">// Formal port `foo` not found in the instantiated unit</span>
    .rslt(rslt4)
);
endmodule
</PRE>

If you encounter any of these messages, you now know what they *actually* tell you.