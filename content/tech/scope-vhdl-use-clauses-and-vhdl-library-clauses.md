---
title: "The scope of VHDL use clauses and VHDL library clauses"
layout: page 
pager: true
author: Philippe Faes
date: 2011-12-14
tags: 
  - VHDL
comments: true
bannerad: true
---


When I first learned VHDL, I bumped in to quite a few language quirks. Here is one thing that I learned the hard way: the scope of VHDL use clauses.

I figured out that you can put several entities or packages in the same file. Now, usually people only put design units in the same file in pairs, like entity + architecture or package + package body:
```vhdl
library
use
entity
architecture
```
or
```vhdl
library
use
package
package body
```

Note that the use clauses and library clauses are only written once at the top of the VHDL file. A naïve passer-by would assume that these clauses are valid throughout the entire file. Wrong!

If you try to write a VHDL file with this structure, things will go wrong:
```vhdl
library
use
package one
package two
```

Package two will not be able to see the thing declared in the use case. Isn't that funny? 

The reason is that the library and use clauses are only visible to the *first* design unit (entity, architecture, package,...). In case you write an entity and its corresponding architecture (or a package and its corresponding package body) the so-called *secondary design unit* (the architecture or package body) **inherits** whatever is used in the *primary design unit* (entity or package). Aha!
Even if the architecture is in a different file, you don't have to repeat the use clauses.

So finally, here is some {{< VETSMOD >}} VHDL code to play with:
```vhdl
comments: true
bannerad: true
---
- New "Design Unit" starts here ----
library ieee;
use ieee.std_logic_1164.all;

-- the library and use clauses apply to the entity below
entity e1 is
	port(
		p : in std_logic -- OK
	);
end entity e1;

comments: true
bannerad: true
---
- New "Design Unit" starts here ----

-- architecture inherits use clause from its entity 
architecture RTL of e1 is
	signal s : std_logic; -- OK
begin
end architecture RTL;

comments: true
bannerad: true
---
- New "Design Unit" starts here ----

-- No library or use clauses inherited!
entity e2 is
	port(
		p : in std_logic -- ERROR! std_logic is not visible here
	);
end entity e2;
```
