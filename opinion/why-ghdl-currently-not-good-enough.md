---
title: "Why is GHDL (currently) not good enough?"
layout: page 
pager: true
author: Philippe Faes
date: 2010-04-19
tags: 
  - EDA
  - VHDL
comments: true
bannerad: true
---

In my previous post, [lacking-open-source-vhdl-simulator], I argued that the world would be a better place if we had a freely (<a href="http://en.wikipedia.org/wiki/Gratis_versus_libre"><em>libre</em></a>) available VHDL parser and simulator. Today, I will explain why one particular open source compiler is honorable, but not sufficient.

If you have ever searched for a VHDL simulator, you will surely have found (and perhaps tried) <a href="http://gna.org/projects/ghdl">GHDL</a>. GHDL is an open source simulator for VHDL, implemented as a front-end for the popular GCC compiler. While it is the best open source alternative available at the moment, there are some problems with it.

GHDL supports only part of the VHDL language. While it behaves pretty decently for correct VHDL code, erroneous code may cause GHDL to crash without a sensible error message. This leaves the engineer in the cold, not knowing where he should start looking for the mistake he made. In order to improve GHDL to an industrial quality level, we need more developers working on it. Call it a developer community.
GHDL is written in <a href="http://en.wikipedia.org/wiki/Ada_%28programming_language%29">ADA</a>, a language that is hardly used, save by defense contractors. Having ADA as its project language, GHDL may have a hard time attracting code contributors. To its defense, ADA resembles VHDL. So it should be easy for VHDL designers to pick up ADA.

The activity level on the mailing list, the <a href="http://gna.org/projects/ghdl">website</a> and the Subversion repository is not exciting. GHDL is basically lead by a single developer, Tristan Gingold, with occasional help from others. I think Tristan has done a great job getting GHDL to where it is now, and I hear he is a very responsive project maintainer. However, it takes more than a project lead to build a community.

Considering its difficulties, I haven't given up on GHDL, but I would not bet my money on it either.

-- 
Philippe

Also read my my next post: [can-we-have-open-source-simulator]