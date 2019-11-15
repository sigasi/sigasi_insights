---
title: "List of known VHDL metacomment pragma's"
layout: page 
pager: true
author: Philippe Faes
date: 2011-04-28
tags: 
  - Aldec
  - Altera
  - pragma
  - Synopsys
  - VHDL
  - Xilinx
comments: true
bannerad: true
---

TEST: 

Following up on a previous post, {{< page "tech/vhdl-pragmas" >}}, this is an incomplete list of supported VHDL pragmas, organized by vendor.

As an introduction, most pragmas have the following structure:

```vhdl
-- trigger directive
```

where `trigger` is a keyword such as `pragma` or `synthesis`, and the `directive` is a special compiler directive.
Many tools support several triggers, each with identical meaning.

## Synopsys

<http://cseweb.ucsd.edu/~hepeng/cse143-w08/labs/VHDLReference/11.pdf>

Triggers:

* synopsys
* pragma

Known directives are:

```vhdl
-- pragma translate_off
-- pragma translate_on
-- pragma synthesis_off
-- pragma synthesis_on
-- pragma resolution_method wired_and
-- pragma resolution_method wired_or
-- pragma resolution_method three_state 
-- pragma map_to_entity entity_name
-- pragma return_port_name port_name
```

## ActiveHDL

<https://www.aldec.com/resources/manuals/Active-HDL/vsa00265.htm> 

No triggers.

Disable compilation (and simulation)

```vhdl
-- vhdl_comp_on
-- vhdl_comp_off
```

Disable code coverage analysis

```vhdl
-- vhdl_cover_off
-- vhdl_cover_on
-- coverage off
-- coverage on
```

## Altera

<https://www.intel.com/content/www/us/en/programmable/quartushelp/current/index.htm#hdl/vhdl/vhdl_file_dir.htm> 

Triggers:

* synthesis
* synopsys
* pragma
* exemplar
* altera  (not clear if this is supported for all directives, but given as an example trigger for `message_level`)


Directives:

```vhdl
-- synthesis translate_on
-- synthesis translate_off
-- synthesis library <my_lib>
-- altera message_level
-- altera message_on
-- altera message_off
-- synthesis VHDL_INPUT_VERSION
-- synthesis read_comments_as_HDL on
-- synthesis read_comments_as_HDL off
```

Note that the last two directives allow the synthesis tool to interpret commented code as VHDL. This is the opposite as the `synthesis translate_off` pragma, which suppresses VHDL code as if it were commented.

## Xilinx

<https://www.xilinx.com/support/documentation/sw_manuals/xilinx2019_1/ug901-vivado-synthesis.pdf> 

Triggers:

* synthesis
* synopsys
* pragma
* xilinx

Directives:

```vhdl
-- synthesis translate_off
-- synthesis translate_on
```

## IEEE VHDL

<https://ieeexplore.ieee.org/document/1342563>

```vhdl
-- RTL_SYNTHESIS OFF
-- RTL_SYNTHESIS ON
```

## Conclusion

While the IEEE standard on synthesizable VHDL code specifies `-- RTL_SYNTHESIS OFF` or `ON` as the only legal metacomment pragmas, this does not correspond to the tool vendors' implementations. From what I gather, your safest bet is:

```vhdl
-- pragma translate_off
-- pragma translate_on
```

If you find that any information is missing in this post, please write a comment. It would be great if you can also provide a reference to the original documentation.
