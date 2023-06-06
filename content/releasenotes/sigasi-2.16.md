---
title: Sigasi 2.16
layout: page
pager: true
date: 2013-08-27
---

The Sigasi 2.16 release brings several enhancements and bug fixes.

Constants in the Generics view
------------------------------

The [Hierarchy View](/manual/views#hierarchy-view) now also shows the actual values of constants in the selected hierarchy node.

![Constants in the Generics View](/img/releasenotes/2.16/constantsingenericsview.png "Constants in the Generics View")

Warn about unused ports/generics
--------------------------------

Sigasi will now put a warning marker on unused ports and generics of an
entity.
![Unused port warning](/img/releasenotes/2.16/unusedport.png "Unused port warning")

You can change the severity (ignore/info/warning/error) of unused ports
and generics via **Preferences &gt; Sigasi &gt; VHDL &gt;
Errors/Warnings**

Other new and noteworthy improvements
-------------------------------------

-   Better declare signal quickfix for vector types
	![declare signal quickfix](/img/releasenotes/2.16/declarenewvectorsignal.png "declare signal quickfix")
-   Eclipse Kepler support
-   Added quickfix for mapping Xilinx' `unimacro` library
-   Only show the "Open Declaration" action in the context menu if the
    action is available
-   Basic support for unconstrained records & record subtypes with
    record constrains \[VHDL 2008\]
-   Initial support for multiple simultaneous quick fixes
-   To explicitly state that you want to use the Sigasi starter edition,
    you can now enter **none** as license in the license preference page

Bugfixes
--------

-   ticket 2488 : Opening Eclipse project from the command line uses the
    folder name instead of project name
-   ticket 2489 : Missing generic in Hierarchy View (default value)
-   ticket 2619 : Scoping problem with casting in when clause
-   ticket 2623 : Expect no hyperlinks in whitespace
-   ticket 2579 : Vertical align breaks down after "others" clause.
-   ticket 2620 : Support for allocator expressions
-   ticket 2621 : Scoping problems with configurations (library and
    designunit with same name)

Download/Update
---------------


If you have Sigasi 2 installed, you can {{< update_sigasi >}}. You can also {{< download_latest >}}.
