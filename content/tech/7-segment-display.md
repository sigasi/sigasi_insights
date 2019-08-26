---
title: "7-segment display"
layout: page 
pager: true
author: Philippe Faes
date: 2009-09-30
tags: 
  - VHDL
  - VHDL code
comments: true
bannerad: true
---

A few weeks ago, a <a href="http://hes.elis.ugent.be/pbertels">friend of mine</a> talked about using a <a href="http://en.wikipedia.org/wiki/Seven-segment_display">seven-segment display</a> in a VHDL lab in <a href="http://www.ugent.be">his university</a>.

Of course, he wanted his students to simulate before they synthesize. I thought it would be nice to have a module that can emulate a this a seven-segment display as ASCII-art.

![7-segment display shows "F62"](/img/tech/f62.png)

I created this module in about an hour and after some more minor modifications, I decided to publish it for everybody to use.

You can <a href="/resources/tech/display_sigasi.tgz">download the VHDL source code</a> for this project and use it under the conditions of the <a href="http://www.opensource.org/licenses/bsd-license.php">BSD License</a>. ({{< contact-us >}} if you need a different license.)