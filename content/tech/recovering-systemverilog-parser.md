---
title: "Recovering Verilog and SystemVerilog Parser"
pager: true
author: Bart Brosens
date: 2020-01-31
tags:
  - recovering parser
  - compiler
  - Verilog
  - SystemVerilog
comments: true
bannerad: true
---

When you’re writing HDL code, be it in SystemVerilog, Verilog or VHDL, your code is broken or incomplete most of the time.
Any regular compiler stops on the first error it encounters and will often only show an obscure error message.
At Sigasi, we are convinced productivity and happiness of HDL developers increase when they receive immediate feedback on broken code.

## Why does it make sense to compile incomplete SystemVerilog and Verilog code?

While you're writing code, you know the code is incomplete. So you'll probably never compile it in that state.
Instead, you finish the code and only then run `make` or whatever command you use to start the compiler.

However, this way the time between writing code and seing the result of the compiler is very long.
A regular compiler fails on the first syntax error it encounters.
Maybe a simple typo causes you having to search your code for the line the compiler error message is pointing to.
By the time you resolved the last error in your code, the mental image of the code you've written might have faded.

If you have a tool at your disposal that instantaneously highlights errors, the errors can be resolved without interrupting your flow of thoughts.

## Our solution

{{< figure src="/img/tech/recovering-sv.png" link="/img/tech/recovering-sv.png" width="400" class="uk-align-right" >}}

The recovering parser developed by Sigasi allows to compile your code while it is broken.
Sigasi Studio is compiling your code in the background at type-time, and you receive immediate feedback on syntax errors while you enter code.
Since the compiler doesn't stop on the first error, you can continue beyond errors in your code.

The exact locations of the errors in your files and projects is shown while you're typing.
Errors and warnings are underlined not only in the exact position, they are also indicated in the gutter and the file marker bar within the Editor View and listed in a dedicated Problems View.

Additional features like the Outline View or the Graphical Views on your code structure also update immediately.
For a lot of common mistakes or errors introduced while refactoring code, Sigasi Studio offers Quick Fixes which allow to correct issues with a single mouse click or keyboard action.

