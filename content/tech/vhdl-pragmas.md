---
title: "VHDL Pragmas"
layout: page 
pager: true
author: Philippe Faes
date: 2011-04-05
tags: 
  - VHDL
  - VHDL synthesis
  - VHDL syntax
  - rtl
comments: true
bannerad: true
---


In VHDL, some tools support so-called <em>compiler directives</em>. A compiler directive, or pragma is additional information that you give to the VHDL compiler (the simulator or synthesis tool). While your directive has no influence on the VHDL code itself, it changes the behavior. The IEEE, in their VHDL RTL standard, defines a pragma as <em> A generic term used to deﬁne a construct with no predeﬁned language semantics that inﬂuences how a synthesis tool will synthesize VHDL code into an equivalent hardware representation.</em>

## Metacomments and Attributes

The two ways in which you can give compiler directives in VHDL are through attributes or in comments. A compiler directive in a VHDL comment is sometimes called a <em>metacomment</em>.

Attributes are an elegant way of conveying extra information to a synthesis tool. While each tool has its own semantics for attribute compiler directives, the syntax is defined as part of the VHDL language. VHDL analysis tools can easily process the attributes, without knowledge of the specific meaning of the such attributes.

The following example tells the Synopsys Design Compiler that the component labeled as INSTANCE should not be optimized.
```vhdl
attribute DONT_TOUCH of INSTANCE : label is TRUE;
``` 

Metacomments, on the other hand are not elegant at all. Metacomments consist of text in VHDL comments, which makes them live effectively outside the VHDL language. The rest of this blog post deals with metacomments.

```vhdl
-- synthesis off
```

I could write an entire blog post about why metacomments are a bad idea, but I'll restrict myself to a single argument. <em>metacomments are not standardized.</em> Every tool vendor has created their own dialect of pragmas and thus polluted the unofficial VHDL pragma language.

As some of you know, I love to complain, but I also try to be helpful. So I'm did some research about metacomments in VHDL and I'm sharing it with the world, so that other people would not have to waste their time on this again.

## IEEE

When I said that metacomments are not standardized, I lied. The [VHDL RTL standard](http://ieeexplore.ieee.org/servlet/opac?punumber=9308) defines two (and only two) metacomments:

```vhdl
-- RTL_SYNTHESIS OFF
-- RTL_SYNTHESIS ON
```

Since this standard came long after the EDA tool vendors implemented their own metacomments, this standard does not correspond with code that is written today or with the supported pragmas in EDA tools.

While this is not explicitly specified, it would be reasonable to assume that:

* metacomment pragmas are meant to be case insensitive, 
* that whitespace can be replaced by any valid VHDL whitespace (except end-of-line characters), and 
* that a metacomment can only occur by itself in a comment (no other text in the same comment line).

If you have reason to doubt these assumptions, please talk to me in the comments section below.

In my next post, [List of known VHDL metacomment pragma's]({{< ref "list-known-vhdl-metacomment-pragmas.md" >}}), I will list as many metacomment formats as I was able to find.
