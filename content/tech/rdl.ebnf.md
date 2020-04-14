---
title: "Register Description Language SystemRDL 2.0"
layout: page
pager: true
author: Sigasi
date: 2019-04-23
comments: true
tags:
  - ebnf
---
<em>
Copyright © 2015 - 2018 Accellera. All rights reserved.

Get the full Language Reference Manual, free of charge, at <https://www.accellera.org/downloads/standards/systemrdl>

Sigasi has created this browsable version of the grammar, hoping that it would be useful to you, but without any warranty whatsoever.

[More browsable grammars of Hardware Description and Verification languages](/tags/ebnf).
</em>  
## B.1 SystemRDL source text
  
<a name="root"></a>**root**
:  { <a href="#description">description</a> }
  
<a name="description"></a>**description**
:  <a href="#component_def">component\_def</a>  
        | <a href="#enum_def">enum\_def</a>  
        | <a href="#property_definition">property\_definition</a>  
        | <a href="#struct_def">struct\_def</a>  
        | <a href="#constraint_def">constraint\_def</a>  
        | <a href="#explicit_component_inst">explicit\_component\_inst</a>  
        | <a href="#property_assignment">property\_assignment</a>
  
## B.2 User-defined properties
  
<a name="property_definition"></a>**property\_definition**
:  <font color="purple"><b>property</b></font> <a href="#id">id</a> <font color="purple"><b>{</b></font> <a href="#property_body">property\_body</a> <font color="purple"><b>}</b></font> <font color="purple"><b>;</b></font>
  
<a name="property_body"></a>**property\_body**
:  <a href="#property_attribute">property\_attribute</a>  { <a href="#property_attribute">property\_attribute</a> }
  
<a name="property_attribute"></a>**property\_attribute**
:  <a href="#property_type">property\_type</a>  
        | <a href="#property_usage">property\_usage</a>  
        | <a href="#property_default">property\_default</a>  
        | <a href="#property_constraint">property\_constraint</a>
  
<a name="property_type"></a>**property\_type**
:  <font color="purple"><b>type</b></font> <font color="purple"><b>=</b></font> <a href="#property_data_type">property\_data\_type</a>  \[ <a href="#array_type">array\_type</a> ]  <font color="purple"><b>;</b></font>
  
<a name="property_data_type"></a>**property\_data\_type**
:  <a href="#component_primary_type">component\_primary\_type</a>  
        | <font color="purple"><b>ref</b></font>  
        | <font color="purple"><b>number</b></font>  
        | <a href="#basic_data_type">basic\_data\_type</a>
  
<a name="property_usage"></a>**property\_usage**
:  <font color="purple"><b>component</b></font> <font color="purple"><b>=</b></font> <a href="#property_comp_types">property\_comp\_types</a> <font color="purple"><b>;</b></font>
  
<a name="property_comp_types"></a>**property\_comp\_types**
:  <a href="#property_comp_type">property\_comp\_type</a>  { <font color="purple"><b>|</b></font> <a href="#property_comp_type">property\_comp\_type</a> }
  
<a name="property_comp_type"></a>**property\_comp\_type**
:  <a href="#component_type">component\_type</a>  
        | <font color="purple"><b>constraint</b></font>  
        | <font color="purple"><b>all</b></font>
  
<a name="property_default"></a>**property\_default**
:  <font color="purple"><b>default</b></font> <font color="purple"><b>=</b></font> <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>;</b></font>
  
<a name="property_constraint"></a>**property\_constraint**
:  <font color="purple"><b>constraint</b></font> <font color="purple"><b>=</b></font> <a href="#property_constraint_type">property\_constraint\_type</a> <font color="purple"><b>;</b></font>
  
<a name="property_constraint_type"></a>**property\_constraint\_type**
:  <font color="purple"><b>componentwidth</b></font>
  
## B.3 Component definition
  
<a name="component_def"></a>**component\_def**
:  <a href="#component_named_def">component\_named\_def</a> <a href="#component_inst_type">component\_inst\_type</a> <a href="#component_insts">component\_insts</a> <font color="purple"><b>;</b></font>  
        | <a href="#component_anon_def">component\_anon\_def</a> <a href="#component_inst_type">component\_inst\_type</a> <a href="#component_insts">component\_insts</a> <font color="purple"><b>;</b></font>  
        | <a href="#component_named_def">component\_named\_def</a>  \[ <a href="#component_insts">component\_insts</a> ]  <font color="purple"><b>;</b></font>  
        | <a href="#component_anon_def">component\_anon\_def</a> <a href="#component_insts">component\_insts</a> <font color="purple"><b>;</b></font>  
        | <a href="#component_inst_type">component\_inst\_type</a> <a href="#component_named_def">component\_named\_def</a> <a href="#component_insts">component\_insts</a> <font color="purple"><b>;</b></font>  
        | <a href="#component_inst_type">component\_inst\_type</a> <a href="#component_anon_def">component\_anon\_def</a> <a href="#component_insts">component\_insts</a> <font color="purple"><b>;</b></font>
  
<a name="component_named_def"></a>**component\_named\_def**
:  <a href="#component_type">component\_type</a> <a href="#id">id</a>  \[ <a href="#param_def">param\_def</a> ]  <a href="#component_body">component\_body</a>
  
<a name="component_anon_def"></a>**component\_anon\_def**
:  <a href="#component_type">component\_type</a> <a href="#component_body">component\_body</a>
  
<a name="component_body"></a>**component\_body**
:  <font color="purple"><b>{</b></font>  { <a href="#component_body_elem">component\_body\_elem</a> }  <font color="purple"><b>}</b></font>
  
<a name="component_body_elem"></a>**component\_body\_elem**
:  <a href="#component_def">component\_def</a>  
        | <a href="#enum_def">enum\_def</a>  
        | <a href="#struct_def">struct\_def</a>  
        | <a href="#constraint_def">constraint\_def</a>  
        | <a href="#explicit_component_inst">explicit\_component\_inst</a>  
        | <a href="#property_assignment">property\_assignment</a>
  
<a name="component_type"></a>**component\_type**
:  <a href="#component_primary_type">component\_primary\_type</a>  
        | <font color="purple"><b>signal</b></font>
  
<a name="component_primary_type"></a>**component\_primary\_type**
:  <font color="purple"><b>addrmap</b></font>  
        | <font color="purple"><b>regfile</b></font>  
        | <font color="purple"><b>reg</b></font>  
        | <font color="purple"><b>field</b></font>  
        | <font color="purple"><b>mem</b></font>
  
<a name="explicit_component_inst"></a>**explicit\_component\_inst**
:  \[ <a href="#component_inst_type">component\_inst\_type</a> ]   \[ <a href="#component_inst_alias">component\_inst\_alias</a> ]  <a href="#id">id</a> <a href="#component_insts">component\_insts</a> <font color="purple"><b>;</b></font>
  
<a name="component_insts"></a>**component\_insts**
:  \[ <a href="#param_inst">param\_inst</a> ]  <a href="#component_inst">component\_inst</a>  { <font color="purple"><b>,</b></font> <a href="#component_inst">component\_inst</a> }
  
<a name="component_inst"></a>**component\_inst**
:  <a href="#id">id</a>  \[ <a href="#component_inst_array_or_range">component\_inst\_array\_or\_range</a> ]   \[ <font color="purple"><b>=</b></font> <a href="#constant_expression">constant\_expression</a> ]   \[ <font color="purple"><b>@</b></font> <a href="#constant_expression">constant\_expression</a> ]   \[ <font color="purple"><b>+=</b></font> <a href="#constant_expression">constant\_expression</a> ]   \[ <font color="purple"><b>%=</b></font> <a href="#constant_expression">constant\_expression</a> ]
  
<a name="component_inst_alias"></a>**component\_inst\_alias**
:  <font color="purple"><b>alias</b></font> <a href="#id">id</a>
  
<a name="component_inst_type"></a>**component\_inst\_type**
:  <font color="purple"><b>external</b></font>  
        | <font color="purple"><b>internal</b></font>
  
<a name="component_inst_array_or_range"></a>**component\_inst\_array\_or\_range**
:  <a href="#array">array</a>  { <a href="#array">array</a> }  
        | <a href="#range">range</a>
  
## B.4 Struct definitions
  
<a name="struct_def"></a>**struct\_def**
:  \[ <font color="purple"><b>abstract</b></font> ]  <font color="purple"><b>struct</b></font> <a href="#id">id</a>  \[ <font color="purple"><b>:</b></font> <a href="#id">id</a> ]  <a href="#struct_body">struct\_body</a> <font color="purple"><b>;</b></font>
  
<a name="struct_body"></a>**struct\_body**
:  <font color="purple"><b>{</b></font>  { <a href="#struct_elem">struct\_elem</a> }  <font color="purple"><b>}</b></font>
  
<a name="struct_elem"></a>**struct\_elem**
:  <a href="#struct_type">struct\_type</a> <a href="#id">id</a>  \[ <a href="#array_type">array\_type</a> ]  <font color="purple"><b>;</b></font>
  
<a name="struct_type"></a>**struct\_type**
:  <a href="#data_type">data\_type</a>  
        | <a href="#component_type">component\_type</a>
  
## B.5 Constraints
  
<a name="constraint_def"></a>**constraint\_def**
:  <font color="purple"><b>constraint</b></font> <a href="#constraint_def_exp">constraint\_def\_exp</a> <font color="purple"><b>;</b></font>  
        | <font color="purple"><b>constraint</b></font> <a href="#constraint_def_anon">constraint\_def\_anon</a> <font color="purple"><b>;</b></font>
  
<a name="constraint_def_exp"></a>**constraint\_def\_exp**
:  <a href="#id">id</a> <a href="#constraint_body">constraint\_body</a>  \[ <a href="#constraint_insts">constraint\_insts</a> ]
  
<a name="constraint_def_anon"></a>**constraint\_def\_anon**
:  <a href="#constraint_body">constraint\_body</a> <a href="#constraint_insts">constraint\_insts</a>
  
<a name="constraint_insts"></a>**constraint\_insts**
:  <a href="#id">id</a>  { <font color="purple"><b>,</b></font> <a href="#id">id</a> }
  
<a name="constraint_body"></a>**constraint\_body**
:  <font color="purple"><b>{</b></font>  { <a href="#constraint_elem">constraint\_elem</a> <font color="purple"><b>;</b></font> }  <font color="purple"><b>}</b></font>
  
<a name="constraint_prop_assignment"></a>**constraint\_prop\_assignment**
:  <a href="#id">id</a> <font color="purple"><b>=</b></font> <a href="#constant_expression">constant\_expression</a>
  
<a name="constraint_elem"></a>**constraint\_elem**
:  <a href="#constant_expression">constant\_expression</a>  
        | <a href="#constraint_prop_assignment">constraint\_prop\_assignment</a>  
        | <a href="#constraint_lhs">constraint\_lhs</a> <font color="purple"><b>inside</b></font> <font color="purple"><b>{</b></font> <a href="#constraint_values">constraint\_values</a> <font color="purple"><b>}</b></font>  
        | <a href="#constraint_lhs">constraint\_lhs</a> <font color="purple"><b>inside</b></font> <a href="#id">id</a>
  
<a name="constraint_values"></a>**constraint\_values**
:  <a href="#constraint_value">constraint\_value</a>  { <font color="purple"><b>,</b></font> <a href="#constraint_value">constraint\_value</a> }
  
<a name="constraint_value"></a>**constraint\_value**
:  <a href="#constant_expression">constant\_expression</a>  
        | <font color="purple"><b>\[</b></font> <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>:</b></font> <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>]</b></font>
  
<a name="constraint_lhs"></a>**constraint\_lhs**
:  <font color="purple"><b>this</b></font>  
        | <a href="#instance_ref">instance\_ref</a>
  
## B.6 Parameters
  
<a name="param_def"></a>**param\_def**
:  <font color="purple"><b>#</b></font> <font color="purple"><b>(</b></font> <a href="#param_def_elem">param\_def\_elem</a>  { <font color="purple"><b>,</b></font> <a href="#param_def_elem">param\_def\_elem</a> }  <font color="purple"><b>)</b></font>
  
<a name="param_def_elem"></a>**param\_def\_elem**
:  <a href="#data_type">data\_type</a> <a href="#id">id</a>  \[ <a href="#array_type">array\_type</a> ]   \[ <font color="purple"><b>=</b></font> <a href="#constant_expression">constant\_expression</a> ]
  
<a name="param_inst"></a>**param\_inst**
:  <font color="purple"><b>#</b></font> <font color="purple"><b>(</b></font> <a href="#param_elem">param\_elem</a>  { <font color="purple"><b>,</b></font> <a href="#param_elem">param\_elem</a> }  <font color="purple"><b>)</b></font>
  
<a name="param_elem"></a>**param\_elem**
:  <font color="purple"><b>.</b></font> <a href="#id">id</a> <font color="purple"><b>(</b></font> <a href="#param_value">param\_value</a> <font color="purple"><b>)</b></font>
  
<a name="param_value"></a>**param\_value**
:  <a href="#constant_expression">constant\_expression</a>
  
## B.7 Enums
  
<a name="enum_def"></a>**enum\_def**
:  <font color="purple"><b>enum</b></font> <a href="#id">id</a> <a href="#enum_body">enum\_body</a> <font color="purple"><b>;</b></font>
  
<a name="enum_body"></a>**enum\_body**
:  <font color="purple"><b>{</b></font> <a href="#enum_entry">enum\_entry</a>  { <a href="#enum_entry">enum\_entry</a> }  <font color="purple"><b>}</b></font>
  
<a name="enum_entry"></a>**enum\_entry**
:  <a href="#id">id</a>  \[ <font color="purple"><b>=</b></font> <a href="#constant_expression">constant\_expression</a> ]   \[ <a href="#enum_property_assignment">enum\_property\_assignment</a> ]  <font color="purple"><b>;</b></font>
  
<a name="enum_property_assignment"></a>**enum\_property\_assignment**
:  <font color="purple"><b>{</b></font>  { <a href="#explicit_prop_assignment">explicit\_prop\_assignment</a> <font color="purple"><b>;</b></font> }  <font color="purple"><b>}</b></font>
  
## B.8 Property assignment
  
<a name="property_assignment"></a>**property\_assignment**
:  <a href="#explicit_or_default_prop_assignment">explicit\_or\_default\_prop\_assignment</a>  
        | <a href="#post_prop_assignment">post\_prop\_assignment</a>
  
<a name="explicit_or_default_prop_assignment"></a>**explicit\_or\_default\_prop\_assignment**
:  \[ <font color="purple"><b>default</b></font> ]  <a href="#explicit_prop_modifier">explicit\_prop\_modifier</a> <font color="purple"><b>;</b></font>  
        | \[ <font color="purple"><b>default</b></font> ]  <a href="#explicit_prop_assignment">explicit\_prop\_assignment</a> <font color="purple"><b>;</b></font>
  
<a name="explicit_prop_modifier"></a>**explicit\_prop\_modifier**
:  <a href="#prop_mod">prop\_mod</a> <a href="#id">id</a>
  
<a name="explicit_encode_assignment"></a>**explicit\_encode\_assignment**
:  <font color="purple"><b>encode</b></font> <font color="purple"><b>=</b></font> <a href="#id">id</a>
  
<a name="explicit_prop_assignment"></a>**explicit\_prop\_assignment**
:  <a href="#prop_assignment_lhs">prop\_assignment\_lhs</a>  \[ <font color="purple"><b>=</b></font> <a href="#prop_assignment_rhs">prop\_assignment\_rhs</a> ]  
        | <a href="#explicit_encode_assignment">explicit\_encode\_assignment</a>
  
<a name="post_encode_assignment"></a>**post\_encode\_assignment**
:  <a href="#instance_ref">instance\_ref</a> <font color="purple"><b>-></b></font> <font color="purple"><b>encode</b></font> <font color="purple"><b>=</b></font> <a href="#id">id</a>
  
<a name="post_prop_assignment"></a>**post\_prop\_assignment**
:  <a href="#prop_ref">prop\_ref</a>  \[ <font color="purple"><b>=</b></font> <a href="#prop_assignment_rhs">prop\_assignment\_rhs</a> ]  <font color="purple"><b>;</b></font>  
        | <a href="#post_encode_assignment">post\_encode\_assignment</a> <font color="purple"><b>;</b></font>
  
<a name="prop_mod"></a>**prop\_mod**
:  <font color="purple"><b>posedge</b></font>  
        | <font color="purple"><b>negedge</b></font>  
        | <font color="purple"><b>bothedge</b></font>  
        | <font color="purple"><b>level</b></font>  
        | <font color="purple"><b>nonsticky</b></font>
  
<a name="prop_assignment_lhs"></a>**prop\_assignment\_lhs**
:  <a href="#prop_keyword">prop\_keyword</a>  
        | <a href="#id">id</a>
  
<a name="prop_keyword"></a>**prop\_keyword**
:  <font color="purple"><b>sw</b></font>  
        | <font color="purple"><b>hw</b></font>  
        | <font color="purple"><b>rclr</b></font>  
        | <font color="purple"><b>rset</b></font>  
        | <font color="purple"><b>woclr</b></font>  
        | <font color="purple"><b>woset</b></font>
  
<a name="prop_assignment_rhs"></a>**prop\_assignment\_rhs**
:  <a href="#constant_expression">constant\_expression</a>  
        | <a href="#precedencetype_literal">precedencetype\_literal</a>
  
## B.9 Struct literal
  
<a name="struct_literal"></a>**struct\_literal**
:  <a href="#id">id</a> <font color="purple"><b>'</b></font> <font color="purple"><b>{</b></font> <a href="#struct_literal_body">struct\_literal\_body</a> <font color="purple"><b>}</b></font>
  
<a name="struct_literal_body"></a>**struct\_literal\_body**
:  \[ <a href="#struct_literal_elem">struct\_literal\_elem</a>  { <font color="purple"><b>,</b></font> <a href="#struct_literal_elem">struct\_literal\_elem</a> } ]
  
<a name="struct_literal_elem"></a>**struct\_literal\_elem**
:  <a href="#id">id</a> <font color="purple"><b>:</b></font> <a href="#constant_expression">constant\_expression</a>
  
## B.10 Array literal
  
<a name="array_literal"></a>**array\_literal**
:  <font color="purple"><b>'</b></font> <font color="purple"><b>{</b></font> <a href="#array_literal_body">array\_literal\_body</a> <font color="purple"><b>}</b></font>
  
<a name="array_literal_body"></a>**array\_literal\_body**
:  <a href="#constant_expression">constant\_expression</a>  { <font color="purple"><b>,</b></font> <a href="#constant_expression">constant\_expression</a> }
  
## B.11 Reference
  
<a name="instance_ref"></a>**instance\_ref**
:  <a href="#instance_ref_element">instance\_ref\_element</a>  { <font color="purple"><b>.</b></font> <a href="#instance_ref_element">instance\_ref\_element</a> }
  
<a name="prop_ref"></a>**prop\_ref**
:  <a href="#instance_ref">instance\_ref</a> <font color="purple"><b>-></b></font> <a href="#prop_keyword">prop\_keyword</a>  
        | <a href="#instance_ref">instance\_ref</a> <font color="purple"><b>-></b></font> <a href="#id">id</a>
  
<a name="instance_or_prop_ref"></a>**instance\_or\_prop\_ref**
:  <a href="#instance_ref">instance\_ref</a> <font color="purple"><b>-></b></font> <a href="#prop_keyword">prop\_keyword</a>  
        | <a href="#instance_ref">instance\_ref</a> <font color="purple"><b>-></b></font> <a href="#id">id</a>  
        | <a href="#instance_ref">instance\_ref</a>
  
<a name="instance_ref_element"></a>**instance\_ref\_element**
:  <a href="#id">id</a>  { <a href="#array">array</a> }
  
## B.12 Array and range
  
<a name="range"></a>**range**
:  <font color="purple"><b>\[</b></font> <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>:</b></font> <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>]</b></font>
  
<a name="array"></a>**array**
:  <font color="purple"><b>\[</b></font> <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>]</b></font>
  
<a name="array_type"></a>**array\_type**
:  <font color="purple"><b>\[</b></font> <font color="purple"><b>]</b></font>
  
## B.13 Concatenation
  
<a name="constant_concatenation"></a>**constant\_concatenation**
:  <font color="purple"><b>{</b></font> <a href="#constant_expression">constant\_expression</a>  { <font color="purple"><b>,</b></font> <a href="#constant_expression">constant\_expression</a> }  <font color="purple"><b>}</b></font>
  
<a name="constant_multiple_concatenation"></a>**constant\_multiple\_concatenation**
:  <font color="purple"><b>{</b></font> <a href="#constant_expression">constant\_expression</a> <a href="#constant_concatenation">constant\_concatenation</a> <font color="purple"><b>}</b></font>
  
## B.14 Data types
  
<a name="integer_type"></a>**integer\_type**
:  <a href="#integer_vector_type">integer\_vector\_type</a>  
        | <a href="#integer_atom_type">integer\_atom\_type</a>
  
<a name="integer_atom_type"></a>**integer\_atom\_type**
:  <font color="purple"><b>longint</b></font>
  
<a name="integer_vector_type"></a>**integer\_vector\_type**
:  <font color="purple"><b>bit</b></font>
  
<a name="simple_type"></a>**simple\_type**
:  <a href="#integer_type">integer\_type</a>
  
<a name="signing"></a>**signing**
:  <font color="purple"><b>unsigned</b></font>
  
<a name="basic_data_type"></a>**basic\_data\_type**
:  <a href="#simple_type">simple\_type</a>  \[ <a href="#signing">signing</a> ]  
        | <font color="purple"><b>string</b></font>  
        | <font color="purple"><b>boolean</b></font>  
        | <a href="#id">id</a>
  
<a name="data_type"></a>**data\_type**
:  <a href="#basic_data_type">basic\_data\_type</a>  
        | <font color="purple"><b>accesstype</b></font>  
        | <font color="purple"><b>addressingtype</b></font>  
        | <font color="purple"><b>onreadtype</b></font>  
        | <font color="purple"><b>onwritetype</b></font>
  
## B.15 Literals
  
<a name="boolean_literal"></a>**boolean\_literal**
:  <font color="purple"><b>true</b></font>  
        | <font color="purple"><b>false</b></font>
  
<a name="number"></a>**number**
:  <em>number as specified in 4.6</em>
  
<a name="string_literal"></a>**string\_literal**
:  <em>string as specified in 4.5</em>
  
<a name="enumerator_literal"></a>**enumerator\_literal**
:  <a href="#id">id</a> <font color="purple"><b>::</b></font> <a href="#id">id</a>
  
<a name="accesstype_literal"></a>**accesstype\_literal**
:  <font color="purple"><b>na</b></font>  
        | <font color="purple"><b>rw</b></font>  
        | <font color="purple"><b>wr</b></font>  
        | <font color="purple"><b>r</b></font>  
        | <font color="purple"><b>w</b></font>  
        | <font color="purple"><b>rw1</b></font>  
        | <font color="purple"><b>w1</b></font>
  
<a name="onreadtype_literal"></a>**onreadtype\_literal**
:  <font color="purple"><b>rclr</b></font>  
        | <font color="purple"><b>rset</b></font>  
        | <font color="purple"><b>ruser</b></font>
  
<a name="onwritetype_literal"></a>**onwritetype\_literal**
:  <font color="purple"><b>woset</b></font>  
        | <font color="purple"><b>woclr</b></font>  
        | <font color="purple"><b>wot</b></font>  
        | <font color="purple"><b>wzs</b></font>  
        | <font color="purple"><b>wzc</b></font>  
        | <font color="purple"><b>wzt</b></font>  
        | <font color="purple"><b>wclr</b></font>  
        | <font color="purple"><b>wset</b></font>  
        | <font color="purple"><b>wuser</b></font>
  
<a name="addressingtype_literal"></a>**addressingtype\_literal**
:  <font color="purple"><b>compact</b></font>  
        | <font color="purple"><b>regalign</b></font>  
        | <font color="purple"><b>fullalign</b></font>
  
<a name="precedencetype_literal"></a>**precedencetype\_literal**
:  <font color="purple"><b>hw</b></font>  
        | <font color="purple"><b>sw</b></font>
  
## B.16 Expressions
  
<a name="constant_expression"></a>**constant\_expression**
:  <a href="#constant_primary">constant\_primary</a>  
        | <a href="#unary_operator">unary\_operator</a> <a href="#constant_primary">constant\_primary</a>  
        | <a href="#constant_expression">constant\_expression</a> <a href="#binary_operator">binary\_operator</a> <a href="#constant_expression">constant\_expression</a>  
        | <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>?</b></font> <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>:</b></font> <a href="#constant_expression">constant\_expression</a>
  
<a name="constant_primary"></a>**constant\_primary**
:  <a href="#primary_literal">primary\_literal</a>  
        | <a href="#constant_concatenation">constant\_concatenation</a>  
        | <a href="#constant_multiple_concatenation">constant\_multiple\_concatenation</a>  
        | <font color="purple"><b>(</b></font> <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>)</b></font>  
        | <a href="#constant_cast">constant\_cast</a>  
        | <a href="#instance_or_prop_ref">instance\_or\_prop\_ref</a>  
        | <a href="#struct_literal">struct\_literal</a>  
        | <a href="#array_literal">array\_literal</a>
  
<a name="primary_literal"></a>**primary\_literal**
:  <a href="#number">number</a>  
        | <a href="#string_literal">string\_literal</a>  
        | <a href="#boolean_literal">boolean\_literal</a>  
        | <a href="#accesstype_literal">accesstype\_literal</a>  
        | <a href="#onreadtype_literal">onreadtype\_literal</a>  
        | <a href="#onwritetype_literal">onwritetype\_literal</a>  
        | <a href="#addressingtype_literal">addressingtype\_literal</a>  
        | <a href="#enumerator_literal">enumerator\_literal</a>  
        | <font color="purple"><b>this</b></font>
  
<a name="binary_operator"></a>**binary\_operator**
:  <font color="purple"><b>&&</b></font>  
        | <font color="purple"><b>||</b></font>  
        | <font color="purple"><b><</b></font>  
        | <font color="purple"><b>></b></font>  
        | <font color="purple"><b><=</b></font>  
        | <font color="purple"><b>>=</b></font>  
        | <font color="purple"><b>==</b></font>  
        | <font color="purple"><b>!=</b></font>  
        | <font color="purple"><b>>></b></font>  
        | <font color="purple"><b><<</b></font>  
        | <font color="purple"><b>&</b></font>  
        | <font color="purple"><b>|</b></font>  
        | <font color="purple"><b>^</b></font>  
        | <font color="purple"><b>~^</b></font>  
        | <font color="purple"><b>^~</b></font>  
        | <font color="purple"><b>\*</b></font>  
        | <font color="purple"><b>/</b></font>  
        | <font color="purple"><b>%</b></font>  
        | <font color="purple"><b>+</b></font>  
        | <font color="purple"><b>-</b></font>  
        | <font color="purple"><b>\*\*</b></font>
  
<a name="unary_operator"></a>**unary\_operator**
:  <font color="purple"><b>!</b></font>  
        | <font color="purple"><b>+</b></font>  
        | <font color="purple"><b>-</b></font>  
        | <font color="purple"><b>~</b></font>  
        | <font color="purple"><b>&</b></font>  
        | <font color="purple"><b>~&</b></font>  
        | <font color="purple"><b>|</b></font>  
        | <font color="purple"><b>~|</b></font>  
        | <font color="purple"><b>^</b></font>  
        | <font color="purple"><b>~^</b></font>  
        | <font color="purple"><b>^~</b></font>
  
<a name="constant_cast"></a>**constant\_cast**
:  <a href="#casting_type">casting\_type</a> <font color="purple"><b>'</b></font> <font color="purple"><b>(</b></font> <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>)</b></font>
  
<a name="casting_type"></a>**casting\_type**
:  <a href="#simple_type">simple\_type</a>  
        | <a href="#constant_primary">constant\_primary</a>  
        | <font color="purple"><b>boolean</b></font>
  
## B.17 Identifiers
  
<a name="id"></a>**id**
:  <em>identifier as specified in 4.3</em>
