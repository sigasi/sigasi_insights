---
title: Configuring Your Design Environment
layout: page 
pager: true
---

Choosing your VHDL version {#configure-vhdl-version}
--------------------------

Sigasi supports VHDL 1993, 2002 and 2008. You can select which VHDL
version to use in:\
**Window \> Preferences \> Sigasi \> VHDL \> VHDL version**.

If you want to write VHDL 87 code, you should select the “1993” option.
However, the tool will not warn about constructs that were not supported
in 1987, but that were introduced in 1993.

Any new project that you create will have the common libraries (`STD`
and `IEEE`) that correspond to your selected VHDL version. Your existing
project will not be modified. If you want to update the common libraries
for an existing project, right-click the project and select **Library
Mapping \> Reset Common Libraries**.

Colors and Fonts {#configure-colors}
----------------

You can configure the code coloring by selecting **Window \> Preferences
\> Sigasi \> VHDL \> Syntax Coloring**. For each class of semantic and
syntactic elements, you can select the font, letter color, background
color, style (bold, italic, underline, strike through).

Font size
---------

Sometimes you want extra small fonts, so that you can fit more content
on your screen. Another time you\
may want extra large fonts, so that you can use a beamer and your
audience can see what you are doing.

Most fonts, including the font that is used by the editors, can be
controlled in the preferences:\
**Window \> Preferences**. Fonts are controlled in **General \>
Appearance \>Colors and Fonts**. The font of the editors are in **Basic
\> Text font**.

Some fonts cannot be controlled in this preference page. These fonts are
defined by general system settings, and are used for writing the menu
names, the Project Explorer view and the Outline and Hierarchy views. On
Windows, you can change these fonts by changing your font settings in
the Windows Control Panel. On Linux, these fonts are controlled by a
settings file: `${HOME}/.gtkrc-2.0` . You can change the font by adding
a line like:

`gtk-font-name = "Sans 10"`

You have to restart Sigasi HDT before these changes take effect.

Annotations Colors
------------------

*Annotations* are colors added on top of your text editor, and to the
right of your text editor, in the scroll bar. The image below shows
annotations for each occurrence of a certain data type. The color has
been changed to bright green.

> ![Annotations in Bright Green](/images/screenshots/annotations-in-green.png "Annotations in Bright Green")
>
> Annotations, Displayed in Bright Green

You can change the color of annotations in **Window \> Preferences \>
General \> Editors \> Text Editors \> Annotations**. For the particular
case of *occurrence* annotations, you want to modify the color for
annotation type **Occurrences**. \
If more than one **Occurrences** type is displayed, you need the
`org.eclipse.xtext.ui.editor.defaultOccurrenceAnnotation`. The others
may refer to occurrences for Java or other plug-ins.

Tabs and Spaces
---------------

If you want to use spaces instead of tabs, you can set your indentation
preferences in: **Window \> Preferences \> General \> Editors \> Text
Editors**. Here you can select choose to **Insert Spaces for Tabs** and
choose your preferred **Displayed Tab Width**.

The “Gutter”
------------

The *Gutter* is the small area to the left of the editor view. It is
used for displaying extra information about your code.

-   Line numbers: What line is this?
-   Quick Diff: Did this file change?
-   Folding: hiding pieces of code from view
-   Markers: error markers, warnings and bookmarks.

There is not much to configure about markers, but the other categories
can be turned on or off.

Line numbers
------------

To enable line numbers, right-click in the gutter and select **Show Line
Numbers**.

Linting rules {#configure-linting}
-------------

You can choose the severity of linting rules in: **Window \> Preferences
\> Sigasi \> VHDL \> Errors/Warnings**.\
Read more information about [linting](linting#linting).

Language
--------

Eclipse is available in several languages, and you can install the
language pack of your choice. Read more in this [support
article](http://www.sigasi.com/content/installing-translations-eclipse)

Keyboard shortcuts
------------------

You can configure keyboard shortcuts (key bindings) in **Window \>
Preferences \> General \> Keys**. You can modify individual keyboard
shortcuts or add new key bindings.\
There is also a preconfigured scheme for Emacs-like keyboard shortcuts.

After you have configured your keyboard shortcuts, you can export your
settings and share them with your colleagues (or re-import them on
another computer):\
To export, go to **File \> Export… \> General \> Preferences**, and
select **Key Preferences**. To import that file: **File \> Import… \>
General \> Preferences**.

Quick Diff
-----------
[/todo]

Folding
-------
[/todo]

Finding more options
--------------------
[/todo]