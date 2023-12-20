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

### Java Runtime (Optional)

The path to use the Java Runtime (JRE) can optionally be configured in the [settings](#settings).
If empty, the extension will extract the included **JRE** in the user's home folder.

* Linux: `~/.config/Code/User/globalStorage/sigasi.sigasi-vscode`
* Windows: `%AppData%\Code\User\globalStorage\sigasi.sigasi-vscode`

If you wish to provide the JRE:

* The extension requires a Java Runtime
* The Java runtime must be 64-bit. Make sure to use **JRE 11** or **JRE 17**
* You can check your Java version with `java -version`
* Java can be downloaded from several sources, a.o. [Adoptium](https://adoptium.net/releases.html?variant=openjdk17&jvmVariant=hotspot)
* Make sure the `java` executable is available in the `PATH` environment variable

## Installation

You can install the extension from the [VS Code marketplace](https://marketplace.visualstudio.com/items?itemName=Sigasi.sigasi-vscode)
or the [Open VSX Registry](https://open-vsx.org/extension/Sigasi/sigasi-vscode).

To install the extension, open the _Extensions_ pane using **Ctrl+Shift+X**.
In the _Search_ field on top, type **Sigasi**.
Click the _Sigasi_ extension and click **Install**.

If you're working on a [remote host for your HDL development]({{< ref "/manual/vscode/remote.md" >}}), the extension only needs to be installed on the remote.

## Updating

VS Code supports automatic extension updates.
Since VS Code version `1.85`, fine-grained control about which extensions to auto-update is available.

If your _Extensions: Auto Update_ setting is set to _Selected _Extensions_, you can right-click the Sigasi extension in the _Extensions_ pane and select the _Auto Update_ option.
Doing so ensures that your Sigasi extension will be updated even when other extensions are not auto-updating.

## Settings

You can reach the settings for the Sigasi extension as follows.

{{< figure src="/img/vscode/VSCodeLicenseSetting.png" link="/img/vscode/VSCodeLicenseSetting.png" alt="VS Code Sigasi license setting" class="uk-align-right" width="400" >}}

* Open the _Command Palette_ using **Ctrl+Shift+P**
* Start typing and select **Preferences: Open Settings (UI)**
* In the _Search_ field on top, type **Sigasi**.
* First, configure the **Path To License**. It can be a local node-locked license file or a floating license server, e.g., `27000@myserver.example.com`. The setting for the license path is similar to the one in [Sigasi Studio on Eclipse]({{< ref "/manual/eclipse/license-key.md" >}}).
* Optionally, configure the JRE location in **Sigasi > Java: Path**. Make sure to add the `java` executable name to the configured value.

Alternatively, you can access the Sigasi extension settings through the Manage icon (<span uk-icon="cog"></span>) in the extensions overview.

## Talkback and Telemetry

You can help improve the Sigasi extension for VS Code by enabling the automatic submission of usage statistics and error stack traces through Talkback and telemetry.
More information about these features is available on the [Talkback manual page]({{< ref "/manual/common/talkback.md" >}}).

Talkback is disabled by default.
To enable Talkback in the VS Code extension, open the settings and enable the `Sigasi: Enable Talkback` option.

The messages sent to Sigasi are logged locally. You can view these messages using the **Sigasi: Open Talkback Log Folder** command.

## On Disk Caching

Disk caching is enabled by default in the Sigasi extension for VS Code. We recommend leaving it enabled as the cache will _significantly_ speed up the plugin by preserving the state from an earlier moment.

However, if you'd like to disable it, you can turn off the setting `Sigasi > Server > Caching: Enable On-Disk Caching`.
