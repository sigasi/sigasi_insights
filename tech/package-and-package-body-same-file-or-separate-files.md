---
title: "Package and Package Body: in the same file or in separate files?"
layout: page 
pager: true
author: Philippe Faes
date: 2011-07-22
tags: 
  - coding guidelines
  - VHDL
comments: true
bannerad: true
---


Some coding guidelines require that a package and its body should be in the same file. Other guidelines require two separate files, often with rules about the file names. What is the reason for this?

## One File

The case for putting the package and package body in the same file, is _simplicity_. 
* Every package has one package body, and you will know where to find it: at the bottom of the file. 
* Since both are in the same file, there is less chance of introducing inconsistencies. 
* If you mail someone the package, they also get the body. 
* There are less files in your project, so there is less _clutter_.

## Separate Files

There might also be good reasons to put the package and the package body in separate files. The filenames will (almost) always be easy to infer, so that everybody can easily find the implementation (in the body) when they are reading declarations (in the package).  File names might be structured like `foobar_p.vhd` and `foobar_pb.vhd`. Anything works, as long as it is consistent throughout the project.

One reason to separate interface and implementation (package and body) in two files, is to not create false dependencies. Let's say `entity e` uses `package p`. The compiler needs to analyse the package _before_ it can analyse the entity. But the implementation (the package body) can be compiled at a later time. If the package and package body are in two separate files, you could change the implementation (body) without having to recompile `e`. One possible advantage here is increased speed for partial recompilations!

Another reason to use two files is because this underlines the separation of concerns: one file is the interface, the contract with the user. The other is the implementation, and is really none of the user's business.

The main reasons for using separate files are:
* No false dependencies
* Possibility to expose only the interface and keep implementation hidden (IP protection)
* Possible to offer several implementations for the same package
* Easier to make two separate deliverables: package is written _earlier_, perhaps by a different team.

## Conclusion

Looking at these benefits, my conclusion is that both choices would be [coding-conventions#useful]. Any naming conventions for the files are [coding-conventions#arbitrary]. (Remember: _arbitrary_ does not mean you should get rid of this convention. It just means that any naming scheme can be as good as the next.)

Can you think of other practical reasons in favor of either coding style? Which style do you use? Let us know in the comments section below!
