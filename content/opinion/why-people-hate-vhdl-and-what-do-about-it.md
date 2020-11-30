---
title: "Why people hate VHDL ... and what to do about it."
layout: page 
pager: true
author: Philippe Faes
date: 2011-02-25
tags: 
  - VHDL
  - philosophical
comments: true
bannerad: true
---

Last month, I asked for {{< page "reasons-love-vhdl-reasons-hate-vhdl.md" >}}. From the answers on the forum and in the poll, my first conclusion is that you hate VHDL more than you love it. 

VHDL is made by man, so it is imperfect. In fact, VHDL is made by many, many men, so it is very, very imperfect. Let's analyze and see what VHDL users think and how we can work around (some of) it.

## Too F\[\*\*\*\]ing Hard

The VHDL language gives the impression that it is very unforgiving. The words that users choose to describe VHDL include: <em>strict, hard, very very bad, painful, terrible, it's too f\[\*\*\*\]ing hard, because the smallest error will cause huge problems...</em>.  

Let's assume we're stuck with VHDL (I'll expand on that thought in another blog post); you won't change the language itself, you won't introduce a new language, you won't switch to <a href="http://en.wikipedia.org/wiki/Verilog">"the other language"</a>. Is everything lost now? I think it isn't. Computer language designer (and users) have been fighting forever over the question how strict or how forgiving a language should be. There are plenty of software languages that are very strict, and are widely used. The key is in using compilers and other tools that warn you when you bumping in to the wall. Modern software development tools warn about common misstakes. So should hardware design tools. And I'm not talking about running a linter tool one week before tape-out! I mean having a linter-like tool (perhaps even your current simulator) at the tip of your fingers all day long. As soon as you type a few lines, you should <em>ask for feedback</em>. You may have to [poke your tool vendor]({{< ref "vhdl-recursion-and-useful-error-messages.md" >}}) to increase the quality of their error messages, though.

## Libraries

People rightfully complain about the lack of rich publicly available libraries. Except for a few ideas, nothing much is happening here. The opencores project is laudable, but it provides reusable hardware blocks, rather than reusable libraries of <em>packages</em>, which would provide a more powerful, flexible and fine grained way of code reuse. The community (I'll get back to "community" in a bit) needs some good and universally accepted libraries. The standardized IEEE libraries are not bad, but they're not enough. Anybody wanting to start a useful VHDL library? Let us know! We'll send you tons of karma and perhaps some patches, too.

## Community

There is a lack of community. This has been discussed in [other]({{< ref "most-needed-eda-innovation.md" >}}) [places]({{< ref "state-logic-design-internet-communities.md" >}}) before. I guess my call for action here is two-fold. First go <a href="http://area51.stackexchange.com/proposals/20632/programmable-logic-and-fpga-design">vow your commitment</a> at the Area 51 Stackexchange for digital design. Then, go and answer (or ask) some VHDL questions at the <a href="http://stackexchange.com/tagsets/5287/my-tags">existing Stackexchange Q&A sites</a>.
