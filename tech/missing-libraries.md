---
title: "Missing libraries"
layout: page 
pager: true
author: heeckhau (Sigasi)
date: 2011-11-30
tags: 
  - hdt-2.0
---

When you import a new project in Sigasi, you often get a lot of problem markers because of missing VHDL libraries. By default all project files are mapped to "library [**work**](http://www.sigasi.com/content/work-not-vhdl-library)". VHDL libraries are defined outside of your VHDL files. So Sigasi can not configure your libraries automatically. We have some good ideas for heuristics to guess the correct library mapping. But for now, you have to configure the library mapping yourself.

![Auch, 75753 errors in GRlib](images/1_gaisler_work_problems.png)

But if you have many thousands of problem markers because of missing libraries. _How do you easily find out which libraries are missing?_ The easiest way is to filter the "Problems View":

1. Click the menu icon in the problems view and select *Configure Contents* 
![Problems View menu](images/2_problems_menu.png)
2. In the Configure Contents dialog:
	1. _Uncheck_ "Show all items"
	2. Add a *New* Configuration and *Rename* it to "Missing Libraries"
	3. (Optionally) Click "On any element in same project" if you only want to see problems of the currently selected project.
	4. In the text field of the Description type "Library"
	5. Click OK 

![Configure Problem View Contents](images/3_configure_problem_contents.png)

You will see a lot of duplicates, but once you start [mapping the libraries correctly](http://www.sigasi.com/documentation/2.1.1/sigasi.html#Modifyingthelibraryconfiguration), this number will quickly decrease.

![Missing library markers](images/4_missing_libraries.png)

Hendrik.