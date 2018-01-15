---
title: "Using the util package from Modelsim with VHDL 2008"
layout: page
pager: true
author: Bart Brosens
date: 2018-01-15
tags:
  - VHDL
  - VHDL-2008
  - modelsim
comments: true
bannerad: true
---

The util package that comes with Modelsim includes an enumerated type `forcetype` that is defined as:
```vhdl
type forcetype is (default, deposit, drive, freeze);
```

In VHDL 2008, *default* is a new keyword.
This causes problems in VHDL 2008 projects that use the util package.
Still Sigasi Studio allows to use the `modelsim_lib.util` package in VHDL 2008 projects.

Since the code in `modelsim_lib` is VHDL 93 code, `modelsim_lib` should be compiled in VHDL 93 mode.
You can do so by right-clicking the `modelsim_lib` folder in the *Common Libraries* of your project.
Then select **Properties > VHDL Version** and set the VHDL Version of the `modelsim_lib` folder to **VHDL 1993**.

For VHDL 2008 compatibility, package util provides the alias `mti_default` that can be used in VHDL 2008 code instead of `default`.
```vhdl
type forcetype is (default, deposit, drive, freeze);
alias mti_default is default [return forcetype];
```

