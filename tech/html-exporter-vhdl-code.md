---
title: "HTML exporter for VHDL code"
layout: page 
pager: true
author: philippe.faes (Sigasi)
date: 2011-11-22
tags: 
  - internship
  - thesis proposal
---
<div class="content">
<p>This is a proposal for a thesis for Master of Engineering or Master of Science in Engineering students. In order to apply, please read the page on <a href="/internships">Internships and Thesis Proposals</a>.</p>	<ul><li>Project: Master of Science in Engineering thesis</li>		<li>Skills: <span class="caps">VHDL</span>, Java, Eclipse</li>		<li>Target audience: electronics or computer science engineers</li>	</ul><p>You will write an Eclipse Plugin that connects to the Sigasi <span class="caps">VHDL</span> plugin. Your plugin will be able to generate a set of <span class="caps">HTML</span> pages; one page for each <span class="caps">VHDL</span> file. The <span class="caps">HTML</span> pages will serve as browsable documentation. The goal is to create a code browsing experience that feels like the Sigasi <span class="caps">VHDL</span> editor.</p>	<p>The <span class="caps">HTML</span> files will contain the <span class="caps">VHDL</span> code, with the following features:</p>	<ul><li>color highlighting: in addition to traditional syntax highlighting, the code has the same semantic highlighting as the Sigasi <span class="caps">VHDL</span> editor</li>		<li>hyperlinked: each identifier contains a hyperlink to the declaration of that identifier.</li>		<li>hovers: if the user hovers his mouse over an identifier, a pop-up should show extra information about that identifier</li>		<li>line numbers</li>	</ul><p>Please look at <a href="http://grepcode.com/file/repository.grepcode.com/java/eclipse.org/3.5/org.eclipse.jface/text/3.5.0/org/eclipse/jface/internal/text/html/HTMLPrinter.java" class="elf-external elf-icon">this page with rendered Java code</a> for inspiration.</p>  </div>

