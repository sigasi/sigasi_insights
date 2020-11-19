---
title: "Set up your code generator in Sigasi"
layout: page 
pager: true
author: Philippe Faes
date: 2013-06-19
tags: 
  - Code generation
  - Register mapping
  - VHDL
comments: true
bannerad: true
---

In many projects, some of the VHDL code is generated in one way or another. For instance, many projects manage their register map in one master file and generate their  VHDL packages and C headers using some kind of tool (either commercial or an in house script).

This article deals with integrating such a script in the Sigasi Pro development environment, so that your generated files are always up to date. In order to make it easy for you to reproduce this, we have created a demo project that you can <a href="https://github.com/heeckhau/sigasi_demo_codegen/archive/master.zip">download</a> or <a href="https://github.com/heeckhau/sigasi_demo_codegen">clone from Github</a>. The demo project already contains a working "Builder" that runs the generator script each time you change the values in the script.

But first: this video shows you what it looks like in real life. As soon as I change the generator script (and save), the generated code is updated.

{{< wistia gi58zr86jk >}}

We assume that you have the project, and a script that generates VHDL code (or C header files, or any other source code).

## Running it by hand

First, run the script by hand, so that you have one set of your generated files.

## Marking the generate files as "derived"

Next, for each of the generate files, **right-click > Properties** then select **Derived**. If you have a lot of generated files, and they are nicely placed in a single directory, you can instead mark that directory as **derived**.

## Set up the Builder

Select the project, then: **right-click > Properties > Builders > New... > Program**.

Choose a name, for example "Address Map Generator".

Fill out the location of the generator script. If the script is inside your project, you can use the environment variable <code>${build_project}</code> to indicate your project's path.
Also fill out the working directory. Most likely this is the project directory, indicated by `${build_project}`.

The tools needs to know when to trigger this builder, so we have to give it a little more information:

* For <b>Build Options</b>, I like to enable build <b>During auto builds</b> in addition to the defaults.
* Select <b>Specify working set of relevant resources</b> and then click <b>Specify Resources...</b>. Now select all the <em>source</em> files that your script will use in order to generate VHDL code and C headers. In this example, only the generator script itself is a relevant resource.


After the extra files are generated, we want the rest of the build process to use our newly generated files:

* In the <b>Refresh</b> tab, select <b>Refresh resources upon completion</b> and <b>Specific resources</b>. Then press the <b>Specific Resources...</b> button and select all of the files that will be generated (or updated) by your script.
* Press <b>OK</b> to close the <b>Edit Configuration</b> dialog, and re-order the builders so that your newly created builder is listed before the <b>Xtext Project Builder</b>. Use the <b>Up</b> and <b>Down</b> buttons for this.

![Sort builders](/img/tech/sort_builders.png "Sort builders")

## Try it out

I'm testing the builder by placing my source file and generated file next to each other and editing the source file. Each time I save, the generated VHDL package is update.

## Version control

If you are using a version control system, make sure you add the new `.externalToolBuilders` directory, and the changes to `.project`


## What do you think?

Did this work for you? Do you have a tool that you can recommend for generating the address map?
