---
title: "Add support for Sigasi VHDL libraries to Eclipse without installing all Sigasi plugins"
layout: page 
pager: true
author: Hendrik Eeckhaut
date: 2014-10-14
comments: true
bannerad: true
---


When you want to open Sigasi projects in an Eclipse that does not have the Sigasi plugins installed, you get an error message saying that the links to the STD and IEEE libraries can not be resolved.

You can install support for these libraries without installing all Sigasi plugins from the command line with following command:

```bash
./eclipse -clean -purgeHistory -application org.eclipse.equinox.p2.director -noSplash -repository http://download.sigasi.com/updates/eclipse-hdt2 -installIUs com.sigasi.hdt.readonlyfilesystem.feature.feature.group
```

You can also install from the UI:

* Update site <http://download.sigasi.com/updates/eclipse-hdt2>
* Uncheck the **"Group items by category"**
* Select the **"Sigasi Read Only file system"** feature.

(Since [/releasenotes/sigasi-2.25])