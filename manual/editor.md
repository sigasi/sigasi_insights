---
title: Sigasi Studio Editor
layout: page 
pager: true
---

The Editor shows the content of files, and allows you to edit
files. It is a tabbed view so that multiple files can be open for
editing simultaneously. The currently selected file is the active file.

# VHDL and Verilog Editor

The VHDL and Verilog editors are optimized to help you browse and edit VHDL and Verilog code. Most browsing and editing features are similar for both languages.

*Language specific features* are explained in "[#VHDL Specific]" and "[#Verilog Specific]".

## Code highlighting (syntax coloring)

As all editors, Sigasi Studio colors your code to make the structure more
clear. Unlike other tools, Sigasi Studio offers coloring based on the
**meaning** of a word, rather than just the syntax.

Sigasi Studio supports both **syntax highlighting** and **semantic
highlighting**. Syntax highlighting colors pieces of code according to
the lexical class the code belongs to, such as a *keyword* or *string*.
Semantic highlighting means that code gets colored according to their
*meaning*. For example a *constant* is shown in another color than a
*signal*.

Code highlighting is fully configurable. **Color**, **background**,
**style** and **font** can be customized. Learn more about [configuring colors](/manual/config.html#configure-colors).

## Project exploration and navigation {: #gui-navigate}

Sigasi Studio offers powerful techniques to explore a file or project, and navigate through it. This section covers: hovering, Occurrence Highlighting, Open Declaration and Find References.

### Occurrence Highlighting

If you click on an identifier, it is highlighted. In addition, all other occurrences of the identifier that refer to the same object are highlighted. Note that this occurrence highlighting is intelligent: it is not based on the identifier’s string value, but on the object that the identifier refers to.

You can turn occurrence highlighting on or off. Click the "Toggle Mark Occurrences" icon ![Mark Occurrences](icons/mark_occurrences_icon.png "Mark Occurrences") in the toolbar.

### Find References

To look for occurrences of a given identifier in different files, place your cursor on the identifier and right-click. Now select **Search References**.

A search window will appear on the bottom of your workbench, displaying all occurrences of the selected identifier. You can easily navigate through all occurrences by clicking the **Show Next Match** arrow ![](icons/shownextmatch.png)
and the **Show Previous Match** arrow ![](icons/showpreviousmatch.png) in the search result view. Note that all occurrences are highlighted and marked with a small arrow at the left border of the editor for easy recognition.

### Open Declaration and Hyperlinks

**Open Declaration** You can easily navigate to the declaration of any
port, signal, entity, etc. Place the cursor on the identifier,
right-click and select **Open Declaration**. The editor immediately
switches to the line that declares the object. Since this operation is
so commonly used, it is assigned to the shortcut key **F3**.

**Hyperlinks** You can also navigate your code like a web browser by
clicking hyperlinks. If you press and hold the **Ctrl** key, hyperlinks will appear in your editor. If you click the link (while holding the **Ctrl** key), you will navigate to the target of the link.
Sigasi Studio offers following links:

* Link to **Declaration**: this has the same behaviour as **Open Declaration** (**F3**)
* Link to **Matching Entity** \[VHDL]: this links a **component** declaration of instantiation to the matching entity declaration. This also works for component **generics** and **ports** (**Shift+F3**)
* Link to **Matching Architecture** for entity declarations \[VHDL]
* Link to **Matching When Clause** \[VHDL]: in finite state machines (FSMs) you can jump directly to the matching *when* part of your case statement from state transitions (**Shift+F3**)
* Link to **Open Declaration in Package Body** \[VHDL]: in packages you can jump directly to the matching *declaration* in the package body (**Shift+F3**). This also works in the opposite direction, **Open Declaration in Package Body**
* Link to **Open Declaration in Protected Type Body** \[VHDL]: in protected types you can jump directly to the matching *declaration* in the protected type body. This also works in the opposite direction, **Open Declaration in Protected Type**
* Link to **Include files** in SystemVerilog sources (**F3**)
* Link to **Macro definition** in SystemVerilog sources
* URLs in **comments**

## Hover

To learn more about the declaration of a given identifier, hold your
mouse pointer over it. After about a second, a popup shows you the name and datatype of the signal. This technique is called hovering.

In the hover pop-up, can show different kinds of information:

* datatype
* comments: inline documentation written at the declaration
* value: the value of constants
* errors or warnings: a message, if the given identifier has an error or warning associated to it
* binary / decimal conversion: for hexadecimal, octal or binary values, the decimal equivalent

### Comment Association

Comments in HDL code are used to add extra information or documentation to that code. Sigasi Studio uses certain rules to determine which comment belongs to which code. This is important for documentation hovers, refactoring, formatting,...
Which comment belongs to which exact code is subjective.

Sigasi Studio associates comments with HDL declarations with following rules:

* If there is a declaration before a comment and in the same line, the comment is associated with this declaration.
* In all other cases, the comment is associated with the next following declaration.

## Auto-complete and Content Assist

Sigasi Studio provides powerful autocompletion capabilities. This means
that the tool can help you to complete identifiers and constructs as you are working on the code. Like other tools, the tool provides
autocompletion based on the VHDL language. However, it goes much
further. It also provides autocompletion based on the design context. It can provide this additional level of intelligence as it knows all
objects that have been declared in the design.

### Autocompletion interface

Autocompletions may come from different sources, as will be discussed in the following sections. However, the user interface to initiate them is always the same. At any point as you are entering code, you can press **Ctrl+Space** and the tool will suggest appropriate autocompletions.

Some autocompletions are templates which require further user input. In such a case, the editor goes into a special *template editing* mode after the autocompletion has been performed. You can use TAB to cycle through the items that have to be modified or completed. When done, you can press ENTER to return to the normal editing mode. The cursor will be placed at an appropriate position to continue working.

### Based on templates

Sigasi Studio can help you to declare VHDL and Verilog objects, using autocompletion based on templates. Sigasi Studio comes preconfigured with templates for all common declarations and statements, including (for VHDL):

* function, procedure
* process
* type: enum, file, range, array, record
* signal, constant, variable
* component
* entity
* architecture
* entity/architecture pair
* package/package body pair
* and much more

After the autocompletion, the editor will be into templating editing
mode. You can also configure your own templates.

### Based on the design context

Sigasi Studio uses its knowledge of the design to provide intelligent
autocompletions that can boost productivity tremendously.

The tool knows which objects are appropriate and which identifiers are
visible at any given point in the code. As you start typing and ask for
an autocompletion, it will suggest the appropriate identifiers as
autocompletion candidates.

The tool provides help to autocomplete:

* component declarations
* component instantiations
* entity instantiations
* case statements (based on variables/signals with an enumeration type)

## Other editor features

### Code folding

If you work with large files, you might want to hide certain pieces of your code. This can be done with code folding. Certain constructs, such as if-statements or process-statements can be folded so that they use a single line in the editor view. You can do this by clicking the little **"+"** symbol next to the statement.

![Code Folding](images/code_folding.png)

You can also enable/disable code folding and perform other actions by right-clicking in the gutter (the small column to the left of your code) and selecting **Folding**.

![Configure Code Folding](images/configure_folding.png)

### Rename refactoring

Right click on any identifier (VHDL or SystemVerilog) and select **Refactor > Rename element** (**Ctrl+Shift+R**) to change the name of the declaration and all its references. If you press **Ctrl+Shift+R** twice, you can preview the rename before applying it.

### Full screen view

Double click on the editor tab to make it full screen.

### Block selection {: #block-select}

**Note:** In other tools, this feature may be known as *column editing*
or *column select*.

Block selection is an alternative for standard (paragraph) selection.
Block selection mode differs from standard selection mode in that it
allows to select rectangular regions, or to set the cursor over multiple
lines. Block selection is ideal for selecting vertical regions, for
example a column of a table or all port names in a port map.

![Block selection](images/block-select.png "Block selection Mode")

To toggle between normal and block selection modes use **Alt+Shift+A**
or press the **Toggle Block Selection** icon in the tool bar.

### Structured selection

Structured Select enables you to select VHDL or Verilog code, based on its *syntactic structure*. (Screencast: "[/screencasts/structured-select]")

* **Shift+Alt+Up**, expands the selection to the smallest syntax element that contains the current selection. You can then further expand the selection by invoking the action again.
* **Shift+Alt+Down**, contracts the current selection to the nested syntax expression that still contains the current cursor position. You can then further contract the selection by invoking the action again.
* **Shift+Alt+Left**, adds the syntax element left of the current selection to the selection. You can then further expand the selection by invoking the action again. You can also expand the selection in the other direction with **Shift+Alt+Right**

### Show whitespace

### Move and Duplicate lines {: #move-lines}

You can easily *move* lines up and down by pressing: **Alt+Up** and
**Alt+Down**.

You can *duplicate* your current line, or the lines of the current
selection by pressing: **Ctrl+Alt+Down**.

### Configure key bindings

See [keyshortcuts]

### Emacs/VI emulation mode

See [plugins#VI-and-Emacs]

### Remove Trailing Whitespace {: #trailing-whitespace}

The action to remove trailing whitespace is hidden by default. You can access it by pressing **Ctrl+3**, type **RTW** and then select the correct action. Alternatively, you can bind this action to [/manual/keyshortcuts] of your preference.
This action is being executed on the saved file, not in the editor. So before using this action you have to make sure your file is saved.

### Customize color preferences

### Multiple Screen Support

### Side-by-side Diff

* Previous versions (local history or version control)
* Comparing two files

## Opening project files

The default way to open files in the VHDL and SystemVerilog editor, is to double click the files in the [Project Explorer][views#explorer]. But there are more methods to open files in your projects.

### Open Resource

When you press **Ctrl+Shift+R** the **Open Resource** dialog opens. In this dialog you can type a name or pattern to open a specific file name.

### Open Design Unit

When you press **Ctrl+Shift+D** the **Open Design Unit** dialog opens. In this dialog you can type a name or pattern to open a specific VHDL or SystemVerilog design unit name.

![Open Design Unit Dialog](images/open-design-unit.png)

Note that [**excluded** design files][libraries#libraries-mapping] do not appear in this list.

# VHDL Specific

In addition to the powerful features of an Eclipse editor, the VHDL
editor that comes with Sigasi Studio supports a number of advanced editing
features which are specifically useful for VHDL editing. These are
described in this chapter.

## Code highlighting

Highlighting Classes for VHDL:

* *Syntax*  :  Comment, Keyword, Number, String, Task tag
* *Semantic* :  Constant, Port, Signal, Type, Variable, Attribute, Function/Procedure, Labels

## VHDL specific autocompletes

### Instantiating an entity

**Note:** In other tools this feature may be know as *paste as
instantiation* or *port translation*.

Sigasi Studio knows all entities in the design and their interfaces, and
can therefore automate much of the instantiation process. At the point
in the code where you normally enter the entity name, you can use
autocompletion instead to suggest a list of possible entities. Upon
selection, the tool will complete the instantiation with a generic map
and a port map with named associations. As an initial suggestion, each
actual parameter will have the same name as its formal parameter. Of
course, the actual parameter names need to be reviewed and edited by the
user. Therefore, the editor will go into template editing mode after the
autocompletion.

![](images/entity_instantiation.png)

Instantiating a *component* is similar to instantiating an entity. Note
that components will only be shown if they are visible in the current
scope.

### Declaring a component

**Note:** In other tools this feature may be know as *paste as
component* or *port translation*.

If you want to use instantiation based on a component (as opposed to
direct instantiation) you need to associate an entity with a component.
Sigasi Studio can automatically declare a component for an existing entity. At
the point where you normally enter the component name, you can use
autocompletion instead to show the list of available entities. Upon
selection, the tool will automatically complete the component
declaration.

### Type Conversion

In VHDL design you need to do a lot of type conversions. Sigasi Studio’s
autocomplete functionality can help you with those. Put a dot (`.`)
after the element you want to convert, and the autocomplete suggestions
will appear. The conversion functions have descriptions like “convert
type” and “convert to …”.

## Stuttering

Stuttering is an editing technique popularized by Emacs, that lets you
type certain things really fast. Stuttering means that you tap a certain
key twice and it expands to something more complex. For example, press
the period key **.** twice, and the editor will expand it to a right
arrow `=>`. Stuttering works like double clicking: if you type keys
**slowly**, the stuttering mechanism will not be triggered.

The following stuttering keys are available:

| Keys      | Effect       |
| --------- | ------------ |
| **,,**    | `<=`         |
| **..**    | `=>`         |
| **::**    | `:=`         |

Stuttering can be disabled or enabled in **Window \> Preferences \> VHDL \> Enable Stuttering**.

## Smart Indentation  {: #smartindent-vhdl}

When you press enter, Sigasi Studio automatically adjusts the indentation of
current and the new line. Depending on the content of the preceding
line, Sigasi Studio will automatically increase or decrease the indentation
level. E.g. an extra indent after and `if`-statement and remove an
indent for the matching `else`-clause.

You can enable/disable this feature via **Window \> Preferences \>
Sigasi \> VHDL** by toggling the **“Enter adjusts indentation on current
and next line”** setting.

**Tabs vs. spaces:** This features inserts tabs characters or spaces,
according to your preferences.

* See also: [tabs-and-spaces]

<a href="//fast.wistia.net/embed/iframe/asr4pf7p8e?popover=true" class="wistia-popover\[height=533,playerColor=7b796a,width=800\]"><img src="https://embed-ssl.wistia.com/deliveries/85b4fd88af9a4430f70df330bb8409bc8557da2f.jpg?image_play_button=true&image_play_button_color=7b796ae0&image_crop_resized=200x133" alt="" /></a>

<script charset="ISO-8859-1" src="//fast.wistia.com/assets/external/popover-v1.js">
</script>

## VHDL code formatting

Press **Ctrl+Shift+f** to format your current VHDL file.

This includes:

* indentation
* vertical alignment of certain symbols like “<=”
* wrapping lines that are too long

### Context based

Sigasi Studio's formatter is context based and tries to respect the style of the author. So depending on the original source style, the formatter might make different choices.

One example is the decision to format a *conditional signal assignment* on one, or multiple lines. Sigasi Studio makes this decision based on the position of the first `else` keyword. If you put the `else` keyword on the first line, the formatter will put everything on one line. If you put the `else` keyword on a new line, the formatter will use multiple lines for the assignment.

```vhdl
  demo <= (others => '0') when enable = '1'
    else (others => '1') when input = '1' -- else on new line
    else (others => 'X');
```

** Note about broken code**: If your VHDL source file contains syntactical errors, the formatter can not always figure out an appropriate formatting. For this reason the formatter is programmed to stop applying (whitespace) changes when unsupported syntax errors are encountered.

### Configuration

You can set your preferences for Tabs or spaces under **Window \>
Preferences \> General \> Editors \> Text Editors \> Insert Spaces for
Tabs.**

Other preferences for code formatting are part of [xl]. You
can configure them at **Window > Preferences > Sigasi > VHDL > Formatting**
Configurable settings currently include:

* Preserve newline characters
* Vertical alignment
* Upper case for VHDL keywords
* Alignment column for trailing comments

### Correct indentation only

Sigasi Studio can also correct the indentation of your code without making any other changes.  Inside a VHDL editor, open the context menu and click **Source > Correct Indentation**, or hit **Ctrl+I**. This only changes whitespace at the start of you lines.

If you select code first, only the code in the selection will be indented.

### Disable formatting in defined regions

You can disable the formatter for defined regions in your VHDL source files by enclosing them by **off** and **on** tags:

* **off** tag: `-- @formatter:off`
* **on** tag: `-- @formatter:on`

![](images/formatter_off.png)

### Format code on save

You can configure Sigasi Studio to automatically format your VHDL files when you save your source files via **Preferences > Sigasi > VHDL**, next enable **Enable code format on save**.

## Lightweight editor for large VHDL files

Sometimes you have to deal with very large VHDL files such as large
concatenated library files and generated files. Unfortunately the Sigasi Studio
VHDL editor can not cope with huge VHDL files yet. Large files stress
the interactive compiler too much to give timely feedback.

To allow you to edit large VHDL files the Sigasi Studio IDE contains a
lightweight VHDL editor that can handle all files without problems. This
editor does not analyze your files a type time. It only offers syntax
highlighting and the default Eclipse editing features. The lightweight
VHDL editor will check for errors when you save your file.

The current threshold VHDL file size that is used to switch to the
lightweight editor is 1 MB.

# Verilog Specific

In addition to the powerful features of an Eclipse editor, the Verilog
editor that comes with Sigasi Studio supports a number of advanced editing
features which are specifically useful for Verilog editing. These are
described in this chapter.

## Type-time Syntax error reporting

Sigasi Studio marks Verilog syntax errors while you type.

## Initial preprocessor definitions for (System)Verilog projects

Since [/releasenotes/sigasi-3.06] you can configure definitions that are set before other files in the project are processed.
Right click your project and select **Properties > (System)Verilog Preprocessor**.

![](/releasenotes/3.6/preprocessor_properties.png)

The code in the **Initial preprocessor definitions** field is preprocessed before all other (System)Verilog code in your project. This allows you to, for example, set global defines without an explicit `include` statement.


## Verilog version

You can configure the Verilog version (Verilog or SystemVerilog) via **Window > Preferences**, **Sigasi > Verilog** and **Verilog version**.

## Format

Press **Ctrl+Shift+F** to format your current SystemVerilog file.

The current formatter implementation corrects indentation only.

## Smart Indentation {: #smartindent-verilog}

When you press enter, Sigasi Studio automatically adjusts the indentation of
current and the new line. Depending on the content of the preceding
line, Sigasi Studio will automatically increase or decrease the indentation
level. E.g. an extra indent after a `module` and remove an indent for
the matching `endmodule`.

You can enable/disable this feature via **Window \> Preferences \>
Sigasi \> Verilog** by toggling the **“Enter adjusts indentation on
current and next line”** setting.

**Tabs vs. spaces:** This features inserts tabs characters or spaces,
according to your preferences.

See also:

* [tabs-and-spaces].
* Screencast : [/screencasts/verilog-smart-indent]

## Verilog Preprocessing/Macros

When you hover over a Verilog preprocessor directive (e.g. `include ...`), Sigasi Studio presents you the preprocessed text. This hover also shows you, at the bottom, a convenient link to open the [views#Preprocessor View].

![](images/preprocessor-hover.png)

In the [views#Preprocessor View], you can preview the expanded version of your preprocessed Verilog source files.

You can configure the include paths of your Verilog projects in the Verilog Preprocessor Property page. You can open this page by right clicking your Verilog project and selecting **Properties > Verilog Preprocessor**.
![](images/preprocessor-property-page.png)

You can specify multiple include paths by separating them with a `;`. All paths are relative to the project folder. You can add the main project folder as include path by entering `.`.

You can also add an include path by running the Quick Fix on \``include` errors.

**Ctrl+Click** on *\`defines* (or **F3**) will lead you to the corresponding declaration. Autocomplete will also offer you a list of all visible *\`defines*.
