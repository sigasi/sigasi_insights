---
title: Sigasi Studio 3.8
layout: page
pager: true
date: 2018-03-28
comments: true
---
Sigasi Studio 3.8 brings ...

# Documentation and hover improvements

## Multiline trailing comments

Sigasi Studio has a few simple rules to [associate comments with HDL declarations][/manual/editor#comment-association]. In version 3.8 we have refined and extended the association rules to support multiple single line trailing comments.

The new association rules (for VHDL) are illustrated in the image below:  
![comment association rules](3.8/comment_association.png "comment association rules comment association")  
Note that the (System)Verilog rules are identical.

## Markdown markup in comments

VHDL and SystemVerilog comments are now processed with a [Markdown processor](https://en.wikipedia.org/wiki/Markdown). This allows to add markup (e.g. bold, code, paragraphs, hyperlinks,...) to comments. This results in nicer hovers and documentation.

![MarkDown in comments](3.8/markdown_comments.png "markdown comments")

## PDF documentation update

The blockdiagrams and state machine diagrams needed to generate the PDF documentation are now generated in a new *sigasi-doc* folder inside your project.
The generated PDF documentation will also be written in this folder instead of in the project root.

# Dependencies Viewer (Mixed language)


# Other new and noteworthy improvements

## VHDL

## Verilog

# Bug fixes


# How to update?

If you have Sigasi Studio 3 installed, you can [update][/manual/setup#Software Updates] or [download a fresh install of the latest version][download_latest].