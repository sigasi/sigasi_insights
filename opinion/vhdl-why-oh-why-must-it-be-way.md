---
title: "VHDL: Why, oh why must it be this way"
layout: page 
pager: true
author: Mark Christiaens
date: 2010-12-01
tags: 
  - VHDL
---
I have been wrestling the VHDL grammar for our <a href="http://www.eclipse.org/Xtext/" >Xtext</a>-based IDE-prototype for a while now (note to self: blog about Xtext).  Ever since I learned VHDL at the university and later on, while designing a video decoder, I have had the uncanny feeling that the language is somehow crooked.  It is a reasonable language to express hardware designs at a higher abstraction level but its syntax does not imprint itself well upon my brain, forcing me to make silly typing errors all the time.  As of late, I see more clearly why this is the case. Some simple examples of design flaws of the syntax will illustrate my point.

## The end is near 

VHDL allows you to annotate the closure of a block (like the end of functions, procedures, loops ...) with a label indicating which block is being closed.  Fine, I guess that in the 1980' such a label was a useful annotation to help keep an overview of the structure of your code.  But why was it made inconsistent?  For example, for architectures, entities, configurations, ... you close the block with 
```vhdl
end [X] [X's name]
```

That means that for an architecture it is fine to close it with a simple "end" keyword or, if you choose to do so, with a complete "end architecture my_architecture_s_name". 

In contrast, the proper way to close a component or a unit declaration is 
```vhdl
end X [X's name]
```

That means it is not legal to write a simple "end" at the end of a component.  Strange. 

## Concerns of separation 

What exactly is the idea with the use of a semicolon in VHDL?  Most languages use the semicolon as a <b>terminator</b>.  For example, in C or Java ... the semicolon is used to end a statement.  In VHDL, statements are also terminated with a semicolon.  But it is also used as a separator in for example entity definitions like so: 
```vhdl
entity Full_Adder is
   port (X, Y, Cin: in Bit; Cout, Sum: out Bit);
end Full_Adder;
```

Note that you are not allowed to write a semicolon just before the closing brace.  Strange.

## Use it wisely 

A last inconsistency example is importing definitions from outside a file.  VHDL has two constructs.  The first one is the `library X;` construct.  It tells VHDL to make library X visible in the current file.  The second construct is `use X.Y.all;`.  This construct tells VHDL to make all entities in package Y inside library X accessible from the current file.  Why are there two scoping import constructs?  The first construct could have been made redundant by allowing `use X.all;`.  Strange.

## Conclusion 

All this is very unfortunate.  It is the cause of that uneasy feeling I always experience when working with VHDL.  Other languages that have a more consistent language design allow me to learn them and make them my own.  I never achieved that level of ease with VHDL.  

So, what do I hope to achieve with this rant?  A redesign of VHDL?  Not only, will it never happen, what is more, it would not be a good idea.  Let VHDL be VHDL but if you ever decide to design a new HDL language, make it simple and consistent and I will salute you, Sir or Madam.  No, the right attitude is to get a good editor, preferably from a company beginning with "Sigas", and let it help you get beyond the petty limitations of your language so you can focus on what is really important: your product.

_Mark Christiaens_