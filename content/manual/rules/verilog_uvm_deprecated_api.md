---
title: Deprecated UVM API
linting: uvm
---

The UVM library evolves and while new features are added to its API, some other features are marked as deprecated. Using deprecated features is discouraged as they are supposed to be removed in future UVM versions. Sigasi Studio marks all usages of deprecated API: macros, classes, methods, public fields, etc:

<pre>class my_sequence extends uvm_sequence #(my_sequence_item);
    `uvm_object_utils(my_sequence)

    function new(string name = "my_sequence");
        super.new(name);
        <span class="warning">do_not_randomize</span> = 1; // UVM declaration 'uvm_pkg::uvm_sequence_base::do_not_randomize' is deprecated
    endfunction

    task body();
        `<span class="warning">uvm_do_with</span>(req, {req.size < 32;}) // UVM macro 'uvm_do_with' is deprecated
    endtask
endclass
</pre>

By default, API features deprecated in the UVM library version you are using are reported. However, it's possible to configure the rule to report features deprecated in future UVM versions as well.

{{% ruleConfiguration %}}
{{< rule id=152 >}}
{{< param/enumeration "up_to_version" "current" "uvm_1_2" "uvm_2017" "uvm_2020">}}
{{< /rule >}}
{{% /ruleConfiguration %}}
