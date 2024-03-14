---
title: "Performance improvements"
layout: page 
pager: true
author: Lieven Lemiengre
date: 2010-10-15
tags: 
  - performance
comments: true
bannerad: true
_build:
  list: never
---

For the upcoming release of Sigasi's VHDL Eclipse plugin, we have reviewed the performance of our product for some very big VHDL projects.

Before I talk about the performance improvements, I will first explain a few things about the build system. When you open a VHDL project, our plugin starts compiling all VHDL files in your project in the background. When the full build is completed, the advanced features of Sigasi HDT are activated such as VHDL refactoring support, Hierarchy Views and semantic code highlighting. This full build is only needed when Sigasi HDT is started. If you edit and save a VHDL file, an incremental build is performed so that only the affected files will be recompiled. This is a lot faster.

The largest project we tested thus far contains about over 850 VHDL files, including a number of Altera libraries. The entire project consists of about half a million lines of VHDL code. When I opened this project with the current release, I noticed two things. First I had to [increase the amount of heap memory]({{< ref "faq#how-do-i-increase-the-heap-size-for-eclipse" >}}) to 1.3 GB to fully build the project. Secondly I found that it took a lot of time to build the entire project and the incremental builds were not as smooth as they should be.

With this large VHDL project as my benchmark, I spent a week and a half optimizing the built-in VHDL parser. As a result, the October release will be three times faster than the current version, and it takes about 20% less memory.

|                   | Sigasi HDT September 2010 | Sigasi HDT October 2010 |
| ----------------- | ------------------------- | ----------------------- |
| Full build        | 60-120 seconds            | 20-30 seconds           |
| Incremental build | 0.25-2.5 seconds          | 0.1-0.2 seconds         |
| Memory usage      | ~1 GB                     | ~800 MB</td>            |

(tested on a Core i5, 2.6 Ghz)

The next version will be released sometime next week. If you are experiencing performance problems with your project do not hesitate to contact us.
