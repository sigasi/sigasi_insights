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
See the {{< page "/manual/eclipse/projectsetup.md" >}} and {{< page "/manual/eclipse/libraries.md" >}} manual pages for all details.

If you're familiar with Eclipse [Resource Filters]({{< ref "/manual/eclipse/projectsetup.md#deprecated-features" >}}), note that these are not supported by VS Code and will be ignored if there are any filters in the `.project` file extension.

For project configuration, open the **[Project View]({{< ref "/manual/vscode/views.md#project-view" >}})**.

## Library configuration

To change library mappings, you can use the right-click menu in the **[Project View]({{< ref "/manual/vscode/views.md#project-view" >}})** and select **Set Library** as shown in the image below.

{{< figure src="/img/vscode/VSCodeSetLib.png" link="/img/vscode/VSCodeSetLib.png" alt="VS Code: Set Library"  width="400" >}}

Then you can select an existing library or choose **New Library...** to type a new library name.
Once you type a new library name, the file/folder you selected will be added to the library you created.
If you want to add a file/folder to an existing library, you can choose one of the existing ones from the list (such as `work`).

{{< figure src="/img/vscode/VSCodeExclude.png" link="/img/vscode/VSCodeExclude.png" alt="VS Code: Set Library"  width="900" >}}

If you want to exclude files/folders from a Sigasi project, select **Exclude from Build**. When you do this, that file or folder (along with its contents) will no longer be used in your project.
Note that the excluded resource(s) will still be visible in the **[Project View]({{< ref "/manual/vscode/views.md#project-view" >}})** and you can still add them (Set Library) to the project.

Creating new libraries, adding a file/folder to an existing library, or excluding files/folders from build will modify the `.library_mapping.xml` file in your project.

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
