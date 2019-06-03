---
title: "VHDL Physical Type is not Synthesizable, or is it? (part 2)"
layout: page 
pager: true
author: Philippe Faes
date: 2012-10-15
tags: 
  - Altera
  - mythbuster
  - VHDL
  - VHDL synthesis
  - rtl
comments: true
bannerad: true
---

In a previous post, [vhdl-physical-type-not-synthesizable-or-it], I pointed out that VHDL synthesis tools can indeed synthesize VHDL physical types. In the example I gave, all computations with physical types were done at elaboration time, so that the synthesis tool does not really have to deal with physical types at all.

I choose a example that was too weak and I want to make that right. So here is my new claim:

> VHDL synthesis of physical types works perfectly well.

Short and powerful: no "but", no "caveat". Synthesis works fine if, even signals have a physical type or if  there are computations on physical types. If you have access to a (modern) VHDL synthesis tool and you can try this out for yourself. If not, nobody will be interested in your uninformed opinion. 

## Side note: about VHDL synthesis 

There are dozens of constructs that are marked as *not for synthesis* in traditional courseware, including:

* bits, booleans and integers 
* configurations
* generics (other than integer)
* ports of record types or multi-dimensional records
* attributes
* blocks
* initial values of signals
* and much more...

My first step will be to demonstrate which (none, some or all?) of them them are wrong. When I do that, a lot of traditionalists will argue that: "OK, it might work for you, but it's still bad practice because *blah blah blah*." When that happens, the discussion has shifted from "the tools can't handle it" to "the humans don't want to handle it." We can then get to the *reasons why* humans don't want to handle those particular constructs. We can have an informed discussion on a case by case basis to see if there is a valid argument to be made. 

I don't want to force anybody in to using any of these constructs. I'm just worried that VHDL educators are scaring people away from useful and powerful VHDL language features that could save engineers a lot of work.

## Back to physical types

But for now, let's focus on physical types. To pin everybody to the *facts*, here is a [/opinion/vetsmod-get-better-feedback-your-vhdl-code-snippets] example of physical types in action:

```vhdl
library ieee;

use ieee.std_logic_1164.all;

entity testPhysical is
	port(clk    : in  std_logic;
		 rst    : in  std_logic;
		 strobe : out std_logic
	);
end entity testPhysical;

architecture RTL of testPhysical is
	type number_of_eggs is range 0 to 255
	units 
		eggs;
		dozen = 12 eggs;
		gross = 12 dozen;
	end units;
	
	signal egg_basket : number_of_eggs;
begin
	name : process(clk) is
	begin
		if rising_edge(clk) then
			if egg_basket = 1 gross then
				egg_basket <= 0 eggs;
				strobe <= '1';
			else
				egg_basket <= egg_basket + 1 eggs;
				strobe <= '0';
			end if;
		end if;
	end process name;
end architecture RTL;
```

This (contrived) example synthesizes perfectly and efficiently (Altera Quartus 11.1) to the following RTL:

![RTL generated when using physical types](/img/tech/rtl_physical_type.png)

I'm pretty sure that this synthesized RTL view would be identical if you use `integers` or `std_logic_vector` types. I didn't try that, so feel free to prove me wrong.
