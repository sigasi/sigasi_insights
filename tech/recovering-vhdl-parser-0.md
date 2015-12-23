---
title: "Recovering VHDL Parser"
layout: page 
pager: true
author: philippe.faes (Sigasi)
date: 2012-09-21
tags: 
  - recovering VHDL parser
  - VHDL compiler
  - VHDL Parser
---

It is useful to analyze code that is only partly finished, code that still has errors in it. Analyzing broken code helps people understand, improve and complete the code. In order to perform such an analysis, you need a parser that recovers after it encounters an error. In the world of hardware design, hardly any recovering parsers exist and engineers are left out in the cold. All but a few EDA tools fail miserably at parsing incorrect VHDL code.

## Your code is (almost) never correct

When you write VHDL code, it is broken 99% of the time. While you are adding or removing code, while you are typing new statements your code is not syntactically correct. Only when you save and press compile, your VHDL code is correct (or so you hope). This means that traditional parsers are useless for your code _most_ of the time.

## Why compile broken VHDL code?

There are two use cases why you would want to compile incomplete or broken code. First (as I've just mentioned), you can compile code while you are still working on it. This is useful because it allows you to use a wide range of features without having to bring your code to a "correct" state. You can navigate to declaration, hover to see extra information, have semantic highlighting, autocomplete record fields, see a file outline and chip hierarchy and much more. 

Second, if you dig up an old project (for bug fixing or for reusing VHDL code), chances are that you can't get it to compile right away. Even if your team always stores projects with perfect build scripts, you may inherit a project from another team that does not adhere to the same standards. 

In order to compile broken code, the parser needs to recover from any error in the code. Building a recovering parser is not easy, but it is doable. I'm proud to say that Sigasi probably has the best recovering capabilities of any VHDL parser in the market.

## Parsers are optimized for correct code only

Traditional parser technology deals with the problem of analyzing a sequence of tokens determining the structure of these tokens with regards to a formal grammar, often expressed as [BNF](http://en.wikipedia.org/wiki/Backus%E2%80%93Naur_Form). Parsers have been built and optimized to deal with more complex grammers, with larger files and in less time with less memory. Traditional VHDL parsers also assume that the code is correct and ready to be compiled. That is a false assumption. These parsers cannot process your VHDL code 99% of the time. 

## Traditional VHDL parsers and broken code

Traditional VHDL parsers, based on parser generators like [Lex/Yacc](http://nl.wikipedia.org/wiki/Yacc), do not handle broken code well at all. In some cases a single error will trigger [way too many error messages](/tech/one-mistake-one-error-marker.html). In other cases, traditional [VHDL parsers bail out after a single error](/tech/three-mistakes-three-error-markers.html) and ignore warnings further down in the file.

Non-recovering parsers are an artifact of history. All new computer languages are created with modern and better parsers, with better error recovery and more sensible error messages. Sadly, most EDA companies still use parsers technology from three decades ago.
