---
title: "Text-based occurrence highlighting (like Notepad++) with the Glance plugin"
layout: page 
pager: true
author: Hendrik Eeckhaut
date: 2016-03-17
comments: true
---

> Notepad++ highlights all textual occurrence of the currently selected identifier. Can Sigasi also do this too?

If you use the search dialog (**Search > Search...**), Sigasi will mark all text occurrences. Clearing the search in Search View, removes the annotations.

Alternatively, to have a behavior more similar to notepad++, you can install the [Glance Search plugin](http://ystrot.github.io/glance/)

## Install Glance plugin

* Click **Help > Install new Software...**
* Enter <http://eclipse-glance.googlecode.com/svn/site/> as update site  
  and select **Glance > Glance core** 
  ![](images/glance_install.png)
* Click **Next >** (twice), accept the license and **Finish**
* Restart Sigasi

## Use Glance plugin

To highlight all occurrence of the currently selected identifier, press **Alt+Shift+F**

![](images/glance_usage.png)

You can also show the Glance Search bar permanently in the _status bar_ via the preferences: **Window > Preferences > General > Glance Search**
