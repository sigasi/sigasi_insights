---
title: Sigasi 2.24
layout: page
pager: true
date: 2014-09-02
---

The Sigasi 2.24 brings a lot of improvements to *Sigasi Premium*: Mixed VHDL/Verilog, improved graphics, naming conventions and formatter options.
This release also contains a preview of Sigasi's Documentation Generator and other new and noteworthy improvements.

h2. Sigasi Premium improvements

h3. Mixed VHDL/Verilog projects

In Sigasi 2.24 it is now possible to enable both VHDL and Verilog support to a project. This allows to instantiate Verilog modules in VHDL code and vice versa.    

[img_assist|nid=2437|title=Mixed language instantiations|desc=|link=none|align=center|width=499|height=331]

h3. Improved State machine viewer and block diagram view

* The state machine viewer now shows the state assignment's comment as text label on transitions.

[img_assist|nid=2432|title=Transition annotations in state machine view|desc=|link=node|align=center|width=640|height=283]

* The block diagram view now allows you to navigate to instantiated architectures
* The block diagram view's look is updated

[img_assist|nid=2433|title=Open entity declaration in block diagram|desc=|link=none|align=center|width=538|height=345]

* *Note* that we have also changed the *navigation* behaviour. You now have to *double click* if you want to navigate to the corresponding VHDL code.

h3. Naming conventions

Sigasi Premium users can now configure Sigasi to check naming conventions while you type.

[img_assist|nid=2436|title=Check naming conventions in VHDL|desc=|link=none|align=center|width=516|height=76]

h3. Formatter options

We added a preference page where you can configure a few formatting options: preserve newlines, upper case keywords, comment column.

[img_assist|nid=2434|title=VHDL formatting preferences|desc=|link=node|align=center|width=640|height=313]

h2. Documentation Generator

Because a prototype is worth a thousand pictures, we have built our first version of the Sigasi Documentation Generator. 
* *No special coding requirements*: the plain comments in your code are extracted for the documentation. Comments next to a declaration or above a declaration form the documentation.
* *Live preview*: you can see what the documentation will look like while you type your code and comments.
* *Fully hyperlinked PDF*. If you save the documentation, you get a fully hyperlinked PDF.
* *All included*. All documentation processing is done in Sigasi/Eclipse with no external tool dependencies.

All users can open the documentation view, but only Premium users can export to PDF.

[img_assist|nid=2438|title=Live Sigasi documentation preview|desc=|link=node|align=center|width=640|height=268]

h2. Other new and noteworthy improvements

* Support *real* datatype in hovers and hierarchy 
* Added a list of all MAC addresses in the Licenses preference page
* Added an option to *not* set top level when the simulator is started

h2. Bugfixes

* ticket 2948 : Case statement validation should not give invalid errors on choices in parenthesis
* ticket 2884 : Support multiple FSMs with the same name (records, different processes, ...)
* ticket 2954 : Fixed UI freezes
* ticket 2956 : Filter fixed libraries in CSV export is when they are referenced in another project

h2. Download/Update

If you have Sigasi 2 installed, you can "perform an update":http://www.sigasi.com/update_howto.
You can also "download a fresh copy":http://www.sigasi.com/download-sigasi-20.

Enjoy and please come "talk to us on the forum":/forums/support-forum !