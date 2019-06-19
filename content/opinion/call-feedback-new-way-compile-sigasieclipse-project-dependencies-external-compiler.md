---
title: "Call for feedback: A new way to compile Sigasi/Eclipse project dependencies with an External Compiler"
layout: page 
pager: true
author: Hendrik Eeckhaut
date: 2013-09-16
tags: 
  - hdt-2.0
comments: true
bannerad: true
---

Sigasi allows you to split your design in multiple projects ([/tech/one-ip-block-project]). This is an efficient way to deal with with big designs. Moreover, it is the *recommended* way if you work with reuse libraries between different designs.

However, in its current form ([/releasenotes/sigasi-2.15]), this does not work together well with the [/manual/tools#External Compilers].

In the current approach Sigasi calls the external compiler for each file in the project itself and also for each file of other projects that the current project depends on.  So if `Project2` depends on `Project1`, the files of `Project1` will be compiled twice by the external compiler. The deeper your dependencies are nested, the worse this problem becomes.

![Sigasi Project Dependencies and vcom: current approach](/img/opinion/now_a.png)

The current approach also has problems keeping track on which files needs to be (incrementally) recompiled in which project, when files are changed.

*So for the new Sigasi release we are looking for a better way to use external compilers on projects with dependencies. I would like to hear your feedback on the proposed improvement below*

## `VMAP` to the rescue

External compilers offer more tools than just the `vcom` compiler. They also offer a `vmap` command that can be used to define the mapping between a VHDL library and a directory with the compilation results. `vmap` allows to directly refer to the compilation results of another project. This removes the need to recompile files from required projects in dependent projects. As a result each file is compiled only once, which greatly reduces the compilation time.

![Sigasi Project Dependencies and vcom: proposed vmap approach](/img/opinion/planned_a.png)

Using `vmap` changes the tool-specific configuration file (`library.cfg`, `modelsim.ini`, `xilinxsim.ini`). This is a side effect that most users would not appreciate. Therefore Sigasi will use a private copy of the configuration file.

## VMAP Limitation

Sigasi allows to compile to the same library in different projects. In the dependent project, you get a merged view with all design units in this library. `vcom` on the other hand, only allows to use one compilation folder per library. So it is unfortunately not possible to offer the compilation behaviour with the external compiler.

For example, if Project2 depends on Project1 and both projects compile to same library “library1”. If we `vmap` “library1” to the compilation folder of Project1 in Project2, `vcom` will add the compilation results of Project2 to the compilation folder of Project1. This can lead to unexpected compilation problems in subsequent re-compilations after changes in Project1.

![Sigasi Project Dependencies and vcom: limitation](/img/opinion/planned_samelib_a.png)

Because it is best practice is to use different libraries in different projects, we plan to switch to the `vmap` approach anyway. What do you think? Do you see other problems with this approach or can you think of another way to improve external compilation for multi-project configurations?

Hendrik.