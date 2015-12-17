---
title: "Be careful with VHDL operator precedence"
layout: page 
pager: true
author: heeckhau (Sigasi)
date: 2014-12-02
tags: 
  - operators
  - VHDL
---

I was recently writing some tests for our VHDL expression evaluator and was amazed by the the result of evaluting `-16 ** 2`. 
I expected `256`, but it wasn't.

Can you guess the output of running this process?
```vhdl
     process is
     begin
          report "-5 mod (-3) : " & integer'image(-5 mod (-3));
          report "(-5) mod (-3) : " & integer'image((-5) mod (-3));
          report "-(5 mod (-3)) : " & integer'image(-(5 mod (-3)));
          report "-16 ** 2 : " & integer'image(-16 ** 2);
          report "(-16) ** 2 : " & integer'image((-16) ** 2);
          report "-(16 ** 2) : " & integer'image(-(16 ** 2));
          wait;
     end process ;
```

The output is:
```
     # ** Note: -5 mod (-3) : 1
     # ** Note: (-5) mod (-3) : -2
     # ** Note: -(5 mod (-3)) : 1
     # ** Note: -16 ** 2 : -256
     # ** Note: (-16) ** 2 : 256
     # ** Note: -(16 ** 2) : -256
```

It turns out **unary** minus has a lower priority than the modulo and exponentiation operator. I had to consult the LRM again to find this list of operator priorities (from high to low):

<ul>
<li> **, abs, not
<li> *, /, mod, rem
<li> +, - (unary versions)
<li> +, -, &
<li> sll, srl, sla, sra, rol, ror
<li> =, /=, <, <=, >, >=, ?=, ?/=, ?<, ?<=, ?>, ?>=
<li> and, or, nand, nor, xor, xnor
</ul>

So be careful when you are typing expressions; make sure you use enough parentheses.

_P.S_: You may have noticed that I wrote `-5 mod (-3)` and not `-5 mod -3`. The latter, `-5 mod -3`, is not valid VHDL. This again is because unary minus has lower priority than the modulo operator.