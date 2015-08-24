---
title: Setting Up Sigasi
layout: page 
pager: true
---

Distribution and flavours
-------------------------

Sigasi is distributed online. It is available in two versions: as a
stand-alone application or as a plugin inside a standard Eclipse
installation. Your license gives you the right to use either version, at
any time, at your discretion. Therefore, your first task is to decide
which version suits your requirements, based on the description below.
Depending on the chosen version, you should then follow the
corresponding installation instructions.

### Sigasi App

The stand-alone application has the following characteristics:

-   Recommended if you are not using Eclipse yet
-   Installation is trivial: just unzip!
-   Everything is included in a single download
-   Well balanced set of features
-   Optimized for VHDL and Verilog development
-   Complete freedom to add and configure plugins

### Sigasi Eclipse plugin

The Eclipse plugin has the following characteristics:

-   Recommended if you are using Eclipse already
-   Easily plugged in into your existing Eclipse platform
-   Complete freedom to add and configure plugins
-   Over one thousand eclipse plugins choose from
-   Support for C, C++, Tcl and other languages
-   Support for many version control systems

Installation of Sigasi App
--------------------------

To download and install Sigasi as a stand-alone application, follow the
online [Installation
Instructions](http://www.sigasi.com/download-sigasi-20).

After downloading, choose or create a folder where you want to install
the software, and unpack the archive there. The archive contains a
single top-level folder called `sigasi`. Inside the folder there is an
application startup file, also called `sigasi`. Start the application by
executing this startup file.

Installation of Sigasi Eclipse Plugin
-------------------------------------

To download and install Sigasi as an Eclipse Plugin, follow the [Sigasi
2.x as Eclipse VHDL Plugin installation
instructions](http://www.sigasi.com/install-eclipse-vhdl-plugin).

Licensing
---------

For small projects, all features of Sigasi can be used without a
license. You can monitor the relative size of your VHDL and Verilog
projects in the right corner of the status bar:

![](/images/screenshots/smallProjectStatus.png)

The relative size is shown as a percentage. For projects larger than
100%, the size indication area turns red and Sigasi 2.0 falls back to a
base-line modus (which is still more powerful than any other editor). To
enable full Sigasi support for such projects, you need a valid license.
The license key can be filled in under **Window \> Preferences \> Sigasi
\> License Key**.

Configuration
-------------

Sigasi stores its projects on the file system in one or more
*workspaces*.

When you start the tool for the first time, it will propose to create a
workspace for you:

![Choose workspace](/images/screenshots/chooseWorkspace2.png)

Although you can work with multiple workspaces, we recommend to use a
single workspace for all your projects.

Software updates
=================

Sigasi has an automated update system. When updates are available, you
are notified by a pop-up window called **Updates Available** in the
bottom right corner:

![Update](/images/screenshots/update.png)

If you want to install the updates, click anywhere in the pop-up window.
After a few seconds, a new window will appear with further instructions.

The updates can be postponed by closing the pop-up. You can perform the
updates at any time by clicking the
!(inline)./images/icons/updatesAvailableIcon.png!-icon in the status bar
at the bottom of the screen.

Consult the [troubleshooting chapter](troubleshooting#ts) if the update
does not start automatically.
