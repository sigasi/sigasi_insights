---
title: Verilog ambiguous reference
---

In Verilog, it is possible to reference identifiers from different files. However, if multiple files are declaring the same identifier there is no way to know which one should be used. Such cases will be marked as ambiguous references.

A possible reason you might be seeing these errors is that your project defines multiple top levels that have been mapped to the same library. More information about library mappings can be found [here]({{< ref "/manual/libraries" >}}).

<pre>
module inner;
    ...
endmodule
</pre>

<pre>
module inner(input x, y);
    ...
endmodule
</pre>

<pre>
module bad_code;
    <span class="error">inner</span> inner_inst();
endmodule
</pre>

<!-- Not configurable -->