---
title: Sigasi Studio Preview (4.11)
layout: page
pager: true
date: 2021-01-29
comments: true
---

For those users who want to get early access to the features and bugfixes of upcoming Sigasi Studio releases, we have set up an extra release channel, called "*Sigasi Preview*".

The Sigasi Preview release channel offers more frequent releases than the official releases. This page gives an introduction to the most important changes.

Although these preview releases are less rigorously tested than the official releases, they are stable enough for daily use.

**If you run into any problems, [please let us know](https://www.sigasi.com/support/)**.

# Current preview release

## Version bumps

* JustJ was updated to 15.0.1
* Xtext and EMF were updated to 2.24
* Eclipse was updated to 2020-12
* Chromium was Updated to 76.0.9

## Improvements

* The *Report Encrypted Regions* validation no longer shows squiggly lines
* Improved error reporting for documentation export. Especially when exported resources already exist and can't be overwritten
* Ensured consistent punctuation in our messages
* Split of simulation arguments to a separate field in the toolchain preferences for GHDL

{{< figure src="/img/releasenotes/preview/GhdlSplitArguments.png" title="Ghdl split simulation arguments" width="500">}}

* **[VHDL]** Default values for generics are now part of the autocompleted component declaration
* **[VHDL]** Allow multiple capitalization differences at once to be fixed from the problems view
* **[VHDL]** Improved auto indentation for procedures
* **[VHDL]** Improved alignment during formatting of procedure arguments
* **[VHDL]** Added a new validation to detect index out of range and incorrect size for arrays
{{< figure src="/img/releasenotes/preview/IndexOutOfRangeAndIncorrectArraySize.png" title="Index out of range and incorrect array size.png" width="500">}}

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
* **[Verilog]** Greatly improved memory usage when using parameterized classes

{{< figure src="/img/releasenotes/preview/MultipleSvStatementsSameLine.png" title="Check multiple statements on the same line" width="500">}}

## Bugfixes

* Fixed a bug where Sigasi Studio would always try to connect to port 4444 on multiuser systems
* Fixed rare hover errors in unsaved editors
* Improved GraphicsConfiguration hovers
* Fixed dissapearing edges on hover in nested states in statemachines
* Aligned case-sensitivity of GraphicsConfiguration to VHDL and Verilog
* Removed context menu for the documentation view
* Removed beep when opening the documentation view
* Fixed running of all VUnit tests in a project
* Fixed broken editor when file for the editor was removed while Sigasi Studio was not running
* **[VHDL]** Fixed structured selection no longer selecting single words
* **[VHDL]** Fixed corruption of VHDL outline, blockdiagram and hovers in unmapped files
* **[VHDL]** Fixed a rare issue when formatting aggregates with named associations
* **[VHDL]** We now show the correct value when hovering over bitstring literals
* **[VHDL]** Added an autocomplete template for procedure prototypes
* **[Verilog]** Fixed linking support for randsequence in broken code
* **[Verilog]** Fixed outline rendering for nested types
* **[Verilog]** Fixed false positive in 4-state net type validation
* **[Verilog]** Fixed false positive warning for default type arguments when class was declared as forward typedef before
* **[Verilog]** Fixed false positive error for property operators
* **[Verilog]** Fixed false positive error for multiclock SVA properties
* **[Verilog]** Fixed false positive error for SVA property operators with `always` as an operand
* **[Verilog]** Fixed false positive error for `first_match` in sequences
* **[Verilog]** Fixed false positive error for ternary conditions with pattern expressions

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
    * macOS 10.15 Catalina or newer
    * Linux: RedHat Enterprise Linux RHEL 7.7 (64 bit) or newer
        * Sigasi Studio depends on `libXss.so` which can be obtained by installing `libXScrnSaver`
    * More information on supported OSes can be found [on the Eclipse website](https://www.eclipse.org/projects/project-plan.php?planurl=http://www.eclipse.org/eclipse/development/plans/eclipse_project_plan_4_10.xml#target_environments)
* Sigasi Studio as plugin in your own Eclipse installation:
    * Eclipse 4.8 *Photon* up to and including Eclipse IDE 2020-12
    * Java JRE 11 or higher

We recommend at least **4GB of memory** available for Sigasi Studio,
and you need **about 300MB** of free disk space.

# Feedback

We welcome your feedback through the usual channels or the comments below. Note that comments are cleared after each [official release](/releasenotes).
