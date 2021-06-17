---
title: "Specman-e BNF Grammar"
layout: page
pager: true
author: Sigasi
date: 2004-03-19
comments: true
tags:
  - ebnf
---
<em> Up to date as of Fri Mar 19 2004.</em>  
<a name="module"></a>**module**
:  <a href="#statement_list">statement\_list</a>
  
<a name="statement_list"></a>**statement\_list**
:  <a href="#statements">statements</a>
  
<a name="statements"></a>**statements**
:  <a href="#statement">statement</a>  
        | <a href="#statements">statements</a> <font color="purple"><b>;</b></font> <a href="#statement">statement</a>
  
<a name="statement"></a>**statement**
:  <a href="#package_statement">package\_statement</a>  
        | <a href="#struct_statement">struct\_statement</a>  
        | <a href="#extend_struct_statement">extend\_struct\_statement</a>  
        | <a href="#type_statement">type\_statement</a>  
        | <a href="#extend_type_statement">extend\_type\_statement</a>  
        | <a href="#routine_statement">routine\_statement</a>  
        | <a href="#simulator_statement">simulator\_statement</a>  
        | <a href="#unit_statement">unit\_statement</a>  
        | <a href="#sequence_statement">sequence\_statement</a>  
        | <a href="#method_type_statement">method\_type\_statement</a>  
        | <a href="#c_export_statement">c\_export\_statement</a>
  
<a name="package_statement"></a>**package\_statement**
:  <font color="purple"><b>package</b></font> <a href="#id">id</a>
  
<a name="struct_statement"></a>**struct\_statement**
:  <a href="#package_or_null">package\_or\_null</a> <font color="purple"><b>struct</b></font> <a href="#id">id</a> <a href="#like_opt">like\_opt</a> <font color="purple"><b>{</b></font> <a href="#struct_member_list">struct\_member\_list</a> <font color="purple"><b>}</b></font>
  
<a name="like_opt"></a>**like\_opt**
:  \[ <font color="purple"><b>like</b></font> <a href="#id">id</a> ]
  
<a name="extend_struct_statement"></a>**extend\_struct\_statement**
:  <font color="purple"><b>extend</b></font> <a href="#struct_type">struct\_type</a> <font color="purple"><b>{</b></font> <a href="#struct_member_list">struct\_member\_list</a> <font color="purple"><b>}</b></font>
  
<a name="type_statement"></a>**type\_statement**
:  <a href="#package_or_null">package\_or\_null</a> <a href="#type">type</a> <a href="#id">id</a> <font color="purple"><b>:</b></font> <a href="#scalar_type">scalar\_type</a>
  
<a name="extend_type_statement"></a>**extend\_type\_statement**
:  <font color="purple"><b>extend</b></font> <a href="#id">id</a> <font color="purple"><b>:</b></font> <font color="purple"><b>\[</b></font> <a href="#enum_item_list">enum\_item\_list</a> <font color="purple"><b>]</b></font>
  
<a name="routine_statement"></a>**routine\_statement**
:  <a href="#package_or_null">package\_or\_null</a> <font color="purple"><b>routine</b></font> <a href="#id">id</a> <font color="purple"><b>(</b></font> <a href="#parameter_list">parameter\_list</a> <font color="purple"><b>)</b></font> <a href="#type_opt">type\_opt</a> <a href="#routine_name_opt">routine\_name\_opt</a>
  
<a name="routine_name_opt"></a>**routine\_name\_opt**
:  \[ <font color="purple"><b>is c routine</b></font> <a href="#id">id</a> ]
  
<a name="last_semi_opt"></a>**last\_semi\_opt**
:  \[ <font color="purple"><b>;</b></font> ]
  
<a name="c_export_statement"></a>**c\_export\_statement**
:  <font color="purple"><b>c export</b></font> <a href="#id">id</a> <a href="#c_export_opt">c\_export\_opt</a>
  
<a name="c_export_opt"></a>**c\_export\_opt**
:  \[ <font color="purple"><b>.</b></font> <a href="#id">id</a> <font color="purple"><b>(</b></font> <font color="purple"><b>)</b></font> ]
  
<a name="package_or_null"></a>**package\_or\_null**
:  \[ <font color="purple"><b>package</b></font> ]
  
<a name="encap"></a>**encap**
:  \[ <font color="purple"><b>package</b></font> | <font color="purple"><b>private</b></font> | <font color="purple"><b>protected</b></font> ]
  
<a name="sequence_statement"></a>**sequence\_statement**
:  <a href="#package_or_null">package\_or\_null</a> <font color="purple"><b>sequence</b></font> <a href="#id">id</a> <a href="#sequence_opt">sequence\_opt</a>
  
<a name="sequence_opt"></a>**sequence\_opt**
:  \[ <font color="purple"><b>using</b></font> <a href="#seq_name_pair_list">seq\_name\_pair\_list</a> ]
  
<a name="seq_name_pair_list"></a>**seq\_name\_pair\_list**
:  <a href="#seq_name_pair">seq\_name\_pair</a>  
        | <a href="#seq_name_pair_list">seq\_name\_pair\_list</a> <font color="purple"><b>,</b></font> <a href="#seq_name_pair">seq\_name\_pair</a>
  
<a name="seq_name_pair"></a>**seq\_name\_pair**
:  <a href="#id">id</a> <font color="purple"><b>=</b></font> <a href="#struct_type">struct\_type</a>
  
<a name="method_type_statement"></a>**method\_type\_statement**
:  <a href="#package_or_null">package\_or\_null</a> <font color="purple"><b>method</b></font> <a href="#type">type</a> <a href="#id">id</a> <font color="purple"><b>(</b></font> <a href="#parameter_list">parameter\_list</a> <font color="purple"><b>)</b></font> <a href="#opt_return">opt\_return</a> <a href="#opt_event">opt\_event</a>
  
<a name="opt_return"></a>**opt\_return**
:  \[ <font color="purple"><b>:</b></font> <a href="#type">type</a> ]
  
<a name="opt_event"></a>**opt\_event**
:  \[ <font color="purple"><b>@</b></font> <a href="#event">event</a> ]
  
<a name="struct_member_list"></a>**struct\_member\_list**
:  <a href="#struct_members">struct\_members</a>
  
<a name="struct_members"></a>**struct\_members**
:  <a href="#struct_member">struct\_member</a>  
        | <em>more\_</em><a href="#struct_members">struct\_members</a> <a href="#struct_member">struct\_member</a>
  
<a name="struct_member"></a>**struct\_member**
:  \[ <a href="#field_declaration">field\_declaration</a> | <a href="#method_declaration">method\_declaration</a> | <a href="#subtype_declaration">subtype\_declaration</a> | <a href="#constraint_declaration">constraint\_declaration</a> | <a href="#coverage_declaration">coverage\_declaration</a> | <a href="#temporal_declaration">temporal\_declaration</a> | <a href="#simulator_member">simulator\_member</a> | <a href="#attribute">attribute</a> | <a href="#cvl_declaration">cvl\_declaration</a> ]
  
<a name="field_declaration"></a>**field\_declaration**
:  <a href="#encap">encap</a> <a href="#id">id</a> <a href="#field_type_specifier">field\_type\_specifier</a> <a href="#opt_instance">opt\_instance</a>  
        | <a href="#encap">encap</a> <a href="#field_property">field\_property</a> <a href="#id">id</a> <a href="#field_type_specifier">field\_type\_specifier</a> <a href="#opt_instance">opt\_instance</a>
  
<a name="field_property"></a>**field\_property**
:  <font color="purple"><b>!</b></font>  
        | <font color="purple"><b>%</b></font>  
        | <font color="purple"><b>!</b></font> <font color="purple"><b>%</b></font>  
        | <font color="purple"><b>%</b></font> <font color="purple"><b>!</b></font>
  
<a name="field_type_specifier"></a>**field\_type\_specifier**
:  \[ <font color="purple"><b>\[</b></font> <a href="#expr">expr</a> <font color="purple"><b>]</b></font> <font color="purple"><b>:</b></font> <a href="#list_type">list\_type</a> | <font color="purple"><b>:</b></font> <a href="#type">type</a> ]
  
<a name="method_declaration"></a>**method\_declaration**
:  <a href="#encap">encap</a> <a href="#method_name">method\_name</a> <font color="purple"><b>(</b></font> <a href="#parameter_list">parameter\_list</a> <font color="purple"><b>)</b></font> <a href="#type_opt">type\_opt</a> <a href="#method_specifier">method\_specifier</a> <a href="#action_block">action\_block</a>  
        | <a href="#encap">encap</a> <a href="#method_name">method\_name</a> <font color="purple"><b>(</b></font> <a href="#parameter_list">parameter\_list</a> <font color="purple"><b>)</b></font> <a href="#type_opt">type\_opt</a> <font color="purple"><b>is empty</b></font>  
        | <a href="#encap">encap</a> <a href="#method_name">method\_name</a> <font color="purple"><b>(</b></font> <a href="#parameter_list">parameter\_list</a> <font color="purple"><b>)</b></font> <a href="#type_opt">type\_opt</a> <font color="purple"><b>is undefined</b></font>  
        | <a href="#encap">encap</a> <a href="#method_name">method\_name</a> <font color="purple"><b>(</b></font> <a href="#parameter_list">parameter\_list</a> <font color="purple"><b>)</b></font> <a href="#type_opt">type\_opt</a> <font color="purple"><b>is</b></font> <font color="purple"><b>c routine</b></font> <a href="#id">id</a>  
        | <a href="#encap">encap</a> <a href="#method_name">method\_name</a> <font color="purple"><b>(</b></font> <a href="#parameter_list">parameter\_list</a> <font color="purple"><b>)</b></font> <a href="#type_opt">type\_opt</a> <font color="purple"><b>@</b></font> <font color="purple"><b>event</b></font> <a href="#method_specifier">method\_specifier</a> <a href="#action_block">action\_block</a>  
        | <a href="#encap">encap</a> <a href="#method_name">method\_name</a> <font color="purple"><b>(</b></font> <a href="#parameter_list">parameter\_list</a> <font color="purple"><b>)</b></font> <a href="#type_opt">type\_opt</a> <font color="purple"><b>@</b></font> <font color="purple"><b>event</b></font> <font color="purple"><b>is empty</b></font>  
        | <a href="#encap">encap</a> <a href="#method_name">method\_name</a> <font color="purple"><b>(</b></font> <a href="#parameter_list">parameter\_list</a> <font color="purple"><b>)</b></font> <a href="#type_opt">type\_opt</a> <font color="purple"><b>@</b></font> <font color="purple"><b>event</b></font> <font color="purple"><b>is undefined</b></font>  
        | <a href="#encap">encap</a> <a href="#method_name">method\_name</a> <font color="purple"><b>(</b></font> <a href="#parameter_list">parameter\_list</a> <font color="purple"><b>)</b></font> <a href="#type_opt">type\_opt</a> <a href="#method_specifier">method\_specifier</a> <a href="#foreign_opt">foreign\_opt</a> <font color="purple"><b>dynamic</b></font> <font color="purple"><b>c</b></font> <font color="purple"><b>routine</b></font> <a href="#libname_opt">libname\_opt</a>
  
<a name="method_name"></a>**method\_name**
:  <em>method\_</em><a href="#id">id</a>
  
<a name="parameter_list"></a>**parameter\_list**
:  \[ <a href="#parameters">parameters</a> ]
  
<a name="parameters"></a>**parameters**
:  <a href="#parameter">parameter</a>  
        | <a href="#parameters">parameters</a> <font color="purple"><b>,</b></font>
  
<a name="parameter"></a>**parameter**
:  <a href="#id">id</a>  
        | <a href="#id">id</a> <font color="purple"><b>:</b></font> <a href="#type">type</a>  
        | <a href="#id">id</a> <font color="purple"><b>:</b></font> <font color="purple"><b>\*</b></font> <a href="#type">type</a>
  
<a name="type_opt"></a>**type\_opt**
:  \[ <font color="purple"><b>:</b></font> <a href="#type">type</a> ]
  
<a name="method_specifier"></a>**method\_specifier**
:  <a href="#member_specifier">member\_specifier</a>  
        | <font color="purple"><b>is</b></font> <font color="purple"><b>inline</b></font>  
        | <font color="purple"><b>is</b></font> <font color="purple"><b>inline</b></font> <font color="purple"><b>only</b></font>
  
<a name="foreign_opt"></a>**foreign\_opt**
:  \[ <font color="purple"><b>foreign</b></font> ]
  
<a name="member_specifier"></a>**member\_specifier**
:  <font color="purple"><b>is</b></font>  
        | <font color="purple"><b>is also</b></font>  
        | <font color="purple"><b>is first</b></font>  
        | <font color="purple"><b>is only</b></font>
  
<a name="libname_opt"></a>**libname\_opt**
:  \[ <a href="#id">id</a> <font color="purple"><b>:</b></font> | <a href="#id">id</a> | <a href="#id">id</a> <font color="purple"><b>:</b></font> <a href="#id">id</a> ]
  
<a name="subtype_declaration"></a>**subtype\_declaration**
:  <a href="#encap">encap</a> <font color="purple"><b>when</b></font> <a href="#struct_subtype">struct\_subtype</a> <font color="purple"><b>{</b></font> <a href="#struct_member_list">struct\_member\_list</a> <font color="purple"><b>}</b></font>
  
<a name="constraint_declaration"></a>**constraint\_declaration**
:  <font color="purple"><b>keep</b></font> <a href="#constraint_spec">constraint\_spec</a>
  
<a name="list_of_constraint_spec_or_null"></a>**list\_of\_constraint\_spec\_or\_null**
:  \[ <a href="#list_of_constraint_spec">list\_of\_constraint\_spec</a> <a href="#last_semi_opt">last\_semi\_opt</a> ]
  
<a name="list_of_constraint_spec"></a>**list\_of\_constraint\_spec**
:  <a href="#constraint_spec">constraint\_spec</a>  
        | <a href="#list_of_constraint_spec">list\_of\_constraint\_spec</a> <font color="purple"><b>;</b></font> <a href="#constraint_spec">constraint\_spec</a>
  
<a name="constraint_spec"></a>**constraint\_spec**
:  <a href="#constraint_expr">constraint\_expr</a> <font color="purple"><b>gen</b></font> <font color="purple"><b>before</b></font> <font color="purple"><b>subtypes</b></font> <font color="purple"><b>(</b></font> <a href="#field_list">field\_list</a> <font color="purple"><b>)</b></font> <font color="purple"><b>reset</b></font> <font color="purple"><b>gen</b></font> <font color="purple"><b>before</b></font> <font color="purple"><b>subtypes</b></font> <font color="purple"><b>(</b></font> <font color="purple"><b>)</b></font>
  
<a name="field_list"></a>**field\_list**
:  <a href="#id">id</a> <a href="#field_list">field\_list</a> <font color="purple"><b>,</b></font> <a href="#id">id</a>
  
<a name="attribute"></a>**attribute**
:  <a href="#attribute">attribute</a> <a href="#id">id</a> <a href="#id">id</a> <font color="purple"><b>=</b></font> <a href="#attribute_expr">attribute\_expr</a>
  
<a name="attribute_expr"></a>**attribute\_expr**
:  <a href="#id">id</a>
  
<a name="unit_statement"></a>**unit\_statement**
:  <a href="#package_or_null">package\_or\_null</a> <font color="purple"><b>unit</b></font> <a href="#id">id</a> <a href="#like_unit_opt">like\_unit\_opt</a> <font color="purple"><b>{</b></font> <a href="#struct_member_list">struct\_member\_list</a> <font color="purple"><b>}</b></font>
  
<a name="like_unit_opt"></a>**like\_unit\_opt**
:  \[ <font color="purple"><b>like</b></font> <a href="#id">id</a> ]
  
<a name="opt_instance"></a>**opt\_instance**
:  \[ <font color="purple"><b>is instance</b></font> ]
  
<a name="cvl_declaration"></a>**cvl\_declaration**
:  <a href="#cvl_method">cvl\_method</a>  
        | <a href="#cvl_call">cvl\_call</a>  
        | <a href="#cvl_callback">cvl\_callback</a>
  
<a name="cvl_method"></a>**cvl\_method**
:  <font color="purple"><b>cvl method</b></font> <a href="#opt_async">opt\_async</a> <a href="#method_name">method\_name</a> <font color="purple"><b>(</b></font> <a href="#parameter_list">parameter\_list</a> <font color="purple"><b>)</b></font> <a href="#opt_event">opt\_event</a> <a href="#cvl_routine">cvl\_routine</a>
  
<a name="cvl_call"></a>**cvl\_call**
:  <font color="purple"><b>cvl call</b></font> <a href="#opt_async">opt\_async</a> <a href="#method_name">method\_name</a> <font color="purple"><b>(</b></font> <a href="#parameter_list">parameter\_list</a> <font color="purple"><b>)</b></font> <a href="#opt_event">opt\_event</a> <a href="#cvl_routine">cvl\_routine</a>
  
<a name="cvl_callback"></a>**cvl\_callback**
:  <font color="purple"><b>cvl callback</b></font> <a href="#opt_async">opt\_async</a> <a href="#method_name">method\_name</a> <font color="purple"><b>(</b></font> <a href="#parameter_list">parameter\_list</a> <font color="purple"><b>)</b></font> <a href="#opt_event">opt\_event</a> <a href="#cvl_routine">cvl\_routine</a>
  
<a name="opt_async"></a>**opt\_async**
:  \[ <font color="purple"><b>async</b></font> ]
  
<a name="cvl_routine"></a>**cvl\_routine**
:  \[ <font color="purple"><b>is</b></font> <font color="purple"><b>c</b></font> <font color="purple"><b>routine</b></font> <a href="#target_struct">target\_struct</a> ]
  
<a name="target_struct"></a>**target\_struct**
:  <a href="#id">id</a>  
        | <a href="#id">id</a> <font color="purple"><b>.</b></font> <a href="#id">id</a>
  
<a name="hdl_path"></a>**hdl\_path**
:  <font color="purple"><b>&#39;</b></font> <em>hdl\_pathname</em><font color="purple"><b>&#39;</b></font>
  
<a name="simulator_statement"></a>**simulator\_statement**
:  <a href="#simulator_member">simulator\_member</a>  
        | <a href="#simulator_restricted_member">simulator\_restricted\_member</a>
  
<a name="simulator_member"></a>**simulator\_member**
:  <font color="purple"><b>verilog simulator</b></font> <a href="#id">id</a>  
        | <font color="purple"><b>vhdl simulator</b></font> <a href="#id">id</a>  
        | <font color="purple"><b>verilog task</b></font> <a href="#hdl_path">hdl\_path</a> <font color="purple"><b>(</b></font> <a href="#vtask_parameter_list">vtask\_parameter\_list</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>verilog function</b></font> <a href="#hdl_path">hdl\_path</a> <font color="purple"><b>(</b></font> <a href="#vfunc_parameters">vfunc\_parameters</a> <font color="purple"><b>)</b></font> <a href="#v_size_opt">v\_size\_opt</a>  
        | <font color="purple"><b>verilog variable</b></font> <a href="#hdl_path">hdl\_path</a> <a href="#options_opt">options\_opt</a>  
        | <font color="purple"><b>verilog code</b></font> <a href="#expr">expr</a>  
        | <font color="purple"><b>vhdl code</b></font> <font color="purple"><b>{</b></font> <a href="#verilog_command_list">verilog\_command\_list</a> <a href="#last_semi_opt">last\_semi\_opt</a> <font color="purple"><b>}</b></font>  
        | <font color="purple"><b>vhdl procedure</b></font> <a href="#hdl_path">hdl\_path</a> <a href="#options_opt">options\_opt</a>  
        | <font color="purple"><b>vhdl function</b></font> <font color="purple"><b>&#39;</b></font> <a href="#id">id</a> <font color="purple"><b>&#39;</b></font> <a href="#options_opt">options\_opt</a>  
        | <font color="purple"><b>vhdl driver</b></font> <a href="#hdl_path">hdl\_path</a> <a href="#options_opt">options\_opt</a>  
        | <font color="purple"><b>vhdl object</b></font> <a href="#hdl_path">hdl\_path</a>
  
<a name="simulator_restricted_member"></a>**simulator\_restricted\_member**
:  <font color="purple"><b>verilog time</b></font> <a href="#verilog_timescale">verilog\_timescale</a>  
        | <font color="purple"><b>vhdl time</b></font> <a href="#vhdl_timescale">vhdl\_timescale</a>
  
<a name="verilog_command_list"></a>**verilog\_command\_list**
:  <a href="#verilog_command">verilog\_command</a>  
        | <a href="#verilog_command_list">verilog\_command\_list</a> <font color="purple"><b>;</b></font> <a href="#verilog_command">verilog\_command</a>
  
<a name="verilog_command"></a>**verilog\_command**
:  <em>STRING\_LITERAL</em>
  
<a name="vtask_parameter_list"></a>**vtask\_parameter\_list**
:  \[ <a href="#vtask_parameters">vtask\_parameters</a> ]
  
<a name="vtask_parameters"></a>**vtask\_parameters**
:  <a href="#vtask_parameter">vtask\_parameter</a>  
        | <a href="#vtask_parameters">vtask\_parameters</a> <font color="purple"><b>,</b></font> <a href="#vtask_parameter">vtask\_parameter</a>
  
<a name="vtask_parameter"></a>**vtask\_parameter**
:  <a href="#id">id</a> <font color="purple"><b>:</b></font> <a href="#expr">expr</a> <a href="#vtask_parameter_options_opt">vtask\_parameter\_options\_opt</a>
  
<a name="vtask_parameter_options_opt"></a>**vtask\_parameter\_options\_opt**
:  \[ <font color="purple"><b>:</b></font> <a href="#vtask_io">vtask\_io</a> ]
  
<a name="vtask_io"></a>**vtask\_io**
:  <font color="purple"><b>in</b></font>  
        | <a href="#id">id</a>  
        | <font color="purple"><b>inout</b></font>
  
<a name="vfunc_parameters"></a>**vfunc\_parameters**
:  \[ <a href="#vfunc_parameter_list">vfunc\_parameter\_list</a> ]
  
<a name="vfunc_parameter_list"></a>**vfunc\_parameter\_list**
:  <a href="#vfunc_parameter">vfunc\_parameter</a>  
        | <a href="#vfunc_parameter_list">vfunc\_parameter\_list</a> <font color="purple"><b>,</b></font> <a href="#vfunc_parameter">vfunc\_parameter</a>
  
<a name="vfunc_parameter"></a>**vfunc\_parameter**
:  <a href="#id">id</a> <a href="#v_size_opt">v\_size\_opt</a>
  
<a name="v_size_opt"></a>**v\_size\_opt**
:  \[ <font color="purple"><b>:</b></font> <a href="#expr">expr</a> ]
  
<a name="verilog_action"></a>**verilog\_action**
:  <font color="purple"><b>force</b></font> <a href="#hdl_path">hdl\_path</a> <font color="purple"><b>=</b></font> <a href="#force_rhs">force\_rhs</a>  
        | <font color="purple"><b>release</b></font> <a href="#hdl_path">hdl\_path</a>
  
<a name="force_rhs"></a>**force\_rhs**
:  <a href="#expr">expr</a>  
        | <a href="#verilog_literal">verilog\_literal</a>
  
<a name="verilog_timescale"></a>**verilog\_timescale**
:  <em>NUMERIC\_LITERAL</em><a href="#id">id</a> <font color="purple"><b>/</b></font> <em>NUMERIC\_LITERAL</em><a href="#id">id</a>
  
<a name="vhdl_timescale"></a>**vhdl\_timescale**
:  <em>NUMERIC\_LITERAL</em><a href="#id">id</a>
  
<a name="action_block"></a>**action\_block**
:  <font color="purple"><b>{</b></font> <a href="#action_list">action\_list</a> <font color="purple"><b>}</b></font>
  
<a name="action_list"></a>**action\_list**
:  <a href="#actions">actions</a>
  
<a name="actions"></a>**actions**
:  <a href="#action">action</a>  
        | <a href="#actions">actions</a> <font color="purple"><b>;</b></font> <a href="#action">action</a>
  
<a name="action"></a>**action**
:  <a href="#e_action">e\_action</a>
  
<a name="e_action"></a>**e\_action**
:  \[ <a href="#var_action">var\_action</a> | <a href="#assign_action">assign\_action</a> | <a href="#conditional_action">conditional\_action</a> | <a href="#iterative_action">iterative\_action</a> | <a href="#method_call_action">method\_call\_action</a> | <a href="#start_tcm_action">start\_tcm\_action</a> | <a href="#compute_action">compute\_action</a> | <a href="#return_action">return\_action</a> | <a href="#try_action">try\_action</a> | <a href="#check_action">check\_action</a> | <a href="#gen_action">gen\_action</a> | <a href="#emit_action">emit\_action</a> | <a href="#time_consuming_action">time\_consuming\_action</a> | <a href="#print_action">print\_action</a> | <a href="#verilog_action">verilog\_action</a> | <a href="#debug_action">debug\_action</a> | <a href="#dut_error_action">dut\_error\_action</a> | <a href="#do_seq_action">do\_seq\_action</a> | <a href="#action_block">action\_block</a> ]
  
<a name="var_action"></a>**var\_action**
:  <font color="purple"><b>var</b></font> <a href="#id">id</a> <a href="#type_opt">type\_opt</a> <a href="#init_opt">init\_opt</a>  
        | <font color="purple"><b>var</b></font> <a href="#id">id</a> <font color="purple"><b>:=</b></font> <a href="#expr">expr</a>
  
<a name="init_opt"></a>**init\_opt**
:  \[ <font color="purple"><b>=</b></font> <a href="#expr">expr</a> ]
  
<a name="conditional_action"></a>**conditional\_action**
:  <font color="purple"><b>break</b></font>  
        | <font color="purple"><b>continue</b></font>  
        | <a href="#if_action">if\_action</a>  
        | <a href="#case_action">case\_action</a>
  
<a name="if_action"></a>**if\_action**
:  <font color="purple"><b>if</b></font> <a href="#expr">expr</a> <a href="#then_opt">then\_opt</a> <a href="#action_block">action\_block</a> <a href="#else_part_opt">else\_part\_opt</a>
  
<a name="then_opt"></a>**then\_opt**
:  \[ <font color="purple"><b>then</b></font> ]
  
<a name="else_part_opt"></a>**else\_part\_opt**
:  \[ <font color="purple"><b>else</b></font> <a href="#action_block">action\_block</a> | <font color="purple"><b>else</b></font> <a href="#if_action">if\_action</a> ]
  
<a name="case_action"></a>**case\_action**
:  <a href="#case">case</a> <font color="purple"><b>{</b></font> <a href="#case_list">case\_list</a> <font color="purple"><b>}</b></font>  
        | <a href="#case">case</a> <a href="#binary_expr">binary\_expr</a> <font color="purple"><b>{</b></font> <a href="#case_list">case\_list</a> <font color="purple"><b>}</b></font>
  
<a name="case_list"></a>**case\_list**
:  <a href="#cases">cases</a> <a href="#last_semi_opt">last\_semi\_opt</a>
  
<a name="cases"></a>**cases**
:  <a href="#case">case</a>  
        | <a href="#cases">cases</a> <font color="purple"><b>;</b></font> <a href="#case">case</a>
  
<a name="case"></a>**case**
:  <a href="#expr">expr</a> <a href="#colon_opt">colon\_opt</a> <a href="#action_block">action\_block</a>  
        | <a href="#default">default</a>
  
<a name="colon_opt"></a>**colon\_opt**
:  \[ <font color="purple"><b>:</b></font> ]
  
<a name="default"></a>**default**
:  <a href="#default">default</a> <a href="#colon_opt">colon\_opt</a> <a href="#action_block">action\_block</a>
  
<a name="iterative_action"></a>**iterative\_action**
:  <font color="purple"><b>repeat</b></font> <a href="#do_opt">do\_opt</a> <a href="#action_block">action\_block</a> <font color="purple"><b>until</b></font> <a href="#expr">expr</a>  
        | <font color="purple"><b>while</b></font> <a href="#expr">expr</a> <a href="#do_opt">do\_opt</a> <a href="#action_block">action\_block</a>  
        | <font color="purple"><b>for</b></font> <a href="#id">id</a> <font color="purple"><b>from</b></font> <a href="#expr">expr</a> <a href="#up_down">up\_down</a> <a href="#binary_expr">binary\_expr</a> <a href="#step_opt">step\_opt</a> <a href="#do_opt">do\_opt</a> <a href="#action_block">action\_block</a>  
        | <font color="purple"><b>for</b></font> <font color="purple"><b>{</b></font> <a href="#action">action</a> <font color="purple"><b>;</b></font> <a href="#expr">expr</a> <font color="purple"><b>;</b></font> <a href="#action">action</a> <font color="purple"><b>}</b></font> <a href="#do_opt">do\_opt</a> <a href="#action_block">action\_block</a>  
        | <font color="purple"><b>for</b></font> <font color="purple"><b>each</b></font> <a href="#iterated_type_opt">iterated\_type\_opt</a> <a href="#itemname_opt">itemname\_opt</a> <a href="#indexname_opt">indexname\_opt</a> <font color="purple"><b>in</b></font> <a href="#expr">expr</a> <a href="#do_opt">do\_opt</a> <a href="#action_block">action\_block</a>  
        | <font color="purple"><b>for</b></font> <font color="purple"><b>each</b></font> <a href="#iterated_type_opt">iterated\_type\_opt</a> <a href="#itemname_opt">itemname\_opt</a> <a href="#indexname_opt">indexname\_opt</a> <font color="purple"><b>in</b></font> <font color="purple"><b>reverse</b></font> <a href="#expr">expr</a> <a href="#do_opt">do\_opt</a> <a href="#action_block">action\_block</a>  
        | <font color="purple"><b>for</b></font> <font color="purple"><b>each</b></font> <font color="purple"><b>file</b></font> <a href="#itemname_opt">itemname\_opt</a> <font color="purple"><b>matching</b></font> <a href="#expr">expr</a> <a href="#do_opt">do\_opt</a> <a href="#action_block">action\_block</a>  
        | <font color="purple"><b>for</b></font> <font color="purple"><b>each</b></font> <font color="purple"><b>line</b></font> <a href="#itemname_opt">itemname\_opt</a> <font color="purple"><b>in</b></font> <font color="purple"><b>file</b></font> <a href="#expr">expr</a> <a href="#do_opt">do\_opt</a> <a href="#action_block">action\_block</a>
  
<a name="up_down"></a>**up\_down**
:  <font color="purple"><b>to</b></font>  
        | <font color="purple"><b>down to</b></font>
  
<a name="iterated_type_opt"></a>**iterated\_type\_opt**
:  \[ <a href="#struct_type">struct\_type</a> | <a href="#enumerated_type">enumerated\_type</a> ]
  
<a name="itemname_opt"></a>**itemname\_opt**
:  \[ <font color="purple"><b>(</b></font> <a href="#id">id</a> <font color="purple"><b>)</b></font> ]
  
<a name="indexname_opt"></a>**indexname\_opt**
:  \[ <font color="purple"><b>using</b></font> <font color="purple"><b>index</b></font> <font color="purple"><b>(</b></font> <a href="#id">id</a> <font color="purple"><b>)</b></font> ]
  
<a name="do_opt"></a>**do\_opt**
:  \[ <font color="purple"><b>do</b></font> ]
  
<a name="step_opt"></a>**step\_opt**
:  \[ <font color="purple"><b>step</b></font> <a href="#expr">expr</a> ]
  
<a name="try_action"></a>**try\_action**
:  <font color="purple"><b>try</b></font> <a href="#action_block">action\_block</a> <a href="#else_try_opt">else\_try\_opt</a>
  
<a name="else_try_opt"></a>**else\_try\_opt**
:  \[ <font color="purple"><b>else</b></font> <a href="#action_block">action\_block</a> ]
  
<a name="check_action"></a>**check\_action**
:  <font color="purple"><b>check</b></font> <a href="#name_opt">name\_opt</a> <a href="#that_opt">that\_opt</a> <a href="#expr">expr</a> <a href="#opt_block">opt\_block</a> <a href="#dut_error_opt">dut\_error\_opt</a>  
        | <font color="purple"><b>assert</b></font> <a href="#expr">expr</a> <a href="#else_error_opt">else\_error\_opt</a>
  
<a name="name_opt"></a>**name\_opt**
:  \[ <font color="purple"><b>&lt;</b></font> <a href="#id">id</a> <font color="purple"><b>&gt;</b></font> ]
  
<a name="that_opt"></a>**that\_opt**
:  \[ <font color="purple"><b>that</b></font> ]
  
<a name="dut_error_opt"></a>**dut\_error\_opt**
:  \[ <font color="purple"><b>else</b></font> <a href="#dut_error">dut\_error</a> <font color="purple"><b>(</b></font> <a href="#argument_list">argument\_list</a> <font color="purple"><b>)</b></font> <a href="#opt_block">opt\_block</a> ]
  
<a name="dut_error"></a>**dut\_error**
:  <font color="purple"><b>dut error</b></font>  
        | <font color="purple"><b>dut errorf</b></font>
  
<a name="else_error_opt"></a>**else\_error\_opt**
:  \[ <font color="purple"><b>else error</b></font> <font color="purple"><b>(</b></font> <a href="#exprs">exprs</a> <font color="purple"><b>)</b></font> ]
  
<a name="method_call_action"></a>**method\_call\_action**
:  <a href="#method_invocation">method\_invocation</a>  
        | <a href="#method_port_invocation">method\_port\_invocation</a>
  
<a name="action_opt"></a>**action\_opt**
:  <a href="#action_block">action\_block</a>  
        | <a href="#with_opt">with\_opt</a>
  
<a name="expr_or_default"></a>**expr\_or\_default**
:  <a href="#expr">expr</a>  
        | <a href="#default">default</a>
  
<a name="opt_config_param"></a>**opt\_config\_param**
:  \[ <font color="purple"><b>,</b></font> <a href="#exprs">exprs</a> ]
  
<a name="compute_action"></a>**compute\_action**
:  <font color="purple"><b>compute</b></font> <a href="#expr">expr</a>
  
<a name="return_action"></a>**return\_action**
:  <font color="purple"><b>return</b></font> <a href="#expr_opt">expr\_opt</a>
  
<a name="assign_action"></a>**assign\_action**
:  <a href="#Ival_expr">Ival\_expr</a> <a href="#assign_operator">assign\_operator</a> <a href="#expr">expr</a>
  
<a name="assign_operator"></a>**assign\_operator**
:  <font color="purple"><b>=</b></font> <font color="purple"><b>+=</b></font>  
        | <font color="purple"><b>-=</b></font>  
        | <font color="purple"><b>\*=</b></font>  
        | <font color="purple"><b>/=</b></font> <font color="purple"><b>%=</b></font>  
        | <font color="purple"><b>&lt;&lt;=</b></font>  
        | <font color="purple"><b>&gt;&gt;=</b></font>  
        | <font color="purple"><b>&amp;=</b></font>  
        | <font color="purple"><b>^=</b></font>  
        | <font color="purple"><b>l=</b></font>  
        | <font color="purple"><b>and=</b></font>  
        | <font color="purple"><b> or=</b></font>  
        | <font color="purple"><b>&lt;=</b></font>  
        | <font color="purple"><b>&amp;&amp;=</b></font>  
        | <font color="purple"><b>||=</b></font>
  
<a name="gen_action"></a>**gen\_action**
:  <font color="purple"><b>gen</b></font> <a href="#reduced_gen_action_item">reduced\_gen\_action\_item</a> <a href="#itemname_opt">itemname\_opt</a> <a href="#keeping_opt">keeping\_opt</a>  
        | <font color="purple"><b>gen</b></font> <a href="#qualified_id">qualified\_id</a> <a href="#itemname_opt">itemname\_opt</a> <a href="#keeping_opt">keeping\_opt</a>
  
<a name="keeping_opt"></a>**keeping\_opt**
:  \[ <font color="purple"><b>keeping</b></font> <font color="purple"><b>{</b></font> <a href="#constraint_list">constraint\_list</a> <font color="purple"><b>}</b></font> ]
  
<a name="print_action"></a>**print\_action**
:  <font color="purple"><b>print</b></font> <a href="#exprs">exprs</a> <a href="#options_opt">options\_opt</a>
  
<a name="do_seq_action"></a>**do\_seq\_action**
:  <font color="purple"><b>do</b></font> <em>when\_</em><a href="#qualified_id">qualified\_id</a> <a href="#itemname_opt">itemname\_opt</a> <a href="#keeping_opt">keeping\_opt</a>
  
<a name="debug_action"></a>**debug\_action**
:  <font color="purple"><b>message</b></font> <font color="purple"><b>(</b></font> <a href="#argument_list">argument\_list</a> <font color="purple"><b>)</b></font> <a href="#opt_block">opt\_block</a>  
        | <font color="purple"><b>messagef</b></font> <font color="purple"><b>(</b></font> <a href="#argument_list">argument\_list</a> <font color="purple"><b>)</b></font> <a href="#opt_block">opt\_block</a>
  
<a name="dut_error_action"></a>**dut\_error\_action**
:  <font color="purple"><b>dut error</b></font> <font color="purple"><b>(</b></font> <a href="#argument_list">argument\_list</a> <font color="purple"><b>)</b></font> <a href="#opt_block">opt\_block</a>  
        | <font color="purple"><b>dut errorf</b></font> <font color="purple"><b>(</b></font> <a href="#argument_list">argument\_list</a> <font color="purple"><b>)</b></font> <a href="#opt_block">opt\_block</a>
  
<a name="opt_block"></a>**opt\_block**
:  \[ <a href="#action_block">action\_block</a> <font color="purple"><b>when</b></font> <font color="purple"><b>qualified</b></font> ]
  
<a name="id"></a>**id**
:  <a href="#id">id</a>  
        | <a href="#struct_qualifier">struct\_qualifier</a> <em>when\_</em><a href="#qualified_id">qualified\_id</a>
  
<a name="qualified_id"></a>**qualified\_id**
:  <a href="#path_id">path\_id</a>  
        | <a href="#struct_qualifier">struct\_qualifier</a> <a href="#qualified_id">qualified\_id</a>
  
<a name="path_id"></a>**path\_id**
:  <a href="#id">id</a>  
        | <a href="#id">id</a> <font color="purple"><b>\[</b></font> <a href="#expr">expr</a> <font color="purple"><b>]</b></font>  
        | <font color="purple"><b>me</b></font>  
        | <a href="#path_id">path\_id</a> <font color="purple"><b>.</b></font> <a href="#id">id</a>  
        | <a href="#path_id">path\_id</a> <font color="purple"><b>.</b></font> <a href="#id">id</a> <font color="purple"><b>\[</b></font> <a href="#expr">expr</a> <font color="purple"><b>]</b></font>  
        | <a href="#path_id">path\_id</a> <font color="purple"><b>.</b></font> <font color="purple"><b>as\_a</b></font> <font color="purple"><b>(</b></font> <a href="#type">type</a> <font color="purple"><b>)</b></font>
  
<a name="reduced_gen_action_item"></a>**reduced\_gen\_action\_item**
:  <font color="purple"><b>.</b></font> <a href="#id">id</a>  
        | <font color="purple"><b>.</b></font> <a href="#id">id</a> <font color="purple"><b>\[</b></font> <a href="#expr">expr</a> <font color="purple"><b>]</b></font>  
        | <a href="#reduced_gen_action_item">reduced\_gen\_action\_item</a> <font color="purple"><b>.</b></font> <a href="#id">id</a>  
        | <a href="#reduced_gen_action_item">reduced\_gen\_action\_item</a> <font color="purple"><b>.</b></font> <a href="#id">id</a> <font color="purple"><b>\[</b></font> <a href="#expr">expr</a> <font color="purple"><b>]</b></font>  
        | <a href="#reduced_gen_action_item">reduced\_gen\_action\_item</a> <font color="purple"><b>.</b></font> <font color="purple"><b>as\_a</b></font> <font color="purple"><b>(</b></font> <a href="#type">type</a> <font color="purple"><b>)</b></font>
  
<a name="coverage_declaration"></a>**coverage\_declaration**
:  <font color="purple"><b>cover</b></font> <a href="#id">id</a> <a href="#opt_cov_field">opt\_cov\_field</a> <a href="#coverage_group_option">coverage\_group\_option</a>
  
<a name="coverage_group_option"></a>**coverage\_group\_option**
:  <a href="#options_opt">options\_opt</a> <a href="#member_specifier">member\_specifier</a> <font color="purple"><b>{</b></font> <a href="#cover_item_list">cover\_item\_list</a> <font color="purple"><b>}</b></font>  
        | <font color="purple"><b>is</b></font> <font color="purple"><b>empty</b></font>  
        | <font color="purple"><b>using</b></font> <font color="purple"><b>also</b></font> <a href="#options">options</a> <a href="#opt_cover_item_list">opt\_cover\_item\_list</a>
  
<a name="cover_item_list"></a>**cover\_item\_list**
:  \[ <a href="#cover_items">cover\_items</a> <a href="#last_semi_opt">last\_semi\_opt</a> ]
  
<a name="opt_cover_item_list"></a>**opt\_cover\_item\_list**
:  \[ <font color="purple"><b>is</b></font> <font color="purple"><b>also</b></font> <font color="purple"><b>{</b></font> <a href="#cover_item_list">cover\_item\_list</a> <font color="purple"><b>}</b></font> ]
  
<a name="cover_items"></a>**cover\_items**
:  <a href="#cover_item">cover\_item</a>  
        | <a href="#cover_items">cover\_items</a> <font color="purple"><b>;</b></font> <a href="#cover_item">cover\_item</a>
  
<a name="cover_item"></a>**cover\_item**
:  <font color="purple"><b>item</b></font> <a href="#id">id</a> <a href="#item_options_opt">item\_options\_opt</a>  
        | <font color="purple"><b>item</b></font> <a href="#id">id</a> <font color="purple"><b>:</b></font> <a href="#type">type</a> <font color="purple"><b>=</b></font> <a href="#expr">expr</a> <a href="#options_opt">options\_opt</a>  
        | <a href="#transition">transition</a> <a href="#id">id</a> <a href="#item_options_opt">item\_options\_opt</a>  
        | <font color="purple"><b>cross</b></font> <a href="#item_name_list">item\_name\_list</a> <a href="#item_options_opt">item\_options\_opt</a>
  
<a name="item_name_list"></a>**item\_name\_list**
:  <a href="#id">id</a>  
        | <a href="#item_name_list">item\_name\_list</a> <font color="purple"><b>,</b></font> <a href="#id">id</a>
  
<a name="opt_cov_field"></a>**opt\_cov\_field**
:  \[ <font color="purple"><b>(</b></font> <a href="#expr">expr</a> <font color="purple"><b>)</b></font> ]
  
<a name="item_options_opt"></a>**item\_options\_opt**
:  \[ <font color="purple"><b>using</b></font> <a href="#options">options</a> | <font color="purple"><b>using</b></font> <font color="purple"><b>also</b></font> <a href="#options">options</a> ]
  
<a name="temporal_declaration"></a>**temporal\_declaration**
:  <a href="#encap">encap</a> <a href="#event">event</a> <a href="#id">id</a> <a href="#event_option">event\_option</a>  
        | <font color="purple"><b>on</b></font> <a href="#id">id</a> <a href="#opt_defer">opt\_defer</a> <a href="#do_opt">do\_opt</a> <a href="#action_block">action\_block</a>  
        | <a href="#encap">encap</a> <a href="#expect_declaration">expect\_declaration</a>
  
<a name="opt_defer"></a>**opt\_defer**
:  \[ <font color="purple"><b>$</b></font> ]
  
<a name="event_option"></a>**event\_option**
:  \[ <font color="purple"><b>is</b></font> <a href="#temporal_expr">temporal\_expr</a> | <font color="purple"><b>is only</b></font> <a href="#temporal_expr">temporal\_expr</a> ]
  
<a name="expect_declaration"></a>**expect\_declaration**
:  <font color="purple"><b>expect</b></font> <a href="#id">id</a>  
        | <font color="purple"><b>expect</b></font> <a href="#temporal_expr">temporal\_expr</a> <a href="#dut_error_opt">dut\_error\_opt</a>  
        | <font color="purple"><b>expect</b></font> <a href="#id">id</a> <a href="#expect_specifier">expect\_specifier</a> <a href="#temporal_expr">temporal\_expr</a> <a href="#dut_error_opt">dut\_error\_opt</a>  
        | <font color="purple"><b>assume</b></font> <a href="#id">id</a>  
        | <font color="purple"><b>assume</b></font> <a href="#temporal_expr">temporal\_expr</a> <a href="#dut_error_opt">dut\_error\_opt</a>  
        | <font color="purple"><b>assume</b></font> <a href="#id">id</a> <a href="#expect_specifier">expect\_specifier</a> <a href="#temporal_expr">temporal\_expr</a> <a href="#dut_error_opt">dut\_error\_opt</a>
  
<a name="expect_specifier"></a>**expect\_specifier**
:  <font color="purple"><b>is</b></font>  
        | <font color="purple"><b>is only</b></font>
  
<a name="emit_action"></a>**emit\_action**
:  <font color="purple"><b>emit</b></font> <a href="#event">event</a>
  
<a name="start_tcm_action"></a>**start\_tcm\_action**
:  \[ <font color="purple"><b>start</b></font> <a href="#method_invocation">method\_invocation</a> | <font color="purple"><b>start</b></font> <a href="#method_port_invocation">method\_port\_invocation</a> ]
  
<a name="time_consuming_action"></a>**time\_consuming\_action**
:  <font color="purple"><b>all of</b></font> <a href="#action_block">action\_block</a>  
        | <font color="purple"><b>first of</b></font> <a href="#action_block">action\_block</a>  
        | <font color="purple"><b>wait</b></font>  
        | <font color="purple"><b>wait</b></font> <a href="#until_opt">until\_opt</a> <a href="#temporal_expr">temporal\_expr</a>  
        | <font color="purple"><b>sync</b></font>  
        | <font color="purple"><b>sync</b></font> <a href="#temporal_expr">temporal\_expr</a>  
        | <font color="purple"><b>state machine</b></font> <a href="#expr">expr</a> <a href="#until_state_opt">until\_state\_opt</a> <font color="purple"><b>{</b></font> <a href="#transition_list">transition\_list</a> <font color="purple"><b>}</b></font>
  
<a name="until_opt"></a>**until\_opt**
:  \[ <font color="purple"><b>until</b></font> ]
  
<a name="until_state_opt"></a>**until\_state\_opt**
:  \[ <font color="purple"><b>until</b></font> <a href="#id">id</a> ]
  
<a name="transition_list"></a>**transition\_list**
:  <a href="#last_semi_opt">last\_semi\_opt</a>  
        | <a href="#transitions">transitions</a> <a href="#last_semi_opt">last\_semi\_opt</a>
  
<a name="transitions"></a>**transitions**
:  <a href="#transition">transition</a>  
        | <a href="#transitions">transitions</a> <font color="purple"><b>;</b></font> <a href="#transition">transition</a>
  
<a name="transition"></a>**transition**
:  <a href="#id">id</a> <font color="purple"><b>=&gt;</b></font> <a href="#id">id</a> <a href="#action_block">action\_block</a>  
        | <font color="purple"><b>\*</b></font> <font color="purple"><b>=&gt;</b></font> <a href="#id">id</a> <a href="#action_block">action\_block</a>  
        | <a href="#id">id</a> <a href="#action_block">action\_block</a>
  
<a name="event"></a>**event**
:  <a href="#id">id</a>  
        | <a href="#field_access">field\_access</a>  
        | <a href="#primitive_expr">primitive\_expr</a> <font color="purple"><b>$</b></font>
  
<a name="temporal_expr"></a>**temporal\_expr**
:  <a href="#temporal_inclusive_expression">temporal\_inclusive\_expression</a>  
        | <a href="#temporal_expr">temporal\_expr</a> <font color="purple"><b>@</b></font> <a href="#event">event</a>
  
<a name="temporal_inclusive_expression"></a>**temporal\_inclusive\_expression**
:  <a href="#temporal_or_expression">temporal\_or\_expression</a>  
        | <a href="#temporal_inclusive_expression">temporal\_inclusive\_expression</a> <font color="purple"><b>=&gt;</b></font> <a href="#temporal_or_expression">temporal\_or\_expression</a>
  
<a name="temporal_or_expression"></a>**temporal\_or\_expression**
:  <a href="#temporal_and_expression">temporal\_and\_expression</a>  
        | <a href="#temporal_or_expression">temporal\_or\_expression</a> <font color="purple"><b>or</b></font> <a href="#temporal_and_expression">temporal\_and\_expression</a>
  
<a name="temporal_and_expression"></a>**temporal\_and\_expression**
:  <a href="#temporal_exec_expression">temporal\_exec\_expression</a>  
        | <a href="#temporal_and_expression">temporal\_and\_expression</a> <font color="purple"><b>and</b></font> <a href="#temporal_exec_expression">temporal\_exec\_expression</a>
  
<a name="temporal_exec_expression"></a>**temporal\_exec\_expression**
:  <a href="#temporal_sampling_expression">temporal\_sampling\_expression</a>  
        | <a href="#temporal_sampling_expression">temporal\_sampling\_expression</a> <font color="purple"><b>exec</b></font> <a href="#action_block">action\_block</a>
  
<a name="temporal_sampling_expression"></a>**temporal\_sampling\_expression**
:  <a href="#temporal_eventual_expression">temporal\_eventual\_expression</a>  
        | <a href="#temporal_eventual_expression">temporal\_eventual\_expression</a> <font color="purple"><b>@</b></font>
  
<a name="temporal_eventual_expression"></a>**temporal\_eventual\_expression**
:  <a href="#temporal_repeat_expr">temporal\_repeat\_expr</a>  
        | <font color="purple"><b>eventual</b></font> <a href="#temporal_repeat_expr">temporal\_repeat\_expr</a>  
        | <font color="purple"><b>not</b></font> <a href="#temporal_eventual_expression">temporal\_eventual\_expression</a>
  
<a name="temporal_repeat_expr"></a>**temporal\_repeat\_expr**
:  <a href="#temporal_unaryexpr">temporal\_unaryexpr</a>  
        | <font color="purple"><b>\[</b></font> <a href="#range">range</a> <font color="purple"><b>]</b></font> <a href="#temporal_repeat_opt">temporal\_repeat\_opt</a>  
        | <font color="purple"><b>\[</b></font> <a href="#expr">expr</a> <font color="purple"><b>]</b></font> <a href="#temporal_repeat_opt">temporal\_repeat\_opt</a>  
        | <font color="purple"><b>~</b></font> <font color="purple"><b>\[</b></font> <a href="#range">range</a> <font color="purple"><b>]</b></font> <a href="#temporal_repeat_opt">temporal\_repeat\_opt</a>
  
<a name="temporal_primitive"></a>**temporal\_primitive**
:  <font color="purple"><b>cycle</b></font>  
        | <font color="purple"><b>detach</b></font> <font color="purple"><b>(</b></font> <a href="#temporal_expr">temporal\_expr</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>true</b></font> <font color="purple"><b>(</b></font> <a href="#expr">expr</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>rise</b></font> <font color="purple"><b>(</b></font> <a href="#expr">expr</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>fall</b></font> <font color="purple"><b>(</b></font> <a href="#expr">expr</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>change</b></font> <font color="purple"><b>(</b></font> <a href="#expr">expr</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>delay</b></font> <font color="purple"><b>(</b></font> <a href="#expr">expr</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>(</b></font> <a href="#temporal_expr">temporal\_expr</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>{</b></font> <a href="#temporal_sequence">temporal\_sequence</a> <a href="#last_semi_opt">last\_semi\_opt</a> <font color="purple"><b>}</b></font>  
        | <font color="purple"><b>consume</b></font> <font color="purple"><b>(</b></font> <font color="purple"><b>@</b></font> <a href="#event">event</a> <font color="purple"><b>)</b></font>
  
<a name="temporal_sequence"></a>**temporal\_sequence**
:  <a href="#temporal_expr">temporal\_expr</a>  
        | <a href="#temporal_sequence">temporal\_sequence</a> <font color="purple"><b>;</b></font> <a href="#temporal_expr">temporal\_expr</a>
  
<a name="temporal_repeat_opt"></a>**temporal\_repeat\_opt**
:  \[ <font color="purple"><b>\*</b></font> <a href="#temporal_exec_expression">temporal\_exec\_expression</a> ]
  
<a name="temporal_unaryexpr"></a>**temporal\_unaryexpr**
:  <a href="#temporal_primitive">temporal\_primitive</a>  
        | <font color="purple"><b>@</b></font> <a href="#event">event</a>  
        | <font color="purple"><b>fail</b></font> <a href="#temporal_unaryexpr">temporal\_unaryexpr</a> <font color="purple"><b>)</b></font>
  
<a name="type"></a>**type**
:  <a href="#non_port_type">non\_port\_type</a>  
        | <a href="#port_type">port\_type</a>
  
<a name="non_port_type"></a>**non\_port\_type**
:  <a href="#regular_type">regular\_type</a>  
        | <a href="#list_type">list\_type</a>
  
<a name="regular_type"></a>**regular\_type**
:  <a href="#scalar_type">scalar\_type</a>  
        | <a href="#struct_subtype">struct\_subtype</a>
  
<a name="scalar_type"></a>**scalar\_type**
:  <a href="#id">id</a>  
        | <a href="#enumerated_type">enumerated\_type</a>  
        | <a href="#scalar_type">scalar\_type</a> <a href="#scalar_modifier">scalar\_modifier</a>
  
<a name="enumerated_type"></a>**enumerated\_type**
:  <font color="purple"><b>\[</b></font> <a href="#enum_item_list">enum\_item\_list</a> <font color="purple"><b>]</b></font>
  
<a name="scalar_modifier"></a>**scalar\_modifier**
:  <font color="purple"><b>\[</b></font> <a href="#ranges">ranges</a> <font color="purple"><b>]</b></font>  
        | <font color="purple"><b>(</b></font> <a href="#scalar_unit">scalar\_unit</a> <font color="purple"><b>:</b></font> <a href="#expr">expr</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>(</b></font> <a href="#scalar_unit">scalar\_unit</a> <font color="purple"><b>:</b></font> <font color="purple"><b>\*</b></font> <font color="purple"><b>)</b></font>
  
<a name="enum_item_list"></a>**enum\_item\_list**
:  \[ <a href="#enum_items">enum\_items</a> ]
  
<a name="enum_items"></a>**enum\_items**
:  <a href="#enum_item">enum\_item</a>  
        | <a href="#enum_items">enum\_items</a> <font color="purple"><b>,</b></font> <a href="#enum_item">enum\_item</a>
  
<a name="enum_item"></a>**enum\_item**
:  <a href="#id">id</a> <a href="#enum_num_opt">enum\_num\_opt</a>
  
<a name="enum_num_opt"></a>**enum\_num\_opt**
:  \[ <font color="purple"><b>=</b></font> <a href="#expr">expr</a> ]
  
<a name="scalar_unit"></a>**scalar\_unit**
:  <font color="purple"><b>bits</b></font>  
        | <font color="purple"><b>bytes</b></font>
  
<a name="struct_type"></a>**struct\_type**
:  <a href="#id">id</a>  
        | <a href="#struct_subtype">struct\_subtype</a>
  
<a name="struct_subtype"></a>**struct\_subtype**
:  <a href="#struct_qualifier">struct\_qualifier</a> <a href="#struct_type">struct\_type</a>
  
<a name="struct_qualifier"></a>**struct\_qualifier**
:  <a href="#id">id</a>  
        | <a href="#id">id</a> <font color="purple"><b>&#39;</b></font> <a href="#id">id</a>  
        | <em>FALSE</em><font color="purple"><b>&#39;</b></font> <a href="#id">id</a>  
        | <em>TRUE</em><font color="purple"><b>&#39;</b></font> <a href="#id">id</a>
  
<a name="list_type"></a>**list\_type**
:  <font color="purple"><b>list of</b></font> <a href="#type">type</a>  
        | <font color="purple"><b>list</b></font> <font color="purple"><b>(</b></font> <a href="#id">id</a> <font color="purple"><b>:</b></font> <a href="#id">id</a> <font color="purple"><b>)</b></font> <font color="purple"><b>of</b></font> <a href="#type">type</a>
  
<a name="port_type"></a>**port\_type**
:  <a href="#io_type">io\_type</a> <font color="purple"><b>simple</b></font>  <font color="purple"><b>of</b></font> <a href="#non_port_type">non\_port\_type</a>  
        | <a href="#io_type">io\_type</a> <font color="purple"><b>buffer</b></font>  <font color="purple"><b>of</b></font> <a href="#non_port_type">non\_port\_type</a>  
        | <a href="#io_type">io\_type</a> <a href="#event">event</a>  
        | <a href="#serve_client">serve\_client</a> <font color="purple"><b>call</b></font>  <font color="purple"><b>of</b></font> <a href="#non_port_type">non\_port\_type</a>  
        | <a href="#io_type">io\_type</a> <font color="purple"><b>method</b></font>  <font color="purple"><b>of</b></font> <a href="#id">id</a>
  
<a name="io_type"></a>**io\_type**
:  \[ <a href="#id">id</a> | <font color="purple"><b>in</b></font> | <font color="purple"><b>inout</b></font> ]
  
<a name="serve_client"></a>**serve\_client**
:  <a href="#id">id</a>
  
<a name="constraint_expr"></a>**constraint\_expr**
:  <a href="#binary_expr">binary\_expr</a>
  
<a name="select"></a>**select**
:  <a href="#select">select</a> <font color="purple"><b>{</b></font> <a href="#selection_list">selection\_list</a> <a href="#last_semi_opt">last\_semi\_opt</a> <font color="purple"><b>}</b></font>
  
<a name="selection_list"></a>**selection\_list**
:  <a href="#selection">selection</a>  
        | <a href="#selection_list">selection\_list</a> <font color="purple"><b>;</b></font> <a href="#selection">selection</a>
  
<a name="selection"></a>**selection**
:  <a href="#expr">expr</a> <font color="purple"><b>:</b></font> <a href="#expr">expr</a>
  
<a name="port_binding"></a>**port\_binding**
:  <font color="purple"><b>bind</b></font> <font color="purple"><b>(</b></font> <a href="#expr">expr</a> <font color="purple"><b>,</b></font> <a href="#port_bind_target">port\_bind\_target</a> <a href="#port_constraint">port\_constraint</a> <font color="purple"><b>)</b></font>
  
<a name="port_bind_target"></a>**port\_bind\_target**
:  <a href="#expr">expr</a>  
        | <em>UNDEFINED</em>
  
<a name="port_constraint"></a>**port\_constraint**
:  \[ <font color="purple"><b>,</b></font> <font color="purple"><b>{</b></font> <a href="#constraint_list">constraint\_list</a> <font color="purple"><b>}</b></font> ]
  
<a name="Ival_expr"></a>**Ival\_expr**
:  <a href="#id">id</a>  
        | <a href="#field_access">field\_access</a>  
        | <a href="#primitive_expr">primitive\_expr</a> <font color="purple"><b>\[</b></font> <a href="#range_element">range\_element</a> <font color="purple"><b>]</b></font>  
        | <a href="#hdl_path">hdl\_path</a>  
        | <a href="#bit_extract">bit\_extract</a>  
        | <a href="#bit_concat">bit\_concat</a>  
        | <a href="#primitive_expr">primitive\_expr</a> <font color="purple"><b>$</b></font>
  
<a name="primitive_expr"></a>**primitive\_expr**
:  <em>lval\_</em><a href="#expr">expr</a>  
        | <font color="purple"><b>me</b></font>  
        | <a href="#literal">literal</a>  
        | <font color="purple"><b>(</b></font> <a href="#binary_expr">binary\_expr</a> <font color="purple"><b>)</b></font>  
        | <a href="#new">new</a>  
        | <a href="#method_invocation">method\_invocation</a>  
        | <a href="#method_port_invocation">method\_port\_invocation</a>  
        | <font color="purple"><b>\[</b></font> <a href="#ranges">ranges</a> <font color="purple"><b>]</b></font>  
        | <a href="#cast">cast</a>  
        | <a href="#select">select</a>  
        | <a href="#port_binding">port\_binding</a>
  
<a name="new"></a>**new**
:  <a href="#new">new</a>  
        | <a href="#new">new</a> <a href="#struct_type">struct\_type</a> <a href="#itemname_opt">itemname\_opt</a> <a href="#with_opt">with\_opt</a>
  
<a name="with_opt"></a>**with\_opt**
:  \[ <font color="purple"><b>with</b></font> <a href="#action_block">action\_block</a> ]
  
<a name="field_access"></a>**field\_access**
:  <a href="#primitive_expr">primitive\_expr</a> <font color="purple"><b>.</b></font> <a href="#when_field_access">when\_field\_access</a>  
        | <font color="purple"><b>.</b></font> <a href="#when_field_access">when\_field\_access</a>  
        | <a href="#when_field_access_pair">when\_field\_access\_pair</a>
  
<a name="when_field_access"></a>**when\_field\_access**
:  <a href="#id">id</a>  
        | <a href="#when_field_access_pair">when\_field\_access\_pair</a>
  
<a name="when_field_access_pair"></a>**when\_field\_access\_pair**
:  <em>FALSE</em><font color="purple"><b>&#39;</b></font> <a href="#id">id</a>  
        | <em>TRUE</em><font color="purple"><b>&#39;</b></font> <a href="#id">id</a>  
        | <a href="#when_field_access">when\_field\_access</a> <font color="purple"><b>&#39;</b></font> <a href="#id">id</a>
  
<a name="bit_extract"></a>**bit\_extract**
:  <a href="#primitive_expr">primitive\_expr</a> <font color="purple"><b>\[</b></font> <a href="#expr_opt">expr\_opt</a> <font color="purple"><b>:</b></font> <a href="#expr_opt">expr\_opt</a> <a href="#slice_opt">slice\_opt</a> <font color="purple"><b>]</b></font>
  
<a name="slice_opt"></a>**slice\_opt**
:  \[ <font color="purple"><b>:</b></font> <a href="#scalar_type">scalar\_type</a> ]
  
<a name="bit_concat"></a>**bit\_concat**
:  <font color="purple"><b>%</b></font> <font color="purple"><b>{</b></font> <a href="#bit_elements">bit\_elements</a> <font color="purple"><b>}</b></font>
  
<a name="bit_elements"></a>**bit\_elements**
:  <a href="#expr">expr</a>  
        | <a href="#bit_elements">bit\_elements</a> <font color="purple"><b>,</b></font> <a href="#expr">expr</a>
  
<a name="method_port_invocation"></a>**method\_port\_invocation**
:  <a href="#primitive_expr">primitive\_expr</a> <font color="purple"><b>$</b></font> <font color="purple"><b>(</b></font> <a href="#argument_list">argument\_list</a> <font color="purple"><b>)</b></font>
  
<a name="method_invocation"></a>**method\_invocation**
:  <a href="#primitive_expr">primitive\_expr</a> <font color="purple"><b>.</b></font> <a href="#called_method_name">called\_method\_name</a> <font color="purple"><b>(</b></font> <a href="#argument_list">argument\_list</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>.</b></font> <a href="#called_method_name">called\_method\_name</a> <font color="purple"><b>(</b></font> <a href="#argument_list">argument\_list</a> <font color="purple"><b>)</b></font>  
        | <a href="#id_or_special_method">id\_or\_special\_method</a> <font color="purple"><b>(</b></font> <a href="#argument_list">argument\_list</a> <font color="purple"><b>)</b></font>  
        | <a href="#hdl_path">hdl\_path</a> <font color="purple"><b>(</b></font> <a href="#argument_list">argument\_list</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>all\_values</b></font> <font color="purple"><b>(</b></font> <a href="#scalar_type">scalar\_type</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>get</b></font> <font color="purple"><b>all</b></font> <font color="purple"><b>units</b></font> <font color="purple"><b>(</b></font> <a href="#struct_type">struct\_type</a> <font color="purple"><b>)</b></font>  
        | <a href="#primitive_expr">primitive\_expr</a> <font color="purple"><b>.</b></font> <font color="purple"><b>get</b></font> <font color="purple"><b>enclosing</b></font> <font color="purple"><b>unit</b></font> <font color="purple"><b>(</b></font> <a href="#struct_type">struct\_type</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>get</b></font> <font color="purple"><b>enclosing</b></font> <font color="purple"><b>unit</b></font> <font color="purple"><b>(</b></font> <a href="#struct_type">struct\_type</a> <font color="purple"><b>)</b></font>  
        | <a href="#primitive_expr">primitive\_expr</a> <font color="purple"><b>.</b></font> <font color="purple"><b>try</b></font> <font color="purple"><b>enclosing</b></font> <font color="purple"><b>unit</b></font> <font color="purple"><b>(</b></font> <a href="#struct_type">struct\_type</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>try</b></font> <font color="purple"><b>enclosing</b></font> <font color="purple"><b>unit</b></font> <font color="purple"><b>(</b></font> <a href="#struct_type">struct\_type</a> <font color="purple"><b>)</b></font>  
        | <a href="#primitive_expr">primitive\_expr</a> <font color="purple"><b>.</b></font> <a href="#seq_method">seq\_method</a> <font color="purple"><b>(</b></font> <a href="#type">type</a> <font color="purple"><b>)</b></font> <a href="#itemname_opt">itemname\_opt</a>  
        | <font color="purple"><b>.</b></font> <a href="#seq_method">seq\_method</a> <font color="purple"><b>(</b></font> <a href="#type">type</a> <font color="purple"><b>)</b></font> <a href="#itemname_opt">itemname\_opt</a>  
        | <a href="#seq_method">seq\_method</a> <font color="purple"><b>(</b></font> <a href="#type">type</a> <font color="purple"><b>)</b></font> <a href="#itemname_opt">itemname\_opt</a>
  
<a name="called_method_name"></a>**called\_method\_name**
:  <a href="#method_name">method\_name</a>
  
<a name="id_or_special_method"></a>**id\_or\_special\_method**
:  <em>method\_</em><a href="#id">id</a>
  
<a name="seq_method"></a>**seq\_method**
:  <font color="purple"><b>in</b></font> <font color="purple"><b>sequence</b></font>  
        | <font color="purple"><b>in unit</b></font>
  
<a name="argument_list"></a>**argument\_list**
:  \[ <a href="#exprs">exprs</a> ]
  
<a name="cast"></a>**cast**
:  <a href="#primitive_expr">primitive\_expr</a> <font color="purple"><b>.</b></font> <font color="purple"><b>as\_a</b></font> <font color="purple"><b>(</b></font> <a href="#type">type</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>.</b></font> <font color="purple"><b>as\_a</b></font> <font color="purple"><b>(</b></font> <a href="#type">type</a> <font color="purple"><b>)</b></font>
  
<a name="ranges"></a>**ranges**
:  <a href="#range_element">range\_element</a>  
        | <a href="#ranges">ranges</a> <font color="purple"><b>,</b></font> <a href="#range_element">range\_element</a>
  
<a name="range_element"></a>**range\_element**
:  <a href="#expr">expr</a>  
        | <a href="#range">range</a>
  
<a name="range"></a>**range**
:  <a href="#expr_opt">expr\_opt</a> <font color="purple"><b>..</b></font> <a href="#expr_opt">expr\_opt</a>
  
<a name="list_elements_or_null"></a>**list\_elements\_or\_null**
:  \[ <a href="#list_elements">list\_elements</a> <a href="#last_semi_opt">last\_semi\_opt</a> ]
  
<a name="list_elements"></a>**list\_elements**
:  <a href="#expr">expr</a>  
        | <a href="#list_elements">list\_elements</a> <font color="purple"><b>;</b></font> <a href="#expr">expr</a>
  
<a name="unary_expr"></a>**unary\_expr**
:  <a href="#primitive_expr">primitive\_expr</a>  
        | <font color="purple"><b>now</b></font> <font color="purple"><b>@</b></font> <a href="#event">event</a>  
        | <font color="purple"><b>{</b></font> <a href="#list_elements_or_null">list\_elements\_or\_null</a> <font color="purple"><b>}</b></font>  
        | <font color="purple"><b>{</b></font> <a href="#list_elements_or_null">list\_elements\_or\_null</a> <font color="purple"><b>}</b></font> <font color="purple"><b>\[</b></font> <a href="#range_element">range\_element</a> <font color="purple"><b>]</b></font>  
        | <font color="purple"><b>{</b></font> <a href="#list_elements_or_null">list\_elements\_or\_null</a> <font color="purple"><b>}</b></font> <font color="purple"><b>.</b></font> <a href="#id">id</a> <font color="purple"><b>(</b></font> <a href="#argument_list">argument\_list</a> <font color="purple"><b>)</b></font>  
        | <a href="#unary_operator">unary\_operator</a> <a href="#unary_expr">unary\_expr</a>  
        | <a href="#primitive_expr">primitive\_expr</a> <a href="#unary_post_operator">unary\_post\_operator</a>  
        | <a href="#Ival_expr">Ival\_expr</a> <a href="#time_unit">time\_unit</a>  
        | <a href="#literal">literal</a> <a href="#time_unit">time\_unit</a>  
        | <a href="#constraint_for_each_expr">constraint\_for\_each\_expr</a>  
        | <a href="#text_expansion_exp">text\_expansion\_exp</a>  
        | <font color="purple"><b>&lt;&lt;</b></font> <em>STRING\_LITERAL</em>
  
<a name="unary_operator"></a>**unary\_operator**
:  <font color="purple"><b>not</b></font>  
        | <font color="purple"><b>|</b></font>  
        | <font color="purple"><b>&amp;</b></font>  
        | <font color="purple"><b>^</b></font>  
        | <font color="purple"><b>nor</b></font>  
        | <font color="purple"><b>nand</b></font>  
        | <font color="purple"><b>nxor</b></font>  
        | <font color="purple"><b>+</b></font>  
        | <font color="purple"><b>-</b></font>  
        | <font color="purple"><b>~</b></font>  
        | <font color="purple"><b>!</b></font>
  
<a name="unary_post_operator"></a>**unary\_post\_operator**
:  <font color="purple"><b>is empty</b></font>  
        | <font color="purple"><b>is not empty</b></font>
  
<a name="binary_expr"></a>**binary\_expr**
:  <a href="#boolean_imp_expression">boolean\_imp\_expression</a>  
        | <a href="#boolean_imp_expression">boolean\_imp\_expression</a> <font color="purple"><b>?</b></font> <a href="#expr">expr</a> <font color="purple"><b>:</b></font> <a href="#expr">expr</a>
  
<a name="boolean_imp_expression"></a>**boolean\_imp\_expression**
:  <a href="#logical_OR_expression">logical\_OR\_expression</a>  
        | <a href="#boolean_imp_expression">boolean\_imp\_expression</a> <font color="purple"><b>=&gt;</b></font> <a href="#logical_OR_expression">logical\_OR\_expression</a>
  
<a name="logical_OR_expression"></a>**logical\_OR\_expression**
:  <a href="#logical_AND_expression">logical\_AND\_expression</a>  
        | <a href="#logical_OR_expression">logical\_OR\_expression</a> <a href="#boolor_operator">boolor\_operator</a> <a href="#logical_AND_expression">logical\_AND\_expression</a>
  
<a name="boolor_operator"></a>**boolor\_operator**
:  <font color="purple"><b>||</b></font>  
        | <font color="purple"><b>or</b></font>
  
<a name="logical_AND_expression"></a>**logical\_AND\_expression**
:  <a href="#inclusive_OR_expression">inclusive\_OR\_expression</a>  
        | <a href="#logical_AND_expression">logical\_AND\_expression</a> <a href="#booland_operator">booland\_operator</a> <a href="#inclusive_OR_expression">inclusive\_OR\_expression</a>
  
<a name="booland_operator"></a>**booland\_operator**
:  <font color="purple"><b>and</b></font>  
        | <font color="purple"><b>&amp;&amp;</b></font>
  
<a name="inclusive_OR_expression"></a>**inclusive\_OR\_expression**
:  <a href="#exclusive_OR_expression">exclusive\_OR\_expression</a>  
        | <a href="#inclusive_OR_expression">inclusive\_OR\_expression</a> <font color="purple"><b>|</b></font> <a href="#exclusive_OR_expression">exclusive\_OR\_expression</a>
  
<a name="exclusive_OR_expression"></a>**exclusive\_OR\_expression**
:  <a href="#AND_expression">AND\_expression</a>  
        | <a href="#exclusive_OR_expression">exclusive\_OR\_expression</a> <a href="#exclusive_operator">exclusive\_operator</a> <a href="#AND_expression">AND\_expression</a>
  
<a name="exclusive_operator"></a>**exclusive\_operator**
:  <font color="purple"><b>^</b></font>  
        | <font color="purple"><b>nxor</b></font>
  
<a name="AND_expression"></a>**AND\_expression**
:  <a href="#in_expression">in\_expression</a>  
        | <a href="#AND_expression">AND\_expression</a> <font color="purple"><b>&amp;</b></font> <a href="#in_expression">in\_expression</a>
  
<a name="in_expression"></a>**in\_expression**
:  <a href="#match_expression">match\_expression</a>  
        | <a href="#in_expression">in\_expression</a> <a href="#IN_operator">IN\_operator</a> <a href="#match_expression">match\_expression</a>
  
<a name="IN_operator"></a>**IN\_operator**
:  <font color="purple"><b>in</b></font>  
        | <font color="purple"><b>in range</b></font>  
        | <font color="purple"><b>not in</b></font>
  
<a name="match_expression"></a>**match\_expression**
:  <a href="#relational_expression">relational\_expression</a>  
        | <a href="#match_expression">match\_expression</a> <a href="#match_operator">match\_operator</a> <a href="#relational_expression">relational\_expression</a>
  
<a name="match_operator"></a>**match\_operator**
:  <font color="purple"><b>~</b></font>  
        | <font color="purple"><b>!~</b></font>
  
<a name="relational_expression"></a>**relational\_expression**
:  <a href="#member_expression">member\_expression</a>  
        | <a href="#relational_expression">relational\_expression</a> <a href="#neq_operator">neq\_operator</a> <a href="#relational_rhs">relational\_rhs</a>  
        | <a href="#verilog_literal">verilog\_literal</a> <a href="#neq_operator">neq\_operator</a> <a href="#member_expression">member\_expression</a>
  
<a name="relational_rhs"></a>**relational\_rhs**
:  <a href="#member_expression">member\_expression</a>  
        | <a href="#verilog_literal">verilog\_literal</a>
  
<a name="neq_operator"></a>**neq\_operator**
:  <font color="purple"><b>==</b></font>  
        | <font color="purple"><b>!=</b></font>  
        | <a href="#verilog_operator">verilog\_operator</a>
  
<a name="verilog_operator"></a>**verilog\_operator**
:  <font color="purple"><b>===</b></font>  
        | <font color="purple"><b>!==</b></font>
  
<a name="member_expression"></a>**member\_expression**
:  <a href="#equality_expression">equality\_expression</a>  
        | <a href="#member_expression">member\_expression</a> <font color="purple"><b>is a</b></font> <a href="#struct_type">struct\_type</a>  
        | <a href="#member_expression">member\_expression</a> <font color="purple"><b>is a</b></font> <a href="#struct_type">struct\_type</a> <font color="purple"><b>(</b></font> <a href="#id">id</a> <font color="purple"><b>)</b></font>  
        | <a href="#member_expression">member\_expression</a> <font color="purple"><b>is not a</b></font> <a href="#struct_type">struct\_type</a>
  
<a name="equality_expression"></a>**equality\_expression**
:  <a href="#soft_expression">soft\_expression</a>  
        | <a href="#equality_expression">equality\_expression</a> <a href="#eq_operator">eq\_operator</a> <a href="#soft_expression">soft\_expression</a>
  
<a name="soft_expression"></a>**soft\_expression**
:  <a href="#shift_expression">shift\_expression</a>  
        | <font color="purple"><b>soft</b></font> <a href="#shift_expression">shift\_expression</a>
  
<a name="eq_operator"></a>**eq\_operator**
:  <font color="purple"><b>&lt;=</b></font>  
        | <font color="purple"><b>&gt;=:</b></font>  
        | <font color="purple"><b>&lt;</b></font>  
        | <font color="purple"><b>&gt;</b></font>
  
<a name="shift_expression"></a>**shift\_expression**
:  <a href="#additive_expression">additive\_expression</a>  
        | <a href="#shift_expression">shift\_expression</a> <a href="#shift_operator">shift\_operator</a> <a href="#additive_expression">additive\_expression</a>  
        | <font color="purple"><b>gen</b></font> <font color="purple"><b>(</b></font> <a href="#gen_item_list">gen\_item\_list</a> <font color="purple"><b>)</b></font> <font color="purple"><b>before</b></font> <font color="purple"><b>(</b></font> <a href="#gen_item_list">gen\_item\_list</a> <font color="purple"><b>)</b></font>
  
<a name="shift_operator"></a>**shift\_operator**
:  <font color="purple"><b>&lt;&lt;</b></font>
  
<a name="additive_expression"></a>**additive\_expression**
:  <a href="#multiplicative_expression">multiplicative\_expression</a>  
        | <a href="#additive_expression">additive\_expression</a> <a href="#additive_operator">additive\_operator</a> <a href="#multiplicative_expression">multiplicative\_expression</a>
  
<a name="additive_operator"></a>**additive\_operator**
:  <font color="purple"><b>-</b></font>
  
<a name="multiplicative_expression"></a>**multiplicative\_expression**
:  <a href="#unary_expr">unary\_expr</a>  
        | <a href="#multiplicative_expression">multiplicative\_expression</a> <a href="#multiplicative_operator">multiplicative\_operator</a> <a href="#unary_expr">unary\_expr</a>
  
<a name="multiplicative_operator"></a>**multiplicative\_operator**
:  <font color="purple"><b>\*</b></font>  
        | <font color="purple"><b>/</b></font>  
        | <font color="purple"><b>%</b></font>  
        | <font color="purple"><b>within</b></font>
  
<a name="exprs"></a>**exprs**
:  <a href="#expr">expr</a>  
        | <a href="#exprs">exprs</a> <font color="purple"><b>,</b></font> <a href="#expr">expr</a>
  
<a name="expr"></a>**expr**
:  <a href="#binary_expr">binary\_expr</a>
  
<a name="expr_opt"></a>**expr\_opt**
:  \[ <a href="#expr">expr</a> ]
  
<a name="opt_index"></a>**opt\_index**
:  \[ <font color="purple"><b>Index</b></font> <font color="purple"><b>(</b></font> <a href="#id">id</a> <font color="purple"><b>)</b></font> ]
  
<a name="opt_prev"></a>**opt\_prev**
:  \[ <font color="purple"><b>prev</b></font> <font color="purple"><b>(</b></font> <a href="#id">id</a> <font color="purple"><b>)</b></font> ]
  
<a name="constraint_for_each_expr"></a>**constraint\_for\_each\_expr**
:  <font color="purple"><b>for each</b></font> <a href="#itemname_opt">itemname\_opt</a> <font color="purple"><b>in</b></font> <a href="#gen_item">gen\_item</a> <a href="#do_opt">do\_opt</a> <font color="purple"><b>{</b></font> <a href="#constraint_list">constraint\_list</a> <font color="purple"><b>}</b></font>  
        | <font color="purple"><b>for each</b></font> <a href="#itemname_opt">itemname\_opt</a> <font color="purple"><b>using</b></font> <a href="#opt_index">opt\_index</a> <a href="#opt_prev">opt\_prev</a> <font color="purple"><b>in</b></font> <a href="#gen_item">gen\_item</a> <a href="#do_opt">do\_opt</a> <font color="purple"><b>{</b></font> <a href="#constraint_list">constraint\_list</a> <font color="purple"><b>}</b></font>
  
<a name="gen_item_list"></a>**gen\_item\_list**
:  <a href="#gen_item">gen\_item</a>  
        | <a href="#gen_item_list">gen\_item\_list</a> <font color="purple"><b>,</b></font> <a href="#gen_item">gen\_item</a>  
        | <font color="purple"><b>&gt;&gt;</b></font>  
        | <font color="purple"><b>+</b></font>
  
<a name="gen_item"></a>**gen\_item**
:  <a href="#primitive_expr">primitive\_expr</a>
  
<a name="constraint_list"></a>**constraint\_list**
:  \[ <a href="#constraints">constraints</a> <a href="#last_semi_opt">last\_semi\_opt</a> ]
  
<a name="constraints"></a>**constraints**
:  <a href="#constraint_expr">constraint\_expr</a>  
        | <a href="#constraints">constraints</a> <font color="purple"><b>;</b></font> <a href="#constraint_expr">constraint\_expr</a>
  
<a name="verilog_literal"></a>**verilog\_literal**
:  <em>BASED\_LITERAL</em>
  
<a name="time_unit"></a>**time\_unit**
:  <font color="purple"><b>hr</b></font>  
        | <font color="purple"><b>min</b></font>  
        | <font color="purple"><b>sec</b></font>  
        | <font color="purple"><b>ms</b></font>  
        | <font color="purple"><b>us</b></font>  
        | <font color="purple"><b>ns</b></font>  
        | <font color="purple"><b>ps</b></font>  
        | <font color="purple"><b> fs</b></font>
  
<a name="text_expansion_exp"></a>**text\_expansion\_exp**
:  <font color="purple"><b>text</b></font> <font color="purple"><b>begin</b></font> <a href="#text_list">text\_list</a> <font color="purple"><b>text</b></font> <font color="purple"><b>end</b></font>
  
<a name="text_list"></a>**text\_list**
:  <font color="purple"><b>(</b></font> <a href="#expr">expr</a> <font color="purple"><b>)</b></font>  
        | <em>STRING\_LITERAL</em>  
        | <a href="#text_list">text\_list</a> <font color="purple"><b>(</b></font> <a href="#expr">expr</a> <font color="purple"><b>)</b></font>  
        | <a href="#text_list">text\_list</a> <em>STRING\_LITERAL</em>
  
<a name="options_opt"></a>**options\_opt**
:  \[ <font color="purple"><b>using</b></font> <a href="#options">options</a> ]
  
<a name="options"></a>**options**
:  <a href="#option">option</a>  
        | <a href="#options">options</a> <font color="purple"><b>,</b></font> <a href="#option">option</a>
  
<a name="option"></a>**option**
:  <a href="#id">id</a>  
        | <a href="#id">id</a> <font color="purple"><b>=</b></font> <a href="#expr">expr</a>  
        | <font color="purple"><b>when</b></font> <font color="purple"><b>=</b></font> <a href="#expr">expr</a>  
        | <a href="#range_option">range\_option</a>
  
<a name="range_option"></a>**range\_option**
:  <a href="#ranges">ranges</a> <font color="purple"><b>=</b></font> <font color="purple"><b>{</b></font> <a href="#cover_ranges">cover\_ranges</a> <a href="#last_semi_opt">last\_semi\_opt</a> <font color="purple"><b>}</b></font>
  
<a name="cover_ranges"></a>**cover\_ranges**
:  <a href="#cover_range">cover\_range</a>  
        | <a href="#cover_ranges">cover\_ranges</a> <font color="purple"><b>;</b></font> <a href="#cover_range">cover\_range</a>
  
<a name="cover_range"></a>**cover\_range**
:  <a href="#range">range</a> <font color="purple"><b>(</b></font> <font color="purple"><b>\[</b></font> <a href="#ranges">ranges</a> <font color="purple"><b>]</b></font> <a href="#optional_range_param">optional\_range\_param</a> <font color="purple"><b>)</b></font>  
        | <a href="#range">range</a> <font color="purple"><b>(</b></font> <a href="#id">id</a> <a href="#optional_range_param">optional\_range\_param</a> <font color="purple"><b>)</b></font>
  
<a name="optional_range_param"></a>**optional\_range\_param**
:  \[ <font color="purple"><b>,</b></font> <a href="#exprs">exprs</a> ]
  
<a name="literal"></a>**literal**
:  <em>STRING\_LITERAL</em>  
        | <em>NUMERIC\_LITERAL</em>  
        | <em>CHAR LITERAL</em>  
        | <em>TRUE</em>  
        | <em>FALSE</em>  
        | <em>NULL</em>  
        | <em>UNDEF</em>  
        | <em>MAX\_INT</em>  
        | <em>MIN\_INT</em>
  
<a name="id"></a>**id**
:  <a href="#id">id</a>
