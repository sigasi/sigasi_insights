---
title: "VS Code Views"
showinmenu: true
weight: 4
pager: true
---
This page documents the Views added to VS Code by the Sigasi extension.

## Project View

The _Project View_ offers a file browser for your projects in which external folders that are not physically part of your project can exist.
This can be useful for including external IP in your projects.

{{< figure src="/img/vscode/VSCodeProject.png" link="/img/vscode/VSCodeProject.png" alt="Sigasi Project View" class="uk-align-right" width="250" >}}

### External libraries

Any (external) libraries and files that are not within the folder of the opened project can be added using the _Project View_.
In the Project View, right click any file or folder to select the **Add External File** or **Add External Folder** option to add files and folders from outside the project location.
The configuration of the external files and folders will be kept in a file `external_libraries.json` in the project root.

External files and folders can be added anywhere in the project.
If you add a large folder (e.g. the `unisim` primitives), make sure to exclude the folder (**Right click > Set to library > Exclude from build**) from being build and only include the required files.
Or just put the library files in a folder called `Common Libraries`.
Then they will only be indexed and not analyzed for errors.

### Buttons in the Project View

These buttons are available in the Project View.

* {{< icon src="/img/vscode/VSCodeProject_newFile.png" width="20" >}} Create a new file
* {{< icon src="/img/vscode/VSCodeProject_newFolder.png" width="20" >}} Create a new folder
* {{< icon src="/img/vscode/VSCodeProject_refresh.png" width="20" >}} Refresh the Project View
* {{< icon src="/img/vscode/VSCodeProject_collapseAll.png" width="20" >}} Collapse all folders in the Project View

## Hierarchy View

Since version `0.3.8`, the extension includes a _Hierarchy View_.

{{< figure src="/img/vscode/VSCodeHierarchy.png" link="/img/vscode/VSCodeHierarchy.png" alt="Sigasi Project View" class="uk-align-right" width="250" >}}

Initially, the Hierarchy View will be empty.
To use the Hierarchy View, right click an entity or module name in the editor and select **Set as top level** from the pop-up menu.
This will populate the Hierarchy View with the structure of the toplevel.

As you make changes to the design, the Hierarchy View will not auto-refresh.
To refresh the Hierarchy View, use the refresh button ({{< icon src="/img/vscode/VSCodeHierarchy_refresh.png" width="20" >}}).

When you want the focus in the Hierarchy View to follow your position in the editor, make sure to enable the _link with editor_ button ({{< icon src="/img/vscode/VSCodeHierarchy_linkEditor.png" width="20" >}}).

### Buttons in the Hierarchy View

These buttons are available in the Hierarchy View.

* {{< icon src="/img/vscode/VSCodeHierarchy_expandAll.png" width="20" >}} Expand the full hierarchy
* {{< icon src="/img/vscode/VSCodeHierarchy_linkEditor.png" width="20" >}} Toggle link with the editor
* {{< icon src="/img/vscode/VSCodeHierarchy_showInstantiations.png" width="20" >}} Toggle showing only instantiations
* {{< icon src="/img/vscode/VSCodeHierarchy_refresh.png" width="20" >}} Refresh the Hierarchy View
* {{< icon src="/img/vscode/VSCodeHierarchy_collapseAll.png" width="20" >}} Collapse the hierarch
