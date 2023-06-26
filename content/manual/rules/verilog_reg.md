---
title: Verilog reg and logic Datatype
linting: verilog
---

In SystemVerilog, the `reg` datatype is deprecated. It is recommended to use the `logic` datatype instead.

Sigasi Studio warns when the `reg` datatype is used in SystemVerilog.

A [Quick fix](/manual/linting/#quick-fixes) is available to convert `reg` into `logic`.

<pre>module my_module;
    <span class="info">reg</span>   deprecated;
    <span class="goodcode">logic</span> good;
endmodule</pre>

{{% lintrule sv 3 %}}
