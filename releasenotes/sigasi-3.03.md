---
title: Sigasi Studio 3.3
layout: page
pager: true
date: 2016-12-06
comments: true
---
The Sigasi Studio 3.3 release brings a lot of improvements. We added a lot of extra **VHDL syntax checks** and **quick fixes** ([starter], [creator], [xl]). We also enhanced the **block diagram view** ([xl_doc]) and added numerous other noteworthy improvements.

We are also working vigorously on **SystemVerilog** improvements, but we didn't make the 3.3 release deadline. You can expect improvements in the [preview version][/faq#can-i-use-the-features-of-the-upcoming-release] soon.

## Improved VHDL analysis: More syntax checks, Linting and Quick Fixes

- New [starter] checks:
    - Flag declarations that are not allowed in the curren declarative region (e.g. no `variable` declarations in the architecture declarative part).
    ![](3.3/declarative_part.png)
    - Check deferred constant declarations: these are only allowed in a package declaration.
    ![](3.3/deferred_constant.png)
    - Linting checks for function specifications
    ![](3.3/function_signature.png)
    - Check the signature of subprograms: the declarations in the package and package body have to match.
    - Check protected type bodies: these are not allowed .

- New [creator] checks:
    - We now give a warning when the project VHDL version is more recent than the project's common libraries. This mismatch results in unexpected type problems.

- New [xl] checks:
    - Flag illegal output/input port connections
    - Respect the declaration order of port/generic associations in port/generic maps
    ![](3.3/association_order.png)

- New Quick Fixes
    - Declare constant declaration.
    ![](3.3/declare_constant.png)
    - Fix associations order when order does not match the order of port/generic declarations (see above).
    - Fix argument names in function specification 
    - QuickFix to reset common libraries when project contains files with a newer VHDL version (See above).

## Improved Block Diagram view

![](3.3/block_diagram_a.png)

The **Block Diagram View** was significantly enhanced. 
The new Block Diagram view can now visualize `generate` statements. `generate` statements are displaced as container blocks. You can **collapse** or **expand** these blocks via a context menu in the block Diagram.

We also added a **hover** which displays more information about the 'hovered' objects.

If you use the **Show in Block Diagram** in Sigasi Studio 3.3, the Block Diagram View now centers on the corresponding graphical representation. This greatly enhances the usability of this feature.

In addition we solved some rendering issues with **overlapping labels.**


## Other new and noteworthy improvements

- We added a property page to configure [automatic export of a csv file][/manual/tools#export] with the compilation order of the project, or the compilation order of a top level \[[creator]].
  ![](3.3/auto_export_property_page.png)
- Semantic highlighting for labels. The color can be configured via **Window > Preferences > Sigasi > VHDL > Syntax coloring**. Labels are colored gray by default.
- We added an option to automatically format VHDL files when they are saved
  ![](3.3/format_on_save_a.png)
- The Hierarchy View now has a **Link with editor** toggle button. When this is enabled, the active element in the VHDL editor will be highlighted in the Hierarchy View (if applicable).
  ![](3.3/link_hierarchy_a.png)
- Sigasi Studio now shows hyperlinks to open matching declarations in `protected type` bodies.
- We added an autocomplete template for `case generate` statements.
- Components are now foldable.
- When the Top level is changed. the csv file export is now automatically updated.
- We also enabled **stuttering** in the Verilog Editor.

## Bug fixes

- \[VHDL] Fixed Sigasi Studio startup issues.
- \[VHDL] Fixed a caching problem when VHDL version of files was changed.
- \[VHDL] The State Machine View was not updated when **Show in** was used the first time.
- \[VHDL] Scoping error with `arrays of unconstraint records` (ticket 3712).
- \[Verilog] Warnings were displayed on the wrong location when the Verilog file had preprocessor macros.
- \[Verilog] Open declaration did not work for ports and parameters in module instantiations.
- \[Verilog] External compiler markers were not removed after unmapping.

## How to update?

If you have Sigasi Studio 3 installed, you can [update][update_sigasi] or [download a fresh install of the latest version][download_latest].
