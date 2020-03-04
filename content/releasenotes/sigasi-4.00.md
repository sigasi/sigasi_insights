---
title: Sigasi Studio 4.0
layout: page
pager: true
date: 2018-06-20
comments: true
---
Sigasi Studio 4.0 is our newest major release.

Hardware design & verification engineers are facing more and more complex challenges and Sigasi Studio continues to deliver the best productivity features. **SystemVerilog**, **VHDL** and **mixed language** projects can now all benefit from the best methods to handle:

* Block Diagrams
* State Machines
* Hierarchy
* Autocompletes
* Errors
* Code reuse
* Documentation

Read below to find more new and noteworthy changes.

# Sigasi Studio XPRT

We have added Sigasi Studio XPRT to the Sigasi product line.

Sigasi Studio XPRT is our newest flagship product and offers all Sigasi Studio features, both new and trusted. It will include all features you know from Sigasi Studio XL and XL-DOC, and has a lot more new features for you to discover.

Good news for our loyal XL-DOC users: **existing and valid XL-DOC 3.x license keys will automatically unlock all Sigasi Studio XPRT 4.0 features.**

{{< figure src="/img/releasenotes/4.0/xprt.png" alt="Sigasi Studio XPRT license" title="Sigasi Studio XPRT license" link="/img/releasenotes/4.0/xprt.png" >}}

**Update Notes**: We made huge efforts to make the *"3.8→4.0" update* as smooth as always. But in some specific cases, it is possible you'll see an empty editor or a Hierarchy View with an error. In that case, follow [these steps](#reset-perspective).

# Block Diagrams for SystemVerilog modules

Sigasi Studio 4.0 introduces **block diagrams** for SystemVerilog modules. You can open the Block Diagram View by right clicking in a SystemVerilog editor and selecting **Show In > Block Diagram**.  

{{< figure src="/img/releasenotes/4.0/sv_block_diagram.png" alt="Block Diagram View for SystemVerilog" title="Block Diagram View for SystemVerilog" link="/img/releasenotes/4.0/sv_block_diagram.png" >}}

The [Block Diagram View](/manual/views#block-diagram-view) **automatically updates** when you **save** your code and gives a convenient way to visually inspect and navigate your code, even
when your code is still unfinished or broken.

{{< figure src="/img/releasenotes/4.0/sv_graphic_configuration.png" alt="Block Diagram Graphics Configuration for SystemVerilog" title="Block Diagram Graphics Configuration for SystemVerilog" link="/img/releasenotes/4.0/sv_graphic_configuration.png" >}}

You can also customize and filter block diagrams by creating a [Graphics Configuration](/tech/using-graphics-configuration).

# SystemVerilog State Machines

The [State Machine View](/manual/views#state-machine-view) now also visualizes `enum`-based statemachines in your SystemVerilog code. This view automatically updates while you are editing your code and gives a convenient way to visually inspect and navigate your code, even when your code is still unfinished or broken.

You can open the State Machine View by right clicking in the editor and selecting **Show In > State Machines**.

{{< figure src="/img/releasenotes/4.0/systemverilog_fsm.png" alt="State Machine View for SystemVerilog" link="/img/releasenotes/4.0/systemverilog_fsm.png" >}}

You can **double-click nodes** or **transitions** to navigate to the corresponding SystemVerilog code.

You can also customize and filter state machine diagrams by creating a [Graphics Configuration](/tech/using-graphics-configuration).

# SystemVerilog and Mixed Hierarchies in the Hierarchy View

The hierarchy engine in Sigasi Studio was updated to handle SystemVerilog, VHDL and mixed language designs. The [Hierarchy View](/manual/views#hierarchy-view) automatically refreshes itself when you save your design files.

This is a convenient and powerful method to navigate through your design.

{{< figure src="/img/releasenotes/4.0/mixed_hierarchy.png" alt="SystemVerilog and Mixed Hierarchies in the Hierarchy View" title="SystemVerilog and Mixed Hierarchies in the Hierarchy View" link="/img/releasenotes/4.0/mixed_hierarchy.png" >}}

[Hierarchy View documentation](/manual/views#hierarchy-view)

# More SystemVerilog improvements

Sigasi Studio 4.0 also contains a lot of improvements to enhance your SystemVerilog editing experience:

- Improved **performance** for SystemVerilog **autocomplete**
- **Autocomplete** for **preprocessor directives**  
{{< figure src="/img/releasenotes/4.0/autocomplete_verilog_directives.png" alt="Autocomplete for SystemVerilog preprocessor directives" title="Autocomplete for SystemVerilog preprocessor directives" link="/img/releasenotes/4.0/autocomplete_verilog_directives.png" >}}
- Report **errors** for incorrect SystemVerilog **preprocessor directives**  
{{< figure src="/img/releasenotes/4.0/directive_errors.png" alt="Report errors in SystemVerilog preprocessor directives" title="Report errors in SystemVerilog preprocessor directives" link="/img/releasenotes/4.0/directive_errors.png" >}}
- Improved and polished the SystemVerilog **[Outline View](/manual/views#outline-view)**
- Extra autocomplete **templates** for **SystemVerilog assertions**  
{{< figure src="/img/releasenotes/4.0/assertion_templates.png" alt="Autocomplete templates for SystemVerilog assertions" title="Autocomplete templates for SystemVerilog assertions" link="/img/releasenotes/4.0/assertion_templates.png" >}}
- A new **wizard** to easily **import existing SystemVerilog projects** (that were created before you were using Sigasi Studio)  
{{< figure src="/img/releasenotes/4.0/import_existing_systemverilog_project.png" alt="Import wizard for existing SystemVerilog projects" title="Import wizard for existing SystemVerilog projects" link="/img/releasenotes/4.0/import_existing_systemverilog_project.png" >}}
- Improved handling of **include files**: Sigasi Studio analyses includes files in the context of their *includer*. This results in better error reporting and autocompletes. This release also improves the **outline** and **formatting** of include files.
- Improved SystemVerilog [preprocessor view](/manual/views#preprocessor-view):
    * Added an **overview ruler**
    * Show **squiggly lines** for errors
    * Highlight **current** line
    * **Synchronise selection** in both directions: changing the selection in the preprocessor view now updates the selection in the edtior too
    * Improved syntax highlighting
{{< figure src="/img/releasenotes/4.0/better_preprocessor_view.png" alt="SystemVerilog preprocessor view" title="SystemVerilog preprocessor view" link="/img/releasenotes/4.0/better_preprocessor_view.png" >}}
- We also improved SystemVerilog scoping (i.e. linking identifiers with their declaration). This results in a more accurate **Find references**, **Occurrence highlighting** and **Rename refactoring**.  
You can also enable **warnings for undeclared identifiers** via the **Ctrl-3** keyboard shortcut, and next typing **Toggle SystemVerilog problem markers**  
{{< figure src="/img/releasenotes/4.0/toggle_verilog_markers.png" alt="Warn about unresolved declarations" title="Warn about unresolved declarations" link="/img/releasenotes/4.0/toggle_verilog_markers.png" >}}

# Other news and noteworthy changes

- We updated the Eclipse Xtext dependency to `2.14.0`
- Legacy Sigasi 2 licenses are not compatible with Sigasi Studio 4.0
- Documentation: support alignment in tables  {{< figure src="/img/releasenotes/4.0/alignment_in_tables.png" alt="Alignment in tables" title="Alignment in tables" link="/img/releasenotes/4.0/alignment_in_tables.png" >}}
- Mixed: Added a hyperlink (**Ctrl**) from VHDL `component` declarations and instantiations to the corresponding `module` declaration in mixed designs.
- VHDL: The `component` autocomplete in Sigasi Studio does not copy comments because these copied comments can get out of sync and cause confusion. To still easily access the comments of the original `entity`, the hover of `components` now fetches to comments of the entity. This also works for `component` instantiations.  
{{< figure src="/img/releasenotes/4.0/component_instantiation_hover.png" alt="Entity comments in component (instantiation) hovers" title="Entity comments in component (instantiation) hovers" link="/img/releasenotes/4.0/component_instantiation_hover.png" >}}

# Bug fixes

- ticket 4292 : \[VHDL] `others` in VHDL FSM breaks graphics configuration
- ticket 4237 : \[Mixed] Broken PDF (DocBook xml) for "<=" and "------------------" in comments
- ticket 4318 : \[Mixed] Component declaration generation for modules should use `std_logic_vector` for vector types
- ticket 4317 : \[SystemVerilog] Unexpected formatting
- ticket 4301 : \[SystemVerilog] Parser error with`` `{}``
- ticket 4296 : \[SystemVerilog] `SVH`-files are treated as Verilog files instead of SystemVerilog (when they are not included)
- ticket 4240 : \[SystemVerilog] Parser error with missing arguments in `$width`
- ticket 4238 : \[SystemVerilog] Formatter should indent clocking blocks
- ticket 4151 : \[SystemVerilog] Preprocessor definitions in project properties have no visible effect
- ticket 4152 : \[SystemVerilog] New type is not available in the editor until editor is closed and reopened

# How to update?

If you have Sigasi Studio 3 installed, you can [update](/manual/setup#software-updates) or {{< download_latest >}} for a fresh install.

Good news for our loyal XL-DOC users: **existing and valid XL-DOC 3.x license keys will automatically unlock all Sigasi Studio XPRT 4.0 features.**

## Reset perspective

If you see an empty editor or a Hierarchy View with an error, follow these steps:

* Close all editors
* Make sure you are in the "Sigasi" perspective: **Window > Perspective > Open Perspective > Other... > Sigasi** and **Open**
* Reset the perspective: **Window > Perspective > Reset Perspective...** and **Yes**
