---
title: "Even more performance improvements"
layout: page 
pager: true
author: heeckhau (Sigasi)
date: 2010-10-22
tags: 
  - performance
---
In our latest release we focused development on improving the performance of our VHDL compiler so that Sigasi HDT can give faster feedback. We optimized VHDL analysis so that both the full build and incremental builds are much faster.

We also added another improvement to Sigasi HDT that we did not communicate about yet. In the [latest download of the stand-alone application](http://www.sigasi.com/download), we also updated the JRE, the <a href="http://en.wikipedia.org/wiki/Java_Virtual_Machine#Execution_environment">Java Runtime Environment</a> to version 1.6.0_22. The JRE is the engine that runs Sigasi HDT (and Eclipse). So every <a href="http://en.wikipedia.org/wiki/Java_performance">performance improvement to the JRE</a> also speeds up Sigasi HDT.

If you [downloaded](http://www.sigasi.com/download) after 2010-10-20, you already have an updated JRE. But if you have been using Sigasi HDT for a longer time, you will have to update the JRE manually, since our embedded update mechanism unfortunately cannot automatically update the JRE.

## How to update the JRE

If you are running the <strong>stand-alone</strong> version, you need to <a href="http://www.sigasi.com/download">download the latest version</a> and completely replace your existing installation. You will not loose any settings because all your settings are stored in your workspace (`workspace-sigasi`). The best approach is to:

* <a href="http://www.sigasi.com/download">Download the latest version</a>
* Move your existing installation to your trash bin
* Unzip the Sigasi HDT zip file

If you are running Sigasi HDT as **Eclipse plugin**, you have already installed Java yourself anyhow. The easiest was to update is to use your OS's update mechanism.

Enjoy your faster VHDL design experience!
