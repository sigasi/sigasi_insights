---
title: Sigasi Studio Preview (3.4)
layout: page
pager: true
date: 2016-12-16
comments: true
---

For those users who want to get early access to the features and bugfixes of upcoming Sigasi Studio releases, we have setup an extra release channel, called "_Sigasi Preview_".

The Sigasi Preview release channel offers more frequent releases than the official releases. This page gives an introduction to the most important changes.

Although these preview release are less rigorously tested than than the official releases, they are stable enough for daily use.
 
_If you run into any problems, please let us know_.

## SystemVerilog improvements

TODO: add details and a video of a demo.

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

