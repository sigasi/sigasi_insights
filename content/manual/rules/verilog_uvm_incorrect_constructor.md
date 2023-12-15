---
title: Incorrect Constructor for UVM Object or Component
linting: uvm
---

UVM objects and components must declare an explicit constructor that follows a certain format:
- for UVM objects the first argument of the constructor must be `string name`, and all arguments must be optional.
- for UVM components the first two arguments of the constructor must be `string name` and `uvm_component parent`, and all additional arguments must be optional.

<pre>
class <span class="warning">my_uvm_component</span> extends uvm_component;
    `uvm_component_utils(my_uvm_component)

    // The following incorrect constructor will be implied:
    // function new();
    //      super.new();
    // endfunction
endclass
</pre>

<pre>
class my_uvm_component extends uvm_component;
    `uvm_component_utils(my_uvm_component)  

    // The constructor does not have the correct arguments
    function new(<span class="warning">int parent, string name</span>);
        super.new(name, parent);
    endfunction
endclass
</pre>

<pre>
class my_uvm_component extends uvm_component;
    `uvm_component_utils(my_uvm_component)  

    // The additional argument is not optional
    function new(string name, uvm_object parent, <span class="warning">int i</span>);
        super.new(name, parent);
    endfunction
endclass
</pre>

<pre>
class my_uvm_component extends uvm_component;
    `uvm_component_utils(my_uvm_component)  

    function new(<span class="goodcode">string name, uvm_object parent, int i = 0</span>);
        super.new(name, parent);
    endfunction
endclass
</pre>



{{% ruleConfiguration %}}
{{< rule id=154 />}}
{{% /ruleConfiguration %}}
