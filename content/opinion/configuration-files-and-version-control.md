---
title: "Configuration files and Version control"
layout: page 
pager: true
author: Philippe Faes
date: 2012-01-19
tags: 
  - EDA2.0
  - version control
comments: true
bannerad: true
---

If you are using a version control system (which you should!) for your hardware designs, you might occasionally run in to an unpleasant surprise. Settings files that stay the same may change anyway and if you change just one setting, the settings file may have changed completely.

## Stability 

Version control systems like CVS, Subversion (SVN), Git and Clearcase help you in tracking changes in files. While many project descriptor file formats are not meant to be modified by the user, they are text based. Hence, they should be ideally suited for a version control system. One would expect (and should be able to count on) these two *stability criteria*:

1. if nothing has changed (to the settings), the files should stay the same.
2. if (the settings) have changed just a little bit, the files should have minimal changes.


Sadly, in the EDA world this is usually not the case. This makes people hate either the EDA tools (usually IDEs), or version control systems, or both. Which is a shame.

## Settings files

Many EDA tools store project settings in either a Tcl or an XML based file format. In these file formats, the order of entries is usually not relevant. The way these files works is like this. When you start your EDA tool, the settings file is loaded. All settings are now stored in a data structure in memory. When you change settings, these changes are stored in that data structure. When a certain trigger occurs (you start synthesis, you exit the tool, ...) the settings file is generated from the data structure in memory. These generators know that the order of their output is not relevant for the tool's function, so they use data structures like unsorted "sets":http://en.wikipedia.org/wiki/Set_(computer_science) instead of sorted "lists":http://en.wikipedia.org/wiki/List_(computer_science). The result is that each time the data structure is saved (and thus generated from scratch), the output may be completely mangled. While it is still valid, and perhaps even identical to the original file, it is now a lot harder to detect if two files are equivalent. And if they are not equivalent, it is harder to find out what exactly has changed.

![Two equivalent setting files might look different](images/unexpected_differences.png)

Of course different tools use different mechanisms to write their setting files. Some tools only re-order settings if you have changed them. But, if you change a setting and then change it back to its original value, the resulting file will be changed. So you will have to look twice to check for equivalence. 

## The solution

For tool vendors, it is not hard to fix this. They just need to adapt the routine that writes the new setting files. Settings should be sorted in a predetermined order. This order can be arbitrary, as long as it is consistent across several executions. Sigasi has made this adjustment for the file that stores the `.library_mapping.xml` file (the file that stores which VHDL file gets compiled into which library). I hope this helps make your life a bit easier, and I hope that other tool vendors follow the example.