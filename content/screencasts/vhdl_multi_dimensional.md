---
title: "Multi-dimensional array and record checks in VHDL"
layout: youtube
date: 2020-12-10
pager: false
comments: false
videoid: 1IXhN5kKWxM
tags:
  - editor
  - VHDL
  - linting
---

In the [Sigasi Studio 4.10 release]({{< ref "/releasenotes/sigasi-4.10.md" >}}) we have extended the vector size mismatch check to check vectors in records and multi-dimensional arrays.

Let’s look at a few examples.

The first example is a simple vector assignment.
Sigasi flags the clear size mismatch: the declaration specifies 32 bits, the actual value of the VHDL2008 literal is only 30 bits.
When we correct the size, the problem disappears immediately.

Sigasi Studio now also checks multidimensional arrays.
The array constant has 4 rows of 32 bit vectors.
Because the right hand side has one element too many, Sigasi flags this mistake.
When we drop one element, the warning is resolved.

This also works in records.
`rec_type` is a record declaration with two unconstrained vector record elements.
The constant `rec_constant` declares both elements to be 33 bit wide vectors.

Because the initialization only has a 30 bit wide vector for the second element, Sigasi Studio flags this.
We can resolve this by changing the vector width of the second element.

Other EDA tools only report this kind of problems when the simulator initializes the constants at runtime.
So, having this feedback while you type, saves you a lot of time.