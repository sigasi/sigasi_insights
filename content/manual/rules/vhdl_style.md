---
title: VHDL Coding Style Rules
linting: vhdl
---

Sigasi Studio has a number of checks on VHDL coding style.

### Extended identifier contains whitespace

Sigasi Studio flags an info message when using extended identifiers
that contain whitespace. Particularly in mixed-language
designs, these identifiers may cause problems in
Verilog and SystemVerilog as they use whitespace to mark the end of
an extended identifier.

<pre>
signal <span class="info">\foo bar\</span> : std_logic  -- identifier with spaces: not recommended!
</pre>

### Line is too Long

For legibility, it is recommended to keep lines of code short. Sigasi Studio warns if a code line is longer
than a certain length. The maximum length is set to 120 characters by default, but this can be configured on
the **Errors/warnings** page of the project settings or workspace preferences.

### Magic number, bitstring, or string in statement

A design often requires certain constant numbers, bitstrings, or string literals. To optimize code maintainability, it is recommended to use generics or define such literals in constants rather than hardcoding them directly into statements. If this rule is enabled, Sigasi Studio will flag all magic numbers, bitstrings, and strings used in statements.

The rule can be configured to work on numbers, bitstrings, and/or strings. It is also possible to configure a set of literal values that are allowed in statements, this is done using a [regular expression](https://sigasi.com/app/regex).  

<pre>
...
s_output <= func(s_input, <span class="warning">4032</span>);
...
</pre>

<pre>
...
constant Size : integer := 4032;
...
s_output <= func(s_input, <span class="goodcode">Size</span>);
...
</pre>

### Sequence of operators without parentheses

When writing an expression containing a sequence of operators the order of execution might not always be obvious. For this reason, it is recommended to add sufficient parentheses to expressions that include multiple non-associative operators. If this rule is enabled, Sigasi Studio will flag all such expressions.

<pre>
s_output <= <span class="warning">s_input mod 4</span> + 3;
</pre>

<pre>
s_output <= <span class="goodcode">(s_input mod 4)</span> + 3;
</pre>

### Constant width vector assigned to signal

To optimize code maintainability and portability, it is not recommended to assign vectors of constant width to signals. If this rule is enabled, Sigasi Studio will flag all signal assignments that use constant width vector literals.

<pre>
s_output <= <span class="warning">"00000000"</span>;
</pre>

<pre>
s_output <= <span class="goodcode">(others => '0')</span>;
</pre>

{{% ruleConfiguration many=yes %}}
{{< rule id=228 comment="Extended identifier contains whitespace" />}}

{{< rule id=97 comment="Line is too long" >}}
{{< param/int name="max_line_length" min=1 >}}
{{< /rule >}}
{{< rule id=235 comment="Magic number, bitstring, or string" >}}
{{< param/bool name="check_number" >}}
{{< param/bool name="check_bitstring" >}}
{{< param/bool name="check_string" >}}
{{< param/regex name="allow_literal_pattern" >}}
{{< /rule >}}
{{< rule id=230 comment="Sequence of operators without parentheses" />}}

{{< rule id=231 comment="Constant width vector assigned to signal" />}}
{{% /ruleConfiguration %}}
