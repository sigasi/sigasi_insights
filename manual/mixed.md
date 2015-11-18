---
title: Mixed language projects
layout: page 
pager: true
---

[premium]

You can create mixed language projects by adding both **VHDL** and
**Verilog** support to your project: right click your project and select
**Configure \> Add VHDL support** and **Configure \> Add Verilog
support**

## Features

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

<a href="//fast.wistia.net/embed/iframe/526cjmykbv?popover=true" class="wistia-popover\[height=500,playerColor=7b796a,width=800\]"><img src="https://embed-ssl.wistia.com/deliveries/ebc10b260cf82fd861c64f335773a79c2a018d95.jpg?image_play_button=true&image_play_button_color=7b796ae0&image_crop_resized=200x125" alt="" /></a>

<script charset="ISO-8859-1" src="//fast.wistia.com/assets/external/popover-v1.js">
</script>

## Using two languages in Sigasi Pro

If you don't have the correct license for mixed language projects, you can still create your designs using two separate languages. In this case, choose your main language and enable support for this language (in this example: VHDL). Now, the files in the other language (in this example: Verilog) can still be in your project. You can still edit them and you even get Sigasi support inside any one Verilog file. What is disabled now are the references from and to any Verilog files, but they work within a single Verilog file.

If you want to instantiate a Verilog module in VHDL you need to work with a component declaration so that the VHDL part know the interface of you Verilog module.
