---
title: "PoC - A Pile of Cores"
layout: page 
pager: true
author: Patrick Lehmann, Oliver Knodel
license: CC BY-ND 4.0
date: 2016-06-10
tags: 
  - PoC
  - VHDL
  - IP Core Library
comments: true
---

*Abstract:*  
This article introduces our IP core library called [**PoC**][poc], a free and open-source library of vendor-independent IP
cores, maintained by the [**Chair for VLSI Design, Diagnostics and Architecture**][vlsi] - **Prof. Dr.-Ing. habil. Rainer
G. Spallek** - **Institute of Computer Engineering**, **Faculty of Computer Science**, [**Technische Universität Dresden**][tud],
**Germany**. We present the development of our IP core library, the Python-based infrastructure in the background and how
we improved PoC's VHDL source files with the help of Sigasi Studio.

# PoC - A Pile of Cores

### The Way to Git and Open Source
In the past years, the chair of VLSI design developed a lot of "IP cores". So Thomas B. Preußer and Martin Zabel, originated a
CVS repository called *PoC* to gather this lose set of HDL designs. The repository grow over the years to a collection of basic
HDL implementations like ALUs, FIFOs, UARTs or RAM controllers. For their final projects (bachelor, master, diploma thesis),
students got access to PoC, so they could focus more on their main tasks than wasting time in developing and testing basic IP
core implementations from scratch. But the library was initially for internal and educational use only.

As a university chair for VLSI design, we have a wide range of different FPGA prototyping boards from various vendors and
device families as well as generations. So most of the IP cores were developed for both major FPGA vendor platforms and
their specific vendor tool chains. The main focus was to describe hardware in a more flexible and generic way, so that an IP
core could be reused on multiple target platforms.

As the number of cores increased, the set of common functions and types increased too. In the end PoC is not only a collection
of IP cores, its also shipped with a set of packages containing utility functions, new types and type conversions, which are
used by most of the cores. This makes PoC a *library*, not only a *collection* of IPs.

As we started to search for ways to publish IP cores and maybe the whole PoC-Library, we found several platforms on the
Internet, but none was very convincing. Some collective websites contained inactive projects, others were controlled by
companies without the possibility to contribute and the majority was a long list of private projects with at most a handful
of IP cores. Another disagreement were the used license types for these projects. We decided to use the Apache License,
because it has no copyleft rule, an additional patent clause and allows commercial usage.

We transformed the old CVS repository into three Git repositories: An internal repository for the full set of IP cores (incl.
classified code), a public one and a repository for examples, called **PoC-Examples**, both hosted on GitHub. PoC itself can be
integrated into other HDL projects as a library directory or a Git submodule. The preferred usage is the submodule integration,
which has the advantage of linked repository versions from hosting Git and the submodule Git. This is already exemplified by
our [PoC-Examples][poc-ex] repository.


### PoC's Main Goals

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
after next section. If this is not the case, then PoC uses vendor or tool dependent work-arounds. These work-arounds can
be different implementations switched by VHDL `generate` statements as well as different source files containing modified
implementations.

One special feature of PoC is it, that the user has not to take care of such implementation switchings. PoC's IP cores
decide on their own what's the *best* implementation for the chosen target platform. For this feature, PoC implements a
configuration package, which accepts a well-known development board name or a target device string. For example a FPGA
device string is decoded into: vendor, device, generation, family, subtype, speed grade, pin count, etc. Out of these
information, the PoC component can for example implement a vendor specific carry-chain description to speed up an
algorithm or group computation units to effectively use 6-input LUTs.

<table width=610>
<tr><td><img src="images/poc-a-pile-of-cores/sigasistudio.png"/></td></tr>
<tr><td>
  The screenshot of Sigasi Studio shows our basic 2-FF synchronizer called
  [`PoC.misc.sync.Bits`][sync_Bits]. It encapsulates a generic 2-FF synchronizer description and instantiates vendor specific variants, if applicable. Currently, PoC has improved implementations for Altera and Xilinx devices.
</td></tr>
</table>


### PoC's IP Cores and Packages
PoC uses namespaces and sub-namespaces to categorize more than 120 VHDL modules. Despite VHDL doesn’t support sub-namespaces
yet, PoC already uses sub-namespaces enforced by a strict naming scheme. To give an overview on our wide range of IP cores, here is the current namespace tree of PoC including a short description:

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

In addition to these IP cores, a set of common, syntheziable VHDL packages provides new types, utility functions, string operations or 2-D vector handling.
Another set of simulation only packages (in VHDL-93 and VHDL-2008) was created to ease simulations and the creation of
automated testbenches. For example a testbench tracks how many asserts were called and failed, or if all processes (stimuli
and checker) have been deactivated when the testbench ends. The results are gathered in a testbench report, which is parsed
and evaluated by the Python-based infrastructure.


### The Python-based Infrastructure
PoC has a huge set of testbenches for mostly all IP cores, which are also published for local evaluations on the user's
workstation. The users can investigate our IP core's behavior by viewing the generated waveforms in a simulator of
theirs choice. For this use case, PoC contains pre-configured waveform configuration files.

Supplying testbenches for different FPGA manufacturer and various simulator vendors is a time intensive task, especially
when different operating system platforms should be supported. To provide and automate all this, we provide a Python-based
infrastructure, with a unified command line interface. This infrastructure supports platform independent testbench and
synthesis checks for all tools, platforms and targets. An additional feature of this infrastructure is to check new vendor
tool releases, if PoC's IP cores and testbenches still provide the comparable results, especially when vendors change their
algorithms or even tool chains for new device families.

The current version of PoC's infrastructure (v1.0) can handle four synthesis tool chains: 
* Altera Quartus
* Lattice Diamond
* Xilinx ISE
* Xilinx Vivado

and six simulation tools:
* Aldec Active-HDL
* Cocotb with Mentor QuestaSim back-end
* Mentor Graphics QuestaSim/ModelSim
* Xilinx ISE Simulator
* Xilinx Vivado Simulator
* GHDL + GTKWave


After a short semi-automatic configuration process, PoC can be used to run a single or groups of IP core testbenches.
Additionally, an IP core can be synthesized to a netlist, either to use it in a project or to check it's resource
utilization. Using more than one tool chains can reveal bugs, warnings and coding smells, which were not reported by the
first tool of choice. Especially, synthesis and simulation tools can have a very different understanding of a HDL model.
Using PoC to check the source code with different tool chains can improve its quality. With this infrastructure it's even
possible to compare different implementations with generic parameters or to compare implementations
for different device targets. For example to see the advantages of a newer device generation.

<table width=610>
<tr><td><img src="images/poc-a-pile-of-cores/arith_prng_tb.png"/></td></tr>
<tr><td>
  The screenshot shows a single testbench run with GHDL on Windows
  using PowerShell. The VHDL testbench reports 256 assertions and a
  simulation runtime of 2.6 us for the configuration of `BITS=8`.
  The Python infrastructure assembles an overall report and shows a
  runtime of 3 seconds.
</td></tr>
</table>


### Continuous Integration
One of the major problems of public available IP cores is the absence of quality indicators. In contrast to other projects,
PoC uses continuous integration (CI) provided by Travis-CI to publish the testbench results. A full CI run can also be executed
by a user on his local machine to validate these results.

<table width=610>
<tr><td><img src="images/poc-a-pile-of-cores/all.png"/></td></tr>
<tr><td>
  The screenshot shows a local continuous integration run with PoC in quiet mode,
  executing all configured testbenches at once, which results in a big final report.
</td></tr>
</table>


### Sigasi Studio and PoC
Sigasi Studio is a vendor tool chain independent IDE with similar goals to PoC. The next release will contain a Sigasi
Studio project, to ease the exploration of our PoC-Library.

Sigasi Studio has contributed to our code quality by discovering bugs and smells in the source code. On the one hand it
reported some bugs, which were buried in long warning lists by the used tool chains. On the other hand, it reports coding
style hints, which are irrelevant for most tools, as long as the code fits the language rules. Moreover, having an IDE,
which links warnings and style hints to the correct source code position can be very helpful in large projects.


### Ongoing Work
The next release comes with a Sphinx-based online documentation, which fits into our Git-flows. We are working on a tool
to extract the already existing comment-based inline documentation and to provide this at [ReadTheDocs][rtfd]. With the release
v1.1 it will also be possible to use the shipped Python infrastructure for own IP cores or projects.


### Why should you use PoC?
We explicitly use the wording *PoC-Library* rather then *collection*, because PoC's packages and IP cores build an
ecosystem. Complex IP cores are build on-top of basic IP cores - they are no lose set of cores. The cores offer a clean
interface and can be configured by many generic parameters.

PoC is target independent: It's possible to switch the target device or even the device vendor without switching the IP
core and the IDE, because your already using Sigasi Studio 😉. 

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

