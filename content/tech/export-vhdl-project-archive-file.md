---
title: "Export a VHDL project to an archive file"
layout: page
pager: true
author: Hendrik Eeckhaut
date: 2009-10-19
tags:
  - hdt-2.0
  - howto
comments: true
bannerad: true
---


If you want to mail a Sigasi VHDL project to a colleague (or to support), you can easily archive your project within Sigasi  itself.

Just right-click on your project in the project explorer and select <strong>Export...</strong>

![](/img/tech/export_1.png)

Next select <strong>Archive File</strong>

![](/img/tech/export_2.png)

In the third and last step, you can exclude some files from the archive. Make sure you include the vhdl source files and the <code>.project</code> and <code>.library_mapping.xml</code> files, since these contain the necessary project information.

In this step you can also select some extra options (e.g. choose between tar and zip).

You also have to specify a name for the archive.

![](/img/tech/export_3.png)

That is it.

If you want to mail your project to support, do not forget to add the [log file](/faq#where-can-i-find-the-log-file), and the external libraries to your mail.
