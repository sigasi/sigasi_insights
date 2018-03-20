---
title: "Documentation Generation"
layout: page
pager: true
---

The Sigasi Studio documentation generator makes the documentation process easier by automatically extracting information from your HDL source files. The biggest advantage is that there is only a **single source** for both your design and your documentation. While this gives no guarantee for the design staying in sync with the documentation, it certainly makes it easier.

The Sigasi documentation generator has following advantages:

* **No special coding requirements**: the plain comments in your code are extracted for the documentation, no need for special annotations. Sigasi uses the same [code/comment association][#Comment Association] as the hover provider. So to document a `port`, you append a comment to a port declaration. To document an `architecture`, you put the comment just on top of the architecture.
* **All included**. All documentation processing is done in Sigasi/Eclipse. So you do *not* need to install extra tools.
* **Fully hyperlinked PDF**. If you export the documentation, you get a fully hyperlinked PDF.
* **[Live preview][views#documentation]**: you can see what the documentation will look like while you type your code and comments.

# Export Documentation

You can export documentation for the entire project to **pdf** by
clicking the save icon or via the **Export…** menu.
Since Sigasi 2.27 this export also saves the DocBook source code, if you
have a [xl_doc] license. This enables you to customize the pdf
generation flow to your liking.

All errors are logged to the console view.

Users without a XL Doc License can also export a (watermarked) pdf.

# Comment Association

Comments in HDL code are used to add extra information or documentation to that code. Sigasi Studio uses certain rules to determine which comment belongs to which code. This is important for documentation hovers, refactoring, formatting,...
Which comment belongs to which exact code is subjective.

Sigasi Studio associates comments with HDL declarations with following rules:

* If there is a declaration before a comment and in the same line (*trailing comment*), the comment is associated with this declaration. This comment can span multiple single line comments if they are aligned.
* If there is no trailing comment and there is a comment with the same indentation on the line above the declaration, the comment is associated with this declaration. This comment can span multiple lines if all comments have the same indentation.
* *Empty lines* break comment blocks

The association rules are illustrated in the image below:  
![comment association rules](/releasenotes/3.8/comment_association.png "comment association rules comment association")  

# Comment markup with MarkDown

VHDL and SystemVerilog comments are processed with a [Markdown processor](https://en.wikipedia.org/wiki/Markdown). This allows to add markup (e.g. bold, code, paragraphs, hyperlinks,...) to comments. This results in nicer hovers and documentation.

![MarkDown in comments](/releasenotes/3.8/markdown_comments.png "markdown comments")

In hovers the complete Markdown syntax is supported. For PDF documentation generation following features are supported:

* paragraphs (add and empty comment line to break paragraphs)
* line breaks (by adding two trailing spaces)
* *emphasis* (`*emphasis*`)
* **strong** (`**strong**`)
* lists
* tables
* external links and email addresses (`<http://www.sigasi.com>`, `[Sigasi](http://www.sigasi.com)` and `<sales@sigasi.com>`)