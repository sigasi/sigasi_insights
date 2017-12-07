---
title: Sigasi Studio 3.7
layout: page
pager: true
date: 2017-12-13
comments: true
---
Sigasi Studio 3.7 ...


# Check for component/entity mismatch + QuickFix

Sigasi Studio gives a warning if a component declaration is not equal to its matching entity. You can easily fix this by applying the quick fix.

![](3.7/linting_component_entity.png)

# SystemVerilog improvements

We significantly improved and optimized the way we analyze include files. Because we now track, project-wide, all includer/included-relationships, we can provide very accurate navigation without any extra configuration effort from your part. This allows you to focus on the code, instead of tracking yourself which parts of your are already in scope.

For example, to add UVM support to your project, you now only have to:
1. drag and drop the source folder in your project
2. add the UVM source folder to your project's include path

Next, Sigasi Studio figures out all relations automatically, allowing you to easily follow declarations, use autocomplete or preview preprocessor macro expansions. For more information, you should read the updated [UVM example post](tech/systemverilog-uvm-demo).

![](3.7/uvm_ubus.png)

We also reduced the memory footprint and improved the project analysis time.

# Dependencies Viewer (Mixed language) 

The *Dependencies Viewer** can now display the dependencies of your entire project. This make it very easy to recognize *top levels* and *orphaned files*.

![](3.7/dependencies_project.png)

# GHDL support (VHDL) 

Especially for our educational users using Apple MacBooks, we added support for the open-source GHDL simulator.

![](3.7/ghdl_support.png)

Make sure to [download the latest version of ghdl from GitHub](https://github.com/tgingold/ghdl/releases). Do not download the outdated version from http://ghdl.free.fr.

# Autocomplete performance (Mixed language) 

We did a thorough performance analysis of the SystemVerilog and VHDL autocomplete feature. This way we could vastly reduce the autocomplete latency, especially for larger projects.

![](3.7/faster_autocomplete.png)

# Other new and noteworthy improvements

* Show warning bar at top of editor when editing external files (and or starter mode)
* The formatter now stops formatting your HDL code when it encounters unrecoverable syntax errors
* Add "Export CSV file with dependencies" feature available as action in the hierarchy view
* You can now open the **Dependencies View** via the "Show in" menu in the editor
* The Riviera-Pro toolchain now has `-dbg` as default option.

* \[VHDL] Allow to simulate a `configuration` as toplevel
* \[VHDL] Improved constant evaluation in hovers
* \[VHDL] Renaming procedure arguments in package body, does not rename arguments in signature in package
* \[VHDL] Support VHDL 2008 tool directives (`)
* \[VHDL] Add autocomplete template for formatter tags
* \[VHDL] Vivado unisim quickfix includes old files/Unisim mapping issue: duplicate design units

* \[Graphics configuration]Allow referencing of labeled assignments

* The **Sigasi Starter** perspective is no longer the default perspective
* The FlexNet floating license key checkout now times out faster
* We updated the Eclipse Xtext dependency to `2.13.0`

# Bug fixes

- ticket 3765,3999 : \[SystemVerilog] autocomplete: respect 'replace tabs with spaces' setting
- ticket 3789 : \[VHDL] Scoping issue in configurations
- ticket 4016 : \[SystemVerilog] Incorrect syntax error report in assertion variable declarations (Used in Tidal library)
- ticket 3993 : \[SystemVerilog] Formatting issue in case generate statements
- ticket 4004,4007,4027 : \[VHDL] "Sort associations" quickfix generates wrong VHDL code
- ticket 4088 : Project > Export generating bogus diagrams when Sigasi Studio is installed as Eclipse plugin
- ticket 4071 : Rename issue in component, when matching entity is defined in a different library
- ticket 4084 : "Format on save" puts the cursor on line 1 after save
- ticket 4095 : "Unused declaration" should not consider a component end name as a 'usage' of the component.
- ticket 4030 : \[VHDL Formatting] Comments before (generate) elsif/else are not indented correctly
- ticket 4069 : \[VHDL Formatting] Preserve newlines fails when line breaks are different from OS-line breaks
- ticket 4107 : \[Graphics configuration] Collapse wires in block diagram generates wrong identifier names

## How to update?

If you have Sigasi Studio 3 installed, you can [update][update_sigasi] or [download a fresh install of the latest version][download_latest].
 