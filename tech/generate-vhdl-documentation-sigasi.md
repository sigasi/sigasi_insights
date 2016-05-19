---
title: "Generate VHDL documentation in Sigasi"
layout: page 
pager: true
author: Hendrik Eeckhaut
date: 2016-05-19
tags: 
  - documentation
  - VHDL
  - Sigasi
comments: true
---


Intro:

[tech/generate-vhdl-doxygen-documentation-sigasi]

doxygen: 

basic idea: tries to make the documentation process easier. It extracts information from your VHDL source files to generate documentation. If you annotate your source files with special comments, this documentation can give a nice extra view on your code. A large advantage is that there is only a single source for both your design and your documentation. While this gives no guarantee for the design staying in sync with the documentation, it certainly makes it easier.

disadvantages:
need to add special comments before anything is documented

Not using a real VHDL compiler. So not all VHDL code is supported (e.g. VHDL 2008 features)

So we developed an alternative at Sigasi....

Benefits:

No special coding requirements: the plain comments in your code are extracted for the documentation. Comments next to a declaration or above a declaration form the documentation.
Live preview: you can see what the documentation will look like while you type your code and comments.
Fully hyperlinked PDF. If you save the documentation, you get a fully hyperlinked PDF.
All included. All documentation processing is done in Sigasi/Eclipse with no external tool dependencies.


Example:


How does it work?

More info about DocBook

TODO:

* Make templates configurable
* Add Markup support (e.g. paragraphs, bold,...)
* Add option to require special comments for documentation
* Add option to document hierarchy instead of project
* Add state machine diagrams to the documentation

Conclusion

go try this out
