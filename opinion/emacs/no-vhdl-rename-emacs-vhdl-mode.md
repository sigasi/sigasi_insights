---
title: "No VHDL Rename in Emacs VHDL mode"
layout: page 
pager: true
author: Philippe Faes
date: 2011-06-15
tags: 
  - code reuse
  - Emacs
  - VHDL
comments: true
---
In my series of how Sigasi is [index], this entry
deals with code reuse, more specifically with **renaming**.

Code Reuse
comments: true
----------

The situation where you write code once, produce a chip and never look
at that code again is pretty rare. Usually, there is going to be a
follow-up project. You might build an improved version of the chip, or
you might want to reuse an old component for a completely new chip.

It turns out that reuse of hardware designs is not straightforward. You
could try to create a library of components and reuse them without any
modification. This *black box reuse* is common in software land.
Hardware designers usually call this reusable IP blocks. However, this
requires that the blocks are designed with reuse in mind. Usually, you
would encounter blocks that were not designed for reuse. You will need
to modify some internals of you legacy code, either to improve timing or
resource usage, or to alter the behavior for your new specifications.
This kind of *white box reuse*, involves a lot of code inspection and a
lot of small modifications to the code. It is a tiresome and error prone
process. You are going to need all the help you can get.

There are some important features for code comprehension and [code navigation](vhdl-emacs-mode-navigation-using-ctags-are-broken.html)
that you will need in order to be efficient at reusing your legacy code.
Then there is the act of modifying the code. There are three things I
want to talk about: naming conventions, cleaning up code layout and code
encapsulation. For today, let’s stick to naming conventions.

Global Rename
comments: true
-------------

Suppose you have some legacy code that uses the signal `clock` instead
of your corporate standard `clk`. It would be better for all of the code
to have a uniform look, so you want to fix this. Even more importantly,
your scripts (for building, documenting and preprocessing) rely on the
specific name `clk`, so you *need* to fix this.

You might be a good scripter, so you write a oneliner that replaces
`clock` with `clk` in all of your VHDL files:
```bash
sed -i -e 's/clock/clk/' *.vhd
```
This looks OK, but there are several ways a global search-and-replace
can go wrong:
```vhdl
  signal clkwise : std_logic; -- indicate if we rotate the data clkwise
  signal clk : std_logic; -- clk for main clk domain
  signal pci_clk : std_logic; -- clk for PCI clk domain
```

I’m sure you can create a script that only replaces the word `clock` if
it is surrounded by white space or by punctuation marks, and not if it
is a line comment. Your next problem will be supporting multi-line
comments. The point is: VHDL Emacs does not do all of this for you;
you’re on your own. If you are a really nice guy you might read this,
script a new elisp command and send it to
[Reto](http://www.iis.ee.ethz.ch/~zimmi/emacs/vhdl-mode.html) to be
incorporated in the next update of the Emacs VHDL mode. Let’s see if
your new improvement would solve the next problem.

Specific Renaming
comments: true
-----------------

Reusing legacy code, you could be facing a design where all modules name
their main input signal `data_in`. This is not helpful if you try to
read it. You want to change these names to something like:
`temperature_in`, `video_in`, `mode_in` or whatever. Global search and
replace will not help you because you need to be surgically accurate in
replacing the correct names, perhaps in dozens of files. Not only will
`sed` be wildly insufficient. So will any reasonable amount of lisp
scripting. The same word can mean different things in a single file;
even on the same line in a single file. If your script doesn’t have all
VHDL scoping rules figured out, it won’t work.

You’ve guessed what I’m about to say next: Sigasi HDT *solves* this
problem. There’s a **two minute screencast**, [/screencasts/rename_refactoring], that
demonstrates our rename refactoring. We can do this because Sigasi HDT
analyzes the entire VHDL project and tries to find the declaration for
every name it encounters.

Not Just a Missing Feature
comments: true
--------------------------

As I did in most of my [previous posts on Emacs VHDL](.), I have
pointed out a *fundamental* limitation in Emacs, not just a missing
feature. Certain extremely useful operations, like navigation and
renaming, require a full blown VHDL parser. The Emacs VHDL mode goes a
long way using regular expressions. It is indeed surprising to see how
many cool things Reto was able to pull of with regex matching. But it
will be hard to take this technology one step further. And it will be
impossible to take it two or three steps further.

Disclaimer
comments: true
----------

Sigasi’s rename refactoring is still inaccurate in some cases: for
functions, procedures and enumeration literals. This is because these
elements can have their names
[overloaded](http://en.wikipedia.org/wiki/Method_overloading). This is,
however not a fundamental limitation. It is just something we haven’t
gotten around to yet.