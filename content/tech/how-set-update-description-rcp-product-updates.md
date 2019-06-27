---
title: "How to set the update description of RCP product updates"
layout: page 
pager: true
author: Hendrik Eeckhaut
date: 2011-11-08
tags: 
  - eclipse
  - planeteclipse
comments: true
bannerad: true
---


Thanks to Ian Bull on [Eclipse Con Europe](http://www.eclipsecon.org) last week, I finally found out how to set the update description for an RCP product update. This was a tiny annoyance that has been itching since the first release of Sigasi. For the Eclipse plugin version of Sigasi, this never was a problem. The feature description is shown in the update dialog. But for the standalone version (RCP), there was always an empty description...

So on my way home, I delved into it again and finally solved this issue.

![Product description in update dialog](/img/tech/update_dialog.png)

Ian told the original plan was to add a field to the Product Configuration Editor, but nobody ever came around to implement it. But the good news is that you can easily set the description via a  [p2 advice file](http://wiki.eclipse.org/Equinox/p2/Customizing_Metadata). This file (`p2.inf`) can be added next to the product definition and is used to tweak p2 operations. Note that if you build with [Maven Tycho](http://www.eclipse.org/tycho), this `p2.inf` needs to be prefixed with the product configuration file name. In our case the product configuration file is `sigasi.product`, so the p2 advice file must be named `sigasi.p2.inf` ([more details](http://wiki.eclipse.org/Tycho/Packaging_Types#eclipse-repository)).

To set the product update description add following lines to your p2 advise file:

```properties
properties.0.name = org.eclipse.equinox.p2.description
properties.0.value = Sigasi Standalone version update\nVisit https://www.sigasi.com/sigasi-updates for more information.
```

That looks a lot better.
