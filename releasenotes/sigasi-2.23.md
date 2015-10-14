---
title: Sigasi 2.23
layout: page
pager: true
date: 2014-07-29
---

_The Sigasi 2.23 release introduces basic *datatype checking* at type-time for VHDL; improved *Verilog* support; and much more._

h2. Basic datatype checking at type-time for VHDL

Sigasi now reports datatype violations while you type (at type-time). You don't have to wait for your simulator to report datatype errors. Whenever you write a wrong datatype, you see an error message within less than a second! ("Screencast":http://www.sigasi.com/content/datatype-checks-while-you-type)

[img_assist|nid=2377|title=Type time type validation|desc=|link=none|align=center|width=598|height=107]

h2. Improved Verilog support

We are accelerating our development of the Verilog version:
* Open Module Declaration by CTRL+clicking on instantiation
* Hover on module name to see the inline documentation

[img_assist|nid=2378|title=Improved Verilog support in Sigasi 2.23|desc=|link=none|align=center|width=562|height=160]

h2. Other new and noteworthy improvements

* Improved support for *external VHDL files* (i.e. non Sigasi Project VHDL files). We now report all syntax errors.
* Linting *check for read/write access* of port, signal, generic and constant declarations [Premium]
[img_assist|nid=2379|title=Check read/write access for Signals/Ports/Generics/Constants|desc=|link=none|align=center|width=569|height=94]
* Updated the JAVA Virtual Machine in the stand-alone to version 8. Note that this is not updated with the Sigasi update mechanism; you need a fresh download if you want this improvement.
* Support for <a href="https://projects.eclipse.org/releases/luna">Eclipe Luna</a>
* Added *VHDL Project Import Wizard*
[img_assist|nid=2381|title=VHDL project Import Wizard|desc=|link=none|align=center|width=625|height=524]
* Better *error reporting in unknown instantiations*: only mark the unknown component name as a *single error*
[img_assist|nid=2382|title=Only one error marker in unknown component instantiations|desc=|link=none|align=center|width=540|height=186]
* Added *tutorial* project for *Sigasi Premium*
* Added preference page to *configure Task Tags* in comments (TODO, FIXME)
[img_assist|nid=2383|title=Configurable Task Tags in comments|desc=|link=node|align=center|width=640|height=382]
* Added Quickfix for XilinxProcessorIP Libraries in xilinx ISE
* *Export* Block Diagram and State Machine graphics to PNG images [Premium]
[img_assist|nid=2384|title=Export State Machine View to image file|desc=|link=none|align=center|width=413|height=47]
* *Dead-code linting* in if statements [Premium]
[img_assist|nid=2385|title=Detect dead code blocks in if statements|desc=|link=none|align=center|width=452|height=149]
* Update Xtext dependency to 2.6.1

h2. Bugfixes

* ticket 2883 : Vmap should never make changes in wrong modelsim.ini file
* ticket 2893 : Case statement analysis should not fail on if expression inside parenthesis
* <a href="http://www.sigasi.com/forum/bug-resolving-overloaded-functions">ticket 2798</a> : Scoping bug in record field in result of overloaded function call
* ticket 2848 : scoping problem in when/else assignment
* ticket 2921 : Loading a FlexNet license should never block the UI

h2. Download/Update

If you have Sigasi 2 installed, you can "perform an update":http://www.sigasi.com/update_howto.
You can also "download a fresh copy":http://www.sigasi.com/download-sigasi-20.

Enjoy and please come "talk to us on the forum":/forums/support-forum !