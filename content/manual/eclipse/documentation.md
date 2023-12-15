---
title: "Documentation Generation"
showinmenu: true
weight: 14
pager: true
aliases:
  - /manual/documentation/
---

The Sigasi Studio documentation generator makes the documentation process more manageable by automatically extracting information from your HDL source files. The biggest advantage is that there is only a **single source** for both your design and your documentation. While this gives no guarantee that the design stays in sync with the documentation, it certainly makes it easier.

The Sigasi documentation generator has the following advantages:

* **No special coding requirements**: the plain comments in your code are extracted for the documentation; no need for special annotations. Sigasi uses the same [comment association]({{< ref "/manual/common/documentation.md#comment-association" >}}) as the hover provider. So, to document a `port`, you append a comment to a port declaration. To document an `architecture`, you put the comment just on top of the architecture.
* **All included**. All documentation processing is done in Sigasi Studio. So you do *not* need to install extra tools.
* **Fully hyperlinked**. If you export the documentation, you get a fully hyperlinked document.
* **[Live preview]({{< ref "/manual/eclipse/views.md#documentation-view" >}})**: you can see what the documentation will look like while you type your code and comments.

# Export Documentation

[Sigasi Studio 4.5]({{< ref "/releasenotes/sigasi-4.05.md" >}}) introduced exporting the documentation to HTML.

You can start a documentation export by clicking the save icon on top of the [Documentation View]({{< ref "/manual/eclipse/views.md#documentation-view" >}}) or via the **Export…** menu.  
The resulting HTML file is saved in the `sigasi-doc` folder at the root of your project.
The generated Block and State Machine Diagrams are saved in subfolders of the `sigasi-doc` folder.

Any errors are logged to the console view.

## Customization

You can read more about all the customization options [here]({{< ref "/manual/common/documentation.md" >}}).

[Sigasi Studio 4.17]({{< ref "/releasenotes/sigasi-4.17.md" >}}) introduced pagination and the problems section.

{{< figure src="/img/releasenotes/4.17/SplitPages.png" alt="Pagination and problems configuration" >}}
