---
title: "Dead code"
layout: page 
pager: true
author: Philippe Faes
date: 2012-09-05
tags: 
  - coding guidelines
  - VHDL
comments: true
bannerad: true
---


A hardware design project will often contain code that does nothing. Still, there might be a good reason to have this code. Here are some guidelines to determine if this dead code is useful or not:

* Dead code is **good** if it helps the reader understand the code.
* Dead code is **bad** if it confuses the reader. If it does not confuse nor help, it is just sitting there using screen real estate and so it should be removed. 

Here are some examples.

### Library STD

```vhdl
library std;
```

This library clause is already implicit in every VHDL file. It won't confuse the reader, but it has no added value. This library clause should not be in your code.

### Comments

Comments are meant to clarify things. If they are written well, they have their value. Keep useful comments.

### Unused declarations

Declarations of signals, data types, constants or other things that are never used later on have no value. They are confusing to the reader (*Why is this here?*) and should be avoided or removed from your code.

### Superfluous "others" in case statements

In a state machine with enumerated states you usually cover all states explicitly in a *case* statement. If you do this, there is [very little reason to add a `when others` clause](/tech/vhdl-case-statements-can-do-without-others.html).
The only reason for writing `when others` is your synthesis tool uses this information for recovering from an illegal state *and* you need this recovery for some reason. Ask yourself these questions: Does my design need to recover from an illegal state (usually military, safety-critical or radiation sensitive application)? Does my synthesis tool use the "others" clause for recovering? (Some do, some don't – read the documentation and/or inspect the synthesis results!). If you find yourself in a situation where you want to use a `when others` clause, make sure that there is recovery code there.

### Assertions

Assertions are dead code if they are placed in unreachable places. This is actually a good thing. You are telling the reader that you expect that a certain condition will never occur. Even if the simulator or the synthesis tool never do anything with this code, it can be a good thing to have it there. In the following example, let's say there are six possible colors, but you expect the color of the pedestrian traffic light to be only red or green.

```vhdl
case color is
	when GREEN => 
		-- do stuff
	when RED => 
		-- do other stuff
	when others => 
		report "unreachable; color should always be GREEN or RED" severity failure;
end case;
```

## Conclusion

Dead code is not always bad. If it helps the human reader in understanding the code, it has its value. If not, it distracts at best or confuses and misleads at worst. If you find a piece of dead code, try and assess if it useful or harmful. In the latter case, do yourself and your team a favor: remove or file a change request.
