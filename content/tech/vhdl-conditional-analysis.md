---
title: "VHDL 2019: Conditional Analysis"
layout: page
pager: true
author: Pavel Parchenko
date: 2022-07-25
tags:
  - VHDL
  - VHDL-2019
  - Preprocessor
comments: true
bannerad: true
---

If you are writing universal portable VHDL code, be it a design that targets multiple chip families, or a library that should work with multiple simulators, you may have noticed that it can be quite challenging to make things work everywhere.
Different vendors provide their own macros and IPs, simulators provide their own utility libraries, tools support different VHDL attributes, they may fail to compile VHDL code due to unsupported features, or even treat VHDL code differently due to their own constraints.

In all these cases, to get similar behavior it's possible to find a proper approach for each tool, but it requires using different vendor or tool specific VHDL code.
So portability is basically a question of how to organize these specific code pieces.

Prior to VHDL 2019, you could use VHDL language features such as generics, generate statements, configurations. But besides the fact that these options work only in limited contexts, using them also requires all code to be compilable with all target tools.

In order to solve compilation problems, one may try to split their design in such a way as to have parts that differ in separate design units and files and maintain compilation lists for each configuration. This is also an option, but a pretty tedious one. 
If it's only about having simulation specific code, `pragma translate_off/on` comments may do the trick, however, they are of no help in other cases.
Nevertheless, such comments may be considered as a primitive version of full-fledged preprocessors that are available in some other languages. Going further in this direction, you may find some external preprocessor implementations for VHDL which bring greater level of customizability but also bring a hassle when trying to integrate them into your workflow.

VHDL 2019 brings a preprocessor (Conditional Analysis) as part of the language standard. So all the preprocessor's power is now available to everyone - is what I would like to say.
But the EDA market is not that fast when it comes to adopting the latest standards. Nevertheless, some simulators and synthesis tools already support Conditional Analysis. And now there is an IDE that does it too.

Let's look at what Conditional Analysis is and how it can help to solve the aforementioned problems.

# Conditional directives

VHDL Conditional Analysis represents a simplified subset of preprocessing directives found in the SystemVerilog or C languages.
Conditional directives in VHDL do not allow complex preprocessor magic, so metaprogramming is not an option. But on the other hand, by keeping it simple, the code remains readable and maintainable.

What you can do is enable or disable analysis of portions of the design code based on the current tool, your custom configuration or even on the VHDL standard used to parse the file. For example, the following snippets are equivalent:

```vhdl
-- pragma translate_off
  signal valid : std_ulogic := '0';
-- pragma translate_on
```

```vhdl
`if TOOL_TYPE /= "SYNTHESIS" then
  signal valid : std_ulogic := '0';
`end if
```

The second code snippet is an example of a conditional `` `if `` directive: here we check the tool type, and if it's not a synthesis tool we declare a `valid` signal.
Code in disabled `` `if `` directive branches is completely omitted during the compilation process, so it does not have to contain compilable code:

```vhdl
`if DUMMY = "" xor DUMMY = "" then
  You can use conditional directives for multiline comments,
  however that would definitely be an abuse
`end
```

The syntax for the conditional directives is similar to VHDL's `if` statement syntax. However, conditional directives being tool directives in their nature, can be used anywhere throughout design code, e.g:

```vhdl
`if LIB = "some" then
library some;
use some.all;
`elsif lib = "other" then
library other;
use other.all;
`else
library general;
use general.all;
`end if
```

Conditions that can be used in conditional directives are limited to comparing conditional identifiers with constant, literal values. You may combine such comparisons in complex expressions:

```vhdl
`if (BOARD = "MAIN" and REV >= "1.2") or DEBUG /= "" then
    ...
`end
```

It is also possible to write nested conditional directives. If the upper-level directive condition is not satisfied, nested directives will be disabled similar to other VHDL code:

```vhdl
`if TOOL_TYPE = "SIMULATION" then
  -- Using a simulator
  `if VHDL_VERSION >= "2008" then
    -- Newer VHDL version simulation code
  `else
    -- Older VHDL version simulation code
  `end if
`else
  -- Not a simulator
`end if
```

All conditional identifiers have string values. Comparison follows general VHDL rules. Conditional identifiers are not case sensitive while their values are.
And if an identifier is not defined, its value is considered to be an empty string `""` (e.g. in the previous example we are checking whether the `DEBUG` identifier is defined).
But let's move on and discuss conditional identifiers.

# Conditional identifiers

There's a bunch of identifiers that are provided by a tool: 
- `TOOL_TYPE`
- `TOOL_VENDOR`
- `TOOL_NAME`
- `TOOL_EDITION`
- `TOOL_VERSION`
- `VHDL_VERSION`

Identifiers starting with `TOOL_` can be used to determine what tool is used to analyze VHDL code. In addition, `VHDL_VERSION` stores the VHDL version that was used to analyze the file (possible values are `"1987"`, `"1993"`, `"2000"`, `"2002"`, `"2008"` or `"2019"`). It may look strange that `VHDL_VERSION` can have values of standards prior to VHDL 2019, but tools that support VHDL 2019 may actually make Conditional Analysis available when compiling files using previous standards too (consult your tool documentation to confirm this).

Values of `TOOL_TYPE` can be either `"SIMULATION"`, `"SYNTHESIS"` or `"FORMAL"`. As for `TOOL_VERSION`, it's safe to use ordering operators (`<`, `>=`, ...) to check the version, as newer versions should always be greater than previous ones. Other predefined identifier values are effectively at the discretion of the tool vendor. Here are some examples of what these values can be:
```
TOOL_TYPE    = "SIMULATION"
TOOL_VENDOR  = "Aldec"
TOOL_NAME    = "Riviera-PRO"
TOOL_EDITION = "2020.04 Linux64"
TOOL_VERSION = "2020.04.130.7729"
```

```
TOOL_TYPE    = "SYNTHESIS"
TOOL_VENDOR  = "INTEL CORPORATION"
TOOL_NAME    = "QUARTUS"
TOOL_EDITION = "PRIME PRO"
TOOL_VERSION = "21.3.0"
```

Apart from using predefined identifiers you are free to define your own conditional identifiers and specify their values.
However, the VHDL standard does not provide the possibility to do this from within VHDL code itself allowing each tool to implement its own way of providing custom conditional identifiers. You'll have to check your tool documentation, but it's basically either adding them as arguments to the compiler invocation, setting them in tool preferences or supplying a file in a tool-specific format with custom definitions.

Note that because of these differences, it may be harder to organize different sets of conditional identifiers and values for different parts of your design if you are targeting multiple tools.

# Conditional issues

Other than `` `if `` conditional directives there are also `` `warning `` and `` `error `` directives that can produce compilation warnings or errors.
They can be used to indicate what conditional branch is active or stop compilation if a specific combination of conditional values is not supported:

```vhdl
`if RST_TYPE = "async" then
  `warning "Reset type is set to async. Beware of asynchronous reset crossings"
`elsif RST_TYPE /= "sync" then
  `error "Unsupported reset type. Please set RST_TYPE to either `sync` or `async`"
`end if
```

The only parameter in these directives is a message string literal, you can not concatenate any conditional identifier values.

# Standard package

Predefined conditional identifier values are also available as regular VHDL constants in the `std.env` package, making them usable in usual VHDL expressions. 
For example, you can check if your simulator supports Conditional Analysis and what values predefined conditional identifiers have, by running the following code:

```vhdl
use std.env.all;

entity check is
end entity;

architecture behavioral of check is
`if VHDL_VERSION = "" then
  constant VHDL_VERSION : string := "n/a";
  constant TOOL_TYPE    : string := "n/a";
  constant TOOL_VENDOR  : string := "n/a";
  constant TOOL_NAME    : string := "n/a";
  constant TOOL_EDITION : string := "n/a";
  constant TOOL_VERSION : string := "n/a";
`end if
begin
  status : process
  begin
    report "Tool " &
`if VHDL_VERSION = "" then
    "DOES NOT " &
`end if
    "have support of VHDL 2019 Conditional Analysis:" & LF & 
    "VHDL VERSION = " & VHDL_VERSION & LF &
    "TOOL TYPE    = " & TOOL_TYPE & LF &
    "TOOL VENDOR  = " & TOOL_VENDOR & LF &
    "TOOL NAME    = " & TOOL_NAME & LF &
    "TOOL EDITION = " & TOOL_EDITION & LF &
    "TOOL VERSION = " & TOOL_VERSION;
    wait;
  end process;
end architecture;
```

**NOTE:** In this example, if simulator supports Conditional Analysis, it will use variables from `std.env` package, otherwise it should ignore unsupported directives and use dummy constants. Proper message is constructed in a similar manner.

# Conditional Analysis and Sigasi Studio

Both Sigasi Studio and [Sigasi's extension for VS Code]({{< ref "/vscode" >}}) support VHDL Conditional Analysis: directives highlighting and formatting, hovers with conditional identifier values, type-time syntax error reporting, showing conditional warnings and errors, defining your own conditional identifiers as well as configuring default identifiers to mimic your target simulator or synthesis tool:

{{< figure src="/img/releasenotes/4.16/Vhdl2019ToolDirectives.png" link="/img/releasenotes/4.16/Vhdl2019ToolDirectives.png" title="VHDL 2019 Tool Directives in Sigasi Studio">}}

Check out [this video]({{< ref "/screencasts/vhdl_2019_conditional_analysis.md" >}}) to see Conditional Analysis in action.
