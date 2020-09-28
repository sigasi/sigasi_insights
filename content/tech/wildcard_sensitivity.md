---
title: "Wildcards in sensitivity lists in VHDL and Verilog"
layout: page 
pager: true
author: Wim Meeus
date: 2020-09-28
tags: 
  - VHDL
  - Verilog
  - SystemVerilog
  - process
comments: true
bannerad: true
---

In hardware description languages (HDL), **sensitivity lists** are used to indicate which events may **trigger** a VHDL **process** or (System)Verilog **always statement**.
These trigger events are usually transitions of signals that are inputs of the process or always statement.

**Simulators and synthesis tools** tend to **treat sensitivity lists differently**.
* A **simulator** will **observe** the sensitivity list. If an input of a procedure or always statement is not in the sensitivity list, a transition of that signal will not trigger the procedure, and no new output is produced.
* A **synthesis tool** will **ignore** the sensitivity list. A new output is calculated according to the code of the procedure or always statement. The synthesis tool may warn for an incomplete sensitivity list.

This different treatment may lead to differences between simulation
and synthesis, which may hide design flaws until late in the design
cycle. This is particularly true for **combinatorial** processes,
which may have many inputs and hence long sensitivity lists.

**Three different problems** may be present in a sensitivity list:
**missing** items, **superfluous** items and **duplicate** items. The
former two could either **cause or hide a design flaw** and cause
**synthesis-simulation mismatch**. The latter is just messy and makes
the code harder to understand and maintain.

In
recent versions of VHDL and (System)Verilog, **new constructs** have been
introduced to **remove the need of exhaustive sensitivity lists**.

## VHDL

In VHDL'2008, the `all` keyword was introduced for **combinatorial processes**. Using `process(all)` is equivalent to listing all inputs to the process in the sensitivity list.
This ensures that the process is **sensitive to all relevant signals**. As a result, **synthesis-simulation mismatch is avoided**.

```vhdl
process(all)                -- equivalent to process(a, b)
begin
    foo <= a + b;
end process;  
```

But what about *side effects*, when signals are read by a procedure or *impure* function that are not parameters of the procedure or impure function?
Note that this is *bad design practice*, it is recommended that functions and procedures get all of their inputs through parameters.
The VHDL `all` keyword however also covers those signals.
This makes the `all` keyword safe to use even with procedures and impure functions.

```vhdl
entity sense is
    port(
        a, b   : in  integer;
        y1, y2 : out integer
    );
end entity sense;

architecture RTL of sense is
begin
    p1 : process(all) is
        impure function func_plus(t1 : integer) -- impure function: reads `b` directly (bad practice!)
        return integer is
        begin
            return t1 + b;
        end function func_plus;

    begin                                       -- process(all) includes a and b
        y1 <= func_plus(a);                     -- even though b is not visible in the process body
    end process p1;

    p2 : process(all) is
        procedure proc_plus is                  -- procedure reads a and b directly (bad practice!)
        begin
            y2 <= a + b;
        end procedure proc_plus;

    begin                                       -- process(all) includes a and b
        proc_plus;                              -- even though a and b are not visible in the
    end process p2;                             -- process body
end architecture RTL;
```

Performance-wise, the use of `process(all)` instead of a sensitivity
list with all inputs is not expected to make much difference.
Synthesis tools generally ignore the sensitivity list
already. Simulators may take a negligible amount of extra time during
compilation to determine the actual sensitivity list, but the
simulation speed is not expected to be affected.

Sigasi Studio warns for incomplete sensitivity lists and sensitivity
lists with superfluous or duplicate entries. A quick fix is available
to sanitize sensitivity lists.

## Verilog

A similar construct was introduced in Verilog'2001. In Verilog, an asterisk (`*`) denotes that the `always` block triggers when any input signal changes.

```verilog
always @*          // triggers on transitions of a and b
    y = a + b;
```

An important caveat is that `always @*` **does not cover inputs which are read directly by subprograms** (i.e. functions and tasks). 
In the example below, the `always @*` block is triggered by transitions of `a` but not by transitions of `b`.


```verilog
module sense(
    input integer a, b,
    output integer y
);

    function integer fun_add(input integer t1);   // function reads b directly, not as a parameter
        begin                                     //     (bad practice!)
            fun_add = t1 + b;
        end
    endfunction

    always @* begin                               // always block triggers on transitions of a only
        y = fun_add(a);                           // A transition of b won't trigger an update of y!
    end

endmodule
```

As can be seen on the simulation waveforms, `y` gets updated on transitions of `a` but not on transitions of `b`.

{{< figure src="/img/manual/wildcard_sensitivity_sim.png" alt="Waveforms" width="280px">}}

This shows that Verilog's `always @*` construct should be used with great care.
This also illustrates why reading inputs other than through the parameter list is bad practice.


## SystemVerilog

**SystemVerilog** has an **improved solution** over plain Verilog: the
`always_comb` block.  An important advantage of `always_comb` over
`always @*` is that it is sensitive to changes of variables read
directly inside a function (but not in a task).  This removes a
potential source of confusion (and design flaws).

```verilog
module sense(                                     // SystemVerilog
    input integer a, b,
    output integer y
);

    function integer fun_add(input integer t1);   // function reads b directly, not as a parameter
        begin                                     //     (bad practice!)
            fun_add = t1 + b;
        end
    endfunction

    always_comb begin                             // always_comb block triggers on transitions of
        y = fun_add(a);                           //     a and b
    end

endmodule
```

The use of `always_comb` has more advantages (a.o. automatic execution
at time 0 and protection against writing variables from multiple
`always_comb` blocks). In SystemVerilog, `always_comb` is always
preferred over `always @*`.

## Conclusion

VHDL, Verilog and SystemVerilog offer constructs that remove the need of writing exhaustive sensitivity lists for combinatorial processes.
Apart from easier coding, the risk of synthesis-simulation mismatch due to an incorrect sensitivity list is reduced.
These constructs are meant in particular for combinatorial processes.