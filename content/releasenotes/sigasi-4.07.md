---
title: Sigasi Studio 4.7
date: 2020-03-25
comments: true

layout: page
pager: true

---
We are proud to present the Sigasi Studio 4.7 release. Our continued commitment to improving your workflow is showing new and exciting results with important (System)Verilog support improvements, overall performance advancements, improved graphics and documentation, bug fixes and much more.

Please note that this 4.7 release deprecates the option to generate PDF documentation (DocBook).

## Improved graphics

We did a lot of improvements to the graphical features in Sigasi Studio. We further optimized speed and enabled type time updates of the Block Diagram view.

* Block diagrams: type time updates.
<video loop=true autoplay=true muted=true><source src="/img/releasenotes/4.7/type_time_block_diagram.mp4" type="video/mp4" ></video>
* Show Verilog `always` blocks in Block Diagrams.
{{< figure src="/img/releasenotes/4.7/always_blocks.svg" title="Visualize `always` blocks in SystemVerilog Block Diagrams" width="400" >}}
* Support Chinese, Japanese and Korean characters in diagrams.
{{< figure src="/img/releasenotes/4.7/japanese-diagram.png" title="Japanese characters in diagrams" width="600" >}}
* **Show in** support for state machine diagrams (navigate from source to diagram).
{{< figure src="/img/releasenotes/4.7/show-in-statemachine.png" title="Navigate from code to State Machine Diagram" >}}
* Bigger click boxes for block diagram edges.
{{< figure src="/img/releasenotes/4.7/clickable-edges2.png" title="Bigger click boxes for block diagram edges" width="400" >}}
* Better alignment for labels in State Machine Diagrams.
{{< figure src="/img/releasenotes/4.7/label-alignment.png" title="Better alignment for labels in State Machine Diagrams" >}}
* Better support for opening diagrams for external files.
* Optimized memory usage: build graphics with less memory.
* **Export > Sigasi > Block Diagrams** and **Export > Sigasi > State Machine Diagrams** was rewritten and now create the exact same result as the views.

## Documentation improvements

* Generate documentation for SystemVerilog classes.  
{{< figure src="/img/releasenotes/4.7/sv_classes_doc.png" title="Documentation for SystemVerilog classes" >}}
* Improved speed of documentation view (both documentation generation and visualization).


### DocBook Documenation flow deprecation notice

In [Sigasi Studio 4.5]({{< ref "/releasenotes/sigasi-4.05.md" >}}) we introduced the new documentation engine that produces HTML straight from your HDL sources. This approach is much faster and simpler than the "DocBook based flow" it replaces. In addition, it can more easily be [imported into Word](/tech/scale-diagrams-in-word)

We plan to drop support for the DocBook (to PDF) flow. Please let us know if you are missing any features in the HTML flow: <support@sigasi.com>


## Even more performance improvements

In addition to the performance improvements in the graphical view and documentation generator, we improved caching of code analysis results and the hierarchy view.

We improved the caching infrastructure of the code analysis results in Sigasi Studio. We also added user configurable settings to tweak the maximum cache size on disk.
{{< figure src="/img/releasenotes/4.7/build_cache.png" title="More efficient caching of build results" >}}

We also improved the memory footprint of the hierarchy view. For larger projects this has a noticable impact.


## (System)Verilog improvements

* We improved the way our code analyzer parses **declarations and types**. You can expect faster and better error messages, and better autocompletes.
* Autocomplete for `__LINE__` and `__FILE__`.  
{{< figure src="/img/releasenotes/4.7/autocomplete_line_file.png" title="Autocomplete for `__LINE__` and `__FILE__`" width="600" >}}
* We added a comment before and after an included region in the preprocessed text.  
{{< figure src="/img/releasenotes/4.7/include_comment.png" title="Add a comment before and after an included region in the preprocessed text" >}}

## Other improvements

* If a VHDL variable is used in statements like `report`, we now count this as a usage of this variable and no longer warn that the variable is unread.
* The Sigasi Studio update mechanism now uses `https` to access our update servers.
* The variable for accessing the [current toplevel](/manual/tools/#variables-in-arguments) was renamed from `${vhdl_toplevel}` to `${sigasi_toplevel}`.
* We updated the upstream Sigasi Studio dependencies:
    * Xtext to 2.20.0.
    * Eclipse platform to [Eclipse 2019-12](https://www.eclipse.org/eclipseide/2019-12/noteworthy/). This brings:
        * an updated EGit plugin (git support)
        * the view menu chevron icon (▽) is replaced by a modern equivalent, the vertical ellipsis ( ⠇)
        * **Quick Access** is renamed to **Find Actions** (The keyboard shortcut is unchanged: **Ctrl+3**)
        * and [more](https://www.eclipse.org/eclipse/news/4.14/platform.php)

## Bug fixes

* \[(System)Verilog] UI bug with `` `ifndef`` guard: When there was more than one level of including a file that uses include guarding, the code is incorrectly marked as disabled.
* \[VHDL] Sensitivity list linting check: Enable signals in clock conditions (`rising_edge(clock) and enable = '1'`) are not required in the sensitivity list.
* \[VHDL] Launching simulation in GHDL fails with empty argument error message.
* \[VHDL] Export CSV file: Packages were missing from the exported CSV if they were only used in the entity, and not in the architecture.
* Fixed highlighting in light weight editors (for huge source files).
* File encoding setting should be case-insensitive.
* Clicking links in Documentation leads to blank pages on windows.
* Opening the Quick Fix dialog from the problems view is slow.
* Allow declarations in VHDL Packages to use the package name in qualified names
* Hovers: run the Markdown parse on the comments only, not the declaration and other info.
* \[VHDL] Formatting bug in instantiation statements
* Support opening git revisions of VHDL and (System)Verilog files.
* Re-enabled spell checking
* ticket 5213 : Mergetool for VHDL compare Exception
* \[VHDL] support the `` `range`` attribute in VHDL 2008 assignments

+ A lot of other issues we could fix thanks to your Talkback reports

# System requirements

* Sigasi Studio Standalone is supported on:
    * Windows: Windows 10 (64 bit) or newer
    * macOS 10.14 Mojave
    * Linux: RedHat Enterprise Linux RHEL 7.5 (64 bit) or newer
    * More information on supported OSes can be found [on the Eclipse website](https://www.eclipse.org/projects/project-plan.php?planurl=http://www.eclipse.org/eclipse/development/plans/eclipse_project_plan_4_10.xml#target_environments)
* Sigasi Studio as Plugin in your own Eclipse installation:
    * Eclipse 4.7.3a *Oxygen* up to Eclipse IDE 2019-12
    * Java JRE 8 or higher

We recommend at least **4GB of memory** available for Sigasi Studio,
and you need **about 300MB** of free disk space.

Thanks for all the bug reports and enabling Talkback.
