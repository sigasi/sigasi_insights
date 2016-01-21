---
title: "You can't write VHDL code without an intelligent editor!"
layout: page 
pager: true
author: Hendrik Eeckhaut
date: 2011-08-22
tags: 
  - VHDL
  - Xilinx
comments: true
---
Yesterday evening I was reading the [latest edition of the Xilinx Xcell journal](http://issuu.com/xcelljournal/docs/xcell_journal_issue_76?viewMode=magazine&mode=embed) and encountered an interesting article about **"How Do I Reset My FPGA"**. This article gives some valuable tips and best practices on how to implement reset structures in FPGAs. The author also gives a VHDL code example on how to infer the reset structure of your choice.
To my surprise the author --without doubt an **experienced designer**-- made **multiple VHDL errors in a simple code snippet**:

![](images/xcell_reset.png)

The author marked a part of the example with red, to make it extra clear that you can give a register an initialization value on FPGAs. But at the same time he puts the `=>` aggregate arrow in the wrong direction (`<=`). This is a typical mistake everyone makes from time to time.
If the author would have used an intelligent editor (read: Sigasi), he would never have published this incorrect example. He would immediately have noticed his mistake.

This 10-line snippet even contains even a **second error**: On line 5, a `std_logic` value is assigned to a `std_logic_vector`. This should have been:  `others => '0'`.

A careful reader might have spotted **even more errors**. ``others => `0'`` is not valid VHDL. In VHDL you must use regular single quotes (`'`). You can not use the back tick. But this error is probably a mistake from a VHDL-illiterate typesetter. I added it anyhow, because quite a few VHDL-newbies [run into this issue](http://stackoverflow.com/questions/6549276/vhdl-errors-in-flipflop-d-code).

\[_And while I'm ranting, I would also suggest to use `rising_edge(clk)` instead of `clk'event and clk='1'`. There is also no need for the parenthesis around the `IF`-conditions in VHDL._\]

The fact that an experienced VHDL designer makes so many mistakes in a small (but globally published) VHDL snippet only proves that typing VHDL first-time-right is difficult. So you need fast feedback if you do not want to waste time. I do not know any VHDL designer that would never get into this situation: You fix the (you think) last small bug in your design. Start the simulation script. Go for a drink (because the simulation takes 10 minutes) and come back to see the simulation never even started because you typed a semicolon at the end of your port map... 10 minutes lost!  Fortunately, today, intelligent editors can help us avoid this waste.

Lets hope most of the readers of the Xilinx XCell Journal have Sigasi installed, so that when they copy the example, they will not lose valuable time waiting for the simulator or synthesizer to report the errors.

Hendrik