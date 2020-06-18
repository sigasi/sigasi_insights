---
title: "VHDL 2019: Enhanced generic types"
date: 2020-06-16
author: Bart Brosens
pager: true
comments: true
bannerad: true
---

This is the third article in our series about VHDL 2019.
In this article the enhanced generic types are discussed.
You can read the second part [here]({{< ref "/tech/what-is-new-in-vhdl-2019-part2.md" >}}).

# Enhanced generic types
VHDL 2019 improves generic types and subprograms. In VHDL 2008 generic types were introduced, these
generic types can be bound to any type. In addition to the generic type, a number of generic operations can be
provided with the type. For example:

```vhdl
entity max is
  generic (
    type element_t;
    type array_t;
    function maximum(l : array_t) return element_t
  );
  port (
    clk    : in std_logic;
    input  : in array_t;
    output : out element_t
  );
end;

architecture impl of max is
begin
  output <= maximum(input) when rising_edge(clk);
end
```

The operations passed with the generic type describe the capabilities of this type. Implicitly the `=` and `/=`
operators are also passed in the generic list, for every generic type.

In VHDL 2019 the working group decided to make generic types easier to use by allowing the designer to constrain the type to a
type class. The implicit declarations of that type class are then automatically available.

```vhdl
entity max is
  generic (
    type element_t is <>; -- "<>" means "scalar type"
    type index_t   is <>;
    type array_t   is array(index_t) of element_t
  );
  port (
    clk    : in std_logic;
    input  : in array_t;
    output : out element_t
  );
end;
```

Now we have constrained `element_t` and `index_t` to be scalar types. This means that all implicit declarations
like `=`, `>=`, `to_string`, … and all attributes defined for scalars are available for these types. The subprogram
`maximum` is implicitly defined for scalar types so it is no longer necessary to pass the subprogram explicitly. We
have also constrained `array_t` to be an array type. Aside from `scalar` and `array`, VHDL 2019 defines seven more
generic types, each with their own implicit operations such as `maximum`, `to_string` and `=`. In conclusion, we have
gained type-safety by constraining the generic types, and the solution is less verbose because many implicit operations
don't have to be passed explicitly.

To make generic types even less verbose incomplete formal port types are introduced. In short, this allows us to
describe a nested generic type without giving it a name.

```vhdl
entity max is
  generic (
    type array_t is array(type is <>) of type is <>
  );
  port (
    clk    : in  std_logic;
    input  : in  array_t;
    output : out array_t’element
  );
end;
```

This example can be improved further: the generic type definition can be moved to the port definition.

```vhdl
entity max is
  port (
    clk    : in std_logic;
    input  : in type array_t is array(type is <>) of type is <>;
    output : out input’subtype’element
  );
end;
```

VHDL 2019 allows incomplete formal types to be used on the port declaration. We have used this to declare the
port `input`. For consistency, port lists are now analyzed in order, just like generic lists have been since 2008. This
means that you can refer to a previously defined port to declare a port, this is how the type of port `output` is declared.
The result is that not only the declaration of the entity `max` is less verbose, but also its instantiation is more concise.
This is because no generic parameters have to be passed, the generic type arguments are inferred from the
port list.

```vhdl
maximizer : entity work.max port map(clk, input, output);
```

The use case for these generic types is not limited to RTL. Dynamic data structures can now be developed as a
library, these data structures are essential for verification libraries. The next example shows how such a data
structure may be used.

```vhdl
type int_list is new generic_list
  generic map(vect => integer_vector);

variable lst : int_list;
lst.addAll((1, 2, 3));  -- (1, 2, 3)
lst.add(10);            -- (1, 2, 3, 10)
lst.index_of(3);        -- returns 2
lst.remove_all(2);      -- (1, 3, 10)

type int_to_string is new generic_map
  generic map(key => integer, value => string);

variable lookup_table : int_to_string;
lookup_table.put(1, "this");  -- (1 -> "this")
lookup_table.put(8, "that");  -- (1 -> "this", 8 -> "that")
lookup_table.get(8);          -- returns "that"
lookup_table.exists(3);       -- returns false
```

To build these dynamic data structures, several other features had to be added to the language. First of all, protected
types can be parameterized with generic types, in this example `generic_list` and `generic_map` are protected types.

Many restrictions on where and how protected types can be used had to be lifted. Garbage collection has been added
such that the designer does not have to manually delete these dynamic data structures after use. These data structures
are not a part of the 2019 standard. Rather they serve as experimentation for verification libraries.

In conclusion, the improvements that were made to generic types make them more type-safe and reduces their
verbosity. They also enable new kinds of libraries.

Read on for [part 4]({{< ref "/tech/what-is-new-in-vhdl-2019-part4.md" >}}).

