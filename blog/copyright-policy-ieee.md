---
title: "Copyright policy of IEEE"
layout: page 
pager: true
author: philippe.faes (Sigasi)
date: 2009-11-12
tags: 
  - IEEE
  - VHDL
---
Of course our users want to have access to all standard libraries. The most important libraries are `std.standard` and the `IEEE` libraries, including `std_logic_1164` and `std_numeric`. A more recent standard is IEEE 1076.2-1996. This standard defines two packages: `math_real` and `math_complex`. IEEE does not allow the distribution of the source code of these packages. In order to serve our users, we have packaged the best legal alternative: a preliminary draft of these packages.

Recently, we have noticed some problems with this draft. A user informed of an inconsistency between the draft and the official standard. We knew this was a problem. We had planned to incorporate an official version of the standard in our tool, but it was not on our top-3 priorities. However, when a user posts a problem like this, we assign extra priority points. 

So I purchased the official source code of the standard from the IEEE. This standard is protected by copyright law, but I'd like to republish the copyright header of the file, under the principle of <em>fair use</em>:
```
-- Copyright 1996 by IEEE. All rights reserved. 
-- 
-- This source file is an essential part of IEEE Std 1076.2-1996, IEEE Standard 
-- VHDL Mathematical Packages. This source file may not be copied, sold, or 
-- included with software that is sold without written permission from the IEEE 
-- Standards Department. This source file may be used to implement this standard 
-- and may be distributed in compiled form in any manner so long as the 
-- compiled form does not allow direct decompilation of the original source file. 
-- This source file may be copied for individual use between licensed users. 
-- This source file is provided on an AS IS basis. The IEEE disclaims ANY 
-- WARRANTY EXPRESS OR IMPLIED INCLUDING ANY WARRANTY OF MERCHANTABILITY 
-- AND FITNESS FOR USE FOR A PARTICULAR PURPOSE. The user of the source 
-- file shall indemnify and hold IEEE harmless from any damages or liability 
-- arising out of the use thereof. 
```

Allow me to paraphrase this:

* Don't copy this file unless you pay us.</li>
* You can use this file to implement the standard.</li>
* But make sure your customers cannot do not see the original file.</li>
* Make sure nobody sues us.</li>

I can live with item 1, 2 and 4. IEEE invested money in creating this standard, so they want to safeguard their intellectual property rights. They also want to make sure nobody sues them. I understand. But, unlike their other VHDL standard libraries, they prohibit EDA vendors from redistributing the source code (item 3).  That's hard to understand. Especially since the novelty of this particular package is questionable. Because of this copyright restriction, EDA vendors provide only a compiled version of the packages. As a result our users have to guess what's in the standard, because they will not buy a copy from IEEE for $86 plus taxes.

I remember one of my first programming labs in college. The assignment was to provide a set of header files and functions for manipulating complex numbers, including conversion from polar to Cartesian coordinates and vice versa. Basically the same thing I find in IEEE standard for mathematical packages. I would not argue about the relevance of the standard. It is very useful that all VHDL designers can use the same, standardized packages. However, the copyright restrictions seem too far-fetched.

The official version of `math_real.vhd` contains 593 lines of code. Only 53 of those lines consist of actual VHDL code (i.e. not comments). Similar ratios apply for the math_complex package, adding up to about 150 declarations in total, all of them referring to trivial and well-known mathematical values and definitions (`π`,`2π`,`π/2` and `arctan`, `sin`, `arctanh`). Again: it's useful that this is standardized, but why do we need to keep the source code of these packages a secret from the general public? We don't do this for all the ANSI-C standard libraries, do we?

I'm sure I'm missing an important point here. Please help me out in the comments.

## Update:
 The IEEE has kindly granted us permission to ship the IEEE VHDL packages with our products. I'm still confused about why they have this copyright clause if they grant permission to redistribute to anybody who asks nicely. But hey, problem solved: you get the IEEE math packages in the Sigasi 2.x releases!

<!-- VRGT8CJXEPGK
XUFVPTR2Y2E2 -->