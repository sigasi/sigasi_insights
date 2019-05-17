---
title: "Code refactoring:  Emacs VHDL mode vs Sigasi"
layout: page 
pager: true
author: Philippe Faes
date: 2011-06-22
tags: 
  - Emacs
  - VHDL
comments: true
bannerad: true
---

Last week, I talked about that there is [/opinion/emacs/no-vhdl-rename-emacs-vhdl-mode]. Rename is just the tip of the iceberg when it comes to code modifications or *refactorings* ([/tech/hardware_refactoring]). There are dozens of well documented and automated code refactorings... in the world of *software* engineering. In hardware land, however, only a few refactoring tools exist. (You're lucky: Sigasi is one of them!) And all the hardware refactoring tools put together still look pale compared to Eclipse JDT, *the* weapon of choice for many Java refactorers.

Cutting to the chase: nobody is going to build a decent automated refactoring tool, based on regular expressions. Or on LISP, or on Emacs. That's just not the right tool for the job. If you stick with a development environment that comes with a built-in VHDL parser, you're betting on the right horse. This technology is ready for some extra innovative fireworks. 

At Sigasi, we have some refactorings implemented and shipped to our customers: rename, add port, encapsulate statements. 

Doing any of these refactorings by hand can easily take half an hour to several hours. With the right tool (and Emacs VHDL is *not* it!) in your hands, it will only take a minute.
