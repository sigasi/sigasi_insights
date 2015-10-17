---
title: "VHDL generation from Yakindu state charts with Xtend"
layout: page 
pager: true
author: heeckhau (Sigasi)
date: 2012-02-27
tags: 
  - planeteclipse
  - VHDL
  - xtend
  - Xtext
  - yakindu
---
<div class="content">
<p>Last month I was introduced to <a href="http://www.yakindu.org/" class="elf-external elf-icon">Yakindu</a>, an open-source-toolkit for model-driven development of embedded systems. One component of the Yakindu toolkit supports the graphical development of finite-state machines: the <strong>Yakindu Statechart Tools (<span class="caps">SCT</span>)</strong>. Although I'm personally rather skeptical to graphical development tools and prefer textual entry with visualization, the Yakindu Statechart Tools seemed really powerful. For example, <span class="caps">SCT</span> supports hierarchical states, parallel states, &#8230; So it was worth giving it a try for <span class="caps">VHDL</span> design.</p>	<p><span class="inline inline-center"><a href="http://www.yakindu.org/2012/01/31/yakindu-m11-new-and-noteworthy/" class="elf-external elf-icon elf-img"><img src="http://www.sigasi.com/sites/www.sigasi.com/files/images/dynamicHighlighting2-1024x601.preview.png" alt="Yakindu state machine" title="Yakindu state machine" class="image image-preview " width="640" height="376"/></a><span class="caption"><strong>Yakindu state machine</strong></span></span></p>	<p>Together with <a href="http://blogs.itemis.de/terfloth/" class="elf-external elf-icon">Axel Terfloth</a> from the Yakindu project, Sigasi prototyped a <span class="caps">VHDL</span> generator for <span class="caps">SCT</span> statecharts that we both will demonstrate at <a href="http://www.embedded-world.de/" class="elf-external elf-icon">Embededded World 2012</a> (Hall 4 Stands 109 (Sigasi) and 408 (Itemis)). Please visit us to see a demo of this prototype.</p>	<p>We used "Xtend"http://www.eclipse.org/xtend/ to generate <span class="caps">VHDL</span>-code from the statecharts. The Xtend-Yakindu combination did not work out-of-the-box. Yakindu currenlty only works with an older version of Xtext (version 2.01.). So you need to download an older version of Xtend too. Here are some of the required steps to get started developing with Yakindu: </p>	<ol><li>Download <a href="http://www.eclipse.org/downloads/" class="elf-external elf-icon">Eclipse for <span class="caps">RCP</span> and <span class="caps">RAP</span> Developers</a> (These containt the <span class="caps">PDE</span> plugins)</li>		<li>Download Xtend 2.0.1 as an offlline update site from http://www.eclipse.org/modeling/tmf/downloads/</li>		<li>Start Eclilpse and install Xtend from the offline update site</li>		<li>Install Yakindu from http://updates.yakindu.com/indigo/milestones/</li>	</ol><p>Hendrik.</p>  </div>

