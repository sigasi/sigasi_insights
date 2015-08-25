---
title: User Interface
layout: page 
pager: true
---

The VHDL perspective {#gui-perspective}
--------------------

Sigasi is built upon the Eclipse platform, which permits to use multiple
languages within a single environment. The user interface can be
customized for a particular language. In Eclipse terminology, this
customized user interface is called a *perspective*. The logo of the
current perspective is higlighted in the upper right corner. The
recommended perspective to use with Sigasi (for both VHDL and Verilog)
is the *VHDL perspective*, with the following logo:

![](/images/screenshots/VhdlPerspective.png)

If you use the standalone version, this is the default perspective. If
you use the Eclipse plugin, another perspective may be open instead. You
can select the VHDL perspective by clicking the button
![](/images/icons/perspectiveButton.png) next the perspective
logo. A window pops up in which you can select the perspective:

![](/images/screenshots/OpenPerspectiveDialog.png)

Project Views {#gui-views}
-------------

When you open a project in Sigasi HDT, a number of views are presented
in the user interface. Here is a typical screenshot, with the views
highlighted.

![](/images/screenshots/SigasiViewsAnnotated.png)

The views provide alternative ways to access the information in a
project. They permit efficient navigation, inspection and editing.

Project Explorer
================

This view shows the directory structure of all files in all projects.
You can use it to navigate to a particular file in your project and
select it. When you double click on a file, the file opens in the Editor
view. If you right-click a file, you see the *context menu* which offers
extra commands.

You can customize the behavior of the **Project Explorer** view in ways
that can be particularly handy for large projects. For example, if you
click the **Link with Editor** icon
![](/images/icons/linkProjectExplorer.png) , the Project Explorer
will be linked to the Editor view. Now, the active file in the editor
view will always be selected in the Project Explorer.

You can apply filters to choose which files are shown. Select the icon
**View Menu** ![](/images/icons/viewMenuIcon.png) and then
**Customize view**. You can then select a filter whose matching files
will be hidden in the view. For example, you can filter out all non-VHDL
or non-Verilog files.

Editor View
===========

The Editor view shows the content of files, and allows you to edit
files. It is a tabbed view so that multiple files can be open for
editing simultaneously. The currently selected file is the active file.

Project exploration and navigation {#gui-navigate}
----------------------------------

Sigasi offers powerful techniques to explore a project and navigate
through it. This section covers: hovering, Occurrence Highlighting, Open
Declaration and Find References.

**Occurrence Highlighting** If you click on an identifier, it is
highlighted. In addition, all other occurrences of the identifier that
refer to the same object are highlighted. Note that this occurrence
highlighting is intelligent: it is not based on the identifier’s string
value, but on the object that the identifier refers to.

**Finding References** To look for occurrences of a given identifier in
different files, place your cursor on the identifier and right-click.
Now select **Search References**. A search window will appear on the
bottom of your workbench, displaying all occurrences of the selected
identifier. You can easily navigate through all occurrences by clicking
the **Show Next Match** arrow ![](/images/icons/showNextMatch.png)
and the **Show Previous Match** arrow
![](/images/icons/showPreviousMatch.png) in the search result
view. Note that all occurrences are highlighted and marked with a small
arrow at the left border of the editor for easy recognition.

Auto-complete and Content Assist
================================

Sigasi HDT provides powerful autocompletion capabilities. This means
that the tool can help you to complete identifiers and constructs as you
are working on the code. Like other tools, the tool provides
autocompletion based on the VHDL language. However, it goes much
further. It also provides autocompletion based on the design context. It
can provide this additional level of intelligence as it knows all
objects that have been declared in the design.

### Autocompletion interface

Autocompletions may come from different sources, as will be discussed in
the following sections. However, the user interface to initiate them is
always the same. At any point as you are entering code, you can press
**CTRL+SPACE** and the tool will suggest appropriate autocompletions.

Some autocompletions are templates which require further user input. In
such a case, the editor goes into a special *template editing* mode
after the autocompletion has been performed. You can use TAB to cycle
through the items that have to be modified or completed. When done, you
can press ENTER to return to the normal editing mode. The cursor will be
placed at an appropriate position to continue working.

### Based on templates

Sigasi can help you to declare VHDL objects, using autocompletion based
on templates. Sigasi comes preconfigured with templates for all commont
declarations and statements, including:

-   function, procedure
-   process
-   type: enum, file, range, array, record
-   signal, constant, variable
-   component
-   entity
-   architecture
-   entity/architecture pair
-   package/package body pair
-   and much more

After the autocompletion, the editor will be into templating editing
mode. You can also configure your own templates.

### Based on the design context

Sigasi HDT uses its knowledge of the design to provide intelligent
autocompletions that can boost productivity tremendously.

The tool knows which objects are appropriate and which identifiers are
visible at any given point in the code. As you start typing and ask for
an autocompletion, it will suggest the appropriate identifiers as
autocompletion candidates.

The tool provides help to autocomplete:

-  component declarations
-  component instantiations
-  entity instantiations
-  case statements (based on variables/signals with an enumeration type)

### Instantiating an entity

**Note:** In other tools this feature may be know as *paste as
instantiation* or *port translation*.

Sigasi HDT knows all entities in the design and their interfaces, and
can therefore automate much of the instantiation process. At the point
in the code where you normally enter the entity name, you can use
autocompletion instead to suggest a list of possible entities. Upon
selection, the tool will complete the instantiation with a generic map
and a port map with named associations. As an initial suggestion, each
actual parameter will have the same name as its formal parameter. Of
course, the actual parameter names need to be reviewed and edited by the
user. Therefore, the editor will go into template editing mode after the
autocompletion.

![](/images/screenshots/entity_instantiation.png)

Instantiating a *component* is similar to instantiating an entity. Note
that components will only be shown if they are visible in the current
scope.

### Declaring a component

**Note:** In other tools this feature may be know as *paste as
component* or *port translation*.

If you want to use instantiation based on a component (as opposed to
direct instantiation) you need to associate an entity with a component.
Sigasi can automatically declare a component for an existing entity. At
the point where you normally enter the component name, you can use
autocompletion instead to show the list of available entities. Upon
selection, the tool will automatically complete the component
declaration.

### Type Conversion

In VHDL design you need to do a lot of type conversions. Sigasi’s
autocomplete functionality can help you with those. Put a dot (`.`)
after the element you want to convert, and the autocomplete suggestions
will appear. The conversion functions have descriptions like “convert
type” and “convert to …”.

Code highlighting (syntax coloring)
===================================

As all editors, Sigasi colors your code to make the structure more
clear. Unlike other tools, Sigasi offers coloring based on the
**meaning** of a word, rather than just the syntax.

Sigasi supports both **syntax highlighting** and **semantic
highlighting**. Syntax highlighting colors pieces of code according to
the lexical class the code belongs to, such as a *keyword* or *string*.
Semantic highlighting means that code gets colored according to their
*meaning*. For example a *constant* is shown in another color than a
*signal*.

Code highlighting is fully configurable. **Color**, **background**,
**style** and **font** can be customized. Learn more about configuring [/manual/d_config#Colors and Fonts]

Highlighting Classes (VHDL only):

- *Syntax*  :  Comment, Keyword, Number, String, Task tag 
- *Semantic* :  Constant, Port, Signal, Type, Variable, Attribute, Function/Procedure 

Editor features
===============

Block selection {#block-select}
---------------

**Note:** In other tools, this feature may be known as *column editing*
or *column select*.

Block selection is an alternative for standard (paragraph) selection.
Block selection mode differs from standard selection mode in that it
allows to select rectangular regions, or to set the cursor over multiple
lines. Block selection is ideal for selecting vertical regions, for
example a column of a table or all port names in a port map.

![Block selection](/images/screenshots/block-select.png "Block selection Mode")

To toggle between normal and block selection modes use **Alt+Shift+A**
or press the **Toggle Block Selection** icon in the tool bar.

Move and Duplicate lines {#move-lines}
------------------------

You can easily *move* lines up and down by pressing: **Alt+Up** and
**Alt+Down**.

You can *duplicate* your current line, or the lines of the current
selection by pressing: **Ctrl+Alt+Down**.

Remove Trailing Whitespace {#trailing-whitespace}
--------------------------

The action to remove trailing whitespace is hidden by default. You can
access it by pressing **Ctrl+3**, type **RTW** and then select the
correct action. Alternatively, you can bind this action to [/manual/c_key] of your preference.

Hover
=====

To learn more about the declaration of a given identifier, hold your
mouse pointer over it. After about a second, a popup shows you the name
and datatype of the signal. This technique is called hovering.

In the hover pop-up, can show different kinds of information:

-   datatype
-   comments: inline documentation written at the declaration
-   value: the value of constants
-   errors or warnings: a message, if the given identifier has an error
    or warning associated to it
-   binary / decimal conversion: for hexadecimal, octal or binary
    values, the decimal equivalent

Comment Association
-------------------

Comments in HDL code are used to add extra information or documentation
to that code. Sigasi uses certain rules to determine which comment
belongs to which code. This is important for documentation hovers,
refactoring, formatting,...
Which comment belongs to which exact code is subjective.

Sigasi associates comments with HDL declarations with following rules:
- If there is a declaration before a comment and in the same line, the
comment is associated with this declaration.
- In all other cases, the comment is associated with the next following
declaration.

Lightweight editor for large files
==================================

Sometimes you have to deal with very large VHDL files such as large
concatenated library files and generated files. Unfortunately the Sigasi
VHDL editor can not cope with huge VHDL files yet. Large files stress
the interactive compiler too much to give timely feedback.

To allow you to edit large VHDL files the Sigasi IDE contains a
lightweight VHDL editor that can handle all files without problems. This
editor does not analyze your files a type time. It only offers syntax
highlighting and the default Eclipse editing features. The lightweight
VHDL editor will check for errors when you save your file.

The current threshold VHDL file size that is used to switch to the
lightweight editor is 1 MB.

Open Declaration and Hyperlinks
===============================

**Open Declaration** You can easily navigate to the declaration of any
port, signal, entity, etc. Place the cursor on the identifier,
right-click and select **Open Declaration**. The editor immediately
switches to the line that declares the object. Since this operation is
so commonly used, it is assigned to the shortcut key **F3**.

**Hyperlinks** You can also navigate your code like a web browser by
clicking hyperlinks. If you press and hold the **Ctrl** key, hyperlinks
will appear in your editor. If you click the link (while holding the
**Ctrl** key), you will navigate to the target of the link.
Sigasi offers following links:

- Link to **Declaration**: this has the same behavior as **Open
Declaration** (**F3**)
- Link to **Matching Entity**: this links a **component** declaration
of instantiation to the matching entity declaration. This also works for
component **generics** and **ports**.
- Link to **Matching When Clause**: in finite state machines (FSMs) you
can jump directly to the matching *when* part of your case statement
from state transitions.
- URLs in **comments**

Outline view
============

The Outline view displays the contents of the active file, in terms of
the HDL objects that it contains.

You can sort the elements in the outline alphabetically, by enabling the
**sort** button ![](/images/icons/alphab\_sort\_co.gif).

You can also filter all concurrent signal assignments from the outline
by enabling the **Hide Signal Assignments** button
![](/images/icons/SignalAssignmentsFilter.png).
Double-click in the Outline view to navigate to the corresponding
location in the editor.

If you enable the **Link with Editor** icon
![](/images/icons/linkProjectExplorer.png) and you click an
element in the outline view, the corresponding code will be selected in
the editor.

Hierarchy view
==============

The Hierarchy view shows the VHDL design hierarchy starting at a
selected top level object. To choose a top level, open a file and
right-click on an architecture (or entity or configuration). Then click
**Set as Top Level**. Alternatively you can click the **Set Top** button
in the hierarchy view to open a hierarchy top level selection dialog.
You can use the filter field to quickly search for a certain top level.

The hierarchy view automatically refreshes itself when you save your
design files. If you have a really large design this could slow you
down. You can turn the automatic refresh on and off by toggling the
**refresh** button ![](/images/icons/refresh.gif).

When you double-click an object in the hierarchy, the Editor view is
updated accordingly, possibly by displaying the contents of a different
file.

Use the *instantiations* filter
![](/images/icons/Instantiation.png), to hide everything except
instantiations and structural statements are shown.

You can launch a simulation with the ![](/images/icons/run_exc.gif)
button, if you first set up an [external simulator](/integration).

The Hierarchy View also offers an action **Select required files**, which selects all design files that are part of the current hierarchy, in the project explorer. This allows you to easily perform the same action on all files in the hierarchy. E.g. team commands, ... This action is only available with a Premium Desktop license.

![](/images/screenshots/select_required_files_in_hierarchy.png)

Generics view
=============

The Generics view shows the generic and constants values of components
in the hierarchy. To activate the Generics view: go to the hierarchy
view, right-click an instantiation (or the top level) and select **Show
in Generics View**. By default, the Generics view will be positioned
over the outline view. Use the tabs to select which view you want to
see.

The Generics view shows the generics and constants values of the
component that is active in the Hierarchy view. The internal compiler
computes the generics and constants, even if they are passed down
through the hierarchy, and even if arithmetic operations are used to
define new values. If the value cannot be computed for some reason, the
Generics view will report the value to be *unknown*. Double-clicking a
generic or constant will open the corresponding declaration in a VHDL
editor.

Problems view
=============

The Problems view shows problems (errors and warnings) related to your
code. These problems were reported either by the internal compiler or by
an external compiler tool. 
You can navigate to the source of the problem by double clicking on a
given problem. Problems can be sorted by clicking the column headers.
The content of this view can be customized via the **View Menu**
![](/images/icons/viewMenuIcon.png) . Possible customizations are
*scope* (workspace, project, selection), *type*, maximum number of
problems, …

Libraries view
==============

![](/images/screenshots/libraries-view.png)

The libraries view shows the library mapping of the design units in all
projects. You can use it to navigate to a particular design unit in your
project. When you double click on a file, the file opens in the Editor
view. If you right-click a file, you see the *context menu* which offers
extra commands for [library mapping](libraries#libraries-mapping) .

If you enable the **Link with Editor** button
![](/images/icons/linkProjectExplorer.png), the Library view will
be linked to the Editor view. Now, active file in the editor view will
always be selected in the Library view.

Tasks View
==========

![](/images/screenshots/tasks-view.png)

It is common practice to add **TODO** and **FIXME** comments in your
code. Sigasi automatically scans your comments for TODO and FIXME tags
and clearly highlights these comments with **Task Tags**. You can get a
nice overview of all task markers in your workspace in the **Task View**
(**Windows \> Show View \> Tasks**).

You can configure extra tags in the Task Tag preference page:
**Preferences \> Sigasi \> VHDL \> Task Tags**
