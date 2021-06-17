---
title: "Property Specification Language (PSL) Grammar"
layout: page
pager: true
author: Sigasi
date: 2017-02-02
comments: true
tags:
  - PSL
  - ebnf
---
<em> IEEE Std 1850-2010 </em>  
<em>

<em>
This document is copyrighted by the IEEE. It is made available for a wide variety of both public and private uses. These include both use, by reference, in laws and regulations, and use in private self-regulation, standardization, and the promotion of engineering practices and methods. By making this document available for use and adoption by public authorities and private users, the IEEE does not waive any rights in copyright to this document.
</em>

Get the full Language Reference Manual, at <https://standards.ieee.org/findstds/standard/1850-2010.html>

Sigasi has created this browsable version of the grammar, hoping that it would be useful to you, but without any warranty whatsoever.

[More browsable grammars of Hardware Description and Verification languages](/tags/ebnf).

</em>  
## A.4 Syntax productions
  
<em> The rest of this section defines the PSL syntax.</em>  
### A.4.1 Verification units
  
<a name="PSL_Specification"></a>**PSL\_Specification**
:  { <a href="#Verification_Item">Verification\_Item</a> }
  
<a name="Verification_Item"></a>**Verification\_Item**
:  <a href="#HDL_UNIT">HDL\_UNIT</a>  
        | <a href="#Verification_Unit">Verification\_Unit</a>
  
<a name="Verification_Unit"></a>**Verification\_Unit**
:  <a href="#Vunit_Type">Vunit\_Type</a> <em>PSL\_</em><a href="#Identifier">Identifier</a>  \[ <font color="purple"><b>(</b></font> <a href="#Hierarchical_HDL_Name">Hierarchical\_HDL\_Name</a> <font color="purple"><b>)</b></font> ]  <font color="purple"><b>{</b></font>  { <a href="#Inherit_Spec">Inherit\_Spec</a> }   { <a href="#Override_Spec">Override\_Spec</a> }   { <a href="#VUnit_Item">VUnit\_Item</a> }  <font color="purple"><b>}</b></font>
  
<a name="Vunit_Type"></a>**Vunit\_Type**
:  <font color="purple"><b>vunit</b></font>  
        | <font color="purple"><b>vpkg</b></font>  
        | <font color="purple"><b>vprop</b></font>  
        | <font color="purple"><b>vmode</b></font>
  
<a name="Context_Spec"></a>**Context\_Spec**
:  <a href="#Binding_Spec">Binding\_Spec</a>  
        | <a href="#Formal_Parameter_List">Formal\_Parameter\_List</a>
  
<a name="Binding_Spec"></a>**Binding\_Spec**
:  <a href="#Hierarchical_HDL_Name">Hierarchical\_HDL\_Name</a>
  
<a name="Hierarchical_HDL_Name"></a>**Hierarchical\_HDL\_Name**
:  <a href="#HDL_Module_Name">HDL\_Module\_Name</a>  { <a href="#Path_Separator">Path\_Separator</a> <em>instance\_</em><a href="#Name">Name</a> }
  
<a name="HDL_Module_Name"></a>**HDL\_Module\_Name**
:  <em>HDL\_Module\_</em><a href="#Name">Name</a>  \[ <font color="purple"><b>(</b></font> <em>HDL\_Module\_</em><a href="#Name">Name</a> <font color="purple"><b>)</b></font> ]
  
<a name="Path_Separator"></a>**Path\_Separator**
:  <font color="purple"><b>.</b></font>  
        | <font color="purple"><b>/</b></font>
  
<em>Instance\_</em>  
<a name="Name"></a>**Name**
:  <a href="#HDL_or_PSL_Identifier">HDL\_or\_PSL\_Identifier</a>
  
<a name="Inherit_Spec"></a>**Inherit\_Spec**
:  \[ <font color="purple"><b>nontransitive</b></font> ]  <font color="purple"><b>inherit</b></font> <em>vunit\_</em><a href="#Name">Name</a>  { <font color="purple"><b>,</b></font> <em>vunit\_</em><a href="#Name">Name</a> }  <font color="purple"><b>;</b></font>
  
<a name="VUnit_Item"></a>**VUnit\_Item**
:  <a href="#HDL_DECL">HDL\_DECL</a>  
        | <a href="#HDL_STMT">HDL\_STMT</a>  
        | <a href="#PSL_Declaration">PSL\_Declaration</a>  
        | <a href="#PSL_Directive">PSL\_Directive</a>  
        | <a href="#Vunit_Instance">Vunit\_Instance</a>
  
<a name="Vunit_Instance"></a>**Vunit\_Instance**
:  <a href="#Label">Label</a> <font color="purple"><b>:</b></font> <a href="#Vunit_Type">Vunit\_Type</a> <em>vunit\_</em><a href="#Name">Name</a>  \[ <font color="purple"><b>(</b></font> <a href="#Actual_Parameter_List">Actual\_Parameter\_List</a> <font color="purple"><b>)</b></font> ]  <font color="purple"><b>;</b></font>
  
<a name="Override_Spec"></a>**Override\_Spec**
:  <font color="purple"><b>override</b></font> <a href="#Name_List">Name\_List</a> <font color="purple"><b>;</b></font>
  
<a name="Name_List"></a>**Name\_List**
:  <a href="#Name">Name</a>  { <font color="purple"><b>,</b></font> <a href="#Name">Name</a> }
  
<a name="Formal_Parameter_List"></a>**Formal\_Parameter\_List**
:  <a href="#Formal_Parameter">Formal\_Parameter</a>  { <font color="purple"><b>;</b></font> <a href="#Formal_Parameter">Formal\_Parameter</a> }
  
### A.4.2 PSL declarations
  
<a name="PSL_Declaration"></a>**PSL\_Declaration**
:  <a href="#Property_Declaration">Property\_Declaration</a>  
        | <a href="#Sequence_Declaration">Sequence\_Declaration</a>  
        | <a href="#Clock_Declaration">Clock\_Declaration</a>
  
<a name="Property_Declaration"></a>**Property\_Declaration**
:  <font color="purple"><b>property</b></font> <em>PSL\_</em><a href="#Identifier">Identifier</a>  \[ <font color="purple"><b>(</b></font> <a href="#Formal_Parameter_List">Formal\_Parameter\_List</a> <font color="purple"><b>)</b></font> ]  <a href="#DEF_SYM">DEF\_SYM</a> <a href="#Property">Property</a> <font color="purple"><b>;</b></font>
  
<a name="Formal_Parameter_List"></a>**Formal\_Parameter\_List**
:  <a href="#Formal_Parameter">Formal\_Parameter</a>  { <font color="purple"><b>;</b></font> <a href="#Formal_Parameter">Formal\_Parameter</a> }
  
<a name="Formal_Parameter"></a>**Formal\_Parameter**
:  <a href="#Param_Spec">Param\_Spec</a> <em>PSL\_</em><a href="#Identifier">Identifier</a>  { <font color="purple"><b>,</b></font> <em>PSL\_</em><a href="#Identifier">Identifier</a> }
  
<a name="Param_Spec"></a>**Param\_Spec**
:  <font color="purple"><b>const</b></font>  
        | \[ <font color="purple"><b>const</b></font> | <font color="purple"><b>mutable</b></font> ]  <a href="#Value_Parameter">Value\_Parameter</a>  
        | <font color="purple"><b>sequence</b></font>  
        | <font color="purple"><b>property</b></font>
  
<a name="Value_Parameter"></a>**Value\_Parameter**
:  <a href="#HDL_Type">HDL\_Type</a>  
        | <a href="#PSL_Type_Class">PSL\_Type\_Class</a>
  
<a name="HDL_Type"></a>**HDL\_Type**
:  <font color="purple"><b>hdltype</b></font> <a href="#HDL_VARIABLE_TYPE">HDL\_VARIABLE\_TYPE</a>
  
<a name="PSL_Type_Class"></a>**PSL\_Type\_Class**
:  <font color="purple"><b>boolean</b></font>  
        | <font color="purple"><b>bit</b></font>  
        | <font color="purple"><b>bitvector</b></font>  
        | <font color="purple"><b>numeric</b></font>  
        | <font color="purple"><b>string</b></font>
  
<a name="Sequence_Declaration"></a>**Sequence\_Declaration**
:  <font color="purple"><b>sequence</b></font> <em>PSL\_</em><a href="#Identifier">Identifier</a>  \[ <font color="purple"><b>(</b></font> <a href="#Formal_Parameter_List">Formal\_Parameter\_List</a> <font color="purple"><b>)</b></font> ]  <a href="#DEF_SYM">DEF\_SYM</a> <a href="#Sequence">Sequence</a> <font color="purple"><b>;</b></font>
  
<a name="Clock_Declaration"></a>**Clock\_Declaration**
:  <font color="purple"><b>default</b></font> <font color="purple"><b>clock</b></font> <a href="#DEF_SYM">DEF\_SYM</a> <a href="#Clock_Expression">Clock\_Expression</a> <font color="purple"><b>;</b></font>
  
<a name="Clock_Expression"></a>**Clock\_Expression**
:  <em>boolean\_</em><a href="#Name">Name</a>  
        | <em>boolean\_</em><a href="#Built_In_Function_Call">Built\_In\_Function\_Call</a>  
        | <font color="purple"><b>(</b></font> <a href="#Boolean">Boolean</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>(</b></font> <a href="#HDL_CLK_EXPR">HDL\_CLK\_EXPR</a> <font color="purple"><b>)</b></font>
  
<a name="Actual_Parameter_List"></a>**Actual\_Parameter\_List**
:  <a href="#Actual_Parameter">Actual\_Parameter</a>  { <font color="purple"><b>,</b></font> <a href="#Actual_Parameter">Actual\_Parameter</a> }
  
<a name="Actual_Parameter"></a>**Actual\_Parameter**
:  <a href="#Any_Type">Any\_Type</a>  
        | <a href="#Number">Number</a>  
        | <a href="#Boolean">Boolean</a>  
        | <a href="#Property">Property</a>  
        | <a href="#Sequence">Sequence</a>
  
### A.4.3 PSL directives
  
<a name="PSL_Directive"></a>**PSL\_Directive**
:  \[ <a href="#Label">Label</a> <font color="purple"><b>:</b></font> ]  <a href="#Verification_Directive">Verification\_Directive</a>
  
<a name="Label"></a>**Label**
:  <em>PSL\_</em><a href="#Identifier">Identifier</a>
  
<a name="HDL_or_PSL_Identifier"></a>**HDL\_or\_PSL\_Identifier**
:  <em>SystemVerilog\_</em><a href="#Identifier">Identifier</a>  
        | <em>Verilog\_</em><a href="#Identifier">Identifier</a>  
        | <em>VHDL\_</em><a href="#Identifier">Identifier</a>  
        | <em>SystemC\_</em><a href="#Identifier">Identifier</a>  
        | <em>GDL\_</em><a href="#Identifier">Identifier</a>  
        | <em>PSL\_</em><a href="#Identifier">Identifier</a>
  
<a name="Verification_Directive"></a>**Verification\_Directive**
:  <a href="#Assert_Directive">Assert\_Directive</a>  
        | <a href="#Assume_Directive">Assume\_Directive</a>  
        | <a href="#Restrict_Directive">Restrict\_Directive</a>  
        | <a href="#Restrict_Guarantee_Directive">Restrict\_Guarantee\_Directive</a>  
        | <a href="#Cover_Directive">Cover\_Directive</a>  
        | <a href="#Fairness_Statement">Fairness\_Statement</a>
  
<a name="Assert_Directive"></a>**Assert\_Directive**
:  <font color="purple"><b>assert</b></font> <a href="#Property">Property</a>  \[ <font color="purple"><b>report</b></font> <a href="#String">String</a> ]  <font color="purple"><b>;</b></font>
  
<a name="Assume_Directive"></a>**Assume\_Directive**
:  <font color="purple"><b>assume</b></font> <a href="#Property">Property</a> <font color="purple"><b>;</b></font>
  
<a name="Restrict_Directive"></a>**Restrict\_Directive**
:  <font color="purple"><b>restrict</b></font> <a href="#Sequence">Sequence</a> <font color="purple"><b>;</b></font>
  
<a name="Restrict_Guarantee_Directive"></a>**Restrict\_Guarantee\_Directive**
:  <font color="purple"><b>restrict!</b></font> <a href="#Sequence">Sequence</a> <font color="purple"><b>;</b></font>
  
<a name="Cover_Directive"></a>**Cover\_Directive**
:  <font color="purple"><b>cover</b></font> <a href="#Sequence">Sequence</a>  \[ <font color="purple"><b>report</b></font> <a href="#String">String</a> ]  <font color="purple"><b>;</b></font>
  
<a name="Fairness_Statement"></a>**Fairness\_Statement**
:  <font color="purple"><b>fairness</b></font> <a href="#Boolean">Boolean</a> <font color="purple"><b>;</b></font>  
        | <font color="purple"><b>strong</b></font> <font color="purple"><b>fairness</b></font> <a href="#Boolean">Boolean</a> <font color="purple"><b>,</b></font> <a href="#Boolean">Boolean</a> <font color="purple"><b>;</b></font>
  
### A.4.4 PSL properties
  
<a name="Property"></a>**Property**
:  <a href="#Replicator">Replicator</a> <a href="#Property">Property</a>  
        | <a href="#FL_Property">FL\_Property</a>  
        | <a href="#OBE_Property">OBE\_Property</a>
  
<a name="Replicator"></a>**Replicator**
:  <font color="purple"><b>forall</b></font> <a href="#Parameter_Definition">Parameter\_Definition</a> <font color="purple"><b>:</b></font>
  
<a name="Index_Range"></a>**Index\_Range**
:  <a href="#LEFT_SYM">LEFT\_SYM</a> <em>finite\_</em><a href="#Range">Range</a> <a href="#RIGHT_SYM">RIGHT\_SYM</a>  
        | <font color="purple"><b>(</b></font> <a href="#HDL_RANGE">HDL\_RANGE</a> <font color="purple"><b>)</b></font>
  
<a name="Value_Set"></a>**Value\_Set**
:  <font color="purple"><b>{</b></font> <a href="#Value_Range">Value\_Range</a>  { <font color="purple"><b>,</b></font> <a href="#Value_Range">Value\_Range</a> }  <font color="purple"><b>}</b></font>  
        | <font color="purple"><b>boolean</b></font>
  
<a name="Value_Range"></a>**Value\_Range**
:  <a href="#Value">Value</a>  
        | <em>finite\_</em><a href="#Range">Range</a>
  
<a name="Value"></a>**Value**
:  <a href="#Boolean">Boolean</a>  
        | <a href="#Number">Number</a>
  
<a name="Proc_Block"></a>**Proc\_Block**
:  <font color="purple"><b>\[\[</b></font> <a href="#Proc_Block_Item">Proc\_Block\_Item</a>  { <a href="#Proc_Block_Item">Proc\_Block\_Item</a> }  <font color="purple"><b>]]</b></font>
  
<a name="Proc_Block_Item"></a>**Proc\_Block\_Item**
:  <a href="#HDL_DECL">HDL\_DECL</a>  
        | <a href="#HDL_SEQ_STMT">HDL\_SEQ\_STMT</a>
  
<a name="FL_Property"></a>**FL\_Property**
:  <a href="#Boolean">Boolean</a>  
        | <font color="purple"><b>(</b></font>  \[ <font color="purple"><b>\[\[</b></font> <a href="#HDL_DECL">HDL\_DECL</a>  { <font color="purple"><b>,</b></font> <a href="#HDL_DECL">HDL\_DECL</a> }  <font color="purple"><b>]]</b></font> ]  <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>)</b></font>  
        | <a href="#Sequence">Sequence</a>  \[ <font color="purple"><b>!</b></font> ]  
        | <em>FL\_property\_</em><a href="#Name">Name</a>  \[ <font color="purple"><b>(</b></font> <a href="#Actual_Parameter_List">Actual\_Parameter\_List</a> <font color="purple"><b>)</b></font> ]  
        | <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>@</b></font> <a href="#Clock_Expression">Clock\_Expression</a>  
        | <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>abort</b></font> <a href="#Boolean">Boolean</a>  
        | <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>async\_abort</b></font> <a href="#Boolean">Boolean</a>  
        | <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>sync\_abort</b></font> <a href="#Boolean">Boolean</a>  
        | <a href="#Parameterized_Property">Parameterized\_Property</a> <em>: Logical Operators  :</em>  
        | <a href="#NOT_OP">NOT\_OP</a> <a href="#FL_Property">FL\_Property</a>  
        | <a href="#FL_Property">FL\_Property</a> <a href="#AND_OP">AND\_OP</a> <a href="#FL_Property">FL\_Property</a>  
        | <a href="#FL_Property">FL\_Property</a> <a href="#OR_OP">OR\_OP</a> <a href="#FL_Property">FL\_Property</a> <em>':'</em>  
        | <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>-&gt;</b></font> <a href="#FL_Property">FL\_Property</a>  
        | <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>&lt;-&gt;</b></font> <a href="#FL_Property">FL\_Property</a> <em>: Primitive LTL Operators  :</em>  
        | <font color="purple"><b>X</b></font> <a href="#FL_Property">FL\_Property</a>  
        | <font color="purple"><b>X!</b></font> <a href="#FL_Property">FL\_Property</a>  
        | <font color="purple"><b>F</b></font> <a href="#FL_Property">FL\_Property</a>  
        | <font color="purple"><b>G</b></font> <a href="#FL_Property">FL\_Property</a>  
        | <font color="purple"><b>\[</b></font> <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>U</b></font> <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>]</b></font>  
        | <font color="purple"><b>\[</b></font> <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>W</b></font> <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>]</b></font> <em>: Simple Temporal Operators  :</em>  
        | <font color="purple"><b>always</b></font> <a href="#FL_Property">FL\_Property</a>  
        | <font color="purple"><b>never</b></font> <a href="#FL_Property">FL\_Property</a>  
        | <font color="purple"><b>next</b></font> <a href="#FL_Property">FL\_Property</a>  
        | <font color="purple"><b>next!</b></font> <a href="#FL_Property">FL\_Property</a>  
        | <font color="purple"><b>eventually!</b></font> <a href="#FL_Property">FL\_Property</a> <em>':'</em>  
        | <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>until!</b></font> <a href="#FL_Property">FL\_Property</a>  
        | <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>until</b></font> <a href="#FL_Property">FL\_Property</a>  
        | <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>until!\_</b></font> <a href="#FL_Property">FL\_Property</a>  
        | <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>until\_</b></font> <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>:</b></font> <em>':'</em>  
        | <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>before!</b></font> <a href="#FL_Property">FL\_Property</a>  
        | <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>before</b></font> <a href="#FL_Property">FL\_Property</a>  
        | <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>before!\_</b></font> <a href="#FL_Property">FL\_Property</a>  
        | <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>before\_</b></font> <a href="#FL_Property">FL\_Property</a> <em>: Extended Next (Event) Operators :</em>  
        | <font color="purple"><b>X</b></font> <font color="purple"><b>\[</b></font> <a href="#Number">Number</a> <font color="purple"><b>]</b></font> <font color="purple"><b>(</b></font> <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>X!</b></font> <font color="purple"><b>\[</b></font> <a href="#Number">Number</a> <font color="purple"><b>]</b></font> <font color="purple"><b>(</b></font> <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>next</b></font> <font color="purple"><b>\[</b></font> <a href="#Number">Number</a> <font color="purple"><b>]</b></font> <font color="purple"><b>(</b></font> <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>next!</b></font> <font color="purple"><b>\[</b></font> <a href="#Number">Number</a> <font color="purple"><b>]</b></font> <font color="purple"><b>(</b></font> <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>)</b></font> <em>':(see A.4.7)</em>  
        | <font color="purple"><b>next\_a</b></font> <font color="purple"><b>\[</b></font> <em>finite\_</em><a href="#Range">Range</a> <font color="purple"><b>]</b></font> <font color="purple"><b>(</b></font> <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>next\_a!</b></font> <font color="purple"><b>\[</b></font> <em>finite\_</em><a href="#Range">Range</a> <font color="purple"><b>]</b></font> <font color="purple"><b>(</b></font> <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>next\_e</b></font> <font color="purple"><b>\[</b></font> <em>finite\_</em><a href="#Range">Range</a> <font color="purple"><b>]</b></font> <font color="purple"><b>(</b></font> <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>next\_e!</b></font> <font color="purple"><b>\[</b></font> <em>finite\_</em><a href="#Range">Range</a> <font color="purple"><b>]</b></font> <font color="purple"><b>(</b></font> <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>)</b></font> <em>':'</em>  
        | <font color="purple"><b>next\_event!</b></font> <font color="purple"><b>(</b></font> <a href="#Boolean">Boolean</a> <font color="purple"><b>)</b></font> <font color="purple"><b>(</b></font> <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>next\_event</b></font> <font color="purple"><b>(</b></font> <a href="#Boolean">Boolean</a> <font color="purple"><b>)</b></font> <font color="purple"><b>(</b></font> <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>next\_event!</b></font> <font color="purple"><b>(</b></font> <a href="#Boolean">Boolean</a> <font color="purple"><b>)</b></font>  \[ <em>positive\_</em><a href="#Number">Number</a> ]  <font color="purple"><b>(</b></font> <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>next\_event</b></font> <font color="purple"><b>(</b></font> <a href="#Boolean">Boolean</a> <font color="purple"><b>)</b></font>  \[ <em>positive\_</em><a href="#Number">Number</a> ]  <font color="purple"><b>(</b></font> <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>)</b></font> <em>':'</em>  
        | <font color="purple"><b>next\_event\_a!</b></font> <font color="purple"><b>(</b></font> <a href="#Boolean">Boolean</a> <font color="purple"><b>)</b></font>  \[ <em>finite\_positive\_</em><a href="#Range">Range</a> ]  <font color="purple"><b>(</b></font> <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>next\_event\_a</b></font> <font color="purple"><b>(</b></font> <a href="#Boolean">Boolean</a> <font color="purple"><b>)</b></font>  \[ <em>finite\_positive\_</em><a href="#Range">Range</a> ]  <font color="purple"><b>(</b></font> <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>next\_event\_e!</b></font> <font color="purple"><b>(</b></font> <a href="#Boolean">Boolean</a> <font color="purple"><b>)</b></font>  \[ <em>finite\_positive\_</em><a href="#Range">Range</a> ]  <font color="purple"><b>(</b></font> <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>next\_event\_e</b></font> <font color="purple"><b>(</b></font> <a href="#Boolean">Boolean</a> <font color="purple"><b>)</b></font>  \[ <em>finite\_positive\_</em><a href="#Range">Range</a> ]  <font color="purple"><b>(</b></font> <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>)</b></font> <em>: Operators on SEREs  :</em>  
        | { <a href="#Sequence">Sequence</a> }  <font color="purple"><b>(</b></font> <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>)</b></font>  
        | <a href="#Sequence">Sequence</a> <font color="purple"><b>|-&gt;</b></font> <a href="#FL_Property">FL\_Property</a>  
        | <a href="#Sequence">Sequence</a> <font color="purple"><b>|=&gt;</b></font> <a href="#FL_Property">FL\_Property</a>
  
### A.4.5 Sequential Extended Regular Expressions (SEREs)
  
<a name="SERE"></a>**SERE**
:  <a href="#Boolean">Boolean</a>  
        | <a href="#Sequence">Sequence</a>  
        | <a href="#Sequence_Instance">Sequence\_Instance</a>  
        | <a href="#SERE">SERE</a> <font color="purple"><b>;</b></font> <a href="#SERE">SERE</a>  
        | <a href="#SERE">SERE</a> <font color="purple"><b>:</b></font> <a href="#SERE">SERE</a>  
        | <a href="#Compound_SERE">Compound\_SERE</a>
  
<a name="Compound_SERE"></a>**Compound\_SERE**
:  <a href="#Repeated_SERE">Repeated\_SERE</a>  
        | <a href="#Braced_SERE">Braced\_SERE</a>  
        | <a href="#Clocked_SERE">Clocked\_SERE</a>  
        | <a href="#Compound_SERE">Compound\_SERE</a> <font color="purple"><b>|</b></font> <a href="#Compound_SERE">Compound\_SERE</a>  
        | <a href="#Compound_SERE">Compound\_SERE</a> <font color="purple"><b>&amp;</b></font> <a href="#Compound_SERE">Compound\_SERE</a>  
        | <a href="#Compound_SERE">Compound\_SERE</a> <font color="purple"><b>&amp;&amp;</b></font> <a href="#Compound_SERE">Compound\_SERE</a>  
        | <a href="#Compound_SERE">Compound\_SERE</a> <font color="purple"><b>within</b></font> <a href="#Compound_SERE">Compound\_SERE</a>  
        | <a href="#Parameterized_SERE">Parameterized\_SERE</a>
  
### A.4.6 Parameterized Properties and SEREs
  
<a name="Parameterized_Property"></a>**Parameterized\_Property**
:  <font color="purple"><b>for</b></font> <a href="#Parameters_Definition">Parameters\_Definition</a> <font color="purple"><b>:</b></font> <a href="#And_Or_Property_Op">And\_Or\_Property\_Op</a> <font color="purple"><b>(</b></font> <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>)</b></font>
  
<a name="Parameterized_SERE"></a>**Parameterized\_SERE**
:  <font color="purple"><b>for</b></font> <a href="#Parameters_Definition">Parameters\_Definition</a> <font color="purple"><b>:</b></font> <a href="#And_Or_SERE_Op">And\_Or\_SERE\_Op</a> <font color="purple"><b>{</b></font> <a href="#SERE">SERE</a> <font color="purple"><b>}</b></font>
  
<a name="Parameters_Definition"></a>**Parameters\_Definition**
:  <a href="#Parameter_Definition">Parameter\_Definition</a>  { <a href="#Parameter_Definition">Parameter\_Definition</a> }
  
<a name="Parameter_Definition"></a>**Parameter\_Definition**
:  <em>PSL\_</em><a href="#Identifier">Identifier</a>  \[ <a href="#Index_Range">Index\_Range</a> ]  <font color="purple"><b>in</b></font> <a href="#Value_Set">Value\_Set</a>
  
<a name="And_Or_Property_Op"></a>**And\_Or\_Property\_Op**
:  <a href="#AND_OP">AND\_OP</a>  
        | <a href="#OR_OP">OR\_OP</a>
  
<a name="And_Or_SERE_Op"></a>**And\_Or\_SERE\_Op**
:  <font color="purple"><b>&amp;&amp;</b></font>  
        | <font color="purple"><b>&amp;</b></font>  
        | <font color="purple"><b>|</b></font>
  
### A.4.7 Sequences
  
<a name="Sequence"></a>**Sequence**
:  <a href="#Sequence_Instance">Sequence\_Instance</a>  
        | <a href="#Repeated_SERE">Repeated\_SERE</a>  
        | <a href="#Braced_SERE">Braced\_SERE</a>  
        | <a href="#Clocked_SERE">Clocked\_SERE</a>  
        | <a href="#Sequence">Sequence</a> <a href="#Proc_Block">Proc\_Block</a>
  
<a name="Repeated_SERE"></a>**Repeated\_SERE**
:  <a href="#Boolean">Boolean</a> <font color="purple"><b>\[\*</b></font>  \[ <a href="#Count">Count</a> ]  <font color="purple"><b>]</b></font>  
        | <a href="#Sequence">Sequence</a> <font color="purple"><b>\[\*</b></font>  \[ <a href="#Count">Count</a> ]  <font color="purple"><b>]</b></font>  
        | <font color="purple"><b>\[\*</b></font>  \[ <a href="#Count">Count</a> ]  <font color="purple"><b>]</b></font>  
        | <a href="#Boolean">Boolean</a> <font color="purple"><b>\[+]</b></font>  
        | <a href="#Sequence">Sequence</a> <font color="purple"><b>\[+]</b></font>  
        | <font color="purple"><b>\[+]</b></font>  
        | <a href="#Boolean">Boolean</a> <font color="purple"><b>\[=</b></font> <a href="#Count">Count</a> <font color="purple"><b>]</b></font>  
        | <a href="#Boolean">Boolean</a> <font color="purple"><b>\[-&gt;</b></font>  \[ <em>positive\_</em><a href="#Count">Count</a> ]  <font color="purple"><b>]</b></font>  
        | <a href="#Boolean">Boolean</a> <a href="#Proc_Block">Proc\_Block</a>  
        | <a href="#Sequence">Sequence</a> <a href="#Proc_Block">Proc\_Block</a>
  
<a name="Braced_SERE"></a>**Braced\_SERE**
:  <font color="purple"><b>{</b></font>  \[ <font color="purple"><b>\[\[</b></font> <a href="#HDL_DECL">HDL\_DECL</a>  { <a href="#HDL_DECL">HDL\_DECL</a> }  <font color="purple"><b>]]</b></font> ]  <a href="#SERE">SERE</a> <font color="purple"><b>}</b></font>  
        | <font color="purple"><b>{</b></font>  \[ <font color="purple"><b>free</b></font> <em>HDL\_</em><a href="#Identifier">Identifier</a>  { <em>HDL\_</em><a href="#Identifier">Identifier</a> } ]  <a href="#SERE">SERE</a> <font color="purple"><b>}</b></font>
  
<a name="Sequence_Instance"></a>**Sequence\_Instance**
:  <em>sequence\_</em><a href="#Name">Name</a>  \[ <font color="purple"><b>(</b></font> <a href="#Actual_Parameter_List">Actual\_Parameter\_List</a> <font color="purple"><b>)</b></font> ]
  
<a name="Clocked_SERE"></a>**Clocked\_SERE**
:  <a href="#Braced_SERE">Braced\_SERE</a> <font color="purple"><b>@</b></font> <a href="#Clock_Expression">Clock\_Expression</a>
  
<a name="Count"></a>**Count**
:  <a href="#Number">Number</a>  
        | <a href="#Range">Range</a>
  
<a name="Range"></a>**Range**
:  <a href="#Low_Bound">Low\_Bound</a> <a href="#RANGE_SYM">RANGE\_SYM</a> <a href="#High_Bound">High\_Bound</a>
  
<a name="Low_Bound"></a>**Low\_Bound**
:  <a href="#Number">Number</a>  
        | <a href="#MIN_VAL">MIN\_VAL</a>
  
<a name="High_Bound"></a>**High\_Bound**
:  <a href="#Number">Number</a>  
        | <a href="#MAX_VAL">MAX\_VAL</a>
  
### A.4.8 Forms of expression
  
<a name="Any_Type"></a>**Any\_Type**
:  <a href="#HDL_or_PSL_Expression">HDL\_or\_PSL\_Expression</a>
  
<a name="Bit"></a>**Bit**
:  <em>bit</em><a href="#HDL_or_PSL_Expression">HDL\_or\_PSL\_Expression</a>
  
<a name="Boolean"></a>**Boolean**
:  <em>boolean</em><a href="#HDL_or_PSL_Expression">HDL\_or\_PSL\_Expression</a>
  
<a name="BitVector"></a>**BitVector**
:  <em>bitvector</em><a href="#HDL_or_PSL_Expression">HDL\_or\_PSL\_Expression</a>
  
<a name="Number"></a>**Number**
:  <em>numeric</em><a href="#HDL_or_PSL_Expression">HDL\_or\_PSL\_Expression</a>
  
<a name="String"></a>**String**
:  <em>string\_</em><a href="#HDL_or_PSL_Expression">HDL\_or\_PSL\_Expression</a>
  
<a name="HDL_or_PSL_Expression"></a>**HDL\_or\_PSL\_Expression**
:  <a href="#HDL_Expression">HDL\_Expression</a>  
        | <a href="#PSL_Expression">PSL\_Expression</a>  
        | <a href="#Built_In_Function_Call">Built\_In\_Function\_Call</a>  
        | <a href="#Union_Expression">Union\_Expression</a>
  
<a name="HDL_Expression"></a>**HDL\_Expression**
:  <a href="#HDL_EXPR">HDL\_EXPR</a>
  
<a name="PSL_Expression"></a>**PSL\_Expression**
:  <a href="#Boolean">Boolean</a> <font color="purple"><b>-&gt;</b></font> <a href="#Boolean">Boolean</a>  
        | <a href="#Boolean">Boolean</a> <font color="purple"><b>&lt;-&gt;</b></font> <a href="#Boolean">Boolean</a>
  
<a name="Built_In_Function_Call"></a>**Built\_In\_Function\_Call**
:  <font color="purple"><b>prev</b></font> <font color="purple"><b>(</b></font> <a href="#Any_Type">Any\_Type</a>  \[ <font color="purple"><b>,</b></font> <a href="#Number">Number</a> ]  <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>next</b></font> <font color="purple"><b>(</b></font> <a href="#Any_Type">Any\_Type</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>stable</b></font> <font color="purple"><b>(</b></font> <a href="#Any_Type">Any\_Type</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>rose</b></font> <font color="purple"><b>(</b></font> <a href="#Bit">Bit</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>fell</b></font> <font color="purple"><b>(</b></font> <a href="#Bit">Bit</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>ended</b></font> <font color="purple"><b>(</b></font> <a href="#Sequence">Sequence</a>  \[ <font color="purple"><b>,</b></font> <a href="#Clock_Expression">Clock\_Expression</a> ]  <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>isunknown</b></font> <font color="purple"><b>(</b></font> <a href="#BitVector">BitVector</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>countones</b></font> <font color="purple"><b>(</b></font> <a href="#BitVector">BitVector</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>onehot</b></font> <font color="purple"><b>(</b></font> <a href="#BitVector">BitVector</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>onehot0</b></font> <font color="purple"><b>(</b></font> <a href="#BitVector">BitVector</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>nondet</b></font> <font color="purple"><b>(</b></font> <a href="#Value_Set">Value\_Set</a> <font color="purple"><b>)</b></font>  
        | <font color="purple"><b>nondet\_vector</b></font> <font color="purple"><b>(</b></font> <a href="#Number">Number</a> <font color="purple"><b>,</b></font> <a href="#Value_Set">Value\_Set</a> <font color="purple"><b>)</b></font>
  
<a name="Union_Expression"></a>**Union\_Expression**
:  <a href="#Any_Type">Any\_Type</a> <font color="purple"><b>union</b></font> <a href="#Any_Type">Any\_Type</a>
  
### A.4.9 Optional branching extension
  
<a name="OBE_Property"></a>**OBE\_Property**
:  <a href="#Boolean">Boolean</a>  
        | <font color="purple"><b>(</b></font> <a href="#OBE_Property">OBE\_Property</a> <font color="purple"><b>)</b></font>  
        | <em>property\_Name</em> \[ <font color="purple"><b>(</b></font> <a href="#Actual_Parameter_List">Actual\_Parameter\_List</a> <font color="purple"><b>)</b></font> ]  <em>: Logical Operators  :</em>  
        | <a href="#NOT_OP">NOT\_OP</a> <a href="#OBE_Property">OBE\_Property</a>  
        | <a href="#OBE_Property">OBE\_Property</a> <a href="#AND_OP">AND\_OP</a> <a href="#OBE_Property">OBE\_Property</a>  
        | <a href="#OBE_Property">OBE\_Property</a> <a href="#OR_OP">OR\_OP</a> <a href="#OBE_Property">OBE\_Property</a>  
        | <a href="#OBE_Property">OBE\_Property</a> <font color="purple"><b>-&gt;</b></font> <a href="#OBE_Property">OBE\_Property</a>  
        | <a href="#OBE_Property">OBE\_Property</a> <font color="purple"><b>&lt;-&gt;</b></font> <a href="#OBE_Property">OBE\_Property</a> <em>: Universal Operators :</em>  
        | <font color="purple"><b>AX</b></font> <a href="#OBE_Property">OBE\_Property</a>  
        | <font color="purple"><b>AG</b></font> <a href="#OBE_Property">OBE\_Property</a>  
        | <font color="purple"><b>AF</b></font> <a href="#OBE_Property">OBE\_Property</a>  
        | <font color="purple"><b>A</b></font>  \[ <a href="#OBE_Property">OBE\_Property</a> <font color="purple"><b>U</b></font> <a href="#OBE_Property">OBE\_Property</a> ]  <em>: Existential Operators :</em>  
        | <font color="purple"><b>EX</b></font> <a href="#OBE_Property">OBE\_Property</a>  
        | <font color="purple"><b>EG</b></font> <a href="#OBE_Property">OBE\_Property</a>  
        | <font color="purple"><b>EF</b></font> <a href="#OBE_Property">OBE\_Property</a>  
        | <font color="purple"><b>E</b></font>  \[ <a href="#OBE_Property">OBE\_Property</a> <font color="purple"><b>U</b></font> <a href="#OBE_Property">OBE\_Property</a> ]
  
### VHDL Flavor macros
  
<a name="DEF_SYM"></a>**DEF\_SYM**
:  <font color="purple"><b>is</b></font>
  
<a name="RANGE_SYM"></a>**RANGE\_SYM**
:  <font color="purple"><b>to</b></font>
  
<a name="AND_OP"></a>**AND\_OP**
:  <font color="purple"><b>and</b></font>
  
<a name="OR_OP"></a>**OR\_OP**
:  <font color="purple"><b>or</b></font>
  
<a name="NOT_OP"></a>**NOT\_OP**
:  <font color="purple"><b>not</b></font>
  
<a name="MIN_VAL"></a>**MIN\_VAL**
:  <font color="purple"><b>0</b></font>
  
<a name="MAX_VAL"></a>**MAX\_VAL**
:  <font color="purple"><b>inf</b></font>
  
<a name="HDL_EXPR"></a>**HDL\_EXPR**
:  <em>Extended_VHDL_Expression</em>
  
<a name="HDL_CLK_EXPR"></a>**HDL\_CLK\_EXPR**
:  <em>VHDL_expression</em>
  
<a name="HDL_UNIT"></a>**HDL\_UNIT**
:  <em>VHDL_design_unit</em>
  
<a name="HDL_MOD_NAME"></a>**HDL\_MOD\_NAME**
:  <em>entity_aspect</em>
  
<a name="HDL_DECL"></a>**HDL\_DECL**
:  <em>VHDL_block_declarative_item</em>
  
<a name="HDL_STMT"></a>**HDL\_STMT**
:  <em>VHDL_concurrent_statement</em>
  
<a name="HDL_SEQ_STMT"></a>**HDL\_SEQ\_STMT**
:  <em>VHDL_sequential_statement</em>
  
<a name="HDL_RANGE"></a>**HDL\_RANGE**
:  <em>range_attribute_name</em>
  
<a name="HDL_VARIABLE_TYPE"></a>**HDL\_VARIABLE\_TYPE**
:  <em>VHDL_subtype_indication</em>
  
<a name="LEFT_SYM"></a>**LEFT\_SYM**
:  <font color="purple"><b>(</b></font>
  
<a name="RIGHT_SYM"></a>**RIGHT\_SYM**
:  <font color="purple"><b>)</b></font>
  
<a name="Identifier"></a>**Identifier**
:  <em>ID</em>
