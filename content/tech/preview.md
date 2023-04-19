---
title: Sigasi Studio Preview (5.2)
layout: page
pager: true
date: 2023-03-17
lastmod: 2023-03-17
comments: true
---

For those users who want to get early access to the features and bugfixes of upcoming Sigasi Studio releases, we have set up an extra release channel, called `Sigasi Preview`.

The Sigasi Preview release channel offers more frequent releases than the official releases. This page gives an introduction to the most important changes.

Although these preview releases are less rigorously tested than the official releases, they are stable enough for daily use.

**If you run into any problems, [please let us know](https://www.sigasi.com/support/)**.

# Current Preview Release

No documented changes since the {{< page "releasenotes/sigasi-5.01.md" >}} release.

# Update or Install

You can download the stand-alone version of the latest preview from:

* <https://download.sigasi.com/preview/latest/com.sigasi.hdt.product-linux.gtk.x86_64.zip>
* <https://download.sigasi.com/preview/latest/com.sigasi.hdt.product-win32.win32.x86_64.zip>

You can also update automatically when setting **Preferences > Install/Update > Available Software Sites > Add...** :
`https://download.sigasi.com/preview/studio/`

SHA sums ([more info]({{< ref "/faq.md#how-can-i-check-a-sha-sum" >}})) can be checked via <https://download.sigasi.com/preview/latest/sigasistudio-sha1.txt>.

# System Requirements

* Sigasi Studio standalone is supported on:
  * Windows: Windows 10 or Windows 11 64-bit
  * Linux: RedHat Enterprise Linux RHEL 7.7 64-bit or newer, including RHEL 8
    * Sigasi Studio depends on `libXss.so` which can be obtained by installing `libXScrnSaver`
  * More information on supported OSes can be found [on the Eclipse website](https://www.eclipse.org/projects/project-plan.php?planurl=http://www.eclipse.org/eclipse/development/plans/eclipse_project_plan_4_18.xml#target_environments)
* Sigasi Studio as a plugin in your Eclipse installation:
  * Eclipse IDE 2021-03 up to and including Eclipse IDE 2022-12
  * Java JRE 11 or 17

We recommend at least **4GB of memory** available for Sigasi Studio,
and you need **about 1GB** of free disk space.

# Feedback

We welcome your feedback through the usual channels or the comments below. Note that comments on this page are cleared after each [official release](/releasenotes).
