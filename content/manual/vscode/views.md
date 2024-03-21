---
title: "VS Code Views"
showinmenu: true
weight: 4
pager: true
aliases:
  - /vscode/views/
---
This page documents the Views added to VS Code by the Sigasi extension.

## Sigasi Projects View

The _Sigasi Projects View_ offers a file browser for your projects in which external folders that are not physically part of your project can exist.
This can be useful for including external IP in your projects.

{{< figure src="/img/vscode/VSCodeProject.png" link="/img/vscode/VSCodeProject.png" alt="Sigasi Projects View" class="uk-align-right" width="250" >}}

The Projects View also offers a lot of custom Sigasi functionality, such as library mapping, version setting, and displaying the Preference View.

### Linked Libraries

Any (external) libraries and files not within the folder of the opened project can be added using the _Sigasi Projects View_.
In the Sigasi Projects View, right-click any file or folder and select the **New Linked File...** or **New Linked Folder...** option to add files and folders from outside the project location.
The configuration of the external files and folders will be kept in the `.project` file in the project root.

External files and folders can be added anywhere in the project.
If you add a large folder, for example, the `unisim` primitives, make sure to exclude the folder (**Right-click > Set Library > Exclude from Build**) from being built and only include the required files.
Alternatively, you can put the library files in a folder called `Common Libraries`.
Then, they will only be indexed but not analyzed for errors.

### Buttons in the Sigasi Projects View

These buttons are available in the Sigasi Projects View.

* ![New file icon](/img/manual/vscode/new-file.svg) Create a new file
* ![New folder icon](/img/manual/vscode/new-folder.svg) Create a new folder
* ![Refresh icon](/img/manual/vscode/refresh.svg) Refresh
* ![Collapse all icon](/img/manual/vscode/collapse-all.svg) Collapse all folders in the Sigasi Projects View
* ![More actions icon](/img/manual/vscode/ellipsis.svg) More Actions
  * Toggle Follow Cursor (links the Sigasi Projects View with the editor)

## Hierarchy View

{{< figure src="/img/vscode/VSCodeHierarchy.png" link="/img/vscode/VSCodeHierarchy.png" alt="Sigasi Projects View" class="uk-align-right" width="250" >}}

Initially, the Hierarchy View will be empty.
To use the Hierarchy View, right-click an entity, architecture, or module name in the editor and select **Set as Top Level** from the pop-up menu.
This will populate the Hierarchy View with the structure of the top level.

As you make changes to the design, the Hierarchy View will not automatically refresh.
To refresh the Hierarchy View, use the refresh button (![Refresh icon](/img/manual/vscode/refresh.svg)).

If you want the selection in the Hierarchy View to follow your position in the editor, make sure to enable _Follow Cursor_ from the **More Actions** (![More actions icon](/img/manual/vscode/ellipsis.svg)) menu.

### Buttons in the Hierarchy View

These buttons are available in the Hierarchy View.

* ![Expand all icon](/img/manual/vscode/expand-all.svg) Expand the full hierarchy
* ![Only show instantiations icon (enabled)](/img/manual/vscode/eye.svg) Only Show Instantiations (enabled)
* ![Only show instantiations icon (disabled)](/img/manual/vscode/eye-closed.svg) Only Show Instantiations (disabled)
* ![Refresh icon](/img/manual/vscode/refresh.svg) Refresh the Hierarchy View
* ![Collapse all icon](/img/manual/vscode/collapse-all.svg) Collapse the hierarchy
* ![More actions icon](/img/manual/vscode/ellipsis.svg) More Actions
  * Toggle Follow Cursor (links the Hierarchy View with the editor)
  * Toggle Auto Refresh on save
  * Sort by: Position
  * Sort by: Name
  * Sort by: Category

## Preferences View

{{< figure src="/img/vscode/VSCodePreferences.png" link="/img/vscode/VSCodePreferences.png" alt="Sigasi Preferences View" class="uk-align-right" width="400" >}}

To open the Preferences View, right-click the project, folder, or file you want to configure in the Sigasi Projects View.
This view allows you to configure all preferences for the selected project, folder, or file.

* You can change the severity of [linting rules](#configuring-the-linting-rules) for your project.
* You can tweak validation parameters.
* You can modify conditional variables for VHDL 2019 projects.
* You can configure include paths and initial defines for the SystemVerilog Preprocessor.

Make sure to click the `APPLY` button at the top right after making your changes.

Changes you make here will be stored in the `.settings/` folder within your project.
This way, if you commit the settings with your project, they will be available for your fellow team members, even if they use [Sigasi Studio for Eclipse]({{< ref "/manual/eclipse" >}}).

### Configuring the Linting Rules

Linting is largely shared between our products. This page only covers {{< pill text="VS Code" >}} specific use cases. Refer to the [common documentation]({{< ref "/manual/common/linting.md" >}}) to learn more.

Linting rules can be configured per project, folder, or file by **right-clicking a project, folder, or file > Open Preference View** in the [Projects View](#sigasi-projects-view) and then selecting **Verilog Errors/Warnings** or **VHDL Errors/Warnings**.
In the middle of the page, _Click here to enable_ to activate the rule configuration.

{{< figure src="/img/vscode/activate_project_settings.png" link="/img/vscode/activate_project_settings.png" alt="Sigasi Preferences View" class="uk-align-center" >}}

## Graphical Views

Refer to the [Common Documentation]({{< ref "manual/common/views.md#graphical-views" >}}) to learn more about the Block Diagram-, State Machines-, and Dependencies Views.

## Net Search View

Refer to the [Common Documentation]({{< ref "manual/common/views.md#net-search-view" >}}) to learn more about the Net Search View.

## Class Hierarchy View

{{< xprt_only >}},{{< systemverilog_only >}}

{{< figure alt="Class Hierarchy View" src="/img/vscode/class_hierarchy_view.png" link="/img/vscode/class_hierarchy_view.png" class="uk-align-center" width="600" >}}

The Class Hierarchy View displays more information about the hierarchy of a class. It consists of a hierarchy tree
and a list of its class members. To open the Class Hierarchy of a class, click the class name, right-click, and select **Show Class Hierarchy** (or press **F4**).

{{< figure alt="Show class Hierarchy" src="/img/vscode/show_class_hierarchy.png" link="/img/vscode/show_class_hierarchy.png" class="uk-align-center" width="600" >}}

## Class Hierarchy Tree

The class hierarchy tree displays either the superclasses, subclasses, or both.

| Icon                                                            | Command                           | Description
|:---------------------------------------------------------------:|-----------------------------------|------------
|![hierarchy icon](/img/manual/vscode/type-hierarchy.svg)         | Class Hierarchy                   | Displays all superclasses and subclasses.
|![superclass icon](/img/manual/vscode/type-hierarchy-super.svg)  | Superclass Hierarchy              | Displays all superclasses and implemented interface classes.
|![subclass icon](/img/manual/vscode/type-hierarchy-sub.svg)      | Subclass Hierarchy                | Displays all subclasses that extend or implement the selected (interface) class.
|                                                                 | Toggle Show Qualified Class Names | Shows the qualified name next to each class.

## Member List

The member list shows all members (fields, functions, tasks, and constructors) of the class that is currently selected in the class hierarchy tree.

The icon shown in the view describes the current active state of the members list options.

| Icon                                                                            | Command                       | Description
|:-------------------------------------------------------------------------------:|-------------------------------|------------
|![show inherited members icon](/img/manual/vscode/show-inherited-members.svg)    | Show Inherited Members        | Shows members inherited from superclasses.
|![hide inherited members icon](/img/manual/vscode/hide-inherited-members.svg)    | Hide Inherited Members        | Hides members inherited from superclasses.
|![show fields icon](/img/manual/vscode/show-fields.svg)                          | Show Fields                   | Shows fields in the members list.
|![hide fields icon](/img/manual/vscode/hide-fields.svg)                          | Hide Fields                   | Hides fields in the members list.
|                                                                                 | Toggle Sort By Defining Class | Sorts members by the class in which they are defined.
