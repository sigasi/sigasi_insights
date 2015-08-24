---
title: Sigasi Premium Features
layout: page 
pager: true
---

Features in this chapter are only available to [Sigasi Premium](http://www.sigasi.com/sigasi-premium) users.
Please visit the [website](http://www.sigasi.com/sigasi-premium) to learn more and to request a trial license.

**Note:** The easiest way to explore the Premium features is to open the
*Premium Tutorial Project* (**New \> Example… \> Examples \> VHDL examples \> Tutorial for Sigasi Premium**)

Aldec ALINT integration
=======================

If you have a Sigasi Premium license you can configure Sigasi to use
Aldec ALINT as [external
compiler](/manual/external-compiler-integration#integration-vcom-setup).
Each time you save a VHDL file, ALINT will perform the compile-time lint
checks.

Documentation view
==================

The **Documentation view** gives you a live preview of the automatic
documentation Sigasi can generate for your project.

![](/images/screenshots/documentationView.png)

Export
------

You can export documentation for the entire project to **pdf** by
clicking the save icon or via the **Export…** menu.
Since Sigasi 2.27 this export also saves the DocBook source code, if you
have a Premium Doc license. This enables you to customize the pdf
generation flow to your liking.

All errors are logged to the console view.

Users without a Premium Doc License can also export a (watermarked) pdf.

Formatting options
==================

You can set formatting options in the Formatter preference page:
**Window \> Preferences \> Sigasi \> VHDL \> Formatting**

-   **Preserve newlines**: this option configures the formatter to not
    add or remove newlines in your code
-   **Upper case keywords**: when this option is enabled the formatter
    will convert all keywords to uppercase. When this option is **not**
    enabled, uppercase keywords will be converted to lowercase. (Without
    a premium license, keywords are not changed by the formatter).
-   **Alignment column for trailing comments**: this setting configures
    the column Sigasi uses to align trailing comments (default is column
    40)

Mixed language projects
=======================

You can create mixed language projects by adding both **VHDL** and
**Verilog** support to your project: right click your project and select
**Configure \> Add VHDL support** and **Configure \> Add Verilog
support**

Features
--------

In mixed language projects you can **navigate** from instantiation
statements to the matching entity or module. This works for both VHDL
entity instantiations in Verilog code and Verilog module instantiations
in VHDL code. You can also open the declaration of ports and
generics/parameters in mixed instantiations.

Other supported features:

* **Find references** for entity names, modules, ports, generics and parameters.
* **Autocomplete** Verilog module instantiations in VHDL code.
* **Error reporting** of incorrect entity names, modules, ports, generics and parameters in instantiations in VHDL code.
* VHDL **renames** are refused if they need changes in Verilog code.

<!--
<a href="//fast.wistia.net/embed/iframe/526cjmykbv?popover=true" class="wistia-popover[height=500,playerColor=7b796a,width=800]"><img src="https://embed-ssl.wistia.com/deliveries/ebc10b260cf82fd861c64f335773a79c2a018d95.jpg?image_play_button=true&image_play_button_color=7b796ae0&image_crop_resized=200x125" alt="" /></a>

<script charset="ISO-8859-1" src="//fast.wistia.com/assets/external/popover-v1.js">
</script>
-->

Naming conventions Validation
=============================

On the **Navigation conventions** preference page (**Window \>
Preferences \> Sigasi \> VHDL \> Naming conventions**) you can configure
patterns to check correct naming of your VHDL identifiers. Patterns are
configured with [Java regex
syntax](http://www.vogella.com/tutorials/JavaRegularExpressions/article.html)

Only name with a specified pattern are checked. Empty patterns are
omitted.

**Example:** to enforce a style where all variables have a `_v` suffix,
you whould specify `.*_v` pattern in the **Variable name** field.

Net Search
==========

With **Net search**, you can you to find *loads* and *drivers* of a net.
A *net* is defined as a signal or port and all other signals and ports
that are directly connected to it. The *loads* are where you read the
value of the net and the drivers are where you write to this net.

To find the entire net of a signal or port, place your cursor on the
identifier and right-click. Now select **Find Net**. Alternatively, you
can press **CTRL+SHIFT+H**. 

The **Net Search** view will appear. For big designs, it might take a
while before the results appear.

![](/images/screenshots/netSearch.png)

From the **Net Search** view, you can navigate to the VHDL code by
double-clicking the search results.

The State Machine Viewer
========================

The **State Machine Viewer** displays a graphical (bubble diagram) view of all state machines in your current VHDL editor. This viewer automatically updates while you are editing your code and gives a convenient way to visually inspect and navigate your code, even when your code is still unfinished or broken.

![](/images/screenshots/stateMachineViewer.png)

You can open the state machine view by right clicking in the editor and selecting **Show In > State Machines**. Alternatively you can open the view via **Window > View > Other... > VHDL > State Machines**.

If you have more that one state machine in your file, you switch between machines by clicking the tabs. Each tab is named after the signal/variable that represents the state machine's state.

If you have documented your state transitions (i.e. the assignments), the comments will be added as text to the transitions in the view. 

You can also **double-click nodes** or **transitions** to navigate to the corresponding VHDL code.

With the ![](/images/icons/font.png) button, you can toggle the display of edge labels. These labels show the code comments of the transition statements.
You also have to option to **Zoom In**, **Zoom Out** or **Zoom to Fit**.

You can export the state machine view to an image with the save ![](/images/icons/save.gif) button. Both **SVG** and **PNG** are supported. Choose a the \*.svg filename for SVG export or a \*.png filename for PNG export.

You can watch a screencast at [http://www.sigasi.com/screencast/vhdl-state-machine-diagram](http://www.sigasi.com/screencast/vhdl-state-machine-diagram)

The Block Diagram Viewer
========================

The **Block Diagram Viewer** displays a graphical (block diagram) view
of all architectures and its instantiations in your current VHDL editor.
This viewer automatically updates while you are editing your code and
gives a convenient way to visually inspect and navigate your code, even
when your code is still unfinished or broken.

![](/images/screenshots/block_diagram.png)

You can open the block diagram view by right clicking in the editor and
selecting **Show In \> Block Diagram**. Alternatively you can open the
view via **Window \> View \> Other… \> VHDL \> Block Diagram**.

You can also **double click blocks**, **ports** or **wires** to navigate
to the corresponding VHDL code. If you want to *go into* a block, you
have to **select** it, right click and click **open entity
declaration**.

You can export the block diagram view to an image with the save
![](/images/icons/save.gif) button. Both **SVG** and **PNG** are supported. Choose a the \*.svg filename for SVG export or a \*.png filename for PNG export.

<div class="messages status">
<b>Note:</b> If you are using the Sigasi Eclipse plugin, you need to
<a href="http://www.sigasi.com/install-eclipse-vhdl-plugin">explicitly
select the Block Diagram View during installation</a>.

</div>

