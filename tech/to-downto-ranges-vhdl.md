---
title: 'To "to" or to "downto"... Ranges in VHDL'
layout: page 
pager: true
author: Hendrik Eeckhaut
date: 2014-09-05
tags: 
  - VHDL
---
Most VHDL designers write 'something `downto` something' in their code all the time. But what does this `downto` actually mean. And what is the difference with `to`?

The keywords `downto` and `to` specify the *direction* of *ranges* in VHDL. `downto` is descending (going down); `to` is ascending (going up).


## Ranges in Arrays

When used in arrays, `downto` corresponds to [little endian](http://en.wikipedia.org/wiki/Endianness). This means that the least significant bit is stored at the lowest position. So in `L downto R`, `L` corresponds to the Most Significant Bit (MSB) and `R` to the Least Significant Bit (LSB).
`to` corresponds to [big endian](http://en.wikipedia.org/wiki/Endianness). So in `L to R`, `L` is the LSB and `R` the MSB.

In the VHDL snippet below, `little_endian` is initially `"0000_0001"` and `big_endian` is initially `"1000_0000"`:
```vhdl
signal big_endian : std_logic_vector(0 to 7) := ( 0 => '1', others => '0');
signal little_endian : std_logic_vector(7 downto 0) := ( 0 => '1', others => '0');
```

There are advantages to both `downto` and `to`. However, most VHDL code I have seen, favors `downto`. The most important message is to stick to one direction for ranges. If you can, avoid mixing `downto` and `to` because this leads to confusion and bugs.


### Assigning arrays

There are multiple ways to assign values to arrays, with varying degrees of elegance.

If have summarized a few ways below for following declaration: `signal my_array : std_logic_vector(7 downto 0);`

```vhdl
-- assign to element
my_array(0)          <= '0';
-- assign slice
my_array(3 downto 0) <= "0001";
-- positional association
my_array             <= ('0', '0', '0', '0', '0', '0', '0', '1');
-- named association variants
my_array             <= (0 => '1', others => '0'); 
my_array             <= (0 => '1', 1 => '1', others => '0'); 
my_array             <= (0 | 1 => '1', others => '0');
my_array             <= (1 downto 0 => '1', others => '0'); 
```

Note that you can not mix positional and named association.

## Special cases

### Null ranges

A range is called a *null range*, when it specifies a empty subset. For descending ranges (`L downto R`), this is when `L < R`. For ascending ranges (`L to R`) this is when `L > R`. This sometimes happens for certain function parameters or generics. Your simulator should handle this without problems. 

### Single element ranges

A typical special case is a range with just one element:
```vhdl
signal single_element_array : std_logic_vector(0 downto 0);
```

Be careful with assignments:
```vhdl
single_element_array <= '0'; --illegal, single_element_array is still an array
single_element_array <= ('0'); --also illegal, the optional parentheses do not turn this into an array
single_element_array <= (0 => '0'); -- OK
single_element_array <= (others => '0'); -- OK
single_element_array(0) <= '0'; -- OK
```

### Unconstrained ranges

VHDL also allows you to define *unconstrained arrays*, which are array declarations where the *type* of the index values is specified, but not the *bounds*.
A typical examples is  `std_ulogic_vector`:
```vhdl
type std_ulogic_vector is array ( natural range <> ) of std_ulogic;
```
This defines `std_ulogic_vector` as an array type with indexes of type natural. The bounds can be specified via _object_ creation or via a _subtype_.

```vhdl
subtype myarray is std_ulogic_vector(7 downto 0);
constant myconst : std_ulogic_vector(7 downto 0) := (others => '0');
```

### Non integer ranges

The index type of ranges does not need to be numeric, but it has to be discrete. For example: you can specify ranges for enumeration values, and use them to specify arrays.

```vhdl
type myEnum is (a,b,c,d,e);
type myArray is array(a to d) of integer;
constant myArrayConstant : myArray := (a => 42, others => 0);
```