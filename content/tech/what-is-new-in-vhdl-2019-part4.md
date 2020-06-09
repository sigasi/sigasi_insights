---
title: "VHDL 2019: Usability and APIs"
date: 2020-06-18
author: Bart Brosens
pager: true
comments: true
bannerad: true
---

In this fourth and last article in our series about VHDL 2019, we discuss some smaller usability improvements.
The new and improved APIs are mentioned.
We draw a conclusion and acknowledge the contributors of the VHDL 2019 standard.

# Usability
Aside from improving some of the core constructs of VHDL it is also important to pay attention to the small, daily
frustrations of design.

## Conditional Expressions

Users have often missed a ternary operator in VHDL. For this version we have expanded the places where the
“when-else” construct can be used:

1. Inside expressions: ```y <= a xor b after (3 ns when FAST else 5 ns);```
The when-else-expression must be in parentheses.
2. To initialize constants and attributes:
```vhdl
constant DELAY : time := 3 ns when FAST else 5 ns;
attribute RAM_STYLE of RegFile : signal is
  "distributed" when SMALL else "block";
```
3. In return statements:
```vhdl
return when condition; -- only return when the condition is true
return a when condition else b;
```

## Conditional analysis
A preprocessor was added to perform conditional compilation. The preprocessor has access to six predefined
variables:
VHDL_VERSION,
TOOL_TYPE,
TOOL_VENDOR,
TOOL_NAME,
TOOL_EDITION,
TOOL_VERSION. The syntax for the preprocessor closely follows the VHDL syntax, for example:

```vhdl
`if TOOL_VENDOR = "SIGASI" then
  attribute dont_touch of sig1 : signal is "true";
`endif
```

These predefined variables are also available as regular VHDL constants on the package std.env, making them
usable in regular expressions as follows:

```vhdl
if env.tool_type = "SIMULATION" then ... endif;
```

This allows designers to work around tool issues that can not be solved within the VHDL language. Libraries can
now target multiple VHDL versions or multiple toolchains, offering features depending on the environment.

## Sequential declaration regions
Allowing designers to declare constants and variables inside sequential regions was a frequently requested feature.
For this a sequential block statement was added.
In the following example we show an if statement inside a for statement.
Each have blocks inside to allow for declarations.
The block labels are optional.

```vhdl
p : process is
begin
  for i in some_vector’range then
    b1 : block
      constant element : integer := some_vector(i);
    begin
      if element > CONST then
        b2 : block
          variable result : integer;
        begin
          some_procedure(element, result);
          report result’image;
        end block b2;
      end if;
    end block b1;
  end for;
end process p;
```

In VHDL, variables can be synthesized in either combinatorial logic or registers, depending on how they are used.
If the value of a variable is read in a clocked process, before it is written, the variable will result in a register.
Sometimes, designers do this by mistake, leading to design errors. With sequential declarations we avoid this
confusion: Variables declared in a sequential declarative part will always be combinatorial logic.

```vhdl
p : process is
  variable combinatorial_or_register : unsigned(8 downto 0);
begin
  if rising_edge(clk) then
    b : block
      variable only_combinatorial : unsigned;
    begin
      ...
    end block b;
  end if;
end process p;
```

## Bigger integer
The minimum size of integer has been increased from 32-bit to 64-bit.

## Improved attributes
Objects now have direct access to the attributes of their type. This simplifies the use of many attributes.

Example: obtaining the string value of an object
```vhdl
report o’subtype’image(o); -- VHDL 2008
report o’image             -- VHDL 2019
```

All attributes were reviewed and many inconsistencies were resolved. For example, the “image” attribute is now
available for records and arrays.

## Attributes for PSL
PSL support was updated to the latest version (IEEE 1850-2010). In addition, it's now possible to interact with PSL
directives. There are two ways to do this.

Designers can interact with PSL directives using two attributes. The “signal” attribute is used to read the value of
the PSL directive and the “event” attribute to detect that the PSL directive has completed in this simulation cycle.

Through new subprograms in the std.env package, the verification library can check if any PSL asserts have failed,
check that all PSL objects were covered, reset the state of PSL objects and more.

# New and improved APIs
Several APIs to interact with the operating system were updated or added.

## File API
Four features were added to the std.textio API:

* Files can now be opened in “read_write_mode”
* You can determine if a file is still open using the “file_state“ function
* You can determine and modify the size of a file using the subprograms “file_size” and “file_truncate”
* Random file access was added using the subprograms “file_position”, “file_seek” and “file_rewind”

## File system API
In the package std.env several subprograms were added to interact with the file system.

* Directories can be explored using the “dir_open” subprogram and the “directory” data type
* Files and directories can be created and deleted

## Date & time API
The date and time API was added to the std.env package. It has the following features:

* The ability to query the time since EPOCH as a real
* The ability to query time as a “time_record” record, using either the local timezone or UTC
* A minimal API to increment and decrement “time_record” objects
* The ability to pretty print time using “to_string”

```vhdl
type time_record is record
  microsecond : integer range 0 to 999_999
  second      : integer range 0 to  61;
  minute      : integer range 0 to  59;
  hour        : integer range 0 to  23;
  day         : integer range 1 to  31;
  month       : integer range 0 to  11;
  year        : integer range 1 to  4095;
  weekday     : dayofweek;
  dayofyear   : integer range 0 to 365;
end record time_record;
```

## Environment variables
A minimal API to query environment variables was added to std.env.

# APIs for library builders
## Introspection
The introspection API allows users to inspect arbitrary data types. This feature is oriented towards verification
libraries and not intended for RTL.

Introspection consists of two parts: attributes to convert any object into a generic mirror object and a library
std.reflect that can be used to inspect mirror values and types. The API offers a type-safe method to inspect values at
runtime.

The most common use case for introspection is to convert arbitrary values into a known type. For example:
converting a VHDL value into a string representation, writing it to a file in the JSON format or flattening any record
into a std_logic_vector.

The introspection API is based on the mirror-based reflection research by Gilad Bracha<sup id="bref4"> [4](#ref4)</sup>. This is a proven
approach that has been used in many other languages<sup id="bref5"> [5](#ref5) [6](#ref6)</sup>. In this initial release it is not possible to create or modify
values, in a future revision this functionality could be added.

## Asserts
This API is similar to the new PSL API. You can check how many asserts have failed, modify the failure messages,
clear assertion results and much more.

This API is vital for verification libraries. The subprograms were added to the package std.env.

## Call path
Two additions were made to provide better debug information to the users of verification libraries.

The API provides functions to retrieve the file name, file path and line in the current VHDL file. Another set of
subprograms and types can be used to retrieve and inspect call path, also called stack traces.

# Conclusion
In these four articles we covered the most important features of VHDL 2019. There are big improvements to both RTL and
verification. We did so by adding interfaces, improving generic types, streamlining the language and by increasing
support and available tools for verification library designers.

The result will breathe new life into the VHDL community. The revision will be balloted and released in 2019. The
finished proposals are publicly available on the VHDL working group wiki<sup id="bref7"> [7](#ref7)</sup>.

# Acknowledgements
This language revision was the result of continuous feedback from many experienced hardware designers and library
builders who participate in the working group. The working group’s resources are limited, as such, most of the work
was done by voluntary contributors. We had to reject many proposals, often because we did not have the time to fully
explore them. But focusing on the smallest features that could have the biggest impact has been a successful strategy.

We would like to thank all members of the VHDL working group, in particular the chair: Jim Lewis and vice chairs:
Patrick Lehmann and Rob Gaddi. Without their relentless commitment VHDL 2019 would never have seen the light
of day.

# References

<a name="ref4"></a>[<a href="#bref4">4</a>] G. Bracha, D. Ungar, "Mirrors: design principles for meta-level facilities of object-oriented programming languages" In procedings of the 2004 ACM  SIGPLAN Conference on Object-Oriented Programming Systems, Languages, and Applications, pp. 331-344, ACM, New York (2004)  
<a name="ref5"></a>[<a href="#bref5">5</a>] ["Reflection in Dart with Mirrors"](https://www.dartlang.org/articles/dart-vm/reflection-with-mirrors)  
<a name="ref6"></a>[<a href="#bref5">6</a>] ["Mirror C++ reflection utilities"](http://kifri.fri.uniza.sk/~chochlik/mirror-lib/html/)  
<a name="ref7"></a>[<a href="#bref7">7</a>] ["VHDL2017 proposals"](http://www.eda-twiki.org/cgi-bin/view.cgi/P1076/VHDL2017)  
