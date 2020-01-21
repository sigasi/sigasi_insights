---
title: Sigasi Studio Preview (4.7)
layout: page
pager: true
date: 2020-01-20
comments: true
---

For those users who want to get early access to the features and bugfixes of upcoming Sigasi Studio releases, we have set up an extra release channel, called "*Sigasi Preview*".

The Sigasi Preview release channel offers more frequent releases than the official releases. This page gives an introduction to the most important changes.

Although these preview releases are less rigorously tested than than the official releases, they are stable enough for daily use.

**If you run into any problems, [please let us know](https://www.sigasi.com/support/)**.

# Current preview release



## Improved graphics

* Show Verilog `always` blocks in Block Diagrams.
{{< figure src="/img/releasenotes/4.7/always_blocks.svg" title="Visualize `always` blocks in SystemVerilog Block Diagrams" width="400" >}}
* Support Chinese, Japanese and Korean characters in diagrams
{{< figure src="/img/releasenotes/4.7/japanese-diagram.png" title="Japanese characters in diagrams" width="600" >}}
* **Show in** support for state machine diagrams (navigate from source to diagram)
{{< figure src="/img/releasenotes/4.7/show-in-statemachine.png" title="Navigate from code to State Machine Diagram" >}}
* Bigger click boxes for block diagram edges.
{{< figure src="/img/releasenotes/4.7/clickable-edges2.png" title="Bigger click boxes for block diagram edges" width="400" >}}
* Better alignment for labels in State Machine Diagrams
{{< figure src="/img/releasenotes/4.7/label-alignment.png" title="Better alignment for labels in State Machine Diagrams" >}}
* Better support for opening diagrams for external files

## Other improvements

* We updated the upstream Sigasi Studio dependencies:
    * Xtext to 2.20.0
    * Eclipse platform to [Eclipse 2019-12](https://www.eclipse.org/eclipseide/2019-12/noteworthy/). This brings:
        * an updated EGit plugin (git support)
        * the view menu chevron icon (▽) is replaced by a modern equivalent, the vertical ellipsis ( ⠇)
        * **Quick Access** is renamed to **Find Actions**
        * and [more](https://www.eclipse.org/eclipse/news/4.14/platform.php)
* \[(System)Verilog] Autocomplete for `__LINE__` and `__FILE__`  
{{< figure src="/img/releasenotes/4.7/autocomplete_line_file.png" title="Autocomplete for `__LINE__` and `__FILE__`" width="600" >}}
* The Sigasi Studio update mechanism now uses `https` to access the download servers.

## Bug fixes

* Sensitivity list linting check: Enable signals in clock conditions (`rising_edge(clock) and enable = '1'`) are not required in the sensitivity list.
* [VHDL] Export CSV file: Packages were missing from the exported CSV if they were only used in the entity, and not in the architecture.
* UI bug with `` `ifndef`` guard: When there was more than one level of including a file that uses include guarding, the code is incorrectly marked as disabled.
* Fixed highlighting in light weight editors (for huge source files)

# Update or install?

You can download the Stand-alone version of the latest preview version from:

* <https://download.sigasi.com/preview/latest/com.sigasi.hdt.product-linux.gtk.x86_64.zip>
* <https://download.sigasi.com/preview/latest/com.sigasi.hdt.product-macosx.cocoa.x86_64.zip>
* <https://download.sigasi.com/preview/latest/com.sigasi.hdt.product-win32.win32.x86_64.zip>

You can also update from (configure via Preferences > Install/Update > Available Software Sites > Add...) :
  https://download.sigasi.com/preview/studio/

SHA Sums ([more info](/faq#how-can-i-check-a-sha-sum)) can be checked via <https://download.sigasi.com/preview/latest/sha1.txt>

If you can't open the Sigasi Studio app on an Apple computer, have a look at [this FAQ entry]({{< ref "faq#damaged-app-on-apple-computers" >}})

# Feedback

We welcome your feedback trough the usual channels or the comments below. Note that comments are cleared after each [official release](/releasenotes).

