---
title: Verilog Duplicate Port
---

When using the non-ANSI style, it is legal to have duplicate ports in the port list. However, such duplicate ports are often the result of a coding error and can cause unintended behavior. Duplicate ports are marked as warnings by Sigasi (rule 140).

<pre>
module discouraged_code(
    a,
    <span class="warning">a</span>,
    b
);
    input a;
    output b;
    ...
endmodule
</pre>

{{% lintrule sv 140 %}}