---
title: Sigasi 2.9
layout: page
pager: true
date: 2012-11-13
---

Sigasi 2.9 brings a **new scoping framework** and a **run button** for
vsim simulations. Sigasi 2.9 also brings multiple other improvements and
bug fixes.

New scoping framework
---------------------

Sigasi 2.9 contains a brand **new scoping framework**. This scoping
framework is **core functionality** of Sigasi that links identifiers
with the correct declaration. In the older versions, we had some
problems with *“overloadable” names* and *record element names*. This
made it very hard to fix certain bugs.

As you know, any given declaration has a certain *scope*; it is visible
in certain places of your code and not visible in other places. The
scoping framework is responsible for figuring out where each declaration
can be used. That seems easy, and in most cases (signals, constants,
data types) it is. But there are some interesting corner cases that were
not handled correctly in the older versions of Sigasi Pro. Some names
can be reused many times in the same scope. You can declare several
functions, procedures and enumeration literals with the same name in the
same scoping region. This complicates things down the line. Also, for
names of record elements and names of function parameters, the exact
meaning of these names depends on where you use them.

The user visible features that result from this new scoping framework
are: better rename, better occurrence highlighting, better autocomplete,
better support for protected types, …

Vsim run button
---------------

If vcom integration is enabled, you can now also start a **vsim
simulation** from Sigasi. You can start a simulation by first selecting
your top level in the hierarchy view . Next click the Simulate button in
the hierarchy view to launch the vsim gui with an elaborated design
ready for simulation.

![Launch vsim from Sigasi’s Hierarchy View](/img/releasenotes/2.9/vsim_window_a.png "Launch vsim from Sigasi’s Hierarchy View")

This makes it really easy to start a quick simulation for an arbitrary
testbench.

Other new and noteworthy improvements
-------------------------------------

-   The *top level selection selection box* in the hierarchy view is
    replaced with a button that opens a **top level selection dialog**.
    This new dialog allows to type a text search pattern to quickly find
    the top level you are looking for (e.g. `*testbench`)
    ![New select top level dialog](/img/releasenotes/2.9/settopleveldialog_a.png "New select top level dialog")
-   We changed the default color of semantic highlighting for ports.
    This makes it really easy to distinguish between ports and signals
    in your code.
    ![Different semantic coloring for ports and signals](/img/releasenotes/2.9/port_color_a.png "Different semantic coloring for ports and signals")
-   Better code folding:
    -   protected types
    -   elsif statements
    -   case statement alternatives
        ![Folding in case statements](/img/releasenotes/2.9/case_folding_a.png "Folding in case statements")
-   You can now also trigger autocomplete of a component declaration
    when then are a errors in the matching entity declaration (e.g.
    missing library clauses)
-   You can now use [Eclipse Variables](http://help.eclipse.org/indigo/topic/org.eclipse.platform.doc.user/concepts/concepts-exttools.htm)
    in the external compiler preference field.
    ![Eclipse variables in external compiler path](/img/releasenotes/2.9/variables_in_vcom_path_a.png "Eclipse variables in external compiler path")
-   Always show “Map folder to library with the same name” action, even
    if that library is already in use.
-   Improved **formatting of invalid code**.

### Bugfixes

-   ticket 2239 : Error markers not correctly updated after changes in other files
-   ticket 2279 : Errors in VHDL files after non-VHDL files are touched in project
-   ticket 1650 : Character literals as enum literals are case sensitive
-   ticket 2255 : Formatting problem with concurrent statements
-   ticket 2267 : Unexpected error message on forward reference to label
-   ticket 2272 : Line number of search references is one off
-   ticket 2280 : *Set as top level* action should only be shown for valid selections
-   ticket 2305 : Release floating license when Sigasi is restarted with **File > Restart**
-   ticket 1196 : Missing error marker when generic names are used in port list.
-   ticket 2186: Support incomplete type declaration

Download/Update
---------------

If you have Sigasi 2 installed, you can {{< update_sigasi >}}. You can also {{< download_latest >}}.
