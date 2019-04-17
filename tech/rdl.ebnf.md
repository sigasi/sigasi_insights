---
title: "Register Description Language SystemRDL 2.0"
layout: page 
pager: true
author: Sigasi
date: 2019-04-17
comments: true
tags:
  - ebnf
---
<em>
Copyright © 2015 - 2018 Accellera. All rights reserved.

Get the full Language Reference Manual, free of charge, at <https://www.accellera.org/downloads/standards/systemrdl>

Sigasi has created this browsable version of the grammar, hoping that it would be useful to you, but without any warranty whatsoever.

[More browsable grammars of Hardware Description and Verification languages][/tag/EBNF].
</em>  
## B.1 SystemRDL source text
  
**root**{: #root }
:	 { <a href="#description">description</a>  }  
  
**description**{: #description }
:	<a href="#component_def">component\_def</a>   
        | <a href="#enum_def">enum\_def</a>   
        | <a href="#property_definition">property\_definition</a>   
        | <a href="#struct_def">struct\_def</a>   
        | <a href="#constraint_def">constraint\_def</a>   
        | <a href="#explicit_component_inst">explicit\_component\_inst</a>   
        | <a href="#property_assignment">property\_assignment</a> 
  
## B.2 User-defined properties
  
**property\_definition**{: #property_definition }
:	<font color="purple"><b>property</b></font> <a href="#id">id</a> <font color="purple"><b>{</b></font> <a href="#property_body">property\_body</a> <font color="purple"><b>}</b></font> <font color="purple"><b>;</b></font> 
  
**property\_body**{: #property_body }
:	<a href="#property_attribute">property\_attribute</a>  { <a href="#property_attribute">property\_attribute</a>  }  
  
**property\_attribute**{: #property_attribute }
:	<a href="#property_type">property\_type</a>   
        | <a href="#property_usage">property\_usage</a>   
        | <a href="#property_default">property\_default</a>   
        | <a href="#property_constraint">property\_constraint</a> 
  
**property\_type**{: #property_type }
:	<font color="purple"><b>type</b></font> <font color="purple"><b>=</b></font> <a href="#property_data_type">property\_data\_type</a>  \[ <a href="#array_type">array\_type</a>  ]  <font color="purple"><b>;</b></font> 
  
**property\_data\_type**{: #property_data_type }
:	<a href="#component_primary_type">component\_primary\_type</a>   
        | <font color="purple"><b>ref</b></font>   
        | <font color="purple"><b>number</b></font>   
        | <a href="#basic_data_type">basic\_data\_type</a> 
  
**property\_usage**{: #property_usage }
:	<font color="purple"><b>component</b></font> <font color="purple"><b>=</b></font> <a href="#property_comp_types">property\_comp\_types</a> <font color="purple"><b>;</b></font> 
  
**property\_comp\_types**{: #property_comp_types }
:	<a href="#property_comp_type">property\_comp\_type</a>  { <font color="purple"><b>|</b></font> <a href="#property_comp_type">property\_comp\_type</a>  }  
  
**property\_comp\_type**{: #property_comp_type }
:	<a href="#component_type">component\_type</a>   
        | <font color="purple"><b>constraint</b></font>   
        | <font color="purple"><b>all</b></font> 
  
**property\_default**{: #property_default }
:	<font color="purple"><b>default</b></font> <font color="purple"><b>=</b></font> <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>;</b></font> 
  
**property\_constraint**{: #property_constraint }
:	<font color="purple"><b>constraint</b></font> <font color="purple"><b>=</b></font> <a href="#property_constraint_type">property\_constraint\_type</a> <font color="purple"><b>;</b></font> 
  
**property\_constraint\_type**{: #property_constraint_type }
:	<font color="purple"><b>componentwidth</b></font> 
  
## B.3 Component definition
  
**component\_def**{: #component_def }
:	<a href="#component_named_def">component\_named\_def</a> <a href="#component_inst_type">component\_inst\_type</a> <a href="#component_insts">component\_insts</a> <font color="purple"><b>;</b></font>   
        | <a href="#component_anon_def">component\_anon\_def</a> <a href="#component_inst_type">component\_inst\_type</a> <a href="#component_insts">component\_insts</a> <font color="purple"><b>;</b></font>   
        | <a href="#component_named_def">component\_named\_def</a>  \[ <a href="#component_insts">component\_insts</a>  ]  <font color="purple"><b>;</b></font>   
        | <a href="#component_anon_def">component\_anon\_def</a> <a href="#component_insts">component\_insts</a> <font color="purple"><b>;</b></font>   
        | <a href="#component_inst_type">component\_inst\_type</a> <a href="#component_named_def">component\_named\_def</a> <a href="#component_insts">component\_insts</a> <font color="purple"><b>;</b></font>   
        | <a href="#component_inst_type">component\_inst\_type</a> <a href="#component_anon_def">component\_anon\_def</a> <a href="#component_insts">component\_insts</a> <font color="purple"><b>;</b></font> 
  
**component\_named\_def**{: #component_named_def }
:	<a href="#component_type">component\_type</a> <a href="#id">id</a>  \[ <a href="#param_def">param\_def</a>  ]  <a href="#component_body">component\_body</a> 
  
**component\_anon\_def**{: #component_anon_def }
:	<a href="#component_type">component\_type</a> <a href="#component_body">component\_body</a> 
  
**component\_body**{: #component_body }
:	<font color="purple"><b>{</b></font>  { <a href="#component_body_elem">component\_body\_elem</a>  }  <font color="purple"><b>}</b></font> 
  
**component\_body\_elem**{: #component_body_elem }
:	<a href="#component_def">component\_def</a>   
        | <a href="#enum_def">enum\_def</a>   
        | <a href="#struct_def">struct\_def</a>   
        | <a href="#constraint_def">constraint\_def</a>   
        | <a href="#explicit_component_inst">explicit\_component\_inst</a>   
        | <a href="#property_assignment">property\_assignment</a> 
  
**component\_type**{: #component_type }
:	<a href="#component_primary_type">component\_primary\_type</a>   
        | <font color="purple"><b>signal</b></font> 
  
**component\_primary\_type**{: #component_primary_type }
:	<font color="purple"><b>addrmap</b></font>   
        | <font color="purple"><b>regfile</b></font>   
        | <font color="purple"><b>reg</b></font>   
        | <font color="purple"><b>field</b></font>   
        | <font color="purple"><b>mem</b></font> 
  
**explicit\_component\_inst**{: #explicit_component_inst }
:	 \[ <a href="#component_inst_type">component\_inst\_type</a>  ]   \[ <a href="#component_inst_alias">component\_inst\_alias</a>  ]  <a href="#id">id</a> <a href="#component_insts">component\_insts</a> <font color="purple"><b>;</b></font> 
  
**component\_insts**{: #component_insts }
:	 \[ <a href="#param_inst">param\_inst</a>  ]  <a href="#component_inst">component\_inst</a>  { <font color="purple"><b>,</b></font> <a href="#component_inst">component\_inst</a>  }  
  
**component\_inst**{: #component_inst }
:	<a href="#id">id</a>  \[ <a href="#component_inst_array_or_range">component\_inst\_array\_or\_range</a>  ]   \[ <font color="purple"><b>=</b></font> <a href="#constant_expression">constant\_expression</a>  ]   \[ <font color="purple"><b>@</b></font> <a href="#constant_expression">constant\_expression</a>  ]   \[ <font color="purple"><b>+=</b></font> <a href="#constant_expression">constant\_expression</a>  ]   \[ <font color="purple"><b>%=</b></font> <a href="#constant_expression">constant\_expression</a>  ]  
  
**component\_inst\_alias**{: #component_inst_alias }
:	<font color="purple"><b>alias</b></font> <a href="#id">id</a> 
  
**component\_inst\_type**{: #component_inst_type }
:	<font color="purple"><b>external</b></font>   
        | <font color="purple"><b>internal</b></font> 
  
**component\_inst\_array\_or\_range**{: #component_inst_array_or_range }
:	<a href="#array">array</a>  { <a href="#array">array</a>  }    
        | <a href="#range">range</a> 
  
## B.4 Struct definitions
  
**struct\_def**{: #struct_def }
:	 \[ <font color="purple"><b>abstract</b></font>  ]  <font color="purple"><b>struct</b></font> <a href="#id">id</a>  \[ <font color="purple"><b>:</b></font> <a href="#id">id</a>  ]  <a href="#struct_body">struct\_body</a> <font color="purple"><b>;</b></font> 
  
**struct\_body**{: #struct_body }
:	<font color="purple"><b>{</b></font>  { <a href="#struct_elem">struct\_elem</a>  }  <font color="purple"><b>}</b></font> 
  
**struct\_elem**{: #struct_elem }
:	<a href="#struct_type">struct\_type</a> <a href="#id">id</a>  \[ <a href="#array_type">array\_type</a>  ]  <font color="purple"><b>;</b></font> 
  
**struct\_type**{: #struct_type }
:	<a href="#data_type">data\_type</a>   
        | <a href="#component_type">component\_type</a> 
  
## B.5 Constraints
  
**constraint\_def**{: #constraint_def }
:	<font color="purple"><b>constraint</b></font> <a href="#constraint_def_exp">constraint\_def\_exp</a> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>constraint</b></font> <a href="#constraint_def_anon">constraint\_def\_anon</a> <font color="purple"><b>;</b></font> 
  
**constraint\_def\_exp**{: #constraint_def_exp }
:	<a href="#id">id</a> <a href="#constraint_body">constraint\_body</a>  \[ <a href="#constraint_insts">constraint\_insts</a>  ]  
  
**constraint\_def\_anon**{: #constraint_def_anon }
:	<a href="#constraint_body">constraint\_body</a> <a href="#constraint_insts">constraint\_insts</a> 
  
**constraint\_insts**{: #constraint_insts }
:	<a href="#id">id</a>  { <font color="purple"><b>,</b></font> <a href="#id">id</a>  }  
  
**constraint\_body**{: #constraint_body }
:	<font color="purple"><b>{</b></font>  { <a href="#constraint_elem">constraint\_elem</a> <font color="purple"><b>;</b></font>  }  <font color="purple"><b>}</b></font> 
  
**constraint\_prop\_assignment**{: #constraint_prop_assignment }
:	<a href="#id">id</a> <font color="purple"><b>=</b></font> <a href="#constant_expression">constant\_expression</a> 
  
**constraint\_elem**{: #constraint_elem }
:	<a href="#constant_expression">constant\_expression</a>   
        | <a href="#constraint_prop_assignment">constraint\_prop\_assignment</a>   
        | <a href="#constraint_lhs">constraint\_lhs</a> <font color="purple"><b>inside</b></font> <font color="purple"><b>{</b></font> <a href="#constraint_values">constraint\_values</a> <font color="purple"><b>}</b></font>   
        | <a href="#constraint_lhs">constraint\_lhs</a> <font color="purple"><b>inside</b></font> <a href="#id">id</a> 
  
**constraint\_values**{: #constraint_values }
:	<a href="#constraint_value">constraint\_value</a>  { <font color="purple"><b>,</b></font> <a href="#constraint_value">constraint\_value</a>  }  
  
**constraint\_value**{: #constraint_value }
:	<a href="#constant_expression">constant\_expression</a>   
        | <font color="purple"><b>\[</b></font> <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>:</b></font> <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>]</b></font> 
  
**constraint\_lhs**{: #constraint_lhs }
:	<font color="purple"><b>this</b></font>   
        | <a href="#instance_ref">instance\_ref</a> 
  
## B.6 Parameters
  
**param\_def**{: #param_def }
:	<font color="purple"><b>#</b></font> <font color="purple"><b>(</b></font> <a href="#param_def_elem">param\_def\_elem</a>  { <font color="purple"><b>,</b></font> <a href="#param_def_elem">param\_def\_elem</a>  }  <font color="purple"><b>)</b></font> 
  
**param\_def\_elem**{: #param_def_elem }
:	<a href="#data_type">data\_type</a> <a href="#id">id</a>  \[ <a href="#array_type">array\_type</a>  ]   \[ <font color="purple"><b>=</b></font> <a href="#constant_expression">constant\_expression</a>  ]  
  
**param\_inst**{: #param_inst }
:	<font color="purple"><b>#</b></font> <font color="purple"><b>(</b></font> <a href="#param_elem">param\_elem</a>  { <font color="purple"><b>,</b></font> <a href="#param_elem">param\_elem</a>  }  <font color="purple"><b>)</b></font> 
  
**param\_elem**{: #param_elem }
:	<font color="purple"><b>.</b></font> <a href="#id">id</a> <font color="purple"><b>(</b></font> <a href="#param_value">param\_value</a> <font color="purple"><b>)</b></font> 
  
**param\_value**{: #param_value }
:	<a href="#constant_expression">constant\_expression</a> 
  
## B.7 Enums
  
**enum\_def**{: #enum_def }
:	<font color="purple"><b>enum</b></font> <a href="#id">id</a> <a href="#enum_body">enum\_body</a> <font color="purple"><b>;</b></font> 
  
**enum\_body**{: #enum_body }
:	<font color="purple"><b>{</b></font> <a href="#enum_entry">enum\_entry</a>  { <a href="#enum_entry">enum\_entry</a>  }  <font color="purple"><b>}</b></font> 
  
**enum\_entry**{: #enum_entry }
:	<a href="#id">id</a>  \[ <font color="purple"><b>=</b></font> <a href="#constant_expression">constant\_expression</a>  ]   \[ <a href="#enum_property_assignment">enum\_property\_assignment</a>  ]  <font color="purple"><b>;</b></font> 
  
**enum\_property\_assignment**{: #enum_property_assignment }
:	<font color="purple"><b>{</b></font>  { <a href="#explicit_prop_assignment">explicit\_prop\_assignment</a> <font color="purple"><b>;</b></font>  }  <font color="purple"><b>}</b></font> 
  
## B.8 Property assignment
  
**property\_assignment**{: #property_assignment }
:	<a href="#explicit_or_default_prop_assignment">explicit\_or\_default\_prop\_assignment</a>   
        | <a href="#post_prop_assignment">post\_prop\_assignment</a> 
  
**explicit\_or\_default\_prop\_assignment**{: #explicit_or_default_prop_assignment }
:	 \[ <font color="purple"><b>default</b></font>  ]  <a href="#explicit_prop_modifier">explicit\_prop\_modifier</a> <font color="purple"><b>;</b></font>   
        |  \[ <font color="purple"><b>default</b></font>  ]  <a href="#explicit_prop_assignment">explicit\_prop\_assignment</a> <font color="purple"><b>;</b></font> 
  
**explicit\_prop\_modifier**{: #explicit_prop_modifier }
:	<a href="#prop_mod">prop\_mod</a> <a href="#id">id</a> 
  
**explicit\_encode\_assignment**{: #explicit_encode_assignment }
:	<font color="purple"><b>encode</b></font> <font color="purple"><b>=</b></font> <a href="#id">id</a> 
  
**explicit\_prop\_assignment**{: #explicit_prop_assignment }
:	<a href="#prop_assignment_lhs">prop\_assignment\_lhs</a>  \[ <font color="purple"><b>=</b></font> <a href="#prop_assignment_rhs">prop\_assignment\_rhs</a>  ]    
        | <a href="#explicit_encode_assignment">explicit\_encode\_assignment</a> 
  
**post\_encode\_assignment**{: #post_encode_assignment }
:	<a href="#instance_ref">instance\_ref</a> <font color="purple"><b>-></b></font> <font color="purple"><b>encode</b></font> <font color="purple"><b>=</b></font> <a href="#id">id</a> 
  
**post\_prop\_assignment**{: #post_prop_assignment }
:	<a href="#prop_ref">prop\_ref</a>  \[ <font color="purple"><b>=</b></font> <a href="#prop_assignment_rhs">prop\_assignment\_rhs</a>  ]  <font color="purple"><b>;</b></font>   
        | <a href="#post_encode_assignment">post\_encode\_assignment</a> <font color="purple"><b>;</b></font> 
  
**prop\_mod**{: #prop_mod }
:	<font color="purple"><b>posedge</b></font>   
        | <font color="purple"><b>negedge</b></font>   
        | <font color="purple"><b>bothedge</b></font>   
        | <font color="purple"><b>level</b></font>   
        | <font color="purple"><b>nonsticky</b></font> 
  
**prop\_assignment\_lhs**{: #prop_assignment_lhs }
:	<a href="#prop_keyword">prop\_keyword</a>   
        | <a href="#id">id</a> 
  
**prop\_keyword**{: #prop_keyword }
:	<font color="purple"><b>sw</b></font>   
        | <font color="purple"><b>hw</b></font>   
        | <font color="purple"><b>rclr</b></font>   
        | <font color="purple"><b>rset</b></font>   
        | <font color="purple"><b>woclr</b></font>   
        | <font color="purple"><b>woset</b></font> 
  
**prop\_assignment\_rhs**{: #prop_assignment_rhs }
:	<a href="#constant_expression">constant\_expression</a>   
        | <a href="#precedencetype_literal">precedencetype\_literal</a> 
  
## B.9 Struct literal
  
**struct\_literal**{: #struct_literal }
:	<a href="#id">id</a> <font color="purple"><b>'</b></font> <font color="purple"><b>{</b></font> <a href="#struct_literal_body">struct\_literal\_body</a> <font color="purple"><b>}</b></font> 
  
**struct\_literal\_body**{: #struct_literal_body }
:	 \[ <a href="#struct_literal_elem">struct\_literal\_elem</a>  { <font color="purple"><b>,</b></font> <a href="#struct_literal_elem">struct\_literal\_elem</a>  }   ]  
  
**struct\_literal\_elem**{: #struct_literal_elem }
:	<a href="#id">id</a> <font color="purple"><b>:</b></font> <a href="#constant_expression">constant\_expression</a> 
  
## B.10 Array literal
  
**array\_literal**{: #array_literal }
:	<font color="purple"><b>'</b></font> <font color="purple"><b>{</b></font> <a href="#array_literal_body">array\_literal\_body</a> <font color="purple"><b>}</b></font> 
  
**array\_literal\_body**{: #array_literal_body }
:	<a href="#constant_expression">constant\_expression</a>  { <font color="purple"><b>,</b></font> <a href="#constant_expression">constant\_expression</a>  }  
  
## B.11 Reference
  
**instance\_ref**{: #instance_ref }
:	<a href="#instance_ref_element">instance\_ref\_element</a>  { <font color="purple"><b>.</b></font> <a href="#instance_ref_element">instance\_ref\_element</a>  }  
  
**prop\_ref**{: #prop_ref }
:	<a href="#instance_ref">instance\_ref</a> <font color="purple"><b>-></b></font> <a href="#prop_keyword">prop\_keyword</a>   
        | <a href="#instance_ref">instance\_ref</a> <font color="purple"><b>-></b></font> <a href="#id">id</a> 
  
**instance\_or\_prop\_ref**{: #instance_or_prop_ref }
:	<a href="#instance_ref">instance\_ref</a> <font color="purple"><b>-></b></font> <a href="#prop_keyword">prop\_keyword</a>   
        | <a href="#instance_ref">instance\_ref</a> <font color="purple"><b>-></b></font> <a href="#id">id</a>   
        | <a href="#instance_ref">instance\_ref</a> 
  
**instance\_ref\_element**{: #instance_ref_element }
:	<a href="#id">id</a>  { <a href="#array">array</a>  }  
  
## B.12 Array and range
  
**range**{: #range }
:	<font color="purple"><b>\[</b></font> <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>:</b></font> <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>]</b></font> 
  
**array**{: #array }
:	<font color="purple"><b>\[</b></font> <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>]</b></font> 
  
**array\_type**{: #array_type }
:	<font color="purple"><b>\[</b></font> <font color="purple"><b>]</b></font> 
  
## B.13 Concatenation
  
**constant\_concatenation**{: #constant_concatenation }
:	<font color="purple"><b>{</b></font> <a href="#constant_expression">constant\_expression</a>  { <font color="purple"><b>,</b></font> <a href="#constant_expression">constant\_expression</a>  }  <font color="purple"><b>}</b></font> 
  
**constant\_multiple\_concatenation**{: #constant_multiple_concatenation }
:	<font color="purple"><b>{</b></font> <a href="#constant_expression">constant\_expression</a> <a href="#constant_concatenation">constant\_concatenation</a> <font color="purple"><b>}</b></font> 
  
## B.14 Data types
  
**integer\_type**{: #integer_type }
:	<a href="#integer_vector_type">integer\_vector\_type</a>   
        | <a href="#integer_atom_type">integer\_atom\_type</a> 
  
**integer\_atom\_type**{: #integer_atom_type }
:	<font color="purple"><b>longint</b></font> 
  
**integer\_vector\_type**{: #integer_vector_type }
:	<font color="purple"><b>bit</b></font> 
  
**simple\_type**{: #simple_type }
:	<a href="#integer_type">integer\_type</a> 
  
**signing**{: #signing }
:	<font color="purple"><b>unsigned</b></font> 
  
**basic\_data\_type**{: #basic_data_type }
:	<a href="#simple_type">simple\_type</a>  \[ <a href="#signing">signing</a>  ]    
        | <font color="purple"><b>string</b></font>   
        | <font color="purple"><b>boolean</b></font>   
        | <a href="#id">id</a> 
  
**data\_type**{: #data_type }
:	<a href="#basic_data_type">basic\_data\_type</a>   
        | <font color="purple"><b>accesstype</b></font>   
        | <font color="purple"><b>addressingtype</b></font>   
        | <font color="purple"><b>onreadtype</b></font>   
        | <font color="purple"><b>onwritetype</b></font> 
  
## B.15 Literals
  
**boolean\_literal**{: #boolean_literal }
:	<font color="purple"><b>true</b></font>   
        | <font color="purple"><b>false</b></font> 
  
**number**{: #number }
:	<em>number as specified in 4.6</em>
  
**string\_literal**{: #string_literal }
:	<em>string as specified in 4.5</em>
  
**enumerator\_literal**{: #enumerator_literal }
:	<a href="#id">id</a> <font color="purple"><b>::</b></font> <a href="#id">id</a> 
  
**accesstype\_literal**{: #accesstype_literal }
:	<font color="purple"><b>na</b></font>   
        | <font color="purple"><b>rw</b></font>   
        | <font color="purple"><b>wr</b></font>   
        | <font color="purple"><b>r</b></font>   
        | <font color="purple"><b>w</b></font>   
        | <font color="purple"><b>rw1</b></font>   
        | <font color="purple"><b>w1</b></font> 
  
**onreadtype\_literal**{: #onreadtype_literal }
:	<font color="purple"><b>rclr</b></font>   
        | <font color="purple"><b>rset</b></font>   
        | <font color="purple"><b>ruser</b></font> 
  
**onwritetype\_literal**{: #onwritetype_literal }
:	<font color="purple"><b>woset</b></font>   
        | <font color="purple"><b>woclr</b></font>   
        | <font color="purple"><b>wot</b></font>   
        | <font color="purple"><b>wzs</b></font>   
        | <font color="purple"><b>wzc</b></font>   
        | <font color="purple"><b>wzt</b></font>   
        | <font color="purple"><b>wclr</b></font>   
        | <font color="purple"><b>wset</b></font>   
        | <font color="purple"><b>wuser</b></font> 
  
**addressingtype\_literal**{: #addressingtype_literal }
:	<font color="purple"><b>compact</b></font>   
        | <font color="purple"><b>regalign</b></font>   
        | <font color="purple"><b>fullalign</b></font> 
  
**precedencetype\_literal**{: #precedencetype_literal }
:	<font color="purple"><b>hw</b></font>   
        | <font color="purple"><b>sw</b></font> 
  
## B.16 Expressions
  
**constant\_expression**{: #constant_expression }
:	<a href="#constant_primary">constant\_primary</a>   
        | <a href="#unary_operator">unary\_operator</a> <a href="#constant_primary">constant\_primary</a>   
        | <a href="#constant_expression">constant\_expression</a> <a href="#binary_operator">binary\_operator</a> <a href="#constant_expression">constant\_expression</a>   
        | <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>?</b></font> <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>:</b></font> <a href="#constant_expression">constant\_expression</a> 
  
**constant\_primary**{: #constant_primary }
:	<a href="#primary_literal">primary\_literal</a>   
        | <a href="#constant_concatenation">constant\_concatenation</a>   
        | <a href="#constant_multiple_concatenation">constant\_multiple\_concatenation</a>   
        | <font color="purple"><b>(</b></font> <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>)</b></font>   
        | <a href="#constant_cast">constant\_cast</a>   
        | <a href="#instance_or_prop_ref">instance\_or\_prop\_ref</a>   
        | <a href="#struct_literal">struct\_literal</a>   
        | <a href="#array_literal">array\_literal</a> 
  
**primary\_literal**{: #primary_literal }
:	<a href="#number">number</a>   
        | <a href="#string_literal">string\_literal</a>   
        | <a href="#boolean_literal">boolean\_literal</a>   
        | <a href="#accesstype_literal">accesstype\_literal</a>   
        | <a href="#onreadtype_literal">onreadtype\_literal</a>   
        | <a href="#onwritetype_literal">onwritetype\_literal</a>   
        | <a href="#addressingtype_literal">addressingtype\_literal</a>   
        | <a href="#enumerator_literal">enumerator\_literal</a>   
        | <font color="purple"><b>this</b></font> 
  
**binary\_operator**{: #binary_operator }
:	<font color="purple"><b>&&</b></font>   
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
  
**unary\_operator**{: #unary_operator }
:	<font color="purple"><b>!</b></font>   
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
  
**constant\_cast**{: #constant_cast }
:	<a href="#casting_type">casting\_type</a> <font color="purple"><b>'</b></font> <font color="purple"><b>(</b></font> <a href="#constant_expression">constant\_expression</a> <font color="purple"><b>)</b></font> 
  
**casting\_type**{: #casting_type }
:	<a href="#simple_type">simple\_type</a>   
        | <a href="#constant_primary">constant\_primary</a>   
        | <font color="purple"><b>boolean</b></font> 
  
## B.17 Identifiers
  
**id**{: #id }
:	<em>identifier as specified in 4.3</em>
