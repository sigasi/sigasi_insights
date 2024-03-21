---
title: Missing include path in preprocessor configuration
---

Sigasi attempts to automatically resolve missing [Include Paths]({{< ref "manual/eclipse/editor.md#include-paths-and-initial-preprocessor-definitions" >}}).
The \``include` directives that include files that are not explicitly in the Include Paths are marked with a warning.

<pre>module hello_world;
    import uvm_pkg::*;
    `include <span class="warning">"uvm_macros.svh"</span> // Preprocessor include paths are not configured correctly

    class packet extends uvm_transaction;
        int addr;

        `uvm_object_utils_begin(packet)
            `uvm_field_int(addr, UVM_ALL_ON)
        `uvm_object_utils_end

        constraint c { addr >= 0 && addr < 'h100; }

        function new(string name="packet");
            super.new(name);
        endfunction
    endclass
endmodule
</pre>

It is **highly recommended** that you fix these problems to ensure a correct include path order.
This can easily be done by the accompanying Quick Fix `Add include path '[...]' to configuration`.

{{% ruleConfiguration %}}
{{< rule id=155 />}}
{{% /ruleConfiguration %}}
