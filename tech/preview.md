---
title: Sigasi Studio Preview (3.8)
layout: page
pager: true
date: 2018-03-16
comments: true
---

For those users who want to get early access to the features and bugfixes of upcoming Sigasi Studio releases, we have set up an extra release channel, called "*Sigasi Preview*".

The Sigasi Preview release channel offers more frequent releases than the official releases. This page gives an introduction to the most important changes.

Although these preview releases are less rigorously tested than than the official releases, they are stable enough for daily use.

*If you run into any problems, please let us know*.

# Current preview release

## Multiline trailing comments

Sigasi Studio has a few simple rules to [associate comments with HDL declarations][/manual/documentation#Comment Association]. In version 3.8 we have refined and extended the association rules to support multiple single line trailing comments.

The new association rules (for VHDL) are illustrated in the image below:  
![comment association rules](/releasenotes/3.8/comment_association.png "comment association rules comment association")  
Note that the (System)Verilog rules are identical.

## Markdown markup in comments

VHDL and SystemVerilog comments are now processed with a [Markdown processor](https://en.wikipedia.org/wiki/Markdown). This allows to add markup (e.g. bold, code, paragraphs, hyperlinks,...) to comments. This results in nicer hovers and documentation.

![MarkDown in comments](/releasenotes/3.8/markdown_comments.png "markdown comments")

## PDF documentation update

The blockdiagrams and state machine diagrams needed to generate the PDF documentation are now generated in a new *sigasi-doc* folder inside your project.
The generated PDF documentation will also be written in this folder instead of in the project root.


# Update or install?

You can download the Stand-alone version of the latest preview version from:

* <http://download.sigasi.com/preview/latest/com.sigasi.hdt.product-linux.gtk.x86_64.zip>
* <http://download.sigasi.com/preview/latest/com.sigasi.hdt.product-linux.gtk.x86.zip>
* <http://download.sigasi.com/preview/latest/com.sigasi.hdt.product-macosx.cocoa.x86_64.zip>
* <http://download.sigasi.com/preview/latest/com.sigasi.hdt.product-win32.win32.x86_64.zip>
* <http://download.sigasi.com/preview/latest/com.sigasi.hdt.product-win32.win32.x86.zip>

You can also update from (configure via Preferences > Install/Update > Available Software Sites > Add...) :
  http://download.sigasi.com/preview/studio/

SHA Sums ([more info][/faq#how-can-i-check-a-sha-sum]) can be checked via <http://download.sigasi.com/preview/latest/sha1.txt>

# Feedback

We welcome your feedback trough the usual channels or the comments below. Note that comments are cleared after each [official release][/releasenotes].

