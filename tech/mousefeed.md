---
title: "Learn keyboard shortcuts with MouseFeed"
layout: page 
pager: true
author: Hendrik Eeckhaut
date: 2011-11-11
tags: 
  - keyboard shortcuts
---
Using keyboard shortcuts makes you a lot more efficient compared to using your mouse. But how to learn all shortcuts in an unobstructive and efficient way?

The users of our standalone VHDL development environment have certainly noticed the subtle popups with the keyboard shortcut, every time you click a button or menu item. This effect is achieved through the [MouseFeed plugin](https://github.com/heeckhau/mousefeed). MouseFeed helps you to form the good habit of using keyboard shortcuts.

How can you enable this feature if you are using a standard Eclipse distribution? You just have to install the MouseFeed plugin.

![MouseFeed popup for Open Declaration](images/mousefeed.png)

## Installation

* Click **Help > Install New Software...**
* Enter <http://download.sigasi.com/updates/mousefeed> in the **Work with** field and press **Enter**
* Some plugins should appear
* Select **MouseFeed**
* Click **Next** (2 times), accept the license and click **Finish**.
* Restart Eclipse

## Note: Enforce the use of keyboard shortcuts

For die hard keyboard fetishists, MouseFeed offers an interesting option in its preference page to _enforce the use of keyboard shortcuts_ (**Preferences > Mousefeed > Action invocation**). If you enable this preference, every time you try to start an action with your mouse that has has a keyboard shortcut, the action will not be executed; instead the popup will show you the shortcut. This way you are forced to learn and use the shortcut.
