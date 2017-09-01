---
title: Sigasi Studio Preview (3.6)
layout: page
pager: true
date: 2017-05-19
comments: true
---

For those users who want to get early access to the features and bugfixes of upcoming Sigasi Studio releases, we have set up an extra release channel, called "*Sigasi Preview*".

The Sigasi Preview release channel offers more frequent releases than the official releases. This page gives an introduction to the most important changes.

Although these preview releases are less rigorously tested than than the official releases, they are stable enough for daily use.

*If you run into any problems, please let us know*.

# Current preview release

## General updates
We have updated our integrated JRE to 8u144. We have also updated our [EULA](http://insights.sigasi.com/eula.html).

## Improved linting and Quick Fixes

Some of these checks were enabled in 3.3 but were not enabled, they are now!

- New [creator] checks
    - Quick fix when the VHDL version of the project is more recent than the version of the common libraries

- New [xl] checks
    - Flag illegal output/input port connections
    - Quick Fix when ports or generics are mapped in a different order than their declaration
    ![Association order](/releasenotes/3.3/association_order.png)

## Improved graphics
- We're introducing our GraphicsConfiguration Language which allows you to simplify your blockdiagrams and statemachines. Read more about it [here](using-graphics-configuration.html).
- We've reskinned our [dependencies view](http://insights.sigasi.com/manual/views.html#dependencies), it's visuals are now in line with blockdiagrams and statemachines  
The old view:
![Old dependencies view](/releasenotes/3.6/oldDependenciesView.png)  
The new view:
![Reskinned dependencies view](/releasenotes/3.6/newDependenciesView.png)  

## Rewrites
These are internal rewrites meant to keep our technical debt in check while making it easier to add new features and fix bugs.
As an end-user you shouldn't notice anything different (if you do please [contact us](mailto:info@sigasi.com)).

- We've rewritten the VHDL formatter's Preserve Newline function
- We've rewritten our librarymapper

## Bug fixes

### Formatting bug fixes:

- ticket 3891 : Formatter can't handle multiple replacements at the same offset
- ticket 3930 : Crashes in formatter with preserve newlines
- ticket 3932 : Comments before "when" get indented too much
- ticket 3961 : Formatting crashes when NBSP is used
- ticket 3968 : Formatting issue in case statement quick fix
- ticket 3979 : Report statement is not being formatted
- ticket 3980 : Package instantiation is formatted incorrectly

### SystemVerilog bug fixes:

- ticket 3927 : Improve double click behaviour inside preprocessor code
- ticket 3943 : Non UTF-8 file encoding can cause preprocessor offset issues
- ticket 3956 : Fixed grammar issue with delay control
- ticket 3957 : Grammar & linking support for import statements inside VerilogUnitHeader
- ticket 3959 : SystemVerilog parse error: import between module name and parameters

### Other bug fixes:

- ticket 3929 : Use project relative paths in CSV export for linked files
- ticket 3935 : No icons in LibrariesView
- ticket 3940 : Use all relative paths in CSV export
- ticket 3945 : Hierarchy: some ProcedureCallStatements are actually ComponentInstantiatons
- ticket 3946 : Attribute "subtype" & "base" should be available on all types
- ticket 3958 : Support VHDL 2008 constructs in State Machine View

# Update or install?

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

