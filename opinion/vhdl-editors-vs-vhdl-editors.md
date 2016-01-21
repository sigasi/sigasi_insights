---
title: "VHDL Editors vs. VHDL Editors"
layout: page 
pager: true
author: Philippe Faes
date: 2010-12-20
tags: 
  - VIM
  - VI
  - VHDL editor
  - gVIM
  - Emacs
comments: true
---
## A (relatively) painless upgrade path for VI and Emacs users

One editor is not as good as the next. Likewise, one VHDL editor is not as good as the next. In fact, even the word VHDL <em>editor</em> is not chosen correctly. You want to <em>design your hardware</em>, you don't want to <em>edit VHDL</em>. VHDL (or Verilog) is just a means to an end. 

So you choose the best tool for the job: not an tool that pushes snippets of text around, but a tool that understands the VHDL code you type. Not an editor, but an Intelligent Development Environment (IDE). 

What's in a name? -- An IDE by any other name should make you more productive.

So, you browse the web and finally find a VHDL development environment that understands your code. It helps you read old code. It helps you write new code. It's just great. <em>Except for one thing</em>. The big problem is that you are sooo used to your old key bindings. The new IDE just does not feel like <em>home</em>.

Today, the Eclipse community comes to your rescue. There are two plugins that emulate the behavior of two of the most popular VHDL editors on the planet: VI and Emacs (Yes, yes. That includes VIm, gVIM, Xemacs and the whole family.) Did I mention that these plugins work nicely together with the Sigasi VHDL plugin?

<ul>
<li>VI addicts should try out <a href="http://vrapper.sourceforge.net/home/">vrapper</a>.
<li>Emacs worshipers may want to look at <a href="http://marketplace.eclipse.org/content/emacs">Emacs+</a>
</ul>

Of course, there are other Emacs and VI emulators for Eclipse. Give them a shot and let us know what you think!