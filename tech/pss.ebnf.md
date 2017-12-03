---
title: "PSS Early Adopter (EA) Portable Test and Stimulus Standard"
layout: page 
pager: true
author: Sigasi
date: 2017-12-03
comments: true
---
<em>
Copyright © 2017 Accellera. All rights reserved.
This is an unapproved Accellera Standards Draft, subject to change.
 

Get the full Language Reference Manual, free of charge, at <http://www.accellera.org/images/downloads/drafts-review/PSS\_Early\_Adopter\_Release.pdf>

Sigasi has created this browsable version of the grammar, hoping that it would be useful to you, but without any warranty whatsoever.

[More browsable grammars of Hardware Description and Verification languages][/tag/EBNF].
</em>  
## Formal syntax
  
<em>The PSS formal syntax is described using Backus-Naur Form (BNF). The syntax of the PSS source is derived from the starting symbol Model. If there is a conflict between a grammar element shown anywhere in this Standard and the material in this annex, the material shown in this annex shall take precedence.  </em>  
**Model**{: #Model }
:	 { <a href="#portable_stimulus_description">portable\_stimulus\_description</a>  }  
  
**portable\_stimulus\_description**{: #portable_stimulus_description }
:	<a href="#package_body_item">package\_body\_item</a>   
        | <a href="#package_declaration">package\_declaration</a>   
        | <a href="#component_declaration">component\_declaration</a> 
  
## B.1 Package declarations
  
**package\_declaration**{: #package_declaration }
:	<font color="purple"><b>package</b></font> <a href="#package_identifier">package\_identifier</a> <font color="purple"><b>{</b></font>  { <a href="#package_body_item">package\_body\_item</a>  }  <font color="purple"><b>}</b></font>  \[ <font color="purple"><b>;</b></font>  ]  
  
**package\_body\_item**{: #package_body_item }
:	<a href="#abstract_action_declaration">abstract\_action\_declaration</a>   
        | <a href="#struct_declaration">struct\_declaration</a>   
        | <a href="#enum_declaration">enum\_declaration</a>   
        | <a href="#coverspec_declaration">coverspec\_declaration</a>   
        | <a href="#import_method_decl">import\_method\_decl</a>   
        | <a href="#import_class_decl">import\_class\_decl</a>   
        | <a href="#import_method_qualifiers">import\_method\_qualifiers</a>   
        | <a href="#export_action">export\_action</a>   
        | <a href="#typedef_declaration">typedef\_declaration</a>   
        | <a href="#bins_declaration">bins\_declaration</a>   
        | <a href="#import_stmt">import\_stmt</a>   
        | <a href="#extend_stmt">extend\_stmt</a> 
  
**import\_stmt**{: #import_stmt }
:	<font color="purple"><b>import</b></font> <a href="#package_import_pattern">package\_import\_pattern</a> <font color="purple"><b>;</b></font> 
  
**package\_import\_pattern**{: #package_import_pattern }
:	<a href="#type_identifier">type\_identifier</a>  \[ <font color="purple"><b>:: \*</b></font>  ]  
  
**extend\_stmt**{: #extend_stmt }
:	<font color="purple"><b>extend</b></font> <font color="purple"><b>action</b></font> <a href="#type_identifier">type\_identifier</a> <font color="purple"><b>{</b></font>  { <a href="#action_body_item">action\_body\_item</a>  }  <font color="purple"><b>}</b></font>  \[ <font color="purple"><b>;</b></font>  ]    
        | <font color="purple"><b>extend</b></font> <font color="purple"><b>struct</b></font> <a href="#type_identifier">type\_identifier</a> <font color="purple"><b>{</b></font>  { <a href="#struct_body_item">struct\_body\_item</a>  }  <font color="purple"><b>}</b></font>  \[ <font color="purple"><b>;</b></font>  ]    
        | <font color="purple"><b>extend</b></font> <font color="purple"><b>enum</b></font> <a href="#type_identifier">type\_identifier</a>  {  \[ <a href="#enum_item">enum\_item</a>  { <font color="purple"><b>,</b></font> <a href="#enum_item">enum\_item</a>  }   ]   }   \[ <font color="purple"><b>;</b></font>  ]    
        | <font color="purple"><b>extend</b></font> <font color="purple"><b>component</b></font> <a href="#type_identifier">type\_identifier</a> <font color="purple"><b>{</b></font>  { <a href="#component_body_item">component\_body\_item</a>  }  <font color="purple"><b>}</b></font>  \[ <font color="purple"><b>;</b></font>  ]  
  
## B.2 Action declarations
  
**action\_declaration**{: #action_declaration }
:	<font color="purple"><b>action</b></font> <a href="#action_identifier">action\_identifier</a>  \[ <a href="#action_super_spec">action\_super\_spec</a>  ]  <font color="purple"><b>{</b></font>  { <a href="#action_body_item">action\_body\_item</a>  }  <font color="purple"><b>}</b></font>  \[ <font color="purple"><b>;</b></font>  ]  
  
**abstract\_action\_declaration**{: #abstract_action_declaration }
:	<font color="purple"><b>abstract</b></font> <font color="purple"><b>action</b></font> <a href="#action_identifier">action\_identifier</a>  \[ <a href="#action_super_spec">action\_super\_spec</a>  ]  <font color="purple"><b>{</b></font>  { <a href="#action_body_item">action\_body\_item</a>  }  <font color="purple"><b>}</b></font>  \[ <font color="purple"><b>;</b></font>  ]  
  
**action\_super\_spec**{: #action_super_spec }
:	<font color="purple"><b>:</b></font> <a href="#type_identifier">type\_identifier</a> 
  
**action\_body\_item**{: #action_body_item }
:	<a href="#activity_declaration">activity\_declaration</a>   
        | <a href="#overrides_declaration">overrides\_declaration</a>   
        | <a href="#constraint_declaration">constraint\_declaration</a>   
        | <a href="#action_field_declaration">action\_field\_declaration</a>   
        | <a href="#bins_declaration">bins\_declaration</a>   
        | <a href="#symbol_declaration">symbol\_declaration</a>   
        | <a href="#coverspec_declaration">coverspec\_declaration</a>   
        | <a href="#exec_block_stmt">exec\_block\_stmt</a> 
  
**activity\_declaration**{: #activity_declaration }
:	<font color="purple"><b>activity</b></font> <font color="purple"><b>{</b></font>  {  \[ <a href="#identifier">identifier</a> <font color="purple"><b>:</b></font>  ]  <a href="#activity_stmt">activity\_stmt</a>  }  <font color="purple"><b>}</b></font>  \[ <font color="purple"><b>;</b></font>  ]  
  
**action\_field\_declaration**{: #action_field_declaration }
:	 \[ <a href="#action_field_modifier">action\_field\_modifier</a>  ]  <a href="#action_data_declaration">action\_data\_declaration</a> 
  
**action\_field\_modifier**{: #action_field_modifier }
:	<font color="purple"><b>rand</b></font>   
        | <a href="#io_direction">io\_direction</a>   
        | <font color="purple"><b>lock</b></font>   
        | <font color="purple"><b>share</b></font>   
        | <font color="purple"><b>action</b></font> 
  
**io\_direction**{: #io_direction }
:	<font color="purple"><b>input</b></font>   
        | <font color="purple"><b>output</b></font> 
  
<em> Exec blocks </em>  
**exec\_block\_stmt**{: #exec_block_stmt }
:	<a href="#exec_block">exec\_block</a>   
        | <a href="#target_code_exec_block">target\_code\_exec\_block</a>   
        | <a href="#target_file_exec_block">target\_file\_exec\_block</a> 
  
**exec\_block**{: #exec_block }
:	<font color="purple"><b>exec</b></font> <a href="#exec_kind_identifier">exec\_kind\_identifier</a> <font color="purple"><b>{</b></font>  { <a href="#exec_body_stmt">exec\_body\_stmt</a>  }  <font color="purple"><b>}</b></font> 
  
**exec\_kind\_identifier**{: #exec_kind_identifier }
:	<font color="purple"><b>pre\_solve</b></font>   
        | <font color="purple"><b>post\_solve</b></font>   
        | <font color="purple"><b>body</b></font>   
        | <font color="purple"><b>header</b></font>   
        | <font color="purple"><b>declaration</b></font>   
        | <font color="purple"><b>run\_start</b></font>   
        | <font color="purple"><b>run\_end</b></font>   
        | <font color="purple"><b>init</b></font> 
  
**exec\_body\_stmt**{: #exec_body_stmt }
:	<a href="#expression">expression</a>  \[ <a href="#assign_op">assign\_op</a> <a href="#expression">expression</a>  ]  <font color="purple"><b>;</b></font> 
  
**assign\_op**{: #assign_op }
:	<font color="purple"><b>=</b></font>   
        | <font color="purple"><b>+=</b></font>   
        | <font color="purple"><b>-=</b></font>   
        | <font color="purple"><b><<=</b></font>   
        | <font color="purple"><b>>>=</b></font>   
        | <font color="purple"><b>|=</b></font>   
        | <font color="purple"><b>&=</b></font> 
  
**target\_code\_exec\_block**{: #target_code_exec_block }
:	<font color="purple"><b>exec</b></font> <a href="#exec_kind_identifier">exec\_kind\_identifier</a> <a href="#language_identifier">language\_identifier</a> <font color="purple"><b>=</b></font> <a href="#string">string</a> <font color="purple"><b>;</b></font> 
  
**target\_file\_exec\_block**{: #target_file_exec_block }
:	<font color="purple"><b>exec</b></font> <font color="purple"><b>file</b></font> <a href="#filename_string">filename\_string</a> <font color="purple"><b>=</b></font> <a href="#string">string</a> <font color="purple"><b>;</b></font> 
  
## B.3 Struct declarations
  
**struct\_declaration**{: #struct_declaration }
:	<a href="#struct_type">struct\_type</a> <a href="#identifier">identifier</a>  \[ <font color="purple"><b>:</b></font> <a href="#struct_identifier">struct\_identifier</a>  ]  <font color="purple"><b>{</b></font>  { <a href="#struct_body_item">struct\_body\_item</a>  }  <font color="purple"><b>}</b></font>  \[ <font color="purple"><b>;</b></font>  ]  
  
**struct\_type**{: #struct_type }
:	<font color="purple"><b>struct</b></font>   
        | <a href="#struct_qualifier">struct\_qualifier</a> 
  
**struct\_qualifier**{: #struct_qualifier }
:	<font color="purple"><b>buffer</b></font>   
        | <font color="purple"><b>stream</b></font>   
        | <font color="purple"><b>state</b></font>   
        | <font color="purple"><b>resource</b></font> 
  
**struct\_body\_item**{: #struct_body_item }
:	<a href="#constraint_declaration">constraint\_declaration</a>   
        | <a href="#struct_field_declaration">struct\_field\_declaration</a>   
        | <a href="#typedef_declaration">typedef\_declaration</a>   
        | <a href="#bins_declaration">bins\_declaration</a>   
        | <a href="#coverspec_declaration">coverspec\_declaration</a>   
        | <a href="#exec_block_stmt">exec\_block\_stmt</a> 
  
**struct\_field\_declaration**{: #struct_field_declaration }
:	 \[ <a href="#struct_field_modifier">struct\_field\_modifier</a>  ]  <a href="#data_declaration">data\_declaration</a> 
  
**struct\_field\_modifier**{: #struct_field_modifier }
:	<font color="purple"><b>rand</b></font> 
  
## B.4 Procedural interface (PI)
  
**import\_method\_decl**{: #import_method_decl }
:	<font color="purple"><b>import</b></font> <a href="#method_prototype">method\_prototype</a> 
  
**method\_prototype**{: #method_prototype }
:	<a href="#method_return_type">method\_return\_type</a> <a href="#method_identifier">method\_identifier</a> <a href="#method_parameter_list_prototype">method\_parameter\_list\_prototype</a> 
  
**method\_return\_type**{: #method_return_type }
:	<font color="purple"><b>void</b></font>   
        | <a href="#data_type">data\_type</a> 
  
**method\_parameter\_list\_prototype**{: #method_parameter_list_prototype }
:	<font color="purple"><b>(</b></font>  \[ <a href="#method_parameter">method\_parameter</a>  { <font color="purple"><b>,</b></font> <a href="#method_parameter">method\_parameter</a>  }   ]  <font color="purple"><b>)</b></font> 
  
**method\_parameter**{: #method_parameter }
:	 \[ <a href="#method_parameter_dir">method\_parameter\_dir</a>  ]  <a href="#data_type">data\_type</a> <a href="#identifier">identifier</a> 
  
**method\_parameter\_dir**{: #method_parameter_dir }
:	<font color="purple"><b>input</b></font>   
        | <font color="purple"><b>output</b></font>   
        | <font color="purple"><b>inout</b></font> 
  
**import\_method\_qualifiers**{: #import_method_qualifiers }
:	<a href="#import_method_phase_qualifiers">import\_method\_phase\_qualifiers</a>   
        | <a href="#import_method_target_template">import\_method\_target\_template</a> 
  
**import\_method\_phase\_qualifiers**{: #import_method_phase_qualifiers }
:	<font color="purple"><b>import</b></font> <a href="#import_function_qualifiers">import\_function\_qualifiers</a> <a href="#type_identifier">type\_identifier</a> <font color="purple"><b>;</b></font> 
  
**import\_function\_qualifiers**{: #import_function_qualifiers }
:	<a href="#method_qualifiers">method\_qualifiers</a>  \[ <a href="#language_identifier">language\_identifier</a>  ]    
        | <a href="#language_identifier">language\_identifier</a> 
  
**method\_qualifiers**{: #method_qualifiers }
:	<font color="purple"><b>target</b></font>   
        | <font color="purple"><b>solve</b></font> 
  
**import\_method\_target\_template**{: #import_method_target_template }
:	<font color="purple"><b>import</b></font> <a href="#language_identifier">language\_identifier</a> <a href="#method_prototype">method\_prototype</a> <font color="purple"><b>=</b></font> <a href="#string">string</a> <font color="purple"><b>;</b></font> 
  
**method\_parameter\_list**{: #method_parameter_list }
:	<font color="purple"><b>(</b></font>  \[ <a href="#expression">expression</a>  { <font color="purple"><b>,</b></font> <a href="#expression">expression</a>  }   ]  <font color="purple"><b>)</b></font> 
  
### B.4.1 Import class declaration
  
**import\_class\_decl**{: #import_class_decl }
:	<font color="purple"><b>import</b></font> <font color="purple"><b>class</b></font> <a href="#import_class_identifier">import\_class\_identifier</a>  \[ <a href="#import_class_extends">import\_class\_extends</a>  ]  <font color="purple"><b>{</b></font>  { <a href="#import_class_method_decl">import\_class\_method\_decl</a>  }  <font color="purple"><b>}</b></font>  \[ <font color="purple"><b>;</b></font>  ]  
  
**import\_class\_extends**{: #import_class_extends }
:	<font color="purple"><b>:</b></font> <a href="#type_identifier">type\_identifier</a>  { <font color="purple"><b>,</b></font> <a href="#type_identifier">type\_identifier</a>  }  
  
**import\_class\_method\_decl**{: #import_class_method_decl }
:	<a href="#method_prototype">method\_prototype</a> <font color="purple"><b>;</b></font> 
  
### B.4.2 Export action
  
**export\_action**{: #export_action }
:	<font color="purple"><b>export</b></font>  \[ <a href="#method_qualifiers">method\_qualifiers</a>  ]  <a href="#action_type_identifier">action\_type\_identifier</a> <a href="#method_parameter_list_prototype">method\_parameter\_list\_prototype</a> <font color="purple"><b>;</b></font> 
  
## B.5 Component declarations
  
**component\_declaration**{: #component_declaration }
:	<font color="purple"><b>component</b></font> <a href="#component_identifier">component\_identifier</a>  \[ <font color="purple"><b>:</b></font> <a href="#component_super_spec">component\_super\_spec</a>  ]  <font color="purple"><b>{</b></font>  { <a href="#component_body_item">component\_body\_item</a>  }  <font color="purple"><b>}</b></font>  \[ <font color="purple"><b>;</b></font>  ]  
  
**component\_super\_spec**{: #component_super_spec }
:	<font color="purple"><b>:</b></font> <a href="#type_identifier">type\_identifier</a> 
  
**component\_body\_item**{: #component_body_item }
:	<a href="#overrides_declaration">overrides\_declaration</a>   
        | <a href="#component_field_declaration">component\_field\_declaration</a>   
        | <a href="#action_declaration">action\_declaration</a>   
        | <a href="#object_bind_stmt">object\_bind\_stmt</a>   
        | <a href="#inline_type_object_declaration">inline\_type\_object\_declaration</a>   
        | <a href="#exec_block">exec\_block</a>   
        | <a href="#package_body_item">package\_body\_item</a> 
  
**component\_field\_declaration**{: #component_field_declaration }
:	<a href="#component_data_declaration">component\_data\_declaration</a>   
        | <a href="#component_pool_declaration">component\_pool\_declaration</a> 
  
**component\_data\_declaration**{: #component_data_declaration }
:	<a href="#data_declaration">data\_declaration</a> 
  
**component\_pool\_declaration**{: #component_pool_declaration }
:	<font color="purple"><b>pool</b></font>  \[ <font color="purple"><b>\[</b></font> <a href="#expression">expression</a> <font color="purple"><b>]</b></font>  ]  <a href="#type_identifier">type\_identifier</a> <a href="#identifier">identifier</a> <font color="purple"><b>;</b></font> 
  
**object\_bind\_stmt**{: #object_bind_stmt }
:	<font color="purple"><b>bind</b></font> <a href="#hierarchical_id">hierarchical\_id</a> <a href="#object_bind_item_or_list">object\_bind\_item\_or\_list</a> <font color="purple"><b>;</b></font> 
  
**object\_bind\_item\_or\_list**{: #object_bind_item_or_list }
:	<a href="#component_path">component\_path</a>   
        | <font color="purple"><b>{</b></font> <a href="#component_path">component\_path</a>  { <font color="purple"><b>,</b></font> <a href="#component_path">component\_path</a>  }  <font color="purple"><b>}</b></font> 
  
**component\_path**{: #component_path }
:	<a href="#component_identifier">component\_identifier</a>  { <font color="purple"><b>.</b></font> <a href="#component_path_elem">component\_path\_elem</a>  }    
        | <font color="purple"><b>\*</b></font> 
  
**component\_path\_elem**{: #component_path_elem }
:	<a href="#component_action_identifier">component\_action\_identifier</a>   
        | <font color="purple"><b>\*</b></font> 
  
**inline\_type\_object\_declaration**{: #inline_type_object_declaration }
:	<font color="purple"><b>pool</b></font>  \[ <font color="purple"><b>\[</b></font> <a href="#expression">expression</a> <font color="purple"><b>]</b></font>  ]  <a href="#struct_qualifier">struct\_qualifier</a> <font color="purple"><b>struct</b></font> <a href="#identifier">identifier</a>  \[ <font color="purple"><b>:</b></font> <a href="#struct_identifier">struct\_identifier</a>  ]  <font color="purple"><b>{</b></font>  { <a href="#struct_body_item">struct\_body\_item</a>  }  <font color="purple"><b>}</b></font>  \[ <font color="purple"><b>;</b></font>  ]  
  
##  B.6 Activity statements
  
**activity\_stmt**{: #activity_stmt }
:	<a href="#activity_if_else_stmt">activity\_if\_else\_stmt</a>   
        | <a href="#activity_repeat_stmt">activity\_repeat\_stmt</a>   
        | <a href="#activity_constraint_stmt">activity\_constraint\_stmt</a>   
        | <a href="#activity_foreach_stmt">activity\_foreach\_stmt</a>   
        | <a href="#activity_action_traversal_stmt">activity\_action\_traversal\_stmt</a>   
        | <a href="#activity_sequence_block_stmt">activity\_sequence\_block\_stmt</a>   
        | <a href="#activity_select_stmt">activity\_select\_stmt</a>   
        | <a href="#activity_parallel_stmt">activity\_parallel\_stmt</a>   
        | <a href="#activity_schedule_stmt">activity\_schedule\_stmt</a>   
        | <a href="#activity_bind_stmt">activity\_bind\_stmt</a> 
  
**activity\_if\_else\_stmt**{: #activity_if_else_stmt }
:	<font color="purple"><b>if</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#activity_stmt">activity\_stmt</a>  \[ <font color="purple"><b>else</b></font> <a href="#activity_stmt">activity\_stmt</a>  ]  
  
**activity\_repeat\_stmt**{: #activity_repeat_stmt }
:	<font color="purple"><b>repeat</b></font> <font color="purple"><b>while</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#activity_sequence_block_stmt">activity\_sequence\_block\_stmt</a>   
        | <font color="purple"><b>repeat</b></font> <font color="purple"><b>(</b></font>  \[ <a href="#identifier">identifier</a> <font color="purple"><b>:</b></font>  ]  <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#activity_sequence_block_stmt">activity\_sequence\_block\_stmt</a>   
        | <font color="purple"><b>repeat</b></font> <a href="#activity_sequence_block_stmt">activity\_sequence\_block\_stmt</a>  \[ <font color="purple"><b>while</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font>  ]  
  
**activity\_sequence\_block\_stmt**{: #activity_sequence_block_stmt }
:	 \[ <font color="purple"><b>sequence</b></font>  ]  <font color="purple"><b>{</b></font>  { <a href="#activity_labeled_stmt">activity\_labeled\_stmt</a>  }  <font color="purple"><b>}</b></font> 
  
**activity\_constraint\_stmt**{: #activity_constraint_stmt }
:	<a href="#constraint">constraint</a> <font color="purple"><b>{</b></font>  { <a href="#constraint_body_item">constraint\_body\_item</a>  }  <font color="purple"><b>}</b></font>   
        | <a href="#single_stmt_constraint">single\_stmt\_constraint</a> 
  
**activity\_foreach\_stmt**{: #activity_foreach_stmt }
:	<font color="purple"><b>foreach</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#activity_sequence_block_stmt">activity\_sequence\_block\_stmt</a> 
  
**activity\_action\_traversal\_stmt**{: #activity_action_traversal_stmt }
:	<a href="#identifier">identifier</a>  \[ <a href="#inline_with_constraint">inline\_with\_constraint</a>  ]    
        | <font color="purple"><b>do</b></font> <a href="#type_identifier">type\_identifier</a>  \[ <a href="#inline_with_constraint">inline\_with\_constraint</a>  ]  <font color="purple"><b>;</b></font> 
  
**inline\_with\_constraint**{: #inline_with_constraint }
:	<font color="purple"><b>with</b></font> <font color="purple"><b>{</b></font>  { <a href="#constraint_body_item">constraint\_body\_item</a>  }  <font color="purple"><b>}</b></font>   
        | <a href="#constant_expression">constant\_expression</a> 
  
**activity\_select\_stmt**{: #activity_select_stmt }
:	<font color="purple"><b>select</b></font> <font color="purple"><b>{</b></font> <a href="#activity_labeled_stmt">activity\_labeled\_stmt</a> <a href="#activity_labeled_stmt">activity\_labeled\_stmt</a>  { <a href="#activity_labeled_stmt">activity\_labeled\_stmt</a>  }  <font color="purple"><b>}</b></font> 
  
**activity\_labeled\_stmt**{: #activity_labeled_stmt }
:	 \[ <a href="#identifier">identifier</a> <font color="purple"><b>:</b></font>  ]  <a href="#activity_stmt">activity\_stmt</a> 
  
**activity\_parallel\_stmt**{: #activity_parallel_stmt }
:	<font color="purple"><b>parallel</b></font> <font color="purple"><b>{</b></font>  { <a href="#activity_labeled_stmt">activity\_labeled\_stmt</a>  }  <font color="purple"><b>}</b></font>  \[ <font color="purple"><b>;</b></font>  ]  
  
**activity\_schedule\_stmt**{: #activity_schedule_stmt }
:	<font color="purple"><b>schedule</b></font> <font color="purple"><b>{</b></font>  { <a href="#activity_labeled_stmt">activity\_labeled\_stmt</a>  }  <font color="purple"><b>}</b></font>  \[ <font color="purple"><b>;</b></font>  ]  
  
**activity\_bind\_stmt**{: #activity_bind_stmt }
:	<font color="purple"><b>bind</b></font> <a href="#hierarchical_id">hierarchical\_id</a> <a href="#activity_bind_item_or_list">activity\_bind\_item\_or\_list</a> <font color="purple"><b>;</b></font> 
  
**activity\_bind\_item\_or\_list**{: #activity_bind_item_or_list }
:	<a href="#hierarchical_id">hierarchical\_id</a>   
        | <font color="purple"><b>{</b></font> <a href="#hierarchical_id">hierarchical\_id</a>  { <font color="purple"><b>,</b></font> <a href="#hierarchical_id">hierarchical\_id</a>  }  <font color="purple"><b>}</b></font> 
  
**symbol\_declaration**{: #symbol_declaration }
:	<font color="purple"><b>symbol</b></font> <a href="#identifier">identifier</a>  \[ <font color="purple"><b>(</b></font> <a href="#symbol_paramlist">symbol\_paramlist</a> <font color="purple"><b>)</b></font>  ]  <font color="purple"><b>=</b></font> <a href="#activity_stmt">activity\_stmt</a> 
  
**symbol\_paramlist**{: #symbol_paramlist }
:	 \[ <a href="#symbol_param">symbol\_param</a>  { <font color="purple"><b>,</b></font> <a href="#symbol_param">symbol\_param</a>  }   ]  
  
**symbol\_param**{: #symbol_param }
:	<a href="#data_type">data\_type</a> <a href="#identifier">identifier</a> 
  
## B.7 Overrides
  
**overrides\_declaration**{: #overrides_declaration }
:	<font color="purple"><b>override</b></font> <font color="purple"><b>{</b></font>  { <a href="#override_stmt">override\_stmt</a>  }  <font color="purple"><b>}</b></font> 
  
**override\_stmt**{: #override_stmt }
:	<a href="#type_override">type\_override</a>   
        | <a href="#instance_override">instance\_override</a> 
  
**type\_override**{: #type_override }
:	<a href="#type">type</a> <a href="#identifier">identifier</a> <font color="purple"><b>with</b></font> <a href="#type_identifier">type\_identifier</a> <font color="purple"><b>;</b></font> 
  
**instance\_override**{: #instance_override }
:	<font color="purple"><b>instance</b></font> <a href="#hierarchical_id">hierarchical\_id</a> <font color="purple"><b>with</b></font> <a href="#identifier">identifier</a> <font color="purple"><b>;</b></font> 
  
## B.8 Data declarations
  
**data\_declaration**{: #data_declaration }
:	<a href="#data_type">data\_type</a> <a href="#data_instantiation">data\_instantiation</a>  { <font color="purple"><b>,</b></font> <a href="#data_instantiation">data\_instantiation</a>  }  
  
**action\_data\_declaration**{: #action_data_declaration }
:	<a href="#action_data_type">action\_data\_type</a> <a href="#data_instantiation">data\_instantiation</a>  { <font color="purple"><b>,</b></font> <a href="#data_instantiation">data\_instantiation</a>  }  <font color="purple"><b>;</b></font> 
  
**data\_instantiation**{: #data_instantiation }
:	<a href="#identifier">identifier</a>  \[ <font color="purple"><b>(</b></font> <a href="#coverspec_portmap_list">coverspec\_portmap\_list</a> <font color="purple"><b>)</b></font>  ]   \[ <a href="#array_dim">array\_dim</a>  ]   \[ <font color="purple"><b>=</b></font> <a href="#constant_expression">constant\_expression</a>  ]  
  
**coverspec\_portmap\_list**{: #coverspec_portmap_list }
:	 \[ <a href="#coverspec_portmap">coverspec\_portmap</a>  { <font color="purple"><b>,</b></font> <a href="#coverspec_portmap">coverspec\_portmap</a>  }    
         | <a href="#hierarchical_id">hierarchical\_id</a>  { <font color="purple"><b>,</b></font> <a href="#hierarchical_id">hierarchical\_id</a>  }   ]  
  
**coverspec\_portmap**{: #coverspec_portmap }
:	<font color="purple"><b>.</b></font> <a href="#identifier">identifier</a> <font color="purple"><b>(</b></font> <a href="#hierarchical_id">hierarchical\_id</a> <font color="purple"><b>)</b></font> 
  
**array\_dim**{: #array_dim }
:	 \[ <a href="#constant_expression">constant\_expression</a>  ]  
  
## B.9 Data types
  
**data\_type**{: #data_type }
:	<a href="#scalar_data_type">scalar\_data\_type</a>   
        | <a href="#user_defined_datatype">user\_defined\_datatype</a> 
  
**action\_data\_type**{: #action_data_type }
:	<a href="#scalar_data_type">scalar\_data\_type</a>   
        | <a href="#user_defined_datatype">user\_defined\_datatype</a>   
        | <a href="#action_type">action\_type</a> 
  
**scalar\_data\_type**{: #scalar_data_type }
:	<a href="#chandle_type">chandle\_type</a>   
        | <a href="#integer_type">integer\_type</a>   
        | <a href="#string_type">string\_type</a>   
        | <a href="#bool_type">bool\_type</a> 
  
**chandle\_type**{: #chandle_type }
:	<font color="purple"><b>chandle</b></font> 
  
**integer\_type**{: #integer_type }
:	<a href="#integer_atom_type">integer\_atom\_type</a>  \[ <font color="purple"><b>\[</b></font> <a href="#expression">expression</a>  \[ <font color="purple"><b>:</b></font> <a href="#expression">expression</a>   
          | <font color="purple"><b>,</b></font> <a href="#open_range_value">open\_range\_value</a>  { <font color="purple"><b>,</b></font> <a href="#open_range_value">open\_range\_value</a>  }    
          | <font color="purple"><b>..</b></font> <a href="#expression">expression</a>  { <font color="purple"><b>,</b></font> <a href="#open_range_value">open\_range\_value</a>  }   ]  <font color="purple"><b>]</b></font>  ]  
  
**integer\_atom\_type**{: #integer_atom_type }
:	<font color="purple"><b>int</b></font>   
        | <font color="purple"><b>bit</b></font> 
  
**open\_range\_value**{: #open_range_value }
:	<a href="#expression">expression</a>  \[ <font color="purple"><b>..</b></font> <a href="#expression">expression</a>  ]  
  
**open\_range\_list**{: #open_range_list }
:	<a href="#open_range_value">open\_range\_value</a>  { <font color="purple"><b>,</b></font> <a href="#open_range_value">open\_range\_value</a>  }  
  
**string\_type**{: #string_type }
:	<font color="purple"><b>string</b></font> 
  
**bool\_type**{: #bool_type }
:	<font color="purple"><b>bool</b></font> 
  
**user\_defined\_datatype**{: #user_defined_datatype }
:	<a href="#type_identifier">type\_identifier</a> 
  
**action\_type**{: #action_type }
:	<a href="#type_identifier">type\_identifier</a> 
  
**struct\_type**{: #struct_type }
:	<a href="#type_identifier">type\_identifier</a> 
  
**enum\_type**{: #enum_type }
:	<a href="#type_identifier">type\_identifier</a> 
  
**enum\_declaration**{: #enum_declaration }
:	<font color="purple"><b>enum</b></font> <a href="#enum_identifier">enum\_identifier</a>  {  \[ <a href="#enum_item">enum\_item</a>  { <font color="purple"><b>,</b></font> <a href="#enum_item">enum\_item</a>  }   ]   }   \[ <font color="purple"><b>;</b></font>  ]  
  
**enum\_item**{: #enum_item }
:	<a href="#identifier">identifier</a>  \[ <font color="purple"><b>=</b></font> <a href="#constant_expression">constant\_expression</a>  ]  
  
**typedef\_type**{: #typedef_type }
:	<a href="#type_identifier">type\_identifier</a> 
  
**typedef\_declaration**{: #typedef_declaration }
:	<font color="purple"><b>typedef</b></font> <a href="#data_type">data\_type</a> <a href="#identifier">identifier</a> <font color="purple"><b>;</b></font> 
  
## B.10 Constraint
  
**constraint\_declaration**{: #constraint_declaration }
:	 \[ <font color="purple"><b>dynamic</b></font>  ]  <font color="purple"><b>constraint</b></font> <a href="#identifier">identifier</a> <font color="purple"><b>{</b></font>  { <a href="#constraint_body_item">constraint\_body\_item</a>  }  <font color="purple"><b>}</b></font>   
        | <font color="purple"><b>constraint</b></font> <font color="purple"><b>{</b></font>  { <a href="#constraint_body_item">constraint\_body\_item</a>  }  <font color="purple"><b>}</b></font>   
        | <font color="purple"><b>constraint</b></font> <a href="#single_stmt_constraint">single\_stmt\_constraint</a> 
  
**constraint\_body\_item**{: #constraint_body_item }
:	<a href="#expression_constraint_item">expression\_constraint\_item</a>   
        | <a href="#foreach_constraint_item">foreach\_constraint\_item</a>   
        | <a href="#if_constraint_item">if\_constraint\_item</a>   
        | <a href="#unique_constraint_item">unique\_constraint\_item</a> 
  
**expression\_constraint\_item**{: #expression_constraint_item }
:	<a href="#expression">expression</a> <a href="#implicand_constraint_item">implicand\_constraint\_item</a>   
        | <font color="purple"><b>;</b></font> 
  
**implicand\_constraint\_item**{: #implicand_constraint_item }
:	<font color="purple"><b>-></b></font> <a href="#constraint_set">constraint\_set</a> 
  
**constraint\_set**{: #constraint_set }
:	<a href="#constraint_body_item">constraint\_body\_item</a>   
        | <a href="#constraint_block">constraint\_block</a> 
  
**constraint\_block**{: #constraint_block }
:	<font color="purple"><b>{</b></font>  { <a href="#constraint_body_item">constraint\_body\_item</a>  }  <font color="purple"><b>}</b></font> 
  
**foreach\_constraint\_item**{: #foreach_constraint_item }
:	<font color="purple"><b>foreach</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#constraint_set">constraint\_set</a> 
  
**if\_constraint\_item**{: #if_constraint_item }
:	<font color="purple"><b>if</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#constraint_set">constraint\_set</a>  \[ <font color="purple"><b>else</b></font> <a href="#constraint_set">constraint\_set</a>  ]  
  
**unique\_constraint\_item**{: #unique_constraint_item }
:	<font color="purple"><b>unique</b></font> <font color="purple"><b>{</b></font> <a href="#hierarchical_id">hierarchical\_id</a>  { <font color="purple"><b>,</b></font> <a href="#hierarchical_id">hierarchical\_id</a>  }  <font color="purple"><b>}</b></font> <font color="purple"><b>;</b></font> 
  
**single\_stmt\_constraint**{: #single_stmt_constraint }
:	<a href="#expression_constraint_item">expression\_constraint\_item</a>   
        | <a href="#unique_constraint_item">unique\_constraint\_item</a> 
  
**scheduling\_constraint**{: #scheduling_constraint }
:	<font color="purple"><b>constraint</b></font> <font color="purple"><b>(</b></font> <font color="purple"><b>parallel</b></font>   
        | <font color="purple"><b>sequence</b></font> <font color="purple"><b>)</b></font> <font color="purple"><b>{</b></font> <a href="#hierarchical_id">hierarchical\_id</a> <font color="purple"><b>,</b></font> <a href="#hierarchical_id">hierarchical\_id</a>  { <font color="purple"><b>,</b></font> <a href="#hierarchical_id">hierarchical\_id</a>  }  <font color="purple"><b>}</b></font> <font color="purple"><b>;</b></font> 
  
## B.11 Coverspec
  
**coverspec\_declaration**{: #coverspec_declaration }
:	<font color="purple"><b>coverspec</b></font> <a href="#identifier">identifier</a> <font color="purple"><b>(</b></font> <a href="#coverspec_port">coverspec\_port</a>  { <font color="purple"><b>,</b></font> <a href="#coverspec_port">coverspec\_port</a>  }  <font color="purple"><b>)</b></font> <font color="purple"><b>{</b></font>  { <a href="#coverspec_body_item">coverspec\_body\_item</a>  }  <font color="purple"><b>}</b></font>  \[ <font color="purple"><b>;</b></font>  ]  
  
**coverspec\_port**{: #coverspec_port }
:	<a href="#data_type">data\_type</a> <a href="#identifier">identifier</a> 
  
**coverspec\_body\_item**{: #coverspec_body_item }
:	<a href="#coverspec_option">coverspec\_option</a>   
        | <a href="#coverspec_coverpoint">coverspec\_coverpoint</a>   
        | <a href="#coverspec_cross">coverspec\_cross</a>   
        | <a href="#constraint_declaration">constraint\_declaration</a> 
  
**coverspec\_option**{: #coverspec_option }
:	<a href="#option">option</a> <font color="purple"><b>.</b></font> <a href="#identifier">identifier</a> <font color="purple"><b>=</b></font> <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>;</b></font> 
  
**coverspec\_coverpoint**{: #coverspec_coverpoint }
:	<a href="#coverpoint_identifier">coverpoint\_identifier</a> <font color="purple"><b>:</b></font> <font color="purple"><b>coverpoint</b></font> <a href="#coverpoint_target_identifier">coverpoint\_target\_identifier</a> <font color="purple"><b>{</b></font>  { <a href="#coverspec_coverpoint_body_item">coverspec\_coverpoint\_body\_item</a>  }  <font color="purple"><b>}</b></font>  \[ <font color="purple"><b>;</b></font>  ]    
        | <font color="purple"><b>;</b></font> 
  
**coverspec\_coverpoint\_body\_item**{: #coverspec_coverpoint_body_item }
:	<a href="#coverspec_option">coverspec\_option</a>   
        | <a href="#coverspec_coverpoint_binspec">coverspec\_coverpoint\_binspec</a>   
        | <a href="#ignore_constraint">ignore\_constraint</a>   
        | <a href="#illegal_constraint">illegal\_constraint</a> 
  
**coverspec\_coverpoint\_binspec**{: #coverspec_coverpoint_binspec }
:	<font color="purple"><b>bins</b></font> <a href="#identifier">identifier</a> <a href="#bin_specification">bin\_specification</a>   
        | <a href="#hierarchical_id">hierarchical\_id</a> <font color="purple"><b>;</b></font> 
  
**ignore\_constraint**{: #ignore_constraint }
:	<font color="purple"><b>ignore</b></font> <a href="#expression">expression</a> 
  
**illegal\_constraint**{: #illegal_constraint }
:	<font color="purple"><b>illegal</b></font> <a href="#expression">expression</a> <font color="purple"><b>;</b></font> 
  
**coverspec\_cross**{: #coverspec_cross }
:	<a href="#ID">ID</a> <font color="purple"><b>:</b></font> <font color="purple"><b>cross</b></font> <a href="#coverpoint_identifier">coverpoint\_identifier</a>  { <font color="purple"><b>,</b></font> <a href="#coverpoint_identifier">coverpoint\_identifier</a>  }  <font color="purple"><b>{</b></font>  { <a href="#coverspec_cross_body_item">coverspec\_cross\_body\_item</a>  }  <font color="purple"><b>}</b></font>   
        | <font color="purple"><b>;</b></font> 
  
**coverspec\_cross\_body\_item**{: #coverspec_cross_body_item }
:	<a href="#coverspec_option">coverspec\_option</a>   
        | <a href="#ignore_constraint">ignore\_constraint</a>   
        | <a href="#illegal_constraint">illegal\_constraint</a> 
  
<em> Bins </em>  
**bins\_declaration**{: #bins_declaration }
:	<font color="purple"><b>bins</b></font> <a href="#identifier">identifier</a>  \[ <a href="#variable_identifier">variable\_identifier</a>  ]  <a href="#bin_specification">bin\_specification</a> <font color="purple"><b>;</b></font> 
  
**bin\_specification**{: #bin_specification }
:	<a href="#bin_specifier">bin\_specifier</a>  { <a href="#bin_specifier">bin\_specifier</a>  }   \[ <a href="#bin_wildcard">bin\_wildcard</a>  ]  
  
**bin\_specifier**{: #bin_specifier }
:	<a href="#explicit_bin_value">explicit\_bin\_value</a>   
        | <a href="#explicit_bin_range">explicit\_bin\_range</a>   
        | <a href="#bin_range_divide">bin\_range\_divide</a>   
        | <a href="#bin_range_size">bin\_range\_size</a> 
  
**explicit\_bin\_value**{: #explicit_bin_value }
:	 \[ <a href="#constant">constant</a>  ]  
  
**explicit\_bin\_range**{: #explicit_bin_range }
:	 \[ <a href="#constant">constant</a> <font color="purple"><b>..</b></font> <a href="#constant">constant</a>  ]  
  
**bin\_range\_divide**{: #bin_range_divide }
:	<a href="#explicit_bin_range">explicit\_bin\_range</a> <font color="purple"><b>/</b></font> <a href="#constant">constant</a> 
  
**bin\_range\_size**{: #bin_range_size }
:	<a href="#explicit_bin_range">explicit\_bin\_range</a> <font color="purple"><b>:</b></font> <a href="#constant">constant</a> 
  
**bin\_wildcard**{: #bin_wildcard }
:	 \[ <font color="purple"><b>\*</b></font>  ]  
  
## B.12 Expression
  
**constant\_expression**{: #constant_expression }
:	<a href="#expression">expression</a> 
  
**expression**{: #expression }
:	<a href="#condition_expr">condition\_expr</a> 
  
**condition\_expr**{: #condition_expr }
:	<a href="#logical_or_expr">logical\_or\_expr</a>  { <font color="purple"><b>?</b></font> <a href="#logical_or_expr">logical\_or\_expr</a> <font color="purple"><b>:</b></font> <a href="#logical_or_expr">logical\_or\_expr</a>  }  
  
**logical\_or\_expr**{: #logical_or_expr }
:	<a href="#logical_and_expr">logical\_and\_expr</a>  { <font color="purple"><b>||</b></font> <a href="#logical_and_expr">logical\_and\_expr</a>  }  
  
**logical\_and\_expr**{: #logical_and_expr }
:	<a href="#binary_or_expr">binary\_or\_expr</a>  { <font color="purple"><b>&&</b></font> <a href="#binary_or_expr">binary\_or\_expr</a>  }  
  
**binary\_or\_expr**{: #binary_or_expr }
:	<a href="#binary_xor_expr">binary\_xor\_expr</a>  { <font color="purple"><b>|</b></font> <a href="#binary_xor_expr">binary\_xor\_expr</a>  }  
  
**binary\_xor\_expr**{: #binary_xor_expr }
:	<a href="#binary_and_expr">binary\_and\_expr</a>  { <font color="purple"><b>^</b></font> <a href="#binary_and_expr">binary\_and\_expr</a>  }  
  
**binary\_and\_expr**{: #binary_and_expr }
:	<a href="#logical_equality_expr">logical\_equality\_expr</a>  { <font color="purple"><b>&</b></font> <a href="#logical_equality_expr">logical\_equality\_expr</a>  }  
  
**logical\_equality\_expr**{: #logical_equality_expr }
:	<a href="#logical_inequality_expr">logical\_inequality\_expr</a>  { <a href="#eq_neq_op">eq\_neq\_op</a> <a href="#logical_inequality_expr">logical\_inequality\_expr</a>  }  
  
**logical\_inequality\_expr**{: #logical_inequality_expr }
:	<a href="#binary_shift_expr">binary\_shift\_expr</a>  { <font color="purple"><b><</b></font>   
         | <font color="purple"><b><=</b></font>   
         | <font color="purple"><b>></b></font>   
         | <font color="purple"><b>>=</b></font> <a href="#binary_shift_expr">binary\_shift\_expr</a>   
         | <font color="purple"><b>inside</b></font>  \[ <a href="#open_range_list">open\_range\_list</a>  ]   }  
  
**binary\_shift\_expr**{: #binary_shift_expr }
:	<a href="#binary_add_sub_expr">binary\_add\_sub\_expr</a>  { <a href="#shift_op">shift\_op</a> <a href="#binary_add_sub_expr">binary\_add\_sub\_expr</a>  }  
  
**binary\_add\_sub\_expr**{: #binary_add_sub_expr }
:	<a href="#binary_mul_div_mod_expr">binary\_mul\_div\_mod\_expr</a>  { <a href="#add_sub_op">add\_sub\_op</a> <a href="#binary_mul_div_mod_expr">binary\_mul\_div\_mod\_expr</a>  }  
  
**binary\_mul\_div\_mod\_expr**{: #binary_mul_div_mod_expr }
:	<a href="#binary_exp_expr">binary\_exp\_expr</a>  { <a href="#mul_div_mod_op">mul\_div\_mod\_op</a> <a href="#binary_exp_expr">binary\_exp\_expr</a>  }  
  
**binary\_exp\_expr**{: #binary_exp_expr }
:	<a href="#unary_expr">unary\_expr</a>  { <font color="purple"><b>\*\*</b></font> <a href="#unary_expr">unary\_expr</a>  }  
  
**unary\_expr**{: #unary_expr }
:	 \[ <a href="#unary_op">unary\_op</a>  ]  <a href="#primary">primary</a> 
  
**unary\_op**{: #unary_op }
:	<font color="purple"><b>+</b></font>   
        | <font color="purple"><b>-</b></font>   
        | <font color="purple"><b>!</b></font>   
        | <font color="purple"><b>~</b></font>   
        | <font color="purple"><b>&</b></font>   
        | <font color="purple"><b>|</b></font>   
        | <font color="purple"><b>^</b></font> 
  
**primary**{: #primary }
:	<a href="#number">number</a>   
        | <a href="#bool_literal">bool\_literal</a>   
        | <a href="#paren_expr">paren\_expr</a>   
        | <a href="#string">string</a>   
        | <a href="#variable_ref">variable\_ref</a>   
        | <a href="#method_function_call">method\_function\_call</a> 
  
**paren\_expr**{: #paren_expr }
:	<font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> 
  
**variable\_ref**{: #variable_ref }
:	<a href="#hierarchical_id">hierarchical\_id</a>  \[ <font color="purple"><b>\[</b></font> <a href="#expression">expression</a>  \[ <font color="purple"><b>:</b></font> <a href="#expression">expression</a> <font color="purple"><b>]</b></font>  ]   ]  
  
**method\_function\_call**{: #method_function_call }
:	<a href="#method_call">method\_call</a>   
        | <a href="#function_call">function\_call</a> 
  
**method\_call**{: #method_call }
:	<a href="#hierarchical_id">hierarchical\_id</a> <a href="#method_parameter_list">method\_parameter\_list</a> 
  
**function\_call**{: #function_call }
:	<a href="#ID">ID</a>  \[ <font color="purple"><b>::</b></font> <a href="#ID">ID</a>  \[ <font color="purple"><b>::</b></font> <a href="#ID">ID</a>  ]   ]  <a href="#method_parameter_list">method\_parameter\_list</a> 
  
**mul\_div\_mod\_op**{: #mul_div_mod_op }
:	<font color="purple"><b>\*</b></font>   
        | <font color="purple"><b>/</b></font>   
        | <font color="purple"><b>%</b></font> 
  
**add\_sub\_op**{: #add_sub_op }
:	<font color="purple"><b>+</b></font>   
        | <font color="purple"><b>-</b></font> 
  
**shift\_op**{: #shift_op }
:	<font color="purple"><b><<</b></font>   
        | <font color="purple"><b>>></b></font> 
  
**eq\_neq\_op**{: #eq_neq_op }
:	<font color="purple"><b>==</b></font>   
        | <font color="purple"><b>!=</b></font> 
  
## B.13 Identifiers and literals
  
**constant**{: #constant }
:	<a href="#number">number</a>   
        | <a href="#identifier">identifier</a> 
  
**identifier**{: #identifier }
:	<a href="#ID">ID</a>   
        | <a href="#ESCAPED_ID">ESCAPED\_ID</a> 
  
**hierarchical\_id**{: #hierarchical_id }
:	<a href="#identifier">identifier</a>  { <font color="purple"><b>.</b></font> <a href="#identifier">identifier</a>  }  
  
**action\_type\_identifier**{: #action_type_identifier }
:	<a href="#type_identifier">type\_identifier</a> 
  
**type\_identifier**{: #type_identifier }
:	<a href="#ID">ID</a>  { <font color="purple"><b>::</b></font> <a href="#ID">ID</a>  }  
  
**hierarchical\_type\_identifier**{: #hierarchical_type_identifier }
:	<a href="#ID">ID</a> <font color="purple"><b>::</b></font> <a href="#ID">ID</a>  { <font color="purple"><b>::</b></font> <a href="#ID">ID</a>  }  
  
**package\_identifier**{: #package_identifier }
:	<a href="#hierarchical_id">hierarchical\_id</a> 
  
**coverpoint\_target\_identifier**{: #coverpoint_target_identifier }
:	<a href="#hierarchical_id">hierarchical\_id</a> 
  
**action\_identifier**{: #action_identifier }
:	<a href="#identifier">identifier</a> 
  
**struct\_identifier**{: #struct_identifier }
:	<a href="#identifier">identifier</a> 
  
**component\_identifier**{: #component_identifier }
:	<a href="#identifier">identifier</a> 
  
**component\_action\_identifier**{: #component_action_identifier }
:	<a href="#identifier">identifier</a> 
  
**coverpoint\_identifier**{: #coverpoint_identifier }
:	<a href="#identifier">identifier</a> 
  
**enum\_identifier**{: #enum_identifier }
:	<a href="#identifier">identifier</a> 
  
**import\_class\_identifier**{: #import_class_identifier }
:	<a href="#identifier">identifier</a> 
  
**language\_identifier**{: #language_identifier }
:	<a href="#identifier">identifier</a> 
  
**method\_identifier**{: #method_identifier }
:	<a href="#identifier">identifier</a> 
  
**pool\_identifier**{: #pool_identifier }
:	<a href="#identifier">identifier</a> 
  
**variable\_identifier**{: #variable_identifier }
:	<a href="#identifier">identifier</a> 
  
**bin\_identifier**{: #bin_identifier }
:	<a href="#identifier">identifier</a> 
  
**exec\_kind\_identifier**{: #exec_kind_identifier }
:	<a href="#identifier">identifier</a> 
  
**filename\_string**{: #filename_string }
:	<a href="#DOUBLE_QUOTED_STRING">DOUBLE\_QUOTED\_STRING</a> 
  
**bool\_literal**{: #bool_literal }
:	<font color="purple"><b>true</b></font>   
        | <font color="purple"><b>false</b></font> 
  
## B.14 Numbers
  
**number**{: #number }
:	<a href="#based_hex_number">based\_hex\_number</a>   
        | <a href="#based_dec_number">based\_dec\_number</a>   
        | <a href="#based_bin_number">based\_bin\_number</a>   
        | <a href="#based_oct_number">based\_oct\_number</a>   
        | <a href="#dec_number">dec\_number</a>   
        | <a href="#oct_number">oct\_number</a>   
        | <a href="#hex_number">hex\_number</a> 
  
**based\_hex\_number**{: #based_hex_number }
:	 \[ <a href="#DEC_LITERAL">DEC\_LITERAL</a>  ]  <a href="#BASED_HEX_LITERAL">BASED\_HEX\_LITERAL</a> 
  
**DEC\_LITERAL**{: #DEC_LITERAL }
:	 \[ <em>1-9</em> ]   {  \[ <em>0-9</em> ]    
         | <font color="purple"><b>\_</b></font>  }  
  
**BASED\_HEX\_LITERAL**{: #BASED_HEX_LITERAL }
:	<font color="purple"><b>'</b></font>  \[ <em>s|S</em> ]  <em>h|H</em> \[ <em>0-9</em> ]    
        |  \[ <em>a-f</em> ]    
        |  \[ <em>A-F</em> ]   {  \[ <em>0-9</em> ]    
         |  \[ <em>a-f</em> ]    
         |  \[ <em>A-F</em> ]    
         | <font color="purple"><b>\_</b></font>  }  
  
**based\_dec\_number**{: #based_dec_number }
:	 \[ <a href="#DEC_LITERAL">DEC\_LITERAL</a>  ]  <a href="#BASED_DEC_LITERAL">BASED\_DEC\_LITERAL</a> 
  
**BASED\_DEC\_LITERAL**{: #BASED_DEC_LITERAL }
:	 \[ <em>s|S</em> ]  <em>d|D</em> \[ <em>0-9</em> ]   {  \[ <em>0-9</em> ]    
         | <font color="purple"><b>\_</b></font>  }  
  
**based\_bin\_number**{: #based_bin_number }
:	 \[ <a href="#DEC_LITERAL">DEC\_LITERAL</a>  ]  <a href="#BASED_BIN_LITERAL">BASED\_BIN\_LITERAL</a> 
  
**BASED\_BIN\_LITERAL**{: #BASED_BIN_LITERAL }
:	<font color="purple"><b>'</b></font>  \[ <em>s|S</em> ]  <em>b|B</em> \[ <em>0-1</em> ]   {  \[ <em>0-1</em> ]    
         | <font color="purple"><b>\_</b></font>  }  
  
**based\_oct\_number**{: #based_oct_number }
:	 \[ <a href="#DEC_LITERAL">DEC\_LITERAL</a>  ]  <a href="#BASED_OCT_LITERAL">BASED\_OCT\_LITERAL</a> 
  
**BASED\_OCT\_LITERAL**{: #BASED_OCT_LITERAL }
:	<font color="purple"><b>'</b></font>  \[ <em>s|S</em> ]  <em>o|O</em> \[ <em>0-7</em> ]   {  \[ <em>0-7</em> ]    
         | <font color="purple"><b>\_</b></font>  }  
  
**dec\_number**{: #dec_number }
:	<a href="#DEC_LITERAL">DEC\_LITERAL</a> 
  
**oct\_number**{: #oct_number }
:	<a href="#OCT_LITERAL">OCT\_LITERAL</a> 
  
**OCT\_LITERAL**{: #OCT_LITERAL }
:	<font color="purple"><b>0</b></font>  \[ <em>0-7</em> ]  
  
**hex\_number**{: #hex_number }
:	<a href="#HEX_LITERAL">HEX\_LITERAL</a> 
  
**HEX\_LITERAL**{: #HEX_LITERAL }
:	<em>0x</em> \[ <em>0-9</em> ]    
        |  \[ <em>a-f</em> ]    
        |  \[ <em>A-F</em> ]   {  \[ <em>0-9</em> ]    
         |  \[ <em>a-f</em> ]    
         |  \[ <em>A-F</em> ]    
         | <font color="purple"><b>\_</b></font>  }  
  
## B.15 Comments
  
**SL\_COMMENT**{: #SL_COMMENT }
:	<font color="purple"><b>//</b></font> <em>{any\_ASCII\_character\_except\_newline}\n</em>
  
**ML\_COMMENT**{: #ML_COMMENT }
:	<font color="purple"><b>/\*</b></font>  { <em>any\_ASCII\_character</em> }  <font color="purple"><b>\*/</b></font> 
  
**string**{: #string }
:	<a href="#DOUBLE_QUOTED_STRING">DOUBLE\_QUOTED\_STRING</a>   
        | <a href="#TRIPLE_DOUBLE_QUOTED_STRING">TRIPLE\_DOUBLE\_QUOTED\_STRING</a> 
  
**DOUBLE\_QUOTED\_STRING**{: #DOUBLE_QUOTED_STRING }
:	<font color="purple"><b>"</b></font>  { <em>\|!\|"</em> }  <font color="purple"><b>"</b></font> 
  
**TRIPLE\_DOUBLE\_QUOTED\_STRING**{: #TRIPLE_DOUBLE_QUOTED_STRING }
:	<font color="purple"><b>"""</b></font>  { <em>any\_ASCII\_character</em> }  <font color="purple"><b>"""</b></font> 
  
**ID**{: #ID }
:	 \[ <em>a-z</em> ]    
        |  \[ <em>A-Z</em> ]    
        | <em>\_</em> {  \[ <em>a-z</em> ]    
         |  \[ <em>A-Z</em> ]    
         | <em>\_</em>  
         |  \[ <em>0-9</em> ]   }  
  
**ESCAPED\_ID**{: #ESCAPED_ID }
:	<font color="purple"><b>\</b></font>  { <em>any\_ASCII\_character\_except\_whitespace</em> }  <em>whitespace</em>
