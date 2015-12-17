---
title: "'Run As' menu item strangely disappearing in the context menu"
layout: page 
pager: true
author: heeckhau (Sigasi)
date: 2010-12-09
tags: 
  - planeteclipse
  - java
  - eclipse
---
<div class="content">
<p><em>In this post I explain how I found the <strong>Run As</strong> menu item mysteriously disappear and how it can be fixed.</em></p><p>I ran into an unexpected issue while I was implementing a new launch configuration shortcut for our <a href="http://www.sigasi.com/product">RCP application</a>. The <strong>Run as</strong> menu only appeared the first time the Project Explorer's context menu was shown. (The <strong>Run as</strong> menu item was shown together with the <strong>Debug as</strong> and <strong>Profile as</strong> menu item, even though I did not declare any debug or profile shortcuts.) After it was shown once, it disappeared, regardless whether the action was run or not. Since I spend considerable time debugging this issue, I took the time to blog my solution to this strange behavior.</p><p><span class="inline inline-center"><img src="http://www.sigasi.com/sites/www.sigasi.com/files/images/RunAs1.png" alt="Run As menu item (first display)" title="Run As menu item (first display)" class="image image-_original " width="316" height="497"/><span class="caption"><strong>Run As menu item (first display)</strong></span></span><br/><span class="inline inline-center"><img src="http://www.sigasi.com/sites/www.sigasi.com/files/images/RunAs2.png" alt="Run As menu item (second display)" title="Run As menu item (second display)" class="image image-_original " width="316" height="428"/><span class="caption"><strong>Run As menu item (second display)</strong></span></span></p><p>I initially thought I was misusing the <span class="geshifilter"><code class="java geshifilter-java">org.<span style="color: #006633;">eclipse</span>.<span style="color: #006633;">debug</span>.<span style="color: #006633;">ui</span>.<span style="color: #006633;">launchShortcuts</span></code></span> extension point. But after re-reading the extension point description a few times, lots of trial and error experiments, I had to look further.</p><p>After some experimenting, I found out that the menu items disappeared a soon as the Debug plugin was loaded. If I activated the Debug plugin by clicking the <strong>Run</strong> menu, the <strong>Run as</strong> menu never occurred in the Project explorer's context menu.<br/>So I digged into the <span class="geshifilter"><code class="java geshifilter-java">org.<span style="color: #006633;">eclipse</span>.<span style="color: #006633;">debug</span>.<span style="color: #006633;">ui</span></code></span>-plugin and found following extension point:</p><p><div class="geshifilter"><pre class="xml geshifilter-xml" style="font-family:monospace;"><span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;extension</span>  <span style="color: #000066;">point</span>=<span style="color: #ff0000;">"org.eclipse.ui.popupMenus"</span><span style="color: #000000; font-weight: bold;">&gt;</span></span>  ...  <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;objectContribution</span> </span><span style="color: #009900;">      <span style="color: #000066;">objectClass</span>=<span style="color: #ff0000;">"java.lang.Object"</span></span><span style="color: #009900;">      <span style="color: #000066;">id</span>=<span style="color: #ff0000;">"org.eclipse.debug.ui.contextualLaunch.run"</span><span style="color: #000000; font-weight: bold;">&gt;</span></span>      <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;action</span> </span><span style="color: #009900;">         <span style="color: #000066;">label</span>=<span style="color: #ff0000;">"%RunContextMenu.label"</span></span><span style="color: #009900;">         <span style="color: #000066;">style</span>=<span style="color: #ff0000;">"pulldown"</span></span><span style="color: #009900;">         <span style="color: #000066;">class</span>=<span style="color: #ff0000;">"org.eclipse.debug.internal.ui.actions.RunContextualLaunchAction"</span></span><span style="color: #009900;">         <span style="color: #000066;">menubarPath</span>=<span style="color: #ff0000;">"additions"</span></span><span style="color: #009900;">         <span style="color: #000066;">enablesFor</span>=<span style="color: #ff0000;">"+"</span></span><span style="color: #009900;">         <span style="color: #000066;">id</span>=<span style="color: #ff0000;">"org.eclipse.debug.ui.contextualLaunch.run.submenu"</span><span style="color: #000000; font-weight: bold;">&gt;</span></span>      <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;/action<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>      <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;enablement<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>         <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;or<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>            <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;and<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>              <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;not<span style="color: #000000; font-weight: bold;">&gt;</span></span><span style="color: #000000; font-weight: bold;">&lt;with</span> <span style="color: #000066;">variable</span>=<span style="color: #ff0000;">"org.eclipse.core.runtime.Platform"</span><span style="color: #000000; font-weight: bold;">&gt;</span></span>                 <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;test</span> <span style="color: #000066;">property</span>=<span style="color: #ff0000;">"org.eclipse.core.runtime.bundleState"</span> <span style="color: #000066;">args</span>=<span style="color: #ff0000;">"org.eclipse.debug.core"</span> <span style="color: #000066;">value</span>=<span style="color: #ff0000;">"ACTIVE"</span><span style="color: #000000; font-weight: bold;">/&gt;</span></span>              <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;/with<span style="color: #000000; font-weight: bold;">&gt;</span></span><span style="color: #000000; font-weight: bold;">&lt;/not<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>              <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;adapt</span> <span style="color: #000066;">type</span>=<span style="color: #ff0000;">"org.eclipse.core.resources.IResource"</span><span style="color: #000000; font-weight: bold;">/&gt;</span></span>            <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;and<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>              <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;with</span> <span style="color: #000066;">variable</span>=<span style="color: #ff0000;">"org.eclipse.core.runtime.Platform"</span><span style="color: #000000; font-weight: bold;">&gt;</span></span>                 <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;test</span> <span style="color: #000066;">property</span>=<span style="color: #ff0000;">"org.eclipse.core.runtime.bundleState"</span> <span style="color: #000066;">args</span>=<span style="color: #ff0000;">"org.eclipse.debug.core"</span> <span style="color: #000066;">value</span>=<span style="color: #ff0000;">"ACTIVE"</span><span style="color: #000000; font-weight: bold;">/&gt;</span></span>              <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;/with<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>              <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;test</span> <span style="color: #000066;">property</span>=<span style="color: #ff0000;">"org.eclipse.debug.core.launchable"</span> <span style="color: #000066;">value</span>=<span style="color: #ff0000;">"run"</span><span style="color: #000000; font-weight: bold;">/&gt;</span></span>            <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;/and<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>         <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;/or<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>      <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;/enablement<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>   <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;/objectContribution<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>   ...<span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;/extension<span style="color: #000000; font-weight: bold;">&gt;</span></span></span></pre></div></p><p>There I saw it, the <strong>Run as</strong> menu is enabled with different conditions whether the plugin is loaded or not. If the plugin is not loaded yet, the menu is shown for all objects that are adaptable to <span class="geshifilter"><code class="java geshifilter-java">IResource</code></span>. Once the plugin is loaded, the <span class="geshifilter"><code class="java geshifilter-java"><span style="color: #0000ff;">"org.eclipse.debug.core.launchable"</span></code></span> test property is used.</p><p>The <span class="geshifilter"><code class="java geshifilter-java"><span style="color: #0000ff;">"org.eclipse.debug.core.launchable"</span></code></span> is defined in <span class="geshifilter"><code class="java geshifilter-java">org.<span style="color: #006633;">eclipse</span>.<span style="color: #006633;">debug</span>.<span style="color: #006633;">core</span></code></span> and runs a method, Test, in class <span class="geshifilter"><code class="java geshifilter-java">org.<span style="color: #006633;">eclipse</span>.<span style="color: #006633;">debug</span>.<span style="color: #006633;">internal</span>.<span style="color: #006633;">core</span>.<span style="color: #006633;">LaunchablePropertyTester</span></code></span>. This method tests whether there is a "run" launch mode available and whether the selection has an <span class="geshifilter"><code class="java geshifilter-java">org.<span style="color: #006633;">eclipse</span>.<span style="color: #006633;">debug</span>.<span style="color: #006633;">ui</span>.<span style="color: #006633;">actions</span>.<span style="color: #006633;">ILaunchable</span></code></span> adapter.</p><p>So it turned out that I only needed to  add an ILaunchable adapter for the resources for which I can create a launch shortcut. I solved this by adding this extension point to my plugin.xml:<br/><div class="geshifilter"><pre class="xml geshifilter-xml" style="font-family:monospace;"><span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;extension</span> <span style="color: #000066;">point</span>=<span style="color: #ff0000;">"org.eclipse.core.runtime.adapters"</span><span style="color: #000000; font-weight: bold;">&gt;</span></span>  <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;factory</span> <span style="color: #000066;">class</span>=<span style="color: #ff0000;">"org.eclipse.core.runtime.IAdaptable"</span></span><span style="color: #009900;">           <span style="color: #000066;">adaptableType</span>=<span style="color: #ff0000;">"org.eclipse.core.resources.IResource"</span><span style="color: #000000; font-weight: bold;">&gt;</span></span>     <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;adapter</span> <span style="color: #000066;">type</span>=<span style="color: #ff0000;">"org.eclipse.debug.ui.actions.ILaunchable"</span><span style="color: #000000; font-weight: bold;">/&gt;</span></span>  <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;/factory<span style="color: #000000; font-weight: bold;">&gt;</span></span></span><span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;/extension<span style="color: #000000; font-weight: bold;">&gt;</span></span></span></pre></div></p><p>I finally I had the intended behavior. At least, as soon as the plugin is actually loaded.</p><p>Hendrik.</p><h3>P.S.: Different behavior when run in Eclipse</h3><p>I also noted that this strange <strong>Run as</strong> menu item behavior did not occur when I ran my plugin inside the Eclipse IDE instead of inside our RCP application. The a posteriori explanation is that other plugins (JDT, JUnit,...?) must have implementations for the missing IResource adapter.</p>  </div>
