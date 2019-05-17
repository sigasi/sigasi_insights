---
title: Sigasi 2.7
layout: page
pager: true
date: 2012-09-07
---
The Sigasi 2.7 release brings you a way to inspect the value of generics
in your chip hierarchy. Sigasi 2.7 also includes several bugfixes including a fix for writing the library mapping configuration to disk and a fix for problems with updating
Sigasi in Eclipse.

Generics view
-------------

We added a generics view as a companion view to the hierarchy view. This
new view enables you to inspect the value of generics in your hierarchy.
Because of Sigasi’s recovering VHDL analyzer, this works even if your
design is still under construction or completely broken.

![Generics View](2.7/generics_view.png "Generics View")

You can open the generics view in the context menu of the hierarchy:
right click any instantiation and select **Show in Generics View**.

Note that our interpreter to calculate expressions in generic maps and
generate conditions does not handle *all expressions* at this
time). If the interpreter could
not calculate the value, you will see **unknown**.

### Bugfixes

-   ticket 2209 : write library mapping file to disk if files are
    deleted or unmapped
-   Added missing version number in one of Sigasi’s Eclipse dependencies
    (this resolves an update problem)
-   Resolved exception in *mark occurrences*
-   Several minor fixes for uploaded bugreports

Download/Update
---------------

If you have Sigasi 2 installed, you can [update_sigasi]. You can also [download_latest].
