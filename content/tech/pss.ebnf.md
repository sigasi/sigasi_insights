---
title: "Portable Test and Stimulus Standard Version 1.0"
layout: page 
pager: true
author: Sigasi
date: 2018-06-27
comments: true
tags:
  - ebnf
---
<em>
Copyright © 2017 - 2018 Accellera. All rights reserved.

Get the full Language Reference Manual, free of charge, at 
<http://www.accellera.org/downloads/standards/portable-stimulus>

Sigasi has created this browsable version of the grammar, hoping that it would be useful to you, but without any warranty whatsoever.

[More browsable grammars of Hardware Description and Verification languages](/tags/ebnf).
</em>  
## Formal syntax
  
<em>The PSS formal syntax is described using Backus-Naur Form (BNF). The syntax of the PSS source is derived from the starting symbol Model. If there is a conflict between a grammar element shown anywhere in this Standard and the material in this annex, the material shown in this annex shall take precedence.  </em>  
<a name="Model"></a>**Model**
:	 { <a href="#portable_stimulus_description">portable\_stimulus\_description</a>  }  
  
<a name="portable_stimulus_description"></a>**portable\_stimulus\_description**
:	<a href="#package_body_item">package\_body\_item</a>   
        | <a href="#package_declaration">package\_declaration</a>   
        | <a href="#component_declaration">component\_declaration</a> 
  
## B.1 Package declarations
  
<a name="package_declaration"></a>**package\_declaration**
:	<font color="purple"><b>package</b></font> <a href="#package_identifier">package\_identifier</a> <font color="purple"><b>{</b></font>  { <a href="#package_body_item">package\_body\_item</a>  }  <font color="purple"><b>}</b></font>  \[ <font color="purple"><b>;</b></font>  ]  
  
<a name="package_body_item"></a>**package\_body\_item**
:	<a href="#abstract_action_declaration">abstract\_action\_declaration</a>   
        | <a href="#struct_declaration">struct\_declaration</a>   
        | <a href="#enum_declaration">enum\_declaration</a>   
        | <a href="#covergroup_declaration">covergroup\_declaration</a>   
        | <a href="#function_decl">function\_decl</a>   
        | <a href="#import_class_decl">import\_class\_decl</a>   
        | <a href="#function_qualifiers">function\_qualifiers</a>   
        | <a href="#export_action">export\_action</a>   
        | <a href="#typedef_declaration">typedef\_declaration</a>   
        | <a href="#import_stmt">import\_stmt</a>   
        | <a href="#extend_stmt">extend\_stmt</a>   
        | <a href="#const_field_declaration">const\_field\_declaration</a>   
        | <a href="#static_const_field_declaration">static\_const\_field\_declaration</a>   
        | <a href="#compile_assert_stmt">compile\_assert\_stmt</a>   
        | <a href="#package_body_compile_if">package\_body\_compile\_if</a> 
  
<a name="import_stmt"></a>**import\_stmt**
:	<font color="purple"><b>import</b></font> <a href="#package_import_pattern">package\_import\_pattern</a> <font color="purple"><b>;</b></font> 
  
<a name="package_import_pattern"></a>**package\_import\_pattern**
:	<a href="#type_identifier">type\_identifier</a>  \[ <font color="purple"><b>::</b></font> <font color="purple"><b>\*</b></font>  ]  
  
<a name="extend_stmt"></a>**extend\_stmt**
:	<font color="purple"><b>extend</b></font> <font color="purple"><b>action</b></font> <a href="#type_identifier">type\_identifier</a> <font color="purple"><b>{</b></font>  { <a href="#action_body_item">action\_body\_item</a>  }  <font color="purple"><b>}</b></font>  \[ <font color="purple"><b>;</b></font>  ]    
        | <font color="purple"><b>extend</b></font> <font color="purple"><b>component</b></font> <a href="#type_identifier">type\_identifier</a> <font color="purple"><b>{</b></font>  { <a href="#component_body_item">component\_body\_item</a>  }  <font color="purple"><b>}</b></font>  \[ <font color="purple"><b>;</b></font>  ]    
        | <font color="purple"><b>extend</b></font> <a href="#struct_kind">struct\_kind</a> <a href="#type_identifier">type\_identifier</a> <font color="purple"><b>{</b></font>  { <a href="#struct_body_item">struct\_body\_item</a>  }  <font color="purple"><b>}</b></font>  \[ <font color="purple"><b>;</b></font>  ]    
        | <font color="purple"><b>extend</b></font> <font color="purple"><b>enum</b></font> <a href="#type_identifier">type\_identifier</a> <font color="purple"><b>{</b></font>  \[ <a href="#enum_item">enum\_item</a>  { <font color="purple"><b>,</b></font> <a href="#enum_item">enum\_item</a>  }   ]  <font color="purple"><b>}</b></font>  \[ <font color="purple"><b>;</b></font>  ]  
  
<a name="const_field_declaration"></a>**const\_field\_declaration**
:	<font color="purple"><b>const</b></font> <a href="#const_data_declaration">const\_data\_declaration</a> 
  
<a name="const_data_declaration"></a>**const\_data\_declaration**
:	<a href="#scalar_data_type">scalar\_data\_type</a> <a href="#const_data_instantiation">const\_data\_instantiation</a>  { <font color="purple"><b>,</b></font> <a href="#const_data_instantiation">const\_data\_instantiation</a>  }  <font color="purple"><b>;</b></font> 
  
<a name="const_data_instantiation"></a>**const\_data\_instantiation**
:	<a href="#identifier">identifier</a> <font color="purple"><b>=</b></font> <a href="#constant_expression">constant\_expression</a> 
  
<a name="static_const_field_declaration"></a>**static\_const\_field\_declaration**
:	<font color="purple"><b>static</b></font> <font color="purple"><b>const</b></font> <a href="#const_data_declaration">const\_data\_declaration</a> 
  
## B.2 Action declarations
  
<a name="action_declaration"></a>**action\_declaration**
:	<font color="purple"><b>action</b></font> <a href="#action_identifier">action\_identifier</a>  \[ <a href="#action_super_spec">action\_super\_spec</a>  ]  <font color="purple"><b>{</b></font>  { <a href="#action_body_item">action\_body\_item</a>  }  <font color="purple"><b>}</b></font>  \[ <font color="purple"><b>;</b></font>  ]  
  
<a name="abstract_action_declaration"></a>**abstract\_action\_declaration**
:	<font color="purple"><b>abstract</b></font> <font color="purple"><b>action</b></font> <a href="#action_identifier">action\_identifier</a>  \[ <a href="#action_super_spec">action\_super\_spec</a>  ]  <font color="purple"><b>{</b></font>  { <a href="#action_body_item">action\_body\_item</a>  }  <font color="purple"><b>}</b></font>  \[ <font color="purple"><b>;</b></font>  ]  
  
<a name="action_super_spec"></a>**action\_super\_spec**
:	<font color="purple"><b>:</b></font> <a href="#type_identifier">type\_identifier</a> 
  
<a name="action_body_item"></a>**action\_body\_item**
:	<a href="#activity_declaration">activity\_declaration</a>   
        | <a href="#overrides_declaration">overrides\_declaration</a>   
        | <a href="#constraint_declaration">constraint\_declaration</a>   
        | <a href="#action_field_declaration">action\_field\_declaration</a>   
        | <a href="#symbol_declaration">symbol\_declaration</a>   
        | <a href="#covergroup_declaration">covergroup\_declaration</a>   
        | <a href="#exec_block_stmt">exec\_block\_stmt</a>   
        | <a href="#static_const_field_declaration">static\_const\_field\_declaration</a>   
        | <a href="#action_scheduling_constraint">action\_scheduling\_constraint</a>   
        | <a href="#attr_group">attr\_group</a>   
        | <a href="#compile_assert_stmt">compile\_assert\_stmt</a>   
        | <a href="#inline_covergroup">inline\_covergroup</a>   
        | <a href="#action_body_compile_if">action\_body\_compile\_if</a> 
  
<a name="activity_declaration"></a>**activity\_declaration**
:	<font color="purple"><b>activity</b></font> <font color="purple"><b>{</b></font>  {  \[ <a href="#identifier">identifier</a> <font color="purple"><b>:</b></font>  ]  <a href="#activity_stmt">activity\_stmt</a>  }  <font color="purple"><b>}</b></font>  \[ <font color="purple"><b>;</b></font>  ]  
  
<a name="action_field_declaration"></a>**action\_field\_declaration**
:	<a href="#object_ref_field">object\_ref\_field</a>   
        | <a href="#attr_field">attr\_field</a>   
        | <a href="#action_handle_declaration">action\_handle\_declaration</a>   
        | <a href="#activity_data_field">activity\_data\_field</a> 
  
<a name="object_ref_field"></a>**object\_ref\_field**
:	<a href="#flow_ref_field">flow\_ref\_field</a>   
        | <a href="#resource_ref_field">resource\_ref\_field</a> 
  
<a name="flow_ref_field"></a>**flow\_ref\_field**
:	 ( <font color="purple"><b>input</b></font>   
         | <font color="purple"><b>output</b></font>  )  <a href="#flow_object_type">flow\_object\_type</a> <a href="#identifier">identifier</a>  { <font color="purple"><b>,</b></font> <a href="#identifier">identifier</a>  }  <font color="purple"><b>;</b></font> 
  
<a name="resource_ref_field"></a>**resource\_ref\_field**
:	 ( <font color="purple"><b>lock</b></font>   
         | <font color="purple"><b>share</b></font>  )  <a href="#resource_object_type">resource\_object\_type</a> <a href="#identifier">identifier</a>  { <font color="purple"><b>,</b></font> <a href="#identifier">identifier</a>  }  <font color="purple"><b>;</b></font> 
  
<a name="flow_object_type"></a>**flow\_object\_type**
:	<a href="#type_identifier">type\_identifier</a> 
  
<a name="resource_object_type"></a>**resource\_object\_type**
:	<a href="#type_identifier">type\_identifier</a> 
  
<a name="attr_field"></a>**attr\_field**
:	 \[ <a href="#access_modifier">access\_modifier</a>  ]   \[ <font color="purple"><b>rand</b></font>  ]  <a href="#data_declaration">data\_declaration</a> 
  
<a name="access_modifier"></a>**access\_modifier**
:	<font color="purple"><b>public</b></font>   
        | <font color="purple"><b>protected</b></font>   
        | <font color="purple"><b>private</b></font> 
  
<a name="attr_group"></a>**attr\_group**
:	<a href="#access_modifier">access\_modifier</a> <font color="purple"><b>:</b></font> 
  
<a name="action_handle_declaration"></a>**action\_handle\_declaration**
:	<a href="#action_type">action\_type</a> <a href="#identifier">identifier</a>  \[ <a href="#array_dim">array\_dim</a>  ]  <font color="purple"><b>;</b></font> 
  
<a name="activity_data_field"></a>**activity\_data\_field**
:	<font color="purple"><b>action</b></font> <a href="#data_declaration">data\_declaration</a> 
  
<a name="action_scheduling_constraint"></a>**action\_scheduling\_constraint**
:	<font color="purple"><b>constraint</b></font>  ( <font color="purple"><b>parallel</b></font>   
         | <font color="purple"><b>sequence</b></font>  )  <font color="purple"><b>{</b></font> <a href="#hierarchical_id">hierarchical\_id</a>  { <font color="purple"><b>,</b></font> <a href="#hierarchical_id">hierarchical\_id</a>  }  <font color="purple"><b>}</b></font> <font color="purple"><b>;</b></font> 
  
<em> Exec blocks </em>  
<a name="exec_block_stmt"></a>**exec\_block\_stmt**
:	<a href="#exec_block">exec\_block</a>   
        | <a href="#target_code_exec_block">target\_code\_exec\_block</a>   
        | <a href="#target_file_exec_block">target\_file\_exec\_block</a> 
  
<a name="exec_block"></a>**exec\_block**
:	<font color="purple"><b>exec</b></font> <a href="#exec_kind_identifier">exec\_kind\_identifier</a> <font color="purple"><b>{</b></font>  { <a href="#exec_body_stmt">exec\_body\_stmt</a>  }  <font color="purple"><b>}</b></font>  \[ <font color="purple"><b>;</b></font>  ]  
  
<a name="exec_kind_identifier"></a>**exec\_kind\_identifier**
:	<font color="purple"><b>pre\_solve</b></font>   
        | <font color="purple"><b>post\_solve</b></font>   
        | <font color="purple"><b>body</b></font>   
        | <font color="purple"><b>header</b></font>   
        | <font color="purple"><b>declaration</b></font>   
        | <font color="purple"><b>run\_start</b></font>   
        | <font color="purple"><b>run\_end</b></font>   
        | <font color="purple"><b>init</b></font> 
  
<a name="exec_body_stmt"></a>**exec\_body\_stmt**
:	<a href="#expression">expression</a>  \[ <a href="#assign_op">assign\_op</a> <a href="#expression">expression</a>  ]  <font color="purple"><b>;</b></font> 
  
<a name="assign_op"></a>**assign\_op**
:	<font color="purple"><b>=</b></font>   
        | <font color="purple"><b>+=</b></font>   
        | <font color="purple"><b>-=</b></font>   
        | <font color="purple"><b><<=</b></font>   
        | <font color="purple"><b>>>=</b></font>   
        | <font color="purple"><b>|=</b></font>   
        | <font color="purple"><b>&=</b></font> 
  
<a name="target_code_exec_block"></a>**target\_code\_exec\_block**
:	<font color="purple"><b>exec</b></font> <a href="#exec_kind_identifier">exec\_kind\_identifier</a> <a href="#language_identifier">language\_identifier</a> <font color="purple"><b>=</b></font> <a href="#string">string</a> <font color="purple"><b>;</b></font> 
  
<a name="target_file_exec_block"></a>**target\_file\_exec\_block**
:	<font color="purple"><b>exec</b></font> <font color="purple"><b>file</b></font> <a href="#filename_string">filename\_string</a> <font color="purple"><b>=</b></font> <a href="#string">string</a> <font color="purple"><b>;</b></font> 
  
## B.3 Struct declarations
  
<a name="struct_declaration"></a>**struct\_declaration**
:	<a href="#struct_kind">struct\_kind</a> <a href="#identifier">identifier</a>  \[ <font color="purple"><b>:</b></font> <a href="#struct_identifier">struct\_identifier</a>  ]  <font color="purple"><b>{</b></font>  { <a href="#struct_body_item">struct\_body\_item</a>  }  <font color="purple"><b>}</b></font>  \[ <font color="purple"><b>;</b></font>  ]  
  
<a name="struct_kind"></a>**struct\_kind**
:	<font color="purple"><b>struct</b></font>   
        | <a href="#object_kind">object\_kind</a> 
  
<a name="object_kind"></a>**object\_kind**
:	<font color="purple"><b>buffer</b></font>   
        | <font color="purple"><b>stream</b></font>   
        | <font color="purple"><b>state</b></font>   
        | <font color="purple"><b>resource</b></font> 
  
<a name="struct_body_item"></a>**struct\_body\_item**
:	<a href="#constraint_declaration">constraint\_declaration</a>   
        | <a href="#attr_field">attr\_field</a>   
        | <a href="#typedef_declaration">typedef\_declaration</a>   
        | <a href="#covergroup_declaration">covergroup\_declaration</a>   
        | <a href="#exec_block_stmt">exec\_block\_stmt</a>   
        | <a href="#static_const_field_declaration">static\_const\_field\_declaration</a>   
        | <a href="#attr_group">attr\_group</a>   
        | <a href="#compile_assert_stmt">compile\_assert\_stmt</a>   
        | <a href="#inline_covergroup">inline\_covergroup</a>   
        | <a href="#struct_body_compile_if">struct\_body\_compile\_if</a> 
  
## B.4 Procedural interface (PI)
  
<a name="function_decl"></a>**function\_decl**
:	<font color="purple"><b>function</b></font> <a href="#method_prototype">method\_prototype</a> <font color="purple"><b>;</b></font> 
  
<a name="method_prototype"></a>**method\_prototype**
:	<a href="#method_return_type">method\_return\_type</a> <a href="#method_identifier">method\_identifier</a> <a href="#method_parameter_list_prototype">method\_parameter\_list\_prototype</a> 
  
<a name="method_return_type"></a>**method\_return\_type**
:	<font color="purple"><b>void</b></font>   
        | <a href="#data_type">data\_type</a> 
  
<a name="method_parameter_list_prototype"></a>**method\_parameter\_list\_prototype**
:	<font color="purple"><b>(</b></font>  \[ <a href="#method_parameter">method\_parameter</a>  { <font color="purple"><b>,</b></font> <a href="#method_parameter">method\_parameter</a>  }   ]  <font color="purple"><b>)</b></font> 
  
<a name="method_parameter"></a>**method\_parameter**
:	 \[ <a href="#method_parameter_dir">method\_parameter\_dir</a>  ]  <a href="#data_type">data\_type</a> <a href="#identifier">identifier</a> 
  
<a name="method_parameter_dir"></a>**method\_parameter\_dir**
:	<font color="purple"><b>input</b></font>   
        | <font color="purple"><b>output</b></font>   
        | <font color="purple"><b>inout</b></font> 
  
<a name="function_qualifiers"></a>**function\_qualifiers**
:	<font color="purple"><b>import</b></font> <a href="#import_function_qualifiers">import\_function\_qualifiers</a> <font color="purple"><b>function</b></font> <a href="#type_identifier">type\_identifier</a> <font color="purple"><b>;</b></font> 
  
<a name="import_function_qualifiers"></a>**import\_function\_qualifiers**
:	<a href="#method_qualifiers">method\_qualifiers</a>  \[ <a href="#language_identifier">language\_identifier</a>  ]    
        | <a href="#language_identifier">language\_identifier</a> 
  
<a name="method_qualifiers"></a>**method\_qualifiers**
:	<font color="purple"><b>target</b></font>   
        | <font color="purple"><b>solve</b></font> 
  
<a name="import_method_target_template"></a>**import\_method\_target\_template**
:	<font color="purple"><b>target</b></font> <a href="#language_identifier">language\_identifier</a> <font color="purple"><b>function</b></font> <a href="#method_prototype">method\_prototype</a> <font color="purple"><b>=</b></font> <a href="#string">string</a> <font color="purple"><b>;</b></font> 
  
<a name="method_parameter_list"></a>**method\_parameter\_list**
:	<font color="purple"><b>(</b></font>  \[ <a href="#expression">expression</a>  { <font color="purple"><b>,</b></font> <a href="#expression">expression</a>  }   ]  <font color="purple"><b>)</b></font> 
  
### B.4.1 Import class declaration
  
<a name="import_class_decl"></a>**import\_class\_decl**
:	<font color="purple"><b>import</b></font> <font color="purple"><b>class</b></font> <a href="#import_class_identifier">import\_class\_identifier</a>  \[ <a href="#import_class_extends">import\_class\_extends</a>  ]  <font color="purple"><b>{</b></font>  { <a href="#import_class_method_decl">import\_class\_method\_decl</a>  }  <font color="purple"><b>}</b></font>  \[ <font color="purple"><b>;</b></font>  ]  
  
<a name="import_class_extends"></a>**import\_class\_extends**
:	<font color="purple"><b>:</b></font> <a href="#type_identifier">type\_identifier</a>  { <font color="purple"><b>,</b></font> <a href="#type_identifier">type\_identifier</a>  }  
  
<a name="import_class_method_decl"></a>**import\_class\_method\_decl**
:	<a href="#method_prototype">method\_prototype</a> <font color="purple"><b>;</b></font> 
  
### B.4.2 Export action
  
<a name="export_action"></a>**export\_action**
:	<font color="purple"><b>export</b></font>  \[ <a href="#method_qualifiers">method\_qualifiers</a>  ]  <a href="#action_type_identifier">action\_type\_identifier</a> <a href="#method_parameter_list_prototype">method\_parameter\_list\_prototype</a> <font color="purple"><b>;</b></font> 
  
## B.5 Component declarations
  
<a name="component_declaration"></a>**component\_declaration**
:	<font color="purple"><b>component</b></font> <a href="#component_identifier">component\_identifier</a>  \[ <font color="purple"><b>:</b></font> <a href="#component_super_spec">component\_super\_spec</a>  ]  <font color="purple"><b>{</b></font>  { <a href="#component_body_item">component\_body\_item</a>  }  <font color="purple"><b>}</b></font>  \[ <font color="purple"><b>;</b></font>  ]  
  
<a name="component_super_spec"></a>**component\_super\_spec**
:	<font color="purple"><b>:</b></font> <a href="#type_identifier">type\_identifier</a> 
  
<a name="component_body_item"></a>**component\_body\_item**
:	<a href="#overrides_declaration">overrides\_declaration</a>   
        | <a href="#component_field_declaration">component\_field\_declaration</a>   
        | <a href="#action_declaration">action\_declaration</a>   
        | <a href="#object_bind_stmt">object\_bind\_stmt</a>   
        | <a href="#exec_block">exec\_block</a>   
        | <a href="#package_body_item">package\_body\_item</a>   
        | <a href="#attr_group">attr\_group</a>   
        | <a href="#component_body_compile_if">component\_body\_compile\_if</a> 
  
<a name="component_field_declaration"></a>**component\_field\_declaration**
:	<a href="#component_data_declaration">component\_data\_declaration</a>   
        | <a href="#component_pool_declaration">component\_pool\_declaration</a> 
  
<a name="component_data_declaration"></a>**component\_data\_declaration**
:	 \[ <font color="purple"><b>static</b></font> <font color="purple"><b>const</b></font>  ]  <a href="#data_declaration">data\_declaration</a> 
  
<a name="component_pool_declaration"></a>**component\_pool\_declaration**
:	<font color="purple"><b>pool</b></font>  \[ <font color="purple"><b>\[</b></font> <a href="#expression">expression</a> <font color="purple"><b>]</b></font>  ]  <a href="#type_identifier">type\_identifier</a> <a href="#identifier">identifier</a> <font color="purple"><b>;</b></font> 
  
<a name="object_bind_stmt"></a>**object\_bind\_stmt**
:	<font color="purple"><b>bind</b></font> <a href="#hierarchical_id">hierarchical\_id</a> <a href="#object_bind_item_or_list">object\_bind\_item\_or\_list</a> <font color="purple"><b>;</b></font> 
  
<a name="object_bind_item_or_list"></a>**object\_bind\_item\_or\_list**
:	<a href="#component_path">component\_path</a>   
        | <font color="purple"><b>{</b></font> <a href="#component_path">component\_path</a>  { <font color="purple"><b>,</b></font> <a href="#component_path">component\_path</a>  }  <font color="purple"><b>}</b></font> 
  
<a name="component_path"></a>**component\_path**
:	<a href="#component_identifier">component\_identifier</a>  { <font color="purple"><b>.</b></font> <a href="#component_path_elem">component\_path\_elem</a>  }    
        | <font color="purple"><b>\*</b></font> 
  
<a name="component_path_elem"></a>**component\_path\_elem**
:	<a href="#component_action_identifier">component\_action\_identifier</a>   
        | <font color="purple"><b>\*</b></font> 
  
##  B.6 Activity statements
  
<a name="activity_stmt"></a>**activity\_stmt**
:	 \[ <a href="#identifier">identifier</a> <font color="purple"><b>:</b></font>  ]  <a href="#labeled_activity_stmt">labeled\_activity\_stmt</a>   
        | <a href="#activity_data_field">activity\_data\_field</a>   
        | <a href="#activity_bind_stmt">activity\_bind\_stmt</a>   
        | <a href="#action_handle_declaration">action\_handle\_declaration</a>   
        | <a href="#activity_constraint_stmt">activity\_constraint\_stmt</a>   
        | <a href="#action_scheduling_constraint">action\_scheduling\_constraint</a> 
  
<a name="labeled_activity_stmt"></a>**labeled\_activity\_stmt**
:	<a href="#activity_if_else_stmt">activity\_if\_else\_stmt</a>   
        | <a href="#activity_repeat_stmt">activity\_repeat\_stmt</a>   
        | <a href="#activity_foreach_stmt">activity\_foreach\_stmt</a>   
        | <a href="#activity_action_traversal_stmt">activity\_action\_traversal\_stmt</a>   
        | <a href="#activity_sequence_block_stmt">activity\_sequence\_block\_stmt</a>   
        | <a href="#activity_select_stmt">activity\_select\_stmt</a>   
        | <a href="#activity_match_stmt">activity\_match\_stmt</a>   
        | <a href="#activity_parallel_stmt">activity\_parallel\_stmt</a>   
        | <a href="#activity_schedule_stmt">activity\_schedule\_stmt</a>   
        | <a href="#activity_super_stmt">activity\_super\_stmt</a>   
        | <a href="#function_symbol_call">function\_symbol\_call</a> 
  
<a name="activity_if_else_stmt"></a>**activity\_if\_else\_stmt**
:	<font color="purple"><b>if</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#activity_stmt">activity\_stmt</a>  \[ <font color="purple"><b>else</b></font> <a href="#activity_stmt">activity\_stmt</a>  ]  
  
<a name="activity_repeat_stmt"></a>**activity\_repeat\_stmt**
:	<font color="purple"><b>while</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#activity_stmt">activity\_stmt</a>   
        | <font color="purple"><b>repeat</b></font> <font color="purple"><b>(</b></font>  \[ <a href="#identifier">identifier</a> <font color="purple"><b>:</b></font>  ]  <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#activity_stmt">activity\_stmt</a>   
        | <font color="purple"><b>repeat</b></font> <a href="#activity_stmt">activity\_stmt</a>  \[ <font color="purple"><b>while</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font>  ]  
  
<a name="activity_sequence_block_stmt"></a>**activity\_sequence\_block\_stmt**
:	 \[ <font color="purple"><b>sequence</b></font>  ]  <font color="purple"><b>{</b></font>  { <a href="#activity_stmt">activity\_stmt</a>  }  <font color="purple"><b>}</b></font> 
  
<a name="activity_constraint_stmt"></a>**activity\_constraint\_stmt**
:	<font color="purple"><b>constraint</b></font> <font color="purple"><b>{</b></font>  { <a href="#constraint_body_item">constraint\_body\_item</a>  }  <font color="purple"><b>}</b></font>   
        | <font color="purple"><b>constraint</b></font> <a href="#single_stmt_constraint">single\_stmt\_constraint</a> 
  
<a name="activity_foreach_stmt"></a>**activity\_foreach\_stmt**
:	<font color="purple"><b>foreach</b></font> <font color="purple"><b>(</b></font>  \[ <a href="#iterator_identifier">iterator\_identifier</a> <font color="purple"><b>:</b></font>  ]  <a href="#expression">expression</a>  \[ <font color="purple"><b>\[</b></font> <a href="#index_identifier">index\_identifier</a> <font color="purple"><b>]</b></font>  ]  <font color="purple"><b>)</b></font> <a href="#activity_stmt">activity\_stmt</a> 
  
<a name="activity_action_traversal_stmt"></a>**activity\_action\_traversal\_stmt**
:	<a href="#identifier">identifier</a>  \[ <a href="#inline_with_constraint">inline\_with\_constraint</a>  ]    
        | <font color="purple"><b>do</b></font> <a href="#type_identifier">type\_identifier</a>  \[ <a href="#inline_with_constraint">inline\_with\_constraint</a>  ]  <font color="purple"><b>;</b></font> 
  
<a name="inline_with_constraint"></a>**inline\_with\_constraint**
:	<font color="purple"><b>with</b></font> <font color="purple"><b>{</b></font>  { <a href="#constraint_body_item">constraint\_body\_item</a>  }  <font color="purple"><b>}</b></font>   
        | <font color="purple"><b>with</b></font> <a href="#single_stmt_constraint">single\_stmt\_constraint</a> 
  
<a name="activity_select_stmt"></a>**activity\_select\_stmt**
:	<font color="purple"><b>select</b></font> <font color="purple"><b>{</b></font> <a href="#select_branch">select\_branch</a> <a href="#select_branch">select\_branch</a>  { <a href="#select_branch">select\_branch</a>  }  <font color="purple"><b>}</b></font> 
  
<a name="select_branch"></a>**select\_branch**
:	 \[  \[ <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font>  ]   \[ <font color="purple"><b>\[</b></font> <a href="#expression">expression</a> <font color="purple"><b>]</b></font>  ]  <font color="purple"><b>:</b></font>  ]  <a href="#activity_stmt">activity\_stmt</a> 
  
<a name="activity_match_stmt"></a>**activity\_match\_stmt**
:	<font color="purple"><b>match</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <font color="purple"><b>{</b></font> <a href="#match_choice">match\_choice</a>  { <a href="#match_choice">match\_choice</a>  }  <font color="purple"><b>}</b></font> 
  
<a name="match_choice"></a>**match\_choice**
:	<font color="purple"><b>\[</b></font> <a href="#open_range_list">open\_range\_list</a> <font color="purple"><b>]</b></font> <font color="purple"><b>:</b></font> <a href="#activity_stmt">activity\_stmt</a>   
        | <font color="purple"><b>default</b></font> <font color="purple"><b>:</b></font> <a href="#activity_stmt">activity\_stmt</a> 
  
<a name="activity_parallel_stmt"></a>**activity\_parallel\_stmt**
:	<font color="purple"><b>parallel</b></font> <font color="purple"><b>{</b></font>  { <a href="#activity_stmt">activity\_stmt</a>  }  <font color="purple"><b>}</b></font>  \[ <font color="purple"><b>;</b></font>  ]  
  
<a name="activity_schedule_stmt"></a>**activity\_schedule\_stmt**
:	<font color="purple"><b>schedule</b></font> <font color="purple"><b>{</b></font>  { <a href="#activity_stmt">activity\_stmt</a>  }  <font color="purple"><b>}</b></font>  \[ <font color="purple"><b>;</b></font>  ]  
  
<a name="activity_bind_stmt"></a>**activity\_bind\_stmt**
:	<font color="purple"><b>bind</b></font> <a href="#hierarchical_id">hierarchical\_id</a> <a href="#activity_bind_item_or_list">activity\_bind\_item\_or\_list</a> <font color="purple"><b>;</b></font> 
  
<a name="activity_bind_item_or_list"></a>**activity\_bind\_item\_or\_list**
:	<a href="#hierarchical_id">hierarchical\_id</a>   
        | <font color="purple"><b>{</b></font> <a href="#hierarchical_id">hierarchical\_id</a>  { <font color="purple"><b>,</b></font> <a href="#hierarchical_id">hierarchical\_id</a>  }  <font color="purple"><b>}</b></font> 
  
<a name="symbol_declaration"></a>**symbol\_declaration**
:	<font color="purple"><b>symbol</b></font> <a href="#identifier">identifier</a>  \[ <font color="purple"><b>(</b></font> <a href="#symbol_paramlist">symbol\_paramlist</a> <font color="purple"><b>)</b></font>  ]  <font color="purple"><b>{</b></font>  { <a href="#activity_stmt">activity\_stmt</a>  }  <font color="purple"><b>}</b></font> 
  
<a name="symbol_paramlist"></a>**symbol\_paramlist**
:	 \[ <a href="#symbol_param">symbol\_param</a>  { <font color="purple"><b>,</b></font> <a href="#symbol_param">symbol\_param</a>  }   ]  
  
<a name="symbol_param"></a>**symbol\_param**
:	<a href="#data_type">data\_type</a> <a href="#identifier">identifier</a> 
  
<a name="activity_super_stmt"></a>**activity\_super\_stmt**
:	<font color="purple"><b>super</b></font> <font color="purple"><b>;</b></font> 
  
## B.7 Overrides
  
<a name="overrides_declaration"></a>**overrides\_declaration**
:	<font color="purple"><b>override</b></font> <font color="purple"><b>{</b></font>  { <a href="#override_stmt">override\_stmt</a>  }  <font color="purple"><b>}</b></font> 
  
<a name="override_stmt"></a>**override\_stmt**
:	<a href="#type_override">type\_override</a>   
        | <a href="#instance_override">instance\_override</a> 
  
<a name="type_override"></a>**type\_override**
:	<font color="purple"><b>type</b></font> <a href="#type_identifier">type\_identifier</a> <font color="purple"><b>with</b></font> <a href="#type_identifier">type\_identifier</a> <font color="purple"><b>;</b></font> 
  
<a name="instance_override"></a>**instance\_override**
:	<font color="purple"><b>instance</b></font> <a href="#hierarchical_id">hierarchical\_id</a> <font color="purple"><b>with</b></font> <a href="#identifier">identifier</a> <font color="purple"><b>;</b></font> 
  
## B.8 Data declarations
  
<a name="data_declaration"></a>**data\_declaration**
:	<a href="#data_type">data\_type</a> <a href="#data_instantiation">data\_instantiation</a>  { <font color="purple"><b>,</b></font> <a href="#data_instantiation">data\_instantiation</a>  }  <font color="purple"><b>;</b></font> 
  
<a name="data_instantiation"></a>**data\_instantiation**
:	<a href="#covergroup_instantiation">covergroup\_instantiation</a>   
        | <a href="#plain_data_instantiation">plain\_data\_instantiation</a> 
  
<a name="covergroup_portmap_list"></a>**covergroup\_portmap\_list**
:	 \[ <a href="#covergroup_portmap">covergroup\_portmap</a>  { <font color="purple"><b>,</b></font> <a href="#covergroup_portmap">covergroup\_portmap</a>  }    
         | <a href="#hierarchical_id">hierarchical\_id</a>  { <font color="purple"><b>,</b></font> <a href="#hierarchical_id">hierarchical\_id</a>  }   ]  
  
<a name="covergroup_portmap"></a>**covergroup\_portmap**
:	<font color="purple"><b>.</b></font> <a href="#identifier">identifier</a> <font color="purple"><b>(</b></font> <a href="#hierarchical_id">hierarchical\_id</a> <font color="purple"><b>)</b></font> 
  
<a name="array_dim"></a>**array\_dim**
:	<font color="purple"><b>\[</b></font> <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>]</b></font> 
  
## B.9 Data types
  
<a name="data_type"></a>**data\_type**
:	<a href="#scalar_data_type">scalar\_data\_type</a>   
        | <a href="#user_defined_datatype">user\_defined\_datatype</a> 
  
<a name="action_data_type"></a>**action\_data\_type**
:	<a href="#scalar_data_type">scalar\_data\_type</a>   
        | <a href="#user_defined_datatype">user\_defined\_datatype</a>   
        | <a href="#action_type">action\_type</a> 
  
<a name="scalar_data_type"></a>**scalar\_data\_type**
:	<a href="#chandle_type">chandle\_type</a>   
        | <a href="#integer_type">integer\_type</a>   
        | <a href="#string_type">string\_type</a>   
        | <a href="#bool_type">bool\_type</a> 
  
<a name="chandle_type"></a>**chandle\_type**
:	<font color="purple"><b>chandle</b></font> 
  
<a name="integer_type"></a>**integer\_type**
:	<a href="#integer_atom_type">integer\_atom\_type</a>  \[ <font color="purple"><b>\[</b></font> <a href="#expression">expression</a>  \[ <font color="purple"><b>:</b></font> <a href="#expression">expression</a>  ]  <font color="purple"><b>]</b></font>  ]   \[ <font color="purple"><b>in</b></font> <font color="purple"><b>\[</b></font> <a href="#domain_open_range_list">domain\_open\_range\_list</a> <font color="purple"><b>]</b></font>  ]  
  
<a name="integer_atom_type"></a>**integer\_atom\_type**
:	<font color="purple"><b>int</b></font>   
        | <font color="purple"><b>bit</b></font> 
  
<a name="domain_open_range_list"></a>**domain\_open\_range\_list**
:	<a href="#domain_open_range_value">domain\_open\_range\_value</a>  { <font color="purple"><b>,</b></font> <a href="#domain_open_range_value">domain\_open\_range\_value</a>  }  
  
<a name="domain_open_range_value"></a>**domain\_open\_range\_value**
:	<a href="#expression">expression</a>  \[ <font color="purple"><b>..</b></font> <a href="#expression">expression</a>  ]    
        | <a href="#expression">expression</a> <font color="purple"><b>..</b></font>   
        | <font color="purple"><b>..</b></font> <a href="#expression">expression</a>   
        | <a href="#expression">expression</a> 
  
<a name="string_type"></a>**string\_type**
:	<font color="purple"><b>string</b></font>  \[ <font color="purple"><b>in</b></font> <font color="purple"><b>\[</b></font> <a href="#DOUBLE_QUOTED_STRING">DOUBLE\_QUOTED\_STRING</a>  { <font color="purple"><b>,</b></font> <a href="#DOUBLE_QUOTED_STRING">DOUBLE\_QUOTED\_STRING</a>  }  <font color="purple"><b>]</b></font>  ]  
  
<a name="bool_type"></a>**bool\_type**
:	<font color="purple"><b>bool</b></font> 
  
<a name="user_defined_datatype"></a>**user\_defined\_datatype**
:	<a href="#type_identifier">type\_identifier</a> 
  
<a name="action_type"></a>**action\_type**
:	<a href="#type_identifier">type\_identifier</a> 
  
<a name="enum_declaration"></a>**enum\_declaration**
:	<font color="purple"><b>enum</b></font> <a href="#enum_identifier">enum\_identifier</a> <font color="purple"><b>{</b></font>  \[ <a href="#enum_item">enum\_item</a>  { <font color="purple"><b>,</b></font> <a href="#enum_item">enum\_item</a>  }   ]  <font color="purple"><b>}</b></font>  \[ <font color="purple"><b>;</b></font>  ]  
  
<a name="enum_item"></a>**enum\_item**
:	<a href="#identifier">identifier</a>  \[ <font color="purple"><b>=</b></font> <a href="#constant_expression">constant\_expression</a>  ]  
  
<a name="enum_type"></a>**enum\_type**
:	<a href="#enum_type_identifier">enum\_type\_identifier</a>  \[ <font color="purple"><b>in</b></font> <font color="purple"><b>\[</b></font> <a href="#open_range_list">open\_range\_list</a> <font color="purple"><b>]</b></font>  ]  
  
<a name="enum_type_identifier"></a>**enum\_type\_identifier**
:	<a href="#type_identifier">type\_identifier</a> 
  
<a name="typedef_declaration"></a>**typedef\_declaration**
:	<font color="purple"><b>typedef</b></font> <a href="#data_type">data\_type</a> <a href="#identifier">identifier</a> <font color="purple"><b>;</b></font> 
  
## B.10 Constraint
  
<a name="constraint_declaration"></a>**constraint\_declaration**
:	 \[ <font color="purple"><b>dynamic</b></font>  ]  <font color="purple"><b>constraint</b></font> <a href="#identifier">identifier</a> <font color="purple"><b>{</b></font>  { <a href="#constraint_body_item">constraint\_body\_item</a>  }  <font color="purple"><b>}</b></font>   
        | <font color="purple"><b>constraint</b></font> <font color="purple"><b>{</b></font>  { <a href="#constraint_body_item">constraint\_body\_item</a>  }  <font color="purple"><b>}</b></font>   
        | <font color="purple"><b>constraint</b></font> <a href="#single_stmt_constraint">single\_stmt\_constraint</a> 
  
<a name="constraint_body_item"></a>**constraint\_body\_item**
:	<a href="#expression_constraint_item">expression\_constraint\_item</a>   
        | <a href="#foreach_constraint_item">foreach\_constraint\_item</a>   
        | <a href="#if_constraint_item">if\_constraint\_item</a>   
        | <a href="#unique_constraint_item">unique\_constraint\_item</a> 
  
<a name="expression_constraint_item"></a>**expression\_constraint\_item**
:	<a href="#expression">expression</a> <a href="#implicand_constraint_item">implicand\_constraint\_item</a>   
        | <a href="#expression">expression</a> <font color="purple"><b>;</b></font> 
  
<a name="implicand_constraint_item"></a>**implicand\_constraint\_item**
:	<font color="purple"><b>-></b></font> <a href="#constraint_set">constraint\_set</a> 
  
<a name="constraint_set"></a>**constraint\_set**
:	<a href="#constraint_body_item">constraint\_body\_item</a>   
        | <a href="#constraint_block">constraint\_block</a> 
  
<a name="constraint_block"></a>**constraint\_block**
:	<font color="purple"><b>{</b></font>  { <a href="#constraint_body_item">constraint\_body\_item</a>  }  <font color="purple"><b>}</b></font> 
  
<a name="foreach_constraint_item"></a>**foreach\_constraint\_item**
:	<font color="purple"><b>foreach</b></font> <font color="purple"><b>(</b></font>  \[ <a href="#iterator_identifier">iterator\_identifier</a> <font color="purple"><b>:</b></font>  ]  <a href="#expression">expression</a>  \[ <font color="purple"><b>\[</b></font> <a href="#index_identifier">index\_identifier</a> <font color="purple"><b>]</b></font>  ]  <font color="purple"><b>)</b></font> <a href="#constraint_set">constraint\_set</a> 
  
<a name="if_constraint_item"></a>**if\_constraint\_item**
:	<font color="purple"><b>if</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> <a href="#constraint_set">constraint\_set</a>  \[ <font color="purple"><b>else</b></font> <a href="#constraint_set">constraint\_set</a>  ]  
  
<a name="unique_constraint_item"></a>**unique\_constraint\_item**
:	<font color="purple"><b>unique</b></font> <font color="purple"><b>{</b></font> <a href="#open_range_list">open\_range\_list</a> <font color="purple"><b>}</b></font> <font color="purple"><b>;</b></font> 
  
<a name="single_stmt_constraint"></a>**single\_stmt\_constraint**
:	<a href="#expression_constraint_item">expression\_constraint\_item</a>   
        | <a href="#unique_constraint_item">unique\_constraint\_item</a> 
  
## B.11 Coverage specification
  
<a name="covergroup_declaration"></a>**covergroup\_declaration**
:	<font color="purple"><b>coverspec</b></font> <a href="#covergroup_identifier">covergroup\_identifier</a> <font color="purple"><b>(</b></font> <a href="#covergroup_port">covergroup\_port</a>  { <font color="purple"><b>,</b></font> <a href="#covergroup_port">covergroup\_port</a>  }  <font color="purple"><b>)</b></font> <font color="purple"><b>{</b></font>  { <a href="#covergroup_body_item">covergroup\_body\_item</a>  }  <font color="purple"><b>}</b></font>  \[ <font color="purple"><b>;</b></font>  ]  
  
<a name="covergroup_port"></a>**covergroup\_port**
:	<a href="#data_type">data\_type</a> <a href="#identifier">identifier</a> 
  
<a name="covergroup_body_item"></a>**covergroup\_body\_item**
:	<a href="#covergroup_option">covergroup\_option</a>   
        | <a href="#covergroup_coverpoint">covergroup\_coverpoint</a>   
        | <a href="#covergroup_cross">covergroup\_cross</a> 
  
<a name="covergroup_option"></a>**covergroup\_option**
:	<font color="purple"><b>option</b></font> <font color="purple"><b>.</b></font> <a href="#identifier">identifier</a> <font color="purple"><b>=</b></font> <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>;</b></font> 
  
<a name="inline_covergroup"></a>**inline\_covergroup**
:	<font color="purple"><b>covergroup</b></font> <font color="purple"><b>{</b></font>  { <a href="#covergroup_body_item">covergroup\_body\_item</a>  }  <font color="purple"><b>}</b></font> <a href="#identifier">identifier</a> <font color="purple"><b>;</b></font> 
  
<a name="covergroup_instantiation"></a>**covergroup\_instantiation**
:	<a href="#covergroup_identifier">covergroup\_identifier</a>  \[ <font color="purple"><b>(</b></font> <a href="#covergroup_portmap_list">covergroup\_portmap\_list</a> <font color="purple"><b>)</b></font>  ]   \[ <font color="purple"><b>with</b></font> <font color="purple"><b>{</b></font>  { <a href="#covergroup_option">covergroup\_option</a>  }  <font color="purple"><b>}</b></font>  ]  
  
<a name="plain_data_instantiation"></a>**plain\_data\_instantiation**
:	<a href="#identifier">identifier</a>  \[ <a href="#array_dim">array\_dim</a>  ]   \[ <font color="purple"><b>=</b></font> <a href="#constant_expression">constant\_expression</a>  ]  
  
<a name="covergroup_coverpoint"></a>**covergroup\_coverpoint**
:	 \[  \[ <a href="#data_type">data\_type</a>  ]  <a href="#coverpoint_identifier">coverpoint\_identifier</a> <font color="purple"><b>:</b></font>  ]  <font color="purple"><b>coverpoint</b></font> <a href="#expression">expression</a>  \[ <font color="purple"><b>iff</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font>  ]  <a href="#bins_or_empty">bins\_or\_empty</a> 
  
<a name="bins_or_empty"></a>**bins\_or\_empty**
:	<font color="purple"><b>{</b></font>  { <a href="#covergroup_coverpoint_body_item">covergroup\_coverpoint\_body\_item</a>  }  <font color="purple"><b>}</b></font>  \[ <font color="purple"><b>;</b></font>  ]    
        | <font color="purple"><b>;</b></font> 
  
<a name="covergroup_coverpoint_body_item"></a>**covergroup\_coverpoint\_body\_item**
:	<a href="#covergroup_option">covergroup\_option</a>   
        | <a href="#covergroup_coverpoint_binspec">covergroup\_coverpoint\_binspec</a> 
  
<a name="covergroup_coverpoint_binspec"></a>**covergroup\_coverpoint\_binspec**
:	<a href="#bins_keyword">bins\_keyword</a> <a href="#identifier">identifier</a>  \[ <font color="purple"><b>\[</b></font> <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>]</b></font>  ]  <font color="purple"><b>=</b></font> <a href="#coverpoint_bins">coverpoint\_bins</a> 
  
<a name="coverpoint_bins"></a>**coverpoint\_bins**
:	<font color="purple"><b>\[</b></font> <a href="#covergroup_range_list">covergroup\_range\_list</a> <font color="purple"><b>]</b></font>  \[ <font color="purple"><b>with</b></font> <font color="purple"><b>(</b></font> <a href="#covergroup_expression">covergroup\_expression</a> <font color="purple"><b>)</b></font>  ]  <font color="purple"><b>;</b></font>   
        | <a href="#coverpoint_identifier">coverpoint\_identifier</a> <font color="purple"><b>with</b></font> <font color="purple"><b>(</b></font> <a href="#covergroup_expression">covergroup\_expression</a> <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>default</b></font> <font color="purple"><b>;</b></font> 
  
<a name="covergroup_range_list"></a>**covergroup\_range\_list**
:	<a href="#covergroup_value_range">covergroup\_value\_range</a>  { <font color="purple"><b>,</b></font> <a href="#covergroup_value_range">covergroup\_value\_range</a>  }  
  
<a name="covergroup_value_range"></a>**covergroup\_value\_range**
:	<a href="#expression">expression</a>   
        | <a href="#expression">expression</a> <font color="purple"><b>..</b></font>  \[ <a href="#expression">expression</a>  ]    
        |  \[ <a href="#expression">expression</a>  ]  <font color="purple"><b>..</b></font> <a href="#expression">expression</a> 
  
<a name="bins_keyword"></a>**bins\_keyword**
:	<font color="purple"><b>bins</b></font>   
        | <font color="purple"><b>illegal\_bins</b></font>   
        | <font color="purple"><b>ignore\_bins</b></font> 
  
<a name="covergroup_cross"></a>**covergroup\_cross**
:	<a href="#covercross_identifier">covercross\_identifier</a> <font color="purple"><b>:</b></font> <font color="purple"><b>cross</b></font> <a href="#coverpoint_identifier">coverpoint\_identifier</a>  { <font color="purple"><b>,</b></font> <a href="#coverpoint_identifier">coverpoint\_identifier</a>  }   \[ <font color="purple"><b>iff</b></font> <font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font>  ]  <a href="#cross_item_or_null">cross\_item\_or\_null</a> 
  
<a name="cross_item_or_null"></a>**cross\_item\_or\_null**
:	<font color="purple"><b>{</b></font>  { <a href="#covergroup_cross_body_item">covergroup\_cross\_body\_item</a>  }  <font color="purple"><b>}</b></font>  \[ <font color="purple"><b>;</b></font>  ]    
        | <font color="purple"><b>;</b></font> 
  
<a name="covergroup_cross_body_item"></a>**covergroup\_cross\_body\_item**
:	<a href="#covergroup_option">covergroup\_option</a>   
        | <a href="#covergroup_cross_binspec">covergroup\_cross\_binspec</a> 
  
<a name="covergroup_cross_binspec"></a>**covergroup\_cross\_binspec**
:	<a href="#bins_keyword">bins\_keyword</a> <a href="#identifier">identifier</a> <font color="purple"><b>=</b></font> <a href="#covercross_identifier">covercross\_identifier</a> <font color="purple"><b>with</b></font> <font color="purple"><b>(</b></font> <a href="#covergroup_expression">covergroup\_expression</a> <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font> 
  
## B.12 Conditional-compile
  
<a name="package_body_compile_if"></a>**package\_body\_compile\_if**
:	<font color="purple"><b>compile</b></font> <font color="purple"><b>if</b></font>  ( <a href="#constant_expression">constant\_expression</a>  )  <a href="#package_body_compile_if_item">package\_body\_compile\_if\_item</a>  \[ <font color="purple"><b>else</b></font> <a href="#package_body_compile_if_item">package\_body\_compile\_if\_item</a>  ]  
  
<a name="package_body_compile_if_item"></a>**package\_body\_compile\_if\_item**
:	<a href="#package_body_item">package\_body\_item</a>   
        | <font color="purple"><b>{</b></font>  { <a href="#package_body_item">package\_body\_item</a>  }  <font color="purple"><b>}</b></font> 
  
<a name="action_body_compile_if"></a>**action\_body\_compile\_if**
:	<font color="purple"><b>compile</b></font> <font color="purple"><b>if</b></font>  ( <a href="#constant_expression">constant\_expression</a>  )  <a href="#action_body_compile_if_item">action\_body\_compile\_if\_item</a>  \[ <font color="purple"><b>else</b></font> <a href="#action_body_compile_if_item">action\_body\_compile\_if\_item</a>  ]  
  
<a name="action_body_compile_if_item"></a>**action\_body\_compile\_if\_item**
:	<a href="#action_body_item">action\_body\_item</a>   
        | <font color="purple"><b>{</b></font>  { <a href="#action_body_item">action\_body\_item</a>  }  <font color="purple"><b>}</b></font> 
  
<a name="component_body_compile_if"></a>**component\_body\_compile\_if**
:	<font color="purple"><b>compile</b></font> <font color="purple"><b>if</b></font>  ( <a href="#constant_expression">constant\_expression</a>  )  <a href="#component_body_compile_if_item">component\_body\_compile\_if\_item</a>  \[ <font color="purple"><b>else</b></font> <a href="#component_body_compile_if_item">component\_body\_compile\_if\_item</a>  ]  
  
<a name="component_body_compile_if_item"></a>**component\_body\_compile\_if\_item**
:	<a href="#component_body_item">component\_body\_item</a>   
        | <font color="purple"><b>{</b></font>  { <a href="#component_body_item">component\_body\_item</a>  }  <font color="purple"><b>}</b></font> 
  
<a name="struct_body_compile_if"></a>**struct\_body\_compile\_if**
:	<font color="purple"><b>compile</b></font> <font color="purple"><b>if</b></font>  ( <a href="#constant_expression">constant\_expression</a>  )  <a href="#struct_body_compile_if_item">struct\_body\_compile\_if\_item</a>  \[ <font color="purple"><b>else</b></font> <a href="#struct_body_compile_if_item">struct\_body\_compile\_if\_item</a>  ]  
  
<a name="struct_body_compile_if_item"></a>**struct\_body\_compile\_if\_item**
:	<a href="#struct_body_item">struct\_body\_item</a>   
        | <font color="purple"><b>{</b></font>  { <a href="#struct_body_item">struct\_body\_item</a>  }  <font color="purple"><b>}</b></font> 
  
<a name="compile_has_expr"></a>**compile\_has\_expr**
:	<font color="purple"><b>compile</b></font> <font color="purple"><b>has</b></font> <font color="purple"><b>(</b></font> <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>)</b></font> 
  
<a name="compile_assert_stmt"></a>**compile\_assert\_stmt**
:	<font color="purple"><b>compile</b></font> <font color="purple"><b>assert</b></font> <font color="purple"><b>(</b></font> <a href="#constant_expression">constant\_expression</a>  \[ <font color="purple"><b>,</b></font> <a href="#string">string</a>  ]  <font color="purple"><b>)</b></font> <font color="purple"><b>;</b></font> 
  
## B.13 Expression
  
<a name="constant_expression"></a>**constant\_expression**
:	<a href="#expression">expression</a> 
  
<a name="expression"></a>**expression**
:	<a href="#condition_expr">condition\_expr</a> 
  
<a name="condition_expr"></a>**condition\_expr**
:	<a href="#logical_or_expr">logical\_or\_expr</a>  { <font color="purple"><b>?</b></font> <a href="#logical_or_expr">logical\_or\_expr</a> <font color="purple"><b>:</b></font> <a href="#logical_or_expr">logical\_or\_expr</a>  }  
  
<a name="logical_or_expr"></a>**logical\_or\_expr**
:	<a href="#logical_and_expr">logical\_and\_expr</a>  { <font color="purple"><b>||</b></font> <a href="#logical_and_expr">logical\_and\_expr</a>  }  
  
<a name="logical_and_expr"></a>**logical\_and\_expr**
:	<a href="#binary_or_expr">binary\_or\_expr</a>  { <font color="purple"><b>&&</b></font> <a href="#binary_or_expr">binary\_or\_expr</a>  }  
  
<a name="binary_or_expr"></a>**binary\_or\_expr**
:	<a href="#binary_xor_expr">binary\_xor\_expr</a>  { <font color="purple"><b>|</b></font> <a href="#binary_xor_expr">binary\_xor\_expr</a>  }  
  
<a name="binary_xor_expr"></a>**binary\_xor\_expr**
:	<a href="#binary_and_expr">binary\_and\_expr</a>  { <font color="purple"><b>^</b></font> <a href="#binary_and_expr">binary\_and\_expr</a>  }  
  
<a name="binary_and_expr"></a>**binary\_and\_expr**
:	<a href="#logical_equality_expr">logical\_equality\_expr</a>  { <font color="purple"><b>&</b></font> <a href="#logical_equality_expr">logical\_equality\_expr</a>  }  
  
<a name="logical_equality_expr"></a>**logical\_equality\_expr**
:	<a href="#logical_inequality_expr">logical\_inequality\_expr</a>  { <a href="#eq_neq_op">eq\_neq\_op</a> <a href="#logical_inequality_expr">logical\_inequality\_expr</a>  }  
  
<a name="logical_inequality_expr"></a>**logical\_inequality\_expr**
:	<a href="#binary_shift_expr">binary\_shift\_expr</a>  { <a href="#logical_inequality_rhs">logical\_inequality\_rhs</a>  }  
  
<a name="logical_inequality_rhs"></a>**logical\_inequality\_rhs**
:	<a href="#inequality_expr_term">inequality\_expr\_term</a>   
        | <a href="#inside_expr_term">inside\_expr\_term</a> 
  
<a name="inequality_expr_term"></a>**inequality\_expr\_term**
:	<a href="#logical_inequality_op">logical\_inequality\_op</a> <a href="#binary_shift_expr">binary\_shift\_expr</a> 
  
<a name="logical_inequality_op"></a>**logical\_inequality\_op**
:	<font color="purple"><b><</b></font>   
        | <font color="purple"><b><=</b></font>   
        | <font color="purple"><b>></b></font>   
        | <font color="purple"><b>>=</b></font> 
  
<a name="inside_expr_term"></a>**inside\_expr\_term**
:	<font color="purple"><b>in</b></font> <font color="purple"><b>\[</b></font> <a href="#open_range_list">open\_range\_list</a> <font color="purple"><b>]</b></font> 
  
<a name="open_range_list"></a>**open\_range\_list**
:	<a href="#open_range_value">open\_range\_value</a>  { <font color="purple"><b>,</b></font> <a href="#open_range_value">open\_range\_value</a>  }  
  
<a name="open_range_value"></a>**open\_range\_value**
:	<a href="#expression">expression</a>  \[ <font color="purple"><b>..</b></font> <a href="#expression">expression</a>  ]  
  
<a name="binary_shift_expr"></a>**binary\_shift\_expr**
:	<a href="#binary_add_sub_expr">binary\_add\_sub\_expr</a>  { <a href="#shift_op">shift\_op</a> <a href="#binary_add_sub_expr">binary\_add\_sub\_expr</a>  }  
  
<a name="binary_add_sub_expr"></a>**binary\_add\_sub\_expr**
:	<a href="#binary_mul_div_mod_expr">binary\_mul\_div\_mod\_expr</a>  { <a href="#add_sub_op">add\_sub\_op</a> <a href="#binary_mul_div_mod_expr">binary\_mul\_div\_mod\_expr</a>  }  
  
<a name="binary_mul_div_mod_expr"></a>**binary\_mul\_div\_mod\_expr**
:	<a href="#binary_exp_expr">binary\_exp\_expr</a>  { <a href="#mul_div_mod_op">mul\_div\_mod\_op</a> <a href="#binary_exp_expr">binary\_exp\_expr</a>  }  
  
<a name="binary_exp_expr"></a>**binary\_exp\_expr**
:	<a href="#unary_expr">unary\_expr</a>  { <font color="purple"><b>\*\*</b></font> <a href="#unary_expr">unary\_expr</a>  }  
  
<a name="unary_expr"></a>**unary\_expr**
:	 \[ <a href="#unary_op">unary\_op</a>  ]  <a href="#primary">primary</a> 
  
<a name="unary_op"></a>**unary\_op**
:	<font color="purple"><b>+</b></font>   
        | <font color="purple"><b>-</b></font>   
        | <font color="purple"><b>!</b></font>   
        | <font color="purple"><b>~</b></font>   
        | <font color="purple"><b>&</b></font>   
        | <font color="purple"><b>|</b></font>   
        | <font color="purple"><b>^</b></font> 
  
<a name="primary"></a>**primary**
:	<a href="#number">number</a>   
        | <a href="#bool_literal">bool\_literal</a>   
        | <a href="#paren_expr">paren\_expr</a>   
        | <a href="#string">string</a>   
        | <a href="#variable_ref_path">variable\_ref\_path</a>   
        | <a href="#function_symbol_call">function\_symbol\_call</a>   
        | <a href="#static_ref_path">static\_ref\_path</a>   
        | <font color="purple"><b>super</b></font>   
        | <a href="#compile_has_expr">compile\_has\_expr</a> 
  
<a name="paren_expr"></a>**paren\_expr**
:	<font color="purple"><b>(</b></font> <a href="#expression">expression</a> <font color="purple"><b>)</b></font> 
  
<a name="variable_ref_path"></a>**variable\_ref\_path**
:	<a href="#variable_ref">variable\_ref</a>  { <font color="purple"><b>.</b></font> <a href="#variable_ref">variable\_ref</a>  }  
  
<a name="variable_ref"></a>**variable\_ref**
:	<a href="#identifier">identifier</a>  \[ <font color="purple"><b>\[</b></font> <a href="#expression">expression</a>  \[ <font color="purple"><b>:</b></font> <a href="#expression">expression</a>  ]  <font color="purple"><b>]</b></font>  ]  
  
<a name="function_symbol_call"></a>**function\_symbol\_call**
:	 ( <a href="#identifier">identifier</a>  {  ( <font color="purple"><b>::</b></font>   
           | <font color="purple"><b>.</b></font>  )  <a href="#identifier">identifier</a>  }   )  <a href="#method_parameter_list">method\_parameter\_list</a> <font color="purple"><b>;</b></font> 
  
<a name="static_ref_path"></a>**static\_ref\_path**
:	<a href="#identifier">identifier</a> <font color="purple"><b>::</b></font> <a href="#identifier">identifier</a>  { <font color="purple"><b>::</b></font> <a href="#identifier">identifier</a>  }  
  
<a name="mul_div_mod_op"></a>**mul\_div\_mod\_op**
:	<font color="purple"><b>\*</b></font>   
        | <font color="purple"><b>/</b></font>   
        | <font color="purple"><b>%</b></font> 
  
<a name="add_sub_op"></a>**add\_sub\_op**
:	<font color="purple"><b>+</b></font>   
        | <font color="purple"><b>-</b></font> 
  
<a name="shift_op"></a>**shift\_op**
:	<font color="purple"><b><<</b></font>   
        | <font color="purple"><b>>></b></font> 
  
<a name="eq_neq_op"></a>**eq\_neq\_op**
:	<font color="purple"><b>==</b></font>   
        | <font color="purple"><b>!=</b></font> 
  
## B.14 Identifiers and literals
  
<a name="constant"></a>**constant**
:	<a href="#number">number</a>   
        | <a href="#identifier">identifier</a> 
  
<a name="identifier"></a>**identifier**
:	<a href="#ID">ID</a>   
        | <a href="#ESCAPED_ID">ESCAPED\_ID</a> 
  
<a name="hierarchical_id"></a>**hierarchical\_id**
:	<a href="#identifier">identifier</a>  { <font color="purple"><b>.</b></font> <a href="#identifier">identifier</a>  }  
  
<a name="action_type_identifier"></a>**action\_type\_identifier**
:	<a href="#type_identifier">type\_identifier</a> 
  
<a name="type_identifier"></a>**type\_identifier**
:	 \[ <font color="purple"><b>::</b></font>  ]  <a href="#ID">ID</a>  { <font color="purple"><b>::</b></font> <a href="#ID">ID</a>  }  
  
<a name="package_identifier"></a>**package\_identifier**
:	<a href="#hierarchical_id">hierarchical\_id</a> 
  
<a name="coverpoint_target_identifier"></a>**coverpoint\_target\_identifier**
:	<a href="#hierarchical_id">hierarchical\_id</a> 
  
<a name="action_identifier"></a>**action\_identifier**
:	<a href="#identifier">identifier</a> 
  
<a name="struct_identifier"></a>**struct\_identifier**
:	<a href="#identifier">identifier</a> 
  
<a name="component_identifier"></a>**component\_identifier**
:	<a href="#identifier">identifier</a> 
  
<a name="component_action_identifier"></a>**component\_action\_identifier**
:	<a href="#identifier">identifier</a> 
  
<a name="covercross_identifier"></a>**covercross\_identifier**
:	<a href="#identifier">identifier</a> 
  
<a name="coverpoint_identifier"></a>**coverpoint\_identifier**
:	<a href="#identifier">identifier</a> 
  
<a name="enum_identifier"></a>**enum\_identifier**
:	<a href="#identifier">identifier</a> 
  
<a name="import_class_identifier"></a>**import\_class\_identifier**
:	<a href="#identifier">identifier</a> 
  
<a name="language_identifier"></a>**language\_identifier**
:	<a href="#identifier">identifier</a> 
  
<a name="method_identifier"></a>**method\_identifier**
:	<a href="#identifier">identifier</a> 
  
<a name="symbol_identifier"></a>**symbol\_identifier**
:	<a href="#identifier">identifier</a> 
  
<a name="variable_identifier"></a>**variable\_identifier**
:	<a href="#identifier">identifier</a> 
  
<a name="iterator_identifier"></a>**iterator\_identifier**
:	<a href="#identifier">identifier</a> 
  
<a name="index_identifier"></a>**index\_identifier**
:	<a href="#identifier">identifier</a> 
  
<a name="buffer_type_identifier"></a>**buffer\_type\_identifier**
:	<a href="#type_identifier">type\_identifier</a> 
  
<a name="resource_type_identifier"></a>**resource\_type\_identifier**
:	<a href="#type_identifier">type\_identifier</a> 
  
<a name="state_type_identifier"></a>**state\_type\_identifier**
:	<a href="#type_identifier">type\_identifier</a> 
  
<a name="stream_type_identifier"></a>**stream\_type\_identifier**
:	<a href="#type_identifier">type\_identifier</a> 
  
<a name="filename_string"></a>**filename\_string**
:	<a href="#DOUBLE_QUOTED_STRING">DOUBLE\_QUOTED\_STRING</a> 
  
<a name="bool_literal"></a>**bool\_literal**
:	<font color="purple"><b>true</b></font>   
        | <font color="purple"><b>false</b></font> 
  
## B.15 Numbers
  
<a name="number"></a>**number**
:	<a href="#based_hex_number">based\_hex\_number</a>   
        | <a href="#based_dec_number">based\_dec\_number</a>   
        | <a href="#based_bin_number">based\_bin\_number</a>   
        | <a href="#based_oct_number">based\_oct\_number</a>   
        | <a href="#dec_number">dec\_number</a>   
        | <a href="#oct_number">oct\_number</a>   
        | <a href="#hex_number">hex\_number</a> 
  
<a name="based_hex_number"></a>**based\_hex\_number**
:	 \[ <a href="#DEC_LITERAL">DEC\_LITERAL</a>  ]  <a href="#BASED_HEX_LITERAL">BASED\_HEX\_LITERAL</a> 
  
<a name="DEC_LITERAL"></a>**DEC\_LITERAL**
:	 \[ <em>1-9</em> ]   {  \[ <em>0-9</em> ]    
         | <font color="purple"><b>\_</b></font>  }  
  
<a name="BASED_HEX_LITERAL"></a>**BASED\_HEX\_LITERAL**
:	<font color="purple"><b>'</b></font>  \[ <em>s|S</em> ]  <em>h|H</em> \[ <em>0-9</em> ]    
        |  \[ <em>a-f</em> ]    
        |  \[ <em>A-F</em> ]   {  \[ <em>0-9</em> ]    
         |  \[ <em>a-f</em> ]    
         |  \[ <em>A-F</em> ]    
         | <font color="purple"><b>\_</b></font>  }  
  
<a name="based_dec_number"></a>**based\_dec\_number**
:	 \[ <a href="#DEC_LITERAL">DEC\_LITERAL</a>  ]  <a href="#BASED_DEC_LITERAL">BASED\_DEC\_LITERAL</a> 
  
<a name="BASED_DEC_LITERAL"></a>**BASED\_DEC\_LITERAL**
:	 \[ <em>s|S</em> ]  <em>d|D</em> \[ <em>0-9</em> ]   {  \[ <em>0-9</em> ]    
         | <font color="purple"><b>\_</b></font>  }  
  
<a name="based_bin_number"></a>**based\_bin\_number**
:	 \[ <a href="#DEC_LITERAL">DEC\_LITERAL</a>  ]  <a href="#BASED_BIN_LITERAL">BASED\_BIN\_LITERAL</a> 
  
<a name="BASED_BIN_LITERAL"></a>**BASED\_BIN\_LITERAL**
:	<font color="purple"><b>'</b></font>  \[ <em>s|S</em> ]  <em>b|B</em> \[ <em>0-1</em> ]   {  \[ <em>0-1</em> ]    
         | <font color="purple"><b>\_</b></font>  }  
  
<a name="based_oct_number"></a>**based\_oct\_number**
:	 \[ <a href="#DEC_LITERAL">DEC\_LITERAL</a>  ]  <a href="#BASED_OCT_LITERAL">BASED\_OCT\_LITERAL</a> 
  
<a name="BASED_OCT_LITERAL"></a>**BASED\_OCT\_LITERAL**
:	<font color="purple"><b>'</b></font>  \[ <em>s|S</em> ]  <em>o|O</em> \[ <em>0-7</em> ]   {  \[ <em>0-7</em> ]    
         | <font color="purple"><b>\_</b></font>  }  
  
<a name="dec_number"></a>**dec\_number**
:	<a href="#DEC_LITERAL">DEC\_LITERAL</a> 
  
<a name="oct_number"></a>**oct\_number**
:	<a href="#OCT_LITERAL">OCT\_LITERAL</a> 
  
<a name="OCT_LITERAL"></a>**OCT\_LITERAL**
:	<font color="purple"><b>0</b></font>  \[ <em>0-7</em> ]  
  
<a name="hex_number"></a>**hex\_number**
:	<a href="#HEX_LITERAL">HEX\_LITERAL</a> 
  
<a name="HEX_LITERAL"></a>**HEX\_LITERAL**
:	<em>0x</em> \[ <em>0-9</em> ]    
        |  \[ <em>a-f</em> ]    
        |  \[ <em>A-F</em> ]   {  \[ <em>0-9</em> ]    
         |  \[ <em>a-f</em> ]    
         |  \[ <em>A-F</em> ]    
         | <font color="purple"><b>\_</b></font>  }  
  
## B.16 Comments
  
<a name="SL_COMMENT"></a>**SL\_COMMENT**
:	<font color="purple"><b>//</b></font> <em>{any\_ASCII\_character\_except\_newline}\n</em>
  
<a name="ML_COMMENT"></a>**ML\_COMMENT**
:	<font color="purple"><b>/\*</b></font>  { <em>any\_ASCII\_character</em> }  <font color="purple"><b>\*/</b></font> 
  
<a name="string"></a>**string**
:	<a href="#DOUBLE_QUOTED_STRING">DOUBLE\_QUOTED\_STRING</a>   
        | <a href="#TRIPLE_DOUBLE_QUOTED_STRING">TRIPLE\_DOUBLE\_QUOTED\_STRING</a> 
  
<a name="unescaped_character"></a>**unescaped\_character**
:	<em>Any\_Printable\_ASCII\_Character</em>
  
<a name="escaped_character"></a>**escaped\_character**
:	<font color="purple"><b>\</b></font>  ( <font color="purple"><b>'</b></font>   
         | <font color="purple"><b>"</b></font>   
         | <font color="purple"><b>?</b></font>   
         | <font color="purple"><b>'</b></font>   
         | <font color="purple"><b>a</b></font>   
         | <font color="purple"><b>b</b></font>   
         | <font color="purple"><b>f</b></font>   
         | <font color="purple"><b>n</b></font>   
         | <font color="purple"><b>r</b></font>   
         | <font color="purple"><b>t</b></font>   
         | <font color="purple"><b>v</b></font>   
         |  \[ <em>0-7</em> ]   \[ <em>0-7</em> ]   \[ <em>0-7</em> ]   )  
  
<a name="DOUBLE_QUOTED_STRING"></a>**DOUBLE\_QUOTED\_STRING**
:	<font color="purple"><b>"</b></font>  { <a href="#unescaped_character">unescaped\_character</a>   
         | <a href="#escaped_character">escaped\_character</a>  }  <font color="purple"><b>"</b></font> 
  
<a name="TRIPLE_DOUBLE_QUOTED_STRING"></a>**TRIPLE\_DOUBLE\_QUOTED\_STRING**
:	<font color="purple"><b>"""</b></font>  { <em>any\_ASCII\_character</em> }  <font color="purple"><b>"""</b></font> 
  
<a name="ID"></a>**ID**
:	 \[ <em>a-z</em> ]    
        |  \[ <em>A-Z</em> ]    
        | <em>\_</em> {  \[ <em>a-z</em> ]    
         |  \[ <em>A-Z</em> ]    
         | <em>\_</em>  
         |  \[ <em>0-9</em> ]   }  
  
<a name="ESCAPED_ID"></a>**ESCAPED\_ID**
:	<font color="purple"><b>\</b></font>  { <em>any\_ASCII\_character\_except\_whitespace</em> }  <em>whitespace</em>
