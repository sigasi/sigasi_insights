---
title: "Lacking an open source VHDL simulator"
layout: page 
pager: true
author: Philippe Faes
date: 2010-04-11
tags: 
  - VHDL
  - Sigasi
  - EDA
comments: true
---
The most important tasks of digital designers is to write VHDL (or Verilog) code and to verify it. The two tools you need for that are: an editor (or rather: an IDE) and a simulator. Editors are available for free and I've discussed IDE's elsewhere ([why-hardware-designers-should-switch-eclipse]). What concerns me is that there are no high quality open source implementations of a VHDL simulator available. 

Now, why is that a concern? I think there are two points to be made.

The first reason why we need an open reference implementation, is more important for me as an EDA tool vendor. We need an open VHDL parser and simulator, so that new players can innovate on VHDL technology. Today, any new company that wants to build a new VHDL tool, needs to write or buy their own parser. The price of a VHDL and Verilog parser from the leading provider is in the order of seven-digits. Not a problem for the top three EDA vendors or the two largest FPGA vendors, but the rest of us will think twice before spending that kind of money. Cheaper reusable parsers and open source parsers are just not good enough to build a commercial product. Universities using these parsers spend all their effort building a prototype that will yield interesting papers, but not a product they can spin off.

The second reason is that hardware designers should be able to choose a high quality low cost simulator. This will enable more people to work with VHDL and with FPGA's. I think the best way to deliver this is through an open source model. I think that other, more complex EDA tools, including synthesizers, require too much of an R&D effort to have them available in an open-source model, so let me focus on simulators. Perhaps we can get to synthesis tools in the next decade.

If there is to be more innovation in EDA, we need a freely available parser and simulator for VHDL, Verilog and SystemVerilog. Contrary to <a href="http://www.gnu.org/philosophy/free-sw.html">FSF dogma</a>, <a href="http://www.opensource.org/licenses/gpl-license.php">GPL</a>-style licenses will not provide enough freedom for EDA start up companies. These companies will want to sell their software under a proprietary license model. The least we need is <a href="http://www.opensource.org/licenses/lgpl-license.php">LGPL</a>, but <a href="http://www.opensource.org/licenses/bsd-license.php">BSD</a>-style would be the best.

In my next post, I will talk about a popular, but not quite good enough VHDL simulator. 

Let me know what you think in the comments, or on <a href="http://www.twitter.com/sigasi">Twitter</a>.

-- 
Philippe

Also read my next post: [why-ghdl-currently-not-good-enough]