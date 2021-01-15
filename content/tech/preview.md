---
title: Sigasi Studio Preview (4.11)
layout: page
pager: true
date: 2021-01-15
comments: true
---

For those users who want to get early access to the features and bugfixes of upcoming Sigasi Studio releases, we have set up an extra release channel, called "*Sigasi Preview*".

The Sigasi Preview release channel offers more frequent releases than the official releases. This page gives an introduction to the most important changes.

Although these preview releases are less rigorously tested than the official releases, they are stable enough for daily use.

**If you run into any problems, [please let us know](https://www.sigasi.com/support/)**.

# Current preview release

## Version bumps

* Xtext and EMF were updated to 2.24
* Eclipse was updated to 2020-12
* Orbit was updated to 2020-12
* Updated Chromium to 76.0.9

## Improvements

* The *Report Encrypted Regions* validation no longer shows squiggly lines
* Improved error reporting for documentation export. Especially when exported resources already exist and can't be overwritten
* Ensured consistent punctiation in our messages
* Split of simulation arguments to a separate field in the toolchain preferences for GHDL

{{< figure src="/img/releasenotes/preview/GhdlSplitArguments.png" title="Ghdl split simulation arguments" width="500">}}

* **[VHDL]** Default values for generics are now part of the autocompleted component declaration
* **[VHDL]** Allow multiple capitalization differences at once to be fixed from the problems view
* **[VHDL]** Improved auto indentation for procedures
* **[VHDL]** Improved alignment during formatting of procedure arguments
* **[Verilog]** Fixed preprocessing when an **include** directive is directly followed by more tokens
* **[Verilog]** It is now possible to format on save

{{< figure src="/img/releasenotes/preview/SvFormatOnSave.png" title="SystemVerilog format on save" width="500">}}

* **[Verilog]** `.sv` files that are included in another file are now automatically excluded from Sigasi's compilation
* **[Verilog]** Anonymous UDP instances are now shown in the outline
* **[Verilog]** Added `New SystemVerilog File` wizard

{{< figure src="/img/releasenotes/preview/NewSystemVerilogFileWizard.png" title="New SystemVerilog file wizard" width="500">}}

* **[Verilog]** Added a new validation to detect > 32-bit parameter initialization without width specification (STARC Verilog, rule 1.1.4.9)

{{< figure src="/img/releasenotes/preview/32BitParameterInitWithoutSpec.png" title="> 32-bit parameter initialization without width specification" width="500">}}

* **[Verilog]** Added a new validation to detect 2-value type nets
* **[Verilog]** Added a new validation to detect multiple statement written on the same line

{{< figure src="/img/releasenotes/preview/MultipleSvStatementsSameLine.png" title="Check multiple statements on the same line" width="500">}}

## Bugfixes

* Fixed rare hover errors in unsaved editors
* Improved GraphicsConfiguration hovers
* Fixed dissapearing edges on hover in nested states in statemachines
* Aligned case-sensitivity of GraphicsConfiguration to VHDL and Verilog
* Removed context menu for the documentation view
* Removed beep when opening the documentation view
* Fixed running of all VUnit tests in a project
* **[VHDL]** Structured select no longer selects word
* **[VHDL]** Fixed corruption of VHDL outline, blockdiagram and hovers in unmapped files
* **[VHDL]** We now show the correct value when hovering over bitstringliteral
* **[Verilog]** Fixed linking support for randsequence in broken code
* **[Verilog]** Fixed outline rendering for nested types
* **[Verilog]** Fixed false positive in 4-state net type validation

# Update or install?

You can download the stand-alone version of the latest preview from:

* <https://download.sigasi.com/preview/latest/com.sigasi.hdt.product-linux.gtk.x86_64.zip>
* <https://download.sigasi.com/preview/latest/com.sigasi.hdt.product-macosx.cocoa.x86_64.zip>
* <https://download.sigasi.com/preview/latest/com.sigasi.hdt.product-win32.win32.x86_64.zip>

You can also update from (configure via Preferences > Install/Update > Available Software Sites > Add...) :
  https://download.sigasi.com/preview/studio/

SHA sums ([more info]({{< ref "/faq.md#how-can-i-check-a-sha-sum" >}})) can be checked via <https://download.sigasi.com/preview/latest/sha1.txt>.

# System requirements

* Sigasi Studio standalone is supported on:
    * Windows: Windows 10 (64 bit) or newer
    * macOS 10.15 Catilina
    * Linux: RedHat Enterprise Linux RHEL 7.7 (64 bit) or newer
        * Sigasi Studio depends on `libXss.so` which can be obtained by installing `libXScrnSaver`
    * More information on supported OSes can be found [on the Eclipse website](https://www.eclipse.org/projects/project-plan.php?planurl=http://www.eclipse.org/eclipse/development/plans/eclipse_project_plan_4_10.xml#target_environments)
* Sigasi Studio as Plugin in your own Eclipse installation:
    * Eclipse 4.8 *Photon* up to and including Eclipse IDE 2020-12
    * Java JRE 11 or higher

We recommend at least **4GB of memory** available for Sigasi Studio,
and you need **about 300MB** of free disk space.

# Feedback

We welcome your feedback through the usual channels or the comments below. Note that comments are cleared after each [official release](/releasenotes).

