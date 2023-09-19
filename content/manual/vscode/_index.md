---
title: "Sigasi Studio for VS Code"
layout: single
pager: true
aliases:
  - /vscode/
menu:
  insightsmenu:
    parent: Manual
    weight: 30
---

The [Sigasi extension](https://marketplace.visualstudio.com/items?itemName=Sigasi.sigasi-vscode) for [Visual Studio Code] brings the Sigasi analysis engine and much of its productivity technology to VS Code.

You can use your existing Sigasi Studio license or get a free trial license from <https://www.sigasi.com/try/>.

Please contact [support+vscode@sigasi.com](mailto:support+vscode@sigasi.com) with any feedback or questions that aren't answered in the documentation.

## Documentation

Documentation of the Sigasi extension for VS Code is split in the following parts.

* [Requirements, Installation, and Configuration]({{< ref "/manual/vscode/setup.md" >}})
* [Project Setup]({{< ref "/manual/vscode/projects.md" >}})
* [VS Code Views]({{< ref "/manual/vscode/views.md" >}})
* [Remote Development]({{< ref "/manual/vscode/remote.md" >}})
* [FAQ]({{< ref "/manual/vscode/faq.md" >}})

Also make sure to complete the extension's **Walkthrough** which you can find in the VS Code **Get Started** tab.

## Creating a Project From Scratch

First thing you need to do after installing the extension in VS Code, is make sure the license is configured. 
This can be done following the steps from the **[extension settings page]({{< ref "/manual/vscode/setup#settings" >}})**.

Then, once you have opened the folder with your design files, you can open the Command Palette (**Ctrl+Shift+P**) and run the command **Sigasi: Create New XXX Project** with **XXX** being either VHDL or Verilog/SystemVerilog.

{{< figure src="/img/vscode/VSCodeCreateNewProject.png" link="/img/vscode/VSCodeCreateNewProject.png" alt="VS Code: Create New Project"  width="900" >}}
 
Next, you just need to indicate the root folder of the project to create a `.project` file in your folder containing the project configurations. 

Once the `.project` file is detected, the Sigasi extension will fully start, which you can notice by the appearance of a **[Project View]({{< ref "/manual/vscode/views.md#project-view" >}})** below the default VSC file explorer. 
From then on, you should use the **Project View** instead of the VSC file explorer. 

If you have a mixed language project, it doesn't matter whether you initially choose VHDL or Verilog/SystemVerilog, since now you can add support for the other one using the command **Sigasi: Add XXX Support**.

{{< figure src="/img/vscode/VSCodeAddSupport.png" link="/img/vscode/VSCodeAddSupport.png" alt="VS Code: Add Language Support"  width="900" >}}

Now your project should be fully ready to work with, and proper HDL files should be analyzed by Sigasi Studio.

For VHDL, libraries are fully supported. For Verilog/SystemVerilog, Sigasi reuses the VHDL library concept (just `work` in practice) to distinguish between design files that should and shouldn't be analyzed. 
You can configure libraries using the documentation on the **[project setup page]({{< ref "/manual/vscode/projects#library-configuration" >}})**.  

You can also start from a known source, like a Quartus project, that can be converted using a script into a Sigasi Studio project. 
Scripts and documentation are available from https://github.com/sigasi/SigasiProjectCreator.

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
