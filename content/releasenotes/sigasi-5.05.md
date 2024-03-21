---
title: Sigasi Studio 5.5
date: 2023-03-21
lastmod: 2023-03-21
comments: true
pager: true
menu:
  insightsmenu:
    parent: releasenotes
    weight: 95
---

Sigasi 5.5 brings brand-new **UVM Topology Features** to Eclipse and VS Code. 
We are adding **Quick Fixes**, **Class Hierarchy**, **Net Search**, and the **Documentation View** to our VS Code extension.
Finally, our entire product portfolio now contains **CSV Compilation Order Export** and **Per-project Formatting Settings** that can be shared across a team.

Unless explicitly marked, all the improvements below apply to [Veresta](https://www.sigasi.com/veresta/), our [VS Code extension](https://www.sigasi.com/vscode/), and our [Eclipse](https://www.sigasi.com/products/) offering.

# TL;DR

The star of the show for the 5.5 release is **UVM**. We are introducing a UVM Diagram and a UVM Topology View. Together, they visualize the UVM component hierarchy, its port connections, and its virtual interfaces, allowing you to explore your UVM testbench interactively.

Furthermore, we made **CSV Compilation Order Export** available in Veresta and VS Code, allowing you to drive your scripts and build systems for all environments.

To improve style guide adherence and team cooperation, the **formatting settings** for {{< pill text="VHDL" >}} are now available **per project**. You can check these files into your version control system with all the other Sigasi settings.

On the {{< pill text="VS Code" >}} side, we have added the most requested feature: You can now automatically fix many of the problems in your design through **Quick Fixes**. They can even be applied to all similar problems in a file, library, or project with a single click.

Complementing the UVM views, interactively explore {{< pill text="Verilog" >}} classes, their properties, and methods using the **Class Hierarchy View**. Finding all related super- or subclasses is now a breeze.
Additionally, {{< pill text="VHDL" >}} designers unlock the ability to trace nets through their designs and testbenches via the **Net Search**. Another new Sigasi feature in VS Code is the **Documentation View**, which shows a live preview of the current editor's documentation.

Last but not least, this release sees a wide range of **over 50 bug fixes and improvements**.

<style>
    .uk-card-default {
      background-color:#fff;
      color:#666;
      box-shadow: 0 10px 25px rgba(0,0,0,.15);
      padding-left: 20px;
      padding-right: 20px;
      border-radius: 10px;
      align-items: center;
    }

    .uk-card-media-left {
      padding-top: 20px;
      padding-bottom: 20px;
    }

    .uk-card-media-right {
      padding-top: 20px;
      padding-bottom: 20px;
    }

    .uk-card-body {
      padding-top: 20px;
      padding-bottom: 20px;
      padding-left: 0;
      padding-right: 0;
    }

    .uk-first-column {
      padding-right: 20px;
    }

    .uk-grid {
      margin-right: 0
    }

    .sigasi-rule-card img {
      margin-bottom: 0;
      box-shadow: 5px 5px 5px rgba(0,0,0,.10);
    }
</style>

# UVM Diagram

Reveal, visualize, and explore the UVM testbench you have in mind. Intuitively discover the connections between ports, the relationships between components, and the topological arrangement using the new UVM Diagram. Navigate effortlessly between diagram and code, digging deeper into the hierarchy as needed, swiftly jumping to declarations, instantiations, and types.  
{{< learn_more "/manual/common/views/#uvm-diagram-view" >}}

{{< video_control src="/img/releasenotes/5.5/uvm_diagram_view.mp4" link="/img/releasenotes/5.5/uvm_diagram_view.mp4" title="UVM Diagram" >}}

# UVM Topology View

The UVM Topology View presents the UVM component's topology as a tree. Like the UVM diagram, it offers a seamless and efficient way to explore the structure of a UVM project without having to run a simulator. This view lets you quickly locate and navigate to the components, their declarations, and their instantiations. Virtual interfaces and ports are also part of the topology view.  
{{< learn_more "/manual/eclipse/views/#uvm-topology-view" >}} for {{< pill text="Eclipse" >}}  
{{< learn_more "/manual/vscode/views/#uvm-topology-view" >}} for {{< pill text="VS Code" >}}

{{< figure src="/img/releasenotes/5.5/uvm_topology_view.png" link="/img/releasenotes/5.5/uvm_topology_view.png" title="UVM Topology View" class="uk-align-center" width="80%" >}}

# CSV Compilation Order Export

Sigasi Studio can generate the compilation order of a project or a chosen top level to a CSV file. This feature already drives many of our Eclipse users' build scripts and is now also available for Veresta and VS Code.  
{{< learn_more "/manual/vscode/export" >}}

In {{< pill text="Veresta" >}}, you can unlock this functionality via the `compilation-order` command. For example:

```sh
veresta compiliation-order --top-level="work.DUT.behavior"
```

Note that you require a `com.sigasi.veresta.comporder` license feature to use this feature. Please contact <support@sigasi.com> for more information.

In {{< pill text="VS Code" >}}, the CSV export is available via **Ctrl+Shift+P > Sigasi: Export Compilation Order CSV**.

{{< video_control src="/img/releasenotes/5.5/VSC Compilation Order CSV.webm" link="/img/releasenotes/5.5/VSC Compilation Order CSV.webm" title="VS Code Compilation Order CSV export" class="uk-align-center" >}}

# Per-project Formatting Settings

Projects often have specific style guides and formatting standards. All {{< pill text="VHDL" >}} formatting settings can now be configured per project. Sharing these with your team and colleagues is as easy as adding the setting files to version control. Merge conflicts due to different formatting are now a thing of the past.  
{{< learn_more "/manual/common/formatting-configuration/" >}}

<ul uk-tab  data-uk-switcher="{connect:'#formatting-settings-switch'}">
  <li class="uk-active"><a href="">Eclipse</a></li>
  <li><a href="">VS Code</a></li>
</ul>

<ul id="formatting-settings-switch" class="uk-switcher">
  <li>

You can find the project formatting settings by right-clicking a project in the **Project Explorer > Properties > VHDL Formatting**. Ensure that the `Enable project formatting settings` checkbox is enabled and that you click `Apply`.
{{< figure src="/img/releasenotes/5.5/Project Formatting Settings Eclipse.png" link="/img/releasenotes/5.5/Project Formatting Settings Eclipse.png" title="Per-project Formatting Settings in Eclipse" class="uk-align-center" width="80%" >}}
  </li><li>

You can find the project formatting settings by right-clicking a project in **Sigasi Projects > Open Preference View > VHDL Formatting**. Ensure that the `Enable project formatting settings` checkbox is enabled and that you click `APPLY`.
{{< figure src="/img/releasenotes/5.5/Project Formatting Settings VS Code.png" link="/img/releasenotes/5.5/Project Formatting Settings VS Code.png" title="Per-project Formatting Settings in VS Code" class="uk-align-center" >}}
  </li>
</ul>

# VS Code

Our {{< pill text="VS Code" >}} extension is quickly nearing feature parity with our Eclipse offering. This release adds **Quick Fixes**, **Class Hierarchy**, **Net Search**, and **Documentation View**.

## Quick Fixes

Have you ever wished Sigasi would offer to fix the errors and warnings it shows you?  
Wish no more. Most of our VHDL and Verilog quick fixes are now available in VS Code and even include a _Bulk Mode_, allowing you to apply them to all similar problems in a file, library, or project.

{{< figure src="/img/releasenotes/5.5/VS Code Quick Fixes.png" link="/img/releasenotes/5.5/VS Code Quick Fixes.png" title="Multiple bulk mode quick fixes in VS Code" class="uk-align-center" >}}

## Class Hierarchy

Complementing the UVM views introduced earlier, the Class Hierarchy View, well-loved in Eclipse, enters VS Code. It displays all the super- and subclasses of a class selected with **F4**. The attached Members View shows all declared properties and methods.  
{{< learn_more "/manual/vscode/views#class-hierarchy-view" >}}

<ul uk-tab data-uk-switcher="{connect:'#class-hierarchy-switch'}">
  <li class="uk-active"><a href="">VS Code</a></li>
  <li><a href="">Eclipse</a></li>
</ul>

<ul id="class-hierarchy-switch" class="uk-switcher">
  <li>

{{< figure src="/img/releasenotes/5.5/Class Hierarchy VS Code.png" link="/img/releasenotes/5.5/Class Hierarchy VS Code.png" title="Class Hierarchy View in VS Code" class="uk-align-center" >}}
  </li><li>

{{< figure src="/img/releasenotes/5.5/Class Hierarchy Eclipse.png" link="/img/releasenotes/5.5/Class Hierarchy Eclipse.png" title="Class Hierarchy View in Eclipse" class="uk-align-center" >}}
  </li>
</ul>

## Net Search

Net Search for {{< pill text="VHDL" >}} is an advanced search feature to trace your nets through a design. It finds all the locations defining a signal or port for your net and the locations where the net is loaded or driven.  
{{< learn_more "/manual/common/views#net-search-view" >}}

<ul uk-tab data-uk-switcher="{connect:'#net-search-switch'}">
  <li class="uk-active"><a href="">VS Code</a></li>
  <li><a href="">Eclipse</a></li>
</ul>

<ul id="net-search-switch" class="uk-switcher">
  <li>

{{< figure src="/img/releasenotes/5.5/Net Search VS Code.png" link="/img/releasenotes/5.5/Net Search VS Code.png" title="Net Search in VS Code" class="uk-align-center" >}}
  </li><li>

{{< figure src="/img/releasenotes/5.5/Net Search Eclipse.png" link="/img/releasenotes/5.5/Net Search Eclipse.png" title="Net Search in Eclipse" class="uk-align-center" >}}
  </li>
</ul>

## Documentation View

You might know that you can generate documentation for the entire project, but did you know you can also preview it for the file in the editor using the Documentation View? Oh yes.  
{{< learn_more "/manual/vscode/views/#documentation-view" >}}

<ul uk-tab data-uk-switcher="{connect:'#documentation-view-switch'}">
  <li class="uk-active"><a href="">VS Code</a></li>
  <li><a href="">Eclipse</a></li>
</ul>

<ul id="documentation-view-switch" class="uk-switcher">
  <li>

{{< figure src="/img/releasenotes/5.5/Documentation View VS Code.png" link="/img/releasenotes/5.5/Documentation View VS Code.png" title="Documentation View in VS Code" class="uk-align-center" >}}
  </li><li>

{{< figure src="/img/releasenotes/5.5/Documentation View Eclipse.png" link="/img/releasenotes/5.5/Documentation View Eclipse.png" title="Documentation View in Eclipse" class="uk-align-center" >}}
  </li>
</ul>

# Quality of Life

- Added an option to [Generate Documentation]({{< ref "/manual/common/documentation.md" >}}) without diagrams
- Allowed selection of the outermost block in [Block Diagrams]({{< ref "/manual/common/views.md#block-diagram-view" >}})
- {{< pill text="Verilog" >}} Moved the visibility modifier (e.g. `protected`) after the type in hovers and the outline
- {{< pill text="Verilog" >}} Added an `Add to Include Path` item to the right-click menu in the Project Explorer
- {{< pill text="Verilog" >}} Added arguments to functions in the class hierarchy's member view
- {{< pill text="Verilog" >}} Added [Automatic Include Path Selection]({{< ref "/manual/rules/verilog_missing_include_path.md" >}})
- {{< pill text="Verilog" >}} Added comments on hover for builtin functions over arrays, strings, classes, and enums
- {{< pill text="Eclipse" >}} Added clickable icons to [Configure Toolchains]({{< ref "/manual/eclipse/tools.md#configure-external-compiler" >}})
- {{< pill text="VS Code" >}} Enabled diagram generation when using [SSH Remote]({{< ref "/manual/vscode/remote" >}})
- {{< pill text="VS Code" >}} Added automatic expansion of the [Projects View]({{< ref "/manual/vscode/views.md#sigasi-projects-view" >}}) when we detect a Sigasi project
- {{< pill text="VS Code" >}} Redesigned the [Preference View]({{< ref "/manual/vscode/views.md#preference-view" >}}) to be more user-friendly
- {{< pill text="VS Code" >}} Added [VHDL Identification]({{< ref "/manual/common/description-style" >}}) to the preference view
- {{< pill text="VS Code" >}} Added a dialog to add language support when opening files of said language

# Further New and Noteworthy

- Removed the Find Net menu item for locations where it is not applicable
- Changed the greenish highlighting color in diagrams to blue
- {{< pill text="Verilog" >}} Replaced `Type` header by `Modifier and Type` in a class' generated `Fields Summary` documentation
- {{< pill text="Verilog" >}} Added the `virtual` property in labels of implicitly virtual methods
- {{< pill text="VHDL" >}} Improved error message when an entity has the same name as a library
- {{< pill text="Eclipse" >}} Improved instructions in our `readme.txt`
- {{< pill text="Veresta" >}} Added exit code `18` in case compilation order export failed
- {{< pill text="VS Code" >}} {{< pill text="VHDL" >}} Added [Stuttering]({{< ref "/manual/common/editor.md#stuttering" >}})
- {{< pill text="VS Code" >}} Added automatic opening of an editor when creating a new file
- {{< pill text="VS Code" >}} Improved interaction with other plugins
- {{< pill text="VS Code" >}} Rewrote our tutorial project to be more realistic and showcase all features

# Updates and Deprecations

- Updated to Chromium 106, improving performance and stability and enabling truly headless diagram generation

# Talkback Changes

- All Talkback events now include a session ID, meant to group together events coming from the same session of Sigasi Studio

# Bug Fixes

- Fixed missing diagram updates
- Fixed a rare case where selected autocompletes were not applying
- Fixed a rare missing build on startup
- {{< pill text="Verilog" >}} Fixed hierarchy for top levels contained in unmapped files
- {{< pill text="Verilog" >}} Fixed macro expansion when an assignment pattern (`'{1,2,3}`) is used as argument
- {{< pill text="Verilog" >}} Fixed missing connections in the Block Diagram for instantiations in generate blocks
- {{< pill text="Verilog" >}} Added missing links for enums in the Class Hierarchy
- {{< pill text="Verilog" >}} Allowed class handles in logical operators
- {{< pill text="Verilog" >}} Removed false positive error when a `coverpoint` overrides its sample methods
- {{< pill text="VHDL" >}} Fixed incorrect URL for [Missing Library]({{< ref "/manual/rules/quick-fix-for-third-party-libraries" >}}) quick fix
- {{< pill text="VHDL" >}} Fixed language version awareness for the [Unexpected Keyword Capitalization]({{< ref "/manual/rules/incorrect-keyword-capitalization" >}}) quick fix
- {{< pill text="VHDL" >}} Fixed missing errors on code with empty conditional bodies
- {{< pill text="Eclipse" >}} Fixed autocomplete pop-ups on the welcome page
- {{< pill text="Eclipse" >}} Fixed HTTP error on the **Help > Contents** page
- {{< pill text="Eclipse" >}} Fixed newly added [Task Tags]({{< ref "/manual/eclipse/views.md#tasks-view" >}}) not highlighting
- {{< pill text="Eclipse" >}} Fixed quick fixes triggered from the problems view not applying
- {{< pill text="Eclipse" >}} Fixed rare missing autocomplete at the end of files
- {{< pill text="Veresta" >}} Fixed error message when using non-existent `locationURI`s in the `.project` file
- {{< pill text="Veresta" >}} Fixed `--include-problems` not including problems
- {{< pill text="VS Code" >}} Fixed background for individual items in the [Dependencies View]({{< ref "/manual/common/views.md#dependencies-view" >}})
- {{< pill text="VS Code" >}} Fixed editor closing when moving the file to a different directory
- {{< pill text="VS Code" >}} Fixed false positive errors and warnings in `Common Libraries` and unmapped files
- {{< pill text="VS Code" >}} Fixed missing updates to diagrams when dragging a file on top of them
- {{< pill text="VS Code" >}} Fixed missing hover for Verilog modules and ports instantiated in VHDL code
- {{< pill text="VS Code" >}} Fixed missing borders on highlighted components in diagrams
- {{< pill text="VS Code" >}} Fixed project initialization to add all necessary build commands to the `.project` file

Thank you for all the [bug reports](mailto:support@sigasi.com) and for enabling [Talkback]({{< ref "manual/common/talkback.md" >}}). All your reports have helped us fix many issues that would otherwise have gone unnoticed.

# System Requirements

- Sigasi Studio standalone supports:
  - Windows 10 or Windows 11 64-bit
  - RedHat Enterprise Linux RHEL 7.9 64-bit or newer, including RHEL 8 and 9
    - Sigasi Studio depends on `libXss.so`, which is obtainable by installing `libXScrnSaver`
    - Sigasi Studio depends on `webkit2gtk4.0`, which is installable through your package manager of choice
    - Note that Sigasi 5.5 is the last version to officially support the soon-to-be end-of-life RHEL 7
  - You can find more information on supported Linux Operating Systems [on the Eclipse website](https://www.eclipse.org/projects/project-plan.php?planurl=http://www.eclipse.org/eclipse/development/plans/eclipse_project_plan_4_19.xml#target_environments)
- Sigasi Studio as a plugin in your Eclipse installation:
  - Eclipse IDE 2021-03 up to and including Eclipse IDE 2023-03
  - Java JRE 11 or 17
- Sigasi Studio [extension](https://www.sigasi.com/vscode/) for VS Code:
  - Windows 10 or Windows 11 64-bit
  - RedHat Enterprise Linux RHEL 8 or 9 64-bit
  - VS Code >= 1.77 and < 2.0
  - Java JRE 11 or 17 (shipped with the extension)
- [Veresta](https://www.sigasi.com/veresta/)
  - Windows 10 or Windows 11 64-bit
  - RedHat Enterprise Linux RHEL 7.9 64-bit or newer, including RHEL 8 and 9
  - Note that Sigasi 5.5 is the last version to officially support the soon-to-be end-of-life RHEL 7
  - Java JRE 11 or 17 (shipped with Veresta)

We recommend having at least **4GB of memory** and **about 1GB** of free disk space available for Sigasi Studio.
