---
title: VHDL coding style rules
---

Sigasi Studio has a number of checks on VHDL coding style.

## Extended identifier contains whitespace

Sigasi Studio flags an info message when using extended identifiers
which contain whitespace (rule 228). Particularly in mixed-language
(VHDL and Verilog or SystemVerilog) designs, these identifiers may
cause problems in Verilog and SystemVerilog as they use whitespace to
mark the end of an extended identifier.

<pre>
signal <span class="uglycode">\foo bar\</span> : std_logic  -- identifier with spaces: not recommended!
</pre>

{{% lintrule 228 %}}
