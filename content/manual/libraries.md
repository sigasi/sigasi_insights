---
title: Libraries
showinmenu: true
weight: 3
pager: true
---

# Introduction

HDL libraries are a very powerful feature of the HDL languages. Sigasi Studio
makes it easy to configure and use them. In this chapter, we assume that
the basic concepts of HDL libraries are understood. We will explain how
they are implemented in Sigasi Studio.

Like with any HDL tool, Sigasi Studio needs to know where the libraries are
located on the file system. We will describe how the library
configuration can be examined and modified using the GUI.

We will also present some use case about how to set up libraries with
Sigasi Studio to organize your projects.

# Examining the library configuration

You can examine the library configuration in the [Libraries View](/manual/views#libraries-view)
and in the [Project Explorer](/manual/views#project-explorer-view) view. The Libraries view shows how
*design units* are mapped. The Project Explorer view show how VHDL or
SystemVerilog *files* are mapped.

In the Libraries view you can see a tree of all libraries in your
projects. You can open each library to see all contained design units.

{{< figure src="/img/manual/librariesview.png" >}}

In the Project Explorer view each physical file or folder is annotated
with the library it belongs to, between square brackets:

{{< figure src="/img/manual/librarymappinginitialview.png" >}}

What you see here is the initial library mapping of a demo project (you
can create such a project by selecting **File \> New \> Other \> Tutorial
VHDL Project** or **Tutorial SystemVerilog Project**).  
In the screenshot we see a project called Demo, with a folder named
`Common Libraries`. In that folder, you see the typical standard
libraries (`std` and `ieee`) upon which all VHDL projects depend. The
demo project itself consists of a few VHDL files.

Next to the project’s name `Demo`, is the annotation `work`. This means
that, barring any overrides, everything in the project will be stored
inside the `work` library.

Lower down, we see overrides. For example, the `STD` folder has an
annotation `std`. This means that, again barring any further overrides,
the entire contents of the `STD` folder will be mapped into the library
`std`. There are no limits to the number of overrides that can be
performed. If this needed, any individual file can be mapped to a
separate library.

# Modifying the library configuration

The library mapping for project files can be modified in the Libraries
and Project Explorer view.

Select a file or a folder in the Project Explorer and right-click.

{{< figure src="/img/manual/librarymappingcontextmenu.png" >}}

You get a `Set Library` context menu, with a number of options:

* Select **Exclude from build** to exclude the file or folder from any library
* Select **New Library...** to define a new library and map the file or folder to it
* If one ore more folders are selected, the folder can be added to a library with the folder name(s)
* Select the name of an existing library to map the file or folder to that library

When you map a file into a library, only that file is affected. However,
when you map a folder into a library, then everything in that folder
will be mapped into that library. Any overrides in the folder and its
sub-folders will be removed. When you are defining the library mapping
for a new project you should map from top to bottom.

So in the case of our `Demo` project, you would change (if `work` is not
a good default) the top folder’s mapping first and then override the
mapping in the sub-folders.

When you are changing the library mapping of a project, the project will
be rebuilt completely. In order to *avoid several consecutive rebuilds*
while you are setting up your libraries, you can temporarily disable the
automatic rebuilds, until you are finished setting up your library
mappings. You can do this by disabling the **Project \> Build
Automatically** option.

To exclude a file from all libraries, the library mapping context menu
provides an `Exclude from build` option. You can apply that to any file or folder in
the project. Sigasi Studio will then assume that the corresponding resource is
not a part of the project and will not include that resource in a
project build. This is typically useful when you have stale copies of
HDL files or folders lying around that you want simply to be ignored.

# (System)Verilog include files

(System)Verilog include files are always excluded from the build. Any
file that is included in another design file gets excluded from the
build, even if it has an extension that would normally identify it as
a design file, e.g. `.v` or `.sv`.  It often doesn't make sense to
compile include files by themselves. Instead, include files are
compiled in the context of the file in which they are included.

# Configuration file

All library configuration information is stored in the `.library_mapping.xml`
file in the root of your project.
If you edit this file, your project will be cleared and rebuilt automatically
(a so-called *Clean Build*).

Sigasi Studio only writes changes to this configuration file when you make
changes to the library configuration with the context menu in the
*Project Explorer*.
When you do make changes, Sigasi Studio first checks that all paths in the
library configuration still exist. If a path no longer exists, is will be
removed from the configuration file.
Note that the library configuration file is **case-sensitive**, even on Windows.

# Common Libraries

Each VHDL project has a folder called `Common Libraries`.
This is where reusable libraries go: either vendor libraries, third party IP
libraries or your own reusable libraries. By default, the `STD` and `IEEE`
libraries are added to this folder.
The `Common Libraries` folder behaves like any other folder.
You can delete it, rename it and apply a different library mapping.
In most cases, however, the default configuration is just what you need.

If your project doesn't have a `Common Libraries` folder, you can just create
it by right-clicking the project in the Project Explorer and selecting
the **New > Folder** dialog.

## How to add files to Common Libraries?

In any newly created VHDL project, the `Common Libraries` folder
contains the VHDL files of the `IEEE` and `STD` libraries.

To add files to the Common Libraries folder, locate a folder with VHDL files
on your file system using the Project Explorer or the file explorer of your OS
and drag the folder with VHDL files to the Common Libraries folder.

Alternatively, you can right-click the `Common Libraries` folder and select the
**New > Folder** dialog where you can use the **Advanced >>** settings to create
a **Linked Folder** pointing to the actual folder location that contains the
files you wish to add to the `Common Libraries`.

## How is Common Libraries different from another folder?

* `Common Libraries` by default is a *virtual* folder. This means that it is not
a real folder in the project directory and it can only contain references to
folders on your file system.
* Files in `Common Libraries` are supposed to be error free. Sigasi Studio
will not mark errors or warnings in these files.
  * Next to these, a few other libraries' errors and warnings are never marked, regardless of their location.
    These libraries are: `std`, `ieee`, `altera_mf`, `altera`, `XilinxCoreLib`, `unisim`, `mentor`, `lpm`, `simprim`, `std_developerskit`, `unimacro`, and `modelsim_lib`.
* While you work on your project, you don't want to edit the files in the
`Common Libraries`, but you need them to compile your project.
* If you activate an [external compiler]({{< ref "manual/tools#external-compilers" >}}),
files in `Common Libraries` are supposed to be pre-compiled. If you tell
Sigasi Studio to compile your project using an external compiler, the
Common Libraries are skipped. You need to pre-compile them yourself and let
your compiler know where the compiled libraries are. For ModelSim, you can
use the "modelsim.ini" file for this. If your project root contains a "modelsim.ini"
file, it will be used instead of the default "modelsim.ini" file.

## Pre-compile Common Libraries

This section links to various recommendations on to pre-compiling the simulation models of external libraries in the `Common Libraries`, depending on the external compiler.

### Xilinx

* Recommendations for [Xilinx ISE](https://www.xilinx.com/support/documentation/sw_manuals/xilinx11/pp_p_process_compile_hdl_simulation_libraries.htm)

* Recommendations for [Xilinx Vivado](https://www.xilinx.com/support/answers/64083.html)

### Intel (Altera)

* [Altera Simulation Libraries](https://www.intel.com/content/www/us/en/programmable/support/support-resources/design-software/max_plus-ii/vdsimlib.html)

* [Example script](https://www.intel.com/content/www/us/en/programmable/support/support-resources/knowledge-base/solutions/rd06182013_21.html) to compile Altera simulation libraries

### GHDL

The GHDL manual documents precompilation of Vendor Primitives [here](https://ghdl.github.io/ghdl/getting.html#precompile-vendor-primitives).

### Riviera-PRO

If you're using Riviera-PRO, Aldec has an article on [Compiling Xilinx Vivado Simulation Libraries for Riviera-PRO](https://www.aldec.com/en/support/resources/documentation/articles/1710).

## What if I broke my Common Libraries folder?

If you have modified the `Common Libraries` folder, you can always
revert it back to the original state.
Right-click on the Common Libraries folder of your project in the explorer
view and apply menu-entry **Set Library > Reset Common Libraries**.

{{< figure src="/img/manual/librarymappingrestorecommonlibraries.png" >}}

# Resetting the library mapping

Sigasi Studio contains two functions to reset all or part of the library mapping.

* **Reset Common Libraries** updates the common VHDL libraries to the
    version ('93, '2002, '2008, '2019) required by your
    project. User-defined common libraries remain untouched.  To
    access this function, right-click the `Common Libraries` folder
    inside your project in the Project Explorer and select **Set
    Library > Reset Common Libraries**.

* **Reset Library Mapping** resets the entire library mapping of your
    project. After resetting the library mapping, *Common Libraries*
    are reset as above, and all design files are mapped to library
    `work`. Note that this action cannot be undone, so only use it
    when you want to rebuild the library mapping from *scratch*. To
    access this function, right-click your project in the Project
    Explorer and select **Set Library > Reset Library Mapping**.

# IEEE Vital

See [How can I use the IEEE Vital libraries with Sigasi Pro?](/tech/how-can-i-use-the-ieee-vital-libraries-with-sigasi-pro)

# Shared libraries

Sigasi Studio allows you to share libraries between multiple projects. The
easiest way to do this, is to develop each library in a separate project
and configure the **Project Dependencies** accordingly. To configure the
project dependencies, right click the project (the one that uses the
shared library) and select **Properties**. Next click **Project
References** and mark the library project as referenced project.

# Using third party libraries

Many projects use third party libraries. These can be added to the
project as any other set of VHDL files.

A number of popular third party libraries are the following:

Vendor   | Library           | Install dir example
-------- | ----------------- | ----------------------------------------------------
Xilinx   | `unisim`          | `C:\Xilinx\Vivado\2020.1\data\vhdl\src\unisims`
Xilinx   | `unimacro`        | `C:\Xilinx\Vivado\2020.1\data\vhdl\src\unimacro`
Xilinx   | `XilinxCoreLib`   | `C:\Xilinx\14.4\ISE_DS\ISE\vhdl\src\XilinxCoreLib`
Xilinx   | `xpm`             | `C:\Xilinx\Vivado\2020.1\data\ip\xpm`
Altera   | `altera_mf`       | `C:\altera\17.0\quartus\libraries\vhdl`
Mentor   | `modelsim_lib`    | `${ModelSimPath}\vhdl_src\modelsim_lib`
Aldec    | `aldec`           | `C:\Aldec\Riviera-PRO-2015.02\vlib\aldec\`

On Linux the default installation location for Xilinx is `/opt/Xilinx`
and `/opt/altera` for Altera.

For many common third party libraries, you can set up the library using
a [Quick Fix for third party libraries](/manual/rules/quick-fix-for-third-party-libraries).

## XilinxCoreLib

XilinxCoreLib is a very big library with more than a thousand entities and
architectures. If you include all of these design units, it slows down the
compilation phase of Sigasi Studio. In order to avoid that, Sigasi Studio
only adds the packages with the component declarations to your project by
default. It *excludes* the entities and architectures *from compilation*.

You can easily add selected entities (and architectures) to your project by
right clicking the corresponding file (`filename = entity name.vhd`) in the
[Project Explorer](/manual/views#project-explorer-view), and selecting
**Set Library > xilinxcorelib**.

# Library errors from external compilers

If you are using the [External Compilers](/manual/tools#external-compilers), the external compiler
can also put error markers on library clauses. You can easily verify this by
checking the prefix of the error message (e.g. `vcom:` for vcom errors).
Consult the [Libraries](/manual/tools#libraries) section of the external compiler
integration for more information on configuring libraries for your external
compiler.
