---
title: "How well does your compiler support VHDL 2008?"
layout: page 
pager: true
author: Philippe Faes
date: 2012-10-23
tags: 
  - VHDL
  - VHDL-2008
comments: true
---
While some design teams will stick to VHDL-93 until the sun burns out, some people are using as much of the new VHDL-2008 standard as is supported by their tools. Big question is: how much is actually supported by which tools?

> Spoiler Alert: The market leader in VHDL 2008 is Aldec.

## The script

I've created a small script that can test your compiler against a set of VHDL files to see which constructs are supported. This is very much a work in progress. At this time, the script only deals with `vcom` compilers ([Aldec](http://www.aldec.com) RivieraPro, Active-HDL and Mentor Graphics ModelSim). If anybody can help and provide extensions for other commercial (or free?) compilers, that would be great!

Also, the script only tests a limited set of VHDL-2008 features. If you want to test your favorite feature, please feel free to contribute.

## Source code on GitHub

I'm releasing this under a BSD license, and you can download the [source code from GitHub](https://github.com/philippefaes/vhdl2008-tester). Please use, abuse, adapt and send me your patches (or [pull requests](https://help.github.com/articles/using-pull-requests)).
