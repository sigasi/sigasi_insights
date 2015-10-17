---
title: "Code refactoring:  Emacs VHDL mode vs Sigasi"
layout: page 
pager: true
author: philippe.faes (Sigasi)
date: 2011-06-22
tags: 
  - Emacs
  - VHDL
---
<div class="content">
<p>Last week, I talked <a href="/content/rename-emacs-vs-sigasi">about renaming</a> objects in <span class="caps">VHDL</span> code. Rename is just the tip of the iceberg when it comes to code modifications or <a href="/hardwarerefactoring"><em>refactorings</em></a>. There are dozens of well documented and automated code refactorings&#8230; in the world of <em>software</em> engineering. In hardware land, however, only a few refactoring tools exist. (You're lucky: Sigasi is one of them!) And all the hardware refactoring tools put together still look pale compared to Eclipse <span class="caps">JDT</span>, <em>the</em> weapon of choice for many Java refactorers.</p>	<p>Cutting to the chase: nobody is going to build a decent automated refactoring tool, based on regular expressions. Or on <span class="caps">LISP</span>, or on Emacs. That's just not the right tool for the job. If you stick with a development environment that comes with a built-in <span class="caps">VHDL</span> parser, you're betting on the right horse. This technology is ready for some extra innovative fireworks. </p>	<p>At Sigasi, we have some <a href="http://www.sigasi.com/documentation/book">refactorings implemented</a> and shipped to our customers: rename, add port, <a href="http://www.sigasi.com/documentation/book/structural.html#encapsulate-label">encapsulate statements</a>. </p>	<p>Doing any of these refactorings by hand can easily take half an hour to several hours. With the right tool (and Emacs <span class="caps">VHDL</span> is <em>not</em> it!) in your hands, it will only take a minute.</p>  </div>

