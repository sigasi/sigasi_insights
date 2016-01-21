---
title: "Five reasons why we built EDA tools on Eclipse"
layout: page 
pager: true
author: Philippe Faes
date: 2011-12-13
tags: 
  - eclipse
comments: true
---
Somebody asked me why we had build our Sigasi VHDL plugin on top of Eclipse. There are several reasons. Here are five of them.

## 1. Familiar environment for software developers

If you have been developing some serious software, you're probably used to the look and feel of an Integrated Development Environment (IDE). Even the embedded software market is shifting towards Eclipse. Both [Altera](http://www.altera.com/devices/processor/nios2/tools/ni2-development_tools.html) and [Xilinx](http://www.xilinx.com/tools/platform.htm) have an embedded software kit based on Eclipse.

## 2. Translation for the basic infrastructure is provided

Hardly any EDA software comes in languages other than English. But when you are using Sigasi, most of the text on your screen is provided by Eclipse, not by Sigasi. As a result, you can have 95% of the tool translated, just like that. And maybe we'll provide Japanese translations some day. \[[/tech/installing-translations-eclipse]\]

## 3. Revision systems provided

All popular version control systems have an Eclipse plugin. This means that our customers can use their favorite [SCM](http://en.wikipedia.org/wiki/Source_Code_Management) with Sigasi, without any additional engineering effort on our part. We prefer building new stuff. Not rehashing yet another GUI interface for [Subversion](http://subversion.tigris.org)

## 4. Update mechanism

Keeping software up to date can be a real pain. Eclipse makes this pretty easy. \[[update_sigasi].
\]. 

## 5. Feature rich editor

Can we have [key combination](/manual/keyshortcuts.html) for duplicating a line of code? And for moving a line of code up or down? How about [search and replace](http://help.eclipse.org/indigo/index.jsp?topic=%2Forg.eclipse.jdt.doc.user%2Freference%2Fviews%2Fshar‰‰ed%2Fref-findreplace.htm), based on regular expressions? And [/screencasts/block_selection_mode]? Did I mention we want [/manual/config#line numbers] and [/screencasts/side_by_side_diff]? And [/faq#does-sigasi-support-multi-byte-characters]?

Yes. You can have all of that and much more. 

Imagine how much engineering effort it would have taken to build all of these features from scratch. Because we have built our tool on the solid Eclipse foundation, we can offer our customers more value for money. 
