---
title: "How to run Xilinx ISim/Fuse from the command line on Linux"
layout: page 
pager: true
author: Hendrik Eeckhaut
date: 2010-04-08
tags: 
  - Xilinx
  - VHDL
comments: true
---

Xilinx no longer ships
<a href="http://www.xilinx.com/products/ipcenter/ModelSim.htm">ModelSim</a>
with ISE but now ships its own HDL simulator that enables functional and
timing simulations for VHDL, Verilog and mixed VHDL/Verilog designs:
<a href="http://www.xilinx.com/products/design_tools/logic_design/verification/ise_simulator_faq.htm">ISim</a>.

I had some trouble setting up ISim from the command line on my Linux
machine, so I documented how to use ISim here for future reference.

## Install Xilinx ISE

First
<a href="http://www.xilinx.com/support/download/index.htm">download</a>
and install the ISE software from the Xilinx Website. I installed Xilinx
in <code lang="bash">/opt/Xilinx/11.1/</code>.

## Run Fuse to compile, elaborate and link your project

The command line tool that accompanies ISim is called
<a href="http://www.xilinx.com/itp/xilinx10/isehelp/ism_cl_fuse.htm">Fuse</a>.
Fuse is the HDL compiler, elaborator and linker used by ISim. You can
find this executable in your Xilinx installation folder in the binaries
dir (<code lang="bash">/opt/Xilinx/11.1/ISE/bin/lin</code> in my case).

This tool needs a few parameters:

* A (.prj) project file with all source files (-prj)
* Top level
* Executable name (-o)
* Optional parameters

The <strong>project file</strong> is a file (ending with `.prj`) with an
entry for each file, plus its library.
For the <a href="http://www.opencores.org">Dirac OpenCores project</a>
that ships with Sigasi HDT, this is (`Dirac.prj`):

```bash
vhdl work src/testbench/DECODERTESTBENCH.VHD
vhdl work src/testbench/ArithmeticCoderTestbench.vhd
vhdl work src/encoder/FOLLOW_COUNTER.vhd
vhdl work src/encoder/OUTPUT_UNIT.vhd
vhdl work src/encoder/ARITHMETICCODER.vhd
vhdl work src/encoder/LIMIT_REGISTER.vhd
vhdl work src/decoder/ARITHMETICDECODER.vhd
vhdl work src/decoder/STORAGE_REGISTER.vhd
vhdl work src/decoder/SYMBOL_DETECTOR.vhd
vhdl work src/expgolomb/EXP_GOLOMB_DECODER.vhd
vhdl work src/expgolomb/EXP_GOLOMB_COUNTER.vhd
vhdl work src/common/FIFO.vhd
vhdl work src/common/UPDATER.vhd
vhdl work src/common/D_TYPE.vhd
vhdl work src/common/COUNT_UNIT.vhd
vhdl work src/common/STORE_BLOCK.vhd
vhdl work src/common/INPUT_CONTROL.vhd
vhdl work src/common/CONVERGENCE_CHECK.vhd
vhdl work src/common/ARITHMETIC_UNIT.vhd
vhdl work src/common/ENABLEABLE_D_TYPE.vhd
vhdl work src/common/CONTEXT_MANAGER.vhd
vhdl work src/common/Divider.vhd
vhdl work src/common/HALVING_MANAGER.vhd
```

I choose <code lang="bash">Dirac</code> as <strong>executable</strong>
and the <strong>toplevel</strong> is
<code lang="bash">DECODERTESTBENCH</code>. I always add
<code lang="bash">-intstyle ise -incremental</code> as <strong>optional
parameters</strong>. <code lang="bash">-intstyle ise</code> makes sure
Sigasi HDT can link error messages in the console view with the editor
view. <code lang="bash">-incremental</code> tells Fuse to only compile
those files that have changed since the last compile; but I do not have
the impression this really works.

My complete command is:
```bash
/opt/Xilinx/11.1/ISE/bin/lin/fuse -intstyle ise -incremental -o Dirac -prj Dirac.prj DECODERTESTBENCH
```

## Run the simulation
Initially when I tried to run the generated executable
(<code lang="bash">Dirac</code>), I always got:
```bash
Segmentation fault
```

The solution was to set some environment variables:
```bash
export XILINX=/opt/Xilinx/11.1/ISE
export PLATFORM=lin
export PATH=$PATH:${XILINX}/bin/${PLATFORM}
export LD_LIBRARY_PATH=${XILINX}/lib/${PLATFORM}
```

Now you can run Dirac:
```
[heeckhau@elvis Dirac]$ ./Dirac
WARNING: A WEBPACK license was found.
WARNING: Please use Xilinx License Configuration Manager to check out a
full ISim license.
WARNING: ISim will run in Lite mode. Please refer to the ISim
documentation for more information on the differences between the Lite
and the Full version.
This is a Lite version of ISim.
Time resolution is 1 ps
ISim&gt; run 10 ns
Simulator is doing circuit initialization process.
at 0 ps, Instance /decodertestbench/UUT/INBUFFER/STORAGE/ : Warning:
There is an 'U'|'X'|'W'|'Z'|'-' in an arithmetic operand, the result
will be 'X'(es).
at 0 ps, Instance /decodertestbench/UUT/INBUFFER/STORAGE/ : Warning:
CONV_INTEGER: There is an 'U'|'X'|'W'|'Z'|'-' in an arithmetic operand,
and it has been converted to 0.
at 0 ps, Instance /decodertestbench/UUT/PROBABILITY/ : Warning:
CONV_INTEGER: There is an 'U'|'X'|'W'|'Z'|'-' in an arithmetic operand,
and it has been converted to 0.
at 0 ps, Instance /decodertestbench/UUT/PROBABILITY/ : Warning:
CONV_INTEGER: There is an 'U'|'X'|'W'|'Z'|'-' in an arithmetic operand,
and it has been converted to 0.
Finished circuit initialization process.
at 5 ns(1), Instance /decodertestbench/UUT/PROBABILITY/ : Warning:
CONV_INTEGER: There is an 'U'|'X'|'W'|'Z'|'-' in an arithmetic operand,
and it has been converted to 0.
```

You can also start the gui from the command line:
```bash
./Dirac -gui
```
This works on our Centos machines, but not on my Fedora release 10 work
station. I did not find out why yet, but it is probably due to Xilinx
using an older version of GLIBC.

You can also start ISim with a tcl-script, such as:
```bash
./Dirac -tclbatch isim.cmd
```
where `iscim.cmd` is for example:
```bash
wave add DECODERTESTBENCH
run 10 ns
```

This should save you some time.

## Coming soon
In the upcoming version of Sigasi HDT, we will generate all these
scripts for you. That way you can focus on the design, and let the tools
take care of the dirty work.

## Some useful links
* <a href="http://www.xilinx.com/support/documentation/sw_manuals/xilinx11/plugin_ism.pdf">ISim
Manual</a>
* <a href="http://www.xilinx.com/support/documentation/sw_manuals/xilinx11/ug682.pdf">In
Depth tutorial</a>
* <a href="http://www.xilinx.com/products/design_tools/logic_design/verification/ise_simulator_faq.htm">ISim FAQ</a>
