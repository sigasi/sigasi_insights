---
title: Sigasi 2.17
layout: page
pager: true
date: 2013-09-30
---

The Sigasi 2.17 release brings support for generic packages (VHDL-2008),
autocomplete for type conversions and other new and noteworthy
improvements and fixes.

Generic Packages \[VHDL 2008]
----------------------------

Sigasi 2.17 supports generic packages. Both *generic constants* and
*generic packages* are supported as generic items. Generic Types are not
supported yet.\
This will allow you to use the standard **Fixed Point** (`fixed_pkg`)
and **Floating Point** `float_pkg` packages from the IEEE library.

![Generic Packages (VHDL 2008)](/img/releasenotes/2.17/genericpackages.png "Generic Packages (VHDL 2008)")

Autocompletions for type conversions
------------------------------------

In VHDL design you need to do a lot of type conversions (Think:
std\_logic\_vector ~~\> signed~~\> integer -\> …). Sigasi’s autocomplete
functionality can now help you to type these conversions faster and more
accurate. Put a dot (`.`) after the element you want to convert, and the
autocomplete suggestions will appear. The conversion functions have
descriptions like “convert type” and “convert to …”.

Do not forget to add a use clause for the `numeric_std` package first.

[See it in action](https://plus.google.com/u/0/photos/107578452885283714207/albums/5923040615243428593)

Library Mapping File is now mandatory
-------------------------------------

Sigasi store the library mapping information for each project in the
`.library_mapping.xml` file in the root of your project. Before the 2.17
release, Sigasi loaded the default mapping (`work`) if this file was not
available. Starting with release 2.17, Sigasi assumes all files are
**not mapped** if the library mapping file is missing. In this case,
Sigasi will also add one error marker to the project with the message:
“This VHDL project can not be built since the library mapping
information is missing”.

To add a default .library\_mapping.xml file to your project, you can
right-click your project and select **Library Mapping \> Reset Library
Mapping**.

Other new and noteworthy improvements
-------------------------------------

-   Check for duplicate enumeration literals
    ![Duplicate enumeration literals](/img/releasenotes/2.17/duplicateenumerationliteral.png "Duplicate enumeration literals")
-   Check for correct use of underscore in VHDL identifiers
    ![Illegal identifier](/img/releasenotes/2.17/illegal_identifier.png "Illegal identifier")
-   Mark the current library in the library mapper context menu
	![Current library](/img/releasenotes/2.17/betterlibrarymappingui.png "Current library")
-   Double-clicking in the Generics View opens the corresponding
    generic/constant declaration
-   Quickfix for unused types
-   Sigasi now runs on version 2.4.3 of the Xtext framework

Bugfixes
--------

-   ticket 2595 : Resolved performance issue in the Libraries View
-   ticket 2627 : \[VHDL 2008] Support record access of hierarchical
    signals
-   ticket 2641 : log2 in hierarchy evaluation should round up
-   ticket 2653 : ModelSim integration: Added support for warnings with
    a warning category
-   ticket 2671/2664 : Error launching ISim simulation
-   ticket 2669 : Sigasi crashes when FlexLM connection is lost
-   ticket 2656 : Aggregate linting check: char literals are case
    sensitive

Download/Update
---------------

If you have Sigasi 2 installed, you can {{< update_sigasi >}}. You can also {{< download_latest >}}.
