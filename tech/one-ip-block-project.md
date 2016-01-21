---
title: "One IP block per project"
layout: page 
pager: true
author: Philippe Faes
date: 2012-01-22
tags: 
  - best practices
  - hdt-2.0
  - howto
comments: true
---
In earlier posts, I have explained that there are basically three ways
of how to organize your VHDL code within your Sigasi environment. As a
reminder:

1. [no-organization]
2. [one-design-one-folder]
3. Aggregation of reusable projects (described in this article)

What is a reusable project?
comments: true
---------------------------

If you have a set of VHDL files, which may include packages, entities
and architectures, we will call this a *reusable project*. The files are
closely related and serve a single purpose. Often, these reusable
projects take the form of an IP library (like the IEEE libraries), or an
IP core (like a processor core or a memory controller). If you are
working on large projects, such as a System on Chip (SoC) design, you
are using IP cores.

Setting it up: STD and IEEE
comments: true
---------------------------

*You can turn off the automatic builder while you are setting up your
projects: **Project &gt; Build automatically**. This will keep the
compiler from starting before you have set things up correctly.*

In this blog post, we assume that one project is compiled in one VHDL
library. You can easily adapt if you have several projects in the same
library.

First, we need a project for `IEEE` and for `STD`. You could put those
in a single project, called `default libraries` or something along those
lines. But I prefer to stick to the rule of one project for one library.
Just create a new VHDL project called STD, and remove the IEEE folders
from that project. Next create a project called IEEE and remove the STD
folders from that project. Now you need to make IEEE depend on STD:
**Project &gt; Properties &gt; Project References** and select STD as a
project reference for IEEE.

Adding your own libraries
comments: true
-------------------------

Now that you have the first two libraries, it is time to add your own
library. Select **File &gt; New &gt; Empty VHDL Project**. Clear the
**Use default location** mark and select the location of your library.
Choose the library name (we'll use `my_lib` for this example) as your
project name and click **Finish**. Now, perform the following four
steps:

1.  Set the project dependencies: **Project &gt; Properties &gt; Project
    References** and select STD and IEEE as a project references.
2.  Remove the virtual folder `Common Libraries` from the
    `my_lib` project.
3.  Map the entire project to the correct library (`my_lib`):
    **right-click on the project &gt; Library Mapping &gt;
    New Library...**
4.  If the project contains any
    [*stale*](/faq.html#i-get-lots-of-errors-in-files-that-are-not-even-really-a-part-of-my-project-can-i-hide-them) VHDL files,
    unmap them. **Right-click &gt; Library Mapping &gt; Unmap**
5.  Compile the project (since the automatic builder is turned off):
    **Project &gt; Clean &gt; Clean all projects** and **Project &gt;
    Build**.

As you add more and more projects, your projects will depend on each
other too. Make sure you set the correct dependencies in step 1.
You have to make project dependencies *explicit* in Sigasi. This may
seem like a bit more work, but is also helps you keep a clean and clear
project structure.

*Don't forget to turn the autobuilder back on. **Project &gt; Build
automatically***

![Setting up GRLIB as a multi-project](images/multi-project.png)

Pros and Cons
comments: true
-------------

This is a robust way of organizing large projects. Setting projects up
takes extra time, say about half an hour for larger projects. Having
separate reusable blocks in separate projects makes it easier to work in
teams and to deal with third party IP.

When to use
comments: true
-----------

If you are working on a serious industrial design, with reusable
in-house IP and/or third party IP, we would recommend the **one IP block
per project** approach.
We especially recommended it for any mid or large scale project, or:

-   If you have more than 5 VHDL libraries
-   If you are using third-party code that you don't want to modify
-   If you are working on several designs with shared libraries and
    IP blocks.

Real life: GRLIB
comments: true
----------------

To show you an example of how to get started, I have created [a video
where I set up the first few
libraries](/screencasts/organizing-grlib-one-project-library.html) in the open
source [GRLIB](http://www.gaisler.com/) collection.
You can also download [a zip file with the all the GRLIB libraries (and
a few of its example designs)](resources/grlib-gpl-1.0.20-b3403-b.tgz).
Use **File &gt; Import... &gt; General &gt; Existing Projects into
Workspace**. Then **Select archive file**, **Select All** and click
**Finish**. Importing and compiling everything will take a few minutes.
