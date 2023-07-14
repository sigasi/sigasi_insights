---
title: Sigasi 2.27
layout: page
pager: true
date: 2015-02-19
---

The Sigasi 2.27 release brings a better documentation generator, other improvements and bug fixes .


## Documentation improvements

Improvements on the [Documentation View](/manual/eclipse/views#documentation-view):

* Use tables
* Log (DocBook / PDF) documentation errors in the error console
* Allow export to (watermarked) PDF without a Sigasi Premium Doc license
* Save intermediate docbook result for custom PDF work flows.
![Improved documentation generation](/img/releasenotes/2.27/documentation.png "Improved documentation generation")

## Other new and noteworthy improvements

* The standalone version on Mac OS X now also includes a (Java 8) JRE
* Improve procedure to enable Talkback
* Only reuse running Sigasi if a filename is specified on the command line
* Updated included jre to 8u31 (requires a fresh download of the stand-alone version)

## Bugfixes

* ticket 3208 : Fixed Exceptions in Net Search
* ticket 3198 : All Sigasi plugins must be signed
* ticket 3215 : Linked modelsim.ini files are not copied correctly

## Download/Update

If you have Sigasi 2 installed, you can {{< update_sigasi >}}. You can also {{< download_latest >}}.
