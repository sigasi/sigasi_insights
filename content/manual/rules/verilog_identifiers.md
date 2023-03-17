---
title: Verilog identifiers and data types
---

## VHDL keywords as module name

The use of VHDL keywords as a (System)Verilog module name is not recommended. In mixed-language projects in particular it
could lead to unexpected results. Sigasi Studio flags a warning when a VHDL keyword is used as a module name (rule 7) .

<pre>module <span class="error">entity</span>;
endmodule

module <span class="goodcode">my_module</span>;
endmodule</pre>

## Underscores in identifier names

The following naming cases should be avoided in Verilog identifiers:

* module or port name ending with underscore: `bad_`
* any name having consecutive underscores: `very__bad`

The recommendation is mainly based on tool and library compatibility issues.
This is a typical unofficial convention to reserve those types of names as internal to tools.

Sigasi Studio flags a warning for consecutive underscores (rule 42) and trailing underscores (rule 43) in module and port names.

<pre>module <span class="error">bad__code</span>(input <span class="error">clk_</span>);
endmodule

module <span class="goodcode">goodcode</span>(input <span class="goodcode">clk</span>);
endmodule</pre>

## Non-packed member in packed struct or union

Packed structures and unions can only contain members of packed data types and integer data types (rule 59).

<pre>class AClass; endclass

typedef struct packed { <span class="goodcode">int a;</span>    } intstruct;
typedef struct packed { <span class="error">real a;</span>   } realstruct;
typedef struct packed { <span class="error">AClass a;</span> } classstruct;</pre>


## Illegal type in untagged union

Dynamic types and chandle types can not be used in untagged unions (rule 60).

<pre>class AClass; endclass

typedef union { <span class="goodcode">int a;</span>    } intunion;
typedef union { <span class="error">string a;</span> } stringunion;
typedef union { <span class="error">AClass a;</span> } classunion;</pre>

{{% lintrule sv 7 42 43 59 60 %}}
