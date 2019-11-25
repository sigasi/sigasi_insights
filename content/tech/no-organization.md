---
title: "No organization"
layout: page 
pager: true
author: Philippe Faes
date: 2011-12-03
tags: 
  - best practices
  - hdt-2.0
  - howto
comments: true
bannerad: true
---


The Sigasi development environment allows a very large flexibility on how to organize VHDL projects. So much in fact, that it can become confusing. Let me outline three *recommended ways* of organizing your VHDL project. 

1. No organization (described in this article)
2. {{< page "one-design-one-folder" >}}
3. {{< page "one-ip-block-project" >}}

(One not-so-recommended way, {{< page "organizing-legacy-projects" >}}, is useful if you are working with legacy projects whose files are scattered over many folders).

In this post, I'll start with the simplest way of organizing: not organizing at all. In technical terms, we call this *editing external VHDL files*, because the files are outside of any projects.

## Setting it up

There is no set up required. You just open the VHDL file you want to edit. Either click **File > Open File...** or drag a VHDL file from your file browser to the edit area.

## Pros and Cons

The good part of "no organization" is that you don't have to organize. There is no set up time and you can get started viewing and editing a VHDL file in a matter of seconds. On the down side, several interesting features won't work:

* No errors when you use an undeclared name.
* Any name you use that is declared in another VHDL file will be treated as just that: a name. This means the following features cannot work for these names:
	* rename refactoring
	* semantic coloring
	* jump to declaration
	* hover

## When to use

If you open several VHDL files using this external files method, Sigasi will try to link them together. So some features might work, depending on how which VHDL files you have opened.

We suggest you use the single VHDL file mode for quickly looking at a file and for making small changes. If you are going to work seriously on your project, we suggest you use one of the two other methods.
