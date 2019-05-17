---
title: "Common error from XSim with XPM library"
layout: page
pager: true
author: Bart Brosens
date: 2018-02-14
tags:
  - Vivado
  - xpm
comments: true
bannerad: true
---

When you use Vivado's XPM library, it might happen that you get one of the
following errors:
```
ERROR: [VRFC 10-149] 'vcomponents' is not compiled in library xpm
```
```
XSim: 'vcomponents' is not compiled in library xpm [VRFC 10-149]
```

The reason for this is that XSim by default doesn't know where to find the
pre-compiled vcomponents in the xpm library.
To resolve this issue, it's sufficient to add the location of the pre-compiled
ip to the *XSim.ini* file:
```
xpm=$RDI_DATADIR/xsim/ip/xpm
```

This only works for Vivado 2016.3 and newer as stated by
[this Xilinx Answer Record](https://www.xilinx.com/support/answers/69875.html).
