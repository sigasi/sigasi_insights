---
title: Sigasi 2.1
layout: page
pager: true
date: 2011-10-31
---

As a VHDL designer, you may run into Verilog and AHDL from time to time. Now you can view and edit these files in the same familiar environment, with our new syntax highlighting for [**Verilog**](http://en.wikipedia.org/wiki/Verilog) and [**AHDL**](http://en.wikipedia.org/wiki/Altera_Hardware_Description_Language). Syntax highlighting is nothing compared to our VHDL features, but you do get all of the standard Eclipse features.

Verilog and AHDL features:

-   all standard Eclipse editor features
    -   block select
    -   local history
    -   much more…
-   syntax highlighting
-   toggle comment

![Basic Verilog and Ahdl support](/img/releasenotes/2.1/verilogahdl-syntaxhighlighting.png "Basic Verilog and Ahdl support")

**Note** that Verilog and Ahdl come as separate plugins. So if you are using the Sigasi Plugin in Eclipse, you have to manually install these new plugins.

We also ported the two most wanted features from Sigasi 1.0: Autocomplete for records and TODO/FIXME tags:

### Autocomplete for records

If you use records, the tool shows you which fields a record has. Just press **CTRL+SPACE** to see the valid record fields.
Check out this one-minute screencast: [Record Autocomplete](/screencasts/record_autocomplete).

![Autocomplete for records](/img/releasenotes/2.1/record-autocomplete.png "Autocomplete for records")

### **TODO** / **FIXME** tags in comments

Each time you type the word TODO or FIXME in VHDL comments, the tool
collects these tags and puts them in a separate list. Note that tags are
only updated at save time.
![TODO Markers](/img/releasenotes/2.1/todo-markers.jpg "TODO Markers")

Other improvements
------------------

-   Add a *template* autocomplete *context for expressions*
-   Show procedures in procedures in the outline (ticket:1756)
-   Code folding for generate statements
-   Extra *performance improvements* to the VHDL builder
-   Autcomplete in sensitivity lists

Bug fixes
---------

-   ticket:1725 : attribute specification in package show up as unnamed in outline
-   ticket:1741 : restore compatibility with Eclipse 3.5
-   ticket:1765 : never show more than one “Error Reporting” dialog
-   ticket:1725 : fix attribute specifications in outline


Sigasi 2.1.1
============


Lightweight VHDL editor for large VHDL files
--------------------------------------------

Sometimes you have to deal with **very large VHDL files** such as large
concatenated library files and generated files. Unfortunately these
large files make it impossible for the editor to give *timely feedback*.
To allow you to edit large VHDL files we have added a **lightweight VHDL
editor** to Sigasi that can handle all files without problems.

This editor does not analyze your code at type time. It only offers
*syntax highlighting* and the *default Eclipse editing features*. The
lightweight VHDL editor will still check for errors when you save your
file. The lightweight editor is automatically opened for files larger
than **1 MB**.

Other new and noteworthy improvements
-------------------------------------

-   Performance improvements:
    -   Projects that use only a small part of **XilinxCoreLib** are now build significantly faster.
    -   A performance bug in projects with lots of errors was resolved.
-   The VHDL template editor now has an **Anywhere** context. Select this context to add your template to any autocomplete suggestion.
-   Improved autocomplete for records (tickets 1807, 1808, 1809).
-   Open *Verilog* and *AHDL* files as *external files*, outside of a regular project.
-   Show a warning dialog if the workbench is configured with too little memory.

![Anywhere context](/img/releasenotes/2.1/edit_template.png "Anywhere context")

*Your project will be cleaned automatically after this update. This is necessary because the internal VHDL was changed and the caches must be updated accordingly.*

### Bugfixes

-   ticket 1758 : Type conversion in port map should not be flagged as error
-   ticket 1749 : Punctuation marks should never be auto-inserted when auto-completing
-   ticket 1750 : Occurrence highlighting should not highlight keywords or punctuation marks
-   ticket 1751 : Template autocomplete should work, even if the full keyword is typed
-   ticket 1793 : Task markers should be removed if a file is unmapped
-   ticket 1794 : Flexnet user-locked licenses should be verified in a case insensitive way
-   ticket 1800 : Disable mark occurrences in Baseline mode of Sigasi Starter edition
-   ticket 1813 : Null pointer exception during validation
-   ticket 1827 : Re-enable the *refactor menu*

Download/Update
---------------

If you have Sigasi 2 installed, you can {{< update_sigasi >}}. You can also {{< download_latest >}}.
