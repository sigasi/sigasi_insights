---
title: "Documentation Generation"
showinmenu: true
weight: 5
pager: true
aliases:
  - /vscode/documentation/
---

The Sigasi Studio documentation generator makes the documentation process more manageable by automatically extracting information from your HDL source files. The biggest advantage is that there is only a **single source** for both your design and your documentation. While this gives no guarantee that the design stays in sync with the documentation, it certainly makes it easier.

The Sigasi documentation generator has the following advantages:

* **No special coding requirements**: the plain comments in your code are extracted for the documentation; no need for special annotations. Sigasi uses the same [comment association]({{< ref "/manual/common/documentation.md#comment-association" >}}) as the hover provider. So, to document a `port`, you append a comment to a port declaration. To document an `architecture`, you put the comment just on top of the architecture.
* **All included**. All documentation processing is done in Sigasi/Eclipse. So you do *not* need to install extra tools.
* **Fully hyperlinked**. If you export the documentation, you get a fully hyperlinked document.

# Export Documentation

From [5.4]({{< ref "/releasenotes/sigasi-5.04.md#documentation-generation" >}}) onward, the Sigasi extension supports exporting documentation.
To export documentation, follow the steps below:

* Open the _Command Palette_ (**Ctrl+Shift+P**) and type **Export**
* Select **Sigasi: Export Project Documentation**
* Follow the wizard steps to customize your documentation

## Customization

You can read more about all the customization options [here]({{< ref "/manual/common/documentation.md" >}}).

**Note:** Diagram rendering is currently not supported in Remote SSH setups.

