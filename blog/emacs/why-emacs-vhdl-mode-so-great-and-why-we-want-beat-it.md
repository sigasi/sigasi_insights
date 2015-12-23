---
title: "Why Emacs VHDL mode is so Great. And Why We Want to Beat it"
layout: page
pager: true
author: philippe.faes (Sigasi)
date: 2012-03-30
tags: 
  - Emacs
  - VHDL
---
Reto Zimmermann's Emacs <a href="http://www.iis.ee.ethz.ch/~zimmi/emacs/vhdl-mode.html">VHDL mode</a> is one of the most advanced tools for VHDL entry on the planet. Other general purpose editors like VI and Notepad++ might be great editors, but they are also very "general purpose". They have very few language specific features. The engineer is left with a tool that manipulates ASCII text, not with a tool that understands VHDL.

## Emacs has Ruled for Two Decades

![Gnu](images/gnu.jpg){: align="right"} The history of the Emacs VHDL mode begins in 1992. Almost two decades later, nobody knows how many people are using the Emacs VHDL mode. My best guess is that tens of thousands of engineers are using it on a daily basis.

I have used Emacs in the past. I've used it for C, for Python and for VHDL (among other languages). The C and Python modes are nothing compared to the VHDL mode! The untrained eye can tell from the size of the Lisp implementations, but the Emacs lover can tell from experience. Emacs VHDL has great macro's, a design hierarchy browser and a code formatter, which includes vertical alignment. It also has code fixing: sensitivity lists get updated to avoid latches. I'm ignoring the trivial features like block comment, which every decent editor should have. This feature set is quite impressive. In fact it goes above and beyond the industry standard tools, even <em>today's</em> tools. Most EDA vendors provide a lousy editor built in to their environment, knowing that engineers will hook that environment to their favorite editor. Between <a href="/content/neither-vi-nor-emacs-are-most-popular-vhdl-editor">20%</a> and <a href="http://www.vhdleditor.com/poll">30%</a> of engineers (depending on where you ask) choose Emacs.  

## Are we Nuts?

So why would anybody want to start a company that competes head on with an open source killer application? And how could that company ever succeed?

Emacs VHDL mode was way ahead of its time when it was first conceived. But, as I have mentioned, the Emacs VHDL mode is almost two decades old. In the meanwhile, we have seen successful IDEs from Borland, IntelliJ, Eclipse and Microsoft Visual Studio. Now, you may like or dislike any of these IDEs. Fact is that they are a commercial success. They are a success because they help real engineers do real work.

## Beating Emacs

Sigasi wants to introduce hardware designers to new and better tools, based on the ideas of software IDEs. I'm willing to compare Sigasi HDT with the most popular VHDL editor to date: Emacs with the VHDL mode. Criteria will have to be relevant for real people in real situations. That disqualifies <em>shinier buttons</em> or less than <em>100MB memory footprint</em> as criteria for comparison. PCs are sold with a default of <em>2GB</em> RAM and a tool that <em>looks</em> good will produce zero added value. (Sigasi has the shiny buttons and Emacs uses less memory.)

In the coming months, I will post <em>relevant comparisons</em> between Emacs and Sigasi. Today, Sigasi HDT provides a lot of features that were unique to Emacs in the past (think: fix sensitivity list). Before the end of this year, there should be no technical reason left to choose Emacs over Sigasi.

*Edit*: You can read <a href=".">all of our articles about Emacs and Emacs VHDL mode</a>, including the follow-up articles to this post. 