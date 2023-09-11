---
title: Verilog Coding Style
linting: verilog
---

Sigasi Studio has a number of checks on Verilog and SystemVerilog coding style.

### Empty loops and conditional branches

While occasionally intended, this construction is confusing, and often
the result of a typo. Sigasi will flag a warning if an empty block is
found (rule 1). In RTL code for synthesis, empty conditional branches
in sequential code can cause unwanted latch generation. There may
be a couple of reasons why an empty block is present in your code:

* It is an unintentional omission and should be fixed to prevent unexpected behavior.
* Some functionality is not yet, or never will be, supported. In this case, a `$fatal` (or similar) system task should be called.
* It is intentionally blank. In this case, a comment should clarify the reason why.

### File name does not match design unit

It is recommended that the base name of the filename is the same as the name of the design unit (e.g. module) in the file (rule 17). Sigasi Studio warns if that is not the case.

For example, `module my_module` should be in a file named `my_module.v` or `my_module.sv` .

In a file with multiple design units (which is not recommended), this rule is not active.

### File contains multiple design unit

It is recommended that a Verilog file contains only one design unit (rule 18). Sigasi Studio warns if that is not the case.

<pre>
module foo;
endmodule

module <span class="warning">bar</span>;
endmodule
</pre>

### Verilog code line too long

For legibility, it is recommended to keep lines of code short (rule 20). Sigasi Studio warns if a code line is longer
than a certain length. The maximum length is set to 120 characters by default, but this can be changed in the
[project linting settings](/manual/eclipse/linting/#project-specific-linting-settings).

### Tabs are not allowed

While this may potentially be controversial, TABs are forbidden in the majority of coding standards in the HDL domain with the motivation
of code not looking the same regardless of the editor/settings used. This check is set to {{< severity ignore 0 >}} `ignore` by default but it can be enabled in
the workspace or project linting settings (rule 21).

### File header comment does not match required pattern

Many coding standards require the presence of a header comment in every file, matching a certain format. Sigasi Studio can check whether the file
header comment matches a pattern (rule 22). By default, the pattern is empty which disables this check.
The pattern can be configured through **Window > Preferences > Sigasi > (System)Verilog > Naming conventions > File header** and uses
the [regex syntax](https://sigasi.com/app/regex).
More information on file header comment checking is available [here](/manual/eclipse/linting/#naming-conventions).

### Report encrypted regions

Starting with Verilog 2005, regions of Verilog and SystemVerilog files
may be encrypted to protect intellectual property.  Sigasi obviously
won't check the content of these regions.  Optionally, Sigasi can flag
the presence of encrypted regions in your code (rule 44). This rule is
off by default (i.e. set to `IGNORE`) but can be enabled (as info,
warning, or error) as required.

### Multiple statements per line

For readability, each statement should be on a separate line. Sigasi
Studio will flag a warning if a line of code contains multiple
statements (rule 47).

<pre>module rule47;
    reg A, B, C, D, K, M;
    reg EN;

    assign A = B & C, <span class="warning">D</span> = K & M;    // multiple statements in one line: less readable

    <span class="goodcode">assign A = B & C;</span>               // one statement per line: more readable
    <span class="goodcode">assign D = K & M;</span>

    always@(*)
        if(EN==1'b1) begin
            A = B & C; <span class="warning">D</span> = K & M;   // multiple statements in one line: less readable

            <span class="goodcode">A = B & C;</span>              // one statement per line: more readable
            <span class="goodcode">D = K & M;</span>
        end
endmodule</pre>

### Regular expressions compatibility

[Naming conventions](/manual/eclipse/linting/#naming-conventions) in Sigasi
use [*RE2/J* regular expressions](https://www.sigasi.com/app/regex).
RE2/J expressions mitigate potential performance problems that are
caused by some shapes of regular expressions using the regular Java
regular expression engine.  Sigasi will warn if a naming convention
rule contains a regular expression that is incompatible with RE2/J
(rule 58).

{{% ruleConfiguration many=yes %}}
{{< rule id=1 postcomment="Empty loops and conditional branches" />}}
{{< rule id=17 postcomment="File name does not match design unit" />}}
{{< rule id=18 postcomment="File contains multiple design unit" />}}

{{< rule id=20 comment="Verilog code line too long" >}}
{{< param/int name=max_line_length min=1 >}}
{{< /rule >}}
{{< rule id=21 postcomment="Tabs are not allowed" />}}
{{< rule id=22 postcomment="File header comment does not match required pattern" />}}
{{< rule id=44 postcomment="Report encrypted regions" />}}
{{< rule id=52 postcomment="Multiple statements per line" />}}
{{< rule id=58 postcomment="Regular expressions compatibility" />}}
{{% /ruleConfiguration %}}

<!-- 47 and 58 not configurable in preferences, only in file -->
