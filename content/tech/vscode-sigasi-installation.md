---
title: "Installing and maintaining Visual Studio Code / VSCodium with the Sigasi extension"
layout: page 
pager: true
author: Wim Meeus
date: 2024-03-04
comments: true
bannerad: true
tags:
  - VS Code
  - Installation
---

In this article, we'll discuss **different ways to install and maintain Visual Studio Code and VSCodium with the Sigasi extension**. 
Depending on your situation, one way may be more suitable than another. Let's consider a few possibilities:

* Designers work on their **personal laptop**, which they **manage themselves**. This option offers the most flexibility for design engineers, but some engineering time is going to be spent on software installation and maintenance. Some good pratcices should minimize the non-productive time.
* Designers work on their **personal laptop**, which is **managed centrally**, e.g. by corporate IT. In this case, corporate IT needs the software with extensions, settings etc. pre-packaged for easy deployment.
* Designers work on a **shared server**. To save disk space, software (including extensions) should be installed once for everyone. Each user however needs their own copy of settings and preferences.
* In some environments (e.g. safety critical design), software must be **certified within the company** before designers can use it. As part of the certification process, the certified software needs to be packaged for deployment.
* In some environments, designers work on computers **without a connection to the Internet**. In that case, design software cannot share any usage data (a.k.a. telemetry) with its manufaturer.

To accomodate this range of requirements, we present a few **different options of how to install Visual Studio Code or VSCodium with the Sigasi extension**.

# Visual Studio Code or VSCodium

First, we'll discuss the difference between [**Visual Studio Code**](https://code.visualstudio.com/) and [**VSCodium**](https://vscodium.com/), and how to choose which one to use. 

**Visual Studio Code** is the well-known code editor from Microsoft. It is distibuted under a traditional Microsoft product license. But in fact, it is based on VSCodium, with some Microsoft specific customizations added. **VSCodium** is a free distribution of the same code editor, distibuted under the open-source MIT license. You can find a more in-depth discussion [here](https://github.com/microsoft/vscode/wiki/Differences-between-the-repository-and-Visual-Studio-Code).

From the perspective of a user of the Sigasi extension, differences between the two are small. The **Sigasi extension runs equally well** on both **Visual Studio Code and VSCodium**. A few differences are worth considering:

* The **license**. Microsoft or MIT. Depending on your situation, one may be preferred over the other.
* **Telemetry**. Visual Studio Code sends anonymized usage data to Microsoft by default for the purpose of gaining insight into how well the product performs and how to improve it. In VSCodium, telemetry is disabled. If it is important to have telemetry disabled in your working environment, VSCodium is your friend.
* Access to **extensions**.
  * In **Visual Studio Code**, you can install the Sigasi extension directly from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/).
  * For **VSCodium**, you need to download the extension from the Sigasi website (for [Linux](https://download.sigasi.com/vs-code/updates/latest/sigasi-vscode-linux.vsix) or [Windows](https://download.sigasi.com/vs-code/updates/latest/sigasi-vscode-win32.vsix)) and install the extension from the downloaded `.vsix` file.
* Supported **operating system**. The current Linux version of Visual Studio Code runs on GLIBC 2.28 systems (e.g. RHEL 8.x) whereas VSCodium needs GLIBC 2.29 (e.g. RHEL 9.x)

# Classic installation

*Note that from here on, we'll use VS Code for either Visual Studio Code or VSCodium.*

For a classic installation, you download and install VS Code and run it without modifications or command line options. When running VS Code this way, it will store user settings and extensions in the user's home folder. This implies that each user needs to install extensions (like Sigasi) and set up preferences (including the Sigasi license) individually. On the other hand, users have maximal flexibility to install additional extensions as they require.

# Portable mode

In **portable mode**, VS Code keeps all extensions, settings, and preferences in its installation folder. This is convenient if you want to be able to **distribute a self-contained, ready-made environment** with **all necessary plugins and basic settings** for users to download.

You can set up such an environment as follows. After installing VS Code from a `zip` or `tar.gz` archive, **enable portable mode by adding a `data` folder** in VS Code's install folder. Then, **install the necessary extensions** and add the required settings. You can install extensions from the command line, e.g.

```shell
# Visual Studio Code (install from Visual Studio Marketplace)
./bin/code --install-extension Sigasi.sigasi-vscode

# VSCodium
wget https://download.sigasi.com/vs-code/updates/latest/sigasi-vscode-linux.vsix
./bin/codium --install-extension sigasi-vscode-linux.vsix
rm sigasi-vscode-linux.vsix
```

Finally, you can **zip the install folder and distribute it**. Note that each user will need write access to the `data/user-data` folder to run VS Code, so portable mode is not usable for a central read-only installation.

# Hybrid installation

On a **shared server**, one would prefer to install **VS Code and its extensions centrally**, but keep **user settings in the users' home directory**. This can't be achieved using VS Code's portable mode, because in portable mode, one cannot override the user preferences folder. Instead, we will use a command line option to override the extensions folder, while keeping the user preferences folder at its default location in the user's home directory. The hybrid installation is particularly useful in an environment in which IT management installs software (including extensions), e.g. on a shared server.

After installing VS Code, IT management can install the Sigasi extension in a subfolder of the VS Code installation, e.g.

```shell
mkdir -p <VSC_install_path>/extensions
wget https://download.sigasi.com/vs-code/updates/latest/sigasi-vscode-linux.vsix
<VSC_install_path>/bin/codium --extensions-dir <VSC_install_path>/extensions --install-extension sigasi-vscode-linux.vsix
rm sigasi-vscode-linux.vsix
```

Users need to start VS Code with the same `--extensions-dir <VSC_install_path>/extensions` argument:

```shell
<VSC_install_path>/bin/codium --extensions-dir <VSC_install_path>/extensions
```

We recommend that the IT manager adds a wrapper script to `<VSC_install_path>/bin` to set the required argument. An example is shown below. The script should be placed in the `bin` folder and it should be named `start-code` or `start-codium`, so the part of the name after `start-` matches the actual executable.

```shell
#!/bin/bash
VSC_BIN_DIR=$(dirname $0)
VSC_WRAP_NAME=$(basename $0)
VSC_NAME=${VSC_WRAP_NAME#start-}
${VSC_BIN_DIR}/${VSC_NAME} --extensions-dir ${VSC_BIN_DIR}/../extensions "$@"
```

# Installation in a container

Another way to install and run VS Code with the Sigasi extension, is in a (Docker) container. This method may be useful if you need to run VS Code on an older, incompatible operating system. Running containerized applications requires that the user has elevated system permissions though, so it's not a solution that will work in every environment.

We won't discuss this installation method in full detail here. Starting from a container with the appropriate OS, you'll need to add some extra packages to the container for running graphical (GUI) applications. Then, you'll need to install VS Code and the Sigasi extension in the container. Finally, when starting the container, you'll need volume mounts for your home folder and X11 forwarding. You may also require the `--no-sandbox` command line option to run VS code in the container.

# Using a different Java Runtime Environment

Another consideration is, which Java Runtime Environment (JRE) to use. The Sigasi extension comes with its own JRE, but in some cases (e.g., in a high security environment), one may want or need to use a different JRE. Sigasi requires a Java 11 or 17 JRE. We recommend Java 17 for optimal performance, e.g., [Eclipse Temurin](https://adoptium.net/temurin/releases/?version=17).

The JRE location setting is part of the user settings. VS Code doesn't seem to have a built-in way to adjust settings from the command line. VS Code stores its settings in JSON format, so it's not too hard to configure some settings using scripts. In the example below, we'll show an example.

# Example: shared server setup

In this example, we'll show how you can set up VSCodium with the Sigasi extension on a shared server. We assume that system management will not only set up the software, including extensions, but it will also provide a startup script for the user, which will configure the license path and a shared Java runtime. Extensions are kept centrally, but user settings will be stored in the user's home folder.

### Setup by system management

System Management first installs VS Code either through a package manager or by downloading and unpacking a `.zip` or `.tar.gz` archive. Instructions are available for [Visual Studio Code](https://code.visualstudio.com/download) and [VSCodium](https://github.com/VSCodium/vscodium/releases). If Java 17 (recommended) or 11 is not available yet, it should also be installed, e.g., [Eclipse Temurin](https://adoptium.net/temurin/releases/?version=17).

Then, it's time to install the Sigasi extension. On a shared server, we recommend installing extensions in a central place, e.g., an `extensions` subfolder of the VS Code installation folder.

```shell
# For Visual Studio Code:
<install_path>/bin/code --extensions-dir <install_path>/extensions --install-extension Sigasi.sigasi-vscode

# For VSCodium:
wget https://download.sigasi.com/vs-code/updates/latest/sigasi-vscode-linux.vsix
<install_path>/bin/codium --extensions-dir <install_path>/extensions --install-extension sigasi-vscode-linux.vsix
rm sigasi-vscode-linux.vsix
```

Finally, a startup script should be added to pre-configure some user settings, and point VS Code to the extensions folder on startup. This script should go in the user's PATH, e.g., `/usr/local/bin` on Linux. The script contains instructions on how to customize it for your server, see the `TODO` in the comments.

```shell
#!/bin/bash
VSC_INSTALL_DIR=<install_path>     # TODO: update with correct path
# TODO: below: comment/uncomment as appropriate
# These values are for Visual Studio Code.
VSC_NAME=code
VSC_CONFIG_FOLDER=Code
# These values are for VSCodium.
#VSC_NAME=codium
#VSC_CONFIG_FOLDER=VSCodium

# Create the settings folder and an empty settings file if it does not exist
if [ ! -f "${HOME}/.config/${VSC_CONFIG_FOLDER}/User/settings.json" ] ; then
    mkdir -p "${HOME}/.config/${VSC_CONFIG_FOLDER}/User"
    cat >"${HOME}/.config/${VSC_CONFIG_FOLDER}/User/settings.json" << EOF
{
}
EOF
fi

# Update the settings file with the correct settings
# TODO: configure the Sigasi license and Java path in the line below
# TODO: remove ` | ."sigasi.java.path" = "<Java_home_folder>"` to use the built-in Java (JRE)
jq '."sigasi.pathToLicense" = "<Sigasi_license_path>" | ."sigasi.java.path" = "<Java_home_folder>"' \
    "${HOME}/.config/${VSC_CONFIG_FOLDER}/User/settings.json" > \
    "${HOME}/.config/${VSC_CONFIG_FOLDER}/User/settings.json.new"
mv "${HOME}/.config/${VSC_CONFIG_FOLDER}/User/settings.json.new" \
    "${HOME}/.config/${VSC_CONFIG_FOLDER}/User/settings.json"

# Run VS Code
exec "${VSC_INSTALL_DIR}/bin/${VSC_NAME}" --extensions-dir "${VSC_INSTALL_DIR}/extensions" "$@"
```

### Using the software

The user may start VS Code with the Sigasi extension by running the above script. Before actually starting VS Code, the script will configure the shared Java runtime and the Sigasi license.

# Conclusion

In this article, we've discussed a few possibilities for setting up VS Code with the Sigasi extension. Obviously, more variants are possible, and you may find inspiration in this article to tune the setup for your working environment. As always, Sigasi customers are welcome to [contact support](https://www.sigasi.com/support) for further assistance. We'll help as best as we can.
