---
title: Sigasi Studio Preview (4.9)
layout: page
pager: true
date: 2020-09-04
comments: true
---

For those users who want to get early access to the features and bugfixes of upcoming Sigasi Studio releases, we have set up an extra release channel, called "*Sigasi Preview*".

The Sigasi Preview release channel offers more frequent releases than the official releases. This page gives an introduction to the most important changes.

Although these preview releases are less rigorously tested than the official releases, they are stable enough for daily use.

**If you run into any problems, [please let us know](https://www.sigasi.com/support/)**.

# Current preview release

Changes since the [4.8 release]({{< ref "/releasenotes/sigasi-4.08.md" >}}):

* Memory improvements and better caching
* Updated the included Java Runtime Environment to Java 11 (Stand alone version)
* We updated Eclipse in the standalone version to Eclipse 2020-06
* Updated the Xtext dependency to 2.22.0
* Embed Chromium browser in Sigasi Studio installation
* Better editor message when browser can not be loaded
* Removed the Sigasi Solarized themes
* More Verilog linting checks:
    - Detect Verilog case statements where default item is not the last in the list
    - Detect duplicate default branches in Verilog case statements
    - Report function/task arguments, where direction is not explicitly declared
    - Report parameters that do not have a default value
    - Report mixed positional and named port/parameter/argument associations
    - Check initialization of subprogram arguments ports and registers
    - Check for correct use of port connections in module instantiations
    - Check assignment patterns
    - Style: flag long code lines and tab characters
    - Style: check header comment
* Multiple SV parser improvements and refinements
* VHDL new quickfix for adding the `library` clause for `use` clauses automatically
* Improved logging of system variables to help troubleshoot issues caused by third-party tool setup scripts.
* Improved layouting in graphical views

Bugs:
* Preprocesor: fixed issue with multi line string concatenation
* Support include paths with angle brackets
* Allow to set VHDL version number when properties dialog is opened from an editor
* Avoid duplicate design units in documentation export for (System)Verilog projects


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
    * Linux: RedHat Enterprise Linux RHEL 7.5 (64 bit) or newer
    * More information on supported OSes can be found [on the Eclipse website](https://www.eclipse.org/projects/project-plan.php?planurl=http://www.eclipse.org/eclipse/development/plans/eclipse_project_plan_4_10.xml#target_environments)
* Sigasi Studio as Plugin in your own Eclipse installation:
    * Eclipse 4.7.3a *Oxygen* up to Eclipse IDE 2020-03
    * Java JRE 8, 11 or 14

We recommend at least **4GB of memory** available for Sigasi Studio,
and you need **about 300MB** of free disk space.

# Feedback

We welcome your feedback through the usual channels or the comments below. Note that comments are cleared after each [official release](/releasenotes).

