---
title: "Static Checks for VHDL Code"
layout: page 
pager: true
author: Philippe Faes
date: 2011-08-03
tags: 
  - case statement
  - empty range
  - linting
  - VHDL
comments: true
bannerad: true
---

[Sigasi Lint](http://www.sigasi.com/vhdl-lint) performs static analysis for VHDL code in order to find VHDL code <a href="http://en.wikipedia.org/wiki/Lint_(software)">lint</a>. The built in VHDL linter will issue warning when you use certain suspicious VHDL constructions. While your code does not violate the VHDL syntax, there might be a problem with your code.

## "Others"

The first lint check will flag a warning if you add `others` at the bottom of your case statement (with a state of enumeration type) when you don't really need it.

![Redundant Others](/img/tech/redundant_others.png)

In VHDL, you need to cover all possible cases in a case statement. For a simple enumeration type, this is easy. For a `std_logic_vector`, you would usually omit all the meta-value (like `"UUUU"`) and cover these cases in the final choice: `others`.
If you intend to cover all options (like in a state machine with an enumeration type) it is best to make this explicit, by not adding the unneeded `others`. Years from now, somebody might come along and change your code: add a state to the enumeration type or remove choices from your case statement. If they make a mistake, they will get an error message from their VHDL compiler. If you have added `others` to the end of your list, the VHDL compiler will accept the new (and probably incorrect) code of your colleague. That is why you don't want the `others` choice at the bottom of your case statement.

## Null range

In VHDL, you can use ranges with `to` and `downto`. But, if you use the wrong direction, you get an empty range, which is usually not what you want: `7 downto 0` is a range of eight. `7 to 0` is an null range.
We have a lint check that warns about this, even if you use constants (or some simple arithmetic).

![Null range](/img/tech/null_range.png)

## More lint rules

There are more lint rules available, and we can implement your coding rules in Sigasi Lint for you. 

[Learn more about Sigasi Lint](http://www.sigasi.com/vhdl-lint)
