---
title: Sigasi 2.19
layout: page
pager: true
date: 2014-01-14
---

The Sigasi 2.19 release brings a quickfix for common common **missing
use clauses**, further improvements to the **external compiler**
integration and other improvements and bug fixes.

Quickfix to add common missing use clauses
------------------------------------------

in Sigasi 2.19 you can now use a quickfix to automatically add the
missing **library** and **use clause** for IEEE packages to your VHDL
design unit.

![Quickfix to add missing use clause for IEEE packages](/img/releasenotes/2.19/ieeelibraryquickfix.png "Quickfix to add missing use clause for IEEE packages")

See it in action: [/screencasts/add_ieee_quickfix]

Configure external compiler/simulator settings in the Sigasi preference pages
-----------------------------------------------------------------------------

We refactored the Sigasi preference pages to configure the external
compiler integration. You can now easily switch between different
compilers. We also added the option to add extra command line arguments.

![Easily switch between multiple external compilers](/img/releasenotes/2.19/externaltoolspreferences-8.png "Easily switch between multiple external compilers")

![Configure extra command line options](/img/releasenotes/2.19/externaltoolspreferences-9-3.png "Configure extra command line options")

Other new and noteworthy improvements
-------------------------------------

-   Verilog `INCLUDE` directives now hyperlink to the referred include
    file

![Link to Verilog include files](/img/releasenotes/2.19/veriloghyperlinks1.png "Link to Verilog include files")

-   We have updated the bundled Java Runtime Environment to Java 7
    Update 45. Note that this update is only bundled in the stand-alone
    download, it will not update through the Sigasi update mechanism.

-   In the VHDL perspective, you can now easily navigate to a different
    via the **Show In** menu in the context menu.

Bugfixes
--------

-   ticket 2577 : Report which file is currently being compiled in the progress view
-   ticket 2639 : Disabled rename refactoring in unmapped files
-   ticket 2651 : Scoping problem in generics map
-   ticket 2661 : Scoping bug when enum type is imported from package
-   ticket 2678 : Formatting array-of-vectors with initialisers
-   ticket 2680 : Formatting should respect multi-line comments
-   ticket 2681 : Scoping problem with length attribute
-   ticket 2683 : Formatting of aggregates
-   ticket 2689 : StackOverFlow error in scoper
-   ticket 2701 : Scoping bug for aggregate assignments of records
-   ticket 2722 : Set top level handler does not work for architecture text selection
-   ticket 2724 : NPE when scoping use clause with `=` operator
-   ticket 2730 : \[External compiler\] Deal with circular project dependencies
-   ticket 2739 : Missing vmap commands in incremental compile
-   ticket 2740 : Quartus build fails if user does not want to update Quartus DB.

Download/Update
---------------

If you have Sigasi 2 installed, you can {{< update_sigasi >}}. You can also {{< download_latest >}}.
