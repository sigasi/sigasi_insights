---
title: "Evaluating Xtext"
layout: page 
pager: true
author: Philippe Faes
date: 2010-10-11
tags: 
  - Xtext
  - innovation
comments: true
bannerad: true
---

## Sven's talk

About a month ago, Hendrik invited the Sven Efftinge, the project lead of [Xtext](http://www.eclipse.org/Xtext) to talk at a meeting of the **Belgian Eclipse User Group**. While I was in Milan for the FPL conference, Sven inspired the Belgians Eclipse scene.

{{< figure src="/img/tech/xtext.png" class="uk-align-right" >}}

We had noticed Xtext two years ago at the <a href="http://www.eclipsecon.org/summiteurope2008/" class="elf-external elf-icon">Eclipse Summit Europe</a>. At that time, it looked like a project with high potential, but it also looked like it was not industry-ready yet. So we waited to see if Xtext would grow rather than base our VHDL plugin on it. Sven's talk showed that indeed, Xtext had grown.

After I returned from Milan, all of our core development team was really excited about moving our VHDL Eclipse plugin to Xtext. Of course, engineers will get really excited about new technology. I'm an engineer too, so I know what it feels like. However, since I had not been exposed to Sven's <a href="http://en.wikipedia.org/wiki/Reality_distortion_field" class="elf-external elf-icon">reality distortion field</a>, I took the role of Devil's Advocate.

## Techies

Experienced managers will tell you the following story:<br/><em>Every six months, my techies will come with a new technology. Each time, they tell me that this is the future and if we don't switch to this new thing, the rest of the world will have taken a head start. Six months later, they have forgotten about their previous fad and bring something new. If I'd let them have their way, we'd spend all of our time moving from one immature technology to another, and not get any work done.</em>

So on one hand, I am excited about what Xtext can do, but on the other hand, I know that technology does not sell. Solutions sell. And we need sales to survive. Spending the next six months rebuilding our entire product on a new framework will stall customer satisfaction (and sales) for six months. We cannot afford this.

Let me explain in simple terms what Xtext does. Xtext is a framework and generator tool for building <a href="http://en.wikipedia.org/wiki/Integrated_development_environment" class="elf-external elf-icon">IDEs</a>. You just give the <a href="http://en.wikipedia.org/wiki/Formal_grammar" class="elf-external elf-icon">definition</a> of the computer language you want to support. Xtext will generate an editor, with color highlighting, instant compilation, navigation support, outline views and much more.

## Con's

On the down side: we already have a commercial product. If we invest one month in new features, we can sell more and customers will be happy. If we invest one month (or five months) in moving to a different technology, we sell nothing and customers won't care unless this new technology gives them solutions to their problems.

Xtext was originally written with <a href="http://en.wikipedia.org/wiki/Domain-specific_language" class="elf-external elf-icon">domain specific languages</a> (DSLs) in mind. DSLs are typically simple. They are used in small files. They have a simple grammar. They are designed by the same people that build a parser for the language, so they are easy to parse by construction. If you create a new DSL, knowing that you will use Xtext, you can use the sensible defaults that come with Xtext. These defaults seem somewhat inspired by Java-like syntax. If you have scoping rules or language semantics that do not correspond to the defaults, you can still change the defaults, but that takes more work.

VHDL does not look anything like Java. We think that we will need a lot of customization.<br/>VHDL was created largely in standardization bodies of the IEEE. It is not easy to parse VHDL correctly, or even to <a href="http://en.wikipedia.org/wiki/Lexical_analysis" class="elf-external elf-icon">lex</a> it correctly. VHDL files tend to be 500 to more than 10000 lines long. While the Xtext team claims that Xtext is ready for general purpose language, it will still be a challenge to build an Xtext IDE for any big language, let alone for hardware description languages.

## Pro's

Still, if Xtext it was not designed for a certain purpose, does not mean it not usable for a that purpose. If we had our tool based on Xtext, we would get some features that would otherwise take us a whole lot of effort to implement.

For instance, Xtext offers type-time compilation out of the box. In our tool, users have to save their file before the compiler runs. Also, Xtext has a very sophisticated autocomplete, based solely on the language grammar definition. An extra benefit is that Xtext uses the Eclipse Modeling Framework (EMF) for the internal representation of the code. This EMF representation can then be used for implementing linting rules, automatic code fixes and refactorings.

A VHDL editor that would only have the features that Xtext offers, would be far better than the current industry standard for VHDL editors. But what scares me, is that it would be only slightly less cool than our current VHDL design tool. (Add a pinch of salt here!)<br/>Another big <em>pro</em> is that we would inherit all the funky features that the Xtext team will build in their later releases. Again with a pinch of salt, this means a people will work on new features for the coolest VHDL editor in the world, without knowing anything about VHDL. (And without sending us any invoices, too.)

## The proof of the pudding

Considering all of the above, we have decided to invest some time in evaluating Xtext. We have committed one person-month to building a prototype VHDL/Xtext editor. This prototype should consist basically of a trimmed down VHDL grammar on top of Xtext. This way, we can evaluate performance and we will know where the VHDL language definition is hard to implement in Xtext. After all, the proof of the pudding is in the eating.

If this post sounds critical of Xtext, it is because I am telling myself not to leap to Xtext without proper consideration. But like the rest of our team, I am excited about the potentials. Today we are evaluating if Xtext is usable for the VHDL language. If the answer is yes, we will start making plans for migrating our VHDL editor to Xtext.
