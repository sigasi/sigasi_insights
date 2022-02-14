---
title: Sigasi Studio 4.6
date: 2019-12-12
comments: true

layout: page
pager: true

---
We are proud to present the Sigasi Studio 4.6 release: A faster new (System)Verilog preprocessor, improved graphics, bug fixes and much more.

# Editor improvements

Sigasi Studio 4.5 introduced a new, more responsive code editor. Thanks to your feedback we learned that in some scenarios the editor actually performed slower. This release improves those scenarios.
We continue working on making Sigasi Studio the ideal HDL Development Environment for you. So please, send us your [feedback](https://www.sigasi.com/support/).

# Verilog improvements

We made some changes to how we handle include files and made the preprocessor incremental.

## (System)Verilog library mapping of include files

Starting with Sigasi Studio 4.6 we no longer add include (or 'header') files (`*.vh,*.svh,*.h`) to the build. In Sigasi Studio 4.6, include files are only analyzed if they are really included in a Verilog or SystemVerilog file. This change simplifies the project setup.

{{< figure src="/img/releasenotes/4.6/no_library_mapping_for_include_files.png" title="No more library mapping for include files" >}}

## (System)Verilog preprocessor enhancements

Sigasi Studio 4.6 has a new, **incremental** preprocessing engine. During *clean builds* this engine is 10x faster. For small code changes, the incremental approach leads to even higher speed improvements.

We also added more **semantic highlighting** in the preprocessor regions in your source files:

{{< figure src="/img/releasenotes/4.6/preprocessor_highlight.png" title="Semantic highlighting for preprocessor directives" >}}
{{< figure src="/img/releasenotes/4.6/preprocessor_code_semantic_highlight.png" title="Configure colors of semantic highlighting for preprocessor directives" >}}


The **autocomplete** for preprocessor directives also received some extra love. It was tweaked to be more helpful in the most common use cases.

{{< figure src="/img/releasenotes/4.6/preprocessor_autocomplete.png" title="Report output ports that are never assigned" >}}

Because file encoding differences between including and included files can lead to unexpected, very difficult to find bugs, we added a [linting check]({{< ref "/manual/linting.md#list-of-system-verilog-code-rules" >}}). When the file encoding differs we now report a warning.

{{< figure src="/img/releasenotes/4.6/include_encoding_warning.png" title="No more library mapping for include files" >}}

# New graphics engine

Sigasi Studio 4.6 contains a new graphics engine, which supports 4K displays and allows us to add more features in the future. The **[Block Diagram]({{< ref "manual/views.md#block-diagram-view" >}})** and **[State Machines]({{< ref "manual/views.md#state-machine-view" >}})** Views already use the new engine. The **[Dependencies]({{< ref "manual/views.md#dependencies-view" >}})** View still uses the old engine.

Let us know if you run into any problems. On Linux, make sure [**webkitgtk** is installed]({{< ref "faq#the-internal-web-browser-does-not-work-on-linux" >}}).
If you use [Wayland](https://wayland.freedesktop.org/) instead of X11, you might need to set the environment variable `WEBKIT_DISABLE_COMPOSITING_MODE=1`.

# Dependencies View

The analysis behind the **[Dependencies]({{< ref "manual/views.md#dependencies-view" >}})** View was optimized for speed and memory usage. Big projects are now visualized a lot faster, without saturating the memory.

{{% youtube 2s5japBtgDg %}}


# Other New and Noteworthy Changes

- We improved the error messages of the VHDL parser when the code contains empty lists or trailing list separators:  
{{< figure src="/img/releasenotes/4.6/vhdl_parser_recovery.png" title="Better error messages for broken code" >}}
We recorded a [new screencast]({{< ref "editing_broken_code" >}}) on the improved parser.
- We added support for **Fenced Code blocks** in comments. This enables you to add text to the documentation without Markdown rendering. To add a comment *verbatim* to the documentation, surround it with triple back ticks: ```` ```<verbatim comment>``` ````  
{{< figure src="/img/releasenotes/4.6/fenced_code_blocks_comment.png" title="Verbatim comments in the documentation" >}}
- We added a nicer _Welcome to Sigasi_ page
- Added `.vht` as supported VHDL file extension
- The Riviera Pro tool chain now uses the `-sv2k9` flag when compiling SystemVerilog files.
- Signal declaration Quick Fix: Better support for records in port maps
- The default stack size was increased to `4 MB` (for analyzing deeply nested statements)
- Improved the editor's behavior when typing the closing quote in a string. It has now the same behavior as typing the closing parenthesis in a parenthesis pair.
- We updated upstream Sigasi Studio dependencies:
    - Xtext/Xtend to 2.19.0
    - Eclipse platform to [Eclipse 2019-09](https://www.eclipse.org/eclipseide/2019-09/noteworthy/)
- VUnit improvements:
    - Support Python3 on Windows
    - A project clean no longer pops up the VUnit console
    - Rerunning VUnit tests now detects new tests
    - Running all VUnit tests now shows the correct test count

# Bugfixes

- \[(System)Verilog] Copy constructor
- \[(System)Verilog] Unexpected indentation of interface classes
- \[(System)Verilog] Ternary operator is not parsed properly in Verilog
- \[(System)Verilog] Verilog parser cannot handle block declaration in module
- \[(System)Verilog] SystemVerilog parse error with `inside`
- \[(System)Verilog] SV extern method parsing failure
- \[(System)Verilog] SystemVerilog for loops with optional parts fail to parse
- \[(System)Verilog] Inconsistent Verilog formatting in if statements
- \[VHDL] Quick Fix for signal declaration puts signal declaration outside the declarative region
- \[VHDL 2008] Unexpected linking error in external names
- Sort outline case-insensitive
- Block Diagram should update while minimized
- \[(System)Verilog] Missing files in `toplevel_order.csv` export
- \[VHDL] error in compare view
- \[VHDL] Sensitivity list Quick Fix fails on missing sensitivity lists
- \[VHDL] Quick Fix for `package body` name adds incorrect library name

+ A lot of other issues we could fix thanks to your Talkback reports

# System requirements

* Sigasi Studio Standalone is supported on:
    * Windows: Windows 10 (64 bit) or newer
    * macOS 10.14 Mojave
    * Linux: RedHat Enterprise Linux RHEL 7.5 (64 bit) or newer
    * More information on supported OSes can be found [on the Eclipse website](https://www.eclipse.org/projects/project-plan.php?planurl=http://www.eclipse.org/eclipse/development/plans/eclipse_project_plan_4_10.xml#target_environments)
* Sigasi Studio as Plugin in your own Eclipse installation:
    * Eclipse 4.7.3a *Oxygen* up to Eclipse IDE 2019-09
    * Java JRE 8

We recommend at least **4GB of memory** available for Sigasi Studio,
and you need **about 300MB** of free disk space.

Thanks for all the bug reports and enabling Talkback.
