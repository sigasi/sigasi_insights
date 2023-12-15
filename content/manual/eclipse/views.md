---
title: Views
showinmenu: true
weight: 5
pager: true
aliases:
  - /manual/views/
---

When you open a project in Sigasi Studio, a number of views are presented
in the user interface. Here is a typical screenshot, with the views
highlighted.

{{< figure src="/img/manual/sigasiviewsannotated.svg" class=uk-align-center >}}

The views provide alternative ways to access the information in a
project. They permit efficient navigation, inspection, and editing.

This chapter lists and explains the most important views of Sigasi Studio. Some views are not covered here, more specifically some views that are either inherited from Eclipse, or views that are provided by third-party plugins. Please refer to the Eclipse documentation or the specific plugin documentation for further information on those views.

You can open a view in several different ways:

* By typing the view name in the [Quick Access](/manual/user_interface#quick-access) field
* Via **Window > Show View**. If the view is not in the visible list, choose **Other...** and select the view in the selection dialog.
By right-clicking in the **editor** and selecting **Show in > ...**.
  Some views also support opening the current selection (e.g. the [Block Diagram View]({{< ref "manual/common/views.md#block-diagram-view" >}})). This selects the element in the view that corresponds to the current selection in the editor.

# Project Explorer View

This view shows the directory structure of all files in all projects.
You can use it to navigate to a particular file in your project and
select it. When you double-click on a file, the file opens in the Editor
view. If you right-click a file, you see the *context menu* which offers
extra commands.

You can customize the behavior of the **Project Explorer** View in ways
that can be particularly handy for large projects. For example, if you
click the **Link with Editor** icon
![Link with Editor](/img/icons/linkprojectexplorer.png) , the Project Explorer
will be linked to the Editor view. Now, the active file in the editor
view will always be selected in the Project Explorer.

You can apply filters to choose which files are shown. Select the icon
**View Menu** ![View Menu icon](/img/icons/viewmenuicon.png) and then
**Customize view**. You can then select a filter whose matching files
will be hidden in the view. For example, you can filter out all non-VHDL
or non-Verilog files.

The **Project Explorer** View provides textual and graphical *Label Decorations* which can be controlled
in **Window > Preferences > General > Appearance > Label Decorations**.
Label decorators are a visual guide on the state of projects, folders, and files.
Decorators can depend on various plugins.
The following descriptions apply to Sigasi-specific decorators.

* Sigasi Studio adds text decorators to the right to indicate which library a project, file, or folder is mapped in. The [library name]({{< ref "/manual/eclipse/libraries.md#examining-the-library-configuration" >}}) is denoted in square brackets.
* If a project is in a different folder than the workspace, this is denoted within round brackets.
* Other text decorators to the right of a project are probably from the [Git plugin]({{< ref "plugins.md#git" >}}). The repository name and branch are denoted with square brackets.
* Open HDL projects have a bridge-like overlay ![bridge-like overlay icon](/img/icons/project.png) in the top right corner of the project icon.
* File icons with a 'V' in them are VHDL or SystemVerilog source files.
* Folder icons with an overlay in the lower right corner are virtual folders (white square) or linked folders (square with arrow).
* Other overlays in the lower right corner are probably from the Git plugin. They indicate tracked files/folders (yellow cylinder) and non-tracked files/folders (question mark). Changed files are noted with a `>` mark next to the icon.
* Overlays in the lower left corner are generally indicating status from Sigasi Studio: errors in files/folders are indicated with a red square and white cross ![red square and white cross icon](/img/icons/error.png) while files/folders with warnings are marked with a yellow triangle with black exclamation mark ![yellow triangle with black exclamation mark icon](/img/icons/warning.png) .
* If you exclude a file from build in Sigasi studio, the icon will be overlayed with a red *forbidden entry* icon  ![forbidden icon](/img/icons/ignoreicon.png) in the upper left corner.

# Editor View

The Editor View shows the content of files and allows you to edit
files. It is a tabbed view so that multiple files can be opened for
editing simultaneously. The currently selected file is the active file.

The Sigasi Studio Editor offers many features, learn more [here]({{< ref "/manual/eclipse/editor.md" >}}).

# Outline View

The Outline View displays the contents of the active file, in terms of
the HDL objects that it contains.

You can sort the elements in the outline alphabetically, by enabling the
**sort** button ![sort icon](/img/icons/alphab\_sort\_co.gif).

You can also filter all concurrent signal assignments from the outline
by enabling the **Hide Signal Assignments** button
![hide signal assignments](/img/icons/signal_assignments_filter.png).
Double-click in the Outline View to navigate to the corresponding
location in the editor.

If you enable the **Link with Editor** icon
![Link with Editor](/img/icons/linkprojectexplorer.png) and you click an
element in the Outline View, the corresponding code will be selected in
the editor.

## Quick Outline View

You can also press **Ctrl+O** to open the *quick outline*.

{{< figure src="/img/manual/quick_outline.png" class=uk-align-center >}}

This is just the outline view in a popup, but it also allows you to filter the shown elements.
This way, the quick outline can be used as a *semantic* **Ctrl+F**, making it very easy to find a declaration in your open editor.

{{< figure src="/img/manual/quick_outline_filter.png" class=uk-align-center >}}

{{< verilog_only >}}

Pressing **Ctrl+O** again, when the quick outline is open, will also show the inherited members between the members of the current file.

{{< figure src="/img/manual/quick_outline_with_inherited_members.png" class=uk-align-center >}}

# Hierarchy View

The Hierarchy View shows the design hierarchy starting at a selected top level object. To choose a top level, open a file and right-click on an `architecture` (or `entity` or `configuration` or `module`). Then click **Set as Top Level**. Alternatively, you can click the **Set Top** button in the Hierarchy View to open a hierarchy top level selection dialog. You can use the filter field to quickly search for a certain top level.

The Hierarchy View automatically refreshes itself when you save your design files. If you have a really large design this could slow you down. You can turn the automatic refresh on and off by toggling the **refresh** button ![refresh icon](/img/icons/refresh.gif).

To highlight the current selection of the HDL editor in the Hierarchy View, enable the **Link with Editor** button ![Link with Editor](/img/icons/linkprojectexplorer.png). If the editor selection is part of the evaluated hierarchy tree, the corresponding hierarchy tree node will be selected.

The Hierarchy View also shows the **generic and constants values** of VHDL components in the hierarchy.
The internal compiler computes the generics and constants, even if they are passed down through the hierarchy, and even if arithmetic operations are used to define new values. If the value cannot be computed for some reason, the
Hierarchy View will report the value to be *unknown*.

When you **double-click** an object in the hierarchy, the Editor view is updated accordingly, possibly by displaying the contents of a different file.

Use the **instantiations** filter ![instantiations filter icon](/img/icons/instantiation.png) to hide everything except instantiations and structural statements.

You can **launch a simulation** with the ![launch icon](/img/icons/run_exc.gif) button if you first set up a [Launch simulator](/manual/eclipse/tools#launch-simulator).

The Hierarchy View also offers an action **Select required files**, which selects all design files that are part of the current hierarchy, in the project explorer. This allows you to easily perform the same action on all files in the hierarchy. E.g. team commands, ...

{{< figure src="/img/manual/select_required_files_in_hierarchy.svg" link="/img/manual/select_required_files_in_hierarchy.svg" class=uk-align-center >}}

You can also export a CSV file with all dependencies of the selected element via the context menu: **right-click** and select **Export Dependencies to CSV file**.

# Problems View

The Problems View shows problems (errors and warnings) related to your
code. These problems were reported either by the internal compiler or by
an external compiler tool.
You can navigate to the source of the problem by double-clicking on a
given problem. Problems can be sorted by clicking the column headers.
The content of this view can be customized via the **View Menu**
![View Menu icon](/img/icons/viewmenuicon.png) . Possible customizations are
*scope* (workspace, project, selection), *type*, maximum number of
problems, …

# Libraries View

{{< figure src="/img/manual/libraries-view.png" link="/img/manual/libraries-view.png" title="Libraries View" width=500 class=uk-align-center >}}

The Libraries View shows the library mapping as well as the [description style]({{< ref "/manual/common/description-style" >}}) of the design units in all
projects. You can use it to navigate to a particular design unit in your
project. When you double-click on a file, the file opens in the Editor
view. If you right-click a file, you see the *context menu* which offers
extra commands for [setting libraries](/manual/libraries#modifying-the-library-configuration) and for setting the top level.

If you enable the **Link with Editor** button
![Link with Editor](/img/icons/linkprojectexplorer.png), the Library View will
be linked to the Editor View. Now, the active file in the Editor View will
always be selected in the Library View.

# Tasks View

{{< figure src="/img/manual/tasks-view.png" class=uk-align-center >}}

It is common practice to add **TODO** and **FIXME** comments in your
code. Sigasi Studio automatically scans your comments for TODO and FIXME tags
and clearly highlights these comments with **Task Tags**. You can get a
nice overview of all task markers in your workspace in the **Task View**
(**Window \> Show View \> Tasks**).

You can configure extra tags in the Task Tag preference page:
**Preferences \> Sigasi \> [Verilog/SystemVerilog | VHDL] \> Task Tags**

# Bookmarks View

{{< figure src="/img/manual/bookmarks-view.png" class=uk-align-center >}}

You can easily add bookmarks by right-clicking the line number where you want to add a bookmark.
You can get an overview of all bookmarks in the **Bookmarks View**
(**Window > Show View > Others...**).

The **Bookmarks View** can be used to delete bookmarks or navigate to the editor and other views.

# Graphical Views

Refer to the [Common Documentation]({{< ref "manual/common/views.md#graphical-views" >}}) to learn more about the Block Diagram-, State Machines-, and Dependencies Views.

## Documentation View

The **Documentation View** gives you a live preview of the [automatic documentation](/manual/eclipse/documentation) Sigasi Studio can generate for your project.

{{< figure src="/img/manual/documentationview.png" class=uk-align-center >}}

# Net Search View

{{< vhdl_only >}}

With **Net Search**, you can find *loads* and *drivers* of a net.
A *net* is defined as a signal or port and all other signals and ports
that are directly connected to it. The *loads* are where you read the
value of the net and the drivers are where you write to this net.

To find the entire net of a signal or port, place your cursor on the
identifier and right-click. Now select **Find Net**. Alternatively, you
can press **CTRL+SHIFT+H**.

The **Net Search** View will appear. For big designs, it might take a
while before the results appear.

{{< figure src="/img/manual/netsearch.png" class=uk-align-center >}}

From the **Net Search** View, you can navigate to the VHDL code by
double-clicking the search results.

# VUnit View

{{< xprt_only >}}

{{< figure src="/img/manual/vunit_view.png" class=uk-align-center >}}

The VUnit View allows you to get a quick overview of your VUnit test runs and to monitor ongoing test runs.

With the icons on top of the view, you can

* Filter the output to show failures only
* Rerun a test
* Stop ongoing VUnit test runs
* View the test run history

More information is available on the [VUnit manual page]({{< ref "/manual/eclipse/vunit.md" >}}).

# Preprocessor View

{{< verilog_only >}}

{{< figure src="/img/manual/preprocessor-view.png" class=uk-align-center >}}

In the Preprocessor View, you can preview the expanded text of Verilog macros. This view automatically synchronizes with the active editor.
When you select text in the (System)Verilog editor, the expanded text will be highlighted in the Preprocessor View. This also works the other way: when you select text in the Preprocessor View, the corresponding, original source will be selected in the editor.

# Class Hierarchy View

{{< xprt_only >}},{{< systemverilog_only >}}

{{< figure alt="Class Hierarchy View" src="/img/manual/class-hierarchy-view.png" class=uk-align-center >}}

The Class Hierarchy View displays more information about the hierarchy of a class. It consists of a hierarchy tree
and a list of the class members. To open the Class Hierarchy of a class, click the class name, right-click and select **Open Class in Hierarchy** (or press **F4**).

{{< figure alt="Open class in Hierarchy" src="/img/manual/class-hierarchy-open.png" class=uk-align-center >}}

## Class Hierarchy Tree

The class hierarchy tree displays either the superclasses, subclasses, or both.

|                                                        | Command                    | Description
|:------------------------------------------------------:|----------------------------|------------
![hierarchy icon](/img/icons/hierarchy_co.png)           | Class Hierarchy            | Displays all superclasses and subclasses.
![superclass icon](/img/icons/super_co.png)              | Superclass Hierarchy       | Displays all superclasses and implemented interface classes.
![subclass icon](/img/icons/sub_co.png)                  | Subclass Hierarchy         | Displays all subclasses that extend or implement the selected (interface) class.
![qualified class icon](/img/icons/th_showqualified.png) | Show Qualified Class Names | Shows the qualified name next to each class.

## Member List

The member list shows all members of the class that is currently selected in the class hierarchy tree.

|                                                  | Command                | Description
|:------------------------------------------------:|------------------------|------------
![inherited members icon](/img/icons/inher_co.png) | Show Inherited Members | Shows or hides all members inherited from superclasses.
![sort icon](/img/icons/definingtype_sort_co.png)  | Sort By Defining Class | Sorts members by the class in which they are defined.
![hide icon](/img/icons/fields_co.png)             |  Hide Fields           | Hides all fields in the members list.

# Console View

When Sigasi Studio launches external tools (e.g. external compiler, documentation generation,...) the output is logged to the Console View.
This is a [generic Eclipse view](https://help.eclipse.org/latest/index.jsp?topic=/org.eclipse.cdt.doc.user/reference/cdt_u_console_view.htm).

Different tools can open different consoles. You can switch between different consoles by clicking the ![icon console display](/img/icons/icon_con_disp_console.png)-icon.

# Minimap View

The Minimap View can be opened via **Window > Show View > Other...** and selecting **General > Minimap**.
This is a [generic Eclipse view](https://www.eclipse.org/eclipse/news/4.9/platform.php#minimap).

This view is another way to help navigation through large files.
It shows an overview of the entire active editor in a dedicated pane.
The part that is visible in the editor is highlighted.
The highlighted part of the Minimap View can be clicked and dragged to scroll through the Editor View.
