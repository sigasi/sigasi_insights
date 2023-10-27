---
title: Opening Files
showinmenu: true
weight: 8
pager: true
aliases:
  - /manual/opening/
---

# Opening Files from the Command Line

You can call Sigasi Studio from the command line to open files. Just run
`sigasi yourFile.vhd`. You can also drag and drop files on the Sigasi Studio
icon to open them.

You can specify a linenumber by appending `+yourLineNumber` to the
command line. For example: `sigasi test.vhd +10` will open `test.vhd` at
line 10.

You can also specify the project location with the `-p <project path>` parameter.
If the specified project was not open in the workspace yet, this will import
and open the project in the workspace.

Note that the VHDL file you specify on the command line has to be in an
*open Sigasi project* to enjoy all of Sigasi Studio's powerful editing and
navigation features. If the file you open from the command line is not
in a Sigasi Studio project, Sigasi Studio opens the file as an [external
file](#external-files). This is nevertheless really handy for quick
edits.

This feature enables you to configure Sigasi Studio as default editor for other
EDA tools.

**Note** You could get a firewall warning when you start Sigasi Studio because
Sigasi Studio opens and listens to a port (4444 by default). This is necessary
for the communication between the running Sigasi Studio instance and the
command line executable. Configure your firewall to allow Sigasi Studio access
for opening this port.  
**Update** Since [Sigasi Studio 4.17.2]({{< ref "/releasenotes/sigasi-4.17.md#sigasi-studio-4172-point-release" >}}), the listener no longer listens to port 4444.
A random free port will be used, one per user on multi-user systems.

## Eclipse Plugin

Eclipse plugin users can also use this feature but need to specify a few
more command line options. You have to type
`eclipse -application com.sigasi.runner.open` instead of `sigasi`. For
example: `eclipse -application com.sigasi.runner.open test.vhd +10` will
open `test.vhd` at line 10.

## Other command line options

You can add some extra parameters to Sigasi Studio to modify the behavior.

* `-help` : show simple command line usage information
* `-data <location>` : specifies the workspace location
* `-noSplash` : do not show the splash screen at startup
* `-consoleLog` : log all debug information in the console (in addition to the regular log file)
* `-refresh` : force refresh of workspace
* `-showLocation` : show workspace location in title bar
* `-application org.eclipse.ui.ide.workbench` : use the default Eclipse workbench launcher instead of the Sigasi Studio workbench launcher.
This avoids conflicts on port 4444 when running Sigasi Studio with multiple users on the same server.
Refer to the [setup page]({{< ref "/manual/eclipse/setup.md#running-sigasi-studio-with-multiple-users-on-the-same-server" >}}) for more information.
* `--launcher.openFile <somepath>` : open the *Import Projects* dialog to import a new or existing project into the workspace
* `-Dcom.sigasi.hdt.disableAutomaticTutorial` : suppress the creation of the [*tutorial projects*]({{< ref "/tutorial.md" >}}) in empty workspaces.
* `-Dswt.chromium.path=/home/user/blub` : extract the Chromium binaries in `blub`

An overview of all Eclipse runtime options can be found in the [Eclipse documentation](https://help.eclipse.org/latest/index.jsp?topic=%2Forg.eclipse.platform.doc.isv%2Freference%2Fmisc%2Fruntime-options.html).

# External Files

You can edit VHDL files without setting up a project.
When a file that doesn't belong to a project is opened in Sigasi Studio, this
file is called an *external file* and it will be opened in *single file mode*.

*Single file mode* is a **limited environment** in which **not all Sigasi Studio
features are available**. Navigation only works within a file. For that reason
missing declaration are not flagged as errors.

There are several ways to open VHDL files:

* Drag the files to the editor window.
* Open the file [from the command line](#opening-files-from-the-command-line)
* Drag the files to the Sigasi Studio icon
* Click **File \> Open File…**

If the file belongs to a project, Sigasi Studio will open the file as part of
that project. If not Sigasi Studio opens the file as *external file*.

In general, if you want to benefit from all of the Sigasi Studio features,
you should set up a proper project.

# Setting up Sigasi Studio as Default Editor

## Windows

To configure Sigasi Studio as default VHDL editor in Windows:

* Find a VHDL file in the File Explorer
* Right-click and select **Open with > Choose default program…**
  {{< figure src="/img/manual/windows_1.png" >}}
* Next click the **Browse** button and select the Sigasi Studio executable (`<path to Sigasi Studio>/sigasi.exe`)
  {{< figure src="/img/manual/windows_2.png" >}}
* Next Sigasi Studio will appear in the list of programs
* Verify that **"Always use the selected program to open this kind of file"** is enabled
* Confirm with **OK**

Repeat this procedure for `*.vhd` files and for `*.vhdl` files.

## Linux

### KDE

* Find a VHDL file in Dolpin or Konqueror
* Right-click and select **Open with > Other…**
* Enter the path of the Sigasi Studio executable (or use the browse button)
* Click the **Remember application association for this type of file** so that all other VHDL files will also get opened with Sigasi Studio.
* Click **OK**

{{< figure src="/img/manual/kde.png" alt="Sigasi Studio as default editor in KDE" >}}

### Gnome

* Find a VHDL file in Nautilus
* Right-click and select **Open with > Other Application…**
* In Use a custom command: Enter the path of the Sigasi Studio executable (or use the **browse** button)
* Click the **Remember this appliation for "VHDL document" files** so that all other VHDL files will also get opened with Sigasi Studio.
* **Click Open**

{{< figure src="/img/manual/gnome.png" alt="Sigasi Studio as default editor in Gnome" >}}

## MacOS

Please note that from version 5.0 onwards, [Sigasi Studio is no longer supported on MacOS](/faq/#macos).

When I double-click a VHDL file, I want it to open with my favorite VHDL editor. Sigasi Studio, obviously.

Here is how to set this up in MacOS:

* Find a VHDL file in the Finder
* Right-click and select **Get Info**
* Select **Open with > Other…** and find your Sigasi Studio application
* Click **Change All…** so that all other VHDL files will also get opened with Sigasi Studio.

Repeat this procedure for `*.vhd` files and for `*.vhdl` files.

{{< figure src="/img/manual/default_application_for_mac.png" alt="Setting the default application for VHDL files" >}}

## Intel Quartus

In Intel Quartus, open the preferences page in **Tools \> Options \>
General \> Preferred Text Editor**.

{{< figure src="/img/manual/sigasieditorquartus.png" alt="Configuring Sigasi Studio as default VHDL editor in Intel Quartus" >}}

As command-line options, you should have `%f +%l -p %p`. Optionally you
could add `-noSplash` to skip the splash dialog.

## AMD/Xilinx Vivado

You can configure Sigasi Studio to be the preferred editor for AMD/Xilinx Vivado.

1. In AMD/Xilinx Vivado, click **Tools > Settings...**
2. Open the **Tool Settings > Text Editor** tab
3. Locate the **Current Editor** drop down menu and instead of '**Vivado Text Editor** (default)' select '**Custom Editor...**'
4. If needed click the **...** button and in the pop-up dialog enter:
    `<path to Sigasi Studio>/sigasi.exe [file name] +[line number]`
5. Click **OK** to close the dialog and **OK** to close the Settings window.

{{< figure src="/img/manual/vivado_a1.png" alt="Configuring Sigasi Studio as default editor in AMD/Xilinx Vivado menu" >}}
{{< figure src="/img/manual/vivado_a2.png" alt="Configuring Sigasi Studio as default editor in AMD/Xilinx Vivado" >}}

### Extra steps on Linux

If your log file contains warnings about `LD_LIBRARY_PATH` being set to an incompatible value or if you get an error telling the JVM terminated, you can correct this by making sure `LD_LIBRARY_PATH` and (optionally) `LD_PRELOAD` are empty when launching Sigasi Studio.
Do this by e.g. creating a script to launch Sigasi Studio and call that script from within the Vivado Text Editor settings.

```sh
#!/usr/bin/env bash

SIGASILOCATION="/path/to/sigasi"

LD_LIBRARY_PATH="" LD_PRELOAD="" "$SIGASILOCATION/sigasi" "$@"
```

### Extra steps for the Sigasi Studio plugin on Windows

If you use the Sigasi Studio Eclipse plugin on Windows, you might need to take some extra steps
before you can open files from Vivado in Sigasi Studio.

Make sure to close Eclipse before making the changes below.

* In your Eclipse installation
  1. In `eclipse.ini` remove these 2 lines
     ```
     --launcher.defaultAction
     openFile
     ```
   1. In `configuration/config.ini`
      - replace `osgi.instance.area.default=...` with `osgi.instance.area=@nodefault` - note the removal of the .default suffix
      - replace `eclipse.application=....` with `eclipse.application=com.sigasi.runner.open`


* In Vivado configure the custom editor with the following setting
   `C:\....\eclipse.exe [file name] +[line number]`

The first time you might need to pick a workspace and enable the *use this as default and do not ask again* option.

## AMD/Xilinx ISE

To configure Sigasi Studio as default VHDL editor in AMD/Xilinx ISE:

1. In AMD/Xilinx ISE, Click **Edit \> Preferences** and **ISE General \> Editors**
2. Select **Custom** instead of **ISE Text Editor**
3. If Sigasi Studio is on your path enter `sigasi.exe $1 +$2` (Windows) or `sigasi $1 +$2` (Linux).
   If Sigasi Studio is not on your path, use the absolute path instead. If there are spaces in this
path, you need to enclose the path in curly braces . For example:`c:\\My\ Applications\sigasi\sigasi.exe $1 +$2`.

{{< figure src="/img/manual/xilinxeditor.png" alt="Configuring Sigasi Studio as default VHDL editor in AMD/Xilinx ISE" >}}

If you now open any VHDL file in AMD/Xilinx ISE, Sigasi Studio will automatically open the selected file.

You can find more info on configuring AMD/Xilinx ISE to work with external editors in the AMD/Xilinx documentation.

## HDL Designer

To configure Sigasi Studio as external editor in HDL Designer:

1. In HDL Designer, click **Options > Main**
2. Click the **Text** tab  
{{< figure src="/img/manual/hdld001.jpg" alt="Main Settings Text 1" >}}
3. Press the **Setup...** button in the **Editor** section to open the **Editor Command Setup** dialog.
4. Fill the **Name**, **Command** and **Arguments** sections as shown.  
{{< figure src="/img/manual/hdld002.png" alt="Editor Command Setup 1" >}}
5. Click the **Add** button to add **Sigasi Studio** to the list of available editors.  
{{< figure src="/img/manual/hdld003.png" alt="Editor Command Setup 2" >}}
6. Press **OK** to close the dialog.
7. Press the **Setup** button in the **HDL Viewer** section and repeat this procedure from step 4.  
{{< figure src="/img/manual/hdld004.png" alt="Editor Command Setup 3" >}}
8. You now can select the **Sigasi** entry in the list box for the **Editor** and **HDL Viewer** sections.  
{{< figure src="/img/manual/hdld005.png" alt="Main Settings Text 2" >}}
9. From now on you can double click on a file or a line in a file - for example by selecting an architecture or an entity - and Sigasi Studio will open the file at the correct location.
