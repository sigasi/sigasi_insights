---
title: "Coding styles"
layout: page 
pager: true
author: Philippe Faes
date: 2012-09-14
tags: 
  - coding guidelines
comments: true
bannerad: true
---


There is a lot of debate about which [coding-conventions] are best. We know that many teams have their own coding conventions but often times they are not enforced. Let's see why and how coding guidelines can help you.

## Why are coding conventions useful?

Coding conventions are important for two reasons:

1. **Increase readability.** Because all your code uses the same style and conventions, the essence does not get blurred by the form. Increased readability in turn helps save effort and costs in code review, maintenance, bug fixing and code reuse.
2. **Increase quality.** Good coding guidelines help avoid certain constructs that are often the cause of errors.

## How can tooling help?

Writing down coding guidelines is not enough. Many teams have a large document of coding guidelines, with few team members knowing them and even fewer applying them. New team members do not spend their first week studying the coding conventions. Instead, they start coding in their own way. This way, the coding guidelines are just a dead document that cost a lot of money to produce and maintain, but it does not yield any benefits.
A centrally managed development environment can help comply with existing coding standards in [two](http://en.wikipedia.org/wiki/Off-by-one_error) ways, without patronizing the developers.

0. **Code Formatting** It is almost a trivial feature for other computer languages, but there are few tools that do a good job at formatting VHDL code. The reason is that block of code are not delimited by curly braces, but by a wide variety of begin and end clauses. We're proud to say that Sigasi has one of the best VHDL code formatters in the world, perhaps tied with Emacs VHDL mode.
1. **Conventions.** A lot of code is not typed, but really consists of generated snippets of code or instantiated templates. Each time you click *File > New*, your tool can provide a skeleton for the file type you want to create, be it entities, packages or any other file. Templates and skeleton code for complex VHDL constructs can be made to conform to your coding style. And the "New Project" wizard can be made so that it creates your default project directory structure. All these things help you and your team comply with the coding guidelines without costing any extra effort.
2. **Warnings.** For all the code that you type yourself, your development environment should be able to throw warnings. Unlike traditional (expensive) VHDL code linters which are run only once near the end of the project, Sigasi can check your [coding conventions](http://www.sigasi.com/vhdl-lint) *while you type*. Problems are fixed as soon as they appear, not at the end of the development cycle.


## Possible style checks

Here are some things that a built-in style checker could flag:

* Avoid redundant "others" in case statmentes (user configurable)
* Unused declarations (signals, variables, ...) (user configurable)
* Deprecated packages like `std_logic_unsigned` (user configurable)
* Incomplete port mapping for instantiations; implicit open ports
* Naming conventions for 
	* ports, signals, constants, ...
	* filenames
* Capitalisation of keywords and identifiers
* Required file headings
* Required directory lay-out
* Instantiation style: component or entity
* Deprecated constructs (blocks?)
* Many, many more!

If you are interested, we can [implement your coding guidelines configured in Sigasi Studio XL](http://www.sigasi.com/custom-linting).
