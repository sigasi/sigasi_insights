---
title: Sigasi 2.31
layout: page
pager: true
---

Sigasi 2.31 brings 3 **new Quickfixes**, improved **export for graphics**, and more.

New Quick Fixes
---------------

...

### Add missing associciations in port and generic maps

...

![...](2.31/addMissingAssociations_a.png "...")

### Quickfix capitaliation of identifiers \[Premium Desktop\]


![...](2.31/quickFixCapitalization.png "...")

### Quickfix Aldec library 

![...](2.31/quickFixAldec.png "...")


Export all diagrams \[VHDL, Premium Desktop\]
---------------------------------------------

![...](2.31/exportAllSVG.png "...")

![...](2.31/blockDiagramInPDF.png "...")

Other new and noteworthy improvements
-------------------------------------

-   Reduce vertical space between ports in Block Diagram view
-   Don't close single quotes in Verilog
-   Increaese java dependency to minimum Java 7

Bugfixes
--------

- ticket 3260 : Missing connection in Block Diagram when intermediate signal is used
- ticket 3343 : Duplicate transitions in the FSM view
- ticket 3397 : Only first (of multiple) state machines is layouted
- ticket 3402 : Scoping bug: `min` function confused with `min` time unit
- ticket 3407 : keywords inside identifiers converted to lower case?
- ticket 3411 : Duplicate connections in Block Diagram View
- ticket 3416 : Incorrect error for "Type conversion with type alias"
- ticket 3425 : PDF export fails when sigasi is installed in location with a '+' symbol
- ticket 3426 : Export SVG should escape text (e.g. `<=`)
- ticket 3437 : Autoindent in Verilog must respect the tabs/spaces setting

Download/Update
---------------
If you have Sigasi 2 installed, you can [perform an update](http://www.sigasi.com/update_howto). You can also [download a fresh copy](http://www.sigasi.com/download-sigasi-20).

Enjoy and please come [talk to us on the forum](/forums/support-forum) !
