---
title: "Case statements in VHDL and (System)Verilog"
layout: page 
pager: true
author: Wim Meeus
date: 2020-12-17
tags: 
  - VHDL
  - Verilog
  - SystemVerilog
  - case
  - case-statement
comments: true
bannerad: true
---

In programming languages, **`case` (or `switch`) statements** are used as
a **conditional statement** in which a selection is made based on
different values of a particular variable or expression. A general
discussion of these statements can be found
[here](https://en.wikipedia.org/wiki/Switch_statement).


In **hardware description languages (HDL)** such as VHDL and
(System)Verilog, `case` statements are also available.

```vhdl
case sel is -- VHDL
   when "00" => y <= a;
   when "01" => y <= b;
   when "10" => y <= c;
   when "11" => y <= d;
end case;
```

```verilog
case (sel)  // (System)Verilog
   "00" : y = a;
   "01" : y = b;
   "10" : y = c;
   "11" : y = d;
endcase
```

The above code fragments demonstrate the use of a `case` statement to
describe a 4-to-1 multiplexer, a common case where a case statement is
used. Using `case` in VHDL has the **advantage** that the language
guarantees that **all cases are covered**. Any choice not covered in
a VHDL `case` statement will lead to a compilation error. As a
consequence, a `case` statement is preferred over an `if`-`else if`
(or `elsif`) tree.

But what if a number of cases trigger the **same action**? Code
**duplication should be avoided**, because that makes the code harder to
maintain. Fortunately, **VHDL** case statements can handle **ranges and
lists of values**.

```vhdl
variable bmi: natural range 0 to 100;

-- code omitted

case bmi is
   when 18 downto 0            => verdict <= "too low   ";  -- range
   when 20                     => verdict <= "perfect   ";  -- single value
   when 19 | 21 | 22 | 23 | 24 => verdict <= "good      ";  -- list of values
   when 25 to 29               => verdict <= "a bit high";  -- range
   when 30 to 100              => verdict <= "too high  ";  -- range
end case;
```

**SystemVerilog** (but not Verilog) has a **`case inside`** statement with similar functionality:

```systemverilog
logic [3:0] sel;

// code omitted

case (sel) inside
   [4'h0:4'h7] : y = a;  // range
   [4'h9:4'hD] : y = b;  // range
   4'h8, 4'hE  : y = c;  // list of values
   4'hF        : y = d;  // single value
endcase
```

Verilog has `casex` and `casez` statements, in which some bits of the
selection pattern can be marked as don't care. These statements should
be avoided for range matching. The wildcard match could hide an
undefined or illegal signal value of `x`, i.e. it could hide a design
flaw. Priority encoding is one example where `casez` is a good fit:

```verilog
casez (sel)           // priority encoder
  4'b???1 : prio = 0;
  4'b??10 : prio = 1;
  4'b?100 : prio = 2;
  4'b1000 : prio = 3;
  default : prio = 0; //no match
endcase
```

Finally, a **default action** may be added to the case statement using
an **`others`** (VHDL) or **`default`** (Verilog/SystemVerilog)
clause. This removes the requirement to enumerate every option in the
case statement. For clarity, the **default should be the last** clause
of the case statement.

```systemverilog
logic [3:0] sel;

// code omitted

case (sel) inside
   [4'h0:4'h7] : y = a;  // particular values
   [4'h9:4'hD] : y = b;
   4'hF        : y = d;
   default     : y = c;  // default value, in this case `8` and `E`
endcase
```

The example below shows one of the most common uses of case statements, namely a **finite state machine (FSM)**.

```vhdl
type t_state is (SIT, STAND, WALK, RUN, FLY);
signal state: t_state;

-- code omitted
p_state : process(clk) is
begin
   if rising_edge(clk) then
      if rst = '1' then
         state <= SIT;
      else
         case state is
            when SIT =>
               if start_moving then
                  state <= STAND;
               end if;
            when STAND =>
               state <= WALK;
            when WALK =>
               state <= RUN;
            when RUN =>
               if cleared_for_takeoff then
                  state <= FLY;
               end if;
            when others =>   -- default, includes state FLY
               state <= SIT;
         end case;
      end if;
   end if;
end process p_state;
```

A [discussion exists](vhdl-case-statements-can-do-without-others)
whether an **`others` or `default` clause is recommended if all possible
cases have been enumerated** in the case statement. We believe that it
should be up to the designer to make that decision, taking the
following considerations into account:

* If the code is meant for **simulation only**, the presence or absence of
  a default clause will not affect the design. For clarity, it may be
  better to **leave it out**.

* If the **selection variable may be extended** (e.g. more bits, more
  enumeration literals), a default clause will ensure that the design
  will still compile with the extension. This may be **convenient**, but
  there is a **risk** that the designer may forget to add specific
  selections.

* A **synthesis** tool may add hardware to **protect the circuit
  against illegal patterns**. This may happen in particular if the
  selection variable is an enumerated type. If the enumerated type has
  a number of values that is not a power of 2, or if one-hot encoding
  is used, some bit patterns of the enumeration value don't correspond
  to an enumerated value. In that case, a default value may be used by
  the synthesis tool to determine what should happen if an *illegal*
  selection value is seen, e.g. raise an alarm, or bring a finite
  state machine (FSM) to a *safe* state. Depending on the synthesis
  tool and nature of the circuit, it may be desirable or not to add a
  protective circuit.

* In (System)Verilog, it is not required to cover all possible options
  of a `case` statement. Combinations of `'x'` and `'z'` would
  typically be omitted, potentially hiding the propagation of
  uninitialized data and leading to synthesis-simulation
  mismatch. Adding a `default` which produces `'x'`-es on its outputs
  will reveal potential design flaws in simulation and will help debug
  the design.

In conclusion, **`case`** in HDL is a powerful conditional control
statement. Case statements are easy to understand and maintain. Use
the most suitable variant in your design *case* for optimal design
quality and maintainability.

[Sigasi Studio](https://www.sigasi.com/) offers case statement
templates and configurable validations to improve designers'
productivity.
