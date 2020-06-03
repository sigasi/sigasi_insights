---
title: "What is new in VHDL 2019? part 2"
date: 2020-06-09
author: Bart Brosens
pager: true
comments: true
bannerad: true
---



## A Interfaces
Interfaces are a central element in hardware design. There are many standardized interfaces like I²C, AXI or VGA
and every design also has internally designed interfaces to connect various parts of a system. Unfortunately, these
interfaces are cumbersome to model using VHDL. Typically, they are not explicitly defined. Instead their description
is repeated on every entity. The only way to identify them is through some naming convention, e.g. all ports of the
slave AXI interface could be prefixed with “slave_axi_0_”.

This approach has many drawbacks. Since there is no centralized definition and the solution relies on naming
conventions, it can be hard to identify the interface in complex entities. It is also hard to document an interface without
a central definition. The interface is not only repeated for every entity that uses it, but also in every instantiation. All
this duplicated code makes it very cumbersome to maintain the code. If you need to change the type or name of an
element of the interface, this requires edits in many files, even in architectures that just pass the interface to an
instantiation. This situation is unacceptable for a language that highly values strong typing and early bug detection,
language level support for interfaces is needed.

Over the years designers have developed workarounds to model interfaces in VHDL. One solution is to model the
interface as a record. But different elements of a record cannot have different port directions. There are two solutions
to this problem: model this record as “inout” or split the record into multiple records, one for each port direction. The
latter method is often called the Gaisler method<sup> [6](#ref6)</sup>.

Modelling an interface as an “inout” record has the advantage that the interface is defined in one place and it can
easily be passed around. You can nest interfaces by nesting records and you can make an array of interfaces. This
approach however, has one big drawback, the compiler can no longer check the port direction. For this reason, it is
almost never used. The Gaisler method is often used. Unfortunately, it cannot handle nested interfaces and it still relies
on some naming conventions.

When we examined how interfaces could be implemented, many approaches were examined. You can make
directions part of the subtype or create a new kind of record or define a new container with different object kinds like
constants and signals. We ended up choosing the simplest solution, which we coined “mode views”. A mode view
defines port directions for elements of a record. You can look at it as a user-defined mode for records, instead of
writing "in" or "out" you refer to the "mode view".

```vhdl
package interfaces is
  type streaming_bus is record               -- the record definition
    valid : std_logic;
    data  : std_logic_vector(7 downto 0);
    ack   : std_logic;
  end record;

  view streaming_master of streaming_bus is  -- the mode view of the record
    valid, data : out;
    ack         : in;
  end view;
  
  alias streaming_slave is streaming_master’converse;
end;
```

In this “interfaces” package a record “streaming_bus” is defined. This record defines all the names and types of the
elements of the record. The record elements “valid” and “data” are used to push data over the bus, the element “ack”
is used to provide some back pressure. In the mode view “streaming_master” we create an interface for the record
“streaming_bus”. A port mode is applied to every element of the record. To maximize code reuse one record can have
many mode views. Because they are defined in a package, the definition can be reused. The record and the mode view
do not have to be defined in the same package. Using the “converse” attribute we can invert the mode view directions
in a single line. Alternatively, you can also explicitly define “streaming_slave” as follows:

```vhdl
view streaming_slave of streaming_bus is
  valid, data : out;
  ack         : in;
end view;
```

Let us take a look at how this interface can be used.

```vhdl
entity source is
  port(clk, rst : in std_logic; output : view streaming_master);
end;

entity processor is
  port(clk, rst : in std_logic;
       input    : view streaming_slave;
       output   : view streaming_master);
end;

entity sink is
  port(clk, rst : in std_logic; input: view streaming_slave);
end;

architecture a of e is
  signal clk, rst      : std_logic;
  signal input, output : streaming_bus;
begin
  producer : entity work.source     port map(clk, rst, input);
  processing: entity work.processor port map(clk, rst, input, output);
  consumer : entity work.sink       port map(clk, rst, output);
end;
```

In this example we have three instantiations that are connected using two busses. The instantiation “producer” reads
some data and pushes it to the bus “input”. This data is processed by the instantiation “processing” and pushed to the
bus “output”. Which is then consumed by the “consumer” instantiation.

Note that the view mode used in the entities “source”, “processor” and “sink” is actually written in its short form.
The long form is ```view streaming_master of streaming_bus```. But in this example, referring to the type is
redundant. It is already defined on the mode view and in this case we do not use a specific subtype. The need for a
long form will become clear in the next example.

If we now want to make the element “data” in streaming bus generic in size we need to change some definitions.

```vhdl
type streaming_bus is record
  valid : std_logic;
  data  : std_logic_vector;
  ack   : std_logic;
end record;
```
“streaming_bus” is now unconstrained, this feature has been allowed since VHDL 2008. Our mode view definitions
do not have to change. We can change the definition of the “source” entity to make the size of the bus explicit as a
generic parameter.

```vhdl
entity source is
  generic(size : natural);
  port(
    clk, rst : in std_logic;
    output   : view streaming_master of streaming_bus(data(size downto 0))
  );
end;
```

Using constraint records subtypes and explicitly defining the subtype we reuse the mode view for multiple subtypes
of the same record.

It is also possible to nest interfaces, e.g. you can combine the “input” and “output” interfaces of the “processor”
entity into one interface.

```vhdl
type processing_element_rec is record
  input, output : streaming_bus;
end record type;

view processing_element of processing_element_rec is
  input : view streaming_slave;
  output : view streaming_master;
end view;
```

Instead of writing “in” or “out” in the view we refer to the mode view that should be applied to the record element.

It is also possible to create arrays of interfaces, e.g. expanding the element “input” of the previous example to an
array of slaves:

```vhdl
type streaming_bus_array is array (natural range <>) of streaming_bus;
type processing_element_rec is record
  inputs : streaming_record_array(0 to 9);
  output : streaming_rec
end record type;

view processing_element of processing_element_rec is
  inputs : view (streaming_slave);
  output : view streaming_master;
end view;
```

In this case the view mode is applied to an array with “streaming_bus” as array element. The definition has to be
surrounded with parenthesis because the view mode is applied to an array and not a record. This syntax is similar to
how resolution functions are applied to array types.

Finally, it is also possible to pass an interface to a procedure or a function. It is not possible to return an interface
from a function.

```vhdl
procedure p(signal b : view streaming_slave; ...);
function f(signal b : view streaming_slave; ...) return ...;
```

The ability to cleanly express interfaces is the most visible improvement in VHDL 2019. It drastically improves the
readability and maintainability of VHDL designs. As shown in the examples, the provided features are very flexible
and allow the designer to model any interface.

# References

<a name="ref6"></a>[6] [J. Gaisler, "A structured VHDL design method"](http://www.gaisler.com/doc/vhdl2proc.pdf)  
