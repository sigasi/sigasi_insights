---
title: Editor View
layout: page 
pager: false
abstract: Some info about the views.
---

The Editor view shows the content of files, and allows you to edit files. It is a tabbed view so that multiple files can be open for editing simultaneously.  The currently selected file is the active file.

Project exploration and navigation
===================================

Sigasi offers powerful techniques to explore a project and navigate through it. This section covers: hovering, Occurrence Highlighting, Open Declaration and Find References.

Occurrence Highlighting
-----------------------

If you click on an identifier, it is highlighted. In addition, all other occurrences of the identifier that refer to the same object are highlighted. Note that this occurrence highlighting is intelligent: it is not based on the identifier's string value, but on the object that the identifier refers to.

 
Finding References 
------------------

To look for occurrences of a given identifier in different files, place your cursor on the identifier and right-click. Now select **Search References**. A search window will appear on the bottom of your workbench, displaying all occurrences of the selected identifier. You can easily navigate through all occurrences by clicking the **Show Next Match** arrow ![Show next match](/images/icons/showNextMatch.png) and the **Show Previous Match** arrow ![Show previous match](/images/icons/showPreviousMatch.png) in the search result view. Note that all occurrences are highlighted and marked with a small arrow at the left border of the editor for easy recognition.
