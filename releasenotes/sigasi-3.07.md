---
title: Sigasi Studio 3.7
layout: page
pager: true
date: 2017-12-13
comments: true
---
Sigasi Studio 3.7 ...


# Check for component/entity mismatch + QuickFix

Check + QuickFix

# SystemVerilog improvements

TODO

# Dependencies Viewer (Mixed language) 

Show all HDL files in project

# GHDL support (VHDL) 

TODO

# Autocomplete performance (Mixed language) 

TODO

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
 