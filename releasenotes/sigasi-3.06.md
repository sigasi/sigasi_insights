---
title: Sigasi Studio 3.6
layout: page
pager: true
date: 2017-07-27
comments: true
---

## Improved linting and Quick Fixes

Some of these checks were enabled in 3.3 but were not enabled, they are now!

- New [creator] checks
    - Quick fix when the VHDL version of the project is more recent than the version of the common libraries.

- New [xl] checks
    - Flag illegal output/input port connections
    - Quick Fix when ports or generics are mapped in a different order than their declaration.
    ![](3.3/association_order.png)

# Bug fixes

## Formatting bug fixes:

- ticket 3930 : Crashes in formatter with preserve newlines
- ticket 3932 : Comments before "when" get indented too much
- ticket 3961 : Formatting crashes when NBSP is used
- ticket 3891 : Formatter can't handle multiple replacements at the same offset

## SystemVerilog bug fixes:

- ticket 3927 : Improve double click behaviour inside preprocessor code
- ticket 3943 : Non UTF-8 file encoding can cause preprocessor offset issues
- ticket 3956 : Fixed grammar issue with delay control
- ticket 3957 : Grammar & linking support for import statements inside VerilogUnitHeader

## Other bug fixes:

- ticket 3935 : No icons in LibrariesView
- ticket 3945 : Hierarchy: some ProcedureCallStatements are actually ComponentInstantiatons
- ticket 3946 : Attribute "subtype" & "base" should be available on all types
- ticket 3958 : Support VHDL 2008 constructs in State Machine View


## How to update?

If you have Sigasi Studio 3 installed, you can [update][update_sigasi] or [download a fresh install of the latest version][download_latest].
