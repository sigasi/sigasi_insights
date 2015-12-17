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
<div class="content">
<p>I wanted to display line numbers by default in our <a href="/product">Eclipse RCP application</a>. I knew this had to be trivial but I couldn't find how to do this anywhere on the web. </p><p>Here is the solution:<br/>Add following line to your <span class="geshifilter"><code class="vhdl geshifilter-vhdl">plugin_customization.ini</code></span> file:<br/><span class="geshifilter"><code class="vhdl geshifilter-vhdl">org.eclipse.ui.editors/lineNumberRuler<span style="color: #000066;">=</span>true</code></span></p>  </div>

