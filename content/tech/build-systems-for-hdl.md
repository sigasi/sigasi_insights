---
title: "Build systems for HDL projects"
layout: page 
pager: true
author: Wim Meeus
date: 2021-05-04
comments: true
bannerad: true
tags:
  - project
  - project management
  
---

## Introduction

For a long time, software developers have enjoyed build systems to
help them build their code. These build systems keep track of
dependencies and call the appropriate tools to run the design flow or
parts thereof. In this article, we try to give an overview of
currently available build tools for VHDL and (System)Verilog
projects.

While we attempt to give a complete overview, it may be that we've
missed an HDL (Hardware Description Language) build tool, or that
we've missed some of a build system's strengths or weaknesses.  Build
systems, as any piece of software, also evolve over time, so new ones
may show up, and existing ones may improve ... or disappear.

FPGA design suites usually come with a built-in build system. Their
IDEs have buttons to run simulation and synthesis, to generate a
bitstream, etc. When activating such a button, the FPGA tool ensures
that all intermediate steps run as required.

ASIC flows, which usually rely on a variety of tools from different
vendors, don't come with this kind of build automation. Also, complex
FPGA designs may require a more elaborate design flow than the one
offered by the FPGA design suite.

A number of HDL specific build systems exist. Alternatively, software
build systems may be tweaked to build HDL designs. As a third option,
design teams may rely on a suite of home-grown scripts for project
builds. These scripts may have accumulated a tremendous amount of
know-how over the years, but the fact that they often grow
organically, driven by the needs of each project, makes them hard to
maintain. Scripts may be written in a polyglot of scripting languages
such as Python, Perl, Tcl, Bourne shell, C shell, Makefiles,
etc. which doesn't make their maintenance easier.

We're unsure which build systems are currently used by design teams to
build their designs. Our suspicion is that many design teams either
use the build system of their FPGA suite, or they use home-grown
scripts for building designs. Readers are encouraged to share their
views and experience on this subject as a comment.

## HDL specific build systems

### Hdlmake

[Hdlmake](https://ohwr.org/project/hdl-make)
([documentation](https://hdlmake.readthedocs.io/en/master/)) is a tool
designed to help FPGA designers to manage and share their HDL code by
automatically finding file dependencies, writing synthesis &
simulation Makefiles, and fetching IP-Core libraries from remote
repositories.

Hdlmake supports modular design. A `Manifest.py` must be added to each
module, detailing the files of the module as well as its dependencies.
Once the manifests are in place, hdlmake can optionally download
dependencies from a remote revision control system, and generate
`Makefile`s for a number of simulators and FPGA synthesis tools.

A small trial showed that hdlmake generates simulation and synthesis
`Makefile`s nicely.  After running `hdlmake`, one runs `make` to
actually start the simulation or synthesis.  From the range of
supported tools, hdlmake is clearly intended for FPGA designs.  A
drawback is that the manifests need to be maintained by hand.  Support
for folders with design files, instead of requiring to list individual
files, would certainly be an asset.

Hdlmake is written in python. It runs on Linux and Windows. Both VHDL
and Verilog are supported as design languages, and for dependencies in
remote source code management, both git and subversion are supported.

### FuseSoC & Edalize

This pair of tools decouples build management (FuseSoC) and running
particular tools like simulators and synthesis (Edalize).

[FuseSoC](https://github.com/olofk/fusesoc)
([documentation](https://fusesoc.readthedocs.io/)) is a package
manager and a set of build tools for HDL (Hardware Description
Language) code. FuseSoC design units are named *cores*.  FuseSoC uses
`core` files, which are written in YAML format, to describe each
core's files, parameters, dependencies and *targets* (simulation,
synthesis...).

[Edalize](https://github.com/olofk/edalize)
([documentation](https://readthedocs.org/projects/edalize/)) is a
Python Library for interacting with Electronic Design Automation (EDA)
tools, such as HDL simulators and synthesis tools. It can create
project files for supported tools and run them in batch or GUI mode
(where supported).  Edalize gets its input as EDA Metadata (EDAM),
which is a data structure containing all input parameters that an EDA
tool may need.

Installation of FuseSoC and Edalize is straightforward using Python
and pip.  Getting FuseSoC to work was confusing at first.  Error
messages were hard to understand, the reference manual looks
incomplete, and the user manual mainly discusses an example.  However,
after figuring out the correct tool options, we could generate a
Makefile and tcl scripts and run a simulation.

### Bender

[Bender](https://github.com/pulp-platform/bender)
([documentation](https://github.com/pulp-platform/bender#readme)) is a
dependency management tool for hardware design projects.  The basic
design unit of Bender is called a package. A manifest, written in
YAML, describes the package, its metadata, its dependencies and its
source files.

Bender generates files that help control EDA tools like simulators and
RTL synthesis. Many EDA tools have a built-in tcl interpreter, so for
most tools Bender generates tcl scripts. For other tools, Bender can
also generate a simple list of input files (with dependencies
included) or command line options.

Installation of Bender is easy, all you need is to download a single
executable.  Setting up a simple project with two modules was rather
straightforward.  Generated scripts only contain the commands to
compile the input files, but not the commands to e.g. start a
simulation.  

Bender is a dependency management tool. It requires to list all source
files in the manifest, which adds work for the designer to keep the
list updated with every added or removed file.  Git is the only
supported revision control system.  The scripts generated by Bender
take care of compilation, so the user needs to add more scripts (or
work in a GUI) to actually run a simulation or synthesis.

### Hammer

[Hammer](https://github.com/ucb-bar/hammer) (Highly Agile Masks Made
Effortlessly from RTL)
([documentation](https://hammer-vlsi.readthedocs.io/en/latest/)) is a
framework for building physical design generators for digital VLSI
flows.  It is a component of UC Berkeley Architecture Research's
[Chipyard framework](https://github.com/ucb-bar/chipyard).

As the name indicates, Hammer is mainly intended for ASIC flows.
Hammer itself is open-source software.  ASIC flows however often
depend on (expensive) commercial tools and advanced technology
libraries, which are generally not available in the open-source
community.  For that purpose, Hammer itself is tool- and technology
agnostic. Plugins, some of which are closed-source, handle tool- and
technology-specific concerns.  Plugins for commercial tools and
technology libraries are available to license holders only.

While Hammer is still under development, the apparent involvement of
commercial EDA companies in plugin development could mean that Hammer
may become the tool of choice for ASIC flows.

## Software build system adaptations for HDL builds

### Make

[Make](https://en.wikipedia.org/wiki/Make_(software))
([documentation](https://www.gnu.org/software/make/)), in a variety of
flavours, has been the main software build system on Unix-like
platforms for several decades. Despite its age and some shortcomings,
it is still widely used for all kinds of projects.  Make uses
`Makefile`s to control how a project is built.  Makefiles consist of
targets, dependencies and build commands, and may either call or
include other Makefiles.

Make is being used in (at least) two different ways for HDL
projects. As we have mentioned before, some HDL specific build systems
use make for part of the flow, i.e. these build systems generate
Makefiles and as such act as a front-end for make.

On the other hand, some designers write custom Makefiles for their
projects.  As make wasn't designed with HDL builds in mind, make isn't
aware by default of which files need re-compilation. As a result,
Makefiles easily become rather complex and difficult to maintain
again, particularly if one wants to use make efficiently by avoiding
un-necessary re-compilation of code that hasn't changed since the
previous build. 

### Bazel

[Bazel](https://bazel.build/) is a recent tool for build automation.
While software builds are the prime focus, Bazel has more powerful
customization options to adapt it for HDL builds.

In Bazel, *rules* specify the relationship between a set of input and
a set of output files, including the necessary steps to derive the
outputs from the inputs.  Bazel *BUILD* files specify what outputs can
be built from the source code.  Every Bazel package contains a BUILD
file, which is a short program written in
[Starlark](https://docs.bazel.build/versions/master/skylark/language.html).

Bazel can be extended to support HDL builds by adding rules and
customizing build files.  A number of Bazel rulesets for HDL are
publicly available.  We found about 7 projects on Github, which all
look in an early stage of their development.  While these Bazel
extensions are usable for particular tools and environments, they
don't feel like they're ready for a general production environment.
The project [bazel_rules_hdl](https://github.com/hdl/bazel_rules_hdl)
has the ambition to eventually become an official bazel ruleset for
doing HDL development.

Given its popularity in software development, it would indeed be
interesting to see Bazel more universally usable for HDL builds.

## Conclusion

We've discussed a number of build systems for HDL projects. Using a
build system should reduce the effort that HDL design teams spend
getting their designs built.

Our impression is that usability of these build systems is still
fairly limited, which makes most designers stick with their own
scripts.

But maybe we're mistaken.  Maybe design teams use these build systems
all the time?  Please share in the comments what you use, what you'd
like to use, and what you think about the matter.