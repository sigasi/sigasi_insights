---
title: "SystemVerilog IEEE 1800-2012 Grammar"
layout: page
pager: true
author: Sigasi
date: 2016-11-11
comments: true
tags:
  - SystemVerilog
  - ebnf
---
<em>
Copyright
The IEEE Standards publication(s) ("Document") is approved by the IEEE Standards Association ("IEEE-SA") Standards Board and is published in accordance with established IEEE-SA Standards Board bylaws and operations procedures.

IEEE owns the copyright to this Document in all forms of media. Copyright in the text retrieved, displayed or output from this Document is owned by IEEE and is protected by the copyright laws of the United States and by international treaties. IEEE reserves all rights not expressly granted.  

Get the full Language Reference Manual, free of charge, at <https://ieeexplore.ieee.org/document/6469140>

Sigasi has created this browsable version of the grammar, hoping that it would be useful to you, but without any warranty whatsoever.

[More browsable grammars of Hardware Description and Verification languages](/tags/ebnf).
</em>  
## Source text
  
### Library source text
  
<a name="library_text"></a>**library\_text**
:  { <a href="#library_description">library\_description</a> }
  
<a name="library_description"></a>**library\_description**
:  <a href="#library_declaration">library\_declaration</a>  
        | <a href="#include_statement">include\_statement</a>  
        | <a href="#config_declaration">config\_declaration</a>  
        | <font color="purple"><b>;</b></font>
  
<a name="library_declaration"></a>**library\_declaration**
:  <font color="purple"><b>library</b></font> <a href="#library_identifier">library\_identifier</a> <a href="#file_path_spec">file\_path\_spec</a>  { <font color="purple"><b>,</b></font> <a href="#file_path_spec">file\_path\_spec</a> }   \[ <font color="purple"><b>-incdir</b></font> <a href="#file_path_spec">file\_path\_spec</a>  { <font color="purple"><b>,</b></font> <a href="#file_path_spec">file\_path\_spec</a> } ]  <font color="purple"><b>;</b></font>
  
<a name="include_statement"></a>**include\_statement**
:  <font color="purple"><b>include</b></font> <a href="#file_path_spec">file\_path\_spec</a> <font color="purple"><b>;</b></font>
  
<a name="file_path_spec"></a>**file\_path\_spec**
:  <em>external</em> <em> syntax is not defined in standard </em>
  
### SystemVerilog source text
  
<a name="source_text"></a>**source\_text**
:  \[ <a href="#timeunits_declaration">timeunits\_declaration</a> ]   { <a href="#description">description</a> }
  
<a name="description"></a>**description**
:  <a href="#module_declaration">module\_declaration</a>  
        | <a href="#udp_declaration">udp\_declaration</a>  
        | <a href="#interface_declaration">interface\_declaration</a>  
        | <a href="#program_declaration">program\_declaration</a>  
        | <a href="#package_declaration">package\_declaration</a>  
        | { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#package_item">package\_item</a>  
        | { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#bind_directive">bind\_directive</a>  
        | <a href="#config_declaration">config\_declaration</a>
  
<a name="module_nonansi_header"></a>**module\_nonansi\_header**
:  { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#module_keyword">module\_keyword</a>  \[ <a href="#lifetime">lifetime</a> ]  <a href="#module_identifier">module\_identifier</a>  { <a href="#package_import_declaration">package\_import\_declaration</a> }   \[ <a href="#parameter_port_list">parameter\_port\_list</a> ]  <a href="#list_of_ports">list\_of\_ports</a> <font color="purple"><b>;</b></font>
  
<a name="module_ansi_header"></a>**module\_ansi\_header**
:  { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#module_keyword">module\_keyword</a>  \[ <a href="#lifetime">lifetime</a> ]  <a href="#module_identifier">module\_identifier</a>  { <a href="#package_import_declaration">package\_import\_declaration</a> }  [^footnote_1]  \[ <a href="#parameter_port_list">parameter\_port\_list</a> ]   \[ <a href="#list_of_port_declarations">list\_of\_port\_declarations</a> ]  <font color="purple"><b>;</b></font>
  
<a name="module_declaration"></a>**module\_declaration**
:  <a href="#module_nonansi_header">module\_nonansi\_header</a>  \[ <a href="#timeunits_declaration">timeunits\_declaration</a> ]   { <a href="#module_item">module\_item</a> }  <font color="purple"><b>endmodule</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#module_identifier">module\_identifier</a> ]  
        | <a href="#module_ansi_header">module\_ansi\_header</a>  \[ <a href="#timeunits_declaration">timeunits\_declaration</a> ]   { <a href="#non_port_module_item">non\_port\_module\_item</a> }  <font color="purple"><b>endmodule</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#module_identifier">module\_identifier</a> ]  
        | { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#module_keyword">module\_keyword</a>  \[ <a href="#lifetime">lifetime</a> ]  <a href="#module_identifier">module\_identifier</a> <font color="purple"><b>(</b></font> <font color="purple"><b>.\*</b></font> <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font>  \[ <a href="#timeunits_declaration">timeunits\_declaration</a> ]   { <a href="#module_item">module\_item</a> }  <font color="purple"><b>endmodule</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#module_identifier">module\_identifier</a> ]  
        | <font color="purple"><b>extern</b></font> <a href="#module_nonansi_header">module\_nonansi\_header</a>  
        | <font color="purple"><b>extern</b></font> <a href="#module_ansi_header">module\_ansi\_header</a>
  
<a name="module_keyword"></a>**module\_keyword**
:  <font color="purple"><b>module</b></font>  
        | <font color="purple"><b>macromodule</b></font>
  
<a name="interface_declaration"></a>**interface\_declaration**
:  <a href="#interface_nonansi_header">interface\_nonansi\_header</a>  \[ <a href="#timeunits_declaration">timeunits\_declaration</a> ]   { <a href="#interface_item">interface\_item</a> }  <font color="purple"><b>endinterface</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#interface_identifier">interface\_identifier</a> ]  
        | <a href="#interface_ansi_header">interface\_ansi\_header</a>  \[ <a href="#timeunits_declaration">timeunits\_declaration</a> ]   { <a href="#non_port_interface_item">non\_port\_interface\_item</a> }  <font color="purple"><b>endinterface</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#interface_identifier">interface\_identifier</a> ]  
        | { <a href="#attribute_instance">attribute\_instance</a> }  <font color="purple"><b>interface</b></font> <a href="#interface_identifier">interface\_identifier</a> <font color="purple"><b>(</b></font> <font color="purple"><b>.\*</b></font> <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font>  \[ <a href="#timeunits_declaration">timeunits\_declaration</a> ]   { <a href="#interface_item">interface\_item</a> }  <font color="purple"><b>endinterface</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#interface_identifier">interface\_identifier</a> ]  
        | <font color="purple"><b>extern</b></font> <a href="#interface_nonansi_header">interface\_nonansi\_header</a>  
        | <font color="purple"><b>extern</b></font> <a href="#interface_ansi_header">interface\_ansi\_header</a>
  
<a name="interface_nonansi_header"></a>**interface\_nonansi\_header**
:  { <a href="#attribute_instance">attribute\_instance</a> }  <font color="purple"><b>interface</b></font>  \[ <a href="#lifetime">lifetime</a> ]  <a href="#interface_identifier">interface\_identifier</a>  { <a href="#package_import_declaration">package\_import\_declaration</a> }   \[ <a href="#parameter_port_list">parameter\_port\_list</a> ]  <a href="#list_of_ports">list\_of\_ports</a> <font color="purple"><b>;</b></font>
  
<a name="interface_ansi_header"></a>**interface\_ansi\_header**
:  { <a href="#attribute_instance">attribute\_instance</a> }  <font color="purple"><b>interface</b></font>  \[ <a href="#lifetime">lifetime</a> ]  <a href="#interface_identifier">interface\_identifier</a>  { <a href="#package_import_declaration">package\_import\_declaration</a> }   \[ <a href="#parameter_port_list">parameter\_port\_list</a> ]   \[ <a href="#list_of_port_declarations">list\_of\_port\_declarations</a> ]  <font color="purple"><b>;</b></font>
  
<a name="program_declaration"></a>**program\_declaration**
:  <a href="#program_nonansi_header">program\_nonansi\_header</a>  \[ <a href="#timeunits_declaration">timeunits\_declaration</a> ]   { <a href="#program_item">program\_item</a> }  <font color="purple"><b>endprogram</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#program_identifier">program\_identifier</a> ]  
        | <a href="#program_ansi_header">program\_ansi\_header</a>  \[ <a href="#timeunits_declaration">timeunits\_declaration</a> ]   { <a href="#non_port_program_item">non\_port\_program\_item</a> }  <font color="purple"><b>endprogram</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#program_identifier">program\_identifier</a> ]  
        | { <a href="#attribute_instance">attribute\_instance</a> }  <font color="purple"><b>program</b></font> <a href="#program_identifier">program\_identifier</a> <font color="purple"><b>(</b></font> <font color="purple"><b>.\*</b></font> <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font>  \[ <a href="#timeunits_declaration">timeunits\_declaration</a> ]   { <a href="#program_item">program\_item</a> }  <font color="purple"><b>endprogram</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#program_identifier">program\_identifier</a> ]  
        | <font color="purple"><b>extern</b></font> <a href="#program_nonansi_header">program\_nonansi\_header</a>  
        | <font color="purple"><b>extern</b></font> <a href="#program_ansi_header">program\_ansi\_header</a>
  
<a name="program_nonansi_header"></a>**program\_nonansi\_header**
:  { <a href="#attribute_instance">attribute\_instance</a> }  <font color="purple"><b>program</b></font>  \[ <a href="#lifetime">lifetime</a> ]  <a href="#program_identifier">program\_identifier</a>  { <a href="#package_import_declaration">package\_import\_declaration</a> }   \[ <a href="#parameter_port_list">parameter\_port\_list</a> ]  <a href="#list_of_ports">list\_of\_ports</a> <font color="purple"><b>;</b></font>
  
<a name="program_ansi_header"></a>**program\_ansi\_header**
:  { <a href="#attribute_instance">attribute\_instance</a> }  <font color="purple"><b>program</b></font>  \[ <a href="#lifetime">lifetime</a> ]  <a href="#program_identifier">program\_identifier</a>  { <a href="#package_import_declaration">package\_import\_declaration</a> }  [^footnote_1]  \[ <a href="#parameter_port_list">parameter\_port\_list</a> ]   \[ <a href="#list_of_port_declarations">list\_of\_port\_declarations</a> ]  <font color="purple"><b>;</b></font>
  
<a name="checker_declaration"></a>**checker\_declaration**
:  <font color="purple"><b>checker</b></font> <a href="#checker_identifier">checker\_identifier</a>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#checker_port_list">checker\_port\_list</a> ]  <font color="purple"><b>)</b></font> ]  <font color="purple"><b>;</b></font>  { { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#checker_or_generate_item">checker\_or\_generate\_item</a> }  <font color="purple"><b>endchecker</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#checker_identifier">checker\_identifier</a> ]
  
<a name="class_declaration"></a>**class\_declaration**
:  \[ <font color="purple"><b>virtual</b></font> ]  <font color="purple"><b>class</b></font>  \[ <a href="#lifetime">lifetime</a> ]  <a href="#class_identifier">class\_identifier</a>  \[ <a href="#parameter_port_list">parameter\_port\_list</a> ]   \[ <font color="purple"><b>extends</b></font> <a href="#class_type">class\_type</a>  \[ <font color="purple"><b>(</b></font> <a href="#list_of_arguments">list\_of\_arguments</a> <font color="purple"><b>)</b></font> ] ]   \[ <font color="purple"><b>implements</b></font> <a href="#interface_class_type">interface\_class\_type</a>  { <font color="purple"><b>,</b></font> <a href="#interface_class_type">interface\_class\_type</a> } ]  <font color="purple"><b>;</b></font>  { <a href="#class_item">class\_item</a> }  <font color="purple"><b>endclass</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#class_identifier">class\_identifier</a> ]
  
<a name="interface_class_type"></a>**interface\_class\_type**
:  <a href="#ps_class_identifier">ps\_class\_identifier</a>  \[ <a href="#parameter_value_assignment">parameter\_value\_assignment</a> ]
  
<a name="interface_class_declaration"></a>**interface\_class\_declaration**
:  <font color="purple"><b>interface</b></font> <font color="purple"><b>class</b></font> <a href="#class_identifier">class\_identifier</a>  \[ <a href="#parameter_port_list">parameter\_port\_list</a> ]   \[ <font color="purple"><b>extends</b></font> <a href="#interface_class_type">interface\_class\_type</a>  { <font color="purple"><b>,</b></font> <a href="#interface_class_type">interface\_class\_type</a> } ]  <font color="purple"><b>;</b></font>  { <a href="#interface_class_item">interface\_class\_item</a> }  <font color="purple"><b>endclass</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#class_identifier">class\_identifier</a> ]
  
<a name="interface_class_item"></a>**interface\_class\_item**
:  <a href="#type_declaration">type\_declaration</a>  
        | { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#interface_class_method">interface\_class\_method</a>  
        | <a href="#local_parameter_declaration">local\_parameter\_declaration</a> [^footnote_7] <font color="purple"><b>;</b></font>  
        | <a href="#parameter_declaration">parameter\_declaration</a> <font color="purple"><b>;</b></font>  
        | <font color="purple"><b>;</b></font>
  
<a name="interface_class_method"></a>**interface\_class\_method**
:  <font color="purple"><b>pure</b></font> <font color="purple"><b>virtual</b></font> <a href="#method_prototype">method\_prototype</a> <font color="purple"><b>;</b></font>
  
<a name="package_declaration"></a>**package\_declaration**
:  { <a href="#attribute_instance">attribute\_instance</a> }  <font color="purple"><b>package</b></font>  \[ <a href="#lifetime">lifetime</a> ]  <a href="#package_identifier">package\_identifier</a> <font color="purple"><b>;</b></font>  \[ <a href="#timeunits_declaration">timeunits\_declaration</a> ]   { { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#package_item">package\_item</a> }  <font color="purple"><b>endpackage</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#package_identifier">package\_identifier</a> ]
  
<a name="timeunits_declaration"></a>**timeunits\_declaration**
:  <font color="purple"><b>timeunit</b></font> <a href="#time_literal">time\_literal</a>  \[ <font color="purple"><b>/</b></font> <a href="#time_literal">time\_literal</a> ]  <font color="purple"><b>;</b></font>  
        | <font color="purple"><b>timeprecision</b></font> <a href="#time_literal">time\_literal</a> <font color="purple"><b>;</b></font>  
        | <font color="purple"><b>timeunit</b></font> <a href="#time_literal">time\_literal</a> <font color="purple"><b>;</b></font> <font color="purple"><b>timeprecision</b></font> <a href="#time_literal">time\_literal</a> <font color="purple"><b>;</b></font>  
        | <font color="purple"><b>timeprecision</b></font> <a href="#time_literal">time\_literal</a> <font color="purple"><b>;</b></font> <font color="purple"><b>timeunit</b></font> <a href="#time_literal">time\_literal</a> <font color="purple"><b>;</b></font>
  
## Module parameters and ports
  
<a name="parameter_port_list"></a>**parameter\_port\_list**
:  <font color="purple"><b>#</b></font> <font color="purple"><b>(</b></font> <a href="#list_of_param_assignments">list\_of\_param\_assignments</a>  { <font color="purple"><b>,</b></font> <a href="#parameter_port_declaration">parameter\_port\_declaration</a> }  <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>#</b></font> <font color="purple"><b>(</b></font> <a href="#parameter_port_declaration">parameter\_port\_declaration</a>  { <font color="purple"><b>,</b></font> <a href="#parameter_port_declaration">parameter\_port\_declaration</a> }  <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>#</b></font> <font color="purple"><b>(</b></font> <font color="purple"><b>)</b></font>
  
<a name="parameter_port_declaration"></a>**parameter\_port\_declaration**
:  <a href="#parameter_declaration">parameter\_declaration</a>  
        | <a href="#local_parameter_declaration">local\_parameter\_declaration</a>  
        | <a href="#data_type">data\_type</a> <a href="#list_of_param_assignments">list\_of\_param\_assignments</a>  
        | <font color="purple"><b>type</b></font> <a href="#list_of_type_assignments">list\_of\_type\_assignments</a>
  
<a name="list_of_ports"></a>**list\_of\_ports**
:  <font color="purple"><b>(</b></font> <a href="#port">port</a>  { <font color="purple"><b>,</b></font> <a href="#port">port</a> }  <font color="purple"><b>)</b></font>
  
<a name="list_of_port_declarations"></a>**list\_of\_port\_declarations**[^footnote_2]
:  <font color="purple"><b>(</b></font>  \[ { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#ansi_port_declaration">ansi\_port\_declaration</a>  { <font color="purple"><b>,</b></font>  { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#ansi_port_declaration">ansi\_port\_declaration</a> } ]  <font color="purple"><b>)</b></font>
  
<a name="port_declaration"></a>**port\_declaration**
:  { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#inout_declaration">inout\_declaration</a>  
        | { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#input_declaration">input\_declaration</a>  
        | { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#output_declaration">output\_declaration</a>  
        | { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#ref_declaration">ref\_declaration</a>  
        | { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#interface_port_declaration">interface\_port\_declaration</a>
  
<a name="port"></a>**port**
:  \[ <a href="#port_expression">port\_expression</a> ]  
        | <font color="purple"><b>.</b></font> <a href="#port_identifier">port\_identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#port_expression">port\_expression</a> ]  <font color="purple"><b>)</b></font>
  
<a name="port_expression"></a>**port\_expression**
:  <a href="#port_reference">port\_reference</a>  
        | <font color="purple"><b>{</b></font> <a href="#port_reference">port\_reference</a>  { <font color="purple"><b>,</b></font> <a href="#port_reference">port\_reference</a> }  <font color="purple"><b>}</b></font>
  
<a name="port_reference"></a>**port\_reference**
:  <a href="#port_identifier">port\_identifier</a> <a href="#constant_select">constant\_select</a>
  
<a name="port_direction"></a>**port\_direction**
:  <font color="purple"><b>input</b></font>  
        | <font color="purple"><b>output</b></font>  
        | <font color="purple"><b>inout</b></font>  
        | <font color="purple"><b>ref</b></font>
  
<a name="net_port_header"></a>**net\_port\_header**
:  \[ <a href="#port_direction">port\_direction</a> ]  <a href="#net_port_type">net\_port\_type</a>
  
<a name="variable_port_header"></a>**variable\_port\_header**
:  \[ <a href="#port_direction">port\_direction</a> ]  <a href="#variable_port_type">variable\_port\_type</a>
  
<a name="interface_port_header"></a>**interface\_port\_header**
:  <a href="#interface_identifier">interface\_identifier</a>  \[ <font color="purple"><b>.</b></font> <a href="#modport_identifier">modport\_identifier</a> ]  
        | <font color="purple"><b>interface</b></font>  \[ <font color="purple"><b>.</b></font> <a href="#modport_identifier">modport\_identifier</a> ]
  
<a name="ansi_port_declaration"></a>**ansi\_port\_declaration**
:  \[ <a href="#net_port_header">net\_port\_header</a> | <a href="#interface_port_header">interface\_port\_header</a> ]  <a href="#port_identifier">port\_identifier</a>  { <a href="#unpacked_dimension">unpacked\_dimension</a> }   \[ <font color="purple"><b>=</b></font> <a href="#constant_expression">constant\_expression</a> ]  
        | \[ <a href="#variable_port_header">variable\_port\_header</a> ]  <a href="#port_identifier">port\_identifier</a>  { <a href="#variable_dimension">variable\_dimension</a> }   \[ <font color="purple"><b>=</b></font> <a href="#constant_expression">constant\_expression</a> ]  
        | \[ <a href="#port_direction">port\_direction</a> ]  <font color="purple"><b>.</b></font> <a href="#port_identifier">port\_identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#expression">expression</a> ]  <font color="purple"><b>)</b></font>
  
## Module items
  
<a name="elaboration_system_task"></a>**elaboration\_system\_task**
:  <font color="purple"><b>$fatal</b></font>  \[ <font color="purple"><b>(</b></font> <a href="#finish_number">finish\_number</a>  \[ <font color="purple"><b>,</b></font> <a href="#list_of_arguments">list\_of\_arguments</a> ]  <font color="purple"><b>)</b></font> ]  <font color="purple"><b>;</b></font>  
        | <font color="purple"><b>$error</b></font>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#list_of_arguments">list\_of\_arguments</a> ]  <font color="purple"><b>)</b></font> ]  <font color="purple"><b>;</b></font>  
        | <font color="purple"><b>$warning</b></font>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#list_of_arguments">list\_of\_arguments</a> ]  <font color="purple"><b>)</b></font> ]  <font color="purple"><b>;</b></font>  
        | <font color="purple"><b>$info</b></font>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#list_of_arguments">list\_of\_arguments</a> ]  <font color="purple"><b>)</b></font> ]  <font color="purple"><b>;</b></font>
  
<a name="finish_number"></a>**finish\_number**
:  <font color="purple"><b>0</b></font>  
        | <font color="purple"><b>1</b></font>  
        | <font color="purple"><b>2</b></font>
  
<a name="module_common_item"></a>**module\_common\_item**
:  <a href="#module_or_generate_item_declaration">module\_or\_generate\_item\_declaration</a>  
        | <a href="#interface_instantiation">interface\_instantiation</a>  
        | <a href="#program_instantiation">program\_instantiation</a>  
        | <a href="#assertion_item">assertion\_item</a>  
        | <a href="#bind_directive">bind\_directive</a>  
        | <a href="#continuous_assign">continuous\_assign</a>  
        | <a href="#net_alias">net\_alias</a>  
        | <a href="#initial_construct">initial\_construct</a>  
        | <a href="#final_construct">final\_construct</a>  
        | <a href="#always_construct">always\_construct</a>  
        | <a href="#loop_generate_construct">loop\_generate\_construct</a>  
        | <a href="#conditional_generate_construct">conditional\_generate\_construct</a>  
        | <a href="#elaboration_system_task">elaboration\_system\_task</a>
  
<a name="module_item"></a>**module\_item**
:  <a href="#port_declaration">port\_declaration</a> <font color="purple"><b>;</b></font>  
        | <a href="#non_port_module_item">non\_port\_module\_item</a>
  
<a name="module_or_generate_item"></a>**module\_or\_generate\_item**
:  { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#parameter_override">parameter\_override</a>  
        | { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#gate_instantiation">gate\_instantiation</a>  
        | { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#udp_instantiation">udp\_instantiation</a>  
        | { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#module_instantiation">module\_instantiation</a>  
        | { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#module_common_item">module\_common\_item</a>
  
<a name="module_or_generate_item_declaration"></a>**module\_or\_generate\_item\_declaration**
:  <a href="#package_or_generate_item_declaration">package\_or\_generate\_item\_declaration</a>  
        | <a href="#genvar_declaration">genvar\_declaration</a>  
        | <a href="#clocking_declaration">clocking\_declaration</a>  
        | <font color="purple"><b>default</b></font> <font color="purple"><b>clocking</b></font> <a href="#clocking_identifier">clocking\_identifier</a> <font color="purple"><b>;</b></font>  
        | <font color="purple"><b>default</b></font> <font color="purple"><b>disable</b></font> <font color="purple"><b>iff</b></font> <a href="#expression_or_dist">expression\_or\_dist</a> <font color="purple"><b>;</b></font>
  
<a name="non_port_module_item"></a>**non\_port\_module\_item**
:  <a href="#generate_region">generate\_region</a>  
        | <a href="#module_or_generate_item">module\_or\_generate\_item</a>  
        | <a href="#specify_block">specify\_block</a>  
        | { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#specparam_declaration">specparam\_declaration</a>  
        | <a href="#program_declaration">program\_declaration</a>  
        | <a href="#module_declaration">module\_declaration</a>  
        | <a href="#interface_declaration">interface\_declaration</a>  
        | <a href="#timeunits_declaration">timeunits\_declaration</a> [^footnote_3]
  
<a name="parameter_override"></a>**parameter\_override**
:  <font color="purple"><b>defparam</b></font> <a href="#list_of_defparam_assignments">list\_of\_defparam\_assignments</a> <font color="purple"><b>;</b></font>
  
<a name="bind_directive"></a>**bind\_directive**[^footnote_4]
:  <font color="purple"><b>bind</b></font> <a href="#bind_target_scope">bind\_target\_scope</a>  \[ <font color="purple"><b>:</b></font> <a href="#bind_target_instance_list">bind\_target\_instance\_list</a> ]  <a href="#bind_instantiation">bind\_instantiation</a> <font color="purple"><b>;</b></font>  
        | <font color="purple"><b>bind</b></font> <a href="#bind_target_instance">bind\_target\_instance</a> <a href="#bind_instantiation">bind\_instantiation</a> <font color="purple"><b>;</b></font>
  
<a name="bind_target_scope"></a>**bind\_target\_scope**
:  <a href="#module_identifier">module\_identifier</a>  
        | <a href="#interface_identifier">interface\_identifier</a>
  
<a name="bind_target_instance"></a>**bind\_target\_instance**
:  <a href="#hierarchical_identifier">hierarchical\_identifier</a> <a href="#constant_bit_select">constant\_bit\_select</a>
  
<a name="bind_target_instance_list"></a>**bind\_target\_instance\_list**
:  <a href="#bind_target_instance">bind\_target\_instance</a>  { <font color="purple"><b>,</b></font> <a href="#bind_target_instance">bind\_target\_instance</a> }
  
<a name="bind_instantiation"></a>**bind\_instantiation**
:  <a href="#program_instantiation">program\_instantiation</a>  
        | <a href="#module_instantiation">module\_instantiation</a>  
        | <a href="#interface_instantiation">interface\_instantiation</a>  
        | <a href="#checker_instantiation">checker\_instantiation</a>
  
## Configuration source text
  
<a name="config_declaration"></a>**config\_declaration**
:  <font color="purple"><b>config</b></font> <a href="#config_identifier">config\_identifier</a> <font color="purple"><b>;</b></font>  { <a href="#local_parameter_declaration">local\_parameter\_declaration</a> <font color="purple"><b>;</b></font> }  <a href="#design_statement">design\_statement</a>  { <a href="#config_rule_statement">config\_rule\_statement</a> }  <font color="purple"><b>endconfig</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#config_identifier">config\_identifier</a> ]
  
<a name="design_statement"></a>**design\_statement**
:  <font color="purple"><b>design</b></font>  { \[ <a href="#library_identifier">library\_identifier</a> <font color="purple"><b>.</b></font> ]  <a href="#cell_identifier">cell\_identifier</a> }  <font color="purple"><b>;</b></font>
  
<a name="config_rule_statement"></a>**config\_rule\_statement**
:  <a href="#default_clause">default\_clause</a> <a href="#liblist_clause">liblist\_clause</a> <font color="purple"><b>;</b></font>  
        | <a href="#inst_clause">inst\_clause</a> <a href="#liblist_clause">liblist\_clause</a> <font color="purple"><b>;</b></font>  
        | <a href="#inst_clause">inst\_clause</a> <a href="#use_clause">use\_clause</a> <font color="purple"><b>;</b></font>  
        | <a href="#cell_clause">cell\_clause</a> <a href="#liblist_clause">liblist\_clause</a> <font color="purple"><b>;</b></font>  
        | <a href="#cell_clause">cell\_clause</a> <a href="#use_clause">use\_clause</a> <font color="purple"><b>;</b></font>
  
<a name="default_clause"></a>**default\_clause**
:  <font color="purple"><b>default</b></font>
  
<a name="inst_clause"></a>**inst\_clause**
:  <font color="purple"><b>instance</b></font> <a href="#inst_name">inst\_name</a>
  
<a name="inst_name"></a>**inst\_name**
:  <a href="#topmodule_identifier">topmodule\_identifier</a>  { <font color="purple"><b>.</b></font> <a href="#instance_identifier">instance\_identifier</a> }
  
<a name="cell_clause"></a>**cell\_clause**
:  <font color="purple"><b>cell</b></font>  \[ <a href="#library_identifier">library\_identifier</a> <font color="purple"><b>.</b></font> ]  <a href="#cell_identifier">cell\_identifier</a>
  
<a name="liblist_clause"></a>**liblist\_clause**
:  <font color="purple"><b>liblist</b></font>  { <a href="#library_identifier">library\_identifier</a> }
  
<a name="use_clause"></a>**use\_clause**
:  <font color="purple"><b>use</b></font>  \[ <a href="#library_identifier">library\_identifier</a> <font color="purple"><b>.</b></font> ]  <a href="#cell_identifier">cell\_identifier</a>  \[ <font color="purple"><b>:</b></font> <font color="purple"><b>config</b></font> ]  
        | <font color="purple"><b>use</b></font> <a href="#named_parameter_assignment">named\_parameter\_assignment</a>  { <font color="purple"><b>,</b></font> <a href="#named_parameter_assignment">named\_parameter\_assignment</a> }   \[ <font color="purple"><b>:</b></font> <font color="purple"><b>config</b></font> ]  
        | <font color="purple"><b>use</b></font>  \[ <a href="#library_identifier">library\_identifier</a> <font color="purple"><b>.</b></font> ]  <a href="#cell_identifier">cell\_identifier</a> <a href="#named_parameter_assignment">named\_parameter\_assignment</a>  { <font color="purple"><b>,</b></font> <a href="#named_parameter_assignment">named\_parameter\_assignment</a> }   \[ <font color="purple"><b>:</b></font> <font color="purple"><b>config</b></font> ]
  
## Interface items
  
<a name="interface_or_generate_item"></a>**interface\_or\_generate\_item**
:  { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#module_common_item">module\_common\_item</a>  
        | { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#modport_declaration">modport\_declaration</a>  
        | { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#extern_tf_declaration">extern\_tf\_declaration</a>
  
<a name="extern_tf_declaration"></a>**extern\_tf\_declaration**
:  <font color="purple"><b>extern</b></font> <a href="#method_prototype">method\_prototype</a> <font color="purple"><b>;</b></font>  
        | <font color="purple"><b>extern</b></font> <font color="purple"><b>forkjoin</b></font> <a href="#task_prototype">task\_prototype</a> <font color="purple"><b>;</b></font>
  
<a name="interface_item"></a>**interface\_item**
:  <a href="#port_declaration">port\_declaration</a> <font color="purple"><b>;</b></font>  
        | <a href="#non_port_interface_item">non\_port\_interface\_item</a>
  
<a name="non_port_interface_item"></a>**non\_port\_interface\_item**
:  <a href="#generate_region">generate\_region</a>  
        | <a href="#interface_or_generate_item">interface\_or\_generate\_item</a>  
        | <a href="#program_declaration">program\_declaration</a>  
        | <a href="#interface_declaration">interface\_declaration</a>  
        | <a href="#timeunits_declaration">timeunits\_declaration</a> [^footnote_3]
  
## Program items
  
<a name="program_item"></a>**program\_item**
:  <a href="#port_declaration">port\_declaration</a> <font color="purple"><b>;</b></font>  
        | <a href="#non_port_program_item">non\_port\_program\_item</a>
  
<a name="non_port_program_item"></a>**non\_port\_program\_item**
:  { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#continuous_assign">continuous\_assign</a>  
        | { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#module_or_generate_item_declaration">module\_or\_generate\_item\_declaration</a>  
        | { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#initial_construct">initial\_construct</a>  
        | { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#final_construct">final\_construct</a>  
        | { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#concurrent_assertion_item">concurrent\_assertion\_item</a>  
        | <a href="#timeunits_declaration">timeunits\_declaration</a> [^footnote_3]  
        | <a href="#program_generate_item">program\_generate\_item</a>
  
<a name="program_generate_item"></a>**program\_generate\_item**[^footnote_5]
:  <a href="#loop_generate_construct">loop\_generate\_construct</a>  
        | <a href="#conditional_generate_construct">conditional\_generate\_construct</a>  
        | <a href="#generate_region">generate\_region</a>  
        | <a href="#elaboration_system_task">elaboration\_system\_task</a>
  
## Checker items
  
<a name="checker_port_list"></a>**checker\_port\_list**
:  <a href="#checker_port_item">checker\_port\_item</a>  { <font color="purple"><b>,</b></font> <a href="#checker_port_item">checker\_port\_item</a> }
  
<a name="checker_port_item"></a>**checker\_port\_item**
:  { <a href="#attribute_instance">attribute\_instance</a> }   \[ <a href="#checker_port_direction">checker\_port\_direction</a> ]  <a href="#property_formal_type">property\_formal\_type</a> <a href="#formal_port_identifier">formal\_port\_identifier</a>  { <a href="#variable_dimension">variable\_dimension</a> }   \[ <font color="purple"><b>=</b></font> <a href="#property_actual_arg">property\_actual\_arg</a> ]
  
<a name="checker_port_direction"></a>**checker\_port\_direction**
:  <font color="purple"><b>input</b></font>  
        | <font color="purple"><b>output</b></font>
  
<a name="checker_or_generate_item"></a>**checker\_or\_generate\_item**
:  <a href="#checker_or_generate_item_declaration">checker\_or\_generate\_item\_declaration</a>  
        | <a href="#initial_construct">initial\_construct</a>  
        | <a href="#always_construct">always\_construct</a>  
        | <a href="#final_construct">final\_construct</a>  
        | <a href="#assertion_item">assertion\_item</a>  
        | <a href="#continuous_assign">continuous\_assign</a>  
        | <a href="#checker_generate_item">checker\_generate\_item</a>
  
<a name="checker_or_generate_item_declaration"></a>**checker\_or\_generate\_item\_declaration**
:  \[ <font color="purple"><b>rand</b></font> ]  <a href="#data_declaration">data\_declaration</a>  
        | <a href="#function_declaration">function\_declaration</a>  
        | <a href="#checker_declaration">checker\_declaration</a>  
        | <a href="#assertion_item_declaration">assertion\_item\_declaration</a>  
        | <a href="#covergroup_declaration">covergroup\_declaration</a>  
        | <a href="#overload_declaration">overload\_declaration</a>  
        | <a href="#genvar_declaration">genvar\_declaration</a>  
        | <a href="#clocking_declaration">clocking\_declaration</a>  
        | <font color="purple"><b>default</b></font> <font color="purple"><b>clocking</b></font> <a href="#clocking_identifier">clocking\_identifier</a> <font color="purple"><b>;</b></font>  
        | <font color="purple"><b>default</b></font> <font color="purple"><b>disable</b></font> <font color="purple"><b>iff</b></font> <a href="#expression_or_dist">expression\_or\_dist</a> <font color="purple"><b>;</b></font>  
        | <font color="purple"><b>;</b></font>
  
<a name="checker_generate_item"></a>**checker\_generate\_item**[^footnote_6]
:  <a href="#loop_generate_construct">loop\_generate\_construct</a>  
        | <a href="#conditional_generate_construct">conditional\_generate\_construct</a>  
        | <a href="#generate_region">generate\_region</a>  
        | <a href="#elaboration_system_task">elaboration\_system\_task</a>
  
## Class items
  
<a name="class_item"></a>**class\_item**
:  { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#class_property">class\_property</a>  
        | { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#class_method">class\_method</a>  
        | { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#class_constraint">class\_constraint</a>  
        | { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#class_declaration">class\_declaration</a>  
        | { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#covergroup_declaration">covergroup\_declaration</a>  
        | <a href="#local_parameter_declaration">local\_parameter\_declaration</a> <font color="purple"><b>;</b></font>  
        | <a href="#parameter_declaration">parameter\_declaration</a> [^footnote_7] <font color="purple"><b>;</b></font>  
        | <font color="purple"><b>;</b></font>
  
<a name="class_property"></a>**class\_property**
:  { <a href="#property_qualifier">property\_qualifier</a> }  <a href="#data_declaration">data\_declaration</a>  
        | <font color="purple"><b>const</b></font>  { <a href="#class_item_qualifier">class\_item\_qualifier</a> }  <a href="#data_type">data\_type</a> <a href="#const_identifier">const\_identifier</a>  \[ <font color="purple"><b>=</b></font> <a href="#constant_expression">constant\_expression</a> ]  <font color="purple"><b>;</b></font>
  
<a name="class_method"></a>**class\_method**
:  { <a href="#method_qualifier">method\_qualifier</a> }  <a href="#task_declaration">task\_declaration</a>  
        | { <a href="#method_qualifier">method\_qualifier</a> }  <a href="#function_declaration">function\_declaration</a>  
        | <font color="purple"><b>pure</b></font> <font color="purple"><b>virtual</b></font>  { <a href="#class_item_qualifier">class\_item\_qualifier</a> }  <a href="#method_prototype">method\_prototype</a> <font color="purple"><b>;</b></font>  
        | <font color="purple"><b>extern</b></font>  { <a href="#method_qualifier">method\_qualifier</a> }  <a href="#method_prototype">method\_prototype</a> <font color="purple"><b>;</b></font>  
        | { <a href="#method_qualifier">method\_qualifier</a> }  <a href="#class_constructor_declaration">class\_constructor\_declaration</a>  
        | <font color="purple"><b>extern</b></font>  { <a href="#method_qualifier">method\_qualifier</a> }  <a href="#class_constructor_prototype">class\_constructor\_prototype</a>
  
<a name="class_constructor_prototype"></a>**class\_constructor\_prototype**
:  <font color="purple"><b>function</b></font> <font color="purple"><b>new</b></font>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#tf_port_list">tf\_port\_list</a> ]  <font color="purple"><b>)</b></font> ]  <font color="purple"><b>;</b></font>
  
<a name="class_constraint"></a>**class\_constraint**
:  <a href="#constraint_prototype">constraint\_prototype</a>  
        | <a href="#constraint_declaration">constraint\_declaration</a>
  
<a name="class_item_qualifier"></a>**class\_item\_qualifier**[^footnote_8]
:  <font color="purple"><b>static</b></font>  
        | <font color="purple"><b>protected</b></font>  
        | <font color="purple"><b>local</b></font>
  
<a name="property_qualifier"></a>**property\_qualifier**[^footnote_8]
:  <a href="#random_qualifier">random\_qualifier</a>  
        | <a href="#class_item_qualifier">class\_item\_qualifier</a>
  
<a name="random_qualifier"></a>**random\_qualifier**[^footnote_8]
:  <font color="purple"><b>rand</b></font>  
        | <font color="purple"><b>randc</b></font>
  
<a name="method_qualifier"></a>**method\_qualifier**[^footnote_8]
:  \[ <font color="purple"><b>pure</b></font> ]  <font color="purple"><b>virtual</b></font>  
        | <a href="#class_item_qualifier">class\_item\_qualifier</a>
  
<a name="method_prototype"></a>**method\_prototype**
:  <a href="#task_prototype">task\_prototype</a>  
        | <a href="#function_prototype">function\_prototype</a>
  
<a name="class_constructor_declaration"></a>**class\_constructor\_declaration**
:  <font color="purple"><b>function</b></font>  \[ <a href="#class_scope">class\_scope</a> ]  <font color="purple"><b>new</b></font>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#tf_port_list">tf\_port\_list</a> ]  <font color="purple"><b>)</b></font> ]  <font color="purple"><b>;</b></font>  { <a href="#block_item_declaration">block\_item\_declaration</a> }   \[ <font color="purple"><b>super</b></font> <font color="purple"><b>.</b></font> <font color="purple"><b>new</b></font>  \[ <font color="purple"><b>(</b></font> <a href="#list_of_arguments">list\_of\_arguments</a> <font color="purple"><b>)</b></font> ]  <font color="purple"><b>;</b></font> ]   { <a href="#function_statement_or_null">function\_statement\_or\_null</a> }  <font color="purple"><b>endfunction</b></font>  \[ <font color="purple"><b>:</b></font> <font color="purple"><b>new</b></font> ]
  
## Constraints
  
<a name="constraint_declaration"></a>**constraint\_declaration**
:  \[ <font color="purple"><b>static</b></font> ]  <font color="purple"><b>constraint</b></font> <a href="#constraint_identifier">constraint\_identifier</a> <a href="#constraint_block">constraint\_block</a>
  
<a name="constraint_block"></a>**constraint\_block**
:  <font color="purple"><b>{</b></font>  { <a href="#constraint_block_item">constraint\_block\_item</a> }  <font color="purple"><b>}</b></font>
  
<a name="constraint_block_item"></a>**constraint\_block\_item**
:  <font color="purple"><b>solve</b></font> <a href="#solve_before_list">solve\_before\_list</a> <font color="purple"><b>before</b></font> <a href="#solve_before_list">solve\_before\_list</a> <font color="purple"><b>;</b></font>  
        | <a href="#constraint_expression">constraint\_expression</a>
  
<a name="solve_before_list"></a>**solve\_before\_list**
:  <a href="#constraint_primary">constraint\_primary</a>  { <font color="purple"><b>,</b></font> <a href="#constraint_primary">constraint\_primary</a> }
  
<a name="constraint_primary"></a>**constraint\_primary**
:  \[ <a href="#implicit_class_handle">implicit\_class\_handle</a> <font color="purple"><b>.</b></font> | <a href="#class_scope">class\_scope</a> ]  <a href="#hierarchical_identifier">hierarchical\_identifier</a> <a href="#select">select</a>
  
<a name="constraint_expression"></a>**constraint\_expression**
:  \[ <font color="purple"><b>soft</b></font> ]  <a href="#expression_or_dist">expression\_or\_dist</a> <font color="purple"><b>;</b></font>  
        | <a href="#uniqueness_constraint">uniqueness\_constraint</a> <font color="purple"><b>;</b></font>  
        | <a href="#expression">expression</a> <font color="purple"><b>-&gt;</b></font> <a href="#constraint_set">constraint\_set</a>  
        | <font color="purple"><b>if</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#constraint_set">constraint\_set</a>  \[ <font color="purple"><b>else</b></font> <a href="#constraint_set">constraint\_set</a> ]  
        | <font color="purple"><b>foreach</b></font> <font color="purple"><b>(</b></font> <a href="#ps_or_hierarchical_array_identifier">ps\_or\_hierarchical\_array\_identifier</a>  \[ <a href="#loop_variables">loop\_variables</a> ]  <font color="purple"><b>)</b></font> <a href="#constraint_set">constraint\_set</a>  
        | <font color="purple"><b>disable</b></font> <font color="purple"><b>soft</b></font> <a href="#constraint_primary">constraint\_primary</a> <font color="purple"><b>;</b></font>
  
<a name="uniqueness_constraint"></a>**uniqueness\_constraint**[^footnote_9]
:  <font color="purple"><b>unique</b></font> <font color="purple"><b>{</b></font> <a href="#open_range_list">open\_range\_list</a> <font color="purple"><b>}</b></font>
  
<a name="constraint_set"></a>**constraint\_set**
:  <a href="#constraint_expression">constraint\_expression</a>  
        | <font color="purple"><b>{</b></font>  { <a href="#constraint_expression">constraint\_expression</a> }  <font color="purple"><b>}</b></font>
  
<a name="dist_list"></a>**dist\_list**
:  <a href="#dist_item">dist\_item</a>  { <font color="purple"><b>,</b></font> <a href="#dist_item">dist\_item</a> }
  
<a name="dist_item"></a>**dist\_item**
:  <a href="#value_range">value\_range</a>  \[ <a href="#dist_weight">dist\_weight</a> ]
  
<a name="dist_weight"></a>**dist\_weight**
:  <font color="purple"><b>:=</b></font> <a href="#expression">expression</a>  
        | <font color="purple"><b>:/</b></font> <a href="#expression">expression</a>
  
<a name="constraint_prototype"></a>**constraint\_prototype**
:  \[ <a href="#constraint_prototype_qualifier">constraint\_prototype\_qualifier</a> ]   \[ <font color="purple"><b>static</b></font> ]  <font color="purple"><b>constraint</b></font> <a href="#constraint_identifier">constraint\_identifier</a> <font color="purple"><b>;</b></font>
  
<a name="constraint_prototype_qualifier"></a>**constraint\_prototype\_qualifier**
:  <font color="purple"><b>extern</b></font>  
        | <font color="purple"><b>pure</b></font>
  
<a name="extern_constraint_declaration"></a>**extern\_constraint\_declaration**
:  \[ <font color="purple"><b>static</b></font> ]  <font color="purple"><b>constraint</b></font> <a href="#class_scope">class\_scope</a> <a href="#constraint_identifier">constraint\_identifier</a> <a href="#constraint_block">constraint\_block</a>
  
<a name="identifier_list"></a>**identifier\_list**
:  <a href="#identifier">identifier</a>  { <font color="purple"><b>,</b></font> <a href="#identifier">identifier</a> }
  
## Package items
  
<a name="package_item"></a>**package\_item**
:  <a href="#package_or_generate_item_declaration">package\_or\_generate\_item\_declaration</a>  
        | <a href="#anonymous_program">anonymous\_program</a>  
        | <a href="#package_export_declaration">package\_export\_declaration</a>  
        | <a href="#timeunits_declaration">timeunits\_declaration</a> [^footnote_3]
  
<a name="package_or_generate_item_declaration"></a>**package\_or\_generate\_item\_declaration**
:  <a href="#net_declaration">net\_declaration</a>  
        | <a href="#data_declaration">data\_declaration</a>  
        | <a href="#task_declaration">task\_declaration</a>  
        | <a href="#function_declaration">function\_declaration</a>  
        | <a href="#checker_declaration">checker\_declaration</a>  
        | <a href="#dpi_import_export">dpi\_import\_export</a>  
        | <a href="#extern_constraint_declaration">extern\_constraint\_declaration</a>  
        | <a href="#class_declaration">class\_declaration</a>  
        | <a href="#class_constructor_declaration">class\_constructor\_declaration</a>  
        | <a href="#local_parameter_declaration">local\_parameter\_declaration</a> <font color="purple"><b>;</b></font>  
        | <a href="#parameter_declaration">parameter\_declaration</a> <font color="purple"><b>;</b></font>  
        | <a href="#covergroup_declaration">covergroup\_declaration</a>  
        | <a href="#overload_declaration">overload\_declaration</a>  
        | <a href="#assertion_item_declaration">assertion\_item\_declaration</a>  
        | <font color="purple"><b>;</b></font>
  
<a name="anonymous_program"></a>**anonymous\_program**
:  <font color="purple"><b>program</b></font> <font color="purple"><b>;</b></font>  { <a href="#anonymous_program_item">anonymous\_program\_item</a> }  <font color="purple"><b>endprogram</b></font>
  
<a name="anonymous_program_item"></a>**anonymous\_program\_item**
:  <a href="#task_declaration">task\_declaration</a>  
        | <a href="#function_declaration">function\_declaration</a>  
        | <a href="#class_declaration">class\_declaration</a>  
        | <a href="#covergroup_declaration">covergroup\_declaration</a>  
        | <a href="#class_constructor_declaration">class\_constructor\_declaration</a>  
        | <font color="purple"><b>;</b></font>
  
## Declarations
  
### Declaration types
  
#### Module parameter declarations
  
<a name="local_parameter_declaration"></a>**local\_parameter\_declaration**
:  <font color="purple"><b>localparam</b></font> <a href="#data_type_or_implicit">data\_type\_or\_implicit</a> <a href="#list_of_param_assignments">list\_of\_param\_assignments</a>  
        | <font color="purple"><b>localparam</b></font> <font color="purple"><b>type</b></font> <a href="#list_of_type_assignments">list\_of\_type\_assignments</a>
  
<a name="parameter_declaration"></a>**parameter\_declaration**
:  <font color="purple"><b>parameter</b></font> <a href="#data_type_or_implicit">data\_type\_or\_implicit</a> <a href="#list_of_param_assignments">list\_of\_param\_assignments</a>  
        | <font color="purple"><b>parameter</b></font> <font color="purple"><b>type</b></font> <a href="#list_of_type_assignments">list\_of\_type\_assignments</a>
  
<a name="specparam_declaration"></a>**specparam\_declaration**
:  <font color="purple"><b>specparam</b></font>  \[ <a href="#packed_dimension">packed\_dimension</a> ]  <a href="#list_of_specparam_assignments">list\_of\_specparam\_assignments</a> <font color="purple"><b>;</b></font>
  
#### Port declarations
  
<a name="inout_declaration"></a>**inout\_declaration**
:  <font color="purple"><b>inout</b></font> <a href="#net_port_type">net\_port\_type</a> <a href="#list_of_port_identifiers">list\_of\_port\_identifiers</a>
  
<a name="input_declaration"></a>**input\_declaration**
:  <font color="purple"><b>input</b></font> <a href="#net_port_type">net\_port\_type</a> <a href="#list_of_port_identifiers">list\_of\_port\_identifiers</a>  
        | <font color="purple"><b>input</b></font> <a href="#variable_port_type">variable\_port\_type</a> <a href="#list_of_variable_identifiers">list\_of\_variable\_identifiers</a>
  
<a name="output_declaration"></a>**output\_declaration**
:  <font color="purple"><b>output</b></font> <a href="#net_port_type">net\_port\_type</a> <a href="#list_of_port_identifiers">list\_of\_port\_identifiers</a>  
        | <font color="purple"><b>output</b></font> <a href="#variable_port_type">variable\_port\_type</a> <a href="#list_of_variable_port_identifiers">list\_of\_variable\_port\_identifiers</a>
  
<a name="interface_port_declaration"></a>**interface\_port\_declaration**
:  <a href="#interface_identifier">interface\_identifier</a> <a href="#list_of_interface_identifiers">list\_of\_interface\_identifiers</a>  
        | <a href="#interface_identifier">interface\_identifier</a> <font color="purple"><b>.</b></font> <a href="#modport_identifier">modport\_identifier</a> <a href="#list_of_interface_identifiers">list\_of\_interface\_identifiers</a>
  
<a name="ref_declaration"></a>**ref\_declaration**
:  <font color="purple"><b>ref</b></font> <a href="#variable_port_type">variable\_port\_type</a> <a href="#list_of_variable_identifiers">list\_of\_variable\_identifiers</a>
  
#### Type declarations
  
<a name="data_declaration"></a>**data\_declaration**[^footnote_10]
:  \[ <font color="purple"><b>const</b></font> ]   \[ <font color="purple"><b>var</b></font> ]   \[ <a href="#lifetime">lifetime</a> ]  <a href="#data_type_or_implicit">data\_type\_or\_implicit</a> <a href="#list_of_variable_decl_assignments">list\_of\_variable\_decl\_assignments</a> <font color="purple"><b>;</b></font>  
        | <a href="#type_declaration">type\_declaration</a>  
        | <a href="#package_import_declaration">package\_import\_declaration</a> [^footnote_11]  
        | <a href="#net_type_declaration">net\_type\_declaration</a>
  
<a name="package_import_declaration"></a>**package\_import\_declaration**
:  <font color="purple"><b>import</b></font> <a href="#package_import_item">package\_import\_item</a>  { <font color="purple"><b>,</b></font> <a href="#package_import_item">package\_import\_item</a> }  <font color="purple"><b>;</b></font>
  
<a name="package_import_item"></a>**package\_import\_item**
:  <a href="#package_identifier">package\_identifier</a> <font color="purple"><b>::</b></font> <a href="#identifier">identifier</a>  
        | <a href="#package_identifier">package\_identifier</a> <font color="purple"><b>::</b></font> <font color="purple"><b>\*</b></font>
  
<a name="package_export_declaration"></a>**package\_export\_declaration**
:  <font color="purple"><b>export</b></font> <font color="purple"><b>\*::\*</b></font> <font color="purple"><b>;</b></font>  
        | <font color="purple"><b>export</b></font> <a href="#package_import_item">package\_import\_item</a>  { <font color="purple"><b>,</b></font> <a href="#package_import_item">package\_import\_item</a> }  <font color="purple"><b>;</b></font>
  
<a name="genvar_declaration"></a>**genvar\_declaration**
:  <font color="purple"><b>genvar</b></font> <a href="#list_of_genvar_identifiers">list\_of\_genvar\_identifiers</a> <font color="purple"><b>;</b></font>
  
<a name="net_declaration"></a>**net\_declaration**[^footnote_12]
:  <a href="#net_type">net\_type</a>  \[ <a href="#drive_strength">drive\_strength</a> | <a href="#charge_strength">charge\_strength</a> ]   \[ <font color="purple"><b>vectored</b></font> | <font color="purple"><b>scalared</b></font> ]  <a href="#data_type_or_implicit">data\_type\_or\_implicit</a>  \[ <a href="#delay3">delay3</a> ]  <a href="#list_of_net_decl_assignments">list\_of\_net\_decl\_assignments</a> <font color="purple"><b>;</b></font>  
        | <a href="#net_type_identifier">net\_type\_identifier</a>  \[ <a href="#delay_control">delay\_control</a> ]  <a href="#list_of_net_decl_assignments">list\_of\_net\_decl\_assignments</a> <font color="purple"><b>;</b></font>  
        | <font color="purple"><b>interconnect</b></font> <a href="#implicit_data_type">implicit\_data\_type</a>  \[ <font color="purple"><b>#</b></font> <a href="#delay_value">delay\_value</a> ]  <a href="#net_identifier">net\_identifier</a>  { <a href="#unpacked_dimension">unpacked\_dimension</a> }   \[ <font color="purple"><b>,</b></font> <a href="#net_identifier">net\_identifier</a>  { <a href="#unpacked_dimension">unpacked\_dimension</a> } ]  <font color="purple"><b>;</b></font>
  
<a name="type_declaration"></a>**type\_declaration**
:  <font color="purple"><b>typedef</b></font> <a href="#data_type">data\_type</a> <a href="#type_identifier">type\_identifier</a>  { <a href="#variable_dimension">variable\_dimension</a> }  <font color="purple"><b>;</b></font>  
        | <font color="purple"><b>typedef</b></font> <a href="#interface_instance_identifier">interface\_instance\_identifier</a> <a href="#constant_bit_select">constant\_bit\_select</a> <font color="purple"><b>.</b></font> <a href="#type_identifier">type\_identifier</a> <a href="#type_identifier">type\_identifier</a> <font color="purple"><b>;</b></font>  
        | <font color="purple"><b>typedef</b></font>  \[ <font color="purple"><b>enum</b></font> | <font color="purple"><b>struct</b></font> | <font color="purple"><b>union</b></font> | <font color="purple"><b>class</b></font> | <font color="purple"><b>interface</b></font> <font color="purple"><b>class</b></font> ]  <a href="#type_identifier">type\_identifier</a> <font color="purple"><b>;</b></font>
  
<a name="net_type_declaration"></a>**net\_type\_declaration**
:  <font color="purple"><b>nettype</b></font> <a href="#data_type">data\_type</a> <a href="#net_type_identifier">net\_type\_identifier</a>  \[ <font color="purple"><b>with</b></font>  \[ <a href="#package_scope">package\_scope</a> | <a href="#class_scope">class\_scope</a> ]  <a href="#tf_identifier">tf\_identifier</a> ]  <font color="purple"><b>;</b></font>  
        | <font color="purple"><b>nettype</b></font>  \[ <a href="#package_scope">package\_scope</a> | <a href="#class_scope">class\_scope</a> ]  <a href="#net_type_identifier">net\_type\_identifier</a> <a href="#net_type_identifier">net\_type\_identifier</a> <font color="purple"><b>;</b></font>
  
<a name="lifetime"></a>**lifetime**
:  <font color="purple"><b>static</b></font>  
        | <font color="purple"><b>automatic</b></font>
  
### Declaration data types
  
#### Net and variable types
  
<a name="casting_type"></a>**casting\_type**
:  <a href="#simple_type">simple\_type</a>  
        | <a href="#constant_primary">constant\_primary</a>  
        | <a href="#signing">signing</a>  
        | <font color="purple"><b>string</b></font>  
        | <font color="purple"><b>const</b></font>
  
<a name="data_type"></a>**data\_type**
:  <a href="#integer_vector_type">integer\_vector\_type</a>  \[ <a href="#signing">signing</a> ]   { <a href="#packed_dimension">packed\_dimension</a> }  
        | <a href="#integer_atom_type">integer\_atom\_type</a>  \[ <a href="#signing">signing</a> ]  
        | <a href="#non_integer_type">non\_integer\_type</a>  
        | <a href="#struct_union">struct\_union</a>  \[ <font color="purple"><b>packed</b></font>  \[ <a href="#signing">signing</a> ] ]  <font color="purple"><b>{</b></font> <a href="#struct_union_member">struct\_union\_member</a>  { <a href="#struct_union_member">struct\_union\_member</a> }  <font color="purple"><b>}</b></font>  { <a href="#packed_dimension">packed\_dimension</a> }  
        | <font color="purple"><b>enum</b></font>  \[ <a href="#enum_base_type">enum\_base\_type</a> ]  <font color="purple"><b>{</b></font> <a href="#enum_name_declaration">enum\_name\_declaration</a>  { <font color="purple"><b>,</b></font> <a href="#enum_name_declaration">enum\_name\_declaration</a> }  <font color="purple"><b>}</b></font>  { <a href="#packed_dimension">packed\_dimension</a> }  [^footnote_13]  
        | <font color="purple"><b>string</b></font>  
        | <font color="purple"><b>chandle</b></font>  
        | <font color="purple"><b>virtual</b></font>  \[ <font color="purple"><b>interface</b></font> ]  <a href="#interface_identifier">interface\_identifier</a>  \[ <a href="#parameter_value_assignment">parameter\_value\_assignment</a> ]   \[ <font color="purple"><b>.</b></font> <a href="#modport_identifier">modport\_identifier</a> ]  
        | \[ <a href="#class_scope">class\_scope</a> | <a href="#package_scope">package\_scope</a> ]  <a href="#type_identifier">type\_identifier</a>  { <a href="#packed_dimension">packed\_dimension</a> }  
        | <a href="#class_type">class\_type</a>  
        | <font color="purple"><b>event</b></font>  
        | <a href="#ps_covergroup_identifier">ps\_covergroup\_identifier</a>  
        | <a href="#type_reference">type\_reference</a> [^footnote_14]
  
<a name="data_type_or_implicit"></a>**data\_type\_or\_implicit**
:  <a href="#data_type">data\_type</a>  
        | <a href="#implicit_data_type">implicit\_data\_type</a>
  
<a name="implicit_data_type"></a>**implicit\_data\_type**
:  \[ <a href="#signing">signing</a> ]   { <a href="#packed_dimension">packed\_dimension</a> }
  
<a name="enum_base_type"></a>**enum\_base\_type**
:  <a href="#integer_atom_type">integer\_atom\_type</a>  \[ <a href="#signing">signing</a> ]  
        | <a href="#integer_vector_type">integer\_vector\_type</a>  \[ <a href="#signing">signing</a> ]   \[ <a href="#packed_dimension">packed\_dimension</a> ]  
        | <a href="#type_identifier">type\_identifier</a>  \[ <a href="#packed_dimension">packed\_dimension</a> ]  [^footnote_14]
  
<a name="enum_name_declaration"></a>**enum\_name\_declaration**
:  <a href="#enum_identifier">enum\_identifier</a>  \[ <font color="purple"><b>\[</b></font> <a href="#integral_number">integral\_number</a>  \[ <font color="purple"><b>:</b></font> <a href="#integral_number">integral\_number</a> ]  <font color="purple"><b>]</b></font> ]   \[ <font color="purple"><b>=</b></font> <a href="#constant_expression">constant\_expression</a> ]
  
<a name="class_scope"></a>**class\_scope**
:  <a href="#class_type">class\_type</a> <font color="purple"><b>::</b></font>
  
<a name="class_type"></a>**class\_type**
:  <a href="#ps_class_identifier">ps\_class\_identifier</a>  \[ <a href="#parameter_value_assignment">parameter\_value\_assignment</a> ]   { <font color="purple"><b>::</b></font> <a href="#class_identifier">class\_identifier</a>  \[ <a href="#parameter_value_assignment">parameter\_value\_assignment</a> ] }
  
<a name="integer_type"></a>**integer\_type**
:  <a href="#integer_vector_type">integer\_vector\_type</a>  
        | <a href="#integer_atom_type">integer\_atom\_type</a>
  
<a name="integer_atom_type"></a>**integer\_atom\_type**
:  <font color="purple"><b>byte</b></font>  
        | <font color="purple"><b>shortint</b></font>  
        | <font color="purple"><b>int</b></font>  
        | <font color="purple"><b>longint</b></font>  
        | <font color="purple"><b>integer</b></font>  
        | <font color="purple"><b>time</b></font>
  
<a name="integer_vector_type"></a>**integer\_vector\_type**
:  <font color="purple"><b>bit</b></font>  
        | <font color="purple"><b>logic</b></font>  
        | <font color="purple"><b>reg</b></font>
  
<a name="non_integer_type"></a>**non\_integer\_type**
:  <font color="purple"><b>shortreal</b></font>  
        | <font color="purple"><b>real</b></font>  
        | <font color="purple"><b>realtime</b></font>
  
<a name="net_type"></a>**net\_type**
:  <font color="purple"><b>supply0</b></font>  
        | <font color="purple"><b>supply1</b></font>  
        | <font color="purple"><b>tri</b></font>  
        | <font color="purple"><b>triand</b></font>  
        | <font color="purple"><b>trior</b></font>  
        | <font color="purple"><b>trireg</b></font>  
        | <font color="purple"><b>tri0</b></font>  
        | <font color="purple"><b>tri1</b></font>  
        | <font color="purple"><b>uwire</b></font>  
        | <font color="purple"><b>wire</b></font>  
        | <font color="purple"><b>wand | wor</b></font>
  
<a name="net_port_type"></a>**net\_port\_type**
:  \[ <a href="#net_type">net\_type</a> ]  <a href="#data_type_or_implicit">data\_type\_or\_implicit</a>  
        | <a href="#net_type_identifier">net\_type\_identifier</a>  
        | <font color="purple"><b>interconnect</b></font> <a href="#implicit_data_type">implicit\_data\_type</a>
  
<a name="variable_port_type"></a>**variable\_port\_type**
:  <a href="#var_data_type">var\_data\_type</a>
  
<a name="var_data_type"></a>**var\_data\_type**
:  <a href="#data_type">data\_type</a>  
        | <font color="purple"><b>var</b></font> <a href="#data_type_or_implicit">data\_type\_or\_implicit</a>
  
<a name="signing"></a>**signing**
:  <font color="purple"><b>signed</b></font>  
        | <font color="purple"><b>unsigned</b></font>
  
<a name="simple_type"></a>**simple\_type**
:  <a href="#integer_type">integer\_type</a>  
        | <a href="#non_integer_type">non\_integer\_type</a>  
        | <a href="#ps_type_identifier">ps\_type\_identifier</a>  
        | <a href="#ps_parameter_identifier">ps\_parameter\_identifier</a>
  
<a name="struct_union_member"></a>**struct\_union\_member**[^footnote_16]
:  { <a href="#attribute_instance">attribute\_instance</a> }   \[ <a href="#random_qualifier">random\_qualifier</a> ]  <a href="#data_type_or_void">data\_type\_or\_void</a> <a href="#list_of_variable_decl_assignments">list\_of\_variable\_decl\_assignments</a> <font color="purple"><b>;</b></font>
  
<a name="data_type_or_void"></a>**data\_type\_or\_void**
:  <a href="#data_type">data\_type</a>  
        | <font color="purple"><b>void</b></font>
  
<a name="struct_union"></a>**struct\_union**
:  <font color="purple"><b>struct</b></font>  
        | <font color="purple"><b>union</b></font>  \[ <font color="purple"><b>tagged</b></font> ]
  
<a name="type_reference"></a>**type\_reference**
:  <font color="purple"><b>type</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> [^footnote_17] <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>type</b></font> <font color="purple"><b>(</b></font> <a href="#data_type">data\_type</a> <font color="purple"><b>)</b></font>
  
#### Strengths
  
<a name="drive_strength"></a>**drive\_strength**
:  <font color="purple"><b>(</b></font> <a href="#strength0">strength0</a> <font color="purple"><b>,</b></font> <a href="#strength1">strength1</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>(</b></font> <a href="#strength1">strength1</a> <font color="purple"><b>,</b></font> <a href="#strength0">strength0</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>(</b></font> <a href="#strength0">strength0</a> <font color="purple"><b>,</b></font> <font color="purple"><b>highz1</b></font> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>(</b></font> <a href="#strength1">strength1</a> <font color="purple"><b>,</b></font> <font color="purple"><b>highz0</b></font> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>(</b></font> <font color="purple"><b>highz0</b></font> <font color="purple"><b>,</b></font> <a href="#strength1">strength1</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>(</b></font> <font color="purple"><b>highz1</b></font> <font color="purple"><b>,</b></font> <a href="#strength0">strength0</a> <font color="purple"><b>)</b></font>
  
<a name="strength0"></a>**strength0**
:  <font color="purple"><b>supply0</b></font>  
        | <font color="purple"><b>strong0</b></font>  
        | <font color="purple"><b>pull0</b></font>  
        | <font color="purple"><b>weak0</b></font>
  
<a name="strength1"></a>**strength1**
:  <font color="purple"><b>supply1</b></font>  
        | <font color="purple"><b>strong1</b></font>  
        | <font color="purple"><b>pull1</b></font>  
        | <font color="purple"><b>weak1</b></font>
  
<a name="charge_strength"></a>**charge\_strength**
:  <font color="purple"><b>(</b></font> <font color="purple"><b>small</b></font> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>(</b></font> <font color="purple"><b>medium</b></font> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>(</b></font> <font color="purple"><b>large</b></font> <font color="purple"><b>)</b></font>
  
#### Delays
  
<a name="delay3"></a>**delay3**
:  <font color="purple"><b>#</b></font> <a href="#delay_value">delay\_value</a>  
        | <font color="purple"><b>#</b></font> <font color="purple"><b>(</b></font> <a href="#mintypmax_expression">mintypmax\_expression</a>  \[ <font color="purple"><b>,</b></font> <a href="#mintypmax_expression">mintypmax\_expression</a>  \[ <font color="purple"><b>,</b></font> <a href="#mintypmax_expression">mintypmax\_expression</a> ] ]  <font color="purple"><b>)</b></font>
  
<a name="delay2"></a>**delay2**
:  <font color="purple"><b>#</b></font> <a href="#delay_value">delay\_value</a>  
        | <font color="purple"><b>#</b></font> <font color="purple"><b>(</b></font> <a href="#mintypmax_expression">mintypmax\_expression</a>  \[ <font color="purple"><b>,</b></font> <a href="#mintypmax_expression">mintypmax\_expression</a> ]  <font color="purple"><b>)</b></font>
  
<a name="delay_value"></a>**delay\_value**
:  <a href="#unsigned_number">unsigned\_number</a>  
        | <a href="#real_number">real\_number</a>  
        | <a href="#ps_identifier">ps\_identifier</a>  
        | <a href="#time_literal">time\_literal</a>  
        | <font color="purple"><b>1step</b></font>
  
### Declaration lists
  
<a name="list_of_defparam_assignments"></a>**list\_of\_defparam\_assignments**
:  <a href="#defparam_assignment">defparam\_assignment</a>  { <font color="purple"><b>,</b></font> <a href="#defparam_assignment">defparam\_assignment</a> }
  
<a name="list_of_genvar_identifiers"></a>**list\_of\_genvar\_identifiers**
:  <a href="#genvar_identifier">genvar\_identifier</a>  { <font color="purple"><b>,</b></font> <a href="#genvar_identifier">genvar\_identifier</a> }
  
<a name="list_of_interface_identifiers"></a>**list\_of\_interface\_identifiers**
:  <a href="#interface_identifier">interface\_identifier</a>  { <a href="#unpacked_dimension">unpacked\_dimension</a> }   { <font color="purple"><b>,</b></font> <a href="#interface_identifier">interface\_identifier</a>  { <a href="#unpacked_dimension">unpacked\_dimension</a> } }
  
<a name="list_of_net_decl_assignments"></a>**list\_of\_net\_decl\_assignments**
:  <a href="#net_decl_assignment">net\_decl\_assignment</a>  { <font color="purple"><b>,</b></font> <a href="#net_decl_assignment">net\_decl\_assignment</a> }
  
<a name="list_of_param_assignments"></a>**list\_of\_param\_assignments**
:  <a href="#param_assignment">param\_assignment</a>  { <font color="purple"><b>,</b></font> <a href="#param_assignment">param\_assignment</a> }
  
<a name="list_of_port_identifiers"></a>**list\_of\_port\_identifiers**
:  <a href="#port_identifier">port\_identifier</a>  { <a href="#unpacked_dimension">unpacked\_dimension</a> }   { <font color="purple"><b>,</b></font> <a href="#port_identifier">port\_identifier</a>  { <a href="#unpacked_dimension">unpacked\_dimension</a> } }
  
<a name="list_of_udp_port_identifiers"></a>**list\_of\_udp\_port\_identifiers**
:  <a href="#port_identifier">port\_identifier</a>  { <font color="purple"><b>,</b></font> <a href="#port_identifier">port\_identifier</a> }
  
<a name="list_of_specparam_assignments"></a>**list\_of\_specparam\_assignments**
:  <a href="#specparam_assignment">specparam\_assignment</a>  { <font color="purple"><b>,</b></font> <a href="#specparam_assignment">specparam\_assignment</a> }
  
<a name="list_of_tf_variable_identifiers"></a>**list\_of\_tf\_variable\_identifiers**
:  <a href="#port_identifier">port\_identifier</a>  { <a href="#variable_dimension">variable\_dimension</a> }   \[ <font color="purple"><b>=</b></font> <a href="#expression">expression</a> ]   { <font color="purple"><b>,</b></font> <a href="#port_identifier">port\_identifier</a>  { <a href="#variable_dimension">variable\_dimension</a> }   \[ <font color="purple"><b>=</b></font> <a href="#expression">expression</a> ] }
  
<a name="list_of_type_assignments"></a>**list\_of\_type\_assignments**
:  <a href="#type_assignment">type\_assignment</a>  { <font color="purple"><b>,</b></font> <a href="#type_assignment">type\_assignment</a> }
  
<a name="list_of_variable_decl_assignments"></a>**list\_of\_variable\_decl\_assignments**
:  <a href="#variable_decl_assignment">variable\_decl\_assignment</a>  { <font color="purple"><b>,</b></font> <a href="#variable_decl_assignment">variable\_decl\_assignment</a> }
  
<a name="list_of_variable_identifiers"></a>**list\_of\_variable\_identifiers**
:  <a href="#variable_identifier">variable\_identifier</a>  { <a href="#variable_dimension">variable\_dimension</a> }   { <font color="purple"><b>,</b></font> <a href="#variable_identifier">variable\_identifier</a>  { <a href="#variable_dimension">variable\_dimension</a> } }
  
<a name="list_of_variable_port_identifiers"></a>**list\_of\_variable\_port\_identifiers**
:  <a href="#port_identifier">port\_identifier</a>  { <a href="#variable_dimension">variable\_dimension</a> }   \[ <font color="purple"><b>=</b></font> <a href="#constant_expression">constant\_expression</a> ]   { <font color="purple"><b>,</b></font> <a href="#port_identifier">port\_identifier</a>  { <a href="#variable_dimension">variable\_dimension</a> }   \[ <font color="purple"><b>=</b></font> <a href="#constant_expression">constant\_expression</a> ] }
  
### Declaration assignments
  
<a name="defparam_assignment"></a>**defparam\_assignment**
:  <a href="#hierarchical_parameter_identifier">hierarchical\_parameter\_identifier</a> <font color="purple"><b>=</b></font> <a href="#constant_mintypmax_expression">constant\_mintypmax\_expression</a>
  
<a name="net_decl_assignment"></a>**net\_decl\_assignment**
:  <a href="#net_identifier">net\_identifier</a>  { <a href="#unpacked_dimension">unpacked\_dimension</a> }   \[ <font color="purple"><b>=</b></font> <a href="#expression">expression</a> ]
  
<a name="param_assignment"></a>**param\_assignment**
:  <a href="#parameter_identifier">parameter\_identifier</a>  { <a href="#unpacked_dimension">unpacked\_dimension</a> }   \[ <font color="purple"><b>=</b></font> <a href="#constant_param_expression">constant\_param\_expression</a> ]
  
<a name="specparam_assignment"></a>**specparam\_assignment**
:  <a href="#specparam_identifier">specparam\_identifier</a> <font color="purple"><b>=</b></font> <a href="#constant_mintypmax_expression">constant\_mintypmax\_expression</a>  
        | <a href="#pulse_control_specparam">pulse\_control\_specparam</a>
  
<a name="type_assignment"></a>**type\_assignment**
:  <a href="#type_identifier">type\_identifier</a>  \[ <font color="purple"><b>=</b></font> <a href="#data_type">data\_type</a> ]  [^footnote_18]
  
<a name="pulse_control_specparam"></a>**pulse\_control\_specparam**
:  <font color="purple"><b>PATHPULSE$</b></font> <font color="purple"><b>=</b></font> <font color="purple"><b>(</b></font> <a href="#reject_limit_value">reject\_limit\_value</a>  \[ <font color="purple"><b>,</b></font> <a href="#error_limit_value">error\_limit\_value</a> ]  <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>PATHPULSE$</b></font> <a href="#specify_input_terminal_descriptor">specify\_input\_terminal\_descriptor</a> <font color="purple"><b>$</b></font> <a href="#specify_output_terminal_descriptor">specify\_output\_terminal\_descriptor</a> <font color="purple"><b>=</b></font> <font color="purple"><b>(</b></font> <a href="#reject_limit_value">reject\_limit\_value</a>  \[ <font color="purple"><b>,</b></font> <a href="#error_limit_value">error\_limit\_value</a> ]  <font color="purple"><b>)</b></font>
  
<a name="error_limit_value"></a>**error\_limit\_value**
:  <a href="#limit_value">limit\_value</a>
  
<a name="reject_limit_value"></a>**reject\_limit\_value**
:  <a href="#limit_value">limit\_value</a>
  
<a name="limit_value"></a>**limit\_value**
:  <a href="#constant_mintypmax_expression">constant\_mintypmax\_expression</a>
  
<a name="variable_decl_assignment"></a>**variable\_decl\_assignment**
:  <a href="#variable_identifier">variable\_identifier</a>  { <a href="#variable_dimension">variable\_dimension</a> }   \[ <font color="purple"><b>=</b></font> <a href="#expression">expression</a> ]  
        | <a href="#dynamic_array_variable_identifier">dynamic\_array\_variable\_identifier</a> <a href="#unsized_dimension">unsized\_dimension</a>  { <a href="#variable_dimension">variable\_dimension</a> }   \[ <font color="purple"><b>=</b></font> <a href="#dynamic_array_new">dynamic\_array\_new</a> ]  
        | <a href="#class_variable_identifier">class\_variable\_identifier</a>  \[ <font color="purple"><b>=</b></font> <a href="#class_new">class\_new</a> ]
  
<a name="class_new"></a>**class\_new**[^footnote_19]
:  \[ <a href="#class_scope">class\_scope</a> ]  <font color="purple"><b>new</b></font>  \[ <font color="purple"><b>(</b></font> <a href="#list_of_arguments">list\_of\_arguments</a> <font color="purple"><b>)</b></font> ]  
        | <font color="purple"><b>new</b></font> <a href="#expression">expression</a>
  
<a name="dynamic_array_new"></a>**dynamic\_array\_new**
:  <font color="purple"><b>new</b></font> <font color="purple"><b>\[</b></font> <a href="#expression">expression</a> <font color="purple"><b>]</b></font>  \[ <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> ]
  
### Declaration ranges
  
<a name="unpacked_dimension"></a>**unpacked\_dimension**
:  <font color="purple"><b>\[</b></font> <a href="#constant_range">constant\_range</a> <font color="purple"><b>]</b></font>  
        | <font color="purple"><b>\[</b></font> <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>]</b></font>
  
<a name="packed_dimension"></a>**packed\_dimension**[^footnote_20]
:  <font color="purple"><b>\[</b></font> <a href="#constant_range">constant\_range</a> <font color="purple"><b>]</b></font>  
        | <a href="#unsized_dimension">unsized\_dimension</a>
  
<a name="associative_dimension"></a>**associative\_dimension**
:  <font color="purple"><b>\[</b></font> <a href="#data_type">data\_type</a> <font color="purple"><b>]</b></font>  
        | <font color="purple"><b>\[</b></font> <font color="purple"><b>\*</b></font> <font color="purple"><b>]</b></font>
  
<a name="variable_dimension"></a>**variable\_dimension**
:  <a href="#unsized_dimension">unsized\_dimension</a>  
        | <a href="#unpacked_dimension">unpacked\_dimension</a>  
        | <a href="#associative_dimension">associative\_dimension</a>  
        | <a href="#queue_dimension">queue\_dimension</a>
  
<a name="queue_dimension"></a>**queue\_dimension**
:  <font color="purple"><b>\[</b></font> <font color="purple"><b>$</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#constant_expression">constant\_expression</a> ]  <font color="purple"><b>]</b></font>
  
<a name="unsized_dimension"></a>**unsized\_dimension**
:  <font color="purple"><b>\[</b></font> <font color="purple"><b>]</b></font>
  
### Function declarations
  
<a name="function_data_type_or_implicit"></a>**function\_data\_type\_or\_implicit**
:  <a href="#data_type_or_void">data\_type\_or\_void</a>  
        | <a href="#implicit_data_type">implicit\_data\_type</a>
  
<a name="function_declaration"></a>**function\_declaration**
:  <font color="purple"><b>function</b></font>  \[ <a href="#lifetime">lifetime</a> ]  <a href="#function_body_declaration">function\_body\_declaration</a>
  
<a name="function_body_declaration"></a>**function\_body\_declaration**
:  <a href="#function_data_type_or_implicit">function\_data\_type\_or\_implicit</a>  \[ <a href="#interface_identifier">interface\_identifier</a> <font color="purple"><b>.</b></font> | <a href="#class_scope">class\_scope</a> ]  <a href="#function_identifier">function\_identifier</a> <font color="purple"><b>;</b></font>  { <a href="#tf_item_declaration">tf\_item\_declaration</a> }   { <a href="#function_statement_or_null">function\_statement\_or\_null</a> }  <font color="purple"><b>endfunction</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#function_identifier">function\_identifier</a> ]  
        | <a href="#function_data_type_or_implicit">function\_data\_type\_or\_implicit</a>  \[ <a href="#interface_identifier">interface\_identifier</a> <font color="purple"><b>.</b></font> | <a href="#class_scope">class\_scope</a> ]  <a href="#function_identifier">function\_identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#tf_port_list">tf\_port\_list</a> ]  <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font>  { <a href="#block_item_declaration">block\_item\_declaration</a> }   { <a href="#function_statement_or_null">function\_statement\_or\_null</a> }  <font color="purple"><b>endfunction</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#function_identifier">function\_identifier</a> ]
  
<a name="function_prototype"></a>**function\_prototype**
:  <font color="purple"><b>function</b></font> <a href="#data_type_or_void">data\_type\_or\_void</a> <a href="#function_identifier">function\_identifier</a>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#tf_port_list">tf\_port\_list</a> ]  <font color="purple"><b>)</b></font> ]
  
<a name="dpi_import_export"></a>**dpi\_import\_export**
:  <font color="purple"><b>import</b></font> <a href="#dpi_spec_string">dpi\_spec\_string</a>  \[ <a href="#dpi_function_import_property">dpi\_function\_import\_property</a> ]   \[ <a href="#c_identifier">c\_identifier</a> <font color="purple"><b>=</b></font> ]  <a href="#dpi_function_proto">dpi\_function\_proto</a> <font color="purple"><b>;</b></font>  
        | <font color="purple"><b>import</b></font> <a href="#dpi_spec_string">dpi\_spec\_string</a>  \[ <a href="#dpi_task_import_property">dpi\_task\_import\_property</a> ]   \[ <a href="#c_identifier">c\_identifier</a> <font color="purple"><b>=</b></font> ]  <a href="#dpi_task_proto">dpi\_task\_proto</a> <font color="purple"><b>;</b></font>  
        | <font color="purple"><b>export</b></font> <a href="#dpi_spec_string">dpi\_spec\_string</a>  \[ <a href="#c_identifier">c\_identifier</a> <font color="purple"><b>=</b></font> ]  <font color="purple"><b>function</b></font> <a href="#function_identifier">function\_identifier</a> <font color="purple"><b>;</b></font>  
        | <font color="purple"><b>export</b></font> <a href="#dpi_spec_string">dpi\_spec\_string</a>  \[ <a href="#c_identifier">c\_identifier</a> <font color="purple"><b>=</b></font> ]  <font color="purple"><b>task</b></font> <a href="#task_identifier">task\_identifier</a> <font color="purple"><b>;</b></font>
  
<a name="dpi_spec_string"></a>**dpi\_spec\_string**
:  <font color="purple"><b>&quot;</b></font> <font color="purple"><b>DPI-C</b></font> <font color="purple"><b>&quot;</b></font>  
        | <font color="purple"><b>&quot;</b></font> <font color="purple"><b>DPI</b></font> <font color="purple"><b>&quot;</b></font>
  
<a name="dpi_function_import_property"></a>**dpi\_function\_import\_property**
:  <font color="purple"><b>context</b></font>  
        | <font color="purple"><b>pure</b></font>
  
<a name="dpi_task_import_property"></a>**dpi\_task\_import\_property**
:  <font color="purple"><b>context</b></font>
  
<a name="dpi_function_proto"></a>**dpi\_function\_proto**[^footnote_21],[^footnote_22]
:  <a href="#function_prototype">function\_prototype</a>
  
<a name="dpi_task_proto"></a>**dpi\_task\_proto**[^footnote_22]
:  <a href="#task_prototype">task\_prototype</a>
  
### Task declarations
  
<a name="task_declaration"></a>**task\_declaration**
:  <font color="purple"><b>task</b></font>  \[ <a href="#lifetime">lifetime</a> ]  <a href="#task_body_declaration">task\_body\_declaration</a>
  
<a name="task_body_declaration"></a>**task\_body\_declaration**
:  \[ <a href="#interface_identifier">interface\_identifier</a> <font color="purple"><b>.</b></font> | <a href="#class_scope">class\_scope</a> ]  <a href="#task_identifier">task\_identifier</a> <font color="purple"><b>;</b></font>  { <a href="#tf_item_declaration">tf\_item\_declaration</a> }   { <a href="#statement_or_null">statement\_or\_null</a> }  <font color="purple"><b>endtask</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#task_identifier">task\_identifier</a> ]  
        | \[ <a href="#interface_identifier">interface\_identifier</a> <font color="purple"><b>.</b></font> | <a href="#class_scope">class\_scope</a> ]  <a href="#task_identifier">task\_identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#tf_port_list">tf\_port\_list</a> ]  <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font>  { <a href="#block_item_declaration">block\_item\_declaration</a> }   { <a href="#statement_or_null">statement\_or\_null</a> }  <font color="purple"><b>endtask</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#task_identifier">task\_identifier</a> ]
  
<a name="tf_item_declaration"></a>**tf\_item\_declaration**
:  <a href="#block_item_declaration">block\_item\_declaration</a>  
        | <a href="#tf_port_declaration">tf\_port\_declaration</a>
  
<a name="tf_port_list"></a>**tf\_port\_list**
:  <a href="#tf_port_item">tf\_port\_item</a>  { <font color="purple"><b>,</b></font> <a href="#tf_port_item">tf\_port\_item</a> }
  
<a name="tf_port_item"></a>**tf\_port\_item**
:  { <a href="#attribute_instance">attribute\_instance</a> }   \[ <a href="#tf_port_direction">tf\_port\_direction</a> ]   \[ <font color="purple"><b>var</b></font> ]  <a href="#data_type_or_implicit">data\_type\_or\_implicit</a>  \[ <a href="#port_identifier">port\_identifier</a>  { <a href="#variable_dimension">variable\_dimension</a> }   \[ <font color="purple"><b>=</b></font> <a href="#expression">expression</a> ] ]
  
<a name="tf_port_direction"></a>**tf\_port\_direction**[^footnote_23]
:  <a href="#port_direction">port\_direction</a>  
        | <font color="purple"><b>const</b></font> <font color="purple"><b>ref</b></font>
  
<a name="tf_port_declaration"></a>**tf\_port\_declaration**
:  { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#tf_port_direction">tf\_port\_direction</a>  \[ <font color="purple"><b>var</b></font> ]  <a href="#data_type_or_implicit">data\_type\_or\_implicit</a> <a href="#list_of_tf_variable_identifiers">list\_of\_tf\_variable\_identifiers</a> <font color="purple"><b>;</b></font>
  
<a name="task_prototype"></a>**task\_prototype**
:  <font color="purple"><b>task</b></font> <a href="#task_identifier">task\_identifier</a>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#tf_port_list">tf\_port\_list</a> ]  <font color="purple"><b>)</b></font> ]
  
### Block item declarations
  
<a name="block_item_declaration"></a>**block\_item\_declaration**
:  { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#data_declaration">data\_declaration</a>  
        | { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#local_parameter_declaration">local\_parameter\_declaration</a> <font color="purple"><b>;</b></font>  
        | { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#parameter_declaration">parameter\_declaration</a> <font color="purple"><b>;</b></font>  
        | { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#overload_declaration">overload\_declaration</a>  
        | { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#let_declaration">let\_declaration</a>
  
<a name="overload_declaration"></a>**overload\_declaration**
:  <font color="purple"><b>bind</b></font> <a href="#overload_operator">overload\_operator</a> <font color="purple"><b>function</b></font> <a href="#data_type">data\_type</a> <a href="#function_identifier">function\_identifier</a> <font color="purple"><b>(</b></font> <a href="#overload_proto_formals">overload\_proto\_formals</a> <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font>
  
<a name="overload_operator"></a>**overload\_operator**
:  <font color="purple"><b>+</b></font>  
        | <font color="purple"><b>++</b></font>  
        | <font color="purple"><b>-</b></font>  
        | <font color="purple"><b>--</b></font>  
        | <font color="purple"><b>\*</b></font>  
        | <font color="purple"><b>\*\*</b></font>  
        | <font color="purple"><b>/</b></font>  
        | <font color="purple"><b>%</b></font>  
        | <font color="purple"><b>==</b></font>  
        | <font color="purple"><b>!=</b></font>  
        | <font color="purple"><b>&lt;</b></font>  
        | <font color="purple"><b>&lt;=</b></font>  
        | <font color="purple"><b>&gt;</b></font>  
        | <font color="purple"><b>&gt;=</b></font>  
        | <font color="purple"><b>=</b></font>
  
<a name="overload_proto_formals"></a>**overload\_proto\_formals**
:  <a href="#data_type">data\_type</a>  { <font color="purple"><b>,</b></font> <a href="#data_type">data\_type</a> }
  
### Interface declarations
  
<a name="modport_declaration"></a>**modport\_declaration**
:  <font color="purple"><b>modport</b></font> <a href="#modport_item">modport\_item</a>  { <font color="purple"><b>,</b></font> <a href="#modport_item">modport\_item</a> }  <font color="purple"><b>;</b></font>
  
<a name="modport_item"></a>**modport\_item**
:  <a href="#modport_identifier">modport\_identifier</a> <font color="purple"><b>(</b></font> <a href="#modport_ports_declaration">modport\_ports\_declaration</a>  { <font color="purple"><b>,</b></font> <a href="#modport_ports_declaration">modport\_ports\_declaration</a> }  <font color="purple"><b>)</b></font>
  
<a name="modport_ports_declaration"></a>**modport\_ports\_declaration**
:  { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#modport_simple_ports_declaration">modport\_simple\_ports\_declaration</a>  
        | { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#modport_tf_ports_declaration">modport\_tf\_ports\_declaration</a>  
        | { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#modport_clocking_declaration">modport\_clocking\_declaration</a>
  
<a name="modport_clocking_declaration"></a>**modport\_clocking\_declaration**
:  <font color="purple"><b>clocking</b></font> <a href="#clocking_identifier">clocking\_identifier</a>
  
<a name="modport_simple_ports_declaration"></a>**modport\_simple\_ports\_declaration**
:  <a href="#port_direction">port\_direction</a> <a href="#modport_simple_port">modport\_simple\_port</a>  { <font color="purple"><b>,</b></font> <a href="#modport_simple_port">modport\_simple\_port</a> }
  
<a name="modport_simple_port"></a>**modport\_simple\_port**
:  <a href="#port_identifier">port\_identifier</a>  
        | <font color="purple"><b>.</b></font> <a href="#port_identifier">port\_identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#expression">expression</a> ]  <font color="purple"><b>)</b></font>
  
<a name="modport_tf_ports_declaration"></a>**modport\_tf\_ports\_declaration**
:  <a href="#import_export">import\_export</a> <a href="#modport_tf_port">modport\_tf\_port</a>  { <font color="purple"><b>,</b></font> <a href="#modport_tf_port">modport\_tf\_port</a> }
  
<a name="modport_tf_port"></a>**modport\_tf\_port**
:  <a href="#method_prototype">method\_prototype</a>  
        | <a href="#tf_identifier">tf\_identifier</a>
  
<a name="import_export"></a>**import\_export**
:  <font color="purple"><b>import</b></font>  
        | <font color="purple"><b>export</b></font>
  
### Assertion declarations
  
<a name="concurrent_assertion_item"></a>**concurrent\_assertion\_item**
:  \[ <a href="#block_identifier">block\_identifier</a> <font color="purple"><b>:</b></font> ]  <a href="#concurrent_assertion_statement">concurrent\_assertion\_statement</a>  
        | <a href="#checker_instantiation">checker\_instantiation</a>
  
<a name="concurrent_assertion_statement"></a>**concurrent\_assertion\_statement**
:  <a href="#assert_property_statement">assert\_property\_statement</a>  
        | <a href="#assume_property_statement">assume\_property\_statement</a>  
        | <a href="#cover_property_statement">cover\_property\_statement</a>  
        | <a href="#cover_sequence_statement">cover\_sequence\_statement</a>  
        | <a href="#restrict_property_statement">restrict\_property\_statement</a>
  
<a name="assert_property_statement"></a>**assert\_property\_statement**
:  <font color="purple"><b>assert</b></font> <font color="purple"><b>property</b></font> <font color="purple"><b>(</b></font> <a href="#property_spec">property\_spec</a> <font color="purple"><b>)</b></font> <a href="#action_block">action\_block</a>
  
<a name="assume_property_statement"></a>**assume\_property\_statement**
:  <font color="purple"><b>assume</b></font> <font color="purple"><b>property</b></font> <font color="purple"><b>(</b></font> <a href="#property_spec">property\_spec</a> <font color="purple"><b>)</b></font> <a href="#action_block">action\_block</a>
  
<a name="cover_property_statement"></a>**cover\_property\_statement**
:  <font color="purple"><b>cover</b></font> <font color="purple"><b>property</b></font> <font color="purple"><b>(</b></font> <a href="#property_spec">property\_spec</a> <font color="purple"><b>)</b></font> <a href="#statement_or_null">statement\_or\_null</a>
  
<a name="expect_property_statement"></a>**expect\_property\_statement**
:  <font color="purple"><b>expect</b></font> <font color="purple"><b>(</b></font> <a href="#property_spec">property\_spec</a> <font color="purple"><b>)</b></font> <a href="#action_block">action\_block</a>
  
<a name="cover_sequence_statement"></a>**cover\_sequence\_statement**
:  <font color="purple"><b>cover</b></font> <font color="purple"><b>sequence</b></font> <font color="purple"><b>(</b></font>  \[ <a href="#clocking_event">clocking\_event</a> ]   \[ <font color="purple"><b>disable</b></font> <font color="purple"><b>iff</b></font> <font color="purple"><b>(</b></font> <a href="#expression_or_dist">expression\_or\_dist</a> <font color="purple"><b>)</b></font> ]  <a href="#sequence_expr">sequence\_expr</a> <font color="purple"><b>)</b></font> <a href="#statement_or_null">statement\_or\_null</a>
  
<a name="restrict_property_statement"></a>**restrict\_property\_statement**
:  <font color="purple"><b>restrict</b></font> <font color="purple"><b>property</b></font> <font color="purple"><b>(</b></font> <a href="#property_spec">property\_spec</a> <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font>
  
<a name="property_instance"></a>**property\_instance**
:  <a href="#ps_or_hierarchical_property_identifier">ps\_or\_hierarchical\_property\_identifier</a>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#property_list_of_arguments">property\_list\_of\_arguments</a> ]  <font color="purple"><b>)</b></font> ]
  
<a name="property_list_of_arguments"></a>**property\_list\_of\_arguments**
:  \[ <a href="#property_actual_arg">property\_actual\_arg</a> ]   { <font color="purple"><b>,</b></font>  \[ <a href="#property_actual_arg">property\_actual\_arg</a> ] }   { <font color="purple"><b>,</b></font> <font color="purple"><b>.</b></font> <a href="#identifier">identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#property_actual_arg">property\_actual\_arg</a> ]  <font color="purple"><b>)</b></font> }  
        | <font color="purple"><b>.</b></font> <a href="#identifier">identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#property_actual_arg">property\_actual\_arg</a> ]  <font color="purple"><b>)</b></font>  { <font color="purple"><b>,</b></font> <font color="purple"><b>.</b></font> <a href="#identifier">identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#property_actual_arg">property\_actual\_arg</a> ]  <font color="purple"><b>)</b></font> }
  
<a name="property_actual_arg"></a>**property\_actual\_arg**
:  <a href="#property_expr">property\_expr</a>  
        | <a href="#sequence_actual_arg">sequence\_actual\_arg</a>
  
<a name="assertion_item_declaration"></a>**assertion\_item\_declaration**
:  <a href="#property_declaration">property\_declaration</a>  
        | <a href="#sequence_declaration">sequence\_declaration</a>  
        | <a href="#let_declaration">let\_declaration</a>
  
<a name="property_declaration"></a>**property\_declaration**
:  <font color="purple"><b>property</b></font> <a href="#property_identifier">property\_identifier</a>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#property_port_list">property\_port\_list</a> ]  <font color="purple"><b>)</b></font> ]  <font color="purple"><b>;</b></font>  { <a href="#assertion_variable_declaration">assertion\_variable\_declaration</a> }  <a href="#property_spec">property\_spec</a>  \[ <font color="purple"><b>;</b></font> ]  <font color="purple"><b>endproperty</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#property_identifier">property\_identifier</a> ]
  
<a name="property_port_list"></a>**property\_port\_list**
:  <a href="#property_port_item">property\_port\_item</a>  { <font color="purple"><b>,</b></font> <a href="#property_port_item">property\_port\_item</a> }
  
<a name="property_port_item"></a>**property\_port\_item**
:  { <a href="#attribute_instance">attribute\_instance</a> }   \[ <font color="purple"><b>local</b></font>  \[ <a href="#property_lvar_port_direction">property\_lvar\_port\_direction</a> ] ]  <a href="#property_formal_type">property\_formal\_type</a> <a href="#formal_port_identifier">formal\_port\_identifier</a>  { <a href="#variable_dimension">variable\_dimension</a> }   \[ <font color="purple"><b>=</b></font> <a href="#property_actual_arg">property\_actual\_arg</a> ]
  
<a name="property_lvar_port_direction"></a>**property\_lvar\_port\_direction**
:  <font color="purple"><b>input</b></font>
  
<a name="property_formal_type"></a>**property\_formal\_type**
:  <a href="#sequence_formal_type">sequence\_formal\_type</a>  
        | <font color="purple"><b>property</b></font>
  
<a name="property_spec"></a>**property\_spec**
:  \[ <a href="#clocking_event">clocking\_event</a> ]   \[ <font color="purple"><b>disable</b></font> <font color="purple"><b>iff</b></font> <font color="purple"><b>(</b></font> <a href="#expression_or_dist">expression\_or\_dist</a> <font color="purple"><b>)</b></font> ]  <a href="#property_expr">property\_expr</a>
  
<a name="property_expr"></a>**property\_expr**
:  <a href="#sequence_expr">sequence\_expr</a>  
        | <font color="purple"><b>strong</b></font> <font color="purple"><b>(</b></font> <a href="#sequence_expr">sequence\_expr</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>weak</b></font> <font color="purple"><b>(</b></font> <a href="#sequence_expr">sequence\_expr</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>(</b></font> <a href="#property_expr">property\_expr</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>not</b></font> <a href="#property_expr">property\_expr</a>  
        | <a href="#property_expr">property\_expr</a> <font color="purple"><b>or</b></font> <a href="#property_expr">property\_expr</a>  
        | <a href="#property_expr">property\_expr</a> <font color="purple"><b>and</b></font> <a href="#property_expr">property\_expr</a>  
        | <a href="#sequence_expr">sequence\_expr</a> <font color="purple"><b>|-&gt;</b></font> <a href="#property_expr">property\_expr</a>  
        | <a href="#sequence_expr">sequence\_expr</a> <font color="purple"><b>|=&gt;</b></font> <a href="#property_expr">property\_expr</a>  
        | <font color="purple"><b>if</b></font> <font color="purple"><b>(</b></font> <a href="#expression_or_dist">expression\_or\_dist</a> <font color="purple"><b>)</b></font> <a href="#property_expr">property\_expr</a>  \[ <font color="purple"><b>else</b></font> <a href="#property_expr">property\_expr</a> ]  
        | <font color="purple"><b>case</b></font> <font color="purple"><b>(</b></font> <a href="#expression_or_dist">expression\_or\_dist</a> <font color="purple"><b>)</b></font> <a href="#property_case_item">property\_case\_item</a>  { <a href="#property_case_item">property\_case\_item</a> }  <font color="purple"><b>endcase</b></font>  
        | <a href="#sequence_expr">sequence\_expr</a> <font color="purple"><b>#-#</b></font> <a href="#property_expr">property\_expr</a>  
        | <a href="#sequence_expr">sequence\_expr</a> <font color="purple"><b>#=#</b></font> <a href="#property_expr">property\_expr</a>  
        | <font color="purple"><b>nexttime</b></font> <a href="#property_expr">property\_expr</a>  
        | <font color="purple"><b>nexttime</b></font>  \[ <font color="purple"><b>constant</b></font> <a href="#expression">expression</a> ]  <a href="#property_expr">property\_expr</a>  
        | <font color="purple"><b>s\_nexttime</b></font> <a href="#property_expr">property\_expr</a>  
        | <font color="purple"><b>s\_nexttime</b></font>  \[ <a href="#constant_expression">constant\_expression</a> ]  <a href="#property_expr">property\_expr</a>  
        | <font color="purple"><b>always</b></font> <a href="#property_expr">property\_expr</a>  
        | <font color="purple"><b>always</b></font>  \[ <a href="#cycle_delay_const_range_expression">cycle\_delay\_const\_range\_expression</a> ]  <a href="#property_expr">property\_expr</a>  
        | <font color="purple"><b>s\_always</b></font>  \[ <a href="#constant_range">constant\_range</a> ]  <a href="#property_expr">property\_expr</a>  
        | <font color="purple"><b>s\_eventually</b></font> <a href="#property_expr">property\_expr</a>  
        | <font color="purple"><b>eventually</b></font>  \[ <a href="#constant_range">constant\_range</a> ]  <a href="#property_expr">property\_expr</a>  
        | <font color="purple"><b>s\_eventually</b></font>  \[ <a href="#cycle_delay_const_range_expression">cycle\_delay\_const\_range\_expression</a> ]  <a href="#property_expr">property\_expr</a>  
        | <a href="#property_expr">property\_expr</a> <font color="purple"><b>until</b></font> <a href="#property_expr">property\_expr</a>  
        | <a href="#property_expr">property\_expr</a> <font color="purple"><b>s\_until</b></font> <a href="#property_expr">property\_expr</a>  
        | <a href="#property_expr">property\_expr</a> <font color="purple"><b>until\_with</b></font> <a href="#property_expr">property\_expr</a>  
        | <a href="#property_expr">property\_expr</a> <font color="purple"><b>s\_until\_with</b></font> <a href="#property_expr">property\_expr</a>  
        | <a href="#property_expr">property\_expr</a> <font color="purple"><b>implies</b></font> <a href="#property_expr">property\_expr</a>  
        | <a href="#property_expr">property\_expr</a> <font color="purple"><b>iff</b></font> <a href="#property_expr">property\_expr</a>  
        | <font color="purple"><b>accept\_on</b></font> <font color="purple"><b>(</b></font> <a href="#expression_or_dist">expression\_or\_dist</a> <font color="purple"><b>)</b></font> <a href="#property_expr">property\_expr</a>  
        | <font color="purple"><b>reject\_on</b></font> <font color="purple"><b>(</b></font> <a href="#expression_or_dist">expression\_or\_dist</a> <font color="purple"><b>)</b></font> <a href="#property_expr">property\_expr</a>  
        | <font color="purple"><b>sync\_accept\_on</b></font> <font color="purple"><b>(</b></font> <a href="#expression_or_dist">expression\_or\_dist</a> <font color="purple"><b>)</b></font> <a href="#property_expr">property\_expr</a>  
        | <font color="purple"><b>sync\_reject\_on</b></font> <font color="purple"><b>(</b></font> <a href="#expression_or_dist">expression\_or\_dist</a> <font color="purple"><b>)</b></font> <a href="#property_expr">property\_expr</a>  
        | <a href="#property_instance">property\_instance</a>  
        | <a href="#clocking_event">clocking\_event</a> <a href="#property_expr">property\_expr</a>
  
<a name="property_case_item"></a>**property\_case\_item**
:  <a href="#expression_or_dist">expression\_or\_dist</a>  { <font color="purple"><b>,</b></font> <a href="#expression_or_dist">expression\_or\_dist</a> }  <font color="purple"><b>:</b></font> <a href="#property_expr">property\_expr</a>  \[ <font color="purple"><b>;</b></font> ]  
        | <font color="purple"><b>default</b></font>  \[ <font color="purple"><b>:</b></font> ]  <a href="#property_expr">property\_expr</a>  \[ <font color="purple"><b>;</b></font> ]
  
<a name="sequence_declaration"></a>**sequence\_declaration**
:  <font color="purple"><b>sequence</b></font> <a href="#sequence_identifier">sequence\_identifier</a>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#sequence_port_list">sequence\_port\_list</a> ]  <font color="purple"><b>)</b></font> ]  <font color="purple"><b>;</b></font>  { <a href="#assertion_variable_declaration">assertion\_variable\_declaration</a> }  <a href="#sequence_expr">sequence\_expr</a>  \[ <font color="purple"><b>;</b></font> ]  <font color="purple"><b>endsequence</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#sequence_identifier">sequence\_identifier</a> ]
  
<a name="sequence_port_list"></a>**sequence\_port\_list**
:  <a href="#sequence_port_item">sequence\_port\_item</a>  { <font color="purple"><b>,</b></font> <a href="#sequence_port_item">sequence\_port\_item</a> }
  
<a name="sequence_port_item"></a>**sequence\_port\_item**
:  { <a href="#attribute_instance">attribute\_instance</a> }   \[ <font color="purple"><b>local</b></font>  \[ <a href="#sequence_lvar_port_direction">sequence\_lvar\_port\_direction</a> ] ]  <a href="#sequence_formal_type">sequence\_formal\_type</a> <a href="#formal_port_identifier">formal\_port\_identifier</a>  { <a href="#variable_dimension">variable\_dimension</a> }   \[ <font color="purple"><b>=</b></font> <a href="#sequence_actual_arg">sequence\_actual\_arg</a> ]
  
<a name="sequence_lvar_port_direction"></a>**sequence\_lvar\_port\_direction**
:  <font color="purple"><b>input</b></font>  
        | <font color="purple"><b>inout</b></font>  
        | <font color="purple"><b>output</b></font>
  
<a name="sequence_formal_type"></a>**sequence\_formal\_type**
:  <a href="#data_type_or_implicit">data\_type\_or\_implicit</a>  
        | <font color="purple"><b>sequence</b></font>  
        | <font color="purple"><b>untyped</b></font>
  
<a name="sequence_expr"></a>**sequence\_expr**
:  <a href="#cycle_delay_range">cycle\_delay\_range</a> <a href="#sequence_expr">sequence\_expr</a>  { <a href="#cycle_delay_range">cycle\_delay\_range</a> <a href="#sequence_expr">sequence\_expr</a> }  
        | <a href="#sequence_expr">sequence\_expr</a> <a href="#cycle_delay_range">cycle\_delay\_range</a> <a href="#sequence_expr">sequence\_expr</a>  { <a href="#cycle_delay_range">cycle\_delay\_range</a> <a href="#sequence_expr">sequence\_expr</a> }  
        | <a href="#expression_or_dist">expression\_or\_dist</a>  \[ <a href="#boolean_abbrev">boolean\_abbrev</a> ]  
        | <a href="#sequence_instance">sequence\_instance</a>  \[ <a href="#sequence_abbrev">sequence\_abbrev</a> ]  
        | <font color="purple"><b>(</b></font> <a href="#sequence_expr">sequence\_expr</a>  { <font color="purple"><b>,</b></font> <a href="#sequence_match_item">sequence\_match\_item</a> }  <font color="purple"><b>)</b></font>  \[ <a href="#sequence_abbrev">sequence\_abbrev</a> ]  
        | <a href="#sequence_expr">sequence\_expr</a> <font color="purple"><b>and</b></font> <a href="#sequence_expr">sequence\_expr</a>  
        | <a href="#sequence_expr">sequence\_expr</a> <font color="purple"><b>intersect</b></font> <a href="#sequence_expr">sequence\_expr</a>  
        | <a href="#sequence_expr">sequence\_expr</a> <font color="purple"><b>or</b></font> <a href="#sequence_expr">sequence\_expr</a>  
        | <font color="purple"><b>first\_match</b></font> <font color="purple"><b>(</b></font> <a href="#sequence_expr">sequence\_expr</a>  { <font color="purple"><b>,</b></font> <a href="#sequence_match_item">sequence\_match\_item</a> }  <font color="purple"><b>)</b></font>  
        | <a href="#expression_or_dist">expression\_or\_dist</a> <font color="purple"><b>throughout</b></font> <a href="#sequence_expr">sequence\_expr</a>  
        | <a href="#sequence_expr">sequence\_expr</a> <font color="purple"><b>within</b></font> <a href="#sequence_expr">sequence\_expr</a>  
        | <a href="#clocking_event">clocking\_event</a> <a href="#sequence_expr">sequence\_expr</a>
  
<a name="cycle_delay_range"></a>**cycle\_delay\_range**
:  <font color="purple"><b>##</b></font> <a href="#constant_primary">constant\_primary</a>  
        | <font color="purple"><b>##</b></font> <font color="purple"><b>\[</b></font> <a href="#cycle_delay_const_range_expression">cycle\_delay\_const\_range\_expression</a> <font color="purple"><b>]</b></font>  
        | <font color="purple"><b>##\[\*]</b></font>  
        | <font color="purple"><b>##\[+]</b></font>
  
<a name="sequence_method_call"></a>**sequence\_method\_call**
:  <a href="#sequence_instance">sequence\_instance</a> <font color="purple"><b>.</b></font> <a href="#method_identifier">method\_identifier</a>
  
<a name="sequence_match_item"></a>**sequence\_match\_item**
:  <a href="#operator_assignment">operator\_assignment</a>  
        | <a href="#inc_or_dec_expression">inc\_or\_dec\_expression</a>  
        | <a href="#subroutine_call">subroutine\_call</a>
  
<a name="sequence_instance"></a>**sequence\_instance**
:  <a href="#ps_or_hierarchical_sequence_identifier">ps\_or\_hierarchical\_sequence\_identifier</a>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#sequence_list_of_arguments">sequence\_list\_of\_arguments</a> ]  <font color="purple"><b>)</b></font> ]
  
<a name="sequence_list_of_arguments"></a>**sequence\_list\_of\_arguments**
:  \[ <a href="#sequence_actual_arg">sequence\_actual\_arg</a> ]   { <font color="purple"><b>,</b></font>  \[ <a href="#sequence_actual_arg">sequence\_actual\_arg</a> ] }   { <font color="purple"><b>,</b></font> <font color="purple"><b>.</b></font> <a href="#identifier">identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#sequence_actual_arg">sequence\_actual\_arg</a> ]  <font color="purple"><b>)</b></font> }  
        | <font color="purple"><b>.</b></font> <a href="#identifier">identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#sequence_actual_arg">sequence\_actual\_arg</a> ]  <font color="purple"><b>)</b></font>  { <font color="purple"><b>,</b></font> <font color="purple"><b>.</b></font> <a href="#identifier">identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#sequence_actual_arg">sequence\_actual\_arg</a> ]  <font color="purple"><b>)</b></font> }
  
<a name="sequence_actual_arg"></a>**sequence\_actual\_arg**
:  <a href="#event_expression">event\_expression</a>  
        | <a href="#sequence_expr">sequence\_expr</a>
  
<a name="boolean_abbrev"></a>**boolean\_abbrev**
:  <a href="#consecutive_repetition">consecutive\_repetition</a>  
        | <a href="#non_consecutive_repetition">non\_consecutive\_repetition</a>  
        | <a href="#goto_repetition">goto\_repetition</a>
  
<a name="sequence_abbrev"></a>**sequence\_abbrev**
:  <a href="#consecutive_repetition">consecutive\_repetition</a>
  
<a name="consecutive_repetition"></a>**consecutive\_repetition**
:  <font color="purple"><b>\[\*</b></font> <a href="#const_or_range_expression">const\_or\_range\_expression</a> <font color="purple"><b>]</b></font>  
        | <font color="purple"><b>\[\*]</b></font>  
        | <font color="purple"><b>\[+]</b></font>
  
<a name="non_consecutive_repetition"></a>**non\_consecutive\_repetition**
:  <font color="purple"><b>\[=</b></font> <a href="#const_or_range_expression">const\_or\_range\_expression</a> <font color="purple"><b>]</b></font>
  
<a name="goto_repetition"></a>**goto\_repetition**
:  <font color="purple"><b>\[-&gt;</b></font> <a href="#const_or_range_expression">const\_or\_range\_expression</a> <font color="purple"><b>]</b></font>
  
<a name="const_or_range_expression"></a>**const\_or\_range\_expression**
:  <a href="#constant_expression">constant\_expression</a>  
        | <a href="#cycle_delay_const_range_expression">cycle\_delay\_const\_range\_expression</a>
  
<a name="cycle_delay_const_range_expression"></a>**cycle\_delay\_const\_range\_expression**
:  <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>:</b></font> <a href="#constant_expression">constant\_expression</a>  
        | <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>:</b></font> <font color="purple"><b>$</b></font>
  
<a name="expression_or_dist"></a>**expression\_or\_dist**
:  <a href="#expression">expression</a>  \[ <font color="purple"><b>dist</b></font> <font color="purple"><b>{</b></font> <a href="#dist_list">dist\_list</a> <font color="purple"><b>}</b></font> ]
  
<a name="assertion_variable_declaration"></a>**assertion\_variable\_declaration**
:  <a href="#var_data_type">var\_data\_type</a> <a href="#list_of_variable_decl_assignments">list\_of\_variable\_decl\_assignments</a> <font color="purple"><b>;</b></font>
  
<a name="let_declaration"></a>**let\_declaration**
:  <font color="purple"><b>let</b></font> <a href="#let_identifier">let\_identifier</a>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#let_port_list">let\_port\_list</a> ]  <font color="purple"><b>)</b></font> ]  <font color="purple"><b>=</b></font> <a href="#expression">expression</a> <font color="purple"><b>;</b></font>
  
<a name="let_identifier"></a>**let\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="let_port_list"></a>**let\_port\_list**
:  <a href="#let_port_item">let\_port\_item</a>  { <font color="purple"><b>,</b></font> <a href="#let_port_item">let\_port\_item</a> }
  
<a name="let_port_item"></a>**let\_port\_item**
:  { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#let_formal_type">let\_formal\_type</a> <a href="#formal_port_identifier">formal\_port\_identifier</a>  { <a href="#variable_dimension">variable\_dimension</a> }   \[ <font color="purple"><b>=</b></font> <a href="#expression">expression</a> ]
  
<a name="let_formal_type"></a>**let\_formal\_type**
:  <a href="#data_type_or_implicit">data\_type\_or\_implicit</a>  
        | <font color="purple"><b>untyped</b></font>
  
<a name="let_expression"></a>**let\_expression**
:  \[ <a href="#package_scope">package\_scope</a> ]  <a href="#let_identifier">let\_identifier</a>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#let_list_of_arguments">let\_list\_of\_arguments</a> ]  <font color="purple"><b>)</b></font> ]
  
<a name="let_list_of_arguments"></a>**let\_list\_of\_arguments**
:  \[ <a href="#let_actual_arg">let\_actual\_arg</a> ]   { <font color="purple"><b>,</b></font>  \[ <a href="#let_actual_arg">let\_actual\_arg</a> ] }   { <font color="purple"><b>,</b></font> <font color="purple"><b>.</b></font> <a href="#identifier">identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#let_actual_arg">let\_actual\_arg</a> ]  <font color="purple"><b>)</b></font> }  
        | <font color="purple"><b>.</b></font> <a href="#identifier">identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#let_actual_arg">let\_actual\_arg</a> ]  <font color="purple"><b>)</b></font>  { <font color="purple"><b>,</b></font> <font color="purple"><b>.</b></font> <a href="#identifier">identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#let_actual_arg">let\_actual\_arg</a> ]  <font color="purple"><b>)</b></font> }
  
<a name="let_actual_arg"></a>**let\_actual\_arg**
:  <a href="#expression">expression</a>
  
### Covergroup declarations
  
<a name="covergroup_declaration"></a>**covergroup\_declaration**
:  <font color="purple"><b>covergroup</b></font> <a href="#covergroup_identifier">covergroup\_identifier</a>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#tf_port_list">tf\_port\_list</a> ]  <font color="purple"><b>)</b></font> ]   \[ <a href="#coverage_event">coverage\_event</a> ]  <font color="purple"><b>;</b></font>  { <a href="#coverage_spec_or_option">coverage\_spec\_or\_option</a> }  <font color="purple"><b>endgroup</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#covergroup_identifier">covergroup\_identifier</a> ]
  
<a name="coverage_spec_or_option"></a>**coverage\_spec\_or\_option**
:  { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#coverage_spec">coverage\_spec</a>  
        | { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#coverage_option">coverage\_option</a> <font color="purple"><b>;</b></font>
  
<a name="coverage_option"></a>**coverage\_option**
:  <font color="purple"><b>option</b></font> <font color="purple"><b>.</b></font> <a href="#member_identifier">member\_identifier</a> <font color="purple"><b>=</b></font> <a href="#expression">expression</a>  
        | <font color="purple"><b>type\_option</b></font> <font color="purple"><b>.</b></font> <a href="#member_identifier">member\_identifier</a> <font color="purple"><b>=</b></font> <a href="#constant_expression">constant\_expression</a>
  
<a name="coverage_spec"></a>**coverage\_spec**
:  <a href="#cover_point">cover\_point</a>  
        | <a href="#cover_cross">cover\_cross</a>
  
<a name="coverage_event"></a>**coverage\_event**
:  <a href="#clocking_event">clocking\_event</a>  
        | <font color="purple"><b>with</b></font> <font color="purple"><b>function</b></font> <font color="purple"><b>sample</b></font> <font color="purple"><b>(</b></font>  \[ <a href="#tf_port_list">tf\_port\_list</a> ]  <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>@@</b></font> <font color="purple"><b>(</b></font> <a href="#block_event_expression">block\_event\_expression</a> <font color="purple"><b>)</b></font>
  
<a name="block_event_expression"></a>**block\_event\_expression**
:  <a href="#block_event_expression">block\_event\_expression</a> <font color="purple"><b>or</b></font> <a href="#block_event_expression">block\_event\_expression</a>  
        | <font color="purple"><b>begin</b></font> <a href="#hierarchical_btf_identifier">hierarchical\_btf\_identifier</a>  
        | <font color="purple"><b>end</b></font> <a href="#hierarchical_btf_identifier">hierarchical\_btf\_identifier</a>
  
<a name="hierarchical_btf_identifier"></a>**hierarchical\_btf\_identifier**
:  <a href="#hierarchical_tf_identifier">hierarchical\_tf\_identifier</a>  
        | <a href="#hierarchical_block_identifier">hierarchical\_block\_identifier</a>  
        | \[ <a href="#hierarchical_identifier">hierarchical\_identifier</a> <font color="purple"><b>.</b></font> | <a href="#class_scope">class\_scope</a> ]  <a href="#method_identifier">method\_identifier</a>
  
<a name="cover_point"></a>**cover\_point**
:  \[ \[ <a href="#data_type_or_implicit">data\_type\_or\_implicit</a> ]  <a href="#cover_point_identifier">cover\_point\_identifier</a> <font color="purple"><b>:</b></font> ]  <font color="purple"><b>coverpoint</b></font> <a href="#expression">expression</a>  \[ <font color="purple"><b>iff</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> ]  <a href="#bins_or_empty">bins\_or\_empty</a>
  
<a name="bins_or_empty"></a>**bins\_or\_empty**
:  { { <a href="#attribute_instance">attribute\_instance</a> }   { <a href="#bins_or_options">bins\_or\_options</a> <font color="purple"><b>;</b></font> } }  
        | <font color="purple"><b>;</b></font>
  
<a name="bins_or_options"></a>**bins\_or\_options**
:  <a href="#coverage_option">coverage\_option</a>  
        | \[ <font color="purple"><b>wildcard</b></font> ]  <a href="#bins_keyword">bins\_keyword</a> <a href="#bin_identifier">bin\_identifier</a>  \[ <font color="purple"><b>\[</b></font>  \[ <a href="#covergroup_expression">covergroup\_expression</a> ]  <font color="purple"><b>]</b></font> ]  <font color="purple"><b>=</b></font> <font color="purple"><b>{</b></font> <a href="#covergroup_range_list">covergroup\_range\_list</a> <font color="purple"><b>}</b></font>  \[ <font color="purple"><b>with</b></font> <font color="purple"><b>(</b></font> <a href="#with_covergroup_expression">with\_covergroup\_expression</a> <font color="purple"><b>)</b></font> ]   \[ <font color="purple"><b>iff</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> ]  
        | \[ <font color="purple"><b>wildcard</b></font> ]  <a href="#bins_keyword">bins\_keyword</a> <a href="#bin_identifier">bin\_identifier</a>  \[ <font color="purple"><b>\[</b></font>  \[ <a href="#covergroup_expression">covergroup\_expression</a> ]  <font color="purple"><b>]</b></font> ]  <font color="purple"><b>=</b></font> <a href="#cover_point_identifier">cover\_point\_identifier</a>  \[ <font color="purple"><b>with</b></font> <font color="purple"><b>(</b></font> <a href="#with_covergroup_expression">with\_covergroup\_expression</a> <font color="purple"><b>)</b></font> ]   \[ <font color="purple"><b>iff</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> ]  
        | \[ <font color="purple"><b>wildcard</b></font> ]  <a href="#bins_keyword">bins\_keyword</a> <a href="#bin_identifier">bin\_identifier</a>  \[ <font color="purple"><b>\[</b></font>  \[ <a href="#covergroup_expression">covergroup\_expression</a> ]  <font color="purple"><b>]</b></font> ]  <font color="purple"><b>=</b></font> <a href="#set_covergroup_expression">set\_covergroup\_expression</a>  \[ <font color="purple"><b>iff</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> ]  
        | \[ <font color="purple"><b>wildcard</b></font> ]  <a href="#bins_keyword">bins\_keyword</a> <a href="#bin_identifier">bin\_identifier</a>  \[ <font color="purple"><b>\[</b></font> <font color="purple"><b>]</b></font> ]  <font color="purple"><b>=</b></font> <a href="#trans_list">trans\_list</a>  \[ <font color="purple"><b>iff</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> ]  
        | <a href="#bins_keyword">bins\_keyword</a> <a href="#bin_identifier">bin\_identifier</a>  \[ \[ \[ <a href="#covergroup_expression">covergroup\_expression</a> ] ] ]  <font color="purple"><b>=</b></font> <font color="purple"><b>default</b></font>  \[ <font color="purple"><b>iff</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> ]  
        | <a href="#bins_keyword">bins\_keyword</a> <a href="#bin_identifier">bin\_identifier</a> <font color="purple"><b>=</b></font> <font color="purple"><b>default</b></font> <font color="purple"><b>sequence</b></font>  \[ <font color="purple"><b>iff</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> ]
  
<a name="bins_keyword"></a>**bins\_keyword**
:  <font color="purple"><b>bins</b></font>  
        | <font color="purple"><b>illegal\_bins</b></font>  
        | <font color="purple"><b>ignore\_bins</b></font>
  
<a name="trans_list"></a>**trans\_list**
:  <font color="purple"><b>(</b></font> <a href="#trans_set">trans\_set</a> <font color="purple"><b>)</b></font>  { <font color="purple"><b>,</b></font> <font color="purple"><b>(</b></font> <a href="#trans_set">trans\_set</a> <font color="purple"><b>)</b></font> }
  
<a name="trans_set"></a>**trans\_set**
:  <a href="#trans_range_list">trans\_range\_list</a>  { <font color="purple"><b>=&gt;</b></font> <a href="#trans_range_list">trans\_range\_list</a> }
  
<a name="trans_range_list"></a>**trans\_range\_list**
:  <a href="#trans_item">trans\_item</a>  
        | <a href="#trans_item">trans\_item</a> <font color="purple"><b>\[\*</b></font> <a href="#repeat_range">repeat\_range</a> <font color="purple"><b>]</b></font>  
        | <a href="#trans_item">trans\_item</a> <font color="purple"><b>\[-&gt;</b></font> <a href="#repeat_range">repeat\_range</a> <font color="purple"><b>]</b></font>  
        | <a href="#trans_item">trans\_item</a> <font color="purple"><b>\[=</b></font> <a href="#repeat_range">repeat\_range</a> <font color="purple"><b>]</b></font>
  
<a name="trans_item"></a>**trans\_item**
:  <a href="#covergroup_range_list">covergroup\_range\_list</a>
  
<a name="repeat_range"></a>**repeat\_range**
:  <a href="#covergroup_expression">covergroup\_expression</a>  
        | <a href="#covergroup_expression">covergroup\_expression</a> <font color="purple"><b>:</b></font> <a href="#covergroup_expression">covergroup\_expression</a>
  
<a name="cover_cross"></a>**cover\_cross**
:  \[ <a href="#cross_identifier">cross\_identifier</a> <font color="purple"><b>:</b></font> ]  <font color="purple"><b>cross</b></font> <a href="#list_of_cross_items">list\_of\_cross\_items</a>  \[ <font color="purple"><b>iff</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> ]  <a href="#cross_body">cross\_body</a>
  
<a name="list_of_cross_items"></a>**list\_of\_cross\_items**
:  <a href="#cross_item">cross\_item</a> <font color="purple"><b>,</b></font> <a href="#cross_item">cross\_item</a>  { <font color="purple"><b>,</b></font> <a href="#cross_item">cross\_item</a> }
  
<a name="cross_item"></a>**cross\_item**
:  <a href="#cover_point_identifier">cover\_point\_identifier</a>  
        | <a href="#variable_identifier">variable\_identifier</a>
  
<a name="cross_body"></a>**cross\_body**
:  <font color="purple"><b>{</b></font>  { <a href="#cross_body_item">cross\_body\_item</a> <font color="purple"><b>;</b></font> }  <font color="purple"><b>}</b></font>  
        | <font color="purple"><b>;</b></font>
  
<a name="cross_body_item"></a>**cross\_body\_item**
:  <a href="#function_declaration">function\_declaration</a>  
        | <a href="#bins_selection_or_option">bins\_selection\_or\_option</a> <font color="purple"><b>;</b></font>
  
<a name="bins_selection_or_option"></a>**bins\_selection\_or\_option**
:  { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#coverage_option">coverage\_option</a>  
        | { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#bins_selection">bins\_selection</a>
  
<a name="bins_selection"></a>**bins\_selection**
:  <a href="#bins_keyword">bins\_keyword</a> <a href="#bin_identifier">bin\_identifier</a> <font color="purple"><b>=</b></font> <a href="#select_expression">select\_expression</a>  \[ <font color="purple"><b>iff</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> ]
  
<a name="select_expression"></a>**select\_expression**[^footnote_24]
:  <a href="#select_condition">select\_condition</a>  
        | <font color="purple"><b>!</b></font> <a href="#select_condition">select\_condition</a>  
        | <a href="#select_expression">select\_expression</a> <font color="purple"><b>&amp;&amp;</b></font> <a href="#select_expression">select\_expression</a>  
        | <a href="#select_expression">select\_expression</a> <font color="purple"><b>||</b></font> <a href="#select_expression">select\_expression</a>  
        | <font color="purple"><b>(</b></font> <a href="#select_expression">select\_expression</a> <font color="purple"><b>)</b></font>  
        | <a href="#select_expression">select\_expression</a> <font color="purple"><b>with</b></font> <font color="purple"><b>(</b></font> <a href="#with_covergroup_expression">with\_covergroup\_expression</a> <font color="purple"><b>)</b></font>  \[ <font color="purple"><b>matches</b></font> <a href="#integer_covergroup_expression">integer\_covergroup\_expression</a> ]  
        | <a href="#cross_identifier">cross\_identifier</a>  
        | <a href="#cross_set_expression">cross\_set\_expression</a>  \[ <font color="purple"><b>matches</b></font> <a href="#integer_covergroup_expression">integer\_covergroup\_expression</a> ]
  
<a name="select_condition"></a>**select\_condition**
:  <font color="purple"><b>binsof</b></font> <font color="purple"><b>(</b></font> <a href="#bins_expression">bins\_expression</a> <font color="purple"><b>)</b></font>  \[ <font color="purple"><b>intersect</b></font> <font color="purple"><b>{</b></font> <a href="#covergroup_range_list">covergroup\_range\_list</a> <font color="purple"><b>}</b></font> ]
  
<a name="bins_expression"></a>**bins\_expression**
:  <a href="#variable_identifier">variable\_identifier</a>  
        | <a href="#cover_point_identifier">cover\_point\_identifier</a>  \[ <font color="purple"><b>.</b></font> <a href="#bin_identifier">bin\_identifier</a> ]
  
<a name="covergroup_range_list"></a>**covergroup\_range\_list**
:  <a href="#covergroup_value_range">covergroup\_value\_range</a>  { <font color="purple"><b>,</b></font> <a href="#covergroup_value_range">covergroup\_value\_range</a> }
  
<a name="covergroup_value_range"></a>**covergroup\_value\_range**
:  <a href="#covergroup_expression">covergroup\_expression</a>  
        | <font color="purple"><b>\[</b></font> <a href="#covergroup_expression">covergroup\_expression</a> <font color="purple"><b>:</b></font> <a href="#covergroup_expression">covergroup\_expression</a> <font color="purple"><b>]</b></font> [^footnote_25]
  
<a name="with_covergroup_expression"></a>**with\_covergroup\_expression**
:  <a href="#covergroup_expression">covergroup\_expression</a> [^footnote_26]
  
<a name="set_covergroup_expression"></a>**set\_covergroup\_expression**
:  <a href="#covergroup_expression">covergroup\_expression</a> [^footnote_27]
  
<a name="integer_covergroup_expression"></a>**integer\_covergroup\_expression**
:  <a href="#covergroup_expression">covergroup\_expression</a>
  
<a name="cross_set_expression"></a>**cross\_set\_expression**
:  <a href="#covergroup_expression">covergroup\_expression</a>
  
<a name="covergroup_expression"></a>**covergroup\_expression**
:  <a href="#expression">expression</a> [^footnote_28]
  
## Primitive instances
  
### Primitive instantiation and instances
  
<a name="gate_instantiation"></a>**gate\_instantiation**
:  <a href="#cmos_switchtype">cmos\_switchtype</a>  \[ <a href="#delay3">delay3</a> ]  <a href="#cmos_switch_instance">cmos\_switch\_instance</a>  { <font color="purple"><b>,</b></font> <a href="#cmos_switch_instance">cmos\_switch\_instance</a> }  <font color="purple"><b>;</b></font>  
        | <a href="#enable_gatetype">enable\_gatetype</a>  \[ <a href="#drive_strength">drive\_strength</a> ]   \[ <a href="#delay3">delay3</a> ]  <a href="#enable_gate_instance">enable\_gate\_instance</a>  { <font color="purple"><b>,</b></font> <a href="#enable_gate_instance">enable\_gate\_instance</a> }  <font color="purple"><b>;</b></font>  
        | <a href="#mos_switchtype">mos\_switchtype</a>  \[ <a href="#delay3">delay3</a> ]  <a href="#mos_switch_instance">mos\_switch\_instance</a>  { <font color="purple"><b>,</b></font> <a href="#mos_switch_instance">mos\_switch\_instance</a> }  <font color="purple"><b>;</b></font>  
        | <a href="#n_input_gatetype">n\_input\_gatetype</a>  \[ <a href="#drive_strength">drive\_strength</a> ]   \[ <a href="#delay2">delay2</a> ]  <a href="#n_input_gate_instance">n\_input\_gate\_instance</a>  { <font color="purple"><b>,</b></font> <a href="#n_input_gate_instance">n\_input\_gate\_instance</a> }  <font color="purple"><b>;</b></font>  
        | <a href="#n_output_gatetype">n\_output\_gatetype</a>  \[ <a href="#drive_strength">drive\_strength</a> ]   \[ <a href="#delay2">delay2</a> ]  <a href="#n_output_gate_instance">n\_output\_gate\_instance</a>  { <font color="purple"><b>,</b></font> <a href="#n_output_gate_instance">n\_output\_gate\_instance</a> }  <font color="purple"><b>;</b></font>  
        | <a href="#pass_en_switchtype">pass\_en\_switchtype</a>  \[ <a href="#delay2">delay2</a> ]  <a href="#pass_enable_switch_instance">pass\_enable\_switch\_instance</a>  { <font color="purple"><b>,</b></font> <a href="#pass_enable_switch_instance">pass\_enable\_switch\_instance</a> }  <font color="purple"><b>;</b></font>  
        | <a href="#pass_switchtype">pass\_switchtype</a> <a href="#pass_switch_instance">pass\_switch\_instance</a>  { <font color="purple"><b>,</b></font> <a href="#pass_switch_instance">pass\_switch\_instance</a> }  <font color="purple"><b>;</b></font>  
        | <font color="purple"><b>pulldown</b></font>  \[ <a href="#pulldown_strength">pulldown\_strength</a> ]  <a href="#pull_gate_instance">pull\_gate\_instance</a>  { <font color="purple"><b>,</b></font> <a href="#pull_gate_instance">pull\_gate\_instance</a> }  <font color="purple"><b>;</b></font>  
        | <font color="purple"><b>pullup</b></font>  \[ <a href="#pullup_strength">pullup\_strength</a> ]  <a href="#pull_gate_instance">pull\_gate\_instance</a>  { <font color="purple"><b>,</b></font> <a href="#pull_gate_instance">pull\_gate\_instance</a> }  <font color="purple"><b>;</b></font>
  
<a name="cmos_switch_instance"></a>**cmos\_switch\_instance**
:  \[ <a href="#name_of_instance">name\_of\_instance</a> ]  <font color="purple"><b>(</b></font> <a href="#output_terminal">output\_terminal</a> <font color="purple"><b>,</b></font> <a href="#input_terminal">input\_terminal</a> <font color="purple"><b>,</b></font> <a href="#ncontrol_terminal">ncontrol\_terminal</a> <font color="purple"><b>,</b></font> <a href="#pcontrol_terminal">pcontrol\_terminal</a> <font color="purple"><b>)</b></font>
  
<a name="enable_gate_instance"></a>**enable\_gate\_instance**
:  \[ <a href="#name_of_instance">name\_of\_instance</a> ]  <font color="purple"><b>(</b></font> <a href="#output_terminal">output\_terminal</a> <font color="purple"><b>,</b></font> <a href="#input_terminal">input\_terminal</a> <font color="purple"><b>,</b></font> <a href="#enable_terminal">enable\_terminal</a> <font color="purple"><b>)</b></font>
  
<a name="mos_switch_instance"></a>**mos\_switch\_instance**
:  \[ <a href="#name_of_instance">name\_of\_instance</a> ]  <font color="purple"><b>(</b></font> <a href="#output_terminal">output\_terminal</a> <font color="purple"><b>,</b></font> <a href="#input_terminal">input\_terminal</a> <font color="purple"><b>,</b></font> <a href="#enable_terminal">enable\_terminal</a> <font color="purple"><b>)</b></font>
  
<a name="n_input_gate_instance"></a>**n\_input\_gate\_instance**
:  \[ <a href="#name_of_instance">name\_of\_instance</a> ]  <font color="purple"><b>(</b></font> <a href="#output_terminal">output\_terminal</a> <font color="purple"><b>,</b></font> <a href="#input_terminal">input\_terminal</a>  { <font color="purple"><b>,</b></font> <a href="#input_terminal">input\_terminal</a> }  <font color="purple"><b>)</b></font>
  
<a name="n_output_gate_instance"></a>**n\_output\_gate\_instance**
:  \[ <a href="#name_of_instance">name\_of\_instance</a> ]  <font color="purple"><b>(</b></font> <a href="#output_terminal">output\_terminal</a>  { <font color="purple"><b>,</b></font> <a href="#output_terminal">output\_terminal</a> }  <font color="purple"><b>,</b></font> <a href="#input_terminal">input\_terminal</a> <font color="purple"><b>)</b></font>
  
<a name="pass_switch_instance"></a>**pass\_switch\_instance**
:  \[ <a href="#name_of_instance">name\_of\_instance</a> ]  <font color="purple"><b>(</b></font> <a href="#inout_terminal">inout\_terminal</a> <font color="purple"><b>,</b></font> <a href="#inout_terminal">inout\_terminal</a> <font color="purple"><b>)</b></font>
  
<a name="pass_enable_switch_instance"></a>**pass\_enable\_switch\_instance**
:  \[ <a href="#name_of_instance">name\_of\_instance</a> ]  <font color="purple"><b>(</b></font> <a href="#inout_terminal">inout\_terminal</a> <font color="purple"><b>,</b></font> <a href="#inout_terminal">inout\_terminal</a> <font color="purple"><b>,</b></font> <a href="#enable_terminal">enable\_terminal</a> <font color="purple"><b>)</b></font>
  
<a name="pull_gate_instance"></a>**pull\_gate\_instance**
:  \[ <a href="#name_of_instance">name\_of\_instance</a> ]  <font color="purple"><b>(</b></font> <a href="#output_terminal">output\_terminal</a> <font color="purple"><b>)</b></font>
  
### Primitive strengths
  
<a name="pulldown_strength"></a>**pulldown\_strength**
:  <font color="purple"><b>(</b></font> <a href="#strength0">strength0</a> <font color="purple"><b>,</b></font> <a href="#strength1">strength1</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>(</b></font> <a href="#strength1">strength1</a> <font color="purple"><b>,</b></font> <a href="#strength0">strength0</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>(</b></font> <a href="#strength0">strength0</a> <font color="purple"><b>)</b></font>
  
<a name="pullup_strength"></a>**pullup\_strength**
:  <font color="purple"><b>(</b></font> <a href="#strength0">strength0</a> <font color="purple"><b>,</b></font> <a href="#strength1">strength1</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>(</b></font> <a href="#strength1">strength1</a> <font color="purple"><b>,</b></font> <a href="#strength0">strength0</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>(</b></font> <a href="#strength1">strength1</a> <font color="purple"><b>)</b></font>
  
### Primitive terminals
  
<a name="enable_terminal"></a>**enable\_terminal**
:  <a href="#expression">expression</a>
  
<a name="inout_terminal"></a>**inout\_terminal**
:  <a href="#net_lvalue">net\_lvalue</a>
  
<a name="input_terminal"></a>**input\_terminal**
:  <a href="#expression">expression</a>
  
<a name="ncontrol_terminal"></a>**ncontrol\_terminal**
:  <a href="#expression">expression</a>
  
<a name="output_terminal"></a>**output\_terminal**
:  <a href="#net_lvalue">net\_lvalue</a>
  
<a name="pcontrol_terminal"></a>**pcontrol\_terminal**
:  <a href="#expression">expression</a>
  
### Primitive gate and switch types
  
<a name="cmos_switchtype"></a>**cmos\_switchtype**
:  <font color="purple"><b>cmos</b></font>  
        | <font color="purple"><b>rcmos</b></font>
  
<a name="enable_gatetype"></a>**enable\_gatetype**
:  <font color="purple"><b>bufif0</b></font>  
        | <font color="purple"><b>bufif1</b></font>  
        | <font color="purple"><b>notif0</b></font>  
        | <font color="purple"><b>notif1</b></font>
  
<a name="mos_switchtype"></a>**mos\_switchtype**
:  <font color="purple"><b>nmos</b></font>  
        | <font color="purple"><b>pmos</b></font>  
        | <font color="purple"><b>rnmos</b></font>  
        | <font color="purple"><b>rpmos</b></font>
  
<a name="n_input_gatetype"></a>**n\_input\_gatetype**
:  <font color="purple"><b>and</b></font>  
        | <font color="purple"><b>nand</b></font>  
        | <font color="purple"><b>or</b></font>  
        | <font color="purple"><b>nor</b></font>  
        | <font color="purple"><b>xor</b></font>  
        | <font color="purple"><b>xnor</b></font>
  
<a name="n_output_gatetype"></a>**n\_output\_gatetype**
:  <font color="purple"><b>buf</b></font>  
        | <font color="purple"><b>not</b></font>
  
<a name="pass_en_switchtype"></a>**pass\_en\_switchtype**
:  <font color="purple"><b>tranif0</b></font>  
        | <font color="purple"><b>tranif1</b></font>  
        | <font color="purple"><b>rtranif1</b></font>  
        | <font color="purple"><b>rtranif0</b></font>
  
<a name="pass_switchtype"></a>**pass\_switchtype**
:  <font color="purple"><b>tran</b></font>  
        | <font color="purple"><b>rtran</b></font>
  
## Instantiations
  
### Instantation
  
#### Module instantation
  
<a name="module_instantiation"></a>**module\_instantiation**
:  <a href="#module_identifier">module\_identifier</a>  \[ <a href="#parameter_value_assignment">parameter\_value\_assignment</a> ]  <a href="#hierarchical_instance">hierarchical\_instance</a>  { <font color="purple"><b>,</b></font> <a href="#hierarchical_instance">hierarchical\_instance</a> }  <font color="purple"><b>;</b></font>
  
<a name="parameter_value_assignment"></a>**parameter\_value\_assignment**
:  <font color="purple"><b>#</b></font> <font color="purple"><b>(</b></font>  \[ <a href="#list_of_parameter_assignments">list\_of\_parameter\_assignments</a> ]  <font color="purple"><b>)</b></font>
  
<a name="list_of_parameter_assignments"></a>**list\_of\_parameter\_assignments**
:  <a href="#ordered_parameter_assignment">ordered\_parameter\_assignment</a>  { <font color="purple"><b>,</b></font> <a href="#ordered_parameter_assignment">ordered\_parameter\_assignment</a> }  
        | <a href="#named_parameter_assignment">named\_parameter\_assignment</a>  { <font color="purple"><b>,</b></font> <a href="#named_parameter_assignment">named\_parameter\_assignment</a> }
  
<a name="ordered_parameter_assignment"></a>**ordered\_parameter\_assignment**
:  <a href="#param_expression">param\_expression</a>
  
<a name="named_parameter_assignment"></a>**named\_parameter\_assignment**
:  <font color="purple"><b>.</b></font> <a href="#parameter_identifier">parameter\_identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#param_expression">param\_expression</a> ]  <font color="purple"><b>)</b></font>
  
<a name="hierarchical_instance"></a>**hierarchical\_instance**
:  <a href="#name_of_instance">name\_of\_instance</a> <font color="purple"><b>(</b></font>  \[ <a href="#list_of_port_connections">list\_of\_port\_connections</a> ]  <font color="purple"><b>)</b></font>
  
<a name="name_of_instance"></a>**name\_of\_instance**
:  <a href="#instance_identifier">instance\_identifier</a>  { <a href="#unpacked_dimension">unpacked\_dimension</a> }
  
<a name="list_of_port_connections"></a>**list\_of\_port\_connections**[^footnote_29]
:  <a href="#ordered_port_connection">ordered\_port\_connection</a>  { <font color="purple"><b>,</b></font> <a href="#ordered_port_connection">ordered\_port\_connection</a> }  
        | <a href="#named_port_connection">named\_port\_connection</a>  { <font color="purple"><b>,</b></font> <a href="#named_port_connection">named\_port\_connection</a> }
  
<a name="ordered_port_connection"></a>**ordered\_port\_connection**
:  { <a href="#attribute_instance">attribute\_instance</a> }   \[ <a href="#expression">expression</a> ]
  
<a name="named_port_connection"></a>**named\_port\_connection**
:  { <a href="#attribute_instance">attribute\_instance</a> }  <font color="purple"><b>.</b></font> <a href="#port_identifier">port\_identifier</a>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#expression">expression</a> ]  <font color="purple"><b>)</b></font> ]  
        | { <a href="#attribute_instance">attribute\_instance</a> }  <font color="purple"><b>.\*</b></font>
  
#### Interface instantiation
  
<a name="interface_instantiation"></a>**interface\_instantiation**
:  <a href="#interface_identifier">interface\_identifier</a>  \[ <a href="#parameter_value_assignment">parameter\_value\_assignment</a> ]  <a href="#hierarchical_instance">hierarchical\_instance</a>  { <font color="purple"><b>,</b></font> <a href="#hierarchical_instance">hierarchical\_instance</a> }  <font color="purple"><b>;</b></font>
  
####  Program instantiation
  
<a name="program_instantiation"></a>**program\_instantiation**
:  <a href="#program_identifier">program\_identifier</a>  \[ <a href="#parameter_value_assignment">parameter\_value\_assignment</a> ]  <a href="#hierarchical_instance">hierarchical\_instance</a>  { <font color="purple"><b>,</b></font> <a href="#hierarchical_instance">hierarchical\_instance</a> }  <font color="purple"><b>;</b></font>
  
#### Checker instantiation
  
<a name="checker_instantiation"></a>**checker\_instantiation**
:  <a href="#ps_checker_identifier">ps\_checker\_identifier</a> <a href="#name_of_instance">name\_of\_instance</a> <font color="purple"><b>(</b></font>  \[ <a href="#list_of_checker_port_connections">list\_of\_checker\_port\_connections</a> ]  <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font>
  
<a name="list_of_checker_port_connections"></a>**list\_of\_checker\_port\_connections**[^footnote_29]
:  <a href="#ordered_checker_port_connection">ordered\_checker\_port\_connection</a>  { <font color="purple"><b>,</b></font> <a href="#ordered_checker_port_connection">ordered\_checker\_port\_connection</a> }  
        | <a href="#named_checker_port_connection">named\_checker\_port\_connection</a>  { <font color="purple"><b>,</b></font> <a href="#named_checker_port_connection">named\_checker\_port\_connection</a> }
  
<a name="ordered_checker_port_connection"></a>**ordered\_checker\_port\_connection**
:  { <a href="#attribute_instance">attribute\_instance</a> }   \[ <a href="#property_actual_arg">property\_actual\_arg</a> ]
  
<a name="named_checker_port_connection"></a>**named\_checker\_port\_connection**
:  { <a href="#attribute_instance">attribute\_instance</a> }  <font color="purple"><b>.</b></font> <a href="#formal_port_identifier">formal\_port\_identifier</a>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#property_actual_arg">property\_actual\_arg</a> ]  <font color="purple"><b>)</b></font> ]  
        | { <a href="#attribute_instance">attribute\_instance</a> }  <font color="purple"><b>.\*</b></font>
  
### Generated instantiation
  
<a name="generate_region"></a>**generate\_region**
:  <font color="purple"><b>generate</b></font>  { <a href="#generate_item">generate\_item</a> }  <font color="purple"><b>endgenerate</b></font>
  
<a name="loop_generate_construct"></a>**loop\_generate\_construct**
:  <font color="purple"><b>for</b></font> <font color="purple"><b>(</b></font> <a href="#genvar_initialization">genvar\_initialization</a> <font color="purple"><b>;</b></font> <a href="#genvar_expression">genvar\_expression</a> <font color="purple"><b>;</b></font> <a href="#genvar_iteration">genvar\_iteration</a> <font color="purple"><b>)</b></font> <a href="#generate_block">generate\_block</a>
  
<a name="genvar_initialization"></a>**genvar\_initialization**
:  \[ <font color="purple"><b>genvar</b></font> ]  <a href="#genvar_identifier">genvar\_identifier</a> <font color="purple"><b>=</b></font> <a href="#constant_expression">constant\_expression</a>
  
<a name="genvar_iteration"></a>**genvar\_iteration**
:  <a href="#genvar_identifier">genvar\_identifier</a> <a href="#assignment_operator">assignment\_operator</a> <a href="#genvar_expression">genvar\_expression</a>  
        | <a href="#inc_or_dec_operator">inc\_or\_dec\_operator</a> <a href="#genvar_identifier">genvar\_identifier</a>  
        | <a href="#genvar_identifier">genvar\_identifier</a> <a href="#inc_or_dec_operator">inc\_or\_dec\_operator</a>
  
<a name="conditional_generate_construct"></a>**conditional\_generate\_construct**
:  <a href="#if_generate_construct">if\_generate\_construct</a>  
        | <a href="#case_generate_construct">case\_generate\_construct</a>
  
<a name="if_generate_construct"></a>**if\_generate\_construct**
:  <font color="purple"><b>if</b></font> <font color="purple"><b>(</b></font> <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>)</b></font> <a href="#generate_block">generate\_block</a>  \[ <font color="purple"><b>else</b></font> <a href="#generate_block">generate\_block</a> ]
  
<a name="case_generate_construct"></a>**case\_generate\_construct**
:  <font color="purple"><b>case</b></font> <font color="purple"><b>(</b></font> <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>)</b></font> <a href="#case_generate_item">case\_generate\_item</a>  { <a href="#case_generate_item">case\_generate\_item</a> }  <font color="purple"><b>endcase</b></font>
  
<a name="case_generate_item"></a>**case\_generate\_item**
:  <a href="#constant_expression">constant\_expression</a>  { <font color="purple"><b>,</b></font> <a href="#constant_expression">constant\_expression</a> }  <font color="purple"><b>:</b></font> <a href="#generate_block">generate\_block</a>  
        | <font color="purple"><b>default</b></font>  \[ <font color="purple"><b>:</b></font> ]  <a href="#generate_block">generate\_block</a>
  
<a name="generate_block"></a>**generate\_block**
:  <a href="#generate_item">generate\_item</a>  
        | \[ <a href="#generate_block_identifier">generate\_block\_identifier</a> <font color="purple"><b>:</b></font> ]  <font color="purple"><b>begin</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#generate_block_identifier">generate\_block\_identifier</a> ]   { <a href="#generate_item">generate\_item</a> }  <font color="purple"><b>end</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#generate_block_identifier">generate\_block\_identifier</a> ]
  
<a name="generate_item"></a>**generate\_item**[^footnote_30]
:  <a href="#module_or_generate_item">module\_or\_generate\_item</a>  
        | <a href="#interface_or_generate_item">interface\_or\_generate\_item</a>  
        | <a href="#checker_or_generate_item">checker\_or\_generate\_item</a>
  
## UDP declaration and instantiation
  
### UDP declaration
  
<a name="udp_nonansi_declaration"></a>**udp\_nonansi\_declaration**
:  { <a href="#attribute_instance">attribute\_instance</a> }  <font color="purple"><b>primitive</b></font> <a href="#udp_identifier">udp\_identifier</a> <font color="purple"><b>(</b></font> <a href="#udp_port_list">udp\_port\_list</a> <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font>
  
<a name="udp_ansi_declaration"></a>**udp\_ansi\_declaration**
:  { <a href="#attribute_instance">attribute\_instance</a> }  <font color="purple"><b>primitive</b></font> <a href="#udp_identifier">udp\_identifier</a> <font color="purple"><b>(</b></font> <a href="#udp_declaration_port_list">udp\_declaration\_port\_list</a> <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font>
  
<a name="udp_declaration"></a>**udp\_declaration**
:  <a href="#udp_nonansi_declaration">udp\_nonansi\_declaration</a> <a href="#udp_port_declaration">udp\_port\_declaration</a>  { <a href="#udp_port_declaration">udp\_port\_declaration</a> }  <a href="#udp_body">udp\_body</a> <font color="purple"><b>endprimitive</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#udp_identifier">udp\_identifier</a> ]  
        | <a href="#udp_ansi_declaration">udp\_ansi\_declaration</a> <a href="#udp_body">udp\_body</a> <font color="purple"><b>endprimitive</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#udp_identifier">udp\_identifier</a> ]  
        | <font color="purple"><b>extern</b></font> <a href="#udp_nonansi_declaration">udp\_nonansi\_declaration</a>  
        | <font color="purple"><b>extern</b></font> <a href="#udp_ansi_declaration">udp\_ansi\_declaration</a>  
        | { <a href="#attribute_instance">attribute\_instance</a> }  <font color="purple"><b>primitive</b></font> <a href="#udp_identifier">udp\_identifier</a> <font color="purple"><b>(</b></font> <font color="purple"><b>.\*</b></font> <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font>  { <a href="#udp_port_declaration">udp\_port\_declaration</a> }  <a href="#udp_body">udp\_body</a> <font color="purple"><b>endprimitive</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#udp_identifier">udp\_identifier</a> ]
  
### UDP ports
  
<a name="udp_port_list"></a>**udp\_port\_list**
:  <a href="#output_port_identifier">output\_port\_identifier</a> <font color="purple"><b>,</b></font> <a href="#input_port_identifier">input\_port\_identifier</a>  { <font color="purple"><b>,</b></font> <a href="#input_port_identifier">input\_port\_identifier</a> }
  
<a name="udp_declaration_port_list"></a>**udp\_declaration\_port\_list**
:  <a href="#udp_output_declaration">udp\_output\_declaration</a> <font color="purple"><b>,</b></font> <a href="#udp_input_declaration">udp\_input\_declaration</a>  { <font color="purple"><b>,</b></font> <a href="#udp_input_declaration">udp\_input\_declaration</a> }
  
<a name="udp_port_declaration"></a>**udp\_port\_declaration**
:  <a href="#udp_output_declaration">udp\_output\_declaration</a> <font color="purple"><b>;</b></font>  
        | <a href="#udp_input_declaration">udp\_input\_declaration</a> <font color="purple"><b>;</b></font>  
        | <a href="#udp_reg_declaration">udp\_reg\_declaration</a> <font color="purple"><b>;</b></font>
  
<a name="udp_output_declaration"></a>**udp\_output\_declaration**
:  { <a href="#attribute_instance">attribute\_instance</a> }  <font color="purple"><b>output</b></font> <a href="#port_identifier">port\_identifier</a>  
        | { <a href="#attribute_instance">attribute\_instance</a> }  <font color="purple"><b>output</b></font> <font color="purple"><b>reg</b></font> <a href="#port_identifier">port\_identifier</a>  \[ <font color="purple"><b>=</b></font> <a href="#constant_expression">constant\_expression</a> ]
  
<a name="udp_input_declaration"></a>**udp\_input\_declaration**
:  { <a href="#attribute_instance">attribute\_instance</a> }  <font color="purple"><b>input</b></font> <a href="#list_of_udp_port_identifiers">list\_of\_udp\_port\_identifiers</a>
  
<a name="udp_reg_declaration"></a>**udp\_reg\_declaration**
:  { <a href="#attribute_instance">attribute\_instance</a> }  <font color="purple"><b>reg</b></font> <a href="#variable_identifier">variable\_identifier</a>
  
### UDP body
  
<a name="udp_body"></a>**udp\_body**
:  <a href="#combinational_body">combinational\_body</a>  
        | <a href="#sequential_body">sequential\_body</a>
  
<a name="combinational_body"></a>**combinational\_body**
:  <font color="purple"><b>table</b></font> <a href="#combinational_entry">combinational\_entry</a>  { <a href="#combinational_entry">combinational\_entry</a> }  <font color="purple"><b>endtable</b></font>
  
<a name="combinational_entry"></a>**combinational\_entry**
:  <a href="#level_input_list">level\_input\_list</a> <font color="purple"><b>:</b></font> <a href="#output_symbol">output\_symbol</a> <font color="purple"><b>;</b></font>
  
<a name="sequential_body"></a>**sequential\_body**
:  \[ <a href="#udp_initial_statement">udp\_initial\_statement</a> ]  <font color="purple"><b>table</b></font> <a href="#sequential_entry">sequential\_entry</a>  { <a href="#sequential_entry">sequential\_entry</a> }  <font color="purple"><b>endtable</b></font>
  
<a name="udp_initial_statement"></a>**udp\_initial\_statement**
:  <font color="purple"><b>initial</b></font> <a href="#output_port_identifier">output\_port\_identifier</a> <font color="purple"><b>=</b></font> <a href="#init_val">init\_val</a> <font color="purple"><b>;</b></font>
  
<a name="init_val"></a>**init\_val**
:  <font color="purple"><b>1&#39;b0</b></font>  
        | <font color="purple"><b>1&#39;b1</b></font>  
        | <font color="purple"><b>1&#39;bx</b></font>  
        | <font color="purple"><b>1&#39;bX</b></font>  
        | <font color="purple"><b>1&#39;B0</b></font>  
        | <font color="purple"><b>1&#39;B1</b></font>  
        | <font color="purple"><b>1&#39;Bx</b></font>  
        | <font color="purple"><b>1&#39;BX</b></font>  
        | <font color="purple"><b>1</b></font>  
        | <font color="purple"><b>0</b></font>
  
<a name="sequential_entry"></a>**sequential\_entry**
:  <a href="#seq_input_list">seq\_input\_list</a> <font color="purple"><b>:</b></font> <a href="#current_state">current\_state</a> <font color="purple"><b>:</b></font> <a href="#next_state">next\_state</a> <font color="purple"><b>;</b></font>
  
<a name="seq_input_list"></a>**seq\_input\_list**
:  <a href="#level_input_list">level\_input\_list</a>  
        | <a href="#edge_input_list">edge\_input\_list</a>
  
<a name="level_input_list"></a>**level\_input\_list**
:  <a href="#level_symbol">level\_symbol</a>  { <a href="#level_symbol">level\_symbol</a> }
  
<a name="edge_input_list"></a>**edge\_input\_list**
:  { <a href="#level_symbol">level\_symbol</a> }  <a href="#edge_indicator">edge\_indicator</a>  { <a href="#level_symbol">level\_symbol</a> }
  
<a name="edge_indicator"></a>**edge\_indicator**
:  <font color="purple"><b>(</b></font> <a href="#level_symbol">level\_symbol</a> <a href="#level_symbol">level\_symbol</a> <font color="purple"><b>)</b></font>  
        | <a href="#edge_symbol">edge\_symbol</a>
  
<a name="current_state"></a>**current\_state**
:  <a href="#level_symbol">level\_symbol</a>
  
<a name="next_state"></a>**next\_state**
:  <a href="#output_symbol">output\_symbol</a>  
        | <font color="purple"><b>-</b></font>
  
<a name="output_symbol"></a>**output\_symbol**
:  <font color="purple"><b>0</b></font>  
        | <font color="purple"><b>1</b></font>  
        | <font color="purple"><b>x</b></font>  
        | <font color="purple"><b>X</b></font>
  
<a name="level_symbol"></a>**level\_symbol**
:  <font color="purple"><b>0</b></font>  
        | <font color="purple"><b>1</b></font>  
        | <font color="purple"><b>x</b></font>  
        | <font color="purple"><b>X</b></font>  
        | <font color="purple"><b>?</b></font>  
        | <font color="purple"><b>b</b></font>  
        | <font color="purple"><b>B</b></font>
  
<a name="edge_symbol"></a>**edge\_symbol**
:  <font color="purple"><b>r</b></font>  
        | <font color="purple"><b>R</b></font>  
        | <font color="purple"><b>f</b></font>  
        | <font color="purple"><b>F</b></font>  
        | <font color="purple"><b>p</b></font>  
        | <font color="purple"><b>P</b></font>  
        | <font color="purple"><b>n</b></font>  
        | <font color="purple"><b>N</b></font>  
        | <font color="purple"><b>\*</b></font>
  
### UDP instantiation
  
<a name="udp_instantiation"></a>**udp\_instantiation**
:  <a href="#udp_identifier">udp\_identifier</a>  \[ <a href="#drive_strength">drive\_strength</a> ]   \[ <a href="#delay2">delay2</a> ]  <a href="#udp_instance">udp\_instance</a>  { <font color="purple"><b>,</b></font> <a href="#udp_instance">udp\_instance</a> }  <font color="purple"><b>;</b></font>
  
<a name="udp_instance"></a>**udp\_instance**
:  \[ <a href="#name_of_instance">name\_of\_instance</a> ]  <font color="purple"><b>(</b></font> <a href="#output_terminal">output\_terminal</a> <font color="purple"><b>,</b></font> <a href="#input_terminal">input\_terminal</a>  { <font color="purple"><b>,</b></font> <a href="#input_terminal">input\_terminal</a> }  <font color="purple"><b>)</b></font>
  
## Behavioral assignments
  
### Continuous assignment and net alias statements
  
<a name="continuous_assign"></a>**continuous\_assign**
:  <font color="purple"><b>assign</b></font>  \[ <a href="#drive_strength">drive\_strength</a> ]   \[ <a href="#delay3">delay3</a> ]  <a href="#list_of_net_assignments">list\_of\_net\_assignments</a> <font color="purple"><b>;</b></font>  
        | <font color="purple"><b>assign</b></font>  \[ <a href="#delay_control">delay\_control</a> ]  <a href="#list_of_variable_assignments">list\_of\_variable\_assignments</a> <font color="purple"><b>;</b></font>
  
<a name="list_of_net_assignments"></a>**list\_of\_net\_assignments**
:  <a href="#net_assignment">net\_assignment</a>  { <font color="purple"><b>,</b></font> <a href="#net_assignment">net\_assignment</a> }
  
<a name="list_of_variable_assignments"></a>**list\_of\_variable\_assignments**
:  <a href="#variable_assignment">variable\_assignment</a>  { <font color="purple"><b>,</b></font> <a href="#variable_assignment">variable\_assignment</a> }
  
<a name="net_alias"></a>**net\_alias**
:  <font color="purple"><b>alias</b></font> <a href="#net_lvalue">net\_lvalue</a> <font color="purple"><b>=</b></font> <a href="#net_lvalue">net\_lvalue</a>  { <font color="purple"><b>=</b></font> <a href="#net_lvalue">net\_lvalue</a> }  <font color="purple"><b>;</b></font>
  
<a name="net_assignment"></a>**net\_assignment**
:  <a href="#net_lvalue">net\_lvalue</a> <font color="purple"><b>=</b></font> <a href="#expression">expression</a>
  
### Procedural blocks and assignments
  
<a name="initial_construct"></a>**initial\_construct**
:  <font color="purple"><b>initial</b></font> <a href="#statement_or_null">statement\_or\_null</a>
  
<a name="always_construct"></a>**always\_construct**
:  <a href="#always_keyword">always\_keyword</a> <a href="#statement">statement</a>
  
<a name="always_keyword"></a>**always\_keyword**
:  <font color="purple"><b>always</b></font>  
        | <font color="purple"><b>always\_comb</b></font>  
        | <font color="purple"><b>always\_latch</b></font>  
        | <font color="purple"><b>always\_ff</b></font>
  
<a name="final_construct"></a>**final\_construct**
:  <font color="purple"><b>final</b></font> <a href="#function_statement">function\_statement</a>
  
<a name="blocking_assignment"></a>**blocking\_assignment**
:  <a href="#variable_lvalue">variable\_lvalue</a> <font color="purple"><b>=</b></font> <a href="#delay_or_event_control">delay\_or\_event\_control</a> <a href="#expression">expression</a>  
        | <a href="#nonrange_variable_lvalue">nonrange\_variable\_lvalue</a> <font color="purple"><b>=</b></font> <a href="#dynamic_array_new">dynamic\_array\_new</a>  
        | \[ <a href="#implicit_class_handle">implicit\_class\_handle</a> <font color="purple"><b>.</b></font> | <a href="#class_scope">class\_scope</a> | <a href="#package_scope">package\_scope</a> ]  <a href="#hierarchical_variable_identifier">hierarchical\_variable\_identifier</a> <a href="#select">select</a> <font color="purple"><b>!=</b></font> <a href="#class_new">class\_new</a>  
        | <a href="#operator_assignment">operator\_assignment</a>
  
<a name="operator_assignment"></a>**operator\_assignment**
:  <a href="#variable_lvalue">variable\_lvalue</a> <a href="#assignment_operator">assignment\_operator</a> <a href="#expression">expression</a>
  
<a name="assignment_operator"></a>**assignment\_operator**
:  <font color="purple"><b>=</b></font>  
        | <font color="purple"><b>+=</b></font>  
        | <font color="purple"><b>-=</b></font>  
        | <font color="purple"><b>\*=</b></font>  
        | <font color="purple"><b>/=</b></font>  
        | <font color="purple"><b>%=</b></font>  
        | <font color="purple"><b>&amp;=</b></font>  
        | <font color="purple"><b>|=</b></font>  
        | <font color="purple"><b>^=</b></font>  
        | <font color="purple"><b>&lt;&lt;=</b></font>  
        | <font color="purple"><b>&gt;&gt;=</b></font>  
        | <font color="purple"><b>&lt;&lt;&lt;=</b></font>  
        | <font color="purple"><b>&gt;&gt;&gt;=</b></font>
  
<a name="nonblocking_assignment"></a>**nonblocking\_assignment**
:  <a href="#variable_lvalue">variable\_lvalue</a> <font color="purple"><b>&lt;=</b></font>  \[ <a href="#delay_or_event_control">delay\_or\_event\_control</a> ]  <a href="#expression">expression</a>
  
<a name="procedural_continuous_assignment"></a>**procedural\_continuous\_assignment**
:  <font color="purple"><b>assign</b></font> <a href="#variable_assignment">variable\_assignment</a>  
        | <font color="purple"><b>deassign</b></font> <a href="#variable_lvalue">variable\_lvalue</a>  
        | <font color="purple"><b>force</b></font> <a href="#variable_assignment">variable\_assignment</a>  
        | <font color="purple"><b>force</b></font> <a href="#net_assignment">net\_assignment</a>  
        | <font color="purple"><b>release</b></font> <a href="#variable_lvalue">variable\_lvalue</a>  
        | <font color="purple"><b>release</b></font> <a href="#net_lvalue">net\_lvalue</a>
  
<a name="variable_assignment"></a>**variable\_assignment**
:  <a href="#variable_lvalue">variable\_lvalue</a> <font color="purple"><b>=</b></font> <a href="#expression">expression</a>
  
### Parallel and sequential blocks
  
<a name="action_block"></a>**action\_block**
:  <a href="#statement_or_null">statement\_or\_null</a>  
        | \[ <a href="#statement">statement</a> ]  <font color="purple"><b>else</b></font> <a href="#statement_or_null">statement\_or\_null</a>
  
<a name="seq_block"></a>**seq\_block**
:  <font color="purple"><b>begin</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#block_identifier">block\_identifier</a> ]   { <a href="#block_item_declaration">block\_item\_declaration</a> }   { <a href="#statement_or_null">statement\_or\_null</a> }  <font color="purple"><b>end</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#block_identifier">block\_identifier</a> ]
  
<a name="par_block"></a>**par\_block**
:  <font color="purple"><b>fork</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#block_identifier">block\_identifier</a> ]   { <a href="#block_item_declaration">block\_item\_declaration</a> }   { <a href="#statement_or_null">statement\_or\_null</a> }  <a href="#join_keyword">join\_keyword</a>  \[ <font color="purple"><b>:</b></font> <a href="#block_identifier">block\_identifier</a> ]
  
<a name="join_keyword"></a>**join\_keyword**
:  <font color="purple"><b>join</b></font>  
        | <font color="purple"><b>join\_any</b></font>  
        | <font color="purple"><b>join\_none</b></font>
  
### Statements
  
<a name="statement_or_null"></a>**statement\_or\_null**
:  <a href="#statement">statement</a>  
        | { <a href="#attribute_instance">attribute\_instance</a> }  <font color="purple"><b>;</b></font>
  
<a name="statement"></a>**statement**
:  \[ <a href="#block_identifier">block\_identifier</a> <font color="purple"><b>:</b></font> ]   { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#statement_item">statement\_item</a>
  
<a name="statement_item"></a>**statement\_item**
:  <a href="#blocking_assignment">blocking\_assignment</a> <font color="purple"><b>;</b></font>  
        | <a href="#nonblocking_assignment">nonblocking\_assignment</a> <font color="purple"><b>;</b></font>  
        | <a href="#procedural_continuous_assignment">procedural\_continuous\_assignment</a> <font color="purple"><b>;</b></font>  
        | <a href="#case_statement">case\_statement</a>  
        | <a href="#conditional_statement">conditional\_statement</a>  
        | <a href="#inc_or_dec_expression">inc\_or\_dec\_expression</a> <font color="purple"><b>;</b></font>  
        | <a href="#subroutine_call_statement">subroutine\_call\_statement</a>  
        | <a href="#disable_statement">disable\_statement</a>  
        | <a href="#event_trigger">event\_trigger</a>  
        | <a href="#loop_statement">loop\_statement</a>  
        | <a href="#jump_statement">jump\_statement</a>  
        | <a href="#par_block">par\_block</a>  
        | <a href="#procedural_timing_control_statement">procedural\_timing\_control\_statement</a>  
        | <a href="#seq_block">seq\_block</a>  
        | <a href="#wait_statement">wait\_statement</a>  
        | <a href="#procedural_assertion_statement">procedural\_assertion\_statement</a>  
        | <a href="#clocking_drive">clocking\_drive</a> <font color="purple"><b>;</b></font>  
        | <a href="#randsequence_statement">randsequence\_statement</a>  
        | <a href="#randcase_statement">randcase\_statement</a>  
        | <a href="#expect_property_statement">expect\_property\_statement</a>
  
<a name="function_statement"></a>**function\_statement**
:  <a href="#statement">statement</a>
  
<a name="function_statement_or_null"></a>**function\_statement\_or\_null**
:  <a href="#function_statement">function\_statement</a>  
        | { <a href="#attribute_instance">attribute\_instance</a> }  <font color="purple"><b>;</b></font>
  
<a name="variable_identifier_list"></a>**variable\_identifier\_list**
:  <a href="#variable_identifier">variable\_identifier</a>  { <font color="purple"><b>,</b></font> <a href="#variable_identifier">variable\_identifier</a> }
  
### Timing control statements
  
<a name="procedural_timing_control_statement"></a>**procedural\_timing\_control\_statement**
:  <a href="#procedural_timing_control">procedural\_timing\_control</a> <a href="#statement_or_null">statement\_or\_null</a>
  
<a name="delay_or_event_control"></a>**delay\_or\_event\_control**
:  <a href="#delay_control">delay\_control</a>  
        | <a href="#event_control">event\_control</a>  
        | <font color="purple"><b>repeat</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#event_control">event\_control</a>
  
<a name="delay_control"></a>**delay\_control**
:  <font color="purple"><b>#</b></font> <a href="#delay_value">delay\_value</a>  
        | <font color="purple"><b>#</b></font> <font color="purple"><b>(</b></font> <a href="#mintypmax_expression">mintypmax\_expression</a> <font color="purple"><b>)</b></font>
  
<a name="event_control"></a>**event\_control**
:  <font color="purple"><b>@</b></font> <a href="#hierarchical_event_identifier">hierarchical\_event\_identifier</a>  
        | <font color="purple"><b>@</b></font> <font color="purple"><b>(</b></font> <a href="#event_expression">event\_expression</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>@\*</b></font>  
        | <font color="purple"><b>@</b></font> <font color="purple"><b>(\*)</b></font>  
        | <font color="purple"><b>@</b></font> <a href="#ps_or_hierarchical_sequence_identifier">ps\_or\_hierarchical\_sequence\_identifier</a>
  
<a name="event_expression"></a>**event\_expression**[^footnote_31]
:  \[ <a href="#edge_identifier">edge\_identifier</a> ]  <a href="#expression">expression</a>  \[ <font color="purple"><b>iff</b></font> <a href="#expression">expression</a> ]  
        | <a href="#sequence_instance">sequence\_instance</a>  \[ <font color="purple"><b>iff</b></font> <a href="#expression">expression</a> ]  
        | <a href="#event_expression">event\_expression</a> <font color="purple"><b>or</b></font> <a href="#event_expression">event\_expression</a>  
        | <a href="#event_expression">event\_expression</a> <font color="purple"><b>,</b></font> <a href="#event_expression">event\_expression</a>  
        | <font color="purple"><b>(</b></font> <a href="#event_expression">event\_expression</a> <font color="purple"><b>)</b></font>
  
<a name="procedural_timing_control"></a>**procedural\_timing\_control**
:  <a href="#delay_control">delay\_control</a>  
        | <a href="#event_control">event\_control</a>  
        | <a href="#cycle_delay">cycle\_delay</a>
  
<a name="jump_statement"></a>**jump\_statement**
:  <font color="purple"><b>return</b></font>  \[ <a href="#expression">expression</a> ]  <font color="purple"><b>;</b></font>  
        | <font color="purple"><b>break</b></font> <font color="purple"><b>;</b></font>  
        | <font color="purple"><b>continue</b></font> <font color="purple"><b>;</b></font>
  
<a name="wait_statement"></a>**wait\_statement**
:  <font color="purple"><b>wait</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#statement_or_null">statement\_or\_null</a>  
        | <font color="purple"><b>wait</b></font> <font color="purple"><b>fork</b></font> <font color="purple"><b>;</b></font>  
        | <font color="purple"><b>wait\_order</b></font> <font color="purple"><b>(</b></font> <a href="#hierarchical_identifier">hierarchical\_identifier</a>  { <font color="purple"><b>,</b></font> <a href="#hierarchical_identifier">hierarchical\_identifier</a> }  <font color="purple"><b>)</b></font> <a href="#action_block">action\_block</a>
  
<a name="event_trigger"></a>**event\_trigger**
:  <font color="purple"><b>-&gt;</b></font> <a href="#hierarchical_event_identifier">hierarchical\_event\_identifier</a> <font color="purple"><b>;</b></font>  
        | <font color="purple"><b>-&gt;&gt;</b></font>  \[ <a href="#delay_or_event_control">delay\_or\_event\_control</a> ]  <a href="#hierarchical_event_identifier">hierarchical\_event\_identifier</a> <font color="purple"><b>;</b></font>
  
<a name="disable_statement"></a>**disable\_statement**
:  <font color="purple"><b>disable</b></font> <a href="#hierarchical_task_identifier">hierarchical\_task\_identifier</a> <font color="purple"><b>;</b></font>  
        | <font color="purple"><b>disable</b></font> <a href="#hierarchical_block_identifier">hierarchical\_block\_identifier</a> <font color="purple"><b>;</b></font>  
        | <font color="purple"><b>disable</b></font> <font color="purple"><b>fork</b></font> <font color="purple"><b>;</b></font>
  
### Conditional statements
  
<a name="conditional_statement"></a>**conditional\_statement**
:  \[ <a href="#unique_priority">unique\_priority</a> ]  <font color="purple"><b>if</b></font> <font color="purple"><b>(</b></font> <a href="#cond_predicate">cond\_predicate</a> <font color="purple"><b>)</b></font> <a href="#statement_or_null">statement\_or\_null</a>  { <font color="purple"><b>else</b></font> <font color="purple"><b>if</b></font> <font color="purple"><b>(</b></font> <a href="#cond_predicate">cond\_predicate</a> <font color="purple"><b>)</b></font> <a href="#statement_or_null">statement\_or\_null</a> }   \[ <font color="purple"><b>else</b></font> <a href="#statement_or_null">statement\_or\_null</a> ]
  
<a name="unique_priority"></a>**unique\_priority**
:  <font color="purple"><b>unique</b></font>  
        | <font color="purple"><b>unique0</b></font>  
        | <font color="purple"><b>priority</b></font>
  
<a name="cond_predicate"></a>**cond\_predicate**
:  <a href="#expression_or_cond_pattern">expression\_or\_cond\_pattern</a>  { <font color="purple"><b>&amp;&amp;&amp;</b></font> <a href="#expression_or_cond_pattern">expression\_or\_cond\_pattern</a> }
  
<a name="expression_or_cond_pattern"></a>**expression\_or\_cond\_pattern**
:  <a href="#expression">expression</a>  
        | <a href="#cond_pattern">cond\_pattern</a>
  
<a name="cond_pattern"></a>**cond\_pattern**
:  <a href="#expression">expression</a> <font color="purple"><b>matches</b></font> <a href="#pattern">pattern</a>
  
### Case statements
  
<a name="case_statement"></a>**case\_statement**
:  \[ <a href="#unique_priority">unique\_priority</a> ]  <a href="#case_keyword">case\_keyword</a> <font color="purple"><b>(</b></font> <a href="#case_expression">case\_expression</a> <font color="purple"><b>)</b></font> <a href="#case_item">case\_item</a>  { <a href="#case_item">case\_item</a> }  <font color="purple"><b>endcase</b></font>  
        | \[ <a href="#unique_priority">unique\_priority</a> ]  <a href="#case_keyword">case\_keyword</a> <font color="purple"><b>(</b></font> <a href="#case_expression">case\_expression</a> <font color="purple"><b>)</b></font> <font color="purple"><b>matches</b></font> <a href="#case_pattern_item">case\_pattern\_item</a>  { <a href="#case_pattern_item">case\_pattern\_item</a> }  <font color="purple"><b>endcase</b></font>  
        | \[ <a href="#unique_priority">unique\_priority</a> ]  <font color="purple"><b>case</b></font> <font color="purple"><b>(</b></font> <a href="#case_expression">case\_expression</a> <font color="purple"><b>)</b></font> <font color="purple"><b>inside</b></font> <a href="#case_inside_item">case\_inside\_item</a>  { <a href="#case_inside_item">case\_inside\_item</a> }  <font color="purple"><b>endcase</b></font>
  
<a name="case_keyword"></a>**case\_keyword**
:  <font color="purple"><b>case</b></font>  
        | <font color="purple"><b>casez</b></font>  
        | <font color="purple"><b>casex</b></font>
  
<a name="case_expression"></a>**case\_expression**
:  <a href="#expression">expression</a>
  
<a name="case_item"></a>**case\_item**
:  <a href="#case_item_expression">case\_item\_expression</a>  { <font color="purple"><b>,</b></font> <a href="#case_item_expression">case\_item\_expression</a> }  <font color="purple"><b>:</b></font> <a href="#statement_or_null">statement\_or\_null</a>  
        | <font color="purple"><b>default</b></font>  \[ <font color="purple"><b>:</b></font> ]  <a href="#statement_or_null">statement\_or\_null</a>
  
<a name="case_pattern_item"></a>**case\_pattern\_item**
:  <a href="#pattern">pattern</a>  \[ <font color="purple"><b>&amp;&amp;&amp;</b></font> <a href="#expression">expression</a> ]  <font color="purple"><b>:</b></font> <a href="#statement_or_null">statement\_or\_null</a>  
        | <font color="purple"><b>default</b></font>  \[ <font color="purple"><b>:</b></font> ]  <a href="#statement_or_null">statement\_or\_null</a>
  
<a name="case_inside_item"></a>**case\_inside\_item**
:  <a href="#open_range_list">open\_range\_list</a> <font color="purple"><b>:</b></font> <a href="#statement_or_null">statement\_or\_null</a>  
        | <font color="purple"><b>default</b></font>  \[ <font color="purple"><b>:</b></font> ]  <a href="#statement_or_null">statement\_or\_null</a>
  
<a name="case_item_expression"></a>**case\_item\_expression**
:  <a href="#expression">expression</a>
  
<a name="randcase_statement"></a>**randcase\_statement**
:  <font color="purple"><b>randcase</b></font> <a href="#randcase_item">randcase\_item</a>  { <a href="#randcase_item">randcase\_item</a> }  <font color="purple"><b>endcase</b></font>
  
<a name="randcase_item"></a>**randcase\_item**
:  <a href="#expression">expression</a> <font color="purple"><b>:</b></font> <a href="#statement_or_null">statement\_or\_null</a>
  
<a name="open_range_list"></a>**open\_range\_list**
:  <a href="#open_value_range">open\_value\_range</a>  { <font color="purple"><b>,</b></font> <a href="#open_value_range">open\_value\_range</a> }
  
<a name="open_value_range"></a>**open\_value\_range**
:  <a href="#value_range">value\_range</a> [^footnote_25]
  
#### Patterns
  
<a name="pattern"></a>**pattern**
:  <font color="purple"><b>.</b></font> <a href="#variable_identifier">variable\_identifier</a>  
        | <font color="purple"><b>.\*</b></font>  
        | <a href="#constant_expression">constant\_expression</a>  
        | <font color="purple"><b>tagged</b></font> <a href="#member_identifier">member\_identifier</a>  \[ <a href="#pattern">pattern</a> ]  
        | <font color="purple"><b>&#39;{</b></font> <a href="#pattern">pattern</a>  { <font color="purple"><b>,</b></font> <a href="#pattern">pattern</a> }  <font color="purple"><b>}</b></font>  
        | <font color="purple"><b>&#39;{</b></font> <a href="#member_identifier">member\_identifier</a> <font color="purple"><b>:</b></font> <a href="#pattern">pattern</a>  { <font color="purple"><b>,</b></font> <a href="#member_identifier">member\_identifier</a> <font color="purple"><b>:</b></font> <a href="#pattern">pattern</a> }  <font color="purple"><b>}</b></font>
  
<a name="assignment_pattern"></a>**assignment\_pattern**
:  <font color="purple"><b>&#39;{</b></font> <a href="#expression">expression</a>  { <font color="purple"><b>,</b></font> <a href="#expression">expression</a> }  <font color="purple"><b>}</b></font>  
        | <font color="purple"><b>&#39;{</b></font> <a href="#structure_pattern_key">structure\_pattern\_key</a> <font color="purple"><b>:</b></font> <a href="#expression">expression</a>  { <font color="purple"><b>,</b></font> <a href="#structure_pattern_key">structure\_pattern\_key</a> <font color="purple"><b>:</b></font> <a href="#expression">expression</a> }  <font color="purple"><b>}</b></font>  
        | <font color="purple"><b>&#39;{</b></font> <a href="#array_pattern_key">array\_pattern\_key</a> <font color="purple"><b>:</b></font> <a href="#expression">expression</a>  { <font color="purple"><b>,</b></font> <a href="#array_pattern_key">array\_pattern\_key</a> <font color="purple"><b>:</b></font> <a href="#expression">expression</a> }  <font color="purple"><b>}</b></font>  
        | <font color="purple"><b>&#39;{</b></font> <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>{</b></font> <a href="#expression">expression</a>  { <font color="purple"><b>,</b></font> <a href="#expression">expression</a> }  <font color="purple"><b>}</b></font> <font color="purple"><b>}</b></font>
  
<a name="structure_pattern_key"></a>**structure\_pattern\_key**
:  <a href="#member_identifier">member\_identifier</a>  
        | <a href="#assignment_pattern_key">assignment\_pattern\_key</a>
  
<a name="array_pattern_key"></a>**array\_pattern\_key**
:  <a href="#constant_expression">constant\_expression</a>  
        | <a href="#assignment_pattern_key">assignment\_pattern\_key</a>
  
<a name="assignment_pattern_key"></a>**assignment\_pattern\_key**
:  <a href="#simple_type">simple\_type</a>  
        | <font color="purple"><b>default</b></font>
  
<a name="assignment_pattern_expression"></a>**assignment\_pattern\_expression**
:  \[ <a href="#assignment_pattern_expression_type">assignment\_pattern\_expression\_type</a> ]  <a href="#assignment_pattern">assignment\_pattern</a>
  
<a name="assignment_pattern_expression_type"></a>**assignment\_pattern\_expression\_type**
:  <a href="#ps_type_identifier">ps\_type\_identifier</a>  
        | <a href="#ps_parameter_identifier">ps\_parameter\_identifier</a>  
        | <a href="#integer_atom_type">integer\_atom\_type</a>  
        | <a href="#type_reference">type\_reference</a>
  
<a name="constant_assignment_pattern_expression"></a>**constant\_assignment\_pattern\_expression**[^footnote_32]
:  <a href="#assignment_pattern_expression">assignment\_pattern\_expression</a>
  
<a name="assignment_pattern_net_lvalue"></a>**assignment\_pattern\_net\_lvalue**
:  <font color="purple"><b>&#39;{</b></font> <a href="#net_lvalue">net\_lvalue</a>  { <font color="purple"><b>,</b></font> <a href="#net_lvalue">net\_lvalue</a> }  <font color="purple"><b>}</b></font>
  
<a name="assignment_pattern_variable_lvalue"></a>**assignment\_pattern\_variable\_lvalue**
:  <font color="purple"><b>&#39;{</b></font> <a href="#variable_lvalue">variable\_lvalue</a>  { <font color="purple"><b>,</b></font> <a href="#variable_lvalue">variable\_lvalue</a> }  <font color="purple"><b>}</b></font>
  
### Looping statements
  
<a name="loop_statement"></a>**loop\_statement**
:  <font color="purple"><b>forever</b></font> <a href="#statement_or_null">statement\_or\_null</a>  
        | <font color="purple"><b>repeat</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#statement_or_null">statement\_or\_null</a>  
        | <font color="purple"><b>while</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#statement_or_null">statement\_or\_null</a>  
        | <font color="purple"><b>for</b></font> <font color="purple"><b>(</b></font>  \[ <a href="#for_initialization">for\_initialization</a> ]  <font color="purple"><b>;</b></font>  \[ <a href="#expression">expression</a> ]  <font color="purple"><b>;</b></font>  \[ <a href="#for_step">for\_step</a> ]  <font color="purple"><b>)</b></font> <a href="#statement_or_null">statement\_or\_null</a>  
        | <font color="purple"><b>do</b></font> <a href="#statement_or_null">statement\_or\_null</a> <font color="purple"><b>while</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font>  
        | <font color="purple"><b>foreach</b></font> <font color="purple"><b>(</b></font> <a href="#ps_or_hierarchical_array_identifier">ps\_or\_hierarchical\_array\_identifier</a>  \[ <a href="#loop_variables">loop\_variables</a> ]  <font color="purple"><b>)</b></font> <a href="#statement">statement</a>
  
<a name="for_initialization"></a>**for\_initialization**
:  <a href="#list_of_variable_assignments">list\_of\_variable\_assignments</a>  
        | <a href="#for_variable_declaration">for\_variable\_declaration</a>  { <font color="purple"><b>,</b></font> <a href="#for_variable_declaration">for\_variable\_declaration</a> }
  
<a name="for_variable_declaration"></a>**for\_variable\_declaration**
:  \[ <font color="purple"><b>var</b></font> ]  <a href="#data_type">data\_type</a> <a href="#variable_identifier">variable\_identifier</a> <font color="purple"><b>=</b></font> <a href="#expression">expression</a>  { <font color="purple"><b>,</b></font> <a href="#variable_identifier">variable\_identifier</a> <font color="purple"><b>=</b></font> <a href="#expression">expression</a> }
  
<a name="for_step"></a>**for\_step**
:  <a href="#for_step_assignment">for\_step\_assignment</a>  { <font color="purple"><b>,</b></font> <a href="#for_step_assignment">for\_step\_assignment</a> }
  
<a name="for_step_assignment"></a>**for\_step\_assignment**
:  <a href="#operator_assignment">operator\_assignment</a>  
        | <a href="#inc_or_dec_expression">inc\_or\_dec\_expression</a>  
        | <a href="#function_subroutine_call">function\_subroutine\_call</a>
  
<a name="loop_variables"></a>**loop\_variables**
:  \[ <a href="#index_variable_identifier">index\_variable\_identifier</a> ]   { <font color="purple"><b>,</b></font>  \[ <a href="#index_variable_identifier">index\_variable\_identifier</a> ] }
  
### Subroutine call statements
  
<a name="subroutine_call_statement"></a>**subroutine\_call\_statement**
:  <a href="#subroutine_call">subroutine\_call</a> <font color="purple"><b>;</b></font>  
        | <font color="purple"><b>void</b></font> <font color="purple"><b>&#39;</b></font> <font color="purple"><b>(</b></font> <a href="#function_subroutine_call">function\_subroutine\_call</a> <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font>
  
### Assertion statements
  
<a name="assertion_item"></a>**assertion\_item**
:  <a href="#concurrent_assertion_item">concurrent\_assertion\_item</a>  
        | <a href="#deferred_immediate_assertion_item">deferred\_immediate\_assertion\_item</a>
  
<a name="deferred_immediate_assertion_item"></a>**deferred\_immediate\_assertion\_item**
:  \[ <a href="#block_identifier">block\_identifier</a> <font color="purple"><b>:</b></font> ]  <a href="#deferred_immediate_assertion_statement">deferred\_immediate\_assertion\_statement</a>
  
<a name="procedural_assertion_statement"></a>**procedural\_assertion\_statement**
:  <a href="#concurrent_assertion_statement">concurrent\_assertion\_statement</a>  
        | <a href="#immediate_assertion_statement">immediate\_assertion\_statement</a>  
        | <a href="#checker_instantiation">checker\_instantiation</a>
  
<a name="immediate_assertion_statement"></a>**immediate\_assertion\_statement**
:  <a href="#simple_immediate_assertion_statement">simple\_immediate\_assertion\_statement</a>  
        | <a href="#deferred_immediate_assertion_statement">deferred\_immediate\_assertion\_statement</a>
  
<a name="simple_immediate_assertion_statement"></a>**simple\_immediate\_assertion\_statement**
:  <a href="#simple_immediate_assert_statement">simple\_immediate\_assert\_statement</a>  
        | <a href="#simple_immediate_assume_statement">simple\_immediate\_assume\_statement</a>  
        | <a href="#simple_immediate_cover_statement">simple\_immediate\_cover\_statement</a>
  
<a name="simple_immediate_assert_statement"></a>**simple\_immediate\_assert\_statement**
:  <font color="purple"><b>assert</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#action_block">action\_block</a>
  
<a name="simple_immediate_assume_statement"></a>**simple\_immediate\_assume\_statement**
:  <font color="purple"><b>assume</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#action_block">action\_block</a>
  
<a name="simple_immediate_cover_statement"></a>**simple\_immediate\_cover\_statement**
:  <font color="purple"><b>cover</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#statement_or_null">statement\_or\_null</a>
  
<a name="deferred_immediate_assertion_statement"></a>**deferred\_immediate\_assertion\_statement**
:  <a href="#deferred_immediate_assert_statement">deferred\_immediate\_assert\_statement</a>  
        | <a href="#deferred_immediate_assume_statement">deferred\_immediate\_assume\_statement</a>  
        | <a href="#deferred_immediate_cover_statement">deferred\_immediate\_cover\_statement</a>
  
<a name="deferred_immediate_assert_statement"></a>**deferred\_immediate\_assert\_statement**
:  <font color="purple"><b>assert</b></font> <font color="purple"><b>#0</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#action_block">action\_block</a>  
        | <font color="purple"><b>assert</b></font> <font color="purple"><b>final</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#action_block">action\_block</a>
  
<a name="deferred_immediate_assume_statement"></a>**deferred\_immediate\_assume\_statement**
:  <font color="purple"><b>assume</b></font> <font color="purple"><b>#0</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#action_block">action\_block</a>  
        | <font color="purple"><b>assume</b></font> <font color="purple"><b>final</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#action_block">action\_block</a>
  
<a name="deferred_immediate_cover_statement"></a>**deferred\_immediate\_cover\_statement**
:  <font color="purple"><b>cover</b></font> <font color="purple"><b>#0</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#statement_or_null">statement\_or\_null</a>  
        | <font color="purple"><b>cover</b></font> <font color="purple"><b>final</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#statement_or_null">statement\_or\_null</a>
  
### Clocking block
  
<a name="clocking_declaration"></a>**clocking\_declaration**
:  \[ <font color="purple"><b>default</b></font> ]  <font color="purple"><b>clocking</b></font>  \[ <a href="#clocking_identifier">clocking\_identifier</a> ]  <a href="#clocking_event">clocking\_event</a> <font color="purple"><b>;</b></font>  { <a href="#clocking_item">clocking\_item</a> }  <font color="purple"><b>endclocking</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#clocking_identifier">clocking\_identifier</a> ]  
        | <font color="purple"><b>global</b></font> <font color="purple"><b>clocking</b></font>  \[ <a href="#clocking_identifier">clocking\_identifier</a> ]  <a href="#clocking_event">clocking\_event</a> <font color="purple"><b>;</b></font> <font color="purple"><b>endclocking</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#clocking_identifier">clocking\_identifier</a> ]
  
<a name="clocking_event"></a>**clocking\_event**
:  <font color="purple"><b>@</b></font> <a href="#identifier">identifier</a>  
        | <font color="purple"><b>@</b></font> <font color="purple"><b>(</b></font> <a href="#event_expression">event\_expression</a> <font color="purple"><b>)</b></font>
  
<a name="clocking_item"></a>**clocking\_item**
:  <font color="purple"><b>default</b></font> <a href="#default_skew">default\_skew</a> <font color="purple"><b>;</b></font>  
        | <a href="#clocking_direction">clocking\_direction</a> <a href="#list_of_clocking_decl_assign">list\_of\_clocking\_decl\_assign</a> <font color="purple"><b>;</b></font>  
        | { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#assertion_item_declaration">assertion\_item\_declaration</a>
  
<a name="default_skew"></a>**default\_skew**
:  <font color="purple"><b>input</b></font> <a href="#clocking_skew">clocking\_skew</a>  
        | <font color="purple"><b>output</b></font> <a href="#clocking_skew">clocking\_skew</a>  
        | <font color="purple"><b>input</b></font> <a href="#clocking_skew">clocking\_skew</a> <font color="purple"><b>output</b></font> <a href="#clocking_skew">clocking\_skew</a>
  
<a name="clocking_direction"></a>**clocking\_direction**
:  <font color="purple"><b>input</b></font>  \[ <a href="#clocking_skew">clocking\_skew</a> ]  
        | <font color="purple"><b>output</b></font>  \[ <a href="#clocking_skew">clocking\_skew</a> ]  
        | <font color="purple"><b>input</b></font>  \[ <a href="#clocking_skew">clocking\_skew</a> ]  <font color="purple"><b>output</b></font>  \[ <a href="#clocking_skew">clocking\_skew</a> ]  
        | <font color="purple"><b>inout</b></font>
  
<a name="list_of_clocking_decl_assign"></a>**list\_of\_clocking\_decl\_assign**
:  <a href="#clocking_decl_assign">clocking\_decl\_assign</a>  { <font color="purple"><b>,</b></font> <a href="#clocking_decl_assign">clocking\_decl\_assign</a> }
  
<a name="clocking_decl_assign"></a>**clocking\_decl\_assign**
:  <a href="#signal_identifier">signal\_identifier</a>  \[ <font color="purple"><b>=</b></font> <a href="#expression">expression</a> ]
  
<a name="clocking_skew"></a>**clocking\_skew**
:  <a href="#edge_identifier">edge\_identifier</a>  \[ <a href="#delay_control">delay\_control</a> ]  
        | <a href="#delay_control">delay\_control</a>
  
<a name="clocking_drive"></a>**clocking\_drive**
:  <a href="#clockvar_expression">clockvar\_expression</a> <font color="purple"><b>&lt;=</b></font>  \[ <a href="#cycle_delay">cycle\_delay</a> ]  <a href="#expression">expression</a>
  
<a name="cycle_delay"></a>**cycle\_delay**
:  <font color="purple"><b>##</b></font> <a href="#integral_number">integral\_number</a>  
        | <font color="purple"><b>##</b></font> <a href="#identifier">identifier</a>  
        | <font color="purple"><b>##</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font>
  
<a name="clockvar"></a>**clockvar**
:  <a href="#hierarchical_identifier">hierarchical\_identifier</a>
  
<a name="clockvar_expression"></a>**clockvar\_expression**
:  <a href="#clockvar">clockvar</a> <a href="#select">select</a>
  
### Randsequence
  
<a name="randsequence_statement"></a>**randsequence\_statement**
:  <font color="purple"><b>randsequence</b></font> <font color="purple"><b>(</b></font>  \[ <a href="#production_identifier">production\_identifier</a> ]  <font color="purple"><b>)</b></font> <a href="#production">production</a>  { <a href="#production">production</a> }  <font color="purple"><b>endsequence</b></font>
  
<a name="production"></a>**production**
:  \[ <a href="#data_type_or_void">data\_type\_or\_void</a> ]  <a href="#production_identifier">production\_identifier</a>  \[ <font color="purple"><b>(</b></font> <a href="#tf_port_list">tf\_port\_list</a> <font color="purple"><b>)</b></font> ]  <font color="purple"><b>:</b></font> <a href="#rs_rule">rs\_rule</a>  { <font color="purple"><b>|</b></font> <a href="#rs_rule">rs\_rule</a> }  <font color="purple"><b>;</b></font>
  
<a name="rs_rule"></a>**rs\_rule**
:  <a href="#rs_production_list">rs\_production\_list</a>  \[ <font color="purple"><b>:=</b></font> <a href="#weight_specification">weight\_specification</a>  \[ <a href="#rs_code_block">rs\_code\_block</a> ] ]
  
<a name="rs_production_list"></a>**rs\_production\_list**
:  <a href="#rs_prod">rs\_prod</a>  { <a href="#rs_prod">rs\_prod</a> }  
        | <font color="purple"><b>rand</b></font> <font color="purple"><b>join</b></font>  \[ <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> ]  <a href="#production_item">production\_item</a> <a href="#production_item">production\_item</a>  { <a href="#production_item">production\_item</a> }
  
<a name="weight_specification"></a>**weight\_specification**
:  <a href="#integral_number">integral\_number</a>  
        | <a href="#ps_identifier">ps\_identifier</a> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font>
  
<a name="rs_code_block"></a>**rs\_code\_block**
:  <font color="purple"><b>{</b></font>  { <a href="#data_declaration">data\_declaration</a> }   { <a href="#statement_or_null">statement\_or\_null</a> }  <font color="purple"><b>}</b></font>
  
<a name="rs_prod"></a>**rs\_prod**
:  <a href="#production_item">production\_item</a>  
        | <a href="#rs_code_block">rs\_code\_block</a>  
        | <a href="#rs_if_else">rs\_if\_else</a>  
        | <a href="#rs_repeat">rs\_repeat</a>  
        | <a href="#rs_case">rs\_case</a>
  
<a name="production_item"></a>**production\_item**
:  <a href="#production_identifier">production\_identifier</a>  \[ <font color="purple"><b>(</b></font> <a href="#list_of_arguments">list\_of\_arguments</a> <font color="purple"><b>)</b></font> ]
  
<a name="rs_if_else"></a>**rs\_if\_else**
:  <font color="purple"><b>if</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#production_item">production\_item</a>  \[ <font color="purple"><b>else</b></font> <a href="#production_item">production\_item</a> ]
  
<a name="rs_repeat"></a>**rs\_repeat**
:  <font color="purple"><b>repeat</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#production_item">production\_item</a>
  
<a name="rs_case"></a>**rs\_case**
:  <font color="purple"><b>case</b></font> <font color="purple"><b>(</b></font> <a href="#case_expression">case\_expression</a> <font color="purple"><b>)</b></font> <a href="#rs_case_item">rs\_case\_item</a>  { <a href="#rs_case_item">rs\_case\_item</a> }  <font color="purple"><b>endcase</b></font>
  
<a name="rs_case_item"></a>**rs\_case\_item**
:  <a href="#case_item_expression">case\_item\_expression</a>  { <font color="purple"><b>,</b></font> <a href="#case_item_expression">case\_item\_expression</a> }  <font color="purple"><b>:</b></font> <a href="#production_item">production\_item</a> <font color="purple"><b>;</b></font>  
        | <font color="purple"><b>default</b></font>  \[ <font color="purple"><b>:</b></font> ]  <a href="#production_item">production\_item</a> <font color="purple"><b>;</b></font>
  
## Specify section
  
### Specify block declaration
  
<a name="specify_block"></a>**specify\_block**
:  <font color="purple"><b>specify</b></font>  { <a href="#specify_item">specify\_item</a> }  <font color="purple"><b>endspecify</b></font>
  
<a name="specify_item"></a>**specify\_item**
:  <a href="#specparam_declaration">specparam\_declaration</a>  
        | <a href="#pulsestyle_declaration">pulsestyle\_declaration</a>  
        | <a href="#showcancelled_declaration">showcancelled\_declaration</a>  
        | <a href="#path_declaration">path\_declaration</a>  
        | <a href="#system_timing_check">system\_timing\_check</a>
  
<a name="pulsestyle_declaration"></a>**pulsestyle\_declaration**
:  <font color="purple"><b>pulsestyle\_onevent</b></font> <a href="#list_of_path_outputs">list\_of\_path\_outputs</a> <font color="purple"><b>;</b></font>  
        | <font color="purple"><b>pulsestyle\_ondetect</b></font> <a href="#list_of_path_outputs">list\_of\_path\_outputs</a> <font color="purple"><b>;</b></font>
  
<a name="showcancelled_declaration"></a>**showcancelled\_declaration**
:  <font color="purple"><b>showcancelled</b></font> <a href="#list_of_path_outputs">list\_of\_path\_outputs</a> <font color="purple"><b>;</b></font>  
        | <font color="purple"><b>noshowcancelled</b></font> <a href="#list_of_path_outputs">list\_of\_path\_outputs</a> <font color="purple"><b>;</b></font>
  
### Specify path declarations
  
<a name="path_declaration"></a>**path\_declaration**
:  <a href="#simple_path_declaration">simple\_path\_declaration</a> <font color="purple"><b>;</b></font>  
        | <a href="#edge_sensitive_path_declaration">edge\_sensitive\_path\_declaration</a> <font color="purple"><b>;</b></font>  
        | <a href="#state_dependent_path_declaration">state\_dependent\_path\_declaration</a> <font color="purple"><b>;</b></font>
  
<a name="simple_path_declaration"></a>**simple\_path\_declaration**
:  <a href="#parallel_path_description">parallel\_path\_description</a> <font color="purple"><b>=</b></font> <a href="#path_delay_value">path\_delay\_value</a>  
        | <a href="#full_path_description">full\_path\_description</a> <font color="purple"><b>=</b></font> <a href="#path_delay_value">path\_delay\_value</a>
  
<a name="parallel_path_description"></a>**parallel\_path\_description**
:  <font color="purple"><b>(</b></font> <a href="#specify_input_terminal_descriptor">specify\_input\_terminal\_descriptor</a>  \[ <a href="#polarity_operator">polarity\_operator</a> ]  <font color="purple"><b>=&gt;</b></font> <a href="#specify_output_terminal_descriptor">specify\_output\_terminal\_descriptor</a> <font color="purple"><b>)</b></font>
  
<a name="full_path_description"></a>**full\_path\_description**
:  <font color="purple"><b>(</b></font> <a href="#list_of_path_inputs">list\_of\_path\_inputs</a>  \[ <a href="#polarity_operator">polarity\_operator</a> ]  <font color="purple"><b>\*&gt;</b></font> <a href="#list_of_path_outputs">list\_of\_path\_outputs</a> <font color="purple"><b>)</b></font>
  
<a name="list_of_path_inputs"></a>**list\_of\_path\_inputs**
:  <a href="#specify_input_terminal_descriptor">specify\_input\_terminal\_descriptor</a>  { <font color="purple"><b>,</b></font> <a href="#specify_input_terminal_descriptor">specify\_input\_terminal\_descriptor</a> }
  
<a name="list_of_path_outputs"></a>**list\_of\_path\_outputs**
:  <a href="#specify_output_terminal_descriptor">specify\_output\_terminal\_descriptor</a>  { <font color="purple"><b>,</b></font> <a href="#specify_output_terminal_descriptor">specify\_output\_terminal\_descriptor</a> }
  
### Specify block terminals
  
<a name="specify_input_terminal_descriptor"></a>**specify\_input\_terminal\_descriptor**
:  <a href="#input_identifier">input\_identifier</a>  \[ <font color="purple"><b>\[</b></font> <a href="#constant_range_expression">constant\_range\_expression</a> <font color="purple"><b>]</b></font> ]
  
<a name="specify_output_terminal_descriptor"></a>**specify\_output\_terminal\_descriptor**
:  <a href="#output_identifier">output\_identifier</a>  \[ <font color="purple"><b>\[</b></font> <a href="#constant_range_expression">constant\_range\_expression</a> <font color="purple"><b>]</b></font> ]
  
<a name="input_identifier"></a>**input\_identifier**
:  <a href="#input_port_identifier">input\_port\_identifier</a>  
        | <a href="#inout_port_identifier">inout\_port\_identifier</a>  
        | <a href="#interface_identifier">interface\_identifier</a> <font color="purple"><b>.</b></font> <a href="#port_identifier">port\_identifier</a>
  
<a name="output_identifier"></a>**output\_identifier**
:  <a href="#output_port_identifier">output\_port\_identifier</a>  
        | <a href="#inout_port_identifier">inout\_port\_identifier</a>  
        | <a href="#interface_identifier">interface\_identifier</a> <font color="purple"><b>.</b></font> <a href="#port_identifier">port\_identifier</a>
  
### Specify path delays
  
<a name="path_delay_value"></a>**path\_delay\_value**
:  <a href="#list_of_path_delay_expressions">list\_of\_path\_delay\_expressions</a>  
        | <font color="purple"><b>(</b></font> <a href="#list_of_path_delay_expressions">list\_of\_path\_delay\_expressions</a> <font color="purple"><b>)</b></font>
  
<a name="list_of_path_delay_expressions"></a>**list\_of\_path\_delay\_expressions**
:  <a href="#t_path_delay_expression">t\_path\_delay\_expression</a>  
        | <a href="#trise_path_delay_expression">trise\_path\_delay\_expression</a> <font color="purple"><b>,</b></font> <a href="#tfall_path_delay_expression">tfall\_path\_delay\_expression</a>  
        | <a href="#trise_path_delay_expression">trise\_path\_delay\_expression</a> <font color="purple"><b>,</b></font> <a href="#tfall_path_delay_expression">tfall\_path\_delay\_expression</a> <font color="purple"><b>,</b></font> <a href="#tz_path_delay_expression">tz\_path\_delay\_expression</a>  
        | <a href="#t01_path_delay_expression">t01\_path\_delay\_expression</a> <font color="purple"><b>,</b></font> <a href="#t10_path_delay_expression">t10\_path\_delay\_expression</a> <font color="purple"><b>,</b></font> <a href="#t0z_path_delay_expression">t0z\_path\_delay\_expression</a> <font color="purple"><b>,</b></font> <a href="#tz1_path_delay_expression">tz1\_path\_delay\_expression</a> <font color="purple"><b>,</b></font> <a href="#t1z_path_delay_expression">t1z\_path\_delay\_expression</a> <font color="purple"><b>,</b></font> <a href="#tz0_path_delay_expression">tz0\_path\_delay\_expression</a>  
        | <a href="#t01_path_delay_expression">t01\_path\_delay\_expression</a> <font color="purple"><b>,</b></font> <a href="#t10_path_delay_expression">t10\_path\_delay\_expression</a> <font color="purple"><b>,</b></font> <a href="#t0z_path_delay_expression">t0z\_path\_delay\_expression</a> <font color="purple"><b>,</b></font> <a href="#tz1_path_delay_expression">tz1\_path\_delay\_expression</a> <font color="purple"><b>,</b></font> <a href="#t1z_path_delay_expression">t1z\_path\_delay\_expression</a> <font color="purple"><b>,</b></font> <a href="#tz0_path_delay_expression">tz0\_path\_delay\_expression</a> <font color="purple"><b>,</b></font> <a href="#t0x_path_delay_expression">t0x\_path\_delay\_expression</a> <font color="purple"><b>,</b></font> <a href="#tx1_path_delay_expression">tx1\_path\_delay\_expression</a> <font color="purple"><b>,</b></font> <a href="#t1x_path_delay_expression">t1x\_path\_delay\_expression</a> <font color="purple"><b>,</b></font> <a href="#tx0_path_delay_expression">tx0\_path\_delay\_expression</a> <font color="purple"><b>,</b></font> <a href="#txz_path_delay_expression">txz\_path\_delay\_expression</a> <font color="purple"><b>,</b></font> <a href="#tzx_path_delay_expression">tzx\_path\_delay\_expression</a>
  
<a name="t_path_delay_expression"></a>**t\_path\_delay\_expression**
:  <a href="#path_delay_expression">path\_delay\_expression</a>
  
<a name="trise_path_delay_expression"></a>**trise\_path\_delay\_expression**
:  <a href="#path_delay_expression">path\_delay\_expression</a>
  
<a name="tfall_path_delay_expression"></a>**tfall\_path\_delay\_expression**
:  <a href="#path_delay_expression">path\_delay\_expression</a>
  
<a name="tz_path_delay_expression"></a>**tz\_path\_delay\_expression**
:  <a href="#path_delay_expression">path\_delay\_expression</a>
  
<a name="t01_path_delay_expression"></a>**t01\_path\_delay\_expression**
:  <a href="#path_delay_expression">path\_delay\_expression</a>
  
<a name="t10_path_delay_expression"></a>**t10\_path\_delay\_expression**
:  <a href="#path_delay_expression">path\_delay\_expression</a>
  
<a name="t0z_path_delay_expression"></a>**t0z\_path\_delay\_expression**
:  <a href="#path_delay_expression">path\_delay\_expression</a>
  
<a name="tz1_path_delay_expression"></a>**tz1\_path\_delay\_expression**
:  <a href="#path_delay_expression">path\_delay\_expression</a>
  
<a name="t1z_path_delay_expression"></a>**t1z\_path\_delay\_expression**
:  <a href="#path_delay_expression">path\_delay\_expression</a>
  
<a name="tz0_path_delay_expression"></a>**tz0\_path\_delay\_expression**
:  <a href="#path_delay_expression">path\_delay\_expression</a>
  
<a name="t0x_path_delay_expression"></a>**t0x\_path\_delay\_expression**
:  <a href="#path_delay_expression">path\_delay\_expression</a>
  
<a name="tx1_path_delay_expression"></a>**tx1\_path\_delay\_expression**
:  <a href="#path_delay_expression">path\_delay\_expression</a>
  
<a name="t1x_path_delay_expression"></a>**t1x\_path\_delay\_expression**
:  <a href="#path_delay_expression">path\_delay\_expression</a>
  
<a name="tx0_path_delay_expression"></a>**tx0\_path\_delay\_expression**
:  <a href="#path_delay_expression">path\_delay\_expression</a>
  
<a name="txz_path_delay_expression"></a>**txz\_path\_delay\_expression**
:  <a href="#path_delay_expression">path\_delay\_expression</a>
  
<a name="tzx_path_delay_expression"></a>**tzx\_path\_delay\_expression**
:  <a href="#path_delay_expression">path\_delay\_expression</a>
  
<a name="path_delay_expression"></a>**path\_delay\_expression**
:  <a href="#constant_mintypmax_expression">constant\_mintypmax\_expression</a>
  
<a name="edge_sensitive_path_declaration"></a>**edge\_sensitive\_path\_declaration**
:  <a href="#parallel_edge_sensitive_path_description">parallel\_edge\_sensitive\_path\_description</a> <font color="purple"><b>=</b></font> <a href="#path_delay_value">path\_delay\_value</a>  
        | <a href="#full_edge_sensitive_path_description">full\_edge\_sensitive\_path\_description</a> <font color="purple"><b>=</b></font> <a href="#path_delay_value">path\_delay\_value</a>
  
<a name="parallel_edge_sensitive_path_description"></a>**parallel\_edge\_sensitive\_path\_description**
:  <font color="purple"><b>(</b></font>  \[ <a href="#edge_identifier">edge\_identifier</a> ]  <a href="#specify_input_terminal_descriptor">specify\_input\_terminal\_descriptor</a>  \[ <a href="#polarity_operator">polarity\_operator</a> ]  <font color="purple"><b>=&gt;</b></font> <font color="purple"><b>(</b></font> <a href="#specify_output_terminal_descriptor">specify\_output\_terminal\_descriptor</a>  \[ <a href="#polarity_operator">polarity\_operator</a> ]  <font color="purple"><b>:</b></font> <a href="#data_source_expression">data\_source\_expression</a> <font color="purple"><b>)</b></font> <font color="purple"><b>)</b></font>
  
<a name="full_edge_sensitive_path_description"></a>**full\_edge\_sensitive\_path\_description**
:  <font color="purple"><b>(</b></font>  \[ <a href="#edge_identifier">edge\_identifier</a> ]  <a href="#list_of_path_inputs">list\_of\_path\_inputs</a>  \[ <a href="#polarity_operator">polarity\_operator</a> ]  <font color="purple"><b>\*&gt;</b></font> <font color="purple"><b>(</b></font> <a href="#list_of_path_outputs">list\_of\_path\_outputs</a>  \[ <a href="#polarity_operator">polarity\_operator</a> ]  <font color="purple"><b>:</b></font> <a href="#data_source_expression">data\_source\_expression</a> <font color="purple"><b>)</b></font> <font color="purple"><b>)</b></font>
  
<a name="data_source_expression"></a>**data\_source\_expression**
:  <a href="#expression">expression</a>
  
<a name="edge_identifier"></a>**edge\_identifier**
:  <font color="purple"><b>posedge</b></font>  
        | <font color="purple"><b>negedge</b></font>  
        | <font color="purple"><b>edge</b></font>
  
<a name="state_dependent_path_declaration"></a>**state\_dependent\_path\_declaration**
:  <font color="purple"><b>if</b></font> <font color="purple"><b>(</b></font> <a href="#module_path_expression">module\_path\_expression</a> <font color="purple"><b>)</b></font> <a href="#simple_path_declaration">simple\_path\_declaration</a>  
        | <font color="purple"><b>if</b></font> <font color="purple"><b>(</b></font> <a href="#module_path_expression">module\_path\_expression</a> <font color="purple"><b>)</b></font> <a href="#edge_sensitive_path_declaration">edge\_sensitive\_path\_declaration</a>  
        | <font color="purple"><b>ifnone</b></font> <a href="#simple_path_declaration">simple\_path\_declaration</a>
  
<a name="polarity_operator"></a>**polarity\_operator**
:  <font color="purple"><b>+</b></font>  
        | <font color="purple"><b>-</b></font>
  
### System timing checks
  
#### System timing check commands
  
<a name="system_timing_check"></a>**system\_timing\_check**
:  <a href="#setup_timing_check">setup\_timing\_check</a>  
        | <a href="#hold_timing_check">hold\_timing\_check</a>  
        | <a href="#setuphold_timing_check">setuphold\_timing\_check</a>  
        | <a href="#recovery_timing_check">recovery\_timing\_check</a>  
        | <a href="#removal_timing_check">removal\_timing\_check</a>  
        | <a href="#recrem_timing_check">recrem\_timing\_check</a>  
        | <a href="#skew_timing_check">skew\_timing\_check</a>  
        | <a href="#timeskew_timing_check">timeskew\_timing\_check</a>  
        | <a href="#fullskew_timing_check">fullskew\_timing\_check</a>  
        | <a href="#period_timing_check">period\_timing\_check</a>  
        | <a href="#width_timing_check">width\_timing\_check</a>  
        | <a href="#nochange_timing_check">nochange\_timing\_check</a>
  
<a name="setup_timing_check"></a>**setup\_timing\_check**
:  <font color="purple"><b>$setup</b></font> <font color="purple"><b>(</b></font> <a href="#data_event">data\_event</a> <font color="purple"><b>,</b></font> <a href="#reference_event">reference\_event</a> <font color="purple"><b>,</b></font> <a href="#timing_check_limit">timing\_check\_limit</a>  \[ <font color="purple"><b>,</b></font>  \[ <a href="#notifier">notifier</a> ] ]  <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font>
  
<a name="hold_timing_check"></a>**hold\_timing\_check**
:  <font color="purple"><b>$hold</b></font> <font color="purple"><b>(</b></font> <a href="#reference_event">reference\_event</a> <font color="purple"><b>,</b></font> <a href="#data_event">data\_event</a> <font color="purple"><b>,</b></font> <a href="#timing_check_limit">timing\_check\_limit</a>  \[ <font color="purple"><b>,</b></font>  \[ <a href="#notifier">notifier</a> ] ]  <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font>
  
<a name="setuphold_timing_check"></a>**setuphold\_timing\_check**
:  <font color="purple"><b>$setuphold</b></font> <font color="purple"><b>(</b></font> <a href="#reference_event">reference\_event</a> <font color="purple"><b>,</b></font> <a href="#data_event">data\_event</a> <font color="purple"><b>,</b></font> <a href="#timing_check_limit">timing\_check\_limit</a> <font color="purple"><b>,</b></font> <a href="#timing_check_limit">timing\_check\_limit</a>  \[ <font color="purple"><b>,</b></font>  \[ <a href="#notifier">notifier</a> ]   \[ <font color="purple"><b>,</b></font>  \[ <a href="#timestamp_condition">timestamp\_condition</a> ]   \[ <font color="purple"><b>,</b></font>  \[ <a href="#timecheck_condition">timecheck\_condition</a> ]   \[ <font color="purple"><b>,</b></font>  \[ <a href="#delayed_reference">delayed\_reference</a> ]   \[ <font color="purple"><b>,</b></font>  \[ <a href="#delayed_data">delayed\_data</a> ] ] ] ] ] ]  <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font>
  
<a name="recovery_timing_check"></a>**recovery\_timing\_check**
:  <font color="purple"><b>$recovery</b></font> <font color="purple"><b>(</b></font> <a href="#reference_event">reference\_event</a> <font color="purple"><b>,</b></font> <a href="#data_event">data\_event</a> <font color="purple"><b>,</b></font> <a href="#timing_check_limit">timing\_check\_limit</a>  \[ <font color="purple"><b>,</b></font>  \[ <a href="#notifier">notifier</a> ] ]  <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font>
  
<a name="removal_timing_check"></a>**removal\_timing\_check**
:  <font color="purple"><b>$removal</b></font> <font color="purple"><b>(</b></font> <a href="#reference_event">reference\_event</a> <font color="purple"><b>,</b></font> <a href="#data_event">data\_event</a> <font color="purple"><b>,</b></font> <a href="#timing_check_limit">timing\_check\_limit</a>  \[ <font color="purple"><b>,</b></font>  \[ <a href="#notifier">notifier</a> ] ]  <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font>
  
<a name="recrem_timing_check"></a>**recrem\_timing\_check**
:  <font color="purple"><b>$recrem</b></font> <font color="purple"><b>(</b></font> <a href="#reference_event">reference\_event</a> <font color="purple"><b>,</b></font> <a href="#data_event">data\_event</a> <font color="purple"><b>,</b></font> <a href="#timing_check_limit">timing\_check\_limit</a> <font color="purple"><b>,</b></font> <a href="#timing_check_limit">timing\_check\_limit</a>  \[ <font color="purple"><b>,</b></font>  \[ <a href="#notifier">notifier</a> ]   \[ <font color="purple"><b>,</b></font>  \[ <a href="#timestamp_condition">timestamp\_condition</a> ]   \[ <font color="purple"><b>,</b></font>  \[ <a href="#timecheck_condition">timecheck\_condition</a> ]   \[ <font color="purple"><b>,</b></font>  \[ <a href="#delayed_reference">delayed\_reference</a> ]   \[ <font color="purple"><b>,</b></font>  \[ <a href="#delayed_data">delayed\_data</a> ] ] ] ] ] ]  <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font>
  
<a name="skew_timing_check"></a>**skew\_timing\_check**
:  <font color="purple"><b>$skew</b></font> <font color="purple"><b>(</b></font> <a href="#reference_event">reference\_event</a> <font color="purple"><b>,</b></font> <a href="#data_event">data\_event</a> <font color="purple"><b>,</b></font> <a href="#timing_check_limit">timing\_check\_limit</a>  \[ <font color="purple"><b>,</b></font>  \[ <a href="#notifier">notifier</a> ] ]  <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font>
  
<a name="timeskew_timing_check"></a>**timeskew\_timing\_check**
:  <font color="purple"><b>$timeskew</b></font> <font color="purple"><b>(</b></font> <a href="#reference_event">reference\_event</a> <font color="purple"><b>,</b></font> <a href="#data_event">data\_event</a> <font color="purple"><b>,</b></font> <a href="#timing_check_limit">timing\_check\_limit</a>  \[ <font color="purple"><b>,</b></font>  \[ <a href="#notifier">notifier</a> ]   \[ <font color="purple"><b>,</b></font>  \[ <a href="#event_based_flag">event\_based\_flag</a> ]   \[ <font color="purple"><b>,</b></font>  \[ <a href="#remain_active_flag">remain\_active\_flag</a> ] ] ] ]  <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font>
  
<a name="fullskew_timing_check"></a>**fullskew\_timing\_check**
:  <font color="purple"><b>$fullskew</b></font> <font color="purple"><b>(</b></font> <a href="#reference_event">reference\_event</a> <font color="purple"><b>,</b></font> <a href="#data_event">data\_event</a> <font color="purple"><b>,</b></font> <a href="#timing_check_limit">timing\_check\_limit</a> <font color="purple"><b>,</b></font> <a href="#timing_check_limit">timing\_check\_limit</a>  \[ <font color="purple"><b>,</b></font>  \[ <a href="#notifier">notifier</a> ]   \[ <font color="purple"><b>,</b></font>  \[ <a href="#event_based_flag">event\_based\_flag</a> ]   \[ <font color="purple"><b>,</b></font>  \[ <a href="#remain_active_flag">remain\_active\_flag</a> ] ] ] ]  <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font>
  
<a name="period_timing_check"></a>**period\_timing\_check**
:  <font color="purple"><b>$period</b></font> <font color="purple"><b>(</b></font> <a href="#controlled_reference_event">controlled\_reference\_event</a> <font color="purple"><b>,</b></font> <a href="#timing_check_limit">timing\_check\_limit</a>  \[ <font color="purple"><b>,</b></font>  \[ <a href="#notifier">notifier</a> ] ]  <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font>
  
<a name="width_timing_check"></a>**width\_timing\_check**
:  <font color="purple"><b>$width</b></font> <font color="purple"><b>(</b></font> <a href="#controlled_reference_event">controlled\_reference\_event</a> <font color="purple"><b>,</b></font> <a href="#timing_check_limit">timing\_check\_limit</a> <font color="purple"><b>,</b></font> <a href="#threshold">threshold</a>  \[ <font color="purple"><b>,</b></font>  \[ <a href="#notifier">notifier</a> ] ]  <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font>
  
<a name="nochange_timing_check"></a>**nochange\_timing\_check**
:  <font color="purple"><b>$nochange</b></font> <font color="purple"><b>(</b></font> <a href="#reference_event">reference\_event</a> <font color="purple"><b>,</b></font> <a href="#data_event">data\_event</a> <font color="purple"><b>,</b></font> <a href="#start_edge_offset">start\_edge\_offset</a> <font color="purple"><b>,</b></font> <a href="#end_edge_offset">end\_edge\_offset</a>  \[ <font color="purple"><b>,</b></font>  \[ <a href="#notifier">notifier</a> ] ]  <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font>
  
#### System timing check command arguments
  
<a name="timecheck_condition"></a>**timecheck\_condition**
:  <a href="#mintypmax_expression">mintypmax\_expression</a>
  
<a name="controlled_reference_event"></a>**controlled\_reference\_event**
:  <a href="#controlled_timing_check_event">controlled\_timing\_check\_event</a>
  
<a name="data_event"></a>**data\_event**
:  <a href="#timing_check_event">timing\_check\_event</a>
  
<a name="delayed_data"></a>**delayed\_data**
:  <a href="#terminal_identifier">terminal\_identifier</a>  
        | <a href="#terminal_identifier">terminal\_identifier</a> <font color="purple"><b>\[</b></font> <a href="#constant_mintypmax_expression">constant\_mintypmax\_expression</a> <font color="purple"><b>]</b></font>
  
<a name="delayed_reference"></a>**delayed\_reference**
:  <a href="#terminal_identifier">terminal\_identifier</a>  
        | <a href="#terminal_identifier">terminal\_identifier</a> <font color="purple"><b>\[</b></font> <a href="#constant_mintypmax_expression">constant\_mintypmax\_expression</a> <font color="purple"><b>]</b></font>
  
<a name="end_edge_offset"></a>**end\_edge\_offset**
:  <a href="#mintypmax_expression">mintypmax\_expression</a>
  
<a name="event_based_flag"></a>**event\_based\_flag**
:  <a href="#constant_expression">constant\_expression</a>
  
<a name="notifier"></a>**notifier**
:  <a href="#variable_identifier">variable\_identifier</a>
  
<a name="reference_event"></a>**reference\_event**
:  <a href="#timing_check_event">timing\_check\_event</a>
  
<a name="remain_active_flag"></a>**remain\_active\_flag**
:  <a href="#constant_mintypmax_expression">constant\_mintypmax\_expression</a>
  
<a name="timestamp_condition"></a>**timestamp\_condition**
:  <a href="#mintypmax_expression">mintypmax\_expression</a>
  
<a name="start_edge_offset"></a>**start\_edge\_offset**
:  <a href="#mintypmax_expression">mintypmax\_expression</a>
  
<a name="threshold"></a>**threshold**
:  <a href="#constant_expression">constant\_expression</a>
  
<a name="timing_check_limit"></a>**timing\_check\_limit**
:  <a href="#expression">expression</a>
  
#### System timing check event definitions
  
<a name="timing_check_event"></a>**timing\_check\_event**
:  \[ <a href="#timing_check_event_control">timing\_check\_event\_control</a> ]  <a href="#specify_terminal_descriptor">specify\_terminal\_descriptor</a>  \[ <font color="purple"><b>&amp;&amp;&amp;</b></font> <a href="#timing_check_condition">timing\_check\_condition</a> ]
  
<a name="controlled_timing_check_event"></a>**controlled\_timing\_check\_event**
:  <a href="#timing_check_event_control">timing\_check\_event\_control</a> <a href="#specify_terminal_descriptor">specify\_terminal\_descriptor</a>  \[ <font color="purple"><b>&amp;&amp;&amp;</b></font> <a href="#timing_check_condition">timing\_check\_condition</a> ]
  
<a name="timing_check_event_control"></a>**timing\_check\_event\_control**
:  <font color="purple"><b>posedge</b></font>  
        | <font color="purple"><b>negedge</b></font>  
        | <font color="purple"><b>edge</b></font>  
        | <a href="#edge_control_specifier">edge\_control\_specifier</a>
  
<a name="specify_terminal_descriptor"></a>**specify\_terminal\_descriptor**
:  <a href="#specify_input_terminal_descriptor">specify\_input\_terminal\_descriptor</a>  
        | <a href="#specify_output_terminal_descriptor">specify\_output\_terminal\_descriptor</a>
  
<a name="edge_control_specifier"></a>**edge\_control\_specifier**
:  <font color="purple"><b>edge</b></font> <font color="purple"><b>\[</b></font> <a href="#edge_descriptor">edge\_descriptor</a>  { <font color="purple"><b>,</b></font> <a href="#edge_descriptor">edge\_descriptor</a> }  <font color="purple"><b>]</b></font>
  
<a name="edge_descriptor"></a>**edge\_descriptor**[^footnote_33]
:  <font color="purple"><b>01</b></font>  
        | <font color="purple"><b>10</b></font>  
        | <a href="#z_or_x">z\_or\_x</a> <a href="#zero_or_one">zero\_or\_one</a>  
        | <a href="#zero_or_one">zero\_or\_one</a> <a href="#z_or_x">z\_or\_x</a>
  
<a name="zero_or_one"></a>**zero\_or\_one**
:  <font color="purple"><b>0</b></font>  
        | <font color="purple"><b>1</b></font>
  
<a name="z_or_x"></a>**z\_or\_x**
:  <font color="purple"><b>x</b></font>  
        | <font color="purple"><b>X</b></font>  
        | <font color="purple"><b>z</b></font>  
        | <font color="purple"><b>Z</b></font>
  
<a name="timing_check_condition"></a>**timing\_check\_condition**
:  <a href="#scalar_timing_check_condition">scalar\_timing\_check\_condition</a>  
        | <font color="purple"><b>(</b></font> <a href="#scalar_timing_check_condition">scalar\_timing\_check\_condition</a> <font color="purple"><b>)</b></font>
  
<a name="scalar_timing_check_condition"></a>**scalar\_timing\_check\_condition**
:  <a href="#expression">expression</a>  
        | <font color="purple"><b>~</b></font> <a href="#expression">expression</a>  
        | <a href="#expression">expression</a> <font color="purple"><b>==</b></font> <a href="#scalar_constant">scalar\_constant</a>  
        | <a href="#expression">expression</a> <font color="purple"><b>===</b></font> <a href="#scalar_constant">scalar\_constant</a>  
        | <a href="#expression">expression</a> <font color="purple"><b>!=</b></font> <a href="#scalar_constant">scalar\_constant</a>  
        | <a href="#expression">expression</a> <font color="purple"><b>!==</b></font> <a href="#scalar_constant">scalar\_constant</a>
  
<a name="scalar_constant"></a>**scalar\_constant**
:  <font color="purple"><b>1&#39;b0</b></font>  
        | <font color="purple"><b>1&#39;b1</b></font>  
        | <font color="purple"><b>1&#39;B0</b></font>  
        | <font color="purple"><b>1&#39;B1</b></font>  
        | <font color="purple"><b>&#39;b0</b></font>  
        | <font color="purple"><b>&#39;b1</b></font>  
        | <font color="purple"><b>&#39;B0</b></font>  
        | <font color="purple"><b>&#39;B1</b></font>  
        | <font color="purple"><b>1</b></font>  
        | <font color="purple"><b>0</b></font>
  
## Expressions
  
### Concatenations
  
<a name="concatenation"></a>**concatenation**
:  <font color="purple"><b>{</b></font> <a href="#expression">expression</a>  { <font color="purple"><b>,</b></font> <a href="#expression">expression</a> }  <font color="purple"><b>}</b></font>
  
<a name="constant_concatenation"></a>**constant\_concatenation**
:  <font color="purple"><b>{</b></font> <a href="#constant_expression">constant\_expression</a>  { <font color="purple"><b>,</b></font> <a href="#constant_expression">constant\_expression</a> }  <font color="purple"><b>}</b></font>
  
<a name="constant_multiple_concatenation"></a>**constant\_multiple\_concatenation**
:  <font color="purple"><b>{</b></font> <a href="#constant_expression">constant\_expression</a> <a href="#constant_concatenation">constant\_concatenation</a> <font color="purple"><b>}</b></font>
  
<a name="module_path_concatenation"></a>**module\_path\_concatenation**
:  <font color="purple"><b>{</b></font> <a href="#module_path_expression">module\_path\_expression</a>  { <font color="purple"><b>,</b></font> <a href="#module_path_expression">module\_path\_expression</a> }  <font color="purple"><b>}</b></font>
  
<a name="module_path_multiple_concatenation"></a>**module\_path\_multiple\_concatenation**
:  <font color="purple"><b>{</b></font> <a href="#constant_expression">constant\_expression</a> <a href="#module_path_concatenation">module\_path\_concatenation</a> <font color="purple"><b>}</b></font>
  
<a name="multiple_concatenation"></a>**multiple\_concatenation**
:  <font color="purple"><b>{</b></font> <a href="#expression">expression</a> <a href="#concatenation">concatenation</a> <font color="purple"><b>}</b></font> [^footnote_34]
  
<a name="streaming_concatenation"></a>**streaming\_concatenation**
:  <font color="purple"><b>{</b></font> <a href="#stream_operator">stream\_operator</a>  \[ <a href="#slice_size">slice\_size</a> ]  <a href="#stream_concatenation">stream\_concatenation</a> <font color="purple"><b>}</b></font>
  
<a name="stream_operator"></a>**stream\_operator**
:  <font color="purple"><b>&gt;&gt;</b></font>  
        | <font color="purple"><b>&lt;&lt;</b></font>
  
<a name="slice_size"></a>**slice\_size**
:  <a href="#simple_type">simple\_type</a>  
        | <a href="#constant_expression">constant\_expression</a>
  
<a name="stream_concatenation"></a>**stream\_concatenation**
:  <font color="purple"><b>{</b></font> <a href="#stream_expression">stream\_expression</a>  { <font color="purple"><b>,</b></font> <a href="#stream_expression">stream\_expression</a> }  <font color="purple"><b>}</b></font>
  
<a name="stream_expression"></a>**stream\_expression**
:  <a href="#expression">expression</a>  \[ <font color="purple"><b>with</b></font> <font color="purple"><b>\[</b></font> <a href="#array_range_expression">array\_range\_expression</a> <font color="purple"><b>]</b></font> ]
  
<a name="array_range_expression"></a>**array\_range\_expression**
:  <a href="#expression">expression</a>  
        | <a href="#expression">expression</a> <font color="purple"><b>:</b></font> <a href="#expression">expression</a>  
        | <a href="#expression">expression</a> <font color="purple"><b>+:</b></font> <a href="#expression">expression</a>  
        | <a href="#expression">expression</a> <font color="purple"><b>-:</b></font> <a href="#expression">expression</a>
  
<a name="empty_queue"></a>**empty\_queue**[^footnote_35]
:  <font color="purple"><b>{</b></font> <font color="purple"><b>}</b></font>
  
### Subroutine calls
  
<a name="constant_function_call"></a>**constant\_function\_call**
:  <a href="#function_subroutine_call">function\_subroutine\_call</a> [^footnote_36]
  
<a name="tf_call"></a>**tf\_call**[^footnote_37]
:  <a href="#ps_or_hierarchical_tf_identifier">ps\_or\_hierarchical\_tf\_identifier</a>  { <a href="#attribute_instance">attribute\_instance</a> }   \[ <font color="purple"><b>(</b></font> <a href="#list_of_arguments">list\_of\_arguments</a> <font color="purple"><b>)</b></font> ]
  
<a name="system_tf_call"></a>**system\_tf\_call**
:  <a href="#system_tf_identifier">system\_tf\_identifier</a>  \[ <font color="purple"><b>(</b></font> <a href="#list_of_arguments">list\_of\_arguments</a> <font color="purple"><b>)</b></font> ]  
        | <a href="#system_tf_identifier">system\_tf\_identifier</a> <font color="purple"><b>(</b></font> <a href="#data_type">data\_type</a>  \[ <font color="purple"><b>,</b></font> <a href="#expression">expression</a> ]  <font color="purple"><b>)</b></font>
  
<a name="subroutine_call"></a>**subroutine\_call**
:  <a href="#tf_call">tf\_call</a>  
        | <a href="#system_tf_call">system\_tf\_call</a>  
        | <a href="#method_call">method\_call</a>  
        | \[ <font color="purple"><b>std::</b></font> ]  <a href="#randomize_call">randomize\_call</a>
  
<a name="function_subroutine_call"></a>**function\_subroutine\_call**
:  <a href="#subroutine_call">subroutine\_call</a>
  
<a name="list_of_arguments"></a>**list\_of\_arguments**
:  \[ <a href="#expression">expression</a> ]   { <font color="purple"><b>,</b></font>  \[ <a href="#expression">expression</a> ] }   { <font color="purple"><b>,</b></font> <font color="purple"><b>.</b></font> <a href="#identifier">identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#expression">expression</a> ]  <font color="purple"><b>)</b></font> }  
        | <font color="purple"><b>.</b></font> <a href="#identifier">identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#expression">expression</a> ]  <font color="purple"><b>)</b></font>  { <font color="purple"><b>,</b></font> <font color="purple"><b>.</b></font> <a href="#identifier">identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#expression">expression</a> ]  <font color="purple"><b>)</b></font> }
  
<a name="method_call"></a>**method\_call**
:  <a href="#method_call_root">method\_call\_root</a> <font color="purple"><b>.</b></font> <a href="#method_call_body">method\_call\_body</a>
  
<a name="method_call_body"></a>**method\_call\_body**
:  <a href="#method_identifier">method\_identifier</a>  { <a href="#attribute_instance">attribute\_instance</a> }   \[ <font color="purple"><b>(</b></font> <a href="#list_of_arguments">list\_of\_arguments</a> <font color="purple"><b>)</b></font> ]  
        | <a href="#built_in_method_call">built\_in\_method\_call</a>
  
<a name="built_in_method_call"></a>**built\_in\_method\_call**
:  <a href="#array_manipulation_call">array\_manipulation\_call</a>  
        | <a href="#randomize_call">randomize\_call</a>
  
<a name="array_manipulation_call"></a>**array\_manipulation\_call**
:  <a href="#array_method_name">array\_method\_name</a>  { <a href="#attribute_instance">attribute\_instance</a> }   \[ <font color="purple"><b>(</b></font> <a href="#list_of_arguments">list\_of\_arguments</a> <font color="purple"><b>)</b></font> ]   \[ <font color="purple"><b>with</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> ]
  
<a name="randomize_call"></a>**randomize\_call**
:  <font color="purple"><b>randomize</b></font>  { <a href="#attribute_instance">attribute\_instance</a> }   \[ <font color="purple"><b>(</b></font>  \[ <a href="#variable_identifier_list">variable\_identifier\_list</a> | <font color="purple"><b>null</b></font> ]  <font color="purple"><b>)</b></font> ]   \[ <font color="purple"><b>with</b></font>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#identifier_list">identifier\_list</a> ]  <font color="purple"><b>)</b></font> ]  <a href="#constraint_block">constraint\_block</a> ]  [^footnote_38]
  
<a name="method_call_root"></a>**method\_call\_root**
:  <a href="#primary">primary</a>  
        | <a href="#implicit_class_handle">implicit\_class\_handle</a>
  
<a name="array_method_name"></a>**array\_method\_name**
:  <a href="#method_identifier">method\_identifier</a>  
        | <font color="purple"><b>unique</b></font>  
        | <font color="purple"><b>and</b></font>  
        | <font color="purple"><b>or</b></font>  
        | <font color="purple"><b>xor</b></font>
  
### Expressions
  
<a name="inc_or_dec_expression"></a>**inc\_or\_dec\_expression**
:  <a href="#inc_or_dec_operator">inc\_or\_dec\_operator</a>  { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#variable_lvalue">variable\_lvalue</a>  
        | <a href="#variable_lvalue">variable\_lvalue</a>  { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#inc_or_dec_operator">inc\_or\_dec\_operator</a>
  
<a name="conditional_expression"></a>**conditional\_expression**
:  <a href="#cond_predicate">cond\_predicate</a> <font color="purple"><b>?</b></font>  { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#expression">expression</a> <font color="purple"><b>:</b></font> <a href="#expression">expression</a>
  
<a name="constant_expression"></a>**constant\_expression**
:  <a href="#constant_primary">constant\_primary</a>  
        | <a href="#unary_operator">unary\_operator</a>  { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#constant_primary">constant\_primary</a>  
        | <a href="#constant_expression">constant\_expression</a> <a href="#binary_operator">binary\_operator</a>  { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#constant_expression">constant\_expression</a>  
        | <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>?</b></font>  { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>:</b></font> <a href="#constant_expression">constant\_expression</a>
  
<a name="constant_mintypmax_expression"></a>**constant\_mintypmax\_expression**
:  <a href="#constant_expression">constant\_expression</a>  
        | <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>:</b></font> <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>:</b></font> <a href="#constant_expression">constant\_expression</a>
  
<a name="constant_param_expression"></a>**constant\_param\_expression**
:  <a href="#constant_mintypmax_expression">constant\_mintypmax\_expression</a>  
        | <a href="#data_type">data\_type</a>  
        | <font color="purple"><b>$</b></font>
  
<a name="param_expression"></a>**param\_expression**
:  <a href="#mintypmax_expression">mintypmax\_expression</a>  
        | <a href="#data_type">data\_type</a>  
        | <font color="purple"><b>$</b></font>
  
<a name="constant_range_expression"></a>**constant\_range\_expression**
:  <a href="#constant_expression">constant\_expression</a>  
        | <a href="#constant_part_select_range">constant\_part\_select\_range</a>
  
<a name="constant_part_select_range"></a>**constant\_part\_select\_range**
:  <a href="#constant_range">constant\_range</a>  
        | <a href="#constant_indexed_range">constant\_indexed\_range</a>
  
<a name="constant_range"></a>**constant\_range**
:  <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>:</b></font> <a href="#constant_expression">constant\_expression</a>
  
<a name="constant_indexed_range"></a>**constant\_indexed\_range**
:  <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>+:</b></font> <a href="#constant_expression">constant\_expression</a>  
        | <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>-:</b></font> <a href="#constant_expression">constant\_expression</a>
  
<a name="expression"></a>**expression**
:  <a href="#primary">primary</a>  
        | <a href="#unary_operator">unary\_operator</a>  { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#primary">primary</a>  
        | <a href="#inc_or_dec_expression">inc\_or\_dec\_expression</a>  
        | <font color="purple"><b>(</b></font> <a href="#operator_assignment">operator\_assignment</a> <font color="purple"><b>)</b></font>  
        | <a href="#expression">expression</a> <a href="#binary_operator">binary\_operator</a>  { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#expression">expression</a>  
        | <a href="#conditional_expression">conditional\_expression</a>  
        | <a href="#inside_expression">inside\_expression</a>  
        | <a href="#tagged_union_expression">tagged\_union\_expression</a>
  
<a name="tagged_union_expression"></a>**tagged\_union\_expression**
:  <font color="purple"><b>tagged</b></font> <a href="#member_identifier">member\_identifier</a>  \[ <a href="#expression">expression</a> ]
  
<a name="inside_expression"></a>**inside\_expression**
:  <a href="#expression">expression</a> <font color="purple"><b>inside</b></font> <font color="purple"><b>{</b></font> <a href="#open_range_list">open\_range\_list</a> <font color="purple"><b>}</b></font>
  
<a name="value_range"></a>**value\_range**
:  <a href="#expression">expression</a>  
        | <font color="purple"><b>\[</b></font> <a href="#expression">expression</a> <font color="purple"><b>:</b></font> <a href="#expression">expression</a> <font color="purple"><b>]</b></font>
  
<a name="mintypmax_expression"></a>**mintypmax\_expression**
:  <a href="#expression">expression</a>  
        | <a href="#expression">expression</a> <font color="purple"><b>:</b></font> <a href="#expression">expression</a> <font color="purple"><b>:</b></font> <a href="#expression">expression</a>
  
<a name="module_path_conditional_expression"></a>**module\_path\_conditional\_expression**
:  <a href="#module_path_expression">module\_path\_expression</a> <font color="purple"><b>?</b></font>  { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#module_path_expression">module\_path\_expression</a> <font color="purple"><b>:</b></font> <a href="#module_path_expression">module\_path\_expression</a>
  
<a name="module_path_expression"></a>**module\_path\_expression**
:  <a href="#module_path_primary">module\_path\_primary</a>  
        | <a href="#unary_module_path_operator">unary\_module\_path\_operator</a>  { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#module_path_primary">module\_path\_primary</a>  
        | <a href="#module_path_expression">module\_path\_expression</a> <a href="#binary_module_path_operator">binary\_module\_path\_operator</a>  { <a href="#attribute_instance">attribute\_instance</a> }  <a href="#module_path_expression">module\_path\_expression</a>  
        | <a href="#module_path_conditional_expression">module\_path\_conditional\_expression</a>
  
<a name="module_path_mintypmax_expression"></a>**module\_path\_mintypmax\_expression**
:  <a href="#module_path_expression">module\_path\_expression</a>  
        | <a href="#module_path_expression">module\_path\_expression</a> <font color="purple"><b>:</b></font> <a href="#module_path_expression">module\_path\_expression</a> <font color="purple"><b>:</b></font> <a href="#module_path_expression">module\_path\_expression</a>
  
<a name="part_select_range"></a>**part\_select\_range**
:  <a href="#constant_range">constant\_range</a>  
        | <a href="#indexed_range">indexed\_range</a>
  
<a name="indexed_range"></a>**indexed\_range**
:  <a href="#expression">expression</a> <font color="purple"><b>+:</b></font> <a href="#constant_expression">constant\_expression</a>  
        | <a href="#expression">expression</a> <font color="purple"><b>-:</b></font> <a href="#constant_expression">constant\_expression</a>
  
<a name="genvar_expression"></a>**genvar\_expression**
:  <a href="#constant_expression">constant\_expression</a>
  
### Primaries
  
<a name="constant_primary"></a>**constant\_primary**
:  <a href="#primary_literal">primary\_literal</a>  
        | <a href="#ps_parameter_identifier">ps\_parameter\_identifier</a> <a href="#constant_select">constant\_select</a>  
        | <a href="#specparam_identifier">specparam\_identifier</a>  \[ <font color="purple"><b>\[</b></font> <a href="#constant_range_expression">constant\_range\_expression</a> <font color="purple"><b>]</b></font> ]  
        | <a href="#genvar_identifier">genvar\_identifier</a> [^footnote_39]  
        | <a href="#formal_port_identifier">formal\_port\_identifier</a> <a href="#constant_select">constant\_select</a>  
        | \[ <a href="#package_scope">package\_scope</a> | <a href="#class_scope">class\_scope</a> ]  <a href="#enum_identifier">enum\_identifier</a>  
        | <a href="#constant_concatenation">constant\_concatenation</a>  \[ <font color="purple"><b>\[</b></font> <a href="#constant_range_expression">constant\_range\_expression</a> <font color="purple"><b>]</b></font> ]  
        | <a href="#constant_multiple_concatenation">constant\_multiple\_concatenation</a>  \[ <font color="purple"><b>\[</b></font> <a href="#constant_range_expression">constant\_range\_expression</a> <font color="purple"><b>]</b></font> ]  
        | <a href="#constant_function_call">constant\_function\_call</a>  
        | <a href="#constant_let_expression">constant\_let\_expression</a>  
        | <font color="purple"><b>(</b></font> <a href="#constant_mintypmax_expression">constant\_mintypmax\_expression</a> <font color="purple"><b>)</b></font>  
        | <a href="#constant_cast">constant\_cast</a>  
        | <a href="#constant_assignment_pattern_expression">constant\_assignment\_pattern\_expression</a>  
        | <a href="#type_reference">type\_reference</a> [^footnote_40]
  
<a name="module_path_primary"></a>**module\_path\_primary**
:  <a href="#number">number</a>  
        | <a href="#identifier">identifier</a>  
        | <a href="#module_path_concatenation">module\_path\_concatenation</a>  
        | <a href="#module_path_multiple_concatenation">module\_path\_multiple\_concatenation</a>  
        | <a href="#function_subroutine_call">function\_subroutine\_call</a>  
        | <font color="purple"><b>(</b></font> <a href="#module_path_mintypmax_expression">module\_path\_mintypmax\_expression</a> <font color="purple"><b>)</b></font>
  
<a name="primary"></a>**primary**
:  <a href="#primary_literal">primary\_literal</a>  
        | \[ <a href="#class_qualifier">class\_qualifier</a> | <a href="#package_scope">package\_scope</a> ]  <a href="#hierarchical_identifier">hierarchical\_identifier</a> <a href="#select">select</a>  
        | <a href="#empty_queue">empty\_queue</a>  
        | <a href="#concatenation">concatenation</a>  \[ <font color="purple"><b>\[</b></font> <a href="#range_expression">range\_expression</a> <font color="purple"><b>]</b></font> ]  
        | <a href="#multiple_concatenation">multiple\_concatenation</a>  \[ <font color="purple"><b>\[</b></font> <a href="#range_expression">range\_expression</a> <font color="purple"><b>]</b></font> ]  
        | <a href="#function_subroutine_call">function\_subroutine\_call</a>  
        | <a href="#let_expression">let\_expression</a>  
        | <font color="purple"><b>(</b></font> <a href="#mintypmax_expression">mintypmax\_expression</a> <font color="purple"><b>)</b></font>  
        | <a href="#cast">cast</a>  
        | <a href="#assignment_pattern_expression">assignment\_pattern\_expression</a>  
        | <a href="#streaming_concatenation">streaming\_concatenation</a>  
        | <a href="#sequence_method_call">sequence\_method\_call</a>  
        | <font color="purple"><b>this</b></font> [^footnote_41]  
        | <font color="purple"><b>$</b></font> [^footnote_42]  
        | <font color="purple"><b>null</b></font>
  
<a name="class_qualifier"></a>**class\_qualifier**
:  \[ <font color="purple"><b>local::</b></font> [^footnote_43] ]   \[ <a href="#implicit_class_handle">implicit\_class\_handle</a> <font color="purple"><b>.</b></font> | <a href="#class_scope">class\_scope</a> ]
  
<a name="range_expression"></a>**range\_expression**
:  <a href="#expression">expression</a>  
        | <a href="#part_select_range">part\_select\_range</a>
  
<a name="primary_literal"></a>**primary\_literal**
:  <a href="#number">number</a>  
        | <a href="#time_literal">time\_literal</a>  
        | <a href="#unbased_unsized_literal">unbased\_unsized\_literal</a>  
        | <a href="#string_literal">string\_literal</a>
  
<a name="time_literal"></a>**time\_literal**[^footnote_44]
:  <a href="#unsigned_number">unsigned\_number</a> <a href="#time_unit">time\_unit</a>  
        | <a href="#fixed_point_number">fixed\_point\_number</a> <a href="#time_unit">time\_unit</a>
  
<a name="time_unit"></a>**time\_unit**
:  <font color="purple"><b>s</b></font>  
        | <font color="purple"><b>ms</b></font>  
        | <font color="purple"><b>us</b></font>  
        | <font color="purple"><b>ns</b></font>  
        | <font color="purple"><b>ps</b></font>  
        | <font color="purple"><b>fs</b></font>
  
<a name="implicit_class_handle"></a>**implicit\_class\_handle**[^footnote_41]
:  <font color="purple"><b>this</b></font>  
        | <font color="purple"><b>super</b></font>  
        | <font color="purple"><b>this</b></font> <font color="purple"><b>.</b></font> <font color="purple"><b>super</b></font>
  
<a name="bit_select"></a>**bit\_select**
:  { <font color="purple"><b>\[</b></font> <a href="#expression">expression</a> <font color="purple"><b>]</b></font> }
  
<a name="select"></a>**select**
:  \[ { <font color="purple"><b>.</b></font> <a href="#member_identifier">member\_identifier</a> <a href="#bit_select">bit\_select</a> }  <font color="purple"><b>.</b></font> <a href="#member_identifier">member\_identifier</a> ]  <a href="#bit_select">bit\_select</a>  \[ <font color="purple"><b>\[</b></font> <a href="#part_select_range">part\_select\_range</a> <font color="purple"><b>]</b></font> ]
  
<a name="nonrange_select"></a>**nonrange\_select**
:  \[ { <font color="purple"><b>.</b></font> <a href="#member_identifier">member\_identifier</a> <a href="#bit_select">bit\_select</a> }  <font color="purple"><b>.</b></font> <a href="#member_identifier">member\_identifier</a> ]  <a href="#bit_select">bit\_select</a>
  
<a name="constant_bit_select"></a>**constant\_bit\_select**
:  { <font color="purple"><b>\[</b></font> <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>]</b></font> }
  
<a name="constant_select"></a>**constant\_select**
:  \[ { <font color="purple"><b>.</b></font> <a href="#member_identifier">member\_identifier</a> <a href="#constant_bit_select">constant\_bit\_select</a> }  <font color="purple"><b>.</b></font> <a href="#member_identifier">member\_identifier</a> ]  <a href="#constant_bit_select">constant\_bit\_select</a>  \[ <font color="purple"><b>\[</b></font> <a href="#constant_part_select_range">constant\_part\_select\_range</a> <font color="purple"><b>]</b></font> ]
  
<a name="constant_cast"></a>**constant\_cast**
:  <a href="#casting_type">casting\_type</a> <font color="purple"><b>&#39;</b></font> <font color="purple"><b>(</b></font> <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>)</b></font>
  
<a name="constant_let_expression"></a>**constant\_let\_expression**
:  <a href="#let_expression">let\_expression</a> [^footnote_45]
  
<a name="cast"></a>**cast**
:  <a href="#casting_type">casting\_type</a> <font color="purple"><b>&#39;</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font>
  
### Expression left-side values
  
<a name="net_lvalue"></a>**net\_lvalue**
:  <a href="#ps_or_hierarchical_net_identifier">ps\_or\_hierarchical\_net\_identifier</a> <a href="#constant_select">constant\_select</a>  
        | <font color="purple"><b>{</b></font> <a href="#net_lvalue">net\_lvalue</a>  { <font color="purple"><b>,</b></font> <a href="#net_lvalue">net\_lvalue</a> }  <font color="purple"><b>}</b></font>  
        | \[ <a href="#assignment_pattern_expression_type">assignment\_pattern\_expression\_type</a> ]  <a href="#assignment_pattern_net_lvalue">assignment\_pattern\_net\_lvalue</a>
  
<a name="variable_lvalue"></a>**variable\_lvalue**
:  \[ <a href="#implicit_class_handle">implicit\_class\_handle</a> <font color="purple"><b>.</b></font> | <a href="#package_scope">package\_scope</a> ]  <a href="#hierarchical_variable_identifier">hierarchical\_variable\_identifier</a> <a href="#select">select</a> [^footnote_46]  
        | <font color="purple"><b>{</b></font> <a href="#variable_lvalue">variable\_lvalue</a>  { <font color="purple"><b>,</b></font> <a href="#variable_lvalue">variable\_lvalue</a> }  <font color="purple"><b>}</b></font>  
        | \[ <a href="#assignment_pattern_expression_type">assignment\_pattern\_expression\_type</a> ]  <a href="#assignment_pattern_variable_lvalue">assignment\_pattern\_variable\_lvalue</a>  
        | <a href="#streaming_concatenation">streaming\_concatenation</a> [^footnote_47]
  
<a name="nonrange_variable_lvalue"></a>**nonrange\_variable\_lvalue**
:  \[ <a href="#implicit_class_handle">implicit\_class\_handle</a> <font color="purple"><b>.</b></font> | <a href="#package_scope">package\_scope</a> ]  <a href="#hierarchical_variable_identifier">hierarchical\_variable\_identifier</a> <a href="#nonrange_select">nonrange\_select</a>
  
### Operators
  
<a name="unary_operator"></a>**unary\_operator**
:  <font color="purple"><b>+</b></font>  
        | <font color="purple"><b>-</b></font>  
        | <font color="purple"><b>!</b></font>  
        | <font color="purple"><b>~</b></font>  
        | <font color="purple"><b>&amp;</b></font>  
        | <font color="purple"><b>~&amp;</b></font>  
        | <font color="purple"><b>|</b></font>  
        | <font color="purple"><b>~|</b></font>  
        | <font color="purple"><b>^</b></font>  
        | <font color="purple"><b>~^</b></font>  
        | <font color="purple"><b>^~</b></font>
  
<a name="binary_operator"></a>**binary\_operator**
:  <font color="purple"><b>+</b></font>  
        | <font color="purple"><b>-</b></font>  
        | <font color="purple"><b>\*</b></font>  
        | <font color="purple"><b>/</b></font>  
        | <font color="purple"><b>%</b></font>  
        | <font color="purple"><b>==</b></font>  
        | <font color="purple"><b>!=</b></font>  
        | <font color="purple"><b>===</b></font>  
        | <font color="purple"><b>!==</b></font>  
        | <font color="purple"><b>==?</b></font>  
        | <font color="purple"><b>!=?</b></font>  
        | <font color="purple"><b>&amp;&amp;</b></font>  
        | <font color="purple"><b>||</b></font>  
        | <font color="purple"><b>\*\*</b></font>  
        | <font color="purple"><b>&lt;</b></font>  
        | <font color="purple"><b>&lt;=</b></font>  
        | <font color="purple"><b>&gt;</b></font>  
        | <font color="purple"><b>&gt;=</b></font>  
        | <font color="purple"><b>&amp;</b></font>  
        | <font color="purple"><b>|</b></font>  
        | <font color="purple"><b>^</b></font>  
        | <font color="purple"><b>^~</b></font>  
        | <font color="purple"><b>~^</b></font>  
        | <font color="purple"><b>&gt;&gt;</b></font>  
        | <font color="purple"><b>&lt;&lt;</b></font>  
        | <font color="purple"><b>&gt;&gt;&gt;</b></font>  
        | <font color="purple"><b>&lt;&lt;&lt;</b></font>  
        | <font color="purple"><b>-&gt;</b></font>  
        | <font color="purple"><b>&lt;-&gt;</b></font>
  
<a name="inc_or_dec_operator"></a>**inc\_or\_dec\_operator**
:  <font color="purple"><b>++</b></font>  
        | <font color="purple"><b>--</b></font>
  
<a name="unary_module_path_operator"></a>**unary\_module\_path\_operator**
:  <font color="purple"><b>!</b></font>  
        | <font color="purple"><b>~</b></font>  
        | <font color="purple"><b>&amp;</b></font>  
        | <font color="purple"><b>~&amp;</b></font>  
        | <font color="purple"><b>|</b></font>  
        | <font color="purple"><b>~|</b></font>  
        | <font color="purple"><b>^</b></font>  
        | <font color="purple"><b>~^</b></font>  
        | <font color="purple"><b>^~</b></font>
  
<a name="binary_module_path_operator"></a>**binary\_module\_path\_operator**
:  <font color="purple"><b>==</b></font>  
        | <font color="purple"><b>!=</b></font>  
        | <font color="purple"><b>&amp;&amp;</b></font>  
        | <font color="purple"><b>||</b></font>  
        | <font color="purple"><b>&amp;</b></font>  
        | <font color="purple"><b>|</b></font>  
        | <font color="purple"><b>^</b></font>  
        | <font color="purple"><b>^~</b></font>  
        | <font color="purple"><b>~^</b></font>
  
### Numbers
  
<a name="number"></a>**number**
:  <a href="#integral_number">integral\_number</a>  
        | <a href="#real_number">real\_number</a>
  
<a name="integral_number"></a>**integral\_number**
:  <a href="#decimal_number">decimal\_number</a>  
        | <a href="#octal_number">octal\_number</a>  
        | <a href="#binary_number">binary\_number</a>  
        | <a href="#hex_number">hex\_number</a>
  
<a name="decimal_number"></a>**decimal\_number**
:  <a href="#unsigned_number">unsigned\_number</a>  
        | \[ <a href="#size">size</a> ]  <a href="#decimal_base">decimal\_base</a> <a href="#unsigned_number">unsigned\_number</a>  
        | \[ <a href="#size">size</a> ]  <a href="#decimal_base">decimal\_base</a> <a href="#x_digit">x\_digit</a>  { <font color="purple"><b>\_</b></font> }  
        | \[ <a href="#size">size</a> ]  <a href="#decimal_base">decimal\_base</a> <a href="#z_digit">z\_digit</a>  { <font color="purple"><b>\_</b></font> }
  
<a name="binary_number"></a>**binary\_number**
:  \[ <a href="#size">size</a> ]  <a href="#binary_base">binary\_base</a> <a href="#binary_value">binary\_value</a>
  
<a name="octal_number"></a>**octal\_number**
:  \[ <a href="#size">size</a> ]  <a href="#octal_base">octal\_base</a> <a href="#octal_value">octal\_value</a>
  
<a name="hex_number"></a>**hex\_number**
:  \[ <a href="#size">size</a> ]  <a href="#hex_base">hex\_base</a> <a href="#hex_value">hex\_value</a>
  
<a name="sign"></a>**sign**
:  <font color="purple"><b>+</b></font>  
        | <font color="purple"><b>-</b></font>
  
<a name="size"></a>**size**
:  <a href="#non_zero_unsigned_number">non\_zero\_unsigned\_number</a>
  
<a name="non_zero_unsigned_number"></a>**non\_zero\_unsigned\_number**[^footnote_33]
:  <a href="#non_zero_decimal_digit">non\_zero\_decimal\_digit</a>  { <font color="purple"><b>\_</b></font> | <a href="#decimal_digit">decimal\_digit</a> }
  
<a name="real_number"></a>**real\_number**[^footnote_33]
:  <a href="#fixed_point_number">fixed\_point\_number</a>  
        | <a href="#unsigned_number">unsigned\_number</a>  \[ <font color="purple"><b>.</b></font> <a href="#unsigned_number">unsigned\_number</a> ]  <a href="#exp">exp</a>  \[ <a href="#sign">sign</a> ]  <a href="#unsigned_number">unsigned\_number</a>
  
<a name="fixed_point_number"></a>**fixed\_point\_number**[^footnote_33]
:  <a href="#unsigned_number">unsigned\_number</a> <font color="purple"><b>.</b></font> <a href="#unsigned_number">unsigned\_number</a>
  
<a name="exp"></a>**exp**
:  <font color="purple"><b>e</b></font>  
        | <font color="purple"><b>E</b></font>
  
<a name="unsigned_number"></a>**unsigned\_number**[^footnote_33]
:  <a href="#decimal_digit">decimal\_digit</a>  { <font color="purple"><b>\_</b></font> | <a href="#decimal_digit">decimal\_digit</a> }
  
<a name="binary_value"></a>**binary\_value**[^footnote_33]
:  <a href="#binary_digit">binary\_digit</a>  { <font color="purple"><b>\_</b></font> | <a href="#binary_digit">binary\_digit</a> }
  
<a name="octal_value"></a>**octal\_value**[^footnote_33]
:  <a href="#octal_digit">octal\_digit</a>  { <font color="purple"><b>\_</b></font> | <a href="#octal_digit">octal\_digit</a> }
  
<a name="hex_value"></a>**hex\_value**[^footnote_33]
:  <a href="#hex_digit">hex\_digit</a>  { <font color="purple"><b>\_</b></font> | <a href="#hex_digit">hex\_digit</a> }
  
<a name="decimal_base"></a>**decimal\_base**[^footnote_33]
:  <font color="purple"><b>&#39;</b></font>  \[ <font color="purple"><b>s</b></font> | <font color="purple"><b>S</b></font> ]  <font color="purple"><b>d</b></font>  
        | <font color="purple"><b>&#39;</b></font>  \[ <font color="purple"><b>s</b></font> | <font color="purple"><b>S</b></font> ]  <font color="purple"><b>D</b></font>
  
<a name="binary_base"></a>**binary\_base**[^footnote_33]
:  <font color="purple"><b>&#39;</b></font>  \[ <font color="purple"><b>s</b></font> | <font color="purple"><b>S</b></font> ]  <font color="purple"><b>b</b></font>  
        | <font color="purple"><b>&#39;</b></font>  \[ <font color="purple"><b>s</b></font> | <font color="purple"><b>S</b></font> ]  <font color="purple"><b>B</b></font>
  
<a name="octal_base"></a>**octal\_base**[^footnote_33]
:  <font color="purple"><b>&#39;</b></font>  \[ <font color="purple"><b>s</b></font> | <font color="purple"><b>S</b></font> ]  <font color="purple"><b>o</b></font>  
        | <font color="purple"><b>&#39;</b></font>  \[ <font color="purple"><b>s</b></font> | <font color="purple"><b>S</b></font> ]  <font color="purple"><b>O</b></font>
  
<a name="hex_base"></a>**hex\_base**[^footnote_33]
:  <font color="purple"><b>&#39;</b></font>  \[ <font color="purple"><b>s</b></font> | <font color="purple"><b>S</b></font> ]  <font color="purple"><b>h</b></font>  
        | <font color="purple"><b>&#39;</b></font>  \[ <font color="purple"><b>s</b></font> | <font color="purple"><b>S</b></font> ]  <font color="purple"><b>H</b></font>
  
<a name="non_zero_decimal_digit"></a>**non\_zero\_decimal\_digit**
:  <font color="purple"><b>1</b></font>  
        | <font color="purple"><b>2</b></font>  
        | <font color="purple"><b>3</b></font>  
        | <font color="purple"><b>4</b></font>  
        | <font color="purple"><b>5</b></font>  
        | <font color="purple"><b>6</b></font>  
        | <font color="purple"><b>7</b></font>  
        | <font color="purple"><b>8</b></font>  
        | <font color="purple"><b>9</b></font>
  
<a name="decimal_digit"></a>**decimal\_digit**
:  <font color="purple"><b>0</b></font>  
        | <font color="purple"><b>1</b></font>  
        | <font color="purple"><b>2</b></font>  
        | <font color="purple"><b>3</b></font>  
        | <font color="purple"><b>4</b></font>  
        | <font color="purple"><b>5</b></font>  
        | <font color="purple"><b>6</b></font>  
        | <font color="purple"><b>7</b></font>  
        | <font color="purple"><b>8</b></font>  
        | <font color="purple"><b>9</b></font>
  
<a name="binary_digit"></a>**binary\_digit**
:  <a href="#x_digit">x\_digit</a>  
        | <a href="#z_digit">z\_digit</a>  
        | <font color="purple"><b>0</b></font>  
        | <font color="purple"><b>1</b></font>
  
<a name="octal_digit"></a>**octal\_digit**
:  <a href="#x_digit">x\_digit</a>  
        | <a href="#z_digit">z\_digit</a>  
        | <font color="purple"><b>0</b></font>  
        | <font color="purple"><b>1</b></font>  
        | <font color="purple"><b>2</b></font>  
        | <font color="purple"><b>3</b></font>  
        | <font color="purple"><b>4</b></font>  
        | <font color="purple"><b>5</b></font>  
        | <font color="purple"><b>6</b></font>  
        | <font color="purple"><b>7</b></font>
  
<a name="hex_digit"></a>**hex\_digit**
:  <a href="#x_digit">x\_digit</a>  
        | <a href="#z_digit">z\_digit</a>  
        | <font color="purple"><b>0</b></font>  
        | <font color="purple"><b>1</b></font>  
        | <font color="purple"><b>2</b></font>  
        | <font color="purple"><b>3</b></font>  
        | <font color="purple"><b>4</b></font>  
        | <font color="purple"><b>5</b></font>  
        | <font color="purple"><b>6</b></font>  
        | <font color="purple"><b>7</b></font>  
        | <font color="purple"><b>8</b></font>  
        | <font color="purple"><b>9</b></font>  
        | <font color="purple"><b>a</b></font>  
        | <font color="purple"><b>b</b></font>  
        | <font color="purple"><b>c</b></font>  
        | <font color="purple"><b>d</b></font>  
        | <font color="purple"><b>e</b></font>  
        | <font color="purple"><b>f</b></font>  
        | <font color="purple"><b>A</b></font>  
        | <font color="purple"><b>B</b></font>  
        | <font color="purple"><b>C</b></font>  
        | <font color="purple"><b>D</b></font>  
        | <font color="purple"><b>E</b></font>  
        | <font color="purple"><b>F</b></font>
  
<a name="x_digit"></a>**x\_digit**
:  <font color="purple"><b>x</b></font>  
        | <font color="purple"><b>X</b></font>
  
<a name="z_digit"></a>**z\_digit**
:  <font color="purple"><b>z</b></font>  
        | <font color="purple"><b>Z</b></font>  
        | <font color="purple"><b>?</b></font>
  
<a name="unbased_unsized_literal"></a>**unbased\_unsized\_literal**
:  <font color="purple"><b>&#39;0</b></font>  
        | <font color="purple"><b>&#39;1</b></font>  
        | <font color="purple"><b>&#39;</b></font> <a href="#z_or_x">z\_or\_x</a> [^footnote_48]
  
### Strings
  
<a name="string_literal"></a>**string\_literal**
:  <font color="purple"><b>&quot;</b></font>  { <em>Any\_ASCII\_Characters</em> }  <font color="purple"><b>&quot;</b></font>
  
## General
  
### Attributes
  
<a name="attribute_instance"></a>**attribute\_instance**
:  <font color="purple"><b>(\*</b></font> <a href="#attr_spec">attr\_spec</a>  { <font color="purple"><b>,</b></font> <a href="#attr_spec">attr\_spec</a> }  <font color="purple"><b>\*)</b></font>
  
<a name="attr_spec"></a>**attr\_spec**
:  <a href="#attr_name">attr\_name</a>  \[ <font color="purple"><b>=</b></font> <a href="#constant_expression">constant\_expression</a> ]
  
<a name="attr_name"></a>**attr\_name**
:  <a href="#identifier">identifier</a>
  
### Comments
  
<a name="comment"></a>**comment**
:  <a href="#one_line_comment">one\_line\_comment</a>  
        | <a href="#block_comment">block\_comment</a>
  
<a name="one_line_comment"></a>**one\_line\_comment**
:  <font color="purple"><b>//</b></font> <a href="#comment_text">comment\_text</a> <em>new\_line\_char</em>
  
<a name="block_comment"></a>**block\_comment**
:  <font color="purple"><b>/\*</b></font> <a href="#comment_text">comment\_text</a> <font color="purple"><b>\*/</b></font>
  
<a name="comment_text"></a>**comment\_text**
:  { <em>Any\_ASCII\_character</em> }
  
### Identifiers
  
<a name="array_identifier"></a>**array\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="block_identifier"></a>**block\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="bin_identifier"></a>**bin\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="c_identifier"></a>**c\_identifier**[^footnote_49]
:  <em>\[a-zA-Z\_\]</em> { <em>\[a-zA-Z0-9\_\]</em> }
  
<a name="cell_identifier"></a>**cell\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="checker_identifier"></a>**checker\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="class_identifier"></a>**class\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="class_variable_identifier"></a>**class\_variable\_identifier**
:  <a href="#variable_identifier">variable\_identifier</a>
  
<a name="clocking_identifier"></a>**clocking\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="config_identifier"></a>**config\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="const_identifier"></a>**const\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="constraint_identifier"></a>**constraint\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="covergroup_identifier"></a>**covergroup\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="covergroup_variable_identifier"></a>**covergroup\_variable\_identifier**
:  <a href="#variable_identifier">variable\_identifier</a>
  
<a name="cover_point_identifier"></a>**cover\_point\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="cross_identifier"></a>**cross\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="dynamic_array_variable_identifier"></a>**dynamic\_array\_variable\_identifier**
:  <a href="#variable_identifier">variable\_identifier</a>
  
<a name="enum_identifier"></a>**enum\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="escaped_identifier"></a>**escaped\_identifier**
:  <font color="purple"><b>\\</b></font>  { <em>any\_printable\_ASCII\_character\_except\_white\_space</em> }  <a href="#white_space">white\_space</a>
  
<a name="formal_identifier"></a>**formal\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="formal_port_identifier"></a>**formal\_port\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="function_identifier"></a>**function\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="generate_block_identifier"></a>**generate\_block\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="genvar_identifier"></a>**genvar\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="hierarchical_array_identifier"></a>**hierarchical\_array\_identifier**
:  <a href="#hierarchical_identifier">hierarchical\_identifier</a>
  
<a name="hierarchical_block_identifier"></a>**hierarchical\_block\_identifier**
:  <a href="#hierarchical_identifier">hierarchical\_identifier</a>
  
<a name="hierarchical_event_identifier"></a>**hierarchical\_event\_identifier**
:  <a href="#hierarchical_identifier">hierarchical\_identifier</a>
  
<a name="hierarchical_identifier"></a>**hierarchical\_identifier**
:  \[ <font color="purple"><b>$root</b></font> <font color="purple"><b>.</b></font> ]   { <a href="#identifier">identifier</a> <a href="#constant_bit_select">constant\_bit\_select</a> <font color="purple"><b>.</b></font> }  <a href="#identifier">identifier</a>
  
<a name="hierarchical_net_identifier"></a>**hierarchical\_net\_identifier**
:  <a href="#hierarchical_identifier">hierarchical\_identifier</a>
  
<a name="hierarchical_parameter_identifier"></a>**hierarchical\_parameter\_identifier**
:  <a href="#hierarchical_identifier">hierarchical\_identifier</a>
  
<a name="hierarchical_property_identifier"></a>**hierarchical\_property\_identifier**
:  <a href="#hierarchical_identifier">hierarchical\_identifier</a>
  
<a name="hierarchical_sequence_identifier"></a>**hierarchical\_sequence\_identifier**
:  <a href="#hierarchical_identifier">hierarchical\_identifier</a>
  
<a name="hierarchical_task_identifier"></a>**hierarchical\_task\_identifier**
:  <a href="#hierarchical_identifier">hierarchical\_identifier</a>
  
<a name="hierarchical_tf_identifier"></a>**hierarchical\_tf\_identifier**
:  <a href="#hierarchical_identifier">hierarchical\_identifier</a>
  
<a name="hierarchical_variable_identifier"></a>**hierarchical\_variable\_identifier**
:  <a href="#hierarchical_identifier">hierarchical\_identifier</a>
  
<a name="identifier"></a>**identifier**
:  <a href="#simple_identifier">simple\_identifier</a>  
        | <a href="#escaped_identifier">escaped\_identifier</a>
  
<a name="index_variable_identifier"></a>**index\_variable\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="interface_identifier"></a>**interface\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="interface_instance_identifier"></a>**interface\_instance\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="inout_port_identifier"></a>**inout\_port\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="input_port_identifier"></a>**input\_port\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="instance_identifier"></a>**instance\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="library_identifier"></a>**library\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="member_identifier"></a>**member\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="method_identifier"></a>**method\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="modport_identifier"></a>**modport\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="module_identifier"></a>**module\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="net_identifier"></a>**net\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="net_type_identifier"></a>**net\_type\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="output_port_identifier"></a>**output\_port\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="package_identifier"></a>**package\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="package_scope"></a>**package\_scope**
:  <a href="#package_identifier">package\_identifier</a> <font color="purple"><b>::</b></font>  
        | <font color="purple"><b>$unit</b></font> <font color="purple"><b>::</b></font>
  
<a name="parameter_identifier"></a>**parameter\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="port_identifier"></a>**port\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="production_identifier"></a>**production\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="program_identifier"></a>**program\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="property_identifier"></a>**property\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="ps_class_identifier"></a>**ps\_class\_identifier**
:  \[ <a href="#package_scope">package\_scope</a> ]  <a href="#class_identifier">class\_identifier</a>
  
<a name="ps_covergroup_identifier"></a>**ps\_covergroup\_identifier**
:  \[ <a href="#package_scope">package\_scope</a> ]  <a href="#covergroup_identifier">covergroup\_identifier</a>
  
<a name="ps_checker_identifier"></a>**ps\_checker\_identifier**
:  \[ <a href="#package_scope">package\_scope</a> ]  <a href="#checker_identifier">checker\_identifier</a>
  
<a name="ps_identifier"></a>**ps\_identifier**
:  \[ <a href="#package_scope">package\_scope</a> ]  <a href="#identifier">identifier</a>
  
<a name="ps_or_hierarchical_array_identifier"></a>**ps\_or\_hierarchical\_array\_identifier**
:  \[ <a href="#implicit_class_handle">implicit\_class\_handle</a> <font color="purple"><b>.</b></font> | <a href="#class_scope">class\_scope</a> | <a href="#package_scope">package\_scope</a> ]  <a href="#hierarchical_array_identifier">hierarchical\_array\_identifier</a>
  
<a name="ps_or_hierarchical_net_identifier"></a>**ps\_or\_hierarchical\_net\_identifier**
:  \[ <a href="#package_scope">package\_scope</a> ]  <a href="#net_identifier">net\_identifier</a>  
        | <a href="#hierarchical_net_identifier">hierarchical\_net\_identifier</a>
  
<a name="ps_or_hierarchical_property_identifier"></a>**ps\_or\_hierarchical\_property\_identifier**
:  \[ <a href="#package_scope">package\_scope</a> ]  <a href="#property_identifier">property\_identifier</a>  
        | <a href="#hierarchical_property_identifier">hierarchical\_property\_identifier</a>
  
<a name="ps_or_hierarchical_sequence_identifier"></a>**ps\_or\_hierarchical\_sequence\_identifier**
:  \[ <a href="#package_scope">package\_scope</a> ]  <a href="#sequence_identifier">sequence\_identifier</a>  
        | <a href="#hierarchical_sequence_identifier">hierarchical\_sequence\_identifier</a>
  
<a name="ps_or_hierarchical_tf_identifier"></a>**ps\_or\_hierarchical\_tf\_identifier**
:  \[ <a href="#package_scope">package\_scope</a> ]  <a href="#tf_identifier">tf\_identifier</a>  
        | <a href="#hierarchical_tf_identifier">hierarchical\_tf\_identifier</a>
  
<a name="ps_parameter_identifier"></a>**ps\_parameter\_identifier**
:  \[ <a href="#package_scope">package\_scope</a> | <a href="#class_scope">class\_scope</a> ]  <a href="#parameter_identifier">parameter\_identifier</a>  
        | { <a href="#generate_block_identifier">generate\_block\_identifier</a>  \[ <font color="purple"><b>\[</b></font> <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>]</b></font> ]  <font color="purple"><b>.</b></font> }  <a href="#parameter_identifier">parameter\_identifier</a>
  
<a name="ps_type_identifier"></a>**ps\_type\_identifier**
:  \[ <font color="purple"><b>local::</b></font> [^footnote_43] | <a href="#package_scope">package\_scope</a> ]  <a href="#type_identifier">type\_identifier</a>
  
<a name="sequence_identifier"></a>**sequence\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="signal_identifier"></a>**signal\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="simple_identifier"></a>**simple\_identifier**[^footnote_49]
:  <em>\[a-zA-Z\_\]</em> { <em> \[a-zA-Z0-9\_$]</em> }
  
<a name="specparam_identifier"></a>**specparam\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="system_tf_identifier"></a>**system\_tf\_identifier**[^footnote_50]
:  <font color="purple"><b>$</b></font> <em>\[a-zA-Z0-9\_$\] { \[a-zA-Z0-9\_$\] }</em>
  
<a name="task_identifier"></a>**task\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="tf_identifier"></a>**tf\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="terminal_identifier"></a>**terminal\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="topmodule_identifier"></a>**topmodule\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="type_identifier"></a>**type\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="udp_identifier"></a>**udp\_identifier**
:  <a href="#identifier">identifier</a>
  
<a name="variable_identifier"></a>**variable\_identifier**
:  <a href="#identifier">identifier</a>
  
### White space
  
<a name="white_space"></a>**white\_space**
:  <em>space</em>  
        | <em>tab</em>  
        | <em>newline</em>  
        | <em>eof</em>[^footnote_51]
  
## Footnotes normative
  
[^footnote_1]: (1) A package\_import\_declaration in a module\_ansi\_header, interface\_ansi\_header, or program\_ansi\_header shall be followed by a parameter\_port\_list or list\_of\_port\_declarations, or both.
  
[^footnote_2]: (2) The list\_of\_port\_declarations syntax is explained in 23.2.2.2, which also imposes various semantic restrictions, e.g., a ref port shall be of a variable type and an inout port shall not be. It shall be illegal to initialize a port that is not a variable output port or to specify a default value for a port that is not an input port.
  
[^footnote_3]: (3) A timeunits\_declaration shall be legal as a non\_port\_module\_item, non\_port\_interface\_item, non\_port\_program\_item, or package\_item only if it repeats and matches a previous timeunits\_declaration within the same time scope.
  
[^footnote_4]: (4) If the bind\_target\_scope is an interface\_identifier or the bind\_target\_instance is an interface\_instance\_identifier, then the bind\_instantiation shall be an interface\_instantiation or a checker\_instantiation.
  
[^footnote_5]: (5) It shall be illegal for a program\_generate\_item to include any item that would be illegal in a program\_declaration outside a program\_generate\_item.
  
[^footnote_6]: (6) It shall be illegal for a checker\_generate\_item to include any item that would be illegal in a checker\_declaration outside a checker\_generate\_item.
  
[^footnote_7]: (7) In a parameter\_declaration that is a class\_item, the parameter keyword shall be a synonym for the localparam keyword.
  
[^footnote_8]: (8) In any one declaration, only one of protected or local is allowed, only one of rand or randc is allowed, and static and/or virtual can appear only once.
  
[^footnote_9]: (9) The open\_range\_list in a uniqueness\_constraint shall contain only expressions that denote scalar or array variables, as described in 18.5.5.
  
[^footnote_10]: (10) In a data\_declaration that is not within a procedural context, it shall be illegal to use the automatic keyword. In a data\_declaration, it shall be illegal to omit the explicit data\_type before a list\_of\_variable\_decl\_assignments unless the var keyword is used.
  
[^footnote_11]: (11) It shall be illegal to have an import statement directly within a class scope.
  
[^footnote_12]: (12) A charge strength shall only be used with the trireg keyword. When the vectored or scalared keyword is used, there shall be at least one packed dimension.
  
[^footnote_13]: (13) When a packed dimension is used with the struct or union keyword, the packed keyword shall also be used.
  
[^footnote_14]: (14) When a type\_reference is used in a net declaration, it shall be preceded by a net type keyword; and when it is used in a variable declaration, it shall be preceded by the var keyword.
  
[^footnote_15]: (15) A type\_identifier shall be legal as an enum\_base\_type if it denotes an integer\_atom\_type, with which an additional packed dimension is not permitted, or an integer\_vector\_type.
  
[^footnote_16]: (16) It shall be legal to declare a void struct\_union\_member only within tagged unions.
  
[^footnote_17]: (17) An expression that is used as the argument in a type\_reference shall not contain any hierarchical references or references to elements of dynamic objects.
  
[^footnote_18]: (18) It shall be legal to omit the constant\_param\_expression from a param\_assignment or the data\_type from a type\_assignment only within a parameter\_port\_list. However, it shall not be legal to omit them from localparam declarations in a parameter\_port\_list.
  
[^footnote_19]: (19) In a shallow copy, the expression shall evaluate to an object handle.
  
[^footnote_20]: (20) In packed\_dimension, unsized\_dimension is permitted only as the sole packed dimension in a DPI import declaration; see dpi\_function\_proto and dpi\_task\_proto.
  
[^footnote_21]: (21) dpi\_function\_proto return types are restricted to small values, per 35.5.5.
  
[^footnote_22]: (22) Formals of dpi\_function\_proto and dpi\_task\_proto cannot use pass-by-reference mode, and class types cannot be passed at all; see 35.5.6 for a description of allowed types for DPI formal arguments.
  
[^footnote_23]: (23) In a tf\_port\_item, it shall be illegal to omit the explicit port\_identifier except within a function\_prototype or task\_prototype.
  
[^footnote_24]: (24) The matches operator shall have higher precedence than the && and || operators.
  
[^footnote_25]: (25) It shall be legal to use the $ primary in an open\_value\_range or covergroup\_value\_range of the form \[expression :$] or \[$:expression].
  
[^footnote_26]: (26) The result of this expression shall be assignment compatible with an integral type.
  
[^footnote_27]: (27) This expression is restricted as described in 19.5.1.2.
  
[^footnote_28]: (28) This expression is restricted as described in 19.5.
  
[^footnote_29]: (29) The .\* token shall appear at most once in a list of port connections.
  
[^footnote_30]: (30) Within an interface\_declaration, it shall only be legal for a generate\_item to be an interface\_or\_generate\_item. Within a module\_declaration, except when also within an interface\_declaration, it shall only be legal for a generate\_item to be a module\_or\_generate\_item. Within a checker\_declaration, it shall only be legal for a generate\_item to be a checker\_or\_generate\_item.
  
[^footnote_31]: (31) Parentheses are required when an event expression that contains comma-separated event expressions is passed as an actual argument using positional binding.
  
[^footnote_32]: (32) In a constant\_assignment\_pattern\_expression, all member expressions shall be constant expressions.
  
[^footnote_33]: (33) Embedded spaces are illegal.
  
[^footnote_34]: (34) In a multiple\_concatenation, it shall be illegal for the multiplier not to be a constant\_expression unless the type of the concatenation is string.
  
[^footnote_35]: (35) { } shall only be legal in the context of a queue.
  
[^footnote_36]: (36) In a constant\_function\_call, all arguments shall be constant\_expressions.
  
[^footnote_37]: (37) It shall be illegal to omit the parentheses in a tf\_call unless the subroutine is a task, void function, or class method. If the subroutine is a nonvoid class function method, it shall be illegal to omit the parentheses if the call is directly recursive.
  
[^footnote_38]: (38) In a randomize\_call that is not a method call of an object of class type (i.e., a scope randomize), the optional parenthesized identifier\_list after the keyword with shall be illegal, and the use of null shall be illegal.
  
[^footnote_39]: (39) A genvar\_identifier shall be legal in a constant\_primary only within a genvar\_expression.
  
[^footnote_40]: (40) It shall be legal to use a type\_reference constant\_primary as the casting\_type in a static cast. It shall be illegal for a type\_reference constant\_primary to be used with any operators except the equality/inequality and case equality/ inequality operators.
  
[^footnote_41]: (41) implicit\_class\_handle shall only appear within the scope of a class\_declaration or out-of-block method declaration.
  
[^footnote_42]: (42) The $ primary shall be legal only in a select for a queue variable, in an open\_value\_range, covergroup\_value\_range, integer\_covergroup\_expression, or as an entire sequence\_actual\_arg or property\_actual\_arg.
  
[^footnote_43]: (43) The local:: qualifier shall only appear within the scope of an inline constraint block.
  
[^footnote_44]: (44) The unsigned number or fixed-point number in time\_literal shall not be followed by white\_space.
  
[^footnote_45]: (45) In a constant\_let\_expression, all arguments shall be constant\_expressions and its right-hand side shall be a constant\_expression itself provided that its formal arguments are treated as constant\_primary there.
  
[^footnote_46]: (46) In a variable\_lvalue that is assigned within a sequence\_match\_item any select shall also be a constant\_select.
  
[^footnote_47]: (47) A streaming\_concatenation expression shall not be nested within another variable\_lvalue. A streaming\_concatenation shall not be the target of the increment or decrement operator nor the target of any assignment operator except the simple ( = ) or nonblocking assignment ( <= ) operator.
  
[^footnote_48]: (48) The apostrophe ( ' ) in unbased\_unsized\_literal shall not be followed by white\_space.
  
[^footnote_49]: (49) A simple\_identifier or c\_identifier shall start with an alpha or underscore ( \_ ) character, shall have at least one character, and shall not have any spaces.
  
[^footnote_50]: (50) The $ character in a system\_tf\_identifier shall not be followed by white\_space. A system\_tf\_identifier shall not be escaped.
  
[^footnote_51]: (51) End of file.
