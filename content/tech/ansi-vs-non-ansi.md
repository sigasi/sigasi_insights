---
title: ANSI and Non-ANSI Port Declarations in Verilog
layout: page
pager: true
author: Lawrence Goossens
date: 2023-08-02
tags: 
  - SystemVerilog
  - Verilog
  - syntax
comments: true
bannerad: true
---

In Verilog, module ports can be declared using one of two styles: ANSI or non-ANSI. This article covers the distinct syntaxes of these two styles, as well as further differences between them.

# The different syntaxes

Functionally, both styles are equivalent [^1]: any design written using non-ANSI style could also be written using ANSI style. The only difference is the syntax used to declare the ports. Modules declared using ANSI and non-ANSI styles can also be used together within the same design. The two styles can't be mixed within the same module declaration, however. Each module must stick to one style.

[^1]: With the exception of generic interface ports, which are only allowed when using ANSI style.

## ANSI style

ANSI style is the newer of the two styles, having been introduced in the Verilog-2001 standard. In this style, all the information about the port (type, direction, packed and/or unpacked dimensions, signedness, and default value) is specified directly in the port list.

This syntax is most easily shown with an example. Here we declare a module `myModule` with three ports `a`, `b`, and `c`:

```verilog
module myModule (
  input a,
  input int b,
  output signed logic [7:0] c,
);
  ...
endmodule
```

## Non-ANSI style

Non-ANSI style is a bit more complicated. To illustrate its syntax, let's rewrite the snippet from before using non-ANSI style, equivalent to the one from the previous example:

```verilog
module myModule (a, b, c);
  input a;
  input b;
  output signed [7:0] c;

  int b;
  logic [7:0] c;

  ...
endmodule
```

Here the ports are first listed in the port list and then declared in the body of the module. The declaration itself can be split into two parts: the first part specifying the direction, and the second part specifying the type. This order is fixed; it is illegal to specify the type before the direction. If the port has dimensions, these should be added to both parts, although most simulators will allow the dimensions to be omitted from the direction part. The port's signedness can be added to either one of the parts.  

Port declarations can also be done in one go by specifying direction and type simultaneously:

```verilog
module myModule (a, b, c);
  input a;
  input int b;
  output logic signed [7:0] c;

  ...
endmodule
```

## Some more exotic non-ANSI constructs

Non-ANSI style allows several less-commonly used constructs. While using them is not recommended, it is still useful to know they exist, even if only to identify bugs. 

### Empty ports

You are allowed to put empty ports in the port list. These indicate ports that are not connected to anything in the module. Empty ports like this can easily be added accidentally, e.g. by forgetting to remove a trailing comma.

```verilog
module m1(a, b, ); // This module has 3 ports
  input a;
  output b;

  ...
endmodule
```

### Repeated ports

The same port can appear twice in the port list. The ports with the same name will be connected to the same internal net. Like empty ports, this, too, can be accidental. In large designs with very long port lists, the same name might unintentionally be added twice.

```verilog
module m2(a, b, a);
  input a;
  output b;

  ...
endmodule
```

### Port expressions

It is allowed to place concatenations and selections, or a combination of the two, in the port list. In this example, there are two internal ports, `a` and `b`, and two unnamed external ports. When the unnamed ports are connected, the first 4 bits of the first port will be connected to the first 4 bits of `a`, the fifth bit of the first port will be connected to `b`, and the 4 bits of the second port will be connected to the last 4 bits of `a`.

```verilog
module m3({a[7:4], b}, a[3:0]);
  input [7:0] a;
  output b;

  ...
endmodule
```

# So which one should I use?

ANSI style syntax is newer and was intended to replace non-ANSI style. It is more compact, less likely to introduce accidental bugs, and places all the relevant port information in one place. Generally, if there is a choice, ANSI style port declarations are always preferred over the older non-ANSI style.
