---
title: VHDL projects
layout: page 
pager: false
comments: true
---

The goal of Part 2 is to understand what a project is, why you want projects and how to set one up. You will learn how to add files to your projects and make sure the VHDL library is set up correctly.

As an extra, you will learn how to efficiently work with Finite State Machines.

### Setup

* Switch to the **Sigasi** perspective (Button in top right) 
* Import project `part2_vhdl_project`
  1. **File > Import...**
  2. **Existing project into Workspace**, **Next**
  3. **Browse** to `part2_vhdl_project`
  5. **Finish**
* Close unrelated projects (Right Click on the project in Project Explorer and select **Close Unrelated Projects**)

### Navigation

* Open `navigation.vhd` with **Open Resource** (**Ctrl+Shift+R**) or via the Project Explorer
  * Project Explorer: Enable the *Link with editor* button (⇆)
  * Hover over `MAX_COUNT`
  * Open declaration of `std_logic` and other declarations
  * Navigate back (**Alt+Left**)

* Open `components.vhd`
  * Navigate from the component instantiation to the matching entity: press and hold the **Ctrl** key and hover over the component to see a menu with hyperlinks. Click the link to open it.
  * Find References of port `rst`
  * Open two editors side by side (Drag editor tab)

* Navigate through the project with the following Views: (If they are not visible, open them with **Quick Access**)
  * Libraries View
  * Problems View
  * Task View
  * Dependencies View

### Edit 

* Open file `edit.vhd`
* Use Quickfix to fix the invalid sensitivity list
* Remove trailing whitespace (Use **Quick Access** to find and run this action)

### Libraries

* Open `libraries.vhd`
* Set folder `my_lib` to library `my_lib` (Project explorer: **Set Library**)

### State machines:

* Open file `fsm.vhd`
* Declare enum type `state_type`: (`init`, `running`, `ready`)
* Declare variable `state` of `state_type`
* Autocomplete `case statement`
* Add some transitions
* Add case choice `when idle` and use quickfix to add enum literal to enum type (QuickFix)
* Remove case choice `when idle` and use the quickfix on `case state` to add it again.
* **Ctrl+Hover** on a state assignment and select **Open Matching when Clause**. 

### Rename

* Open file `rename.vhd`
* Manual rename: Change (edit) `port_1` to `port_1a` and manually update the matching instantiations
* Rename (**Refactor > Rename element**) port `port_a` to `port_aa`
* Compare file with *Local history* (Right-click on file, **Compare With > Local History...**) and inspect the changes you made

### Import (non-Sigasi) project + setup libraries

* First: Check that your are in VHDL 2008 mode
* **File > Import...**
* **Sigasi > Import a VHDL project**, **Next \>**
* **Browse...** to `vunit_example`, **Finish**
* Set the project to library `uart_lib` (right click, **Set Library**)  
  Check the library annotations in the project explorer
* Add library `vunit_lib`:
  * Drag and drop the `vunit_lib` folder from you File System Explorer (e.g.: Windows Explorer, Mac Finder, Nautilus) into the `Common Libraries` folder (in the Project explorer). Choose the option to *link to files and folders*.
  * Set the library to `vunit_lib`  
* Set the library for the test files (`uart/src/test`). Read the source code for the library name.
* One more library is not correctly set. Try to fix this. (Tip: the sources are already in the project)

### Optional Extra Tasks

* Select `edit.vhd` and `navigate.vhd` and compare them via the right click menu.
* Configure and enable an External Compiler (See `extra_compiler.vhd`)
* Set the top level and start the Simulator (See `extra_compiler.vhd`)
* Export a CSV file with all files in your project (**File > Export... > Sigasi > CSV file**)

