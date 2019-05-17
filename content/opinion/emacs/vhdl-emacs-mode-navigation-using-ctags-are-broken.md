---
title: "VHDL Emacs mode navigation using ctags are broken"
layout: page 
pager: true
author: Philippe Faes
date: 2011-05-13
tags: 
  - Emacs
  - VHDL
  - Screencast
comments: true
bannerad: true
---

In my series of how Sigasi is [index], we want to demonstrate that *Emacs VHDL mode* is becoming
outdated. I do this by comparing relevant and technical features of the
Emacs VHDL mode and Sigasi.

(I also realize that relevant and technical comparison will not be
enough to convince those who are deeply infatuated.)

##Today: finding a declaration

Finding a declaration is useful. Anybody who has access to this features
uses it all day long, every day. People who do not have access to this
feature do it manually. Imagine finding the declaration of a datatype or
a constant. Even in a modest project (say 20 files of 500 lines) it is
hard to keep track of all declarations in your head.

## Emacs VHDL mode
Emacs cleverly uses <em>ctags / etags</em>. This tool creates an index
of all declarations in a project. If you want to navigate to a
declaration, Emacs searches this index to find out in which file and on
which line something is declared. Ctags was a great innovation in its
day, but it is becoming obsolete. Ctags finds declarations based on
regular expressions (regex). It does not take proper scoping rules into
account. Problems arise when the same name gets used more than once, or
when your coding style happens to confuse the regexes.

## Sigasi

Any modern VHDL design entry tool should use a proper VHDL analyser (or:
parser). Only a full analysis of the source code can provide robust
navigation. I’ve posted a screencast
about [/screencasts/navigation] a while ago.

## Demoing Emacs
Here is a screencast that demonstrates what works and what does not work
with Emacs VHDL mode and etags.

<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="//fast.wistia.net/embed/iframe/2d21ae215a?videoFoam=true" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div>
<script src="//fast.wistia.net/assets/external/E-v1.js" async></script>

Should there be anything technically incorrect in this post, please feel
free to [send-email].
