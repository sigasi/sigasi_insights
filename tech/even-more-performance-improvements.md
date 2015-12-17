---
title: "Even more performance improvements"
layout: page 
pager: true
author: heeckhau (Sigasi)
date: 2010-10-22
tags: 
  - performance
---
<div class="content">
<p>In our <a href="/update_20101020">latest release</a> we focussed development on improving the performance of our VHDL compiler so that Sigasi HDT can give faster feedback. We optimized VHDL analysis so that both the full build and incremental builds are much faster.</p><p>We also added another improvement to Sigasi HDT that we did not communicate about yet. In the <a href="http://www.sigasi.com/download-sigasi-hdt">latest download of the stand-alone application</a>, we also updated the JRE, the <a href="http://en.wikipedia.org/wiki/Java_Virtual_Machine#Execution_environment" class="elf-external elf-icon">Java Runtime Environment</a> to version 1.6.0_22. The JRE is the engine that runs Sigasi HDT (and Eclipse). So every <a href="http://en.wikipedia.org/wiki/Java_performance" class="elf-external elf-icon">performance improvement to the JRE</a> also speeds up Sigasi HDT.</p><p>If you <a href="http://www.sigasi.com/download-sigasi-hdt">downloaded</a> after 2010-10-20, you already have an updated JRE. But if you have been using Sigasi HDT for a longer time, you will have to update the JRE manually, since our <a href="/update_howto">embedded update mechanism</a> unfortunately cannot automatically update the JRE.</p><h2>How to update the JRE</h2><p>If you are running the <strong>stand-alone</strong> version, you need to <a href="http://www.sigasi.com/download-sigasi-hdt">download the latest version</a> and completly replace your existing installation. You will not loose any settings because all your settings are stored in your workspace (<span class="geshifilter"><code class="vhdl geshifilter-vhdl">workspace-sigasi</code></span>). The best approach is to:</p><ol><li><a href="http://www.sigasi.com/download-sigasi-hdt">Download the latest version</a></li><li>Move your existing installation to your trash bin</li><li>Unzip the Sigasi HDT zip file</li></ol><p>If you are running <strong><a href="/install_plugin_36">Sigasi HDT as Eclipse VHDL plugin</a></strong>, you have already installed Java yourself anyhow. The easiest was to update is to use your OS's update mechanism.</p><p>Enjoy your faster VHDL design experience,<br/>Hendrik.</p>  </div>

