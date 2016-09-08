---
title: "Dynamic menu items in Eclipse"
layout: page 
pager: true
author: heeckhau (Sigasi)
date: 2011-08-16
tags: 
  - code
  - eclipse
  - java
  - planeteclipse
comments: true
bannerad: true
---

I wanted to add a dynamic menu contribution item to the popup menu of project explorer. I could not immediately find out how to do this, so I decided to document it here. Eventually it turned out to be quite easy.

First you have to add the menu contribution to your `plugin.xml`. I wanted to add an extra menu item to the project explorer so I used `"popup:org.eclipse.ui.navigator.ProjectExplorer#PopupMenu?after=additions"` as locationURI. Next you only have to specify a class that will create the menu item and specify an id.


```java
<extension point="org.eclipse.ui.menus">
  <menuContribution locationURI="popup:org.eclipse.ui.navigator.ProjectExplorer#PopupMenu?after=additions">
    <dynamic
              class="com.sigasi.MydynamicMenu"
              id="com.sigasi.myDynamicMenu">
    </dynamic>
  </menuContribution>
</extension>
```

Next you have to create the Java class that extends `org.eclipse.jface.action.ContributionItem` (You can use autocomplete for this).

The method that you have to override for a dynamic menu is `fill(Menu menu, int index)`.
In this method you have to create the new (dynamic) MenuItem. You can also simply return if (e.g. based on the selection) you do not want to show a menu item. In the example code below I simply display the current date in the dynamic menu item.

Do not forget to add a `addSelectionListener` to the MenuItem, to start some action when the menu is selected.

That's it.

The complete java source:
```java
package com.sigasi;

import java.util.Date;

import org.eclipse.jface.action.ContributionItem;
import org.eclipse.swt.SWT;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.widgets.Menu;
import org.eclipse.swt.widgets.MenuItem;

public class MyDynamicMenu extends ContributionItem {

	public MyDynamicMenu() {
	}

	public MyDynamicMenu(String id) {
		super(id);
	}
	
	@Override
	public void fill(Menu menu, int index) {
		//Here you could get selection and decide what to do
		//You can also simply return if you do not want to show a menu
		
		//create the menu item
		MenuItem menuItem = new MenuItem(menu, SWT.CHECK, index);
		menuItem.setText("My menu item (" + new Date() + ")");
		menuItem.addSelectionListener(new SelectionAdapter() {
			public void widgetSelected(SelectionEvent e) {
				//what to do when menu is subsequently selected.
				System.err.println("Dynamic menu selected");
			}
		});
	}
}
```