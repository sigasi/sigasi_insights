---
title: "Extension setup"
showinmenu: true
weight: 1
pager: true
---
This page explains how to install and configure the VS Code extension.

## Requirements

### VS Code version

The extension requires VS Code `1.61.0` or higher.

### Java Runtime

Since version `0.3.6` of this extension, the path to use the Java Runtime (JRE) can optionally be configured in the [settings](#access-settings).
If the setting is empty, the extension will download a **JRE** and extract it in the local `.vscode` folder.

If you wish to provide the JRE:

* The extension requires a Java Runtime
* The Java runtime must be 64-bit. Make sure to use at least **JRE 11**
* You can check your Java version with `java -version`
* Java can be downloaded from several sources, a.o. [Adoptium](https://adoptium.net/releases.html?variant=openjdk11&jvmVariant=hotspot)
* Choose the _OpenJDK 11 x64 JRE_ for your OS
* Make sure the `java` executable is available in the `PATH`

## Installation

The extension can be installed from the [VS Code marketplace](https://marketplace.visualstudio.com/items?itemName=Sigasi.sigasi-vscode).

To install the extension in VS Code, open the _Extensions_ pane using **Ctrl+Shift+X**.
In the _Search_ field on top, type **Sigasi**.
Click the _Sigasi_ extension and click **Install**.

If you're working on a remote host for your HDL development, the extension only needs to be installed on the remote.

## Settings

The settings for the Sigasi extension can be reached trough:

{{< figure src="/img/vscode/VSCodeLicenseSetting.png" link="/img/vscode/VSCodeLicenseSetting.png" alt="VS Code Sigasi license setting" class="uk-align-right" width="400" >}}

* Open the _Command Palette_ using **Ctrl+Shift+P**
* Start typing and select **Preferences: Open Settings (UI)**
* In **Search settings** type `Sigasi`
* First, configure the **Path To License**. This can be a local node locked license file or a floating license server (e.g. `27000@myserver.example.com`).
* Optionally, configure the JRE location in **Sigasi > Java: Path**. Make sure to add the `java` executable name in the path.

Alternatively, the Sigasi extension settings can be accessed through the Manage icon (<span uk-icon="cog"></span>) in the extensions overview.

## Features

The following features need setup before they are active.

### Verilog formatting

For Verilog code, it is possible to configure an external formatter, _[Verible]_.
To enable and configure the formatter, open the settings and search for `Sigasi › Verilog › Formatting`.
Here you have the choice between using the Sigasi formatter or the Verible formatter by setting the `Formatter Tool`.

When choosing `verible`, arguments for Verible can be set in `Verible: Format Arguments`.

When using `verible`, by default the Verible formatter that comes with the extension will be used.
It's also possible to use an external executable by configuring its installation path in the `Verible: Installation Path` setting and enabling the `Verible: Use External` option.

### Talkback

You can help improving the Sigasi extension for VS Code by enabling the automatic submission of usage statistics and error stack traces.
More information about this feature is available in the [Talkback manual page]({{< ref "manual/talkback.md" >}}).

To enable talkback in the VS Code extension, open the settings and enable the `Sigasi: Enable Talkback` option.

The messages sent to Sigasi can also be logged locally. Then you can view these messages using the **Sigasi: Open talkback log** command.
In order to log the messages locally, a [data storage]({{< ref "#configurable-data-storage" >}}) needs to be configured.

### Configurable data storage

You can specify a directory to be used by the Sigasi Language Server to write the cache and talkback logs to.
Open the settings and search for `Sigasi › Server: Data Location`.
The directory needs to exist already.

[Verible]: https://github.com/chipsalliance/verible
