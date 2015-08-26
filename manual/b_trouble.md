---
title: Troubleshooting
layout: page 
pager: true
---

The user interface is unresponsive {#ts-unresponsive}
----------------------------------

If the user interface of Sigasi HDT is unresponsive, you can interrupt
the internal compilation process by pressing the **stop** button in the
progress view. To activate the progress view, select **Window \> Show
View \> Other... \> General \> Progress**, or click the tiny conveyor belt
icon ![]/images/icons/progressicon.png), on the right side of the
status bar.

The editor displays old contents of a file {#ts-refresh-editor}
------------------------------------------

If you edit a file outside of HDT with an external editor, Sigasi will
normally notice the changes and ask if you want to load the changes. If
it doesn’t, you can refresh the editor’s content by pressing **F5** or
by right-clicking a file or a project in the project explorer and
selecting **Refresh**.

How much local history will be stored?
--------------------------------------

Sigasi HDT stores the history of your file so that you can compare your
current version with the version you saved an hour ago.

You can define how much disk space is used for storing local history in
**Windows \> Preferences**, select **General \> Workspace \> Local
History**.

For more information on local history, check out [this
page](http://help.eclipse.org/help32/index.jsp?topic=/org.eclipse.platform.doc.user/gettingStarted/qs-55.htm).

I see hundreds or thousands of errors
-------------------------------------

If you see a large number of errors, you either have very, very buggy
code (not so likely) or your project is not configured correctly.

1.  Check that all files are mapped to the correct library.
2.  Check that all *stale* files are ignored. ([see the section on stale
    files](#ts-stale-files) )
3.  Check that all third party libraries are included.
4.  Make sure that automatic build is enabled.

Auto Build is not Enabled {#ts-autobuild}
-------------------------

Symptoms:

-   When you introduce an error in a VHDL or Verilog file and save the
    file, an error marker shows up in the file, but not in the problems
    view.
-   Navigation (Find References, Open Declaration) behaves strange when
    it involves more than one file.
-   Other features that involve multiple files behave incorrectly:
    autcomplete, refactoring, ...

Cause: Project is not built automatically

Resolution: Enable automatic project builds: **Project \> Build
Automatically**

Project does not have VHDL support {#ts-vhdl-support}
----------------------------------

Symptoms:

-   VHDL files contain errors, but these errors do not show up in the
    Problems View.
-   Cannot select a top level in the Hierarchy View
-   Cannot navigate from a name in one file to its declaration in
    another file.
-   In the Project Explorer, the name of the library (for example:
    `[work]`) is not shown next to the filename.

Cause: The project does not have VHDL support enabled

Resolution: Enable VHDL support: **right-click the project \> Configure
\> Add VHDL support**

Project does not have a Library Mapping Information {#ts-missing-library-mapping-informatino}
---------------------------------------------------

Symptoms:

-   All VHDL-files in the project are **not mapped**
-   The Project contains only one error: “This VHDL project can not be
    built since the library mapping information is missing”
-   VHDL files contain errors, but these errors do not show up in the
    Problems View.
-   In the Project Explorer, the name of the library (for example:
    `[work]`) is not shown next to the filename.

Cause: The project does not have a (valid) VHDL library mapping
information file

Resolution: Reset the library mapping: **right-click the project \>
Library Mapping \> Reset Library Mapping**

Project does not have Common Libraries {#ts-commonlib}
--------------------------------------

Symptoms:

-   Project has many errors, in practically all files. Project build may
    be slow.
-   The standard data types (like `integer` and `std_logic`) are not
    recognized.
-   The IEEE and STD libraries are not recognized.
-   The IEEE and STD files are either missing or are mapped to the wrong
    library (for example: `[work]`).

Cause: Common libraries are not configured correctly.

Resolution: Reset the common libraries: **right-click the project \>
Library Mapping \> Reset Library Mapping**

HDT analyzes HDL files that I do not need {#ts-stale-files}
-----------------------------------------

By default, Sigasi assumes that all VHDL or Verilog files are part of
the project. However, some projects may contain multiple files with
older or alternative definitions of a VHDL object. We call these *stale*
files, because they are no longer used. In such a case you will want HDT
to ignore certain files.

To exclude files (or directories) from analysis, consult the [/manual/3_libraries].

Ignored resources are decorated with a
![]/images/icons/ignoreicon.png) icon in the project explorer
view.

I do not get automatic updates {#ts-updates}
------------------------------

If the updates are not automatically fetched from the Sigasi update
server you are probably behind a firewall or proxy server. You can
configure HDT’s proxy settings in **Window \> Preferences \> General \>
Network connections**. If you can not add a firewall exception for our
update site, the fall back solution is to download the complete
application from our website. You can completely replace your old
installation; all settings are stored in your workspace (the default is
`workspaceSigasi` in your home directory).

I want a clean restart {#ts-clean}
----------------------

If you ever suspect that the state of your project is inconsistent in
Sigasi, you can do one or all of the following things. Consider these
steps to be advanced usage; you should not need them during normal
operation.

### Force a clean compilation

You can force a completely clean compilation by selecting: **Project \>
Clean … \> Clean All Projects \> OK**.

### Remove stale markers

Sometimes markers remain visible, even after the problem is fixed or
when a file is excluded from compilation. We call these *stale markers*
and they are can be caused by a crash during compilation.

You can delete these stale markers from the Problems View: In the
Problems View, select the markers and press **DEL** (or right-click and
select **Delete**).

Note that during the next build, the tool may generate new markers. If
you want to suppress certain warnings, you can configure the [/manual/d_config#configure-linting]

### Remove the workspace state

Much of your configuration and cached data is stored in your workspace.
By default, Sigasi’s workspace is located in `${HOME}/workspaceSigasi`.
A lot of this data is stored in the hidden `.metadata` directory.
Sometimes, a part of your metadata can become corrupt. It can help to
remove the `.metadata` directory (take a backup first!). This clears all
of your workspace state.

-   You will need to enter your license code again.
-   You will need to import your projects again. **Import \> General \>
    Existing Projects into Workspace**

Contact support
---------------

If this troubleshooting guide did not solve your problem, please contact
support.

-   Ask a question on the [web support forum](/contact-support).
-   For customers with premium support: [send us an
    email](mailto:support@sigasi.com).

Any of the following information will help us help you:

-   Steps to reproduce your problem
-   Description of the expected behavior and the actual behavior.
-   A [VETSMOD](http://www.sigasi.com/vetsmod) code snippet.
-   A screenshot
-   The version number of your Sigasi tool: **Help \> About Sigasi \>
    Installation details** Note that the version number contains the
    date of the release. (For example, version 2.0.1.20110809… was
    released on August 9, 2011.)
-   The log file: **Help \> Open Log**

