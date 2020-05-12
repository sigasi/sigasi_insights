---
title: Sigasi Studio Preview (4.8)
layout: page
pager: true
date: 2020-05-12
comments: true
---

For those users who want to get early access to the features and bugfixes of upcoming Sigasi Studio releases, we have set up an extra release channel, called "*Sigasi Preview*".

The Sigasi Preview release channel offers more frequent releases than the official releases. This page gives an introduction to the most important changes.

Although these preview releases are less rigorously tested than the official releases, they are stable enough for daily use.

**If you run into any problems, [please let us know](https://www.sigasi.com/support/)**.

# Current preview release

We continue our efforts to make the Sigasi editor as fast as possible. This Preview brings another set of speed improvements.

## Documentation

We removed the DocBook Documentation (to PDF) flow from Sigasi Studio. Since release [Sigasi Studio 4.5]({{< ref "/releasenotes/sigasi-4.05.md" >}}) it is replaced with a HTML export. This approach is much faster and simpler. In addition, it can more easily be [imported into Word](/tech/scale-diagrams-in-word).

Please let us know if you are missing any features in the HTML flow: <support@sigasi.com>

## Verilog improvements

SystemVerilog keywords are no longer highlighted as keywords in Verilog files.

We improved the outline and added some extra code checks:
* Warn when a Verilog module has an empty parameter declaration
* Warn against badly terminated port map of Verilog component (allowed in SystemVerilog)
* Improved hovers for SystemVerilog declarations
* Better linking of references to their declaration

{{< figure src="/img/releasenotes/4.8/system_verilog_outline.png" link="/img/releasenotes/4.8/system_verilog_outline.png" title="Improved SystemVerilog outline: note the result of the expanded UVM macros" width="600" >}}

* We also improved navigation and rename.

## Other improvements

* \[VHDL] We replaced the shorthand with longhand command line options of GHDL
* We updated Eclipse in the standalone version to Eclipse 2020-03
* We updated the Xtext dependency to 2.21.0

## Bug fixes

* \[Verilog] Fixed Libraries View cross linking for Verilog interfaces
* \[Verilog] Fixed name of Verilog superclass in documentation view
* \[VHDL] Add use clause quickfix after library clause
* \[Verilog] Fixed hovering for Verilog module instances
* Show in action breaks editor focus
* \[Verilog]  Fixed autocompletes at end of Verilog file
* Fixed outline refresh after undo
* \[Verilog] StackOverflowException for nested attributed class declaration
* \[Verilog] Added missing `s_until_with` support in our SystemVerilog parser
* \[Verilog] Correctly parse `rand` in SystemVerilog checkers
* Fixed error popup when contents of the Search View get out of date
* \[VHDL] Fixed Attribute QuickFix for unspecified entity classes

# Update or install?

You can download the Stand-alone version of the latest preview from:

* <https://download.sigasi.com/preview/latest/com.sigasi.hdt.product-linux.gtk.x86_64.zip>
* <https://download.sigasi.com/preview/latest/com.sigasi.hdt.product-macosx.cocoa.x86_64.zip>
* <https://download.sigasi.com/preview/latest/com.sigasi.hdt.product-win32.win32.x86_64.zip>

You can also update from (configure via Preferences > Install/Update > Available Software Sites > Add...) :
  https://download.sigasi.com/preview/studio/

SHA sums ([more info](/faq#how-can-i-check-a-sha-sum)) can be checked via <https://download.sigasi.com/preview/latest/sha1.txt>.

If you can't open the Sigasi Studio app on an Apple computer, have a look at [this FAQ entry]({{< ref "faq#damaged-app-on-apple-computers" >}}).

# Feedback

We welcome your feedback through the usual channels or the comments below. Note that comments are cleared after each [official release](/releasenotes).

