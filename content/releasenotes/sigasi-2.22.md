---
title: Sigasi 2.22
layout: page
pager: true
date: 2014-06-05
---

The Sigasi 2.22 release introduces the **Sigasi Talkback** feature, and
**quickfixes** for incomplete **sensitivity lists** and for **importing
Vivado libraries**. Plus numerous other improvements and bug fixes.

Sigasi Talkback
---------------

Sigasi now includes a Talkback service which can automatically collect
metadata about how Sigasi is used and send this metadata to Sigasi
through a secured connection. By enabling Talkback you help us improve
Sigasi. It allows us to **prioritize our roadmap**, collect
**performance statistics** and **reduce software errors** in an
unobtrusive way (i.e. no more bugreport popups).\
Talkback is **always disabled by default**. To enable Talkback, or to
disable it later on, click **Window \> Preferences \> Sigasi \>
Talkback** and select or deselect the checkbox "Enable Talkback".

You can find more detailed information about Talkback at
<https://www.sigasi.com/sigasi-talkback>

Quick Fix Incomplete Sensitivity List
-------------------------------------

Sigasi 2.22 introduces a quickfix to add missing signals to the
sensitivity list, so that it complies with synthesizability guidelines.

![Quick Fix Incomplete Sensitivity List](/img/releasenotes/2.22/quickfixsensitivitylist.png "Quick Fix Incomplete Sensitivity List")

Other new and noteworthy improvements
-------------------------------------

-   **Vivado** library quickfixes: Sigas can now automatically add
    Vivado libraries to your project with a library quickfix
    ![Quick Fix Vivado libraries](/img/releasenotes/2.22/vivadolibrary.png "Quick Fix Vivado libraries")
-   Block Diagram View improvements: the **order of ports** is now
    respected and **open ports** are visualized differently
-   The CSV-file exporter now also takes *elaboration dependencies* into
    account. When you have a package dependency, you only depend depend
    on this package at compile time. But when you are elaborating, you
    also depend on the package body (if there is one). This is only
    important if you have a design that is divided in multiple projects.
-   If you open a VHDL file in a generic Eclipse project, Sigasi always
    ask to add *VHDL support* to the project. In Sigasi 2.22 we added an
    option to this dialog to never ask this again.
    ![Never ask again to add VHDL support](/img/releasenotes/2.22/vhdlsupport.png "Never ask again to add VHDL support")
-   **Semantic highlighting for subprograms (Functions/Procedures)**.
    Note that you will not see visual changes with the default settings.
    You can however change the default style via **Preferences \>
    Sigasi \> VHDL \> Syntax Coloring**
    ![Semantic highlighting for subprograms](/img/releasenotes/2.22/subprogramsemantichighlighting2.png "Semantic highlighting for subprograms")
-   We revised the **Sigasi VHDL Tutorial** and made it easier to use.
    All steps and information is now explained *in* and *with* VHDL
    code. This makes the tutorial more *interactive* and *fun*.
-   We added a View that visualizes dependencies of the current VHDL
    file \[Premium\]. This view is automatically updated when you save
    your files.
    ![Visualize dependencies](/img/releasenotes/2.22/dependenciesview.png "Visualize dependencies")

Bugfixes
--------

-   ticket 2695 : We improved the robustness of the **formatter** when
    dealing with **incorrect/incomplete VHDL code**. As a consequence,
    autoformat will not break character literals anymore.
-   ticket 2837 :
    External compiler fails when there are too many files in the same
    library.
-   ticket 2849 : Always use the **Sigasi search page** for VHDL
    searches (instead of the default Xtext search page)
-   ticket 2873 : **Single file mode editor** should not complain about
    missing **std** and **ieee** libraries.

Download/Update
-----------------

If you have Sigasi 2 installed, you can {{< update_sigasi >}}. You can also {{< download_latest >}}.
