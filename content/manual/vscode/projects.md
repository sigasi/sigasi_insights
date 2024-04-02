---
title: "Setting up a Project"
showinmenu: true
weight: 3
pager: true
aliases:
  - /vscode/projects/
---

{{< figure src="/img/vscode/VSCodeScreenshot.png" link="/img/vscode/VSCodeScreenshot.png" alt="VS Code sigasi" class="uk-align-right" width="400" >}}

The extension will start once a `.project` file is detected in the root of the open folder. Make sure that you **[configure your license]({{< ref "/manual/vscode/setup.md#settings" >}})** before trying to work on a project.

The project settings and library mappings are compatible with {{< siste >}}.
See the {{< page "/manual/eclipse/projectsetup.md" >}} and {{< page "/manual/eclipse/libraries.md" >}} manual pages for all details.

If you're familiar with Eclipse [Resource Filters]({{< ref "/manual/eclipse/projectsetup.md#deprecated-features" >}}), note that these are not supported by VS Code and will be ignored if there are any filters in the `.project` file extension.

For project configuration, open the **[Sigasi Projects View]({{< ref "/manual/vscode/views.md#sigasi-projects-view" >}})**.

## Creating and Importing Projects

### Importing a Project from the File System

First, open the folder you want to import through (**File > Open Folder...**). Then, open the Command Palette (**Ctrl+Shift+P**) and run the command **Sigasi: Add VHDL Support** or **Sigasi: Add Verilog/SystemVerilog Support**.

{{< figure src="/img/vscode/VSCodeAddSupport.png" link="/img/vscode/VSCodeAddSupport.png" alt="VS Code: Add Language Support" width="900" >}}

### Creating a New Project From Scratch

To create a new project, open the Command Pallet (**View > Command Pallete...**), execute the command `Sigasi: Create New VHDL Project` or `Sigasi: Create New Verilog/SystemVerilog Project`, choose the project location, then give your project a name.

{{< figure src="/img/vscode/VSCodeCreateNewProject.png" link="/img/vscode/VSCodeCreateNewProject.png" alt="VS Code: Create New Project" width="900" >}}

Next, you need to indicate the project's root folder to create a `.project` file in your folder containing the project configurations.

Once the `.project` file is detected, the Sigasi extension will fully start, which you can notice by the appearance of a **[Projects View]({{< ref "/manual/vscode/views.md#projects-view" >}})** below the default VSC file explorer.  
From then on, you should use the **Projects View** instead of the VSC file explorer.

If you need mixed language support, you can use the two following commands. It doesn't matter which one you initially chose.

* `Sigasi: Add VHDL Support`
* `Sigasi: Add Verilog/SystemVerilog Support`

### Importing Another Tool's Project

You can import a project from another tool, e.g., a Quartus project, by first converting it using scripts into a Sigasi Studio project. The scripts and documentation are available at <https://github.com/sigasi/SigasiProjectCreator>.

### Tutorial and Demo Projects

A tutorial project and demo project are available through the extension.

#### Tutorial

The tutorial project covers most of Sigasi's features.
Press **Ctrl+Shift+P** and start typing **Sigasi: Create Tutorial Project** to open the tutorial.

When the extension has finished building the project, you will see a number of issues for some files pop-up in the Projects View.

There will also be several errors and warnings in the status bar. When clicking it, the Problems View opens. Within that view, you can navigate through the error and warning markers for the project.

{{< figure src="/img/vscode/VSCodeErrorsWarnings.png" alt="Errors and Warnings status bar indicator" width="69" >}}

#### Demo

You can also open a larger demo project using the command **Sigasi: Create Demo Project**.

## Project Configuration

### Library Configuration

For VHDL, libraries are fully supported. For Verilog/SystemVerilog, Sigasi reuses the VHDL library concept (just `work` in practice) to distinguish between design files that should and shouldn't be analyzed.

To change library mappings, you can use the right-click menu in the **[Sigasi Projects View]({{< ref "/manual/vscode/views.md#sigasi-projects-view" >}})** and select **Set Library** as shown in the image below.

{{< figure src="/img/vscode/VSCodeSetLib.png" link="/img/vscode/VSCodeSetLib.png" alt="VS Code: Set Library" width="304" >}}

Then, you can select an existing library or choose **New Library...** to type a new library name.
Once you type a new library name, the file/folder you selected will be added to the library you created.
If you want to add a file/folder to an existing library, you can choose one of the existing ones from the list (such as `work`).

{{< figure src="/img/vscode/VSCodeExclude.png" link="/img/vscode/VSCodeExclude.png" alt="VS Code: Set Library" width="900" >}}

If you want to exclude files/folders from a Sigasi project, select **Exclude from Build**. Doing so will cause the file or folder (along with its contents) to no longer be used in your project.
Note that the excluded resource(s) will still be visible in the **[Sigasi Projects View]({{< ref "/manual/vscode/views.md#sigasi-projects-view" >}})**, and you can still add them (Set Library) to the project.

Creating new libraries, adding a file/folder to an existing library, or excluding files/folders from the build will modify your project's `.library_mapping.xml` file.

### VHDL and Verilog Version

To change the VHDL or Verilog version, right-click on a project, folder, or file in the Sigasi Projects View and click **Set Language Version**.
Then, select whether you want to set the VHDL or Verilog version. If you only see one of the two, you might need to add [language support](#language-support). Finally, select the version you want.  

{{< figure src="/img/vscode/VSCodeChangeLangVersion.gif" link="/img/vscode/VSCodeChangeLangVersion.gif" alt="VS Code: Change language version" width="900" >}}

### Language Support

To add or remove language support, you can right-click on a project from the Sigasi Projects View, click **Configure**, and **Add/Remove VHDL or Verilog/SystemVerilog Support**. This will enable or disable language preferences, among others.

{{< figure src="/img/vscode/VSCodeAddRemoveLanguageSupport.gif" link="/img/vscode/VSCodeAddRemoveLanguageSupport.gif" alt="VS Code: Add or remove language support"  width="900">}}

### Workspace

To add a new project to your workspace, press `File > Add Folder To Workspace`.
Make sure the project you're adding has a valid `.project` file.

### Linked Resources

Linked resources are a convenient way to link to a file/folder in the Sigasi ecosystem. It works without having to create symlinks or copy the actual content.

To add a linked resource, you can right-click on the node where you want to add it, then click `Add Linked File`/`Add Linked Folder`. A file open dialog will pop-up and you can select the file(s)/folder(s) you want to link.

### Environment Variables

Sigasi Studio supports environment variables in its project configuration.
This helps to avoid absolute paths in the `.project` file.

To use environment variables, you have to prefix the environment variable with `ENV-`.
For example, to refer to the home directory, you can use `ENV-HOME`.

### Custom Project Variables

Some variables are automatically defined.

* `PROJECT_LOC` with the PATH of your project
* `PARENT-<COUNT>-<VARIABLE>` which points to `COUNT` levels above the PATH of the `VARIABLE`

For example, if your project lives in `/design/projects/project1`, then `PARENT-2-PROJECT_LOC/companylibrary` points to `/design/companylibrary`.

You can also use custom project variables, e.g., `VUNIT`, to point to your VUnit installation.
You can configure these variables as follows:

* Press **Ctrl+Shift+P** to open the Command Palette
* Select **Preferences: Open Settings (UI)**
* In the Setting tab, navigate to **Extensions > Sigasi for VHDL & SystemVerilog > General > Custom Project Variables**
* Add variables and their values as required

{{< figure src="/img/vscode/VSCodeCustomVars.png" link="/img/vscode/VSCodeCustomVars.png" alt="VS Code: custom project variables" class="uk-align-center" >}}

Note that custom project variables can be set on the _User_ level and also per _Remote_ or for a specific _Workspace_.
