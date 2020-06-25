---
title: "Documentation Generation"
showinmenu: true
weight: 14
pager: true
---

The Sigasi Studio documentation generator makes the documentation process easier by automatically extracting information from your HDL source files. The biggest advantage is that there is only a **single source** for both your design and your documentation. While this gives no guarantee for the design staying in sync with the documentation, it certainly makes it easier.

The Sigasi documentation generator has following advantages:

* **No special coding requirements**: the plain comments in your code are extracted for the documentation, no need for special annotations. Sigasi uses the same [comment association](#comment-association) as the hover provider. So to document a `port`, you append a comment to a port declaration. To document an `architecture`, you put the comment just on top of the architecture.
* **All included**. All documentation processing is done in Sigasi/Eclipse. So you do *not* need to install extra tools.
* **Fully hyperlinked**. If you export the documentation, you get a fully hyperlinked document.
* **[Live preview](/manual/views/#documentation-view)**: you can see what the documentation will look like while you type your code and comments.

# Export Documentation

You can export documentation for the **entire project** or a **specific toplevel** by clicking the save icon on top of the [Documentation View]({{< ref "/manual/views.md#documentation-view" >}}) or via the **Export…** menu.

The result is saved in the `sigasi-doc` folder in the root of your project.

[Sigasi Studio 4.5]({{< ref "/releasenotes/sigasi-4.05.md" >}}) introduced exporting the documentation to HTML.
There are 2 options when exporting the documentation.

*  Create a HTML document with linked diagrams. All Block Diagrams and State Machine Diagrams are in separate files which are linked from within the HTML document.
*  Create a HTML document with embedded diagrams. The Block Diagrams and State Machine Diagrams are embedded in the HTML document. The documentation is in a single file.

All errors are logged to the console view.

The exported HTML documentation can be further processed, as explained in {{< page "scale-diagrams-in-word.md" >}}.

## Graphics

The exported documentation includes statemachine and block diagrams.
If you created custom graphics configurations for one or more of your diagrams, these will be used instead of the default diagrams.

If you have multiple graphics configurations for the same diagrams, the alphabetically first one is used.

# Comment Association

Comments in HDL code are used to add extra information or documentation to that code.
Sigasi Studio uses certain rules to determine which comment belongs to which code.
This is important for documentation hovers, refactoring, formatting,...
Which comment belongs to which exact code is subjective.

Sigasi Studio associates comments with HDL declarations with following rules:

* If there is a declaration before a comment in the same line (*trailing comment*), the comment is associated with this declaration. This comment can span multiple single line comments if they are aligned.
* If there is no trailing comment and there is a comment with the same indentation on the line above the declaration, the comment is associated with this declaration. This comment can span multiple lines if all comments have the same indentation.
* *Empty lines* break comment blocks

The association rules are illustrated in the image below:  
{{< figure src="/img/releasenotes/3.8/comment_association.png" alt="comment association rules" >}}

The **Formatter** and **[Structural select](/screencasts/structured-select)** respect (and fix) comments according to the association rules.

## Special cases

* VHDL **components** and **component instantiations**: If a `component` (or one of its ports or generics) does not have comment itself, Sigasi Studio will use the comment of the corresponding `entity`. This also works for component instantiations.

# Comment markup with MarkDown

VHDL and SystemVerilog comments are processed with a [Markdown processor](https://en.wikipedia.org/wiki/Markdown). This allows to add markup (e.g. bold, code, paragraphs, hyperlinks,...) to comments. This results in nicer hovers and documentation.

{{< figure src="/img/releasenotes/3.8/markdown_comments.png" alt="MarkDown in comments" >}}

In hovers the complete Markdown syntax is supported. For documentation generation following features are supported:

* paragraphs (add and empty comment line to break paragraphs)
* line breaks (by adding two trailing spaces)
* *emphasis* (`*emphasis*`)
* **strong** (`**strong**`)
* lists
* tables (with alignment)
* external links and email addresses (`<https://www.sigasi.com>`, `[Sigasi](https://www.sigasi.com)` and `<sales@sigasi.com>`)

{{< page "releasenotes/sigasi-4.06.md" >}} added support for **Fenced Code blocks** in comments.
This enables you to add text to the documentation without Markdown rendering.
To add a comment *verbatim* to the documentation, surround it with with triple back ticks: ```` ```<verbatim comment>``` ````
{{< figure src="/img/releasenotes/4.6/fenced_code_blocks_comment.png" title="Verbatim comments in the documentation" >}}
