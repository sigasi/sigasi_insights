---
title: "Generate VHDL documentation in Sigasi"
layout: page 
pager: true
author: Hendrik Eeckhaut
date: 2016-05-19
tags: 
  - documentation
  - VHDL
  - Sigasi
comments: true
---
In a previous post "[generate-vhdl-doxygen-documentation-sigasi]" I wrote about how you can use Doxygen in Sigasi to document your VHDL designs.

Although I like the basic idea of Doxygen, it has some annoying disadvantages. Doxygen tries to make the documentation process easier by extracting information from your VHDL source files. The biggest advantage is that there is only a single source for both your design and your documentation. While this gives no guarantee for the design staying in sync with the documentation, it certainly makes it easier.

The major disadvantages are:

* You need to add **special comments** to your VHDL code before any useful documentation can be generated
* Doxygen does not use a real **VHDL compiler**. So not all VHDL code is supported (e.g. VHDL 2008 features)
* **Long feedback loop**: the documentation for the entire projects needs to generated before you inspect the result.

## Sigasi documentation Generator

For these reasons, we developed an alternative based on Sigasi's internal VHDL analyzer.

Benefits:

* **No special coding requirements**: the plain comments in your code are extracted for the documentation, no need for special annotations. Sigasi uses the same code/comment association as the hover provider ([/manual/editor#Comment Association]). So to document a `port`, you append a comment to a port declaration. To document an `architecture`, you put the comment just on top of the architecture.
* **All included**. All documentation processing is done in Sigasi/Eclipse. So you do not need install extra tools.
* **Fully hyperlinked PDF**. If you export the documentation, you get a fully hyperlinked PDF.
* **Live preview**: you can see what the documentation will look like while you type your code and comments.

![](images/sigasi-docgen-preview.png)


Example:
[Example project](resources/DocumentationExample.zip)
[Example output](resources/documentation.pdf)

## How does it work?

Sigasi creates a pdf with your project's documentation in multiple steps:

1. Extracts all relevant information (content, comments,...) into an intermediate model
2. Generate all diagrams
3. Use templates to convert the result of steps 1. and 2. into a DocBook source file. ([DocBook](https://en.wikipedia.org/wiki/DocBook) is a standard for writing technical documentation.)
4. Convert the DocBook file to a PDF.
 
![](images/sigasi-docgen.png)

## Future work

* Make templates configurable
* Add Markup support (e.g. paragraphs, bold,...)
* Add option to require special comments for documentation
* Add option to document hierarchy instead of project
* Add state machine diagrams to the documentation

## Conclusion

go try this out
