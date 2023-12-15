---
title: Unregistered UVM Object
linting: uvm
---

UVM objects and components must be registered with the factory using one of the UVM utility macros.

<pre>
class <span class="warning">my_uvm_component</span> extends uvm_component;
    function new(string name, uvm_component parent);
        super.new(name, parent);
    endfunction
endclass
</pre>

<pre>
class <span class="goodcode">my_uvm_component</span> extends uvm_component;

    <span class="goodcode">`uvm_component_utils(my_uvm_component)</span>

    function new(string name, uvm_component parent);
        super.new(name, parent);
    endfunction
endclass
</pre>

{{% ruleConfiguration %}}
{{< rule id=145 >}}
{{< param/bool name=allow_unregistered_virtual_uvm_objects >}}
{{< /rule >}}
{{% /ruleConfiguration %}}
