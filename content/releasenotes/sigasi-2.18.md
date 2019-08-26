---
title: Sigasi 2.18
layout: page
pager: true
date: 2013-11-15
---

The Sigasi 2.18 release brings further improvements to the external
compiler integration and other improvements and bug fixes.

External Compiler improvements
------------------------------

As discussed in a recent blog post, [Call for feedback: A new way to compile Sigasi/Eclipse project dependencies with an External Compiler](/opinion/call-feedback-new-way-compile-sigasieclipse-project-dependencies-external-compiler),
we have improved the compilation of **project dependencies** with an
external compiler. This significantly improves the external
**compilation time** and improves the accuracy of **incremental
(external) compiles**.

If you are using Mentor’s `vsim` in Sigasi, the simulation is now
started with your **project’s folder** as **working directory**. This
makes it a lot easier to save and load `vsim` scripts.

We also worked on the stability of external compilation of **Verilog
files**. Thanks for all the feedback and bug reports.

New license preference page
---------------------------

The license preference page is now more intuitive. Your license key is
now stored but always store it in a real file, and in preference page,
you can easily change the file location (or floating license server
path). You can also edit the contents of your license file via the
**Edit License File** button.

![New License Preference Page](/img/releasenotes/2.18/licensepreferencepagescreenshot.png "New License Preference Page")

Clicking **Apply** or **OK** will trigger a reload of your license.

Your current license settings will be automatically updated.

Other new and noteworthy improvements
-------------------------------------

-   We now have a **sort button** to the **Generics View**, so that
    generics and constants are sorted alphabetically. This makes it
    easier to find your generic (or constant) in a long list. If you
    don’t sort the generics and constants alphabetically, they are
    listed in the order of declaration of the file.
    ![Sort button in the Generics View](/img/releasenotes/2.18/genericsviewsort.png "Sort button in the Generics View")
-   Show the label of entity instantiations in the ouline view (ticket
    2713)

Bugfixes
--------

-   ticket 2646 : Avoid infinite recursive evaluation in hierarchy.
-   ticket 2706 : Make sure the logging plugin is installed in the
    Eclipse plugin installation.

Download/Update
---------------

If you have Sigasi 2 installed, you can {{< update_sigasi >}}. You can also {{< download_latest >}}.
