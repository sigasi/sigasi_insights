---
title: "Remote Development"
showinmenu: true
weight: 8
pager: true
aliases:
  - /vscode/remote/
---
It is possible to run the User Interface of Visual Studio Code on one machine and do the actual development on another machine.
For example, you can be working on a Windows laptop at home, while the code lives on a Linux server in a datacenter at work.

On the laptop, you only need to install Visual Studio Code and the Remote SSH plugin.
The plugin connects with the remote server using SSH, and handles any setup required on the server.
The Sigasi extension only needs to be installed on the remote server.
Your code is kept on the server, there is no need to have a copy on the laptop. [Documentation is available on the Visual Studio website](https://code.visualstudio.com/docs/remote/ssh).

## Remote development setup

* Download, install and start Visual Studio Code on your workstation (the laptop in our example): <https://code.visualstudio.com/download>
{{< figure src="/img/vscode/vsc_extension.png" link="/img/vscode/vsc_extension.png" alt="Remote SSH extension" class="uk-align-right" width="400" >}}
* Navigate to extensions (**Ctrl+Shift+X** or the icon on the left) and install the **Remote - SSH** extension.
* From the Command Palette (**Ctrl+Shift+P**), select **Remote-SSH: Connect Current Window to Host...**. If you have an SSH config file, you can use an existing configuration here. Otherwise, select **Add New SSH host** and add the command to connect to your server. Note that you need to enter the full command line and not just the name of the server. Typically, the full command will look like `ssh username@my.compa.ny` .
  To automate this, we recommend to use an SSH key-pair in combination with the SSH config file.
{{< figure src="/img/vscode/vsc_remote.png" link="/img/vscode/vsc_remote.png" alt="Remote SSH connection" class="uk-align-right" width="400" >}}
* Once the connection is configured, connect to the server. In the bottom left corner of your VS Code window, you'll find an indication of the remote connection.
* In the connected VS Code window, navigate to plugins and install the Sigasi plugin on the remote server.
* Navigate to the Explorer (e.g. **Ctrl+Shift+E**) and either open an existing workspace folder or clone a repository.
* Check your Sigasi license setting. From the Command Palette (**Ctrl+Shift+P**), select **Preferences: Open Settings (UI)**, and look for **Sigasi: Path To License**. With remote development, this is the license path _on the server_.
* Note that the Sigasi VS Code extension with default settings will attempt to download a compatible Java runtime (JRE). If you want to use a JRE already installed on the server, look for **Sigasi > Java: Path** in the settings and enter he path to your `java` (11 or higher) executable. This is useful e.g. if the server doesn't have internet access.
* Now open a VHDL, Verilog or SystemVerilog file on the remote server.

## Remote development license needs

* When using the Sigasi extension in combination with the Remote SSH extension, the Sigasi license should be available on the remote host.
* If you're also using the sigasi extension locally, the license settings might be different for local and remote development. In that case, make sure to use the proper settings, depending on whether you're developing locally or remote.
* The settings from the `User` level will act as the default and can be overridden for each remote by setting the `Remote [<remote name>]`.