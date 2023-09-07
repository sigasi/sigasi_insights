---
title: Design Units Description Style
showinmenu: true
pager: true
---

# Introduction

The main purpose of HDL languages is to describe a design that would be synthesized and implemented in hardware. However, both VHDL and Verilog also provide additional features for writing verification code to check a design by simulating its behavior. In order to do so you can write testbenches that provide stimulus to DUT inputs and assert if their outputs have unexpected values. More sophisticated language constructs can be used to do more complex checks. The problem with such verification code is that it's not synthesizable.

You should not use this verification subset of language features in the actual design. For better synthesis Quality of Results (QoR) many other rules should also be followed. However, since these rules only apply to a synthesizable design, there's usually no need to restrict oneself to following them in verification code.

In order to provide better feedback, Sigasi Studio detects what parts of the code are supposed to be synthesizable and verifies synthesis rules for that code. In order to do so, it detects a description style for design units. The description style can be detected as:
- **Testbench** - top level verification module
- **Behavioral** - additional design units that are supposed to be used for verification purposes
- **RTL** - design units that are part of an actual design that would be synthesized

Sigasi Studio provides the possibility to specify a different severity for rules in RTL and non-RTL (testbench or behavioral) code.
It's also possible to disable some checks for RTL or non-RTL code by setting the corresponding severity to `ignore`.

# VHDL

In VHDL a description style is detected for every architecture. It's possible to select how the description style is detected:
- Either by detecting verification code
- Or based on architecture names

By default, the _detecting verification code_ method is used. In this case, an architecture is detected as:
- **Testbench**, if the corresponding entity does not have any ports, otherwise
- **Behavioral**, if it contains:
  - non-synthesizable processes, e.g., no sensitivity list or multiple wait statements
  - uses the `std.textio` package or declares file types
- **RTL**, in all other cases

This mechanism provides good results in most cases. However, if more fine-grained control is required, you can choose to detect the description style based on architecture names. In this case, you have to specify name patterns that are to be matched against them. An architecture is then detected as:
- **RTL**, if its name matches the valid pattern and does not match the invalid pattern, otherwise
- **Testbench**, if the corresponding entity does not have any ports, or
- **Behavioral**, in all other cases

{{< figure src="/img/manual/vhdl_identification_preferences.png" link="/img/manual/vhdl_identification_preferences.png" title="VHDL Identification preferences" class="uk-align-center" width=550 >}}

# Verilog

For now, there are no rules that would benefit from a design unit description style, so no detection of description styles is performed.

# Libraries View

You can examine the description style detected by Sigasi Studio for VHDL architectures in the Libraries View:

{{< figure src="/img/manual/libraries-view-description-style.png" link="/img/manual/libraries-view-description-style.png" title="Description style in Libraries View" class="uk-align-center" width=250 >}}