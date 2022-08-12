---
title: Sigasi 2.10
layout: page
pager: true
date: 2012-12-14
---

Sigasi 2.10 brings a new **State Machine navigation** feature, **automatic hierarchy refresh**, **avoiding full rebuilds** and more.

State Machine Navigation
------------------------

We introduce a new, power navigation feature for **finite state machines** (FSMs) in VHDL.
If you press **Ctrl** and **click** on the **name of a state**. You jump directly to the relevant *when* part of your *case statement*. There is
a screencast, [Navigation]({{< ref "/screencasts/navigate-fsm.md" >}}), to show how it works.

{{< figure alt="Open Matching When Clause (Ctrl+click)" src="/img/releasenotes/2.10/open_matching_when.png" title="Open Matching When Clause (Ctrl+click)" >}}

Automatic Hierarchy Refresh
---------------------------

The Hierarchy View now automatically refreshes itself when you save your
design files. You can turn the automatic refresh on and off by toggling
the refresh button.

![Hierarchy auto refresh](/img/releasenotes/2.10/auto_refresh.png "Hierarchy auto refresh")


Avoiding full rebuilds
----------------------

We have added extra intelligence to avoid full rebuilds. In two
important cases, the older versions of Sigasi triggered unnecessary full
rebuilds: (1) while the user is mapping VHDL [Libraries](/manual/libraries) or (2) if other EDA tools write and
delete binary files in the project directory. The new version makes an
extra effort to avoid full rebuilds, saving you time.

![Avoid Clean Builds if possible](/img/releasenotes/2.10/clean_build.png "Avoid Clean Builds if possible")

Other New and Noteworthy Improvements
-------------------------------------

-   Start `vsim` with `modelsim.ini` as parameter when it exits in the
    root folder of the project.
-   Code folding for blocks (ticket 2332)).
-   Avoid unnecessary *clean builds* when closing external files.
-   If the `vcom` compiler takes too long, you can terminate the `vcom`
    process by pressing the stop icon in the progress view.
-   Better CSV export when a project depends on other projects (ticket 2284)).

Bugfixes
--------

-   ticket 2323 : Fully qualified names in component instantiations
-   ticket 2342 : Corrected scoping of end labels
-   ticket 2321 : Errors in Custom VHDL Templates User
    Interface when using the **Anywhere** context.
-   ticket 2326 : Display
    spaces instead of `%20` in the search view
-   ticket 2335 : Error when triggering quick-fix if certain uses
    clauses are used.
-   ticket 2343 : Better recovery for incorrectly edited
    `.library_mapping.xml` files
-   ticket 2344 : Store the toggle state of the instantiations filter in
    the Hierarchy View when Sigasi is restarted.

Download/Update
---------------

If you have Sigasi 2 installed, you can {{< update_sigasi >}}. You can also {{< download_latest >}}.
