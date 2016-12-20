---
title: Sigasi Studio Preview (3.4)
layout: page
pager: true
date: 2016-12-16
comments: true
---

For those users who want to get early access to the features and bugfixes of upcoming Sigasi Studio releases, we have set up an extra release channel, called "_Sigasi Preview_".

The Sigasi Preview release channel offers more frequent releases than the official releases. This page gives an introduction to the most important changes.

Although these preview release are less rigorously tested than than the official releases, they are stable enough for daily use.
 
_If you run into any problems, please let us know_.

## SystemVerilog improvements

We now process all SystemVerilog in a predictable order and keep track of all preprocessor state. This avoids problems with the ``` `ifndef ... `define  ... ``` pattern. This also allows us to offer **full support for include files**. You can now edit include files _as if they were included in a Verilog file_. This requires no extra configuration, except for [setting your include paths][/manual/editor#verilog-preprocessingmacros].

<div class="wistia_responsive_padding" style="padding:118.13% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="//fast.wistia.net/embed/iframe/wu2qqrjhu0?videoFoam=true" title="Wistia video player" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div>
<script src="//fast.wistia.net/assets/external/E-v1.js" async></script>

## New VHDL formatter

For Sigasi Studio 3.4 we did a rewrite of the VHDL formatter. This fixed a lot of reported formatting issues.
In addition, we also implemented a way to disable the formatter for custom sections of your VHDL files.

To disable the formatter for a section by enclosing it between `-- @formatter:off` and a `-- @formatter:on` comment.
E.g.:
```vhdl
-- @formatter:off
      -- skipped region
-- @formatter:oni
```

In general the new formatter should format your code the same way as earlier versions of Sigasi Studio. Let us know if you see unexpected changes.

### Extras

We also added a **Correct Indentation** action. This action only modifies the indentation of your (selected) VHDL code. You can run via the context menu in the editor and **Source > Correct Indentation** or via **Ctrl+I**

## Update or install?

You can download the Stand-alone version of the latest preview version from:

* <http://download.sigasi.com/preview/latest/com.sigasi.hdt.product-linux.gtk.x86_64.zip>
* <http://download.sigasi.com/preview/latest/com.sigasi.hdt.product-linux.gtk.x86.zip>
* <http://download.sigasi.com/preview/latest/com.sigasi.hdt.product-macosx.cocoa.x86_64.zip>
* <http://download.sigasi.com/preview/latest/com.sigasi.hdt.product-win32.win32.x86_64.zip>
* <http://download.sigasi.com/preview/latest/com.sigasi.hdt.product-win32.win32.x86.zip>

You can also update from (configure via Preferences > Install/Update > Available Software Sites > Add...) :
  http://download.sigasi.com/preview/studio/

SHA Sums ([more info][/faq#how-can-i-check-a-sha-sum]) can be checked via <http://download.sigasi.com/preview/latest/sha1.txt>

## Feedback

We welcome your feedback trough the usual channels or the comments below. Note that comments are cleared after each [official release][/releasenotes].

