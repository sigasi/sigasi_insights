---
title: Sigasi Studio Preview (4.1)
layout: page
pager: true
date: 2018-06-20
comments: true
---

For those users who want to get early access to the features and bugfixes of upcoming Sigasi Studio releases, we have set up an extra release channel, called "*Sigasi Preview*".

The Sigasi Preview release channel offers more frequent releases than the official releases. This page gives an introduction to the most important changes.

Although these preview releases are less rigorously tested than than the official releases, they are stable enough for daily use.

*If you run into any problems, please let us know*.

# Current preview release


## VUnit

* Import an existing VUnit project via **Import > ...**
* Add **VUnit support** to a Sigasi project: Right click your project and select **configure > Add VUnit support...**
* Run VUnit tests: right click the project, file or editor and select **Run VUnit tests**
* Run a single VUnit test: select the string with the test name (in the `run` function call) and select **Run VUnit test**

## Eclipse Photon

[New and noteworthy](https://www.eclipse.org/eclipse/news/4.8/platform.php)

Sigasi Studio is now based on the Eclipse Photon platform.  Many small usability improvements make life a little easier:

* Better [integration of visual elements](https://www.eclipse.org/eclipse/news/4.8/platform.php#windows-modern-directory-dialog) with the native OS
* [Filtering a resource](https://www.eclipse.org/eclipse/news/4.8/platform.php#open-resource-highlight-matching) in your workspace has become more convenient
* The default text font on macOS was switched from “Monaco” to “Menlo” which has a bold font face

* Accessiblity support
* Improved memory usage

## Graphics and Documentation improvements

* Added option to hide all reassignment nodes
* Visual disction between (single bit) wires and buses
* Invert graphics colors in Dark themes
* Add VHDL `processes` and `blocks` to documentation

[comment]: <> (Add option to use graphics configurations in PDF documentation)
[comment]: <> (File > Export for graphics does not use graphical configuration files)

## Other

* Improved hovers
* Set VHDL/Verilog version in New VHDL/Verilog Project dialog
* Added light-weight editor for SystemVerilog
* Add checkbox in (maintenance) license expiration to disable warnings
* Export (toplevel) csv file when a toplevel is set
* Add Cancel to the open large file (VHDL)
* Improved display of Net Search results
* Improved text selection when double clicking in SystemVerilog State Machine View
* Improved highlighting in SystemVerilog macros

[comment]: <> (Remove 32 bit versions from Sigasi Studio build)
[comment]: <> (* Declare as enumeration literal does not select the new literal)
[comment]: <> (* Open design unit is missing project information)

## Bug fixes

- ticket 4387 : VHDL component autocomplete does not generate vectors for Verilog modules with non-ANSI vector ports
- ticket 4341 : Hide signal assignments button in outline is broken
- ticket 4349 : Quick Fix for port and generic maps should overwrite empty maps
- ticket 4331 : SystemVerilog formatter does not indent correctly when preceded by comments

[comment]: <> (- ticket 4377 : Tutorial projects not created automatically when new workspace is created)
[comment]: <> (- ticket 4436 : SystemVerilog PDF export: avoid duplicates caused by include files)

# Update or install?

You can download the Stand-alone version of the latest preview version from:

* <http://download.sigasi.com/preview/latest/com.sigasi.hdt.product-linux.gtk.x86_64.zip>
* <http://download.sigasi.com/preview/latest/com.sigasi.hdt.product-macosx.cocoa.x86_64.zip>
* <http://download.sigasi.com/preview/latest/com.sigasi.hdt.product-win32.win32.x86_64.zip>

You can also update from (configure via Preferences > Install/Update > Available Software Sites > Add...) :
  http://download.sigasi.com/preview/studio/

SHA Sums ([more info][/faq#how-can-i-check-a-sha-sum]) can be checked via <http://download.sigasi.com/preview/latest/sha1.txt>

# Feedback

We welcome your feedback trough the usual channels or the comments below. Note that comments are cleared after each [official release][/releasenotes].

