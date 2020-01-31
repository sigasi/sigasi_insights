---
title: "No VHDL Libraries in Emacs VHDL mode"
layout: page 
pager: true
author: Philippe Faes
date: 2011-05-26
tags: 
  - Emacs
  - VHDL
  - Libraries
comments: true
bannerad: true
---

In VHDL, the concept of <em>libraries </em> is used to separate
namespaces. The idea is that separate teams can develop code in their
own library, without previously agreeing on naming conventions. Even if
both teams implement an entity called `memory`, they will
still be able to use both implementations in a joint project. Assuming
the two implementations are made by
<a href="http://en.wikipedia.org/wiki/Acme_Corporation">Acme, corp.</a>
and <a href="http://en.wikipedia.org/wiki/Yoyodyne">Yoyodyne, Inc.</a>,
they may be instantiated as `acme.memory(RTL)` and
`yoyodyne.memory(RTL)` respectively.

There is a
<a href="http://www.velocityreviews.com/forums/t522692-use-of-libraries.html">some
debate</a> about whether or not to use libraries in VHDL code.
Especially sub-prime synthesis tools are known not to support VHDL
libraries. A quick survey showed that today, most tools support
libraries. Notorious exception is
<a href="http://quartushelp.altera.com/9.1/mergedProjects/hdl/vhdl/vhdl_pro_libraries.htm">Quartus,
which does not support libraries for entities</a>.

In the this blog post, I’m assuming that the benefits of VHDL libraries
are established. If you disagree and you, nor your colleagues, nor your
customers, nor your IP vendors, nor any companies you ever intend to
acquire, <em>ever</em> use libraries at all, feel free to skip the rest
of this article.

## Emacs
The use of libraries is not supported in Emacs. From the documentation:

> Limitations: Only library units and dependencies within the [current library](/tech/work-not-vhdl-library) are considered. Makefiles for designs that span multiple libraries are not (yet) supported.

## Sigasi
Sigasi HDT has supported libraries since the beginning. Since november
2009, Sigasi even offers the option to show the library name for each
file in your project:
To encourage the use of VHDL libraries to organize your projects. We now
clearly mark each VHDL file and folder with the name of the library they
belong to.

![](/img/opinion/emacs/project_explorer_library_decorator.png)

It is unlikely that Emacs users will use VHDL libraries. They are
limiting themselves and their projects. As
<a href="http://en.wikipedia.org/wiki/Law_of_the_instrument">Adam
Maslow</a> could have said it: <em>If the only tool you have is a
hammer, you’re always going to shy away from
<a href="http://en.wikipedia.org/wiki/Phillips_screw">Phillips
screws</a></em>.
