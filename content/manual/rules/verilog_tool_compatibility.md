---
title: Tool Compatibility Rules
linting: verilog
---

Different EDA tools have extended the Verilog and SystemVerilog
standard in diverging ways. To maximize tool compatibility, Sigasi
allows some constructs not included in the standards. The linting rules
listed below mark the usage of such constructs as a warning, which can
be disabled individually if you use a tool that allows a particular
construct.

# Whitespace following a backtick

Some tools allow additional whitespace following the backtick of a preprocessor directive.

<pre>
`define A 1
` <span class="warning">define</span> B 2 /* unexpected whitespace following the backtick */
</pre>

{{%lintrule sv 117 %}}

# Invalid preprocessor syntax

Some directives and escape sequences such as <code>``</code> and
<code>`"</code> can only be used inside the body of a macro definition.
Some tools are however more lenient, allowing them also elsewhere.

<pre>
var asdf = <span class="warning">`"</span>asdf"; // Unexpected `" directive outside macro body
</pre>

{{%lintrule sv 121 %}}
