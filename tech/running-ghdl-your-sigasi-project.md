---
title: "Running GHDL on your Sigasi project"
layout: page 
pager: true
author: philippe.faes (Sigasi)
date: 2012-10-10
tags: 
  - GHDL
  - VHDL simulator
---
<div class="content">
<p>Now that Sigasi can export a list of the <span class="caps">VHDL</span> files in a project, you can write your own scripts for virtually any <span class="caps">EDA</span> tool; compilers, linters or synthesis tools. As a first example, I have created a short python script that reads the file list that comes from Sigasi and compiles your project using <span class="caps">GHDL</span>.</p>	<p>To use this script, you first need to export the <span class="caps">CSV</span> file list: right-click on your project and select <strong>Export &gt; Sigasi &gt; <span class="caps">CSV</span> File</strong>. Now put the python script in the project directory and run it. You can change the parameters in the python script if you like.</p>	<p>This script might not suit your exact needs, but it should be a good starting point. If you create your own script for a different <span class="caps">EDA</span> tool, it would be great if you can share this script with us. Check out <a href="https://github.com/philippefaes/sigasi-csv-build" class="elf-external elf-icon">the project that I have created on GitHub</a>.</p>  </div>

