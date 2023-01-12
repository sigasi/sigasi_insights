---
title: "Setting up a Project"
showinmenu: true
weight: 3
pager: true
---

{{< figure src="/img/vscode/VSCodeScreenshot.png" link="/img/vscode/VSCodeScreenshot.png" alt="VS Code sigasi" class="uk-align-right" width="400" >}}

The extension will start once a `.project` file is detected in the root of the open folder.

The project settings and library mappings are now compatible with {{< siste >}}. See the {{< page "/manual/projectsetup.md" >}} manual page for all details.

For project configuration, open the **[Project View]({{< ref "vscode/views.md#project-view" >}})**.

## Library configuration

To change library mappings, you can use the right-click menu and select **Set Library**.
Then you can select an existing library or choose **New Library...** to type a new library name.

## Workspace

The extension currently supports a single project per workspace.
To open multiple HDL projects, open each project in a separate VS Code window.
