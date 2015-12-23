---
title: "Scripting Sigasi project creation"
layout: page 
pager: true
author: heeckhau (Sigasi)
date: 2013-10-17
tags: 
  - hdt-2.0
  - project
  - project management
  - Python
  - Sigasi
---

When you start using Sigasi, the first thing you have to do is [/manual/projectsetup]. This consists of two steps: _(1) selecting the VHDL files that you want in your project_ and _(2) configuring in which VHDL library these files must be mapped_. In most cases you already have this information in one form or another. For example in a makefile, in a Tcl simulation script, or in the project descriptor file of a third-party EDA tool.

Because there are so many different formats to describe this information, we cannot offer one universal solution. But to make the import process easier, we have developed [Python scripts](https://github.com/sigasi/SigasiProjectCreator) that make it easy for you to convert your own project description into a Sigasi project description.

The [`convertCsvFileToLinks.py` script](https://github.com/sigasi/SigasiProjectCreator/blob/master/convertCsvFileToLinks.py) converts a CSV file ([example file](https://github.com/sigasi/SigasiProjectCreator/blob/master/test-files/compilation_order.csv)) into a Sigasi Project. This scripts adds a link to each file in the list and maps it to the corresponding library. 

All scripts are open sourced under a [BSD license](https://github.com/sigasi/SigasiProjectCreator/blob/master/LICENSE). So you can freely customize them to your specific needs. Feel free to suggest or contribute improvements.

Of course we can help you write your scripts. [contact-us] for more info.

**P.S.**: You can also [/manual/opening#files-command-line] with a script. Simply start Sigasi with parameter `-p <path to your project folder>`