---
title: "Are VHDL post-93 versions used in real life?"
layout: page 
pager: true
author: philippe.faes (Sigasi)
date: 2010-06-03
tags: 
  - VHDL
  - EDA
---
I've just finished implementing VHDL protected types, as defined in the VHDL 2000 standard. 

As part of our quality assurance process, we run a bunch of VHDL code through our tool. In fact, we've downloaded all freely available VHDL from the internet to stress test our tool. However, <em>none</em> of these projects seem to use protected types. All I can do is run the tests that I have created and compile the VHDL files that one of our users has sent me.

This makes me wonder if the world will ever upgrade from VHDL-93? It has been seventeen years since that standard was approved. Pretty soon, we will start training engineers that were not even <em>born</em> in 1993!

My hypothesis is that engineers won't use more recent standards because EDA companies won't implement them and EDA companies are not interested because their customers don't use the newer standards. The Wikipedia contains a <a href="http://en.wikipedia.org/wiki/List_of_Verilog_simulators">list of simulators</a> with information on which VHDL version is supported. If this list is correct about half of the simulators support VHDL-93. The other half supports VHDL-2002. Never mind VHDL-2008, for which I have the language reference manual lying on my desk. Now I know that Wikipedia might or might not be accurate: if you see any errors in Wikipedia, please update that wiki page.

As an interesting note, the <a href="http://www.xilinx.com/support/documentation/sw_manuals/xilinx12_1/pn_db_npw_device_properties.htm">documentation for Xilinx ISim</a> states that their mode for <em>VHDL-200X</em> "provides support for select additional constructs introduced post-VHDL-93." That is exactly what we support: select additional constructs. However, this is a temporary situation. Eventually all EDA providers should strive to support the latest standards in full. What else are standards for? (Which reminds me I should get a copy of <a href="http://synopsysoc.org/thestandardsgame/2010/05/the-book-the-ten-commandments-for-effective-standards/">Karen Bartleson's book on Effective Standards</a>.)

Anyway, here are two questions for all of you: 
<ol>
<li><a href="http://twtpoll.com/r/xu8eg2">Which VHDL standard</a> do you use? (and why)
<li>If you have any VHDL-2002 or VHDL-2008 lying around that you can share, please do. It would be great for our quality assurance and for proving to the world that recent VHDL standards are useful after all.
<ol>

-- Philippe