---
title: "Choose your version of the Vivado unisim.VCOMPONENTS package"
layout: page
pager: true
author: Bart Brosens
date: 2018-02-06
tags:
  - Sigasi Studio
  - Vivado
comments: true
bannerad: true
---

A project targeted for Xilinx components often uses component primitives.
Any VHDL file in which these primitives are used should include the following
declaration:
```vhdl
library unisim;
use unisim.VCOMPONENTS.all;
```

If the *unisim* library is not known yet in your Sigasi Studio project, a
[Quick Fix](/manual/linting#quick-fixes) allows to easily configure
the *unisim* library for either ISE or Vivado.
To use this Quick Fix, hover over the declaration of the *unisim* library
or press *Ctrl+1* to open the pop-up where you can choose the Quick Fix.
After applying the Quick Fix, the *Common Libraries* of your project will
contain a *unisim* library and the primitives will be known in Sigasi Studio.

Since [release 3.7](/releasenotes/sigasi-3.07), Sigasi Studio uses an up-to-date
Vivado library and no longer points to the legacy ISE compatible version when
choosing the Vivado variant of the Quick Fix.
However, there are multiple variants of the *VComponents* (*VCOMP*) library.
If you look into the *unisim* folder of your *Common Libraries*, you'll see the
following files:

* unisim_VCOMP.vhd (7-series and newer primitives)
* retarget_VCOMP.vhd (support for old architecture primitives that are
retargeted to their equivalent)
* unisim_retarget_VCOMP.vhd (combines both of the previous files)

In Sigasi Studio 3.7 the choice was made to only add the 7-series and newer
primitives in the *unisim_VCOMP.vhd* file to the *unisim* library.
As a consequence, in projects with code containing old architecture primitives,
Sigasi Studio will not recognize the older primitives by default.

If you have a project containing these old primitives, you can easily change
the contents of the *unisim* library by opening the
**Common Libraries > unisim** folder and right-clicking the file you want to
add to the *unisim* library.
Then select **Set Library > unisim** to add the file to, or select
**Exclude from build** to remove the file from the *unisim* library.

The main reason that by default only the file containing the new primitives is
added to the *unisim* library, is that this way there will be no autocomplete
for old primitives when writing new code.
We considered that to be the best way for Sigasi Studio to help users write
code targeting new devices.
At the same time, if you are dealing with code containing old primitives,
you will see errors on these primitives and can manually add the required
file to the *unisim* library to resolve these errors.

What do you think: did we make the right choice on this?
Or should both old and new primitives be available by default?
Leave your comments below or contact our [support](https://www.sigasi.com/support/) department.
