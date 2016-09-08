---
title: "Four (and a half) ways to write VHDL instantiations"
layout: page 
pager: true
author: Philippe Faes
date: 2009-01-18
tags: 
  - VHDL
comments: true
bannerad: true
---


Most hardware designers stick to their own way of typing VHDL instantiations. In this post, I list four styles that I've come across.

The most common way of writing an instantiation, is by declaring a component for the entity you want to instantiate. There are a few different places where you can write your component declaration.

## One: VHDL Component in the VHDL Architecture

You can write the VHDL component declaration in the declarative part of the architecture. The advantage of this style, is that you can see the generic list and port list of your component in the same file you are typing your instantiation. On the downside, if you want to instantiate that entity many times, you will have many copies of the component in many different places.

## Two: VHDL Component in a VHDL Package
To avoid having to copy your component in a dozen different files, you can create a small package that contains just that one component, say package `foobar_pkg` which contains component `foobar`. It is possible to put this package in its own file, but I've seen it placed in the same file as its corresponding entity and an architecture.

## Three: VHDL Component is a project-global package

If you don't want a new package for every single entity, you can also lump together all components in one VHDL package. I would not recommend it, because this package may grow to be huge, and you will need to cut it up later when you want to reuse a few of your entities in a new project.

Another common approach is to use this style in combination with the first or the second style: put most of the component declarations in a component package (or in the architecture) and a few in a global package.

## Four: VHDL Entity Instantiations

Since VHDL'93, you really don't need VHDL components any more. You can instantiate the entity directly:
```vhdl
labelname: entity work.entityName(architectureName)
```
instead of the old
```vhdl
labelname: componentName
```

This saves you a lot of typing. One downside: entity instantiations will not let you work with VHDL configurations. You either specify the architecture explicitly, or if you don't the compile order determines which architecture is selected.

## Four-and-a-half

To distinguish between component instantiations and entity instantiations, you can also use the word `component` explicitly in options 1 through 3, like this:
```vhdl
labelname: component componentName
```
I've never seen this in an actual VHDL project, but let me know if you have!

## Roundup

To summarize, I suggest you use entity instantiation if you do not need VHDL configurations. If you do need them, I personally prefer to put each component in its own component-package, but different styles are possible.
