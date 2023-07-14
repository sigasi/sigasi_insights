---
title: "Sigasi Studio Editing Tricks"
layout: page 
publishdate: 2021-11-16
lastmod: 2022-05-18
pager: true
author: Sebastian Zarnekow
tags: 
  - eclipse
  - howto
  - Sigasi Studio
  - editor
comments: true
bannerad: true
---

# 10 Tricks to level up your editing skills

We all know the feeling when it's pair programming time with a coworker: Suddenly we wonder in awe which keyboard shortcut they used a second ago to get the task done in no time. You bet there will be plenty of situations when your peer would be curious, too. The truth is, everyone has their own habits and favorite tools for code entry. Often it is only a subset of the editor's functional range, though.

In this article, we present some lesser-known yet surprisingly convenient features of Sigasi Studio. Chances are that some of these will impress your coworkers, too.

## 1. The omnikey: Find Actions

The most important part of being able to memorize and use a feature is to be able to find it. Sigasi Studio has an extremely handy utility for that purpose.

{{< figure src="/img/tech/editing/find_actions.png" alt="Find actions in Sigasi Studio" class="uk-align-top" >}}

The magnifier icon in the upper right corner will bring up the **Find Actions** search box. Most features of the IDE are reachable from this dialog.
Even more convenient is the keyboard shortcut **Ctrl+3** / **⌘+3** to open it. Guess what, we can even find the **Find Actions** dialog in the **Find Actions** dialog.

As a bonus, it does not only discover and trigger actions, it also shows their configured keyboard shortcut.

## 2. Avoid finger twisting: Custom keybindings

One of the early lessons learned: Features will be used more frequently if they are directly accessible and support us in our natural workflow. That's why accessing actions through mouse gestures is often cumbersome. Instead, we want everything to be **available at our fingertips**. Especially the important, regularly used functionality shall be available directly via keyboard shortcuts. In Sigasi Studio the most often required functions do already have default key combinations assigned. Other, less often needed features are only reachable from the *Find Actions* menu or via the mouse, though. At least by default...

{{< figure src="/img/tech/editing/keys.png" alt="Customizing keyboard shortcuts in Sigasi Studio" class="uk-align-top" >}}

Power users as we are, we can use *Find Actions* and the search term **Keys**. This reveals the preferences dialog of Sigasi Studio. Here we can **customize all existing keybindings**
and define our own key combinations. Features that we rely on in our daily work but that don't have a shortcut yet, are now directly available. And of course, if we find a default combination to be too twisted, we can assign a new shortcut which is more to our liking.

## 3. Remember all the things: Bookmarks

While browsing designs and understanding their properties, it is often helpful to **keep track of the interesting pieces of the code**. Of course, we can always take notes with pen and paper, or put reminder comments into the source code. But let's admit this is often not the most convenient way to remember what we were thinking.

A handy, lesser known feature of Sigasi Studio is the possibility to **bookmark arbitrary file locations** and later quickly go back to these bookmarks. To have these always available, we could add a custom shortcut to Sigasi Studio (e.g. **Ctrl+4** / **⌘+4**). Whenever we spot a curious piece of code that is not in our immediate focus, we can create a new bookmark to keep track of what should be revisited later.

{{< figure src="/img/tech/editing/bookmarks.png" alt="Bookmarks allow to remember relevant locations in the code base" class="uk-align-top" >}}

All the bookmarks are listed in the [respective view]({{< ref "/manual/eclipse/views.md#bookmarks-view" >}}) which can be opened via **Ctrl+3 > Bookmarks** / **⌘+3 > Bookmarks**. From that view it is possible to directly jump to the remembered location, or get rid of obsolete notes by deleting them.

For those of us who prefer to-do lists and checkmarks: Instead of bookmarks, we can **create tasks** too. Tasks are associated with file locations, but have an additional checkbox associated with them in the [Tasks View]({{< ref "/manual/eclipse/views.md#tasks-view" >}}). As soon as we resolve the curious piece of code or understand its purpose, we can mark the task as resolved - we all know that checking off to-do lists releases endorphins; or we simply delete the task items again to get rid of them.

## 4. Navigating issues: Go to problem

Off to something else: Sigasi Studio is very capable of **pointing out potential problems** in our designs by showing errors, warnings, and other info-level feedback. The feedback is presented in the editor and also listed in the *[Problems view]({{< ref "/manual/eclipse/views.md#problems-view" >}})*. In order to fix the revealed issues most efficiently, we need a quick way to navigate to the problematic location. A simple double-click in the problems view will open the file and the respective line will be revealed.

Unfortunately, problems often come in flocks: we are usually confronted with more than one warning or error per file. To quickly scan through all the problems in the current editor, **Go to next problem (Ctrl+. /⌘+. )** and **Go to previous problem (Ctrl+Shift+. /⌘+⇧+. )** can be used to jump from one issue to the other. This pair of little navigation gems is very convenient when fixing issues in the current editor.

## 5. Structured selection

We are all aware of the fact that since humanity moved from typewriters to PCs, the most frequently used shortcuts are *Copy* and *Paste*. But how do we usually determine and choose the region that should be copied? Obviously, we select the source either through the keyboard or by pointing with the mouse.

For some use cases though there is no need to press the arrow keys of the keyboard or grab the mouse. Sigasi Studio offers a very efficient way to select a consistent region of source code : **Structured selection**. This gesture will expand the current selection to the next enclosing, consistent syntactic region.

{{< video src="/img/tech/editing/selection.mp4" webm="/img/tech/editing/selection.webm" alt="Expand and restore selection in Sigasi Studio" class="uk-align-center" >}}

By pressing **Ctrl+Shift+Up** / **^+⇧+↑** the selection will grow to the next enclosing element, which may be a single word, the next block or a complete entity, architecture, module or package. If the selection was made too big by accident, we can shrink it again by using the arrow down key instead of arrow up.

Selecting a single identifier couldn't be faster than with a single keystroke.

## 6. Block selection

Sometimes, a regular selection simply doesn't cut it. Occasionally we need to work with columnar block selections to get a tedious coding task done more efficiently.
For that purpose, Sigasi Studio supports a **Block selection mode**, such that we can literally **select a rectangular piece of code**. Based on that, we can enter text that should replace the range of all affected lines, copy the selection into the clipboard or paste a replacement text into the selected region.

{{< figure src="/img/tech/editing/block_selection.png" alt="A selected, rectangular block of code" class="uk-align-top" >}}

Block selection can be toggled via **Alt+Shift+A** / **⌥⇧+A**.

## 7. Working with word boundaries

Rather than working on the granularities of rectangles, we mostly work on the granularity of words or identifiers in our code. That's why it shouldn't be a surprise that Sigasi Studio has convenience in its repertoire for these, too. The cursor handling and navigation within *PascalCase* or *snake_case* names is aware of word boundaries for our benefit.

* **Go to next word** and **Go to previous word** will move the cursor quickly to the end or the beginning of the current word. The keyboard shortcuts for that gesture are **Ctrl+Right / Left** / **⌥+→/←**. They can be combined with the **Shift** / **⇧** key to create a text selection or enlarge an existing selection.
* **Delete next word** and **Delete previous word** are self-explanatory and bound to the shortcuts **Ctrl+Del / Backspace** / **⌥+⌦/⌫**.

**Update**: {{< page "/releasenotes/sigasi-4.15.md" >}} added the option to [disable this feature]({{< ref "/manual/eclipse/editor.md#smart-caret-positioning" >}}).

## 8. Line dancing

As they used to say: The word is not enough. We need to work efficiently with entire lines, too. With a single keystroke, lines can be moved around, duplicated, or deleted in Sigasi Studio.

* Move the current line, or all the currently selected lines, up or down via **Alt+Up / Down**. It is not necessary to have an accurate selection of the entire line, it'll just work.

* By pressing **Ctrl+Alt+Up** or **⌥⌘+↑** you can duplicate the currently focused lines. The newly inserted lines will be selected afterwards such that we can immediately continue working with them. This is sometimes the fastest way to get a set of complete lines into the clipboard: Duplicate them and immediately cut them from the document. Sometimes the OS will hijack this key-combination, but we know already how to solve this: *Find Actions*, enter **Keys**, and assign the shortcut we like best.

* Now that we know how to duplicate lines, it's equally important to know how we can delete entire lines with a single keystroke: **CTRL+D** / **⌘+D** will get rid of unwanted content in our files.

## 9. Convert line delimiters

Line delimiters, string encoding, and timezones. Besides off-by-one-errors, these are two of the most annoying sources of bugs. At least for line delimiters, most version control systems do have a decent story to cope with the peculiarities of Windows versus Unix style. But still, we see mixed line endings more often than we'd like too.

The good news: Sigasi Studio will assist you in reaching consistency and keep working with consistent files. Right from the editor, we can **Convert Line Delimiters to Windows** or **Convert Line Delimiters to Unix** according to our preference. Just in case you wonder where you can find this feature, it's available via **Find Actions** or from the **File > Convert Line Delimiters** menu item.

{{< figure src="/img/tech/editing/whitespace.png" alt="Visible whitespace characters in Sigasi Studio" class="uk-align-top" >}}

To eyeball the currently used delimiters, we can enable **Show Whitespace Characters** which will give us an indication if the current file uses *\r\n* or a single *\n* at the end of each line. 

{{< figure src="/img/tech/editing/line_delimiters.png" alt="Project preferences to set the prefered line delimiter" class="uk-align-top" >}}

Furthermore, the project preferences in Sigasi Studio are useful to ensure that new files that we create all use the same line delimiter independent from the operating system. Pinning this setting is very useful in mixed teams.

## 10. (Surround selection with parentheses)

The last gem in our portfolio for today is again related to selections. Sometimes we want to surround a piece of code with a pair of quotes, parentheses, braces or brackets. Instead of going to the position for the opening parenthesis, inserting it and subsequently navigating to the closing position to fix the other end, we can make our lives a little easier.

When we have selected a piece of code and type an opening parenthesis, Sigasi Studio will surround the current selection with the respective parentheses pair.

## The end

With this sometimes tongue in cheek article we have highlighted some editing functionality of Sigasi Studio. Granted, these humble tricks will not appear on the feature matrix they are nevertheless useful to get the job done. Depending on personal habits, there are probably more of them that we didn't list (yet). Let us know about your favorite, hidden gems that increase your productivity and maybe even give some joy when working with Sigasi Studio? 