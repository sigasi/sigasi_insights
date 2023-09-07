---
title: "Setting up a Project"
showinmenu: true
weight: 3
pager: true
aliases:
  - /vscode/projects/
---

{{< figure src="/img/vscode/VSCodeScreenshot.png" link="/img/vscode/VSCodeScreenshot.png" alt="VS Code sigasi" class="uk-align-right" width="400" >}}

The extension will start once a `.project` file is detected in the root of the open folder.

The project settings and library mappings are compatible with {{< siste >}}.
See the {{< page "/manual/eclipse/projectsetup.md" >}} manual page for all details.

Note that resource filters in the `.project` file are not supported by the VS Code extension.

For project configuration, open the **[Project View]({{< ref "/manual/vscode/views.md#project-view" >}})**.

## Library configuration

To change library mappings, you can use the right-click menu and select **Set Library**.
Then you can select an existing library or choose **New Library...** to type a new library name.

## VHDL and Verilog Version

To change the VHDL or Verilog version, you can right-click on a project, folder, or file in the Sigasi Project View and click **Set Language Version**.
Then select whether you want to set the VHDL or Verilog version. If you only see one of the two, you might need to add [language support](#language-support). Finally, select the version you want.  

{{< figure src="/img/vscode/VSCodeChangeLangVersion.gif" link="/img/vscode/VSCodeChangeLangVersion.gif" alt="VS Code: Change language version"  width="900" >}}


## Language Support

To add or remove language support, you can right-click on a project from the Sigasi Project View, click **Configure**, and **Add/Remove VHDL or Verilog/SystemVerilog Support**. This will enable or disable language preferences among others.

{{< figure src="/img/vscode/VSCodeAddRemoveLanguageSupport.gif" link="/img/vscode/VSCodeAddRemoveLanguageSupport.gif" alt="VS Code: Add or remove language support"  width="900">}}

## Workspace

To add a new project to your workspace, press `File > Add Folder To Workspace`.
Make sure the project you're adding has a valid `.project` file.

## Environment Variables

Sigasi Studio supports environment variables in its project configuration.
This helps to avoid absolute paths in the `.project` file.

To use environment variables, you have to prefix the environment variable with `ENV-`.
For example: to refer to the home directory you can use `ENV-HOME`.

## Custom Project Variables

Some variables are automatically defined.

* `PROJECT_LOC` with the PATH of your project
* `PARENT-<COUNT>-<VARIABLE>` which points to `COUNT` levels above the PATH of the `VARIABLE`

For example, if your project lives in `/design/projects/project1`, then `PARENT-2-PROJECT_LOC/companylibrary` points to `/design/companylibrary`.

You can also use custom project variables, e.g. `VUNIT` to point at your VUnit installation.
You can configure these variables as follows:

* Press **Ctrl+Shift+P** to open the Command Palette
* Select **Preferences: Open Settings (UI)**
* In the Setting tab, navigate to **Extensions > Sigasi > General > Custom Project Variables**
* Add variables and their values as required

{{< figure src="/img/vscode/VSCodeCustomVars.png" link="/img/vscode/VSCodeCustomVars.png" alt="VS Code: custom project variables" class="uk-align-center" >}}

Note that custom project variables can be set on the _User_ level, and also per _Remote_ or for a specific _Workspace_.
