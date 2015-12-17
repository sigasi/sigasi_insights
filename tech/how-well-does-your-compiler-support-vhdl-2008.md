---
title: "How well does your compiler support VHDL 2008?"
layout: page 
pager: true
author: philippe.faes (Sigasi)
date: 2012-10-23
tags: 
  - VHDL
  - vhdl 2008
---
<div class="content">
<p>While some design teams will stick to <span class="caps">VHDL</span>-93 until the sun burns out, some people are using as much of the new <span class="caps">VHDL</span>-2008 standard as is supported by their tools. Big question is: how much is actually supported by which tools?</p>	<blockquote>		<p>Spoiler Alert: The market leader in <span class="caps">VHDL</span> 2008 is Aldec.</p>	</blockquote>	<h2>The script</h2>	<p>I've created a small script that can test your compiler against a set of VHDL files to see which constructs are supported. This is very much a work in progress. At this time, the script only deals with "vcom" compilers (<a href="http://www.aldec.com" class="elf-external elf-icon">Aldec</a> RivieraPro, Active-<span class="caps">HDL</span> and Mentor Graphics ModelSim). If anybody can help and provide extensions for other commercial (or free?) compilers, that would be great!</p>	<p>Also, the script only tests a limited set of <span class="caps">VHDL</span>-2008 features. If you want to test your favorite feature, please feel free to contribute.</p>	<h2>Source code on GitHub</h2>	<p>I'm releasing this under a <span class="caps">BSD</span> license, and you can download the <a href="https://github.com/philippefaes/vhdl2008-tester" class="elf-external elf-icon">source code from GitHub</a>. Please use, abuse, adapt and send me your patches (or <a href="https://help.github.com/articles/using-pull-requests" class="elf-external elf-icon">pull requests</a>).</p>  </div>

