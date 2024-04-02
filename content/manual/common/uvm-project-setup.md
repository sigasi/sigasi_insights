---
title: "Setting Up a UVM Project"
showinmenu: true
weight: 10
pager: true
aliases:
  - /manual/uvm-project-setup/
  - /tech/systemverilog-uvm-demo/
  - /tech/systemverilog-uvm-vscode/
---

Sigasi Studio provides several features that help write UVM testbenches.
However, a project must first be set up with a UVM library to use these features.
This page describes how to set up a UVM project in Sigasi Studio.
The instructions described here are general; refer to the
[{{< pill text="Eclipse" >}}-specific]({{< ref "/manual/eclipse/projectsetup" >}})
and [{{< pill text="VS Code" >}}-specific documentation]({{< ref "/manual/vscode/projects" >}}) for
details on project setup.

1. Open the folder of your UVM project and add Sigasi SystemVerilog support to the project.
The project will have a lot of errors at this point, indicating missing declarations
and undefined macros.

1. Add the UVM sources to the project by adding a linked folder to the source folder of the
reference implementation of UVM.  At this point, most of the errors should be gone.
If you don't have UVM source files on your system yet, they can
be downloaded [here](http://www.accellera.org/downloads/standards/uvm).  
**Note**: it is highly recommended to add this linked folder to the
[Common Libraries]({{< ref "/manual/eclipse/libraries.md#common-libraries" >}}) folder,
since sources in this folder are treated as read-only and are not checked for errors.
It is also recommended that every file except `uvm.sv` be excluded from being built.

1. Finally, the include paths should be updated. This can easily be done through a Quick Fix.
There should be a number of [`Preprocessor include paths are not configured correctly` warnings]({{< ref "/manual/rules/verilog_missing_include_path" >}})
on `include` statements of UVM header files.
You can easily find these warnings through the Problems View.
A Quick Fix is available on these warnings; applying this Quick Fix will automatically update the
include paths of the project. A bulk mode is also available, allowing to fix all the missing include paths
in the current project. Alternatively, the include paths can be changed through the `Add to Include Paths`
context menu item, which is available in the Sigasi Projects View. The include paths can also be manually updated
through the Preference View, under the `Verilog Preprocessor` page.

After completing the steps above, all of the problems related to UVM configuration should be gone.
The UVM features, such as the [UVM Diagram]({{< ref "/manual/common/views.md#uvm-diagram-view" >}}) 
and the UVM Topology View, can now be used.