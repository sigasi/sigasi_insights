---
title: "Records in VHDL: Initialization and Constraining unconstrained fields"
layout: page 
pager: true
author: Wim Meeus
date: 2020-03-31
tags: 
  - VHDL
  - syntax
comments: true
bannerad: true
---

In VHDL, **records** help the designer **organize data that belongs
together**. By using records, VHDL code will be **easier to understand and
maintain**. This article highlights a couple of slightly more advanced
aspects of record types in VHDL, namely how to use **record constants**,
and how to use **unconstrained data types as fields** in records. We'll see that,
apart from some particular syntax, records are fairly easy to use
after all.

## Record constants, arrays of records and their initialization

Let's start with a simple example. Type `t_rec1` is a record with 2
fields. There are two ways to declare a record constant. **Name binding
is recommended for readability and maintainability**. Alternatively one
can use positional binding, in which fields are entered in the same order
as the type declaration. Imagine adding a field in the middle of a
large record and then having to update all constants of that
type. With **positional binding, there is a high risk of mistakes** as the new
entry has to be added exactly in the right place, which is harder to
find without field names.

```vhdl
type t_rec1 is record                  -- Declare a record with two fields
   f1 : std_logic;
   f2 : std_logic_vector(7 downto 0);
end record t_rec1;

constant zero_rec1 : t_rec1 := (       -- Declare a constant: declare the value of each field
   f1 => '0',                          -- Recommended: use name binding
   f2 => (others => '0')
);

constant one_rec1 : t_rec1 := (        -- Not recommended: positional binding for record constants
   '1',
   (others => '1')
);
```

It is possible to make **arrays of records**, as in the next piece of
code. A mix of **pre-existing constants and explicit values** can be used
for the initialization of array elements.

```vhdl
type t_rec1_array is array (natural range 0 to 1023) of t_rec1;

constant recarr1 : t_rec1_array := (
   1      => one_rec1,                  -- initialize recarr1(1) from the existing constant
   2      => (f1 => '0', f2 => x"02"),  -- initialize recarr1(2) with these values
   others => zero_rec1);                -- initialize the rest of the array with the value of zero_rec1
```

Furthermore, **records can have fields of record and array
types**. Again, pre-existing constants and explicit values can be used
for initialization. While it's starting to look more complex, it's
easy to remember that **each array, value and record** initialized from
explicit values requires a **pair of brackets**.


```vhdl
type t_rec2 is record
   ff1 : t_rec1;
   ff2 : t_rec1_array;
end record t_rec2;

constant one_zero_rec2 : t_rec2 := (
   ff1 => one_rec1,
   ff2 => (others => (                   -- others: initialize all elements of the array
      f1 => '0',                         -- value of each element of the array
      f2 => (others => '0')              -- others: initialize all bits of the std_logic_vector
   ))
);
```

## VHDL 2008: Unconstrained fields in records

VHDL has the concept of *unconstrained data types*, which means that
the range of an array or vector is not declared in the type. The range
must be declared when an instance of the type is created. An example of
an unconstrained type is `std_logic_vector`. The length of the vector
gets declared when the type is used, and is not a property of the type
itself.

Starting with **VHDL 2008, records may contain unconstrained data
types**. This adds another level of flexibility to records. The sizes
of _unconstrained_ fields of a record can be determined when a
constant, signal... of the record type is used. 

```vhdl
   -- Attention: VHDL 2008
   type t_urec1 is record               -- Declare a record with two fields
      f1 : std_logic_vector;            -- The length of the fields is undeclared at this point
      f2 : std_logic_vector;
   end record t_urec1;

   constant zero_urec1 : t_urec1(       -- Declare a constant 
      f1(7 downto 0),                   --   range of f1
      f2(15 downto 0)                   --   range of f2
   ) := (
      f1 => (others => '0'),            --   value of f1
      f2 => (others => '0')             --   value of f2
   );

   constant one_urec1 : t_urec1(        -- Declare a constant with different field sizes
      f1(0 to 11),                      --   range of f1
      f2(17 downto 0)                   --   range of f2
   ) := (
      f1 => (others => '1'),            --   value of f1
      f2 => (others => '1')             --   value of f2
   );
```

Again, these **records with unconstrained data types** as fields can
be used as the **base data type of arrays and records**. When using
the record type, **all ranges must be properly constrained**.

```vhdl
-- Attention: VHDL 2008
type t_urec1_array is array(natural range <>) of t_urec1;  -- Array declaration ... unconstrained!

constant arr_urec1: t_urec1_array(0 to 1023)               -- Declare an array with 1024 elements
   (f1(4 downto 0), f2(15 downto 0))                       -- Declare width of unconstrained fields
   := (others => (                                         -- others: each array element
      f1 => (others => '0'),                               --   others: each bit of f1
      f2 => x"CAFE")
   ); 
```

```vhdl
-- Attention: VHDL 2008
type t_urec2 is record                                     -- Record of unconstrained records
   ff1: t_urec1;
   ff2: t_urec1;
end record t_urec2;

constant c_urr: t_urec2 (                                  -- ALL fields must be constrained in 
   ff1(f1(4 downto 0), f2(15 downto 0)),                   --  constant/variable/signal/port...
   ff2(f1(0 to 5), f2(7 downto 4))                         --  declaration
) := (
   ff1 => (f1 => "10011", f2 => (others => '1')), 
   ff2 => (f1 => "110011", f2 => x"A")
);
```

Even a record containing an unconstrained array of records is possible,
as shown below. Proper use of newlines (and Sigasi Studio's formatting -- try **CTRL+SHIFT+F**) will help to **keep your code readable**.

```vhdl
-- Attention: VHDL 2008
type t_uarec is record                                     -- A record containing
   ff1 : t_urec1;                                          --   an unconstrained record and
   ff2 : t_urec1_array;                                    --   an unconstrained array of 
end record t_uarec;                                        --       unconstrained records

constant c_uarr : t_uarec(
      ff1(f1(4 downto 0), f2(15 downto 0)),                -- Constrain record ff1
      ff2(0 to 5)                                          -- Constrain the array size (ff2)
         (f1(0 to 5), f2(7 downto 4))                      -- Constrain records inside the array
   ) := (
      ff1 => (f1 => "10011", f2 => (others => '1')),       -- Values for ff1
      ff2 => (
         0      => (f1 => "110011", f2 => x"C"),           -- Values for each array element of ff2.
         1      => (f1 => "110011", f2 => x"A"),
         2      => (f1 => "110011", f2 => x"F"),
         others => (f1 => "110011", f2 => x"E")
   )
);
```

**Earlier VHDL versions** than version 2008 **don't support unconstrained fields in records**. In those versions of VHDL, all fields must be properly constrained in the record type declaration.
