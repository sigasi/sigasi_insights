---
title: Troubleshooting
layout: page 
pager: true
---

# The user interface is unresponsive {: #ts-unresponsive}

If the user interface of Sigasi Studio is unresponsive, you can interrupt the internal compilation process by pressing the **stop** button in the progress view. To activate the progress view, select **Window > Show View > Other... > General > Progress**, or click the tiny conveyor belt icon ![](icons/progressicon.png), on the right side of the status bar.

# The editor displays old contents of a file {: #ts-refresh-editor}

If you edit a file outside of Sigasi Studio with an external editor, Sigasi will normally notice the changes and ask if you want to load the changes. If
it doesn’t, you can refresh the editor’s content by pressing **F5** or by right-clicking a file or a project in the project explorer and
selecting **Refresh**.

# How much local history will be stored?

Sigasi Studio stores the history of your file so that you can compare your current version with the version you saved an hour ago.

You can define how much disk space is used for storing local history in **Windows > Preferences**, select **General > Workspace > Local History**.

For more information on local history, check out [this page](http://help.eclipse.org/help32/index.jsp?topic=/org.eclipse.platform.doc.user/gettingStarted/qs-55.htm).

# I see hundreds or thousands of errors

If you see a large number of errors, you either have very, very buggy code (not so likely) or your project is not configured correctly.

1. Check that all files are mapped to the correct library.
2. Check that all *stale* files are ignored. (see the section on [trouble#ts-stale-files])
3. Check that all third party libraries are included.
4. Make sure that automatic build is enabled.

# Auto Build is not Enabled {: #ts-autobuild}

Symptoms:

* When you introduce an error in a VHDL or Verilog file and save the file, an error marker shows up in the file, but not in the problems view.
* Navigation (Find References, Open Declaration) behaves strange when it involves more than one file.
* Other features that involve multiple files behave incorrectly: autcomplete, refactoring, ...

Cause: Project is not built automatically

Resolution: Enable automatic project builds: **Project > Build Automatically**

# Project does not have VHDL support {: #ts-vhdl-support}

Symptoms:

* VHDL files contain errors, but these errors do not show up in the Problems View.
* Cannot select a top level in the Hierarchy View
* Cannot navigate from a name in one file to its declaration in another file.
* In the Project Explorer, the name of the library (for example: `[work]`) is not shown next to the filename.

Cause: The project does not have VHDL support enabled

Resolution: Enable VHDL support: **right-click the project > Configure > Add VHDL support**

<!--# Project does not have a Library Mapping Information {: #ts-missing-library-mapping-information}-->

Symptoms:

* All VHDL-files in the project are **not mapped**
* The Project contains only one error: “This VHDL project can not be built since the library mapping information is missing”
* VHDL files contain errors, but these errors do not show up in the Problems View.
* In the Project Explorer, the name of the library (for example: `[work]`) is not shown next to the filename.

Cause: The project does not have a (valid) VHDL library mapping information file

Resolution: Reset the library mapping: **right-click the project > Library Mapping > Reset Library Mapping**

# Project does not have Common Libraries {: #ts-commonlib}

Symptoms:

* Project has many errors, in practically all files. Project build may be slow.
* The standard data types (like `integer` and `std_logic`) are not recognized.
* The IEEE and STD libraries are not recognized.
* The IEEE and STD files are either missing or are mapped to the wrong library (for example: `[work]`).

Cause: Common libraries are not configured correctly.

Resolution: Reset the common libraries: **right-click the project > Library Mapping > Reset Library Mapping**

# Sigasi Studio analyzes HDL files that I do not need {: #ts-stale-files}

By default, Sigasi assumes that all VHDL or Verilog files are part of the project. However, some projects may contain multiple files with older or alternative definitions of a VHDL object. We call these *stale* files, because they are no longer used. In such a case you will want Sigasi Studio to ignore certain files.

To exclude files (or directories) from analysis, consult the [/manual/libraries].

Ignored resources are decorated with a ![](icons/ignoreicon.png) icon in the project explorer view.

# Sigasi startup fails: "Could not create the Java virtual machine"

On some computers, the standalone version of Sigasi will fail to start with an error message similar to: "Could not create the Java virtual machine." This happens especially on 32-bit Windows machines with less than 2GB of physical memory. The reason is that the Java virtual machine tries to allocate more much memory than what is available.

In order to solve this, you can decrease the default heap size settings. You can do this by adding following lines to `sigasi.ini` or `eclipse.ini` in your Sigasi installation folder:

```bash
-vmargs
-Xmx1000m
```

This sets the maximum heap size to 1000 MB (instead of the standard 1400MB).

**Note:** Do not use `eclipsec.exe`, as this will ignore all of the settings configured in the eclipse.ini file.

# I want a clean restart {: #ts-clean}

If you ever suspect that the state of your project is inconsistent in Sigasi, you can do one or all of the following things. Consider these
steps to be advanced usage; you should not need them during normal operation.

## Force a clean compilation

You can force a completely clean compilation by selecting: **Project > Clean … > Clean All Projects > OK**.

## Remove stale markers

Sometimes markers remain visible, even after the problem is fixed or when a file is excluded from compilation. We call these *stale markers* and they are can be caused by a crash during compilation.

You can delete these stale markers from the Problems View: In the Problems View, select the markers and press **DEL** (or right-click and select **Delete**).

Note that during the next build, the tool may generate new markers. If you want to suppress certain warnings, you can configure the [/manual/config#configure-linting]

## Remove the workspace state

Much of your configuration and cached data is stored in your workspace. By default, Sigasi’s workspace is located in `${HOME}/workspaceSigasi`.
A lot of this data is stored in the hidden `.metadata` directory. Sometimes, a part of your metadata can become corrupt. It can help to
remove the `.metadata` directory (take a backup first!). This clears all of your workspace state.

* You will need to enter your license code again.
* You will need to import your projects again. **Import > General > Existing Projects into Workspace**

# Keep getting reports about an "Incompatible version of Quartus II"

If you are using the integration with Altera Quartus II. Some people keep getting a dialog box that says:

> Incompatible version of Quartus II
>  
> Project interface was created with an older, incompatible version of Quartus II.
> Is it OK to upgrade the project to match the installed version of Quartus II?

Obviously, you should upgrade the project. If this message keeps popping up, you may want to check that Sigasi is using the correct version of Quartus II, in the Sigasi application: **Window > Preferences > Sigasi > Toolchains > Altera Quartus II**.

# Contact support

If this troubleshooting guide did not solve your problem, please [send-email].

Any of the following information will help us help you:

* Steps to reproduce your problem
* Description of the expected behavior and the actual behavior.
* A [VETSMOD] code snippet.
* A screenshot
* The version number of your Sigasi tool: **Help > About Sigasi > Installation details** Note that the version number contains the date of the release. (For example, version `2.0.1.20110809…` was released on August 9, 2011.)
* The log file: **Help > Open Log**
