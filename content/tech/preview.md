---
title: Sigasi Studio Preview (5.5)
layout: page
date: 2023-12-15
lastmod: 2023-12-15
comments: true
pager: true
excludefromlatest: true
---

For users who want early access to the features and bug fixes of upcoming Sigasi Studio releases, we have set up an extra release channel called `Sigasi Preview`.

The Sigasi Preview release channel offers more frequent releases than the official releases. This page gives an introduction to the most important changes.

Although these preview releases are less rigorously tested than the official releases, they are stable enough for daily use.

**If you run into any problems, [please let us know](https://www.sigasi.com/support/)**.

# Sigasi 5.5 Preview

No documented changes since the {{< page "releasenotes/sigasi-5.04.md" >}} release.

# Update or Install

## Sigasi Studio for Eclipse

You can download the stand-alone version of the latest preview.

- Linux: <https://download.sigasi.com/sigasi-studio/preview/latest/com.sigasi.hdt.product-linux.gtk.x86_64.zip>
- Windows: <https://download.sigasi.com/sigasi-studio/preview/latest/com.sigasi.hdt.product-win32.win32.x86_64.zip>

You can also update automatically when setting **Preferences > Install/Update > Available Software Sites > Add...** :
`https://download.sigasi.com/sigasi-studio/preview/studio/`

SHA sums ([more info]({{< ref "/faq.md#how-can-i-check-a-sha-sum" >}})) can be checked via <https://download.sigasi.com/sigasi-studio/preview/latest/sigasistudio-sha1.txt>.

## Sigasi Studio for VS Code

You can download a `.vsix` file to install in VS Code [manually](https://code.visualstudio.com/docs/editor/extension-marketplace#_install-from-a-vsix).

- Linux: <https://download.sigasi.com/vs-code/preview/latest/sigasi-vscode-linux.vsix>
- Windows: <https://download.sigasi.com/vs-code/preview/latest/sigasi-vscode-win32.vsix>

The SHA sum is downloadable from <https://download.sigasi.com/vs-code/preview/latest/vscode-sha1.txt>.

# System Requirements

- Sigasi Studio standalone supports:
  - Windows 10 or Windows 11 64-bit
  - RedHat Enterprise Linux RHEL 8 or 9 64-bit
    - Sigasi Studio depends on `libXss.so`, which is obtainable by installing `libXScrnSaver`
    - Sigasi Studio depends on `webkit2gtk4.0`, which is installable through your package manager of choice
  - You can find more information on supported Linux Operating Systems [on the Eclipse website](https://www.eclipse.org/projects/project-plan.php?planurl=http://www.eclipse.org/eclipse/development/plans/eclipse_project_plan_4_19.xml#target_environments)
- Sigasi Studio as a plugin in your Eclipse installation:
  - Eclipse IDE 2021-03 up to and including Eclipse IDE 2023-03
  - Java JRE 11 or 17
- Sigasi Studio [extension](https://www.sigasi.com/vscode/) for VS Code:
  - Windows 10 or Windows 11 64-bit
  - RedHat Enterprise Linux RHEL 8 or 9 64-bit
  - VS Code >= 1.77 and < 2.0
  - Java JRE 11 or 17 (shipped with the extension)

We recommend having at least **4GB of memory** and **about 1GB** of free disk space available for Sigasi Studio.

# Feedback

We welcome your feedback through the usual channels or the comments below. Note that we clear the comments on this page after each [official release](/releasenotes).
