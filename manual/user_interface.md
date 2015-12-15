---
title: User Interface
layout: page 
pager: true
---

# The Sigasi perspectives

Sigasi is built upon the Eclipse platform, which permits to use multiple languages within a single environment. The user interface can be customized for a particular language. In Eclipse terminology, this customized user interface is called a **perspective**. The _icon_ and _name_ of the current perspective is highlighted in the upper right corner.

Sigasi Studio provides two perspectives to work with both **VHDL** and **Verilog** files: **Sigasi** and **Sigasi Starter**.

![](/images/screenshots/sigasi_perspectives.png)

**Sigasi** is the recommended perspective to work with **projects** [creator]. **Sigasi Starter** is the recommended perspective to work with VHDL and Verilog files in _single file mode_.

If you use the standalone version of Sigasi, these perspective are the default. If you use the Eclipse plugin, another perspective may be open instead. You can select the Sigasi perspectives by clicking the button ![](/images/icons/perspectivebutton.png) next the perspective icon. A window pops up in which you can select the perspective.

# Project exploration and navigation {#gui-navigate}

Sigasi offers powerful techniques to explore a project and navigate
through it. This section covers: hovering, Occurrence Highlighting, Open
Declaration and Find References.

**Occurrence Highlighting** If you click on an identifier, it is
highlighted. In addition, all other occurrences of the identifier that
refer to the same object are highlighted. Note that this occurrence
highlighting is intelligent: it is not based on the identifier’s string
value, but on the object that the identifier refers to.

You can turn occurrence highlighting on or off. Click 
the "Toggle Mark Occurences" icon ![Mark Occurences](/images/icons/mark_occurences_icon.png "Mark Occurences") in the toolbar.


**Finding References** To look for occurrences of a given identifier in
different files, place your cursor on the identifier and right-click.
Now select **Search References**. A search window will appear on the
bottom of your workbench, displaying all occurrences of the selected
identifier. You can easily navigate through all occurrences by clicking
the **Show Next Match** arrow ![](/images/icons/shownextmatch.png)
and the **Show Previous Match** arrow
![](/images/icons/showpreviousmatch.png) in the search result
view. Note that all occurrences are highlighted and marked with a small
arrow at the left border of the editor for easy recognition.

## Auto-complete and Content Assist

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
[vhdl]

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
[vhdl]

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
[vhdl]

In VHDL design you need to do a lot of type conversions. Sigasi’s
autocomplete functionality can help you with those. Put a dot (`.`)
after the element you want to convert, and the autocomplete suggestions
will appear. The conversion functions have descriptions like “convert
type” and “convert to …”.

## Code highlighting (syntax coloring)

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
**style** and **font** can be customized. Learn more about configuring [/manual/config#Colors and Fonts]

Highlighting Classes (VHDL only):

- *Syntax*  :  Comment, Keyword, Number, String, Task tag 
- *Semantic* :  Constant, Port, Signal, Type, Variable, Attribute, Function/Procedure 

# Editor features

## Block selection {#block-select}

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

## Move and Duplicate lines {#move-lines}

You can easily *move* lines up and down by pressing: **Alt+Up** and
**Alt+Down**.

You can *duplicate* your current line, or the lines of the current
selection by pressing: **Ctrl+Alt+Down**.

## Remove Trailing Whitespace {#trailing-whitespace}

The action to remove trailing whitespace is hidden by default. You can
access it by pressing **Ctrl+3**, type **RTW** and then select the
correct action. Alternatively, you can bind this action to [/manual/keyshortcuts] of your preference.

## Hover

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

### Comment Association

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

## Lightweight editor for large files

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

## Open Declaration and Hyperlinks

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

# Quick Access

The Sigasi toolbar contains a widget called **Quick Access**. This widget allows you to quickly find open editors, available perspectives, views, preferences, wizards, commands, etc. Simply start typing the name of the item you wish to invoke.