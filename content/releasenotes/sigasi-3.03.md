---
title: Sigasi Studio 3.3
layout: page
pager: true
date: 2016-12-06
comments: true
---
The Sigasi Studio 3.3 release brings many improvements. We added a lot of extra **VHDL syntax checks** and **quick fixes** \[{{< starter >}}, {{< creator >}}, {{< xl >}}]. We also enhanced the **block diagram view** \[{{< xl_doc >}}] and added numerous other noteworthy improvements.

We are also working vigorously on **SystemVerilog** improvements, but we didn't make the 3.3 release deadline. You can expect improvements in the [preview version](/faq#can-i-use-the-features-of-the-upcoming-release) soon.

## Improved VHDL analysis: More syntax checks, Linting and Quick Fixes

- New {{< starter >}} checks:
    - Flag declarations that are not allowed in the current declarative region (like `variable` declarations in the architecture declarative part).
    ![](/img/releasenotes/3.3/declarative_part.png)
    - Check deferred constant declarations: these are only allowed in a package declaration.
    ![](/img/releasenotes/3.3/deferred_constant.png)
    - Linting checks for function specifications
    ![](/img/releasenotes/3.3/function_signature.png)
    - Check the signature of subprograms: the declarations in the package and package body have to match.
    - Check protected type bodies: these are not allowed in packages.

- New {{< creator >}} checks:
    - Warn when the VHDL version of the project is more recent than the version of the common libraries. This mismatch results in unexpected type problems.

- New {{< xl >}} checks:
    - Flag illegal output/input port connections
    - Warn when ports or generics are mapped in a different order than their declaration.
    ![](/img/releasenotes/3.3/association_order.png)

- New Quick Fixes
    - Declare constant.  
    ![](/img/releasenotes/3.3/declare_constant.png)
    - Fix the order or generic maps or port maps (see above).
    - Fix argument names in function specification. 
    - QuickFix to reset common libraries when project contains files with a newer VHDL version (see above).

## Improved Block Diagram view

![](/img/releasenotes/3.3/block_diagram_a.png)

The **Block Diagram View** was significantly enhanced. 
The new Block Diagram view can now visualize `generate` statements. The `generate` statements are displaced as container blocks. You can **collapse** or **expand** these blocks via a context menu in the block Diagram.

You can now **hover** to display more information about the 'hovered' objects.

If you use the **Show in Block Diagram** in Sigasi Studio 3.3, the Block Diagram View now centers on the corresponding graphical representation. This makes it easier to find objects in the diagram.

In addition we solved some rendering issues with **overlapping labels.**


## Other new and noteworthy improvements

- Automatically [export the compilation order](/manual/eclipse/tools#auto-export), based on either the entire project, or based on a top level.
  You can configure this in the Project Properties.
  ![](/img/releasenotes/3.3/auto_export_property_page.png)
- Semantic highlighting for labels. The color can be configured via **Window > Preferences > Sigasi > VHDL > Syntax coloring**. Labels are colored gray by default.
- Option to automatically format VHDL files when they are saved
  ![](/img/releasenotes/3.3/format_on_save_a.png)
- **Link with editor** toggle button in the Hierarchy View. When this is enabled, the active element in the VHDL editor will be highlighted in the Hierarchy View (if applicable).
  ![](/img/releasenotes/3.3/link_hierarchy_a.png)
- Hyperlinks to open matching declarations in `protected type` bodies.
- Autocomplete template for `case generate` statements.
- Components are foldable in the editor.
- [Stuttering](/manual/eclipse/editor#stuttering) in the Verilog Editor

## Bug fixes

- Fixed Sigasi Studio startup issues.
- \[VHDL] Fixed a caching problem when VHDL version of files was changed.
- \[VHDL] The State Machine View was not updated when **Show in** was used the first time.
- \[VHDL] Scoping error with `arrays of unconstraint records` (ticket 3712).
- \[Verilog] Warnings were displayed on the wrong location when the Verilog file had preprocessor macros.
- \[Verilog] Open declaration did not work for ports and parameters in module instantiations.
- \[Verilog] External compiler markers were not removed after unmapping.

## How to update?

If you have Sigasi Studio 3 installed, you can {{< update_sigasi >}} or {{< download_latest >}}.
