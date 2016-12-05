---
title: "Sigasi; is it valid VHDL code?"
layout: page
#pager: true
author: Philippe Faes
date: 2016-12-05
tags: 
  - Sigasi
  - VHDL
comments: true
---

About a year ago, Sigasi adopted a new logo. In this logo, the word Sigasi is terminated with a semicolon. On one hand, this is an obvious reference to the practice of terminating lines of computer code with a semicolon. On the other hand, the semicolon is simply our favorite ASCII character. It looks like a happy and positive "wink". Since we have the word "yes" (Si) in our company name *twice*, we always want to smile and be positive.

TODO: insert picture of cup with "wink".

Since the semicolon makes the Sigasi logo look like code, an obvious question arises: is this valid code? And in which languages would it be valid code? Let's start with VHDL.

# VHDL

Let's look at VHDL. Since each file needs to have one or more compilation units, we'll put the Sigasi logo in a compilation unit.
Instead, let's creata a file that contains the Sigasi logo:

```VHDL
entity e is
	port(
		Sigasi : in bit;
		p : out bit
	);
end entity e;

architecture RTL of e is
begin
	p <= Sigasi;
end architecture RTL;
```
In this example, the Sigasi logo is only part of a statement:

```VHDL
a <= Sigasi;
```

The next challenge would be to create a statement that is simply the Sigasi logo:
```VHDL
Sigasi;
```

Simply an identifier with a semicolon can be a sequential (or concurrent) procedure call:

```VHDL
entity e is
end entity e;

architecture RTL of e is
	procedure Sigasi is
	begin
		-- do something		
	end procedure Sigasi;
begin
	Sigasi; -- call procedure Sigasi
end architecture RTL;
```

While this is pretty useless, it is valid VHDL. But there is another interesting (and equally useless) way to use a single identifier as a statement in VHDL. You can instantiate a component without ports or generics:

```VHDL
entity e is
end entity e;

architecture RTL of e is
	component Sigasi
	end component;
begin
	Sigasi; -- instantiate empty component
end architecture RTL;
```

So in VHDL the text `Sigasi;` can be either (1) a part of a statement, (2) a procedure call or (3) in instantiation statement.

# Other languages

We can see that `Sigasi;` all by itself in a file is not valid VHDL, but it can be valid as part of a VHDL file.

But what about SystemVerilog or Verilog? 
Do you know a programming language that would accept `Sigasi;` as a valid input without context? Let us know in the comments.
