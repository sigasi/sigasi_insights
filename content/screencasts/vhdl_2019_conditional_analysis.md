---
title: "VHDL 2019 Conditional Analysis"
date: 2022-06-17
lastmod: 2022-06-17
pager: false
comments: false
layout: youtube
videoid: kjTF6O1rm4k
tags:
  - VHDL
---

# VHDL 2019 Conditional Analysis

Sigasi Studio ≥ 4.16

VHDL 2019 improves many aspects of the popular hardware design language.
One of the novel features it brings is Conditional Analysis - a simplified version of the preprocessor found in SystemVerilog or C languages.

The {{< page "/releasenotes/sigasi-4.16.md" >}} release offers full support for VHDL Conditional Analysis.

In order to use VHDL 2019 features, ensure that a proper VHDL version is configured for your project.

In the example we can see that some VHDL lines are grayed out.
That's because they are disabled by conditional directives.

In order to understand why this code is disabled, we can hover over Identifiers in Conditional Directives to see their values.
Here TOOL_TYPE is set to SIMULATION and the DEBUG Identifier is not defined.

Conditional Variables can be configured in the project preferences.
Standard Conditional Variable values are undefined by default, so you can configure them for your target simulator or synthesis tool.
Let's change TOOL_TYPE to SYNTHESIS and add the DEBUG variable. Set its value to 1.

This enables previously disabled code.
One of the enabled lines contains a `warning directive.
You can find all warning/error messages from Conditional Directives in the Problems View.

Directives aren’t part of the general VHDL code structure, so it's not right to have them indented as other VHDL code.
The indenting of Directives as well as spaces inside their bodies can be fixed by formatting this file.

As always Sigasi Studio provides type-time syntax error reporting.
Conditional Directives are not an exception.
When you start typing an additional condition `or DEBUG = "2"` on line 10,
you can immediately see that it's not allowed to mix different binary operators.
You need to explicitly specify precedence by using parenthesis.

Our VS Code extension has all these features too.

Conditional Analysis allows designers to work around tool issues as well as target multiple toolchains or VHDL versions, offering features that depend on the environment.
Sigasi Studio helps designers to write and understand such code.
