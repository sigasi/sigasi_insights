---
title: "PoC - A Pile of Cores"
layout: page 
pager: true
author: Patrick Lehmann, Oliver Knodel
license: CC BY-ND 4.0
date: 2016-06-14
tags: 
  - PoC
  - VHDL
  - IP Core Library
comments: true
---

## Abstract

This article introduces our IP core library called [**PoC**][poc], a free and open-source library of vendor-independent IP
cores, maintained by the [**Chair for VLSI Design, Diagnostics and Architecture**][vlsi] of **Prof. Spallek**, at the [**Technische Universität Dresden**][tud], **Germany**. We present the development of our IP core library, the accompanying Python-based infrastructure and how
we improved PoC's VHDL source files with the help of Sigasi Studio.

## The Way to Git and Open Source

In the past years, the _VLSI Design, Diagnostics and Architecture_ group
developed a lot of "IP cores". To organize this unstructured set of HDL
designs, Thomas B. Preußer and Martin Zabel, created a CVS repository called
*PoC*. The repository grew over the years to a collection of basic HDL
implementations such as ALUs, FIFOs, UARTs or RAM controllers. Students got
access to PoC For their final projects (bachelor, master, diploma thesis), so
they could focus on their main task instead of wasting time developing and
testing basic IP cores from scratch. However, the library was initially for
internal and educational use only.

At the university, we have a wide range of different FPGA prototyping boards from various vendors with different
device families and generations. Most of the IP cores were developed for the two major FPGA vendor platforms and
their specific vendor tool chains. The main focus was to describe hardware in a more flexible and generic way, so that an IP
core could be reused on multiple target platforms.

As the number of cores increased, the set of common functions and types increased too. In the end PoC is no longer only a collection
of IP cores, it is also shipped with a set of packages containing utility functions, new types and type conversions, which are
used by most of the cores. This made PoC a *library*, not just a *collection* of IPs.

As we started to search for ways to publish IP cores and maybe the whole PoC-Library, we found several platforms on the
Internet. But none were very convincing. Some collective websites contained inactive projects. Others were controlled by
companies without the possibility to contribute. And the majority of the websites just contained a long list of private projects with at most a handful
of IP cores. Another showstopper was the *license* for these projects. We decided to use the [Apache License](http://www.apache.org/licenses/LICENSE-2.0),
because it has no copyleft rule. It also has an additional patent clause and allows commercial usage.

We transformed the old CVS repository into three Git repositories:

1. An internal repository for the full set of IP cores (which includes classified code)
2. A public repository with the public **PoC** library, hosted on [GitHub][poc].
3. A repository for examples, called **PoC-Examples**, also hosted on [GitHub][poc-ex].

PoC itself can be integrated into other HDL projects as a library directory or
a Git submodule. The preferred usage is the submodule integration, which has
the advantage of linked repository versions from the hosting Git and the
submodule Git. This is already exemplified by our [PoC-Examples][poc-ex]
repository.


## PoC's Main Goals

The PoC-Library pursues the following five goals:
* independence in the platform, target, vendor and tool chain
* generic, efficient, resource sparing and fast implementations of IP cores
* optimized for several device architectures, if applicable
* supportive scripts to ease the IP core handling with all supported
  vendor tools on all listed operating systems
* ship all IP cores with testbenches for local and online verification

In detail the PoC-Library is: 
* synthesizable for ASIC and FPGA devices, e.g. from Altera, Lattice, Xilinx, ...
* supports a wide range of simulation and synthesis tool chains
* executable on several host platforms: Darwin, Linux or Windows


This is achieved by using generic HDL descriptions, which work with most synthesis and simulation tools mentioned in the
next section. If generic descriptions do not work,  PoC uses vendor or tool dependent workarounds. These workarounds can
be different implementations switched by VHDL `generate` statements as well as different source files containing modified
implementations.

One special feature of PoC is that the user does not have to take care of selecting the correct implementation. PoC can automatically select
the *best* implementation for the chosen target platform. For this feature, PoC contains a
configuration package, which accepts a development board name or a target device string. For example, an FPGA
device string is decoded into: vendor, device, generation, family, subtype, speed grade, pin count, etc. From this
information, PoC can for example implement a vendor specific carry-chain description to speed up an
algorithm or group computation units to effectively use 6-input LUTs.

![PoC.misc.sync.Bits](images/poc-a-pile-of-cores/sigasistudio.png)

This screenshot of Sigasi Studio shows our basic 2-FF synchronizer called [`PoC.misc.sync.Bits`][sync_Bits]. It encapsulates a generic 2-FF synchronizer description and instantiates vendor specific variants, if applicable. Currently, PoC has improved implementations for Altera and Xilinx devices.

## PoC's IP Cores and Packages

PoC uses namespaces and sub-namespaces to categorize more than 120 VHDL modules. Despite the fact that VHDL does not support sub-namespaces
yet, PoC already uses sub-namespaces enforced by a strict naming scheme. To give an overview of our wide range of IP cores, here is the current namespace tree of PoC including a short description:

* **arith** (Arithmetic modules / ALUs)
* **bus** (Bus arbiters)
    * **stream** (Modules for the PoC.Stream protocol)
    * **wb** (WishBone)
* **cache** (Caches)
* **comm** (Communication)
* **fifo** (FIFO buffers, with optional cross clocking)
* **io** (Basic I/O modules)
    * **ddrio** (Abstraction layer for DDR-I/O flip-flops)
    * **iic** (I²C controller)
    * **lcd** (2x16 dot-matrix LCD controller)
    * **mdio** (Management Data I/O controller)
    * **ow** (OneWire Controller)
    * **uart** (Universal Asynchronous Receiver/Transmitter)
* **mem** (Memory)
    * **lut** (Lookup tables implementing trigonometric functions)
    * **ocram** (On-Chip RAM abstraction layer)
    * **ocrom** (On-Chip ROM abstraction layer)
    * **sdram** (SDRAM controller)
* **misc** (Miscellaneous)
    * **filter** (Filters)
    * **gearbox** (Bitwidth/datarate adaption modules)
    * **stat** (Statistic modules)
    * **sync** (Clock Domain Crossing (CDC) circuits)
* **net** (Network protocols)
    * **arp** (Address Resolution Protocol)
    * **eth** (Ethernet)
    * **icmpv4/icmpv6** (Internet Control Message Protocol)
    * **ipv4/ipv6** (Internet Protocol)
    * **ndp** (Neighbor Discovery Protocol)
    * **mac** (Media Access Control)
    * **udp** (User Datagram Protocol)
* **sort** (Sorting algorithms)
    * **sortnet** (Sorting networks)
* **xil** (Xilinx specific modules)
    * **mig** (Pre-configured Memory Interface Generator solutions)

In addition to these IP cores, a set of common, syntheziable VHDL packages provides *new types*, *utility functions*, *string operations* and *2-D vector handling*.
Another set of simulation-only packages (in VHDL-93 and VHDL-2008) was created to ease simulations and the creation of
automated testbenches. For example, a testbench tracks how many asserts were called and failed, or if all processes (stimuli
and checker) have been deactivated when the testbench ends. The results are gathered in a *testbench report*, which is parsed
and evaluated by the Python-based infrastructure.


## The Python-based Infrastructure

PoC has a huge set of testbenches for almost all IP cores, which are also included for local evaluations on the user's
workstation. The users can investigate our IP core's behavior by viewing the generated waveforms in a simulator of
theirs choice. For this use case, PoC contains pre-configured waveform configuration files.

Supplying testbenches for different FPGA manufacturer and various simulator vendors is a time intensive task, especially
when different operating system platforms need to be supported. To provide and automate all this, we provide a Python-based
infrastructure, with a *unified command line interface*. This infrastructure supports platform independent testbench and
synthesis checks for all tools, platforms and targets. An additional feature of this infrastructure is to *check new vendor
tool releases*. This allows one to check that PoC's IP cores and testbenches still provide the expected results. This is especially useful when vendors change their
algorithms or even tool chains for new device families.

The current version of PoC's infrastructure (v1.0) can handle four synthesis tool chains: 
* Altera Quartus
* Lattice Diamond
* Xilinx ISE
* Xilinx Vivado

Plus six simulation tools:
* Aldec Active-HDL
* Cocotb with Mentor QuestaSim back-end
* Mentor Graphics QuestaSim/ModelSim
* Xilinx ISE Simulator
* Xilinx Vivado Simulator
* GHDL + GTKWave


After a short semi-automatic configuration process, PoC can be used to run one or more IP core testbenches.
Additionally, an IP core can be synthesized to a netlist. This way it can be used in a project. This also allows you to check resource
utilization. Using more than one tool chain can reveal bugs, warnings and code smells, which are not always reported by the
first tool of choice. Especially, synthesis and simulation tools can have a very different understanding of a HDL model.
Using PoC to check the source code with different tool chains can improve its quality. With this infrastructure, it's even
possible to compare different implementations with generic parameters or to compare implementations
for different device targets. For example to see the advantages of a newer device generation.

![GHDL simulation](images/poc-a-pile-of-cores/arith_prng_tb.png)


This screenshot shows a single testbench run with [GHDL][ghdl] on Windows using PowerShell. The VHDL testbench reports 256 assertions and a simulation runtime of 2.6 us for the configuration of `BITS=8`.  The Python infrastructure assembles an overall report and shows a runtime of 3 seconds.


## Continuous Integration

One of the major problems of public available IP cores is the absence of quality indicators. In contrast to other projects,
PoC uses continuous integration (CI) provided by Travis-CI to publish the testbench results. A full CI run can also be executed
by a user on his local machine to validate these results.

![Continuous integration simulation report](images/poc-a-pile-of-cores/all.png)

The screenshot shows a local continuous integration run with PoC in quiet mode, executing all configured testbenches at once, which results in a big final report.


## Sigasi Studio and PoC

Sigasi Studio is a vendor tool chain independent IDE with similar goals to PoC. The next release of PoC will contain a project files, to ease the exploration of our PoC-Library in Sigasi Studio.

Sigasi Studio has contributed to our code quality by discovering bugs and smells in the source code. On the one hand, it
reported some bugs, which were buried in long warning lists by the used tool chains. On the other hand, it reports coding
style hints, which improved the readability and consistency of the HDL code. Moreover, having an IDE
which links warnings and style hints to the correct source code position is very helpful, especially in large projects.


## Ongoing Work

The next PoC release comes with a [Sphinx](http://www.sphinx-doc.org/)-based online documentation, which fits into our Git-flows. We are working on a tool
to extract the already existing comment-based inline documentation and to provide this at [ReadTheDocs][rtfd]. In the v1.1 release it will also be possible to use this to generate documentation for your own IP cores and projects.


## Why should you use PoC?

We explicitly use the wording *PoC-Library* rather than *collection*, because PoC's packages and IP cores build an
ecosystem. Complex IP cores are built on-top of basic IP cores - they are no loose set of cores. The cores offer a clean
interface and can be configured by many generic parameters.

PoC is target independent: It's possible to switch the target device or even the device vendor without switching the IP
core and the IDE, because you're already using Sigasi Studio 😉. 

---------------------------

| PoC on GitHub      | Documentation on ReadTheDocs        |  Latest Travis-CI Results        |
| -------------------------------------- | ------------------------------------------ |  -------------------------- |
| [https://github.com/VLSI-EDA/PoC][poc] | [http://poc-library.readthedocs.io/][rtfd] |  [https://travis-ci.org/VLSI-EDA/PoC][ci] | 

[vlsi]: http://tu-dresden.de/inf/vlsi-eda
[tud]: https://tu-dresden.de/?set_language=en
[ci]: https://travis-ci.org/VLSI-EDA/PoC/branches
[poc]: https://github.com/VLSI-EDA/PoC
[poc-ex]: https://github.com/VLSI-EDA/PoC-Examples
[sync_Bits]: https://github.com/VLSI-EDA/PoC/blob/master/src/misc/sync/sync_Bits.vhdl
[rtfd]: http://poc-library.readthedocs.io/
[ghdl]: https://github.com/tgingold/ghdl
