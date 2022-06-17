---
title: "Clock edge detection"
layout: page 
pager: true
author: philippe.faes (Sigasi)
date: 2012-04-09
tags: 
  - coding guidelines
  - rtl
  - synthesis
  - VHDL
comments: true
bannerad: true
---

There are two largely accepted ways to detect clock edges, and many style books prescribe or prefer one over the other. 
Let's investigate.

This article deals with edge detection in *synthesizable* code, not with behavioral code as found in test benches and behavioral models.

## Old style

What I call the old style is:
```vhdl
if clk'event and clk='1' then -- old style: outdated
```
This coding style is accepted by the *IEEE Standard for VHDL Register Transfer Level (RTL) Synthesis* (IEEE 1076.6-1999), so all compliant synthesis tools should be able to handle this. However, there are some loopholes for simulators. This condition will also trigger when the `clk` signal changes from `'U'` to `'1'`, or even from `'H'` to `'1'`. These events have no meaning in physical hardware, but they are perfectly legal in simulated VHDL code. Hence, this coding style introduces a discrepancy between simulation and synthesized hardware. 

Another argument against the old style edge detection is that it does not clearly express the intent of the VHDL designer. Checking for an *event* makes sense in the domain of discrete event simulators, but is utter nonsense both in the (more low-level) domain physical electronics and in the (more high-level) domain of interacting state machines. Code is more readable when you use the `rising_edge` and `falling_edge` functions for edge detection.

In VHDL 87, this was the only way to detect edges. VHDL 93 has introduced the `rising_edge` and `falling_edge` functions for edge detection.
For more than twenty years, the *old style* edge detection has been [outdated]({{< ref "/tech/coding-conventions.md#adverse" >}}).

## Rising\_edge and Falling\_edge

In the VHDL 93 standard, the IEEE introduced two functions which are meant to be used for clock edge detection: `rising_edge` and `falling_edge`. 

```vhdl
if rising_edge(clk) then -- recommended since 1993
```

These function can be applied to signals of type `std_ulogic` (and hence, `std_logic`). Since VHDL-2008, these functions are also available for `bit` and `boolean` (IEEE 1076-2008 paragraph 5.2.6). There are two benefits to using these functions: they check for meta values and they clearly express the intent fo the designer. For your information, the `ieee.std_logic_1164` package implements `rising_edge` like this:
```vhdl
FUNCTION rising_edge(SIGNAL s : std_ulogic) RETURN BOOLEAN IS
	BEGIN
		RETURN(s'EVENT AND(To_X01(s) = '1') AND(To_X01(s'LAST_VALUE) = '0'));
	END;
```

## Rising or falling?

If you use a single edge, by convention, you should use the *rising edge*. This is [arbitrary]({{< ref "/tech/coding-conventions.md#arbitrary" >}}), but universally accepted. If you make a different choice, people will be surprised and confused.
Of course, if you have a design with two clock edges, you also need the falling edge. If your process uses both edges (to instantiate *dual edge triggered* flip-flops), you should write:
```vhdl
if rising_edge(clk) or falling_edge(clk) then
```

If you just check for an event on the clock like this:
```vhdl
if clk'event then --DO NOT use this!
```
you end up with the same problems as in the [Old style](#old-style). Moreover, this is not a valid edge detection according to the IEEE VHDL RTL standard.

## Other rules

Here are some more coding rules that are required by IEEE 1076.6-1999, and hence should be considered [imperative](/tech/coding-conventions#useful).

No enable conditions in the same if statement. Do not write:
```vhdl
if rising_edge(clk) and enable='1' then -- BAD!
```
  but write:
```vhdl
if rising_edge(clk) then
  if enable='1' then -- good.
```

Only use one clock per process (IEEE 1076.6-1999 paragraph 6.1.3).