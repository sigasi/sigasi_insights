---
title: "Exploring GitHub Copilot"
layout: page
pager: true
author: Onur Atar
date: 2023-12-04
tags:
  - vs-code
  - autocomplete 
comments: true
bannerad: true
---

Two years ago, GitHub Copilot was released as an AI-powered coding assistant. Since then, it has been widely used by software developers. 
So far, it has delivered very good results with programming languages such as C++ or Python. 
We decided to run some experiments to see how it would perform with hardware description languages. Here is what we have found out. 

## Installation

The [GitHub Copilot](https://github.com/features/copilot) VS Code extension is installed in two parts:
* Github Copilot
* Github Copilot Chat

![GitHub Copilot installation](/img/tech/github-copilot/github-copilot-installation.png)

So, along with a coding assistant, it also provides an in-editor chatbot.
You can ask a question by typing `q:` as a comment. 
Then the chatbot's response starts with `a:`. Here is an example:

![GitHub Copilot chat](/img/tech/github-copilot/github-copilot-chat.png)

When the Sigasi extension was also enabled, the chatbot interestingly generated the answers below.
It claimed that it was using Sigasi.

![GitHub Copilot chat](/img/tech/github-copilot/github-copilot-sigasi.png)

However, the chatbot is not deterministic and we were not able to generate the same dialog with the same inputs every time.

## Code Suggestions

The GitHub Copilot extension provides code suggestions in three ways. 

* When the cursor is on a line, after a few seconds, a grayed-out code suggestion appears (if the cursor is at the “right place”).
* When you define something in comments and hit ENTER, grayed-out code appears, providing what you asked for.
* When you start typing, an autocomplete suggestion appears.

You can declare signals or types by abstractly describing them. 
When you type a comment as shown below and hit ENTER, a declaration suggestion appears.

![GitHub Copilot signal declaration](/img/tech/github-copilot/github-copilot-signal-declaration.png)

When you hit TAB, the code is inserted that declares a signal according to the description.
We were able to declare the below signals and a type by simply describing them.

![GitHub Copilot signal declarations](/img/tech/github-copilot/github-copilot-signal-declarations.png)

The extension also suggested a signal declaration named `ccc`, probably because the other signals were named `aaa` and `bbb`. 
However, it suggested this after the `begin` keyword. So, it appears that GitHub Copilot is not very aware of VHDL keywords and declarative regions. 

![GitHub Copilot wrong signal declaration](/img/tech/github-copilot/github-copilot-wrong-signal-declaration.png)

With processes and procedures, GitHub Copilot performed a bit better. 
Before the `begin` keyword, it suggested a procedure when `proce` was typed. 
Note that the suggested `procedure` was named randomly and did not reflect the context of the code. 

![GitHub Copilot procedure](/img/tech/github-copilot/github-copilot-procedure.png)

Following the `begin` keyword, it suggested a process when `proce` was typed.

![GitHub Copilot process](/img/tech/github-copilot/github-copilot-process.png)

The process was constructed with the existing ports and signals (the context) but with random functionality.
So, with procedures and processes, GitHub Copilot performed better in terms of declarative region awareness and context. 

## Inserting Entire Entities/Modules

We observed more intelligent behavior when writing very simple code. 
The videos found below are examples of how GitHub Copilot was able to write entire entities and modules when they are described very clearly (and when the design is very simple).
Sigasi was enabled when generating these examples, meaning that generated code by GitHub Copilot was subject to Sigasi's syntax and [linting]({{< ref "manual/rules" >}}) checks. 
Sigasi features such as [semantic coloring]({{< ref "manual/eclipse/editor.md#code-highlighting-syntax-coloring" >}}) and [code formatting]({{< ref "manual/eclipse/editor.md#code-formatting" >}}) were also active.

### Verilog Multiplexer

Here is a Verilog multiplexer example. Note how the Copilot suggests the code based on the module name.  
In this example, Sigasi marks warnings due to default [Verilog linting]({{< ref "manual/eclipse/linting-verilog.md" >}}) settings.

{{< video_control src="/img/tech/github-copilot/github-copilot-verilog-mux-video.mp4" link="/img/tech/github-copilot/github-copilot-verilog-mux-video.mp4" title="Verilog multiplexer" >}}

### VHDL Multiplexer

Here is a VHDL multiplexer example. Code suggestions are made similarly to the Verilog multiplexer example. 
Also, note how the Copilot complies with naming conventions when suggesting the architecture name.

{{< video_control src="/img/tech/github-copilot/github-copilot-vhdl-mux-video.mp4" link="/img/tech/github-copilot/github-copilot-vhdl-mux-video.mp4" title="VHDL multiplexer" >}}

### VHDL RAM with Naming Conventions

Here is a VHDL RAM example. In this example, we first defined simple naming conventions, also with the assistance of GitHub Copilot. Note how it complied with them.

{{< video_control src="/img/tech/github-copilot/github-copilot-vhdl-ram-video.mp4" link="/img/tech/github-copilot/github-copilot-vhdl-ram-video.mp4" title="VHDL RAM with naming conventions" >}}

## Conclusion

We were able to generate good results with very simple examples. Code suggestions were always syntactically correct.
However, there are a few disadvantages.

* When you hit TAB, the code is inserted but you cannot easily modify it, unlike Sigasi's template editing mode. 
* Suggestions sometimes take too long to appear (as much as 3 seconds).
* If you want an alternative to the suggested code, you have to keep typing until it comes up with an alternative suggestion.

As shown in the example videos, GitHub Copilot's suggestions are exciting and give promising results, but it looks like it is too early to use it with HDLs.
It's also worth mentioning that GitHub Copilot is not a free tool.

## Sigasi Studio vs. GitHub Copilot

GitHub Copilot can only be compared to Sigasi's [autocompletion]({{< ref "manual/eclipse/editor.md#autocomplete-and-content-assist" >}}) feature.
GitHub Copilot has only one feature, namely autocomplete-style code suggestions, whereas Sigasi Studio has many features and autocompletion is just one of them.

GitHub Copilot uses [machine learning](https://en.wikipedia.org/wiki/Machine_learning) and suggests code based on what it learned and changes the suggested code as you keep typing. 
It tries to understand what you are trying to code. 
Sigasi's autocompletion feature is a deterministic [expert system](https://en.wikipedia.org/wiki/Expert_system) and based on either static (e.g., a skeleton `process`) or dynamic (based on design units in your project) templates. 

Moreover, Sigasi's autocompletion feature is context-aware, e.g., a component declaration is suggested in the declarative region but a component/entity instantiation is suggested after the `begin` keyword.
In a way, Sigasi's autocompletion feature is also based on AI, but without machine learning capabilities.

When it comes to creating your code more easily, Sigasi's context-aware deterministic autocompletion feature will at this point serve you better overall.