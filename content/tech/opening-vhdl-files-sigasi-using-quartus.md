---
title: "Opening VHDL files in Sigasi, using Quartus"
layout: page 
pager: true
author: Philippe Faes
date: 2012-12-19
tags: 
  - Quartus
  - Altera
  - VHDL editor
comments: true
bannerad: true
---


This page deals with step three of using the Quartus integration plugin for Sigasi. We assume have already set up Sigasi as default editor in [Altera Quartus II](/manual/opening#altera-quartus-ii).

## How to open an HDL file in Quartus

Step three happens when you open a VHDL file in Quartus, and Sigasi kicks in to show you the file. There are several ways to open an HDL file in Quartus. The most common ways are: you can double-click a file in the Quartus project navigator, or double-click an error in the console log.

![Open a VHDL from Quartus](/img/tech/open_file_in_quartus.png)

Sigasi will now start and find a workspace (the place where all of your Sigasi metadata lives). You can use the default workspace and tell Sigasi to keep using the same workspace from now on.

![Select workspace](/img/tech/workspace-1.png) 

## First time Sigasi sees your Quartus project.

When you double-click a VHDL file, Quartus (as of version 12.1) opens Sigasi and passes three bits of information: (1) the file (2) the line number and (3) the project. The first time you open a file in a given project, Sigasi needs to *import* your project.

![Import Quartus project](/img/tech/import_quartus_project.png) 

Also, the import wizard wants to know where Quatus is installed.

![Quartus installation location](/img/tech/quartus_installation_location.png)

## The Quartus perspective

Sigasi mirrors the Quartus project, and so these mirrored projects are not regular Sigasi projects. In fact, the look really messy and confusing in the regular Project Explorer. We have created a special "Quartus project view" to look at the mirrored Quartus projects in Sigasi. When you import a Quartus project in Sigasi, the import wizard will ask you if you want to switch to the Quartus perspective. So: yes, you do want to switch to the Quartus perspective.

![Switch to Quartus perspective](/img/tech/switch_perspective.png)

## Known issues:

This is still a **beta** release, so we have some things that are not great yet. Please [let us know](mailto:support@sigasi.com) what you like and what we should improve.

* When you open a file in Quartus, the Sigasi window may not snap to the foreground and get the focus. Most operating systems don't allow windows to jump to the foreground as part of their malware protection. We're trying to figure out a way around this.
* When you create a new file in Quartus (**File > New... > VHDL File**), Sigasi opens with a new file named @Vhdl1.vhd@, but the file is not added to the project.
