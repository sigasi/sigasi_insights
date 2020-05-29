---
title: "Duplicate std_logic_textio packages in VHDL 2008 projects"
layout: page 
pager: true
author: Hendrik Eeckhaut
date: 2013-07-22
comments: true
bannerad: true
---


Since [Sigasi 2.15](/releasenotes/sigasi-2.15), Sigasi detects **duplicate (conflicting) design units**. Duplicate design units are a bad idea because the compilation order determines which unit will eventually be used. This can lead to a lot of confusion and frustrating debugging sessions.

It turns out we also made this mistake. In **VHDL 2008 mode**, older versions of Sigasi (pre 2.15) included two versions of `std_logic_textio:` the standard **IEEE** package and a package that was previously distributed by **Synopsys**. Obviously, you only need one version of this package.

Because we do not run the linting checks on the STD and IEEE libraries, you will not see duplicate design unit errors on this package. But nevertheless it can be confusing if you open a declaration or hover over an identifier from this package.

**There are two ways to correct this problem depending on how you set up your project.**

## Default Common Libraries setup

If the `Common Libraries` folder in your project only contains the standard folders (`STD`, `IEEE` and `IEEE Synopsys`) you can just reset the Common Libraries folder: **Right click** the `Common Libraries` folder and select **Library Mapping > Reset Common Libraries**.

## Customized Common Libraries setup

If you have added extra folders to the `Common Libraries`, you may not want to reset the Common Libraries. (*You will loose your changes!*) Instead, you can edit the project file by hand:

* Open the `.project` file of your project (**Ctrl+Shift+R** and type `.project`)
* Replace:
```
<locationURI>sigasiresource:/vhdl/93/IEEE%20Synopsys</locationURI>
```
  with:
```
<locationURI>sigasiresource:/vhdl/2008/IEEE%20Synopsys</locationURI>
```
