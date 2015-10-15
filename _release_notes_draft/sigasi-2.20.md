---
title: Sigasi 2.20
layout: page
pager: true
date: 2014-02-25
---

The Sigasi 2.20 release brings the first official "*Sigasi Premium*":/sigasi-premium release and numerous improvements to *Sigasi Pro*.

h2. Sigasi Pro

* Sensitivity list validation: report incorrect sensitivity lists
[img_assist|nid=2265|title=Sensitivity list validation|desc=|link=none|align=center|width=635|height=94]
* Better validation of attribute specifications. We also added a quickfix for the attribute class.
[img_assist|nid=2266|title=Attribute validation|desc=|link=none|align=center|width=638|height=132]
* Crosslink constants, functions and procedures between package and package body. This enables navigation and the rename refactoring.
[img_assist|nid=2267|title=Crosslink package and package body|desc=|link=none|align=center|width=604|height=96]

h2. Sigasi Premium

In addition to the Sigasi Pro features this Sigasi Premium release brings:

* Net search (find loads and drivers at RTL code level) [Update: this release now takes direct connections inside architectures into account]

[img_assist|nid=2264|title=Net Search|desc=|link=none|align=center|width=559|height=234]

* State Machine viewers (updates while you type) [Update: This release now supports multiple FSM in one design file]

[img_assist|nid=2263|title=FSM View: multiple fsms in one file|desc=|link=url|url=http://www.sigasi.com/screencast/vhdl-state-machine-diagram|align=center|width=640|height=382]

* Integration with Aldec ALINT linter tool

h2. Other new and noteworthy improvements

* Vivado encrypted files are now properly suppressed.
* Numerous performance improvements 

h2. Bugfixes

* ticket 2754 : "scoping problem with generic packages & record types":http://www.sigasi.com/node/2209
* ticket 2757 : Scoping problem with  record in range of aggregate
* ticket 2761 : "Scoping problem with record constants as function parameters":http://www.sigasi.com/forum/bug-multiple-records-function

h2. Download/Update

If you have Sigasi 2 installed, you can "perform an update":http://www.sigasi.com/update_howto.
You can also "download a fresh copy":http://www.sigasi.com/download-sigasi-20.

Enjoy and please come "talk to us on the forum":/forums/support-forum !