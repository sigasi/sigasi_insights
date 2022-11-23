---
title: Sigasi Studio Preview (5.0)
layout: page
pager: true
date: 2022-09-16
lastmod: 2022-11-23
comments: true
---

For those users who want to get early access to the features and bugfixes of upcoming Sigasi Studio releases, we have set up an extra release channel, called `Sigasi Preview`.

The Sigasi Preview release channel offers more frequent releases than the official releases. This page gives an introduction to the most important changes.

Although these preview releases are less rigorously tested than the official releases, they are stable enough for daily use.

**If you run into any problems, [please let us know](https://www.sigasi.com/support/)**.

# Current preview release

We're proud to announce the initial preview of the all-new Sigasi Studio 5.0 release.
In this release, we introduce a completely new architecture for our (System)Verilog engine.
This engine was rewritten from scratch, allowing us to focus on both performance (with high parallelism) _and_ accuracy.
While this release brings many improvements toward accuracy and language support for Verilog and SystemVerilog, worry not, this is just the tip of the iceberg.
The new engine empowers us to quickly offer new and exciting features in the upcoming 5.* releases.

# New (System)Verilog engine
## Language features

* The use of SV `interface`s has become much more powerful and accurate. For example, we can now infer the actual properties of a `generic` interface that was not explicitly defined by the user. We can also deal nicely with `modport`s inside interfaces
* Missing declarations are now shown at type-time
* We've improved our focus on the root cause of errors. Sometimes an error can create a sequence of subsequent errors that are irrelevant. These are now much less prevalent
* Full support for hierarchical references e.g. `a.b.c`
* Good support for `bind` directives
* Better navigation in ambiguous designs. When identifiers refer to multiple potential targets, we will offer you to navigate to any of them. This is useful in the context of broken/misconfigured designs or designs with multiple top levels

## Improved content assist

* We only provide suggestions that are truly relevant in a given context
* New prioritization mechanism that shows more likely suggestions at the top of the suggestion list
* Additional support for Verilog `config` declarations
* Better support for enumeration type ranges i.e. `name[N]`
* Add `$unit`-scope support

# Deprecations

* Support for Mac has been dropped. As a workaround, the [Sigasi plugin](https://marketplace.eclipse.org/content/sigasi-studio) can still be installed on an Eclipse on Mac.

# Update or install?

You can download the stand-alone version of the latest preview from:

* <https://download.sigasi.com/preview/latest/com.sigasi.hdt.product-linux.gtk.x86_64.zip>
* <https://download.sigasi.com/preview/latest/com.sigasi.hdt.product-win32.win32.x86_64.zip>

You can also update automatically when setting **Preferences > Install/Update > Available Software Sites > Add...** :
`https://download.sigasi.com/preview/studio/`

SHA sums ([more info]({{< ref "/faq.md#how-can-i-check-a-sha-sum" >}})) can be checked via <https://download.sigasi.com/preview/latest/sigasistudio-sha1.txt>.

# System requirements

* Sigasi Studio standalone is supported on:
  * Windows: Windows 10 (64-bit) or newer
  * Linux: RedHat Enterprise Linux RHEL 7.7 (64-bit) or newer
    * Sigasi Studio depends on `libXss.so` which can be obtained by installing `libXScrnSaver`
  * More information on supported OSes can be found [on the Eclipse website](https://www.eclipse.org/projects/project-plan.php?planurl=http://www.eclipse.org/eclipse/development/plans/eclipse_project_plan_4_18.xml#target_environments)
* Sigasi Studio as a plugin in your Eclipse installation:
  * Eclipse IDE 2021-03 up to and including Eclipse IDE 2022-03
  * Java JRE 11 or 17

We recommend at least **4GB of memory** available for Sigasi Studio,
and you need **about 1GB** of free disk space.

# Feedback

We welcome your feedback through the usual channels or the comments below. Note that comments are cleared after each [official release](/releasenotes).

