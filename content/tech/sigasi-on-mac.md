---
title: "Using Sigasi on your Mac"
layout: page 
pager: true
author: Hendrik Eeckhaut
date: 2013-01-01
lastmod: 2023-01-06
comments: true
tags:
  - Mac
---

[Update] **Please note that from version 5.0 onwards, [Sigasi Studio is no longer supported on MacOS](/faq/#macos).**

Unlike most EDA tools, Sigasi also has a version that runs on the **Mac OS X platform**. Here are some things that you should know before using the Mac version.

## Preferences and About Sigasi

The **"Preference"** and **"About Sigasi"** menu items are under the **"Sigasi"** menu, as is customary in a Mac application. The documentation always lists them as being under **"Window"** and **"Help"** respectively.

## Key bindings

Most of the key bindings are different on a Mac. **CTRL-S** becomes **⌘-S** and so on. All of our documentation lists the Windows / Linux default key bindings. Sometimes it is easy enough to guess the key binding on Mac, but sometimes you have to look it up – or change it to fit your needs.
Configure your key bindings at: **Sigasi > Preferences > General > Keys**

## Updating

There are some problems with certificates when you update your Sigasi application. You may have to perform the update action twice. Bad usability. We're sorry.

## Default editor

You can use Sigasi as your default editor for VHDL ([Mac OS X](/manual/opening#mac-os-x)).

## Lack of EDA tools

So you've got your Sigasi application installed on your Mac, but you don't have a simulator or synthesis tool. If all of us go and ask the EDA tool vendors to port their stuff to Mac, one day they might change their minds. For now, there are some tricks to fake it ({{< page "tricking-your-mac-believing-it-can-run-modelsim" >}}) until the EDA vendors make it.
