---
title: "Three mistakes, three error markers"
layout: page 
pager: true
author: philippe.faes (Sigasi)
date: 2012-09-21
tags: 
  - recovering VHDL parser
  - VHDL
  - VHDL Parser
---
<div class="content">
<p>Ideally, if you make three mistakes in <span class="caps">VHDL</span>, you want to see three error markers. Here is a small example.</p>	<p><span class="inline inline-center"><img src="http://www.sigasi.com/sites/www.sigasi.com/files/images/recovering-vhdl-parser-3errors.png" alt="Sigasi shows three error markers for these three errors" title="Sigasi shows three error markers for these three errors" class="image image-_original " width="423" height="386"/><span class="caption"><strong>Sigasi shows three error markers for these three errors</strong></span></span></p>	<p>A traditional <span class="caps">VHDL</span> compiler gives only one error message. You will have to fix this error and start the compiler again before you can find the next error. This takes extra time and you need all of your time you to work on complex design problems that you are dealing with.<br/></p><pre>$ vcom -work work -93 /media/psf/Home/workspaceSigasi/recovering_parser_demo/dut.vhdModel Technology ModelSim ALTERA vcom 10.0c Compiler 2011.09 Sep 21 2011-- Loading package STANDARD-- Loading package TEXTIO-- Loading package std_logic_1164-- Compiling entity dut** Error: /media/psf/Home/workspaceSigasi/recovering_parser_demo/dut.vhd(12): near ")": expecting IDENTIFIER</pre>  <div id="book-navigation-1518" class="book-navigation">            <div class="page-links clear-block">              <a href="/content/one-mistake-one-error-marker" class="page-previous" title="Go to previous page">&#8249; One mistake, one error marker</a>                    <a href="/content/recovering-vhdl-parser-0" class="page-up" title="Go to parent page">up</a>                </div>      </div>  </div>

