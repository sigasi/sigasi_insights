---
title: "Code Comprehension and Reuse"
layout: page 
pager: true
author: philippe.faes (Sigasi)
date: 2012-08-23
tags: 
  - code comprehension
  - code reuse
---
Understanding a big body of code is always a difficult task. But the correct tools will help you speed up and do in hours what would otherwise take a week.

## Key Features:

* Power navigation / VHDL code browsing
	* Jump to any declaration in one click
	* Jump to case statements in state machines
	* Jump between instantiation, component and entity / architecture
* [code-comprehension-without-clicking-your-mouse-hovering]
* Show design hierarchy, even if the code is broken \[[movie](http://www.sigasi.com/screencast/hierarchy-view)\]
* Find where signals are used
* Semantic highlighting: use different colors for signals, variables, constants, ... \[[learn more](http://www.sigasi.com/content/emacs-code-coloring-outdated)\]
* See the values of generics \[[movie](http://www.sigasi.com/screencast/generic)\]

All of these inspection features work even if the design is incomplete or broken with our [recovering-vhdl-parser-0]

Because Sigasi's built-in VHDL compiler analyses your entire project. Even if there are errors, the parser recovers and works its way through the rest of your code. Sigasi Pro uses the resulting information to answer your questions, like:
* Where did I use this signal?
* How many bits are in this port?
* What is the value of this constant? 
* Which package contains the declaration for that data type?

Without Sigasi, all of these questions would take a lot of mental energy, scrolling, opening files and writing down notes on paper. 

## Nice, but not-so-unique features

* Place bookmarks in your code \[[movie](http://www.sigasi.com/screencast/bookmarks)\] or \[[documentation](http://help.eclipse.org/juno/index.jsp?topic=%2Forg.eclipse.platform.doc.user%2FgettingStarted%2Fqs-37-3e.htm)\]
* Open multiple editors side by side