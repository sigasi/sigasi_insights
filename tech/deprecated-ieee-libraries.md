---
title: "Deprecated IEEE Libraries"
layout: page 
pager: true
author: heeckhau (Sigasi)
date: 2012-05-15
tags: 
  - linting
  - VHDL IEEE
  - VHDL packages
---
# What are deprecated IEEE libraries?

Don't use `ieee.std_logic_unsigned` and similar libraries because they are not standardized. 
Instead, **use ieee.numeric_std.all**.

_Note_: if you want to **disable** warnings for this in the Sigasi tool, select **Window > Preferences > Sigasi> VHDL > Errors/Warnings** and at the bottom of that page, set the severity of **"Deprecated IEEE packages"** to **ignore**.

# Why is that?

_This article was originally published at <http://tams-www.informatik.uni-hamburg.de/vhdl/doc/faq/FAQ1.html#4.11>_

The IEEE did not, originally, define a standard set of types and overloaded functions to handle vectors which contained coded numeric values. This meant that individual vendors were free to define their own types and functions.
Synopsys produced three packages - std_logic_arith, std_logic_signed, and std_logic_unsigned. std_logic_signed/std_logic_unsigned operated on type std_logic_vector, and gave an implicit meaning to the contents of the vector. std_logic_arith, however, defined two new types, SIGNED and UNSIGNED, and operated on these types only. Unfortunately, Synopsys decided that these packages should be compiled into library IEEE. Other vendors, including Cadence and Mentor, now produced their own versions of std_logic_arith, which were not the same as Synopsys's. They also required their packages to be placed in library IEEE.

Finally, the IEEE decided to standardize this situation, and produced packages numeric_bit and numeric_std (see Section 4.8 on how to obtain numeric_bit and numeric_std). numeric_bit is based on type bit, numeric_std on on type std_logic. Both packages followed Synopsys in defining new types, SIGNED and UNSIGNED. However, the package functions did not have the same names, or parameters, as the Synopsys functions.

Currently many vendors support numeric_bit/numeric_std. Hence, for maximum portability, avoid using a package called std_logic_signed or std_logic_unsigned, and always use SIGNED or UNSIGNED types (or integers) for arithmetic. If you are using Synopsys, use std_logic_arith, and if you are not using Synopsys, use numeric_std (if it is supported). This is not completely portable, since the functions are still different (for example, TO_UNSIGNED vs. CONV_UNSIGNED), but it is a lot better than using different types in different environments.

Partially extracted from an article by Evan Shattock.