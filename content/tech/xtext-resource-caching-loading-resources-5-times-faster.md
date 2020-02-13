---
title: "Xtext resource caching: loading resources 5 times faster"
layout: page 
pager: true
author: Mark Christiaens
date: 2012-01-31
tags: 
  - emf
  - planeteclipse
  - Xtext
comments: true
bannerad: true
---

> Those who cannot remember the past are condemned to repeat it  ([George Santayana](http://en.wikipedia.org/wiki/George_Santayana)). 

I've always felt ambivalent about that quote.  History never ever repeats itself exactly.  In computer science on the other hand, it applies very well.  In all our collective software applications, we recalculate the same results time and time again and are therefore faced with constant question to remember or not to remember.   In this blog series, I'm going to talk about a cache for Xtext resources that we've developed over the past year.  The code is available from [GitHub](https://github.com/mark-christiaens) under EPL license (the cache branch).  The series will be structured as follows.  In this first installment I'll talk about the context and give an overview of our cache.  The next installment will show you how to integrate the code into your own project.  The third installment discusses the underlying architecture of the cache for those who wish to enhance it. 

So ... let's start with a bit of context about Xtext's inner workings.  Xtext works with EMF resources that are stored in resource sets.   A resource is a model (at first sight only an EMF model) representing a source file.  When you need such a resource (for example when you open a source file in an editor of your Xtext product) a lot of machinery kicks into gear.  First the source file is read.  Then a lexer tokenizes the source code.  The parser tries to discern your actual Xtext grammar rules into the stream of tokens.  As the parser progresses, it will generate an EMF model according to the grammar rules.  You may not be aware of another big chunk of work: the parse result is completely mirrored by a node model that is attached to the EMF model.  

Lexing goes very fast.  It eats through a file at a rate (on my Intel Core i5 750, 2.67 GHz) of over 200 MB/s.  Parsing is more expensive, let's say it goes at speeds around 10 MB/s (of course your mileage may vary depending on the complexity of your grammar).  For a file of a couple of MBs, the EMF model ends up containing in the order of a couple of hundred thousand objects.  The node model can easily go over a million nodes.   I hope these figures give you a feel that simply loading a resource into a resource set is actually a heavy operation.  

*OK, but that's just one file and just one time*, I hear you think but neither is actually the case.  For example, the Xtext builder will load (during a clean build) all your project files into a resource set in order to build an index of exported identifiers, to check all cross references, perform validation ... Even when the builder is performing an incremental rebuild (because only one file has changed) it will load other files that your changed file depends upon.  For big projects, during such a build the resource set will need to be flushed from time to time to limit memory consumption and a resource will have to be reloaded when needed.  Again, for one of our big projects, a 2 MB file was reloaded this way over 40 times.  Quite painful. 

In our product ([Sigasi HDT](https://www.sigasi.com)), we found that resource loading constitutes a *big* fraction of the computation time (a while back it would have been 70%).   So it's useful to minimize that cost.  A first attack vector is to keep your grammar as nimble as possible: remove backtracking, reduce the number of generated EMF objects, reduce the number of fields ... but eventually you exhaust that option (see [view-complexity-your-xtext-ecore-model]) for some help with this).  So at Sigasi, we developed a **resource cache**.  

The idea is simple.  Instead of performing lexing/parsing/EMF model construction/node model construction time and time again, store the resource on disk with a hash as index.   Next time you load a resource, first calculate the fingerprint and see if we have a hit from the cache.  If so, reconstruct the resource from the cache.  To give an idea about the potential gains, a big resource loads 4 to 5 times faster from the cache than when it needs be reconstructed from scratch.

Initially, we were convinced that the cache would be a lot faster but we did worry about on disk storage.  Storing a data structure of millions of objects could have constituted a problem.  It turned out however that, using a compact serialization format and compression, the cache entries on disk have approximately the same size as the original source code of the project files.   As a matter of fact, the default cache limit used in our product is 100 MB, peanuts for modern machines. 

How does this work relate to the Xtext mainline code?  Sadly, we needed to fork the Xtext code to be able to introduce serialization support into the code for the node model.  So if you want to play with it now, you'll have to build the Xtext plugins from our source code (at the time of writing, our fork is up to date with all the mainline changes till begin January 2012).   The good news is that we're in the process of discussion with the Xtext developers to introduce some of our code into the main line so that it should be easier to deploy our cache code.   In the longer run, we're aiming to make our cache implementation more generic so that it should be able to support more exotic resource implementations which it currently does not.   At that point, hopefully, Xtext can consume the entire code drop.  

In the next installment of this blog, I'll give an example of how to plug in the cache's functionality into your own project. 