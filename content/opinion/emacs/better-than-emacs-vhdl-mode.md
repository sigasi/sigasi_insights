---
title: "Better than Emacs VHDL mode"
layout: page 
author: Philippe Faes
date: 2011-05-07
tags: 
  - Emacs
  - VHDL
comments: true
bannerad: true
---


The big difference in approach between Sigasi and Emacs VHDL mode is this:  Emacs uses **regular expressions** to make *guesses* about your code, while Sigasi has a **real parser** that *understands* your VHDL code. As a result you get:

* **Error messages while you type.** The ultra fast built-in compiler gives you error messages while you are typing, much like a spell checker in a word processor.
* **Navigation** Every declaration is just one button away. Do you want to go to the declaration of a certain constant, signal or entity? Just press F3!
* **Mouse-over hovers** Learn about any identifier just by hovering your mouse over the name.
* **Compile your files** Export the correct build order and library mapping of your VHDL files as an [automatically updated csv file](/manual/tools.html#auto-export).

As a special, non technical criterium:

* Sigasi is **commercially supported**. If you have a question, we can give you an answer. If you want additional services or features, you can contract us.
* Sigasi is built on the industry-standard **Eclipse** platform. You can combine Sigasi with numerous high-quality plug-ins for version control, issue tracking, code review and much more.

People migrating from Emacs to Sigasi can use the [Emacs emulator mode](/faq#do-you-have-an-emacs-emulation-mode-so-that-i-can-use-the-emacs-key-bindings), which offers the same key bindings as Emacs (for example: `C-x C-c` to save).

## Blog posts
