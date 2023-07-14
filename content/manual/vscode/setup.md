---
title: "Extension Setup"
showinmenu: true
weight: 1
pager: true
aliases:
  - /vscode/setup/
---
This page explains how to install and configure the Sigasi Studio extension for VS Code.

## Requirements

### VS Code Version

The extension requires _VS Code_ or _VS Codium_ version `1.77.0` or higher.

### Java Runtime

The path to use the Java Runtime (JRE) can optionally be configured in the [settings](#settings).
If the setting is empty, the extension will extract the included **JRE** in the user's home folder.

* Linux: `~/.config/Code/User/globalStorage/sigasi.sigasi-vscode`
* Windows: `%AppData%\Code\User\globalStorage\sigasi.sigasi-vscode`

If you wish to provide the JRE:

* The extension requires a Java Runtime
* The Java runtime must be 64-bit. Make sure to use **JRE 11** or **JRE 17**
* You can check your Java version with `java -version`
* Java can be downloaded from several sources, a.o. [Adoptium](https://adoptium.net/releases.html?variant=openjdk17&jvmVariant=hotspot)
* Make sure the `java` executable is available in the `PATH` environment variable

## Installation

The extension can be installed from the [VS Code marketplace](https://marketplace.visualstudio.com/items?itemName=Sigasi.sigasi-vscode)
or from the [Open VSX Registry](https://open-vsx.org/extension/Sigasi/sigasi-vscode).

To install the extension, open the _Extensions_ pane using **Ctrl+Shift+X**.
In the _Search_ field on top, type **Sigasi**.
Click the _Sigasi_ extension and click **Install**.

If you're working on a [remote host for your HDL development]({{< ref "/manual/vscode/remote.md" >}}), the extension only needs to be installed on the remote.

## Settings

The settings for the Sigasi extension can be reached trough:

{{< figure src="/img/vscode/VSCodeLicenseSetting.png" link="/img/vscode/VSCodeLicenseSetting.png" alt="VS Code Sigasi license setting" class="uk-align-right" width="400" >}}

* Open the _Command Palette_ using **Ctrl+Shift+P**
* Start typing and select **Preferences: Open Settings (UI)**
* In the _Search_ field on top, type **Sigasi**.
* First, configure the **Path To License**. This can be a local node-locked license file or a floating license server (e.g. `27000@myserver.example.com`). The setting for the license path is similar to the one in [Sigasi Studio on Eclipse]({{< ref "/manual/eclipse/license-key.md" >}}).
* Optionally, configure the JRE location in **Sigasi > Java: Path**. Make sure to add the `java` executable name in the configured value.

Alternatively, the Sigasi extension settings can be accessed through the Manage icon (<span uk-icon="cog"></span>) in the extensions overview.

## Talkback

You can help improve the Sigasi extension for VS Code by enabling the automatic submission of usage statistics and error stack traces.
More information about this feature is available on the [Talkback manual page]({{< ref "/manual/common/talkback.md" >}}).

This feature is disabled by default.
To enable talkback in the VS Code extension, open the settings and enable the `Sigasi: Enable Talkback` option.

The messages sent to Sigasi can also be logged locally. Then you can view these messages using the **Sigasi: Open Talkback Log** command.
In order to log the messages locally, a [data storage]({{< ref "#on-disk-caching" >}}) needs to be configured.

## On Disk Caching

You can specify a directory to be used by the Sigasi Language Server to write the cache and talkback logs to.
Open the settings and search for `Sigasi › Server > Caching: Data Location`.
The directory needs to exist already.
Choose a local folder for optimal performance.

Once you've configured this directory, the setting `Sigasi > Server > Caching: Enable On Disk Caching` can be enabled.

The cache will speed up the plugin by preserving the state from an earlier moment.
This will speed up the build _significantly_.
Be careful though: opening the same project in another VS Code window at the same time will corrupt the cache causing a myriad of issues.
