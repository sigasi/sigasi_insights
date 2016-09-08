---
title: "Eclipse Marker Manager"
layout: page 
pager: true
author: Philippe Faes
date: 2013-12-03
tags: 
  - eclipse
  - planeteclipse
comments: true
bannerad: true
---

Did you ever want to suppress warnings in Eclipse? For Java, there is the `@SuppressWarnings` directive, but what to do for other programming languages?

[Sigasi](http://www.sigasi.com) is planning a new Eclipse plugin, called the [Eclipse Marker Manager](http://www.markermanager.com), that helps you deal with Problem Markers (warnings and errors). 

You can **export your warnings to HTML** and you will be able to suppress warnings in _any_ programming language, using directives in comments:

```vhdl
architecture STR of testbench is
	signal data_out : unsigned(7 downto 0);
	signal data_in  : unsigned(7 downto 0);
	signal valid    : std_logic; -- @suppress "Unused"
	signal start    : std_logic;
	signal clk      : std_logic;
```

We're still in development for this, and that means your input can help shape the feature set of this product. Visit <http://www.markermanager.com> to discover more and get access to the development releases.


**Update:** Anyone can now install the Marker Manager plugin from the Eclipse Marketplace.
