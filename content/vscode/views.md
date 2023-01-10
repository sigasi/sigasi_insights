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

### Linked libraries

Any (external) libraries and files that are not within the folder of the opened project can be added using the _Project View_.
In the Project View, right-click any file or folder to select the **New Linked File...** or **New Linked Folder...** option to add files and folders from outside the project location.
The configuration of the external files and folders will be kept in the `.project` file in the project root.

External files and folders can be added anywhere in the project.
If you add a large folder (e.g. the `unisim` primitives), make sure to exclude the folder (**Right-click > Set Library > Exclude from Build**) from being build and only include the required files.
Or just put the library files in a folder called `Common Libraries`.
Then they will only be indexed and not analyzed for errors.

### Buttons in the Project View

These buttons are available in the Project View.

* {{< icon src="/img/vscode/VSCodeProject_newFile.png" width="20" >}} Create a new file
* {{< icon src="/img/vscode/VSCodeProject_newFolder.png" width="20" >}} Create a new folder
* {{< icon src="/img/vscode/VSCodeProject_refresh.png" width="20" >}} Refresh the Project View
* {{< icon src="/img/vscode/VSCodeHierarchy_linkEditor.png" width="20" >}} Link the Project View with the editor
* {{< icon src="/img/vscode/VSCodeProject_collapseAll.png" width="20" >}} Collapse all folders in the Project View

## Hierarchy View

{{< figure src="/img/vscode/VSCodeHierarchy.png" link="/img/vscode/VSCodeHierarchy.png" alt="Sigasi Project View" class="uk-align-right" width="250" >}}

Initially, the Hierarchy View will be empty.
To use the Hierarchy View, right-click an entity or module name in the editor and select **Set as Top Level** from the pop-up menu.
This will populate the Hierarchy View with the structure of the top level.

As you make changes to the design, the Hierarchy View will not auto-refresh.
To refresh the Hierarchy View, use the refresh button ({{< icon src="/img/vscode/VSCodeHierarchy_refresh.png" width="20" >}}).

When you want the selection in the Hierarchy View to follow your position in the editor, make sure to enable the _link with editor_ button ({{< icon src="/img/vscode/VSCodeHierarchy_linkEditor.png" width="20" >}}).

### Buttons in the Hierarchy View

These buttons are available in the Hierarchy View.

* {{< icon src="/img/vscode/VSCodeHierarchy_expandAll.png" width="20" >}} Expand the full hierarchy
* {{< icon src="/img/vscode/VSCodeHierarchy_linkEditor.png" width="20" >}} Toggle link with the editor
* {{< icon src="/img/vscode/VSCodeHierarchy_showInstantiations.png" width="20" >}} Toggle showing only instantiations
* {{< icon src="/img/vscode/VSCodeHierarchy_refresh.png" width="20" >}} Refresh the Hierarchy View
* {{< icon src="/img/vscode/VSCodeHierarchy_collapseAll.png" width="20" >}} Collapse the hierarchy

## Preferences View

{{< figure src="/img/vscode/VSCodePreferences.png" link="/img/vscode/VSCodePreferences.png" alt="Sigasi Preferences View" class="uk-align-right" width="400" >}}

To open the Preferences View, right-click an item in the Project View.
This View allows to configure all preferences for your entire project, a folder, or a file.

You can change the severity of [linting rules]({{< ref "/manual/linting.md" >}}) for your project.

You can modify conditional variables for VHDL 2019 projects.

You can configure include paths and initial defines for the SystemVerilog Preprocessor.

Changes you make here will be stored in the `.settings/` folder within your project.
This way, if you commit the settings with your project, they will be available for your fellow team members, also if they are using Sigasi Studio for Eclipse.
