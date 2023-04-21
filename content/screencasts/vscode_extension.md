---
title: "Sigasi extension for VS Code"
date: 2021-09-17
lastmod: 2021-09-17
pager: false
comments: false
layout: youtube
videoid: 5l7Hw7mN2R4
tags:
  - VS Code
---

# Sigasi extension for VS Code

It is Sigasi’s mission to make you better HDL design
and verification engineers. You all have more
important things to do than struggling with the
complicated syntax and semantics of
SystemVerilog and VHDL.

We do that by giving you instant feedback on your code.
Microsoft developed the VSCode editor and Sigasi
implemented a language server with support for
Verilog, SystemVerilog, and VHDL.

When you make a syntax error, for example when
you have an extra semicolon trailing a define, you
are notified immediately. So it is a lot easier to spot
and fix these issues.
In VHDL this works exactly the same way. Note
that we not only detect syntax problems but also
analyze, or lint, your code for more complex
problems, while you type
Sigasi also helps you with autocompletes. Sigasi
understands the context and offers smart
suggestions, much better than standard dictionary
autocompletes.
Of course, the basic editing features are also
covered, such as block selection and syntax
highlighting, etc.

Sigasi also added some extra views for working
with HDL code. To quickly navigate, check the
outline or minimap. And definitely check the
`Problems View` for a quick overview of all
remaining issues in your project.

With the Sigasi language server in VS Code you can
also very efficiently navigate your code.
When you hold down the control button on your
keyboard, all identifiers become hyperlinks to their
declaration. This allows you to very quickly
navigate around through your codebase.
And often you don’t even need to navigate to the
declaration to get the information you need. Simply
hover your mouse pointer over the identifier, to
get a nice hover with all the information you need.
Notice that it also shows you the code comments.
Isn’t that a nice incentive to better document your
code?
Navigation also works in the opposite direction
through the language-aware search features. Right-click,
select “Find All References” and you’ll get a nice
list of all places where this identifier is used.

This demo would be too long if we demo all
available features, so I’ll finish with one of the most
powerful ones: “Refactoring”
This allows you to improve the name of any
declaration in your design in a safe and consistent
way throughout your entire project.

Speaking of projects, setting up projects is easy for
straightforward projects and nicely scales with the
project’s complexity. It is a matter of pointing to the
folder with the source code. For Verilog you’ll need
to configure the include paths, for VHDL you’ll
need to configure the libraries.

This quick demo clearly showed how Sigasi
combines the simplicity of a code editor with
powerful features that help you focus on executing
your ideas.
So we invite you to try it on your own projects. The
VSCode extension itself is free, but you’ll need a
license to unlock the Sigasi language server. Sigasi
Studio users can use their existing license, new
users can request a trial license on our website.

Thank you, we look forward to your feedback.
