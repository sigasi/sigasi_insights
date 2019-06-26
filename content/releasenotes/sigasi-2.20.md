---
title: Sigasi 2.20
layout: page
pager: true
date: 2014-02-25
---

The Sigasi 2.20 release brings the first official **Sigasi Premium** release and numerous improvements to **Sigasi Pro**.

Sigasi Pro
----------

-   Sensitivity list validation: report incorrect sensitivity lists
	![Sensitivity list validation](/img/releasenotes/2.20/sensitivitylist.png "Sensitivity list validation")
-   Better validation of attribute specifications. We also added a
    quickfix for the attribute class.
    ![Attribute validation](/img/releasenotes/2.20/attributeclass.png "Attribute validation")
-   Crosslink constants, functions and procedures between package and
    package body. This enables navigation and the rename refactoring.
    ![Crosslink package and package body](/img/releasenotes/2.20/packagebody.png "Crosslink package and package body")
    

Sigasi Premium
--------------

In addition to the Sigasi Pro features this Sigasi Premium release
brings:

-   Net search (find loads and drivers at RTL code level) \[Update: this
    release now takes direct connections inside architectures into
    account\]

![Net Search](/img/releasenotes/2.20/netsearch.png "Net Search")

-   State Machine viewers (updates while you type) \[Update: This release
    now supports multiple FSM in one design file\]

![FSM View: multiple fsms in one file](/img/releasenotes/2.20/fsmmultiplefsms.png "FSM View: multiple fsms in one file")

-   Integration with Aldec ALINT linter tool

Other new and noteworthy improvements
-------------------------------------

-   Vivado encrypted files are now properly suppressed.
-   Numerous performance improvements

Bugfixes
--------

-   ticket 2754 : scoping problem with generic packages & record types
-   ticket 2757 : Scoping problem with record in range of aggregate
-   ticket 2761 : Scoping problem with record constants as function parameters

Download/Update
---------------

If you have Sigasi 2 installed, you can {{< update_sigasi >}}. You can also {{< download_latest >}}.
