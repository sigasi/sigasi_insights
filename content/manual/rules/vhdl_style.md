---
title: VHDL Coding Style Rules
linting: vhdl
---

Sigasi Studio has a number of checks on VHDL coding style.

## Extended identifier contains whitespace

Sigasi Studio flags an info message when using extended identifiers
which contain whitespace (rule 228). Particularly in mixed-language
designs, these identifiers may cause problems in
Verilog and SystemVerilog as they use whitespace to mark the end of
an extended identifier.

<pre>
signal <span class="info">\foo bar\</span> : std_logic  -- identifier with spaces: not recommended!
</pre>

{{% lintrule 228 %}}

## VHDL code line too long

For legibility, it is recommended to keep lines of code short (rule 97). Sigasi Studio warns if a code line is longer
than a certain length. The maximum length is set to 120 characters by default, but this can be changed in the
[project linting settings](/manual/linting/#project-specific-linting-settings) (`${project_location}/.settings/com.sigasi.hdt.vhdl.linting.prefs`). E.g.:

```
97/params/max_line_length/<project>=123
```

{{% lintrule 97 %}}
