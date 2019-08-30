---
title: Sigasi 2.21
layout: page
pager: true
date: 2014-04-04 
---

The Sigasi 2.21 brings a few long anticipated features to both Sigasi
Pro and Sigasi Premium such as a live **block diagram viewer**, **smart
indentation**, Sigasi specific **Path Variables**, **faster unmapping**
and much more.

Block Diagram Viewer (Premium)
------------------------------

This first version of a **Block Diagram viewer** displays a graphical
view of all architectures and its instantiations in your current VHDL
editor. This viewer automatically updates while you are editing your
code and gives a convenient way to visually inspect and navigate your
code, even when your code is still unfinished or broken.
<span class="inline inline-center">

<iframe src="//fast.wistia.net/embed/iframe/pz6zwyq308" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="640" height="278">
</iframe>
</span>

The Block Diagram viewer is automatically installed in the Sigasi standalone version.

Smart Indent
------------

Sigasi 2.21 now adjusts the indentation of current and next line when
you press **enter**. You can enable/disable this feature via **Window \>
Preferences \> Sigasi \> VHDL** by toggling the **“Enter adjusts
indentation on current and next line”**
setting.<span class="inline inline-center">

<video width="320" height="240" autoplay="autoplay" loop="true">
<source src="/img/releasenotes/2.21/smart_indent.mp4" type="video/mp4" />
Your browser does not support the video tag.
</video>
</span>

Path variables for toolchains and environment variables
-------------------------------------------------------

Sigasi 2.21 introduces **Path Variables** for **toolchain installation
paths** and **Environment variables**. This is a convenient way to avoid
absolute paths in your project files. The library quick fixes have been
updated to use these variables. (More info: [How to avoid absolute (library) paths in your Sigasi Project files](/tech/how-avoid-absolute-library-paths-your-sigasi-project-files))

![Path variables for toolchains and environment variables](/img/releasenotes/2.21/pathvariablestoolchain.png "Path variables for toolchains and environment variables")

Other new and noteworthy improvements
-------------------------------------

-   **Unmapping** files or folders in your design now triggers an
    **incremental build** instead of a clean build. This significantly
    reduces the time you need setup up (big) legacy projects.
-   **Semantic highlighting** for **attributes**
    ![Semantic highlighting for attributes](/img/releasenotes/2.21/attributesemantichighlighting.png "Semantic highlighting for attributes")
-   Add an info maker to **encrypted files**
-   Warning for **duplicates in the sensitivity list**
	![Duplicates in the sensitivity list](/img/releasenotes/2.21/duplicate_in_sensitivity_list.png "Duplicates in the sensitivity list")
-   Quickfix for **modelsim\_lib** Modelsim VHDL library
    ![Quickfix for modelsim_lib](/img/releasenotes/2.21/modelsim_lib_quickfix.png "Quickfix for modelsim_lib")
-   Flag errors when declarations are in incorrect order
	![Declarations are in incorrect order](/img/releasenotes/2.21/orderofdeclarations.png "Declarations are in incorrect order")
-   Check that the port and generic maps of instantiations are formally correct
-   Check that the parameter lists of subprogram invocations is formally correct
-   Better hover for for loop iterator
-   Formatter should respect newlines in enum declarations
    ![Formatter should respect newlines](/img/releasenotes/2.21/formatenums.png "Formatter should respect newlines")


orderofdeclarations.png

Bugfixes
--------

-   ticket 2364 : Scoping issue when ports and types have the same name
-   ticket 2484 : Do not allow recursive declarations
-   ticket 2726 : Scoping issue when implicit functions are called with
    fully qualified name
-   ticket 2756 : Scoping issue when alias has same name
-   ticket 2758 : Scoping issue when reusing a constant name for a new
    constant
-   ticket 2768 : Windows paths in SIGASI\_LM\_LICENSE\_FILE do not work
-   ticket 2800 : Null pointer exception in scoper
-   ticket 2838 : Quartus integration should never delete files from
    disk (for projects in the workspace folder)
-   ticket 2802 : Modelsim should not overwrite binaries for external
    libraries (when MODELSIM is set)
-   ticket 2816 : Circular dependency detection is wrong for deeper
    hierarchies
-   ticket 2821 : Unexpected Quickfix for undeclared signal between
    parenthesis

Download/Update
---------------

If you have Sigasi 2 installed, you can {{< update_sigasi >}}. You can also {{< download_latest >}}.
