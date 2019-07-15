---
title: "Emacs Syntax errors"
layout: page 
pager: true
author: Philippe Faes
date: 2011-06-01
tags: 
  - Emacs
  - VHDL
comments: true
bannerad: true
---

Here is a new example of why Sigasi is [better than Emacs VHDL mode](/opinion/emacs): syntax checking.

In Emacs VHDL mode, there is no built-in syntax checker. This design
decision was perfectly reasonable in the early 1990’s, when the Emacs
VHDL mode was created. Because of the processing power and the memory
available at that time, compilation was a slow process which was best
handled by specialized tools. So Emacs uses a simulator (like ModelSim)
to check the syntax of VHDL code.

Batch compilation
-----------------

Let’s assume you have installed ModelSim and configured Emacs
accordingly (I won’t go into that). Syntax checking would go something
like this:

-   Write some interesting code
-   Trigger a ModelSim build (usually, this can be done with a key
    combination, like `CTRL-C`, `CTRL-K`)
-   The list of errors shows up at the bottom of your screen. For each
    error:
    -   Go to the error location in the code (key combination: `` CTRL-X ` ``)
    -   Read the context; you have been typing for a while, so you need
        to think a bit before you figure out the problem.
    -   Fix the error

Type time compilation
---------------------

Modern development environment, including Sigasi HDT 2.0 have type time
compilation. A first class of errors (syntax errors and undefined
identifiers) will be marked <em>as you type</em>. More complex errors
and linter warnings take longer to calculate, so these checks are
performed, much like Emacs does it, only when the user requests them.

-   Write some interesting code
-   Whenever you type a VHDL syntax error, this is marked on your editor
    screen.
-   You still remember what you were typing two seconds ago, so you can
    fix the error easily.

![Type-time error checking in Sigasi HDT 2.0](/img/opinion/emacs/type_time_error.png)

Feedback loop and word processors
---------------------------------

The difference between the ways of working lies in the shorter feedback
loop. As soon as you type an error, you get a chance to fix it. This
takes less time and effort because you do not need to make a mental
context switch. Engineers understand the positive implications of a
“shorter feedback loop”.

But even my kid’s kindergarten teacher (who is smart, but not very
technological) remembers older word processing software. This is how it
used to work: First, you write a letter. Then, you run the spell
checker. Each time you encounter misspelled word, you have to read the
whole sentence to figure out what you wanted to say. Modern word
processors and editors provide type-time spell checking: each time you
write an errr [sic](http://en.wikipedia.org/wiki/Sic) the
word is underlined in red. You fix it immediately. The result is that
your letter is finished sooner with less spelling misstakes. Instant
feedback is everywhere. Even my web browser is correcting me as I’m
typing this blog post!

If professional writers use **instant feedback** technology to help them
do their jobs, then why don’t hardware design engineers?
