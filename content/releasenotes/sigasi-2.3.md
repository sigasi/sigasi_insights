---
title: Sigasi 2.3
layout: page
pager: true
date: 2012-03-16
---

Sigasi 2.3 brings you the **Hierarchy View**, which makes it possible to
inspect and navigate your design hierarchy.

We have also added two other things that many of you have asked for:

-   **Unused declarations** *check* and *quickfix*
-   Specify **line number** on command line

Hierarchy View
--------------


We have written a **VHDL elaboration engine** for Sigasi Pro. This allows
us to also give you feedback about the **structure** of your design. The
**Hierarchy View** is the first result of this engine. This view shows
the VHDL design hierarchy below the selected top level object.

![Hierarchy View](/img/releasenotes/2.3/hierarchyviewconf.png "Hierarchy View")

The hierarchy takes **generics** and **configurations** into account
when computing the design hierarchy and has an interpreter to calculate
expressions in *generic maps* and *generate* conditions. This
interpreter can not handle all expressions yet. Today, it covers basic
arithmetic and string operations. This is enough to deal with most,
common use cases.

"[Hierarchy View](/screencasts/hierarchy_view)" is a short screencast video that shows the **Hierarchy View** in action.

**Note** that if you perform an update, the **Hierarchy View** will not open by default. The easiest way to enable it is to click **Window \> Reset Perspective…**.

Find and remove unused declarations
-----------------------------------

Sigasi now checks your VHDL files for unused signals, constants and
variables. We also implemented a **Quickfix** which can automatically
resolve the warning by removing the unused declaration. To trigger a
quickfix, click the problem marker (annotated with a lightbulb icon) and
select the quickfix. You can also trigger the quickfix by putting your
cursor on the unused declaration in the editor and pressing **Ctrl+F1**.

It is confusing to read a design that contains ‘dead code’. This new
feature will make it easier to detect and remove it.

{{< figure alt="Unused declaration (with QuickFix)" src="/img/releasenotes/2.3/quickfixunuseddeclaration.png" title="Unused declaration (with QuickFix)" >}}

Sigasi command line improvements
--------------------------------

You can now also specify the line number you want Sigasi to navigate to
when you open files on the command line. If you specify a new file on
the command line, Sigasi will now create it for you.

This feature makes enables you to configure Sigasi as default editor for
other EDA tools ([Opening Files](/manual/opening)).

![You can now configure the line number in other tools (e.g. Quartus)](/img/releasenotes/2.3/quartuscommandlineannotated.png "You can now configure the line number in other tools (e.g. Quartus)")

Other new and noteworthy improvements
-------------------------------------

-   We significantly improved the **Autocomplete** feature. It is now a lot **faster** and we resolved some cases where we offered irrelevant suggestions.
-   We have updated the minimum requirements for the **Sigasi Eclipse Plugin**: you now need at least **Eclipse 3.6** (Helios) and **Java 1.6**.
-   **Mousefeed**, the keyboard shortcut popups that help you remember
    keyboard shortcuts for the actions you use most often, is enabled
    again. [Learn keyboard shortcuts with Mousefeed](/tech/mousefeed)
    (Eclipse plugin users must [install Mousefeed](http://marketplace.eclipse.org/content/mousefeed) themselves.)  
    ![MouseFeed popup](/img/releasenotes/2.3/mousefeed.png "MouseFeed popup")
-   You can now revert your Sigasi installation to earlier versions: In
    **Help \> About \> Installation Details \> Installation History**,
    select the version you want to revert to and click the **Revert**
    button.
-   If you use VHDL-2002 or VHDL-2008 constructs, you can use quickfix
    to easily switch to the appropriate VHDL version mode.
-   **Configurations**: improved in Outline View and autocomplete
    template.
-   Improved startup time of Sigasi.

*Because the internal cache format has changed in this release, your
projects will be cleaned automatically after this update.*

### Bugfixes

-   ticket 1931 : Mark error for signal declaration in process
-   ticket 1716 : Exception when deleting projects
-   ticket 1887 : Support implicitly declared IO and string functions
-   ticket 1966 : Cannot open some files in project anymore
-   several issues reported via the automatic bugreporter (thanks)


Sigasi 2.3.1
============

Sigasi 2.3.1 brings a quick-fix for unused declarations. If your code contains undeclared variables or signals, Sigasi can now **automatically declare them for you**.
We also further improved the **Hierarchy View**, added the official **VHDL 2008 libraries** of IEEE and implemented several improvements and bug fixes.

QuickFix: declare signal/variable
---------------------------------

Sigasi now contains a quick fix for undeclared identifiers. If you assign a
value to an undeclared signal, Sigasi will present a quick fix to
declare the signal for you. With a heuristic Sigasi guesses the datatype
and automatically adds the declaration to the correct declarative part.
We reused our template mechanism for this, so you can easily make
changes. Hit tab to switch to the different fields and press enter when
you are ready. The cursor will then automatically jump to its original
position, the location where the signal is used. This also works for undeclared variables.

![Quickfix: Declare VHDL Signal](/img/releasenotes/2.3/declare_signal.png "Quickfix: Declare VHDL Signal")

An undeclared identifier could also be a typo. If the undeclared
variable closely matches an existing declaration, Sigasi will also offer
a second, alternative quick fix to simply fix the typo.

VHDL 2008 IEEE libraries
------------------------

We can now ship the standard VHDL 2008 libraries with Sigasi. This
includes both the `STD` and the `IEEE` libraries. Thanks IEEE!

To use the VHDL 2008 libraries in your project, follow this procedure:

-   Make sure you are in VHDL 2008 mode ( **Window \> Preferences \> VHDL \> VHDL version : 2008** )
-   Right click your project and select **Library Mapping \> Reset Common Libraries**

Hierarchy
---------

Thanks to your feedback we further improved the Hierarchy View:

![Hierarchy](/img/releasenotes/2.3/hierarchyview_0.png "Hierarchy")

-   In the context menu we offer the option to navigate to either the
    (instantiation) statement or to the corresponding instantiated
    architecture declaration.
-   Hierarchy View shows the instantiation label.
-   Fixed a few issues.

Other new and noteworthy improvements
-------------------------------------

-   Improve autocomplete for component instantiations: you can now also
    trigger autocomplete if you already a portion of the component’s
    name (ticket 1960).
-   We slightly changed the library mapping interface. You can now map
    the entire project to a new library without breaking the **Common
    Libraries** folder. You can still unmap (or remove) the libraries
    inside the common libraries if you want to use your own version.
-   We added the **Find references** action to the **Search** menu for
    your convenience.
-   We check the correctness of **end clauses**  more strictly
    ![End clause](/img/releasenotes/2.3/endclause.png "End clause")

*After you update, all caches will be cleared. Your initial build will take a longer than usual.*

### Bugfixes

-   ticket 1959 : Sort instantiation autocomplete alphabeticaly
-   ticket 1987 : Formating issue in aggregates
-   ticket 2002 : \[Linux\] Save button disabled if new VHDL file wizard is used with a template
-   ticket 2006 : Formating issue in vector assignments
-   ticket 1993 : Fixed error when starting Sigasi in Eclipse 3.6

Download/Update
---------------

If you have Sigasi 2 installed, you can {{< update_sigasi >}}. You can also {{< download_latest >}}.
