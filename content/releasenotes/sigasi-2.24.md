---
title: Sigasi 2.24
layout: page
pager: true
date: 2014-09-02
---

The Sigasi 2.24 brings a lot of improvements to *Sigasi Premium*: Mixed VHDL/Verilog, improved graphics, naming conventions and formatter options.
This release also contains a preview of Sigasi's Documentation Generator and other new and noteworthy improvements.

## Sigasi Premium improvements

### Mixed VHDL/Verilog projects

In Sigasi 2.24 it is now possible to enable both VHDL and Verilog support to a project. This allows to instantiate Verilog modules in VHDL code and vice versa.    

![Mixed language instantiations](/img/releasenotes/2.24/mixed-language-instantiations.png "Mixed language instantiations")

### Improved State machine viewer and block diagram view

* The state machine viewer now shows the state assignment's comment as text label on transitions.

![Transition annotations in state machine view](/img/releasenotes/2.24/fsm-transitions-comment.png "Transition annotations in state machine view")

* The block diagram view now allows you to navigate to instantiated architectures
* The block diagram view's look is updated

![Open entity declaration in block diagram](/img/releasenotes/2.24/block-diagram-view.png "Open entity declaration in block diagram")

* *Note* that we have also changed the *navigation* behaviour. You now have to *double click* if you want to navigate to the corresponding VHDL code.

### Naming conventions

Sigasi Premium users can now configure Sigasi to check naming conventions while you type.

![Check naming conventions in VHDL](/img/releasenotes/2.24/naming-conventions.png "Check naming conventions in VHDL")

### Formatter options

We added a preference page where you can configure a few formatting options: preserve newlines, upper case keywords, comment column.

![VHDL formatting preferences](/img/releasenotes/2.24/formatting-preferences.png "VHDL formatting preferences")

## Documentation Generator

Because a prototype is worth a thousand pictures, we have built our first version of the Sigasi Documentation Generator. 
* *No special coding requirements*: the plain comments in your code are extracted for the documentation. Comments next to a declaration or above a declaration form the documentation.
* *Live preview*: you can see what the documentation will look like while you type your code and comments.
* *Fully hyperlinked PDF*. If you save the documentation, you get a fully hyperlinked PDF.
* *All included*. All documentation processing is done in Sigasi/Eclipse with no external tool dependencies.

All users can open the documentation view, but only Premium users can export to PDF.

![Live Sigasi documentation preview](/img/releasenotes/2.24/documentation-view.png "Live Sigasi documentation preview")

## Other new and noteworthy improvements

* Support *real* datatype in hovers and hierarchy 
* Added a list of all MAC addresses in the Licenses preference page
* Added an option to *not* set top level when the simulator is started

## Bugfixes

* ticket 2948 : Case statement validation should not give invalid errors on choices in parenthesis
* ticket 2884 : Support multiple FSMs with the same name (records, different processes, ...)
* ticket 2954 : Fixed UI freezes
* ticket 2956 : Filter fixed libraries in CSV export is when they are referenced in another project

## Download/Update

If you have Sigasi 2 installed, you can {{< update_sigasi >}}. You can also {{< download_latest >}}.
