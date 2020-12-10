---
title: Sigasi Studio Preview (4.11)
layout: page
pager: true
date: 2020-12-10
comments: true
---

For those users who want to get early access to the features and bugfixes of upcoming Sigasi Studio releases, we have set up an extra release channel, called "*Sigasi Preview*".

The Sigasi Preview release channel offers more frequent releases than the official releases. This page gives an introduction to the most important changes.

Although these preview releases are less rigorously tested than the official releases, they are stable enough for daily use.

**If you run into any problems, [please let us know](https://www.sigasi.com/support/)**.

# Current preview release

No documented changes since the [4.10 release]({{< ref "/releasenotes/sigasi-4.10.md" >}}).

# Update or install?

You can download the Stand-alone version of the latest preview from:

* <https://download.sigasi.com/preview/latest/com.sigasi.hdt.product-linux.gtk.x86_64.zip>
* <https://download.sigasi.com/preview/latest/com.sigasi.hdt.product-macosx.cocoa.x86_64.zip>
* <https://download.sigasi.com/preview/latest/com.sigasi.hdt.product-win32.win32.x86_64.zip>

You can also update from (configure via Preferences > Install/Update > Available Software Sites > Add...) :
  https://download.sigasi.com/preview/studio/

SHA sums ([more info]({{< ref "/faq.md#how-can-i-check-a-sha-sum" >}})) can be checked via <https://download.sigasi.com/preview/latest/sha1.txt>.

If you can't open the Sigasi Studio app on an Apple computer, have a look at [this FAQ entry]({{< ref "faq.md#damaged-app-on-apple-computers" >}}).

# System requirements

* Sigasi Studio Standalone is supported on:
    * Windows: Windows 10 (64 bit) or newer
    * macOS 10.15 Catilina
    * Linux: RedHat Enterprise Linux RHEL 7.7 (64 bit) or newer
        * Sigasi Studio depends on `libXss.so` which can be obtained by installing `libXScrnSaver`
    * More information on supported OSes can be found [on the Eclipse website](https://www.eclipse.org/projects/project-plan.php?planurl=http://www.eclipse.org/eclipse/development/plans/eclipse_project_plan_4_10.xml#target_environments)
* Sigasi Studio as Plugin in your own Eclipse installation:
    * Eclipse 4.8 *Photon* up to Eclipse IDE 2020-09
    * Java JRE 11 or higher

We recommend at least **4GB of memory** available for Sigasi Studio,
and you need **about 300MB** of free disk space.

# Feedback

We welcome your feedback through the usual channels or the comments below. Note that comments are cleared after each [official release](/releasenotes).

