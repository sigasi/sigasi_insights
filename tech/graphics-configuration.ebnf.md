---
title: "TODO Grammar"
layout: page 
pager: true
author: Sigasi
date: 2017-08-25
comments: true
---
## Grammar
  
**DiagramConfiguration**{: #DiagramConfiguration }
:	<a href="#Header">Header</a> <font color="purple"><b>{</b></font>  { <a href="#GraphicsDeclaration">GraphicsDeclaration</a>  }   { <a href="#ConfigurationBlock">ConfigurationBlock</a>  }  <font color="purple"><b>}</b></font> 
  
**Header**{: #Header }
:	<a href="#BlockDiagramHeader">BlockDiagramHeader</a>   
        | <a href="#StateMachineHeader">StateMachineHeader</a> 
  
**BlockDiagramHeader**{: #BlockDiagramHeader }
:	<font color="purple"><b>diagram</b></font> <a href="#FullyQualifiedName">FullyQualifiedName</a> 
  
**StateMachineHeader**{: #StateMachineHeader }
:	<font color="purple"><b>statemachine</b></font> <a href="#FullyQualifiedName">FullyQualifiedName</a> <font color="purple"><b>:</b></font> <em>hdl\_</em><a href="#ID">ID</a> 
  
**FullyQualifiedName**{: #FullyQualifiedName }
:	<a href="#QualifiedNamePart">QualifiedNamePart</a>  { <font color="purple"><b>.</b></font> <a href="#QualifiedNamePart">QualifiedNamePart</a>  }  
  
**QualifiedNamePart**{: #QualifiedNamePart }
:	<em>graphics\_</em><a href="#ID">ID</a>   
        | <em>hdl\_</em><a href="#ID">ID</a> 
  
**Regex**{: #Regex }
:	<font color="purple"><b>regex</b></font> <a href="#STRING">STRING</a> 
  
**GraphicsDeclaration**{: #GraphicsDeclaration }
:	<a href="#GroupDeclaration">GroupDeclaration</a> 
  
**ConfigurationBlock**{: #ConfigurationBlock }
:	<a href="#Type">Type</a> <a href="#Identifiers">Identifiers</a> <font color="purple"><b>{</b></font>  { <a href="#Configuration">Configuration</a>   
         | <a href="#ConfigurationBlock">ConfigurationBlock</a>  }  <font color="purple"><b>}</b></font> 
  
**Configuration**{: #Configuration }
:	<font color="purple"><b>hide</b></font>   
        | <font color="purple"><b>collapse</b></font>   
        | <font color="purple"><b>color</b></font> <a href="#GraphicsColor">GraphicsColor</a> 
  
**GroupDeclaration**{: #GroupDeclaration }
:	<font color="purple"><b>def</b></font> <a href="#Type">Type</a> <font color="purple"><b>group</b></font> <a href="#ID">ID</a> <font color="purple"><b>(</b></font> <a href="#Identifiers">Identifiers</a> <font color="purple"><b>)</b></font> 
  
**Identifiers**{: #Identifiers }
:	<a href="#Identifier">Identifier</a>  { <font color="purple"><b>,</b></font> <a href="#Identifier">Identifier</a>  }  
  
**Identifier**{: #Identifier }
:	<a href="#DeclaredIdentifier">DeclaredIdentifier</a>   
        | <a href="#RegexIdentifier">RegexIdentifier</a> 
  
**DeclaredIdentifier**{: #DeclaredIdentifier }
:	<a href="#FullyQualifiedName">FullyQualifiedName</a> 
  
**RegexIdentifier**{: #RegexIdentifier }
:	<a href="#Regex">Regex</a> 
  
**GraphicsColor**{: #GraphicsColor }
:	<font color="purple"><b>red</b></font>   
        | <font color="purple"><b>green</b></font>   
        | <font color="purple"><b>blue</b></font>   
        | <font color="purple"><b>aqua</b></font>   
        | <font color="purple"><b>purple</b></font>   
        | <font color="purple"><b>yellow</b></font>   
        | <font color="purple"><b>orange</b></font>   
        | <font color="purple"><b>gray</b></font>   
        | <font color="purple"><b>white</b></font> 
  
**Type**{: #Type }
:	<font color="purple"><b>block</b></font>   
        | <font color="purple"><b>port</b></font>   
        | <font color="purple"><b>wire</b></font>   
        | <font color="purple"><b>state</b></font> 
  
**ID**{: #ID }
:	 \[ <font color="purple"><b>^</b></font>  ]  <em>a-zA-Z\_</em> { <em>a-zA-Z0-9\_</em> }  
  
**STRING**{: #STRING }
:	<a href="#DQ_STRING">DQ\_STRING</a>   
        | <a href="#SQ_STRING">SQ\_STRING</a> 
  
**DQ\_STRING**{: #DQ_STRING }
:	<font color="purple"><b>"</b></font>  { <font color="purple"><b>\</b></font> <em>char</em>  
         | <em>not (\ | ")</em> }  <font color="purple"><b>"</b></font> 
  
**SQ\_STRING**{: #SQ_STRING }
:	<font color="purple"><b>'</b></font>  { <font color="purple"><b>\</b></font> <em>char</em>  
         | <em>not (\ | ')</em> }  <font color="purple"><b>'</b></font> 
