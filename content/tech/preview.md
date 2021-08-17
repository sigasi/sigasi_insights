---
title: Sigasi Studio Preview (4.13)
layout: page
pager: true
date: 2021-08-18
comments: true
---

For those users who want to get early access to the features and bugfixes of upcoming Sigasi Studio releases, we have set up an extra release channel, called "_Sigasi Preview_".

The Sigasi Preview release channel offers more frequent releases than the official releases. This page gives an introduction to the most important changes.

Although these preview releases are less rigorously tested than the official releases, they are stable enough for daily use.

**If you run into any problems, [please let us know](https://www.sigasi.com/support/)**.

# Current preview release

Since the {{< page "releasenotes/sigasi-4.12.md" >}} release, the following changes have been made.

# Deprecations

* ALINT support has been removed in favor of ALINT-PRO

# Improvements

* Improved toolchains' handling of special characters in paths
* Brought ALINT's icon size in line with other icons
* Truncated overly long linting messages such that possible quickfixes are always visible
* Renamed the `XL Tutorial` to `XPRT Tutorial` as it demonstrates XPRT features
* We now by default configure an `https` instead of an `http` update site
* Removed `-XVerify` from the the default `sigasi.ini`
* Renamed `Altera Quartus II` to `Intel Quartus II`
  {{< figure src="/img/releasenotes/4.13/IntelQuartus.png" title="Intel Quartus II preference page" width="500">}}
* Improved general user experience and error feedback on our [Talkback]({{< ref "manual/talkback.md" >}}) page
* Added decorations to the [Hierarchy View]({{< ref "manual/views.md#hierarchy-view" >}})'s nodes
  {{< figure src="/img/releasenotes/4.13/HierarchyViewDecorations.png" title="Decorations in hierarchy view" width="300">}}
* By default, pressing backspace in the white space at the beginning of a line now removes a level of indentation instead of 1 character
* When a region is selected and a paired character (like `(`, `"` or `[`) is pressed, the selected region is enclosed in the pair of characters
* When a multi-line region is selected and `"` is pressed, the selected region will be transformed into a multi-line string
* Improved auto deindentation
* Made sure that generated files do not contain characters that are illegal for the given filesystem or OS
* **[VHDL]** Added folding for record types, generics and ports
  {{< figure src="/img/releasenotes/4.13/RecordFolding.png" title="Folding of record types" width="500">}}
  {{< figure src="/img/releasenotes/4.13/GenericPortFolding.png" title="Folding of generics and ports" width="500">}}
* **[VHDL]** Added formatting for signature filter path element
* **[VHDL]** Added package bodies to the [Dependencies View]({{< ref "manual/views.md#dependencies-view" >}})
* **[Verilog]** Added support for `.vp` and `.svp` extensions
* **[Verilog]** Improved when the `Open Class Hierarchy` context menu is available
* **[Verilog]** Added the keybind (F4) for `Open Class Hierarchy` in the context menu
* **[Verilog]** Added shortcut for `Open Class Hierarchy` when hovering over classes
  {{< figure src="/img/releasenotes/4.13/ClassHierarchyInHover.png" title="Open Class Hierarchy in hover" width="500">}}
* **[Verilog]** Improved auto-insertion of ending parenthesis
* **[Verilog]** Improved the information in the hover of VHDL entity instantiations in Verilog
* **[Verilog]** Improved covergroup's `sample` method support
* **[Verilog]** Named `always` blocks are now shown in the [Outline View]({{< ref "manual/views.md#outline-view" >}}) and [Hierarchy View]({{< ref "manual/views.md#hierarchy-view" >}})
  {{< figure src="/img/releasenotes/4.13/AlwaysBlockHierarchyOutline.png" title="Named always blocks in hierarchy and outline view" width="500">}}
* **[Verilog]** Lexicographically sorted classes in [Documentation Generation]({{< ref "manual/documentation.md" >}})'s table of contents
* **[VUnit]** Added total time to test suites in the [VUnit View]({{< ref "manual/views.md#vunit-view" >}})
  {{< figure src="/img/releasenotes/4.13/VUnitSuiteDuration.png" title="Total duration of VUnit suites" width="500">}}
* **[VUnit]** The VUnit tests that are being run, are now already shown in the [VUnit View]({{< ref "manual/views.md#vunit-view" >}}) before they've finished

# Bug fixes

* Fixed resource leak in autocompletes
* Made sure color customization in the [Graphics Configurations]({{< ref "manual/graphics.md" >}}) does not affect labels
* Made sure FSM headers are not overflown by their text
* Made sure that user defined auto-complete templates with `Anywhere` context show up without a prefix
* **[VHDL]** Made sure the `Sort associations` quickfix can always be applied when it's shown
* **[VHDL]** Made sure to always show VHDL versions in chronological order where applicable
* **[VHDL]** Fixed an error on hover when using negative exponents
* **[VHDL]** Fixed false positive error on decorators for overloaded entity tags
* **[VHDL]** Fixed formatting for procedures with generics
* **[VHDL]** Extended identifiers that have the same name as a keyword are now colored as identifiers, no longer as keywords
* **[Verilog]** Fixed formatting for files containing incomplete macro invocations (a lonely backtick)
* **[Verilog]** Fixed false positive error when using tagged unions inside ternary conditional expressions
* **[Verilog]** Made sure the [Preprocessor View]({{< ref "manual/views.md#preprocessor-view" >}}) also works when opening previous versions of a file through version control
* **[Verilog]** Fixed a rare error in verilog autocompletes
* **[Verilog]** Added an icon for UDP in [Open Design Unit]({{< ref "manual/editor.md#open-design-unit" >}})
  {{< figure src="/img/releasenotes/4.13/UdpIcon.png" title="UDP icon in Open Design Unit" width="500">}}
* **[Verilog]** Fixed false positive error for include path auto-configuration when including files from a folder
* **[Verilog]** Fixed overwrite mode (hold `Ctrl` while selecting an entry from the context menu) for autocomplete for macros
* **[Verilog]** Fixed false positive error for parameterized range of UDP instances with delay
* **[Verilog]** Fixed false positive error for assignment patterns
* **[Verilog]** Fixed false positive warning for attributed port connections
* **[Verilog]** Fixed false positive warning for targets of disable statements
* **[Verilog]** Fixed export of symbols in packages


# Update or install?

You can download the stand-alone version of the latest preview from:

- <https://download.sigasi.com/preview/latest/com.sigasi.hdt.product-linux.gtk.x86_64.zip>
- <https://download.sigasi.com/preview/latest/com.sigasi.hdt.product-macosx.cocoa.x86_64.zip>
- <https://download.sigasi.com/preview/latest/com.sigasi.hdt.product-win32.win32.x86_64.zip>

You can also update automatically when setting **Preferences > Install/Update > Available Software Sites > Add...** :
`https://download.sigasi.com/preview/studio/`

SHA sums ([more info]({{< ref "/faq.md#how-can-i-check-a-sha-sum" >}})) can be checked via <https://download.sigasi.com/preview/latest/sha1.txt>.

# System requirements

- Sigasi Studio standalone is supported on:
  - Windows: Windows 10 (64 bit) or newer
  - macOS 10.15 Catalina or newer
  - Linux: RedHat Enterprise Linux RHEL 7.7 (64 bit) or newer
    - Sigasi Studio depends on `libXss.so` which can be obtained by installing `libXScrnSaver`
  - More information on supported OSes can be found [on the Eclipse website](https://www.eclipse.org/projects/project-plan.php?planurl=http://www.eclipse.org/eclipse/development/plans/eclipse_project_plan_4_18.xml#target_environments)
- Sigasi Studio as plugin in your own Eclipse installation:
  - Eclipse 4.8 _Photon_ up to and including Eclipse IDE 2021-03
  - Java JRE 11 or higher

We recommend at least **4GB of memory** available for Sigasi Studio,
and you need **about 300MB** of free disk space.

# Feedback

We welcome your feedback through the usual channels or the comments below. Note that comments are cleared after each [official release](/releasenotes).
