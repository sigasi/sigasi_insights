---
title: Mixed language projects
layout: page 
pager: true
---

[xl_only]

You can create mixed language projects by adding both **VHDL** and
**Verilog** support to your project: right click your project and select
**Configure \> Add VHDL support** and **Configure \> Add Verilog
support**

# Features

In mixed language projects you can **navigate** from instantiation
statements to the matching entity or module. This works for both VHDL
entity instantiations in Verilog code and Verilog module instantiations
in VHDL code. You can also open the declaration of ports and
generics/parameters in mixed instantiations.

Other supported features:

* **Find references** for entity names, modules, ports, generics and parameters.
* **Autocomplete** Verilog module instantiations in VHDL code.
* **Error reporting** of incorrect entity names, modules, ports, generics and parameters in instantiations in VHDL code.
* VHDL **renames** are refused if they need changes in Verilog code.

Screencast : [/screencasts/mixed_language_instantiation]

# Using two languages in Sigasi Studio

If you don't have the correct license for mixed language projects, you can still create your designs using two separate languages. In this case, choose your main language and enable support for this language (in this example: VHDL). Now, the files in the other language (in this example: Verilog) can still be in your project. You can still edit them and you even get Sigasi support inside any one Verilog file. What is disabled now are the references from and to any Verilog files, but they work within a single Verilog file.

If you want to instantiate a Verilog module in VHDL you need to work with a component declaration so that the VHDL part know the interface of you Verilog module.
