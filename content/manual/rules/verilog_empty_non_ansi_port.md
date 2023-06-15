---
title: Verilog Empty Port
---

When using the non-ANSI style, it is legal to have empty ports in the port list. An empty port will be translated to an anonymous port that nullifies anything connected to it. Such empty ports are usually the result of superfluous commas and rarely reflect the intended design. Empty ports are marked as warnings by Sigasi (rule 142).

<pre>
module discouraged_code(
    a,
    <span class="warning">,</span>
    b
);
    input a;
    output b;
endmodule
</pre>

{{% lintrule sv 142 %}}