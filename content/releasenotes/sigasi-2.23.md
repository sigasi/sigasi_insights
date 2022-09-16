---
title: Sigasi 2.23
layout: page
pager: true
date: 2014-07-29
---

*The Sigasi 2.23 release introduces basic *datatype checking* at type-time for VHDL; improved *Verilog* support; and much more.*

## Basic datatype checking at type-time for VHDL

Sigasi now reports datatype violations while you type (at type-time). You don't have to wait for your simulator to report datatype errors. Whenever you write a wrong datatype, you see an error message within less than a second! Screencast : [Datatype checks while you type](/screencasts/datatype-checks-while-you-type)

![Type time type validation](/img/releasenotes/2.23/better-scoping.png "Type time type validation")

## Improved Verilog support

We are accelerating our development of the Verilog version:
* Open Module Declaration by CTRL+clicking on instantiation
* Hover on module name to see the inline documentation

![Improved Verilog support in Sigasi 2.23](/img/releasenotes/2.23/verilog-instantiation.png "Improved Verilog support in Sigasi 2.23")

## Other new and noteworthy improvements

* Improved support for *external VHDL files* (i.e. non Sigasi Project VHDL files). We now report all syntax errors.
* Linting *check for read/write access* of port, signal, generic and constant declarations \[Premium\]
![Check read/write access for Signals/Ports/Generics/Constants](/img/releasenotes/2.23/signal-never-read.png "Check read/write access for Signals/Ports/Generics/Constants")
* Updated the JAVA Virtual Machine in the stand-alone to version 8. Note that this is not updated with the Sigasi update mechanism; you need a fresh download if you want this improvement.
* Support for <a href="https://projects.eclipse.org/releases/luna">Eclipe Luna</a>
* Added *VHDL Project Import Wizard*
![VHDL project Import Wizard](/img/releasenotes/2.23/import-project.png "VHDL project Import Wizard")
* Better *error reporting in unknown instantiations*: only mark the unknown component name as a *single error*
![Only one error marker in unknown component instantiations](/img/releasenotes/2.23/unknown-instantiation-only-one-error.png "Only one error marker in unknown component instantiations")
* Added *tutorial* project for *Sigasi Premium*
* Added preference page to *configure Task Tags* in comments (TODO, FIXME)
![Configurable Task Tags in comments](/img/releasenotes/2.23/task-tags-preferences.png "Configurable Task Tags in comments")
* Added Quickfix for XilinxProcessorIP Libraries in xilinx ISE
* *Export* Block Diagram and State Machine graphics to PNG images \[Premium\]
![Export State Machine View to image file](/img/releasenotes/2.23/save-button-state-machine.png "Export State Machine View to image file")
* *Dead-code linting* in if statements \[Premium\]
![Detect dead code blocks in if statements](/img/releasenotes/2.23/dead-code.png "Detect dead code blocks in if statements")
* Update Xtext dependency to 2.6.1

## Bugfixes

* ticket 2883 : Vmap should never make changes in wrong modelsim.ini file
* ticket 2893 : Case statement analysis should not fail on if expression inside parentheses
* ticket 2798 : Scoping bug in record field in result of overloaded function call
* ticket 2848 : scoping problem in when/else assignment
* ticket 2921 : Loading a FlexNet license should never block the UI

## Download/Update

If you have Sigasi 2 installed, you can {{< update_sigasi >}}. You can also {{< download_latest >}}.
