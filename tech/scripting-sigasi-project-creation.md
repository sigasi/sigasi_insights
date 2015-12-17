---
title: "Scripting Sigasi project creation"
layout: page 
pager: true
author: heeckhau (Sigasi)
date: 2013-10-17
tags: 
  - hdt-2.0
  - project
  - project management
  - Python
  - Sigasi
---
<div class="content">
<p>When you start using Sigasi, the first thing you have to do is <a href="http://www.sigasi.com/doc/latest/project_setup">set up a Sigasi project</a>. This consists of two steps: <em>(1) selecting the <span class="caps">VHDL</span> files that you want in your project</em> and <em>(2) configuring in which <span class="caps">VHDL</span> library these files must be mapped</em>. In most cases you already have this information in one form or another. For example in a makefile, in a Tcl simulation script, or in the project descriptor file of a third-party <span class="caps">EDA</span> tool.</p>	<p>Because there are so many different formats to describe this information, we cannot offer one universal solution. But to make the import process easier, we have developed <a href="https://github.com/sigasi/SigasiProjectCreator" class="elf-external elf-icon">Python scripts</a> that make it easy for you to convert your own project description into a Sigasi project description.</p>	<p>The <a href="https://github.com/sigasi/SigasiProjectCreator/blob/master/convertCsvFileToLinks.py" class="elf-external elf-icon"><span class="geshifilter"><code class="vhdl geshifilter-vhdl">convertCsvFileToLinks.py</code></span> script</a> converts a <span class="caps">CSV</span> file (<a href="https://github.com/sigasi/SigasiProjectCreator/blob/master/test-files/compilation_order.csv" class="elf-external elf-icon">example file</a>) into a Sigasi Project. This scripts adds a link to each file in the list and maps it to the corresponding library. </p>	<p>All scripts are open sourced under a <a href="https://github.com/sigasi/SigasiProjectCreator/blob/master/LICENSE" class="elf-external elf-icon"><span class="caps">BSD</span> license</a>. So you can freely customize them to your specific needs. Feel free to suggest or contribute improvements.</p>	<p>Of course we can help you write your scripts. <a href="/contact-sales">Contact us</a> for more info.</p>	<p><strong>P.S.</strong>: You can also <a href="http://www.sigasi.com/doc/latest/opening_files">open a Sigasi project</a> with a script. Simply start Sigasi with parameter <code>-p &lt;path to your project folder&gt;</code></p>  <div id="book-navigation-1518" class="book-navigation">            <div class="page-links clear-block">              <a href="/content/organizing-legacy-projects" class="page-previous" title="Go to previous page">&#8249; Organizing legacy projects</a>                    <a href="/content/setting-project" class="page-up" title="Go to parent page">up</a>                    <a href="/content/installing-quartus-64-bit-linux-system" class="page-next" title="Go to next page">Installing Quartus on a 64-bit Linux system &#8250;</a>          </div>      </div>  </div>

