---
title: Sigasi 2.0
layout: page
pager: true
date: 2011-10-03
---

This release marks the the start of Sigasi 2.0 Pro. You will be able to purchase licenses so that you can use all the features of Sigasi 2.0 for large projects too. The license mechanism is based on the well known FlexLM mechanism. Existing customers can [upgrade their current license free of charge](/faq/free-20-upgrade).

For the Sigasi Pro release we worked hard on handling **large VHDL projects**. We optimized both memory use and speed through better algorithms, better caching and parallelized processing of VHDL files. Sigasi now delivers enhanced interactive navigation and editing for all projects.

Other improvements
------------------

-   Structured select (Alt-Shift-Up/Alt-Shift-Down)
    ![Structured select (Alt-Shift-Up/Alt-Shift-Down)](2.0/select.gif "Structured select (Alt-Shift-Up/Alt-Shift-Down)")
-   Annotate files in project explorer with problems markers
    ![Problem markers in project explorer](2.0/problemmarkersinexplorer.png "Problem markers in project explorer")
-   Code folding for packages
-   Improved feedback when Sigasi Starter edition falls back to Baseline Mode
-   Avoid clean build after library remapping
-   Show more info when the user double clicks on the [codometer](http://www.sigasi.com/faq/what-small-project)
-   Start RCP with 1.4 gigabyte [heap size](/faq/how-do-i-increase-heap-size-eclipse) by default

Bug fixes
---------

-   ticket:1341 : Respect use clauses in declarative parts
-   ticket:1653 : Use clause of package body is ignored
-   ticket:1689 : Do not show use clauses in outline
-   ticket:1692 : Add toggle block selection mode to edit menu
-   ticket:1693 : Show popup when users reaches 200 statements limit in Starter edition
-   ticket:1696 : References remain unresolved after restoring Common Libraries
-   ticket:1707 : Library mapping file should have stable output (sorted entries)

Download/Update
---------------

If you have Sigasi 2 installed, you can [update_sigasi]. You can also [download_latest].
