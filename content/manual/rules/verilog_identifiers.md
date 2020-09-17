---
title: Verilog identifiers
---

## VHDL keywords as module name

The use of VHDL keywords as a (System)Verilog module name is not recommended. In mixed-language projects in particular it
could lead to unexpected results. Sigasi Studio flags a warning when a VHDL keyword is used as a module name (rule 7) .

<pre>module <span class="badcode">entity</span>;
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

<pre>module <span class="badcode">bad__code</span>(input <span class="badcode">clk_</span>);
endmodule

module <span class="goodcode">goodcode</span>(input <span class="goodcode">clk</span>);
endmodule</pre>


{{% lintrule sv 7 42 43 %}}
