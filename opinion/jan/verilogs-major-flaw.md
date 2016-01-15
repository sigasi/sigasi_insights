---
title: "Verilog's major flaw"
layout: page 
pager: true
author: Jan Decaluwe
date: 2010-10-06
tags: 
  - JanHDL
---
In my previous post, [your-favorite-mistake], I argued that a Verilog monopoly would have been bad for the electronic design industry. In this post, I would like to make that concrete.

## A bit of HDL theory


At the RTL level and beyond, HDLs look a lot like traditional programming languages. Of course, they add a number of features that reflect the nature of hardware systems. The most important one is support for massive light-weight concurrency.

The flip-side of concurrency is that we now face a new problem: potential nondeterminism. An HDL simulator executes concurrent processes in some arbitrary order. When traditional variables are used to communicate between processes, the result depends on the order in a specific run. A consumer process may use either the updated or the old value. Therefore, there are multiple valid but different outcomes. Hence,  the model is nondeterministic.

Whether nondeterminism is acceptable in general is subject to debate. For now, let me just point out that it is unworkable for the all-important class of synchronous RTL design. As a consequence, HDLs need provisions to cope with nondeterminism. The whole issue comes down to the ordering of the events that occur within a single timestep. This involves dividing the timestep into a number of zero-delay substeps, called delta cycles, to which events are assigned.

(Note: the term delta cycle is VHDL terminology. I am using it in general because I believe it’s the clearest way to explain the issues.)

## Verilog experiences

I designed my first chip in 1990, using Verilog and RTL synthesis. At that time the language had a single type of assignment, called blocking assignment, which works much like traditional variable assignment. I quickly noted that the simulation results depended on the <em>order</em> of the <em>concurrent</em> synchronous processes in the source code. My pipeline became a feedthrough and vice versa. Clearly, there was something fundamentally wrong.

As Verilog-based RTL design and synthesis were already becoming popular, I concluded that I was missing something. I found out that when assignments went through ports, everything worked as expected. Therefore, I adopted the guideline to use just a single synchronous process per module. By lack of alternatives, I concluded that this was the intended way to avoid nondeterminism in Verilog.

After a considerable amount of time with VHDL,  I came back to Verilog in 2000. I was in for a big unpleasant surprise. It turned out that my coding style had only worked by accident, not because of any language requirement. In the mean time, a new simulator had emerged that exploited this hole to "optimize" port assignments. The final word is that synchronous design based on blocking assignments is always nondeterministic, and therefore impossible. <strong>The uneasy conclusion is that around 1990, when Verilog-based RTL synthesis was moving into the mainstream, the language was in fact completely unsuited for the purpose.</strong>


Of course, the Verilog language designers must have realized this also. Somewhere along the way, they added a fix, called the nonblocking assignment. On the surface, this looks like VHDL's signal assignment. Like in VHDL, it delays the update event with a delta cycle. This effectively solves the problem for synchronous design. With nonblocking assignments, you can organize synchronous processes in any way you want.

It is tempting to believe that nonblocking assignments solve Verilog’s problem with nondeterminism in general. However, this is not the case. Nonblocking assignments do not remove the conditions for nondeterminism. They just delay them by one delta cycle. For synchronous design, that makes them harmless, but in general they are still there.  In models with more complex event controls, nondeterminism comes back in full force. At that point, you have no choice but playing the delta cycle game yourself, by carefully considering where to use blocking and nonblocking assignments.  See for example <a href="http://www.google.com/url?q=http%3A%2F%2Fbooks.google.be%2Fbooks%3Fid%3D_VGghBpoK6cC%26lpg%3DPR12%26ots%3DF2kIzTXUA3%26dq%3Dsutherland%2520gotcha%252029%26hl%3Den%26pg%3DPA64%23v%3Donepage%26q%26f%3Dfalse">Sutherlands’ Verilog gotcha #29</a>.

The conclusion is that nonblocking assignments were an afterthought, and it shows. They are merely a half-baked solution for a part of the problem, albeit an important part. As a result, the confusion surrouding blocking and nonblocking assignments goes on forever, even among experts. I think it will stay with us for as long as Verilog lives.

## The VHDL perspective

If you are a VHDL designer with no Verilog experience, you may have been reading all this with increasing astonishment. Perhaps you don’t even have the faintest idea what I have been talking about.

That is just fine. In VHDL, we don’t have these problems. The language solves them for us. Determinism is built-in. Verilog’s confusing and unproductive complexities are simply avoided by design. Think about it! In my next post, I will describe in more detail how VHDL accomplishes this, again putting it in contrast with Verilog.

## The lesson

If Verilog was all we had, we might think that its confusing way to cope with nondeterminism is a natural property of HDLs. VHDL shows us otherwise. It offers a superior alternative in which you don’t have to worry about such matters. You can concentrate on more interesting stuff.

The confusion surrounding blocking and nonblocking assignments is, so I believe, Verilog’s major flaw. I suspect it is an important cause of wasted engineering time and suboptimal coding styles. Therefore, it would be rather unwise to follow Mr. Costello’s suggestion to do away with VHDL altogether. For Verilog it is too late, but one may hope that future HDLs will take its lessons into account. Thanks to VHDL, we know that it is possible to do it right.


<em>This article is part of Jan's blog about his personal views on HDL design.</em>
