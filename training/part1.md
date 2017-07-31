---
title: File based editing
layout: page 
pager: false
comments: true
---



The goal of the first part is to get comfortable with the Sigasi Studio VHDL editor. By the end you will be able to *easily detect and fix VHDL syntax issues*, *customize editor preferences* and *know the basic keyboard shortcuts*.

### Edit

* Open file `part1_edit.vhd` via **File > Open File...**
* Make the editor *full screen* (Double click on the tab)
* Double click again to exit *full screen* mode
* Format the VHDL code (**Ctrl+Shift+F**, *Make sure that no text is selected*)
* Fix all VHDL syntax issues, use the QuickFix where possible (When in doubt, **Hover** over the error Marker)
* Delete a line with **Ctrl+D**
* Comment a line with **Ctrl+/**
* Move a line up and down with **Alt+Up** and **Alt+Down**
* Autocomplete (**Ctrl+Space**)
    * Name
    * Constant declaration  
    * `if` statement in a `process` (Use **enter** to exit the *template mode*)
    * `if generate` in an `architecture`  
* Block select (**Shift+Alt+A**, or button in toolbar)
    * Delete a Block
    * Add content on multiple lines 
* Enable *Show whitespace* (¶-button) and type some *tabs* and *spaces* to see the difference
* Find & Replace  
    * Experiment with **Ctrl+F**, e.g. find all `TODO`'s
    * Use **Ctrl+K** to find the next occurrence of the current selection
    * Use **Ctrl+J** (and start typing) for an inline, incremental search. *Look at the status bar to see what you have already typed*.
* Use **Quick Access** to convert an identifier to UpperCase (Select the identifier, type `upper` in the Quick Access Field in the Toolbar and confirm with **Enter**)
* Mess up the indentation of a part of the source code, select it and **format only the selection**.

### Navigate

* Open file `part1_navigate.vhd` via **File > Open File...**
* Open Declaration  (**F3**)
* Move back to last location (**Alt+Left**)
* Go to Line  (**Ctrl+L**)
* Navigate to errors with the gutter (Click red rectangles in scroll bar)
* Navigate to next problem marker (**Ctrl+.**)
* Navigate with the *Outline view*

### Customize settings

Preferences can be set via **Window > Preferences**.

* Open file `part1_custom.vhd`
* Switch to VHDL 2008 (**Preferences > Sigasi > VHDL**) and note that the syntax error get resolved
* Tabs or spaces ( Use the search box in the preference dialog and type `tab`) Use *Show whitespace* to check.
* Uppercase keywords (**Preferences > Sigasi > VHDL > Formatting**) (Use *format* to check)

### Optional Extra tasks

* Open file `part1_extra.vhd`
* *Stuttering* (in the editor, double tap the `.`, `;` or `,` key)
* Try *structured select* <http://insights.sigasi.com/manual/editor.html#structured-selection>
* Drag and drop a file from your file explorer in the Editor part of Sigasi Studio
* Create a new file  (**File > New External File**)
* Outline: Figure out what *Link with editor* button (⇆) does
* Add a keyboard shortcut preference for *show whitespace* (Search for the **Keys** preference page)


