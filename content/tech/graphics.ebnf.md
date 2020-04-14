---
title: "Sigasi Studio Graphics Configuration Grammar"
layout: page
pager: true
author: Sigasi
date: 2018-09-10
comments: true
tags:
  - graphics
  - ebnf
---
<em>This grammar allows you to filter, group and color your BlockDiagrams and StateMachines in Sigasi Studio.</em>  
## Grammar
  
<a name="DiagramConfiguration"></a>**DiagramConfiguration**
:  <a href="#Header">Header</a> <font color="purple"><b>{</b></font>  { <a href="#GraphicsRestriction">GraphicsRestriction</a> }   { <a href="#GraphicsDeclaration">GraphicsDeclaration</a> }   { <a href="#ConfigurationBlock">ConfigurationBlock</a> }  <font color="purple"><b>}</b></font>
  
<a name="Header"></a>**Header**
:  <a href="#BlockDiagramHeader">BlockDiagramHeader</a>  
        | <a href="#StateMachineHeader">StateMachineHeader</a>
  
<a name="BlockDiagramHeader"></a>**BlockDiagramHeader**
:  <font color="purple"><b>diagram</b></font> <a href="#FullyQualifiedName">FullyQualifiedName</a>
  
<a name="StateMachineHeader"></a>**StateMachineHeader**
:  <font color="purple"><b>statemachine</b></font> <a href="#FullyQualifiedName">FullyQualifiedName</a> <font color="purple"><b>:</b></font> <em>hdl\_</em><a href="#ID">ID</a>
  
<a name="FullyQualifiedName"></a>**FullyQualifiedName**
:  <a href="#QualifiedNamePart">QualifiedNamePart</a>  { <font color="purple"><b>.</b></font> <a href="#QualifiedNamePart">QualifiedNamePart</a> }
  
<a name="QualifiedNamePart"></a>**QualifiedNamePart**
:  <em>graphics\_</em><a href="#ID">ID</a>  
        | <em>hdl\_</em><a href="#ID">ID</a>
  
<a name="Regex"></a>**Regex**
:  <font color="purple"><b>regex</b></font> <a href="#STRING">STRING</a>
  
<a name="GraphicsRestriction"></a>**GraphicsRestriction**
:  <a href="#BlockVisibilityRestriction">BlockVisibilityRestriction</a>  
        | <a href="#ReassignmentsConfiguration">ReassignmentsConfiguration</a>
  
<a name="BlockVisibilityRestriction"></a>**BlockVisibilityRestriction**
:  <font color="purple"><b>show</b></font> <font color="purple"><b>:</b></font> <a href="#BlockVisibilityRestrictionType">BlockVisibilityRestrictionType</a>
  
<a name="ReassignmentsConfiguration"></a>**ReassignmentsConfiguration**
:  <font color="purple"><b>reassignments</b></font> <font color="purple"><b>hide</b></font>
  
<a name="BlockVisibilityRestrictionType"></a>**BlockVisibilityRestrictionType**
:  <font color="purple"><b>instantiations</b></font>
  
<a name="GraphicsDeclaration"></a>**GraphicsDeclaration**
:  <a href="#GroupDeclaration">GroupDeclaration</a>
  
<a name="ConfigurationBlock"></a>**ConfigurationBlock**
:  <a href="#Type">Type</a> <a href="#Identifiers">Identifiers</a> <font color="purple"><b>{</b></font>  { <a href="#Configuration">Configuration</a> | <a href="#ConfigurationBlock">ConfigurationBlock</a> }  <font color="purple"><b>}</b></font>
  
<a name="Configuration"></a>**Configuration**
:  <font color="purple"><b>hide</b></font>  
        | <font color="purple"><b>collapse</b></font>  
        | <font color="purple"><b>color</b></font> <a href="#GraphicsColor">GraphicsColor</a>  
        | <a href="#ReassignmentsConfiguration">ReassignmentsConfiguration</a>
  
<a name="GroupDeclaration"></a>**GroupDeclaration**
:  <font color="purple"><b>def</b></font> <a href="#Type">Type</a> <font color="purple"><b>group</b></font> <a href="#ID">ID</a> <font color="purple"><b>(</b></font> <a href="#Identifiers">Identifiers</a> <font color="purple"><b>)</b></font>
  
<a name="Identifiers"></a>**Identifiers**
:  <a href="#Identifier">Identifier</a>  { <font color="purple"><b>,</b></font> <a href="#Identifier">Identifier</a> }
  
<a name="Identifier"></a>**Identifier**
:  <a href="#DeclaredIdentifier">DeclaredIdentifier</a>  
        | <a href="#RegexIdentifier">RegexIdentifier</a>
  
<a name="DeclaredIdentifier"></a>**DeclaredIdentifier**
:  <a href="#FullyQualifiedName">FullyQualifiedName</a>
  
<a name="RegexIdentifier"></a>**RegexIdentifier**
:  <a href="#Regex">Regex</a>
  
<a name="GraphicsColor"></a>**GraphicsColor**
:  <font color="purple"><b>red</b></font>  
        | <font color="purple"><b>green</b></font>  
        | <font color="purple"><b>blue</b></font>  
        | <font color="purple"><b>aqua</b></font>  
        | <font color="purple"><b>purple</b></font>  
        | <font color="purple"><b>yellow</b></font>  
        | <font color="purple"><b>orange</b></font>  
        | <font color="purple"><b>gray</b></font>  
        | <font color="purple"><b>white</b></font>
  
<a name="Type"></a>**Type**
:  <font color="purple"><b>block</b></font>  
        | <font color="purple"><b>port</b></font>  
        | <font color="purple"><b>wire</b></font>  
        | <font color="purple"><b>state</b></font>
  
<a name="ID"></a>**ID**
:  \[ <font color="purple"><b>^</b></font> ]  <em>a-zA-Z\_</em> { <em>a-zA-Z0-9\_</em> }
  
<a name="STRING"></a>**STRING**
:  <a href="#DQ_STRING">DQ\_STRING</a>  
        | <a href="#SQ_STRING">SQ\_STRING</a>
  
<a name="DQ_STRING"></a>**DQ\_STRING**
:  <font color="purple"><b>"</b></font>  { <font color="purple"><b>\\</b></font> <em>char</em> | <em>not (\ | ")</em> }  <font color="purple"><b>"</b></font>
  
<a name="SQ_STRING"></a>**SQ\_STRING**
:  <font color="purple"><b>'</b></font>  { <font color="purple"><b>\\</b></font> <em>char</em> | <em>not (\ | ')</em> }  <font color="purple"><b>'</b></font>
