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

Get the full Language Reference Manual, free of charge, at <http://standards.ieee.org/getieee/1800/download/1800-2012.pdf>

Sigasi has created this browsable version of the grammar, hoping that it would be useful to you, but without any warranty whatsoever.

[More browsable grammars of Hardware Description and Verification languages][/tag/ebnf].
</em>  
## Source text
  
### Library source text
  
**library\_text**{: #library_text }
:	 { <a href="#library_description">library\_description</a>  }  
  
**library\_description**{: #library_description }
:	<a href="#library_declaration">library\_declaration</a>   
        | <a href="#include_statement">include\_statement</a>   
        | <a href="#config_declaration">config\_declaration</a>   
        | <font color="purple"><b>;</b></font> 
  
**library\_declaration**{: #library_declaration }
:	<font color="purple"><b>library</b></font> <a href="#library_identifier">library\_identifier</a> <a href="#file_path_spec">file\_path\_spec</a>  { <font color="purple"><b>,</b></font> <a href="#file_path_spec">file\_path\_spec</a>  }   \[ <font color="purple"><b>-incdir</b></font> <a href="#file_path_spec">file\_path\_spec</a>  { <font color="purple"><b>,</b></font> <a href="#file_path_spec">file\_path\_spec</a>  }   ]  <font color="purple"><b>;</b></font> 
  
**include\_statement**{: #include_statement }
:	<font color="purple"><b>include</b></font> <a href="#file_path_spec">file\_path\_spec</a> <font color="purple"><b>;</b></font> 
  
**file\_path\_spec**{: #file_path_spec }
:	<em>external</em> <em> syntax is not defined in standard </em>
  
### SystemVerilog source text
  
**source\_text**{: #source_text }
:	 \[ <a href="#timeunits_declaration">timeunits\_declaration</a>  ]   { <a href="#description">description</a>  }  
  
**description**{: #description }
:	<a href="#module_declaration">module\_declaration</a>   
        | <a href="#udp_declaration">udp\_declaration</a>   
        | <a href="#interface_declaration">interface\_declaration</a>   
        | <a href="#program_declaration">program\_declaration</a>   
        | <a href="#package_declaration">package\_declaration</a>   
        |  { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#package_item">package\_item</a>   
        |  { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#bind_directive">bind\_directive</a>   
        | <a href="#config_declaration">config\_declaration</a> 
  
**module\_nonansi\_header**{: #module_nonansi_header }
:	 { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#module_keyword">module\_keyword</a>  \[ <a href="#lifetime">lifetime</a>  ]  <a href="#module_identifier">module\_identifier</a>  { <a href="#package_import_declaration">package\_import\_declaration</a>  }   \[ <a href="#parameter_port_list">parameter\_port\_list</a>  ]  <a href="#list_of_ports">list\_of\_ports</a> <font color="purple"><b>;</b></font> 
  
**module\_ansi\_header**{: #module_ansi_header }
:	 { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#module_keyword">module\_keyword</a>  \[ <a href="#lifetime">lifetime</a>  ]  <a href="#module_identifier">module\_identifier</a>  { <a href="#package_import_declaration">package\_import\_declaration</a>  }  [^footnote_1]  \[ <a href="#parameter_port_list">parameter\_port\_list</a>  ]   \[ <a href="#list_of_port_declarations">list\_of\_port\_declarations</a>  ]  <font color="purple"><b>;</b></font> 
  
**module\_declaration**{: #module_declaration }
:	<a href="#module_nonansi_header">module\_nonansi\_header</a>  \[ <a href="#timeunits_declaration">timeunits\_declaration</a>  ]   { <a href="#module_item">module\_item</a>  }  <font color="purple"><b>endmodule</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#module_identifier">module\_identifier</a>  ]    
        | <a href="#module_ansi_header">module\_ansi\_header</a>  \[ <a href="#timeunits_declaration">timeunits\_declaration</a>  ]   { <a href="#non_port_module_item">non\_port\_module\_item</a>  }  <font color="purple"><b>endmodule</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#module_identifier">module\_identifier</a>  ]    
        |  { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#module_keyword">module\_keyword</a>  \[ <a href="#lifetime">lifetime</a>  ]  <a href="#module_identifier">module\_identifier</a> <font color="purple"><b>(</b></font> <font color="purple"><b>.\*</b></font> <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font>  \[ <a href="#timeunits_declaration">timeunits\_declaration</a>  ]   { <a href="#module_item">module\_item</a>  }  <font color="purple"><b>endmodule</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#module_identifier">module\_identifier</a>  ]    
        | <font color="purple"><b>extern</b></font> <a href="#module_nonansi_header">module\_nonansi\_header</a>   
        | <font color="purple"><b>extern</b></font> <a href="#module_ansi_header">module\_ansi\_header</a> 
  
**module\_keyword**{: #module_keyword }
:	<font color="purple"><b>module</b></font>   
        | <font color="purple"><b>macromodule</b></font> 
  
**interface\_declaration**{: #interface_declaration }
:	<a href="#interface_nonansi_header">interface\_nonansi\_header</a>  \[ <a href="#timeunits_declaration">timeunits\_declaration</a>  ]   { <a href="#interface_item">interface\_item</a>  }  <font color="purple"><b>endinterface</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#interface_identifier">interface\_identifier</a>  ]    
        | <a href="#interface_ansi_header">interface\_ansi\_header</a>  \[ <a href="#timeunits_declaration">timeunits\_declaration</a>  ]   { <a href="#non_port_interface_item">non\_port\_interface\_item</a>  }  <font color="purple"><b>endinterface</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#interface_identifier">interface\_identifier</a>  ]    
        |  { <a href="#attribute_instance">attribute\_instance</a>  }  <font color="purple"><b>interface</b></font> <a href="#interface_identifier">interface\_identifier</a> <font color="purple"><b>(</b></font> <font color="purple"><b>.\*</b></font> <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font>  \[ <a href="#timeunits_declaration">timeunits\_declaration</a>  ]   { <a href="#interface_item">interface\_item</a>  }  <font color="purple"><b>endinterface</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#interface_identifier">interface\_identifier</a>  ]    
        | <font color="purple"><b>extern</b></font> <a href="#interface_nonansi_header">interface\_nonansi\_header</a>   
        | <font color="purple"><b>extern</b></font> <a href="#interface_ansi_header">interface\_ansi\_header</a> 
  
**interface\_nonansi\_header**{: #interface_nonansi_header }
:	 { <a href="#attribute_instance">attribute\_instance</a>  }  <font color="purple"><b>interface</b></font>  \[ <a href="#lifetime">lifetime</a>  ]  <a href="#interface_identifier">interface\_identifier</a>  { <a href="#package_import_declaration">package\_import\_declaration</a>  }   \[ <a href="#parameter_port_list">parameter\_port\_list</a>  ]  <a href="#list_of_ports">list\_of\_ports</a> <font color="purple"><b>;</b></font> 
  
**interface\_ansi\_header**{: #interface_ansi_header }
:	 { <a href="#attribute_instance">attribute\_instance</a>  }  <font color="purple"><b>interface</b></font>  \[ <a href="#lifetime">lifetime</a>  ]  <a href="#interface_identifier">interface\_identifier</a>  { <a href="#package_import_declaration">package\_import\_declaration</a>  }   \[ <a href="#parameter_port_list">parameter\_port\_list</a>  ]   \[ <a href="#list_of_port_declarations">list\_of\_port\_declarations</a>  ]  <font color="purple"><b>;</b></font> 
  
**program\_declaration**{: #program_declaration }
:	<a href="#program_nonansi_header">program\_nonansi\_header</a>  \[ <a href="#timeunits_declaration">timeunits\_declaration</a>  ]   { <a href="#program_item">program\_item</a>  }  <font color="purple"><b>endprogram</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#program_identifier">program\_identifier</a>  ]    
        | <a href="#program_ansi_header">program\_ansi\_header</a>  \[ <a href="#timeunits_declaration">timeunits\_declaration</a>  ]   { <a href="#non_port_program_item">non\_port\_program\_item</a>  }  <font color="purple"><b>endprogram</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#program_identifier">program\_identifier</a>  ]    
        |  { <a href="#attribute_instance">attribute\_instance</a>  }  <font color="purple"><b>program</b></font> <a href="#program_identifier">program\_identifier</a> <font color="purple"><b>(</b></font> <font color="purple"><b>.\*</b></font> <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font>  \[ <a href="#timeunits_declaration">timeunits\_declaration</a>  ]   { <a href="#program_item">program\_item</a>  }  <font color="purple"><b>endprogram</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#program_identifier">program\_identifier</a>  ]    
        | <font color="purple"><b>extern</b></font> <a href="#program_nonansi_header">program\_nonansi\_header</a>   
        | <font color="purple"><b>extern</b></font> <a href="#program_ansi_header">program\_ansi\_header</a> 
  
**program\_nonansi\_header**{: #program_nonansi_header }
:	 { <a href="#attribute_instance">attribute\_instance</a>  }  <font color="purple"><b>program</b></font>  \[ <a href="#lifetime">lifetime</a>  ]  <a href="#program_identifier">program\_identifier</a>  { <a href="#package_import_declaration">package\_import\_declaration</a>  }   \[ <a href="#parameter_port_list">parameter\_port\_list</a>  ]  <a href="#list_of_ports">list\_of\_ports</a> <font color="purple"><b>;</b></font> 
  
**program\_ansi\_header**{: #program_ansi_header }
:	 { <a href="#attribute_instance">attribute\_instance</a>  }  <font color="purple"><b>program</b></font>  \[ <a href="#lifetime">lifetime</a>  ]  <a href="#program_identifier">program\_identifier</a>  { <a href="#package_import_declaration">package\_import\_declaration</a>  }  [^footnote_1]  \[ <a href="#parameter_port_list">parameter\_port\_list</a>  ]   \[ <a href="#list_of_port_declarations">list\_of\_port\_declarations</a>  ]  <font color="purple"><b>;</b></font> 
  
**checker\_declaration**{: #checker_declaration }
:	<font color="purple"><b>checker</b></font> <a href="#checker_identifier">checker\_identifier</a>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#checker_port_list">checker\_port\_list</a>  ]  <font color="purple"><b>)</b></font>  ]  <font color="purple"><b>;</b></font>  {  { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#checker_or_generate_item">checker\_or\_generate\_item</a>  }  <font color="purple"><b>endchecker</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#checker_identifier">checker\_identifier</a>  ]  
  
**class\_declaration**{: #class_declaration }
:	 \[ <font color="purple"><b>virtual</b></font>  ]  <font color="purple"><b>class</b></font>  \[ <a href="#lifetime">lifetime</a>  ]  <a href="#class_identifier">class\_identifier</a>  \[ <a href="#parameter_port_list">parameter\_port\_list</a>  ]   \[ <font color="purple"><b>extends</b></font> <a href="#class_type">class\_type</a>  \[ <font color="purple"><b>(</b></font> <a href="#list_of_arguments">list\_of\_arguments</a> <font color="purple"><b>)</b></font>  ]   ]   \[ <font color="purple"><b>implements</b></font> <a href="#interface_class_type">interface\_class\_type</a>  { <font color="purple"><b>,</b></font> <a href="#interface_class_type">interface\_class\_type</a>  }   ]  <font color="purple"><b>;</b></font>  { <a href="#class_item">class\_item</a>  }  <font color="purple"><b>endclass</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#class_identifier">class\_identifier</a>  ]  
  
**interface\_class\_type**{: #interface_class_type }
:	<a href="#ps_class_identifier">ps\_class\_identifier</a>  \[ <a href="#parameter_value_assignment">parameter\_value\_assignment</a>  ]  
  
**interface\_class\_declaration**{: #interface_class_declaration }
:	<font color="purple"><b>interface</b></font> <font color="purple"><b>class</b></font> <a href="#class_identifier">class\_identifier</a>  \[ <a href="#parameter_port_list">parameter\_port\_list</a>  ]   \[ <font color="purple"><b>extends</b></font> <a href="#interface_class_type">interface\_class\_type</a>  { <font color="purple"><b>,</b></font> <a href="#interface_class_type">interface\_class\_type</a>  }   ]  <font color="purple"><b>;</b></font>  { <a href="#interface_class_item">interface\_class\_item</a>  }  <font color="purple"><b>endclass</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#class_identifier">class\_identifier</a>  ]  
  
**interface\_class\_item**{: #interface_class_item }
:	<a href="#type_declaration">type\_declaration</a>   
        |  { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#interface_class_method">interface\_class\_method</a>   
        | <a href="#local_parameter_declaration">local\_parameter\_declaration</a> [^footnote_7] <font color="purple"><b>;</b></font>   
        | <a href="#parameter_declaration">parameter\_declaration</a> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>;</b></font> 
  
**interface\_class\_method**{: #interface_class_method }
:	<font color="purple"><b>pure</b></font> <font color="purple"><b>virtual</b></font> <a href="#method_prototype">method\_prototype</a> <font color="purple"><b>;</b></font> 
  
**package\_declaration**{: #package_declaration }
:	 { <a href="#attribute_instance">attribute\_instance</a>  }  <font color="purple"><b>package</b></font>  \[ <a href="#lifetime">lifetime</a>  ]  <a href="#package_identifier">package\_identifier</a> <font color="purple"><b>;</b></font>  \[ <a href="#timeunits_declaration">timeunits\_declaration</a>  ]   {  { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#package_item">package\_item</a>  }  <font color="purple"><b>endpackage</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#package_identifier">package\_identifier</a>  ]  
  
**timeunits\_declaration**{: #timeunits_declaration }
:	<font color="purple"><b>timeunit</b></font> <a href="#time_literal">time\_literal</a>  \[ <font color="purple"><b>/</b></font> <a href="#time_literal">time\_literal</a>  ]  <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>timeprecision</b></font> <a href="#time_literal">time\_literal</a> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>timeunit</b></font> <a href="#time_literal">time\_literal</a> <font color="purple"><b>;</b></font> <font color="purple"><b>timeprecision</b></font> <a href="#time_literal">time\_literal</a> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>timeprecision</b></font> <a href="#time_literal">time\_literal</a> <font color="purple"><b>;</b></font> <font color="purple"><b>timeunit</b></font> <a href="#time_literal">time\_literal</a> <font color="purple"><b>;</b></font> 
  
## Module parameters and ports
  
**parameter\_port\_list**{: #parameter_port_list }
:	<font color="purple"><b>#</b></font> <font color="purple"><b>(</b></font> <a href="#list_of_param_assignments">list\_of\_param\_assignments</a>  { <font color="purple"><b>,</b></font> <a href="#parameter_port_declaration">parameter\_port\_declaration</a>  }  <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>#</b></font> <font color="purple"><b>(</b></font> <a href="#parameter_port_declaration">parameter\_port\_declaration</a>  { <font color="purple"><b>,</b></font> <a href="#parameter_port_declaration">parameter\_port\_declaration</a>  }  <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>#</b></font> <font color="purple"><b>(</b></font> <font color="purple"><b>)</b></font> 
  
**parameter\_port\_declaration**{: #parameter_port_declaration }
:	<a href="#parameter_declaration">parameter\_declaration</a>   
        | <a href="#local_parameter_declaration">local\_parameter\_declaration</a>   
        | <a href="#data_type">data\_type</a> <a href="#list_of_param_assignments">list\_of\_param\_assignments</a>   
        | <font color="purple"><b>type</b></font> <a href="#list_of_type_assignments">list\_of\_type\_assignments</a> 
  
**list\_of\_ports**{: #list_of_ports }
:	<font color="purple"><b>(</b></font> <a href="#port">port</a>  { <font color="purple"><b>,</b></font> <a href="#port">port</a>  }  <font color="purple"><b>)</b></font> 
  
**list\_of\_port\_declarations**{: #list_of_port_declarations }[^footnote_2]
:	<font color="purple"><b>(</b></font>  \[  { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#ansi_port_declaration">ansi\_port\_declaration</a>  { <font color="purple"><b>,</b></font>  { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#ansi_port_declaration">ansi\_port\_declaration</a>  }   ]  <font color="purple"><b>)</b></font> 
  
**port\_declaration**{: #port_declaration }
:	 { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#inout_declaration">inout\_declaration</a>   
        |  { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#input_declaration">input\_declaration</a>   
        |  { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#output_declaration">output\_declaration</a>   
        |  { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#ref_declaration">ref\_declaration</a>   
        |  { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#interface_port_declaration">interface\_port\_declaration</a> 
  
**port**{: #port }
:	 \[ <a href="#port_expression">port\_expression</a>  ]    
        | <font color="purple"><b>.</b></font> <a href="#port_identifier">port\_identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#port_expression">port\_expression</a>  ]  <font color="purple"><b>)</b></font> 
  
**port\_expression**{: #port_expression }
:	<a href="#port_reference">port\_reference</a>   
        | <font color="purple"><b>{</b></font> <a href="#port_reference">port\_reference</a>  { <font color="purple"><b>,</b></font> <a href="#port_reference">port\_reference</a>  }  <font color="purple"><b>}</b></font> 
  
**port\_reference**{: #port_reference }
:	<a href="#port_identifier">port\_identifier</a> <a href="#constant_select">constant\_select</a> 
  
**port\_direction**{: #port_direction }
:	<font color="purple"><b>input</b></font>   
        | <font color="purple"><b>output</b></font>   
        | <font color="purple"><b>inout</b></font>   
        | <font color="purple"><b>ref</b></font> 
  
**net\_port\_header**{: #net_port_header }
:	 \[ <a href="#port_direction">port\_direction</a>  ]  <a href="#net_port_type">net\_port\_type</a> 
  
**variable\_port\_header**{: #variable_port_header }
:	 \[ <a href="#port_direction">port\_direction</a>  ]  <a href="#variable_port_type">variable\_port\_type</a> 
  
**interface\_port\_header**{: #interface_port_header }
:	<a href="#interface_identifier">interface\_identifier</a>  \[ <font color="purple"><b>.</b></font> <a href="#modport_identifier">modport\_identifier</a>  ]    
        | <font color="purple"><b>interface</b></font>  \[ <font color="purple"><b>.</b></font> <a href="#modport_identifier">modport\_identifier</a>  ]  
  
**ansi\_port\_declaration**{: #ansi_port_declaration }
:	 \[ <a href="#net_port_header">net\_port\_header</a>   
         | <a href="#interface_port_header">interface\_port\_header</a>  ]  <a href="#port_identifier">port\_identifier</a>  { <a href="#unpacked_dimension">unpacked\_dimension</a>  }   \[ <font color="purple"><b>=</b></font> <a href="#constant_expression">constant\_expression</a>  ]    
        |  \[ <a href="#variable_port_header">variable\_port\_header</a>  ]  <a href="#port_identifier">port\_identifier</a>  { <a href="#variable_dimension">variable\_dimension</a>  }   \[ <font color="purple"><b>=</b></font> <a href="#constant_expression">constant\_expression</a>  ]    
        |  \[ <a href="#port_direction">port\_direction</a>  ]  <font color="purple"><b>.</b></font> <a href="#port_identifier">port\_identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#expression">expression</a>  ]  <font color="purple"><b>)</b></font> 
  
## Module items
  
**elaboration\_system\_task**{: #elaboration_system_task }
:	<font color="purple"><b>$fatal</b></font>  \[ <font color="purple"><b>(</b></font> <a href="#finish_number">finish\_number</a>  \[ <font color="purple"><b>,</b></font> <a href="#list_of_arguments">list\_of\_arguments</a>  ]  <font color="purple"><b>)</b></font>  ]  <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>$error</b></font>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#list_of_arguments">list\_of\_arguments</a>  ]  <font color="purple"><b>)</b></font>  ]  <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>$warning</b></font>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#list_of_arguments">list\_of\_arguments</a>  ]  <font color="purple"><b>)</b></font>  ]  <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>$info</b></font>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#list_of_arguments">list\_of\_arguments</a>  ]  <font color="purple"><b>)</b></font>  ]  <font color="purple"><b>;</b></font> 
  
**finish\_number**{: #finish_number }
:	<font color="purple"><b>0</b></font>   
        | <font color="purple"><b>1</b></font>   
        | <font color="purple"><b>2</b></font> 
  
**module\_common\_item**{: #module_common_item }
:	<a href="#module_or_generate_item_declaration">module\_or\_generate\_item\_declaration</a>   
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
  
**module\_item**{: #module_item }
:	<a href="#port_declaration">port\_declaration</a> <font color="purple"><b>;</b></font>   
        | <a href="#non_port_module_item">non\_port\_module\_item</a> 
  
**module\_or\_generate\_item**{: #module_or_generate_item }
:	 { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#parameter_override">parameter\_override</a>   
        |  { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#gate_instantiation">gate\_instantiation</a>   
        |  { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#udp_instantiation">udp\_instantiation</a>   
        |  { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#module_instantiation">module\_instantiation</a>   
        |  { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#module_common_item">module\_common\_item</a> 
  
**module\_or\_generate\_item\_declaration**{: #module_or_generate_item_declaration }
:	<a href="#package_or_generate_item_declaration">package\_or\_generate\_item\_declaration</a>   
        | <a href="#genvar_declaration">genvar\_declaration</a>   
        | <a href="#clocking_declaration">clocking\_declaration</a>   
        | <font color="purple"><b>default</b></font> <font color="purple"><b>clocking</b></font> <a href="#clocking_identifier">clocking\_identifier</a> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>default</b></font> <font color="purple"><b>disable</b></font> <font color="purple"><b>iff</b></font> <a href="#expression_or_dist">expression\_or\_dist</a> <font color="purple"><b>;</b></font> 
  
**non\_port\_module\_item**{: #non_port_module_item }
:	<a href="#generate_region">generate\_region</a>   
        | <a href="#module_or_generate_item">module\_or\_generate\_item</a>   
        | <a href="#specify_block">specify\_block</a>   
        |  { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#specparam_declaration">specparam\_declaration</a>   
        | <a href="#program_declaration">program\_declaration</a>   
        | <a href="#module_declaration">module\_declaration</a>   
        | <a href="#interface_declaration">interface\_declaration</a>   
        | <a href="#timeunits_declaration">timeunits\_declaration</a> [^footnote_3] 
  
**parameter\_override**{: #parameter_override }
:	<font color="purple"><b>defparam</b></font> <a href="#list_of_defparam_assignments">list\_of\_defparam\_assignments</a> <font color="purple"><b>;</b></font> 
  
**bind\_directive**{: #bind_directive }[^footnote_4]
:	<font color="purple"><b>bind</b></font> <a href="#bind_target_scope">bind\_target\_scope</a>  \[ <font color="purple"><b>:</b></font> <a href="#bind_target_instance_list">bind\_target\_instance\_list</a>  ]  <a href="#bind_instantiation">bind\_instantiation</a> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>bind</b></font> <a href="#bind_target_instance">bind\_target\_instance</a> <a href="#bind_instantiation">bind\_instantiation</a> <font color="purple"><b>;</b></font> 
  
**bind\_target\_scope**{: #bind_target_scope }
:	<a href="#module_identifier">module\_identifier</a>   
        | <a href="#interface_identifier">interface\_identifier</a> 
  
**bind\_target\_instance**{: #bind_target_instance }
:	<a href="#hierarchical_identifier">hierarchical\_identifier</a> <a href="#constant_bit_select">constant\_bit\_select</a> 
  
**bind\_target\_instance\_list**{: #bind_target_instance_list }
:	<a href="#bind_target_instance">bind\_target\_instance</a>  { <font color="purple"><b>,</b></font> <a href="#bind_target_instance">bind\_target\_instance</a>  }  
  
**bind\_instantiation**{: #bind_instantiation }
:	<a href="#program_instantiation">program\_instantiation</a>   
        | <a href="#module_instantiation">module\_instantiation</a>   
        | <a href="#interface_instantiation">interface\_instantiation</a>   
        | <a href="#checker_instantiation">checker\_instantiation</a> 
  
## Configuration source text
  
**config\_declaration**{: #config_declaration }
:	<font color="purple"><b>config</b></font> <a href="#config_identifier">config\_identifier</a> <font color="purple"><b>;</b></font>  { <a href="#local_parameter_declaration">local\_parameter\_declaration</a> <font color="purple"><b>;</b></font>  }  <a href="#design_statement">design\_statement</a>  { <a href="#config_rule_statement">config\_rule\_statement</a>  }  <font color="purple"><b>endconfig</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#config_identifier">config\_identifier</a>  ]  
  
**design\_statement**{: #design_statement }
:	<font color="purple"><b>design</b></font>  {  \[ <a href="#library_identifier">library\_identifier</a> <font color="purple"><b>.</b></font>  ]  <a href="#cell_identifier">cell\_identifier</a>  }  <font color="purple"><b>;</b></font> 
  
**config\_rule\_statement**{: #config_rule_statement }
:	<a href="#default_clause">default\_clause</a> <a href="#liblist_clause">liblist\_clause</a> <font color="purple"><b>;</b></font>   
        | <a href="#inst_clause">inst\_clause</a> <a href="#liblist_clause">liblist\_clause</a> <font color="purple"><b>;</b></font>   
        | <a href="#inst_clause">inst\_clause</a> <a href="#use_clause">use\_clause</a> <font color="purple"><b>;</b></font>   
        | <a href="#cell_clause">cell\_clause</a> <a href="#liblist_clause">liblist\_clause</a> <font color="purple"><b>;</b></font>   
        | <a href="#cell_clause">cell\_clause</a> <a href="#use_clause">use\_clause</a> <font color="purple"><b>;</b></font> 
  
**default\_clause**{: #default_clause }
:	<font color="purple"><b>default</b></font> 
  
**inst\_clause**{: #inst_clause }
:	<font color="purple"><b>instance</b></font> <a href="#inst_name">inst\_name</a> 
  
**inst\_name**{: #inst_name }
:	<a href="#topmodule_identifier">topmodule\_identifier</a>  { <font color="purple"><b>.</b></font> <a href="#instance_identifier">instance\_identifier</a>  }  
  
**cell\_clause**{: #cell_clause }
:	<font color="purple"><b>cell</b></font>  \[ <a href="#library_identifier">library\_identifier</a> <font color="purple"><b>.</b></font>  ]  <a href="#cell_identifier">cell\_identifier</a> 
  
**liblist\_clause**{: #liblist_clause }
:	<font color="purple"><b>liblist</b></font>  { <a href="#library_identifier">library\_identifier</a>  }  
  
**use\_clause**{: #use_clause }
:	<font color="purple"><b>use</b></font>  \[ <a href="#library_identifier">library\_identifier</a> <font color="purple"><b>.</b></font>  ]  <a href="#cell_identifier">cell\_identifier</a>  \[ <font color="purple"><b>:</b></font> <font color="purple"><b>config</b></font>  ]    
        | <font color="purple"><b>use</b></font> <a href="#named_parameter_assignment">named\_parameter\_assignment</a>  { <font color="purple"><b>,</b></font> <a href="#named_parameter_assignment">named\_parameter\_assignment</a>  }   \[ <font color="purple"><b>:</b></font> <font color="purple"><b>config</b></font>  ]    
        | <font color="purple"><b>use</b></font>  \[ <a href="#library_identifier">library\_identifier</a> <font color="purple"><b>.</b></font>  ]  <a href="#cell_identifier">cell\_identifier</a> <a href="#named_parameter_assignment">named\_parameter\_assignment</a>  { <font color="purple"><b>,</b></font> <a href="#named_parameter_assignment">named\_parameter\_assignment</a>  }   \[ <font color="purple"><b>:</b></font> <font color="purple"><b>config</b></font>  ]  
  
## Interface items
  
**interface\_or\_generate\_item**{: #interface_or_generate_item }
:	 { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#module_common_item">module\_common\_item</a>   
        |  { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#modport_declaration">modport\_declaration</a>   
        |  { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#extern_tf_declaration">extern\_tf\_declaration</a> 
  
**extern\_tf\_declaration**{: #extern_tf_declaration }
:	<font color="purple"><b>extern</b></font> <a href="#method_prototype">method\_prototype</a> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>extern</b></font> <font color="purple"><b>forkjoin</b></font> <a href="#task_prototype">task\_prototype</a> <font color="purple"><b>;</b></font> 
  
**interface\_item**{: #interface_item }
:	<a href="#port_declaration">port\_declaration</a> <font color="purple"><b>;</b></font>   
        | <a href="#non_port_interface_item">non\_port\_interface\_item</a> 
  
**non\_port\_interface\_item**{: #non_port_interface_item }
:	<a href="#generate_region">generate\_region</a>   
        | <a href="#interface_or_generate_item">interface\_or\_generate\_item</a>   
        | <a href="#program_declaration">program\_declaration</a>   
        | <a href="#interface_declaration">interface\_declaration</a>   
        | <a href="#timeunits_declaration">timeunits\_declaration</a> [^footnote_3] 
  
## Program items
  
**program\_item**{: #program_item }
:	<a href="#port_declaration">port\_declaration</a> <font color="purple"><b>;</b></font>   
        | <a href="#non_port_program_item">non\_port\_program\_item</a> 
  
**non\_port\_program\_item**{: #non_port_program_item }
:	 { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#continuous_assign">continuous\_assign</a>   
        |  { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#module_or_generate_item_declaration">module\_or\_generate\_item\_declaration</a>   
        |  { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#initial_construct">initial\_construct</a>   
        |  { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#final_construct">final\_construct</a>   
        |  { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#concurrent_assertion_item">concurrent\_assertion\_item</a>   
        | <a href="#timeunits_declaration">timeunits\_declaration</a> [^footnote_3]   
        | <a href="#program_generate_item">program\_generate\_item</a> 
  
**program\_generate\_item**{: #program_generate_item }[^footnote_5]
:	<a href="#loop_generate_construct">loop\_generate\_construct</a>   
        | <a href="#conditional_generate_construct">conditional\_generate\_construct</a>   
        | <a href="#generate_region">generate\_region</a>   
        | <a href="#elaboration_system_task">elaboration\_system\_task</a> 
  
## Checker items
  
**checker\_port\_list**{: #checker_port_list }
:	<a href="#checker_port_item">checker\_port\_item</a>  { <font color="purple"><b>,</b></font> <a href="#checker_port_item">checker\_port\_item</a>  }  
  
**checker\_port\_item**{: #checker_port_item }
:	 { <a href="#attribute_instance">attribute\_instance</a>  }   \[ <a href="#checker_port_direction">checker\_port\_direction</a>  ]  <a href="#property_formal_type">property\_formal\_type</a> <a href="#formal_port_identifier">formal\_port\_identifier</a>  { <a href="#variable_dimension">variable\_dimension</a>  }   \[ <font color="purple"><b>=</b></font> <a href="#property_actual_arg">property\_actual\_arg</a>  ]  
  
**checker\_port\_direction**{: #checker_port_direction }
:	<font color="purple"><b>input</b></font>   
        | <font color="purple"><b>output</b></font> 
  
**checker\_or\_generate\_item**{: #checker_or_generate_item }
:	<a href="#checker_or_generate_item_declaration">checker\_or\_generate\_item\_declaration</a>   
        | <a href="#initial_construct">initial\_construct</a>   
        | <a href="#always_construct">always\_construct</a>   
        | <a href="#final_construct">final\_construct</a>   
        | <a href="#assertion_item">assertion\_item</a>   
        | <a href="#continuous_assign">continuous\_assign</a>   
        | <a href="#checker_generate_item">checker\_generate\_item</a> 
  
**checker\_or\_generate\_item\_declaration**{: #checker_or_generate_item_declaration }
:	 \[ <font color="purple"><b>rand</b></font>  ]  <a href="#data_declaration">data\_declaration</a>   
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
  
**checker\_generate\_item**{: #checker_generate_item }[^footnote_6]
:	<a href="#loop_generate_construct">loop\_generate\_construct</a>   
        | <a href="#conditional_generate_construct">conditional\_generate\_construct</a>   
        | <a href="#generate_region">generate\_region</a>   
        | <a href="#elaboration_system_task">elaboration\_system\_task</a> 
  
## Class items
  
**class\_item**{: #class_item }
:	 { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#class_property">class\_property</a>   
        |  { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#class_method">class\_method</a>   
        |  { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#class_constraint">class\_constraint</a>   
        |  { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#class_declaration">class\_declaration</a>   
        |  { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#covergroup_declaration">covergroup\_declaration</a>   
        | <a href="#local_parameter_declaration">local\_parameter\_declaration</a> <font color="purple"><b>;</b></font>   
        | <a href="#parameter_declaration">parameter\_declaration</a> [^footnote_7] <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>;</b></font> 
  
**class\_property**{: #class_property }
:	 { <a href="#property_qualifier">property\_qualifier</a>  }  <a href="#data_declaration">data\_declaration</a>   
        | <font color="purple"><b>const</b></font>  { <a href="#class_item_qualifier">class\_item\_qualifier</a>  }  <a href="#data_type">data\_type</a> <a href="#const_identifier">const\_identifier</a>  \[ <font color="purple"><b>=</b></font> <a href="#constant_expression">constant\_expression</a>  ]  <font color="purple"><b>;</b></font> 
  
**class\_method**{: #class_method }
:	 { <a href="#method_qualifier">method\_qualifier</a>  }  <a href="#task_declaration">task\_declaration</a>   
        |  { <a href="#method_qualifier">method\_qualifier</a>  }  <a href="#function_declaration">function\_declaration</a>   
        | <font color="purple"><b>pure</b></font> <font color="purple"><b>virtual</b></font>  { <a href="#class_item_qualifier">class\_item\_qualifier</a>  }  <a href="#method_prototype">method\_prototype</a> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>extern</b></font>  { <a href="#method_qualifier">method\_qualifier</a>  }  <a href="#method_prototype">method\_prototype</a> <font color="purple"><b>;</b></font>   
        |  { <a href="#method_qualifier">method\_qualifier</a>  }  <a href="#class_constructor_declaration">class\_constructor\_declaration</a>   
        | <font color="purple"><b>extern</b></font>  { <a href="#method_qualifier">method\_qualifier</a>  }  <a href="#class_constructor_prototype">class\_constructor\_prototype</a> 
  
**class\_constructor\_prototype**{: #class_constructor_prototype }
:	<font color="purple"><b>function</b></font> <font color="purple"><b>new</b></font>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#tf_port_list">tf\_port\_list</a>  ]  <font color="purple"><b>)</b></font>  ]  <font color="purple"><b>;</b></font> 
  
**class\_constraint**{: #class_constraint }
:	<a href="#constraint_prototype">constraint\_prototype</a>   
        | <a href="#constraint_declaration">constraint\_declaration</a> 
  
**class\_item\_qualifier**{: #class_item_qualifier }[^footnote_8]
:	<font color="purple"><b>static</b></font>   
        | <font color="purple"><b>protected</b></font>   
        | <font color="purple"><b>local</b></font> 
  
**property\_qualifier**{: #property_qualifier }[^footnote_8]
:	<a href="#random_qualifier">random\_qualifier</a>   
        | <a href="#class_item_qualifier">class\_item\_qualifier</a> 
  
**random\_qualifier**{: #random_qualifier }[^footnote_8]
:	<font color="purple"><b>rand</b></font>   
        | <font color="purple"><b>randc</b></font> 
  
**method\_qualifier**{: #method_qualifier }[^footnote_8]
:	 \[ <font color="purple"><b>pure</b></font>  ]  <font color="purple"><b>virtual</b></font>   
        | <a href="#class_item_qualifier">class\_item\_qualifier</a> 
  
**method\_prototype**{: #method_prototype }
:	<a href="#task_prototype">task\_prototype</a>   
        | <a href="#function_prototype">function\_prototype</a> 
  
**class\_constructor\_declaration**{: #class_constructor_declaration }
:	<font color="purple"><b>function</b></font>  \[ <a href="#class_scope">class\_scope</a>  ]  <font color="purple"><b>new</b></font>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#tf_port_list">tf\_port\_list</a>  ]  <font color="purple"><b>)</b></font>  ]  <font color="purple"><b>;</b></font>  { <a href="#block_item_declaration">block\_item\_declaration</a>  }   \[ <font color="purple"><b>super</b></font> <font color="purple"><b>.</b></font> <font color="purple"><b>new</b></font>  \[ <font color="purple"><b>(</b></font> <a href="#list_of_arguments">list\_of\_arguments</a> <font color="purple"><b>)</b></font>  ]  <font color="purple"><b>;</b></font>  ]   { <a href="#function_statement_or_null">function\_statement\_or\_null</a>  }  <font color="purple"><b>endfunction</b></font>  \[ <font color="purple"><b>:</b></font> <font color="purple"><b>new</b></font>  ]  
  
## Constraints
  
**constraint\_declaration**{: #constraint_declaration }
:	 \[ <font color="purple"><b>static</b></font>  ]  <font color="purple"><b>constraint</b></font> <a href="#constraint_identifier">constraint\_identifier</a> <a href="#constraint_block">constraint\_block</a> 
  
**constraint\_block**{: #constraint_block }
:	<font color="purple"><b>{</b></font>  { <a href="#constraint_block_item">constraint\_block\_item</a>  }  <font color="purple"><b>}</b></font> 
  
**constraint\_block\_item**{: #constraint_block_item }
:	<font color="purple"><b>solve</b></font> <a href="#solve_before_list">solve\_before\_list</a> <font color="purple"><b>before</b></font> <a href="#solve_before_list">solve\_before\_list</a> <font color="purple"><b>;</b></font>   
        | <a href="#constraint_expression">constraint\_expression</a> 
  
**solve\_before\_list**{: #solve_before_list }
:	<a href="#constraint_primary">constraint\_primary</a>  { <font color="purple"><b>,</b></font> <a href="#constraint_primary">constraint\_primary</a>  }  
  
**constraint\_primary**{: #constraint_primary }
:	 \[ <a href="#implicit_class_handle">implicit\_class\_handle</a> <font color="purple"><b>.</b></font>   
         | <a href="#class_scope">class\_scope</a>  ]  <a href="#hierarchical_identifier">hierarchical\_identifier</a> <a href="#select">select</a> 
  
**constraint\_expression**{: #constraint_expression }
:	 \[ <font color="purple"><b>soft</b></font>  ]  <a href="#expression_or_dist">expression\_or\_dist</a> <font color="purple"><b>;</b></font>   
        | <a href="#uniqueness_constraint">uniqueness\_constraint</a> <font color="purple"><b>;</b></font>   
        | <a href="#expression">expression</a> <font color="purple"><b>-></b></font> <a href="#constraint_set">constraint\_set</a>   
        | <font color="purple"><b>if</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#constraint_set">constraint\_set</a>  \[ <font color="purple"><b>else</b></font> <a href="#constraint_set">constraint\_set</a>  ]    
        | <font color="purple"><b>foreach</b></font> <font color="purple"><b>(</b></font> <a href="#ps_or_hierarchical_array_identifier">ps\_or\_hierarchical\_array\_identifier</a>  \[ <a href="#loop_variables">loop\_variables</a>  ]  <font color="purple"><b>)</b></font> <a href="#constraint_set">constraint\_set</a>   
        | <font color="purple"><b>disable</b></font> <font color="purple"><b>soft</b></font> <a href="#constraint_primary">constraint\_primary</a> <font color="purple"><b>;</b></font> 
  
**uniqueness\_constraint**{: #uniqueness_constraint }[^footnote_9]
:	<font color="purple"><b>unique</b></font> <font color="purple"><b>{</b></font> <a href="#open_range_list">open\_range\_list</a> <font color="purple"><b>}</b></font> 
  
**constraint\_set**{: #constraint_set }
:	<a href="#constraint_expression">constraint\_expression</a>   
        | <font color="purple"><b>{</b></font>  { <a href="#constraint_expression">constraint\_expression</a>  }  <font color="purple"><b>}</b></font> 
  
**dist\_list**{: #dist_list }
:	<a href="#dist_item">dist\_item</a>  { <font color="purple"><b>,</b></font> <a href="#dist_item">dist\_item</a>  }  
  
**dist\_item**{: #dist_item }
:	<a href="#value_range">value\_range</a>  \[ <a href="#dist_weight">dist\_weight</a>  ]  
  
**dist\_weight**{: #dist_weight }
:	<font color="purple"><b>:=</b></font> <a href="#expression">expression</a>   
        | <font color="purple"><b>:/</b></font> <a href="#expression">expression</a> 
  
**constraint\_prototype**{: #constraint_prototype }
:	 \[ <a href="#constraint_prototype_qualifier">constraint\_prototype\_qualifier</a>  ]   \[ <font color="purple"><b>static</b></font>  ]  <font color="purple"><b>constraint</b></font> <a href="#constraint_identifier">constraint\_identifier</a> <font color="purple"><b>;</b></font> 
  
**constraint\_prototype\_qualifier**{: #constraint_prototype_qualifier }
:	<font color="purple"><b>extern</b></font>   
        | <font color="purple"><b>pure</b></font> 
  
**extern\_constraint\_declaration**{: #extern_constraint_declaration }
:	 \[ <font color="purple"><b>static</b></font>  ]  <font color="purple"><b>constraint</b></font> <a href="#class_scope">class\_scope</a> <a href="#constraint_identifier">constraint\_identifier</a> <a href="#constraint_block">constraint\_block</a> 
  
**identifier\_list**{: #identifier_list }
:	<a href="#identifier">identifier</a>  { <font color="purple"><b>,</b></font> <a href="#identifier">identifier</a>  }  
  
## Package items
  
**package\_item**{: #package_item }
:	<a href="#package_or_generate_item_declaration">package\_or\_generate\_item\_declaration</a>   
        | <a href="#anonymous_program">anonymous\_program</a>   
        | <a href="#package_export_declaration">package\_export\_declaration</a>   
        | <a href="#timeunits_declaration">timeunits\_declaration</a> [^footnote_3] 
  
**package\_or\_generate\_item\_declaration**{: #package_or_generate_item_declaration }
:	<a href="#net_declaration">net\_declaration</a>   
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
  
**anonymous\_program**{: #anonymous_program }
:	<font color="purple"><b>program</b></font> <font color="purple"><b>;</b></font>  { <a href="#anonymous_program_item">anonymous\_program\_item</a>  }  <font color="purple"><b>endprogram</b></font> 
  
**anonymous\_program\_item**{: #anonymous_program_item }
:	<a href="#task_declaration">task\_declaration</a>   
        | <a href="#function_declaration">function\_declaration</a>   
        | <a href="#class_declaration">class\_declaration</a>   
        | <a href="#covergroup_declaration">covergroup\_declaration</a>   
        | <a href="#class_constructor_declaration">class\_constructor\_declaration</a>   
        | <font color="purple"><b>;</b></font> 
  
## Declarations
  
### Declaration types
  
#### Module parameter declarations
  
**local\_parameter\_declaration**{: #local_parameter_declaration }
:	<font color="purple"><b>localparam</b></font> <a href="#data_type_or_implicit">data\_type\_or\_implicit</a> <a href="#list_of_param_assignments">list\_of\_param\_assignments</a>   
        | <font color="purple"><b>localparam</b></font> <font color="purple"><b>type</b></font> <a href="#list_of_type_assignments">list\_of\_type\_assignments</a> 
  
**parameter\_declaration**{: #parameter_declaration }
:	<font color="purple"><b>parameter</b></font> <a href="#data_type_or_implicit">data\_type\_or\_implicit</a> <a href="#list_of_param_assignments">list\_of\_param\_assignments</a>   
        | <font color="purple"><b>parameter</b></font> <font color="purple"><b>type</b></font> <a href="#list_of_type_assignments">list\_of\_type\_assignments</a> 
  
**specparam\_declaration**{: #specparam_declaration }
:	<font color="purple"><b>specparam</b></font>  \[ <a href="#packed_dimension">packed\_dimension</a>  ]  <a href="#list_of_specparam_assignments">list\_of\_specparam\_assignments</a> <font color="purple"><b>;</b></font> 
  
#### Port declarations
  
**inout\_declaration**{: #inout_declaration }
:	<font color="purple"><b>inout</b></font> <a href="#net_port_type">net\_port\_type</a> <a href="#list_of_port_identifiers">list\_of\_port\_identifiers</a> 
  
**input\_declaration**{: #input_declaration }
:	<font color="purple"><b>input</b></font> <a href="#net_port_type">net\_port\_type</a> <a href="#list_of_port_identifiers">list\_of\_port\_identifiers</a>   
        | <font color="purple"><b>input</b></font> <a href="#variable_port_type">variable\_port\_type</a> <a href="#list_of_variable_identifiers">list\_of\_variable\_identifiers</a> 
  
**output\_declaration**{: #output_declaration }
:	<font color="purple"><b>output</b></font> <a href="#net_port_type">net\_port\_type</a> <a href="#list_of_port_identifiers">list\_of\_port\_identifiers</a>   
        | <font color="purple"><b>output</b></font> <a href="#variable_port_type">variable\_port\_type</a> <a href="#list_of_variable_port_identifiers">list\_of\_variable\_port\_identifiers</a> 
  
**interface\_port\_declaration**{: #interface_port_declaration }
:	<a href="#interface_identifier">interface\_identifier</a> <a href="#list_of_interface_identifiers">list\_of\_interface\_identifiers</a>   
        | <a href="#interface_identifier">interface\_identifier</a> <font color="purple"><b>.</b></font> <a href="#modport_identifier">modport\_identifier</a> <a href="#list_of_interface_identifiers">list\_of\_interface\_identifiers</a> 
  
**ref\_declaration**{: #ref_declaration }
:	<font color="purple"><b>ref</b></font> <a href="#variable_port_type">variable\_port\_type</a> <a href="#list_of_variable_identifiers">list\_of\_variable\_identifiers</a> 
  
#### Type declarations
  
**data\_declaration**{: #data_declaration }[^footnote_10]
:	 \[ <font color="purple"><b>const</b></font>  ]   \[ <font color="purple"><b>var</b></font>  ]   \[ <a href="#lifetime">lifetime</a>  ]  <a href="#data_type_or_implicit">data\_type\_or\_implicit</a> <a href="#list_of_variable_decl_assignments">list\_of\_variable\_decl\_assignments</a> <font color="purple"><b>;</b></font>   
        | <a href="#type_declaration">type\_declaration</a>   
        | <a href="#package_import_declaration">package\_import\_declaration</a> [^footnote_11] <a href="#net_type_declaration">net\_type\_declaration</a> 
  
**package\_import\_declaration**{: #package_import_declaration }
:	<font color="purple"><b>import</b></font> <a href="#package_import_item">package\_import\_item</a>  { <font color="purple"><b>,</b></font> <a href="#package_import_item">package\_import\_item</a>  }  <font color="purple"><b>;</b></font> 
  
**package\_import\_item**{: #package_import_item }
:	<a href="#package_identifier">package\_identifier</a> <font color="purple"><b>::</b></font> <a href="#identifier">identifier</a>   
        | <a href="#package_identifier">package\_identifier</a> <font color="purple"><b>::</b></font> <font color="purple"><b>\*</b></font> 
  
**package\_export\_declaration**{: #package_export_declaration }
:	<font color="purple"><b>export</b></font> <font color="purple"><b>\*::\*</b></font> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>export</b></font> <a href="#package_import_item">package\_import\_item</a>  { <font color="purple"><b>,</b></font> <a href="#package_import_item">package\_import\_item</a>  }  <font color="purple"><b>;</b></font> 
  
**genvar\_declaration**{: #genvar_declaration }
:	<font color="purple"><b>genvar</b></font> <a href="#list_of_genvar_identifiers">list\_of\_genvar\_identifiers</a> <font color="purple"><b>;</b></font> 
  
**net\_declaration**{: #net_declaration }[^footnote_12]
:	<a href="#net_type">net\_type</a>  \[ <a href="#drive_strength">drive\_strength</a>   
         | <a href="#charge_strength">charge\_strength</a>  ]   \[ <font color="purple"><b>vectored</b></font>   
         | <font color="purple"><b>scalared</b></font>  ]  <a href="#data_type_or_implicit">data\_type\_or\_implicit</a>  \[ <a href="#delay3">delay3</a>  ]  <a href="#list_of_net_decl_assignments">list\_of\_net\_decl\_assignments</a> <font color="purple"><b>;</b></font>   
        | <a href="#net_type_identifier">net\_type\_identifier</a>  \[ <a href="#delay_control">delay\_control</a>  ]  <a href="#list_of_net_decl_assignments">list\_of\_net\_decl\_assignments</a> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>interconnect</b></font> <a href="#implicit_data_type">implicit\_data\_type</a>  \[ <font color="purple"><b>#</b></font> <a href="#delay_value">delay\_value</a>  ]  <a href="#net_identifier">net\_identifier</a>  { <a href="#unpacked_dimension">unpacked\_dimension</a>  }   \[ <font color="purple"><b>,</b></font> <a href="#net_identifier">net\_identifier</a>  { <a href="#unpacked_dimension">unpacked\_dimension</a>  }   ]  <font color="purple"><b>;</b></font> 
  
**type\_declaration**{: #type_declaration }
:	<font color="purple"><b>typedef</b></font> <a href="#data_type">data\_type</a> <a href="#type_identifier">type\_identifier</a>  { <a href="#variable_dimension">variable\_dimension</a>  }  <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>typedef</b></font> <a href="#interface_instance_identifier">interface\_instance\_identifier</a> <a href="#constant_bit_select">constant\_bit\_select</a> <font color="purple"><b>.</b></font> <a href="#type_identifier">type\_identifier</a> <a href="#type_identifier">type\_identifier</a> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>typedef</b></font>  \[ <font color="purple"><b>enum</b></font>   
         | <font color="purple"><b>struct</b></font>   
         | <font color="purple"><b>union</b></font>   
         | <font color="purple"><b>class</b></font>   
         | <font color="purple"><b>interface</b></font> <font color="purple"><b>class</b></font>  ]  <a href="#type_identifier">type\_identifier</a> <font color="purple"><b>;</b></font> 
  
**net\_type\_declaration**{: #net_type_declaration }
:	<font color="purple"><b>nettype</b></font> <a href="#data_type">data\_type</a> <a href="#net_type_identifier">net\_type\_identifier</a>  \[ <font color="purple"><b>with</b></font>  \[ <a href="#package_scope">package\_scope</a>   
          | <a href="#class_scope">class\_scope</a>  ]  <a href="#tf_identifier">tf\_identifier</a>  ]  <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>nettype</b></font>  \[ <a href="#package_scope">package\_scope</a>   
         | <a href="#class_scope">class\_scope</a>  ]  <a href="#net_type_identifier">net\_type\_identifier</a> <a href="#net_type_identifier">net\_type\_identifier</a> <font color="purple"><b>;</b></font> 
  
**lifetime**{: #lifetime }
:	<font color="purple"><b>static</b></font>   
        | <font color="purple"><b>automatic</b></font> 
  
### Declaration data types
  
#### Net and variable types
  
**casting\_type**{: #casting_type }
:	<a href="#simple_type">simple\_type</a>   
        | <a href="#constant_primary">constant\_primary</a>   
        | <a href="#signing">signing</a>   
        | <font color="purple"><b>string</b></font>   
        | <font color="purple"><b>const</b></font> 
  
**data\_type**{: #data_type }
:	<a href="#integer_vector_type">integer\_vector\_type</a>  \[ <a href="#signing">signing</a>  ]   { <a href="#packed_dimension">packed\_dimension</a>  }    
        | <a href="#integer_atom_type">integer\_atom\_type</a>  \[ <a href="#signing">signing</a>  ]    
        | <a href="#non_integer_type">non\_integer\_type</a>   
        | <a href="#struct_union">struct\_union</a>  \[ <font color="purple"><b>packed</b></font>  \[ <a href="#signing">signing</a>  ]   ]  <font color="purple"><b>{</b></font> <a href="#struct_union_member">struct\_union\_member</a>  { <a href="#struct_union_member">struct\_union\_member</a>  }  <font color="purple"><b>}</b></font>  { <a href="#packed_dimension">packed\_dimension</a>  }    
        | <font color="purple"><b>enum</b></font>  \[ <a href="#enum_base_type">enum\_base\_type</a>  ]  <font color="purple"><b>{</b></font> <a href="#enum_name_declaration">enum\_name\_declaration</a>  { <font color="purple"><b>,</b></font> <a href="#enum_name_declaration">enum\_name\_declaration</a>  }  <font color="purple"><b>}</b></font>  { <a href="#packed_dimension">packed\_dimension</a>  }  [^footnote_13]   
        | <font color="purple"><b>string</b></font>   
        | <font color="purple"><b>chandle</b></font>   
        | <font color="purple"><b>virtual</b></font>  \[ <font color="purple"><b>interface</b></font>  ]  <a href="#interface_identifier">interface\_identifier</a>  \[ <a href="#parameter_value_assignment">parameter\_value\_assignment</a>  ]   \[ <font color="purple"><b>.</b></font> <a href="#modport_identifier">modport\_identifier</a>  ]    
        |  \[ <a href="#class_scope">class\_scope</a>   
         | <a href="#package_scope">package\_scope</a>  ]  <a href="#type_identifier">type\_identifier</a>  { <a href="#packed_dimension">packed\_dimension</a>  }    
        | <a href="#class_type">class\_type</a>   
        | <font color="purple"><b>event</b></font>   
        | <a href="#ps_covergroup_identifier">ps\_covergroup\_identifier</a>   
        | <a href="#type_reference">type\_reference</a> [^footnote_14] 
  
**data\_type\_or\_implicit**{: #data_type_or_implicit }
:	<a href="#data_type">data\_type</a>   
        | <a href="#implicit_data_type">implicit\_data\_type</a> 
  
**implicit\_data\_type**{: #implicit_data_type }
:	 \[ <a href="#signing">signing</a>  ]   { <a href="#packed_dimension">packed\_dimension</a>  }  
  
**enum\_base\_type**{: #enum_base_type }
:	<a href="#integer_atom_type">integer\_atom\_type</a>  \[ <a href="#signing">signing</a>  ]    
        | <a href="#integer_vector_type">integer\_vector\_type</a>  \[ <a href="#signing">signing</a>  ]   \[ <a href="#packed_dimension">packed\_dimension</a>  ]    
        | <a href="#type_identifier">type\_identifier</a>  \[ <a href="#packed_dimension">packed\_dimension</a>  ]  [^footnote_14] 
  
**enum\_name\_declaration**{: #enum_name_declaration }
:	<a href="#enum_identifier">enum\_identifier</a>  \[ <font color="purple"><b>\[</b></font> <a href="#integral_number">integral\_number</a>  \[ <font color="purple"><b>:</b></font> <a href="#integral_number">integral\_number</a>  ]  <font color="purple"><b>]</b></font>  ]   \[ <font color="purple"><b>=</b></font> <a href="#constant_expression">constant\_expression</a>  ]  
  
**class\_scope**{: #class_scope }
:	<a href="#class_type">class\_type</a> <font color="purple"><b>::</b></font> 
  
**class\_type**{: #class_type }
:	<a href="#ps_class_identifier">ps\_class\_identifier</a>  \[ <a href="#parameter_value_assignment">parameter\_value\_assignment</a>  ]   { <font color="purple"><b>::</b></font> <a href="#class_identifier">class\_identifier</a>  \[ <a href="#parameter_value_assignment">parameter\_value\_assignment</a>  ]   }  
  
**integer\_type**{: #integer_type }
:	<a href="#integer_vector_type">integer\_vector\_type</a>   
        | <a href="#integer_atom_type">integer\_atom\_type</a> 
  
**integer\_atom\_type**{: #integer_atom_type }
:	<font color="purple"><b>byte</b></font>   
        | <font color="purple"><b>shortint</b></font>   
        | <font color="purple"><b>int</b></font>   
        | <font color="purple"><b>longint</b></font>   
        | <font color="purple"><b>integer</b></font>   
        | <font color="purple"><b>time</b></font> 
  
**integer\_vector\_type**{: #integer_vector_type }
:	<font color="purple"><b>bit</b></font>   
        | <font color="purple"><b>logic</b></font>   
        | <font color="purple"><b>reg</b></font> 
  
**non\_integer\_type**{: #non_integer_type }
:	<font color="purple"><b>shortreal</b></font>   
        | <font color="purple"><b>real</b></font>   
        | <font color="purple"><b>realtime</b></font> 
  
**net\_type**{: #net_type }
:	<font color="purple"><b>supply0</b></font>   
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
  
**net\_port\_type**{: #net_port_type }
:	 \[ <a href="#net_type">net\_type</a>  ]  <a href="#data_type_or_implicit">data\_type\_or\_implicit</a>   
        | <a href="#net_type_identifier">net\_type\_identifier</a>   
        | <font color="purple"><b>interconnect</b></font> <a href="#implicit_data_type">implicit\_data\_type</a> 
  
**variable\_port\_type**{: #variable_port_type }
:	<a href="#var_data_type">var\_data\_type</a> 
  
**var\_data\_type**{: #var_data_type }
:	<a href="#data_type">data\_type</a>   
        | <font color="purple"><b>var</b></font> <a href="#data_type_or_implicit">data\_type\_or\_implicit</a> 
  
**signing**{: #signing }
:	<font color="purple"><b>signed</b></font>   
        | <font color="purple"><b>unsigned</b></font> 
  
**simple\_type**{: #simple_type }
:	<a href="#integer_type">integer\_type</a>   
        | <a href="#non_integer_type">non\_integer\_type</a>   
        | <a href="#ps_type_identifier">ps\_type\_identifier</a>   
        | <a href="#ps_parameter_identifier">ps\_parameter\_identifier</a> 
  
**struct\_union\_member**{: #struct_union_member }[^footnote_16]
:	 { <a href="#attribute_instance">attribute\_instance</a>  }   \[ <a href="#random_qualifier">random\_qualifier</a>  ]  <a href="#data_type_or_void">data\_type\_or\_void</a> <a href="#list_of_variable_decl_assignments">list\_of\_variable\_decl\_assignments</a> <font color="purple"><b>;</b></font> 
  
**data\_type\_or\_void**{: #data_type_or_void }
:	<a href="#data_type">data\_type</a>   
        | <font color="purple"><b>void</b></font> 
  
**struct\_union**{: #struct_union }
:	<font color="purple"><b>struct</b></font>   
        | <font color="purple"><b>union</b></font>  \[ <font color="purple"><b>tagged</b></font>  ]  
  
**type\_reference**{: #type_reference }
:	<font color="purple"><b>type</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> [^footnote_17] <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>type</b></font> <font color="purple"><b>(</b></font> <a href="#data_type">data\_type</a> <font color="purple"><b>)</b></font> 
  
#### Strengths
  
**drive\_strength**{: #drive_strength }
:	<font color="purple"><b>(</b></font> <a href="#strength0">strength0</a> <font color="purple"><b>,</b></font> <a href="#strength1">strength1</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>(</b></font> <a href="#strength1">strength1</a> <font color="purple"><b>,</b></font> <a href="#strength0">strength0</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>(</b></font> <a href="#strength0">strength0</a> <font color="purple"><b>,</b></font> <font color="purple"><b>highz1</b></font> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>(</b></font> <a href="#strength1">strength1</a> <font color="purple"><b>,</b></font> <font color="purple"><b>highz0</b></font> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>(</b></font> <font color="purple"><b>highz0</b></font> <font color="purple"><b>,</b></font> <a href="#strength1">strength1</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>(</b></font> <font color="purple"><b>highz1</b></font> <font color="purple"><b>,</b></font> <a href="#strength0">strength0</a> <font color="purple"><b>)</b></font> 
  
**strength0**{: #strength0 }
:	<font color="purple"><b>supply0</b></font>   
        | <font color="purple"><b>strong0</b></font>   
        | <font color="purple"><b>pull0</b></font>   
        | <font color="purple"><b>weak0</b></font> 
  
**strength1**{: #strength1 }
:	<font color="purple"><b>supply1</b></font>   
        | <font color="purple"><b>strong1</b></font>   
        | <font color="purple"><b>pull1</b></font>   
        | <font color="purple"><b>weak1</b></font> 
  
**charge\_strength**{: #charge_strength }
:	<font color="purple"><b>(</b></font> <font color="purple"><b>small</b></font> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>(</b></font> <font color="purple"><b>medium</b></font> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>(</b></font> <font color="purple"><b>large</b></font> <font color="purple"><b>)</b></font> 
  
#### Delays
  
**delay3**{: #delay3 }
:	<font color="purple"><b>#</b></font> <a href="#delay_value">delay\_value</a>   
        | <font color="purple"><b>#</b></font> <font color="purple"><b>(</b></font> <a href="#mintypmax_expression">mintypmax\_expression</a>  \[ <font color="purple"><b>,</b></font> <a href="#mintypmax_expression">mintypmax\_expression</a>  \[ <font color="purple"><b>,</b></font> <a href="#mintypmax_expression">mintypmax\_expression</a>  ]   ]  <font color="purple"><b>)</b></font> 
  
**delay2**{: #delay2 }
:	<font color="purple"><b>#</b></font> <a href="#delay_value">delay\_value</a>   
        | <font color="purple"><b>#</b></font> <font color="purple"><b>(</b></font> <a href="#mintypmax_expression">mintypmax\_expression</a>  \[ <font color="purple"><b>,</b></font> <a href="#mintypmax_expression">mintypmax\_expression</a>  ]  <font color="purple"><b>)</b></font> 
  
**delay\_value**{: #delay_value }
:	<a href="#unsigned_number">unsigned\_number</a>   
        | <a href="#real_number">real\_number</a>   
        | <a href="#ps_identifier">ps\_identifier</a>   
        | <a href="#time_literal">time\_literal</a>   
        | <font color="purple"><b>1step</b></font> 
  
### Declaration lists
  
**list\_of\_defparam\_assignments**{: #list_of_defparam_assignments }
:	<a href="#defparam_assignment">defparam\_assignment</a>  { <font color="purple"><b>,</b></font> <a href="#defparam_assignment">defparam\_assignment</a>  }  
  
**list\_of\_genvar\_identifiers**{: #list_of_genvar_identifiers }
:	<a href="#genvar_identifier">genvar\_identifier</a>  { <font color="purple"><b>,</b></font> <a href="#genvar_identifier">genvar\_identifier</a>  }  
  
**list\_of\_interface\_identifiers**{: #list_of_interface_identifiers }
:	<a href="#interface_identifier">interface\_identifier</a>  { <a href="#unpacked_dimension">unpacked\_dimension</a>  }   { <font color="purple"><b>,</b></font> <a href="#interface_identifier">interface\_identifier</a>  { <a href="#unpacked_dimension">unpacked\_dimension</a>  }   }  
  
**list\_of\_net\_decl\_assignments**{: #list_of_net_decl_assignments }
:	<a href="#net_decl_assignment">net\_decl\_assignment</a>  { <font color="purple"><b>,</b></font> <a href="#net_decl_assignment">net\_decl\_assignment</a>  }  
  
**list\_of\_param\_assignments**{: #list_of_param_assignments }
:	<a href="#param_assignment">param\_assignment</a>  { <font color="purple"><b>,</b></font> <a href="#param_assignment">param\_assignment</a>  }  
  
**list\_of\_port\_identifiers**{: #list_of_port_identifiers }
:	<a href="#port_identifier">port\_identifier</a>  { <a href="#unpacked_dimension">unpacked\_dimension</a>  }   { <font color="purple"><b>,</b></font> <a href="#port_identifier">port\_identifier</a>  { <a href="#unpacked_dimension">unpacked\_dimension</a>  }   }  
  
**list\_of\_udp\_port\_identifiers**{: #list_of_udp_port_identifiers }
:	<a href="#port_identifier">port\_identifier</a>  { <font color="purple"><b>,</b></font> <a href="#port_identifier">port\_identifier</a>  }  
  
**list\_of\_specparam\_assignments**{: #list_of_specparam_assignments }
:	<a href="#specparam_assignment">specparam\_assignment</a>  { <font color="purple"><b>,</b></font> <a href="#specparam_assignment">specparam\_assignment</a>  }  
  
**list\_of\_tf\_variable\_identifiers**{: #list_of_tf_variable_identifiers }
:	<a href="#port_identifier">port\_identifier</a>  { <a href="#variable_dimension">variable\_dimension</a>  }   \[ <font color="purple"><b>=</b></font> <a href="#expression">expression</a>  ]   { <font color="purple"><b>,</b></font> <a href="#port_identifier">port\_identifier</a>  { <a href="#variable_dimension">variable\_dimension</a>  }   \[ <font color="purple"><b>=</b></font> <a href="#expression">expression</a>  ]   }  
  
**list\_of\_type\_assignments**{: #list_of_type_assignments }
:	<a href="#type_assignment">type\_assignment</a>  { <font color="purple"><b>,</b></font> <a href="#type_assignment">type\_assignment</a>  }  
  
**list\_of\_variable\_decl\_assignments**{: #list_of_variable_decl_assignments }
:	<a href="#variable_decl_assignment">variable\_decl\_assignment</a>  { <font color="purple"><b>,</b></font> <a href="#variable_decl_assignment">variable\_decl\_assignment</a>  }  
  
**list\_of\_variable\_identifiers**{: #list_of_variable_identifiers }
:	<a href="#variable_identifier">variable\_identifier</a>  { <a href="#variable_dimension">variable\_dimension</a>  }   { <font color="purple"><b>,</b></font> <a href="#variable_identifier">variable\_identifier</a>  { <a href="#variable_dimension">variable\_dimension</a>  }   }  
  
**list\_of\_variable\_port\_identifiers**{: #list_of_variable_port_identifiers }
:	<a href="#port_identifier">port\_identifier</a>  { <a href="#variable_dimension">variable\_dimension</a>  }   \[ <font color="purple"><b>=</b></font> <a href="#constant_expression">constant\_expression</a>  ]   { <font color="purple"><b>,</b></font> <a href="#port_identifier">port\_identifier</a>  { <a href="#variable_dimension">variable\_dimension</a>  }   \[ <font color="purple"><b>=</b></font> <a href="#constant_expression">constant\_expression</a>  ]   }  
  
### Declaration assignments
  
**defparam\_assignment**{: #defparam_assignment }
:	<a href="#hierarchical_parameter_identifier">hierarchical\_parameter\_identifier</a> <font color="purple"><b>=</b></font> <a href="#constant_mintypmax_expression">constant\_mintypmax\_expression</a> 
  
**net\_decl\_assignment**{: #net_decl_assignment }
:	<a href="#net_identifier">net\_identifier</a>  { <a href="#unpacked_dimension">unpacked\_dimension</a>  }   \[ <font color="purple"><b>=</b></font> <a href="#expression">expression</a>  ]  
  
**param\_assignment**{: #param_assignment }
:	<a href="#parameter_identifier">parameter\_identifier</a>  { <a href="#unpacked_dimension">unpacked\_dimension</a>  }   \[ <font color="purple"><b>=</b></font> <a href="#constant_param_expression">constant\_param\_expression</a>  ]  
  
**specparam\_assignment**{: #specparam_assignment }
:	<a href="#specparam_identifier">specparam\_identifier</a> <font color="purple"><b>=</b></font> <a href="#constant_mintypmax_expression">constant\_mintypmax\_expression</a>   
        | <a href="#pulse_control_specparam">pulse\_control\_specparam</a> 
  
**type\_assignment**{: #type_assignment }
:	<a href="#type_identifier">type\_identifier</a>  \[ <font color="purple"><b>=</b></font> <a href="#data_type">data\_type</a>  ]  [^footnote_18] 
  
**pulse\_control\_specparam**{: #pulse_control_specparam }
:	<font color="purple"><b>PATHPULSE$</b></font> <font color="purple"><b>=</b></font> <font color="purple"><b>(</b></font> <a href="#reject_limit_value">reject\_limit\_value</a>  \[ <font color="purple"><b>,</b></font> <a href="#error_limit_value">error\_limit\_value</a>  ]  <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>PATHPULSE$</b></font> <a href="#specify_input_terminal_descriptor">specify\_input\_terminal\_descriptor</a> <font color="purple"><b>$</b></font> <a href="#specify_output_terminal_descriptor">specify\_output\_terminal\_descriptor</a> <font color="purple"><b>=</b></font> <font color="purple"><b>(</b></font> <a href="#reject_limit_value">reject\_limit\_value</a>  \[ <font color="purple"><b>,</b></font> <a href="#error_limit_value">error\_limit\_value</a>  ]  <font color="purple"><b>)</b></font> 
  
**error\_limit\_value**{: #error_limit_value }
:	<a href="#limit_value">limit\_value</a> 
  
**reject\_limit\_value**{: #reject_limit_value }
:	<a href="#limit_value">limit\_value</a> 
  
**limit\_value**{: #limit_value }
:	<a href="#constant_mintypmax_expression">constant\_mintypmax\_expression</a> 
  
**variable\_decl\_assignment**{: #variable_decl_assignment }
:	<a href="#variable_identifier">variable\_identifier</a>  { <a href="#variable_dimension">variable\_dimension</a>  }   \[ <font color="purple"><b>=</b></font> <a href="#expression">expression</a>  ]    
        | <a href="#dynamic_array_variable_identifier">dynamic\_array\_variable\_identifier</a> <a href="#unsized_dimension">unsized\_dimension</a>  { <a href="#variable_dimension">variable\_dimension</a>  }   \[ <font color="purple"><b>=</b></font> <a href="#dynamic_array_new">dynamic\_array\_new</a>  ]    
        | <a href="#class_variable_identifier">class\_variable\_identifier</a>  \[ <font color="purple"><b>=</b></font> <a href="#class_new">class\_new</a>  ]  
  
**class\_new**{: #class_new }[^footnote_19]
:	 \[ <a href="#class_scope">class\_scope</a>  ]  <font color="purple"><b>new</b></font>  \[ <font color="purple"><b>(</b></font> <a href="#list_of_arguments">list\_of\_arguments</a> <font color="purple"><b>)</b></font>  ]    
        | <font color="purple"><b>new</b></font> <a href="#expression">expression</a> 
  
**dynamic\_array\_new**{: #dynamic_array_new }
:	<font color="purple"><b>new</b></font> <font color="purple"><b>\[</b></font> <a href="#expression">expression</a> <font color="purple"><b>]</b></font>  \[ <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font>  ]  
  
### Declaration ranges
  
**unpacked\_dimension**{: #unpacked_dimension }
:	<font color="purple"><b>\[</b></font> <a href="#constant_range">constant\_range</a> <font color="purple"><b>]</b></font>   
        | <font color="purple"><b>\[</b></font> <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>]</b></font> 
  
**packed\_dimension**{: #packed_dimension }[^footnote_20]
:	<font color="purple"><b>\[</b></font> <a href="#constant_range">constant\_range</a> <font color="purple"><b>]</b></font>   
        | <a href="#unsized_dimension">unsized\_dimension</a> 
  
**associative\_dimension**{: #associative_dimension }
:	<font color="purple"><b>\[</b></font> <a href="#data_type">data\_type</a> <font color="purple"><b>]</b></font>   
        | <font color="purple"><b>\[</b></font> <font color="purple"><b>\*</b></font> <font color="purple"><b>]</b></font> 
  
**variable\_dimension**{: #variable_dimension }
:	<a href="#unsized_dimension">unsized\_dimension</a>   
        | <a href="#unpacked_dimension">unpacked\_dimension</a>   
        | <a href="#associative_dimension">associative\_dimension</a>   
        | <a href="#queue_dimension">queue\_dimension</a> 
  
**queue\_dimension**{: #queue_dimension }
:	<font color="purple"><b>\[</b></font> <font color="purple"><b>$</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#constant_expression">constant\_expression</a>  ]  <font color="purple"><b>]</b></font> 
  
**unsized\_dimension**{: #unsized_dimension }
:	<font color="purple"><b>\[</b></font> <font color="purple"><b>]</b></font> 
  
### Function declarations
  
**function\_data\_type\_or\_implicit**{: #function_data_type_or_implicit }
:	<a href="#data_type_or_void">data\_type\_or\_void</a>   
        | <a href="#implicit_data_type">implicit\_data\_type</a> 
  
**function\_declaration**{: #function_declaration }
:	<font color="purple"><b>function</b></font>  \[ <a href="#lifetime">lifetime</a>  ]  <a href="#function_body_declaration">function\_body\_declaration</a> 
  
**function\_body\_declaration**{: #function_body_declaration }
:	<a href="#function_data_type_or_implicit">function\_data\_type\_or\_implicit</a>  \[ <a href="#interface_identifier">interface\_identifier</a> <font color="purple"><b>.</b></font>   
         | <a href="#class_scope">class\_scope</a>  ]  <a href="#function_identifier">function\_identifier</a> <font color="purple"><b>;</b></font>  { <a href="#tf_item_declaration">tf\_item\_declaration</a>  }   { <a href="#function_statement_or_null">function\_statement\_or\_null</a>  }  <font color="purple"><b>endfunction</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#function_identifier">function\_identifier</a>  ]    
        | <a href="#function_data_type_or_implicit">function\_data\_type\_or\_implicit</a>  \[ <a href="#interface_identifier">interface\_identifier</a> <font color="purple"><b>.</b></font>   
         | <a href="#class_scope">class\_scope</a>  ]  <a href="#function_identifier">function\_identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#tf_port_list">tf\_port\_list</a>  ]  <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font>  { <a href="#block_item_declaration">block\_item\_declaration</a>  }   { <a href="#function_statement_or_null">function\_statement\_or\_null</a>  }  <font color="purple"><b>endfunction</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#function_identifier">function\_identifier</a>  ]  
  
**function\_prototype**{: #function_prototype }
:	<font color="purple"><b>function</b></font> <a href="#data_type_or_void">data\_type\_or\_void</a> <a href="#function_identifier">function\_identifier</a>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#tf_port_list">tf\_port\_list</a>  ]  <font color="purple"><b>)</b></font>  ]  
  
**dpi\_import\_export**{: #dpi_import_export }
:	<font color="purple"><b>import</b></font> <a href="#dpi_spec_string">dpi\_spec\_string</a>  \[ <a href="#dpi_function_import_property">dpi\_function\_import\_property</a>  ]   \[ <a href="#c_identifier">c\_identifier</a> <font color="purple"><b>=</b></font>  ]  <a href="#dpi_function_proto">dpi\_function\_proto</a> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>import</b></font> <a href="#dpi_spec_string">dpi\_spec\_string</a>  \[ <a href="#dpi_task_import_property">dpi\_task\_import\_property</a>  ]   \[ <a href="#c_identifier">c\_identifier</a> <font color="purple"><b>=</b></font>  ]  <a href="#dpi_task_proto">dpi\_task\_proto</a> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>export</b></font> <a href="#dpi_spec_string">dpi\_spec\_string</a>  \[ <a href="#c_identifier">c\_identifier</a> <font color="purple"><b>=</b></font>  ]  <font color="purple"><b>function</b></font> <a href="#function_identifier">function\_identifier</a> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>export</b></font> <a href="#dpi_spec_string">dpi\_spec\_string</a>  \[ <a href="#c_identifier">c\_identifier</a> <font color="purple"><b>=</b></font>  ]  <font color="purple"><b>task</b></font> <a href="#task_identifier">task\_identifier</a> <font color="purple"><b>;</b></font> 
  
**dpi\_spec\_string**{: #dpi_spec_string }
:	<font color="purple"><b>DPI-C</b></font>   
        | <font color="purple"><b>DPI</b></font> 
  
**dpi\_function\_import\_property**{: #dpi_function_import_property }
:	<font color="purple"><b>context</b></font>   
        | <font color="purple"><b>pure</b></font> 
  
**dpi\_task\_import\_property**{: #dpi_task_import_property }
:	<font color="purple"><b>context</b></font> 
  
**dpi\_function\_proto**{: #dpi_function_proto }[^footnote_21],[^footnote_22]
:	<a href="#function_prototype">function\_prototype</a> 
  
**dpi\_task\_proto**{: #dpi_task_proto }[^footnote_22]
:	<a href="#task_prototype">task\_prototype</a> 
  
### Task declarations
  
**task\_declaration**{: #task_declaration }
:	<font color="purple"><b>task</b></font>  \[ <a href="#lifetime">lifetime</a>  ]  <a href="#task_body_declaration">task\_body\_declaration</a> 
  
**task\_body\_declaration**{: #task_body_declaration }
:	 \[ <a href="#interface_identifier">interface\_identifier</a> <font color="purple"><b>.</b></font>   
         | <a href="#class_scope">class\_scope</a>  ]  <a href="#task_identifier">task\_identifier</a> <font color="purple"><b>;</b></font>  { <a href="#tf_item_declaration">tf\_item\_declaration</a>  }   { <a href="#statement_or_null">statement\_or\_null</a>  }  <font color="purple"><b>endtask</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#task_identifier">task\_identifier</a>  ]    
        |  \[ <a href="#interface_identifier">interface\_identifier</a> <font color="purple"><b>.</b></font>   
         | <a href="#class_scope">class\_scope</a>  ]  <a href="#task_identifier">task\_identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#tf_port_list">tf\_port\_list</a>  ]  <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font>  { <a href="#block_item_declaration">block\_item\_declaration</a>  }   { <a href="#statement_or_null">statement\_or\_null</a>  }  <font color="purple"><b>endtask</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#task_identifier">task\_identifier</a>  ]  
  
**tf\_item\_declaration**{: #tf_item_declaration }
:	<a href="#block_item_declaration">block\_item\_declaration</a>   
        | <a href="#tf_port_declaration">tf\_port\_declaration</a> 
  
**tf\_port\_list**{: #tf_port_list }
:	<a href="#tf_port_item">tf\_port\_item</a>  { <font color="purple"><b>,</b></font> <a href="#tf_port_item">tf\_port\_item</a>  }  
  
**tf\_port\_item**{: #tf_port_item }
:	 { <a href="#attribute_instance">attribute\_instance</a>  }   \[ <a href="#tf_port_direction">tf\_port\_direction</a>  ]   \[ <font color="purple"><b>var</b></font>  ]  <a href="#data_type_or_implicit">data\_type\_or\_implicit</a>  \[ <a href="#port_identifier">port\_identifier</a>  { <a href="#variable_dimension">variable\_dimension</a>  }   \[ <font color="purple"><b>=</b></font> <a href="#expression">expression</a>  ]   ]  
  
**tf\_port\_direction**{: #tf_port_direction }[^footnote_23]
:	<a href="#port_direction">port\_direction</a>   
        | <font color="purple"><b>const</b></font> <font color="purple"><b>ref</b></font> 
  
**tf\_port\_declaration**{: #tf_port_declaration }
:	 { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#tf_port_direction">tf\_port\_direction</a>  \[ <font color="purple"><b>var</b></font>  ]  <a href="#data_type_or_implicit">data\_type\_or\_implicit</a> <a href="#list_of_tf_variable_identifiers">list\_of\_tf\_variable\_identifiers</a> <font color="purple"><b>;</b></font> 
  
**task\_prototype**{: #task_prototype }
:	<font color="purple"><b>task</b></font> <a href="#task_identifier">task\_identifier</a>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#tf_port_list">tf\_port\_list</a>  ]  <font color="purple"><b>)</b></font>  ]  
  
### Block item declarations
  
**block\_item\_declaration**{: #block_item_declaration }
:	 { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#data_declaration">data\_declaration</a>   
        |  { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#local_parameter_declaration">local\_parameter\_declaration</a> <font color="purple"><b>;</b></font>   
        |  { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#parameter_declaration">parameter\_declaration</a> <font color="purple"><b>;</b></font>   
        |  { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#overload_declaration">overload\_declaration</a>   
        |  { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#let_declaration">let\_declaration</a> 
  
**overload\_declaration**{: #overload_declaration }
:	<font color="purple"><b>bind</b></font> <a href="#overload_operator">overload\_operator</a> <font color="purple"><b>function</b></font> <a href="#data_type">data\_type</a> <a href="#function_identifier">function\_identifier</a> <font color="purple"><b>(</b></font> <a href="#overload_proto_formals">overload\_proto\_formals</a> <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font> 
  
**overload\_operator**{: #overload_operator }
:	<font color="purple"><b>+</b></font>   
        | <font color="purple"><b>++</b></font>   
        | <font color="purple"><b>-</b></font>   
        | <font color="purple"><b>--</b></font>   
        | <font color="purple"><b>\*</b></font>   
        | <font color="purple"><b>\*\*</b></font>   
        | <font color="purple"><b>/</b></font>   
        | <font color="purple"><b>%</b></font>   
        | <font color="purple"><b>==</b></font>   
        | <font color="purple"><b>!=</b></font>   
        | <font color="purple"><b><</b></font>   
        | <font color="purple"><b><=</b></font>   
        | <font color="purple"><b>></b></font>   
        | <font color="purple"><b>>=</b></font>   
        | <font color="purple"><b>=</b></font> 
  
**overload\_proto\_formals**{: #overload_proto_formals }
:	<a href="#data_type">data\_type</a>  { <font color="purple"><b>,</b></font> <a href="#data_type">data\_type</a>  }  
  
### Interface declarations
  
**modport\_declaration**{: #modport_declaration }
:	<font color="purple"><b>modport</b></font> <a href="#modport_item">modport\_item</a>  { <font color="purple"><b>,</b></font> <a href="#modport_item">modport\_item</a>  }  <font color="purple"><b>;</b></font> 
  
**modport\_item**{: #modport_item }
:	<a href="#modport_identifier">modport\_identifier</a> <font color="purple"><b>(</b></font> <a href="#modport_ports_declaration">modport\_ports\_declaration</a>  { <font color="purple"><b>,</b></font> <a href="#modport_ports_declaration">modport\_ports\_declaration</a>  }  <font color="purple"><b>)</b></font> 
  
**modport\_ports\_declaration**{: #modport_ports_declaration }
:	 { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#modport_simple_ports_declaration">modport\_simple\_ports\_declaration</a>   
        |  { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#modport_tf_ports_declaration">modport\_tf\_ports\_declaration</a>   
        |  { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#modport_clocking_declaration">modport\_clocking\_declaration</a> 
  
**modport\_clocking\_declaration**{: #modport_clocking_declaration }
:	<font color="purple"><b>clocking</b></font> <a href="#clocking_identifier">clocking\_identifier</a> 
  
**modport\_simple\_ports\_declaration**{: #modport_simple_ports_declaration }
:	<a href="#port_direction">port\_direction</a> <a href="#modport_simple_port">modport\_simple\_port</a>  { <font color="purple"><b>,</b></font> <a href="#modport_simple_port">modport\_simple\_port</a>  }  
  
**modport\_simple\_port**{: #modport_simple_port }
:	<a href="#port_identifier">port\_identifier</a>   
        | <font color="purple"><b>.</b></font> <a href="#port_identifier">port\_identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#expression">expression</a>  ]  <font color="purple"><b>)</b></font> 
  
**modport\_tf\_ports\_declaration**{: #modport_tf_ports_declaration }
:	<a href="#import_export">import\_export</a> <a href="#modport_tf_port">modport\_tf\_port</a>  { <font color="purple"><b>,</b></font> <a href="#modport_tf_port">modport\_tf\_port</a>  }  
  
**modport\_tf\_port**{: #modport_tf_port }
:	<a href="#method_prototype">method\_prototype</a>   
        | <a href="#tf_identifier">tf\_identifier</a> 
  
**import\_export**{: #import_export }
:	<font color="purple"><b>import</b></font>   
        | <font color="purple"><b>export</b></font> 
  
### Assertion declarations
  
**concurrent\_assertion\_item**{: #concurrent_assertion_item }
:	 \[ <a href="#block_identifier">block\_identifier</a> <font color="purple"><b>:</b></font>  ]  <a href="#concurrent_assertion_statement">concurrent\_assertion\_statement</a>   
        | <a href="#checker_instantiation">checker\_instantiation</a> 
  
**concurrent\_assertion\_statement**{: #concurrent_assertion_statement }
:	<a href="#assert_property_statement">assert\_property\_statement</a>   
        | <a href="#assume_property_statement">assume\_property\_statement</a>   
        | <a href="#cover_property_statement">cover\_property\_statement</a>   
        | <a href="#cover_sequence_statement">cover\_sequence\_statement</a>   
        | <a href="#restrict_property_statement">restrict\_property\_statement</a> 
  
**assert\_property\_statement**{: #assert_property_statement }
:	<font color="purple"><b>assert</b></font> <font color="purple"><b>property</b></font> <font color="purple"><b>(</b></font> <a href="#property_spec">property\_spec</a> <font color="purple"><b>)</b></font> <a href="#action_block">action\_block</a> 
  
**assume\_property\_statement**{: #assume_property_statement }
:	<font color="purple"><b>assume</b></font> <font color="purple"><b>property</b></font> <font color="purple"><b>(</b></font> <a href="#property_spec">property\_spec</a> <font color="purple"><b>)</b></font> <a href="#action_block">action\_block</a> 
  
**cover\_property\_statement**{: #cover_property_statement }
:	<font color="purple"><b>cover</b></font> <font color="purple"><b>property</b></font> <font color="purple"><b>(</b></font> <a href="#property_spec">property\_spec</a> <font color="purple"><b>)</b></font> <a href="#statement_or_null">statement\_or\_null</a> 
  
**expect\_property\_statement**{: #expect_property_statement }
:	<font color="purple"><b>expect</b></font> <font color="purple"><b>(</b></font> <a href="#property_spec">property\_spec</a> <font color="purple"><b>)</b></font> <a href="#action_block">action\_block</a> 
  
**cover\_sequence\_statement**{: #cover_sequence_statement }
:	<font color="purple"><b>cover</b></font> <font color="purple"><b>sequence</b></font> <font color="purple"><b>(</b></font>  \[ <a href="#clocking_event">clocking\_event</a>  ]   \[ <font color="purple"><b>disable</b></font> <font color="purple"><b>iff</b></font> <font color="purple"><b>(</b></font> <a href="#expression_or_dist">expression\_or\_dist</a> <font color="purple"><b>)</b></font>  ]  <a href="#sequence_expr">sequence\_expr</a> <font color="purple"><b>)</b></font> <a href="#statement_or_null">statement\_or\_null</a> 
  
**restrict\_property\_statement**{: #restrict_property_statement }
:	<font color="purple"><b>restrict</b></font> <font color="purple"><b>property</b></font> <font color="purple"><b>(</b></font> <a href="#property_spec">property\_spec</a> <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font> 
  
**property\_instance**{: #property_instance }
:	<a href="#ps_or_hierarchical_property_identifier">ps\_or\_hierarchical\_property\_identifier</a>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#property_list_of_arguments">property\_list\_of\_arguments</a>  ]  <font color="purple"><b>)</b></font>  ]  
  
**property\_list\_of\_arguments**{: #property_list_of_arguments }
:	 \[ <a href="#property_actual_arg">property\_actual\_arg</a>  ]   { <font color="purple"><b>,</b></font>  \[ <a href="#property_actual_arg">property\_actual\_arg</a>  ]   }   { <font color="purple"><b>,</b></font> <font color="purple"><b>.</b></font> <a href="#identifier">identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#property_actual_arg">property\_actual\_arg</a>  ]  <font color="purple"><b>)</b></font>  }    
        | <font color="purple"><b>.</b></font> <a href="#identifier">identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#property_actual_arg">property\_actual\_arg</a>  ]  <font color="purple"><b>)</b></font>  { <font color="purple"><b>,</b></font> <font color="purple"><b>.</b></font> <a href="#identifier">identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#property_actual_arg">property\_actual\_arg</a>  ]  <font color="purple"><b>)</b></font>  }  
  
**property\_actual\_arg**{: #property_actual_arg }
:	<a href="#property_expr">property\_expr</a>   
        | <a href="#sequence_actual_arg">sequence\_actual\_arg</a> 
  
**assertion\_item\_declaration**{: #assertion_item_declaration }
:	<a href="#property_declaration">property\_declaration</a>   
        | <a href="#sequence_declaration">sequence\_declaration</a>   
        | <a href="#let_declaration">let\_declaration</a> 
  
**property\_declaration**{: #property_declaration }
:	<font color="purple"><b>property</b></font> <a href="#property_identifier">property\_identifier</a>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#property_port_list">property\_port\_list</a>  ]  <font color="purple"><b>)</b></font>  ]  <font color="purple"><b>;</b></font>  { <a href="#assertion_variable_declaration">assertion\_variable\_declaration</a>  }  <a href="#property_spec">property\_spec</a>  \[ <font color="purple"><b>;</b></font>  ]  <font color="purple"><b>endproperty</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#property_identifier">property\_identifier</a>  ]  
  
**property\_port\_list**{: #property_port_list }
:	<a href="#property_port_item">property\_port\_item</a>  { <font color="purple"><b>,</b></font> <a href="#property_port_item">property\_port\_item</a>  }  
  
**property\_port\_item**{: #property_port_item }
:	 { <a href="#attribute_instance">attribute\_instance</a>  }   \[ <font color="purple"><b>local</b></font>  \[ <a href="#property_lvar_port_direction">property\_lvar\_port\_direction</a>  ]   ]  <a href="#property_formal_type">property\_formal\_type</a> <a href="#formal_port_identifier">formal\_port\_identifier</a>  { <a href="#variable_dimension">variable\_dimension</a>  }   \[ <font color="purple"><b>=</b></font> <a href="#property_actual_arg">property\_actual\_arg</a>  ]  
  
**property\_lvar\_port\_direction**{: #property_lvar_port_direction }
:	<font color="purple"><b>input</b></font> 
  
**property\_formal\_type**{: #property_formal_type }
:	<a href="#sequence_formal_type">sequence\_formal\_type</a>   
        | <font color="purple"><b>property</b></font> 
  
**property\_spec**{: #property_spec }
:	 \[ <a href="#clocking_event">clocking\_event</a>  ]   \[ <font color="purple"><b>disable</b></font> <font color="purple"><b>iff</b></font> <font color="purple"><b>(</b></font> <a href="#expression_or_dist">expression\_or\_dist</a> <font color="purple"><b>)</b></font>  ]  <a href="#property_expr">property\_expr</a> 
  
**property\_expr**{: #property_expr }
:	<a href="#sequence_expr">sequence\_expr</a>   
        | <font color="purple"><b>strong</b></font> <font color="purple"><b>(</b></font> <a href="#sequence_expr">sequence\_expr</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>weak</b></font> <font color="purple"><b>(</b></font> <a href="#sequence_expr">sequence\_expr</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>(</b></font> <a href="#property_expr">property\_expr</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>not</b></font> <a href="#property_expr">property\_expr</a>   
        | <a href="#property_expr">property\_expr</a> <font color="purple"><b>or</b></font> <a href="#property_expr">property\_expr</a>   
        | <a href="#property_expr">property\_expr</a> <font color="purple"><b>and</b></font> <a href="#property_expr">property\_expr</a>   
        | <a href="#sequence_expr">sequence\_expr</a> <font color="purple"><b>|-></b></font> <a href="#property_expr">property\_expr</a>   
        | <a href="#sequence_expr">sequence\_expr</a> <font color="purple"><b>|=></b></font> <a href="#property_expr">property\_expr</a>   
        | <font color="purple"><b>if</b></font> <font color="purple"><b>(</b></font> <a href="#expression_or_dist">expression\_or\_dist</a> <font color="purple"><b>)</b></font> <a href="#property_expr">property\_expr</a>  \[ <font color="purple"><b>else</b></font> <a href="#property_expr">property\_expr</a>  ]    
        | <font color="purple"><b>case</b></font> <font color="purple"><b>(</b></font> <a href="#expression_or_dist">expression\_or\_dist</a> <font color="purple"><b>)</b></font> <a href="#property_case_item">property\_case\_item</a>  { <a href="#property_case_item">property\_case\_item</a>  }  <font color="purple"><b>endcase</b></font>   
        | <a href="#sequence_expr">sequence\_expr</a> <font color="purple"><b>#-#</b></font> <a href="#property_expr">property\_expr</a>   
        | <a href="#sequence_expr">sequence\_expr</a> <font color="purple"><b>#=#</b></font> <a href="#property_expr">property\_expr</a>   
        | <font color="purple"><b>nexttime</b></font> <a href="#property_expr">property\_expr</a>   
        | <font color="purple"><b>nexttime</b></font>  \[ <font color="purple"><b>constant</b></font> <a href="#expression">expression</a>  ]  <a href="#property_expr">property\_expr</a>   
        | <font color="purple"><b>s\_nexttime</b></font> <a href="#property_expr">property\_expr</a>   
        | <font color="purple"><b>s\_nexttime</b></font>  \[ <a href="#constant_expression">constant\_expression</a>  ]  <a href="#property_expr">property\_expr</a>   
        | <font color="purple"><b>always</b></font> <a href="#property_expr">property\_expr</a>   
        | <font color="purple"><b>always</b></font>  \[ <a href="#cycle_delay_const_range_expression">cycle\_delay\_const\_range\_expression</a>  ]  <a href="#property_expr">property\_expr</a>   
        | <font color="purple"><b>s\_always</b></font>  \[ <a href="#constant_range">constant\_range</a>  ]  <a href="#property_expr">property\_expr</a>   
        | <font color="purple"><b>s\_eventually</b></font> <a href="#property_expr">property\_expr</a>   
        | <font color="purple"><b>eventually</b></font>  \[ <a href="#constant_range">constant\_range</a>  ]  <a href="#property_expr">property\_expr</a>   
        | <font color="purple"><b>s\_eventually</b></font>  \[ <a href="#cycle_delay_const_range_expression">cycle\_delay\_const\_range\_expression</a>  ]  <a href="#property_expr">property\_expr</a>   
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
  
**property\_case\_item**{: #property_case_item }
:	<a href="#expression_or_dist">expression\_or\_dist</a>  { <font color="purple"><b>,</b></font> <a href="#expression_or_dist">expression\_or\_dist</a>  }  <font color="purple"><b>:</b></font> <a href="#property_expr">property\_expr</a>  \[ <font color="purple"><b>;</b></font>  ]    
        | <font color="purple"><b>default</b></font>  \[ <font color="purple"><b>:</b></font>  ]  <a href="#property_expr">property\_expr</a>  \[ <font color="purple"><b>;</b></font>  ]  
  
**sequence\_declaration**{: #sequence_declaration }
:	<font color="purple"><b>sequence</b></font> <a href="#sequence_identifier">sequence\_identifier</a>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#sequence_port_list">sequence\_port\_list</a>  ]  <font color="purple"><b>)</b></font>  ]  <font color="purple"><b>;</b></font>  { <a href="#assertion_variable_declaration">assertion\_variable\_declaration</a>  }  <a href="#sequence_expr">sequence\_expr</a>  \[ <font color="purple"><b>;</b></font>  ]  <font color="purple"><b>endsequence</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#sequence_identifier">sequence\_identifier</a>  ]  
  
**sequence\_port\_list**{: #sequence_port_list }
:	<a href="#sequence_port_item">sequence\_port\_item</a>  { <font color="purple"><b>,</b></font> <a href="#sequence_port_item">sequence\_port\_item</a>  }  
  
**sequence\_port\_item**{: #sequence_port_item }
:	 { <a href="#attribute_instance">attribute\_instance</a>  }   \[ <font color="purple"><b>local</b></font>  \[ <a href="#sequence_lvar_port_direction">sequence\_lvar\_port\_direction</a>  ]   ]  <a href="#sequence_formal_type">sequence\_formal\_type</a> <a href="#formal_port_identifier">formal\_port\_identifier</a>  { <a href="#variable_dimension">variable\_dimension</a>  }   \[ <font color="purple"><b>=</b></font> <a href="#sequence_actual_arg">sequence\_actual\_arg</a>  ]  
  
**sequence\_lvar\_port\_direction**{: #sequence_lvar_port_direction }
:	<font color="purple"><b>input</b></font>   
        | <font color="purple"><b>inout</b></font>   
        | <font color="purple"><b>output</b></font> 
  
**sequence\_formal\_type**{: #sequence_formal_type }
:	<a href="#data_type_or_implicit">data\_type\_or\_implicit</a>   
        | <font color="purple"><b>sequence</b></font>   
        | <font color="purple"><b>untyped</b></font> 
  
**sequence\_expr**{: #sequence_expr }
:	<a href="#cycle_delay_range">cycle\_delay\_range</a> <a href="#sequence_expr">sequence\_expr</a>  { <a href="#cycle_delay_range">cycle\_delay\_range</a> <a href="#sequence_expr">sequence\_expr</a>  }    
        | <a href="#sequence_expr">sequence\_expr</a> <a href="#cycle_delay_range">cycle\_delay\_range</a> <a href="#sequence_expr">sequence\_expr</a>  { <a href="#cycle_delay_range">cycle\_delay\_range</a> <a href="#sequence_expr">sequence\_expr</a>  }    
        | <a href="#expression_or_dist">expression\_or\_dist</a>  \[ <a href="#boolean_abbrev">boolean\_abbrev</a>  ]    
        | <a href="#sequence_instance">sequence\_instance</a>  \[ <a href="#sequence_abbrev">sequence\_abbrev</a>  ]    
        | <font color="purple"><b>(</b></font> <a href="#sequence_expr">sequence\_expr</a>  { <font color="purple"><b>,</b></font> <a href="#sequence_match_item">sequence\_match\_item</a>  }  <font color="purple"><b>)</b></font>  \[ <a href="#sequence_abbrev">sequence\_abbrev</a>  ]    
        | <a href="#sequence_expr">sequence\_expr</a> <font color="purple"><b>and</b></font> <a href="#sequence_expr">sequence\_expr</a>   
        | <a href="#sequence_expr">sequence\_expr</a> <font color="purple"><b>intersect</b></font> <a href="#sequence_expr">sequence\_expr</a>   
        | <a href="#sequence_expr">sequence\_expr</a> <font color="purple"><b>or</b></font> <a href="#sequence_expr">sequence\_expr</a>   
        | <font color="purple"><b>first\_match</b></font> <font color="purple"><b>(</b></font> <a href="#sequence_expr">sequence\_expr</a>  { <font color="purple"><b>,</b></font> <a href="#sequence_match_item">sequence\_match\_item</a>  }  <font color="purple"><b>)</b></font>   
        | <a href="#expression_or_dist">expression\_or\_dist</a> <font color="purple"><b>throughout</b></font> <a href="#sequence_expr">sequence\_expr</a>   
        | <a href="#sequence_expr">sequence\_expr</a> <font color="purple"><b>within</b></font> <a href="#sequence_expr">sequence\_expr</a>   
        | <a href="#clocking_event">clocking\_event</a> <a href="#sequence_expr">sequence\_expr</a> 
  
**cycle\_delay\_range**{: #cycle_delay_range }
:	<font color="purple"><b>##</b></font> <a href="#constant_primary">constant\_primary</a>   
        | <font color="purple"><b>##</b></font> <font color="purple"><b>\[</b></font> <a href="#cycle_delay_const_range_expression">cycle\_delay\_const\_range\_expression</a> <font color="purple"><b>]</b></font>   
        | <font color="purple"><b>##\[\*]</b></font>   
        | <font color="purple"><b>##\[+]</b></font> 
  
**sequence\_method\_call**{: #sequence_method_call }
:	<a href="#sequence_instance">sequence\_instance</a> <font color="purple"><b>.</b></font> <a href="#method_identifier">method\_identifier</a> 
  
**sequence\_match\_item**{: #sequence_match_item }
:	<a href="#operator_assignment">operator\_assignment</a>   
        | <a href="#inc_or_dec_expression">inc\_or\_dec\_expression</a>   
        | <a href="#subroutine_call">subroutine\_call</a> 
  
**sequence\_instance**{: #sequence_instance }
:	<a href="#ps_or_hierarchical_sequence_identifier">ps\_or\_hierarchical\_sequence\_identifier</a>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#sequence_list_of_arguments">sequence\_list\_of\_arguments</a>  ]  <font color="purple"><b>)</b></font>  ]  
  
**sequence\_list\_of\_arguments**{: #sequence_list_of_arguments }
:	 \[ <a href="#sequence_actual_arg">sequence\_actual\_arg</a>  ]   { <font color="purple"><b>,</b></font>  \[ <a href="#sequence_actual_arg">sequence\_actual\_arg</a>  ]   }   { <font color="purple"><b>,</b></font> <font color="purple"><b>.</b></font> <a href="#identifier">identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#sequence_actual_arg">sequence\_actual\_arg</a>  ]  <font color="purple"><b>)</b></font>  }    
        | <font color="purple"><b>.</b></font> <a href="#identifier">identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#sequence_actual_arg">sequence\_actual\_arg</a>  ]  <font color="purple"><b>)</b></font>  { <font color="purple"><b>,</b></font> <font color="purple"><b>.</b></font> <a href="#identifier">identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#sequence_actual_arg">sequence\_actual\_arg</a>  ]  <font color="purple"><b>)</b></font>  }  
  
**sequence\_actual\_arg**{: #sequence_actual_arg }
:	<a href="#event_expression">event\_expression</a>   
        | <a href="#sequence_expr">sequence\_expr</a> 
  
**boolean\_abbrev**{: #boolean_abbrev }
:	<a href="#consecutive_repetition">consecutive\_repetition</a>   
        | <a href="#non_consecutive_repetition">non\_consecutive\_repetition</a>   
        | <a href="#goto_repetition">goto\_repetition</a> 
  
**sequence\_abbrev**{: #sequence_abbrev }
:	<a href="#consecutive_repetition">consecutive\_repetition</a> 
  
**consecutive\_repetition**{: #consecutive_repetition }
:	<font color="purple"><b>\[\*</b></font> <a href="#const_or_range_expression">const\_or\_range\_expression</a> <font color="purple"><b>]</b></font>   
        | <font color="purple"><b>\[\*]</b></font>   
        | <font color="purple"><b>\[+]</b></font> 
  
**non\_consecutive\_repetition**{: #non_consecutive_repetition }
:	<font color="purple"><b>\[=</b></font> <a href="#const_or_range_expression">const\_or\_range\_expression</a> <font color="purple"><b>]</b></font> 
  
**goto\_repetition**{: #goto_repetition }
:	<font color="purple"><b>\[-></b></font> <a href="#const_or_range_expression">const\_or\_range\_expression</a> <font color="purple"><b>]</b></font> 
  
**const\_or\_range\_expression**{: #const_or_range_expression }
:	<a href="#constant_expression">constant\_expression</a>   
        | <a href="#cycle_delay_const_range_expression">cycle\_delay\_const\_range\_expression</a> 
  
**cycle\_delay\_const\_range\_expression**{: #cycle_delay_const_range_expression }
:	<a href="#constant_expression">constant\_expression</a> <font color="purple"><b>:</b></font> <a href="#constant_expression">constant\_expression</a>   
        | <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>:</b></font> <font color="purple"><b>$</b></font> 
  
**expression\_or\_dist**{: #expression_or_dist }
:	<a href="#expression">expression</a>  \[ <font color="purple"><b>dist</b></font>  { <a href="#dist_list">dist\_list</a>  }   ]  
  
**assertion\_variable\_declaration**{: #assertion_variable_declaration }
:	<a href="#var_data_type">var\_data\_type</a> <a href="#list_of_variable_decl_assignments">list\_of\_variable\_decl\_assignments</a> <font color="purple"><b>;</b></font> 
  
**let\_declaration**{: #let_declaration }
:	<font color="purple"><b>let</b></font> <a href="#let_identifier">let\_identifier</a>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#let_port_list">let\_port\_list</a>  ]  <font color="purple"><b>)</b></font>  ]  <font color="purple"><b>=</b></font> <a href="#expression">expression</a> <font color="purple"><b>;</b></font> 
  
**let\_identifier**{: #let_identifier }
:	<a href="#identifier">identifier</a> 
  
**let\_port\_list**{: #let_port_list }
:	<a href="#let_port_item">let\_port\_item</a>  { <font color="purple"><b>,</b></font> <a href="#let_port_item">let\_port\_item</a>  }  
  
**let\_port\_item**{: #let_port_item }
:	 { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#let_formal_type">let\_formal\_type</a> <a href="#formal_port_identifier">formal\_port\_identifier</a>  { <a href="#variable_dimension">variable\_dimension</a>  }   \[ <font color="purple"><b>=</b></font> <a href="#expression">expression</a>  ]  
  
**let\_formal\_type**{: #let_formal_type }
:	<a href="#data_type_or_implicit">data\_type\_or\_implicit</a>   
        | <font color="purple"><b>untyped</b></font> 
  
**let\_expression**{: #let_expression }
:	 \[ <a href="#package_scope">package\_scope</a>  ]  <a href="#let_identifier">let\_identifier</a>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#let_list_of_arguments">let\_list\_of\_arguments</a>  ]  <font color="purple"><b>)</b></font>  ]  
  
**let\_list\_of\_arguments**{: #let_list_of_arguments }
:	 \[ <a href="#let_actual_arg">let\_actual\_arg</a>  ]   { <font color="purple"><b>,</b></font>  \[ <a href="#let_actual_arg">let\_actual\_arg</a>  ]   }   { <font color="purple"><b>,</b></font> <font color="purple"><b>.</b></font> <a href="#identifier">identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#let_actual_arg">let\_actual\_arg</a>  ]  <font color="purple"><b>)</b></font>  }    
        | <font color="purple"><b>.</b></font> <a href="#identifier">identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#let_actual_arg">let\_actual\_arg</a>  ]  <font color="purple"><b>)</b></font>  { <font color="purple"><b>,</b></font> <font color="purple"><b>.</b></font> <a href="#identifier">identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#let_actual_arg">let\_actual\_arg</a>  ]  <font color="purple"><b>)</b></font>  }  
  
**let\_actual\_arg**{: #let_actual_arg }
:	<a href="#expression">expression</a> 
  
### Covergroup declarations
  
**covergroup\_declaration**{: #covergroup_declaration }
:	<font color="purple"><b>covergroup</b></font> <a href="#covergroup_identifier">covergroup\_identifier</a>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#tf_port_list">tf\_port\_list</a>  ]  <font color="purple"><b>)</b></font>  ]   \[ <a href="#coverage_event">coverage\_event</a>  ]  <font color="purple"><b>;</b></font>  { <a href="#coverage_spec_or_option">coverage\_spec\_or\_option</a>  }  <font color="purple"><b>endgroup</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#covergroup_identifier">covergroup\_identifier</a>  ]  
  
**coverage\_spec\_or\_option**{: #coverage_spec_or_option }
:	 { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#coverage_spec">coverage\_spec</a>   
        |  { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#coverage_option">coverage\_option</a> <font color="purple"><b>;</b></font> 
  
**coverage\_option**{: #coverage_option }
:	<font color="purple"><b>option</b></font> <font color="purple"><b>.</b></font> <a href="#member_identifier">member\_identifier</a> <font color="purple"><b>=</b></font> <a href="#expression">expression</a>   
        | <font color="purple"><b>type\_option</b></font> <font color="purple"><b>.</b></font> <a href="#member_identifier">member\_identifier</a> <font color="purple"><b>=</b></font> <a href="#constant_expression">constant\_expression</a> 
  
**coverage\_spec**{: #coverage_spec }
:	<a href="#cover_point">cover\_point</a>   
        | <a href="#cover_cross">cover\_cross</a> 
  
**coverage\_event**{: #coverage_event }
:	<a href="#clocking_event">clocking\_event</a>   
        | <font color="purple"><b>with</b></font> <font color="purple"><b>function</b></font> <font color="purple"><b>sample</b></font> <font color="purple"><b>(</b></font>  \[ <a href="#tf_port_list">tf\_port\_list</a>  ]  <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>@@</b></font> <font color="purple"><b>(</b></font> <a href="#block_event_expression">block\_event\_expression</a> <font color="purple"><b>)</b></font> 
  
**block\_event\_expression**{: #block_event_expression }
:	<a href="#block_event_expression">block\_event\_expression</a> <font color="purple"><b>or</b></font> <a href="#block_event_expression">block\_event\_expression</a>   
        | <font color="purple"><b>begin</b></font> <a href="#hierarchical_btf_identifier">hierarchical\_btf\_identifier</a>   
        | <font color="purple"><b>end</b></font> <a href="#hierarchical_btf_identifier">hierarchical\_btf\_identifier</a> 
  
**hierarchical\_btf\_identifier**{: #hierarchical_btf_identifier }
:	<a href="#hierarchical_tf_identifier">hierarchical\_tf\_identifier</a>   
        | <a href="#hierarchical_block_identifier">hierarchical\_block\_identifier</a>   
        |  \[ <a href="#hierarchical_identifier">hierarchical\_identifier</a> <font color="purple"><b>.</b></font>   
         | <a href="#class_scope">class\_scope</a>  ]  <a href="#method_identifier">method\_identifier</a> 
  
**cover\_point**{: #cover_point }
:	 \[  \[ <a href="#data_type_or_implicit">data\_type\_or\_implicit</a>  ]  <a href="#cover_point_identifier">cover\_point\_identifier</a> <font color="purple"><b>:</b></font>  ]  <font color="purple"><b>coverpoint</b></font> <a href="#expression">expression</a>  \[ <font color="purple"><b>iff</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font>  ]  <a href="#bins_or_empty">bins\_or\_empty</a> 
  
**bins\_or\_empty**{: #bins_or_empty }
:	 {  { <a href="#attribute_instance">attribute\_instance</a>  }   { <a href="#bins_or_options">bins\_or\_options</a> <font color="purple"><b>;</b></font>  }   }    
        | <font color="purple"><b>;</b></font> 
  
**bins\_or\_options**{: #bins_or_options }
:	<a href="#coverage_option">coverage\_option</a>   
        |  \[ <font color="purple"><b>wildcard</b></font>  ]  <a href="#bins_keyword">bins\_keyword</a> <a href="#bin_identifier">bin\_identifier</a>  \[ <font color="purple"><b>\[</b></font>  \[ <a href="#covergroup_expression">covergroup\_expression</a>  ]  <font color="purple"><b>]</b></font>  ]  <font color="purple"><b>=</b></font> <font color="purple"><b>{</b></font> <a href="#covergroup_range_list">covergroup\_range\_list</a> <font color="purple"><b>}</b></font>  \[ <font color="purple"><b>with</b></font> <font color="purple"><b>(</b></font> <a href="#with_covergroup_expression">with\_covergroup\_expression</a> <font color="purple"><b>)</b></font>  ]   \[ <font color="purple"><b>iff</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font>  ]    
        |  \[ <font color="purple"><b>wildcard</b></font>  ]  <a href="#bins_keyword">bins\_keyword</a> <a href="#bin_identifier">bin\_identifier</a>  \[ <font color="purple"><b>\[</b></font>  \[ <a href="#covergroup_expression">covergroup\_expression</a>  ]  <font color="purple"><b>]</b></font>  ]  <font color="purple"><b>=</b></font> <a href="#cover_point_identifier">cover\_point\_identifier</a>  \[ <font color="purple"><b>with</b></font> <font color="purple"><b>(</b></font> <a href="#with_covergroup_expression">with\_covergroup\_expression</a> <font color="purple"><b>)</b></font>  ]   \[ <font color="purple"><b>iff</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font>  ]    
        |  \[ <font color="purple"><b>wildcard</b></font>  ]  <a href="#bins_keyword">bins\_keyword</a> <a href="#bin_identifier">bin\_identifier</a>  \[ <font color="purple"><b>\[</b></font>  \[ <a href="#covergroup_expression">covergroup\_expression</a>  ]  <font color="purple"><b>]</b></font>  ]  <font color="purple"><b>=</b></font> <a href="#set_covergroup_expression">set\_covergroup\_expression</a>  \[ <font color="purple"><b>iff</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font>  ]    
        |  \[ <font color="purple"><b>wildcard</b></font>  ]  <a href="#bins_keyword">bins\_keyword</a> <a href="#bin_identifier">bin\_identifier</a>  \[ <font color="purple"><b>\[</b></font> <font color="purple"><b>]</b></font>  ]  <font color="purple"><b>=</b></font> <a href="#trans_list">trans\_list</a>  \[ <font color="purple"><b>iff</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font>  ]    
        | <a href="#bins_keyword">bins\_keyword</a> <a href="#bin_identifier">bin\_identifier</a>  \[  \[  \[ <a href="#covergroup_expression">covergroup\_expression</a>  ]   ]   ]  <font color="purple"><b>=</b></font> <font color="purple"><b>default</b></font>  \[ <font color="purple"><b>iff</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font>  ]    
        | <a href="#bins_keyword">bins\_keyword</a> <a href="#bin_identifier">bin\_identifier</a> <font color="purple"><b>=</b></font> <font color="purple"><b>default</b></font> <font color="purple"><b>sequence</b></font>  \[ <font color="purple"><b>iff</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font>  ]  
  
**bins\_keyword**{: #bins_keyword }
:	<font color="purple"><b>bins</b></font>   
        | <font color="purple"><b>illegal\_bins</b></font>   
        | <font color="purple"><b>ignore\_bins</b></font> 
  
**trans\_list**{: #trans_list }
:	<font color="purple"><b>(</b></font> <a href="#trans_set">trans\_set</a> <font color="purple"><b>)</b></font>  { <font color="purple"><b>,</b></font> <font color="purple"><b>(</b></font> <a href="#trans_set">trans\_set</a> <font color="purple"><b>)</b></font>  }  
  
**trans\_set**{: #trans_set }
:	<a href="#trans_range_list">trans\_range\_list</a>  { <font color="purple"><b>=></b></font> <a href="#trans_range_list">trans\_range\_list</a>  }  
  
**trans\_range\_list**{: #trans_range_list }
:	<a href="#trans_item">trans\_item</a>   
        | <a href="#trans_item">trans\_item</a> <font color="purple"><b>\[\*</b></font> <a href="#repeat_range">repeat\_range</a> <font color="purple"><b>]</b></font>   
        | <a href="#trans_item">trans\_item</a> <font color="purple"><b>\[-></b></font> <a href="#repeat_range">repeat\_range</a> <font color="purple"><b>]</b></font>   
        | <a href="#trans_item">trans\_item</a> <font color="purple"><b>\[=</b></font> <a href="#repeat_range">repeat\_range</a> <font color="purple"><b>]</b></font> 
  
**trans\_item**{: #trans_item }
:	<a href="#covergroup_range_list">covergroup\_range\_list</a> 
  
**repeat\_range**{: #repeat_range }
:	<a href="#covergroup_expression">covergroup\_expression</a>   
        | <a href="#covergroup_expression">covergroup\_expression</a> <font color="purple"><b>:</b></font> <a href="#covergroup_expression">covergroup\_expression</a> 
  
**cover\_cross**{: #cover_cross }
:	 \[ <a href="#cross_identifier">cross\_identifier</a> <font color="purple"><b>:</b></font>  ]  <font color="purple"><b>cross</b></font> <a href="#list_of_cross_items">list\_of\_cross\_items</a>  \[ <font color="purple"><b>iff</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font>  ]  <a href="#cross_body">cross\_body</a> 
  
**list\_of\_cross\_items**{: #list_of_cross_items }
:	<a href="#cross_item">cross\_item</a> <font color="purple"><b>,</b></font> <a href="#cross_item">cross\_item</a>  { <font color="purple"><b>,</b></font> <a href="#cross_item">cross\_item</a>  }  
  
**cross\_item**{: #cross_item }
:	<a href="#cover_point_identifier">cover\_point\_identifier</a>   
        | <a href="#variable_identifier">variable\_identifier</a> 
  
**cross\_body**{: #cross_body }
:	<font color="purple"><b>{</b></font>  { <a href="#cross_body_item">cross\_body\_item</a> <font color="purple"><b>;</b></font>  }  <font color="purple"><b>}</b></font>   
        | <font color="purple"><b>;</b></font> 
  
**cross\_body\_item**{: #cross_body_item }
:	<a href="#function_declaration">function\_declaration</a>   
        | <a href="#bins_selection_or_option">bins\_selection\_or\_option</a> <font color="purple"><b>;</b></font> 
  
**bins\_selection\_or\_option**{: #bins_selection_or_option }
:	 { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#coverage_option">coverage\_option</a>   
        |  { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#bins_selection">bins\_selection</a> 
  
**bins\_selection**{: #bins_selection }
:	<a href="#bins_keyword">bins\_keyword</a> <a href="#bin_identifier">bin\_identifier</a> <font color="purple"><b>=</b></font> <a href="#select_expression">select\_expression</a>  \[ <font color="purple"><b>iff</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font>  ]  
  
**select\_expression**{: #select_expression }[^footnote_24]
:	<a href="#select_condition">select\_condition</a>   
        | <font color="purple"><b>!</b></font> <a href="#select_condition">select\_condition</a>   
        | <a href="#select_expression">select\_expression</a> <font color="purple"><b>&&</b></font> <a href="#select_expression">select\_expression</a>   
        | <a href="#select_expression">select\_expression</a> <font color="purple"><b>||</b></font> <a href="#select_expression">select\_expression</a>   
        | <font color="purple"><b>(</b></font> <a href="#select_expression">select\_expression</a> <font color="purple"><b>)</b></font>   
        | <a href="#select_expression">select\_expression</a> <font color="purple"><b>with</b></font> <font color="purple"><b>(</b></font> <a href="#with_covergroup_expression">with\_covergroup\_expression</a> <font color="purple"><b>)</b></font>  \[ <font color="purple"><b>matches</b></font> <a href="#integer_covergroup_expression">integer\_covergroup\_expression</a>  ]    
        | <a href="#cross_identifier">cross\_identifier</a>   
        | <a href="#cross_set_expression">cross\_set\_expression</a>  \[ <font color="purple"><b>matches</b></font> <a href="#integer_covergroup_expression">integer\_covergroup\_expression</a>  ]  
  
**select\_condition**{: #select_condition }
:	<font color="purple"><b>binsof</b></font> <font color="purple"><b>(</b></font> <a href="#bins_expression">bins\_expression</a> <font color="purple"><b>)</b></font>  \[ <font color="purple"><b>intersect</b></font> <font color="purple"><b>{</b></font> <a href="#covergroup_range_list">covergroup\_range\_list</a> <font color="purple"><b>}</b></font>  ]  
  
**bins\_expression**{: #bins_expression }
:	<a href="#variable_identifier">variable\_identifier</a>   
        | <a href="#cover_point_identifier">cover\_point\_identifier</a>  \[ <font color="purple"><b>.</b></font> <a href="#bin_identifier">bin\_identifier</a>  ]  
  
**covergroup\_range\_list**{: #covergroup_range_list }
:	<a href="#covergroup_value_range">covergroup\_value\_range</a>  { <font color="purple"><b>,</b></font> <a href="#covergroup_value_range">covergroup\_value\_range</a>  }  
  
**covergroup\_value\_range**{: #covergroup_value_range }
:	<a href="#covergroup_expression">covergroup\_expression</a>   
        | <font color="purple"><b>\[</b></font> <a href="#covergroup_expression">covergroup\_expression</a> <font color="purple"><b>:</b></font> <a href="#covergroup_expression">covergroup\_expression</a> <font color="purple"><b>]</b></font> [^footnote_25] 
  
**with\_covergroup\_expression**{: #with_covergroup_expression }
:	<a href="#covergroup_expression">covergroup\_expression</a> [^footnote_26] 
  
**set\_covergroup\_expression**{: #set_covergroup_expression }
:	<a href="#covergroup_expression">covergroup\_expression</a> [^footnote_27] 
  
**integer\_covergroup\_expression**{: #integer_covergroup_expression }
:	<a href="#covergroup_expression">covergroup\_expression</a> 
  
**cross\_set\_expression**{: #cross_set_expression }
:	<a href="#covergroup_expression">covergroup\_expression</a> 
  
**covergroup\_expression**{: #covergroup_expression }
:	<a href="#expression">expression</a> [^footnote_28] 
  
## Primitive instances
  
### Primitive instantiation and instances
  
**gate\_instantiation**{: #gate_instantiation }
:	<a href="#cmos_switchtype">cmos\_switchtype</a>  \[ <a href="#delay3">delay3</a>  ]  <a href="#cmos_switch_instance">cmos\_switch\_instance</a>  { <font color="purple"><b>,</b></font> <a href="#cmos_switch_instance">cmos\_switch\_instance</a>  }  <font color="purple"><b>;</b></font>   
        | <a href="#enable_gatetype">enable\_gatetype</a>  \[ <a href="#drive_strength">drive\_strength</a>  ]   \[ <a href="#delay3">delay3</a>  ]  <a href="#enable_gate_instance">enable\_gate\_instance</a>  { <font color="purple"><b>,</b></font> <a href="#enable_gate_instance">enable\_gate\_instance</a>  }  <font color="purple"><b>;</b></font>   
        | <a href="#mos_switchtype">mos\_switchtype</a>  \[ <a href="#delay3">delay3</a>  ]  <a href="#mos_switch_instance">mos\_switch\_instance</a>  { <font color="purple"><b>,</b></font> <a href="#mos_switch_instance">mos\_switch\_instance</a>  }  <font color="purple"><b>;</b></font>   
        | <a href="#n_input_gatetype">n\_input\_gatetype</a>  \[ <a href="#drive_strength">drive\_strength</a>  ]   \[ <a href="#delay2">delay2</a>  ]  <a href="#n_input_gate_instance">n\_input\_gate\_instance</a>  { <font color="purple"><b>,</b></font> <a href="#n_input_gate_instance">n\_input\_gate\_instance</a>  }  <font color="purple"><b>;</b></font>   
        | <a href="#n_output_gatetype">n\_output\_gatetype</a>  \[ <a href="#drive_strength">drive\_strength</a>  ]   \[ <a href="#delay2">delay2</a>  ]  <a href="#n_output_gate_instance">n\_output\_gate\_instance</a>  { <font color="purple"><b>,</b></font> <a href="#n_output_gate_instance">n\_output\_gate\_instance</a>  }  <font color="purple"><b>;</b></font>   
        | <a href="#pass_en_switchtype">pass\_en\_switchtype</a>  \[ <a href="#delay2">delay2</a>  ]  <a href="#pass_enable_switch_instance">pass\_enable\_switch\_instance</a>  { <font color="purple"><b>,</b></font> <a href="#pass_enable_switch_instance">pass\_enable\_switch\_instance</a>  }  <font color="purple"><b>;</b></font>   
        | <a href="#pass_switchtype">pass\_switchtype</a> <a href="#pass_switch_instance">pass\_switch\_instance</a>  { <font color="purple"><b>,</b></font> <a href="#pass_switch_instance">pass\_switch\_instance</a>  }  <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>pulldown</b></font>  \[ <a href="#pulldown_strength">pulldown\_strength</a>  ]  <a href="#pull_gate_instance">pull\_gate\_instance</a>  { <font color="purple"><b>,</b></font> <a href="#pull_gate_instance">pull\_gate\_instance</a>  }  <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>pullup</b></font>  \[ <a href="#pullup_strength">pullup\_strength</a>  ]  <a href="#pull_gate_instance">pull\_gate\_instance</a>  { <font color="purple"><b>,</b></font> <a href="#pull_gate_instance">pull\_gate\_instance</a>  }  <font color="purple"><b>;</b></font> 
  
**cmos\_switch\_instance**{: #cmos_switch_instance }
:	 \[ <a href="#name_of_instance">name\_of\_instance</a>  ]  <font color="purple"><b>(</b></font> <a href="#output_terminal">output\_terminal</a> <font color="purple"><b>,</b></font> <a href="#input_terminal">input\_terminal</a> <font color="purple"><b>,</b></font> <a href="#ncontrol_terminal">ncontrol\_terminal</a> <font color="purple"><b>,</b></font> <a href="#pcontrol_terminal">pcontrol\_terminal</a> <font color="purple"><b>)</b></font> 
  
**enable\_gate\_instance**{: #enable_gate_instance }
:	 \[ <a href="#name_of_instance">name\_of\_instance</a>  ]  <font color="purple"><b>(</b></font> <a href="#output_terminal">output\_terminal</a> <font color="purple"><b>,</b></font> <a href="#input_terminal">input\_terminal</a> <font color="purple"><b>,</b></font> <a href="#enable_terminal">enable\_terminal</a> <font color="purple"><b>)</b></font> 
  
**mos\_switch\_instance**{: #mos_switch_instance }
:	 \[ <a href="#name_of_instance">name\_of\_instance</a>  ]  <font color="purple"><b>(</b></font> <a href="#output_terminal">output\_terminal</a> <font color="purple"><b>,</b></font> <a href="#input_terminal">input\_terminal</a> <font color="purple"><b>,</b></font> <a href="#enable_terminal">enable\_terminal</a> <font color="purple"><b>)</b></font> 
  
**n\_input\_gate\_instance**{: #n_input_gate_instance }
:	 \[ <a href="#name_of_instance">name\_of\_instance</a>  ]  <font color="purple"><b>(</b></font> <a href="#output_terminal">output\_terminal</a> <font color="purple"><b>,</b></font> <a href="#input_terminal">input\_terminal</a>  { <font color="purple"><b>,</b></font> <a href="#input_terminal">input\_terminal</a>  }  <font color="purple"><b>)</b></font> 
  
**n\_output\_gate\_instance**{: #n_output_gate_instance }
:	 \[ <a href="#name_of_instance">name\_of\_instance</a>  ]  <font color="purple"><b>(</b></font> <a href="#output_terminal">output\_terminal</a>  { <font color="purple"><b>,</b></font> <a href="#output_terminal">output\_terminal</a>  }  <font color="purple"><b>,</b></font> <a href="#input_terminal">input\_terminal</a> <font color="purple"><b>)</b></font> 
  
**pass\_switch\_instance**{: #pass_switch_instance }
:	 \[ <a href="#name_of_instance">name\_of\_instance</a>  ]  <font color="purple"><b>(</b></font> <a href="#inout_terminal">inout\_terminal</a> <font color="purple"><b>,</b></font> <a href="#inout_terminal">inout\_terminal</a> <font color="purple"><b>)</b></font> 
  
**pass\_enable\_switch\_instance**{: #pass_enable_switch_instance }
:	 \[ <a href="#name_of_instance">name\_of\_instance</a>  ]  <font color="purple"><b>(</b></font> <a href="#inout_terminal">inout\_terminal</a> <font color="purple"><b>,</b></font> <a href="#inout_terminal">inout\_terminal</a> <font color="purple"><b>,</b></font> <a href="#enable_terminal">enable\_terminal</a> <font color="purple"><b>)</b></font> 
  
**pull\_gate\_instance**{: #pull_gate_instance }
:	 \[ <a href="#name_of_instance">name\_of\_instance</a>  ]  <font color="purple"><b>(</b></font> <a href="#output_terminal">output\_terminal</a> <font color="purple"><b>)</b></font> 
  
### Primitive strengths
  
**pulldown\_strength**{: #pulldown_strength }
:	<font color="purple"><b>(</b></font> <a href="#strength0">strength0</a> <font color="purple"><b>,</b></font> <a href="#strength1">strength1</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>(</b></font> <a href="#strength1">strength1</a> <font color="purple"><b>,</b></font> <a href="#strength0">strength0</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>(</b></font> <a href="#strength0">strength0</a> <font color="purple"><b>)</b></font> 
  
**pullup\_strength**{: #pullup_strength }
:	<font color="purple"><b>(</b></font> <a href="#strength0">strength0</a> <font color="purple"><b>,</b></font> <a href="#strength1">strength1</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>(</b></font> <a href="#strength1">strength1</a> <font color="purple"><b>,</b></font> <a href="#strength0">strength0</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>(</b></font> <a href="#strength1">strength1</a> <font color="purple"><b>)</b></font> 
  
### Primitive terminals
  
**enable\_terminal**{: #enable_terminal }
:	<a href="#expression">expression</a> 
  
**inout\_terminal**{: #inout_terminal }
:	<a href="#net_lvalue">net\_lvalue</a> 
  
**input\_terminal**{: #input_terminal }
:	<a href="#expression">expression</a> 
  
**ncontrol\_terminal**{: #ncontrol_terminal }
:	<a href="#expression">expression</a> 
  
**output\_terminal**{: #output_terminal }
:	<a href="#net_lvalue">net\_lvalue</a> 
  
**pcontrol\_terminal**{: #pcontrol_terminal }
:	<a href="#expression">expression</a> 
  
### Primitive gate and switch types
  
**cmos\_switchtype**{: #cmos_switchtype }
:	<font color="purple"><b>cmos</b></font>   
        | <font color="purple"><b>rcmos</b></font> 
  
**enable\_gatetype**{: #enable_gatetype }
:	<font color="purple"><b>bufif0</b></font>   
        | <font color="purple"><b>bufif1</b></font>   
        | <font color="purple"><b>notif0</b></font>   
        | <font color="purple"><b>notif1</b></font> 
  
**mos\_switchtype**{: #mos_switchtype }
:	<font color="purple"><b>nmos</b></font>   
        | <font color="purple"><b>pmos</b></font>   
        | <font color="purple"><b>rnmos</b></font>   
        | <font color="purple"><b>rpmos</b></font> 
  
**n\_input\_gatetype**{: #n_input_gatetype }
:	<font color="purple"><b>and</b></font>   
        | <font color="purple"><b>nand</b></font>   
        | <font color="purple"><b>or</b></font>   
        | <font color="purple"><b>nor</b></font>   
        | <font color="purple"><b>xor</b></font>   
        | <font color="purple"><b>xnor</b></font> 
  
**n\_output\_gatetype**{: #n_output_gatetype }
:	<font color="purple"><b>buf</b></font>   
        | <font color="purple"><b>not</b></font> 
  
**pass\_en\_switchtype**{: #pass_en_switchtype }
:	<font color="purple"><b>tranif0</b></font>   
        | <font color="purple"><b>tranif1</b></font>   
        | <font color="purple"><b>rtranif1</b></font>   
        | <font color="purple"><b>rtranif0</b></font> 
  
**pass\_switchtype**{: #pass_switchtype }
:	<font color="purple"><b>tran</b></font>   
        | <font color="purple"><b>rtran</b></font> 
  
## Instantiations
  
### Instantation
  
#### Module instantation
  
**module\_instantiation**{: #module_instantiation }
:	<a href="#module_identifier">module\_identifier</a>  \[ <a href="#parameter_value_assignment">parameter\_value\_assignment</a>  ]  <a href="#hierarchical_instance">hierarchical\_instance</a>  { <font color="purple"><b>,</b></font> <a href="#hierarchical_instance">hierarchical\_instance</a>  }  <font color="purple"><b>;</b></font> 
  
**parameter\_value\_assignment**{: #parameter_value_assignment }
:	<font color="purple"><b>#</b></font> <font color="purple"><b>(</b></font>  \[ <a href="#list_of_parameter_assignments">list\_of\_parameter\_assignments</a>  ]  <font color="purple"><b>)</b></font> 
  
**list\_of\_parameter\_assignments**{: #list_of_parameter_assignments }
:	<a href="#ordered_parameter_assignment">ordered\_parameter\_assignment</a>  { <font color="purple"><b>,</b></font> <a href="#ordered_parameter_assignment">ordered\_parameter\_assignment</a>  }    
        | <a href="#named_parameter_assignment">named\_parameter\_assignment</a>  { <font color="purple"><b>,</b></font> <a href="#named_parameter_assignment">named\_parameter\_assignment</a>  }  
  
**ordered\_parameter\_assignment**{: #ordered_parameter_assignment }
:	<a href="#param_expression">param\_expression</a> 
  
**named\_parameter\_assignment**{: #named_parameter_assignment }
:	<font color="purple"><b>.</b></font> <a href="#parameter_identifier">parameter\_identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#param_expression">param\_expression</a>  ]  <font color="purple"><b>)</b></font> 
  
**hierarchical\_instance**{: #hierarchical_instance }
:	<a href="#name_of_instance">name\_of\_instance</a> <font color="purple"><b>(</b></font>  \[ <a href="#list_of_port_connections">list\_of\_port\_connections</a>  ]  <font color="purple"><b>)</b></font> 
  
**name\_of\_instance**{: #name_of_instance }
:	<a href="#instance_identifier">instance\_identifier</a>  { <a href="#unpacked_dimension">unpacked\_dimension</a>  }  
  
**list\_of\_port\_connections**{: #list_of_port_connections }[^footnote_29]
:	<a href="#ordered_port_connection">ordered\_port\_connection</a>  { <font color="purple"><b>,</b></font> <a href="#ordered_port_connection">ordered\_port\_connection</a>  }    
        | <a href="#named_port_connection">named\_port\_connection</a>  { <font color="purple"><b>,</b></font> <a href="#named_port_connection">named\_port\_connection</a>  }  
  
**ordered\_port\_connection**{: #ordered_port_connection }
:	 { <a href="#attribute_instance">attribute\_instance</a>  }   \[ <a href="#expression">expression</a>  ]  
  
**named\_port\_connection**{: #named_port_connection }
:	 { <a href="#attribute_instance">attribute\_instance</a>  }  <font color="purple"><b>.</b></font> <a href="#port_identifier">port\_identifier</a>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#expression">expression</a>  ]  <font color="purple"><b>)</b></font>  ]    
        |  { <a href="#attribute_instance">attribute\_instance</a>  }  <font color="purple"><b>.\*</b></font> 
  
#### Interface instantiation
  
**interface\_instantiation**{: #interface_instantiation }
:	<a href="#interface_identifier">interface\_identifier</a>  \[ <a href="#parameter_value_assignment">parameter\_value\_assignment</a>  ]  <a href="#hierarchical_instance">hierarchical\_instance</a>  { <font color="purple"><b>,</b></font> <a href="#hierarchical_instance">hierarchical\_instance</a>  }  <font color="purple"><b>;</b></font> 
  
####  Program instantiation
  
**program\_instantiation**{: #program_instantiation }
:	<a href="#program_identifier">program\_identifier</a>  \[ <a href="#parameter_value_assignment">parameter\_value\_assignment</a>  ]  <a href="#hierarchical_instance">hierarchical\_instance</a>  { <font color="purple"><b>,</b></font> <a href="#hierarchical_instance">hierarchical\_instance</a>  }  <font color="purple"><b>;</b></font> 
  
#### Checker instantiation
  
**checker\_instantiation**{: #checker_instantiation }
:	<a href="#ps_checker_identifier">ps\_checker\_identifier</a> <a href="#name_of_instance">name\_of\_instance</a> <font color="purple"><b>(</b></font>  \[ <a href="#list_of_checker_port_connections">list\_of\_checker\_port\_connections</a>  ]  <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font> 
  
**list\_of\_checker\_port\_connections**{: #list_of_checker_port_connections }[^footnote_29]
:	<a href="#ordered_checker_port_connection">ordered\_checker\_port\_connection</a>  { <font color="purple"><b>,</b></font> <a href="#ordered_checker_port_connection">ordered\_checker\_port\_connection</a>  }    
        | <a href="#named_checker_port_connection">named\_checker\_port\_connection</a>  { <font color="purple"><b>,</b></font> <a href="#named_checker_port_connection">named\_checker\_port\_connection</a>  }  
  
**ordered\_checker\_port\_connection**{: #ordered_checker_port_connection }
:	 { <a href="#attribute_instance">attribute\_instance</a>  }   \[ <a href="#property_actual_arg">property\_actual\_arg</a>  ]  
  
**named\_checker\_port\_connection**{: #named_checker_port_connection }
:	 { <a href="#attribute_instance">attribute\_instance</a>  }  <font color="purple"><b>.</b></font> <a href="#formal_port_identifier">formal\_port\_identifier</a>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#property_actual_arg">property\_actual\_arg</a>  ]  <font color="purple"><b>)</b></font>  ]    
        |  { <a href="#attribute_instance">attribute\_instance</a>  }  <font color="purple"><b>.\*</b></font> 
  
### Generated instantiation
  
**generate\_region**{: #generate_region }
:	<font color="purple"><b>generate</b></font>  { <a href="#generate_item">generate\_item</a>  }  <font color="purple"><b>endgenerate</b></font> 
  
**loop\_generate\_construct**{: #loop_generate_construct }
:	<font color="purple"><b>for</b></font> <font color="purple"><b>(</b></font> <a href="#genvar_initialization">genvar\_initialization</a> <font color="purple"><b>;</b></font> <a href="#genvar_expression">genvar\_expression</a> <font color="purple"><b>;</b></font> <a href="#genvar_iteration">genvar\_iteration</a> <font color="purple"><b>)</b></font> <a href="#generate_block">generate\_block</a> 
  
**genvar\_initialization**{: #genvar_initialization }
:	 \[ <font color="purple"><b>genvar</b></font>  ]  <a href="#genvar_identifier">genvar\_identifier</a> <font color="purple"><b>=</b></font> <a href="#constant_expression">constant\_expression</a> 
  
**genvar\_iteration**{: #genvar_iteration }
:	<a href="#genvar_identifier">genvar\_identifier</a> <a href="#assignment_operator">assignment\_operator</a> <a href="#genvar_expression">genvar\_expression</a>   
        | <a href="#inc_or_dec_operator">inc\_or\_dec\_operator</a> <a href="#genvar_identifier">genvar\_identifier</a>   
        | <a href="#genvar_identifier">genvar\_identifier</a> <a href="#inc_or_dec_operator">inc\_or\_dec\_operator</a> 
  
**conditional\_generate\_construct**{: #conditional_generate_construct }
:	<a href="#if_generate_construct">if\_generate\_construct</a>   
        | <a href="#case_generate_construct">case\_generate\_construct</a> 
  
**if\_generate\_construct**{: #if_generate_construct }
:	<font color="purple"><b>if</b></font> <font color="purple"><b>(</b></font> <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>)</b></font> <a href="#generate_block">generate\_block</a>  \[ <font color="purple"><b>else</b></font> <a href="#generate_block">generate\_block</a>  ]  
  
**case\_generate\_construct**{: #case_generate_construct }
:	<font color="purple"><b>case</b></font> <font color="purple"><b>(</b></font> <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>)</b></font> <a href="#case_generate_item">case\_generate\_item</a>  { <a href="#case_generate_item">case\_generate\_item</a>  }  <font color="purple"><b>endcase</b></font> 
  
**case\_generate\_item**{: #case_generate_item }
:	<a href="#constant_expression">constant\_expression</a>  { <font color="purple"><b>,</b></font> <a href="#constant_expression">constant\_expression</a>  }  <font color="purple"><b>:</b></font> <a href="#generate_block">generate\_block</a>   
        | <font color="purple"><b>default</b></font>  \[ <font color="purple"><b>:</b></font>  ]  <a href="#generate_block">generate\_block</a> 
  
**generate\_block**{: #generate_block }
:	<a href="#generate_item">generate\_item</a>   
        |  \[ <a href="#generate_block_identifier">generate\_block\_identifier</a> <font color="purple"><b>:</b></font>  ]  <font color="purple"><b>begin</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#generate_block_identifier">generate\_block\_identifier</a>  ]   { <a href="#generate_item">generate\_item</a>  }  <font color="purple"><b>end</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#generate_block_identifier">generate\_block\_identifier</a>  ]  
  
**generate\_item**{: #generate_item }[^footnote_30]
:	<a href="#module_or_generate_item">module\_or\_generate\_item</a>   
        | <a href="#interface_or_generate_item">interface\_or\_generate\_item</a>   
        | <a href="#checker_or_generate_item">checker\_or\_generate\_item</a> 
  
## UDP declaration and instantiation
  
### UDP declaration
  
**udp\_nonansi\_declaration**{: #udp_nonansi_declaration }
:	 { <a href="#attribute_instance">attribute\_instance</a>  }  <font color="purple"><b>primitive</b></font> <a href="#udp_identifier">udp\_identifier</a> <font color="purple"><b>(</b></font> <a href="#udp_port_list">udp\_port\_list</a> <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font> 
  
**udp\_ansi\_declaration**{: #udp_ansi_declaration }
:	 { <a href="#attribute_instance">attribute\_instance</a>  }  <font color="purple"><b>primitive</b></font> <a href="#udp_identifier">udp\_identifier</a> <font color="purple"><b>(</b></font> <a href="#udp_declaration_port_list">udp\_declaration\_port\_list</a> <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font> 
  
**udp\_declaration**{: #udp_declaration }
:	<a href="#udp_nonansi_declaration">udp\_nonansi\_declaration</a> <a href="#udp_port_declaration">udp\_port\_declaration</a>  { <a href="#udp_port_declaration">udp\_port\_declaration</a>  }  <a href="#udp_body">udp\_body</a> <font color="purple"><b>endprimitive</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#udp_identifier">udp\_identifier</a>  ]    
        | <a href="#udp_ansi_declaration">udp\_ansi\_declaration</a> <a href="#udp_body">udp\_body</a> <font color="purple"><b>endprimitive</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#udp_identifier">udp\_identifier</a>  ]    
        | <font color="purple"><b>extern</b></font> <a href="#udp_nonansi_declaration">udp\_nonansi\_declaration</a>   
        | <font color="purple"><b>extern</b></font> <a href="#udp_ansi_declaration">udp\_ansi\_declaration</a>   
        |  { <a href="#attribute_instance">attribute\_instance</a>  }  <font color="purple"><b>primitive</b></font> <a href="#udp_identifier">udp\_identifier</a> <font color="purple"><b>(</b></font> <font color="purple"><b>.\*</b></font> <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font>  { <a href="#udp_port_declaration">udp\_port\_declaration</a>  }  <a href="#udp_body">udp\_body</a> <font color="purple"><b>endprimitive</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#udp_identifier">udp\_identifier</a>  ]  
  
### UDP ports
  
**udp\_port\_list**{: #udp_port_list }
:	<a href="#output_port_identifier">output\_port\_identifier</a> <font color="purple"><b>,</b></font> <a href="#input_port_identifier">input\_port\_identifier</a>  { <font color="purple"><b>,</b></font> <a href="#input_port_identifier">input\_port\_identifier</a>  }  
  
**udp\_declaration\_port\_list**{: #udp_declaration_port_list }
:	<a href="#udp_output_declaration">udp\_output\_declaration</a> <font color="purple"><b>,</b></font> <a href="#udp_input_declaration">udp\_input\_declaration</a>  { <font color="purple"><b>,</b></font> <a href="#udp_input_declaration">udp\_input\_declaration</a>  }  
  
**udp\_port\_declaration**{: #udp_port_declaration }
:	<a href="#udp_output_declaration">udp\_output\_declaration</a> <font color="purple"><b>;</b></font>   
        | <a href="#udp_input_declaration">udp\_input\_declaration</a> <font color="purple"><b>;</b></font>   
        | <a href="#udp_reg_declaration">udp\_reg\_declaration</a> <font color="purple"><b>;</b></font> 
  
**udp\_output\_declaration**{: #udp_output_declaration }
:	 { <a href="#attribute_instance">attribute\_instance</a>  }  <font color="purple"><b>output</b></font> <a href="#port_identifier">port\_identifier</a>   
        |  { <a href="#attribute_instance">attribute\_instance</a>  }  <font color="purple"><b>output</b></font> <font color="purple"><b>reg</b></font> <a href="#port_identifier">port\_identifier</a>  \[ <font color="purple"><b>=</b></font> <a href="#constant_expression">constant\_expression</a>  ]  
  
**udp\_input\_declaration**{: #udp_input_declaration }
:	 { <a href="#attribute_instance">attribute\_instance</a>  }  <font color="purple"><b>input</b></font> <a href="#list_of_udp_port_identifiers">list\_of\_udp\_port\_identifiers</a> 
  
**udp\_reg\_declaration**{: #udp_reg_declaration }
:	 { <a href="#attribute_instance">attribute\_instance</a>  }  <font color="purple"><b>reg</b></font> <a href="#variable_identifier">variable\_identifier</a> 
  
### UDP body
  
**udp\_body**{: #udp_body }
:	<a href="#combinational_body">combinational\_body</a>   
        | <a href="#sequential_body">sequential\_body</a> 
  
**combinational\_body**{: #combinational_body }
:	<font color="purple"><b>table</b></font> <a href="#combinational_entry">combinational\_entry</a>  { <a href="#combinational_entry">combinational\_entry</a>  }  <font color="purple"><b>endtable</b></font> 
  
**combinational\_entry**{: #combinational_entry }
:	<a href="#level_input_list">level\_input\_list</a> <font color="purple"><b>:</b></font> <a href="#output_symbol">output\_symbol</a> <font color="purple"><b>;</b></font> 
  
**sequential\_body**{: #sequential_body }
:	 \[ <a href="#udp_initial_statement">udp\_initial\_statement</a>  ]  <font color="purple"><b>table</b></font> <a href="#sequential_entry">sequential\_entry</a>  { <a href="#sequential_entry">sequential\_entry</a>  }  <font color="purple"><b>endtable</b></font> 
  
**udp\_initial\_statement**{: #udp_initial_statement }
:	<font color="purple"><b>initial</b></font> <a href="#output_port_identifier">output\_port\_identifier</a> <font color="purple"><b>=</b></font> <a href="#init_val">init\_val</a> <font color="purple"><b>;</b></font> 
  
**init\_val**{: #init_val }
:	<font color="purple"><b>1'b0</b></font>   
        | <font color="purple"><b>1'b1</b></font>   
        | <font color="purple"><b>1'bx</b></font>   
        | <font color="purple"><b>1'bX</b></font>   
        | <font color="purple"><b>1'B0</b></font>   
        | <font color="purple"><b>1'B1</b></font>   
        | <font color="purple"><b>1'Bx</b></font>   
        | <font color="purple"><b>1'BX</b></font>   
        | <font color="purple"><b>1</b></font>   
        | <font color="purple"><b>0</b></font> 
  
**sequential\_entry**{: #sequential_entry }
:	<a href="#seq_input_list">seq\_input\_list</a> <font color="purple"><b>:</b></font> <a href="#current_state">current\_state</a> <font color="purple"><b>:</b></font> <a href="#next_state">next\_state</a> <font color="purple"><b>;</b></font> 
  
**seq\_input\_list**{: #seq_input_list }
:	<a href="#level_input_list">level\_input\_list</a>   
        | <a href="#edge_input_list">edge\_input\_list</a> 
  
**level\_input\_list**{: #level_input_list }
:	<a href="#level_symbol">level\_symbol</a>  { <a href="#level_symbol">level\_symbol</a>  }  
  
**edge\_input\_list**{: #edge_input_list }
:	 { <a href="#level_symbol">level\_symbol</a>  }  <a href="#edge_indicator">edge\_indicator</a>  { <a href="#level_symbol">level\_symbol</a>  }  
  
**edge\_indicator**{: #edge_indicator }
:	<font color="purple"><b>(</b></font> <a href="#level_symbol">level\_symbol</a> <a href="#level_symbol">level\_symbol</a> <font color="purple"><b>)</b></font>   
        | <a href="#edge_symbol">edge\_symbol</a> 
  
**current\_state**{: #current_state }
:	<a href="#level_symbol">level\_symbol</a> 
  
**next\_state**{: #next_state }
:	<a href="#output_symbol">output\_symbol</a>   
        | <font color="purple"><b>-</b></font> 
  
**output\_symbol**{: #output_symbol }
:	<font color="purple"><b>0</b></font>   
        | <font color="purple"><b>1</b></font>   
        | <font color="purple"><b>x</b></font>   
        | <font color="purple"><b>X</b></font> 
  
**level\_symbol**{: #level_symbol }
:	<font color="purple"><b>0</b></font>   
        | <font color="purple"><b>1</b></font>   
        | <font color="purple"><b>x</b></font>   
        | <font color="purple"><b>X</b></font>   
        | <font color="purple"><b>?</b></font>   
        | <font color="purple"><b>b</b></font>   
        | <font color="purple"><b>B</b></font> 
  
**edge\_symbol**{: #edge_symbol }
:	<font color="purple"><b>r</b></font>   
        | <font color="purple"><b>R</b></font>   
        | <font color="purple"><b>f</b></font>   
        | <font color="purple"><b>F</b></font>   
        | <font color="purple"><b>p</b></font>   
        | <font color="purple"><b>P</b></font>   
        | <font color="purple"><b>n</b></font>   
        | <font color="purple"><b>N</b></font>   
        | <font color="purple"><b>\*</b></font> 
  
### UDP instantiation
  
**udp\_instantiation**{: #udp_instantiation }
:	<a href="#udp_identifier">udp\_identifier</a>  \[ <a href="#drive_strength">drive\_strength</a>  ]   \[ <a href="#delay2">delay2</a>  ]  <a href="#udp_instance">udp\_instance</a>  { <font color="purple"><b>,</b></font> <a href="#udp_instance">udp\_instance</a>  }  <font color="purple"><b>;</b></font> 
  
**udp\_instance**{: #udp_instance }
:	 \[ <a href="#name_of_instance">name\_of\_instance</a>  ]  <font color="purple"><b>(</b></font> <a href="#output_terminal">output\_terminal</a> <font color="purple"><b>,</b></font> <a href="#input_terminal">input\_terminal</a>  { <font color="purple"><b>,</b></font> <a href="#input_terminal">input\_terminal</a>  }  <font color="purple"><b>)</b></font> 
  
## Behavioral assignments
  
### Continuous assignment and net alias statements
  
**continuous\_assign**{: #continuous_assign }
:	<font color="purple"><b>assign</b></font>  \[ <a href="#drive_strength">drive\_strength</a>  ]   \[ <a href="#delay3">delay3</a>  ]  <a href="#list_of_net_assignments">list\_of\_net\_assignments</a> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>assign</b></font>  \[ <a href="#delay_control">delay\_control</a>  ]  <a href="#list_of_variable_assignments">list\_of\_variable\_assignments</a> <font color="purple"><b>;</b></font> 
  
**list\_of\_net\_assignments**{: #list_of_net_assignments }
:	<a href="#net_assignment">net\_assignment</a>  { <font color="purple"><b>,</b></font> <a href="#net_assignment">net\_assignment</a>  }  
  
**list\_of\_variable\_assignments**{: #list_of_variable_assignments }
:	<a href="#variable_assignment">variable\_assignment</a>  { <font color="purple"><b>,</b></font> <a href="#variable_assignment">variable\_assignment</a>  }  
  
**net\_alias**{: #net_alias }
:	<font color="purple"><b>alias</b></font> <a href="#net_lvalue">net\_lvalue</a> <font color="purple"><b>=</b></font> <a href="#net_lvalue">net\_lvalue</a>  { <font color="purple"><b>=</b></font> <a href="#net_lvalue">net\_lvalue</a>  }  <font color="purple"><b>;</b></font> 
  
**net\_assignment**{: #net_assignment }
:	<a href="#net_lvalue">net\_lvalue</a> <font color="purple"><b>=</b></font> <a href="#expression">expression</a> 
  
### Procedural blocks and assignments
  
**initial\_construct**{: #initial_construct }
:	<font color="purple"><b>initial</b></font> <a href="#statement_or_null">statement\_or\_null</a> 
  
**always\_construct**{: #always_construct }
:	<a href="#always_keyword">always\_keyword</a> <a href="#statement">statement</a> 
  
**always\_keyword**{: #always_keyword }
:	<font color="purple"><b>always</b></font>   
        | <font color="purple"><b>always\_comb</b></font>   
        | <font color="purple"><b>always\_latch</b></font>   
        | <font color="purple"><b>always\_ff</b></font> 
  
**final\_construct**{: #final_construct }
:	<font color="purple"><b>final</b></font> <a href="#function_statement">function\_statement</a> 
  
**blocking\_assignment**{: #blocking_assignment }
:	<a href="#variable_lvalue">variable\_lvalue</a> <font color="purple"><b>=</b></font> <a href="#delay_or_event_control">delay\_or\_event\_control</a> <a href="#expression">expression</a>   
        | <a href="#nonrange_variable_lvalue">nonrange\_variable\_lvalue</a> <font color="purple"><b>=</b></font> <a href="#dynamic_array_new">dynamic\_array\_new</a>   
        |  \[ <a href="#implicit_class_handle">implicit\_class\_handle</a> <font color="purple"><b>.</b></font>   
         | <a href="#class_scope">class\_scope</a>   
         | <a href="#package_scope">package\_scope</a>  ]  <a href="#hierarchical_variable_identifier">hierarchical\_variable\_identifier</a> <a href="#select">select</a> <font color="purple"><b>!=</b></font> <a href="#class_new">class\_new</a>   
        | <a href="#operator_assignment">operator\_assignment</a> 
  
**operator\_assignment**{: #operator_assignment }
:	<a href="#variable_lvalue">variable\_lvalue</a> <a href="#assignment_operator">assignment\_operator</a> <a href="#expression">expression</a> 
  
**assignment\_operator**{: #assignment_operator }
:	<font color="purple"><b>=</b></font>   
        | <font color="purple"><b>+=</b></font>   
        | <font color="purple"><b>-=</b></font>   
        | <font color="purple"><b>\*=</b></font>   
        | <font color="purple"><b>/=</b></font>   
        | <font color="purple"><b>%=</b></font>   
        | <font color="purple"><b>&=</b></font>   
        | <font color="purple"><b>|=</b></font>   
        | <font color="purple"><b>^=</b></font>   
        | <font color="purple"><b><<=</b></font>   
        | <font color="purple"><b>>>=</b></font>   
        | <font color="purple"><b><<<=</b></font>   
        | <font color="purple"><b>>>>=</b></font> 
  
**nonblocking\_assignment**{: #nonblocking_assignment }
:	<a href="#variable_lvalue">variable\_lvalue</a> <font color="purple"><b><=</b></font>  \[ <a href="#delay_or_event_control">delay\_or\_event\_control</a>  ]  <a href="#expression">expression</a> 
  
**procedural\_continuous\_assignment**{: #procedural_continuous_assignment }
:	<font color="purple"><b>assign</b></font> <a href="#variable_assignment">variable\_assignment</a>   
        | <font color="purple"><b>deassign</b></font> <a href="#variable_lvalue">variable\_lvalue</a>   
        | <font color="purple"><b>force</b></font> <a href="#variable_assignment">variable\_assignment</a>   
        | <font color="purple"><b>force</b></font> <a href="#net_assignment">net\_assignment</a>   
        | <font color="purple"><b>release</b></font> <a href="#variable_lvalue">variable\_lvalue</a>   
        | <font color="purple"><b>release</b></font> <a href="#net_lvalue">net\_lvalue</a> 
  
**variable\_assignment**{: #variable_assignment }
:	<a href="#variable_lvalue">variable\_lvalue</a> <font color="purple"><b>=</b></font> <a href="#expression">expression</a> 
  
### Parallel and sequential blocks
  
**action\_block**{: #action_block }
:	<a href="#statement_or_null">statement\_or\_null</a>   
        |  \[ <a href="#statement">statement</a>  ]  <font color="purple"><b>else</b></font> <a href="#statement_or_null">statement\_or\_null</a> 
  
**seq\_block**{: #seq_block }
:	<font color="purple"><b>begin</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#block_identifier">block\_identifier</a>  ]   { <a href="#block_item_declaration">block\_item\_declaration</a>  }   { <a href="#statement_or_null">statement\_or\_null</a>  }  <font color="purple"><b>end</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#block_identifier">block\_identifier</a>  ]  
  
**par\_block**{: #par_block }
:	<font color="purple"><b>fork</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#block_identifier">block\_identifier</a>  ]   { <a href="#block_item_declaration">block\_item\_declaration</a>  }   { <a href="#statement_or_null">statement\_or\_null</a>  }  <a href="#join_keyword">join\_keyword</a>  \[ <font color="purple"><b>:</b></font> <a href="#block_identifier">block\_identifier</a>  ]  
  
**join\_keyword**{: #join_keyword }
:	<font color="purple"><b>join</b></font>   
        | <font color="purple"><b>join\_any</b></font>   
        | <font color="purple"><b>join\_none</b></font> 
  
### Statements
  
**statement\_or\_null**{: #statement_or_null }
:	<a href="#statement">statement</a>   
        |  { <a href="#attribute_instance">attribute\_instance</a>  }  <font color="purple"><b>;</b></font> 
  
**statement**{: #statement }
:	 \[ <a href="#block_identifier">block\_identifier</a> <font color="purple"><b>:</b></font>  ]   { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#statement_item">statement\_item</a> 
  
**statement\_item**{: #statement_item }
:	<a href="#blocking_assignment">blocking\_assignment</a> <font color="purple"><b>;</b></font>   
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
  
**function\_statement**{: #function_statement }
:	<a href="#statement">statement</a> 
  
**function\_statement\_or\_null**{: #function_statement_or_null }
:	<a href="#function_statement">function\_statement</a>   
        |  { <a href="#attribute_instance">attribute\_instance</a>  }  <font color="purple"><b>;</b></font> 
  
**variable\_identifier\_list**{: #variable_identifier_list }
:	<a href="#variable_identifier">variable\_identifier</a>  { <font color="purple"><b>,</b></font> <a href="#variable_identifier">variable\_identifier</a>  }  
  
### Timing control statements
  
**procedural\_timing\_control\_statement**{: #procedural_timing_control_statement }
:	<a href="#procedural_timing_control">procedural\_timing\_control</a> <a href="#statement_or_null">statement\_or\_null</a> 
  
**delay\_or\_event\_control**{: #delay_or_event_control }
:	<a href="#delay_control">delay\_control</a>   
        | <a href="#event_control">event\_control</a>   
        | <font color="purple"><b>repeat</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#event_control">event\_control</a> 
  
**delay\_control**{: #delay_control }
:	<font color="purple"><b>#</b></font> <a href="#delay_value">delay\_value</a>   
        | <font color="purple"><b>#</b></font> <font color="purple"><b>(</b></font> <a href="#mintypmax_expression">mintypmax\_expression</a> <font color="purple"><b>)</b></font> 
  
**event\_control**{: #event_control }
:	<font color="purple"><b>@</b></font> <a href="#hierarchical_event_identifier">hierarchical\_event\_identifier</a>   
        | <font color="purple"><b>@</b></font> <font color="purple"><b>(</b></font> <a href="#event_expression">event\_expression</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>@\*</b></font>   
        | <font color="purple"><b>@</b></font> <font color="purple"><b>(\*)</b></font>   
        | <font color="purple"><b>@</b></font> <a href="#ps_or_hierarchical_sequence_identifier">ps\_or\_hierarchical\_sequence\_identifier</a> 
  
**event\_expression**{: #event_expression }[^footnote_31]
:	 \[ <a href="#edge_identifier">edge\_identifier</a>  ]  <a href="#expression">expression</a>  \[ <font color="purple"><b>iff</b></font> <a href="#expression">expression</a>  ]    
        | <a href="#sequence_instance">sequence\_instance</a>  \[ <font color="purple"><b>iff</b></font> <a href="#expression">expression</a>  ]    
        | <a href="#event_expression">event\_expression</a> <font color="purple"><b>or</b></font> <a href="#event_expression">event\_expression</a>   
        | <a href="#event_expression">event\_expression</a> <font color="purple"><b>,</b></font> <a href="#event_expression">event\_expression</a>   
        | <font color="purple"><b>(</b></font> <a href="#event_expression">event\_expression</a> <font color="purple"><b>)</b></font> 
  
**procedural\_timing\_control**{: #procedural_timing_control }
:	<a href="#delay_control">delay\_control</a>   
        | <a href="#event_control">event\_control</a>   
        | <a href="#cycle_delay">cycle\_delay</a> 
  
**jump\_statement**{: #jump_statement }
:	<font color="purple"><b>return</b></font>  \[ <a href="#expression">expression</a>  ]  <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>break</b></font> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>continue</b></font> <font color="purple"><b>;</b></font> 
  
**wait\_statement**{: #wait_statement }
:	<font color="purple"><b>wait</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#statement_or_null">statement\_or\_null</a>   
        | <font color="purple"><b>wait</b></font> <font color="purple"><b>fork</b></font> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>wait\_order</b></font> <font color="purple"><b>(</b></font> <a href="#hierarchical_identifier">hierarchical\_identifier</a>  { <font color="purple"><b>,</b></font> <a href="#hierarchical_identifier">hierarchical\_identifier</a>  }  <font color="purple"><b>)</b></font> <a href="#action_block">action\_block</a> 
  
**event\_trigger**{: #event_trigger }
:	<font color="purple"><b>-></b></font> <a href="#hierarchical_event_identifier">hierarchical\_event\_identifier</a> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>->></b></font>  \[ <a href="#delay_or_event_control">delay\_or\_event\_control</a>  ]  <a href="#hierarchical_event_identifier">hierarchical\_event\_identifier</a> <font color="purple"><b>;</b></font> 
  
**disable\_statement**{: #disable_statement }
:	<font color="purple"><b>disable</b></font> <a href="#hierarchical_task_identifier">hierarchical\_task\_identifier</a> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>disable</b></font> <a href="#hierarchical_block_identifier">hierarchical\_block\_identifier</a> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>disable</b></font> <font color="purple"><b>fork</b></font> <font color="purple"><b>;</b></font> 
  
### Conditional statements
  
**conditional\_statement**{: #conditional_statement }
:	 \[ <a href="#unique_priority">unique\_priority</a>  ]  <font color="purple"><b>if</b></font> <font color="purple"><b>(</b></font> <a href="#cond_predicate">cond\_predicate</a> <font color="purple"><b>)</b></font> <a href="#statement_or_null">statement\_or\_null</a>  { <font color="purple"><b>else</b></font> <font color="purple"><b>if</b></font> <font color="purple"><b>(</b></font> <a href="#cond_predicate">cond\_predicate</a> <font color="purple"><b>)</b></font> <a href="#statement_or_null">statement\_or\_null</a>  }   \[ <font color="purple"><b>else</b></font> <a href="#statement_or_null">statement\_or\_null</a>  ]  
  
**unique\_priority**{: #unique_priority }
:	<font color="purple"><b>unique</b></font>   
        | <font color="purple"><b>unique0</b></font>   
        | <font color="purple"><b>priority</b></font> 
  
**cond\_predicate**{: #cond_predicate }
:	<a href="#expression_or_cond_pattern">expression\_or\_cond\_pattern</a>  { <font color="purple"><b>&&&</b></font> <a href="#expression_or_cond_pattern">expression\_or\_cond\_pattern</a>  }  
  
**expression\_or\_cond\_pattern**{: #expression_or_cond_pattern }
:	<a href="#expression">expression</a>   
        | <a href="#cond_pattern">cond\_pattern</a> 
  
**cond\_pattern**{: #cond_pattern }
:	<a href="#expression">expression</a> <font color="purple"><b>matches</b></font> <a href="#pattern">pattern</a> 
  
### Case statements
  
**case\_statement**{: #case_statement }
:	 \[ <a href="#unique_priority">unique\_priority</a>  ]  <a href="#case_keyword">case\_keyword</a> <font color="purple"><b>(</b></font> <a href="#case_expression">case\_expression</a> <font color="purple"><b>)</b></font> <a href="#case_item">case\_item</a>  { <a href="#case_item">case\_item</a>  }  <font color="purple"><b>endcase</b></font>   
        |  \[ <a href="#unique_priority">unique\_priority</a>  ]  <a href="#case_keyword">case\_keyword</a> <font color="purple"><b>(</b></font> <a href="#case_expression">case\_expression</a> <font color="purple"><b>)</b></font> <font color="purple"><b>matches</b></font> <a href="#case_pattern_item">case\_pattern\_item</a>  { <a href="#case_pattern_item">case\_pattern\_item</a>  }  <font color="purple"><b>endcase</b></font>   
        |  \[ <a href="#unique_priority">unique\_priority</a>  ]  <font color="purple"><b>case</b></font> <font color="purple"><b>(</b></font> <a href="#case_expression">case\_expression</a> <font color="purple"><b>)</b></font> <font color="purple"><b>inside</b></font> <a href="#case_inside_item">case\_inside\_item</a>  { <a href="#case_inside_item">case\_inside\_item</a>  }  <font color="purple"><b>endcase</b></font> 
  
**case\_keyword**{: #case_keyword }
:	<font color="purple"><b>case</b></font>   
        | <font color="purple"><b>casez</b></font>   
        | <font color="purple"><b>casex</b></font> 
  
**case\_expression**{: #case_expression }
:	<a href="#expression">expression</a> 
  
**case\_item**{: #case_item }
:	<a href="#case_item_expression">case\_item\_expression</a>  { <font color="purple"><b>,</b></font> <a href="#case_item_expression">case\_item\_expression</a>  }  <font color="purple"><b>:</b></font> <a href="#statement_or_null">statement\_or\_null</a>   
        | <font color="purple"><b>default</b></font>  \[ <font color="purple"><b>:</b></font>  ]  <a href="#statement_or_null">statement\_or\_null</a> 
  
**case\_pattern\_item**{: #case_pattern_item }
:	<a href="#pattern">pattern</a>  \[ <font color="purple"><b>&&&</b></font> <a href="#expression">expression</a>  ]  <font color="purple"><b>:</b></font> <a href="#statement_or_null">statement\_or\_null</a>   
        | <font color="purple"><b>default</b></font>  \[ <font color="purple"><b>:</b></font>  ]  <a href="#statement_or_null">statement\_or\_null</a> 
  
**case\_inside\_item**{: #case_inside_item }
:	<a href="#open_range_list">open\_range\_list</a> <font color="purple"><b>:</b></font> <a href="#statement_or_null">statement\_or\_null</a>   
        | <font color="purple"><b>default</b></font>  \[ <font color="purple"><b>:</b></font>  ]  <a href="#statement_or_null">statement\_or\_null</a> 
  
**case\_item\_expression**{: #case_item_expression }
:	<a href="#expression">expression</a> 
  
**randcase\_statement**{: #randcase_statement }
:	<font color="purple"><b>randcase</b></font> <a href="#randcase_item">randcase\_item</a>  { <a href="#randcase_item">randcase\_item</a>  }  <font color="purple"><b>endcase</b></font> 
  
**randcase\_item**{: #randcase_item }
:	<a href="#expression">expression</a> <font color="purple"><b>:</b></font> <a href="#statement_or_null">statement\_or\_null</a> 
  
**open\_range\_list**{: #open_range_list }
:	<a href="#open_value_range">open\_value\_range</a>  { <font color="purple"><b>,</b></font> <a href="#open_value_range">open\_value\_range</a>  }  
  
**open\_value\_range**{: #open_value_range }
:	<a href="#value_range">value\_range</a> [^footnote_25] 
  
#### Patterns
  
**pattern**{: #pattern }
:	<font color="purple"><b>.</b></font> <a href="#variable_identifier">variable\_identifier</a>   
        | <font color="purple"><b>.\*</b></font>   
        | <a href="#constant_expression">constant\_expression</a>   
        | <font color="purple"><b>tagged</b></font> <a href="#member_identifier">member\_identifier</a>  \[ <a href="#pattern">pattern</a>  ]    
        | <font color="purple"><b>'{</b></font> <a href="#pattern">pattern</a>  { <font color="purple"><b>,</b></font> <a href="#pattern">pattern</a>  }  <font color="purple"><b>}</b></font>   
        | <font color="purple"><b>'{</b></font> <a href="#member_identifier">member\_identifier</a> <font color="purple"><b>:</b></font> <a href="#pattern">pattern</a>  { <font color="purple"><b>,</b></font> <a href="#member_identifier">member\_identifier</a> <font color="purple"><b>:</b></font> <a href="#pattern">pattern</a>  }  <font color="purple"><b>}</b></font> 
  
**assignment\_pattern**{: #assignment_pattern }
:	<font color="purple"><b>'{</b></font> <a href="#expression">expression</a>  { <font color="purple"><b>,</b></font> <a href="#expression">expression</a>  }  <font color="purple"><b>}</b></font>   
        | <font color="purple"><b>'{</b></font> <a href="#structure_pattern_key">structure\_pattern\_key</a> <font color="purple"><b>:</b></font> <a href="#expression">expression</a>  { <font color="purple"><b>,</b></font> <a href="#structure_pattern_key">structure\_pattern\_key</a> <font color="purple"><b>:</b></font> <a href="#expression">expression</a>  }  <font color="purple"><b>}</b></font>   
        | <font color="purple"><b>'{</b></font> <a href="#array_pattern_key">array\_pattern\_key</a> <font color="purple"><b>:</b></font> <a href="#expression">expression</a>  { <font color="purple"><b>,</b></font> <a href="#array_pattern_key">array\_pattern\_key</a> <font color="purple"><b>:</b></font> <a href="#expression">expression</a>  }  <font color="purple"><b>}</b></font>   
        | <font color="purple"><b>'{</b></font> <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>{</b></font> <a href="#expression">expression</a>  { <font color="purple"><b>,</b></font> <a href="#expression">expression</a>  }  <font color="purple"><b>}</b></font> <font color="purple"><b>}</b></font> 
  
**structure\_pattern\_key**{: #structure_pattern_key }
:	<a href="#member_identifier">member\_identifier</a>   
        | <a href="#assignment_pattern_key">assignment\_pattern\_key</a> 
  
**array\_pattern\_key**{: #array_pattern_key }
:	<a href="#constant_expression">constant\_expression</a>   
        | <a href="#assignment_pattern_key">assignment\_pattern\_key</a> 
  
**assignment\_pattern\_key**{: #assignment_pattern_key }
:	<a href="#simple_type">simple\_type</a>   
        | <font color="purple"><b>default</b></font> 
  
**assignment\_pattern\_expression**{: #assignment_pattern_expression }
:	 \[ <a href="#assignment_pattern_expression_type">assignment\_pattern\_expression\_type</a>  ]  <a href="#assignment_pattern">assignment\_pattern</a> 
  
**assignment\_pattern\_expression\_type**{: #assignment_pattern_expression_type }
:	<a href="#ps_type_identifier">ps\_type\_identifier</a>   
        | <a href="#ps_parameter_identifier">ps\_parameter\_identifier</a>   
        | <a href="#integer_atom_type">integer\_atom\_type</a>   
        | <a href="#type_reference">type\_reference</a> 
  
**constant\_assignment\_pattern\_expression**{: #constant_assignment_pattern_expression }[^footnote_32]
:	<a href="#assignment_pattern_expression">assignment\_pattern\_expression</a> 
  
**assignment\_pattern\_net\_lvalue**{: #assignment_pattern_net_lvalue }
:	<font color="purple"><b>'{</b></font> <a href="#net_lvalue">net\_lvalue</a>  { <font color="purple"><b>,</b></font> <a href="#net_lvalue">net\_lvalue</a>  }  <font color="purple"><b>}</b></font> 
  
**assignment\_pattern\_variable\_lvalue**{: #assignment_pattern_variable_lvalue }
:	<font color="purple"><b>'{</b></font> <a href="#variable_lvalue">variable\_lvalue</a>  { <font color="purple"><b>,</b></font> <a href="#variable_lvalue">variable\_lvalue</a>  }  <font color="purple"><b>}</b></font> 
  
### Looping statements
  
**loop\_statement**{: #loop_statement }
:	<font color="purple"><b>forever</b></font> <a href="#statement_or_null">statement\_or\_null</a>   
        | <font color="purple"><b>repeat</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#statement_or_null">statement\_or\_null</a>   
        | <font color="purple"><b>while</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#statement_or_null">statement\_or\_null</a>   
        | <font color="purple"><b>for</b></font> <font color="purple"><b>(</b></font>  \[ <a href="#for_initialization">for\_initialization</a>  ]  <font color="purple"><b>;</b></font>  \[ <a href="#expression">expression</a>  ]  <font color="purple"><b>;</b></font>  \[ <a href="#for_step">for\_step</a>  ]  <font color="purple"><b>)</b></font> <a href="#statement_or_null">statement\_or\_null</a>   
        | <font color="purple"><b>do</b></font> <a href="#statement_or_null">statement\_or\_null</a> <font color="purple"><b>while</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>foreach</b></font> <font color="purple"><b>(</b></font> <a href="#ps_or_hierarchical_array_identifier">ps\_or\_hierarchical\_array\_identifier</a>  \[ <a href="#loop_variables">loop\_variables</a>  ]  <font color="purple"><b>)</b></font> <a href="#statement">statement</a> 
  
**for\_initialization**{: #for_initialization }
:	<a href="#list_of_variable_assignments">list\_of\_variable\_assignments</a>   
        | <a href="#for_variable_declaration">for\_variable\_declaration</a>  { <font color="purple"><b>,</b></font> <a href="#for_variable_declaration">for\_variable\_declaration</a>  }  
  
**for\_variable\_declaration**{: #for_variable_declaration }
:	 \[ <font color="purple"><b>var</b></font>  ]  <a href="#data_type">data\_type</a> <a href="#variable_identifier">variable\_identifier</a> <font color="purple"><b>=</b></font> <a href="#expression">expression</a>  { <font color="purple"><b>,</b></font> <a href="#variable_identifier">variable\_identifier</a> <font color="purple"><b>=</b></font> <a href="#expression">expression</a>  }  
  
**for\_step**{: #for_step }
:	<a href="#for_step_assignment">for\_step\_assignment</a>  { <font color="purple"><b>,</b></font> <a href="#for_step_assignment">for\_step\_assignment</a>  }  
  
**for\_step\_assignment**{: #for_step_assignment }
:	<a href="#operator_assignment">operator\_assignment</a>   
        | <a href="#inc_or_dec_expression">inc\_or\_dec\_expression</a>   
        | <a href="#function_subroutine_call">function\_subroutine\_call</a> 
  
**loop\_variables**{: #loop_variables }
:	 \[ <a href="#index_variable_identifier">index\_variable\_identifier</a>  ]   { <font color="purple"><b>,</b></font>  \[ <a href="#index_variable_identifier">index\_variable\_identifier</a>  ]   }  
  
### Subroutine call statements
  
**subroutine\_call\_statement**{: #subroutine_call_statement }
:	<a href="#subroutine_call">subroutine\_call</a> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>void</b></font> <font color="purple"><b>'</b></font> <font color="purple"><b>(</b></font> <a href="#function_subroutine_call">function\_subroutine\_call</a> <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font> 
  
### Assertion statements
  
**assertion\_item**{: #assertion_item }
:	<a href="#concurrent_assertion_item">concurrent\_assertion\_item</a>   
        | <a href="#deferred_immediate_assertion_item">deferred\_immediate\_assertion\_item</a> 
  
**deferred\_immediate\_assertion\_item**{: #deferred_immediate_assertion_item }
:	 \[ <a href="#block_identifier">block\_identifier</a> <font color="purple"><b>:</b></font>  ]  <a href="#deferred_immediate_assertion_statement">deferred\_immediate\_assertion\_statement</a> 
  
**procedural\_assertion\_statement**{: #procedural_assertion_statement }
:	<a href="#concurrent_assertion_statement">concurrent\_assertion\_statement</a>   
        | <a href="#immediate_assertion_statement">immediate\_assertion\_statement</a>   
        | <a href="#checker_instantiation">checker\_instantiation</a> 
  
**immediate\_assertion\_statement**{: #immediate_assertion_statement }
:	<a href="#simple_immediate_assertion_statement">simple\_immediate\_assertion\_statement</a>   
        | <a href="#deferred_immediate_assertion_statement">deferred\_immediate\_assertion\_statement</a> 
  
**simple\_immediate\_assertion\_statement**{: #simple_immediate_assertion_statement }
:	<a href="#simple_immediate_assert_statement">simple\_immediate\_assert\_statement</a>   
        | <a href="#simple_immediate_assume_statement">simple\_immediate\_assume\_statement</a>   
        | <a href="#simple_immediate_cover_statement">simple\_immediate\_cover\_statement</a> 
  
**simple\_immediate\_assert\_statement**{: #simple_immediate_assert_statement }
:	<font color="purple"><b>assert</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#action_block">action\_block</a> 
  
**simple\_immediate\_assume\_statement**{: #simple_immediate_assume_statement }
:	<font color="purple"><b>assume</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#action_block">action\_block</a> 
  
**simple\_immediate\_cover\_statement**{: #simple_immediate_cover_statement }
:	<font color="purple"><b>cover</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#statement_or_null">statement\_or\_null</a> 
  
**deferred\_immediate\_assertion\_statement**{: #deferred_immediate_assertion_statement }
:	<a href="#deferred_immediate_assert_statement">deferred\_immediate\_assert\_statement</a>   
        | <a href="#deferred_immediate_assume_statement">deferred\_immediate\_assume\_statement</a>   
        | <a href="#deferred_immediate_cover_statement">deferred\_immediate\_cover\_statement</a> 
  
**deferred\_immediate\_assert\_statement**{: #deferred_immediate_assert_statement }
:	<font color="purple"><b>assert</b></font> <font color="purple"><b>#0</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#action_block">action\_block</a>   
        | <font color="purple"><b>assert</b></font> <font color="purple"><b>final</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#action_block">action\_block</a> 
  
**deferred\_immediate\_assume\_statement**{: #deferred_immediate_assume_statement }
:	<font color="purple"><b>assume</b></font> <font color="purple"><b>#0</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#action_block">action\_block</a>   
        | <font color="purple"><b>assume</b></font> <font color="purple"><b>final</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#action_block">action\_block</a> 
  
**deferred\_immediate\_cover\_statement**{: #deferred_immediate_cover_statement }
:	<font color="purple"><b>cover</b></font> <font color="purple"><b>#0</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#statement_or_null">statement\_or\_null</a>   
        | <font color="purple"><b>cover</b></font> <font color="purple"><b>final</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#statement_or_null">statement\_or\_null</a> 
  
### Clocking block
  
**clocking\_declaration**{: #clocking_declaration }
:	 \[ <font color="purple"><b>default</b></font>  ]  <font color="purple"><b>clocking</b></font>  \[ <a href="#clocking_identifier">clocking\_identifier</a>  ]  <a href="#clocking_event">clocking\_event</a> <font color="purple"><b>;</b></font>  { <a href="#clocking_item">clocking\_item</a>  }  <font color="purple"><b>endclocking</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#clocking_identifier">clocking\_identifier</a>  ]    
        | <font color="purple"><b>global</b></font> <font color="purple"><b>clocking</b></font>  \[ <a href="#clocking_identifier">clocking\_identifier</a>  ]  <a href="#clocking_event">clocking\_event</a> <font color="purple"><b>;</b></font> <font color="purple"><b>endclocking</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#clocking_identifier">clocking\_identifier</a>  ]  
  
**clocking\_event**{: #clocking_event }
:	<font color="purple"><b>@</b></font> <a href="#identifier">identifier</a>   
        | <font color="purple"><b>@</b></font> <font color="purple"><b>(</b></font> <a href="#event_expression">event\_expression</a> <font color="purple"><b>)</b></font> 
  
**clocking\_item**{: #clocking_item }
:	<font color="purple"><b>default</b></font> <a href="#default_skew">default\_skew</a> <font color="purple"><b>;</b></font>   
        | <a href="#clocking_direction">clocking\_direction</a> <a href="#list_of_clocking_decl_assign">list\_of\_clocking\_decl\_assign</a> <font color="purple"><b>;</b></font>   
        |  { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#assertion_item_declaration">assertion\_item\_declaration</a> 
  
**default\_skew**{: #default_skew }
:	<font color="purple"><b>input</b></font> <a href="#clocking_skew">clocking\_skew</a>   
        | <font color="purple"><b>output</b></font> <a href="#clocking_skew">clocking\_skew</a>   
        | <font color="purple"><b>input</b></font> <a href="#clocking_skew">clocking\_skew</a> <font color="purple"><b>output</b></font> <a href="#clocking_skew">clocking\_skew</a> 
  
**clocking\_direction**{: #clocking_direction }
:	<font color="purple"><b>input</b></font>  \[ <a href="#clocking_skew">clocking\_skew</a>  ]    
        | <font color="purple"><b>output</b></font>  \[ <a href="#clocking_skew">clocking\_skew</a>  ]    
        | <font color="purple"><b>input</b></font>  \[ <a href="#clocking_skew">clocking\_skew</a>  ]  <font color="purple"><b>output</b></font>  \[ <a href="#clocking_skew">clocking\_skew</a>  ]    
        | <font color="purple"><b>inout</b></font> 
  
**list\_of\_clocking\_decl\_assign**{: #list_of_clocking_decl_assign }
:	<a href="#clocking_decl_assign">clocking\_decl\_assign</a>  { <font color="purple"><b>,</b></font> <a href="#clocking_decl_assign">clocking\_decl\_assign</a>  }  
  
**clocking\_decl\_assign**{: #clocking_decl_assign }
:	<a href="#signal_identifier">signal\_identifier</a>  \[ <font color="purple"><b>=</b></font> <a href="#expression">expression</a>  ]  
  
**clocking\_skew**{: #clocking_skew }
:	<a href="#edge_identifier">edge\_identifier</a>  \[ <a href="#delay_control">delay\_control</a>  ]    
        | <a href="#delay_control">delay\_control</a> 
  
**clocking\_drive**{: #clocking_drive }
:	<a href="#clockvar_expression">clockvar\_expression</a> <font color="purple"><b><=</b></font>  \[ <a href="#cycle_delay">cycle\_delay</a>  ]  <a href="#expression">expression</a> 
  
**cycle\_delay**{: #cycle_delay }
:	<font color="purple"><b>##</b></font> <a href="#integral_number">integral\_number</a>   
        | <font color="purple"><b>##</b></font> <a href="#identifier">identifier</a>   
        | <font color="purple"><b>##</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> 
  
**clockvar**{: #clockvar }
:	<a href="#hierarchical_identifier">hierarchical\_identifier</a> 
  
**clockvar\_expression**{: #clockvar_expression }
:	<a href="#clockvar">clockvar</a> <a href="#select">select</a> 
  
### Randsequence
  
**randsequence\_statement**{: #randsequence_statement }
:	<font color="purple"><b>randsequence</b></font> <font color="purple"><b>(</b></font>  \[ <a href="#production_identifier">production\_identifier</a>  ]  <font color="purple"><b>)</b></font> <a href="#production">production</a>  { <a href="#production">production</a>  }  <font color="purple"><b>endsequence</b></font> 
  
**production**{: #production }
:	 \[ <a href="#data_type_or_void">data\_type\_or\_void</a>  ]  <a href="#production_identifier">production\_identifier</a>  \[ <font color="purple"><b>(</b></font> <a href="#tf_port_list">tf\_port\_list</a> <font color="purple"><b>)</b></font>  ]  <font color="purple"><b>:</b></font> <a href="#rs_rule">rs\_rule</a>  { <font color="purple"><b>|</b></font> <a href="#rs_rule">rs\_rule</a>  }  <font color="purple"><b>;</b></font> 
  
**rs\_rule**{: #rs_rule }
:	<a href="#rs_production_list">rs\_production\_list</a>  \[ <font color="purple"><b>:=</b></font> <a href="#weight_specification">weight\_specification</a>  \[ <a href="#rs_code_block">rs\_code\_block</a>  ]   ]  
  
**rs\_production\_list**{: #rs_production_list }
:	<a href="#rs_prod">rs\_prod</a>  { <a href="#rs_prod">rs\_prod</a>  }    
        | <font color="purple"><b>rand</b></font> <font color="purple"><b>join</b></font>  \[ <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font>  ]  <a href="#production_item">production\_item</a> <a href="#production_item">production\_item</a>  { <a href="#production_item">production\_item</a>  }  
  
**weight\_specification**{: #weight_specification }
:	<a href="#integral_number">integral\_number</a>   
        | <a href="#ps_identifier">ps\_identifier</a> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> 
  
**rs\_code\_block**{: #rs_code_block }
:	<font color="purple"><b>{</b></font>  { <a href="#data_declaration">data\_declaration</a>  }   { <a href="#statement_or_null">statement\_or\_null</a>  }  <font color="purple"><b>}</b></font> 
  
**rs\_prod**{: #rs_prod }
:	<a href="#production_item">production\_item</a>   
        | <a href="#rs_code_block">rs\_code\_block</a>   
        | <a href="#rs_if_else">rs\_if\_else</a>   
        | <a href="#rs_repeat">rs\_repeat</a>   
        | <a href="#rs_case">rs\_case</a> 
  
**production\_item**{: #production_item }
:	<a href="#production_identifier">production\_identifier</a>  \[ <font color="purple"><b>(</b></font> <a href="#list_of_arguments">list\_of\_arguments</a> <font color="purple"><b>)</b></font>  ]  
  
**rs\_if\_else**{: #rs_if_else }
:	<font color="purple"><b>if</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#production_item">production\_item</a>  \[ <font color="purple"><b>else</b></font> <a href="#production_item">production\_item</a>  ]  
  
**rs\_repeat**{: #rs_repeat }
:	<font color="purple"><b>repeat</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#production_item">production\_item</a> 
  
**rs\_case**{: #rs_case }
:	<font color="purple"><b>case</b></font> <font color="purple"><b>(</b></font> <a href="#case_expression">case\_expression</a> <font color="purple"><b>)</b></font> <a href="#rs_case_item">rs\_case\_item</a>  { <a href="#rs_case_item">rs\_case\_item</a>  }  <font color="purple"><b>endcase</b></font> 
  
**rs\_case\_item**{: #rs_case_item }
:	<a href="#case_item_expression">case\_item\_expression</a>  { <font color="purple"><b>,</b></font> <a href="#case_item_expression">case\_item\_expression</a>  }  <font color="purple"><b>:</b></font> <a href="#production_item">production\_item</a> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>default</b></font>  \[ <font color="purple"><b>:</b></font>  ]  <a href="#production_item">production\_item</a> <font color="purple"><b>;</b></font> 
  
## Specify section
  
### Specify block declaration
  
**specify\_block**{: #specify_block }
:	<font color="purple"><b>specify</b></font>  { <a href="#specify_item">specify\_item</a>  }  <font color="purple"><b>endspecify</b></font> 
  
**specify\_item**{: #specify_item }
:	<a href="#specparam_declaration">specparam\_declaration</a>   
        | <a href="#pulsestyle_declaration">pulsestyle\_declaration</a>   
        | <a href="#showcancelled_declaration">showcancelled\_declaration</a>   
        | <a href="#path_declaration">path\_declaration</a>   
        | <a href="#system_timing_check">system\_timing\_check</a> 
  
**pulsestyle\_declaration**{: #pulsestyle_declaration }
:	<font color="purple"><b>pulsestyle\_onevent</b></font> <a href="#list_of_path_outputs">list\_of\_path\_outputs</a> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>pulsestyle\_ondetect</b></font> <a href="#list_of_path_outputs">list\_of\_path\_outputs</a> <font color="purple"><b>;</b></font> 
  
**showcancelled\_declaration**{: #showcancelled_declaration }
:	<font color="purple"><b>showcancelled</b></font> <a href="#list_of_path_outputs">list\_of\_path\_outputs</a> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>noshowcancelled</b></font> <a href="#list_of_path_outputs">list\_of\_path\_outputs</a> <font color="purple"><b>;</b></font> 
  
### Specify path declarations
  
**path\_declaration**{: #path_declaration }
:	<a href="#simple_path_declaration">simple\_path\_declaration</a> <font color="purple"><b>;</b></font>   
        | <a href="#edge_sensitive_path_declaration">edge\_sensitive\_path\_declaration</a> <font color="purple"><b>;</b></font>   
        | <a href="#state_dependent_path_declaration">state\_dependent\_path\_declaration</a> <font color="purple"><b>;</b></font> 
  
**simple\_path\_declaration**{: #simple_path_declaration }
:	<a href="#parallel_path_description">parallel\_path\_description</a> <font color="purple"><b>=</b></font> <a href="#path_delay_value">path\_delay\_value</a>   
        | <a href="#full_path_description">full\_path\_description</a> <font color="purple"><b>=</b></font> <a href="#path_delay_value">path\_delay\_value</a> 
  
**parallel\_path\_description**{: #parallel_path_description }
:	<font color="purple"><b>(</b></font> <a href="#specify_input_terminal_descriptor">specify\_input\_terminal\_descriptor</a>  \[ <a href="#polarity_operator">polarity\_operator</a>  ]  <font color="purple"><b>=></b></font> <a href="#specify_output_terminal_descriptor">specify\_output\_terminal\_descriptor</a> <font color="purple"><b>)</b></font> 
  
**full\_path\_description**{: #full_path_description }
:	<font color="purple"><b>(</b></font> <a href="#list_of_path_inputs">list\_of\_path\_inputs</a>  \[ <a href="#polarity_operator">polarity\_operator</a>  ]  <font color="purple"><b>\*></b></font> <a href="#list_of_path_outputs">list\_of\_path\_outputs</a> <font color="purple"><b>)</b></font> 
  
**list\_of\_path\_inputs**{: #list_of_path_inputs }
:	<a href="#specify_input_terminal_descriptor">specify\_input\_terminal\_descriptor</a>  { <font color="purple"><b>,</b></font> <a href="#specify_input_terminal_descriptor">specify\_input\_terminal\_descriptor</a>  }  
  
**list\_of\_path\_outputs**{: #list_of_path_outputs }
:	<a href="#specify_output_terminal_descriptor">specify\_output\_terminal\_descriptor</a>  { <font color="purple"><b>,</b></font> <a href="#specify_output_terminal_descriptor">specify\_output\_terminal\_descriptor</a>  }  
  
### Specify block terminals
  
**specify\_input\_terminal\_descriptor**{: #specify_input_terminal_descriptor }
:	<a href="#input_identifier">input\_identifier</a>  \[ <font color="purple"><b>\[</b></font> <a href="#constant_range_expression">constant\_range\_expression</a> <font color="purple"><b>]</b></font>  ]  
  
**specify\_output\_terminal\_descriptor**{: #specify_output_terminal_descriptor }
:	<a href="#output_identifier">output\_identifier</a>  \[ <font color="purple"><b>\[</b></font> <a href="#constant_range_expression">constant\_range\_expression</a> <font color="purple"><b>]</b></font>  ]  
  
**input\_identifier**{: #input_identifier }
:	<a href="#input_port_identifier">input\_port\_identifier</a>   
        | <a href="#inout_port_identifier">inout\_port\_identifier</a>   
        | <a href="#interface_identifier">interface\_identifier</a> <font color="purple"><b>.</b></font> <a href="#port_identifier">port\_identifier</a> 
  
**output\_identifier**{: #output_identifier }
:	<a href="#output_port_identifier">output\_port\_identifier</a>   
        | <a href="#inout_port_identifier">inout\_port\_identifier</a>   
        | <a href="#interface_identifier">interface\_identifier</a> <font color="purple"><b>.</b></font> <a href="#port_identifier">port\_identifier</a> 
  
### Specify path delays
  
**path\_delay\_value**{: #path_delay_value }
:	<a href="#list_of_path_delay_expressions">list\_of\_path\_delay\_expressions</a>   
        | <font color="purple"><b>(</b></font> <a href="#list_of_path_delay_expressions">list\_of\_path\_delay\_expressions</a> <font color="purple"><b>)</b></font> 
  
**list\_of\_path\_delay\_expressions**{: #list_of_path_delay_expressions }
:	<a href="#t_path_delay_expression">t\_path\_delay\_expression</a>   
        | <a href="#trise_path_delay_expression">trise\_path\_delay\_expression</a> <font color="purple"><b>,</b></font> <a href="#tfall_path_delay_expression">tfall\_path\_delay\_expression</a>   
        | <a href="#trise_path_delay_expression">trise\_path\_delay\_expression</a> <font color="purple"><b>,</b></font> <a href="#tfall_path_delay_expression">tfall\_path\_delay\_expression</a> <font color="purple"><b>,</b></font> <a href="#tz_path_delay_expression">tz\_path\_delay\_expression</a>   
        | <a href="#t01_path_delay_expression">t01\_path\_delay\_expression</a> <font color="purple"><b>,</b></font> <a href="#t10_path_delay_expression">t10\_path\_delay\_expression</a> <font color="purple"><b>,</b></font> <a href="#t0z_path_delay_expression">t0z\_path\_delay\_expression</a> <font color="purple"><b>,</b></font> <a href="#tz1_path_delay_expression">tz1\_path\_delay\_expression</a> <font color="purple"><b>,</b></font> <a href="#t1z_path_delay_expression">t1z\_path\_delay\_expression</a> <font color="purple"><b>,</b></font> <a href="#tz0_path_delay_expression">tz0\_path\_delay\_expression</a>   
        | <a href="#t01_path_delay_expression">t01\_path\_delay\_expression</a> <font color="purple"><b>,</b></font> <a href="#t10_path_delay_expression">t10\_path\_delay\_expression</a> <font color="purple"><b>,</b></font> <a href="#t0z_path_delay_expression">t0z\_path\_delay\_expression</a> <font color="purple"><b>,</b></font> <a href="#tz1_path_delay_expression">tz1\_path\_delay\_expression</a> <font color="purple"><b>,</b></font> <a href="#t1z_path_delay_expression">t1z\_path\_delay\_expression</a> <font color="purple"><b>,</b></font> <a href="#tz0_path_delay_expression">tz0\_path\_delay\_expression</a> <font color="purple"><b>,</b></font> <a href="#t0x_path_delay_expression">t0x\_path\_delay\_expression</a> <font color="purple"><b>,</b></font> <a href="#tx1_path_delay_expression">tx1\_path\_delay\_expression</a> <font color="purple"><b>,</b></font> <a href="#t1x_path_delay_expression">t1x\_path\_delay\_expression</a> <font color="purple"><b>,</b></font> <a href="#tx0_path_delay_expression">tx0\_path\_delay\_expression</a> <font color="purple"><b>,</b></font> <a href="#txz_path_delay_expression">txz\_path\_delay\_expression</a> <font color="purple"><b>,</b></font> <a href="#tzx_path_delay_expression">tzx\_path\_delay\_expression</a> 
  
**t\_path\_delay\_expression**{: #t_path_delay_expression }
:	<a href="#path_delay_expression">path\_delay\_expression</a> 
  
**trise\_path\_delay\_expression**{: #trise_path_delay_expression }
:	<a href="#path_delay_expression">path\_delay\_expression</a> 
  
**tfall\_path\_delay\_expression**{: #tfall_path_delay_expression }
:	<a href="#path_delay_expression">path\_delay\_expression</a> 
  
**tz\_path\_delay\_expression**{: #tz_path_delay_expression }
:	<a href="#path_delay_expression">path\_delay\_expression</a> 
  
**t01\_path\_delay\_expression**{: #t01_path_delay_expression }
:	<a href="#path_delay_expression">path\_delay\_expression</a> 
  
**t10\_path\_delay\_expression**{: #t10_path_delay_expression }
:	<a href="#path_delay_expression">path\_delay\_expression</a> 
  
**t0z\_path\_delay\_expression**{: #t0z_path_delay_expression }
:	<a href="#path_delay_expression">path\_delay\_expression</a> 
  
**tz1\_path\_delay\_expression**{: #tz1_path_delay_expression }
:	<a href="#path_delay_expression">path\_delay\_expression</a> 
  
**t1z\_path\_delay\_expression**{: #t1z_path_delay_expression }
:	<a href="#path_delay_expression">path\_delay\_expression</a> 
  
**tz0\_path\_delay\_expression**{: #tz0_path_delay_expression }
:	<a href="#path_delay_expression">path\_delay\_expression</a> 
  
**t0x\_path\_delay\_expression**{: #t0x_path_delay_expression }
:	<a href="#path_delay_expression">path\_delay\_expression</a> 
  
**tx1\_path\_delay\_expression**{: #tx1_path_delay_expression }
:	<a href="#path_delay_expression">path\_delay\_expression</a> 
  
**t1x\_path\_delay\_expression**{: #t1x_path_delay_expression }
:	<a href="#path_delay_expression">path\_delay\_expression</a> 
  
**tx0\_path\_delay\_expression**{: #tx0_path_delay_expression }
:	<a href="#path_delay_expression">path\_delay\_expression</a> 
  
**txz\_path\_delay\_expression**{: #txz_path_delay_expression }
:	<a href="#path_delay_expression">path\_delay\_expression</a> 
  
**tzx\_path\_delay\_expression**{: #tzx_path_delay_expression }
:	<a href="#path_delay_expression">path\_delay\_expression</a> 
  
**path\_delay\_expression**{: #path_delay_expression }
:	<a href="#constant_mintypmax_expression">constant\_mintypmax\_expression</a> 
  
**edge\_sensitive\_path\_declaration**{: #edge_sensitive_path_declaration }
:	<a href="#parallel_edge_sensitive_path_description">parallel\_edge\_sensitive\_path\_description</a> <font color="purple"><b>=</b></font> <a href="#path_delay_value">path\_delay\_value</a>   
        | <a href="#full_edge_sensitive_path_description">full\_edge\_sensitive\_path\_description</a> <font color="purple"><b>=</b></font> <a href="#path_delay_value">path\_delay\_value</a> 
  
**parallel\_edge\_sensitive\_path\_description**{: #parallel_edge_sensitive_path_description }
:	<font color="purple"><b>(</b></font>  \[ <a href="#edge_identifier">edge\_identifier</a>  ]  <a href="#specify_input_terminal_descriptor">specify\_input\_terminal\_descriptor</a>  \[ <a href="#polarity_operator">polarity\_operator</a>  ]  <font color="purple"><b>=></b></font> <font color="purple"><b>(</b></font> <a href="#specify_output_terminal_descriptor">specify\_output\_terminal\_descriptor</a>  \[ <a href="#polarity_operator">polarity\_operator</a>  ]  <font color="purple"><b>:</b></font> <a href="#data_source_expression">data\_source\_expression</a> <font color="purple"><b>)</b></font> <font color="purple"><b>)</b></font> 
  
**full\_edge\_sensitive\_path\_description**{: #full_edge_sensitive_path_description }
:	<font color="purple"><b>(</b></font>  \[ <a href="#edge_identifier">edge\_identifier</a>  ]  <a href="#list_of_path_inputs">list\_of\_path\_inputs</a>  \[ <a href="#polarity_operator">polarity\_operator</a>  ]  <font color="purple"><b>\*></b></font> <font color="purple"><b>(</b></font> <a href="#list_of_path_outputs">list\_of\_path\_outputs</a>  \[ <a href="#polarity_operator">polarity\_operator</a>  ]  <font color="purple"><b>:</b></font> <a href="#data_source_expression">data\_source\_expression</a> <font color="purple"><b>)</b></font> <font color="purple"><b>)</b></font> 
  
**data\_source\_expression**{: #data_source_expression }
:	<a href="#expression">expression</a> 
  
**edge\_identifier**{: #edge_identifier }
:	<font color="purple"><b>posedge</b></font>   
        | <font color="purple"><b>negedge</b></font>   
        | <font color="purple"><b>edge</b></font> 
  
**state\_dependent\_path\_declaration**{: #state_dependent_path_declaration }
:	<font color="purple"><b>if</b></font> <font color="purple"><b>(</b></font> <a href="#module_path_expression">module\_path\_expression</a> <font color="purple"><b>)</b></font> <a href="#simple_path_declaration">simple\_path\_declaration</a>   
        | <font color="purple"><b>if</b></font> <font color="purple"><b>(</b></font> <a href="#module_path_expression">module\_path\_expression</a> <font color="purple"><b>)</b></font> <a href="#edge_sensitive_path_declaration">edge\_sensitive\_path\_declaration</a>   
        | <font color="purple"><b>ifnone</b></font> <a href="#simple_path_declaration">simple\_path\_declaration</a> 
  
**polarity\_operator**{: #polarity_operator }
:	<font color="purple"><b>+</b></font>   
        | <font color="purple"><b>-</b></font> 
  
### System timing checks
  
#### System timing check commands
  
**system\_timing\_check**{: #system_timing_check }
:	<a href="#setup_timing_check">setup\_timing\_check</a>   
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
  
**setup\_timing\_check**{: #setup_timing_check }
:	<font color="purple"><b>$setup</b></font> <font color="purple"><b>(</b></font> <a href="#data_event">data\_event</a> <font color="purple"><b>,</b></font> <a href="#reference_event">reference\_event</a> <font color="purple"><b>,</b></font> <a href="#timing_check_limit">timing\_check\_limit</a>  \[ <font color="purple"><b>,</b></font>  \[ <a href="#notifier">notifier</a>  ]   ]  <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font> 
  
**hold\_timing\_check**{: #hold_timing_check }
:	<font color="purple"><b>$hold</b></font> <font color="purple"><b>(</b></font> <a href="#reference_event">reference\_event</a> <font color="purple"><b>,</b></font> <a href="#data_event">data\_event</a> <font color="purple"><b>,</b></font> <a href="#timing_check_limit">timing\_check\_limit</a>  \[ <font color="purple"><b>,</b></font>  \[ <a href="#notifier">notifier</a>  ]   ]  <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font> 
  
**setuphold\_timing\_check**{: #setuphold_timing_check }
:	<font color="purple"><b>$setuphold</b></font> <font color="purple"><b>(</b></font> <a href="#reference_event">reference\_event</a> <font color="purple"><b>,</b></font> <a href="#data_event">data\_event</a> <font color="purple"><b>,</b></font> <a href="#timing_check_limit">timing\_check\_limit</a> <font color="purple"><b>,</b></font> <a href="#timing_check_limit">timing\_check\_limit</a>  \[ <font color="purple"><b>,</b></font>  \[ <a href="#notifier">notifier</a>  ]   \[ <font color="purple"><b>,</b></font>  \[ <a href="#timestamp_condition">timestamp\_condition</a>  ]   \[ <font color="purple"><b>,</b></font>  \[ <a href="#timecheck_condition">timecheck\_condition</a>  ]   \[ <font color="purple"><b>,</b></font>  \[ <a href="#delayed_reference">delayed\_reference</a>  ]   \[ <font color="purple"><b>,</b></font>  \[ <a href="#delayed_data">delayed\_data</a>  ]   ]   ]   ]   ]   ]  <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font> 
  
**recovery\_timing\_check**{: #recovery_timing_check }
:	<font color="purple"><b>$recovery</b></font> <font color="purple"><b>(</b></font> <a href="#reference_event">reference\_event</a> <font color="purple"><b>,</b></font> <a href="#data_event">data\_event</a> <font color="purple"><b>,</b></font> <a href="#timing_check_limit">timing\_check\_limit</a>  \[ <font color="purple"><b>,</b></font>  \[ <a href="#notifier">notifier</a>  ]   ]  <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font> 
  
**removal\_timing\_check**{: #removal_timing_check }
:	<font color="purple"><b>$removal</b></font> <font color="purple"><b>(</b></font> <a href="#reference_event">reference\_event</a> <font color="purple"><b>,</b></font> <a href="#data_event">data\_event</a> <font color="purple"><b>,</b></font> <a href="#timing_check_limit">timing\_check\_limit</a>  \[ <font color="purple"><b>,</b></font>  \[ <a href="#notifier">notifier</a>  ]   ]  <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font> 
  
**recrem\_timing\_check**{: #recrem_timing_check }
:	<font color="purple"><b>$recrem</b></font> <font color="purple"><b>(</b></font> <a href="#reference_event">reference\_event</a> <font color="purple"><b>,</b></font> <a href="#data_event">data\_event</a> <font color="purple"><b>,</b></font> <a href="#timing_check_limit">timing\_check\_limit</a> <font color="purple"><b>,</b></font> <a href="#timing_check_limit">timing\_check\_limit</a>  \[ <font color="purple"><b>,</b></font>  \[ <a href="#notifier">notifier</a>  ]   \[ <font color="purple"><b>,</b></font>  \[ <a href="#timestamp_condition">timestamp\_condition</a>  ]   \[ <font color="purple"><b>,</b></font>  \[ <a href="#timecheck_condition">timecheck\_condition</a>  ]   \[ <font color="purple"><b>,</b></font>  \[ <a href="#delayed_reference">delayed\_reference</a>  ]   \[ <font color="purple"><b>,</b></font>  \[ <a href="#delayed_data">delayed\_data</a>  ]   ]   ]   ]   ]   ]  <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font> 
  
**skew\_timing\_check**{: #skew_timing_check }
:	<font color="purple"><b>$skew</b></font> <font color="purple"><b>(</b></font> <a href="#reference_event">reference\_event</a> <font color="purple"><b>,</b></font> <a href="#data_event">data\_event</a> <font color="purple"><b>,</b></font> <a href="#timing_check_limit">timing\_check\_limit</a>  \[ <font color="purple"><b>,</b></font>  \[ <a href="#notifier">notifier</a>  ]   ]  <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font> 
  
**timeskew\_timing\_check**{: #timeskew_timing_check }
:	<font color="purple"><b>$timeskew</b></font> <font color="purple"><b>(</b></font> <a href="#reference_event">reference\_event</a> <font color="purple"><b>,</b></font> <a href="#data_event">data\_event</a> <font color="purple"><b>,</b></font> <a href="#timing_check_limit">timing\_check\_limit</a>  \[ <font color="purple"><b>,</b></font>  \[ <a href="#notifier">notifier</a>  ]   \[ <font color="purple"><b>,</b></font>  \[ <a href="#event_based_flag">event\_based\_flag</a>  ]   \[ <font color="purple"><b>,</b></font>  \[ <a href="#remain_active_flag">remain\_active\_flag</a>  ]   ]   ]   ]  <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font> 
  
**fullskew\_timing\_check**{: #fullskew_timing_check }
:	<font color="purple"><b>$fullskew</b></font> <font color="purple"><b>(</b></font> <a href="#reference_event">reference\_event</a> <font color="purple"><b>,</b></font> <a href="#data_event">data\_event</a> <font color="purple"><b>,</b></font> <a href="#timing_check_limit">timing\_check\_limit</a> <font color="purple"><b>,</b></font> <a href="#timing_check_limit">timing\_check\_limit</a>  \[ <font color="purple"><b>,</b></font>  \[ <a href="#notifier">notifier</a>  ]   \[ <font color="purple"><b>,</b></font>  \[ <a href="#event_based_flag">event\_based\_flag</a>  ]   \[ <font color="purple"><b>,</b></font>  \[ <a href="#remain_active_flag">remain\_active\_flag</a>  ]   ]   ]   ]  <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font> 
  
**period\_timing\_check**{: #period_timing_check }
:	<font color="purple"><b>$period</b></font> <font color="purple"><b>(</b></font> <a href="#controlled_reference_event">controlled\_reference\_event</a> <font color="purple"><b>,</b></font> <a href="#timing_check_limit">timing\_check\_limit</a>  \[ <font color="purple"><b>,</b></font>  \[ <a href="#notifier">notifier</a>  ]   ]  <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font> 
  
**width\_timing\_check**{: #width_timing_check }
:	<font color="purple"><b>$width</b></font> <font color="purple"><b>(</b></font> <a href="#controlled_reference_event">controlled\_reference\_event</a> <font color="purple"><b>,</b></font> <a href="#timing_check_limit">timing\_check\_limit</a> <font color="purple"><b>,</b></font> <a href="#threshold">threshold</a>  \[ <font color="purple"><b>,</b></font>  \[ <a href="#notifier">notifier</a>  ]   ]  <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font> 
  
**nochange\_timing\_check**{: #nochange_timing_check }
:	<font color="purple"><b>$nochange</b></font> <font color="purple"><b>(</b></font> <a href="#reference_event">reference\_event</a> <font color="purple"><b>,</b></font> <a href="#data_event">data\_event</a> <font color="purple"><b>,</b></font> <a href="#start_edge_offset">start\_edge\_offset</a> <font color="purple"><b>,</b></font> <a href="#end_edge_offset">end\_edge\_offset</a>  \[ <font color="purple"><b>,</b></font>  \[ <a href="#notifier">notifier</a>  ]   ]  <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font> 
  
#### System timing check command arguments
  
**timecheck\_condition**{: #timecheck_condition }
:	<a href="#mintypmax_expression">mintypmax\_expression</a> 
  
**controlled\_reference\_event**{: #controlled_reference_event }
:	<a href="#controlled_timing_check_event">controlled\_timing\_check\_event</a> 
  
**data\_event**{: #data_event }
:	<a href="#timing_check_event">timing\_check\_event</a> 
  
**delayed\_data**{: #delayed_data }
:	<a href="#terminal_identifier">terminal\_identifier</a>   
        | <a href="#terminal_identifier">terminal\_identifier</a> <font color="purple"><b>\[</b></font> <a href="#constant_mintypmax_expression">constant\_mintypmax\_expression</a> <font color="purple"><b>]</b></font> 
  
**delayed\_reference**{: #delayed_reference }
:	<a href="#terminal_identifier">terminal\_identifier</a>   
        | <a href="#terminal_identifier">terminal\_identifier</a> <font color="purple"><b>\[</b></font> <a href="#constant_mintypmax_expression">constant\_mintypmax\_expression</a> <font color="purple"><b>]</b></font> 
  
**end\_edge\_offset**{: #end_edge_offset }
:	<a href="#mintypmax_expression">mintypmax\_expression</a> 
  
**event\_based\_flag**{: #event_based_flag }
:	<a href="#constant_expression">constant\_expression</a> 
  
**notifier**{: #notifier }
:	<a href="#variable_identifier">variable\_identifier</a> 
  
**reference\_event**{: #reference_event }
:	<a href="#timing_check_event">timing\_check\_event</a> 
  
**remain\_active\_flag**{: #remain_active_flag }
:	<a href="#constant_mintypmax_expression">constant\_mintypmax\_expression</a> 
  
**timestamp\_condition**{: #timestamp_condition }
:	<a href="#mintypmax_expression">mintypmax\_expression</a> 
  
**start\_edge\_offset**{: #start_edge_offset }
:	<a href="#mintypmax_expression">mintypmax\_expression</a> 
  
**threshold**{: #threshold }
:	<a href="#constant_expression">constant\_expression</a> 
  
**timing\_check\_limit**{: #timing_check_limit }
:	<a href="#expression">expression</a> 
  
#### System timing check event definitions
  
**timing\_check\_event**{: #timing_check_event }
:	 \[ <a href="#timing_check_event_control">timing\_check\_event\_control</a>  ]  <a href="#specify_terminal_descriptor">specify\_terminal\_descriptor</a>  \[ <font color="purple"><b>&&&</b></font> <a href="#timing_check_condition">timing\_check\_condition</a>  ]  
  
**controlled\_timing\_check\_event**{: #controlled_timing_check_event }
:	<a href="#timing_check_event_control">timing\_check\_event\_control</a> <a href="#specify_terminal_descriptor">specify\_terminal\_descriptor</a>  \[ <font color="purple"><b>&&&</b></font> <a href="#timing_check_condition">timing\_check\_condition</a>  ]  
  
**timing\_check\_event\_control**{: #timing_check_event_control }
:	<font color="purple"><b>posedge</b></font>   
        | <font color="purple"><b>negedge</b></font>   
        | <font color="purple"><b>edge</b></font>   
        | <a href="#edge_control_specifier">edge\_control\_specifier</a> 
  
**specify\_terminal\_descriptor**{: #specify_terminal_descriptor }
:	<a href="#specify_input_terminal_descriptor">specify\_input\_terminal\_descriptor</a>   
        | <a href="#specify_output_terminal_descriptor">specify\_output\_terminal\_descriptor</a> 
  
**edge\_control\_specifier**{: #edge_control_specifier }
:	<font color="purple"><b>edge</b></font> <font color="purple"><b>\[</b></font> <a href="#edge_descriptor">edge\_descriptor</a>  { <font color="purple"><b>,</b></font> <a href="#edge_descriptor">edge\_descriptor</a>  }  <font color="purple"><b>]</b></font> 
  
**edge\_descriptor**{: #edge_descriptor }[^footnote_33]
:	<font color="purple"><b>01</b></font>   
        | <font color="purple"><b>10</b></font>   
        | <a href="#z_or_x">z\_or\_x</a> <a href="#zero_or_one">zero\_or\_one</a>   
        | <a href="#zero_or_one">zero\_or\_one</a> <a href="#z_or_x">z\_or\_x</a> 
  
**zero\_or\_one**{: #zero_or_one }
:	<font color="purple"><b>0</b></font>   
        | <font color="purple"><b>1</b></font> 
  
**z\_or\_x**{: #z_or_x }
:	<font color="purple"><b>x</b></font>   
        | <font color="purple"><b>X</b></font>   
        | <font color="purple"><b>z</b></font>   
        | <font color="purple"><b>Z</b></font> 
  
**timing\_check\_condition**{: #timing_check_condition }
:	<a href="#scalar_timing_check_condition">scalar\_timing\_check\_condition</a>   
        | <font color="purple"><b>(</b></font> <a href="#scalar_timing_check_condition">scalar\_timing\_check\_condition</a> <font color="purple"><b>)</b></font> 
  
**scalar\_timing\_check\_condition**{: #scalar_timing_check_condition }
:	<a href="#expression">expression</a>   
        | <font color="purple"><b>~</b></font> <a href="#expression">expression</a>   
        | <a href="#expression">expression</a> <font color="purple"><b>==</b></font> <a href="#scalar_constant">scalar\_constant</a>   
        | <a href="#expression">expression</a> <font color="purple"><b>===</b></font> <a href="#scalar_constant">scalar\_constant</a>   
        | <a href="#expression">expression</a> <font color="purple"><b>!=</b></font> <a href="#scalar_constant">scalar\_constant</a>   
        | <a href="#expression">expression</a> <font color="purple"><b>!==</b></font> <a href="#scalar_constant">scalar\_constant</a> 
  
**scalar\_constant**{: #scalar_constant }
:	<font color="purple"><b>1'b0</b></font>   
        | <font color="purple"><b>1'b1</b></font>   
        | <font color="purple"><b>1'B0</b></font>   
        | <font color="purple"><b>1'B1</b></font>   
        | <font color="purple"><b>'b0</b></font>   
        | <font color="purple"><b>'b1</b></font>   
        | <font color="purple"><b>'B0</b></font>   
        | <font color="purple"><b>'B1</b></font>   
        | <font color="purple"><b>1</b></font>   
        | <font color="purple"><b>0</b></font> 
  
## Expressions
  
### Concatenations
  
**concatenation**{: #concatenation }
:	<font color="purple"><b>{</b></font> <a href="#expression">expression</a>  { <font color="purple"><b>,</b></font> <a href="#expression">expression</a>  }  <font color="purple"><b>}</b></font> 
  
**constant\_concatenation**{: #constant_concatenation }
:	<font color="purple"><b>{</b></font> <a href="#constant_expression">constant\_expression</a>  { <font color="purple"><b>,</b></font> <a href="#constant_expression">constant\_expression</a>  }  <font color="purple"><b>}</b></font> 
  
**constant\_multiple\_concatenation**{: #constant_multiple_concatenation }
:	<font color="purple"><b>{</b></font> <a href="#constant_expression">constant\_expression</a> <a href="#constant_concatenation">constant\_concatenation</a> <font color="purple"><b>}</b></font> 
  
**module\_path\_concatenation**{: #module_path_concatenation }
:	<font color="purple"><b>{</b></font> <a href="#module_path_expression">module\_path\_expression</a>  { <font color="purple"><b>,</b></font> <a href="#module_path_expression">module\_path\_expression</a>  }  <font color="purple"><b>}</b></font> 
  
**module\_path\_multiple\_concatenation**{: #module_path_multiple_concatenation }
:	<font color="purple"><b>{</b></font> <a href="#constant_expression">constant\_expression</a> <a href="#module_path_concatenation">module\_path\_concatenation</a> <font color="purple"><b>}</b></font> 
  
**multiple\_concatenation**{: #multiple_concatenation }
:	<font color="purple"><b>{</b></font> <a href="#expression">expression</a> <a href="#concatenation">concatenation</a> <font color="purple"><b>}</b></font> [^footnote_34] 
  
**streaming\_concatenation**{: #streaming_concatenation }
:	<font color="purple"><b>{</b></font> <a href="#stream_operator">stream\_operator</a>  \[ <a href="#slice_size">slice\_size</a>  ]  <a href="#stream_concatenation">stream\_concatenation</a> <font color="purple"><b>}</b></font> 
  
**stream\_operator**{: #stream_operator }
:	<font color="purple"><b>>></b></font>   
        | <font color="purple"><b><<</b></font> 
  
**slice\_size**{: #slice_size }
:	<a href="#simple_type">simple\_type</a>   
        | <a href="#constant_expression">constant\_expression</a> 
  
**stream\_concatenation**{: #stream_concatenation }
:	<font color="purple"><b>{</b></font> <a href="#stream_expression">stream\_expression</a>  { <font color="purple"><b>,</b></font> <a href="#stream_expression">stream\_expression</a>  }  <font color="purple"><b>}</b></font> 
  
**stream\_expression**{: #stream_expression }
:	<a href="#expression">expression</a>  \[ <font color="purple"><b>with</b></font> <font color="purple"><b>\[</b></font> <a href="#array_range_expression">array\_range\_expression</a> <font color="purple"><b>]</b></font>  ]  
  
**array\_range\_expression**{: #array_range_expression }
:	<a href="#expression">expression</a>   
        | <a href="#expression">expression</a> <font color="purple"><b>:</b></font> <a href="#expression">expression</a>   
        | <a href="#expression">expression</a> <font color="purple"><b>+:</b></font> <a href="#expression">expression</a>   
        | <a href="#expression">expression</a> <font color="purple"><b>-:</b></font> <a href="#expression">expression</a> 
  
**empty\_queue**{: #empty_queue }[^footnote_35]
:	<font color="purple"><b>{</b></font> <font color="purple"><b>}</b></font> 
  
### Subroutine calls
  
**constant\_function\_call**{: #constant_function_call }
:	<a href="#function_subroutine_call">function\_subroutine\_call</a> [^footnote_36] 
  
**tf\_call**{: #tf_call }[^footnote_37]
:	<a href="#ps_or_hierarchical_tf_identifier">ps\_or\_hierarchical\_tf\_identifier</a>  { <a href="#attribute_instance">attribute\_instance</a>  }   \[ <font color="purple"><b>(</b></font> <a href="#list_of_arguments">list\_of\_arguments</a> <font color="purple"><b>)</b></font>  ]  
  
**system\_tf\_call**{: #system_tf_call }
:	<a href="#system_tf_identifier">system\_tf\_identifier</a>  \[ <font color="purple"><b>(</b></font> <a href="#list_of_arguments">list\_of\_arguments</a> <font color="purple"><b>)</b></font>  ]    
        | <a href="#system_tf_identifier">system\_tf\_identifier</a> <font color="purple"><b>(</b></font> <a href="#data_type">data\_type</a>  \[ <font color="purple"><b>,</b></font> <a href="#expression">expression</a>  ]  <font color="purple"><b>)</b></font> 
  
**subroutine\_call**{: #subroutine_call }
:	<a href="#tf_call">tf\_call</a>   
        | <a href="#system_tf_call">system\_tf\_call</a>   
        | <a href="#method_call">method\_call</a>   
        |  \[ <font color="purple"><b>std::</b></font>  ]  <a href="#randomize_call">randomize\_call</a> 
  
**function\_subroutine\_call**{: #function_subroutine_call }
:	<a href="#subroutine_call">subroutine\_call</a> 
  
**list\_of\_arguments**{: #list_of_arguments }
:	 \[ <a href="#expression">expression</a>  ]   { <font color="purple"><b>,</b></font>  \[ <a href="#expression">expression</a>  ]   }   { <font color="purple"><b>,</b></font> <font color="purple"><b>.</b></font> <a href="#identifier">identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#expression">expression</a>  ]  <font color="purple"><b>)</b></font>  }    
        | <font color="purple"><b>.</b></font> <a href="#identifier">identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#expression">expression</a>  ]  <font color="purple"><b>)</b></font>  { <font color="purple"><b>,</b></font> <font color="purple"><b>.</b></font> <a href="#identifier">identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#expression">expression</a>  ]  <font color="purple"><b>)</b></font>  }  
  
**method\_call**{: #method_call }
:	<a href="#method_call_root">method\_call\_root</a> <font color="purple"><b>.</b></font> <a href="#method_call_body">method\_call\_body</a> 
  
**method\_call\_body**{: #method_call_body }
:	<a href="#method_identifier">method\_identifier</a>  { <a href="#attribute_instance">attribute\_instance</a>  }   \[ <font color="purple"><b>(</b></font> <a href="#list_of_arguments">list\_of\_arguments</a> <font color="purple"><b>)</b></font>  ]    
        | <a href="#built_in_method_call">built\_in\_method\_call</a> 
  
**built\_in\_method\_call**{: #built_in_method_call }
:	<a href="#array_manipulation_call">array\_manipulation\_call</a>   
        | <a href="#randomize_call">randomize\_call</a> 
  
**array\_manipulation\_call**{: #array_manipulation_call }
:	<a href="#array_method_name">array\_method\_name</a>  { <a href="#attribute_instance">attribute\_instance</a>  }   \[ <font color="purple"><b>(</b></font> <a href="#list_of_arguments">list\_of\_arguments</a> <font color="purple"><b>)</b></font>  ]   \[ <font color="purple"><b>with</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font>  ]  
  
**randomize\_call**{: #randomize_call }
:	<font color="purple"><b>randomize</b></font>  { <a href="#attribute_instance">attribute\_instance</a>  }   \[ <font color="purple"><b>(</b></font>  \[ <a href="#variable_identifier_list">variable\_identifier\_list</a>   
          | <font color="purple"><b>null</b></font>  ]  <font color="purple"><b>)</b></font>  ]   \[ <font color="purple"><b>with</b></font>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#identifier_list">identifier\_list</a>  ]  <font color="purple"><b>)</b></font>  ]  <a href="#constraint_block">constraint\_block</a>  ]  [^footnote_38] 
  
**method\_call\_root**{: #method_call_root }
:	<a href="#primary">primary</a>   
        | <a href="#implicit_class_handle">implicit\_class\_handle</a> 
  
**array\_method\_name**{: #array_method_name }
:	<a href="#method_identifier">method\_identifier</a>   
        | <font color="purple"><b>unique</b></font>   
        | <font color="purple"><b>and</b></font>   
        | <font color="purple"><b>or</b></font>   
        | <font color="purple"><b>xor</b></font> 
  
### Expressions
  
**inc\_or\_dec\_expression**{: #inc_or_dec_expression }
:	<a href="#inc_or_dec_operator">inc\_or\_dec\_operator</a>  { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#variable_lvalue">variable\_lvalue</a>   
        | <a href="#variable_lvalue">variable\_lvalue</a>  { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#inc_or_dec_operator">inc\_or\_dec\_operator</a> 
  
**conditional\_expression**{: #conditional_expression }
:	<a href="#cond_predicate">cond\_predicate</a> <font color="purple"><b>?</b></font>  { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#expression">expression</a> <font color="purple"><b>:</b></font> <a href="#expression">expression</a> 
  
**constant\_expression**{: #constant_expression }
:	<a href="#constant_primary">constant\_primary</a>   
        | <a href="#unary_operator">unary\_operator</a>  { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#constant_primary">constant\_primary</a>   
        | <a href="#constant_expression">constant\_expression</a> <a href="#binary_operator">binary\_operator</a>  { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#constant_expression">constant\_expression</a>   
        | <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>?</b></font>  { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>:</b></font> <a href="#constant_expression">constant\_expression</a> 
  
**constant\_mintypmax\_expression**{: #constant_mintypmax_expression }
:	<a href="#constant_expression">constant\_expression</a>   
        | <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>:</b></font> <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>:</b></font> <a href="#constant_expression">constant\_expression</a> 
  
**constant\_param\_expression**{: #constant_param_expression }
:	<a href="#constant_mintypmax_expression">constant\_mintypmax\_expression</a>   
        | <a href="#data_type">data\_type</a>   
        | <font color="purple"><b>$</b></font> 
  
**param\_expression**{: #param_expression }
:	<a href="#mintypmax_expression">mintypmax\_expression</a>   
        | <a href="#data_type">data\_type</a>   
        | <font color="purple"><b>$</b></font> 
  
**constant\_range\_expression**{: #constant_range_expression }
:	<a href="#constant_expression">constant\_expression</a>   
        | <a href="#constant_part_select_range">constant\_part\_select\_range</a> 
  
**constant\_part\_select\_range**{: #constant_part_select_range }
:	<a href="#constant_range">constant\_range</a>   
        | <a href="#constant_indexed_range">constant\_indexed\_range</a> 
  
**constant\_range**{: #constant_range }
:	<a href="#constant_expression">constant\_expression</a> <font color="purple"><b>:</b></font> <a href="#constant_expression">constant\_expression</a> 
  
**constant\_indexed\_range**{: #constant_indexed_range }
:	<a href="#constant_expression">constant\_expression</a> <font color="purple"><b>+:</b></font> <a href="#constant_expression">constant\_expression</a>   
        | <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>-:</b></font> <a href="#constant_expression">constant\_expression</a> 
  
**expression**{: #expression }
:	<a href="#primary">primary</a>   
        | <a href="#unary_operator">unary\_operator</a>  { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#primary">primary</a>   
        | <a href="#inc_or_dec_expression">inc\_or\_dec\_expression</a>   
        | <font color="purple"><b>(</b></font> <a href="#operator_assignment">operator\_assignment</a> <font color="purple"><b>)</b></font>   
        | <a href="#expression">expression</a> <a href="#binary_operator">binary\_operator</a>  { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#expression">expression</a>   
        | <a href="#conditional_expression">conditional\_expression</a>   
        | <a href="#inside_expression">inside\_expression</a>   
        | <a href="#tagged_union_expression">tagged\_union\_expression</a> 
  
**tagged\_union\_expression**{: #tagged_union_expression }
:	<font color="purple"><b>tagged</b></font> <a href="#member_identifier">member\_identifier</a>  \[ <a href="#expression">expression</a>  ]  
  
**inside\_expression**{: #inside_expression }
:	<a href="#expression">expression</a> <font color="purple"><b>inside</b></font> <font color="purple"><b>{</b></font> <a href="#open_range_list">open\_range\_list</a> <font color="purple"><b>}</b></font> 
  
**value\_range**{: #value_range }
:	<a href="#expression">expression</a>   
        | <font color="purple"><b>\[</b></font> <a href="#expression">expression</a> <font color="purple"><b>:</b></font> <a href="#expression">expression</a> <font color="purple"><b>]</b></font> 
  
**mintypmax\_expression**{: #mintypmax_expression }
:	<a href="#expression">expression</a>   
        | <a href="#expression">expression</a> <font color="purple"><b>:</b></font> <a href="#expression">expression</a> <font color="purple"><b>:</b></font> <a href="#expression">expression</a> 
  
**module\_path\_conditional\_expression**{: #module_path_conditional_expression }
:	<a href="#module_path_expression">module\_path\_expression</a> <font color="purple"><b>?</b></font>  { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#module_path_expression">module\_path\_expression</a> <font color="purple"><b>:</b></font> <a href="#module_path_expression">module\_path\_expression</a> 
  
**module\_path\_expression**{: #module_path_expression }
:	<a href="#module_path_primary">module\_path\_primary</a>   
        | <a href="#unary_module_path_operator">unary\_module\_path\_operator</a>  { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#module_path_primary">module\_path\_primary</a>   
        | <a href="#module_path_expression">module\_path\_expression</a> <a href="#binary_module_path_operator">binary\_module\_path\_operator</a>  { <a href="#attribute_instance">attribute\_instance</a>  }  <a href="#module_path_expression">module\_path\_expression</a>   
        | <a href="#module_path_conditional_expression">module\_path\_conditional\_expression</a> 
  
**module\_path\_mintypmax\_expression**{: #module_path_mintypmax_expression }
:	<a href="#module_path_expression">module\_path\_expression</a>   
        | <a href="#module_path_expression">module\_path\_expression</a> <font color="purple"><b>:</b></font> <a href="#module_path_expression">module\_path\_expression</a> <font color="purple"><b>:</b></font> <a href="#module_path_expression">module\_path\_expression</a> 
  
**part\_select\_range**{: #part_select_range }
:	<a href="#constant_range">constant\_range</a>   
        | <a href="#indexed_range">indexed\_range</a> 
  
**indexed\_range**{: #indexed_range }
:	<a href="#expression">expression</a> <font color="purple"><b>+:</b></font> <a href="#constant_expression">constant\_expression</a>   
        | <a href="#expression">expression</a> <font color="purple"><b>-:</b></font> <a href="#constant_expression">constant\_expression</a> 
  
**genvar\_expression**{: #genvar_expression }
:	<a href="#constant_expression">constant\_expression</a> 
  
### Primaries
  
**constant\_primary**{: #constant_primary }
:	<a href="#primary_literal">primary\_literal</a>   
        | <a href="#ps_parameter_identifier">ps\_parameter\_identifier</a> <a href="#constant_select">constant\_select</a>   
        | <a href="#specparam_identifier">specparam\_identifier</a>  \[ <font color="purple"><b>\[</b></font> <a href="#constant_range_expression">constant\_range\_expression</a> <font color="purple"><b>]</b></font>  ]    
        | <a href="#genvar_identifier">genvar\_identifier</a> [^footnote_39]   
        | <a href="#formal_port_identifier">formal\_port\_identifier</a> <a href="#constant_select">constant\_select</a>   
        |  \[ <a href="#package_scope">package\_scope</a>   
         | <a href="#class_scope">class\_scope</a>  ]  <a href="#enum_identifier">enum\_identifier</a>   
        | <a href="#constant_concatenation">constant\_concatenation</a>  \[ <font color="purple"><b>\[</b></font> <a href="#constant_range_expression">constant\_range\_expression</a> <font color="purple"><b>]</b></font>  ]    
        | <a href="#constant_multiple_concatenation">constant\_multiple\_concatenation</a>  \[ <font color="purple"><b>\[</b></font> <a href="#constant_range_expression">constant\_range\_expression</a> <font color="purple"><b>]</b></font>  ]    
        | <a href="#constant_function_call">constant\_function\_call</a>   
        | <a href="#constant_let_expression">constant\_let\_expression</a>   
        | <font color="purple"><b>(</b></font> <a href="#constant_mintypmax_expression">constant\_mintypmax\_expression</a> <font color="purple"><b>)</b></font>   
        | <a href="#constant_cast">constant\_cast</a>   
        | <a href="#constant_assignment_pattern_expression">constant\_assignment\_pattern\_expression</a>   
        | <a href="#type_reference">type\_reference</a> [^footnote_40] 
  
**module\_path\_primary**{: #module_path_primary }
:	<a href="#number">number</a>   
        | <a href="#identifier">identifier</a>   
        | <a href="#module_path_concatenation">module\_path\_concatenation</a>   
        | <a href="#module_path_multiple_concatenation">module\_path\_multiple\_concatenation</a>   
        | <a href="#function_subroutine_call">function\_subroutine\_call</a>   
        | <font color="purple"><b>(</b></font> <a href="#module_path_mintypmax_expression">module\_path\_mintypmax\_expression</a> <font color="purple"><b>)</b></font> 
  
**primary**{: #primary }
:	<a href="#primary_literal">primary\_literal</a>   
        |  \[ <a href="#class_qualifier">class\_qualifier</a>   
         | <a href="#package_scope">package\_scope</a>  ]  <a href="#hierarchical_identifier">hierarchical\_identifier</a> <a href="#select">select</a>   
        | <a href="#empty_queue">empty\_queue</a>   
        | <a href="#concatenation">concatenation</a>  \[ <font color="purple"><b>\[</b></font> <a href="#range_expression">range\_expression</a> <font color="purple"><b>]</b></font>  ]    
        | <a href="#multiple_concatenation">multiple\_concatenation</a>  \[ <font color="purple"><b>\[</b></font> <a href="#range_expression">range\_expression</a> <font color="purple"><b>]</b></font>  ]    
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
  
**class\_qualifier**{: #class_qualifier }
:	 \[ <font color="purple"><b>local::</b></font> [^footnote_43]  ]   \[ <a href="#implicit_class_handle">implicit\_class\_handle</a> <font color="purple"><b>.</b></font>   
         | <a href="#class_scope">class\_scope</a>  ]  
  
**range\_expression**{: #range_expression }
:	<a href="#expression">expression</a>   
        | <a href="#part_select_range">part\_select\_range</a> 
  
**primary\_literal**{: #primary_literal }
:	<a href="#number">number</a>   
        | <a href="#time_literal">time\_literal</a>   
        | <a href="#unbased_unsized_literal">unbased\_unsized\_literal</a>   
        | <a href="#string_literal">string\_literal</a> 
  
**time\_literal**{: #time_literal }[^footnote_44]
:	<a href="#unsigned_number">unsigned\_number</a> <a href="#time_unit">time\_unit</a>   
        | <a href="#fixed_point_number">fixed\_point\_number</a> <a href="#time_unit">time\_unit</a> 
  
**time\_unit**{: #time_unit }
:	<font color="purple"><b>s</b></font>   
        | <font color="purple"><b>ms</b></font>   
        | <font color="purple"><b>us</b></font>   
        | <font color="purple"><b>ns</b></font>   
        | <font color="purple"><b>ps</b></font>   
        | <font color="purple"><b>fs</b></font> 
  
**implicit\_class\_handle**{: #implicit_class_handle }[^footnote_41]
:	<font color="purple"><b>this</b></font>   
        | <font color="purple"><b>super</b></font>   
        | <font color="purple"><b>this</b></font> <font color="purple"><b>.</b></font> <font color="purple"><b>super</b></font> 
  
**bit\_select**{: #bit_select }
:	 { <font color="purple"><b>\[</b></font> <a href="#expression">expression</a> <font color="purple"><b>]</b></font>  }  
  
**select**{: #select }
:	 \[  { <font color="purple"><b>.</b></font> <a href="#member_identifier">member\_identifier</a> <a href="#bit_select">bit\_select</a>  }  <font color="purple"><b>.</b></font> <a href="#member_identifier">member\_identifier</a>  ]  <a href="#bit_select">bit\_select</a>  \[ <font color="purple"><b>\[</b></font> <a href="#part_select_range">part\_select\_range</a> <font color="purple"><b>]</b></font>  ]  
  
**nonrange\_select**{: #nonrange_select }
:	 \[  { <font color="purple"><b>.</b></font> <a href="#member_identifier">member\_identifier</a> <a href="#bit_select">bit\_select</a>  }  <font color="purple"><b>.</b></font> <a href="#member_identifier">member\_identifier</a>  ]  <a href="#bit_select">bit\_select</a> 
  
**constant\_bit\_select**{: #constant_bit_select }
:	 { <font color="purple"><b>\[</b></font> <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>]</b></font>  }  
  
**constant\_select**{: #constant_select }
:	 \[  { <font color="purple"><b>.</b></font> <a href="#member_identifier">member\_identifier</a> <a href="#constant_bit_select">constant\_bit\_select</a>  }  <font color="purple"><b>.</b></font> <a href="#member_identifier">member\_identifier</a>  ]  <a href="#constant_bit_select">constant\_bit\_select</a>  \[ <font color="purple"><b>\[</b></font> <a href="#constant_part_select_range">constant\_part\_select\_range</a> <font color="purple"><b>]</b></font>  ]  
  
**constant\_cast**{: #constant_cast }
:	<a href="#casting_type">casting\_type</a> <font color="purple"><b>'</b></font> <font color="purple"><b>(</b></font> <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>)</b></font> 
  
**constant\_let\_expression**{: #constant_let_expression }
:	<a href="#let_expression">let\_expression</a> [^footnote_45] 
  
**cast**{: #cast }
:	<a href="#casting_type">casting\_type</a> <font color="purple"><b>'</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> 
  
### Expression left-side values
  
**net\_lvalue**{: #net_lvalue }
:	<a href="#ps_or_hierarchical_net_identifier">ps\_or\_hierarchical\_net\_identifier</a> <a href="#constant_select">constant\_select</a>   
        | <font color="purple"><b>{</b></font> <a href="#net_lvalue">net\_lvalue</a>  { <font color="purple"><b>,</b></font> <a href="#net_lvalue">net\_lvalue</a>  }  <font color="purple"><b>}</b></font>   
        |  \[ <a href="#assignment_pattern_expression_type">assignment\_pattern\_expression\_type</a>  ]  <a href="#assignment_pattern_net_lvalue">assignment\_pattern\_net\_lvalue</a> 
  
**variable\_lvalue**{: #variable_lvalue }
:	 \[ <a href="#implicit_class_handle">implicit\_class\_handle</a> <font color="purple"><b>.</b></font>   
         | <a href="#package_scope">package\_scope</a>  ]  <a href="#hierarchical_variable_identifier">hierarchical\_variable\_identifier</a> <a href="#select">select</a> [^footnote_46]   
        | <font color="purple"><b>{</b></font> <a href="#variable_lvalue">variable\_lvalue</a>  { <font color="purple"><b>,</b></font> <a href="#variable_lvalue">variable\_lvalue</a>  }  <font color="purple"><b>}</b></font>   
        |  \[ <a href="#assignment_pattern_expression_type">assignment\_pattern\_expression\_type</a>  ]  <a href="#assignment_pattern_variable_lvalue">assignment\_pattern\_variable\_lvalue</a>   
        | <a href="#streaming_concatenation">streaming\_concatenation</a> [^footnote_47] 
  
**nonrange\_variable\_lvalue**{: #nonrange_variable_lvalue }
:	 \[ <a href="#implicit_class_handle">implicit\_class\_handle</a> <font color="purple"><b>.</b></font>   
         | <a href="#package_scope">package\_scope</a>  ]  <a href="#hierarchical_variable_identifier">hierarchical\_variable\_identifier</a> <a href="#nonrange_select">nonrange\_select</a> 
  
### Operators
  
**unary\_operator**{: #unary_operator }
:	<font color="purple"><b>+</b></font>   
        | <font color="purple"><b>-</b></font>   
        | <font color="purple"><b>!</b></font>   
        | <font color="purple"><b>~</b></font>   
        | <font color="purple"><b>&</b></font>   
        | <font color="purple"><b>~&</b></font>   
        | <font color="purple"><b>|</b></font>   
        | <font color="purple"><b>~|</b></font>   
        | <font color="purple"><b>^</b></font>   
        | <font color="purple"><b>~^</b></font>   
        | <font color="purple"><b>^~</b></font> 
  
**binary\_operator**{: #binary_operator }
:	<font color="purple"><b>+</b></font>   
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
        | <font color="purple"><b>&&</b></font>   
        | <font color="purple"><b>||</b></font>   
        | <font color="purple"><b>\*\*</b></font>   
        | <font color="purple"><b><</b></font>   
        | <font color="purple"><b><=</b></font>   
        | <font color="purple"><b>></b></font>   
        | <font color="purple"><b>>=</b></font>   
        | <font color="purple"><b>&</b></font>   
        | <font color="purple"><b>|</b></font>   
        | <font color="purple"><b>^</b></font>   
        | <font color="purple"><b>^~</b></font>   
        | <font color="purple"><b>~^</b></font>   
        | <font color="purple"><b>>></b></font>   
        | <font color="purple"><b><<</b></font>   
        | <font color="purple"><b>>>></b></font>   
        | <font color="purple"><b><<<</b></font>   
        | <font color="purple"><b>-></b></font>   
        | <font color="purple"><b><-></b></font> 
  
**inc\_or\_dec\_operator**{: #inc_or_dec_operator }
:	<font color="purple"><b>++</b></font>   
        | <font color="purple"><b>--</b></font> 
  
**unary\_module\_path\_operator**{: #unary_module_path_operator }
:	<font color="purple"><b>!</b></font>   
        | <font color="purple"><b>~</b></font>   
        | <font color="purple"><b>&</b></font>   
        | <font color="purple"><b>~&</b></font>   
        | <font color="purple"><b>|</b></font>   
        | <font color="purple"><b>~|</b></font>   
        | <font color="purple"><b>^</b></font>   
        | <font color="purple"><b>~^</b></font>   
        | <font color="purple"><b>^~</b></font> 
  
**binary\_module\_path\_operator**{: #binary_module_path_operator }
:	<font color="purple"><b>==</b></font>   
        | <font color="purple"><b>!=</b></font>   
        | <font color="purple"><b>&&</b></font>   
        | <font color="purple"><b>||</b></font>   
        | <font color="purple"><b>&</b></font>   
        | <font color="purple"><b>|</b></font>   
        | <font color="purple"><b>^</b></font>   
        | <font color="purple"><b>^~</b></font>   
        | <font color="purple"><b>~^</b></font> 
  
### Numbers
  
**number**{: #number }
:	<a href="#integral_number">integral\_number</a>   
        | <a href="#real_number">real\_number</a> 
  
**integral\_number**{: #integral_number }
:	<a href="#decimal_number">decimal\_number</a>   
        | <a href="#octal_number">octal\_number</a>   
        | <a href="#binary_number">binary\_number</a>   
        | <a href="#hex_number">hex\_number</a> 
  
**decimal\_number**{: #decimal_number }
:	<a href="#unsigned_number">unsigned\_number</a>   
        |  \[ <a href="#size">size</a>  ]  <a href="#decimal_base">decimal\_base</a> <a href="#unsigned_number">unsigned\_number</a>   
        |  \[ <a href="#size">size</a>  ]  <a href="#decimal_base">decimal\_base</a> <a href="#x_digit">x\_digit</a>  { <font color="purple"><b>\_</b></font>  }    
        |  \[ <a href="#size">size</a>  ]  <a href="#decimal_base">decimal\_base</a> <a href="#z_digit">z\_digit</a>  { <font color="purple"><b>\_</b></font>  }  
  
**binary\_number**{: #binary_number }
:	 \[ <a href="#size">size</a>  ]  <a href="#binary_base">binary\_base</a> <a href="#binary_value">binary\_value</a> 
  
**octal\_number**{: #octal_number }
:	 \[ <a href="#size">size</a>  ]  <a href="#octal_base">octal\_base</a> <a href="#octal_value">octal\_value</a> 
  
**hex\_number**{: #hex_number }
:	 \[ <a href="#size">size</a>  ]  <a href="#hex_base">hex\_base</a> <a href="#hex_value">hex\_value</a> 
  
**sign**{: #sign }
:	<font color="purple"><b>+</b></font>   
        | <font color="purple"><b>-</b></font> 
  
**size**{: #size }
:	<a href="#non_zero_unsigned_number">non\_zero\_unsigned\_number</a> 
  
**non\_zero\_unsigned\_number**{: #non_zero_unsigned_number }[^footnote_33]
:	<a href="#non_zero_decimal_digit">non\_zero\_decimal\_digit</a>  { <font color="purple"><b>\_</b></font>   
         | <a href="#decimal_digit">decimal\_digit</a>  }  
  
**real\_number**{: #real_number }[^footnote_33]
:	<a href="#fixed_point_number">fixed\_point\_number</a>   
        | <a href="#unsigned_number">unsigned\_number</a>  \[ <font color="purple"><b>.</b></font> <a href="#unsigned_number">unsigned\_number</a>  ]  <a href="#exp">exp</a>  \[ <a href="#sign">sign</a>  ]  <a href="#unsigned_number">unsigned\_number</a> 
  
**fixed\_point\_number**{: #fixed_point_number }[^footnote_33]
:	<a href="#unsigned_number">unsigned\_number</a> <font color="purple"><b>.</b></font> <a href="#unsigned_number">unsigned\_number</a> 
  
**exp**{: #exp }
:	<font color="purple"><b>e</b></font>   
        | <font color="purple"><b>E</b></font> 
  
**unsigned\_number**{: #unsigned_number }[^footnote_33]
:	<a href="#decimal_digit">decimal\_digit</a>  { <font color="purple"><b>\_</b></font>   
         | <a href="#decimal_digit">decimal\_digit</a>  }  
  
**binary\_value**{: #binary_value }[^footnote_33]
:	<a href="#binary_digit">binary\_digit</a>  { <font color="purple"><b>\_</b></font>   
         | <a href="#binary_digit">binary\_digit</a>  }  
  
**octal\_value**{: #octal_value }[^footnote_33]
:	<a href="#octal_digit">octal\_digit</a>  { <font color="purple"><b>\_</b></font>   
         | <a href="#octal_digit">octal\_digit</a>  }  
  
**hex\_value**{: #hex_value }[^footnote_33]
:	<a href="#hex_digit">hex\_digit</a>  { <font color="purple"><b>\_</b></font>   
         | <a href="#hex_digit">hex\_digit</a>  }  
  
**decimal\_base**{: #decimal_base }[^footnote_33]
:	<font color="purple"><b>'</b></font>  \[ <font color="purple"><b>s</b></font>   
         | <font color="purple"><b>S</b></font>  ]  <font color="purple"><b>d</b></font>   
        | <font color="purple"><b>'</b></font>  \[ <font color="purple"><b>s</b></font>   
         | <font color="purple"><b>S</b></font>  ]  <font color="purple"><b>D</b></font> 
  
**binary\_base**{: #binary_base }[^footnote_33]
:	<font color="purple"><b>'</b></font>  \[ <font color="purple"><b>s</b></font>   
         | <font color="purple"><b>S</b></font>  ]  <font color="purple"><b>b</b></font>   
        | <font color="purple"><b>'</b></font>  \[ <font color="purple"><b>s</b></font>   
         | <font color="purple"><b>S</b></font>  ]  <font color="purple"><b>B</b></font> 
  
**octal\_base**{: #octal_base }[^footnote_33]
:	<font color="purple"><b>'</b></font>  \[ <font color="purple"><b>s</b></font>   
         | <font color="purple"><b>S</b></font>  ]  <font color="purple"><b>o</b></font>   
        | <font color="purple"><b>'</b></font>  \[ <font color="purple"><b>s</b></font>   
         | <font color="purple"><b>S</b></font>  ]  <font color="purple"><b>O</b></font> 
  
**hex\_base**{: #hex_base }[^footnote_33]
:	<font color="purple"><b>'</b></font>  \[ <font color="purple"><b>s</b></font>   
         | <font color="purple"><b>S</b></font>  ]  <font color="purple"><b>h</b></font>   
        | <font color="purple"><b>'</b></font>  \[ <font color="purple"><b>s</b></font>   
         | <font color="purple"><b>S</b></font>  ]  <font color="purple"><b>H</b></font> 
  
**non\_zero\_decimal\_digit**{: #non_zero_decimal_digit }
:	<font color="purple"><b>1</b></font>   
        | <font color="purple"><b>2</b></font>   
        | <font color="purple"><b>3</b></font>   
        | <font color="purple"><b>4</b></font>   
        | <font color="purple"><b>5</b></font>   
        | <font color="purple"><b>6</b></font>   
        | <font color="purple"><b>7</b></font>   
        | <font color="purple"><b>8</b></font>   
        | <font color="purple"><b>9</b></font> 
  
**decimal\_digit**{: #decimal_digit }
:	<font color="purple"><b>0</b></font>   
        | <font color="purple"><b>1</b></font>   
        | <font color="purple"><b>2</b></font>   
        | <font color="purple"><b>3</b></font>   
        | <font color="purple"><b>4</b></font>   
        | <font color="purple"><b>5</b></font>   
        | <font color="purple"><b>6</b></font>   
        | <font color="purple"><b>7</b></font>   
        | <font color="purple"><b>8</b></font>   
        | <font color="purple"><b>9</b></font> 
  
**binary\_digit**{: #binary_digit }
:	<a href="#x_digit">x\_digit</a>   
        | <a href="#z_digit">z\_digit</a>   
        | <font color="purple"><b>0</b></font>   
        | <font color="purple"><b>1</b></font> 
  
**octal\_digit**{: #octal_digit }
:	<a href="#x_digit">x\_digit</a>   
        | <a href="#z_digit">z\_digit</a>   
        | <font color="purple"><b>0</b></font>   
        | <font color="purple"><b>1</b></font>   
        | <font color="purple"><b>2</b></font>   
        | <font color="purple"><b>3</b></font>   
        | <font color="purple"><b>4</b></font>   
        | <font color="purple"><b>5</b></font>   
        | <font color="purple"><b>6</b></font>   
        | <font color="purple"><b>7</b></font> 
  
**hex\_digit**{: #hex_digit }
:	<a href="#x_digit">x\_digit</a>   
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
  
**x\_digit**{: #x_digit }
:	<font color="purple"><b>x</b></font>   
        | <font color="purple"><b>X</b></font> 
  
**z\_digit**{: #z_digit }
:	<font color="purple"><b>z</b></font>   
        | <font color="purple"><b>Z</b></font>   
        | <font color="purple"><b>?</b></font> 
  
**unbased\_unsized\_literal**{: #unbased_unsized_literal }
:	<font color="purple"><b>'0</b></font>   
        | <font color="purple"><b>'1</b></font>   
        | <font color="purple"><b>'</b></font> <a href="#z_or_x">z\_or\_x</a> [^footnote_48] 
  
### Strings
  
**string\_literal**{: #string_literal }
:	<font color="purple"><b>"</b></font>  { <em>Any\_ASCII\_Characters</em> }  <font color="purple"><b>"</b></font> 
  
## General
  
### Attributes
  
**attribute\_instance**{: #attribute_instance }
:	<font color="purple"><b>(\*</b></font> <a href="#attr_spec">attr\_spec</a>  { <font color="purple"><b>,</b></font> <a href="#attr_spec">attr\_spec</a>  }  <font color="purple"><b>\*)</b></font> 
  
**attr\_spec**{: #attr_spec }
:	<a href="#attr_name">attr\_name</a>  \[ <font color="purple"><b>=</b></font> <a href="#constant_expression">constant\_expression</a>  ]  
  
**attr\_name**{: #attr_name }
:	<a href="#identifier">identifier</a> 
  
### Comments
  
**comment**{: #comment }
:	<a href="#one_line_comment">one\_line\_comment</a>   
        | <a href="#block_comment">block\_comment</a> 
  
**one\_line\_comment**{: #one_line_comment }
:	<font color="purple"><b>//</b></font> <a href="#comment_text">comment\_text</a> <em>new\_line\_char</em>
  
**block\_comment**{: #block_comment }
:	<font color="purple"><b>/\*</b></font> <a href="#comment_text">comment\_text</a> <font color="purple"><b>\*/</b></font> 
  
**comment\_text**{: #comment_text }
:	 { <em>Any\_ASCII\_character</em> }  
  
### Identifiers
  
**array\_identifier**{: #array_identifier }
:	<a href="#identifier">identifier</a> 
  
**block\_identifier**{: #block_identifier }
:	<a href="#identifier">identifier</a> 
  
**bin\_identifier**{: #bin_identifier }
:	<a href="#identifier">identifier</a> 
  
**c\_identifier**{: #c_identifier }[^footnote_49]
:	<em>\[a-zA-Z\_\]</em> { <em>\[a-zA-Z0-9\_\]</em> }  
  
**cell\_identifier**{: #cell_identifier }
:	<a href="#identifier">identifier</a> 
  
**checker\_identifier**{: #checker_identifier }
:	<a href="#identifier">identifier</a> 
  
**class\_identifier**{: #class_identifier }
:	<a href="#identifier">identifier</a> 
  
**class\_variable\_identifier**{: #class_variable_identifier }
:	<a href="#variable_identifier">variable\_identifier</a> 
  
**clocking\_identifier**{: #clocking_identifier }
:	<a href="#identifier">identifier</a> 
  
**config\_identifier**{: #config_identifier }
:	<a href="#identifier">identifier</a> 
  
**const\_identifier**{: #const_identifier }
:	<a href="#identifier">identifier</a> 
  
**constraint\_identifier**{: #constraint_identifier }
:	<a href="#identifier">identifier</a> 
  
**covergroup\_identifier**{: #covergroup_identifier }
:	<a href="#identifier">identifier</a> 
  
**covergroup\_variable\_identifier**{: #covergroup_variable_identifier }
:	<a href="#variable_identifier">variable\_identifier</a> 
  
**cover\_point\_identifier**{: #cover_point_identifier }
:	<a href="#identifier">identifier</a> 
  
**cross\_identifier**{: #cross_identifier }
:	<a href="#identifier">identifier</a> 
  
**dynamic\_array\_variable\_identifier**{: #dynamic_array_variable_identifier }
:	<a href="#variable_identifier">variable\_identifier</a> 
  
**enum\_identifier**{: #enum_identifier }
:	<a href="#identifier">identifier</a> 
  
**escaped\_identifier**{: #escaped_identifier }
:	<font color="purple"><b>\</b></font>  { <em>any\_printable\_ASCII\_character\_except\_white\_space</em> }  <a href="#white_space">white\_space</a> 
  
**formal\_identifier**{: #formal_identifier }
:	<a href="#identifier">identifier</a> 
  
**formal\_port\_identifier**{: #formal_port_identifier }
:	<a href="#identifier">identifier</a> 
  
**function\_identifier**{: #function_identifier }
:	<a href="#identifier">identifier</a> 
  
**generate\_block\_identifier**{: #generate_block_identifier }
:	<a href="#identifier">identifier</a> 
  
**genvar\_identifier**{: #genvar_identifier }
:	<a href="#identifier">identifier</a> 
  
**hierarchical\_array\_identifier**{: #hierarchical_array_identifier }
:	<a href="#hierarchical_identifier">hierarchical\_identifier</a> 
  
**hierarchical\_block\_identifier**{: #hierarchical_block_identifier }
:	<a href="#hierarchical_identifier">hierarchical\_identifier</a> 
  
**hierarchical\_event\_identifier**{: #hierarchical_event_identifier }
:	<a href="#hierarchical_identifier">hierarchical\_identifier</a> 
  
**hierarchical\_identifier**{: #hierarchical_identifier }
:	 \[ <font color="purple"><b>$root</b></font> <font color="purple"><b>.</b></font>  ]   { <a href="#identifier">identifier</a> <a href="#constant_bit_select">constant\_bit\_select</a> <font color="purple"><b>.</b></font>  }  <a href="#identifier">identifier</a> 
  
**hierarchical\_net\_identifier**{: #hierarchical_net_identifier }
:	<a href="#hierarchical_identifier">hierarchical\_identifier</a> 
  
**hierarchical\_parameter\_identifier**{: #hierarchical_parameter_identifier }
:	<a href="#hierarchical_identifier">hierarchical\_identifier</a> 
  
**hierarchical\_property\_identifier**{: #hierarchical_property_identifier }
:	<a href="#hierarchical_identifier">hierarchical\_identifier</a> 
  
**hierarchical\_sequence\_identifier**{: #hierarchical_sequence_identifier }
:	<a href="#hierarchical_identifier">hierarchical\_identifier</a> 
  
**hierarchical\_task\_identifier**{: #hierarchical_task_identifier }
:	<a href="#hierarchical_identifier">hierarchical\_identifier</a> 
  
**hierarchical\_tf\_identifier**{: #hierarchical_tf_identifier }
:	<a href="#hierarchical_identifier">hierarchical\_identifier</a> 
  
**hierarchical\_variable\_identifier**{: #hierarchical_variable_identifier }
:	<a href="#hierarchical_identifier">hierarchical\_identifier</a> 
  
**identifier**{: #identifier }
:	<a href="#simple_identifier">simple\_identifier</a>   
        | <a href="#escaped_identifier">escaped\_identifier</a> 
  
**index\_variable\_identifier**{: #index_variable_identifier }
:	<a href="#identifier">identifier</a> 
  
**interface\_identifier**{: #interface_identifier }
:	<a href="#identifier">identifier</a> 
  
**interface\_instance\_identifier**{: #interface_instance_identifier }
:	<a href="#identifier">identifier</a> 
  
**inout\_port\_identifier**{: #inout_port_identifier }
:	<a href="#identifier">identifier</a> 
  
**input\_port\_identifier**{: #input_port_identifier }
:	<a href="#identifier">identifier</a> 
  
**instance\_identifier**{: #instance_identifier }
:	<a href="#identifier">identifier</a> 
  
**library\_identifier**{: #library_identifier }
:	<a href="#identifier">identifier</a> 
  
**member\_identifier**{: #member_identifier }
:	<a href="#identifier">identifier</a> 
  
**method\_identifier**{: #method_identifier }
:	<a href="#identifier">identifier</a> 
  
**modport\_identifier**{: #modport_identifier }
:	<a href="#identifier">identifier</a> 
  
**module\_identifier**{: #module_identifier }
:	<a href="#identifier">identifier</a> 
  
**net\_identifier**{: #net_identifier }
:	<a href="#identifier">identifier</a> 
  
**net\_type\_identifier**{: #net_type_identifier }
:	<a href="#identifier">identifier</a> 
  
**output\_port\_identifier**{: #output_port_identifier }
:	<a href="#identifier">identifier</a> 
  
**package\_identifier**{: #package_identifier }
:	<a href="#identifier">identifier</a> 
  
**package\_scope**{: #package_scope }
:	<a href="#package_identifier">package\_identifier</a> <font color="purple"><b>::</b></font>   
        | <font color="purple"><b>$unit</b></font> <font color="purple"><b>::</b></font> 
  
**parameter\_identifier**{: #parameter_identifier }
:	<a href="#identifier">identifier</a> 
  
**port\_identifier**{: #port_identifier }
:	<a href="#identifier">identifier</a> 
  
**production\_identifier**{: #production_identifier }
:	<a href="#identifier">identifier</a> 
  
**program\_identifier**{: #program_identifier }
:	<a href="#identifier">identifier</a> 
  
**property\_identifier**{: #property_identifier }
:	<a href="#identifier">identifier</a> 
  
**ps\_class\_identifier**{: #ps_class_identifier }
:	 \[ <a href="#package_scope">package\_scope</a>  ]  <a href="#class_identifier">class\_identifier</a> 
  
**ps\_covergroup\_identifier**{: #ps_covergroup_identifier }
:	 \[ <a href="#package_scope">package\_scope</a>  ]  <a href="#covergroup_identifier">covergroup\_identifier</a> 
  
**ps\_checker\_identifier**{: #ps_checker_identifier }
:	 \[ <a href="#package_scope">package\_scope</a>  ]  <a href="#checker_identifier">checker\_identifier</a> 
  
**ps\_identifier**{: #ps_identifier }
:	 \[ <a href="#package_scope">package\_scope</a>  ]  <a href="#identifier">identifier</a> 
  
**ps\_or\_hierarchical\_array\_identifier**{: #ps_or_hierarchical_array_identifier }
:	 \[ <a href="#implicit_class_handle">implicit\_class\_handle</a> <font color="purple"><b>.</b></font>   
         | <a href="#class_scope">class\_scope</a>   
         | <a href="#package_scope">package\_scope</a>  ]  <a href="#hierarchical_array_identifier">hierarchical\_array\_identifier</a> 
  
**ps\_or\_hierarchical\_net\_identifier**{: #ps_or_hierarchical_net_identifier }
:	 \[ <a href="#package_scope">package\_scope</a>  ]  <a href="#net_identifier">net\_identifier</a>   
        | <a href="#hierarchical_net_identifier">hierarchical\_net\_identifier</a> 
  
**ps\_or\_hierarchical\_property\_identifier**{: #ps_or_hierarchical_property_identifier }
:	 \[ <a href="#package_scope">package\_scope</a>  ]  <a href="#property_identifier">property\_identifier</a>   
        | <a href="#hierarchical_property_identifier">hierarchical\_property\_identifier</a> 
  
**ps\_or\_hierarchical\_sequence\_identifier**{: #ps_or_hierarchical_sequence_identifier }
:	 \[ <a href="#package_scope">package\_scope</a>  ]  <a href="#sequence_identifier">sequence\_identifier</a>   
        | <a href="#hierarchical_sequence_identifier">hierarchical\_sequence\_identifier</a> 
  
**ps\_or\_hierarchical\_tf\_identifier**{: #ps_or_hierarchical_tf_identifier }
:	 \[ <a href="#package_scope">package\_scope</a>  ]  <a href="#tf_identifier">tf\_identifier</a>   
        | <a href="#hierarchical_tf_identifier">hierarchical\_tf\_identifier</a> 
  
**ps\_parameter\_identifier**{: #ps_parameter_identifier }
:	 \[ <a href="#package_scope">package\_scope</a>   
         | <a href="#class_scope">class\_scope</a>  ]  <a href="#parameter_identifier">parameter\_identifier</a>   
        |  { <a href="#generate_block_identifier">generate\_block\_identifier</a>  \[ <font color="purple"><b>\[</b></font> <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>]</b></font>  ]  <font color="purple"><b>.</b></font>  }  <a href="#parameter_identifier">parameter\_identifier</a> 
  
**ps\_type\_identifier**{: #ps_type_identifier }
:	 \[ <font color="purple"><b>local::</b></font> [^footnote_43]   
         | <a href="#package_scope">package\_scope</a>  ]  <a href="#type_identifier">type\_identifier</a> 
  
**sequence\_identifier**{: #sequence_identifier }
:	<a href="#identifier">identifier</a> 
  
**signal\_identifier**{: #signal_identifier }
:	<a href="#identifier">identifier</a> 
  
**simple\_identifier**{: #simple_identifier }[^footnote_49]
:	<em>\[a-zA-Z\_\]</em> { <em> \[a-zA-Z0-9\_$]</em> }  
  
**specparam\_identifier**{: #specparam_identifier }
:	<a href="#identifier">identifier</a> 
  
**system\_tf\_identifier**{: #system_tf_identifier }[^footnote_50]
:	<font color="purple"><b>$</b></font> <em>\[a-zA-Z0-9\_$\] { \[a-zA-Z0-9\_$\] }</em>
  
**task\_identifier**{: #task_identifier }
:	<a href="#identifier">identifier</a> 
  
**tf\_identifier**{: #tf_identifier }
:	<a href="#identifier">identifier</a> 
  
**terminal\_identifier**{: #terminal_identifier }
:	<a href="#identifier">identifier</a> 
  
**topmodule\_identifier**{: #topmodule_identifier }
:	<a href="#identifier">identifier</a> 
  
**type\_identifier**{: #type_identifier }
:	<a href="#identifier">identifier</a> 
  
**udp\_identifier**{: #udp_identifier }
:	<a href="#identifier">identifier</a> 
  
**variable\_identifier**{: #variable_identifier }
:	<a href="#identifier">identifier</a> 
  
### White space
  
**white\_space**{: #white_space }
:	<em>space</em>  
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
