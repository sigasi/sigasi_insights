---
title: "Display line numbers by default"
layout: page 
pager: true
author: Hendrik Eeckhaut
date: 2009-06-29
tags: 
  - planeteclipse
  - eclipse
comments: true
bannerad: true
_build:
  list: never
---


I wanted to display line numbers by default in our <a href="https://www.sigasi.com/product">Eclipse RCP application</a>. I knew this had to be trivial but I couldn't find how to do this anywhere on the web.

Here is the solution:
Add following line to your `plugin_customization.ini` file:

```ini
org.eclipse.ui.editors/lineNumberRuler=true
```
