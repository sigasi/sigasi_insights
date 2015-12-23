---
title: "Display line numbers by default"
layout: page 
pager: true
author: heeckhau (Sigasi)
date: 2009-06-29
tags: 
  - planeteclipse
  - eclipse
---

I wanted to display line numbers by default in our <a href="/product">Eclipse RCP application</a>. I knew this had to be trivial but I couldn't find how to do this anywhere on the web. 

Here is the solution:
Add following line to your `plugin_customization.ini` file:
```
org.eclipse.ui.editors/lineNumberRuler=true
```
