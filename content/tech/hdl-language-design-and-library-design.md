---
title: "On HDL language design and library design"
layout: page 
pager: true
author: Philippe Faes
date: 2009-09-22
tags: 
  - philosophical
  - EDA
  - constrained random
  - assert
comments: true
bannerad: true
---


## Assertions and Constrained Random

Last week, I went to the closing symposium of the **SoC Verification** project, where I was invited to talk about the [Code Review](/tech/code-review) process for hardware designers.

We heard some interesting technical talks on <strong>constrained random</strong> and coverage driven verification in SystemC. SystemC has a set of library classes and methods that allow users to define constraints on the input parameters of a device under test.

There was also a presentation on various systems for **inline assertions**:
<ul>
<li>Traditional <a href="http://www.csee.umbc.edu/help/VHDL/sequential.html#asse">VHDL assertions</a></li>
<li><a href="http://en.wikipedia.org/wiki/Property_Specification_Language">Propery Specification Language (PSL)</a>, which is inlined as comments in VHDL, Verilog or SystemVerilog</li>
<li><a href="http://www.doulos.com/knowhow/sysverilog/tutorial/assertions/">SystemVerilog Assertions (SVA)</a></li>
<li><a href="http://www.accellera.org/activities/ovl">Open Verification Library (OVL)</a>, a library of predefined assertions that can be used in standard VHDL and Verilog</li>
</ul>

I especially liked OVL because it is implemented as standard VHDL/Verilog. While it has serious disadvantages (you need a lot of text for simple assertions), the one big advantage is that everybody can start using OVL right now. You just need to downlod the library from the <a href="http://www.accellera.org/activities/ovl">Accellera site</a>, and start using it in your designs.

Hearing these two talks back-to-back, I started wondering about which features should be <strong>built into a language</strong> and which features should be provided in a <strong>library</strong>. 

## Computer language design

Many software languages (such as <a href="http://en.wikipedia.org/wiki/C_%28programming_language%29">C</a> and <a href="http://en.wikipedia.org/wiki/Java_%28programming_language%29">Java</a>) have a very simple language definition, with few syntactic constructs, but most of the power of the language comes from the standard library and third-party libraries, native to the programming language. C has its <a href="http://en.wikipedia.org/wiki/C_standard_library">ISO/ANSI</a> libraries, and tons of third-party libraries. Java has the standard libraries provided by <href="http://sun.com">Sun</a> (or should I say <a href="http://www.oracle.com/us/corporate/press/018363">Oracle</a>) and numerous libraries provided by other parties such as the <a href="http://www.apache.org">Apache Software Foundation</a>. 

Putting your key functionality in libraries has two major advantages. First, the language itself remains easy. Easy to learn and easy to implement. Every undergrad computer science student can write a working C compiler, and some will actually do so in their courses. If it is easy (i.e. cheap) to build a new compiler from scratch, the economy of your programming language changes dramatically. Small companies or undergrads can easily make new viable tools that are capable of processing the <strong>entire</strong> language. This boosts innovation and lowers the price for tooling, which is exactly what you see in the software world today.

And second, if major functionality is added through libraries, there is no specific hurdle for anybody that wants to add functionality. Everybody can create a new library for their favorite language, without any modifications to their build tools (i.e. to the compiler). These new libraries can be shared, licensed, sold or (when many people agree on their added value) maybe even standardized.

## EDA and its languages

In the EDA world, people have been doing things backwards for the last two decades.
Languages like VHDL and SystemVerilog have clearly been designed (or rather: <em>negotiated</em>) in standards committees. These languages have a large amount of syntactic constructs, many of which are inconsistent with other constructs. While few hardware designers will admit to this, hardly anybody knows the <em>entire</em> syntax of VHDL (let alone SystemVerilog) by heart. People just know the safe subset they use in their designs.

On the side of libraries, traditional HDL design also makes the wrong choices. VHDL only has two files in its standard library and about half a dozen in its IEEE library, which is also standardized. These standard libraries take care of primitive datatypes (basically integers, bits and arrays of bits) and some rudimentary I/O. 

As a result of these complex languages, the barrier of entry for new tool vendors is higher than it should be. Good thing for <a href="http://synopsys.com">the</a> <a href="http://cadence.com">big</a> <a href="http://mentor.com">three</a> (or should I say <a href="http://magma-da.com">four</a>?), but not for smaller EDA companies, not for the FPGA vendors and not for hardware designers.

## Cheap parsers

So what would an Ideal World look like? In an ideal world, the <a href="http://en.wikipedia.org/wiki/Lingua_franca">lingua franca</a> of hardware design would be easy to understand for man and for machine. This means: easy to learn, easy to type and easy re-implement. From that language, each may implement their own extensions, preferably as libraries or as preprocessor steps, not requiring any change of the fundamental grammar or compiler. While the accepted linguae francae (VHDL and Verilog) are far to complex to be ideal candidates, there are some good examples of "extensions" to these languages.

A nice example of a library that enhances the functionality of VHDL is the Open Verification Library, mentioned earlier. Another example is the <a href="https://www.easics.com/products/freesics">Freesics</a> package, which enhances the I/O capabilities of VHDL.

Most newly designed hardware description languages do have their own simulator, but they do not have their own synthesizer that generates net lists. As an example, <a href="http://myhdl.org">MyHDL</a>, built on top of the <a href="http://www.python.org">Python</a> core, simulates as a Python script and has a functionality to generate both Verilog and VHDL entities for further processing.

The EDA industry has made some bad choices in the past, which inhibit innovation. As long as industrial quality (i.e. not <a href="http://home.wtal.de/software-solutions/vhdl-parser/readme.html">prototype</a> quality) parsers for the common hardware description languages cost <a href="http://www.verific.com">several hundred thousand dollars</a>, too few companies will join us in building tomorrow's EDA tools.
