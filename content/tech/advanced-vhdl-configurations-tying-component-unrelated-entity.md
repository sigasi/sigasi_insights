---
title: "Advanced VHDL Configurations: Tying a component to an unrelated entity"
layout: page 
pager: true
author: Philippe Faes
date: 2012-03-22
tags: 
  - advanced
  - configurations
  - howto
  - VHDL
comments: true
bannerad: true
---

Usually, people use VHDL configurations to select a given architecture for their component, or even to set generics that were not set in the instantiation. But you can also do more advanced stuff with configurations: you can tie a component to a completely unrelated entity. You can even re-wire the signals!

For a short recap. Normally, you'd see a component that looks exactly like an entity:
```vhdl
-- entity
entity dut is
port(
	a : in string;
	b : in string;
	c : in string
);
end entity dut;

--component
component dut
port(
	a : in string;
	b : in string;
	c : in string
);
end component dut;
```

As I will explain in another blog post, these objects have no relation whatsoever, except that the *default binding* for `component dut` is the `entity dut`.
So if you type an instantiation:
```vhdl
	dut_inst : component dut
		port map(a => a,
			     b => b,
			     c => c);
```

The VHDL elaborator will instantiate `entity dut` by default, unless it is told otherwise. Here is where *VHDL configurations* come in.

You can configure this to instantiate a completely `unrelated` entity, with an unrelated entity name, and unrelated port names. Even a different number of ports:

```vhdl
  configuration c2 of testbench is
	for str
		for dut_inst : dut
			use entity work.unrelated(rtl)
				port map(
					port1 => a,
					port2 => b,
					port3 => c,
					port4 => "unused"
				);
		end for;
	end for;
  end configuration c2;
```

Or you can instantiate the entity with the same name, but rewire the port names completely:

```vhdl
 configuration c3 of testbench is
	for str
		for dut_inst : dut
			use entity work.dut(rtl)
				port map(
					a => b, -- Note we are binding to other ports here!
					b => c,
					c => a
				);
		end for;
	end for;
 end configuration c3;
```

So why is this useful? Well, that's a good question. I haven't seen configurations being used like this in "real life" code. But knowing this will help you realize that components and entities are really completely different things. They are only connected during elaboration (that's when you give the `vsim` command). And they can be connect in very flexible ways. 

I've put the code fragments in a {{< VETSMOD >}} project that you can [download here](/resources/tech/configurations.tgz). You can play around with it and run it on your favorite simulator. The code reports which architecture you use and which ports are actually connected to what:

```
# Loading std.standard
# Loading std.textio(body)
# Loading ieee.std_logic_1164(body)
# Loading work.c3
# Loading work.testbench(str)
# Loading work.dut(rtl)
# run 1 us  
# ** Note: this is dut(RTL)
#    Time: 0 ps  Iteration: 0  Instance: /testbench/dut_inst
# ** Note: port a:B
#    Time: 0 ps  Iteration: 0  Instance: /testbench/dut_inst
# ** Note: port b:C
#    Time: 0 ps  Iteration: 0  Instance: /testbench/dut_inst
# ** Note: port c:A
#    Time: 0 ps  Iteration: 0  Instance: /testbench/dut_inst
#  exit 
```