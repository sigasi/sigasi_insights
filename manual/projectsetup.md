---
title: Setting Up a Project
layout: page
pager: true
---

# Introduction {: #project-intro}

Your work with Sigasi Studio typically is organized as a *project*. A project
is a collection of VHDL and/or (System)Verilog files that belong together. Sigasi Studio
understands the HDL units defined in the files, and the relationships
between them.

Your first step is to set up a project. There are a number of ways to do
this. The most common ways are:

* [/manual/projectsetup#Importing a project from the file system]
* [/manual/projectsetup#Creating a new, empty project]

These two methods and other methods are discussed in detail in the
following sections.

# Importing a project from the file system

## 1: Import the project

You can import an existing VHDL or (System)Verilog project from the file system by clicking
**File \> Import… \> Sigasi \> Import a VHDL project** (or **Import a (System)Verilog project**). Browse to the
root directory of the project, and press **Finish**.

## 2: Set Libraries

If you use other libraries than just work, you can assign different
libraries to your files and folders. Right-click on a file or folder and
select **Library Mapping \> New Library…**. Then fill out the correct
library name.

## 3: Add any files that are in other directories

If you need additional files that are not in the project root directory,
just drag them from your Windows Explorer (or other file browser) into
the project. You will have the option to create a link rather than
copying the files.

**Note 1:** dragging files works on Windows (using Windows Explorer), on
Mac OS X (using Finder) and on Linux (using Gnome Nautilus). If you use
KDE, you should install Nautilus.

**Note 2:** to avoid absolute paths in the .project file, *environment variables* can be used.
Right-click the file or directory in the project explorer and select
**Properties > Resource > Location > Edit...** to configure the path of the resource.
To access *environment variables*, you have to prefix the environment variable with `ENV-`.
For example: to refer to the home directory you can use `ENV-HOME`.

# Creating a new, empty project

To create a new project, select **File \> New \> VHDL Project** or
**File \> New \> (System)Verilog Project**. Then give your project a name.

By default, the **Use default location** checkbox is checked, which
means that new projects will be located in the workspace folder.
Alternatively, you can uncheck the checkbox and choose an arbitrary
location for your project. This is especially useful if you want to *use
Sigasi Studio with an existing design*.

You can also select the VHDL version or the version of `.v` files.

After creating a new project, you can add existing files by dragging
them from your filesystem into the project explorer. New files can be
added by clicking **File \> New \> VHDL file** or **File \> New \> (System)Verilog file**.

# Other ways to set up a project

## Adding VHDL or Verilog support to an existing Eclipse project

You can also add VHDL or Verilog support to any project in your
workspace by right-clicking the project in the project explorer and
selecting **Configure \> Add VHDL support** or **Configure \> Add
(System)Verilog support**. You can also remove VHDL or Verilog support from
Sigasi Studio projects by selecting **Configure \> Remove VHDL support** or
**Configure \> Remove (System)Verilog support**.

Note that only with an [xl] license, you can have **mixed** VHDL and
Verilog support at the same time.

With a [creator] license, a project can contain both VHDL and
Verilog files, but only one of the languages will have full support.
Files in the other language will be treated as [/manual/opening#External Files].

## Importing a project from an archive

Sigasi Studio projects can be shared using file archives. All project-related
settings are stored in two hidden files in the project folder.
Therefore, you can create an archive of the entire top level folder
(**File \> Export \> General \> Archive file**) and send it to someone
else.

You can import a project from an archive by clicking **File \> Import…
\> General \> Existing projects into Workspace** and selecting **Select
archive file**. Browse to your project archive and press **Finish**.

## Using "auto-configure project" for VHDL projects
When you open the VHDL project importer (**File \> Import \> Sigasi \> Import a VHDL project**), you'll notice a checkbox "Auto-configure project".
When this checkbox is enabled, Sigasi Studio will automatically create a project configuration for the imported project.

Using information from your code it will try to create a likely library mapping, the mapping can still be [customized to your liking](/manual/libraries.html).

