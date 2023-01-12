---
title: "Sigasi for VS Code Extension"
layout: single
pager: true
---

The Sigasi extension for [Visual Studio Code] brings the Sigasi analysis engine and much of its productivity technology to VS Code.

You can use your existing Sigasi Studio license or get a free trial license from <https://www.sigasi.com/try/>.

Please contact [support+vscode@sigasi.com](mailto:support+vscode@sigasi.com) with any feedback or questions that aren't answered in the documentation.

## Documentation

Documentation of the Sigasi extension for VS Code is split in the following parts.

* [Requirements, Installation, and Configuration]({{< ref "vscode/setup.md" >}})
* [Project Setup]({{< ref "vscode/projects.md" >}})
* [VS Code Views]({{< ref "vscode/views.md" >}})
* [Remote Development]({{< ref "vscode/remote.md" >}})
* [FAQ]({{< ref "vscode/faq.md" >}})

Also make sure to complete the extension's **Walkthrough** which you can find in the VS Code **Get Started** tab.

## Tutorial and Demo Projects

A tutorial project and demo project are available through the extension.

### Tutorial

The tutorial project covers most of Sigasi's features.
Press **Ctrl+Shift+P** and start typing **Sigasi: Create Tutorial Project** to open the tutorial.

When the extension has finished processing, you will see a number of issues for some files pop up in the file explorer.

{{< figure src="/img/vscode/VSCodeErrorsWarnings.png" alt="Errors and Warnings status bar indicator" class="uk-align-right" width="69" >}}
There will also be a number of errors and warnings in the status bar.
When clicking the error and warning indicator in the status bar, the Problems View opens.
In there, you can navigate through the error and warning markers for the project.

### Demo

You can also open a somewhat larger demo project using the command **Sigasi: Create Demo Project**.

## Further Reading

These articles give you more information on using the VS Code extension.

{{< related tag="VS Code" >}}

[Visual Studio Code]: https://code.visualstudio.com/
