---
title: Sigasi Studio 3.5
layout: page
pager: true
date: 2017-06-14
comments: true
---
Sigasi Studio 3.5 brings full support for the **SystemVerilog** language, a frequently asked **VHDL quickfix**, a better **State Machine Viewer** and much more.

# SystemVerilog (Creator)

All SystemVerilog is processed in a predictable order and Sigasi keeps track of the preprocessor state. This avoids problems with the ``` `ifndef ... `define  ... ``` pattern. This also allows us to offer **full support for include files**. You can edit include files _as if they were included in a Verilog file_. This requires no extra configuration, except for [setting your include paths][/manual/editor#verilog-preprocessingmacros].

Libraries View
* Syntax error feedback: **All** valid SystemVerilog-2012 code should be accepted as valid code. Most syntax errors should be flagged.  
   This works for both **SystemVerilog** _and_ **Include** files.
* Preprocessor/Macros: Macros are fully supported. You can preview the text expansion with a hover or in the “Preprocessor View”.
* Include paths can be specified by right clicking a project, selecting **Properties**, and opening the **Verilog Preprocessor page**. Currently, only project-relative paths are supported.
* Open Declaration and Find References (for regular Verilog Code).
* Autocomplete (Ctrl+Space):
    * Syntax: autocomplete for keywords and identifiers
    * Fixed Templates: these templates can be modified
    * Smart Templates: module instantiations
* Integration with an external compiler (Riviera-Pro, ModelSim, NCsim).
* We have a first version of SV formatting. **Clean Indentation** (**Ctrl+Shift+F**). Note that this formats the entire file in the editor; formatting selections is not supported yet.


<div class="wistia_responsive_padding" style="padding:118.13% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="//fast.wistia.net/embed/iframe/wu2qqrjhu0?videoFoam=true" title="Wistia video player" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div>
<script src="//fast.wistia.net/assets/external/E-v1.js" async></script>


We are currently implementing the scoping rules of SystemVerilog. This will result in better **semantic highlighting**, **Find References** and **Open Declaration** for all SystemVerilog code.

We are also working on **autocomplete**. We are making autocomplete more accurate and a lot faster.

**Libraries View** for SystemVerilog

# Improved State Machine Viewer (VHDL)

We gave the State Machine Viewer

* Improved looks ('bubbles') and layout
* All statemachines on same page (no more tabs)
* Show (simple) conditions on edges

![New state machine view](3.5/new-statemachines.png)


# Other new and noteworthy improvements

* [vhdl_only] **Quickfix all undeclared signals in a port map**. This was the number one feature request for our VHDL editor. You can now declare all signals in a port map (and all constants in a generic map) in a single action.  
![Quick fix all signals in port map](3.5/quick-fix-all-signals-in-port-map.png)

* Improved **Libraries View**:
    - Mixed language support
    - Added action to **Set toplevel**  
      ![Open Design Unit Dialog](3.5/libraries-view-set-toplevel.png)

* **Open Design Unit** dialog (**Ctrl+Shift+D**): We added an extra action to quickly open a (VHDL or SystemVerilog) design unit in an editor: hit **Ctrl+Shift+D** (or via **Navigate > Open Design unit...**), and type a pattern that matches the design unit name you look for.  
![Open Design Unit Dialog](3.5/open-design-unit.png)

* [vhdl_only] **Hyperlink from Entity to its architectures**. There has always been an easy way to navigate from an architecture to its entity, by **Ctrl+clicking** (**Open Declaration**) the entity name. You can now also easily navigate in the other direction with **Ctrl+click**. If an enity has multiple architectures, they will all be listed in a drop down menu.  
![Open matching architecture](3.5/open-matching-architecture.png)

* [vhdl_only] Better autocomplete for `configurations`
* [vhdl_only] Offer *"Declare variable"* quickfix for procedure parameters inside processes.
*  \[[xl]] Better validations for `configuration`  
   **TODO**: add screenshot

* \[[xl]] keyword autocomplete should respect uppercase/lowercase formatting settings
* \[[xl_doc]]Add the component name to component instantiation blocks in the graphical view.
* We updated the Eclipse Xtext dependency to `2.12.0`


# Bug fixes

As expected the old formatter had some untested "features", that the new formatter in Sigasi 3.4 didn't have.
This release brings many improvements to make the new formatter return the same results. Thanks a lot for all the feedback

## Formatting bug fixes:

- ticket 3826 : Formatting performance issues for certain VHDL constructs
- ticket 3827 : Format alignment on first parameter does not indent if a comment precedes the line
- ticket 3841 : Comments do not always break alignment blocks
- ticket 3848 : Formatting issue in Component declarations
- ticket 3856 : Do not break doxygen comments
- ticket 3857 : Transport keyword confuses the formatter
- ticket 3858 : Formatting on first parameter with a component declaration and commented ports confuses the formatter
- ticket 3866 : Format on first parameter gets confused when declarations are grouped
- ticket 3869 : Align comments in group goes wrong
- ticket 3879 : Comments preceded by a tab break syntax on format
- ticket 3902 : Comments are not indented during format when they proceed the end of an indented region

## Other bug fixes:

- ticket 3845 : \[VHDL-2008] Scoping issue with package generics in UVVM 
- ticket 3019 : Entity instantiation autocomplete does not work in `generate` statements
- ticket 3895 : Avoid `NoSuchMethodError` when Sigasi is used with newer Guava versions (*Eclipse 4.6.3*)
- ticket 3884 : Scoping error with `if` condition labels in `generate` statements
- ticket 3876 : Bugreport while exporting block diagrams (project without mapped files)
- ticket 3844 : Calling QuickFix from problems view applies the changes twice
- ticket 3820 : `Case`/`for`/`else` generate show as `unknown` in Block Diagram
- ticket 3893 : SystemVerilog parse error on Properties
- ticket 3741 : One off error in Verilog macros
- ticket 3921 : Autocomplete does not work after a SL comment

## How to update?

If you have Sigasi Studio 3 installed, you can [update][update_sigasi] or [download a fresh install of the latest version][download_latest].
