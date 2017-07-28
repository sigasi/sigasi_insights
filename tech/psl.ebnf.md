---
title: "Property Specification Language (PSL) Grammar"
layout: page 
pager: true
author: Sigasi
date: 2017-02-02
comments: true
tags: 
  - PSL
  - EBNF
---
<em> IEEE Std 1850-2010 </em>  
<em>

<em>
This document is copyrighted by the IEEE. It is made available for a wide variety of both public and private uses. These include both use, by reference, in laws and regulations, and use in private self-regulation, standardization, and the promotion of engineering practices and methods. By making this document available for use and adoption by public authorities and private users, the IEEE does not waive any rights in copyright to this document.
</em>

Get the full Language Reference Manual, at <https://standards.ieee.org/findstds/standard/1850-2010.html>

Sigasi has created this browsable version of the grammar, hoping that it would be useful to you, but without any warranty whatsoever.

[More browsable grammars of Hardware Description and Verification languages][/tag/EBNF].

</em>  
## A.4 Syntax productions
  
<em> The rest of this section defines the PSL syntax.</em>  
### A.4.1 Verification units
  
**PSL\_Specification**{: #PSL_Specification }
:	 { <a href="#Verification_Item">Verification\_Item</a>  }  
  
**Verification\_Item**{: #Verification_Item }
:	<a href="#HDL_UNIT">HDL\_UNIT</a>   
        | <a href="#Verification_Unit">Verification\_Unit</a> 
  
**Verification\_Unit**{: #Verification_Unit }
:	<a href="#Vunit_Type">Vunit\_Type</a> <em>PSL\_</em><a href="#Identifier">Identifier</a>  \[ <font color="purple"><b>(</b></font> <a href="#Hierarchical_HDL_Name">Hierarchical\_HDL\_Name</a> <font color="purple"><b>)</b></font>  ]  <font color="purple"><b>{</b></font>  { <a href="#Inherit_Spec">Inherit\_Spec</a>  }   { <a href="#Override_Spec">Override\_Spec</a>  }   { <a href="#VUnit_Item">VUnit\_Item</a>  }  <font color="purple"><b>}</b></font> 
  
**Vunit\_Type**{: #Vunit_Type }
:	<font color="purple"><b>vunit</b></font>   
        | <font color="purple"><b>vpkg</b></font>   
        | <font color="purple"><b>vprop</b></font>   
        | <font color="purple"><b>vmode</b></font> 
  
**Context\_Spec**{: #Context_Spec }
:	<a href="#Binding_Spec">Binding\_Spec</a>   
        | <a href="#Formal_Parameter_List">Formal\_Parameter\_List</a> 
  
**Binding\_Spec**{: #Binding_Spec }
:	<a href="#Hierarchical_HDL_Name">Hierarchical\_HDL\_Name</a> 
  
**Hierarchical\_HDL\_Name**{: #Hierarchical_HDL_Name }
:	<a href="#HDL_Module_Name">HDL\_Module\_Name</a>  { <a href="#Path_Separator">Path\_Separator</a> <em>instance\_</em><a href="#Name">Name</a>  }  
  
**HDL\_Module\_Name**{: #HDL_Module_Name }
:	<em>HDL\_Module\_</em><a href="#Name">Name</a>  \[ <font color="purple"><b>(</b></font> <em>HDL\_Module\_</em><a href="#Name">Name</a> <font color="purple"><b>)</b></font>  ]  
  
**Path\_Separator**{: #Path_Separator }
:	<font color="purple"><b>.</b></font>   
        | <font color="purple"><b>/</b></font> 
  
<em>Instance\_</em>  
**Name**{: #Name }
:	<a href="#HDL_or_PSL_Identifier">HDL\_or\_PSL\_Identifier</a> 
  
**Inherit\_Spec**{: #Inherit_Spec }
:	 \[ <font color="purple"><b>nontransitive</b></font>  ]  <font color="purple"><b>inherit</b></font> <em>vunit\_</em><a href="#Name">Name</a>  { <font color="purple"><b>,</b></font> <em>vunit\_</em><a href="#Name">Name</a>  }  <font color="purple"><b>;</b></font> 
  
**VUnit\_Item**{: #VUnit_Item }
:	<a href="#HDL_DECL">HDL\_DECL</a>   
        | <a href="#HDL_STMT">HDL\_STMT</a>   
        | <a href="#PSL_Declaration">PSL\_Declaration</a>   
        | <a href="#PSL_Directive">PSL\_Directive</a>   
        | <a href="#Vunit_Instance">Vunit\_Instance</a> 
  
**Vunit\_Instance**{: #Vunit_Instance }
:	<a href="#Label">Label</a> <font color="purple"><b>:</b></font> <a href="#Vunit_Type">Vunit\_Type</a> <em>vunit\_</em><a href="#Name">Name</a>  \[ <font color="purple"><b>(</b></font> <a href="#Actual_Parameter_List">Actual\_Parameter\_List</a> <font color="purple"><b>)</b></font>  ]  <font color="purple"><b>;</b></font> 
  
**Override\_Spec**{: #Override_Spec }
:	<font color="purple"><b>override</b></font> <a href="#Name_List">Name\_List</a> <font color="purple"><b>;</b></font> 
  
**Name\_List**{: #Name_List }
:	<a href="#Name">Name</a>  { <font color="purple"><b>,</b></font> <a href="#Name">Name</a>  }  
  
**Formal\_Parameter\_List**{: #Formal_Parameter_List }
:	<a href="#Formal_Parameter">Formal\_Parameter</a>  { <font color="purple"><b>;</b></font> <a href="#Formal_Parameter">Formal\_Parameter</a>  }  
  
### A.4.2 PSL declarations
  
**PSL\_Declaration**{: #PSL_Declaration }
:	<a href="#Property_Declaration">Property\_Declaration</a>   
        | <a href="#Sequence_Declaration">Sequence\_Declaration</a>   
        | <a href="#Clock_Declaration">Clock\_Declaration</a> 
  
**Property\_Declaration**{: #Property_Declaration }
:	<font color="purple"><b>property</b></font> <em>PSL\_</em><a href="#Identifier">Identifier</a>  \[ <font color="purple"><b>(</b></font> <a href="#Formal_Parameter_List">Formal\_Parameter\_List</a> <font color="purple"><b>)</b></font>  ]  <a href="#DEF_SYM">DEF\_SYM</a> <a href="#Property">Property</a> <font color="purple"><b>;</b></font> 
  
**Formal\_Parameter\_List**{: #Formal_Parameter_List }
:	<a href="#Formal_Parameter">Formal\_Parameter</a>  { <font color="purple"><b>;</b></font> <a href="#Formal_Parameter">Formal\_Parameter</a>  }  
  
**Formal\_Parameter**{: #Formal_Parameter }
:	<a href="#Param_Spec">Param\_Spec</a> <em>PSL\_</em><a href="#Identifier">Identifier</a>  { <font color="purple"><b>,</b></font> <em>PSL\_</em><a href="#Identifier">Identifier</a>  }  
  
**Param\_Spec**{: #Param_Spec }
:	<font color="purple"><b>const</b></font>   
        |  \[ <font color="purple"><b>const</b></font>   
         | <font color="purple"><b>mutable</b></font>  ]  <a href="#Value_Parameter">Value\_Parameter</a>   
        | <font color="purple"><b>sequence</b></font>   
        | <font color="purple"><b>property</b></font> 
  
**Value\_Parameter**{: #Value_Parameter }
:	<a href="#HDL_Type">HDL\_Type</a>   
        | <a href="#PSL_Type_Class">PSL\_Type\_Class</a> 
  
**HDL\_Type**{: #HDL_Type }
:	<font color="purple"><b>hdltype</b></font> <a href="#HDL_VARIABLE_TYPE">HDL\_VARIABLE\_TYPE</a> 
  
**PSL\_Type\_Class**{: #PSL_Type_Class }
:	<font color="purple"><b>boolean</b></font>   
        | <font color="purple"><b>bit</b></font>   
        | <font color="purple"><b>bitvector</b></font>   
        | <font color="purple"><b>numeric</b></font>   
        | <font color="purple"><b>string</b></font> 
  
**Sequence\_Declaration**{: #Sequence_Declaration }
:	<font color="purple"><b>sequence</b></font> <em>PSL\_</em><a href="#Identifier">Identifier</a>  \[ <font color="purple"><b>(</b></font> <a href="#Formal_Parameter_List">Formal\_Parameter\_List</a> <font color="purple"><b>)</b></font>  ]  <a href="#DEF_SYM">DEF\_SYM</a> <a href="#Sequence">Sequence</a> <font color="purple"><b>;</b></font> 
  
**Clock\_Declaration**{: #Clock_Declaration }
:	<font color="purple"><b>default</b></font> <font color="purple"><b>clock</b></font> <a href="#DEF_SYM">DEF\_SYM</a> <a href="#Clock_Expression">Clock\_Expression</a> <font color="purple"><b>;</b></font> 
  
**Clock\_Expression**{: #Clock_Expression }
:	<em>boolean\_</em><a href="#Name">Name</a>   
        | <em>boolean\_</em><a href="#Built_In_Function_Call">Built\_In\_Function\_Call</a>   
        | <font color="purple"><b>(</b></font> <a href="#Boolean">Boolean</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>(</b></font> <a href="#HDL_CLK_EXPR">HDL\_CLK\_EXPR</a> <font color="purple"><b>)</b></font> 
  
**Actual\_Parameter\_List**{: #Actual_Parameter_List }
:	<a href="#Actual_Parameter">Actual\_Parameter</a>  { <font color="purple"><b>,</b></font> <a href="#Actual_Parameter">Actual\_Parameter</a>  }  
  
**Actual\_Parameter**{: #Actual_Parameter }
:	<a href="#Any_Type">Any\_Type</a>   
        | <a href="#Number">Number</a>   
        | <a href="#Boolean">Boolean</a>   
        | <a href="#Property">Property</a>   
        | <a href="#Sequence">Sequence</a> 
  
### A.4.3 PSL directives
  
**PSL\_Directive**{: #PSL_Directive }
:	 \[ <a href="#Label">Label</a> <font color="purple"><b>:</b></font>  ]  <a href="#Verification_Directive">Verification\_Directive</a> 
  
**Label**{: #Label }
:	<em>PSL\_</em><a href="#Identifier">Identifier</a> 
  
**HDL\_or\_PSL\_Identifier**{: #HDL_or_PSL_Identifier }
:	<em>SystemVerilog\_</em><a href="#Identifier">Identifier</a>   
        | <em>Verilog\_</em><a href="#Identifier">Identifier</a>   
        | <em>VHDL\_</em><a href="#Identifier">Identifier</a>   
        | <em>SystemC\_</em><a href="#Identifier">Identifier</a>   
        | <em>GDL\_</em><a href="#Identifier">Identifier</a>   
        | <em>PSL\_</em><a href="#Identifier">Identifier</a> 
  
**Verification\_Directive**{: #Verification_Directive }
:	<a href="#Assert_Directive">Assert\_Directive</a>   
        | <a href="#Assume_Directive">Assume\_Directive</a>   
        | <a href="#Restrict_Directive">Restrict\_Directive</a>   
        | <a href="#Restrict_Guarantee_Directive">Restrict\_Guarantee\_Directive</a>   
        | <a href="#Cover_Directive">Cover\_Directive</a>   
        | <a href="#Fairness_Statement">Fairness\_Statement</a> 
  
**Assert\_Directive**{: #Assert_Directive }
:	<font color="purple"><b>assert</b></font> <a href="#Property">Property</a>  \[ <font color="purple"><b>report</b></font> <a href="#String">String</a>  ]  <font color="purple"><b>;</b></font> 
  
**Assume\_Directive**{: #Assume_Directive }
:	<font color="purple"><b>assume</b></font> <a href="#Property">Property</a> <font color="purple"><b>;</b></font> 
  
**Restrict\_Directive**{: #Restrict_Directive }
:	<font color="purple"><b>restrict</b></font> <a href="#Sequence">Sequence</a> <font color="purple"><b>;</b></font> 
  
**Restrict\_Guarantee\_Directive**{: #Restrict_Guarantee_Directive }
:	<font color="purple"><b>restrict!</b></font> <a href="#Sequence">Sequence</a> <font color="purple"><b>;</b></font> 
  
**Cover\_Directive**{: #Cover_Directive }
:	<font color="purple"><b>cover</b></font> <a href="#Sequence">Sequence</a>  \[ <font color="purple"><b>report</b></font> <a href="#String">String</a>  ]  <font color="purple"><b>;</b></font> 
  
**Fairness\_Statement**{: #Fairness_Statement }
:	<font color="purple"><b>fairness</b></font> <a href="#Boolean">Boolean</a> <font color="purple"><b>;</b></font>   
        | <font color="purple"><b>strong</b></font> <font color="purple"><b>fairness</b></font> <a href="#Boolean">Boolean</a> <font color="purple"><b>,</b></font> <a href="#Boolean">Boolean</a> <font color="purple"><b>;</b></font> 
  
### A.4.4 PSL properties
  
**Property**{: #Property }
:	<a href="#Replicator">Replicator</a> <a href="#Property">Property</a>   
        | <a href="#FL_Property">FL\_Property</a>   
        | <a href="#OBE_Property">OBE\_Property</a> 
  
**Replicator**{: #Replicator }
:	<font color="purple"><b>forall</b></font> <a href="#Parameter_Definition">Parameter\_Definition</a> <font color="purple"><b>:</b></font> 
  
**Index\_Range**{: #Index_Range }
:	<a href="#LEFT_SYM">LEFT\_SYM</a> <em>finite\_</em><a href="#Range">Range</a> <a href="#RIGHT_SYM">RIGHT\_SYM</a>   
        | <font color="purple"><b>(</b></font> <a href="#HDL_RANGE">HDL\_RANGE</a> <font color="purple"><b>)</b></font> 
  
**Value\_Set**{: #Value_Set }
:	<font color="purple"><b>{</b></font> <a href="#Value_Range">Value\_Range</a>  { <font color="purple"><b>,</b></font> <a href="#Value_Range">Value\_Range</a>  }  <font color="purple"><b>}</b></font>   
        | <font color="purple"><b>boolean</b></font> 
  
**Value\_Range**{: #Value_Range }
:	<a href="#Value">Value</a>   
        | <em>finite\_</em><a href="#Range">Range</a> 
  
**Value**{: #Value }
:	<a href="#Boolean">Boolean</a>   
        | <a href="#Number">Number</a> 
  
**Proc\_Block**{: #Proc_Block }
:	<font color="purple"><b>\[\[</b></font> <a href="#Proc_Block_Item">Proc\_Block\_Item</a>  { <a href="#Proc_Block_Item">Proc\_Block\_Item</a>  }  <font color="purple"><b>]]</b></font> 
  
**Proc\_Block\_Item**{: #Proc_Block_Item }
:	<a href="#HDL_DECL">HDL\_DECL</a>   
        | <a href="#HDL_SEQ_STMT">HDL\_SEQ\_STMT</a> 
  
**FL\_Property**{: #FL_Property }
:	<a href="#Boolean">Boolean</a>   
        | <font color="purple"><b>(</b></font>  \[ <font color="purple"><b>\[\[</b></font> <a href="#HDL_DECL">HDL\_DECL</a>  { <font color="purple"><b>,</b></font> <a href="#HDL_DECL">HDL\_DECL</a>  }  <font color="purple"><b>]]</b></font>  ]  <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>)</b></font>   
        | <a href="#Sequence">Sequence</a>  \[ <font color="purple"><b>!</b></font>  ]    
        | <em>FL\_property\_</em><a href="#Name">Name</a>  \[ <font color="purple"><b>(</b></font> <a href="#Actual_Parameter_List">Actual\_Parameter\_List</a> <font color="purple"><b>)</b></font>  ]    
        | <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>@</b></font> <a href="#Clock_Expression">Clock\_Expression</a>   
        | <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>abort</b></font> <a href="#Boolean">Boolean</a>   
        | <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>async\_abort</b></font> <a href="#Boolean">Boolean</a>   
        | <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>sync\_abort</b></font> <a href="#Boolean">Boolean</a>   
        | <a href="#Parameterized_Property">Parameterized\_Property</a> <em>: Logical Operators  :</em>  
        | <a href="#NOT_OP">NOT\_OP</a> <a href="#FL_Property">FL\_Property</a>   
        | <a href="#FL_Property">FL\_Property</a> <a href="#AND_OP">AND\_OP</a> <a href="#FL_Property">FL\_Property</a>   
        | <a href="#FL_Property">FL\_Property</a> <a href="#OR_OP">OR\_OP</a> <a href="#FL_Property">FL\_Property</a> <em>':'</em>  
        | <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>-></b></font> <a href="#FL_Property">FL\_Property</a>   
        | <a href="#FL_Property">FL\_Property</a> <font color="purple"><b><-></b></font> <a href="#FL_Property">FL\_Property</a> <em>: Primitive LTL Operators  :</em>  
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
        | <font color="purple"><b>next\_event!</b></font> <font color="purple"><b>(</b></font> <a href="#Boolean">Boolean</a> <font color="purple"><b>)</b></font>  \[ <em>positive\_</em><a href="#Number">Number</a>  ]  <font color="purple"><b>(</b></font> <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>next\_event</b></font> <font color="purple"><b>(</b></font> <a href="#Boolean">Boolean</a> <font color="purple"><b>)</b></font>  \[ <em>positive\_</em><a href="#Number">Number</a>  ]  <font color="purple"><b>(</b></font> <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>)</b></font> <em>':'</em>  
        | <font color="purple"><b>next\_event\_a!</b></font> <font color="purple"><b>(</b></font> <a href="#Boolean">Boolean</a> <font color="purple"><b>)</b></font>  \[ <em>finite\_positive\_</em><a href="#Range">Range</a>  ]  <font color="purple"><b>(</b></font> <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>next\_event\_a</b></font> <font color="purple"><b>(</b></font> <a href="#Boolean">Boolean</a> <font color="purple"><b>)</b></font>  \[ <em>finite\_positive\_</em><a href="#Range">Range</a>  ]  <font color="purple"><b>(</b></font> <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>next\_event\_e!</b></font> <font color="purple"><b>(</b></font> <a href="#Boolean">Boolean</a> <font color="purple"><b>)</b></font>  \[ <em>finite\_positive\_</em><a href="#Range">Range</a>  ]  <font color="purple"><b>(</b></font> <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>next\_event\_e</b></font> <font color="purple"><b>(</b></font> <a href="#Boolean">Boolean</a> <font color="purple"><b>)</b></font>  \[ <em>finite\_positive\_</em><a href="#Range">Range</a>  ]  <font color="purple"><b>(</b></font> <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>)</b></font> <em>: Operators on SEREs  :</em>  
        |  { <a href="#Sequence">Sequence</a>  }  <font color="purple"><b>(</b></font> <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>)</b></font>   
        | <a href="#Sequence">Sequence</a> <font color="purple"><b>|-></b></font> <a href="#FL_Property">FL\_Property</a>   
        | <a href="#Sequence">Sequence</a> <font color="purple"><b>|=></b></font> <a href="#FL_Property">FL\_Property</a> 
  
### A.4.5 Sequential Extended Regular Expressions (SEREs)
  
**SERE**{: #SERE }
:	<a href="#Boolean">Boolean</a>   
        | <a href="#Sequence">Sequence</a>   
        | <a href="#Sequence_Instance">Sequence\_Instance</a>   
        | <a href="#SERE">SERE</a> <font color="purple"><b>;</b></font> <a href="#SERE">SERE</a>   
        | <a href="#SERE">SERE</a> <font color="purple"><b>:</b></font> <a href="#SERE">SERE</a>   
        | <a href="#Compound_SERE">Compound\_SERE</a> 
  
**Compound\_SERE**{: #Compound_SERE }
:	<a href="#Repeated_SERE">Repeated\_SERE</a>   
        | <a href="#Braced_SERE">Braced\_SERE</a>   
        | <a href="#Clocked_SERE">Clocked\_SERE</a>   
        | <a href="#Compound_SERE">Compound\_SERE</a> <font color="purple"><b>|</b></font> <a href="#Compound_SERE">Compound\_SERE</a>   
        | <a href="#Compound_SERE">Compound\_SERE</a> <font color="purple"><b>&</b></font> <a href="#Compound_SERE">Compound\_SERE</a>   
        | <a href="#Compound_SERE">Compound\_SERE</a> <font color="purple"><b>&&</b></font> <a href="#Compound_SERE">Compound\_SERE</a>   
        | <a href="#Compound_SERE">Compound\_SERE</a> <font color="purple"><b>within</b></font> <a href="#Compound_SERE">Compound\_SERE</a>   
        | <a href="#Parameterized_SERE">Parameterized\_SERE</a> 
  
### A.4.6 Parameterized Properties and SEREs
  
**Parameterized\_Property**{: #Parameterized_Property }
:	<font color="purple"><b>for</b></font> <a href="#Parameters_Definition">Parameters\_Definition</a> <font color="purple"><b>:</b></font> <a href="#And_Or_Property_Op">And\_Or\_Property\_Op</a> <font color="purple"><b>(</b></font> <a href="#FL_Property">FL\_Property</a> <font color="purple"><b>)</b></font> 
  
**Parameterized\_SERE**{: #Parameterized_SERE }
:	<font color="purple"><b>for</b></font> <a href="#Parameters_Definition">Parameters\_Definition</a> <font color="purple"><b>:</b></font> <a href="#And_Or_SERE_Op">And\_Or\_SERE\_Op</a> <font color="purple"><b>{</b></font> <a href="#SERE">SERE</a> <font color="purple"><b>}</b></font> 
  
**Parameters\_Definition**{: #Parameters_Definition }
:	<a href="#Parameter_Definition">Parameter\_Definition</a>  { <a href="#Parameter_Definition">Parameter\_Definition</a>  }  
  
**Parameter\_Definition**{: #Parameter_Definition }
:	<em>PSL\_</em><a href="#Identifier">Identifier</a>  \[ <a href="#Index_Range">Index\_Range</a>  ]  <font color="purple"><b>in</b></font> <a href="#Value_Set">Value\_Set</a> 
  
**And\_Or\_Property\_Op**{: #And_Or_Property_Op }
:	<a href="#AND_OP">AND\_OP</a>   
        | <a href="#OR_OP">OR\_OP</a> 
  
**And\_Or\_SERE\_Op**{: #And_Or_SERE_Op }
:	<font color="purple"><b>&&</b></font>   
        | <font color="purple"><b>&</b></font>   
        | <font color="purple"><b>|</b></font> 
  
### A.4.7 Sequences
  
**Sequence**{: #Sequence }
:	<a href="#Sequence_Instance">Sequence\_Instance</a>   
        | <a href="#Repeated_SERE">Repeated\_SERE</a>   
        | <a href="#Braced_SERE">Braced\_SERE</a>   
        | <a href="#Clocked_SERE">Clocked\_SERE</a>   
        | <a href="#Sequence">Sequence</a> <a href="#Proc_Block">Proc\_Block</a> 
  
**Repeated\_SERE**{: #Repeated_SERE }
:	<a href="#Boolean">Boolean</a> <font color="purple"><b>\[\*</b></font>  \[ <a href="#Count">Count</a>  ]  <font color="purple"><b>]</b></font>   
        | <a href="#Sequence">Sequence</a> <font color="purple"><b>\[\*</b></font>  \[ <a href="#Count">Count</a>  ]  <font color="purple"><b>]</b></font>   
        | <font color="purple"><b>\[\*</b></font>  \[ <a href="#Count">Count</a>  ]  <font color="purple"><b>]</b></font>   
        | <a href="#Boolean">Boolean</a> <font color="purple"><b>\[+]</b></font>   
        | <a href="#Sequence">Sequence</a> <font color="purple"><b>\[+]</b></font>   
        | <font color="purple"><b>\[+]</b></font>   
        | <a href="#Boolean">Boolean</a> <font color="purple"><b>\[=</b></font> <a href="#Count">Count</a> <font color="purple"><b>]</b></font>   
        | <a href="#Boolean">Boolean</a> <font color="purple"><b>\[-></b></font>  \[ <em>positive\_</em><a href="#Count">Count</a>  ]  <font color="purple"><b>]</b></font>   
        | <a href="#Boolean">Boolean</a> <a href="#Proc_Block">Proc\_Block</a>   
        | <a href="#Sequence">Sequence</a> <a href="#Proc_Block">Proc\_Block</a> 
  
**Braced\_SERE**{: #Braced_SERE }
:	<font color="purple"><b>{</b></font>  \[ <font color="purple"><b>\[\[</b></font> <a href="#HDL_DECL">HDL\_DECL</a>  { <a href="#HDL_DECL">HDL\_DECL</a>  }  <font color="purple"><b>]]</b></font>  ]  <a href="#SERE">SERE</a> <font color="purple"><b>}</b></font>   
        | <font color="purple"><b>{</b></font>  \[ <font color="purple"><b>free</b></font> <em>HDL\_</em><a href="#Identifier">Identifier</a>  { <em>HDL\_</em><a href="#Identifier">Identifier</a>  }   ]  <a href="#SERE">SERE</a> <font color="purple"><b>}</b></font> 
  
**Sequence\_Instance**{: #Sequence_Instance }
:	<em>sequence\_</em><a href="#Name">Name</a>  \[ <font color="purple"><b>(</b></font> <a href="#Actual_Parameter_List">Actual\_Parameter\_List</a> <font color="purple"><b>)</b></font>  ]  
  
**Clocked\_SERE**{: #Clocked_SERE }
:	<a href="#Braced_SERE">Braced\_SERE</a> <font color="purple"><b>@</b></font> <a href="#Clock_Expression">Clock\_Expression</a> 
  
**Count**{: #Count }
:	<a href="#Number">Number</a>   
        | <a href="#Range">Range</a> 
  
**Range**{: #Range }
:	<a href="#Low_Bound">Low\_Bound</a> <a href="#RANGE_SYM">RANGE\_SYM</a> <a href="#High_Bound">High\_Bound</a> 
  
**Low\_Bound**{: #Low_Bound }
:	<a href="#Number">Number</a>   
        | <a href="#MIN_VAL">MIN\_VAL</a> 
  
**High\_Bound**{: #High_Bound }
:	<a href="#Number">Number</a>   
        | <a href="#MAX_VAL">MAX\_VAL</a> 
  
### A.4.8 Forms of expression
  
**Any\_Type**{: #Any_Type }
:	<a href="#HDL_or_PSL_Expression">HDL\_or\_PSL\_Expression</a> 
  
**Bit**{: #Bit }
:	<em>bit</em><a href="#HDL_or_PSL_Expression">HDL\_or\_PSL\_Expression</a> 
  
**Boolean**{: #Boolean }
:	<em>boolean</em><a href="#HDL_or_PSL_Expression">HDL\_or\_PSL\_Expression</a> 
  
**BitVector**{: #BitVector }
:	<em>bitvector</em><a href="#HDL_or_PSL_Expression">HDL\_or\_PSL\_Expression</a> 
  
**Number**{: #Number }
:	<em>numeric</em><a href="#HDL_or_PSL_Expression">HDL\_or\_PSL\_Expression</a> 
  
**String**{: #String }
:	<em>string\_</em><a href="#HDL_or_PSL_Expression">HDL\_or\_PSL\_Expression</a> 
  
**HDL\_or\_PSL\_Expression**{: #HDL_or_PSL_Expression }
:	<a href="#HDL_Expression">HDL\_Expression</a>   
        | <a href="#PSL_Expression">PSL\_Expression</a>   
        | <a href="#Built_In_Function_Call">Built\_In\_Function\_Call</a>   
        | <a href="#Union_Expression">Union\_Expression</a> 
  
**HDL\_Expression**{: #HDL_Expression }
:	<a href="#HDL_EXPR">HDL\_EXPR</a> 
  
**PSL\_Expression**{: #PSL_Expression }
:	<a href="#Boolean">Boolean</a> <font color="purple"><b>-></b></font> <a href="#Boolean">Boolean</a>   
        | <a href="#Boolean">Boolean</a> <font color="purple"><b><-></b></font> <a href="#Boolean">Boolean</a> 
  
**Built\_In\_Function\_Call**{: #Built_In_Function_Call }
:	<font color="purple"><b>prev</b></font> <font color="purple"><b>(</b></font> <a href="#Any_Type">Any\_Type</a>  \[ <font color="purple"><b>,</b></font> <a href="#Number">Number</a>  ]  <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>next</b></font> <font color="purple"><b>(</b></font> <a href="#Any_Type">Any\_Type</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>stable</b></font> <font color="purple"><b>(</b></font> <a href="#Any_Type">Any\_Type</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>rose</b></font> <font color="purple"><b>(</b></font> <a href="#Bit">Bit</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>fell</b></font> <font color="purple"><b>(</b></font> <a href="#Bit">Bit</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>ended</b></font> <font color="purple"><b>(</b></font> <a href="#Sequence">Sequence</a>  \[ <font color="purple"><b>,</b></font> <a href="#Clock_Expression">Clock\_Expression</a>  ]  <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>isunknown</b></font> <font color="purple"><b>(</b></font> <a href="#BitVector">BitVector</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>countones</b></font> <font color="purple"><b>(</b></font> <a href="#BitVector">BitVector</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>onehot</b></font> <font color="purple"><b>(</b></font> <a href="#BitVector">BitVector</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>onehot0</b></font> <font color="purple"><b>(</b></font> <a href="#BitVector">BitVector</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>nondet</b></font> <font color="purple"><b>(</b></font> <a href="#Value_Set">Value\_Set</a> <font color="purple"><b>)</b></font>   
        | <font color="purple"><b>nondet\_vector</b></font> <font color="purple"><b>(</b></font> <a href="#Number">Number</a> <font color="purple"><b>,</b></font> <a href="#Value_Set">Value\_Set</a> <font color="purple"><b>)</b></font> 
  
**Union\_Expression**{: #Union_Expression }
:	<a href="#Any_Type">Any\_Type</a> <font color="purple"><b>union</b></font> <a href="#Any_Type">Any\_Type</a> 
  
###A.4.9 Optional branching extension
  
**OBE\_Property**{: #OBE_Property }
:	<a href="#Boolean">Boolean</a>   
        | <font color="purple"><b>(</b></font> <a href="#OBE_Property">OBE\_Property</a> <font color="purple"><b>)</b></font>   
        | <em>property\_Name</em> \[ <font color="purple"><b>(</b></font> <a href="#Actual_Parameter_List">Actual\_Parameter\_List</a> <font color="purple"><b>)</b></font>  ]  <em>: Logical Operators  :</em>  
        | <a href="#NOT_OP">NOT\_OP</a> <a href="#OBE_Property">OBE\_Property</a>   
        | <a href="#OBE_Property">OBE\_Property</a> <a href="#AND_OP">AND\_OP</a> <a href="#OBE_Property">OBE\_Property</a>   
        | <a href="#OBE_Property">OBE\_Property</a> <a href="#OR_OP">OR\_OP</a> <a href="#OBE_Property">OBE\_Property</a>   
        | <a href="#OBE_Property">OBE\_Property</a> <font color="purple"><b>-></b></font> <a href="#OBE_Property">OBE\_Property</a>   
        | <a href="#OBE_Property">OBE\_Property</a> <font color="purple"><b><-></b></font> <a href="#OBE_Property">OBE\_Property</a> <em>: Universal Operators :</em>  
        | <font color="purple"><b>AX</b></font> <a href="#OBE_Property">OBE\_Property</a>   
        | <font color="purple"><b>AG</b></font> <a href="#OBE_Property">OBE\_Property</a>   
        | <font color="purple"><b>AF</b></font> <a href="#OBE_Property">OBE\_Property</a>   
        | <font color="purple"><b>A</b></font>  \[ <a href="#OBE_Property">OBE\_Property</a> <font color="purple"><b>U</b></font> <a href="#OBE_Property">OBE\_Property</a>  ]  <em>: Existential Operators :</em>  
        | <font color="purple"><b>EX</b></font> <a href="#OBE_Property">OBE\_Property</a>   
        | <font color="purple"><b>EG</b></font> <a href="#OBE_Property">OBE\_Property</a>   
        | <font color="purple"><b>EF</b></font> <a href="#OBE_Property">OBE\_Property</a>   
        | <font color="purple"><b>E</b></font>  \[ <a href="#OBE_Property">OBE\_Property</a> <font color="purple"><b>U</b></font> <a href="#OBE_Property">OBE\_Property</a>  ]  
  
### VHDL Flavor macros
  
**DEF\_SYM**{: #DEF_SYM }
:	<font color="purple"><b>is</b></font> 
  
**RANGE\_SYM**{: #RANGE_SYM }
:	<font color="purple"><b>to</b></font> 
  
**AND\_OP**{: #AND_OP }
:	<font color="purple"><b>and</b></font> 
  
**OR\_OP**{: #OR_OP }
:	<font color="purple"><b>or</b></font> 
  
**NOT\_OP**{: #NOT_OP }
:	<font color="purple"><b>not</b></font> 
  
**MIN\_VAL**{: #MIN_VAL }
:	<font color="purple"><b>0</b></font> 
  
**MAX\_VAL**{: #MAX_VAL }
:	<font color="purple"><b>inf</b></font> 
  
**HDL\_EXPR**{: #HDL_EXPR }
:	<em>Extended_VHDL_Expression</em> 
  
**HDL\_CLK\_EXPR**{: #HDL_CLK_EXPR }
:	<em>external</em> <em>VHDL\_</em><a href="#expression">expression</a> 
  
**HDL\_UNIT**{: #HDL_UNIT }
:	<em>external</em> <em>VHDL\_</em><a href="#design_unit">design\_unit</a> 
  
**HDL\_MOD\_NAME**{: #HDL_MOD_NAME }
:	<em>entity_aspect</em> 
  
**HDL\_DECL**{: #HDL_DECL }
:	<em>external</em> <em>VHDL\_</em><a href="#block_declarative_item">block\_declarative\_item</a> 
  
**HDL\_STMT**{: #HDL_STMT }
:	<em>external</em> <em>VHDL\_</em><a href="#concurrent_statement">concurrent\_statement</a> 
  
**HDL\_SEQ\_STMT**{: #HDL_SEQ_STMT }
:	<em>external</em> <em>VHDL\_</em><a href="#sequential_statement">sequential\_statement</a> 
  
**HDL\_RANGE**{: #HDL_RANGE }
:	<em>range_attribute_name</em> 
  
**HDL\_VARIABLE\_TYPE**{: #HDL_VARIABLE_TYPE }
:	<em>external</em> <em>VHDL\_</em><a href="#subtype_indication">subtype\_indication</a> 
  
**LEFT\_SYM**{: #LEFT_SYM }
:	<font color="purple"><b>(</b></font> 
  
**RIGHT\_SYM**{: #RIGHT_SYM }
:	<font color="purple"><b>)</b></font> 
  
**Identifier**{: #Identifier }
:	<em>ID</em> 
