---
title: "'Run As' menu item strangely disappearing in the context menu"
layout: page 
pager: true
author: Hendrik Eeckhaut
date: 2010-12-09
tags: 
  - planeteclipse
  - java
  - eclipse
comments: true
bannerad: true
---

<em>In this post I explain how I found the <strong>Run As</strong> menu item mysteriously disappear and how it can be fixed.</em>

I ran into an unexpected issue while I was implementing a new launch configuration shortcut for our <a href="https://www.sigasi.com/product">RCP application</a>. The <strong>Run as</strong> menu only appeared the first time the Project Explorer's context menu was shown. (The <strong>Run as</strong> menu item was shown together with the <strong>Debug as</strong> and <strong>Profile as</strong> menu item, even though I did not declare any debug or profile shortcuts.) After it was shown once, it disappeared, regardless whether the action was run or not. Since I spend considerable time debugging this issue, I took the time to blog my solution to this strange behavior.

Run As menu item (first display):
![Run As menu item (first display)](/img/tech/run_as_1.png)

Run As menu item (second display):
![Run As menu item (second display)](/img/tech/run_as_2.png)

I initially thought I was misusing the <code lang="java">org.eclipse.debug.ui.launchShortcuts</code> extension point. But after re-reading the extension point description a few times, lots of trial and error experiments, I had to look further.

After some experimenting, I found out that the menu items disappeared a soon as the Debug plugin was loaded. If I activated the Debug plugin by clicking the <strong>Run</strong> menu, the <strong>Run as</strong> menu never occurred in the Project explorer's context menu.
So I digged into the <code lang="java">org.eclipse.debug.ui</code>-plugin and found following extension point:

```xml
<extension  point="org.eclipse.ui.popupMenus">
  ...
  <objectContribution 
      objectClass="java.lang.Object"
      id="org.eclipse.debug.ui.contextualLaunch.run">
      <action 
         label="%RunContextMenu.label"
         style="pulldown"
         class="org.eclipse.debug.internal.ui.actions.RunContextualLaunchAction"
         menubarPath="additions"
         enablesFor="+"
         id="org.eclipse.debug.ui.contextualLaunch.run.submenu">
      </action>
      <enablement>
         <or>
            <and>
              <not><with variable="org.eclipse.core.runtime.Platform">
                 <test property="org.eclipse.core.runtime.bundleState" args="org.eclipse.debug.core" value="ACTIVE"/>
              </with></not>
              <adapt type="org.eclipse.core.resources.IResource"/>
            <and>
              <with variable="org.eclipse.core.runtime.Platform">
                 <test property="org.eclipse.core.runtime.bundleState" args="org.eclipse.debug.core" value="ACTIVE"/>
              </with>
              <test property="org.eclipse.debug.core.launchable" value="run"/>
            </and>
         </or>
      </enablement>
   </objectContribution>
   ...
</extension>
```

There I saw it, the <strong>Run as</strong> menu is enabled with different conditions whether the plugin is loaded or not. If the plugin is not loaded yet, the menu is shown for all objects that are adaptable to <code lang="java">IResource</code>. Once the plugin is loaded, the <code lang="java">"org.eclipse.debug.core.launchable"</code> test property is used.

The <code lang="java">"org.eclipse.debug.core.launchable"</code> is defined in <code lang="java">org.eclipse.debug.core</code> and runs a method, Test, in class <code lang="java">org.eclipse.debug.internal.core.LaunchablePropertyTester</code>. This method tests whether there is a "run" launch mode available and whether the selection has an <code lang="java">org.eclipse.debug.ui.actions.ILaunchable</code> adapter.


So it turned out that I only needed to  add an ILaunchable adapter for the resources for which I can create a launch shortcut. I solved this by adding this extension point to my plugin.xml:
```xml
<extension point="org.eclipse.core.runtime.adapters">
  <factory class="org.eclipse.core.runtime.IAdaptable"
           adaptableType="org.eclipse.core.resources.IResource">
     <adapter type="org.eclipse.debug.ui.actions.ILaunchable"/>
  </factory>
</extension>
```

I finally I had the intended behavior. At least, as soon as the plugin is actually loaded.


### P.S.: Different behavior when run in Eclipse

I also noted that this strange <strong>Run as</strong> menu item behavior did not occur when I ran my plugin inside the Eclipse IDE instead of inside our RCP application. The a posteriori explanation is that other plugins (JDT, JUnit,...?) must have implementations for the missing IResource adapter.