---
title: "VHDL Emacs mode navigation using ctags are broken"
layout: page 
pager: true
author: philippe.faes (Sigasi)
date: 2011-05-13
tags: 
  - Emacs
  - VHDL
  - Screencast
---
In my series of how Sigasi is [better-emacs-vhdl-mode], we want to demonstrate that *Emacs VHDL mode* is becoming
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

<object width="640" height="360" id="wistia_363936" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">
<param name="movie" value="http://embed.wistia.com/flash/embed_player_v1.1.swf"/><param name="allowfullscreen" value="true"/><param name="allowscriptaccess" value="always"/><param name="wmode" value="opaque"/><param name="flashvars" value="videoUrl=http://embed.wistia.com/deliveries/822c279be5483700614be8d1c87c2166391c7f2c.bin&stillUrl=http://embed.wistia.com/deliveries/510cba593a3ffb15d212d0403bee18e424a194db.bin&unbufferedSeek=false&controlsVisibleOnLoad=false&autoPlay=false&endVideoBehavior=default&playButtonVisible=true&embedServiceURL=http://distillery.wistia.com/x&accountKey=wistia-production_3431&mediaID=wistia-production_363936&mediaDuration=182.9"/><embed src="http://embed.wistia.com/flash/embed_player_v1.1.swf" width="640" height="360" name="wistia_363936" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" wmode="opaque" flashvars="videoUrl=http://embed.wistia.com/deliveries/822c279be5483700614be8d1c87c2166391c7f2c.bin&stillUrl=http://embed.wistia.com/deliveries/510cba593a3ffb15d212d0403bee18e424a194db.bin&unbufferedSeek=false&controlsVisibleOnLoad=false&autoPlay=false&endVideoBehavior=default&playButtonVisible=true&embedServiceURL=http://distillery.wistia.com/x&accountKey=wistia-production_3431&mediaID=wistia-production_363936&mediaDuration=182.9"></embed></object><script src="http://embed.wistia.com/embeds/v.js" charset="ISO-8859-1"></script><script>if(![/Android/i](navigator.mimeTypes['application/x-shockwave-flash'] || navigator.userAgent.match "/Android/i")==null)Wistia.VideoEmbed(‘wistia\_363936’,640,360,{videoUrl:‘http://embed.wistia.com/deliveries/9fca01cf3fb3c05ab377101dcb988fd106023cc2.bin’,stillUrl:‘http://embed.wistia.com/deliveries/510cba593a3ffb15d212d0403bee18e424a194db.bin’,distilleryUrl:‘http://distillery.wistia.com/x’,accountKey:‘wistia-production\_3431’,mediaId:‘wistia-production\_363936’,mediaDuration:182.9})</script>


Should there be anything technically incorrect in this post, please feel
free to [send_email].