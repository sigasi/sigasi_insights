---
title: Sigasi Studio 4.1
layout: page
pager: true
date: 2018-09-12
comments: true
---
Sigasi Studio 4.1 introduces a convenient way to work with **VUnit**, **name convention checking for SystemVerilog** and many more new and noteworthy changes.

# VUnit
{{< xprt_only >}}

[VUnit](https://vunit.github.io/) is an open source **unit testing framework** for VHDL and SystemVerilog. 
Sigasi Studio now has a convenient way to *manage* VUnit projects as well as allowing you to *run* and *inspect test results* straight from the IDE. This helps you to *write* tests more easily and *run* them frequently.

Check [this video][/screencasts/vunit] for an introduction to VUnit in Sigasi Studio

## Manage VUnit Projects

When you import a VUnit project (**File > Import... > Sigasi > Import a VUnit project**) or add VUnit support to an existing project (Right click project, **Configure > Add VUnit support**), Sigasi Studio runs VUnit in the background and automatically adds the correct libraries to your project. It also shows error markers in the VUnit script (`run.py`) if anything goes wrong.  
[![VUnit project](/releasenotes/4.1/vunit_project.png "VUnit project")](/releasenotes/4.1/vunit_project.png)

## Run VUnit Tests

There are multiple ways to run VUnit tests in Sigasi Studio:

* Right click your project and select **Run VUnit tests** to run *all tests in your project*.
* Right click one or more HDL files and select **Run VUnit tests** to run *all tests in the selected files*.
* Right click in the Sigasi editor and select **Run VUnit tests** to run *all tests in the active editor*.
* Right click in the VUnit test name (the string in the `run` function call) and select **Run VUnit test** to *run this single test only*.
* Rerun the tests in the VUnit view.

[![Run VUnit VHDL tests](/releasenotes/4.1/vunit_run_tests.png "Run VUnit VHDL tests")](/releasenotes/4.1/vunit_run_tests.png)

## Inspect VUnit Test Results

When you run VUnit tests in Sigasi Studio, the VUnit view is opened. This view presents a convenient way to inspect the test results.  
[![VUnit SystemVerilog Example](/releasenotes/4.1/vunit_verilog.png "VUnit SystemVerilog Example")](/releasenotes/4.1/vunit_verilog.png)

You can also open the *Console View* to inspect the entire VUnit output.  
[![VUnit console view](/releasenotes/4.1/vunit_console.png "VUnit console view")](/releasenotes/4.1/vunit_console.png)

# Check SystemVerilog Naming Conventions

We know that many teams have their own coding conventions. When you are focused on getting a complex part of HDL code to work, it is not easy to simultaneously think about all the naming rules too. By checking the naming convention rules in the editor, it becomes easy to spot and fix violations immediately. This also assists new members of the team in learning the rules in a convenient and helpful way.

We have made a short introduction video on [Naming Conventions][/screencasts/naming-conventions].

[![Check SystemVerilog naming conventions](/releasenotes/4.1/namingconventions_systemverilog.png "Check SystemVerilog naming conventions")](/releasenotes/4.1/namingconventions_systemverilog.png)

[![Check SystemVerilog naming conventions](/releasenotes/4.1/naming_convention_validation.png "Check SystemVerilog naming conventions")](/releasenotes/4.1/naming_convention_validation.png)

# Sigasi Studio Standalone Version : Eclipse Photon (4.8)

Sigasi Studio 4.1 is build on top of the newly released [Eclipse Photon](https://eclipse.org/photon/) platform. This brings a number of UI and other improvements such as improved memory usage. You can find all new and noteworthy changes in Eclipse Photon on the [Eclipse website](http://www.eclipse.org/eclipse/news/4.8/).

If you open an existing workspace after the update to Sigasi Studio 4.1, you might see a warning about updating your workspace. You can safely confirm the update by clicking **Continue**.  
[![Workspace update warning](/releasenotes/4.1/older_workspace_version.png "Workspace update warning")](/releasenotes/4.1/older_workspace_version.png)  

# Graphics and Documentation Improvements

* Added option to **hide all reassignment nodes**.  
[![Hide reassignments in block diagram](/releasenotes/4.1/reassignment.png "Hide reassignments in block diagram")](/releasenotes/4.1/reassignment.png)
* Visual distinction between (single bit) wires and buses.  
[![Buses in Block Diagram](/releasenotes/4.1/blockdiagram_buses.png "Buses in Block Diagram")](/releasenotes/4.1/blockdiagram_buses.png) 
* The block and state machine diagrams are now drawn with inverted colors when a dark theme is selected.  
[![Diagrams in dark theme](/releasenotes/4.1/blockdiagram_dark.png "Diagrams in dark theme")](/releasenotes/4.1/blockdiagram_dark.png)
* VHDL `processes` and `blocks` are now taken into account when generating **documentation** from your project.
* If you have a **custom graphics configuration** for an architecture, module or statemachine, Sigasi Studio will now use this file in the PDF **documentation** (instead of the default one).
* The Blockdiagram and Statemachine Export, now exports the custom graphics configurations to SVG too.

# Other New and Noteworthy Changes

* **Improved hovers**: In addition to the *declaration information* and *associated comments*, the hover (or *tooltip*) now also shows a shortcut to [find references][/manual/editor#find-references] and [open declaration][/manual/editor#open-declaration-and-hyperlinks]. Check out [this video][/screencasts/hovers] for more information.  
[![Improved hovers SystemVerilog](/releasenotes/4.1/hover_systemverilog.png "SystemVerilog hovers")](/releasenotes/4.1/hover_systemverilog.png)  
[![Improved hovers VHDL](/releasenotes/4.1/hover_vhdl.png "VHDL hovers")](/releasenotes/4.1/hover_vhdl.png)
* The **New VHDL/SystemVerilog Project** wizard now offers an option to set the **VHDL/SystemVerilog version** for the new project.  
[![Set version in new project wizard](/releasenotes/4.1/new_project_wizard.png "Set version in new project wizard")](/releasenotes/4.1/new_project_wizard.png)
* Added a **light-weight editor for SystemVerilog**. This editor can be used to edit large files smoothly.  
[![Light weight SystemVerilog editor](/releasenotes/4.1/open_large_file_editor.png "Light weight SystemVerilog editor")](/releasenotes/4.1/open_large_file_editor.png)
* Added a checkbox in the (maintenance) license expiration warning dialogs to *never show this dialog again*.
* When you enable one of the **Sigasi Auto Export** options in your project's properties, the files are now created immediately (without touching any project files).
* Added a **Cancel** button to the *Open Large File* warning dialog for VHDL.
* Improved display of **Net Search** results.
* The **Open Design Unit** dialog now shows the project name too.  
[![Open Design Unit](/releasenotes/4.1/open_design_unit.png "Open Design Unit")](/releasenotes/4.1/open_design_unit.png)
* Improved text selection when double clicking in SystemVerilog State Machine View
* Improved highlighting in SystemVerilog macros.
* From now on the Sigasi Studio stand-alone version is 64-bit only. On 32-bit systems, the plugin can still be used.

# Bug Fixes

* ticket 4387 : VHDL component autocomplete does not generate vectors for Verilog modules with non-ANSI vector ports
* ticket 4341 : Hide signal assignments button in outline is broken
* ticket 4349 : Quick Fix for port and generic maps should overwrite empty maps
* ticket 4331 : SystemVerilog formatter does not indent correctly when preceded by comments
* ticket 4377 : Tutorial projects not created automatically when new workspace is created
* ticket 4436 : SystemVerilog PDF export: avoid duplicates caused by include files

# How to update?

If you have Sigasi Studio 3 or 4 installed, you can [update][/manual/setup#Software Updates] or [download a fresh install of the latest version]{{< download_latest >}}.

# Sigasi 4.1.1 point release

On September 26th we released Sigasi Studio 4.1.1. This release fixes following reported issues:

* Fixed component instantiations showing up as unresolved in the hierarchy view
* Fixed false positive on the quickfix of a component when the matching verilog module uses vectors
* Fixed a formatting issue with signal declarations and assignments

Thanks for all the bug reports and enabling Talkback.
