---
title: "Installing Quartus on a 64-bit Linux system"
layout: page 
pager: true
author: philippe.faes (Sigasi)
date: 2012-06-23
tags: 
  - Quartus
---
<div class="content">
<p>When you try to install Altera Quartus on a 64-bit Linux system (like Fedora or RedHat <span class="caps">RHEL</span>), you will get error messages about missing libraries. The Quartus installer actually looks for the 32-bit versions of these libraries. Here is the list of libraries that I ran in to and had to install:</p><pre>yum install libXext.i686 freetype.i686 fontconfig.i686 linpng.i686 libSM.i6866</pre>	<p>More info about running Quartus in 64-bit mode: http://quartushelp.altera.com/11.1/mergedProjects/global/install/install_pro_64bit.htm</p>  <div id="book-navigation-1518" class="book-navigation">            <div class="page-links clear-block">              <a href="/content/scripting-sigasi-project-creation" class="page-previous" title="Go to previous page">&#8249; Scripting Sigasi project creation</a>                    <a href="/knowledge-base" class="page-up" title="Go to parent page">up</a>                    <a href="/content/vhdl-tips-tricks" class="page-next" title="Go to next page">VHDL Tips &amp; Tricks &#8250;</a>          </div>      </div>  </div>

