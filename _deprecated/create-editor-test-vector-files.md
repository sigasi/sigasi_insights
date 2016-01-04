---
title: "Create Editor for test vector files"
layout: page 
pager: true
author: philippe.faes (Sigasi)
date: 2011-03-07
tags: 
  - internship
---
This is a proposal for a Master of Engineering project. In order to apply, please read the page on <a href="http://www.sigasi.com/internships">Internships and Thesis Proposals</a>.

<ul>
<li><strong>Project:</strong> Master of Engineering project</dd>
<li><strong>Skills:</strong> Java, Eclipse</dd>
<li><strong>Target audience:</strong> electronics or computer science engineers
</ul>

In the field of digital hardware design, engineers often use a space separated values (SSV) file format. These files, often called test vector files, can easily be read an written from hardware design languages like VHDL and Verilog. Standard Unix tools and editors can open and process these files. Still, for an engineer, working in an SSV file is cumbersome. The values in these files can be decimal, hexadecimal or binary, but a simple text editor does not understand the values. It just considers everything to be ASCII text. It is very painful to keep values aligned, sort rows, or change representations from one format to another.

```
0 00000004 00000004 00000008 0
0 FFFFFFFF FFFFFFFF FFFFFFFE 1
0 0000AAAA AAAA0000 AAAAAAAA 0
0 158D7129 E4C28B56 FA4FFC7F 0
1 00000001 00000001 00000000 0
1 FFFFFFFE FFFFFFFF 00000001 1
1 00000002 00000004 00000002 1
```
<strong>Example test vector file (`example.vec`)</strong>

Your task is to create a new file editor, as an Eclipse plugin, that can handle these test vectors. You will use the state-of-the-art Eclipse framework to provide a spreadsheet-like view on a simple SSV file. You will work with the online hardware designers community to create a solid product specification. You will build a solution that makes it easy for the user to convert hex, decimal and binary values. The user will be able to switch between a spreadsheet-like view and a plain text view.
Your editor will be released under <a href="http://www.eclipse.org/legal/epl-v10.html">EPL</a>, the standard open-source Eclipse license, so that hardware designers worldwide can use your solution. Your goal should be to create the new <em>de-facto</em> standard editor for this popular file format.

