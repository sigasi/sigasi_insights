---
title: "Time for reflection"
layout: page 
pager: true
author: Jan Decaluwe
date: 2010-12-17
tags: 
  - JanHDL
comments: true
bannerad: true
---

Dear reader,

In my previous post, [vhdls-crown-jewel], I announced further considerations about nondeterminism in Verilog. However, I am getting worried that you may be losing interest. As a visitor of the Sigasi site, you are likely a VHDL design professional, or aspiring to become one. Why should you care about Verilog? Moreover, you are probably a busy person, looking for productivity solutions in your day-to-day work. What is the relevancy of all this pseudo-philosophical talk about nondeterminism? Before continuing, I think I have to give you an indication of where I am heading.

Be assured that I have ambitious goals. I believe that the full potential of HDL-based design has not yet been realized. The main culprit is the low level coding style that many designers use.  To my eyes, synthesizable HDL code often looks like a textual form of technology independent schematic entry.  I would like to help designers to review their coding styles critically and potentially change them to achieve higher quality and productivity.

My motivation behind this does not come from altruistic ideals. I like HDL-based design and I would like to continue working in this business for some time. However, the coding styles that I consider essential to make this an interesting enterprise are under considerable pressure. Sometimes I even fear that they are on the verge of extinction.

Let me make that concrete. I developed my ideas about synthesizable HDL coding around 1990, in Verilog. My guiding principle was to push the abstraction level as high as possible without jeopardizing implementation efficiency. I adopted my coding style intuitively  in a world without gurus and guidelines, by independent thinking, experimenting, and reading the Synopsys manual.  It seemed obvious to me that many designers would soon come to similar conclusions.   In reality, the opposite has happened. My coding style has been banned. <strong>Contemporary Verilog coding guidelines force me to design at a much lower level than twenty years ago.</strong>

The Verilog situation is particularly troublesome. The mainstream Verilog coding guidelines for synthesizable logic  seem to be carved in stone.  Every author and professor seems to repeat them without any form of critical review. To make things worse,  I have not seen convincing arguments to justify them.  It is mostly a matter of argument from authority: &#8220;Do it like this because I tell you so&#8221;.  I believe that these guidelines originate from implicit misconceptions about the nature of HDL-based design. Unfortunately, these misconceptions are reinforced by some confusing aspects of the language, including its nondeterministic foundation.

The landscape of synthesizable VHDL coding styles looks much more diversified. Many designers may use a low level coding style, but there are also (forgive me the wording) many islands of enlightenment with more abstract coding styles. These coding styles may be significantly different in the details, but the vision behind them is the same as my own. While this is good news, VHDL designers should not make the mistake to think that they are somehow shielded from the Verilog world. For one reason, companies may strive for the lowest common denominator in tools and methodologies when they need to support both HDLs.

My nightmare scenario goes as follows. As the result of  market forces, every company eventually moves to SystemVerilog. With the VHDL example gone, synthesis tools start to issue warnings and even errors on coding styles that do not comply with the conventional wisdom. Everyone is now forced to design at a lower level, for no good technical reason. Do I think such a scenario is realistic? Not really. However, on the other hand, I never imagined that I would have  to defend my favorite HDL coding style, twenty years after developing it.

If I talk about Verilog that often, it is because the situation is more polarized, and the stakes are higher.  The outcome of the SystemVerilog groundswell, orchestrated by big EDA, will be of decisive importance to all HDL designers. However, let it be clear that my critique is not primarily targeting the language itself, but rather the way in which it is typically used.  Most of my ideas about good HDL coding can be applied perfectly to Verilog design.

The mainstream Verilog coding guidelines have all the characteristics of  <em><a href="http://en.wikipedia.org/wiki/Conventional_wisdom">conventional wisdom</a></em>: they are based on a set of implicit ideas that are generally held as true, but that are unexamined. Challenging the conventional wisdom requires challenging those ideas. Therefore,  I need to make them explicit, examine them carefully and  possibly unmask them as misconceptions.

Dear reader, I can promise you that we will eventually get practical - very practical indeed. A lot of what I want to convey can be illustrated with small examples in Verilog and VHDL. However, I need to lay the groundwork first. I hope you have the patience to bear with me.

Next time: reflections on Verilog and nondeterminism :-)

Yours sincerely,

Jan


