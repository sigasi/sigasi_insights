---
title: 'VHDL case statements can do without the "others"'
layout: page 
pager: true
author: Philippe Faes
date: 2011-10-24
tags: 
  - case
  - mythbuster
  - others
  - VHDL
---
I was talking to some engineering students the other day, as they were doing a VHDL lab. I noticed a VHDL case statement for state machine with named states (enumerated data type). All states were handled in their VHDL case statement, and still they put an `others` section in their code. I had a hard time explaining that this clause was useless. The students mumbled something about their professor eating them alive if they'd forget the `others` and problems with uninitialized stated and high-impedance state. As you might know, these concepts are related to the `std_ulogic` and `std_logic` type, but not to enumerated types. 

The VHDL language will force you to cover all cases. If you do not account for all cases, you are required to write a fallback case (`when others`), and that is what usually happens if you use `std_logic` types, because you don't want to enumerate all the meta-values. You _need_ `others`, or your compiler will mark an error. In the case of enumerated data types, however, you can leave the `others` out.
```vhdl
type state_t is (s1, s2, s3);
```

```vhdl
case state is
	when s1 =>
		isState3 <= '0';
		isOthers <= '0';
	when s2 =>
		isState3 <= '0';
		isOthers <= '0';
	when s3 =>
		isState3 <= '1';
		isOthers <= '0';
	when others => -- There are no other states.
		isState3 <= '0';
		isOthers <= '1'; -- This NEVER happens!
end case;
```

In my mission to bust VHDL myths, I set up an experiment to demonstrate my case. I typed a [piece of code with](resources/fsm2.vhd) and [without](resources/fsm1.vhd) an `others` part in the VHDL case statement. The synthesis results are identical (as expected). To demonstrate even more clearly, I have created an output pin that would become `'1'` in the case of `others`. After synthesis, this output pin is clearly always `'0'`.

![Netlist demonstrates that Others has no effect](images/fsm2.png)

*Conclusion:* if you have _not_ covered all possible cases you need `others`. If you _have_ covered all cases, leaving out `others` has no effect on the synthesis (or simulation) results. 

I did not try _all possible settings_ on _all possible synthesis tools_. If you have found a case that proves me wrong, please let us know.

## Update: Precision Synthesis uses "others"

On [StackExchange](http://electronics.stackexchange.com/questions/21317/vhdl-synthesis-optimization-counters-in-statemachines/21318#21318), David Kessner explains that the Precision Synthesis (Mentor Graphics) does in fact use the `others` part to recover from illegal states. 
Check out [the manual](http://courses.engr.illinois.edu/ece412/references/precision/precisionRTL_style.pdf) on page 210.

One could argue about the desired behavior for synthesis tools: jump to the reset state, or jump to a separately declared `others` state. In any case, this is only useful for very specific designs, like safety critical radiation hardened systems.

Thanks David, for pointing this out!