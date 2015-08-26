---
title: Opening Files
layout: page 
pager: true
---

Opening Files from the Command Line {#files-command-line}
-----------------------------------

You can call Sigasi from the command line to open files. Just run
`sigasi yourFile.vhd`. You can also drag and drop files on the Sigasi
icon to open them.

You can specify a linenumber by appending `+yourLineNumber` to the
command line. For example: `sigasi test.vhd +10` will open `test.vhd` at
line 10.

Note that the VHDL file you specify on the command line has to be in an
*open Sigasi project* to enjoy all of Sigasi’s powerful editing and
navigation features. If the file you open from the command line is not
in a Sigasi project, Sigasi opens the file as an [external
file](#files-external). This is nevertheless really handy for quick
edits.

This feature enables you to configure Sigasi as default editor for other
EDA tools.

**Note** You could get a firewall warning when you start Sigasi because
Sigasi opens and listens to a port (4444 by default). This is necessary
for the communication between the running Sigasi instance and the
command line executable. Configure your firewall to allow Sigasi access
for opening this port.

### Eclipse Plugin

Eclipse plugin users can also use this feature but need to specify a few
more command line options. You have to type
`eclipse -application com.sigasi.runner.open` instead of `sigasi`. For
example: `eclipse -application com.sigasi.runner.open test.vhd +10` will
open `test.vhd` at line 10.

### Other command line options

You can add some extra parameters to Sigasi to modify the behavior.

-   `-help` : show simple command line usage information
-   `-data <location>` : specifies the workspace location
-   `-noSplash` : do not show the splash screen at startup
-   `-application org.eclipse.ui.ide.workbench` : to use the default
    Eclipse workbench launcher instead of the Sigasi workbench launcher
-   `-consoleLog` : log all debug information in the console (in
    addition to the regular log file)
-   `-refresh` : force refresh of workspace
-   `-showLocation` : show workspace location in title bar

External Files
--------------

You can edit VHDL files without setting up a project. This feature is
called editing *external files* or *single file mode*. There are several
ways to open VHDL files:

-   Drag the files to the editor window.
-   Open the file [from the command line](#files-command-line)
-   Drag the files to the Sigasi icon
-   Click **File \> Open File…**

If the file belongs to a project, Sigasi will open the file as part of
that project. If not Sigasi opens the file as *external file*. **Not all
Sigasi features are available** for external files. Navigation only
works within a file. For the same reason, missing declaration are not
flagged as errors. In general, if you want to benefit from all of the
Sigasi features, you should set up a proper project.

Setting up Sigasi as Default Editor
-----------------------------------

### Altera Quartus II

In Altera Quartus II, open the preferences page in **Tools \> Options \>
General \> Preferred Text Editor**.

![Configuring Sigasi as default VHDL editor in Altera Quartus](/images/screenshots/sigasieditorquartus.png "Configuring Sigasi as default VHDL editor in Altera Quartus")

As command-line options, you should have `%f +%l -p %p`. Optionally you
could add `-noSplash` to skip the splash dialog.

### Xilinx ISE

To configure Sigasi as default VHDL editor in Xilinx ISE:

1. Click **Edit \> Preferences** and **ISE General \> Editors**
2. Select **Custom** instead of **ISE Text Editor**
3. If Sigasi is on your path enter **sigasi \$1 \$2**. If Sigasi is not
on your path, use the absolute path instead. If there are spaces in this
path, you need to enclose the path in curly braces . For example:** \$1 \$2**.

![Configuring Sigasi as default VHDL editor in Xilinx ISE](/images/screenshots/xilinxeditor.png "Configuring Sigasi as default VHDL editor in Xilinx ISE")

If you now open any VHDL file in Xilinx ISE, Sigasi will automatically
open the selected file.

You can find more info on configuring Xilinx ISE to work with external editors in the [Xilinx
documentation](http://www.xilinx.com/support/documentation/sw_manuals/xilinx12_2/pn_db_editor_options.htm).
