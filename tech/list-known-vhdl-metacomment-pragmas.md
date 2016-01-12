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
---

Following up on a previous post, [vhdl-pragmas], this is an incomplete list of supported VHDL pragmas, organized by vendor.

As an introduction, most pragmas have the following structure:
`-- trigger directive`
Where `trigger` is a keyword such as `pragma` or `synthesis`, and the `directive` is a special compiler directive.
Many tools support several triggers, each with identical meaning.

## Synopsys

ref: <http://cseweb.ucsd.edu/~tweng/cse143/VHDLReference/11.pdf>

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

ref: <http://support.aldec.com/KnowledgeBase/Article.aspx?aid=000795&show=vsa00429.htm&print=1> 

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

ref: <http://quartushelp.altera.com/current/mergedProjects/hdl/vhdl/vhdl_file_dir.htm> 

Triggers:
* pragma
* synopsys
* synthesis
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

ref: <http://www.xilinx.com/itp/xilinx4/data/docs/cgd/t10.html> 

Triggers:
* pragma
* synopsys
* synthesis

Directives:
```vhdl
-- pragma translate_on
-- pragma translate_off</code>
```

## IEEE VHDL

ref: <http://ieeexplore.ieee.org/servlet/opac?punumber=9308>

```vhdl
-- RTL_SYNTHESIS OFF
-- RTL_SYNTHESIS ON</code>
```

## Conclusion

While the IEEE standard on synthesizable VHDL code specifies `-- RTL_SYNTHESIS OFF` or `ON` as the only legal metacomment pragmas, this does not correspond to the tool vendors' implementations. From what I gather, your safest bet is:
```vhdl
-- pragma translate_off
-- pragma translate_on
```

If you find that any information is missing in this post, please write a comment. It would be great if you can also provide a reference to the original documentation.
