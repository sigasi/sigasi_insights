---
title: Setting Up Sigasi Studio
showinmenu: true
weight: 1
pager: true
---

# Distribution and Flavors

Sigasi Studio is distributed online. It is available in two versions: as a
stand-alone application or as a plugin inside a standard Eclipse
installation. Your license gives you the right to use either version, at
any time, at your discretion. Therefore, your first task is to decide
which version suits your requirements, based on the description below.
Depending on the chosen version, you should then follow the
corresponding installation instructions.

## Sigasi Studio App

The stand-alone application has the following characteristics:

* Recommended if you are not using Eclipse yet
* Installation is trivial: just unzip!
* Everything is included in a single download
* Well-balanced set of features
* Optimized for VHDL and Verilog development
* Complete freedom to add and configure plugins

## Sigasi Studio Eclipse Plugin

The Eclipse plugin has the following characteristics:

* Recommended if you are using Eclipse already
* Easily plugged into your existing Eclipse platform
* Complete freedom to add and configure plugins
* Over one thousand other Eclipse plugins to choose from
* Support for C, C++, Tcl, and other languages
* Support for many version control systems

## Sigasi Studio Custom Installation

* Recommended for (larger) teams
* Automates the setup of Eclipse, the Sigasi Studio plugin, and your project
* Ensure that team members have a uniform setup
* Quickly set up Eclipse with Sigasi Studio
* Configure team preferences during setup
* Check out a project from version control at setup time
* Optionally add support for other programming languages

The custom installation is documented in a [separate section](/manual/custom-setup).

# Installation of Sigasi Studio App

To download and install Sigasi Studio as a stand-alone application, follow the
online [Installation Instructions](https://www.sigasi.com/download).

After downloading, choose or create a folder where you want to install
the software and unpack the archive there. The archive contains a
single top-level folder called `sigasi`. Inside the folder, there is an
application startup file, also called `sigasi`. Start the application by
executing this startup file.

If you are using RedHat Linux 6 or CentOS 6, you need to follow the Plugin installation
instructions as explained [here](/faq#i-am-using-redhat-linux-6-how-can-i-run-sigasi-studio).

## Running Sigasi Studio with multiple users on the same server

The following section is only relevant if you're using a Sigasi Studio version older than [Sigasi Studio 4.17.2]({{< ref "/releasenotes/sigasi-4.17.md#sigasi-studio-4172-point-release" >}}).


Starting with [Sigasi Studio 3.8]({{<ref "/releasenotes/sigasi-3.08.md" >}}), the Sigasi launcher listens on port 4444. To avoid conflicts on this port when Sigasi Studio is used on a server with multiple users concurrently, the following changes need to be made:

* Edit `sigasi/configuration/config.ini` and replace `eclipse.application=com.sigasi.runner.open` with `eclipse.application=org.eclipse.ui.ide.workbench`
* In `sigasi/sigasi.ini` add following lines between `@noDefault` and `-vmargs`:

```sh
--launcher.defaultAction
openFile
```

* If there are other arguments between `@noDefault` and `-vmargs`, append to these.

```sh
@noDefault
-vm
plugins/org.eclipse.justj.openjdk.hotspot.jre.full.<version>/jre/bin
--launcher.defaultAction
openFile
-vmargs
```

This way Sigasi Studio uses the default Eclipse behavior instead of the [custom Sigasi runner]({{< ref "/tech/make-eclipse-open-files-command-line.md" >}}).
More information on the Eclipse *OpenFileFeature* can be found [here](https://wiki.eclipse.org/Eclipse/OpenFileFeature).

The Sigasi runner allows you to open projects using the `-p` option.
This is not possible when using the default Eclipse runner.

# Installation of Sigasi Studio Eclipse Plugin

There are two ways to install the Sigasi Studio Eclipse Plugin:

1. [On-line installation of the Eclipse Plugin](#install-the-eclipse-plugin)
1. [Off-line update site to install the Eclipse Plugin](#installing-the-offline-update-site)

## Prerequisites: Java Runtime

* The Sigasi Studio plugin requires Java 11.
* You can check your Java version with `java -version`
* Java can be downloaded from several sources, a.o. [Adoptium](https://adoptium.net/releases.html?variant=openjdk11&jvmVariant=hotspot).

## Prerequisites: Eclipse

{{< figure src="/img/manual/eclipse_foundationmember.png" alt="Eclipse Foundation member" class="uk-align-right" >}}

* You need to have at least [Eclipse](http://www.eclipse.org) version 2021-03 (4.19).
* This Eclipse version and the Sigasi Studio plugin require Java 11 or 17.
* If you don't have Eclipse installed yet, the C/C++ flavor would be a good place to start. Just **download** ([Windows 64 bit][latest-eclipse-cpp-windows64]/[Linux 64 bit][latest-eclipse-cpp-linux64]/[Other versions][latest-eclipse-cpp]), **unzip**, and **start**.
* We recommend you also [increase the heap size for Eclipse](/faq/#how-do-i-increase-the-heap-size-for-eclipse).

For more information on system requirements: [System Requirements](/faq/#what-are-the-system-requirements)

[latest-eclipse-cpp-windows64]:https://www.eclipse.org/downloads/download.php?file=/technology/epp/downloads/release/2021-12/R/eclipse-cpp-2021-12-R-win32-x86_64.zip
[latest-eclipse-cpp-linux64]:https://www.eclipse.org/downloads/download.php?file=/technology/epp/downloads/release/2021-12/R/eclipse-cpp-2021-12-R-linux-gtk-x86_64.tar.gz
[latest-eclipse-cpp]:https://www.eclipse.org/downloads/packages/release/2021-12/r/eclipse-ide-cc-developers

## Install the Eclipse Plugin

This requires the host where you install the Sigasi Studio Plugin to have access to our download server.
After starting Eclipse:

1. Click **Help > Install New Software…**
1. In the **Work with:** field enter **`https://download.sigasi.com/updates/studio`** and press **enter**.
1. Check the checkbox next to **Sigasi Studio**
1. Since [Sigasi Studio 4.15](/releasenotes/sigasi-4.15), installing Sigasi Studio optional features is no longer recommended.
{{< figure src="/img/manual/setup-install-plugin.png" alt="Install Sigasi Studio plugin" >}}
1. Click the **Next** button.
1. The following steps are pretty self-explaining.
1. After the installation, you will need to restart Eclipse. Once this is done, go to **Window > Perspective > Open Perspective > Other...** and select the **Sigasi** Perspective. You can then close the **Welcome** View to show the Sigasi Views.

## Installing the Offline Update Site

Installing the offline update site is very similar to installing from the [main update site](#install-the-eclipse-plugin), where *step 2* is replaced with these steps:

1. Download the offline update site
1. In the **Install** Wizard, click **Add...**
1. Click **Archive...**, browse to the zip file you downloaded, and confirm with **OK**.
   {{< figure src="/img/manual/offline_update_site_add.png" alt="Add offline update site archive" >}}

Next, continue with step 3. in the [general eclipse installation instructions](#install-the-eclipse-plugin).
It is recommended to disable the option *Contact all update sites during install to find required software*
when installing the offline update site.

## GPG Certificate Validation

Eclipse 4.26 (2022-12) added GPG certificate checking capabilities. When you install new _plugins_, you will be prompted to trust any not-yet-trusted GPG keys or unsigned artifacts. Because Sigasi artifacts are correctly signed using GPG, you can expect to see the following screen the first time you install or update Sigasi in an Eclipse >= 4.26.

{{< figure src="/img/releasenotes/5.1/GPGDuringInstallation.png" link="/img/releasenotes/5.1/GPGDuringInstallation.png" title="GPG Trust Prompt" class="uk-align-center" width=550 >}}

Previously trusted keys can be inspected by going to **Window > Preferences > Install/Update > Trust**.

{{< figure src="/img/releasenotes/5.1/TrustPreferences.png" link="/img/releasenotes/5.1/TrustPreferences.png" title="GPG Trust Preferences" class="uk-align-center" width=750 >}}

You can refer to [this page]({{< ref "GPG.md" >}}) for all information regarding GPG at Sigasi.

# Licensing

The license key can be filled in under **Window > Preferences > Sigasi > License Key**.

More details can be found [here](/manual/license-key). The license unlocks the features for your [edition](/manual/editions).

# Configuration

Sigasi Studio stores its projects on the file system in one or more
*workspaces*.

When you start the tool for the first time, it will propose to create a
workspace for you:

{{< figure src="/img/manual/chooseworkspace2.png" alt="Choose workspace" >}}

Although you can work with multiple workspaces, we recommend using a
single workspace for all your projects.

# Software Updates

Sigasi Studio has an automated update system. When updates are available, you
are notified by a pop-up window called **Updates Available** in the
bottom right corner:

{{< figure src="/img/manual/update.png" alt="Updates Available" >}}

If you want to install the updates, click anywhere in the pop-up window.
After a few seconds, a new window will appear with further instructions.

The updates can be postponed by closing the pop-up. You can perform the
updates at any time by clicking the
![Update icon](/img/icons/updatesavailableicon.png)-icon in the status bar
at the bottom of the screen.

It is good practice to first create a backup of your installation folder before running an update. This can be done by simply compressing the `eclipse` or the `sigasi` folder in an archive (zip file)

## Update Sigasi Studio App

If you run Sigasi Studio as a **standalone application**, the automated update system will periodically check for [software updates](/manual/setup#software-updates).

## Update Sigasi Studio Eclipse plugin

If you run Sigasi Studio as an **Eclipse plugin**, you may need to check for updates manually, by clicking **Help > Check for Updates**.

You can enable automatic updates by opening this preference page: **Install/Update > Automatic Updates**. Next, enable **Automatically find new updates and notify me**. Feel free to modify any of the available options.

## Firewalls and Proxies

If the updates are not automatically fetched from the Sigasi Studio update server you are probably behind a firewall or proxy server. You can configure Sigasi Studio’s proxy settings in **Window > Preferences > General > Network connections**.
Make sure to set the **Active Provider** to *Manual* and configure the appropriate **Proxy entries**.
Whether you need to configure the entries for *HTTP* or *HTTPS* depends on the **Locations** configured in the **Available Software Sites** settings.

If you can not add a firewall exception for our update site, the fallback solution is to download the complete application from our website.
You can completely replace your old installation; all settings are stored in your workspace (the default is `workspaceSigasi` in your home directory).
