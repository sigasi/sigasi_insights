---
title: "What is the Sigasi alternative for “jEdit-F3” functionality."
layout: page 
pager: true
author: Hendrik Eeckhaut
date: 2014-04-30
comments: true
bannerad: true
---

In jEdit one can get a list of all search-results in the current file in a separate part of the frontend (always visible) with **F3**. Is this also possible in Sigasi?

There are multiple, similar 'actions' in Sigasi:

1. Occurrence highlighting: (*enabled by default*) this highlights all other occurrences of the same identifier in the current editor. You can also click on the highlights in the scroll bar to navigate to other occurrences
2. Find references: (**Ctrl+Shift+G** by default). When you use find references, all references to the current identifier are listed in the search view. Note that you can change the shortcuts as you like via **Preferences > General > Keys**
3. Sigasi also offers multiple ways to search for text. The one you need is **"Find Text in File"**. You can associate a shortcut for it via **Preferences > General > Keys**.
   **Note** that **F3** is by default associated with **"Open Declaration"**, which is the most used action in Sigasi. So I really recommend to also find a good shortcut for this action.

![](/img/tech/find-text-in-file.png)

In conclusion: I'd recommend to get used to the first or second option. But if you can't get rid of your current finger memory, you can use option 3.
