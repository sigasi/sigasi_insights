---
title: Incorrect Utility Macro
linting: uvm
---

There are multiple variants of the UVM utility macros, each one used to register a different kind of UVM object class:
- UVM components must use the `component` variants, all other UVM objects must use the `object` variants
- Parameterized classes must use the `param` variants
- Virtual classes must use the `abstract` variants (UVM 2017 or higher)

<pre>
class my_uvm_component#(type type_param) extends uvm_component;
    `<span class="warning">uvm_object_utils</span>(my_uvm_component#(type_param))
    
    function new(string name, uvm_component parent);
        super.new(name, parent);
    endfunction
endclass
</pre>

<pre>
class my_uvm_component#(type type_param) extends uvm_component;
    `<span class="goodcode">uvm_component_param_utils</span>(my_uvm_component#(type_param))
    
    function new(string name, uvm_component parent);
        super.new(name, parent);
    endfunction
endclass
</pre>

{{% ruleConfiguration %}}
{{< rule id=146 />}}
{{% /ruleConfiguration %}}
