---
title: "Array size mismatches with generic port widths"
layout: page
pager: true
author: Bart Brosens
date: 2018-01-09
tags:
  - Sigasi Studio
  - linting
  - generics
comments: true
bannerad: true
---

## Customer question
On a regular basis we receive questions from customers about *Incorrect array size* warnings or errors.

![Incorrect array size warning](/img/tech/generic-port-width/warning_message.png "Incorrect array size warning")

Declarations for `data_out` and `result`:
```vhdl
entity with_generic is
  generic(datawidth : natural);
  port(data_out : out std_logic_vector(datawidth - 1 downto 0));
end entity with_generic;

architecture RTL of with_generic is
  signal result : std_logic_vector(7 downto 0);
```

This linting message tells that array sizes in an assignment do not match.
Typically, one side of the assignment is a port and the other side an internal signal.
A generic defines the width of the port while the signal width is defined by a constant value.

The core question asked is
*Why does Sigasi Studio not take into account the value of the generic when calculating the array sizes?
After all, in the instantiation the value of the generic was set to match the constant value.*

## Improving reusabiliy
The *intention* of this warning is explicitly _not_ to elaborate the generic value.
Instead the goal is to help hdl designers *improve code reusability*.

Because the array size is fixed to 8, the example above will only be valid if the value
of the generic is set to 8 in any instantiation. For any other value assigned to the generic,
the code will break.

In order to resolve the warning above, the array size should be written in terms of `datawidth`
so that the code remains valid for other values of the generic.

```vhdl
entity with_generic is
  generic(datawidth : natural);
  port(data_out : out std_logic_vector(datawidth - 1 downto 0));
end entity with_generic;

architecture RTL of with_generic is
  signal result : std_logic_vector(datawidth - 1 downto 0);
```

## One step further
Taking this a step further, the warning could be interpreted more bluntly:
*stop using the generic since it only gives a false sense of re-usability*.

Why would generics be needed to define port or signal widths?
VHDL allows to write code without using generics or fixed port widths like in the code example below.

```vhdl
library ieee;
use ieee.std_logic_1164.all;

entity nogenerics is
  port(
    data_out : out std_logic_vector;
    data_in  : in  std_logic_vector
  );
end entity nogenerics;

architecture RTL of nogenerics is
  signal intermediate : std_logic_vector(data_out'range);
begin
  intermediate <= data_in;
  data_out     <= intermediate;
end architecture RTL;
```

The actual port and signal widths are only defined once this design unit is instantiated.
No constants or generics are involved, allowing to write less and cleaner code.

Generics can be used to express relations between ports that are checked at compilation
or at elaboration time. You can express these relations also with asserts:

```vhdl
assert data_out'length = data_in'length report "port width mismatch" severity failure;
```

We're happy to hear your feedback on [this linting rule](/manual/eclipse/linting#vector-width-in-assignments-and-port-maps) and on
how Sigasi Studio can help you to write cleaner code.
