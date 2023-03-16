---
title: "VHDL Physical Type is not Synthesizable, or is it?"
layout: page 
pager: true
author: Philippe Faes
date: 2012-10-11
tags: 
  - Altera
  - Intel
  - mythbuster
  - VHDL
  - synthesis
  - rtl
comments: true
bannerad: true
---

Everybody who has been taught VHDL in college or in a company with senior colleagues has heard the following *"wisdom"*:

> *Pysical types are for simulation only. They cannot be synthesized.*
> \[commonly heard claim – debunked in this article\]

This is the kind of knowledge was somehow made up in the latter years of the Cold War and was passed down from one generation of digital design engineers to the next. 

Before we investigate this claim, let's examine what VHDL physical types are. A physical type is defined by a range and a number of units. For example, the pre-defined `time` type can have any integer value (the *range*) and has *units* including `ns`, `us` (microseconds) and even `hr` for hours. Internally, physical values are treated as integers, but the compiler adds some extra checks to make sure you don't mix the wrong physical values. The language definition says that adding, substracting, multiplication and division are always defined on physical types. This means you can add or subtract two values of the same physical type and you can multiply a physical value with an integer value or devide d physical value by an integer value. The result will always be a physical value. If you divide a physical value by another physical value, you get an integer:

```vhdl
assert 1 sec = 1000 ms; -- convert units of the same physical type
assert 1 sec + 20 ms = 1020 ms; -- add
assert 2 sec - 100 ms = 1900 ms; -- subtract
assert 10 sec / 2 = 5 sec; -- divide by integer
assert 10 sec * 2 = 20 sec; -- multiply with integer
assert 10 sec / 5 sec = 2; -- divide two physical values of same type yields an integer
```

In essence, physical values are just integer values with some extra compiler checks. So it stands to reason that a synthesis tool would just treat these physical types as integer types. Obviously, the synthesis tool will have no clue what the units represent in the physical world – but that doesn't stop it from using physical values.

Wouldn't it be great if we could write:
```vhdl
wait for 3 sec; -- not synthesizable (yet)
ready <= '1';
```
In our dreams, the synthesis tool would infer a counter that counts the number of clock ticks and lets us know when the three seconds have passed. Tough luck – no synthesis tools on the market can do this today. But they might some day!

But how about this:
```vhdl
constant c: integer := cycles_required = 3 sec / clock_frequency; -- works fine!
```
Does this work? In simulation, yes obviously! But how about synthesis? You can debate all you want, but as a scientist you need to experiment. I've created a small example and fed it to Altera Quartus 11.1. Guess what: it works like a charm!

So: **the statement that physical types in VHDL do not synthesize is bogus**. I'm sure you can write code that is completely not synthesizable and that uses physical types, but merely the fact that you use physical types does not stop the synthesizer. I'm happy to discuss which constructs do and don't synthesize (on a given synthesizer) and which constructs infer prohibitively large hardware (on a given synthesizer), but engineers should resist general claims that have not been tested.

Oh, and if you want to weaken the claim to "most synthesizers", I think you should present at least compilation reports for three different synthesizers.

**Edit:** Also read my follow-up post with a {{< page "vhdl-physical-type-not-synthesizable-or-it-part-2" >}}
