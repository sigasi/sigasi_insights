---
title: Sigasi 2.31
layout: page
pager: true
---

Sigasi 2.31 brings 3 **new Quickfixes**, improved **export for graphics**, and more.

New Quick Fixes
---------------

Sigasi 2.31 brings three new Quickfixes that will make your life easier

### Add missing associations in port and generic maps

When you add new generics or ports to an entity declaration, you can now use the **Add missing (optional) generic/port association** quickfix to add missing generic or port mappings to an existing instantiation.

![Quickfix missing associations in generic and port maps](2.31/addMissingAssociations_a.png "Quickfix missing associations in generic and port maps")

### Quickfix capitalization of identifiers \[Premium Desktop\]

In [Sigasi 2.30](/updates/sigasi-2.30) we introduced a new style check to verify a consisten use of uppercase and lowercase letters in VHDL identifiers. This release brings a quickfix to automatically change the capitalization of an identifier to match its declaration. 

![Quickfix capitalization of identifiers](2.31/quickFixCapitalization.png "Quickfix capitalization of identifiers")

### Quickfix Aldec library 

![Quick Aldec library](2.31/quickFixAldec.png "Quick Aldec library")

If you have Aldec Riviera PRO installed and you use the `Aldec` library, you can now use the Aldec library quickfix to automatically add the Aldec library to your project


Export all diagrams \[VHDL, Premium Desktop\]
---------------------------------------------

We add a convenient Export Wizard to export all block or statemachine diagrams of your project.

![Export all Diagrams of a project](2.31/exportAllSVG.png "Export all diagrams of a project")

Sigasi 2.31 now also adds block diagrams to the PDF Documentation export.

![Block Diagram in Documentation PDF](2.31/blockDiagramInPDF.png "Block Diagram in Documentation PDF")

Other new and noteworthy improvements
-------------------------------------

-   Reduce vertical space between ports in Block Diagram view
-   Don't close single quotes in Verilog
-   Increase java dependency to minimum Java 7

Bugfixes
--------

- ticket 3260 : Missing connection in Block Diagram when intermediate signal is used
- ticket 3343 : Duplicate transitions in the FSM view
- ticket 3397 : Only first (of multiple) state machines is layouted
- ticket 3402 : Scoping bug: `min` function confused with `min` time unit
- ticket 3407 : keywords inside identifiers converted to lower case?
- ticket 3411 : Duplicate connections in Block Diagram View
- ticket 3416 : Incorrect error for "Type conversion with type alias"
- ticket 3425 : PDF export fails when sigasi is installed in location with a `+` symbol
- ticket 3426 : Export SVG should escape text (e.g. `<=`)
- ticket 3437 : Autoindent in Verilog must respect the tabs/spaces setting

Download/Update
---------------
If you have Sigasi 2 installed, you can [perform an update](http://www.sigasi.com/update_howto). You can also [download a fresh copy](http://www.sigasi.com/download-sigasi-20).

Enjoy and please come [talk to us on the forum](/forums/support-forum) !
