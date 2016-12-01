---
title: "SystemVerilog IEEE 1800-2012 Grammar"
layout: page 
pager: true
author: Sigasi
date: 2016-11-11
comments: true
---
<em>
Copyright 
The IEEE Standards publication(s) ("Document") is approved by the IEEE Standards Association ("IEEE-SA") Standards Board and is published in accordance with established IEEE-SA Standards Board bylaws and operations procedures.

IEEE owns the copyright to this Document in all forms of media. Copyright in the text retrieved, displayed or output from this Document is owned by IEEE and is protected by the copyright laws of the United States and by international treaties. IEEE reserves all rights not expressly granted.  

Get the full Language Reference Manual, free of charge, at <http://standards.ieee.org/getieee/1800/download/1800-2012.pdf>

Sigasi has created this browsable version of the grammar, hoping that it would be useful to you, but without any warranty whatsoever. We have also created a browsable [/tech/vhdl2008.ebnf].

</em>  
## Source text
  
### Library source text
  
**library_text**{: #library_text }
:	 { <a href="#library_description">library_description</a>  }  
  
**library_description**{: #library_description }
:	<a href="#library_declaration">library_declaration</a>   
        | <a href="#include_statement">include_statement</a>   
        | <a href="#config_declaration">config_declaration</a>   
        | <font color="purple"><b>;</b></font> 
  
**library_declaration**{: #library_declaration }
:	<font color="purple"><b>library</b></font> <a href="#library_identifier">library_identifier</a> <a href="#file_path_spec">file_path_spec</a>  { <font color="purple"><b>,</b></font> <a href="#file_path_spec">file_path_spec</a>  }   \[ <font color="purple"><b>-incdir</b></font> <a href="#file_path_spec">file_path_spec</a>  { <font color="purple"><b>,</b></font> <a href="#file_path_spec">file_path_spec</a>  }   ]  <font color="purple"><b>;</b></font> 
  
**include_statement**{: #include_statement }
:	<font color="purple"><b>include</b></font> <a href="#file_path_spec">file_path_spec</a> <font color="purple"><b>;</b></font> 
  
**file_path_spec**{: #file_path_spec }
:	<em>external</em> <em> syntax is not defined in standard </em>
  
### SystemVerilog source text
  
**source_text**{: #source_text }
:	 \[ <a href="#timeunits_declaration">timeunits_declaration</a>  ]   { <a href="#description">description</a>  }  
  
**description**{: #description }
:	<a href="#module_declaration">module_declaration</a>   
        | <a href="#udp_declaration">udp_declaration</a>   
        | <a href="#interface_declaration">interface_declaration</a>   
        | <a href="#program_declaration">program_declaration</a>   
        | <a href="#package_declaration">package_declaration</a>   
        |  { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#package_item">package_item</a>   
        |  { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#bind_directive">bind_directive</a>   
        | <a href="#config_declaration">config_declaration</a> 
  
**module_nonansi_header**{: #module_nonansi_header }
:	 { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#module_keyword">module_keyword</a>  \[ <a href="#lifetime">lifetime</a>  ]  <a href="#module_identifier">module_identifier</a>  { <a href="#package_import_declaration">package_import_declaration</a>  }   \[ <a href="#parameter_port_list">parameter_port_list</a>  ]  <a href="#list_of_ports">list_of_ports</a> <font color="purple"><b>;</b></font> 
  
**module_ansi_header**{: #module_ansi_header }
:	 { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#module_keyword">module_keyword</a>  \[ <a href="#lifetime">lifetime</a>  ]  <a href="#module_identifier">module_identifier</a>  { <a href="#package_import_declaration">package_import_declaration</a>  }  [^footnote_1]  \[ <a href="#parameter_port_list">parameter_port_list</a>  ]   \[ <a href="#list_of_port_declarations">list_of_port_declarations</a>  ]  <font color="purple"><b>;</b></font> 
  
**module_declaration**{: #module_declaration }
:	<a href="#module_nonansi_header">module_nonansi_header</a>  \[ <a href="#timeunits_declaration">timeunits_declaration</a>  ]   { <a href="#module_item">module_item</a>  }  <font color="purple"><b>endmodule</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#module_identifier">module_identifier</a>  ]    
        | <a href="#module_ansi_header">module_ansi_header</a>  \[ <a href="#timeunits_declaration">timeunits_declaration</a>  ]   { <a href="#non_port_module_item">non_port_module_item</a>  }  <font color="purple"><b>endmodule</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#module_identifier">module_identifier</a>  ]    
        |  { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#module_keyword">module_keyword</a>  \[ <a href="#lifetime">lifetime</a>  ]  <a href="#module_identifier">module_identifier</a> <font color="purple"><b>(</b></font> <font color="purple"><b>.\*</b></font> <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font>  \[ <a href="#timeunits_declaration">timeunits_declaration</a>  ]   { <a href="#module_item">module_item</a>  }  <font color="purple"><b>endmodule</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#module_identifier">module_identifier</a>  ]    
        | <font color="purple"><b>extern</b></font> <a href="#module_nonansi_header">module_nonansi_header</a>   
        | <font color="purple"><b>extern</b></font> <a href="#module_ansi_header">module_ansi_header</a> 
  
**module_keyword**{: #module_keyword }
:	<font color="purple"><b>module</b></font>   
        | <font color="purple"><b>macromodule</b></font> 
  
**interface_declaration**{: #interface_declaration }
:	<a href="#interface_nonansi_header">interface_nonansi_header</a>  \[ <a href="#timeunits_declaration">timeunits_declaration</a>  ]   { <a href="#interface_item">interface_item</a>  }  <font color="purple"><b>endinterface</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#interface_identifier">interface_identifier</a>  ]    
        | <a href="#interface_ansi_header">interface_ansi_header</a>  \[ <a href="#timeunits_declaration">timeunits_declaration</a>  ]   { <a href="#non_port_interface_item">non_port_interface_item</a>  }  <font color="purple"><b>endinterface</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#interface_identifier">interface_identifier</a>  ]    
        |  { <a href="#attribute_instance">attribute_instance</a>  }  <font color="purple"><b>interface</b></font> <a href="#interface_identifier">interface_identifier</a> <font color="purple"><b>(</b></font> <font color="purple"><b>.\*</b></font> <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font>  \[ <a href="#timeunits_declaration">timeunits_declaration</a>  ]   { <a href="#interface_item">interface_item</a>  }  <font color="purple"><b>endinterface</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#interface_identifier">interface_identifier</a>  ]    
        | <font color="purple"><b>extern</b></font> <a href="#interface_nonansi_header">interface_nonansi_header</a>   
        | <font color="purple"><b>extern</b></font> <a href="#interface_ansi_header">interface_ansi_header</a> 
  
**interface_nonansi_header**{: #interface_nonansi_header }
:	 { <a href="#attribute_instance">attribute_instance</a>  }  <font color="purple"><b>interface</b></font>  \[ <a href="#lifetime">lifetime</a>  ]  <a href="#interface_identifier">interface_identifier</a>  { <a href="#package_import_declaration">package_import_declaration</a>  }   \[ <a href="#parameter_port_list">parameter_port_list</a>  ]  <a href="#list_of_ports">list_of_ports</a> <font color="purple"><b>;</b></font> 
  
**interface_ansi_header**{: #interface_ansi_header }
:	 { <a href="#attribute_instance">attribute_instance</a>  }  <font color="purple"><b>interface</b></font>  \[ <a href="#lifetime">lifetime</a>  ]  <a href="#interface_identifier">interface_identifier</a>  { <a href="#package_import_declaration">package_import_declaration</a>  }   \[ <a href="#parameter_port_list">parameter_port_list</a>  ]   \[ <a href="#list_of_port_declarations">list_of_port_declarations</a>  ]  <font color="purple"><b>;</b></font> 
  
**program_declaration**{: #program_declaration }
:	<a href="#program_nonansi_header">program_nonansi_header</a>  \[ <a href="#timeunits_declaration">timeunits_declaration</a>  ]   { <a href="#program_item">program_item</a>  }  <font color="purple"><b>endprogram</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#program_identifier">program_identifier</a>  ]    
        | <a href="#program_ansi_header">program_ansi_header</a>  \[ <a href="#timeunits_declaration">timeunits_declaration</a>  ]   { <a href="#non_port_program_item">non_port_program_item</a>  }  <font color="purple"><b>endprogram</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#program_identifier">program_identifier</a>  ]    
        |  { <a href="#attribute_instance">attribute_instance</a>  }  <font color="purple"><b>program</b></font> <a href="#program_identifier">program_identifier</a> <font color="purple"><b>(</b></font> <font color="purple"><b>.\*</b></font> <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font>  \[ <a href="#timeunits_declaration">timeunits_declaration</a>  ]   { <a href="#program_item">program_item</a>  }  <font color="purple"><b>endprogram</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#program_identifier">program_identifier</a>  ]    
        | <font color="purple"><b>extern</b></font> <a href="#program_nonansi_header">program_nonansi_header</a>   
        | <font color="purple"><b>extern</b></font> <a href="#program_ansi_header">program_ansi_header</a> 
  
**program_nonansi_header**{: #program_nonansi_header }
:	 { <a href="#attribute_instance">attribute_instance</a>  }  <font color="purple"><b>program</b></font>  \[ <a href="#lifetime">lifetime</a>  ]  <a href="#program_identifier">program_identifier</a>  { <a href="#package_import_declaration">package_import_declaration</a>  }   \[ <a href="#parameter_port_list">parameter_port_list</a>  ]  <a href="#list_of_ports">list_of_ports</a> <font color="purple"><b>;</b></font> 
  
**program_ansi_header**{: #program_ansi_header }
:	 { <a href="#attribute_instance">attribute_instance</a>  }  <font color="purple"><b>program</b></font>  \[ <a href="#lifetime">lifetime</a>  ]  <a href="#program_identifier">program_identifier</a>  { <a href="#package_import_declaration">package_import_declaration</a>  }  [^footnote_1]  \[ <a href="#parameter_port_list">parameter_port_list</a>  ]   \[ <a href="#list_of_port_declarations">list_of_port_declarations</a>  ]  <font color="purple"><b>;</b></font> 
  
**checker_declaration**{: #checker_declaration }
:	<font color="purple"><b>checker</b></font> <a href="#checker_identifier">checker_identifier</a>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#checker_port_list">checker_port_list</a>  ]  <font color="purple"><b>)</b></font>  ]  <font color="purple"><b>;</b></font>  {  { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#checker_or_generate_item">checker_or_generate_item</a>  }  <font color="purple"><b>endchecker</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#checker_identifier">checker_identifier</a>  ]  
  
**class_declaration**{: #class_declaration }
:	 \[ <font color="purple"><b>virtual</b></font>  ]  <font color="purple"><b>class</b></font>  \[ <a href="#lifetime">lifetime</a>  ]  <a href="#class_identifier">class_identifier</a>  \[ <a href="#parameter_port_list">parameter_port_list</a>  ]   \[ <font color="purple"><b>extends</b></font> <a href="#class_type">class_type</a>  \[ <font color="purple"><b>(</b></font> <a href="#list_of_arguments">list_of_arguments</a> <font color="purple"><b>)</b></font>  ]   ]   \[ <font color="purple"><b>implements</b></font> <a href="#interface_class_type">interface_class_type</a>  { <font color="purple"><b>,</b></font> <a href="#interface_class_type">interface_class_type</a>  }   ]  <font color="purple"><b>;</b></font>  { <a href="#class_item">class_item</a>  }  <font color="purple"><b>endclass</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#class_identifier">class_identifier</a>  ]  
  
**interface_class_type**{: #interface_class_type }
:	<a href="#ps_class_identifier">ps_class_identifier</a>  \[ <a href="#parameter_value_assignment">parameter_value_assignment</a>  ]  
  
**interface_class_declaration**{: #interface_class_declaration }
:	<font color="purple"><b>interface</b></font> <font color="purple"><b>class</b></font> <a href="#class_identifier">class_identifier</a>  \[ <a href="#parameter_port_list">parameter_port_list</a>  ]   \[ <font color="purple"><b>extends</b></font> <a href="#interface_class_type">interface_class_type</a>  { <font color="purple"><b>,</b></font> <a href="#interface_class_type">interface_class_type</a>  }   ]  <font color="purple"><b>;</b></font>  { <a href="#interface_class_item">interface_class_item</a>  }  <font color="purple"><b>endclass</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#class_identifier">class_identifier</a>  ]  
  
**interface_class_item**{: #interface_class_item }
:	<a href="#type_declaration">type_declaration</a>   
        |  { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#interface_class_method">interface_class_method</a>   
        | <a href="#local_parameter_declaration">local_parameter_declaration</a> [^footnote_7] <font color="purple"><b>;</b></font>   
        | <a href="#parameter_declaration">parameter_declaration</a> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>;</b></font> 
  
**interface_class_method**{: #interface_class_method }
:	<font color="purple"><b>pure</b></font> <font color="purple"><b>virtual</b></font> <a href="#method_prototype">method_prototype</a> <font color="purple"><b>;</b></font> 
  
**package_declaration**{: #package_declaration }
:	 { <a href="#attribute_instance">attribute_instance</a>  }  <font color="purple"><b>package</b></font>  \[ <a href="#lifetime">lifetime</a>  ]  <a href="#package_identifier">package_identifier</a> <font color="purple"><b>;</b></font>  \[ <a href="#timeunits_declaration">timeunits_declaration</a>  ]   {  { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#package_item">package_item</a>  }  <font color="purple"><b>endpackage</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#package_identifier">package_identifier</a>  ]  
  
**timeunits_declaration**{: #timeunits_declaration }
:	<font color="purple"><b>timeunit</b></font> <a href="#time_literal">time_literal</a>  \[ <font color="purple"><b>/</b></font> <a href="#time_literal">time_literal</a>  ]  <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>timeprecision</b></font> <a href="#time_literal">time_literal</a> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>timeunit</b></font> <a href="#time_literal">time_literal</a> <font color="purple"><b>;</b></font> <font color="purple"><b>timeprecision</b></font> <a href="#time_literal">time_literal</a> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>timeprecision</b></font> <a href="#time_literal">time_literal</a> <font color="purple"><b>;</b></font> <font color="purple"><b>timeunit</b></font> <a href="#time_literal">time_literal</a> <font color="purple"><b>;</b></font> 
  
## Module parameters and ports
  
**parameter_port_list**{: #parameter_port_list }
:	<font color="purple"><b>#</b></font> <font color="purple"><b>(</b></font> <a href="#list_of_param_assignments">list_of_param_assignments</a>  { <font color="purple"><b>,</b></font> <a href="#parameter_port_declaration">parameter_port_declaration</a>  }  <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>#</b></font> <font color="purple"><b>(</b></font> <a href="#parameter_port_declaration">parameter_port_declaration</a>  { <font color="purple"><b>,</b></font> <a href="#parameter_port_declaration">parameter_port_declaration</a>  }  <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>#</b></font> <font color="purple"><b>(</b></font> <font color="purple"><b>)</b></font> 
  
**parameter_port_declaration**{: #parameter_port_declaration }
:	<a href="#parameter_declaration">parameter_declaration</a>   
        | <a href="#local_parameter_declaration">local_parameter_declaration</a>   
        | <a href="#data_type">data_type</a> <a href="#list_of_param_assignments">list_of_param_assignments</a>   
        | <font color="purple"><b>type</b></font> <a href="#list_of_type_assignments">list_of_type_assignments</a> 
  
**list_of_ports**{: #list_of_ports }
:	<font color="purple"><b>(</b></font> <a href="#port">port</a>  { <font color="purple"><b>,</b></font> <a href="#port">port</a>  }  <font color="purple"><b>)</b></font> 
  
**list_of_port_declarations**{: #list_of_port_declarations }[^footnote_2]
:	<font color="purple"><b>(</b></font>  \[  { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#ansi_port_declaration">ansi_port_declaration</a>  { <font color="purple"><b>,</b></font>  { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#ansi_port_declaration">ansi_port_declaration</a>  }   ]  <font color="purple"><b>)</b></font> 
  
**port_declaration**{: #port_declaration }
:	 { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#inout_declaration">inout_declaration</a>   
        |  { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#input_declaration">input_declaration</a>   
        |  { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#output_declaration">output_declaration</a>   
        |  { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#ref_declaration">ref_declaration</a>   
        |  { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#interface_port_declaration">interface_port_declaration</a> 
  
**port**{: #port }
:	 \[ <a href="#port_expression">port_expression</a>  ]    
        | <font color="purple"><b>.</b></font> <a href="#port_identifier">port_identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#port_expression">port_expression</a>  ]  <font color="purple"><b>)</b></font> 
  
**port_expression**{: #port_expression }
:	<a href="#port_reference">port_reference</a>   
        | <font color="purple"><b>{</b></font> <a href="#port_reference">port_reference</a>  { <font color="purple"><b>,</b></font> <a href="#port_reference">port_reference</a>  }  <font color="purple"><b>}</b></font> 
  
**port_reference**{: #port_reference }
:	<a href="#port_identifier">port_identifier</a> <a href="#constant_select">constant_select</a> 
  
**port_direction**{: #port_direction }
:	<font color="purple"><b>input</b></font>   
        | <font color="purple"><b>output</b></font>   
        | <font color="purple"><b>inout</b></font>   
        | <font color="purple"><b>ref</b></font> 
  
**net_port_header**{: #net_port_header }
:	 \[ <a href="#port_direction">port_direction</a>  ]  <a href="#net_port_type">net_port_type</a> 
  
**variable_port_header**{: #variable_port_header }
:	 \[ <a href="#port_direction">port_direction</a>  ]  <a href="#variable_port_type">variable_port_type</a> 
  
**interface_port_header**{: #interface_port_header }
:	<a href="#interface_identifier">interface_identifier</a>  \[ <font color="purple"><b>.</b></font> <a href="#modport_identifier">modport_identifier</a>  ]    
        | <font color="purple"><b>interface</b></font>  \[ <font color="purple"><b>.</b></font> <a href="#modport_identifier">modport_identifier</a>  ]  
  
**ansi_port_declaration**{: #ansi_port_declaration }
:	 \[ <a href="#net_port_header">net_port_header</a>   
         | <a href="#interface_port_header">interface_port_header</a>  ]  <a href="#port_identifier">port_identifier</a>  { <a href="#unpacked_dimension">unpacked_dimension</a>  }   \[ <font color="purple"><b>=</b></font> <a href="#constant_expression">constant_expression</a>  ]    
        |  \[ <a href="#variable_port_header">variable_port_header</a>  ]  <a href="#port_identifier">port_identifier</a>  { <a href="#variable_dimension">variable_dimension</a>  }   \[ <font color="purple"><b>=</b></font> <a href="#constant_expression">constant_expression</a>  ]    
        |  \[ <a href="#port_direction">port_direction</a>  ]  <font color="purple"><b>.</b></font> <a href="#port_identifier">port_identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#expression">expression</a>  ]  <font color="purple"><b>)</b></font> 
  
## Module items
  
**elaboration_system_task**{: #elaboration_system_task }
:	<font color="purple"><b>$fatal</b></font>  \[ <font color="purple"><b>(</b></font> <a href="#finish_number">finish_number</a>  \[ <font color="purple"><b>,</b></font> <a href="#list_of_arguments">list_of_arguments</a>  ]  <font color="purple"><b>)</b></font>  ]  <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>$error</b></font>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#list_of_arguments">list_of_arguments</a>  ]  <font color="purple"><b>)</b></font>  ]  <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>$warning</b></font>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#list_of_arguments">list_of_arguments</a>  ]  <font color="purple"><b>)</b></font>  ]  <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>$info</b></font>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#list_of_arguments">list_of_arguments</a>  ]  <font color="purple"><b>)</b></font>  ]  <font color="purple"><b>;</b></font> 
  
**finish_number**{: #finish_number }
:	<font color="purple"><b>0</b></font>   
        | <font color="purple"><b>1</b></font>   
        | <font color="purple"><b>2</b></font> 
  
**module_common_item**{: #module_common_item }
:	<a href="#module_or_generate_item_declaration">module_or_generate_item_declaration</a>   
        | <a href="#interface_instantiation">interface_instantiation</a>   
        | <a href="#program_instantiation">program_instantiation</a>   
        | <a href="#assertion_item">assertion_item</a>   
        | <a href="#bind_directive">bind_directive</a>   
        | <a href="#continuous_assign">continuous_assign</a>   
        | <a href="#net_alias">net_alias</a>   
        | <a href="#initial_construct">initial_construct</a>   
        | <a href="#final_construct">final_construct</a>   
        | <a href="#always_construct">always_construct</a>   
        | <a href="#loop_generate_construct">loop_generate_construct</a>   
        | <a href="#conditional_generate_construct">conditional_generate_construct</a>   
        | <a href="#elaboration_system_task">elaboration_system_task</a> 
  
**module_item**{: #module_item }
:	<a href="#port_declaration">port_declaration</a> <font color="purple"><b>;</b></font>   
        | <a href="#non_port_module_item">non_port_module_item</a> 
  
**module_or_generate_item**{: #module_or_generate_item }
:	 { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#parameter_override">parameter_override</a>   
        |  { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#gate_instantiation">gate_instantiation</a>   
        |  { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#udp_instantiation">udp_instantiation</a>   
        |  { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#module_instantiation">module_instantiation</a>   
        |  { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#module_common_item">module_common_item</a> 
  
**module_or_generate_item_declaration**{: #module_or_generate_item_declaration }
:	<a href="#package_or_generate_item_declaration">package_or_generate_item_declaration</a>   
        | <a href="#genvar_declaration">genvar_declaration</a>   
        | <a href="#clocking_declaration">clocking_declaration</a>   
        | <font color="purple"><b>default</b></font> <font color="purple"><b>clocking</b></font> <a href="#clocking_identifier">clocking_identifier</a> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>default</b></font> <font color="purple"><b>disable</b></font> <font color="purple"><b>iff</b></font> <a href="#expression_or_dist">expression_or_dist</a> <font color="purple"><b>;</b></font> 
  
**non_port_module_item**{: #non_port_module_item }
:	<a href="#generate_region">generate_region</a>   
        | <a href="#module_or_generate_item">module_or_generate_item</a>   
        | <a href="#specify_block">specify_block</a>   
        |  { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#specparam_declaration">specparam_declaration</a>   
        | <a href="#program_declaration">program_declaration</a>   
        | <a href="#module_declaration">module_declaration</a>   
        | <a href="#interface_declaration">interface_declaration</a>   
        | <a href="#timeunits_declaration">timeunits_declaration</a> [^footnote_3] 
  
**parameter_override**{: #parameter_override }
:	<font color="purple"><b>defparam</b></font> <a href="#list_of_defparam_assignments">list_of_defparam_assignments</a> <font color="purple"><b>;</b></font> 
  
**bind_directive**{: #bind_directive }[^footnote_4]
:	<font color="purple"><b>bind</b></font> <a href="#bind_target_scope">bind_target_scope</a>  \[ <font color="purple"><b>:</b></font> <a href="#bind_target_instance_list">bind_target_instance_list</a>  ]  <a href="#bind_instantiation">bind_instantiation</a> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>bind</b></font> <a href="#bind_target_instance">bind_target_instance</a> <a href="#bind_instantiation">bind_instantiation</a> <font color="purple"><b>;</b></font> 
  
**bind_target_scope**{: #bind_target_scope }
:	<a href="#module_identifier">module_identifier</a>   
        | <a href="#interface_identifier">interface_identifier</a> 
  
**bind_target_instance**{: #bind_target_instance }
:	<a href="#hierarchical_identifier">hierarchical_identifier</a> <a href="#constant_bit_select">constant_bit_select</a> 
  
**bind_target_instance_list**{: #bind_target_instance_list }
:	<a href="#bind_target_instance">bind_target_instance</a>  { <font color="purple"><b>,</b></font> <a href="#bind_target_instance">bind_target_instance</a>  }  
  
**bind_instantiation**{: #bind_instantiation }
:	<a href="#program_instantiation">program_instantiation</a>   
        | <a href="#module_instantiation">module_instantiation</a>   
        | <a href="#interface_instantiation">interface_instantiation</a>   
        | <a href="#checker_instantiation">checker_instantiation</a> 
  
## Configuration source text
  
**config_declaration**{: #config_declaration }
:	<font color="purple"><b>config</b></font> <a href="#config_identifier">config_identifier</a> <font color="purple"><b>;</b></font>  { <a href="#local_parameter_declaration">local_parameter_declaration</a> <font color="purple"><b>;</b></font>  }  <a href="#design_statement">design_statement</a>  { <a href="#config_rule_statement">config_rule_statement</a>  }  <font color="purple"><b>endconfig</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#config_identifier">config_identifier</a>  ]  
  
**design_statement**{: #design_statement }
:	<font color="purple"><b>design</b></font>  {  \[ <a href="#library_identifier">library_identifier</a> <font color="purple"><b>.</b></font>  ]  <a href="#cell_identifier">cell_identifier</a>  }  <font color="purple"><b>;</b></font> 
  
**config_rule_statement**{: #config_rule_statement }
:	<a href="#default_clause">default_clause</a> <a href="#liblist_clause">liblist_clause</a> <font color="purple"><b>;</b></font>   
        | <a href="#inst_clause">inst_clause</a> <a href="#liblist_clause">liblist_clause</a> <font color="purple"><b>;</b></font>   
        | <a href="#inst_clause">inst_clause</a> <a href="#use_clause">use_clause</a> <font color="purple"><b>;</b></font>   
        | <a href="#cell_clause">cell_clause</a> <a href="#liblist_clause">liblist_clause</a> <font color="purple"><b>;</b></font>   
        | <a href="#cell_clause">cell_clause</a> <a href="#use_clause">use_clause</a> <font color="purple"><b>;</b></font> 
  
**default_clause**{: #default_clause }
:	<font color="purple"><b>default</b></font> 
  
**inst_clause**{: #inst_clause }
:	<font color="purple"><b>instance</b></font> <a href="#inst_name">inst_name</a> 
  
**inst_name**{: #inst_name }
:	<a href="#topmodule_identifier">topmodule_identifier</a>  { <font color="purple"><b>.</b></font> <a href="#instance_identifier">instance_identifier</a>  }  
  
**cell_clause**{: #cell_clause }
:	<font color="purple"><b>cell</b></font>  \[ <a href="#library_identifier">library_identifier</a> <font color="purple"><b>.</b></font>  ]  <a href="#cell_identifier">cell_identifier</a> 
  
**liblist_clause**{: #liblist_clause }
:	<font color="purple"><b>liblist</b></font>  { <a href="#library_identifier">library_identifier</a>  }  
  
**use_clause**{: #use_clause }
:	<font color="purple"><b>use</b></font>  \[ <a href="#library_identifier">library_identifier</a> <font color="purple"><b>.</b></font>  ]  <a href="#cell_identifier">cell_identifier</a>  \[ <font color="purple"><b>:</b></font> <font color="purple"><b>config</b></font>  ]    
        | <font color="purple"><b>use</b></font> <a href="#named_parameter_assignment">named_parameter_assignment</a>  { <font color="purple"><b>,</b></font> <a href="#named_parameter_assignment">named_parameter_assignment</a>  }   \[ <font color="purple"><b>:</b></font> <font color="purple"><b>config</b></font>  ]    
        | <font color="purple"><b>use</b></font>  \[ <a href="#library_identifier">library_identifier</a> <font color="purple"><b>.</b></font>  ]  <a href="#cell_identifier">cell_identifier</a> <a href="#named_parameter_assignment">named_parameter_assignment</a>  { <font color="purple"><b>,</b></font> <a href="#named_parameter_assignment">named_parameter_assignment</a>  }   \[ <font color="purple"><b>:</b></font> <font color="purple"><b>config</b></font>  ]  
  
## Interface items
  
**interface_or_generate_item**{: #interface_or_generate_item }
:	 { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#module_common_item">module_common_item</a>   
        |  { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#modport_declaration">modport_declaration</a>   
        |  { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#extern_tf_declaration">extern_tf_declaration</a> 
  
**extern_tf_declaration**{: #extern_tf_declaration }
:	<font color="purple"><b>extern</b></font> <a href="#method_prototype">method_prototype</a> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>extern</b></font> <font color="purple"><b>forkjoin</b></font> <a href="#task_prototype">task_prototype</a> <font color="purple"><b>;</b></font> 
  
**interface_item**{: #interface_item }
:	<a href="#port_declaration">port_declaration</a> <font color="purple"><b>;</b></font>   
        | <a href="#non_port_interface_item">non_port_interface_item</a> 
  
**non_port_interface_item**{: #non_port_interface_item }
:	<a href="#generate_region">generate_region</a>   
        | <a href="#interface_or_generate_item">interface_or_generate_item</a>   
        | <a href="#program_declaration">program_declaration</a>   
        | <a href="#interface_declaration">interface_declaration</a>   
        | <a href="#timeunits_declaration">timeunits_declaration</a> [^footnote_3] 
  
## Program items
  
**program_item**{: #program_item }
:	<a href="#port_declaration">port_declaration</a> <font color="purple"><b>;</b></font>   
        | <a href="#non_port_program_item">non_port_program_item</a> 
  
**non_port_program_item**{: #non_port_program_item }
:	 { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#continuous_assign">continuous_assign</a>   
        |  { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#module_or_generate_item_declaration">module_or_generate_item_declaration</a>   
        |  { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#initial_construct">initial_construct</a>   
        |  { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#final_construct">final_construct</a>   
        |  { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#concurrent_assertion_item">concurrent_assertion_item</a>   
        | <a href="#timeunits_declaration">timeunits_declaration</a> [^footnote_3]   
        | <a href="#program_generate_item">program_generate_item</a> 
  
**program_generate_item**{: #program_generate_item }[^footnote_5]
:	<a href="#loop_generate_construct">loop_generate_construct</a>   
        | <a href="#conditional_generate_construct">conditional_generate_construct</a>   
        | <a href="#generate_region">generate_region</a>   
        | <a href="#elaboration_system_task">elaboration_system_task</a> 
  
## Checker items
  
**checker_port_list**{: #checker_port_list }
:	<a href="#checker_port_item">checker_port_item</a>  { <font color="purple"><b>,</b></font> <a href="#checker_port_item">checker_port_item</a>  }  
  
**checker_port_item**{: #checker_port_item }
:	 { <a href="#attribute_instance">attribute_instance</a>  }   \[ <a href="#checker_port_direction">checker_port_direction</a>  ]  <a href="#property_formal_type">property_formal_type</a> <a href="#formal_port_identifier">formal_port_identifier</a>  { <a href="#variable_dimension">variable_dimension</a>  }   \[ <font color="purple"><b>=</b></font> <a href="#property_actual_arg">property_actual_arg</a>  ]  
  
**checker_port_direction**{: #checker_port_direction }
:	<font color="purple"><b>input</b></font>   
        | <font color="purple"><b>output</b></font> 
  
**checker_or_generate_item**{: #checker_or_generate_item }
:	<a href="#checker_or_generate_item_declaration">checker_or_generate_item_declaration</a>   
        | <a href="#initial_construct">initial_construct</a>   
        | <a href="#always_construct">always_construct</a>   
        | <a href="#final_construct">final_construct</a>   
        | <a href="#assertion_item">assertion_item</a>   
        | <a href="#continuous_assign">continuous_assign</a>   
        | <a href="#checker_generate_item">checker_generate_item</a> 
  
**checker_or_generate_item_declaration**{: #checker_or_generate_item_declaration }
:	 \[ <font color="purple"><b>rand</b></font>  ]  <a href="#data_declaration">data_declaration</a>   
        | <a href="#function_declaration">function_declaration</a>   
        | <a href="#checker_declaration">checker_declaration</a>   
        | <a href="#assertion_item_declaration">assertion_item_declaration</a>   
        | <a href="#covergroup_declaration">covergroup_declaration</a>   
        | <a href="#overload_declaration">overload_declaration</a>   
        | <a href="#genvar_declaration">genvar_declaration</a>   
        | <a href="#clocking_declaration">clocking_declaration</a>   
        | <font color="purple"><b>default</b></font> <font color="purple"><b>clocking</b></font> <a href="#clocking_identifier">clocking_identifier</a> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>default</b></font> <font color="purple"><b>disable</b></font> <font color="purple"><b>iff</b></font> <a href="#expression_or_dist">expression_or_dist</a> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>;</b></font> 
  
**checker_generate_item**{: #checker_generate_item }[^footnote_6]
:	<a href="#loop_generate_construct">loop_generate_construct</a>   
        | <a href="#conditional_generate_construct">conditional_generate_construct</a>   
        | <a href="#generate_region">generate_region</a>   
        | <a href="#elaboration_system_task">elaboration_system_task</a> 
  
## Class items
  
**class_item**{: #class_item }
:	 { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#class_property">class_property</a>   
        |  { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#class_method">class_method</a>   
        |  { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#class_constraint">class_constraint</a>   
        |  { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#class_declaration">class_declaration</a>   
        |  { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#covergroup_declaration">covergroup_declaration</a>   
        | <a href="#local_parameter_declaration">local_parameter_declaration</a> <font color="purple"><b>;</b></font>   
        | <a href="#parameter_declaration">parameter_declaration</a> [^footnote_7] <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>;</b></font> 
  
**class_property**{: #class_property }
:	 { <a href="#property_qualifier">property_qualifier</a>  }  <a href="#data_declaration">data_declaration</a>   
        | <font color="purple"><b>const</b></font>  { <a href="#class_item_qualifier">class_item_qualifier</a>  }  <a href="#data_type">data_type</a> <a href="#const_identifier">const_identifier</a>  \[ <font color="purple"><b>=</b></font> <a href="#constant_expression">constant_expression</a>  ]  <font color="purple"><b>;</b></font> 
  
**class_method**{: #class_method }
:	 { <a href="#method_qualifier">method_qualifier</a>  }  <a href="#task_declaration">task_declaration</a>   
        |  { <a href="#method_qualifier">method_qualifier</a>  }  <a href="#function_declaration">function_declaration</a>   
        | <font color="purple"><b>pure</b></font> <font color="purple"><b>virtual</b></font>  { <a href="#class_item_qualifier">class_item_qualifier</a>  }  <a href="#method_prototype">method_prototype</a> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>extern</b></font>  { <a href="#method_qualifier">method_qualifier</a>  }  <a href="#method_prototype">method_prototype</a> <font color="purple"><b>;</b></font>   
        |  { <a href="#method_qualifier">method_qualifier</a>  }  <a href="#class_constructor_declaration">class_constructor_declaration</a>   
        | <font color="purple"><b>extern</b></font>  { <a href="#method_qualifier">method_qualifier</a>  }  <a href="#class_constructor_prototype">class_constructor_prototype</a> 
  
**class_constructor_prototype**{: #class_constructor_prototype }
:	<font color="purple"><b>function</b></font> <font color="purple"><b>new</b></font>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#tf_port_list">tf_port_list</a>  ]  <font color="purple"><b>)</b></font>  ]  <font color="purple"><b>;</b></font> 
  
**class_constraint**{: #class_constraint }
:	<a href="#constraint_prototype">constraint_prototype</a>   
        | <a href="#constraint_declaration">constraint_declaration</a> 
  
**class_item_qualifier**{: #class_item_qualifier }[^footnote_8]
:	<font color="purple"><b>static</b></font>   
        | <font color="purple"><b>protected</b></font>   
        | <font color="purple"><b>local</b></font> 
  
**property_qualifier**{: #property_qualifier }[^footnote_8]
:	<a href="#random_qualifier">random_qualifier</a>   
        | <a href="#class_item_qualifier">class_item_qualifier</a> 
  
**random_qualifier**{: #random_qualifier }[^footnote_8]
:	<font color="purple"><b>rand</b></font>   
        | <font color="purple"><b>randc</b></font> 
  
**method_qualifier**{: #method_qualifier }[^footnote_8]
:	 \[ <font color="purple"><b>pure</b></font>  ]  <font color="purple"><b>virtual</b></font>   
        | <a href="#class_item_qualifier">class_item_qualifier</a> 
  
**method_prototype**{: #method_prototype }
:	<a href="#task_prototype">task_prototype</a>   
        | <a href="#function_prototype">function_prototype</a> 
  
**class_constructor_declaration**{: #class_constructor_declaration }
:	<font color="purple"><b>function</b></font>  \[ <a href="#class_scope">class_scope</a>  ]  <font color="purple"><b>new</b></font>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#tf_port_list">tf_port_list</a>  ]  <font color="purple"><b>)</b></font>  ]  <font color="purple"><b>;</b></font>  { <a href="#block_item_declaration">block_item_declaration</a>  }   \[ <font color="purple"><b>super</b></font> <font color="purple"><b>.</b></font> <font color="purple"><b>new</b></font>  \[ <font color="purple"><b>(</b></font> <a href="#list_of_arguments">list_of_arguments</a> <font color="purple"><b>)</b></font>  ]  <font color="purple"><b>;</b></font>  ]   { <a href="#function_statement_or_null">function_statement_or_null</a>  }  <font color="purple"><b>endfunction</b></font>  \[ <font color="purple"><b>:</b></font> <font color="purple"><b>new</b></font>  ]  
  
## Constraints
  
**constraint_declaration**{: #constraint_declaration }
:	 \[ <font color="purple"><b>static</b></font>  ]  <font color="purple"><b>constraint</b></font> <a href="#constraint_identifier">constraint_identifier</a> <a href="#constraint_block">constraint_block</a> 
  
**constraint_block**{: #constraint_block }
:	<font color="purple"><b>{</b></font>  { <a href="#constraint_block_item">constraint_block_item</a>  }  <font color="purple"><b>}</b></font> 
  
**constraint_block_item**{: #constraint_block_item }
:	<font color="purple"><b>solve</b></font> <a href="#solve_before_list">solve_before_list</a> <font color="purple"><b>before</b></font> <a href="#solve_before_list">solve_before_list</a> <font color="purple"><b>;</b></font>   
        | <a href="#constraint_expression">constraint_expression</a> 
  
**solve_before_list**{: #solve_before_list }
:	<a href="#constraint_primary">constraint_primary</a>  { <font color="purple"><b>,</b></font> <a href="#constraint_primary">constraint_primary</a>  }  
  
**constraint_primary**{: #constraint_primary }
:	 \[ <a href="#implicit_class_handle">implicit_class_handle</a> <font color="purple"><b>.</b></font>   
         | <a href="#class_scope">class_scope</a>  ]  <a href="#hierarchical_identifier">hierarchical_identifier</a> <a href="#select">select</a> 
  
**constraint_expression**{: #constraint_expression }
:	 \[ <font color="purple"><b>soft</b></font>  ]  <a href="#expression_or_dist">expression_or_dist</a> <font color="purple"><b>;</b></font>   
        | <a href="#uniqueness_constraint">uniqueness_constraint</a> <font color="purple"><b>;</b></font>   
        | <a href="#expression">expression</a> <font color="purple"><b>-></b></font> <a href="#constraint_set">constraint_set</a>   
        | <font color="purple"><b>if</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#constraint_set">constraint_set</a>  \[ <font color="purple"><b>else</b></font> <a href="#constraint_set">constraint_set</a>  ]    
        | <font color="purple"><b>foreach</b></font> <font color="purple"><b>(</b></font> <a href="#ps_or_hierarchical_array_identifier">ps_or_hierarchical_array_identifier</a>  \[ <a href="#loop_variables">loop_variables</a>  ]  <font color="purple"><b>)</b></font> <a href="#constraint_set">constraint_set</a>   
        | <font color="purple"><b>disable</b></font> <font color="purple"><b>soft</b></font> <a href="#constraint_primary">constraint_primary</a> <font color="purple"><b>;</b></font> 
  
**uniqueness_constraint**{: #uniqueness_constraint }[^footnote_9]
:	<font color="purple"><b>unique</b></font> <font color="purple"><b>{</b></font> <a href="#open_range_list">open_range_list</a> <font color="purple"><b>}</b></font> 
  
**constraint_set**{: #constraint_set }
:	<a href="#constraint_expression">constraint_expression</a>   
        | <font color="purple"><b>{</b></font>  { <a href="#constraint_expression">constraint_expression</a>  }  <font color="purple"><b>}</b></font> 
  
**dist_list**{: #dist_list }
:	<a href="#dist_item">dist_item</a>  { <font color="purple"><b>,</b></font> <a href="#dist_item">dist_item</a>  }  
  
**dist_item**{: #dist_item }
:	<a href="#value_range">value_range</a>  \[ <a href="#dist_weight">dist_weight</a>  ]  
  
**dist_weight**{: #dist_weight }
:	<font color="purple"><b>:=</b></font> <a href="#expression">expression</a>   
        | <font color="purple"><b>:/</b></font> <a href="#expression">expression</a> 
  
**constraint_prototype**{: #constraint_prototype }
:	 \[ <a href="#constraint_prototype_qualifier">constraint_prototype_qualifier</a>  ]   \[ <font color="purple"><b>static</b></font>  ]  <font color="purple"><b>constraint</b></font> <a href="#constraint_identifier">constraint_identifier</a> <font color="purple"><b>;</b></font> 
  
**constraint_prototype_qualifier**{: #constraint_prototype_qualifier }
:	<font color="purple"><b>extern</b></font>   
        | <font color="purple"><b>pure</b></font> 
  
**extern_constraint_declaration**{: #extern_constraint_declaration }
:	 \[ <font color="purple"><b>static</b></font>  ]  <font color="purple"><b>constraint</b></font> <a href="#class_scope">class_scope</a> <a href="#constraint_identifier">constraint_identifier</a> <a href="#constraint_block">constraint_block</a> 
  
**identifier_list**{: #identifier_list }
:	<a href="#identifier">identifier</a>  { <font color="purple"><b>,</b></font> <a href="#identifier">identifier</a>  }  
  
## Package items
  
**package_item**{: #package_item }
:	<a href="#package_or_generate_item_declaration">package_or_generate_item_declaration</a>   
        | <a href="#anonymous_program">anonymous_program</a>   
        | <a href="#package_export_declaration">package_export_declaration</a>   
        | <a href="#timeunits_declaration">timeunits_declaration</a> [^footnote_3] 
  
**package_or_generate_item_declaration**{: #package_or_generate_item_declaration }
:	<a href="#net_declaration">net_declaration</a>   
        | <a href="#data_declaration">data_declaration</a>   
        | <a href="#task_declaration">task_declaration</a>   
        | <a href="#function_declaration">function_declaration</a>   
        | <a href="#checker_declaration">checker_declaration</a>   
        | <a href="#dpi_import_export">dpi_import_export</a>   
        | <a href="#extern_constraint_declaration">extern_constraint_declaration</a>   
        | <a href="#class_declaration">class_declaration</a>   
        | <a href="#class_constructor_declaration">class_constructor_declaration</a>   
        | <a href="#local_parameter_declaration">local_parameter_declaration</a> <font color="purple"><b>;</b></font>   
        | <a href="#parameter_declaration">parameter_declaration</a> <font color="purple"><b>;</b></font>   
        | <a href="#covergroup_declaration">covergroup_declaration</a>   
        | <a href="#overload_declaration">overload_declaration</a>   
        | <a href="#assertion_item_declaration">assertion_item_declaration</a>   
        | <font color="purple"><b>;</b></font> 
  
**anonymous_program**{: #anonymous_program }
:	<font color="purple"><b>program</b></font> <font color="purple"><b>;</b></font>  { <a href="#anonymous_program_item">anonymous_program_item</a>  }  <font color="purple"><b>endprogram</b></font> 
  
**anonymous_program_item**{: #anonymous_program_item }
:	<a href="#task_declaration">task_declaration</a>   
        | <a href="#function_declaration">function_declaration</a>   
        | <a href="#class_declaration">class_declaration</a>   
        | <a href="#covergroup_declaration">covergroup_declaration</a>   
        | <a href="#class_constructor_declaration">class_constructor_declaration</a>   
        | <font color="purple"><b>;</b></font> 
  
## Declarations
  
### Declaration types
  
#### Module parameter declarations
  
**local_parameter_declaration**{: #local_parameter_declaration }
:	<font color="purple"><b>localparam</b></font> <a href="#data_type_or_implicit">data_type_or_implicit</a> <a href="#list_of_param_assignments">list_of_param_assignments</a>   
        | <font color="purple"><b>localparam</b></font> <font color="purple"><b>type</b></font> <a href="#list_of_type_assignments">list_of_type_assignments</a> 
  
**parameter_declaration**{: #parameter_declaration }
:	<font color="purple"><b>parameter</b></font> <a href="#data_type_or_implicit">data_type_or_implicit</a> <a href="#list_of_param_assignments">list_of_param_assignments</a>   
        | <font color="purple"><b>parameter</b></font> <font color="purple"><b>type</b></font> <a href="#list_of_type_assignments">list_of_type_assignments</a> 
  
**specparam_declaration**{: #specparam_declaration }
:	<font color="purple"><b>specparam</b></font>  \[ <a href="#packed_dimension">packed_dimension</a>  ]  <a href="#list_of_specparam_assignments">list_of_specparam_assignments</a> <font color="purple"><b>;</b></font> 
  
#### Port declarations
  
**inout_declaration**{: #inout_declaration }
:	<font color="purple"><b>inout</b></font> <a href="#net_port_type">net_port_type</a> <a href="#list_of_port_identifiers">list_of_port_identifiers</a> 
  
**input_declaration**{: #input_declaration }
:	<font color="purple"><b>input</b></font> <a href="#net_port_type">net_port_type</a> <a href="#list_of_port_identifiers">list_of_port_identifiers</a>   
        | <font color="purple"><b>input</b></font> <a href="#variable_port_type">variable_port_type</a> <a href="#list_of_variable_identifiers">list_of_variable_identifiers</a> 
  
**output_declaration**{: #output_declaration }
:	<font color="purple"><b>output</b></font> <a href="#net_port_type">net_port_type</a> <a href="#list_of_port_identifiers">list_of_port_identifiers</a>   
        | <font color="purple"><b>output</b></font> <a href="#variable_port_type">variable_port_type</a> <a href="#list_of_variable_port_identifiers">list_of_variable_port_identifiers</a> 
  
**interface_port_declaration**{: #interface_port_declaration }
:	<a href="#interface_identifier">interface_identifier</a> <a href="#list_of_interface_identifiers">list_of_interface_identifiers</a>   
        | <a href="#interface_identifier">interface_identifier</a> <font color="purple"><b>.</b></font> <a href="#modport_identifier">modport_identifier</a> <a href="#list_of_interface_identifiers">list_of_interface_identifiers</a> 
  
**ref_declaration**{: #ref_declaration }
:	<font color="purple"><b>ref</b></font> <a href="#variable_port_type">variable_port_type</a> <a href="#list_of_variable_identifiers">list_of_variable_identifiers</a> 
  
#### Type declarations
  
**data_declaration**{: #data_declaration }[^footnote_10]
:	 \[ <font color="purple"><b>const</b></font>  ]   \[ <font color="purple"><b>var</b></font>  ]   \[ <a href="#lifetime">lifetime</a>  ]  <a href="#data_type_or_implicit">data_type_or_implicit</a> <a href="#list_of_variable_decl_assignments">list_of_variable_decl_assignments</a> <font color="purple"><b>;</b></font>   
        | <a href="#type_declaration">type_declaration</a>   
        | <a href="#package_import_declaration">package_import_declaration</a> [^footnote_11] <a href="#net_type_declaration">net_type_declaration</a> 
  
**package_import_declaration**{: #package_import_declaration }
:	<font color="purple"><b>import</b></font> <a href="#package_import_item">package_import_item</a>  { <font color="purple"><b>,</b></font> <a href="#package_import_item">package_import_item</a>  }  <font color="purple"><b>;</b></font> 
  
**package_import_item**{: #package_import_item }
:	<a href="#package_identifier">package_identifier</a> <font color="purple"><b>::</b></font> <a href="#identifier">identifier</a>   
        | <a href="#package_identifier">package_identifier</a> <font color="purple"><b>::</b></font> <font color="purple"><b>\*</b></font> 
  
**package_export_declaration**{: #package_export_declaration }
:	<font color="purple"><b>export</b></font> <font color="purple"><b>\*::\*</b></font> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>export</b></font> <a href="#package_import_item">package_import_item</a>  { <font color="purple"><b>,</b></font> <a href="#package_import_item">package_import_item</a>  }  <font color="purple"><b>;</b></font> 
  
**genvar_declaration**{: #genvar_declaration }
:	<font color="purple"><b>genvar</b></font> <a href="#list_of_genvar_identifiers">list_of_genvar_identifiers</a> <font color="purple"><b>;</b></font> 
  
**net_declaration**{: #net_declaration }[^footnote_12]
:	<a href="#net_type">net_type</a>  \[ <a href="#drive_strength">drive_strength</a>   
         | <a href="#charge_strength">charge_strength</a>  ]   \[ <font color="purple"><b>vectored</b></font>   
         | <font color="purple"><b>scalared</b></font>  ]  <a href="#data_type_or_implicit">data_type_or_implicit</a>  \[ <a href="#delay3">delay3</a>  ]  <a href="#list_of_net_decl_assignments">list_of_net_decl_assignments</a> <font color="purple"><b>;</b></font>   
        | <a href="#net_type_identifier">net_type_identifier</a>  \[ <a href="#delay_control">delay_control</a>  ]  <a href="#list_of_net_decl_assignments">list_of_net_decl_assignments</a> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>interconnect</b></font> <a href="#implicit_data_type">implicit_data_type</a>  \[ <font color="purple"><b>#</b></font> <a href="#delay_value">delay_value</a>  ]  <a href="#net_identifier">net_identifier</a>  { <a href="#unpacked_dimension">unpacked_dimension</a>  }   \[ <font color="purple"><b>,</b></font> <a href="#net_identifier">net_identifier</a>  { <a href="#unpacked_dimension">unpacked_dimension</a>  }   ]  <font color="purple"><b>;</b></font> 
  
**type_declaration**{: #type_declaration }
:	<font color="purple"><b>typedef</b></font> <a href="#data_type">data_type</a> <a href="#type_identifier">type_identifier</a>  { <a href="#variable_dimension">variable_dimension</a>  }  <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>typedef</b></font> <a href="#interface_instance_identifier">interface_instance_identifier</a> <a href="#constant_bit_select">constant_bit_select</a> <font color="purple"><b>.</b></font> <a href="#type_identifier">type_identifier</a> <a href="#type_identifier">type_identifier</a> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>typedef</b></font>  \[ <font color="purple"><b>enum</b></font>   
         | <font color="purple"><b>struct</b></font>   
         | <font color="purple"><b>union</b></font>   
         | <font color="purple"><b>class</b></font>   
         | <font color="purple"><b>interface</b></font> <font color="purple"><b>class</b></font>  ]  <a href="#type_identifier">type_identifier</a> <font color="purple"><b>;</b></font> 
  
**net_type_declaration**{: #net_type_declaration }
:	<font color="purple"><b>nettype</b></font> <a href="#data_type">data_type</a> <a href="#net_type_identifier">net_type_identifier</a>  \[ <font color="purple"><b>with</b></font>  \[ <a href="#package_scope">package_scope</a>   
          | <a href="#class_scope">class_scope</a>  ]  <a href="#tf_identifier">tf_identifier</a>  ]  <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>nettype</b></font>  \[ <a href="#package_scope">package_scope</a>   
         | <a href="#class_scope">class_scope</a>  ]  <a href="#net_type_identifier">net_type_identifier</a> <a href="#net_type_identifier">net_type_identifier</a> <font color="purple"><b>;</b></font> 
  
**lifetime**{: #lifetime }
:	<font color="purple"><b>static</b></font>   
        | <font color="purple"><b>automatic</b></font> 
  
### Declaration data types
  
#### Net and variable types
  
**casting_type**{: #casting_type }
:	<a href="#simple_type">simple_type</a>   
        | <a href="#constant_primary">constant_primary</a>   
        | <a href="#signing">signing</a>   
        | <font color="purple"><b>string</b></font>   
        | <font color="purple"><b>const</b></font> 
  
**data_type**{: #data_type }
:	<a href="#integer_vector_type">integer_vector_type</a>  \[ <a href="#signing">signing</a>  ]   { <a href="#packed_dimension">packed_dimension</a>  }    
        | <a href="#integer_atom_type">integer_atom_type</a>  \[ <a href="#signing">signing</a>  ]    
        | <a href="#non_integer_type">non_integer_type</a>   
        | <a href="#struct_union">struct_union</a>  \[ <font color="purple"><b>packed</b></font>  \[ <a href="#signing">signing</a>  ]   ]  <font color="purple"><b>{</b></font> <a href="#struct_union_member">struct_union_member</a>  { <a href="#struct_union_member">struct_union_member</a>  }  <font color="purple"><b>}</b></font>  { <a href="#packed_dimension">packed_dimension</a>  }    
        | <font color="purple"><b>enum</b></font>  \[ <a href="#enum_base_type">enum_base_type</a>  ]  <font color="purple"><b>{</b></font> <a href="#enum_name_declaration">enum_name_declaration</a>  { <font color="purple"><b>,</b></font> <a href="#enum_name_declaration">enum_name_declaration</a>  }  <font color="purple"><b>}</b></font>  { <a href="#packed_dimension">packed_dimension</a>  }  [^footnote_13]   
        | <font color="purple"><b>string</b></font>   
        | <font color="purple"><b>chandle</b></font>   
        | <font color="purple"><b>virtual</b></font>  \[ <font color="purple"><b>interface</b></font>  ]  <a href="#interface_identifier">interface_identifier</a>  \[ <a href="#parameter_value_assignment">parameter_value_assignment</a>  ]   \[ <font color="purple"><b>.</b></font> <a href="#modport_identifier">modport_identifier</a>  ]    
        |  \[ <a href="#class_scope">class_scope</a>   
         | <a href="#package_scope">package_scope</a>  ]  <a href="#type_identifier">type_identifier</a>  { <a href="#packed_dimension">packed_dimension</a>  }    
        | <a href="#class_type">class_type</a>   
        | <font color="purple"><b>event</b></font>   
        | <a href="#ps_covergroup_identifier">ps_covergroup_identifier</a>   
        | <a href="#type_reference">type_reference</a> [^footnote_14] 
  
**data_type_or_implicit**{: #data_type_or_implicit }
:	<a href="#data_type">data_type</a>   
        | <a href="#implicit_data_type">implicit_data_type</a> 
  
**implicit_data_type**{: #implicit_data_type }
:	 \[ <a href="#signing">signing</a>  ]   { <a href="#packed_dimension">packed_dimension</a>  }  
  
**enum_base_type**{: #enum_base_type }
:	<a href="#integer_atom_type">integer_atom_type</a>  \[ <a href="#signing">signing</a>  ]    
        | <a href="#integer_vector_type">integer_vector_type</a>  \[ <a href="#signing">signing</a>  ]   \[ <a href="#packed_dimension">packed_dimension</a>  ]    
        | <a href="#type_identifier">type_identifier</a>  \[ <a href="#packed_dimension">packed_dimension</a>  ]  [^footnote_14] 
  
**enum_name_declaration**{: #enum_name_declaration }
:	<a href="#enum_identifier">enum_identifier</a>  \[ <font color="purple"><b>\[</b></font> <a href="#integral_number">integral_number</a>  \[ <font color="purple"><b>:</b></font> <a href="#integral_number">integral_number</a>  ]  <font color="purple"><b>]</b></font>  ]   \[ <font color="purple"><b>=</b></font> <a href="#constant_expression">constant_expression</a>  ]  
  
**class_scope**{: #class_scope }
:	<a href="#class_type">class_type</a> <font color="purple"><b>::</b></font> 
  
**class_type**{: #class_type }
:	<a href="#ps_class_identifier">ps_class_identifier</a>  \[ <a href="#parameter_value_assignment">parameter_value_assignment</a>  ]   { <font color="purple"><b>::</b></font> <a href="#class_identifier">class_identifier</a>  \[ <a href="#parameter_value_assignment">parameter_value_assignment</a>  ]   }  
  
**integer_type**{: #integer_type }
:	<a href="#integer_vector_type">integer_vector_type</a>   
        | <a href="#integer_atom_type">integer_atom_type</a> 
  
**integer_atom_type**{: #integer_atom_type }
:	<font color="purple"><b>byte</b></font>   
        | <font color="purple"><b>shortint</b></font>   
        | <font color="purple"><b>int</b></font>   
        | <font color="purple"><b>longint</b></font>   
        | <font color="purple"><b>integer</b></font>   
        | <font color="purple"><b>time</b></font> 
  
**integer_vector_type**{: #integer_vector_type }
:	<font color="purple"><b>bit</b></font>   
        | <font color="purple"><b>logic</b></font>   
        | <font color="purple"><b>reg</b></font> 
  
**non_integer_type**{: #non_integer_type }
:	<font color="purple"><b>shortreal</b></font>   
        | <font color="purple"><b>real</b></font>   
        | <font color="purple"><b>realtime</b></font> 
  
**net_type**{: #net_type }
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
  
**net_port_type**{: #net_port_type }
:	 \[ <a href="#net_type">net_type</a>  ]  <a href="#data_type_or_implicit">data_type_or_implicit</a>   
        | <a href="#net_type_identifier">net_type_identifier</a>   
        | <font color="purple"><b>interconnect</b></font> <a href="#implicit_data_type">implicit_data_type</a> 
  
**variable_port_type**{: #variable_port_type }
:	<a href="#var_data_type">var_data_type</a> 
  
**var_data_type**{: #var_data_type }
:	<a href="#data_type">data_type</a>   
        | <font color="purple"><b>var</b></font> <a href="#data_type_or_implicit">data_type_or_implicit</a> 
  
**signing**{: #signing }
:	<font color="purple"><b>signed</b></font>   
        | <font color="purple"><b>unsigned</b></font> 
  
**simple_type**{: #simple_type }
:	<a href="#integer_type">integer_type</a>   
        | <a href="#non_integer_type">non_integer_type</a>   
        | <a href="#ps_type_identifier">ps_type_identifier</a>   
        | <a href="#ps_parameter_identifier">ps_parameter_identifier</a> 
  
**struct_union_member**{: #struct_union_member }[^footnote_16]
:	 { <a href="#attribute_instance">attribute_instance</a>  }   \[ <a href="#random_qualifier">random_qualifier</a>  ]  <a href="#data_type_or_void">data_type_or_void</a> <a href="#list_of_variable_decl_assignments">list_of_variable_decl_assignments</a> <font color="purple"><b>;</b></font> 
  
**data_type_or_void**{: #data_type_or_void }
:	<a href="#data_type">data_type</a>   
        | <font color="purple"><b>void</b></font> 
  
**struct_union**{: #struct_union }
:	<font color="purple"><b>struct</b></font>   
        | <font color="purple"><b>union</b></font>  \[ <font color="purple"><b>tagged</b></font>  ]  
  
**type_reference**{: #type_reference }
:	<font color="purple"><b>type</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> [^footnote_17] <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>type</b></font> <font color="purple"><b>(</b></font> <a href="#data_type">data_type</a> <font color="purple"><b>)</b></font> 
  
#### Strengths
  
**drive_strength**{: #drive_strength }
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
  
**charge_strength**{: #charge_strength }
:	<font color="purple"><b>(</b></font> <font color="purple"><b>small</b></font> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>(</b></font> <font color="purple"><b>medium</b></font> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>(</b></font> <font color="purple"><b>large</b></font> <font color="purple"><b>)</b></font> 
  
#### Delays
  
**delay3**{: #delay3 }
:	<font color="purple"><b>#</b></font> <a href="#delay_value">delay_value</a>   
        | <font color="purple"><b>#</b></font> <font color="purple"><b>(</b></font> <a href="#mintypmax_expression">mintypmax_expression</a>  \[ <font color="purple"><b>,</b></font> <a href="#mintypmax_expression">mintypmax_expression</a>  \[ <font color="purple"><b>,</b></font> <a href="#mintypmax_expression">mintypmax_expression</a>  ]   ]  <font color="purple"><b>)</b></font> 
  
**delay2**{: #delay2 }
:	<font color="purple"><b>#</b></font> <a href="#delay_value">delay_value</a>   
        | <font color="purple"><b>#</b></font> <font color="purple"><b>(</b></font> <a href="#mintypmax_expression">mintypmax_expression</a>  \[ <font color="purple"><b>,</b></font> <a href="#mintypmax_expression">mintypmax_expression</a>  ]  <font color="purple"><b>)</b></font> 
  
**delay_value**{: #delay_value }
:	<a href="#unsigned_number">unsigned_number</a>   
        | <a href="#real_number">real_number</a>   
        | <a href="#ps_identifier">ps_identifier</a>   
        | <a href="#time_literal">time_literal</a>   
        | <font color="purple"><b>1step</b></font> 
  
### Declaration lists
  
**list_of_defparam_assignments**{: #list_of_defparam_assignments }
:	<a href="#defparam_assignment">defparam_assignment</a>  { <font color="purple"><b>,</b></font> <a href="#defparam_assignment">defparam_assignment</a>  }  
  
**list_of_genvar_identifiers**{: #list_of_genvar_identifiers }
:	<a href="#genvar_identifier">genvar_identifier</a>  { <font color="purple"><b>,</b></font> <a href="#genvar_identifier">genvar_identifier</a>  }  
  
**list_of_interface_identifiers**{: #list_of_interface_identifiers }
:	<a href="#interface_identifier">interface_identifier</a>  { <a href="#unpacked_dimension">unpacked_dimension</a>  }   { <font color="purple"><b>,</b></font> <a href="#interface_identifier">interface_identifier</a>  { <a href="#unpacked_dimension">unpacked_dimension</a>  }   }  
  
**list_of_net_decl_assignments**{: #list_of_net_decl_assignments }
:	<a href="#net_decl_assignment">net_decl_assignment</a>  { <font color="purple"><b>,</b></font> <a href="#net_decl_assignment">net_decl_assignment</a>  }  
  
**list_of_param_assignments**{: #list_of_param_assignments }
:	<a href="#param_assignment">param_assignment</a>  { <font color="purple"><b>,</b></font> <a href="#param_assignment">param_assignment</a>  }  
  
**list_of_port_identifiers**{: #list_of_port_identifiers }
:	<a href="#port_identifier">port_identifier</a>  { <a href="#unpacked_dimension">unpacked_dimension</a>  }   { <font color="purple"><b>,</b></font> <a href="#port_identifier">port_identifier</a>  { <a href="#unpacked_dimension">unpacked_dimension</a>  }   }  
  
**list_of_udp_port_identifiers**{: #list_of_udp_port_identifiers }
:	<a href="#port_identifier">port_identifier</a>  { <font color="purple"><b>,</b></font> <a href="#port_identifier">port_identifier</a>  }  
  
**list_of_specparam_assignments**{: #list_of_specparam_assignments }
:	<a href="#specparam_assignment">specparam_assignment</a>  { <font color="purple"><b>,</b></font> <a href="#specparam_assignment">specparam_assignment</a>  }  
  
**list_of_tf_variable_identifiers**{: #list_of_tf_variable_identifiers }
:	<a href="#port_identifier">port_identifier</a>  { <a href="#variable_dimension">variable_dimension</a>  }   \[ <font color="purple"><b>=</b></font> <a href="#expression">expression</a>  ]   { <font color="purple"><b>,</b></font> <a href="#port_identifier">port_identifier</a>  { <a href="#variable_dimension">variable_dimension</a>  }   \[ <font color="purple"><b>=</b></font> <a href="#expression">expression</a>  ]   }  
  
**list_of_type_assignments**{: #list_of_type_assignments }
:	<a href="#type_assignment">type_assignment</a>  { <font color="purple"><b>,</b></font> <a href="#type_assignment">type_assignment</a>  }  
  
**list_of_variable_decl_assignments**{: #list_of_variable_decl_assignments }
:	<a href="#variable_decl_assignment">variable_decl_assignment</a>  { <font color="purple"><b>,</b></font> <a href="#variable_decl_assignment">variable_decl_assignment</a>  }  
  
**list_of_variable_identifiers**{: #list_of_variable_identifiers }
:	<a href="#variable_identifier">variable_identifier</a>  { <a href="#variable_dimension">variable_dimension</a>  }   { <font color="purple"><b>,</b></font> <a href="#variable_identifier">variable_identifier</a>  { <a href="#variable_dimension">variable_dimension</a>  }   }  
  
**list_of_variable_port_identifiers**{: #list_of_variable_port_identifiers }
:	<a href="#port_identifier">port_identifier</a>  { <a href="#variable_dimension">variable_dimension</a>  }   \[ <font color="purple"><b>=</b></font> <a href="#constant_expression">constant_expression</a>  ]   { <font color="purple"><b>,</b></font> <a href="#port_identifier">port_identifier</a>  { <a href="#variable_dimension">variable_dimension</a>  }   \[ <font color="purple"><b>=</b></font> <a href="#constant_expression">constant_expression</a>  ]   }  
  
### Declaration assignments
  
**defparam_assignment**{: #defparam_assignment }
:	<a href="#hierarchical_parameter_identifier">hierarchical_parameter_identifier</a> <font color="purple"><b>=</b></font> <a href="#constant_mintypmax_expression">constant_mintypmax_expression</a> 
  
**net_decl_assignment**{: #net_decl_assignment }
:	<a href="#net_identifier">net_identifier</a>  { <a href="#unpacked_dimension">unpacked_dimension</a>  }   \[ <font color="purple"><b>=</b></font> <a href="#expression">expression</a>  ]  
  
**param_assignment**{: #param_assignment }
:	<a href="#parameter_identifier">parameter_identifier</a>  { <a href="#unpacked_dimension">unpacked_dimension</a>  }   \[ <font color="purple"><b>=</b></font> <a href="#constant_param_expression">constant_param_expression</a>  ]  
  
**specparam_assignment**{: #specparam_assignment }
:	<a href="#specparam_identifier">specparam_identifier</a> <font color="purple"><b>=</b></font> <a href="#constant_mintypmax_expression">constant_mintypmax_expression</a>   
        | <a href="#pulse_control_specparam">pulse_control_specparam</a> 
  
**type_assignment**{: #type_assignment }
:	<a href="#type_identifier">type_identifier</a>  \[ <font color="purple"><b>=</b></font> <a href="#data_type">data_type</a>  ]  [^footnote_18] 
  
**pulse_control_specparam**{: #pulse_control_specparam }
:	<font color="purple"><b>PATHPULSE$</b></font> <font color="purple"><b>=</b></font> <font color="purple"><b>(</b></font> <a href="#reject_limit_value">reject_limit_value</a>  \[ <font color="purple"><b>,</b></font> <a href="#error_limit_value">error_limit_value</a>  ]  <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>PATHPULSE$</b></font> <a href="#specify_input_terminal_descriptor">specify_input_terminal_descriptor</a> <font color="purple"><b>$</b></font> <a href="#specify_output_terminal_descriptor">specify_output_terminal_descriptor</a> <font color="purple"><b>=</b></font> <font color="purple"><b>(</b></font> <a href="#reject_limit_value">reject_limit_value</a>  \[ <font color="purple"><b>,</b></font> <a href="#error_limit_value">error_limit_value</a>  ]  <font color="purple"><b>)</b></font> 
  
**error_limit_value**{: #error_limit_value }
:	<a href="#limit_value">limit_value</a> 
  
**reject_limit_value**{: #reject_limit_value }
:	<a href="#limit_value">limit_value</a> 
  
**limit_value**{: #limit_value }
:	<a href="#constant_mintypmax_expression">constant_mintypmax_expression</a> 
  
**variable_decl_assignment**{: #variable_decl_assignment }
:	<a href="#variable_identifier">variable_identifier</a>  { <a href="#variable_dimension">variable_dimension</a>  }   \[ <font color="purple"><b>=</b></font> <a href="#expression">expression</a>  ]    
        | <a href="#dynamic_array_variable_identifier">dynamic_array_variable_identifier</a> <a href="#unsized_dimension">unsized_dimension</a>  { <a href="#variable_dimension">variable_dimension</a>  }   \[ <font color="purple"><b>=</b></font> <a href="#dynamic_array_new">dynamic_array_new</a>  ]    
        | <a href="#class_variable_identifier">class_variable_identifier</a>  \[ <font color="purple"><b>=</b></font> <a href="#class_new">class_new</a>  ]  
  
**class_new**{: #class_new }[^footnote_19]
:	 \[ <a href="#class_scope">class_scope</a>  ]  <font color="purple"><b>new</b></font>  \[ <font color="purple"><b>(</b></font> <a href="#list_of_arguments">list_of_arguments</a> <font color="purple"><b>)</b></font>  ]    
        | <font color="purple"><b>new</b></font> <a href="#expression">expression</a> 
  
**dynamic_array_new**{: #dynamic_array_new }
:	<font color="purple"><b>new</b></font> <font color="purple"><b>\[</b></font> <a href="#expression">expression</a> <font color="purple"><b>]</b></font>  \[ <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font>  ]  
  
### Declaration ranges
  
**unpacked_dimension**{: #unpacked_dimension }
:	<font color="purple"><b>\[</b></font> <a href="#constant_range">constant_range</a> <font color="purple"><b>]</b></font>   
        | <font color="purple"><b>\[</b></font> <a href="#constant_expression">constant_expression</a> <font color="purple"><b>]</b></font> 
  
**packed_dimension**{: #packed_dimension }[^footnote_20]
:	<font color="purple"><b>\[</b></font> <a href="#constant_range">constant_range</a> <font color="purple"><b>]</b></font>   
        | <a href="#unsized_dimension">unsized_dimension</a> 
  
**associative_dimension**{: #associative_dimension }
:	<font color="purple"><b>\[</b></font> <a href="#data_type">data_type</a> <font color="purple"><b>]</b></font>   
        | <font color="purple"><b>\[</b></font> <font color="purple"><b>\*</b></font> <font color="purple"><b>]</b></font> 
  
**variable_dimension**{: #variable_dimension }
:	<a href="#unsized_dimension">unsized_dimension</a>   
        | <a href="#unpacked_dimension">unpacked_dimension</a>   
        | <a href="#associative_dimension">associative_dimension</a>   
        | <a href="#queue_dimension">queue_dimension</a> 
  
**queue_dimension**{: #queue_dimension }
:	<font color="purple"><b>\[</b></font> <font color="purple"><b>$</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#constant_expression">constant_expression</a>  ]  <font color="purple"><b>]</b></font> 
  
**unsized_dimension**{: #unsized_dimension }
:	<font color="purple"><b>\[</b></font> <font color="purple"><b>]</b></font> 
  
### Function declarations
  
**function_data_type_or_implicit**{: #function_data_type_or_implicit }
:	<a href="#data_type_or_void">data_type_or_void</a>   
        | <a href="#implicit_data_type">implicit_data_type</a> 
  
**function_declaration**{: #function_declaration }
:	<font color="purple"><b>function</b></font>  \[ <a href="#lifetime">lifetime</a>  ]  <a href="#function_body_declaration">function_body_declaration</a> 
  
**function_body_declaration**{: #function_body_declaration }
:	<a href="#function_data_type_or_implicit">function_data_type_or_implicit</a>  \[ <a href="#interface_identifier">interface_identifier</a> <font color="purple"><b>.</b></font>   
         | <a href="#class_scope">class_scope</a>  ]  <a href="#function_identifier">function_identifier</a> <font color="purple"><b>;</b></font>  { <a href="#tf_item_declaration">tf_item_declaration</a>  }   { <a href="#function_statement_or_null">function_statement_or_null</a>  }  <font color="purple"><b>endfunction</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#function_identifier">function_identifier</a>  ]    
        | <a href="#function_data_type_or_implicit">function_data_type_or_implicit</a>  \[ <a href="#interface_identifier">interface_identifier</a> <font color="purple"><b>.</b></font>   
         | <a href="#class_scope">class_scope</a>  ]  <a href="#function_identifier">function_identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#tf_port_list">tf_port_list</a>  ]  <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font>  { <a href="#block_item_declaration">block_item_declaration</a>  }   { <a href="#function_statement_or_null">function_statement_or_null</a>  }  <font color="purple"><b>endfunction</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#function_identifier">function_identifier</a>  ]  
  
**function_prototype**{: #function_prototype }
:	<font color="purple"><b>function</b></font> <a href="#data_type_or_void">data_type_or_void</a> <a href="#function_identifier">function_identifier</a>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#tf_port_list">tf_port_list</a>  ]  <font color="purple"><b>)</b></font>  ]  
  
**dpi_import_export**{: #dpi_import_export }
:	<font color="purple"><b>import</b></font> <a href="#dpi_spec_string">dpi_spec_string</a>  \[ <a href="#dpi_function_import_property">dpi_function_import_property</a>  ]   \[ <a href="#c_identifier">c_identifier</a> <font color="purple"><b>=</b></font>  ]  <a href="#dpi_function_proto">dpi_function_proto</a> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>import</b></font> <a href="#dpi_spec_string">dpi_spec_string</a>  \[ <a href="#dpi_task_import_property">dpi_task_import_property</a>  ]   \[ <a href="#c_identifier">c_identifier</a> <font color="purple"><b>=</b></font>  ]  <a href="#dpi_task_proto">dpi_task_proto</a> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>export</b></font> <a href="#dpi_spec_string">dpi_spec_string</a>  \[ <a href="#c_identifier">c_identifier</a> <font color="purple"><b>=</b></font>  ]  <font color="purple"><b>function</b></font> <a href="#function_identifier">function_identifier</a> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>export</b></font> <a href="#dpi_spec_string">dpi_spec_string</a>  \[ <a href="#c_identifier">c_identifier</a> <font color="purple"><b>=</b></font>  ]  <font color="purple"><b>task</b></font> <a href="#task_identifier">task_identifier</a> <font color="purple"><b>;</b></font> 
  
**dpi_spec_string**{: #dpi_spec_string }
:	<font color="purple"><b>DPI-C</b></font>   
        | <font color="purple"><b>DPI</b></font> 
  
**dpi_function_import_property**{: #dpi_function_import_property }
:	<font color="purple"><b>context</b></font>   
        | <font color="purple"><b>pure</b></font> 
  
**dpi_task_import_property**{: #dpi_task_import_property }
:	<font color="purple"><b>context</b></font> 
  
**dpi_function_proto**{: #dpi_function_proto }[^footnote_21],[^footnote_22]
:	<a href="#function_prototype">function_prototype</a> 
  
**dpi_task_proto**{: #dpi_task_proto }[^footnote_22]
:	<a href="#task_prototype">task_prototype</a> 
  
### Task declarations
  
**task_declaration**{: #task_declaration }
:	<font color="purple"><b>task</b></font>  \[ <a href="#lifetime">lifetime</a>  ]  <a href="#task_body_declaration">task_body_declaration</a> 
  
**task_body_declaration**{: #task_body_declaration }
:	 \[ <a href="#interface_identifier">interface_identifier</a> <font color="purple"><b>.</b></font>   
         | <a href="#class_scope">class_scope</a>  ]  <a href="#task_identifier">task_identifier</a> <font color="purple"><b>;</b></font>  { <a href="#tf_item_declaration">tf_item_declaration</a>  }   { <a href="#statement_or_null">statement_or_null</a>  }  <font color="purple"><b>endtask</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#task_identifier">task_identifier</a>  ]    
        |  \[ <a href="#interface_identifier">interface_identifier</a> <font color="purple"><b>.</b></font>   
         | <a href="#class_scope">class_scope</a>  ]  <a href="#task_identifier">task_identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#tf_port_list">tf_port_list</a>  ]  <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font>  { <a href="#block_item_declaration">block_item_declaration</a>  }   { <a href="#statement_or_null">statement_or_null</a>  }  <font color="purple"><b>endtask</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#task_identifier">task_identifier</a>  ]  
  
**tf_item_declaration**{: #tf_item_declaration }
:	<a href="#block_item_declaration">block_item_declaration</a>   
        | <a href="#tf_port_declaration">tf_port_declaration</a> 
  
**tf_port_list**{: #tf_port_list }
:	<a href="#tf_port_item">tf_port_item</a>  { <font color="purple"><b>,</b></font> <a href="#tf_port_item">tf_port_item</a>  }  
  
**tf_port_item**{: #tf_port_item }
:	 { <a href="#attribute_instance">attribute_instance</a>  }   \[ <a href="#tf_port_direction">tf_port_direction</a>  ]   \[ <font color="purple"><b>var</b></font>  ]  <a href="#data_type_or_implicit">data_type_or_implicit</a>  \[ <a href="#port_identifier">port_identifier</a>  { <a href="#variable_dimension">variable_dimension</a>  }   \[ <font color="purple"><b>=</b></font> <a href="#expression">expression</a>  ]   ]  
  
**tf_port_direction**{: #tf_port_direction }[^footnote_23]
:	<a href="#port_direction">port_direction</a>   
        | <font color="purple"><b>const</b></font> <font color="purple"><b>ref</b></font> 
  
**tf_port_declaration**{: #tf_port_declaration }
:	 { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#tf_port_direction">tf_port_direction</a>  \[ <font color="purple"><b>var</b></font>  ]  <a href="#data_type_or_implicit">data_type_or_implicit</a> <a href="#list_of_tf_variable_identifiers">list_of_tf_variable_identifiers</a> <font color="purple"><b>;</b></font> 
  
**task_prototype**{: #task_prototype }
:	<font color="purple"><b>task</b></font> <a href="#task_identifier">task_identifier</a>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#tf_port_list">tf_port_list</a>  ]  <font color="purple"><b>)</b></font>  ]  
  
### Block item declarations
  
**block_item_declaration**{: #block_item_declaration }
:	 { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#data_declaration">data_declaration</a>   
        |  { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#local_parameter_declaration">local_parameter_declaration</a> <font color="purple"><b>;</b></font>   
        |  { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#parameter_declaration">parameter_declaration</a> <font color="purple"><b>;</b></font>   
        |  { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#overload_declaration">overload_declaration</a>   
        |  { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#let_declaration">let_declaration</a> 
  
**overload_declaration**{: #overload_declaration }
:	<font color="purple"><b>bind</b></font> <a href="#overload_operator">overload_operator</a> <font color="purple"><b>function</b></font> <a href="#data_type">data_type</a> <a href="#function_identifier">function_identifier</a> <font color="purple"><b>(</b></font> <a href="#overload_proto_formals">overload_proto_formals</a> <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font> 
  
**overload_operator**{: #overload_operator }
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
  
**overload_proto_formals**{: #overload_proto_formals }
:	<a href="#data_type">data_type</a>  { <font color="purple"><b>,</b></font> <a href="#data_type">data_type</a>  }  
  
### Interface declarations
  
**modport_declaration**{: #modport_declaration }
:	<font color="purple"><b>modport</b></font> <a href="#modport_item">modport_item</a>  { <font color="purple"><b>,</b></font> <a href="#modport_item">modport_item</a>  }  <font color="purple"><b>;</b></font> 
  
**modport_item**{: #modport_item }
:	<a href="#modport_identifier">modport_identifier</a> <font color="purple"><b>(</b></font> <a href="#modport_ports_declaration">modport_ports_declaration</a>  { <font color="purple"><b>,</b></font> <a href="#modport_ports_declaration">modport_ports_declaration</a>  }  <font color="purple"><b>)</b></font> 
  
**modport_ports_declaration**{: #modport_ports_declaration }
:	 { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#modport_simple_ports_declaration">modport_simple_ports_declaration</a>   
        |  { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#modport_tf_ports_declaration">modport_tf_ports_declaration</a>   
        |  { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#modport_clocking_declaration">modport_clocking_declaration</a> 
  
**modport_clocking_declaration**{: #modport_clocking_declaration }
:	<font color="purple"><b>clocking</b></font> <a href="#clocking_identifier">clocking_identifier</a> 
  
**modport_simple_ports_declaration**{: #modport_simple_ports_declaration }
:	<a href="#port_direction">port_direction</a> <a href="#modport_simple_port">modport_simple_port</a>  { <font color="purple"><b>,</b></font> <a href="#modport_simple_port">modport_simple_port</a>  }  
  
**modport_simple_port**{: #modport_simple_port }
:	<a href="#port_identifier">port_identifier</a>   
        | <font color="purple"><b>.</b></font> <a href="#port_identifier">port_identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#expression">expression</a>  ]  <font color="purple"><b>)</b></font> 
  
**modport_tf_ports_declaration**{: #modport_tf_ports_declaration }
:	<a href="#import_export">import_export</a> <a href="#modport_tf_port">modport_tf_port</a>  { <font color="purple"><b>,</b></font> <a href="#modport_tf_port">modport_tf_port</a>  }  
  
**modport_tf_port**{: #modport_tf_port }
:	<a href="#method_prototype">method_prototype</a>   
        | <a href="#tf_identifier">tf_identifier</a> 
  
**import_export**{: #import_export }
:	<font color="purple"><b>import</b></font>   
        | <font color="purple"><b>export</b></font> 
  
### Assertion declarations
  
**concurrent_assertion_item**{: #concurrent_assertion_item }
:	 \[ <a href="#block_identifier">block_identifier</a> <font color="purple"><b>:</b></font>  ]  <a href="#concurrent_assertion_statement">concurrent_assertion_statement</a>   
        | <a href="#checker_instantiation">checker_instantiation</a> 
  
**concurrent_assertion_statement**{: #concurrent_assertion_statement }
:	<a href="#assert_property_statement">assert_property_statement</a>   
        | <a href="#assume_property_statement">assume_property_statement</a>   
        | <a href="#cover_property_statement">cover_property_statement</a>   
        | <a href="#cover_sequence_statement">cover_sequence_statement</a>   
        | <a href="#restrict_property_statement">restrict_property_statement</a> 
  
**assert_property_statement**{: #assert_property_statement }
:	<font color="purple"><b>assert</b></font> <font color="purple"><b>property</b></font> <font color="purple"><b>(</b></font> <a href="#property_spec">property_spec</a> <font color="purple"><b>)</b></font> <a href="#action_block">action_block</a> 
  
**assume_property_statement**{: #assume_property_statement }
:	<font color="purple"><b>assume</b></font> <font color="purple"><b>property</b></font> <font color="purple"><b>(</b></font> <a href="#property_spec">property_spec</a> <font color="purple"><b>)</b></font> <a href="#action_block">action_block</a> 
  
**cover_property_statement**{: #cover_property_statement }
:	<font color="purple"><b>cover</b></font> <font color="purple"><b>property</b></font> <font color="purple"><b>(</b></font> <a href="#property_spec">property_spec</a> <font color="purple"><b>)</b></font> <a href="#statement_or_null">statement_or_null</a> 
  
**expect_property_statement**{: #expect_property_statement }
:	<font color="purple"><b>expect</b></font> <font color="purple"><b>(</b></font> <a href="#property_spec">property_spec</a> <font color="purple"><b>)</b></font> <a href="#action_block">action_block</a> 
  
**cover_sequence_statement**{: #cover_sequence_statement }
:	<font color="purple"><b>cover</b></font> <font color="purple"><b>sequence</b></font> <font color="purple"><b>(</b></font>  \[ <a href="#clocking_event">clocking_event</a>  ]   \[ <font color="purple"><b>disable</b></font> <font color="purple"><b>iff</b></font> <font color="purple"><b>(</b></font> <a href="#expression_or_dist">expression_or_dist</a> <font color="purple"><b>)</b></font>  ]  <a href="#sequence_expr">sequence_expr</a> <font color="purple"><b>)</b></font> <a href="#statement_or_null">statement_or_null</a> 
  
**restrict_property_statement**{: #restrict_property_statement }
:	<font color="purple"><b>restrict</b></font> <font color="purple"><b>property</b></font> <font color="purple"><b>(</b></font> <a href="#property_spec">property_spec</a> <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font> 
  
**property_instance**{: #property_instance }
:	<a href="#ps_or_hierarchical_property_identifier">ps_or_hierarchical_property_identifier</a>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#property_list_of_arguments">property_list_of_arguments</a>  ]  <font color="purple"><b>)</b></font>  ]  
  
**property_list_of_arguments**{: #property_list_of_arguments }
:	 \[ <a href="#property_actual_arg">property_actual_arg</a>  ]   { <font color="purple"><b>,</b></font>  \[ <a href="#property_actual_arg">property_actual_arg</a>  ]   }   { <font color="purple"><b>,</b></font> <font color="purple"><b>.</b></font> <a href="#identifier">identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#property_actual_arg">property_actual_arg</a>  ]  <font color="purple"><b>)</b></font>  }    
        | <font color="purple"><b>.</b></font> <a href="#identifier">identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#property_actual_arg">property_actual_arg</a>  ]  <font color="purple"><b>)</b></font>  { <font color="purple"><b>,</b></font> <font color="purple"><b>.</b></font> <a href="#identifier">identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#property_actual_arg">property_actual_arg</a>  ]  <font color="purple"><b>)</b></font>  }  
  
**property_actual_arg**{: #property_actual_arg }
:	<a href="#property_expr">property_expr</a>   
        | <a href="#sequence_actual_arg">sequence_actual_arg</a> 
  
**assertion_item_declaration**{: #assertion_item_declaration }
:	<a href="#property_declaration">property_declaration</a>   
        | <a href="#sequence_declaration">sequence_declaration</a>   
        | <a href="#let_declaration">let_declaration</a> 
  
**property_declaration**{: #property_declaration }
:	<font color="purple"><b>property</b></font> <a href="#property_identifier">property_identifier</a>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#property_port_list">property_port_list</a>  ]  <font color="purple"><b>)</b></font>  ]  <font color="purple"><b>;</b></font>  { <a href="#assertion_variable_declaration">assertion_variable_declaration</a>  }  <a href="#property_spec">property_spec</a>  \[ <font color="purple"><b>;</b></font>  ]  <font color="purple"><b>endproperty</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#property_identifier">property_identifier</a>  ]  
  
**property_port_list**{: #property_port_list }
:	<a href="#property_port_item">property_port_item</a>  { <font color="purple"><b>,</b></font> <a href="#property_port_item">property_port_item</a>  }  
  
**property_port_item**{: #property_port_item }
:	 { <a href="#attribute_instance">attribute_instance</a>  }   \[ <font color="purple"><b>local</b></font>  \[ <a href="#property_lvar_port_direction">property_lvar_port_direction</a>  ]   ]  <a href="#property_formal_type">property_formal_type</a> <a href="#formal_port_identifier">formal_port_identifier</a>  { <a href="#variable_dimension">variable_dimension</a>  }   \[ <font color="purple"><b>=</b></font> <a href="#property_actual_arg">property_actual_arg</a>  ]  
  
**property_lvar_port_direction**{: #property_lvar_port_direction }
:	<font color="purple"><b>input</b></font> 
  
**property_formal_type**{: #property_formal_type }
:	<a href="#sequence_formal_type">sequence_formal_type</a>   
        | <font color="purple"><b>property</b></font> 
  
**property_spec**{: #property_spec }
:	 \[ <a href="#clocking_event">clocking_event</a>  ]   \[ <font color="purple"><b>disable</b></font> <font color="purple"><b>iff</b></font> <font color="purple"><b>(</b></font> <a href="#expression_or_dist">expression_or_dist</a> <font color="purple"><b>)</b></font>  ]  <a href="#property_expr">property_expr</a> 
  
**property_expr**{: #property_expr }
:	<a href="#sequence_expr">sequence_expr</a>   
        | <font color="purple"><b>strong</b></font> <font color="purple"><b>(</b></font> <a href="#sequence_expr">sequence_expr</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>weak</b></font> <font color="purple"><b>(</b></font> <a href="#sequence_expr">sequence_expr</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>(</b></font> <a href="#property_expr">property_expr</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>not</b></font> <a href="#property_expr">property_expr</a>   
        | <a href="#property_expr">property_expr</a> <font color="purple"><b>or</b></font> <a href="#property_expr">property_expr</a>   
        | <a href="#property_expr">property_expr</a> <font color="purple"><b>and</b></font> <a href="#property_expr">property_expr</a>   
        | <a href="#sequence_expr">sequence_expr</a> <font color="purple"><b>|-></b></font> <a href="#property_expr">property_expr</a>   
        | <a href="#sequence_expr">sequence_expr</a> <font color="purple"><b>|=></b></font> <a href="#property_expr">property_expr</a>   
        | <font color="purple"><b>if</b></font> <font color="purple"><b>(</b></font> <a href="#expression_or_dist">expression_or_dist</a> <font color="purple"><b>)</b></font> <a href="#property_expr">property_expr</a>  \[ <font color="purple"><b>else</b></font> <a href="#property_expr">property_expr</a>  ]    
        | <font color="purple"><b>case</b></font> <font color="purple"><b>(</b></font> <a href="#expression_or_dist">expression_or_dist</a> <font color="purple"><b>)</b></font> <a href="#property_case_item">property_case_item</a>  { <a href="#property_case_item">property_case_item</a>  }  <font color="purple"><b>endcase</b></font>   
        | <a href="#sequence_expr">sequence_expr</a> <font color="purple"><b>#-#</b></font> <a href="#property_expr">property_expr</a>   
        | <a href="#sequence_expr">sequence_expr</a> <font color="purple"><b>#=#</b></font> <a href="#property_expr">property_expr</a>   
        | <font color="purple"><b>nexttime</b></font> <a href="#property_expr">property_expr</a>   
        | <font color="purple"><b>nexttime</b></font>  \[ <font color="purple"><b>constant</b></font> <a href="#expression">expression</a>  ]  <a href="#property_expr">property_expr</a>   
        | <font color="purple"><b>s_nexttime</b></font> <a href="#property_expr">property_expr</a>   
        | <font color="purple"><b>s_nexttime</b></font>  \[ <a href="#constant_expression">constant_expression</a>  ]  <a href="#property_expr">property_expr</a>   
        | <font color="purple"><b>always</b></font> <a href="#property_expr">property_expr</a>   
        | <font color="purple"><b>always</b></font>  \[ <a href="#cycle_delay_const_range_expression">cycle_delay_const_range_expression</a>  ]  <a href="#property_expr">property_expr</a>   
        | <font color="purple"><b>s_always</b></font>  \[ <a href="#constant_range">constant_range</a>  ]  <a href="#property_expr">property_expr</a>   
        | <font color="purple"><b>s_eventually</b></font> <a href="#property_expr">property_expr</a>   
        | <font color="purple"><b>eventually</b></font>  \[ <a href="#constant_range">constant_range</a>  ]  <a href="#property_expr">property_expr</a>   
        | <font color="purple"><b>s_eventually</b></font>  \[ <a href="#cycle_delay_const_range_expression">cycle_delay_const_range_expression</a>  ]  <a href="#property_expr">property_expr</a>   
        | <a href="#property_expr">property_expr</a> <font color="purple"><b>until</b></font> <a href="#property_expr">property_expr</a>   
        | <a href="#property_expr">property_expr</a> <font color="purple"><b>s_until</b></font> <a href="#property_expr">property_expr</a>   
        | <a href="#property_expr">property_expr</a> <font color="purple"><b>until_with</b></font> <a href="#property_expr">property_expr</a>   
        | <a href="#property_expr">property_expr</a> <font color="purple"><b>s_until_with</b></font> <a href="#property_expr">property_expr</a>   
        | <a href="#property_expr">property_expr</a> <font color="purple"><b>implies</b></font> <a href="#property_expr">property_expr</a>   
        | <a href="#property_expr">property_expr</a> <font color="purple"><b>iff</b></font> <a href="#property_expr">property_expr</a>   
        | <font color="purple"><b>accept_on</b></font> <font color="purple"><b>(</b></font> <a href="#expression_or_dist">expression_or_dist</a> <font color="purple"><b>)</b></font> <a href="#property_expr">property_expr</a>   
        | <font color="purple"><b>reject_on</b></font> <font color="purple"><b>(</b></font> <a href="#expression_or_dist">expression_or_dist</a> <font color="purple"><b>)</b></font> <a href="#property_expr">property_expr</a>   
        | <font color="purple"><b>sync_accept_on</b></font> <font color="purple"><b>(</b></font> <a href="#expression_or_dist">expression_or_dist</a> <font color="purple"><b>)</b></font> <a href="#property_expr">property_expr</a>   
        | <font color="purple"><b>sync_reject_on</b></font> <font color="purple"><b>(</b></font> <a href="#expression_or_dist">expression_or_dist</a> <font color="purple"><b>)</b></font> <a href="#property_expr">property_expr</a>   
        | <a href="#property_instance">property_instance</a>   
        | <a href="#clocking_event">clocking_event</a> <a href="#property_expr">property_expr</a> 
  
**property_case_item**{: #property_case_item }
:	<a href="#expression_or_dist">expression_or_dist</a>  { <font color="purple"><b>,</b></font> <a href="#expression_or_dist">expression_or_dist</a>  }  <font color="purple"><b>:</b></font> <a href="#property_expr">property_expr</a>  \[ <font color="purple"><b>;</b></font>  ]    
        | <font color="purple"><b>default</b></font>  \[ <font color="purple"><b>:</b></font>  ]  <a href="#property_expr">property_expr</a>  \[ <font color="purple"><b>;</b></font>  ]  
  
**sequence_declaration**{: #sequence_declaration }
:	<font color="purple"><b>sequence</b></font> <a href="#sequence_identifier">sequence_identifier</a>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#sequence_port_list">sequence_port_list</a>  ]  <font color="purple"><b>)</b></font>  ]  <font color="purple"><b>;</b></font>  { <a href="#assertion_variable_declaration">assertion_variable_declaration</a>  }  <a href="#sequence_expr">sequence_expr</a>  \[ <font color="purple"><b>;</b></font>  ]  <font color="purple"><b>endsequence</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#sequence_identifier">sequence_identifier</a>  ]  
  
**sequence_port_list**{: #sequence_port_list }
:	<a href="#sequence_port_item">sequence_port_item</a>  { <font color="purple"><b>,</b></font> <a href="#sequence_port_item">sequence_port_item</a>  }  
  
**sequence_port_item**{: #sequence_port_item }
:	 { <a href="#attribute_instance">attribute_instance</a>  }   \[ <font color="purple"><b>local</b></font>  \[ <a href="#sequence_lvar_port_direction">sequence_lvar_port_direction</a>  ]   ]  <a href="#sequence_formal_type">sequence_formal_type</a> <a href="#formal_port_identifier">formal_port_identifier</a>  { <a href="#variable_dimension">variable_dimension</a>  }   \[ <font color="purple"><b>=</b></font> <a href="#sequence_actual_arg">sequence_actual_arg</a>  ]  
  
**sequence_lvar_port_direction**{: #sequence_lvar_port_direction }
:	<font color="purple"><b>input</b></font>   
        | <font color="purple"><b>inout</b></font>   
        | <font color="purple"><b>output</b></font> 
  
**sequence_formal_type**{: #sequence_formal_type }
:	<a href="#data_type_or_implicit">data_type_or_implicit</a>   
        | <font color="purple"><b>sequence</b></font>   
        | <font color="purple"><b>untyped</b></font> 
  
**sequence_expr**{: #sequence_expr }
:	<a href="#cycle_delay_range">cycle_delay_range</a> <a href="#sequence_expr">sequence_expr</a>  { <a href="#cycle_delay_range">cycle_delay_range</a> <a href="#sequence_expr">sequence_expr</a>  }    
        | <a href="#sequence_expr">sequence_expr</a> <a href="#cycle_delay_range">cycle_delay_range</a> <a href="#sequence_expr">sequence_expr</a>  { <a href="#cycle_delay_range">cycle_delay_range</a> <a href="#sequence_expr">sequence_expr</a>  }    
        | <a href="#expression_or_dist">expression_or_dist</a>  \[ <a href="#boolean_abbrev">boolean_abbrev</a>  ]    
        | <a href="#sequence_instance">sequence_instance</a>  \[ <a href="#sequence_abbrev">sequence_abbrev</a>  ]    
        | <font color="purple"><b>(</b></font> <a href="#sequence_expr">sequence_expr</a>  { <font color="purple"><b>,</b></font> <a href="#sequence_match_item">sequence_match_item</a>  }  <font color="purple"><b>)</b></font>  \[ <a href="#sequence_abbrev">sequence_abbrev</a>  ]    
        | <a href="#sequence_expr">sequence_expr</a> <font color="purple"><b>and</b></font> <a href="#sequence_expr">sequence_expr</a>   
        | <a href="#sequence_expr">sequence_expr</a> <font color="purple"><b>intersect</b></font> <a href="#sequence_expr">sequence_expr</a>   
        | <a href="#sequence_expr">sequence_expr</a> <font color="purple"><b>or</b></font> <a href="#sequence_expr">sequence_expr</a>   
        | <font color="purple"><b>first_match</b></font> <font color="purple"><b>(</b></font> <a href="#sequence_expr">sequence_expr</a>  { <font color="purple"><b>,</b></font> <a href="#sequence_match_item">sequence_match_item</a>  }  <font color="purple"><b>)</b></font>   
        | <a href="#expression_or_dist">expression_or_dist</a> <font color="purple"><b>throughout</b></font> <a href="#sequence_expr">sequence_expr</a>   
        | <a href="#sequence_expr">sequence_expr</a> <font color="purple"><b>within</b></font> <a href="#sequence_expr">sequence_expr</a>   
        | <a href="#clocking_event">clocking_event</a> <a href="#sequence_expr">sequence_expr</a> 
  
**cycle_delay_range**{: #cycle_delay_range }
:	<font color="purple"><b>##</b></font> <a href="#constant_primary">constant_primary</a>   
        | <font color="purple"><b>##</b></font> <font color="purple"><b>\[</b></font> <a href="#cycle_delay_const_range_expression">cycle_delay_const_range_expression</a> <font color="purple"><b>]</b></font>   
        | <font color="purple"><b>##\[\*]</b></font>   
        | <font color="purple"><b>##\[+]</b></font> 
  
**sequence_method_call**{: #sequence_method_call }
:	<a href="#sequence_instance">sequence_instance</a> <font color="purple"><b>.</b></font> <a href="#method_identifier">method_identifier</a> 
  
**sequence_match_item**{: #sequence_match_item }
:	<a href="#operator_assignment">operator_assignment</a>   
        | <a href="#inc_or_dec_expression">inc_or_dec_expression</a>   
        | <a href="#subroutine_call">subroutine_call</a> 
  
**sequence_instance**{: #sequence_instance }
:	<a href="#ps_or_hierarchical_sequence_identifier">ps_or_hierarchical_sequence_identifier</a>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#sequence_list_of_arguments">sequence_list_of_arguments</a>  ]  <font color="purple"><b>)</b></font>  ]  
  
**sequence_list_of_arguments**{: #sequence_list_of_arguments }
:	 \[ <a href="#sequence_actual_arg">sequence_actual_arg</a>  ]   { <font color="purple"><b>,</b></font>  \[ <a href="#sequence_actual_arg">sequence_actual_arg</a>  ]   }   { <font color="purple"><b>,</b></font> <font color="purple"><b>.</b></font> <a href="#identifier">identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#sequence_actual_arg">sequence_actual_arg</a>  ]  <font color="purple"><b>)</b></font>  }    
        | <font color="purple"><b>.</b></font> <a href="#identifier">identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#sequence_actual_arg">sequence_actual_arg</a>  ]  <font color="purple"><b>)</b></font>  { <font color="purple"><b>,</b></font> <font color="purple"><b>.</b></font> <a href="#identifier">identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#sequence_actual_arg">sequence_actual_arg</a>  ]  <font color="purple"><b>)</b></font>  }  
  
**sequence_actual_arg**{: #sequence_actual_arg }
:	<a href="#event_expression">event_expression</a>   
        | <a href="#sequence_expr">sequence_expr</a> 
  
**boolean_abbrev**{: #boolean_abbrev }
:	<a href="#consecutive_repetition">consecutive_repetition</a>   
        | <a href="#non_consecutive_repetition">non_consecutive_repetition</a>   
        | <a href="#goto_repetition">goto_repetition</a> 
  
**sequence_abbrev**{: #sequence_abbrev }
:	<a href="#consecutive_repetition">consecutive_repetition</a> 
  
**consecutive_repetition**{: #consecutive_repetition }
:	<font color="purple"><b>\[\*</b></font> <a href="#const_or_range_expression">const_or_range_expression</a> <font color="purple"><b>]</b></font>   
        | <font color="purple"><b>\[\*]</b></font>   
        | <font color="purple"><b>\[+]</b></font> 
  
**non_consecutive_repetition**{: #non_consecutive_repetition }
:	<font color="purple"><b>\[=</b></font> <a href="#const_or_range_expression">const_or_range_expression</a> <font color="purple"><b>]</b></font> 
  
**goto_repetition**{: #goto_repetition }
:	<font color="purple"><b>\[-></b></font> <a href="#const_or_range_expression">const_or_range_expression</a> <font color="purple"><b>]</b></font> 
  
**const_or_range_expression**{: #const_or_range_expression }
:	<a href="#constant_expression">constant_expression</a>   
        | <a href="#cycle_delay_const_range_expression">cycle_delay_const_range_expression</a> 
  
**cycle_delay_const_range_expression**{: #cycle_delay_const_range_expression }
:	<a href="#constant_expression">constant_expression</a> <font color="purple"><b>:</b></font> <a href="#constant_expression">constant_expression</a>   
        | <a href="#constant_expression">constant_expression</a> <font color="purple"><b>:</b></font> <font color="purple"><b>$</b></font> 
  
**expression_or_dist**{: #expression_or_dist }
:	<a href="#expression">expression</a>  \[ <font color="purple"><b>dist</b></font>  { <a href="#dist_list">dist_list</a>  }   ]  
  
**assertion_variable_declaration**{: #assertion_variable_declaration }
:	<a href="#var_data_type">var_data_type</a> <a href="#list_of_variable_decl_assignments">list_of_variable_decl_assignments</a> <font color="purple"><b>;</b></font> 
  
**let_declaration**{: #let_declaration }
:	<font color="purple"><b>let</b></font> <a href="#let_identifier">let_identifier</a>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#let_port_list">let_port_list</a>  ]  <font color="purple"><b>)</b></font>  ]  <font color="purple"><b>=</b></font> <a href="#expression">expression</a> <font color="purple"><b>;</b></font> 
  
**let_identifier**{: #let_identifier }
:	<a href="#identifier">identifier</a> 
  
**let_port_list**{: #let_port_list }
:	<a href="#let_port_item">let_port_item</a>  { <font color="purple"><b>,</b></font> <a href="#let_port_item">let_port_item</a>  }  
  
**let_port_item**{: #let_port_item }
:	 { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#let_formal_type">let_formal_type</a> <a href="#formal_port_identifier">formal_port_identifier</a>  { <a href="#variable_dimension">variable_dimension</a>  }   \[ <font color="purple"><b>=</b></font> <a href="#expression">expression</a>  ]  
  
**let_formal_type**{: #let_formal_type }
:	<a href="#data_type_or_implicit">data_type_or_implicit</a>   
        | <font color="purple"><b>untyped</b></font> 
  
**let_expression**{: #let_expression }
:	 \[ <a href="#package_scope">package_scope</a>  ]  <a href="#let_identifier">let_identifier</a>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#let_list_of_arguments">let_list_of_arguments</a>  ]  <font color="purple"><b>)</b></font>  ]  
  
**let_list_of_arguments**{: #let_list_of_arguments }
:	 \[ <a href="#let_actual_arg">let_actual_arg</a>  ]   { <font color="purple"><b>,</b></font>  \[ <a href="#let_actual_arg">let_actual_arg</a>  ]   }   { <font color="purple"><b>,</b></font> <font color="purple"><b>.</b></font> <a href="#identifier">identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#let_actual_arg">let_actual_arg</a>  ]  <font color="purple"><b>)</b></font>  }    
        | <font color="purple"><b>.</b></font> <a href="#identifier">identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#let_actual_arg">let_actual_arg</a>  ]  <font color="purple"><b>)</b></font>  { <font color="purple"><b>,</b></font> <font color="purple"><b>.</b></font> <a href="#identifier">identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#let_actual_arg">let_actual_arg</a>  ]  <font color="purple"><b>)</b></font>  }  
  
**let_actual_arg**{: #let_actual_arg }
:	<a href="#expression">expression</a> 
  
### Covergroup declarations
  
**covergroup_declaration**{: #covergroup_declaration }
:	<font color="purple"><b>covergroup</b></font> <a href="#covergroup_identifier">covergroup_identifier</a>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#tf_port_list">tf_port_list</a>  ]  <font color="purple"><b>)</b></font>  ]   \[ <a href="#coverage_event">coverage_event</a>  ]  <font color="purple"><b>;</b></font>  { <a href="#coverage_spec_or_option">coverage_spec_or_option</a>  }  <font color="purple"><b>endgroup</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#covergroup_identifier">covergroup_identifier</a>  ]  
  
**coverage_spec_or_option**{: #coverage_spec_or_option }
:	 { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#coverage_spec">coverage_spec</a>   
        |  { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#coverage_option">coverage_option</a> <font color="purple"><b>;</b></font> 
  
**coverage_option**{: #coverage_option }
:	<font color="purple"><b>option</b></font> <font color="purple"><b>.</b></font> <a href="#member_identifier">member_identifier</a> <font color="purple"><b>=</b></font> <a href="#expression">expression</a>   
        | <font color="purple"><b>type_option</b></font> <font color="purple"><b>.</b></font> <a href="#member_identifier">member_identifier</a> <font color="purple"><b>=</b></font> <a href="#constant_expression">constant_expression</a> 
  
**coverage_spec**{: #coverage_spec }
:	<a href="#cover_point">cover_point</a>   
        | <a href="#cover_cross">cover_cross</a> 
  
**coverage_event**{: #coverage_event }
:	<a href="#clocking_event">clocking_event</a>   
        | <font color="purple"><b>with</b></font> <font color="purple"><b>function</b></font> <font color="purple"><b>sample</b></font> <font color="purple"><b>(</b></font>  \[ <a href="#tf_port_list">tf_port_list</a>  ]  <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>@@</b></font> <font color="purple"><b>(</b></font> <a href="#block_event_expression">block_event_expression</a> <font color="purple"><b>)</b></font> 
  
**block_event_expression**{: #block_event_expression }
:	<a href="#block_event_expression">block_event_expression</a> <font color="purple"><b>or</b></font> <a href="#block_event_expression">block_event_expression</a>   
        | <font color="purple"><b>begin</b></font> <a href="#hierarchical_btf_identifier">hierarchical_btf_identifier</a>   
        | <font color="purple"><b>end</b></font> <a href="#hierarchical_btf_identifier">hierarchical_btf_identifier</a> 
  
**hierarchical_btf_identifier**{: #hierarchical_btf_identifier }
:	<a href="#hierarchical_tf_identifier">hierarchical_tf_identifier</a>   
        | <a href="#hierarchical_block_identifier">hierarchical_block_identifier</a>   
        |  \[ <a href="#hierarchical_identifier">hierarchical_identifier</a> <font color="purple"><b>.</b></font>   
         | <a href="#class_scope">class_scope</a>  ]  <a href="#method_identifier">method_identifier</a> 
  
**cover_point**{: #cover_point }
:	 \[  \[ <a href="#data_type_or_implicit">data_type_or_implicit</a>  ]  <a href="#cover_point_identifier">cover_point_identifier</a> <font color="purple"><b>:</b></font>  ]  <font color="purple"><b>coverpoint</b></font> <a href="#expression">expression</a>  \[ <font color="purple"><b>iff</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font>  ]  <a href="#bins_or_empty">bins_or_empty</a> 
  
**bins_or_empty**{: #bins_or_empty }
:	 {  { <a href="#attribute_instance">attribute_instance</a>  }   { <a href="#bins_or_options">bins_or_options</a> <font color="purple"><b>;</b></font>  }   }    
        | <font color="purple"><b>;</b></font> 
  
**bins_or_options**{: #bins_or_options }
:	<a href="#coverage_option">coverage_option</a>   
        |  \[ <font color="purple"><b>wildcard</b></font>  ]  <a href="#bins_keyword">bins_keyword</a> <a href="#bin_identifier">bin_identifier</a>  \[ <font color="purple"><b>\[</b></font>  \[ <a href="#covergroup_expression">covergroup_expression</a>  ]  <font color="purple"><b>]</b></font>  ]  <font color="purple"><b>=</b></font> <font color="purple"><b>{</b></font> <a href="#covergroup_range_list">covergroup_range_list</a> <font color="purple"><b>}</b></font>  \[ <font color="purple"><b>with</b></font> <font color="purple"><b>(</b></font> <a href="#with_covergroup_expression">with_covergroup_expression</a> <font color="purple"><b>)</b></font>  ]   \[ <font color="purple"><b>iff</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font>  ]    
        |  \[ <font color="purple"><b>wildcard</b></font>  ]  <a href="#bins_keyword">bins_keyword</a> <a href="#bin_identifier">bin_identifier</a>  \[ <font color="purple"><b>\[</b></font>  \[ <a href="#covergroup_expression">covergroup_expression</a>  ]  <font color="purple"><b>]</b></font>  ]  <font color="purple"><b>=</b></font> <a href="#cover_point_identifier">cover_point_identifier</a>  \[ <font color="purple"><b>with</b></font> <font color="purple"><b>(</b></font> <a href="#with_covergroup_expression">with_covergroup_expression</a> <font color="purple"><b>)</b></font>  ]   \[ <font color="purple"><b>iff</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font>  ]    
        |  \[ <font color="purple"><b>wildcard</b></font>  ]  <a href="#bins_keyword">bins_keyword</a> <a href="#bin_identifier">bin_identifier</a>  \[ <font color="purple"><b>\[</b></font>  \[ <a href="#covergroup_expression">covergroup_expression</a>  ]  <font color="purple"><b>]</b></font>  ]  <font color="purple"><b>=</b></font> <a href="#set_covergroup_expression">set_covergroup_expression</a>  \[ <font color="purple"><b>iff</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font>  ]    
        |  \[ <font color="purple"><b>wildcard</b></font>  ]  <a href="#bins_keyword">bins_keyword</a> <a href="#bin_identifier">bin_identifier</a>  \[ <font color="purple"><b>\[</b></font> <font color="purple"><b>]</b></font>  ]  <font color="purple"><b>=</b></font> <a href="#trans_list">trans_list</a>  \[ <font color="purple"><b>iff</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font>  ]    
        | <a href="#bins_keyword">bins_keyword</a> <a href="#bin_identifier">bin_identifier</a>  \[  \[  \[ <a href="#covergroup_expression">covergroup_expression</a>  ]   ]   ]  <font color="purple"><b>=</b></font> <font color="purple"><b>default</b></font>  \[ <font color="purple"><b>iff</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font>  ]    
        | <a href="#bins_keyword">bins_keyword</a> <a href="#bin_identifier">bin_identifier</a> <font color="purple"><b>=</b></font> <font color="purple"><b>default</b></font> <font color="purple"><b>sequence</b></font>  \[ <font color="purple"><b>iff</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font>  ]  
  
**bins_keyword**{: #bins_keyword }
:	<font color="purple"><b>bins</b></font>   
        | <font color="purple"><b>illegal_bins</b></font>   
        | <font color="purple"><b>ignore_bins</b></font> 
  
**trans_list**{: #trans_list }
:	<font color="purple"><b>(</b></font> <a href="#trans_set">trans_set</a> <font color="purple"><b>)</b></font>  { <font color="purple"><b>,</b></font> <font color="purple"><b>(</b></font> <a href="#trans_set">trans_set</a> <font color="purple"><b>)</b></font>  }  
  
**trans_set**{: #trans_set }
:	<a href="#trans_range_list">trans_range_list</a>  { <font color="purple"><b>=></b></font> <a href="#trans_range_list">trans_range_list</a>  }  
  
**trans_range_list**{: #trans_range_list }
:	<a href="#trans_item">trans_item</a>   
        | <a href="#trans_item">trans_item</a> <font color="purple"><b>\[\*</b></font> <a href="#repeat_range">repeat_range</a> <font color="purple"><b>]</b></font>   
        | <a href="#trans_item">trans_item</a> <font color="purple"><b>\[-></b></font> <a href="#repeat_range">repeat_range</a> <font color="purple"><b>]</b></font>   
        | <a href="#trans_item">trans_item</a> <font color="purple"><b>\[=</b></font> <a href="#repeat_range">repeat_range</a> <font color="purple"><b>]</b></font> 
  
**trans_item**{: #trans_item }
:	<a href="#covergroup_range_list">covergroup_range_list</a> 
  
**repeat_range**{: #repeat_range }
:	<a href="#covergroup_expression">covergroup_expression</a>   
        | <a href="#covergroup_expression">covergroup_expression</a> <font color="purple"><b>:</b></font> <a href="#covergroup_expression">covergroup_expression</a> 
  
**cover_cross**{: #cover_cross }
:	 \[ <a href="#cross_identifier">cross_identifier</a> <font color="purple"><b>:</b></font>  ]  <font color="purple"><b>cross</b></font> <a href="#list_of_cross_items">list_of_cross_items</a>  \[ <font color="purple"><b>iff</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font>  ]  <a href="#cross_body">cross_body</a> 
  
**list_of_cross_items**{: #list_of_cross_items }
:	<a href="#cross_item">cross_item</a> <font color="purple"><b>,</b></font> <a href="#cross_item">cross_item</a>  { <font color="purple"><b>,</b></font> <a href="#cross_item">cross_item</a>  }  
  
**cross_item**{: #cross_item }
:	<a href="#cover_point_identifier">cover_point_identifier</a>   
        | <a href="#variable_identifier">variable_identifier</a> 
  
**cross_body**{: #cross_body }
:	<font color="purple"><b>{</b></font>  { <a href="#cross_body_item">cross_body_item</a> <font color="purple"><b>;</b></font>  }  <font color="purple"><b>}</b></font>   
        | <font color="purple"><b>;</b></font> 
  
**cross_body_item**{: #cross_body_item }
:	<a href="#function_declaration">function_declaration</a>   
        | <a href="#bins_selection_or_option">bins_selection_or_option</a> <font color="purple"><b>;</b></font> 
  
**bins_selection_or_option**{: #bins_selection_or_option }
:	 { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#coverage_option">coverage_option</a>   
        |  { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#bins_selection">bins_selection</a> 
  
**bins_selection**{: #bins_selection }
:	<a href="#bins_keyword">bins_keyword</a> <a href="#bin_identifier">bin_identifier</a> <font color="purple"><b>=</b></font> <a href="#select_expression">select_expression</a>  \[ <font color="purple"><b>iff</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font>  ]  
  
**select_expression**{: #select_expression }[^footnote_24]
:	<a href="#select_condition">select_condition</a>   
        | <font color="purple"><b>!</b></font> <a href="#select_condition">select_condition</a>   
        | <a href="#select_expression">select_expression</a> <font color="purple"><b>&&</b></font> <a href="#select_expression">select_expression</a>   
        | <a href="#select_expression">select_expression</a> <font color="purple"><b>||</b></font> <a href="#select_expression">select_expression</a>   
        | <font color="purple"><b>(</b></font> <a href="#select_expression">select_expression</a> <font color="purple"><b>)</b></font>   
        | <a href="#select_expression">select_expression</a> <font color="purple"><b>with</b></font> <font color="purple"><b>(</b></font> <a href="#with_covergroup_expression">with_covergroup_expression</a> <font color="purple"><b>)</b></font>  \[ <font color="purple"><b>matches</b></font> <a href="#integer_covergroup_expression">integer_covergroup_expression</a>  ]    
        | <a href="#cross_identifier">cross_identifier</a>   
        | <a href="#cross_set_expression">cross_set_expression</a>  \[ <font color="purple"><b>matches</b></font> <a href="#integer_covergroup_expression">integer_covergroup_expression</a>  ]  
  
**select_condition**{: #select_condition }
:	<font color="purple"><b>binsof</b></font> <font color="purple"><b>(</b></font> <a href="#bins_expression">bins_expression</a> <font color="purple"><b>)</b></font>  \[ <font color="purple"><b>intersect</b></font> <font color="purple"><b>{</b></font> <a href="#covergroup_range_list">covergroup_range_list</a> <font color="purple"><b>}</b></font>  ]  
  
**bins_expression**{: #bins_expression }
:	<a href="#variable_identifier">variable_identifier</a>   
        | <a href="#cover_point_identifier">cover_point_identifier</a>  \[ <font color="purple"><b>.</b></font> <a href="#bin_identifier">bin_identifier</a>  ]  
  
**covergroup_range_list**{: #covergroup_range_list }
:	<a href="#covergroup_value_range">covergroup_value_range</a>  { <font color="purple"><b>,</b></font> <a href="#covergroup_value_range">covergroup_value_range</a>  }  
  
**covergroup_value_range**{: #covergroup_value_range }
:	<a href="#covergroup_expression">covergroup_expression</a>   
        | <font color="purple"><b>\[</b></font> <a href="#covergroup_expression">covergroup_expression</a> <font color="purple"><b>:</b></font> <a href="#covergroup_expression">covergroup_expression</a> <font color="purple"><b>]</b></font> [^footnote_25] 
  
**with_covergroup_expression**{: #with_covergroup_expression }
:	<a href="#covergroup_expression">covergroup_expression</a> [^footnote_26] 
  
**set_covergroup_expression**{: #set_covergroup_expression }
:	<a href="#covergroup_expression">covergroup_expression</a> [^footnote_27] 
  
**integer_covergroup_expression**{: #integer_covergroup_expression }
:	<a href="#covergroup_expression">covergroup_expression</a> 
  
**cross_set_expression**{: #cross_set_expression }
:	<a href="#covergroup_expression">covergroup_expression</a> 
  
**covergroup_expression**{: #covergroup_expression }
:	<a href="#expression">expression</a> [^footnote_28] 
  
## Primitive instances
  
### Primitive instantiation and instances
  
**gate_instantiation**{: #gate_instantiation }
:	<a href="#cmos_switchtype">cmos_switchtype</a>  \[ <a href="#delay3">delay3</a>  ]  <a href="#cmos_switch_instance">cmos_switch_instance</a>  { <font color="purple"><b>,</b></font> <a href="#cmos_switch_instance">cmos_switch_instance</a>  }  <font color="purple"><b>;</b></font>   
        | <a href="#enable_gatetype">enable_gatetype</a>  \[ <a href="#drive_strength">drive_strength</a>  ]   \[ <a href="#delay3">delay3</a>  ]  <a href="#enable_gate_instance">enable_gate_instance</a>  { <font color="purple"><b>,</b></font> <a href="#enable_gate_instance">enable_gate_instance</a>  }  <font color="purple"><b>;</b></font>   
        | <a href="#mos_switchtype">mos_switchtype</a>  \[ <a href="#delay3">delay3</a>  ]  <a href="#mos_switch_instance">mos_switch_instance</a>  { <font color="purple"><b>,</b></font> <a href="#mos_switch_instance">mos_switch_instance</a>  }  <font color="purple"><b>;</b></font>   
        | <a href="#n_input_gatetype">n_input_gatetype</a>  \[ <a href="#drive_strength">drive_strength</a>  ]   \[ <a href="#delay2">delay2</a>  ]  <a href="#n_input_gate_instance">n_input_gate_instance</a>  { <font color="purple"><b>,</b></font> <a href="#n_input_gate_instance">n_input_gate_instance</a>  }  <font color="purple"><b>;</b></font>   
        | <a href="#n_output_gatetype">n_output_gatetype</a>  \[ <a href="#drive_strength">drive_strength</a>  ]   \[ <a href="#delay2">delay2</a>  ]  <a href="#n_output_gate_instance">n_output_gate_instance</a>  { <font color="purple"><b>,</b></font> <a href="#n_output_gate_instance">n_output_gate_instance</a>  }  <font color="purple"><b>;</b></font>   
        | <a href="#pass_en_switchtype">pass_en_switchtype</a>  \[ <a href="#delay2">delay2</a>  ]  <a href="#pass_enable_switch_instance">pass_enable_switch_instance</a>  { <font color="purple"><b>,</b></font> <a href="#pass_enable_switch_instance">pass_enable_switch_instance</a>  }  <font color="purple"><b>;</b></font>   
        | <a href="#pass_switchtype">pass_switchtype</a> <a href="#pass_switch_instance">pass_switch_instance</a>  { <font color="purple"><b>,</b></font> <a href="#pass_switch_instance">pass_switch_instance</a>  }  <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>pulldown</b></font>  \[ <a href="#pulldown_strength">pulldown_strength</a>  ]  <a href="#pull_gate_instance">pull_gate_instance</a>  { <font color="purple"><b>,</b></font> <a href="#pull_gate_instance">pull_gate_instance</a>  }  <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>pullup</b></font>  \[ <a href="#pullup_strength">pullup_strength</a>  ]  <a href="#pull_gate_instance">pull_gate_instance</a>  { <font color="purple"><b>,</b></font> <a href="#pull_gate_instance">pull_gate_instance</a>  }  <font color="purple"><b>;</b></font> 
  
**cmos_switch_instance**{: #cmos_switch_instance }
:	 \[ <a href="#name_of_instance">name_of_instance</a>  ]  <font color="purple"><b>(</b></font> <a href="#output_terminal">output_terminal</a> <font color="purple"><b>,</b></font> <a href="#input_terminal">input_terminal</a> <font color="purple"><b>,</b></font> <a href="#ncontrol_terminal">ncontrol_terminal</a> <font color="purple"><b>,</b></font> <a href="#pcontrol_terminal">pcontrol_terminal</a> <font color="purple"><b>)</b></font> 
  
**enable_gate_instance**{: #enable_gate_instance }
:	 \[ <a href="#name_of_instance">name_of_instance</a>  ]  <font color="purple"><b>(</b></font> <a href="#output_terminal">output_terminal</a> <font color="purple"><b>,</b></font> <a href="#input_terminal">input_terminal</a> <font color="purple"><b>,</b></font> <a href="#enable_terminal">enable_terminal</a> <font color="purple"><b>)</b></font> 
  
**mos_switch_instance**{: #mos_switch_instance }
:	 \[ <a href="#name_of_instance">name_of_instance</a>  ]  <font color="purple"><b>(</b></font> <a href="#output_terminal">output_terminal</a> <font color="purple"><b>,</b></font> <a href="#input_terminal">input_terminal</a> <font color="purple"><b>,</b></font> <a href="#enable_terminal">enable_terminal</a> <font color="purple"><b>)</b></font> 
  
**n_input_gate_instance**{: #n_input_gate_instance }
:	 \[ <a href="#name_of_instance">name_of_instance</a>  ]  <font color="purple"><b>(</b></font> <a href="#output_terminal">output_terminal</a> <font color="purple"><b>,</b></font> <a href="#input_terminal">input_terminal</a>  { <font color="purple"><b>,</b></font> <a href="#input_terminal">input_terminal</a>  }  <font color="purple"><b>)</b></font> 
  
**n_output_gate_instance**{: #n_output_gate_instance }
:	 \[ <a href="#name_of_instance">name_of_instance</a>  ]  <font color="purple"><b>(</b></font> <a href="#output_terminal">output_terminal</a>  { <font color="purple"><b>,</b></font> <a href="#output_terminal">output_terminal</a>  }  <font color="purple"><b>,</b></font> <a href="#input_terminal">input_terminal</a> <font color="purple"><b>)</b></font> 
  
**pass_switch_instance**{: #pass_switch_instance }
:	 \[ <a href="#name_of_instance">name_of_instance</a>  ]  <font color="purple"><b>(</b></font> <a href="#inout_terminal">inout_terminal</a> <font color="purple"><b>,</b></font> <a href="#inout_terminal">inout_terminal</a> <font color="purple"><b>)</b></font> 
  
**pass_enable_switch_instance**{: #pass_enable_switch_instance }
:	 \[ <a href="#name_of_instance">name_of_instance</a>  ]  <font color="purple"><b>(</b></font> <a href="#inout_terminal">inout_terminal</a> <font color="purple"><b>,</b></font> <a href="#inout_terminal">inout_terminal</a> <font color="purple"><b>,</b></font> <a href="#enable_terminal">enable_terminal</a> <font color="purple"><b>)</b></font> 
  
**pull_gate_instance**{: #pull_gate_instance }
:	 \[ <a href="#name_of_instance">name_of_instance</a>  ]  <font color="purple"><b>(</b></font> <a href="#output_terminal">output_terminal</a> <font color="purple"><b>)</b></font> 
  
### Primitive strengths
  
**pulldown_strength**{: #pulldown_strength }
:	<font color="purple"><b>(</b></font> <a href="#strength0">strength0</a> <font color="purple"><b>,</b></font> <a href="#strength1">strength1</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>(</b></font> <a href="#strength1">strength1</a> <font color="purple"><b>,</b></font> <a href="#strength0">strength0</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>(</b></font> <a href="#strength0">strength0</a> <font color="purple"><b>)</b></font> 
  
**pullup_strength**{: #pullup_strength }
:	<font color="purple"><b>(</b></font> <a href="#strength0">strength0</a> <font color="purple"><b>,</b></font> <a href="#strength1">strength1</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>(</b></font> <a href="#strength1">strength1</a> <font color="purple"><b>,</b></font> <a href="#strength0">strength0</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>(</b></font> <a href="#strength1">strength1</a> <font color="purple"><b>)</b></font> 
  
### Primitive terminals
  
**enable_terminal**{: #enable_terminal }
:	<a href="#expression">expression</a> 
  
**inout_terminal**{: #inout_terminal }
:	<a href="#net_lvalue">net_lvalue</a> 
  
**input_terminal**{: #input_terminal }
:	<a href="#expression">expression</a> 
  
**ncontrol_terminal**{: #ncontrol_terminal }
:	<a href="#expression">expression</a> 
  
**output_terminal**{: #output_terminal }
:	<a href="#net_lvalue">net_lvalue</a> 
  
**pcontrol_terminal**{: #pcontrol_terminal }
:	<a href="#expression">expression</a> 
  
### Primitive gate and switch types
  
**cmos_switchtype**{: #cmos_switchtype }
:	<font color="purple"><b>cmos</b></font>   
        | <font color="purple"><b>rcmos</b></font> 
  
**enable_gatetype**{: #enable_gatetype }
:	<font color="purple"><b>bufif0</b></font>   
        | <font color="purple"><b>bufif1</b></font>   
        | <font color="purple"><b>notif0</b></font>   
        | <font color="purple"><b>notif1</b></font> 
  
**mos_switchtype**{: #mos_switchtype }
:	<font color="purple"><b>nmos</b></font>   
        | <font color="purple"><b>pmos</b></font>   
        | <font color="purple"><b>rnmos</b></font>   
        | <font color="purple"><b>rpmos</b></font> 
  
**n_input_gatetype**{: #n_input_gatetype }
:	<font color="purple"><b>and</b></font>   
        | <font color="purple"><b>nand</b></font>   
        | <font color="purple"><b>or</b></font>   
        | <font color="purple"><b>nor</b></font>   
        | <font color="purple"><b>xor</b></font>   
        | <font color="purple"><b>xnor</b></font> 
  
**n_output_gatetype**{: #n_output_gatetype }
:	<font color="purple"><b>buf</b></font>   
        | <font color="purple"><b>not</b></font> 
  
**pass_en_switchtype**{: #pass_en_switchtype }
:	<font color="purple"><b>tranif0</b></font>   
        | <font color="purple"><b>tranif1</b></font>   
        | <font color="purple"><b>rtranif1</b></font>   
        | <font color="purple"><b>rtranif0</b></font> 
  
**pass_switchtype**{: #pass_switchtype }
:	<font color="purple"><b>tran</b></font>   
        | <font color="purple"><b>rtran</b></font> 
  
## Instantiations
  
### Instantation
  
#### Module instantation
  
**module_instantiation**{: #module_instantiation }
:	<a href="#module_identifier">module_identifier</a>  \[ <a href="#parameter_value_assignment">parameter_value_assignment</a>  ]  <a href="#hierarchical_instance">hierarchical_instance</a>  { <font color="purple"><b>,</b></font> <a href="#hierarchical_instance">hierarchical_instance</a>  }  <font color="purple"><b>;</b></font> 
  
**parameter_value_assignment**{: #parameter_value_assignment }
:	<font color="purple"><b>#</b></font> <font color="purple"><b>(</b></font>  \[ <a href="#list_of_parameter_assignments">list_of_parameter_assignments</a>  ]  <font color="purple"><b>)</b></font> 
  
**list_of_parameter_assignments**{: #list_of_parameter_assignments }
:	<a href="#ordered_parameter_assignment">ordered_parameter_assignment</a>  { <font color="purple"><b>,</b></font> <a href="#ordered_parameter_assignment">ordered_parameter_assignment</a>  }    
        | <a href="#named_parameter_assignment">named_parameter_assignment</a>  { <font color="purple"><b>,</b></font> <a href="#named_parameter_assignment">named_parameter_assignment</a>  }  
  
**ordered_parameter_assignment**{: #ordered_parameter_assignment }
:	<a href="#param_expression">param_expression</a> 
  
**named_parameter_assignment**{: #named_parameter_assignment }
:	<font color="purple"><b>.</b></font> <a href="#parameter_identifier">parameter_identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#param_expression">param_expression</a>  ]  <font color="purple"><b>)</b></font> 
  
**hierarchical_instance**{: #hierarchical_instance }
:	<a href="#name_of_instance">name_of_instance</a> <font color="purple"><b>(</b></font>  \[ <a href="#list_of_port_connections">list_of_port_connections</a>  ]  <font color="purple"><b>)</b></font> 
  
**name_of_instance**{: #name_of_instance }
:	<a href="#instance_identifier">instance_identifier</a>  { <a href="#unpacked_dimension">unpacked_dimension</a>  }  
  
**list_of_port_connections**{: #list_of_port_connections }[^footnote_29]
:	<a href="#ordered_port_connection">ordered_port_connection</a>  { <font color="purple"><b>,</b></font> <a href="#ordered_port_connection">ordered_port_connection</a>  }    
        | <a href="#named_port_connection">named_port_connection</a>  { <font color="purple"><b>,</b></font> <a href="#named_port_connection">named_port_connection</a>  }  
  
**ordered_port_connection**{: #ordered_port_connection }
:	 { <a href="#attribute_instance">attribute_instance</a>  }   \[ <a href="#expression">expression</a>  ]  
  
**named_port_connection**{: #named_port_connection }
:	 { <a href="#attribute_instance">attribute_instance</a>  }  <font color="purple"><b>.</b></font> <a href="#port_identifier">port_identifier</a>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#expression">expression</a>  ]  <font color="purple"><b>)</b></font>  ]    
        |  { <a href="#attribute_instance">attribute_instance</a>  }  <font color="purple"><b>.\*</b></font> 
  
#### Interface instantiation
  
**interface_instantiation**{: #interface_instantiation }
:	<a href="#interface_identifier">interface_identifier</a>  \[ <a href="#parameter_value_assignment">parameter_value_assignment</a>  ]  <a href="#hierarchical_instance">hierarchical_instance</a>  { <font color="purple"><b>,</b></font> <a href="#hierarchical_instance">hierarchical_instance</a>  }  <font color="purple"><b>;</b></font> 
  
####  Program instantiation
  
**program_instantiation**{: #program_instantiation }
:	<a href="#program_identifier">program_identifier</a>  \[ <a href="#parameter_value_assignment">parameter_value_assignment</a>  ]  <a href="#hierarchical_instance">hierarchical_instance</a>  { <font color="purple"><b>,</b></font> <a href="#hierarchical_instance">hierarchical_instance</a>  }  <font color="purple"><b>;</b></font> 
  
#### Checker instantiation
  
**checker_instantiation**{: #checker_instantiation }
:	<a href="#ps_checker_identifier">ps_checker_identifier</a> <a href="#name_of_instance">name_of_instance</a> <font color="purple"><b>(</b></font>  \[ <a href="#list_of_checker_port_connections">list_of_checker_port_connections</a>  ]  <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font> 
  
**list_of_checker_port_connections**{: #list_of_checker_port_connections }[^footnote_29]
:	<a href="#ordered_checker_port_connection">ordered_checker_port_connection</a>  { <font color="purple"><b>,</b></font> <a href="#ordered_checker_port_connection">ordered_checker_port_connection</a>  }    
        | <a href="#named_checker_port_connection">named_checker_port_connection</a>  { <font color="purple"><b>,</b></font> <a href="#named_checker_port_connection">named_checker_port_connection</a>  }  
  
**ordered_checker_port_connection**{: #ordered_checker_port_connection }
:	 { <a href="#attribute_instance">attribute_instance</a>  }   \[ <a href="#property_actual_arg">property_actual_arg</a>  ]  
  
**named_checker_port_connection**{: #named_checker_port_connection }
:	 { <a href="#attribute_instance">attribute_instance</a>  }  <font color="purple"><b>.</b></font> <a href="#formal_port_identifier">formal_port_identifier</a>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#property_actual_arg">property_actual_arg</a>  ]  <font color="purple"><b>)</b></font>  ]    
        |  { <a href="#attribute_instance">attribute_instance</a>  }  <font color="purple"><b>.\*</b></font> 
  
### Generated instantiation
  
**generate_region**{: #generate_region }
:	<font color="purple"><b>generate</b></font>  { <a href="#generate_item">generate_item</a>  }  <font color="purple"><b>endgenerate</b></font> 
  
**loop_generate_construct**{: #loop_generate_construct }
:	<font color="purple"><b>for</b></font> <font color="purple"><b>(</b></font> <a href="#genvar_initialization">genvar_initialization</a> <font color="purple"><b>;</b></font> <a href="#genvar_expression">genvar_expression</a> <font color="purple"><b>;</b></font> <a href="#genvar_iteration">genvar_iteration</a> <font color="purple"><b>)</b></font> <a href="#generate_block">generate_block</a> 
  
**genvar_initialization**{: #genvar_initialization }
:	 \[ <font color="purple"><b>genvar</b></font>  ]  <a href="#genvar_identifier">genvar_identifier</a> <font color="purple"><b>=</b></font> <a href="#constant_expression">constant_expression</a> 
  
**genvar_iteration**{: #genvar_iteration }
:	<a href="#genvar_identifier">genvar_identifier</a> <a href="#assignment_operator">assignment_operator</a> <a href="#genvar_expression">genvar_expression</a>   
        | <a href="#inc_or_dec_operator">inc_or_dec_operator</a> <a href="#genvar_identifier">genvar_identifier</a>   
        | <a href="#genvar_identifier">genvar_identifier</a> <a href="#inc_or_dec_operator">inc_or_dec_operator</a> 
  
**conditional_generate_construct**{: #conditional_generate_construct }
:	<a href="#if_generate_construct">if_generate_construct</a>   
        | <a href="#case_generate_construct">case_generate_construct</a> 
  
**if_generate_construct**{: #if_generate_construct }
:	<font color="purple"><b>if</b></font> <font color="purple"><b>(</b></font> <a href="#constant_expression">constant_expression</a> <font color="purple"><b>)</b></font> <a href="#generate_block">generate_block</a>  \[ <font color="purple"><b>else</b></font> <a href="#generate_block">generate_block</a>  ]  
  
**case_generate_construct**{: #case_generate_construct }
:	<font color="purple"><b>case</b></font> <font color="purple"><b>(</b></font> <a href="#constant_expression">constant_expression</a> <font color="purple"><b>)</b></font> <a href="#case_generate_item">case_generate_item</a>  { <a href="#case_generate_item">case_generate_item</a>  }  <font color="purple"><b>endcase</b></font> 
  
**case_generate_item**{: #case_generate_item }
:	<a href="#constant_expression">constant_expression</a>  { <font color="purple"><b>,</b></font> <a href="#constant_expression">constant_expression</a>  }  <font color="purple"><b>:</b></font> <a href="#generate_block">generate_block</a>   
        | <font color="purple"><b>default</b></font>  \[ <font color="purple"><b>:</b></font>  ]  <a href="#generate_block">generate_block</a> 
  
**generate_block**{: #generate_block }
:	<a href="#generate_item">generate_item</a>   
        |  \[ <a href="#generate_block_identifier">generate_block_identifier</a> <font color="purple"><b>:</b></font>  ]  <font color="purple"><b>begin</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#generate_block_identifier">generate_block_identifier</a>  ]   { <a href="#generate_item">generate_item</a>  }  <font color="purple"><b>end</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#generate_block_identifier">generate_block_identifier</a>  ]  
  
**generate_item**{: #generate_item }[^footnote_30]
:	<a href="#module_or_generate_item">module_or_generate_item</a>   
        | <a href="#interface_or_generate_item">interface_or_generate_item</a>   
        | <a href="#checker_or_generate_item">checker_or_generate_item</a> 
  
## UDP declaration and instantiation
  
### UDP declaration
  
**udp_nonansi_declaration**{: #udp_nonansi_declaration }
:	 { <a href="#attribute_instance">attribute_instance</a>  }  <font color="purple"><b>primitive</b></font> <a href="#udp_identifier">udp_identifier</a> <font color="purple"><b>(</b></font> <a href="#udp_port_list">udp_port_list</a> <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font> 
  
**udp_ansi_declaration**{: #udp_ansi_declaration }
:	 { <a href="#attribute_instance">attribute_instance</a>  }  <font color="purple"><b>primitive</b></font> <a href="#udp_identifier">udp_identifier</a> <font color="purple"><b>(</b></font> <a href="#udp_declaration_port_list">udp_declaration_port_list</a> <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font> 
  
**udp_declaration**{: #udp_declaration }
:	<a href="#udp_nonansi_declaration">udp_nonansi_declaration</a> <a href="#udp_port_declaration">udp_port_declaration</a>  { <a href="#udp_port_declaration">udp_port_declaration</a>  }  <a href="#udp_body">udp_body</a> <font color="purple"><b>endprimitive</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#udp_identifier">udp_identifier</a>  ]    
        | <a href="#udp_ansi_declaration">udp_ansi_declaration</a> <a href="#udp_body">udp_body</a> <font color="purple"><b>endprimitive</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#udp_identifier">udp_identifier</a>  ]    
        | <font color="purple"><b>extern</b></font> <a href="#udp_nonansi_declaration">udp_nonansi_declaration</a>   
        | <font color="purple"><b>extern</b></font> <a href="#udp_ansi_declaration">udp_ansi_declaration</a>   
        |  { <a href="#attribute_instance">attribute_instance</a>  }  <font color="purple"><b>primitive</b></font> <a href="#udp_identifier">udp_identifier</a> <font color="purple"><b>(</b></font> <font color="purple"><b>.\*</b></font> <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font>  { <a href="#udp_port_declaration">udp_port_declaration</a>  }  <a href="#udp_body">udp_body</a> <font color="purple"><b>endprimitive</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#udp_identifier">udp_identifier</a>  ]  
  
### UDP ports
  
**udp_port_list**{: #udp_port_list }
:	<a href="#output_port_identifier">output_port_identifier</a> <font color="purple"><b>,</b></font> <a href="#input_port_identifier">input_port_identifier</a>  { <font color="purple"><b>,</b></font> <a href="#input_port_identifier">input_port_identifier</a>  }  
  
**udp_declaration_port_list**{: #udp_declaration_port_list }
:	<a href="#udp_output_declaration">udp_output_declaration</a> <font color="purple"><b>,</b></font> <a href="#udp_input_declaration">udp_input_declaration</a>  { <font color="purple"><b>,</b></font> <a href="#udp_input_declaration">udp_input_declaration</a>  }  
  
**udp_port_declaration**{: #udp_port_declaration }
:	<a href="#udp_output_declaration">udp_output_declaration</a> <font color="purple"><b>;</b></font>   
        | <a href="#udp_input_declaration">udp_input_declaration</a> <font color="purple"><b>;</b></font>   
        | <a href="#udp_reg_declaration">udp_reg_declaration</a> <font color="purple"><b>;</b></font> 
  
**udp_output_declaration**{: #udp_output_declaration }
:	 { <a href="#attribute_instance">attribute_instance</a>  }  <font color="purple"><b>output</b></font> <a href="#port_identifier">port_identifier</a>   
        |  { <a href="#attribute_instance">attribute_instance</a>  }  <font color="purple"><b>output</b></font> <font color="purple"><b>reg</b></font> <a href="#port_identifier">port_identifier</a>  \[ <font color="purple"><b>=</b></font> <a href="#constant_expression">constant_expression</a>  ]  
  
**udp_input_declaration**{: #udp_input_declaration }
:	 { <a href="#attribute_instance">attribute_instance</a>  }  <font color="purple"><b>input</b></font> <a href="#list_of_udp_port_identifiers">list_of_udp_port_identifiers</a> 
  
**udp_reg_declaration**{: #udp_reg_declaration }
:	 { <a href="#attribute_instance">attribute_instance</a>  }  <font color="purple"><b>reg</b></font> <a href="#variable_identifier">variable_identifier</a> 
  
### UDP body
  
**udp_body**{: #udp_body }
:	<a href="#combinational_body">combinational_body</a>   
        | <a href="#sequential_body">sequential_body</a> 
  
**combinational_body**{: #combinational_body }
:	<font color="purple"><b>table</b></font> <a href="#combinational_entry">combinational_entry</a>  { <a href="#combinational_entry">combinational_entry</a>  }  <font color="purple"><b>endtable</b></font> 
  
**combinational_entry**{: #combinational_entry }
:	<a href="#level_input_list">level_input_list</a> <font color="purple"><b>:</b></font> <a href="#output_symbol">output_symbol</a> <font color="purple"><b>;</b></font> 
  
**sequential_body**{: #sequential_body }
:	 \[ <a href="#udp_initial_statement">udp_initial_statement</a>  ]  <font color="purple"><b>table</b></font> <a href="#sequential_entry">sequential_entry</a>  { <a href="#sequential_entry">sequential_entry</a>  }  <font color="purple"><b>endtable</b></font> 
  
**udp_initial_statement**{: #udp_initial_statement }
:	<font color="purple"><b>initial</b></font> <a href="#output_port_identifier">output_port_identifier</a> <font color="purple"><b>=</b></font> <a href="#init_val">init_val</a> <font color="purple"><b>;</b></font> 
  
**init_val**{: #init_val }
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
  
**sequential_entry**{: #sequential_entry }
:	<a href="#seq_input_list">seq_input_list</a> <font color="purple"><b>:</b></font> <a href="#current_state">current_state</a> <font color="purple"><b>:</b></font> <a href="#next_state">next_state</a> <font color="purple"><b>;</b></font> 
  
**seq_input_list**{: #seq_input_list }
:	<a href="#level_input_list">level_input_list</a>   
        | <a href="#edge_input_list">edge_input_list</a> 
  
**level_input_list**{: #level_input_list }
:	<a href="#level_symbol">level_symbol</a>  { <a href="#level_symbol">level_symbol</a>  }  
  
**edge_input_list**{: #edge_input_list }
:	 { <a href="#level_symbol">level_symbol</a>  }  <a href="#edge_indicator">edge_indicator</a>  { <a href="#level_symbol">level_symbol</a>  }  
  
**edge_indicator**{: #edge_indicator }
:	<font color="purple"><b>(</b></font> <a href="#level_symbol">level_symbol</a> <a href="#level_symbol">level_symbol</a> <font color="purple"><b>)</b></font>   
        | <a href="#edge_symbol">edge_symbol</a> 
  
**current_state**{: #current_state }
:	<a href="#level_symbol">level_symbol</a> 
  
**next_state**{: #next_state }
:	<a href="#output_symbol">output_symbol</a>   
        | <font color="purple"><b>-</b></font> 
  
**output_symbol**{: #output_symbol }
:	<font color="purple"><b>0</b></font>   
        | <font color="purple"><b>1</b></font>   
        | <font color="purple"><b>x</b></font>   
        | <font color="purple"><b>X</b></font> 
  
**level_symbol**{: #level_symbol }
:	<font color="purple"><b>0</b></font>   
        | <font color="purple"><b>1</b></font>   
        | <font color="purple"><b>x</b></font>   
        | <font color="purple"><b>X</b></font>   
        | <font color="purple"><b>?</b></font>   
        | <font color="purple"><b>b</b></font>   
        | <font color="purple"><b>B</b></font> 
  
**edge_symbol**{: #edge_symbol }
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
  
**udp_instantiation**{: #udp_instantiation }
:	<a href="#udp_identifier">udp_identifier</a>  \[ <a href="#drive_strength">drive_strength</a>  ]   \[ <a href="#delay2">delay2</a>  ]  <a href="#udp_instance">udp_instance</a>  { <font color="purple"><b>,</b></font> <a href="#udp_instance">udp_instance</a>  }  <font color="purple"><b>;</b></font> 
  
**udp_instance**{: #udp_instance }
:	 \[ <a href="#name_of_instance">name_of_instance</a>  ]  <font color="purple"><b>(</b></font> <a href="#output_terminal">output_terminal</a> <font color="purple"><b>,</b></font> <a href="#input_terminal">input_terminal</a>  { <font color="purple"><b>,</b></font> <a href="#input_terminal">input_terminal</a>  }  <font color="purple"><b>)</b></font> 
  
## Behavioral assignments
  
### Continuous assignment and net alias statements
  
**continuous_assign**{: #continuous_assign }
:	<font color="purple"><b>assign</b></font>  \[ <a href="#drive_strength">drive_strength</a>  ]   \[ <a href="#delay3">delay3</a>  ]  <a href="#list_of_net_assignments">list_of_net_assignments</a> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>assign</b></font>  \[ <a href="#delay_control">delay_control</a>  ]  <a href="#list_of_variable_assignments">list_of_variable_assignments</a> <font color="purple"><b>;</b></font> 
  
**list_of_net_assignments**{: #list_of_net_assignments }
:	<a href="#net_assignment">net_assignment</a>  { <font color="purple"><b>,</b></font> <a href="#net_assignment">net_assignment</a>  }  
  
**list_of_variable_assignments**{: #list_of_variable_assignments }
:	<a href="#variable_assignment">variable_assignment</a>  { <font color="purple"><b>,</b></font> <a href="#variable_assignment">variable_assignment</a>  }  
  
**net_alias**{: #net_alias }
:	<font color="purple"><b>alias</b></font> <a href="#net_lvalue">net_lvalue</a> <font color="purple"><b>=</b></font> <a href="#net_lvalue">net_lvalue</a>  { <font color="purple"><b>=</b></font> <a href="#net_lvalue">net_lvalue</a>  }  <font color="purple"><b>;</b></font> 
  
**net_assignment**{: #net_assignment }
:	<a href="#net_lvalue">net_lvalue</a> <font color="purple"><b>=</b></font> <a href="#expression">expression</a> 
  
### Procedural blocks and assignments
  
**initial_construct**{: #initial_construct }
:	<font color="purple"><b>initial</b></font> <a href="#statement_or_null">statement_or_null</a> 
  
**always_construct**{: #always_construct }
:	<a href="#always_keyword">always_keyword</a> <a href="#statement">statement</a> 
  
**always_keyword**{: #always_keyword }
:	<font color="purple"><b>always</b></font>   
        | <font color="purple"><b>always_comb</b></font>   
        | <font color="purple"><b>always_latch</b></font>   
        | <font color="purple"><b>always_ff</b></font> 
  
**final_construct**{: #final_construct }
:	<font color="purple"><b>final</b></font> <a href="#function_statement">function_statement</a> 
  
**blocking_assignment**{: #blocking_assignment }
:	<a href="#variable_lvalue">variable_lvalue</a> <font color="purple"><b>=</b></font> <a href="#delay_or_event_control">delay_or_event_control</a> <a href="#expression">expression</a>   
        | <a href="#nonrange_variable_lvalue">nonrange_variable_lvalue</a> <font color="purple"><b>=</b></font> <a href="#dynamic_array_new">dynamic_array_new</a>   
        |  \[ <a href="#implicit_class_handle">implicit_class_handle</a> <font color="purple"><b>.</b></font>   
         | <a href="#class_scope">class_scope</a>   
         | <a href="#package_scope">package_scope</a>  ]  <a href="#hierarchical_variable_identifier">hierarchical_variable_identifier</a> <a href="#select">select</a> <font color="purple"><b>!=</b></font> <a href="#class_new">class_new</a>   
        | <a href="#operator_assignment">operator_assignment</a> 
  
**operator_assignment**{: #operator_assignment }
:	<a href="#variable_lvalue">variable_lvalue</a> <a href="#assignment_operator">assignment_operator</a> <a href="#expression">expression</a> 
  
**assignment_operator**{: #assignment_operator }
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
  
**nonblocking_assignment**{: #nonblocking_assignment }
:	<a href="#variable_lvalue">variable_lvalue</a> <font color="purple"><b><=</b></font>  \[ <a href="#delay_or_event_control">delay_or_event_control</a>  ]  <a href="#expression">expression</a> 
  
**procedural_continuous_assignment**{: #procedural_continuous_assignment }
:	<font color="purple"><b>assign</b></font> <a href="#variable_assignment">variable_assignment</a>   
        | <font color="purple"><b>deassign</b></font> <a href="#variable_lvalue">variable_lvalue</a>   
        | <font color="purple"><b>force</b></font> <a href="#variable_assignment">variable_assignment</a>   
        | <font color="purple"><b>force</b></font> <a href="#net_assignment">net_assignment</a>   
        | <font color="purple"><b>release</b></font> <a href="#variable_lvalue">variable_lvalue</a>   
        | <font color="purple"><b>release</b></font> <a href="#net_lvalue">net_lvalue</a> 
  
**variable_assignment**{: #variable_assignment }
:	<a href="#variable_lvalue">variable_lvalue</a> <font color="purple"><b>=</b></font> <a href="#expression">expression</a> 
  
### Parallel and sequential blocks
  
**action_block**{: #action_block }
:	<a href="#statement_or_null">statement_or_null</a>   
        |  \[ <a href="#statement">statement</a>  ]  <font color="purple"><b>else</b></font> <a href="#statement_or_null">statement_or_null</a> 
  
**seq_block**{: #seq_block }
:	<font color="purple"><b>begin</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#block_identifier">block_identifier</a>  ]   { <a href="#block_item_declaration">block_item_declaration</a>  }   { <a href="#statement_or_null">statement_or_null</a>  }  <font color="purple"><b>end</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#block_identifier">block_identifier</a>  ]  
  
**par_block**{: #par_block }
:	<font color="purple"><b>fork</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#block_identifier">block_identifier</a>  ]   { <a href="#block_item_declaration">block_item_declaration</a>  }   { <a href="#statement_or_null">statement_or_null</a>  }  <a href="#join_keyword">join_keyword</a>  \[ <font color="purple"><b>:</b></font> <a href="#block_identifier">block_identifier</a>  ]  
  
**join_keyword**{: #join_keyword }
:	<font color="purple"><b>join</b></font>   
        | <font color="purple"><b>join_any</b></font>   
        | <font color="purple"><b>join_none</b></font> 
  
### Statements
  
**statement_or_null**{: #statement_or_null }
:	<a href="#statement">statement</a>   
        |  { <a href="#attribute_instance">attribute_instance</a>  }  <font color="purple"><b>;</b></font> 
  
**statement**{: #statement }
:	 \[ <a href="#block_identifier">block_identifier</a> <font color="purple"><b>:</b></font>  ]   { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#statement_item">statement_item</a> 
  
**statement_item**{: #statement_item }
:	<a href="#blocking_assignment">blocking_assignment</a> <font color="purple"><b>;</b></font>   
        | <a href="#nonblocking_assignment">nonblocking_assignment</a> <font color="purple"><b>;</b></font>   
        | <a href="#procedural_continuous_assignment">procedural_continuous_assignment</a> <font color="purple"><b>;</b></font>   
        | <a href="#case_statement">case_statement</a>   
        | <a href="#conditional_statement">conditional_statement</a>   
        | <a href="#inc_or_dec_expression">inc_or_dec_expression</a> <font color="purple"><b>;</b></font>   
        | <a href="#subroutine_call_statement">subroutine_call_statement</a>   
        | <a href="#disable_statement">disable_statement</a>   
        | <a href="#event_trigger">event_trigger</a>   
        | <a href="#loop_statement">loop_statement</a>   
        | <a href="#jump_statement">jump_statement</a>   
        | <a href="#par_block">par_block</a>   
        | <a href="#procedural_timing_control_statement">procedural_timing_control_statement</a>   
        | <a href="#seq_block">seq_block</a>   
        | <a href="#wait_statement">wait_statement</a>   
        | <a href="#procedural_assertion_statement">procedural_assertion_statement</a>   
        | <a href="#clocking_drive">clocking_drive</a> <font color="purple"><b>;</b></font>   
        | <a href="#randsequence_statement">randsequence_statement</a>   
        | <a href="#randcase_statement">randcase_statement</a>   
        | <a href="#expect_property_statement">expect_property_statement</a> 
  
**function_statement**{: #function_statement }
:	<a href="#statement">statement</a> 
  
**function_statement_or_null**{: #function_statement_or_null }
:	<a href="#function_statement">function_statement</a>   
        |  { <a href="#attribute_instance">attribute_instance</a>  }  <font color="purple"><b>;</b></font> 
  
**variable_identifier_list**{: #variable_identifier_list }
:	<a href="#variable_identifier">variable_identifier</a>  { <font color="purple"><b>,</b></font> <a href="#variable_identifier">variable_identifier</a>  }  
  
### Timing control statements
  
**procedural_timing_control_statement**{: #procedural_timing_control_statement }
:	<a href="#procedural_timing_control">procedural_timing_control</a> <a href="#statement_or_null">statement_or_null</a> 
  
**delay_or_event_control**{: #delay_or_event_control }
:	<a href="#delay_control">delay_control</a>   
        | <a href="#event_control">event_control</a>   
        | <font color="purple"><b>repeat</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#event_control">event_control</a> 
  
**delay_control**{: #delay_control }
:	<font color="purple"><b>#</b></font> <a href="#delay_value">delay_value</a>   
        | <font color="purple"><b>#</b></font> <font color="purple"><b>(</b></font> <a href="#mintypmax_expression">mintypmax_expression</a> <font color="purple"><b>)</b></font> 
  
**event_control**{: #event_control }
:	<font color="purple"><b>@</b></font> <a href="#hierarchical_event_identifier">hierarchical_event_identifier</a>   
        | <font color="purple"><b>@</b></font> <font color="purple"><b>(</b></font> <a href="#event_expression">event_expression</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>@\*</b></font>   
        | <font color="purple"><b>@</b></font> <font color="purple"><b>(\*)</b></font>   
        | <font color="purple"><b>@</b></font> <a href="#ps_or_hierarchical_sequence_identifier">ps_or_hierarchical_sequence_identifier</a> 
  
**event_expression**{: #event_expression }[^footnote_31]
:	 \[ <a href="#edge_identifier">edge_identifier</a>  ]  <a href="#expression">expression</a>  \[ <font color="purple"><b>iff</b></font> <a href="#expression">expression</a>  ]    
        | <a href="#sequence_instance">sequence_instance</a>  \[ <font color="purple"><b>iff</b></font> <a href="#expression">expression</a>  ]    
        | <a href="#event_expression">event_expression</a> <font color="purple"><b>or</b></font> <a href="#event_expression">event_expression</a>   
        | <a href="#event_expression">event_expression</a> <font color="purple"><b>,</b></font> <a href="#event_expression">event_expression</a>   
        | <font color="purple"><b>(</b></font> <a href="#event_expression">event_expression</a> <font color="purple"><b>)</b></font> 
  
**procedural_timing_control**{: #procedural_timing_control }
:	<a href="#delay_control">delay_control</a>   
        | <a href="#event_control">event_control</a>   
        | <a href="#cycle_delay">cycle_delay</a> 
  
**jump_statement**{: #jump_statement }
:	<font color="purple"><b>return</b></font>  \[ <a href="#expression">expression</a>  ]  <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>break</b></font> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>continue</b></font> <font color="purple"><b>;</b></font> 
  
**wait_statement**{: #wait_statement }
:	<font color="purple"><b>wait</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#statement_or_null">statement_or_null</a>   
        | <font color="purple"><b>wait</b></font> <font color="purple"><b>fork</b></font> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>wait_order</b></font> <font color="purple"><b>(</b></font> <a href="#hierarchical_identifier">hierarchical_identifier</a>  { <font color="purple"><b>,</b></font> <a href="#hierarchical_identifier">hierarchical_identifier</a>  }  <font color="purple"><b>)</b></font> <a href="#action_block">action_block</a> 
  
**event_trigger**{: #event_trigger }
:	<font color="purple"><b>-></b></font> <a href="#hierarchical_event_identifier">hierarchical_event_identifier</a> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>->></b></font>  \[ <a href="#delay_or_event_control">delay_or_event_control</a>  ]  <a href="#hierarchical_event_identifier">hierarchical_event_identifier</a> <font color="purple"><b>;</b></font> 
  
**disable_statement**{: #disable_statement }
:	<font color="purple"><b>disable</b></font> <a href="#hierarchical_task_identifier">hierarchical_task_identifier</a> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>disable</b></font> <a href="#hierarchical_block_identifier">hierarchical_block_identifier</a> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>disable</b></font> <font color="purple"><b>fork</b></font> <font color="purple"><b>;</b></font> 
  
### Conditional statements
  
**conditional_statement**{: #conditional_statement }
:	 \[ <a href="#unique_priority">unique_priority</a>  ]  <font color="purple"><b>if</b></font> <font color="purple"><b>(</b></font> <a href="#cond_predicate">cond_predicate</a> <font color="purple"><b>)</b></font> <a href="#statement_or_null">statement_or_null</a>  { <font color="purple"><b>else</b></font> <font color="purple"><b>if</b></font> <font color="purple"><b>(</b></font> <a href="#cond_predicate">cond_predicate</a> <font color="purple"><b>)</b></font> <a href="#statement_or_null">statement_or_null</a>  }   \[ <font color="purple"><b>else</b></font> <a href="#statement_or_null">statement_or_null</a>  ]  
  
**unique_priority**{: #unique_priority }
:	<font color="purple"><b>unique</b></font>   
        | <font color="purple"><b>unique0</b></font>   
        | <font color="purple"><b>priority</b></font> 
  
**cond_predicate**{: #cond_predicate }
:	<a href="#expression_or_cond_pattern">expression_or_cond_pattern</a>  { <font color="purple"><b>&&&</b></font> <a href="#expression_or_cond_pattern">expression_or_cond_pattern</a>  }  
  
**expression_or_cond_pattern**{: #expression_or_cond_pattern }
:	<a href="#expression">expression</a>   
        | <a href="#cond_pattern">cond_pattern</a> 
  
**cond_pattern**{: #cond_pattern }
:	<a href="#expression">expression</a> <font color="purple"><b>matches</b></font> <a href="#pattern">pattern</a> 
  
### Case statements
  
**case_statement**{: #case_statement }
:	 \[ <a href="#unique_priority">unique_priority</a>  ]  <a href="#case_keyword">case_keyword</a> <font color="purple"><b>(</b></font> <a href="#case_expression">case_expression</a> <font color="purple"><b>)</b></font> <a href="#case_item">case_item</a>  { <a href="#case_item">case_item</a>  }  <font color="purple"><b>endcase</b></font>   
        |  \[ <a href="#unique_priority">unique_priority</a>  ]  <a href="#case_keyword">case_keyword</a> <font color="purple"><b>(</b></font> <a href="#case_expression">case_expression</a> <font color="purple"><b>)</b></font> <font color="purple"><b>matches</b></font> <a href="#case_pattern_item">case_pattern_item</a>  { <a href="#case_pattern_item">case_pattern_item</a>  }  <font color="purple"><b>endcase</b></font>   
        |  \[ <a href="#unique_priority">unique_priority</a>  ]  <font color="purple"><b>case</b></font> <font color="purple"><b>(</b></font> <a href="#case_expression">case_expression</a> <font color="purple"><b>)</b></font> <font color="purple"><b>inside</b></font> <a href="#case_inside_item">case_inside_item</a>  { <a href="#case_inside_item">case_inside_item</a>  }  <font color="purple"><b>endcase</b></font> 
  
**case_keyword**{: #case_keyword }
:	<font color="purple"><b>case</b></font>   
        | <font color="purple"><b>casez</b></font>   
        | <font color="purple"><b>casex</b></font> 
  
**case_expression**{: #case_expression }
:	<a href="#expression">expression</a> 
  
**case_item**{: #case_item }
:	<a href="#case_item_expression">case_item_expression</a>  { <font color="purple"><b>,</b></font> <a href="#case_item_expression">case_item_expression</a>  }  <font color="purple"><b>:</b></font> <a href="#statement_or_null">statement_or_null</a>   
        | <font color="purple"><b>default</b></font>  \[ <font color="purple"><b>:</b></font>  ]  <a href="#statement_or_null">statement_or_null</a> 
  
**case_pattern_item**{: #case_pattern_item }
:	<a href="#pattern">pattern</a>  \[ <font color="purple"><b>&&&</b></font> <a href="#expression">expression</a>  ]  <font color="purple"><b>:</b></font> <a href="#statement_or_null">statement_or_null</a>   
        | <font color="purple"><b>default</b></font>  \[ <font color="purple"><b>:</b></font>  ]  <a href="#statement_or_null">statement_or_null</a> 
  
**case_inside_item**{: #case_inside_item }
:	<a href="#open_range_list">open_range_list</a> <font color="purple"><b>:</b></font> <a href="#statement_or_null">statement_or_null</a>   
        | <font color="purple"><b>default</b></font>  \[ <font color="purple"><b>:</b></font>  ]  <a href="#statement_or_null">statement_or_null</a> 
  
**case_item_expression**{: #case_item_expression }
:	<a href="#expression">expression</a> 
  
**randcase_statement**{: #randcase_statement }
:	<font color="purple"><b>randcase</b></font> <a href="#randcase_item">randcase_item</a>  { <a href="#randcase_item">randcase_item</a>  }  <font color="purple"><b>endcase</b></font> 
  
**randcase_item**{: #randcase_item }
:	<a href="#expression">expression</a> <font color="purple"><b>:</b></font> <a href="#statement_or_null">statement_or_null</a> 
  
**open_range_list**{: #open_range_list }
:	<a href="#open_value_range">open_value_range</a>  { <font color="purple"><b>,</b></font> <a href="#open_value_range">open_value_range</a>  }  
  
**open_value_range**{: #open_value_range }
:	<a href="#value_range">value_range</a> [^footnote_25] 
  
#### Patterns
  
**pattern**{: #pattern }
:	<font color="purple"><b>.</b></font> <a href="#variable_identifier">variable_identifier</a>   
        | <font color="purple"><b>.\*</b></font>   
        | <a href="#constant_expression">constant_expression</a>   
        | <font color="purple"><b>tagged</b></font> <a href="#member_identifier">member_identifier</a>  \[ <a href="#pattern">pattern</a>  ]    
        | <font color="purple"><b>'{</b></font> <a href="#pattern">pattern</a>  { <font color="purple"><b>,</b></font> <a href="#pattern">pattern</a>  }  <font color="purple"><b>}</b></font>   
        | <font color="purple"><b>'{</b></font> <a href="#member_identifier">member_identifier</a> <font color="purple"><b>:</b></font> <a href="#pattern">pattern</a>  { <font color="purple"><b>,</b></font> <a href="#member_identifier">member_identifier</a> <font color="purple"><b>:</b></font> <a href="#pattern">pattern</a>  }  <font color="purple"><b>}</b></font> 
  
**assignment_pattern**{: #assignment_pattern }
:	<font color="purple"><b>'{</b></font> <a href="#expression">expression</a>  { <font color="purple"><b>,</b></font> <a href="#expression">expression</a>  }  <font color="purple"><b>}</b></font>   
        | <font color="purple"><b>'{</b></font> <a href="#structure_pattern_key">structure_pattern_key</a> <font color="purple"><b>:</b></font> <a href="#expression">expression</a>  { <font color="purple"><b>,</b></font> <a href="#structure_pattern_key">structure_pattern_key</a> <font color="purple"><b>:</b></font> <a href="#expression">expression</a>  }  <font color="purple"><b>}</b></font>   
        | <font color="purple"><b>'{</b></font> <a href="#array_pattern_key">array_pattern_key</a> <font color="purple"><b>:</b></font> <a href="#expression">expression</a>  { <font color="purple"><b>,</b></font> <a href="#array_pattern_key">array_pattern_key</a> <font color="purple"><b>:</b></font> <a href="#expression">expression</a>  }  <font color="purple"><b>}</b></font>   
        | <font color="purple"><b>'{</b></font> <a href="#constant_expression">constant_expression</a> <font color="purple"><b>{</b></font> <a href="#expression">expression</a>  { <font color="purple"><b>,</b></font> <a href="#expression">expression</a>  }  <font color="purple"><b>}</b></font> <font color="purple"><b>}</b></font> 
  
**structure_pattern_key**{: #structure_pattern_key }
:	<a href="#member_identifier">member_identifier</a>   
        | <a href="#assignment_pattern_key">assignment_pattern_key</a> 
  
**array_pattern_key**{: #array_pattern_key }
:	<a href="#constant_expression">constant_expression</a>   
        | <a href="#assignment_pattern_key">assignment_pattern_key</a> 
  
**assignment_pattern_key**{: #assignment_pattern_key }
:	<a href="#simple_type">simple_type</a>   
        | <font color="purple"><b>default</b></font> 
  
**assignment_pattern_expression**{: #assignment_pattern_expression }
:	 \[ <a href="#assignment_pattern_expression_type">assignment_pattern_expression_type</a>  ]  <a href="#assignment_pattern">assignment_pattern</a> 
  
**assignment_pattern_expression_type**{: #assignment_pattern_expression_type }
:	<a href="#ps_type_identifier">ps_type_identifier</a>   
        | <a href="#ps_parameter_identifier">ps_parameter_identifier</a>   
        | <a href="#integer_atom_type">integer_atom_type</a>   
        | <a href="#type_reference">type_reference</a> 
  
**constant_assignment_pattern_expression**{: #constant_assignment_pattern_expression }[^footnote_32]
:	<a href="#assignment_pattern_expression">assignment_pattern_expression</a> 
  
**assignment_pattern_net_lvalue**{: #assignment_pattern_net_lvalue }
:	<font color="purple"><b>'{</b></font> <a href="#net_lvalue">net_lvalue</a>  { <font color="purple"><b>,</b></font> <a href="#net_lvalue">net_lvalue</a>  }  <font color="purple"><b>}</b></font> 
  
**assignment_pattern_variable_lvalue**{: #assignment_pattern_variable_lvalue }
:	<font color="purple"><b>'{</b></font> <a href="#variable_lvalue">variable_lvalue</a>  { <font color="purple"><b>,</b></font> <a href="#variable_lvalue">variable_lvalue</a>  }  <font color="purple"><b>}</b></font> 
  
### Looping statements
  
**loop_statement**{: #loop_statement }
:	<font color="purple"><b>forever</b></font> <a href="#statement_or_null">statement_or_null</a>   
        | <font color="purple"><b>repeat</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#statement_or_null">statement_or_null</a>   
        | <font color="purple"><b>while</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#statement_or_null">statement_or_null</a>   
        | <font color="purple"><b>for</b></font> <font color="purple"><b>(</b></font>  \[ <a href="#for_initialization">for_initialization</a>  ]  <font color="purple"><b>;</b></font>  \[ <a href="#expression">expression</a>  ]  <font color="purple"><b>;</b></font>  \[ <a href="#for_step">for_step</a>  ]  <font color="purple"><b>)</b></font> <a href="#statement_or_null">statement_or_null</a>   
        | <font color="purple"><b>do</b></font> <a href="#statement_or_null">statement_or_null</a> <font color="purple"><b>while</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>foreach</b></font> <font color="purple"><b>(</b></font> <a href="#ps_or_hierarchical_array_identifier">ps_or_hierarchical_array_identifier</a>  \[ <a href="#loop_variables">loop_variables</a>  ]  <font color="purple"><b>)</b></font> <a href="#statement">statement</a> 
  
**for_initialization**{: #for_initialization }
:	<a href="#list_of_variable_assignments">list_of_variable_assignments</a>   
        | <a href="#for_variable_declaration">for_variable_declaration</a>  { <font color="purple"><b>,</b></font> <a href="#for_variable_declaration">for_variable_declaration</a>  }  
  
**for_variable_declaration**{: #for_variable_declaration }
:	 \[ <font color="purple"><b>var</b></font>  ]  <a href="#data_type">data_type</a> <a href="#variable_identifier">variable_identifier</a> <font color="purple"><b>=</b></font> <a href="#expression">expression</a>  { <font color="purple"><b>,</b></font> <a href="#variable_identifier">variable_identifier</a> <font color="purple"><b>=</b></font> <a href="#expression">expression</a>  }  
  
**for_step**{: #for_step }
:	<a href="#for_step_assignment">for_step_assignment</a>  { <font color="purple"><b>,</b></font> <a href="#for_step_assignment">for_step_assignment</a>  }  
  
**for_step_assignment**{: #for_step_assignment }
:	<a href="#operator_assignment">operator_assignment</a>   
        | <a href="#inc_or_dec_expression">inc_or_dec_expression</a>   
        | <a href="#function_subroutine_call">function_subroutine_call</a> 
  
**loop_variables**{: #loop_variables }
:	 \[ <a href="#index_variable_identifier">index_variable_identifier</a>  ]   { <font color="purple"><b>,</b></font>  \[ <a href="#index_variable_identifier">index_variable_identifier</a>  ]   }  
  
### Subroutine call statements
  
**subroutine_call_statement**{: #subroutine_call_statement }
:	<a href="#subroutine_call">subroutine_call</a> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>void</b></font> <font color="purple"><b>'</b></font> <font color="purple"><b>(</b></font> <a href="#function_subroutine_call">function_subroutine_call</a> <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font> 
  
### Assertion statements
  
**assertion_item**{: #assertion_item }
:	<a href="#concurrent_assertion_item">concurrent_assertion_item</a>   
        | <a href="#deferred_immediate_assertion_item">deferred_immediate_assertion_item</a> 
  
**deferred_immediate_assertion_item**{: #deferred_immediate_assertion_item }
:	 \[ <a href="#block_identifier">block_identifier</a> <font color="purple"><b>:</b></font>  ]  <a href="#deferred_immediate_assertion_statement">deferred_immediate_assertion_statement</a> 
  
**procedural_assertion_statement**{: #procedural_assertion_statement }
:	<a href="#concurrent_assertion_statement">concurrent_assertion_statement</a>   
        | <a href="#immediate_assertion_statement">immediate_assertion_statement</a>   
        | <a href="#checker_instantiation">checker_instantiation</a> 
  
**immediate_assertion_statement**{: #immediate_assertion_statement }
:	<a href="#simple_immediate_assertion_statement">simple_immediate_assertion_statement</a>   
        | <a href="#deferred_immediate_assertion_statement">deferred_immediate_assertion_statement</a> 
  
**simple_immediate_assertion_statement**{: #simple_immediate_assertion_statement }
:	<a href="#simple_immediate_assert_statement">simple_immediate_assert_statement</a>   
        | <a href="#simple_immediate_assume_statement">simple_immediate_assume_statement</a>   
        | <a href="#simple_immediate_cover_statement">simple_immediate_cover_statement</a> 
  
**simple_immediate_assert_statement**{: #simple_immediate_assert_statement }
:	<font color="purple"><b>assert</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#action_block">action_block</a> 
  
**simple_immediate_assume_statement**{: #simple_immediate_assume_statement }
:	<font color="purple"><b>assume</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#action_block">action_block</a> 
  
**simple_immediate_cover_statement**{: #simple_immediate_cover_statement }
:	<font color="purple"><b>cover</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#statement_or_null">statement_or_null</a> 
  
**deferred_immediate_assertion_statement**{: #deferred_immediate_assertion_statement }
:	<a href="#deferred_immediate_assert_statement">deferred_immediate_assert_statement</a>   
        | <a href="#deferred_immediate_assume_statement">deferred_immediate_assume_statement</a>   
        | <a href="#deferred_immediate_cover_statement">deferred_immediate_cover_statement</a> 
  
**deferred_immediate_assert_statement**{: #deferred_immediate_assert_statement }
:	<font color="purple"><b>assert</b></font> <font color="purple"><b>#0</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#action_block">action_block</a>   
        | <font color="purple"><b>assert</b></font> <font color="purple"><b>final</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#action_block">action_block</a> 
  
**deferred_immediate_assume_statement**{: #deferred_immediate_assume_statement }
:	<font color="purple"><b>assume</b></font> <font color="purple"><b>#0</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#action_block">action_block</a>   
        | <font color="purple"><b>assume</b></font> <font color="purple"><b>final</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#action_block">action_block</a> 
  
**deferred_immediate_cover_statement**{: #deferred_immediate_cover_statement }
:	<font color="purple"><b>cover</b></font> <font color="purple"><b>#0</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#statement_or_null">statement_or_null</a>   
        | <font color="purple"><b>cover</b></font> <font color="purple"><b>final</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#statement_or_null">statement_or_null</a> 
  
### Clocking block
  
**clocking_declaration**{: #clocking_declaration }
:	 \[ <font color="purple"><b>default</b></font>  ]  <font color="purple"><b>clocking</b></font>  \[ <a href="#clocking_identifier">clocking_identifier</a>  ]  <a href="#clocking_event">clocking_event</a> <font color="purple"><b>;</b></font>  { <a href="#clocking_item">clocking_item</a>  }  <font color="purple"><b>endclocking</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#clocking_identifier">clocking_identifier</a>  ]    
        | <font color="purple"><b>global</b></font> <font color="purple"><b>clocking</b></font>  \[ <a href="#clocking_identifier">clocking_identifier</a>  ]  <a href="#clocking_event">clocking_event</a> <font color="purple"><b>;</b></font> <font color="purple"><b>endclocking</b></font>  \[ <font color="purple"><b>:</b></font> <a href="#clocking_identifier">clocking_identifier</a>  ]  
  
**clocking_event**{: #clocking_event }
:	<font color="purple"><b>@</b></font> <a href="#identifier">identifier</a>   
        | <font color="purple"><b>@</b></font> <font color="purple"><b>(</b></font> <a href="#event_expression">event_expression</a> <font color="purple"><b>)</b></font> 
  
**clocking_item**{: #clocking_item }
:	<font color="purple"><b>default</b></font> <a href="#default_skew">default_skew</a> <font color="purple"><b>;</b></font>   
        | <a href="#clocking_direction">clocking_direction</a> <a href="#list_of_clocking_decl_assign">list_of_clocking_decl_assign</a> <font color="purple"><b>;</b></font>   
        |  { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#assertion_item_declaration">assertion_item_declaration</a> 
  
**default_skew**{: #default_skew }
:	<font color="purple"><b>input</b></font> <a href="#clocking_skew">clocking_skew</a>   
        | <font color="purple"><b>output</b></font> <a href="#clocking_skew">clocking_skew</a>   
        | <font color="purple"><b>input</b></font> <a href="#clocking_skew">clocking_skew</a> <font color="purple"><b>output</b></font> <a href="#clocking_skew">clocking_skew</a> 
  
**clocking_direction**{: #clocking_direction }
:	<font color="purple"><b>input</b></font>  \[ <a href="#clocking_skew">clocking_skew</a>  ]    
        | <font color="purple"><b>output</b></font>  \[ <a href="#clocking_skew">clocking_skew</a>  ]    
        | <font color="purple"><b>input</b></font>  \[ <a href="#clocking_skew">clocking_skew</a>  ]  <font color="purple"><b>output</b></font>  \[ <a href="#clocking_skew">clocking_skew</a>  ]    
        | <font color="purple"><b>inout</b></font> 
  
**list_of_clocking_decl_assign**{: #list_of_clocking_decl_assign }
:	<a href="#clocking_decl_assign">clocking_decl_assign</a>  { <font color="purple"><b>,</b></font> <a href="#clocking_decl_assign">clocking_decl_assign</a>  }  
  
**clocking_decl_assign**{: #clocking_decl_assign }
:	<a href="#signal_identifier">signal_identifier</a>  \[ <font color="purple"><b>=</b></font> <a href="#expression">expression</a>  ]  
  
**clocking_skew**{: #clocking_skew }
:	<a href="#edge_identifier">edge_identifier</a>  \[ <a href="#delay_control">delay_control</a>  ]    
        | <a href="#delay_control">delay_control</a> 
  
**clocking_drive**{: #clocking_drive }
:	<a href="#clockvar_expression">clockvar_expression</a> <font color="purple"><b><=</b></font>  \[ <a href="#cycle_delay">cycle_delay</a>  ]  <a href="#expression">expression</a> 
  
**cycle_delay**{: #cycle_delay }
:	<font color="purple"><b>##</b></font> <a href="#integral_number">integral_number</a>   
        | <font color="purple"><b>##</b></font> <a href="#identifier">identifier</a>   
        | <font color="purple"><b>##</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> 
  
**clockvar**{: #clockvar }
:	<a href="#hierarchical_identifier">hierarchical_identifier</a> 
  
**clockvar_expression**{: #clockvar_expression }
:	<a href="#clockvar">clockvar</a> <a href="#select">select</a> 
  
### Randsequence
  
**randsequence_statement**{: #randsequence_statement }
:	<font color="purple"><b>randsequence</b></font> <font color="purple"><b>(</b></font>  \[ <a href="#production_identifier">production_identifier</a>  ]  <font color="purple"><b>)</b></font> <a href="#production">production</a>  { <a href="#production">production</a>  }  <font color="purple"><b>endsequence</b></font> 
  
**production**{: #production }
:	 \[ <a href="#data_type_or_void">data_type_or_void</a>  ]  <a href="#production_identifier">production_identifier</a>  \[ <font color="purple"><b>(</b></font> <a href="#tf_port_list">tf_port_list</a> <font color="purple"><b>)</b></font>  ]  <font color="purple"><b>:</b></font> <a href="#rs_rule">rs_rule</a>  { <font color="purple"><b>|</b></font> <a href="#rs_rule">rs_rule</a>  }  <font color="purple"><b>;</b></font> 
  
**rs_rule**{: #rs_rule }
:	<a href="#rs_production_list">rs_production_list</a>  \[ <font color="purple"><b>:=</b></font> <a href="#weight_specification">weight_specification</a>  \[ <a href="#rs_code_block">rs_code_block</a>  ]   ]  
  
**rs_production_list**{: #rs_production_list }
:	<a href="#rs_prod">rs_prod</a>  { <a href="#rs_prod">rs_prod</a>  }    
        | <font color="purple"><b>rand</b></font> <font color="purple"><b>join</b></font>  \[ <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font>  ]  <a href="#production_item">production_item</a> <a href="#production_item">production_item</a>  { <a href="#production_item">production_item</a>  }  
  
**weight_specification**{: #weight_specification }
:	<a href="#integral_number">integral_number</a>   
        | <a href="#ps_identifier">ps_identifier</a> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> 
  
**rs_code_block**{: #rs_code_block }
:	<font color="purple"><b>{</b></font>  { <a href="#data_declaration">data_declaration</a>  }   { <a href="#statement_or_null">statement_or_null</a>  }  <font color="purple"><b>}</b></font> 
  
**rs_prod**{: #rs_prod }
:	<a href="#production_item">production_item</a>   
        | <a href="#rs_code_block">rs_code_block</a>   
        | <a href="#rs_if_else">rs_if_else</a>   
        | <a href="#rs_repeat">rs_repeat</a>   
        | <a href="#rs_case">rs_case</a> 
  
**production_item**{: #production_item }
:	<a href="#production_identifier">production_identifier</a>  \[ <font color="purple"><b>(</b></font> <a href="#list_of_arguments">list_of_arguments</a> <font color="purple"><b>)</b></font>  ]  
  
**rs_if_else**{: #rs_if_else }
:	<font color="purple"><b>if</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#production_item">production_item</a>  \[ <font color="purple"><b>else</b></font> <a href="#production_item">production_item</a>  ]  
  
**rs_repeat**{: #rs_repeat }
:	<font color="purple"><b>repeat</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#production_item">production_item</a> 
  
**rs_case**{: #rs_case }
:	<font color="purple"><b>case</b></font> <font color="purple"><b>(</b></font> <a href="#case_expression">case_expression</a> <font color="purple"><b>)</b></font> <a href="#rs_case_item">rs_case_item</a>  { <a href="#rs_case_item">rs_case_item</a>  }  <font color="purple"><b>endcase</b></font> 
  
**rs_case_item**{: #rs_case_item }
:	<a href="#case_item_expression">case_item_expression</a>  { <font color="purple"><b>,</b></font> <a href="#case_item_expression">case_item_expression</a>  }  <font color="purple"><b>:</b></font> <a href="#production_item">production_item</a> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>default</b></font>  \[ <font color="purple"><b>:</b></font>  ]  <a href="#production_item">production_item</a> <font color="purple"><b>;</b></font> 
  
## Specify section
  
### Specify block declaration
  
**specify_block**{: #specify_block }
:	<font color="purple"><b>specify</b></font>  { <a href="#specify_item">specify_item</a>  }  <font color="purple"><b>endspecify</b></font> 
  
**specify_item**{: #specify_item }
:	<a href="#specparam_declaration">specparam_declaration</a>   
        | <a href="#pulsestyle_declaration">pulsestyle_declaration</a>   
        | <a href="#showcancelled_declaration">showcancelled_declaration</a>   
        | <a href="#path_declaration">path_declaration</a>   
        | <a href="#system_timing_check">system_timing_check</a> 
  
**pulsestyle_declaration**{: #pulsestyle_declaration }
:	<font color="purple"><b>pulsestyle_onevent</b></font> <a href="#list_of_path_outputs">list_of_path_outputs</a> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>pulsestyle_ondetect</b></font> <a href="#list_of_path_outputs">list_of_path_outputs</a> <font color="purple"><b>;</b></font> 
  
**showcancelled_declaration**{: #showcancelled_declaration }
:	<font color="purple"><b>showcancelled</b></font> <a href="#list_of_path_outputs">list_of_path_outputs</a> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>noshowcancelled</b></font> <a href="#list_of_path_outputs">list_of_path_outputs</a> <font color="purple"><b>;</b></font> 
  
### Specify path declarations
  
**path_declaration**{: #path_declaration }
:	<a href="#simple_path_declaration">simple_path_declaration</a> <font color="purple"><b>;</b></font>   
        | <a href="#edge_sensitive_path_declaration">edge_sensitive_path_declaration</a> <font color="purple"><b>;</b></font>   
        | <a href="#state_dependent_path_declaration">state_dependent_path_declaration</a> <font color="purple"><b>;</b></font> 
  
**simple_path_declaration**{: #simple_path_declaration }
:	<a href="#parallel_path_description">parallel_path_description</a> <font color="purple"><b>=</b></font> <a href="#path_delay_value">path_delay_value</a>   
        | <a href="#full_path_description">full_path_description</a> <font color="purple"><b>=</b></font> <a href="#path_delay_value">path_delay_value</a> 
  
**parallel_path_description**{: #parallel_path_description }
:	<font color="purple"><b>(</b></font> <a href="#specify_input_terminal_descriptor">specify_input_terminal_descriptor</a>  \[ <a href="#polarity_operator">polarity_operator</a>  ]  <font color="purple"><b>=></b></font> <a href="#specify_output_terminal_descriptor">specify_output_terminal_descriptor</a> <font color="purple"><b>)</b></font> 
  
**full_path_description**{: #full_path_description }
:	<font color="purple"><b>(</b></font> <a href="#list_of_path_inputs">list_of_path_inputs</a>  \[ <a href="#polarity_operator">polarity_operator</a>  ]  <font color="purple"><b>\*></b></font> <a href="#list_of_path_outputs">list_of_path_outputs</a> <font color="purple"><b>)</b></font> 
  
**list_of_path_inputs**{: #list_of_path_inputs }
:	<a href="#specify_input_terminal_descriptor">specify_input_terminal_descriptor</a>  { <font color="purple"><b>,</b></font> <a href="#specify_input_terminal_descriptor">specify_input_terminal_descriptor</a>  }  
  
**list_of_path_outputs**{: #list_of_path_outputs }
:	<a href="#specify_output_terminal_descriptor">specify_output_terminal_descriptor</a>  { <font color="purple"><b>,</b></font> <a href="#specify_output_terminal_descriptor">specify_output_terminal_descriptor</a>  }  
  
### Specify block terminals
  
**specify_input_terminal_descriptor**{: #specify_input_terminal_descriptor }
:	<a href="#input_identifier">input_identifier</a>  \[ <font color="purple"><b>\[</b></font> <a href="#constant_range_expression">constant_range_expression</a> <font color="purple"><b>]</b></font>  ]  
  
**specify_output_terminal_descriptor**{: #specify_output_terminal_descriptor }
:	<a href="#output_identifier">output_identifier</a>  \[ <font color="purple"><b>\[</b></font> <a href="#constant_range_expression">constant_range_expression</a> <font color="purple"><b>]</b></font>  ]  
  
**input_identifier**{: #input_identifier }
:	<a href="#input_port_identifier">input_port_identifier</a>   
        | <a href="#inout_port_identifier">inout_port_identifier</a>   
        | <a href="#interface_identifier">interface_identifier</a> <font color="purple"><b>.</b></font> <a href="#port_identifier">port_identifier</a> 
  
**output_identifier**{: #output_identifier }
:	<a href="#output_port_identifier">output_port_identifier</a>   
        | <a href="#inout_port_identifier">inout_port_identifier</a>   
        | <a href="#interface_identifier">interface_identifier</a> <font color="purple"><b>.</b></font> <a href="#port_identifier">port_identifier</a> 
  
### Specify path delays
  
**path_delay_value**{: #path_delay_value }
:	<a href="#list_of_path_delay_expressions">list_of_path_delay_expressions</a>   
        | <font color="purple"><b>(</b></font> <a href="#list_of_path_delay_expressions">list_of_path_delay_expressions</a> <font color="purple"><b>)</b></font> 
  
**list_of_path_delay_expressions**{: #list_of_path_delay_expressions }
:	<a href="#t_path_delay_expression">t_path_delay_expression</a>   
        | <a href="#trise_path_delay_expression">trise_path_delay_expression</a> <font color="purple"><b>,</b></font> <a href="#tfall_path_delay_expression">tfall_path_delay_expression</a>   
        | <a href="#trise_path_delay_expression">trise_path_delay_expression</a> <font color="purple"><b>,</b></font> <a href="#tfall_path_delay_expression">tfall_path_delay_expression</a> <font color="purple"><b>,</b></font> <a href="#tz_path_delay_expression">tz_path_delay_expression</a>   
        | <a href="#t01_path_delay_expression">t01_path_delay_expression</a> <font color="purple"><b>,</b></font> <a href="#t10_path_delay_expression">t10_path_delay_expression</a> <font color="purple"><b>,</b></font> <a href="#t0z_path_delay_expression">t0z_path_delay_expression</a> <font color="purple"><b>,</b></font> <a href="#tz1_path_delay_expression">tz1_path_delay_expression</a> <font color="purple"><b>,</b></font> <a href="#t1z_path_delay_expression">t1z_path_delay_expression</a> <font color="purple"><b>,</b></font> <a href="#tz0_path_delay_expression">tz0_path_delay_expression</a>   
        | <a href="#t01_path_delay_expression">t01_path_delay_expression</a> <font color="purple"><b>,</b></font> <a href="#t10_path_delay_expression">t10_path_delay_expression</a> <font color="purple"><b>,</b></font> <a href="#t0z_path_delay_expression">t0z_path_delay_expression</a> <font color="purple"><b>,</b></font> <a href="#tz1_path_delay_expression">tz1_path_delay_expression</a> <font color="purple"><b>,</b></font> <a href="#t1z_path_delay_expression">t1z_path_delay_expression</a> <font color="purple"><b>,</b></font> <a href="#tz0_path_delay_expression">tz0_path_delay_expression</a> <font color="purple"><b>,</b></font> <a href="#t0x_path_delay_expression">t0x_path_delay_expression</a> <font color="purple"><b>,</b></font> <a href="#tx1_path_delay_expression">tx1_path_delay_expression</a> <font color="purple"><b>,</b></font> <a href="#t1x_path_delay_expression">t1x_path_delay_expression</a> <font color="purple"><b>,</b></font> <a href="#tx0_path_delay_expression">tx0_path_delay_expression</a> <font color="purple"><b>,</b></font> <a href="#txz_path_delay_expression">txz_path_delay_expression</a> <font color="purple"><b>,</b></font> <a href="#tzx_path_delay_expression">tzx_path_delay_expression</a> 
  
**t_path_delay_expression**{: #t_path_delay_expression }
:	<a href="#path_delay_expression">path_delay_expression</a> 
  
**trise_path_delay_expression**{: #trise_path_delay_expression }
:	<a href="#path_delay_expression">path_delay_expression</a> 
  
**tfall_path_delay_expression**{: #tfall_path_delay_expression }
:	<a href="#path_delay_expression">path_delay_expression</a> 
  
**tz_path_delay_expression**{: #tz_path_delay_expression }
:	<a href="#path_delay_expression">path_delay_expression</a> 
  
**t01_path_delay_expression**{: #t01_path_delay_expression }
:	<a href="#path_delay_expression">path_delay_expression</a> 
  
**t10_path_delay_expression**{: #t10_path_delay_expression }
:	<a href="#path_delay_expression">path_delay_expression</a> 
  
**t0z_path_delay_expression**{: #t0z_path_delay_expression }
:	<a href="#path_delay_expression">path_delay_expression</a> 
  
**tz1_path_delay_expression**{: #tz1_path_delay_expression }
:	<a href="#path_delay_expression">path_delay_expression</a> 
  
**t1z_path_delay_expression**{: #t1z_path_delay_expression }
:	<a href="#path_delay_expression">path_delay_expression</a> 
  
**tz0_path_delay_expression**{: #tz0_path_delay_expression }
:	<a href="#path_delay_expression">path_delay_expression</a> 
  
**t0x_path_delay_expression**{: #t0x_path_delay_expression }
:	<a href="#path_delay_expression">path_delay_expression</a> 
  
**tx1_path_delay_expression**{: #tx1_path_delay_expression }
:	<a href="#path_delay_expression">path_delay_expression</a> 
  
**t1x_path_delay_expression**{: #t1x_path_delay_expression }
:	<a href="#path_delay_expression">path_delay_expression</a> 
  
**tx0_path_delay_expression**{: #tx0_path_delay_expression }
:	<a href="#path_delay_expression">path_delay_expression</a> 
  
**txz_path_delay_expression**{: #txz_path_delay_expression }
:	<a href="#path_delay_expression">path_delay_expression</a> 
  
**tzx_path_delay_expression**{: #tzx_path_delay_expression }
:	<a href="#path_delay_expression">path_delay_expression</a> 
  
**path_delay_expression**{: #path_delay_expression }
:	<a href="#constant_mintypmax_expression">constant_mintypmax_expression</a> 
  
**edge_sensitive_path_declaration**{: #edge_sensitive_path_declaration }
:	<a href="#parallel_edge_sensitive_path_description">parallel_edge_sensitive_path_description</a> <font color="purple"><b>=</b></font> <a href="#path_delay_value">path_delay_value</a>   
        | <a href="#full_edge_sensitive_path_description">full_edge_sensitive_path_description</a> <font color="purple"><b>=</b></font> <a href="#path_delay_value">path_delay_value</a> 
  
**parallel_edge_sensitive_path_description**{: #parallel_edge_sensitive_path_description }
:	<font color="purple"><b>(</b></font>  \[ <a href="#edge_identifier">edge_identifier</a>  ]  <a href="#specify_input_terminal_descriptor">specify_input_terminal_descriptor</a>  \[ <a href="#polarity_operator">polarity_operator</a>  ]  <font color="purple"><b>=></b></font> <font color="purple"><b>(</b></font> <a href="#specify_output_terminal_descriptor">specify_output_terminal_descriptor</a>  \[ <a href="#polarity_operator">polarity_operator</a>  ]  <font color="purple"><b>:</b></font> <a href="#data_source_expression">data_source_expression</a> <font color="purple"><b>)</b></font> <font color="purple"><b>)</b></font> 
  
**full_edge_sensitive_path_description**{: #full_edge_sensitive_path_description }
:	<font color="purple"><b>(</b></font>  \[ <a href="#edge_identifier">edge_identifier</a>  ]  <a href="#list_of_path_inputs">list_of_path_inputs</a>  \[ <a href="#polarity_operator">polarity_operator</a>  ]  <font color="purple"><b>\*></b></font> <font color="purple"><b>(</b></font> <a href="#list_of_path_outputs">list_of_path_outputs</a>  \[ <a href="#polarity_operator">polarity_operator</a>  ]  <font color="purple"><b>:</b></font> <a href="#data_source_expression">data_source_expression</a> <font color="purple"><b>)</b></font> <font color="purple"><b>)</b></font> 
  
**data_source_expression**{: #data_source_expression }
:	<a href="#expression">expression</a> 
  
**edge_identifier**{: #edge_identifier }
:	<font color="purple"><b>posedge</b></font>   
        | <font color="purple"><b>negedge</b></font>   
        | <font color="purple"><b>edge</b></font> 
  
**state_dependent_path_declaration**{: #state_dependent_path_declaration }
:	<font color="purple"><b>if</b></font> <font color="purple"><b>(</b></font> <a href="#module_path_expression">module_path_expression</a> <font color="purple"><b>)</b></font> <a href="#simple_path_declaration">simple_path_declaration</a>   
        | <font color="purple"><b>if</b></font> <font color="purple"><b>(</b></font> <a href="#module_path_expression">module_path_expression</a> <font color="purple"><b>)</b></font> <a href="#edge_sensitive_path_declaration">edge_sensitive_path_declaration</a>   
        | <font color="purple"><b>ifnone</b></font> <a href="#simple_path_declaration">simple_path_declaration</a> 
  
**polarity_operator**{: #polarity_operator }
:	<font color="purple"><b>+</b></font>   
        | <font color="purple"><b>-</b></font> 
  
### System timing checks
  
#### System timing check commands
  
**system_timing_check**{: #system_timing_check }
:	<a href="#setup_timing_check">setup_timing_check</a>   
        | <a href="#hold_timing_check">hold_timing_check</a>   
        | <a href="#setuphold_timing_check">setuphold_timing_check</a>   
        | <a href="#recovery_timing_check">recovery_timing_check</a>   
        | <a href="#removal_timing_check">removal_timing_check</a>   
        | <a href="#recrem_timing_check">recrem_timing_check</a>   
        | <a href="#skew_timing_check">skew_timing_check</a>   
        | <a href="#timeskew_timing_check">timeskew_timing_check</a>   
        | <a href="#fullskew_timing_check">fullskew_timing_check</a>   
        | <a href="#period_timing_check">period_timing_check</a>   
        | <a href="#width_timing_check">width_timing_check</a>   
        | <a href="#nochange_timing_check">nochange_timing_check</a> 
  
**setup_timing_check**{: #setup_timing_check }
:	<font color="purple"><b>$setup</b></font> <font color="purple"><b>(</b></font> <a href="#data_event">data_event</a> <font color="purple"><b>,</b></font> <a href="#reference_event">reference_event</a> <font color="purple"><b>,</b></font> <a href="#timing_check_limit">timing_check_limit</a>  \[ <font color="purple"><b>,</b></font>  \[ <a href="#notifier">notifier</a>  ]   ]  <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font> 
  
**hold_timing_check**{: #hold_timing_check }
:	<font color="purple"><b>$hold</b></font> <font color="purple"><b>(</b></font> <a href="#reference_event">reference_event</a> <font color="purple"><b>,</b></font> <a href="#data_event">data_event</a> <font color="purple"><b>,</b></font> <a href="#timing_check_limit">timing_check_limit</a>  \[ <font color="purple"><b>,</b></font>  \[ <a href="#notifier">notifier</a>  ]   ]  <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font> 
  
**setuphold_timing_check**{: #setuphold_timing_check }
:	<font color="purple"><b>$setuphold</b></font> <font color="purple"><b>(</b></font> <a href="#reference_event">reference_event</a> <font color="purple"><b>,</b></font> <a href="#data_event">data_event</a> <font color="purple"><b>,</b></font> <a href="#timing_check_limit">timing_check_limit</a> <font color="purple"><b>,</b></font> <a href="#timing_check_limit">timing_check_limit</a>  \[ <font color="purple"><b>,</b></font>  \[ <a href="#notifier">notifier</a>  ]   \[ <font color="purple"><b>,</b></font>  \[ <a href="#timestamp_condition">timestamp_condition</a>  ]   \[ <font color="purple"><b>,</b></font>  \[ <a href="#timecheck_condition">timecheck_condition</a>  ]   \[ <font color="purple"><b>,</b></font>  \[ <a href="#delayed_reference">delayed_reference</a>  ]   \[ <font color="purple"><b>,</b></font>  \[ <a href="#delayed_data">delayed_data</a>  ]   ]   ]   ]   ]   ]  <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font> 
  
**recovery_timing_check**{: #recovery_timing_check }
:	<font color="purple"><b>$recovery</b></font> <font color="purple"><b>(</b></font> <a href="#reference_event">reference_event</a> <font color="purple"><b>,</b></font> <a href="#data_event">data_event</a> <font color="purple"><b>,</b></font> <a href="#timing_check_limit">timing_check_limit</a>  \[ <font color="purple"><b>,</b></font>  \[ <a href="#notifier">notifier</a>  ]   ]  <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font> 
  
**removal_timing_check**{: #removal_timing_check }
:	<font color="purple"><b>$removal</b></font> <font color="purple"><b>(</b></font> <a href="#reference_event">reference_event</a> <font color="purple"><b>,</b></font> <a href="#data_event">data_event</a> <font color="purple"><b>,</b></font> <a href="#timing_check_limit">timing_check_limit</a>  \[ <font color="purple"><b>,</b></font>  \[ <a href="#notifier">notifier</a>  ]   ]  <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font> 
  
**recrem_timing_check**{: #recrem_timing_check }
:	<font color="purple"><b>$recrem</b></font> <font color="purple"><b>(</b></font> <a href="#reference_event">reference_event</a> <font color="purple"><b>,</b></font> <a href="#data_event">data_event</a> <font color="purple"><b>,</b></font> <a href="#timing_check_limit">timing_check_limit</a> <font color="purple"><b>,</b></font> <a href="#timing_check_limit">timing_check_limit</a>  \[ <font color="purple"><b>,</b></font>  \[ <a href="#notifier">notifier</a>  ]   \[ <font color="purple"><b>,</b></font>  \[ <a href="#timestamp_condition">timestamp_condition</a>  ]   \[ <font color="purple"><b>,</b></font>  \[ <a href="#timecheck_condition">timecheck_condition</a>  ]   \[ <font color="purple"><b>,</b></font>  \[ <a href="#delayed_reference">delayed_reference</a>  ]   \[ <font color="purple"><b>,</b></font>  \[ <a href="#delayed_data">delayed_data</a>  ]   ]   ]   ]   ]   ]  <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font> 
  
**skew_timing_check**{: #skew_timing_check }
:	<font color="purple"><b>$skew</b></font> <font color="purple"><b>(</b></font> <a href="#reference_event">reference_event</a> <font color="purple"><b>,</b></font> <a href="#data_event">data_event</a> <font color="purple"><b>,</b></font> <a href="#timing_check_limit">timing_check_limit</a>  \[ <font color="purple"><b>,</b></font>  \[ <a href="#notifier">notifier</a>  ]   ]  <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font> 
  
**timeskew_timing_check**{: #timeskew_timing_check }
:	<font color="purple"><b>$timeskew</b></font> <font color="purple"><b>(</b></font> <a href="#reference_event">reference_event</a> <font color="purple"><b>,</b></font> <a href="#data_event">data_event</a> <font color="purple"><b>,</b></font> <a href="#timing_check_limit">timing_check_limit</a>  \[ <font color="purple"><b>,</b></font>  \[ <a href="#notifier">notifier</a>  ]   \[ <font color="purple"><b>,</b></font>  \[ <a href="#event_based_flag">event_based_flag</a>  ]   \[ <font color="purple"><b>,</b></font>  \[ <a href="#remain_active_flag">remain_active_flag</a>  ]   ]   ]   ]  <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font> 
  
**fullskew_timing_check**{: #fullskew_timing_check }
:	<font color="purple"><b>$fullskew</b></font> <font color="purple"><b>(</b></font> <a href="#reference_event">reference_event</a> <font color="purple"><b>,</b></font> <a href="#data_event">data_event</a> <font color="purple"><b>,</b></font> <a href="#timing_check_limit">timing_check_limit</a> <font color="purple"><b>,</b></font> <a href="#timing_check_limit">timing_check_limit</a>  \[ <font color="purple"><b>,</b></font>  \[ <a href="#notifier">notifier</a>  ]   \[ <font color="purple"><b>,</b></font>  \[ <a href="#event_based_flag">event_based_flag</a>  ]   \[ <font color="purple"><b>,</b></font>  \[ <a href="#remain_active_flag">remain_active_flag</a>  ]   ]   ]   ]  <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font> 
  
**period_timing_check**{: #period_timing_check }
:	<font color="purple"><b>$period</b></font> <font color="purple"><b>(</b></font> <a href="#controlled_reference_event">controlled_reference_event</a> <font color="purple"><b>,</b></font> <a href="#timing_check_limit">timing_check_limit</a>  \[ <font color="purple"><b>,</b></font>  \[ <a href="#notifier">notifier</a>  ]   ]  <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font> 
  
**width_timing_check**{: #width_timing_check }
:	<font color="purple"><b>$width</b></font> <font color="purple"><b>(</b></font> <a href="#controlled_reference_event">controlled_reference_event</a> <font color="purple"><b>,</b></font> <a href="#timing_check_limit">timing_check_limit</a> <font color="purple"><b>,</b></font> <a href="#threshold">threshold</a>  \[ <font color="purple"><b>,</b></font>  \[ <a href="#notifier">notifier</a>  ]   ]  <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font> 
  
**nochange_timing_check**{: #nochange_timing_check }
:	<font color="purple"><b>$nochange</b></font> <font color="purple"><b>(</b></font> <a href="#reference_event">reference_event</a> <font color="purple"><b>,</b></font> <a href="#data_event">data_event</a> <font color="purple"><b>,</b></font> <a href="#start_edge_offset">start_edge_offset</a> <font color="purple"><b>,</b></font> <a href="#end_edge_offset">end_edge_offset</a>  \[ <font color="purple"><b>,</b></font>  \[ <a href="#notifier">notifier</a>  ]   ]  <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font> 
  
#### System timing check command arguments
  
**timecheck_condition**{: #timecheck_condition }
:	<a href="#mintypmax_expression">mintypmax_expression</a> 
  
**controlled_reference_event**{: #controlled_reference_event }
:	<a href="#controlled_timing_check_event">controlled_timing_check_event</a> 
  
**data_event**{: #data_event }
:	<a href="#timing_check_event">timing_check_event</a> 
  
**delayed_data**{: #delayed_data }
:	<a href="#terminal_identifier">terminal_identifier</a>   
        | <a href="#terminal_identifier">terminal_identifier</a> <font color="purple"><b>\[</b></font> <a href="#constant_mintypmax_expression">constant_mintypmax_expression</a> <font color="purple"><b>]</b></font> 
  
**delayed_reference**{: #delayed_reference }
:	<a href="#terminal_identifier">terminal_identifier</a>   
        | <a href="#terminal_identifier">terminal_identifier</a> <font color="purple"><b>\[</b></font> <a href="#constant_mintypmax_expression">constant_mintypmax_expression</a> <font color="purple"><b>]</b></font> 
  
**end_edge_offset**{: #end_edge_offset }
:	<a href="#mintypmax_expression">mintypmax_expression</a> 
  
**event_based_flag**{: #event_based_flag }
:	<a href="#constant_expression">constant_expression</a> 
  
**notifier**{: #notifier }
:	<a href="#variable_identifier">variable_identifier</a> 
  
**reference_event**{: #reference_event }
:	<a href="#timing_check_event">timing_check_event</a> 
  
**remain_active_flag**{: #remain_active_flag }
:	<a href="#constant_mintypmax_expression">constant_mintypmax_expression</a> 
  
**timestamp_condition**{: #timestamp_condition }
:	<a href="#mintypmax_expression">mintypmax_expression</a> 
  
**start_edge_offset**{: #start_edge_offset }
:	<a href="#mintypmax_expression">mintypmax_expression</a> 
  
**threshold**{: #threshold }
:	<a href="#constant_expression">constant_expression</a> 
  
**timing_check_limit**{: #timing_check_limit }
:	<a href="#expression">expression</a> 
  
#### System timing check event definitions
  
**timing_check_event**{: #timing_check_event }
:	 \[ <a href="#timing_check_event_control">timing_check_event_control</a>  ]  <a href="#specify_terminal_descriptor">specify_terminal_descriptor</a>  \[ <font color="purple"><b>&&&</b></font> <a href="#timing_check_condition">timing_check_condition</a>  ]  
  
**controlled_timing_check_event**{: #controlled_timing_check_event }
:	<a href="#timing_check_event_control">timing_check_event_control</a> <a href="#specify_terminal_descriptor">specify_terminal_descriptor</a>  \[ <font color="purple"><b>&&&</b></font> <a href="#timing_check_condition">timing_check_condition</a>  ]  
  
**timing_check_event_control**{: #timing_check_event_control }
:	<font color="purple"><b>posedge</b></font>   
        | <font color="purple"><b>negedge</b></font>   
        | <font color="purple"><b>edge</b></font>   
        | <a href="#edge_control_specifier">edge_control_specifier</a> 
  
**specify_terminal_descriptor**{: #specify_terminal_descriptor }
:	<a href="#specify_input_terminal_descriptor">specify_input_terminal_descriptor</a>   
        | <a href="#specify_output_terminal_descriptor">specify_output_terminal_descriptor</a> 
  
**edge_control_specifier**{: #edge_control_specifier }
:	<font color="purple"><b>edge</b></font> <font color="purple"><b>\[</b></font> <a href="#edge_descriptor">edge_descriptor</a>  { <font color="purple"><b>,</b></font> <a href="#edge_descriptor">edge_descriptor</a>  }  <font color="purple"><b>]</b></font> 
  
**edge_descriptor**{: #edge_descriptor }[^footnote_33]
:	<font color="purple"><b>01</b></font>   
        | <font color="purple"><b>10</b></font>   
        | <a href="#z_or_x">z_or_x</a> <a href="#zero_or_one">zero_or_one</a>   
        | <a href="#zero_or_one">zero_or_one</a> <a href="#z_or_x">z_or_x</a> 
  
**zero_or_one**{: #zero_or_one }
:	<font color="purple"><b>0</b></font>   
        | <font color="purple"><b>1</b></font> 
  
**z_or_x**{: #z_or_x }
:	<font color="purple"><b>x</b></font>   
        | <font color="purple"><b>X</b></font>   
        | <font color="purple"><b>z</b></font>   
        | <font color="purple"><b>Z</b></font> 
  
**timing_check_condition**{: #timing_check_condition }
:	<a href="#scalar_timing_check_condition">scalar_timing_check_condition</a>   
        | <font color="purple"><b>(</b></font> <a href="#scalar_timing_check_condition">scalar_timing_check_condition</a> <font color="purple"><b>)</b></font> 
  
**scalar_timing_check_condition**{: #scalar_timing_check_condition }
:	<a href="#expression">expression</a>   
        | <font color="purple"><b>~</b></font> <a href="#expression">expression</a>   
        | <a href="#expression">expression</a> <font color="purple"><b>==</b></font> <a href="#scalar_constant">scalar_constant</a>   
        | <a href="#expression">expression</a> <font color="purple"><b>===</b></font> <a href="#scalar_constant">scalar_constant</a>   
        | <a href="#expression">expression</a> <font color="purple"><b>!=</b></font> <a href="#scalar_constant">scalar_constant</a>   
        | <a href="#expression">expression</a> <font color="purple"><b>!==</b></font> <a href="#scalar_constant">scalar_constant</a> 
  
**scalar_constant**{: #scalar_constant }
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
  
**constant_concatenation**{: #constant_concatenation }
:	<font color="purple"><b>{</b></font> <a href="#constant_expression">constant_expression</a>  { <font color="purple"><b>,</b></font> <a href="#constant_expression">constant_expression</a>  }  <font color="purple"><b>}</b></font> 
  
**constant_multiple_concatenation**{: #constant_multiple_concatenation }
:	<font color="purple"><b>{</b></font> <a href="#constant_expression">constant_expression</a> <a href="#constant_concatenation">constant_concatenation</a> <font color="purple"><b>}</b></font> 
  
**module_path_concatenation**{: #module_path_concatenation }
:	<font color="purple"><b>{</b></font> <a href="#module_path_expression">module_path_expression</a>  { <font color="purple"><b>,</b></font> <a href="#module_path_expression">module_path_expression</a>  }  <font color="purple"><b>}</b></font> 
  
**module_path_multiple_concatenation**{: #module_path_multiple_concatenation }
:	<font color="purple"><b>{</b></font> <a href="#constant_expression">constant_expression</a> <a href="#module_path_concatenation">module_path_concatenation</a> <font color="purple"><b>}</b></font> 
  
**multiple_concatenation**{: #multiple_concatenation }
:	<font color="purple"><b>{</b></font> <a href="#expression">expression</a> <a href="#concatenation">concatenation</a> <font color="purple"><b>}</b></font> [^footnote_34] 
  
**streaming_concatenation**{: #streaming_concatenation }
:	<font color="purple"><b>{</b></font> <a href="#stream_operator">stream_operator</a>  \[ <a href="#slice_size">slice_size</a>  ]  <a href="#stream_concatenation">stream_concatenation</a> <font color="purple"><b>}</b></font> 
  
**stream_operator**{: #stream_operator }
:	<font color="purple"><b>>></b></font>   
        | <font color="purple"><b><<</b></font> 
  
**slice_size**{: #slice_size }
:	<a href="#simple_type">simple_type</a>   
        | <a href="#constant_expression">constant_expression</a> 
  
**stream_concatenation**{: #stream_concatenation }
:	<font color="purple"><b>{</b></font> <a href="#stream_expression">stream_expression</a>  { <font color="purple"><b>,</b></font> <a href="#stream_expression">stream_expression</a>  }  <font color="purple"><b>}</b></font> 
  
**stream_expression**{: #stream_expression }
:	<a href="#expression">expression</a>  \[ <font color="purple"><b>with</b></font> <font color="purple"><b>\[</b></font> <a href="#array_range_expression">array_range_expression</a> <font color="purple"><b>]</b></font>  ]  
  
**array_range_expression**{: #array_range_expression }
:	<a href="#expression">expression</a>   
        | <a href="#expression">expression</a> <font color="purple"><b>:</b></font> <a href="#expression">expression</a>   
        | <a href="#expression">expression</a> <font color="purple"><b>+:</b></font> <a href="#expression">expression</a>   
        | <a href="#expression">expression</a> <font color="purple"><b>-:</b></font> <a href="#expression">expression</a> 
  
**empty_queue**{: #empty_queue }[^footnote_35]
:	<font color="purple"><b>{</b></font> <font color="purple"><b>}</b></font> 
  
### Subroutine calls
  
**constant_function_call**{: #constant_function_call }
:	<a href="#function_subroutine_call">function_subroutine_call</a> [^footnote_36] 
  
**tf_call**{: #tf_call }[^footnote_37]
:	<a href="#ps_or_hierarchical_tf_identifier">ps_or_hierarchical_tf_identifier</a>  { <a href="#attribute_instance">attribute_instance</a>  }   \[ <font color="purple"><b>(</b></font> <a href="#list_of_arguments">list_of_arguments</a> <font color="purple"><b>)</b></font>  ]  
  
**system_tf_call**{: #system_tf_call }
:	<a href="#system_tf_identifier">system_tf_identifier</a>  \[ <font color="purple"><b>(</b></font> <a href="#list_of_arguments">list_of_arguments</a> <font color="purple"><b>)</b></font>  ]    
        | <a href="#system_tf_identifier">system_tf_identifier</a> <font color="purple"><b>(</b></font> <a href="#data_type">data_type</a>  \[ <font color="purple"><b>,</b></font> <a href="#expression">expression</a>  ]  <font color="purple"><b>)</b></font> 
  
**subroutine_call**{: #subroutine_call }
:	<a href="#tf_call">tf_call</a>   
        | <a href="#system_tf_call">system_tf_call</a>   
        | <a href="#method_call">method_call</a>   
        |  \[ <font color="purple"><b>std::</b></font>  ]  <a href="#randomize_call">randomize_call</a> 
  
**function_subroutine_call**{: #function_subroutine_call }
:	<a href="#subroutine_call">subroutine_call</a> 
  
**list_of_arguments**{: #list_of_arguments }
:	 \[ <a href="#expression">expression</a>  ]   { <font color="purple"><b>,</b></font>  \[ <a href="#expression">expression</a>  ]   }   { <font color="purple"><b>,</b></font> <font color="purple"><b>.</b></font> <a href="#identifier">identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#expression">expression</a>  ]  <font color="purple"><b>)</b></font>  }    
        | <font color="purple"><b>.</b></font> <a href="#identifier">identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#expression">expression</a>  ]  <font color="purple"><b>)</b></font>  { <font color="purple"><b>,</b></font> <font color="purple"><b>.</b></font> <a href="#identifier">identifier</a> <font color="purple"><b>(</b></font>  \[ <a href="#expression">expression</a>  ]  <font color="purple"><b>)</b></font>  }  
  
**method_call**{: #method_call }
:	<a href="#method_call_root">method_call_root</a> <font color="purple"><b>.</b></font> <a href="#method_call_body">method_call_body</a> 
  
**method_call_body**{: #method_call_body }
:	<a href="#method_identifier">method_identifier</a>  { <a href="#attribute_instance">attribute_instance</a>  }   \[ <font color="purple"><b>(</b></font> <a href="#list_of_arguments">list_of_arguments</a> <font color="purple"><b>)</b></font>  ]    
        | <a href="#built_in_method_call">built_in_method_call</a> 
  
**built_in_method_call**{: #built_in_method_call }
:	<a href="#array_manipulation_call">array_manipulation_call</a>   
        | <a href="#randomize_call">randomize_call</a> 
  
**array_manipulation_call**{: #array_manipulation_call }
:	<a href="#array_method_name">array_method_name</a>  { <a href="#attribute_instance">attribute_instance</a>  }   \[ <font color="purple"><b>(</b></font> <a href="#list_of_arguments">list_of_arguments</a> <font color="purple"><b>)</b></font>  ]   \[ <font color="purple"><b>with</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font>  ]  
  
**randomize_call**{: #randomize_call }
:	<font color="purple"><b>randomize</b></font>  { <a href="#attribute_instance">attribute_instance</a>  }   \[ <font color="purple"><b>(</b></font>  \[ <a href="#variable_identifier_list">variable_identifier_list</a>   
          | <font color="purple"><b>null</b></font>  ]  <font color="purple"><b>)</b></font>  ]   \[ <font color="purple"><b>with</b></font>  \[ <font color="purple"><b>(</b></font>  \[ <a href="#identifier_list">identifier_list</a>  ]  <font color="purple"><b>)</b></font>  ]  <a href="#constraint_block">constraint_block</a>  ]  [^footnote_38] 
  
**method_call_root**{: #method_call_root }
:	<a href="#primary">primary</a>   
        | <a href="#implicit_class_handle">implicit_class_handle</a> 
  
**array_method_name**{: #array_method_name }
:	<a href="#method_identifier">method_identifier</a>   
        | <font color="purple"><b>unique</b></font>   
        | <font color="purple"><b>and</b></font>   
        | <font color="purple"><b>or</b></font>   
        | <font color="purple"><b>xor</b></font> 
  
### Expressions
  
**inc_or_dec_expression**{: #inc_or_dec_expression }
:	<a href="#inc_or_dec_operator">inc_or_dec_operator</a>  { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#variable_lvalue">variable_lvalue</a>   
        | <a href="#variable_lvalue">variable_lvalue</a>  { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#inc_or_dec_operator">inc_or_dec_operator</a> 
  
**conditional_expression**{: #conditional_expression }
:	<a href="#cond_predicate">cond_predicate</a> <font color="purple"><b>?</b></font>  { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#expression">expression</a> <font color="purple"><b>:</b></font> <a href="#expression">expression</a> 
  
**constant_expression**{: #constant_expression }
:	<a href="#constant_primary">constant_primary</a>   
        | <a href="#unary_operator">unary_operator</a>  { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#constant_primary">constant_primary</a>   
        | <a href="#constant_expression">constant_expression</a> <a href="#binary_operator">binary_operator</a>  { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#constant_expression">constant_expression</a>   
        | <a href="#constant_expression">constant_expression</a> <font color="purple"><b>?</b></font>  { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#constant_expression">constant_expression</a> <font color="purple"><b>:</b></font> <a href="#constant_expression">constant_expression</a> 
  
**constant_mintypmax_expression**{: #constant_mintypmax_expression }
:	<a href="#constant_expression">constant_expression</a>   
        | <a href="#constant_expression">constant_expression</a> <font color="purple"><b>:</b></font> <a href="#constant_expression">constant_expression</a> <font color="purple"><b>:</b></font> <a href="#constant_expression">constant_expression</a> 
  
**constant_param_expression**{: #constant_param_expression }
:	<a href="#constant_mintypmax_expression">constant_mintypmax_expression</a>   
        | <a href="#data_type">data_type</a>   
        | <font color="purple"><b>$</b></font> 
  
**param_expression**{: #param_expression }
:	<a href="#mintypmax_expression">mintypmax_expression</a>   
        | <a href="#data_type">data_type</a>   
        | <font color="purple"><b>$</b></font> 
  
**constant_range_expression**{: #constant_range_expression }
:	<a href="#constant_expression">constant_expression</a>   
        | <a href="#constant_part_select_range">constant_part_select_range</a> 
  
**constant_part_select_range**{: #constant_part_select_range }
:	<a href="#constant_range">constant_range</a>   
        | <a href="#constant_indexed_range">constant_indexed_range</a> 
  
**constant_range**{: #constant_range }
:	<a href="#constant_expression">constant_expression</a> <font color="purple"><b>:</b></font> <a href="#constant_expression">constant_expression</a> 
  
**constant_indexed_range**{: #constant_indexed_range }
:	<a href="#constant_expression">constant_expression</a> <font color="purple"><b>+:</b></font> <a href="#constant_expression">constant_expression</a>   
        | <a href="#constant_expression">constant_expression</a> <font color="purple"><b>-:</b></font> <a href="#constant_expression">constant_expression</a> 
  
**expression**{: #expression }
:	<a href="#primary">primary</a>   
        | <a href="#unary_operator">unary_operator</a>  { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#primary">primary</a>   
        | <a href="#inc_or_dec_expression">inc_or_dec_expression</a>   
        | <font color="purple"><b>(</b></font> <a href="#operator_assignment">operator_assignment</a> <font color="purple"><b>)</b></font>   
        | <a href="#expression">expression</a> <a href="#binary_operator">binary_operator</a>  { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#expression">expression</a>   
        | <a href="#conditional_expression">conditional_expression</a>   
        | <a href="#inside_expression">inside_expression</a>   
        | <a href="#tagged_union_expression">tagged_union_expression</a> 
  
**tagged_union_expression**{: #tagged_union_expression }
:	<font color="purple"><b>tagged</b></font> <a href="#member_identifier">member_identifier</a>  \[ <a href="#expression">expression</a>  ]  
  
**inside_expression**{: #inside_expression }
:	<a href="#expression">expression</a> <font color="purple"><b>inside</b></font> <font color="purple"><b>{</b></font> <a href="#open_range_list">open_range_list</a> <font color="purple"><b>}</b></font> 
  
**value_range**{: #value_range }
:	<a href="#expression">expression</a>   
        | <font color="purple"><b>\[</b></font> <a href="#expression">expression</a> <font color="purple"><b>:</b></font> <a href="#expression">expression</a> <font color="purple"><b>]</b></font> 
  
**mintypmax_expression**{: #mintypmax_expression }
:	<a href="#expression">expression</a>   
        | <a href="#expression">expression</a> <font color="purple"><b>:</b></font> <a href="#expression">expression</a> <font color="purple"><b>:</b></font> <a href="#expression">expression</a> 
  
**module_path_conditional_expression**{: #module_path_conditional_expression }
:	<a href="#module_path_expression">module_path_expression</a> <font color="purple"><b>?</b></font>  { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#module_path_expression">module_path_expression</a> <font color="purple"><b>:</b></font> <a href="#module_path_expression">module_path_expression</a> 
  
**module_path_expression**{: #module_path_expression }
:	<a href="#module_path_primary">module_path_primary</a>   
        | <a href="#unary_module_path_operator">unary_module_path_operator</a>  { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#module_path_primary">module_path_primary</a>   
        | <a href="#module_path_expression">module_path_expression</a> <a href="#binary_module_path_operator">binary_module_path_operator</a>  { <a href="#attribute_instance">attribute_instance</a>  }  <a href="#module_path_expression">module_path_expression</a>   
        | <a href="#module_path_conditional_expression">module_path_conditional_expression</a> 
  
**module_path_mintypmax_expression**{: #module_path_mintypmax_expression }
:	<a href="#module_path_expression">module_path_expression</a>   
        | <a href="#module_path_expression">module_path_expression</a> <font color="purple"><b>:</b></font> <a href="#module_path_expression">module_path_expression</a> <font color="purple"><b>:</b></font> <a href="#module_path_expression">module_path_expression</a> 
  
**part_select_range**{: #part_select_range }
:	<a href="#constant_range">constant_range</a>   
        | <a href="#indexed_range">indexed_range</a> 
  
**indexed_range**{: #indexed_range }
:	<a href="#expression">expression</a> <font color="purple"><b>+:</b></font> <a href="#constant_expression">constant_expression</a>   
        | <a href="#expression">expression</a> <font color="purple"><b>-:</b></font> <a href="#constant_expression">constant_expression</a> 
  
**genvar_expression**{: #genvar_expression }
:	<a href="#constant_expression">constant_expression</a> 
  
### Primaries
  
**constant_primary**{: #constant_primary }
:	<a href="#primary_literal">primary_literal</a>   
        | <a href="#ps_parameter_identifier">ps_parameter_identifier</a> <a href="#constant_select">constant_select</a>   
        | <a href="#specparam_identifier">specparam_identifier</a>  \[ <font color="purple"><b>\[</b></font> <a href="#constant_range_expression">constant_range_expression</a> <font color="purple"><b>]</b></font>  ]    
        | <a href="#genvar_identifier">genvar_identifier</a> [^footnote_39]   
        | <a href="#formal_port_identifier">formal_port_identifier</a> <a href="#constant_select">constant_select</a>   
        |  \[ <a href="#package_scope">package_scope</a>   
         | <a href="#class_scope">class_scope</a>  ]  <a href="#enum_identifier">enum_identifier</a>   
        | <a href="#constant_concatenation">constant_concatenation</a>  \[ <font color="purple"><b>\[</b></font> <a href="#constant_range_expression">constant_range_expression</a> <font color="purple"><b>]</b></font>  ]    
        | <a href="#constant_multiple_concatenation">constant_multiple_concatenation</a>  \[ <font color="purple"><b>\[</b></font> <a href="#constant_range_expression">constant_range_expression</a> <font color="purple"><b>]</b></font>  ]    
        | <a href="#constant_function_call">constant_function_call</a>   
        | <a href="#constant_let_expression">constant_let_expression</a>   
        | <font color="purple"><b>(</b></font> <a href="#constant_mintypmax_expression">constant_mintypmax_expression</a> <font color="purple"><b>)</b></font>   
        | <a href="#constant_cast">constant_cast</a>   
        | <a href="#constant_assignment_pattern_expression">constant_assignment_pattern_expression</a>   
        | <a href="#type_reference">type_reference</a> [^footnote_40] 
  
**module_path_primary**{: #module_path_primary }
:	<a href="#number">number</a>   
        | <a href="#identifier">identifier</a>   
        | <a href="#module_path_concatenation">module_path_concatenation</a>   
        | <a href="#module_path_multiple_concatenation">module_path_multiple_concatenation</a>   
        | <a href="#function_subroutine_call">function_subroutine_call</a>   
        | <font color="purple"><b>(</b></font> <a href="#module_path_mintypmax_expression">module_path_mintypmax_expression</a> <font color="purple"><b>)</b></font> 
  
**primary**{: #primary }
:	<a href="#primary_literal">primary_literal</a>   
        |  \[ <a href="#class_qualifier">class_qualifier</a>   
         | <a href="#package_scope">package_scope</a>  ]  <a href="#hierarchical_identifier">hierarchical_identifier</a> <a href="#select">select</a>   
        | <a href="#empty_queue">empty_queue</a>   
        | <a href="#concatenation">concatenation</a>  \[ <font color="purple"><b>\[</b></font> <a href="#range_expression">range_expression</a> <font color="purple"><b>]</b></font>  ]    
        | <a href="#multiple_concatenation">multiple_concatenation</a>  \[ <font color="purple"><b>\[</b></font> <a href="#range_expression">range_expression</a> <font color="purple"><b>]</b></font>  ]    
        | <a href="#function_subroutine_call">function_subroutine_call</a>   
        | <a href="#let_expression">let_expression</a>   
        | <font color="purple"><b>(</b></font> <a href="#mintypmax_expression">mintypmax_expression</a> <font color="purple"><b>)</b></font>   
        | <a href="#cast">cast</a>   
        | <a href="#assignment_pattern_expression">assignment_pattern_expression</a>   
        | <a href="#streaming_concatenation">streaming_concatenation</a>   
        | <a href="#sequence_method_call">sequence_method_call</a>   
        | <font color="purple"><b>this</b></font> [^footnote_41]   
        | <font color="purple"><b>$</b></font> [^footnote_42]   
        | <font color="purple"><b>null</b></font> 
  
**class_qualifier**{: #class_qualifier }
:	 \[ <font color="purple"><b>local::</b></font> [^footnote_43]  ]   \[ <a href="#implicit_class_handle">implicit_class_handle</a> <font color="purple"><b>.</b></font>   
         | <a href="#class_scope">class_scope</a>  ]  
  
**range_expression**{: #range_expression }
:	<a href="#expression">expression</a>   
        | <a href="#part_select_range">part_select_range</a> 
  
**primary_literal**{: #primary_literal }
:	<a href="#number">number</a>   
        | <a href="#time_literal">time_literal</a>   
        | <a href="#unbased_unsized_literal">unbased_unsized_literal</a>   
        | <a href="#string_literal">string_literal</a> 
  
**time_literal**{: #time_literal }[^footnote_44]
:	<a href="#unsigned_number">unsigned_number</a> <a href="#time_unit">time_unit</a>   
        | <a href="#fixed_point_number">fixed_point_number</a> <a href="#time_unit">time_unit</a> 
  
**time_unit**{: #time_unit }
:	<font color="purple"><b>s</b></font>   
        | <font color="purple"><b>ms</b></font>   
        | <font color="purple"><b>us</b></font>   
        | <font color="purple"><b>ns</b></font>   
        | <font color="purple"><b>ps</b></font>   
        | <font color="purple"><b>fs</b></font> 
  
**implicit_class_handle**{: #implicit_class_handle }[^footnote_41]
:	<font color="purple"><b>this</b></font>   
        | <font color="purple"><b>super</b></font>   
        | <font color="purple"><b>this</b></font> <font color="purple"><b>.</b></font> <font color="purple"><b>super</b></font> 
  
**bit_select**{: #bit_select }
:	 { <font color="purple"><b>\[</b></font> <a href="#expression">expression</a> <font color="purple"><b>]</b></font>  }  
  
**select**{: #select }
:	 \[  { <font color="purple"><b>.</b></font> <a href="#member_identifier">member_identifier</a> <a href="#bit_select">bit_select</a>  }  <font color="purple"><b>.</b></font> <a href="#member_identifier">member_identifier</a>  ]  <a href="#bit_select">bit_select</a>  \[ <font color="purple"><b>\[</b></font> <a href="#part_select_range">part_select_range</a> <font color="purple"><b>]</b></font>  ]  
  
**nonrange_select**{: #nonrange_select }
:	 \[  { <font color="purple"><b>.</b></font> <a href="#member_identifier">member_identifier</a> <a href="#bit_select">bit_select</a>  }  <font color="purple"><b>.</b></font> <a href="#member_identifier">member_identifier</a>  ]  <a href="#bit_select">bit_select</a> 
  
**constant_bit_select**{: #constant_bit_select }
:	 { <font color="purple"><b>\[</b></font> <a href="#constant_expression">constant_expression</a> <font color="purple"><b>]</b></font>  }  
  
**constant_select**{: #constant_select }
:	 \[  { <font color="purple"><b>.</b></font> <a href="#member_identifier">member_identifier</a> <a href="#constant_bit_select">constant_bit_select</a>  }  <font color="purple"><b>.</b></font> <a href="#member_identifier">member_identifier</a>  ]  <a href="#constant_bit_select">constant_bit_select</a>  \[ <font color="purple"><b>\[</b></font> <a href="#constant_part_select_range">constant_part_select_range</a> <font color="purple"><b>]</b></font>  ]  
  
**constant_cast**{: #constant_cast }
:	<a href="#casting_type">casting_type</a> <font color="purple"><b>'</b></font> <font color="purple"><b>(</b></font> <a href="#constant_expression">constant_expression</a> <font color="purple"><b>)</b></font> 
  
**constant_let_expression**{: #constant_let_expression }
:	<a href="#let_expression">let_expression</a> [^footnote_45] 
  
**cast**{: #cast }
:	<a href="#casting_type">casting_type</a> <font color="purple"><b>'</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> 
  
### Expression left-side values
  
**net_lvalue**{: #net_lvalue }
:	<a href="#ps_or_hierarchical_net_identifier">ps_or_hierarchical_net_identifier</a> <a href="#constant_select">constant_select</a>   
        | <font color="purple"><b>{</b></font> <a href="#net_lvalue">net_lvalue</a>  { <font color="purple"><b>,</b></font> <a href="#net_lvalue">net_lvalue</a>  }  <font color="purple"><b>}</b></font>   
        |  \[ <a href="#assignment_pattern_expression_type">assignment_pattern_expression_type</a>  ]  <a href="#assignment_pattern_net_lvalue">assignment_pattern_net_lvalue</a> 
  
**variable_lvalue**{: #variable_lvalue }
:	 \[ <a href="#implicit_class_handle">implicit_class_handle</a> <font color="purple"><b>.</b></font>   
         | <a href="#package_scope">package_scope</a>  ]  <a href="#hierarchical_variable_identifier">hierarchical_variable_identifier</a> <a href="#select">select</a> [^footnote_46]   
        | <font color="purple"><b>{</b></font> <a href="#variable_lvalue">variable_lvalue</a>  { <font color="purple"><b>,</b></font> <a href="#variable_lvalue">variable_lvalue</a>  }  <font color="purple"><b>}</b></font>   
        |  \[ <a href="#assignment_pattern_expression_type">assignment_pattern_expression_type</a>  ]  <a href="#assignment_pattern_variable_lvalue">assignment_pattern_variable_lvalue</a>   
        | <a href="#streaming_concatenation">streaming_concatenation</a> [^footnote_47] 
  
**nonrange_variable_lvalue**{: #nonrange_variable_lvalue }
:	 \[ <a href="#implicit_class_handle">implicit_class_handle</a> <font color="purple"><b>.</b></font>   
         | <a href="#package_scope">package_scope</a>  ]  <a href="#hierarchical_variable_identifier">hierarchical_variable_identifier</a> <a href="#nonrange_select">nonrange_select</a> 
  
### Operators
  
**unary_operator**{: #unary_operator }
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
  
**binary_operator**{: #binary_operator }
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
  
**inc_or_dec_operator**{: #inc_or_dec_operator }
:	<font color="purple"><b>++</b></font>   
        | <font color="purple"><b>--</b></font> 
  
**unary_module_path_operator**{: #unary_module_path_operator }
:	<font color="purple"><b>!</b></font>   
        | <font color="purple"><b>~</b></font>   
        | <font color="purple"><b>&</b></font>   
        | <font color="purple"><b>~&</b></font>   
        | <font color="purple"><b>|</b></font>   
        | <font color="purple"><b>~|</b></font>   
        | <font color="purple"><b>^</b></font>   
        | <font color="purple"><b>~^</b></font>   
        | <font color="purple"><b>^~</b></font> 
  
**binary_module_path_operator**{: #binary_module_path_operator }
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
:	<a href="#integral_number">integral_number</a>   
        | <a href="#real_number">real_number</a> 
  
**integral_number**{: #integral_number }
:	<a href="#decimal_number">decimal_number</a>   
        | <a href="#octal_number">octal_number</a>   
        | <a href="#binary_number">binary_number</a>   
        | <a href="#hex_number">hex_number</a> 
  
**decimal_number**{: #decimal_number }
:	<a href="#unsigned_number">unsigned_number</a>   
        |  \[ <a href="#size">size</a>  ]  <a href="#decimal_base">decimal_base</a> <a href="#unsigned_number">unsigned_number</a>   
        |  \[ <a href="#size">size</a>  ]  <a href="#decimal_base">decimal_base</a> <a href="#x_digit">x_digit</a>  { <font color="purple"><b>_</b></font>  }    
        |  \[ <a href="#size">size</a>  ]  <a href="#decimal_base">decimal_base</a> <a href="#z_digit">z_digit</a>  { <font color="purple"><b>_</b></font>  }  
  
**binary_number**{: #binary_number }
:	 \[ <a href="#size">size</a>  ]  <a href="#binary_base">binary_base</a> <a href="#binary_value">binary_value</a> 
  
**octal_number**{: #octal_number }
:	 \[ <a href="#size">size</a>  ]  <a href="#octal_base">octal_base</a> <a href="#octal_value">octal_value</a> 
  
**hex_number**{: #hex_number }
:	 \[ <a href="#size">size</a>  ]  <a href="#hex_base">hex_base</a> <a href="#hex_value">hex_value</a> 
  
**sign**{: #sign }
:	<font color="purple"><b>+</b></font>   
        | <font color="purple"><b>-</b></font> 
  
**size**{: #size }
:	<a href="#non_zero_unsigned_number">non_zero_unsigned_number</a> 
  
**non_zero_unsigned_number**{: #non_zero_unsigned_number }[^footnote_33]
:	<a href="#non_zero_decimal_digit">non_zero_decimal_digit</a>  { <font color="purple"><b>_</b></font>   
         | <a href="#decimal_digit">decimal_digit</a>  }  
  
**real_number**{: #real_number }[^footnote_33]
:	<a href="#fixed_point_number">fixed_point_number</a>   
        | <a href="#unsigned_number">unsigned_number</a>  \[ <font color="purple"><b>.</b></font> <a href="#unsigned_number">unsigned_number</a>  ]  <a href="#exp">exp</a>  \[ <a href="#sign">sign</a>  ]  <a href="#unsigned_number">unsigned_number</a> 
  
**fixed_point_number**{: #fixed_point_number }[^footnote_33]
:	<a href="#unsigned_number">unsigned_number</a> <font color="purple"><b>.</b></font> <a href="#unsigned_number">unsigned_number</a> 
  
**exp**{: #exp }
:	<font color="purple"><b>e</b></font>   
        | <font color="purple"><b>E</b></font> 
  
**unsigned_number**{: #unsigned_number }[^footnote_33]
:	<a href="#decimal_digit">decimal_digit</a>  { <font color="purple"><b>_</b></font>   
         | <a href="#decimal_digit">decimal_digit</a>  }  
  
**binary_value**{: #binary_value }[^footnote_33]
:	<a href="#binary_digit">binary_digit</a>  { <font color="purple"><b>_</b></font>   
         | <a href="#binary_digit">binary_digit</a>  }  
  
**octal_value**{: #octal_value }[^footnote_33]
:	<a href="#octal_digit">octal_digit</a>  { <font color="purple"><b>_</b></font>   
         | <a href="#octal_digit">octal_digit</a>  }  
  
**hex_value**{: #hex_value }[^footnote_33]
:	<a href="#hex_digit">hex_digit</a>  { <font color="purple"><b>_</b></font>   
         | <a href="#hex_digit">hex_digit</a>  }  
  
**decimal_base**{: #decimal_base }[^footnote_33]
:	<font color="purple"><b>'</b></font>  \[ <font color="purple"><b>s</b></font>   
         | <font color="purple"><b>S</b></font>  ]  <font color="purple"><b>d</b></font>   
        | <font color="purple"><b>'</b></font>  \[ <font color="purple"><b>s</b></font>   
         | <font color="purple"><b>S</b></font>  ]  <font color="purple"><b>D</b></font> 
  
**binary_base**{: #binary_base }[^footnote_33]
:	<font color="purple"><b>'</b></font>  \[ <font color="purple"><b>s</b></font>   
         | <font color="purple"><b>S</b></font>  ]  <font color="purple"><b>b</b></font>   
        | <font color="purple"><b>'</b></font>  \[ <font color="purple"><b>s</b></font>   
         | <font color="purple"><b>S</b></font>  ]  <font color="purple"><b>B</b></font> 
  
**octal_base**{: #octal_base }[^footnote_33]
:	<font color="purple"><b>'</b></font>  \[ <font color="purple"><b>s</b></font>   
         | <font color="purple"><b>S</b></font>  ]  <font color="purple"><b>o</b></font>   
        | <font color="purple"><b>'</b></font>  \[ <font color="purple"><b>s</b></font>   
         | <font color="purple"><b>S</b></font>  ]  <font color="purple"><b>O</b></font> 
  
**hex_base**{: #hex_base }[^footnote_33]
:	<font color="purple"><b>'</b></font>  \[ <font color="purple"><b>s</b></font>   
         | <font color="purple"><b>S</b></font>  ]  <font color="purple"><b>h</b></font>   
        | <font color="purple"><b>'</b></font>  \[ <font color="purple"><b>s</b></font>   
         | <font color="purple"><b>S</b></font>  ]  <font color="purple"><b>H</b></font> 
  
**non_zero_decimal_digit**{: #non_zero_decimal_digit }
:	<font color="purple"><b>1</b></font>   
        | <font color="purple"><b>2</b></font>   
        | <font color="purple"><b>3</b></font>   
        | <font color="purple"><b>4</b></font>   
        | <font color="purple"><b>5</b></font>   
        | <font color="purple"><b>6</b></font>   
        | <font color="purple"><b>7</b></font>   
        | <font color="purple"><b>8</b></font>   
        | <font color="purple"><b>9</b></font> 
  
**decimal_digit**{: #decimal_digit }
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
  
**binary_digit**{: #binary_digit }
:	<a href="#x_digit">x_digit</a>   
        | <a href="#z_digit">z_digit</a>   
        | <font color="purple"><b>0</b></font>   
        | <font color="purple"><b>1</b></font> 
  
**octal_digit**{: #octal_digit }
:	<a href="#x_digit">x_digit</a>   
        | <a href="#z_digit">z_digit</a>   
        | <font color="purple"><b>0</b></font>   
        | <font color="purple"><b>1</b></font>   
        | <font color="purple"><b>2</b></font>   
        | <font color="purple"><b>3</b></font>   
        | <font color="purple"><b>4</b></font>   
        | <font color="purple"><b>5</b></font>   
        | <font color="purple"><b>6</b></font>   
        | <font color="purple"><b>7</b></font> 
  
**hex_digit**{: #hex_digit }
:	<a href="#x_digit">x_digit</a>   
        | <a href="#z_digit">z_digit</a>   
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
  
**x_digit**{: #x_digit }
:	<font color="purple"><b>x</b></font>   
        | <font color="purple"><b>X</b></font> 
  
**z_digit**{: #z_digit }
:	<font color="purple"><b>z</b></font>   
        | <font color="purple"><b>Z</b></font>   
        | <font color="purple"><b>?</b></font> 
  
**unbased_unsized_literal**{: #unbased_unsized_literal }
:	<font color="purple"><b>'0</b></font>   
        | <font color="purple"><b>'1</b></font>   
        | <font color="purple"><b>'</b></font> <a href="#z_or_x">z_or_x</a> [^footnote_48] 
  
### Strings
  
**string_literal**{: #string_literal }
:	<font color="purple"><b>"</b></font>  { <em>Any_ASCII_Characters</em> }  <font color="purple"><b>"</b></font> 
  
## General
  
### Attributes
  
**attribute_instance**{: #attribute_instance }
:	<font color="purple"><b>(\*</b></font> <a href="#attr_spec">attr_spec</a>  { <font color="purple"><b>,</b></font> <a href="#attr_spec">attr_spec</a>  }  <font color="purple"><b>\*)</b></font> 
  
**attr_spec**{: #attr_spec }
:	<a href="#attr_name">attr_name</a>  \[ <font color="purple"><b>=</b></font> <a href="#constant_expression">constant_expression</a>  ]  
  
**attr_name**{: #attr_name }
:	<a href="#identifier">identifier</a> 
  
### Comments
  
**comment**{: #comment }
:	<a href="#one_line_comment">one_line_comment</a>   
        | <a href="#block_comment">block_comment</a> 
  
**one_line_comment**{: #one_line_comment }
:	<font color="purple"><b>//</b></font> <a href="#comment_text">comment_text</a> <em>new_line_char</em>
  
**block_comment**{: #block_comment }
:	<font color="purple"><b>/\*</b></font> <a href="#comment_text">comment_text</a> <font color="purple"><b>\*/</b></font> 
  
**comment_text**{: #comment_text }
:	 { <em>Any_ASCII_character</em> }  
  
### Identifiers
  
**array_identifier**{: #array_identifier }
:	<a href="#identifier">identifier</a> 
  
**block_identifier**{: #block_identifier }
:	<a href="#identifier">identifier</a> 
  
**bin_identifier**{: #bin_identifier }
:	<a href="#identifier">identifier</a> 
  
**c_identifier**{: #c_identifier }[^footnote_49]
:	<em>\[ a-zA-Z_ ]</em> { <em>\[ a-zA-Z0-9_ ]</em> }  
  
**cell_identifier**{: #cell_identifier }
:	<a href="#identifier">identifier</a> 
  
**checker_identifier**{: #checker_identifier }
:	<a href="#identifier">identifier</a> 
  
**class_identifier**{: #class_identifier }
:	<a href="#identifier">identifier</a> 
  
**class_variable_identifier**{: #class_variable_identifier }
:	<a href="#variable_identifier">variable_identifier</a> 
  
**clocking_identifier**{: #clocking_identifier }
:	<a href="#identifier">identifier</a> 
  
**config_identifier**{: #config_identifier }
:	<a href="#identifier">identifier</a> 
  
**const_identifier**{: #const_identifier }
:	<a href="#identifier">identifier</a> 
  
**constraint_identifier**{: #constraint_identifier }
:	<a href="#identifier">identifier</a> 
  
**covergroup_identifier**{: #covergroup_identifier }
:	<a href="#identifier">identifier</a> 
  
**covergroup_variable_identifier**{: #covergroup_variable_identifier }
:	<a href="#variable_identifier">variable_identifier</a> 
  
**cover_point_identifier**{: #cover_point_identifier }
:	<a href="#identifier">identifier</a> 
  
**cross_identifier**{: #cross_identifier }
:	<a href="#identifier">identifier</a> 
  
**dynamic_array_variable_identifier**{: #dynamic_array_variable_identifier }
:	<a href="#variable_identifier">variable_identifier</a> 
  
**enum_identifier**{: #enum_identifier }
:	<a href="#identifier">identifier</a> 
  
**escaped_identifier**{: #escaped_identifier }
:	<font color="purple"><b>\</b></font>  { <em>any_printable_ASCII_character_except_white_space</em> }  <a href="#white_space">white_space</a> 
  
**formal_identifier**{: #formal_identifier }
:	<a href="#identifier">identifier</a> 
  
**formal_port_identifier**{: #formal_port_identifier }
:	<a href="#identifier">identifier</a> 
  
**function_identifier**{: #function_identifier }
:	<a href="#identifier">identifier</a> 
  
**generate_block_identifier**{: #generate_block_identifier }
:	<a href="#identifier">identifier</a> 
  
**genvar_identifier**{: #genvar_identifier }
:	<a href="#identifier">identifier</a> 
  
**hierarchical_array_identifier**{: #hierarchical_array_identifier }
:	<a href="#hierarchical_identifier">hierarchical_identifier</a> 
  
**hierarchical_block_identifier**{: #hierarchical_block_identifier }
:	<a href="#hierarchical_identifier">hierarchical_identifier</a> 
  
**hierarchical_event_identifier**{: #hierarchical_event_identifier }
:	<a href="#hierarchical_identifier">hierarchical_identifier</a> 
  
**hierarchical_identifier**{: #hierarchical_identifier }
:	 \[ <font color="purple"><b>$root</b></font> <font color="purple"><b>.</b></font>  ]   { <a href="#identifier">identifier</a> <a href="#constant_bit_select">constant_bit_select</a> <font color="purple"><b>.</b></font>  }  <a href="#identifier">identifier</a> 
  
**hierarchical_net_identifier**{: #hierarchical_net_identifier }
:	<a href="#hierarchical_identifier">hierarchical_identifier</a> 
  
**hierarchical_parameter_identifier**{: #hierarchical_parameter_identifier }
:	<a href="#hierarchical_identifier">hierarchical_identifier</a> 
  
**hierarchical_property_identifier**{: #hierarchical_property_identifier }
:	<a href="#hierarchical_identifier">hierarchical_identifier</a> 
  
**hierarchical_sequence_identifier**{: #hierarchical_sequence_identifier }
:	<a href="#hierarchical_identifier">hierarchical_identifier</a> 
  
**hierarchical_task_identifier**{: #hierarchical_task_identifier }
:	<a href="#hierarchical_identifier">hierarchical_identifier</a> 
  
**hierarchical_tf_identifier**{: #hierarchical_tf_identifier }
:	<a href="#hierarchical_identifier">hierarchical_identifier</a> 
  
**hierarchical_variable_identifier**{: #hierarchical_variable_identifier }
:	<a href="#hierarchical_identifier">hierarchical_identifier</a> 
  
**identifier**{: #identifier }
:	<a href="#simple_identifier">simple_identifier</a>   
        | <a href="#escaped_identifier">escaped_identifier</a> 
  
**index_variable_identifier**{: #index_variable_identifier }
:	<a href="#identifier">identifier</a> 
  
**interface_identifier**{: #interface_identifier }
:	<a href="#identifier">identifier</a> 
  
**interface_instance_identifier**{: #interface_instance_identifier }
:	<a href="#identifier">identifier</a> 
  
**inout_port_identifier**{: #inout_port_identifier }
:	<a href="#identifier">identifier</a> 
  
**input_port_identifier**{: #input_port_identifier }
:	<a href="#identifier">identifier</a> 
  
**instance_identifier**{: #instance_identifier }
:	<a href="#identifier">identifier</a> 
  
**library_identifier**{: #library_identifier }
:	<a href="#identifier">identifier</a> 
  
**member_identifier**{: #member_identifier }
:	<a href="#identifier">identifier</a> 
  
**method_identifier**{: #method_identifier }
:	<a href="#identifier">identifier</a> 
  
**modport_identifier**{: #modport_identifier }
:	<a href="#identifier">identifier</a> 
  
**module_identifier**{: #module_identifier }
:	<a href="#identifier">identifier</a> 
  
**net_identifier**{: #net_identifier }
:	<a href="#identifier">identifier</a> 
  
**net_type_identifier**{: #net_type_identifier }
:	<a href="#identifier">identifier</a> 
  
**output_port_identifier**{: #output_port_identifier }
:	<a href="#identifier">identifier</a> 
  
**package_identifier**{: #package_identifier }
:	<a href="#identifier">identifier</a> 
  
**package_scope**{: #package_scope }
:	<a href="#package_identifier">package_identifier</a> <font color="purple"><b>::</b></font>   
        | <font color="purple"><b>$unit</b></font> <font color="purple"><b>::</b></font> 
  
**parameter_identifier**{: #parameter_identifier }
:	<a href="#identifier">identifier</a> 
  
**port_identifier**{: #port_identifier }
:	<a href="#identifier">identifier</a> 
  
**production_identifier**{: #production_identifier }
:	<a href="#identifier">identifier</a> 
  
**program_identifier**{: #program_identifier }
:	<a href="#identifier">identifier</a> 
  
**property_identifier**{: #property_identifier }
:	<a href="#identifier">identifier</a> 
  
**ps_class_identifier**{: #ps_class_identifier }
:	 \[ <a href="#package_scope">package_scope</a>  ]  <a href="#class_identifier">class_identifier</a> 
  
**ps_covergroup_identifier**{: #ps_covergroup_identifier }
:	 \[ <a href="#package_scope">package_scope</a>  ]  <a href="#covergroup_identifier">covergroup_identifier</a> 
  
**ps_checker_identifier**{: #ps_checker_identifier }
:	 \[ <a href="#package_scope">package_scope</a>  ]  <a href="#checker_identifier">checker_identifier</a> 
  
**ps_identifier**{: #ps_identifier }
:	 \[ <a href="#package_scope">package_scope</a>  ]  <a href="#identifier">identifier</a> 
  
**ps_or_hierarchical_array_identifier**{: #ps_or_hierarchical_array_identifier }
:	 \[ <a href="#implicit_class_handle">implicit_class_handle</a> <font color="purple"><b>.</b></font>   
         | <a href="#class_scope">class_scope</a>   
         | <a href="#package_scope">package_scope</a>  ]  <a href="#hierarchical_array_identifier">hierarchical_array_identifier</a> 
  
**ps_or_hierarchical_net_identifier**{: #ps_or_hierarchical_net_identifier }
:	 \[ <a href="#package_scope">package_scope</a>  ]  <a href="#net_identifier">net_identifier</a>   
        | <a href="#hierarchical_net_identifier">hierarchical_net_identifier</a> 
  
**ps_or_hierarchical_property_identifier**{: #ps_or_hierarchical_property_identifier }
:	 \[ <a href="#package_scope">package_scope</a>  ]  <a href="#property_identifier">property_identifier</a>   
        | <a href="#hierarchical_property_identifier">hierarchical_property_identifier</a> 
  
**ps_or_hierarchical_sequence_identifier**{: #ps_or_hierarchical_sequence_identifier }
:	 \[ <a href="#package_scope">package_scope</a>  ]  <a href="#sequence_identifier">sequence_identifier</a>   
        | <a href="#hierarchical_sequence_identifier">hierarchical_sequence_identifier</a> 
  
**ps_or_hierarchical_tf_identifier**{: #ps_or_hierarchical_tf_identifier }
:	 \[ <a href="#package_scope">package_scope</a>  ]  <a href="#tf_identifier">tf_identifier</a>   
        | <a href="#hierarchical_tf_identifier">hierarchical_tf_identifier</a> 
  
**ps_parameter_identifier**{: #ps_parameter_identifier }
:	 \[ <a href="#package_scope">package_scope</a>   
         | <a href="#class_scope">class_scope</a>  ]  <a href="#parameter_identifier">parameter_identifier</a>   
        |  { <a href="#generate_block_identifier">generate_block_identifier</a>  \[ <font color="purple"><b>\[</b></font> <a href="#constant_expression">constant_expression</a> <font color="purple"><b>]</b></font>  ]  <font color="purple"><b>.</b></font>  }  <a href="#parameter_identifier">parameter_identifier</a> 
  
**ps_type_identifier**{: #ps_type_identifier }
:	 \[ <font color="purple"><b>local::</b></font> [^footnote_43]   
         | <a href="#package_scope">package_scope</a>  ]  <a href="#type_identifier">type_identifier</a> 
  
**sequence_identifier**{: #sequence_identifier }
:	<a href="#identifier">identifier</a> 
  
**signal_identifier**{: #signal_identifier }
:	<a href="#identifier">identifier</a> 
  
**simple_identifier**{: #simple_identifier }[^footnote_49]
:	<em>\[ a-zA-Z_ ]</em> { <em> a-zA-Z0-9_$ ]</em> }  
  
**specparam_identifier**{: #specparam_identifier }
:	<a href="#identifier">identifier</a> 
  
**system_tf_identifier**{: #system_tf_identifier }[^footnote_50]
:	<font color="purple"><b>$</b></font> <em>\[ a-zA-Z0-9_$ ] { \[ a-zA-Z0-9_$ ] }</em>
  
**task_identifier**{: #task_identifier }
:	<a href="#identifier">identifier</a> 
  
**tf_identifier**{: #tf_identifier }
:	<a href="#identifier">identifier</a> 
  
**terminal_identifier**{: #terminal_identifier }
:	<a href="#identifier">identifier</a> 
  
**topmodule_identifier**{: #topmodule_identifier }
:	<a href="#identifier">identifier</a> 
  
**type_identifier**{: #type_identifier }
:	<a href="#identifier">identifier</a> 
  
**udp_identifier**{: #udp_identifier }
:	<a href="#identifier">identifier</a> 
  
**variable_identifier**{: #variable_identifier }
:	<a href="#identifier">identifier</a> 
  
### White space
  
**white_space**{: #white_space }
:	<em>space</em>  
        | <em>tab</em>  
        | <em>newline</em>  
        | <em>eof</em>[^footnote_51] 
  
## Footnotes normative
  
[^footnote_1]: (1) A package_import_declaration in a module_ansi_header, interface_ansi_header, or program_ansi_header shall be followed by a parameter_port_list or list_of_port_declarations, or both.
  
[^footnote_2]: (2) The list_of_port_declarations syntax is explained in 23.2.2.2, which also imposes various semantic restrictions, e.g., a ref port shall be of a variable type and an inout port shall not be. It shall be illegal to initialize a port that is not a variable output port or to specify a default value for a port that is not an input port.
  
[^footnote_3]: (3) A timeunits_declaration shall be legal as a non_port_module_item, non_port_interface_item, non_port_program_item, or package_item only if it repeats and matches a previous timeunits_declaration within the same time scope.
  
[^footnote_4]: (4) If the bind_target_scope is an interface_identifier or the bind_target_instance is an interface_instance_identifier, then the bind_instantiation shall be an interface_instantiation or a checker_instantiation.
  
[^footnote_5]: (5) It shall be illegal for a program_generate_item to include any item that would be illegal in a program_declaration outside a program_generate_item.
  
[^footnote_6]: (6) It shall be illegal for a checker_generate_item to include any item that would be illegal in a checker_declaration outside a checker_generate_item.
  
[^footnote_7]: (7) In a parameter_declaration that is a class_item, the parameter keyword shall be a synonym for the localparam keyword.
  
[^footnote_8]: (8) In any one declaration, only one of protected or local is allowed, only one of rand or randc is allowed, and static and/or virtual can appear only once.
  
[^footnote_9]: (9) The open_range_list in a uniqueness_constraint shall contain only expressions that denote scalar or array variables, as described in 18.5.5.
  
[^footnote_10]: (10) In a data_declaration that is not within a procedural context, it shall be illegal to use the automatic keyword. In a data_declaration, it shall be illegal to omit the explicit data_type before a list_of_variable_decl_assignments unless the var keyword is used.
  
[^footnote_11]: (11) It shall be illegal to have an import statement directly within a class scope.
  
[^footnote_12]: (12) A charge strength shall only be used with the trireg keyword. When the vectored or scalared keyword is used, there shall be at least one packed dimension.
  
[^footnote_13]: (13) When a packed dimension is used with the struct or union keyword, the packed keyword shall also be used.
  
[^footnote_14]: (14) When a type_reference is used in a net declaration, it shall be preceded by a net type keyword; and when it is used in a variable declaration, it shall be preceded by the var keyword.
  
[^footnote_15]: (15) A type_identifier shall be legal as an enum_base_type if it denotes an integer_atom_type, with which an additional packed dimension is not permitted, or an integer_vector_type.
  
[^footnote_16]: (16) It shall be legal to declare a void struct_union_member only within tagged unions.
  
[^footnote_17]: (17) An expression that is used as the argument in a type_reference shall not contain any hierarchical references or references to elements of dynamic objects.
  
[^footnote_18]: (18) It shall be legal to omit the constant_param_expression from a param_assignment or the data_type from a type_assignment only within a parameter_port_list. However, it shall not be legal to omit them from localparam declarations in a parameter_port_list.
  
[^footnote_19]: (19) In a shallow copy, the expression shall evaluate to an object handle.
  
[^footnote_20]: (20) In packed_dimension, unsized_dimension is permitted only as the sole packed dimension in a DPI import declaration; see dpi_function_proto and dpi_task_proto.
  
[^footnote_21]: (21) dpi_function_proto return types are restricted to small values, per 35.5.5.
  
[^footnote_22]: (22) Formals of dpi_function_proto and dpi_task_proto cannot use pass-by-reference mode, and class types cannot be passed at all; see 35.5.6 for a description of allowed types for DPI formal arguments.
  
[^footnote_23]: (23) In a tf_port_item, it shall be illegal to omit the explicit port_identifier except within a function_prototype or task_prototype.
  
[^footnote_24]: (24) The matches operator shall have higher precedence than the && and || operators.
  
[^footnote_25]: (25) It shall be legal to use the $ primary in an open_value_range or covergroup_value_range of the form \[expression :$] or \[$:expression].
  
[^footnote_26]: (26) The result of this expression shall be assignment compatible with an integral type.
  
[^footnote_27]: (27) This expression is restricted as described in 19.5.1.2.
  
[^footnote_28]: (28) This expression is restricted as described in 19.5.
  
[^footnote_29]: (29) The .\* token shall appear at most once in a list of port connections.
  
[^footnote_30]: (30) Within an interface_declaration, it shall only be legal for a generate_item to be an interface_or_generate_item. Within a module_declaration, except when also within an interface_declaration, it shall only be legal for a generate_item to be a module_or_generate_item. Within a checker_declaration, it shall only be legal for a generate_item to be a checker_or_generate_item.
  
[^footnote_31]: (31) Parentheses are required when an event expression that contains comma-separated event expressions is passed as an actual argument using positional binding.
  
[^footnote_32]: (32) In a constant_assignment_pattern_expression, all member expressions shall be constant expressions.
  
[^footnote_33]: (33) Embedded spaces are illegal.
  
[^footnote_34]: (34) In a multiple_concatenation, it shall be illegal for the multiplier not to be a constant_expression unless the type of the concatenation is string.
  
[^footnote_35]: (35) { } shall only be legal in the context of a queue.
  
[^footnote_36]: (36) In a constant_function_call, all arguments shall be constant_expressions.
  
[^footnote_37]: (37) It shall be illegal to omit the parentheses in a tf_call unless the subroutine is a task, void function, or class method. If the subroutine is a nonvoid class function method, it shall be illegal to omit the parentheses if the call is directly recursive.
  
[^footnote_38]: (38) In a randomize_call that is not a method call of an object of class type (i.e., a scope randomize), the optional parenthesized identifier_list after the keyword with shall be illegal, and the use of null shall be illegal.
  
[^footnote_39]: (39) A genvar_identifier shall be legal in a constant_primary only within a genvar_expression.
  
[^footnote_40]: (40) It shall be legal to use a type_reference constant_primary as the casting_type in a static cast. It shall be illegal for a type_reference constant_primary to be used with any operators except the equality/inequality and case equality/ inequality operators.
  
[^footnote_41]: (41) implicit_class_handle shall only appear within the scope of a class_declaration or out-of-block method declaration.
  
[^footnote_42]: (42) The $ primary shall be legal only in a select for a queue variable, in an open_value_range, covergroup_value_range, integer_covergroup_expression, or as an entire sequence_actual_arg or property_actual_arg.
  
[^footnote_43]: (43) The local:: qualifier shall only appear within the scope of an inline constraint block.
  
[^footnote_44]: (44) The unsigned number or fixed-point number in time_literal shall not be followed by white_space.
  
[^footnote_45]: (45) In a constant_let_expression, all arguments shall be constant_expressions and its right-hand side shall be a constant_expression itself provided that its formal arguments are treated as constant_primary there.
  
[^footnote_46]: (46) In a variable_lvalue that is assigned within a sequence_match_item any select shall also be a constant_select.
  
[^footnote_47]: (47) A streaming_concatenation expression shall not be nested within another variable_lvalue. A streaming_concatenation shall not be the target of the increment or decrement operator nor the target of any assignment operator except the simple ( = ) or nonblocking assignment ( <= ) operator.
  
[^footnote_48]: (48) The apostrophe ( ' ) in unbased_unsized_literal shall not be followed by white_space.
  
[^footnote_49]: (49) A simple_identifier or c_identifier shall start with an alpha or underscore ( _ ) character, shall have at least one character, and shall not have any spaces.
  
[^footnote_50]: (50) The $ character in a system_tf_identifier shall not be followed by white_space. A system_tf_identifier shall not be escaped.
  
[^footnote_51]: (51) End of file.
