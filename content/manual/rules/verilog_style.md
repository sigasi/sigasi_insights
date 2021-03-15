---
title: Verilog coding style
---

Sigasi Studio has a number of checks on Verilog coding style.

## File name does not match design unit

It is recommended that the base name of the filename is the same as the name of the design unit (e.g. module) in the file (rule 17). Sigasi Studio flags a warning if that is not the case.

E.g. `module my_module` should be in a file `my_module.v` or `my_module.sv` .

In a file with multiple design units (which is not recommended), this rule is not active.

## File contains multiple design unit

It is recommended that a (System)Verilog file contains only one design unit (rule 18). Sigasi Studio flags a warning if that is not the case.

## Verilog code line too long

For legibility, it is recommended to keep lines of code short (rule 20). Sigasi Studio flags a warning if a code line is longer
than a certain length. The maximum length is set to 120 characters by default, but this can be changed in the
[project linting settings](/manual/linting/#project-specific-linting-settings) (`${project_location}/.settings/com.sigasi.hdt.verilog.linting.prefs`). E.g.:

```
20/params/max_line_length/<project>=123
```

## Tabs are not allowed

While this may potentially be controversial, TABs are forbidden in majority of coding standards in the HDL domain with the motivation
of code not looking the same regardless of the editor/settings used. This check is off by default but it can be enabled in
the workspace or project linting settings (rule 21).

## File header comment does not match required pattern

Many conding standards require presense of header comment in every file, matching a certain format. Sigasi Studio can check whether the file
header comment matches a pattern (rule 22). By default, the pattern is empty which turns this check off.
The pattern can be configured through **Window > Preferences > Sigasi > (System)Verilog > Naming conventions > File header* and uses
the [Java regex syntax](https://docs.oracle.com/javase/8/docs/api/index.html?java/util/regex/Pattern.html).

## Multiple statements per line

For readability, each statement should be on a separate line. Sigasi
Studio will flag a warning if a line of code contains multiple
statements (rule 47).

<pre>module rule47;
    reg A, B, C, D, K, M;
    reg EN;

    <span class="uglycode">assign A = B & C, D = K & M;</span>    // multiple statements in one line: less readable

    <span class="goodcode">assign A = B & C;</span>               // one statement per line: more readable
    <span class="goodcode">assign D = K & M;</span>

    always@(*)
        if(EN==1'b1) begin
            <span class="uglycode">A = B & C; D = K & M;</span>   // multiple statements in one line: less readable

            <span class="goodcode">A = B & C;</span>              // one statement per line: more readable
            <span class="goodcode">D = K & M;</span>
        end
		
endmodule</pre>

{{% lintrule sv 17 18 20 21 22 47 %}}
