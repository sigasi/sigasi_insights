---
title: "Can we have an open source simulator?"
layout: page 
pager: true
author: philippe.faes (Sigasi)
date: 2010-04-27
tags: 
  - EDA
  - VHDL
---
<div class="content">
<p>In my <a href="/content/why-ghdl-currently-not-good-enough">previous post</a>, I talked about GHDL, and why it is not good enough as an <a href="/content/lacking-open-source-vhdl-simulator">open source parser and simulator</a>. In this post, I talk about possible solutions. I see three options today.</p><p>GHDL could become really good and perhaps even great. But in order to achieve this, the GHDL community would need to grow. Perhaps a few students would have to spend a <a href="http://code.google.com/soc/" class="elf-external elf-icon">Summer of Code</a> working on GHDL.</p><p>Or, we could drop the idea of GHDL and start from scratch. This would be wise if the effort saved by using newer, better tools and languages, will compensate for having to start from scratch.</p><p>As a last alternative, one of the existing players could release its own simulator as open source software. This may not be as crazy as is sounds. Xilinx has dropped Mentor Graphic's ModelSim in favor of its own ISim. We can only presume that Mentor's royalties were an important factor in this decision. ISim translates VHDL and Verilog to C, which is then compiled to an executable. This executable in fact simulates the hardware design. Xilinx has much to gain from a larger community of designers: they can sell more FPGAs. They also have much to gain from a diverse EDA landscape, as they would be able to cut back on their own EDA development budgets.  </p><p>We need an open source, high quality VHDL simulator. It will enable more people and companies to join the community of VHDL and FPGA designers. It will enable new players to enter the EDA market and build innovative tools. If there are more EDA vendors, they can provide more high quality EDA tools at a lower cost and less vendor lock-in. </p><p>I don't expect a lot of cheers from the companies that sell their own simulators. But if the EDA sector as a whole wants to remain healthy, it needs to allow new innovators in the market. Having a freely available parser and simulator for the cornerstone hardware description languages would be a good start.</p><p>Let me know what you think, in the comments or on <a href="http://www.twitter.com/sigasi" class="elf-external elf-icon">Twitter</a>.</p><p>--<br/>Philippe</p>  </div>

