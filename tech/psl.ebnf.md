---
title: "PSL 1.1 BNF Grammar"
layout: page 
pager: true
author: Sigasi
date: 2017-01-06
comments: true
---
<em>
This document is copyrighted by the IEEE. It is made available for a wide variety of both public and private uses. These include both use, by reference, in laws and regulations, and use in private self-regulation, standardization, and the promotion of engineering practices and methods. By making this document available for use and adoption by public authorities and private users, the IEEE does not waive any rights in copyright to this document.
</em>  

Get the full Language Reference Manual, at <https://standards.ieee.org/findstds/standard/1850-2010.html>

Sigasi has created this browsable version of the grammar, hoping that it would be useful to you, but without any warranty whatsoever.

## A.4 Syntax productions
  
<em> The rest of this section defines the PSL syntax. </em>  
### A.4.1 Verification units
  
**PSL_Specification**{: #PSL_Specification }
:	 { <a href="#Verification_Item">Verification_Item</a>  }  
  
**Verification_Item**{: #Verification_Item }
:	<a href="#HDL_UNIT">HDL_UNIT</a>   
        | <a href="#Verification_Unit">Verification_Unit</a> 
  
**Verification_Unit**{: #Verification_Unit }
:	<a href="#Vunit_Type">Vunit_Type</a> <a href="#PSL_Identifier">PSL_Identifier</a>  \[ <font color="purple"><b>(</b></font> <a href="#Hierarchical_HDL_Name">Hierarchical_HDL_Name</a> <font color="purple"><b>)</b></font>  ]  <font color="purple"><b>{</b></font>  { <a href="#Inherit_Spec">Inherit_Spec</a>  }   { <a href="#VUnit_Item">VUnit_Item</a>  }  <font color="purple"><b>}</b></font> 
  
**Vunit_Type**{: #Vunit_Type }
:	<font color="purple"><b>vunit</b></font>   
        | <font color="purple"><b>vprop</b></font>   
        | <font color="purple"><b>vmode</b></font> 
  
**Name**{: #Name }
:	<a href="#HDL_or_PSL_Identifier">HDL_or_PSL_Identifier</a> 
  
**Hierarchical_HDL_Name**{: #Hierarchical_HDL_Name }
:	<a href="#HDL_MOD_NAME">HDL_MOD_NAME</a>  { <a href="#Path_Separator">Path_Separator</a> <a href="#instance_Name">instance_Name</a>  }  
  
**Path_Separator**{: #Path_Separator }
:	<font color="purple"><b>.</b></font>   
        | <font color="purple"><b>/</b></font> 
  
**Inherit_Spec**{: #Inherit_Spec }
:	<font color="purple"><b>inherit</b></font> <a href="#vunit_Name">vunit_Name</a>  { <font color="purple"><b>,</b></font> <a href="#vunit_Name">vunit_Name</a>  }  <font color="purple"><b>;</b></font> 
  
**VUnit_Item**{: #VUnit_Item }
:	<a href="#HDL_DECL">HDL_DECL</a>   
        | <a href="#HDL_STMT">HDL_STMT</a>   
        | <a href="#PSL_Declaration">PSL_Declaration</a>   
        | <a href="#PSL_Directive">PSL_Directive</a> 
  
### A.4.2 PSL declarations
  
**PSL_Declaration**{: #PSL_Declaration }
:	<a href="#Property_Declaration">Property_Declaration</a>   
        | <a href="#Sequence_Declaration">Sequence_Declaration</a>   
        | <a href="#Endpoint_Declaration">Endpoint_Declaration</a>   
        | <a href="#Clock_Declaration">Clock_Declaration</a> 
  
**Property_Declaration**{: #Property_Declaration }
:	<font color="purple"><b>property</b></font> <a href="#PSL_Identifier">PSL_Identifier</a>  \[ <font color="purple"><b>(</b></font> <a href="#Formal_Parameter_List">Formal_Parameter_List</a> <font color="purple"><b>)</b></font>  ]  <a href="#DEF_SYM">DEF_SYM</a> <a href="#Property">Property</a> <font color="purple"><b>;</b></font> 
  
**Formal_Parameter_List**{: #Formal_Parameter_List }
:	<a href="#Formal_Parameter">Formal_Parameter</a>  { <font color="purple"><b>;</b></font> <a href="#Formal_Parameter">Formal_Parameter</a>  }  
  
**Formal_Parameter**{: #Formal_Parameter }
:	<a href="#Param_Type">Param_Type</a> <a href="#PSL_Identifier">PSL_Identifier</a>  { <font color="purple"><b>,</b></font> <a href="#PSL_Identifier">PSL_Identifier</a>  }  
  
**Param_Type**{: #Param_Type }
:	<font color="purple"><b>const</b></font>   
        | <font color="purple"><b>boolean</b></font>   
        | <font color="purple"><b>property</b></font>   
        | <font color="purple"><b>sequence</b></font> 
  
**Sequence_Declaration**{: #Sequence_Declaration }
:	<font color="purple"><b>sequence</b></font> <a href="#PSL_Identifier">PSL_Identifier</a>  \[ <font color="purple"><b>(</b></font> <a href="#Formal_Parameter_List">Formal_Parameter_List</a> <font color="purple"><b>)</b></font>  ]  <a href="#DEF_SYM">DEF_SYM</a> <a href="#Sequence">Sequence</a> <font color="purple"><b>;</b></font> 
  
**Endpoint_Declaration**{: #Endpoint_Declaration }
:	<font color="purple"><b>endpoint</b></font> <a href="#PSL_Identifier">PSL_Identifier</a>  \[ <font color="purple"><b>(</b></font> <a href="#Formal_Parameter_List">Formal_Parameter_List</a> <font color="purple"><b>)</b></font>  ]  <a href="#DEF_SYM">DEF_SYM</a> <a href="#Sequence">Sequence</a> <font color="purple"><b>;</b></font> 
  
**Clock_Declaration**{: #Clock_Declaration }
:	<font color="purple"><b>default</b></font> <font color="purple"><b>clock</b></font> <a href="#DEF_SYM">DEF_SYM</a> <a href="#Clock_Expression">Clock_Expression</a> <font color="purple"><b>;</b></font> 
  
**Clock_Expression**{: #Clock_Expression }
:	<a href="#boolean_Name">boolean_Name</a>   
        | <a href="#boolean_Built_In_Function_Call">boolean_Built_In_Function_Call</a>   
        | <a href="#Endpoint_Instance">Endpoint_Instance</a>   
        | <font color="purple"><b>(</b></font> <a href="#Boolean">Boolean</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>(</b></font> <a href="#HDL_CLK_EXPR">HDL_CLK_EXPR</a> <font color="purple"><b>)</b></font> 
  
**Actual_Parameter_List**{: #Actual_Parameter_List }
:	<a href="#Actual_Parameter">Actual_Parameter</a>  { <font color="purple"><b>,</b></font> <a href="#Actual_Parameter">Actual_Parameter</a>  }  
  
**Actual_Parameter**{: #Actual_Parameter }
:	<a href="#Number">Number</a>   
        | <a href="#Boolean">Boolean</a>   
        | <a href="#Property">Property</a>   
        | <a href="#Sequence">Sequence</a> 
  
### A.4.3 PSL directives
  
**PSL_Directive**{: #PSL_Directive }
:	 \[ <a href="#Label">Label</a> <font color="purple"><b>:</b></font>  ]  <a href="#Verification_Directive">Verification_Directive</a> 
  
**Label**{: #Label }
:	<a href="#PSL_Identifier">PSL_Identifier</a> 
  
**HDL_or_PSL_Identifier**{: #HDL_or_PSL_Identifier }
:	<a href="#SystemVerilog_Identifier">SystemVerilog_Identifier</a>   
        | <a href="#Verilog_Identifier">Verilog_Identifier</a>   
        | <a href="#VHDL_Identifier">VHDL_Identifier</a>   
        | <a href="#GDL_Identifier">GDL_Identifier</a>   
        | <a href="#PSL_Identifier">PSL_Identifier</a> 
  
**Verification_Directive**{: #Verification_Directive }
:	<a href="#Assert_Directive">Assert_Directive</a>   
        | <a href="#Assume_Directive">Assume_Directive</a>   
        | <a href="#Assume_Guarantee_Directive">Assume_Guarantee_Directive</a>   
        | <a href="#Restrict_Directive">Restrict_Directive</a>   
        | <a href="#Restrict_Guarantee_Directive">Restrict_Guarantee_Directive</a>   
        | <a href="#Cover_Directive">Cover_Directive</a>   
        | <a href="#Fairness_Statement">Fairness_Statement</a> 
  
**Assert_Directive**{: #Assert_Directive }
:	<font color="purple"><b>assert</b></font> <a href="#Property">Property</a>  \[ <font color="purple"><b>report</b></font> <a href="#String">String</a>  ]  <font color="purple"><b>;</b></font> 
  
**Assume_Directive**{: #Assume_Directive }
:	<font color="purple"><b>assume</b></font> <a href="#Property">Property</a> <font color="purple"><b>;</b></font> 
  
**Assume_Guarantee_Directive**{: #Assume_Guarantee_Directive }
:	<font color="purple"><b>assume_guarantee</b></font> <a href="#Property">Property</a>  \[ <font color="purple"><b>report</b></font> <a href="#String">String</a>  ]  <font color="purple"><b>;</b></font> 
  
**Restrict_Directive**{: #Restrict_Directive }
:	<font color="purple"><b>restrict</b></font> <a href="#Sequence">Sequence</a> <font color="purple"><b>;</b></font> 
  
**Restrict_Guarantee_Directive**{: #Restrict_Guarantee_Directive }
:	<font color="purple"><b>restrict_guarantee</b></font> <a href="#Sequence">Sequence</a>  \[ <font color="purple"><b>report</b></font> <a href="#String">String</a>  ]  <font color="purple"><b>;</b></font> 
  
**Cover_Directive**{: #Cover_Directive }
:	<font color="purple"><b>cover</b></font> <a href="#Sequence">Sequence</a>  \[ <font color="purple"><b>report</b></font> <a href="#String">String</a>  ]  <font color="purple"><b>;</b></font> 
  
**Fairness_Statement**{: #Fairness_Statement }
:	<font color="purple"><b>fairness</b></font> <a href="#Boolean">Boolean</a> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>strong</b></font> <font color="purple"><b>fairness</b></font> <a href="#Boolean">Boolean</a> <font color="purple"><b>,</b></font> <a href="#Boolean">Boolean</a> <font color="purple"><b>;</b></font> 
  
## A.4.4 PSL properties
  
**Property**{: #Property }
:	<a href="#Replicator">Replicator</a> <a href="#Property">Property</a>   
        | <a href="#FL_Property">FL_Property</a>   
        | <a href="#OBE_Property">OBE_Property</a> 
  
**Replicator**{: #Replicator }
:	<font color="purple"><b>forall</b></font> <a href="#PSL_Identifier">PSL_Identifier</a>  \[ <a href="#Index_Range">Index_Range</a>  ]  <font color="purple"><b>in</b></font> <a href="#Value_Set">Value_Set</a> <font color="purple"><b>:</b></font> 
  
**Index_Range**{: #Index_Range }
:	<a href="#LEFT_SYM">LEFT_SYM</a> <a href="#finite_Range">finite_Range</a> <a href="#RIGHT_SYM">RIGHT_SYM</a>   
        | <font color="purple"><b>(</b></font> <a href="#HDL_RANGE">HDL_RANGE</a> <font color="purple"><b>)</b></font> 
  
**Value_Set**{: #Value_Set }
:	<font color="purple"><b>{</b></font> <a href="#Value_Range">Value_Range</a>  { <font color="purple"><b>,</b></font> <a href="#Value_Range">Value_Range</a>  }  <font color="purple"><b>}</b></font>   
        | <font color="purple"><b>boolean</b></font> 
  
**Value_Range**{: #Value_Range }
:	<a href="#Value">Value</a>   
        | <a href="#FiniteRange">FiniteRange</a> 
  
**Value**{: #Value }
:	<a href="#Boolean">Boolean</a>   
        | <a href="#Number">Number</a> 
  
**FL_Property**{: #FL_Property }
:	<a href="#Boolean">Boolean</a>   
        | <font color="purple"><b>(</b></font> <a href="#FL_Property">FL_Property</a> <font color="purple"><b>)</b></font>   
        | <a href="#Sequence">Sequence</a>  \[ <font color="purple"><b>!</b></font>  ]    
        | <a href="#property_Name">property_Name</a>  \[ <font color="purple"><b>(</b></font> <a href="#Actual_Parameter_List">Actual_Parameter_List</a> <font color="purple"><b>)</b></font>  ]    
        | <a href="#FL_Property">FL_Property</a> <font color="purple"><b>@</b></font> <a href="#Clock_Expression">Clock_Expression</a>   
        | <a href="#FL_Property">FL_Property</a> <font color="purple"><b>abort</b></font> <a href="#Boolean">Boolean</a>   
        | <a href="#NOT_OP">NOT_OP</a> <a href="#FL_Property">FL_Property</a>   
        | <a href="#FL_Property">FL_Property</a> <a href="#AND_OP">AND_OP</a> <a href="#FL_Property">FL_Property</a>   
        | <a href="#FL_Property">FL_Property</a> <a href="#OR_OP">OR_OP</a> <a href="#FL_Property">FL_Property</a> <font color="purple"><b>:</b></font>   
        | <a href="#FL_Property">FL_Property</a> <font color="purple"><b>-></b></font> <a href="#FL_Property">FL_Property</a>   
        | <a href="#FL_Property">FL_Property</a> <font color="purple"><b><-></b></font> <a href="#FL_Property">FL_Property</a>   
        | <font color="purple"><b>X</b></font> <a href="#FL_Property">FL_Property</a>   
        | <font color="purple"><b>X!</b></font> <a href="#FL_Property">FL_Property</a>   
        | <font color="purple"><b>F</b></font> <a href="#FL_Property">FL_Property</a>   
        | <font color="purple"><b>G</b></font> <a href="#FL_Property">FL_Property</a>   
        | <font color="purple"><b>\[</b></font> <a href="#FL_Property">FL_Property</a> <font color="purple"><b>U</b></font> <a href="#FL_Property">FL_Property</a> <font color="purple"><b>]</b></font>   
        | <font color="purple"><b>\[</b></font> <a href="#FL_Property">FL_Property</a> <font color="purple"><b>W</b></font> <a href="#FL_Property">FL_Property</a> <font color="purple"><b>]</b></font>   
        | <font color="purple"><b>always</b></font> <a href="#FL_Property">FL_Property</a>   
        | <font color="purple"><b>never</b></font> <a href="#FL_Property">FL_Property</a>   
        | <font color="purple"><b>next</b></font> <a href="#FL_Property">FL_Property</a>   
        | <font color="purple"><b>next!</b></font> <a href="#FL_Property">FL_Property</a>   
        | <font color="purple"><b>eventually!</b></font> <a href="#FL_Property">FL_Property</a> <font color="purple"><b>:</b></font>   
        | <a href="#FL_Property">FL_Property</a> <font color="purple"><b>until!</b></font> <a href="#FL_Property">FL_Property</a>   
        | <a href="#FL_Property">FL_Property</a> <font color="purple"><b>until</b></font> <a href="#FL_Property">FL_Property</a>   
        | <a href="#FL_Property">FL_Property</a> <font color="purple"><b>until!_</b></font> <a href="#FL_Property">FL_Property</a>   
        | <a href="#FL_Property">FL_Property</a> <font color="purple"><b>until_</b></font> <a href="#FL_Property">FL_Property</a> <font color="purple"><b>:</b></font>   
        | <a href="#FL_Property">FL_Property</a> <font color="purple"><b>before!</b></font> <a href="#FL_Property">FL_Property</a>   
        | <a href="#FL_Property">FL_Property</a> <font color="purple"><b>before</b></font> <a href="#FL_Property">FL_Property</a>   
        | <a href="#FL_Property">FL_Property</a> <font color="purple"><b>before!_</b></font> <a href="#FL_Property">FL_Property</a>   
        | <a href="#FL_Property">FL_Property</a> <font color="purple"><b>before_</b></font> <a href="#FL_Property">FL_Property</a>   
        | <font color="purple"><b>X</b></font> <font color="purple"><b>\[</b></font> <a href="#Number">Number</a> <font color="purple"><b>]</b></font> <font color="purple"><b>(</b></font> <a href="#FL_Property">FL_Property</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>X!</b></font> <font color="purple"><b>\[</b></font> <a href="#Number">Number</a> <font color="purple"><b>]</b></font> <font color="purple"><b>(</b></font> <a href="#FL_Property">FL_Property</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>next</b></font> <font color="purple"><b>\[</b></font> <a href="#Number">Number</a> <font color="purple"><b>]</b></font> <font color="purple"><b>(</b></font> <a href="#FL_Property">FL_Property</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>next!</b></font> <font color="purple"><b>\[</b></font> <a href="#Number">Number</a> <font color="purple"><b>]</b></font> <font color="purple"><b>(</b></font> <a href="#FL_Property">FL_Property</a> <font color="purple"><b>)</b></font> <font color="purple"><b>:</b></font>   
        | <font color="purple"><b>next_a</b></font> <font color="purple"><b>\[</b></font> <a href="#finite_Range">finite_Range</a> <font color="purple"><b>]</b></font> <font color="purple"><b>(</b></font> <a href="#FL_Property">FL_Property</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>next_a!</b></font> <font color="purple"><b>\[</b></font> <a href="#finite_Range">finite_Range</a> <font color="purple"><b>]</b></font> <font color="purple"><b>(</b></font> <a href="#FL_Property">FL_Property</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>next_e</b></font> <font color="purple"><b>\[</b></font> <a href="#finite_Range">finite_Range</a> <font color="purple"><b>]</b></font> <font color="purple"><b>(</b></font> <a href="#FL_Property">FL_Property</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>next_e!</b></font> <font color="purple"><b>\[</b></font> <a href="#finite_Range">finite_Range</a> <font color="purple"><b>]</b></font> <font color="purple"><b>(</b></font> <a href="#FL_Property">FL_Property</a> <font color="purple"><b>)</b></font> <font color="purple"><b>:</b></font>   
        | <font color="purple"><b>next_event!</b></font> <font color="purple"><b>(</b></font> <a href="#Boolean">Boolean</a> <font color="purple"><b>)</b></font> <font color="purple"><b>(</b></font> <a href="#FL_Property">FL_Property</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>next_event</b></font> <font color="purple"><b>(</b></font> <a href="#Boolean">Boolean</a> <font color="purple"><b>)</b></font> <font color="purple"><b>(</b></font> <a href="#FL_Property">FL_Property</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>next_event!</b></font> <font color="purple"><b>(</b></font> <a href="#Boolean">Boolean</a> <font color="purple"><b>)</b></font>  \[ <a href="#positive_Number">positive_Number</a>  ]  <font color="purple"><b>(</b></font> <a href="#FL_Property">FL_Property</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>next_event</b></font> <font color="purple"><b>(</b></font> <a href="#Boolean">Boolean</a> <font color="purple"><b>)</b></font>  \[ <a href="#positive_Number">positive_Number</a>  ]  <font color="purple"><b>(</b></font> <a href="#FL_Property">FL_Property</a> <font color="purple"><b>)</b></font> <font color="purple"><b>:</b></font>   
        | <font color="purple"><b>next_event_a!</b></font> <font color="purple"><b>(</b></font> <a href="#Boolean">Boolean</a> <font color="purple"><b>)</b></font>  \[ <a href="#finite_positive_Range">finite_positive_Range</a>  ]  <font color="purple"><b>(</b></font> <a href="#FL_Property">FL_Property</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>next_event_a</b></font> <font color="purple"><b>(</b></font> <a href="#Boolean">Boolean</a> <font color="purple"><b>)</b></font>  \[ <a href="#finite_positive_Range">finite_positive_Range</a>  ]  <font color="purple"><b>(</b></font> <a href="#FL_Property">FL_Property</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>next_event_e!</b></font> <font color="purple"><b>(</b></font> <a href="#Boolean">Boolean</a> <font color="purple"><b>)</b></font>  \[ <a href="#finite_positive_Range">finite_positive_Range</a>  ]  <font color="purple"><b>(</b></font> <a href="#FL_Property">FL_Property</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>next_event_e</b></font> <font color="purple"><b>(</b></font> <a href="#Boolean">Boolean</a> <font color="purple"><b>)</b></font>  \[ <a href="#finite_positive_Range">finite_positive_Range</a>  ]  <font color="purple"><b>(</b></font> <a href="#FL_Property">FL_Property</a> <font color="purple"><b>)</b></font>   
        |  { <a href="#Sequence">Sequence</a>  }  <font color="purple"><b>(</b></font> <a href="#FL_Property">FL_Property</a> <font color="purple"><b>)</b></font>   
        | <a href="#Sequence">Sequence</a> <font color="purple"><b>|-></b></font> <a href="#FL_Property">FL_Property</a>   
        | <a href="#Sequence">Sequence</a> <font color="purple"><b>|=></b></font> <a href="#FL_Property">FL_Property</a> 
  
### A.4.5 Sequential Extended Regular Expressions (SEREs)
  
**SERE**{: #SERE }
:	<a href="#Boolean">Boolean</a>   
        | <a href="#Sequence">Sequence</a>   
        | <a href="#Sequence_Instance">Sequence_Instance</a>   
        | <a href="#SERE">SERE</a> <font color="purple"><b>;</b></font> <a href="#SERE">SERE</a>   
        | <a href="#SERE">SERE</a> <font color="purple"><b>:</b></font> <a href="#SERE">SERE</a>   
        | <a href="#Compound_SERE">Compound_SERE</a> 
  
**Compound_SERE**{: #Compound_SERE }
:	<a href="#Repeated_SERE">Repeated_SERE</a>   
        | <a href="#Braced_SERE">Braced_SERE</a>   
        | <a href="#Clocked_SERE">Clocked_SERE</a>   
        | <a href="#Compound_SERE">Compound_SERE</a> <font color="purple"><b>|</b></font> <a href="#Compound_SERE">Compound_SERE</a>   
        | <a href="#Compound_SERE">Compound_SERE</a> <font color="purple"><b>&</b></font> <a href="#Compound_SERE">Compound_SERE</a>   
        | <a href="#Compound_SERE">Compound_SERE</a> <font color="purple"><b>&&</b></font> <a href="#Compound_SERE">Compound_SERE</a>   
        | <a href="#Compound_SERE">Compound_SERE</a> <font color="purple"><b>within</b></font> <a href="#Compound_SERE">Compound_SERE</a> 
  
### A.4.6 Sequences
  
**Sequence**{: #Sequence }
:	<a href="#Sequence_Instance">Sequence_Instance</a>   
        | <a href="#Repeated_SERE">Repeated_SERE</a>   
        | <a href="#Braced_SERE">Braced_SERE</a>   
        | <a href="#Clocked_SERE">Clocked_SERE</a> 
  
**Repeated_SERE**{: #Repeated_SERE }
:	<a href="#Boolean">Boolean</a> <font color="purple"><b>\[\*</b></font>  \[ <a href="#Count">Count</a>  ]  <font color="purple"><b>]</b></font>   
        | <a href="#Sequence">Sequence</a> <font color="purple"><b>\[\*</b></font>  \[ <a href="#Count">Count</a>  ]  <font color="purple"><b>]</b></font>   
        | <font color="purple"><b>\[\*</b></font>  \[ <a href="#Count">Count</a>  ]  <font color="purple"><b>]</b></font>   
        | <a href="#Boolean">Boolean</a> <font color="purple"><b>\[+]</b></font>   
        | <a href="#Sequence">Sequence</a> <font color="purple"><b>\[+]</b></font>   
        | <font color="purple"><b>\[+]</b></font>   
        | <a href="#Boolean">Boolean</a> <font color="purple"><b>\[=</b></font> <a href="#Count">Count</a> <font color="purple"><b>]</b></font>   
        | <a href="#Boolean">Boolean</a> <font color="purple"><b>\[-></b></font>  \[ <a href="#positive_Count">positive_Count</a>  ]  <font color="purple"><b>]</b></font> 
  
**Braced_SERE**{: #Braced_SERE }
:	<font color="purple"><b>{</b></font> <a href="#SERE">SERE</a> <font color="purple"><b>}</b></font> 
  
**Sequence_Instance**{: #Sequence_Instance }
:	<a href="#sequence_Name">sequence_Name</a>  \[ <font color="purple"><b>(</b></font> <a href="#Actual_Parameter_List">Actual_Parameter_List</a> <font color="purple"><b>)</b></font>  ]  
  
**Clocked_SERE**{: #Clocked_SERE }
:	<a href="#Braced_SERE">Braced_SERE</a> <font color="purple"><b>@</b></font> <a href="#Clock_Expression">Clock_Expression</a> 
  
**Count**{: #Count }
:	<a href="#Number">Number</a>   
        | <a href="#Range">Range</a> 
  
**FiniteRange**{: #FiniteRange }
:	<a href="#Range">Range</a> 
  
**Range**{: #Range }
:	<a href="#Low_Bound">Low_Bound</a> <a href="#RANGE_SYM">RANGE_SYM</a> <a href="#High_Bound">High_Bound</a> 
  
**Low_Bound**{: #Low_Bound }
:	<a href="#Number">Number</a>   
        | <a href="#MIN_VAL">MIN_VAL</a> 
  
**High_Bound**{: #High_Bound }
:	<a href="#Number">Number</a>   
        | <a href="#MAX_VAL">MAX_VAL</a> 
  
### A.4.7 Forms of expression
  
**Any_Type**{: #Any_Type }
:	<a href="#HDL_or_PSL_Expression">HDL_or_PSL_Expression</a> 
  
**Bit**{: #Bit }
:	<a href="#HDL_or_PSL_Expression">HDL_or_PSL_Expression</a> 
  
**Boolean**{: #Boolean }
:	<a href="#HDL_or_PSL_Expression">HDL_or_PSL_Expression</a> 
  
**BitVector**{: #BitVector }
:	<a href="#HDL_or_PSL_Expression">HDL_or_PSL_Expression</a> 
  
**Number**{: #Number }
:	<a href="#numeric_HDL_or_PSL_Expression">numeric_HDL_or_PSL_Expression</a> 
  
**String**{: #String }
:	<a href="#string_HDL_or_PSL_Expression">string_HDL_or_PSL_Expression</a> 
  
**HDL_or_PSL_Expression**{: #HDL_or_PSL_Expression }
:	<a href="#HDL_Expression">HDL_Expression</a>   
        | <a href="#PSL_Expression">PSL_Expression</a>   
        | <a href="#Built_In_Function_Call">Built_In_Function_Call</a>   
        | <a href="#Union_Expression">Union_Expression</a>   
        | <a href="#Endpoint_Instance">Endpoint_Instance</a> 
  
**HDL_Expression**{: #HDL_Expression }
:	<a href="#HDL_EXPR">HDL_EXPR</a> 
  
**PSL_Expression**{: #PSL_Expression }
:	<a href="#Boolean">Boolean</a> <font color="purple"><b>-></b></font> <a href="#Boolean">Boolean</a>   
        | <a href="#Boolean">Boolean</a> <font color="purple"><b><-></b></font> <a href="#Boolean">Boolean</a> 
  
**Built_In_Function_Call**{: #Built_In_Function_Call }
:	<font color="purple"><b>prev</b></font> <font color="purple"><b>(</b></font> <a href="#Any_Type">Any_Type</a>  \[ <font color="purple"><b>,</b></font> <a href="#Number">Number</a>  ]  <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>next</b></font> <font color="purple"><b>(</b></font> <a href="#Any_Type">Any_Type</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>stable</b></font> <font color="purple"><b>(</b></font> <a href="#Any_Type">Any_Type</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>rose</b></font> <font color="purple"><b>(</b></font> <a href="#Bit">Bit</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>fell</b></font> <font color="purple"><b>(</b></font> <a href="#Bit">Bit</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>isunknown</b></font> <font color="purple"><b>(</b></font> <a href="#BitVector">BitVector</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>countones</b></font> <font color="purple"><b>(</b></font> <a href="#BitVector">BitVector</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>onehot</b></font> <font color="purple"><b>(</b></font> <a href="#BitVector">BitVector</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>onehot0</b></font> <font color="purple"><b>(</b></font> <a href="#BitVector">BitVector</a> <font color="purple"><b>)</b></font> 
  
**Union_Expression**{: #Union_Expression }
:	<a href="#Any_Type">Any_Type</a> <font color="purple"><b>union</b></font> <a href="#Any_Type">Any_Type</a> 
  
**Endpoint_Instance**{: #Endpoint_Instance }
:	<a href="#endpoint_Name">endpoint_Name</a>  \[ <font color="purple"><b>(</b></font> <a href="#Actual_Parameter_List">Actual_Parameter_List</a> <font color="purple"><b>)</b></font>  ]  
  
##A.4.8 Optional branching extension
  
**OBE_Property**{: #OBE_Property }
:	<a href="#Boolean">Boolean</a>   
        | <font color="purple"><b>(</b></font> <a href="#OBE_Property">OBE_Property</a> <font color="purple"><b>)</b></font>   
        | <a href="#property_Name">property_Name</a>  \[ <font color="purple"><b>(</b></font> <a href="#Actual_Parameter_List">Actual_Parameter_List</a> <font color="purple"><b>)</b></font>  ]    
        | <a href="#NOT_OP">NOT_OP</a> <a href="#OBE_Property">OBE_Property</a>   
        | <a href="#OBE_Property">OBE_Property</a> <a href="#AND_OP">AND_OP</a> <a href="#OBE_Property">OBE_Property</a>   
        | <a href="#OBE_Property">OBE_Property</a> <a href="#OR_OP">OR_OP</a> <a href="#OBE_Property">OBE_Property</a>   
        | <a href="#OBE_Property">OBE_Property</a> <font color="purple"><b>-></b></font> <a href="#OBE_Property">OBE_Property</a>   
        | <a href="#OBE_Property">OBE_Property</a> <font color="purple"><b><-></b></font> <a href="#OBE_Property">OBE_Property</a>   
        | <font color="purple"><b>AX</b></font> <a href="#OBE_Property">OBE_Property</a>   
        | <font color="purple"><b>AG</b></font> <a href="#OBE_Property">OBE_Property</a>   
        | <font color="purple"><b>AF</b></font> <a href="#OBE_Property">OBE_Property</a>   
        | <font color="purple"><b>A</b></font>  \[ <a href="#OBE_Property">OBE_Property</a> <font color="purple"><b>U</b></font> <a href="#OBE_Property">OBE_Property</a>  ]    
        | <font color="purple"><b>EX</b></font> <a href="#OBE_Property">OBE_Property</a>   
        | <font color="purple"><b>EG</b></font> <a href="#OBE_Property">OBE_Property</a>   
        | <font color="purple"><b>EF</b></font> <a href="#OBE_Property">OBE_Property</a>   
        | <font color="purple"><b>E</b></font>  \[ <a href="#OBE_Property">OBE_Property</a> <font color="purple"><b>U</b></font> <a href="#OBE_Property">OBE_Property</a>  ]  
  
**DEF_SYM**{: #DEF_SYM }
:	<font color="purple"><b>is</b></font> 
  
**RANGE_SYM**{: #RANGE_SYM }
:	<font color="purple"><b>to</b></font> 
  
**AND_OP**{: #AND_OP }
:	<font color="purple"><b>and</b></font> 
  
**OR_OP**{: #OR_OP }
:	<font color="purple"><b>or</b></font> 
  
**NOT_OP**{: #NOT_OP }
:	<font color="purple"><b>not</b></font> 
  
**string_HDL_or_PSL_Expression**{: #string_HDL_or_PSL_Expression }
:	<a href="#Expression">Expression</a> 
  
**VHDL_Identifier**{: #VHDL_Identifier }
:	<a href="#Identifier">Identifier</a> 
  
**Verilog_Identifier**{: #Verilog_Identifier }
:	<a href="#Identifier">Identifier</a> 
  
**PSL_Identifier**{: #PSL_Identifier }
:	<a href="#Identifier">Identifier</a> 
  
**SystemVerilog_Identifier**{: #SystemVerilog_Identifier }
:	<a href="#Identifier">Identifier</a> 
  
**GDL_Identifier**{: #GDL_Identifier }
:	<a href="#Identifier">Identifier</a> 
  
**MIN_VAL**{: #MIN_VAL }
:	<em>external</em> 
  
**MAX_VAL**{: #MAX_VAL }
:	<em>external</em> 
  
**HDL_UNIT**{: #HDL_UNIT }
:	<em>designUnit</em> 
  
**HDL_MOD_NAME**{: #HDL_MOD_NAME }
:	<em>module</em> 
  
**HDL_DECL**{: #HDL_DECL }
:	<em>DeclarativeItem</em> 
  
**HDL_STMT**{: #HDL_STMT }
:	<em>ConcurrentStatement</em> 
  
**HDL_RANGE**{: #HDL_RANGE }
:	<em>range_attribute_name</em> 
  
**LEFT_SYM**{: #LEFT_SYM }
:	<font color="purple"><b>(</b></font> 
  
**RIGHT_SYM**{: #RIGHT_SYM }
:	<font color="purple"><b>)</b></font> 
  
**boolean_Built_In_Function_Call**{: #boolean_Built_In_Function_Call }
:	<a href="#Built_In_Function_Call">Built_In_Function_Call</a> 
  
**positive_Count**{: #positive_Count }
:	<a href="#Count">Count</a> 
  
**positive_Number**{: #positive_Number }
:	<a href="#Number">Number</a> 
  
**finite_Range**{: #finite_Range }
:	<a href="#Range">Range</a> 
  
**finite_positive_Range**{: #finite_positive_Range }
:	<a href="#Range">Range</a> 
  
**numeric_HDL_or_PSL_Expression**{: #numeric_HDL_or_PSL_Expression }
:	<a href="#Expression">Expression</a> 
  
**HDL_CLK_EXPR**{: #HDL_CLK_EXPR }
:	<a href="#Expression">Expression</a> 
  
**HDL_EXPR**{: #HDL_EXPR }
:	<a href="#Expression">Expression</a> 
  
##Names
  
**sequence_Name**{: #sequence_Name }
:	<a href="#Name">Name</a> 
  
**boolean_Name**{: #boolean_Name }
:	<a href="#Name">Name</a> 
  
**vunit_Name**{: #vunit_Name }
:	<a href="#Name">Name</a> 
  
**instance_Name**{: #instance_Name }
:	<a href="#Name">Name</a> 
  
**endpoint_Name**{: #endpoint_Name }
:	<a href="#Name">Name</a> 
  
**property_Name**{: #property_Name }
:	<a href="#Name">Name</a> 
  
**Expression**{: #Expression }
:	<em>Expression</em> 
  
**Identifier**{: #Identifier }
:	<em>ID</em> 
