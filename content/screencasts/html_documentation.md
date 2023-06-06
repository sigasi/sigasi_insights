---
title: "HTML documentation export"
date: 2019-09-19
lastmod: 2021-06-17
pager: false
comments: false
layout: youtube
videoid: Po6TvHDXMjg
tags:
  - documentation
---

# Style your HDL documentation

In this video we show how you can use a custom CSS file to style the [generated HTML documentation]({{< ref "manual/documentation.md" >}}) of your VHDL, Verilog and SystemVerilog projects.

The automatic extraction of documentation is a powerful feature of Sigasi Studio. The [Documentation View]({{< ref "manual/views.md#documentation-view" >}}) helps to improve code comments and gives immediate feedback about the markup.

With {{< page "releasenotes/sigasi-4.12.md" >}}, a lot of additional information becomes available in the documentation, and you can augment your exported HTML document with custom CSS.

When you want to customize the CSS of your documentation, all you need to do is to place a `sigasi-doc.css` file in the root of your project.

To export your documentation, click the save icon in the Documentation View. You can choose whether to link all graphics and the custom CSS file or to embed them.
* If you choose "Embedded resources", the result is saved in one self-contained HTML file. This file is very easy to share.
* You can also choose "Linked resources". This makes Sigasi Studio write the HTML, CSS and the diagrams in separate files. This makes it easier to customize the documentation.

The result is saved in the *sigasi-doc* folder of your project. The Sigasi development team made huge efforts to make the HTML code as clean as possible.

Exporting documentation is a feature that helps our users to be more productive. Thanks to the feedback we receive, we can keep improving the generated documentation.
