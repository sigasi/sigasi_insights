---
title: "Generate VHDL documentation in Sigasi Studio"
layout: page 
pager: true
author: Hendrik Eeckhaut
date: 2016-05-19
lastmod: 2020-06-25
tags: 
  - documentation
  - VHDL
  - Sigasi Studio
comments: true
bannerad: true
---

In a previous post "{{< page "/tech/generate-vhdl-doxygen-documentation-sigasi" >}}", I wrote about how you can use Doxygen in Sigasi to document your VHDL designs.

Doxygen tries to make the documentation process easier by extracting information from your VHDL source files. The biggest advantage is that there is only a single source for both your design and your documentation. While this gives no guarantee for the design staying in sync with the documentation, it certainly makes it easier.

But although I like the base idea of Doxygen, it has some annoying disadvantages:

* You need to add **special comments** to your VHDL code before any useful documentation can be generated
* Doxygen does not use a real **VHDL compiler**. So not all VHDL code is supported (e.g. VHDL 2008 features)
* A lot of work to set up: To create PDFs with basic diagrams, you do no only need to install Doxygen, but also DOT and LaTeX. Especially LaTeX can be a real challenge...
* The output can be confusing: *"Inheritance diagram"*? *"The output for this **class** was generated ..."*? This terminology makes sense for C++ projects, but not for HDLs.
* **Long feedback loop**: the documentation for the entire projects needs to generated before you can inspect the result.

# Sigasi Studio documentation Generator

For these reasons, we developed an alternative, based on Sigasi Studio's internal VHDL analyzer. We stuck with the base idea, but followed a different approach to overcome the disadvantages.

The new Sigasi Studio documentation generator has following advantages:

* **No special coding requirements**: the plain comments in your code are extracted for the documentation, no need for special annotations. Sigasi Studio uses the same code/comment association as the hover provider (See "[Comment Association](/manual/documentation#comment-association)"). So to document a `port`, you append a comment to a port declaration. To document an `architecture`, you put the comment just on top of the architecture.
* **All included**. All documentation processing is done in Sigasi Studio/Eclipse. So you do *not* need to install extra tools.
* **Fully hyperlinked**. If you export the documentation, you get a fully hyperlinked HTML document.
* **Live preview**: you can see what the documentation will look like while you type your code and comments.

[![Live preview](/img/manual/documentationview.png)]({{< ref "/manual/views.md#documentation-view" >}})

# How does it work?

Sigasi Studio creates the HTML document with your project's documentation in multiple steps:

1. Extract all relevant information (content, comments,...) from your project
1. Generate all diagrams
1. Generate a HTML document
1. The diagrams can optionally be embedded in the generated document
 
The generated HTML document can be customized further, e.g. by applying a Word macro as explained in {{< page "scale-diagrams-in-word.md" >}}.


# Future work

* Although Sigasi Studio already uses templates internally, these templates are not really user-configurable. In a future release we want to make these templates customizable. This way the exact content of the documentation can be easily tweaked.
* Add [state machine diagrams](/manual/views#state-machine-view) to the documentation
* Add Markup support. The VHDL comments are currently copied verbatim to the output. In a future release, we need to come up with a way to add markup (e.g. paragraphs, bold, italic, lists, ...)
* Some users reported they actually prefer special comments (e.g. Doxygen's `!--`) to mark documentation. They like to explicitly indicate what text gets into the documentation (and what not). So in a future release, we may add the option to require special comments for documentation.
* In the current version, we generate documentation for the entire project. Some customers indicated, that they'd prefer to document only the hierarchy of the active toplevel.

# Conclusion

We developed an easy but powerful alternative for DoxyGen. It is very easy to get started with, and encourages good practices.
So I invite you to **try this out yourself**. Even with a {{< starter >}} license, you can open the [Documenation Preview View](/manual/views#documentation-view).

# Update 2020-06-25
This article was revised for the [4.8 release]({{< ref "/releasenotes/sigasi-4.08.md" >}}) where the deprecated PDF generation was removed.
