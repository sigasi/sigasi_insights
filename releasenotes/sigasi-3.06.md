---
title: Sigasi Studio 3.6
layout: page
pager: true
date: 2017-09-26
comments: true
---
Sigasi Studio 3.6 brings ...


# Improved Dependencies Viewer (VHDL)


# Other new and noteworthy improvements

## Xilinx Vivado XSIM

![XSIM errors are displayed with markers in the editor and problems view](/releasenotes/3.6/xsim_compilation_error.png)
![Start a simulation by setting a toplevel and clicking the run button](/releasenotes/3.6/xsim_simulation.png)

# Bug fixes

- ticket 3891 : Formatter can't handle multiple replacements at the same offset
- ticket 3930 : Crashes in formatter with preserve newlines
- ticket 3932 : Comments before "when" get indented too much
- ticket 3961 : Formatting crashes when NBSP is used
- ticket 3968 : Formatting issue in case statement quick fix
- ticket 3979 : Report statement is not being formatted
- ticket 3980 : Package instantiation is formatted incorrectly

### SystemVerilog bug fixes:

- ticket 3927 : Improve double click behaviour inside preprocessor code
- ticket 3943 : Non UTF-8 file encoding can cause preprocessor offset issues
- ticket 3956 : Fixed grammar issue with delay control
- ticket 3957 : Grammar & linking support for import statements inside VerilogUnitHeader
- ticket 3959 : SystemVerilog parse error: import between module name and parameters

### Other bug fixes:

- ticket 3929 : Use project relative paths in CSV export for linked files
- ticket 3935 : No icons in LibrariesView
- ticket 3940 : Use all relative paths in CSV export
- ticket 3945 : Hierarchy: some ProcedureCallStatements are actually ComponentInstantiatons
- ticket 3946 : Attribute "subtype" & "base" should be available on all types
- ticket 3958 : Support VHDL 2008 constructs in State Machine View

## How to update?

If you have Sigasi Studio 3 installed, you can [update][update_sigasi] or [download a fresh install of the latest version][download_latest].
