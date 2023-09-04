---
title: "One IP block per project"
layout: page 
pager: true
author: Philippe Faes
date: 2012-01-22
modifier: Wim Meeus
lastmod: 2023-09-04
tags: 
  - best practices
  - howto
comments: true
bannerad: true
---

In earlier posts, We've explained that there are basically three ways
to organize your VHDL code within your Sigasi environment:

1. {{< page "no-organization" >}}
2. {{< page "one-design-one-folder" >}}
3. Aggregation of reusable projects (described in this article)

<!-- can we reduce the line spacing of this paragraph? -->
<SPAN STYLE="font-size:small">This article was updated in 2023. Sigasi
Studio has evolved a lot since the original article from 2012. The way
to organize reusable projects in 2012 is no longer supported. This
article discusses how to manage reusable projects in recent versions
of Sigasi Studio.</SPAN>

## What is a reusable project?

If you have a set of HDL files, which are closely related and serve a
single purpose, we will call this a *reusable project*. The files may
include packages, modules, entities, and architectures. Often, these
reusable projects take the form of an IP library (like the IEEE
libraries), or an IP core (like a processor core or a memory
controller). If you are working on large projects, such as a System on
Chip (SoC) design, you are using IP cores.

## Pros and Cons

This is a robust way of organizing large projects. Setting up projects
takes extra time, say about half an hour for larger projects. Having
separate reusable blocks in separate projects makes it easier to work in
teams and deal with third-party IP.

## When to use

If you are working on a serious industrial design, with reusable
in-house IP and/or third-party IP, we would recommend the **one IP block
per project** approach.
We especially recommended it for any mid or large-scale project, or:

-   If you have more than 5 VHDL libraries
-   If you are using third-party code that you don't want to modify
-   If you are working on several designs with shared libraries and
    IP blocks

## The Common Libraries folder

Sigasi Studio projects support the use of folders to organize the
design (and other) files. A special **virtual** folder, named `Common
Libraries`, is present by default in all
VHDL projects and may be added to any project. The [Sigasi manual]({{<
ref "/manual/eclipse/libraries#common-libraries" >}}) contains further
information.

In VHDL projects, the `Common Libraries` folder contains the `IEEE`
and `STD` libraries by default. Further libraries may be added
according to your project's needs. The `Common Libraries` folder is a
virtual folder, which means that it only exists in Sigasi Studio, but
it doesn't exist on disk. Virtual folders contain links to folders and
files on disk, either within or outside of the project tree.

The `Common Libraries` folder is largely treated like any folder in a
Sigasi project.  The main difference between `Common Libraries` and
other folders is, that Sigasi Studio skips code validation in `Common
Libraries`.  When you're working on a (larger) project, you need a
number of libraries and IP cores, but you probably don't want to edit
those libraries and you're most likely not interested in whether these
libraries comply with your team's coding guidelines etc.  Placing
libraries and IP cores in `Common Libraries` also speeds up Sigasi
Studio as those files require less processing.

## Adding libraries to your project

You can add libraries and IP cores to a project in two simple steps:

1. Add a link to the folder which contains the library or IP core.
2. Configure library mapping of the linked folder.

We'll now discuss these steps in more detail. You may also want to
check out [this article]({{< ref
"/tech/osvvm-project#osvvm-in-sigasi-studio" >}}) in which we add the
[OSVVM](https://osvvm.org/) utility library to a Sigasi project.

### Adding a link to the library or IP core

The easiest way to add a link from the library or IP to your project
uses drag-and-drop. Simply drag the library or IP folder from your
file explorer to the `Common Libraries` folder of your Sigasi
project. In the pop-up, select **Link to files and folders**. You can
also select whether you want a relative path to e.g. your project
folder, or an absolute path.

Alternatively, you can set up a link from within Sigasi Studio.  In
the Project Explorer, **right-click** the `Common Libraries` folder
and select **New > Folder > Advanced \>\> > Link to alternate
location**. Enter the location of the library/IP folder, or use the
**Browse...** button to navigate to it. Then, set the **Folder name**
as appropriate and click **Finish**. For example, you can link the
OSVVM utility library as shown below.

{{< figure src="/img/tech/osvvm/osvvm_1_linked_folder.png" alt="Add a link to the OSVVM library" class="uk-align-center" >}}

### Setting the library mapping

Once the link is in place, you still need to map the newly added
folder to a (VHDL/Verilog) library. To do so, **right-click** the
newly added folder, select **Set Library** and either pick one of the
existing libraries, or select **New Library...** as appropriate.
The example below shows how to do this for the OSVVM library:

{{< figure src="/img/tech/osvvm/osvvm_2_library_mapping.png" alt="Add OSVVM library mapping" class="uk-align-center" >}}

## Auto-adding FPGA vendor libraries to a project

If your working environment is configured for FPGA tools, Sigasi
Studio will help you set up FPGA vendor libraries by means of [Quick
Fixes]({{< ref "/manual/eclipse/linting.md#quick-fixes" >}}).  In the
example below, AMD Xilinx's `simprim` library is called.  If the
library is not available, Sigasi Studio flags a warning and offers a
Quick Fix, marked by the warning-with-lightbulb icon ![Warning icon
with lightbulb](/img/icons/warning\_lightbulb.png) next to the
`library` statement.

{{< figure src="/img/tech/simprim-quickfix.png" alt="Add OSVVM library mapping" class="uk-align-center" >}}

Simply click the warning-with-lightbulb icon and select the
appropriate option to have Sigasi Studio configure the library for
you.

## Further tips and tricks

As you add more and more projects, your projects will depend on each
other too.  You have to make project dependencies *explicit* in
Sigasi as shown above. This may seem like a bit more work, but it also helps you keep
a clean and clear project structure.

If you are configuring a large and complex project, Sigasi Studio may
become slow as it tries to work its way through the incomplete
setup. In that case, you can turn off automatic compilation until
you're ready with the setup: uncheck **Project > Build
Automatically**.  You can then work on your project setup without
Sigasi Studio trying in vain to compile the project. Once your project
setup is completed, **make sure to turn automatic builds back on**!
