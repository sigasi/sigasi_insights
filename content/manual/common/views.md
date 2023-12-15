---
title: Views
showinmenu: true
weight: 5
pager: true
aliases:
  - /manual/views/
---

# Graphical Views

## Block Diagram View

{{< xprt_only >}}

The **Block Diagram View** displays a graphical (block diagram) view
of all architectures, modules, their instantiations, and `generate`` constructs in your current VHDL or SystemVerilog editor.
VHDL processes and SystemVerilog always blocks are also shown in the block diagram.

This view **automatically updates** while you are editing your code and
offers a convenient way to visually inspect and navigate your code, even
when your code is unfinished or broken.

{{< figure src="/img/manual/block_diagram.svg" >}}

You can open the Block Diagram View by right-clicking in the editor and selecting **Show In > Block Diagram**. Alternatively, in Sigasi Studio for {{< pill text="Eclipse" >}} you can open the view via **Window > Show View > Other… > Sigasi > Block Diagram** and in Sigasi Studio for {{< pill text="VS Code" >}} you can open the view via the command palette **Ctrl+Shift+P** and type `Sigasi: Open Block Diagram`.

You can also double-click **blocks**, **ports**, or **wires** to navigate to the corresponding HDL code. If you want to *go into* a block, you
have to **select** it, right-click and click **Open Entity Declaration**, **Open Architecture**, or **Open Module**.

To find an object in the Block Diagram, you can navigate from your code to the Block Diagram.
In your code, right-click a signal, port, process, generate, or instantiation and select **Show In > Block Diagram** - just like when opening the Block Diagram View the first time.
If the Block Diagram is already open, the corresponding element is highlighted and the Block Diagram View is centered upon it.

You can export the Block Diagram View to an image with the save
![Save icon](/img/icons/save.gif) button. Both **SVG** and **PNG** are supported. Choose a `*.svg` filename for SVG export or a `*.png` filename for PNG export.

In Sigasi Studio for {{< pill text="Eclipse" >}}, you can export **all** *block diagrams of an entire project* at once: Click **Project > Export... > Sigasi > Block Diagrams export** and select your project. All SVGs will be created within the **sigasi-doc/diagrams/blockdiagrams/** folder in your project.

## State Machine View

{{< xprt_only >}}

The **State Machine View** displays a graphical (bubble diagram) view of all state machines in your current VHDL or SystemVerilog editor. This viewer automatically updates while you are editing your code and offers a convenient way to visually inspect and navigate your code, even when your code is unfinished or broken.

<ul uk-tab style="margin-left: 2em; margin-right: 2em">
  <li><a href="#">Eclipse</a></li>
  <li><a href="#">VS Code</a></li>
</ul>

<ul class="uk-switcher" style="margin-left: 2em; margin-right: 2em">
  <li>
  {{< figure src="/img/manual/statemachineviewer.png" >}}
  </li><li>
  {{< figure src="/img/manual/vscode/VSCodeStateMachines.png" >}}
  </li>
</ul>

You can open the State Machine View by right-clicking in the editor and selecting **Show In > State Machines**. Alternatively, in Sigasi Studio for {{< pill text="Eclipse" >}} you can open the view via **Window > Show View > Other… > Sigasi > State Machines** and in Sigasi Studio for {{< pill text="VS Code" >}} you can open the view via the command palette **Ctrl+Shift+P** and type `Sigasi: Open State Machines Diagram`.

If you have documented your state transitions (i.e. the assignments), the comments will be added as text to the transitions in the view.

You can also **double-click nodes** or **transitions** to navigate to the corresponding HDL code.

With the ![hide comments icon](/img/icons/hide_comments.png) button, you can toggle the display of comments on edge labels.  
With the ![hide conditions icon](/img/icons/hide_conditions.png) button, you can toggle the display of comments on edge labels. These labels show the code comments of the transition statements.  
You also have to option to **Zoom In**, **Zoom Out**, or **Zoom to Fit**.

You can export state machines to an image with the save ![save icon](/img/icons/save.gif) button. Both **SVG** and **PNG** are supported. Choose a `*.svg` filename for SVG export or a `*.png` filename for PNG export.

In Sigasi Studio for {{< pill text="Eclipse" >}}, you can export **all** *state machines of an entire project* at once: Click **Project > Export... > Sigasi > State Machine Diagrams export** and select your project. All SVGs will be created within the **sigasi-doc/diagrams/statemachines/** folder in your project.

## Dependencies View

The **Dependencies View** visualizes the dependencies of your VHDL, SystemVerilog, or *mixed language* projects.
This view shows the relationships between your source files and makes it easy to see *top levels* and important *packages*.
The Dependencies View also makes it easy to detect *orphaned files*.

The view is *automatically updated* each time you save your files.

<ul uk-tab style="margin-left: 2em; margin-right: 2em">
  <li><a href="#">Eclipse</a></li>
  <li><a href="#">VS Code</a></li>
</ul>

<ul class="uk-switcher" style="margin-left: 2em; margin-right: 2em">
  <li>
  {{< figure src="/img/releasenotes/3.8/dependencies_project_libraries_units.png" alt="Dependencies View for a complete project with libraries and design units" >}}
  </li><li>
  {{< figure src="/img/manual/vscode/VSCodeDependencies.png" alt="Dependencies View for VS Code">}}
  </li>
</ul>

The Dependencies View has the following options:

* ![open folder icon SiStE](/img/releasenotes/3.8/icon_project.png) or ![open folder icon SiStVSC](/img/manual/vscode/projectIconVSCode.svg) show dependencies of the entire project. Uncheck to focus on the dependencies of the active editor only.
* ![library icon SiStE](/img/releasenotes/3.8/icon_libraries.png) or ![library icon SiStVSC](/img/manual/vscode/libraryIconVSCode.svg) Group design files per library
* ![units icon SiStE](/img/releasenotes/3.8/icon_units.png) or ![units icon SiStVSC](/img/manual/vscode/iconUnitVSCode.svg) Show design units inside design files. The design units are prefixed with an abbreviation of their kind **a**rchitecture, **m**odule, **p**ackage, ...

The Dependencies View can help you **navigate** too. Double-click a file name in the diagram to open the corresponding editor.

In Sigasi Studio For {{< pill text="Eclipse" >}}, the Dependencies View can be **pinned**. This prevents the diagram from changing when you switch editors.

You can **export** this diagram for documentation by clicking the save icon.
