---
title: "Running GHDL on your Sigasi project"
layout: page 
pager: true
author: Philippe Faes
date: 2012-10-10
tags: 
  - GHDL
  - VHDL
  - simulator
comments: true
bannerad: true
---


Now that Sigasi can export a list of the VHDL files in a project, you can write your own scripts for virtually any EDA tool; compilers, linters or synthesis tools. As a first example, I have created a short python script that reads the file list that comes from Sigasi and compiles your project using GHDL.

To use this script, you first need to export the CSV file list: right-click on your project and select **Export > Sigasi > CSV File**. Now put the python script in the project directory and run it. You can change the parameters in the python script if you like.

This script might not suit your exact needs, but it should be a good starting point. If you create your own script for a different EDA tool, it would be great if you can share this script with us. Check out [the project that I have created on GitHub](https://github.com/sigasi/sigasi-csv-build).