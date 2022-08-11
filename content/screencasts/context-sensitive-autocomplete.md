---
title: "Context Sensitive Autocompletion"
layout: youtube 
pager: false
date: 2016-01-01
comments: false
videoid: yDTyH66_o_A
video: mute
tags: 
  - autocomplete
  - VHDL
---

Because your code gets analyzed as you type, Sigasi knows the region of code that you are editing. The content assist feature (a.k.a. autocomplete) is fully aware of the context and tries to offer you only the relevant templates.

Templates are sensitive to the context of your code. If you type the word "<code>component</code>" inside a VHDL declarative region, Sigasi offers a template for the VHDL component declaration, based on your existing entities. If you type the same word, <code>component</code> in the body of an architecture, Sigasi offers a component <em>instantiation</em>.

Likewise, `if` in the architecture body can expand to an `if generate` statement, which is a <em>concurrent</em> statement. In a process, this will expand to an if-then statement, which is a <em>sequential</em> statement.
