---
title: Sigasi 2.12
layout: page
pager: true
date: 2013-02-20
---

Sigasi 2.12 brings a **Libraries View** to Sigasi and external
compiler/simulator support for **Xilinx ISE Simulator (ISim)**.

Libraries View
--------------

Sigasi now contains a **Libraries View**. In the Libraries view you can
see a tree of all *projects, libraries and design units*. The Libraries
View enables you to quickly see how your *design units* are mapped.

![Libraries View](/img/releasenotes/2.12/librariesview.png "Libraries View")

The easiest way to enable the Libraries View is via **Window &gt; Reset
Perspective…** You can find the view in a tab behind the project
explorer.

ISE Simulator (ISim)
--------------------

We added support for Xilinx ISim as external compiler/simulator for
Sigasi. So in addition to the existing `vcom/vsim` support, you can now
select ISim to compile your projects and start simulations.

Note that we changed the preference pages to configure your preferred
external compiler. We merged the **External compilers** preference page
with the **Toolchains** page, so that all external toolchain settings
can be configured on the same page. The Isim path is automatically
derived from the Xilinx ISE preference.

![isim](/img/releasenotes/2.12/toolchainspreferencepage.png "isim")

Other New and Noteworthy Improvements
-------------------------------------

-   ticket 2384 : Add Japanese language pack to stand alone version
    of Sigasi. \[You can try this with `sigasi.exe -nl ja`\]
-   ticket 2373 : Improve Makefile UI (allow to select project in
    the wizard)
-   ticket 2375 : Separate autocomplete templates for process with
    *asynchronous* and *synchronous* reset.
-   ticket 2378 : Enable VHDL highlighting in compare view by default

![Japanese](/img/releasenotes/2.12/japanseworkspace.png "Japanese")

Bugfixes
--------

-   ticket 2329 : External compiler and project dependencies: call vlib
    for all libraries
-   ticket 2334 : Corrected scoping of block statements
-   ticket 2374 : Properly display spaces in the ‘Set Toplevel’ dialog
-   ticket 2388 : Comment in hover should include first character of
    comment, even it is not a space.
-   ticket 2391 : Simulate with Modelsim vsim does not work when top
    level is in a different library than work
-   ticket 2397 : Make sure all vhdl markers are cleared during a clean
    build
-   ticket 2405 : Do not empty the library view during a clean build
-   ticket 2411 : Do not throw errors when user types an incorrect use
    clause

Download/Update
---------------

If you have Sigasi 2 installed, you can {{< update_sigasi >}}. You can also {{< download_latest >}}.
