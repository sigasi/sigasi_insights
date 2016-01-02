---
title: "The biggest EDA innovations that did not happen"
layout: page 
pager: true
author: jdecaluwe (Sigasi)
date: 2010-02-12
tags: 
  - JanHDL
---
In my previous blog post, [latest-eda-innovation-logic-synthesis], I concluded that RTL synthesis was the latest of the all-time most important EDA innovations. Although it is more than 20 years old, nothing with a similar impact has happened since.

It's not that there was a lack of candidates. In the early nineties, several ideas and technologies seemed to have great potential. Personally, I was eager to repeat my great experience with RTL synthesis. Moreover, my company was basically selling design methodology, so we had a vested interest to stay at the forefront of innovation. Consequently, we were continuously watching out for the next big thing. But it didn't come. So here is my personal anti-list: the biggest EDA innovations that did not happen.

First on my list is <strong>Asynchronous Design Synthesis</strong>. Asynchronous design refers to design techniques without a global clock. It promises advantages with regard to performance, power consumption and design security, but it is inherently more complicated than synchronous design.

Then comes <strong>Formal Verification</strong>. Formal verification refers to the use of mathematical proof to verify the correctness of a design. When it works, it is superior to simulation, because it provides a 100% guarantee.

Last but not least we have <strong>Behavioral Synthesis</strong>. This is a technique whereby one starts from an algorithmic description, and where a synthesis tool allocates hardware resources and assigns operations to clock cycles.

Let me be clear about my position. I certainly don't want to suggest that there hasn't been any progress in the listed domains. Quite the contrary. There are now EDA tools that support a systematic methodology for asynchronous design. Formal verification tools are being employed successfully for certain well-defined tasks in the design flow. And behavioral synthesis is moving into the spotlight with the new wave of C-based high level synthesis tools.

What I am saying is that these tools have not fundamentally changed the way in which the majority of design engineers work. The mainstream paradigm for digital circuitry and EDA is still synchronous design. To verify the functionality of complex designs, we are still using good old simulation, not formal verification. And behavioral synthesis hasn't replaced RTL synthesis as the principal synthesis technique in mainstream design flows.

In summary, none of these tools has revolutionized the industry in the way RTL synthesis did.
