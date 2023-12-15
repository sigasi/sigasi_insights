---
title: Type Argument Value Does Not Match Containing Class
linting: uvm
---

There are several UVM macros for which the first argument must be the equal to containing class. These macros are:
- All UVM object and component utility macros
- `uvm_field_utils_begin`
- `uvm_sequence_library_utils`
- `uvm_add_to_seq_lib`
- `uvm_set_super_type`
- `uvm_register_cb`

<pre>
class my_uvm_component extends uvm_component;

    `uvm_component_utils(<span class="warning">some_other_class</span>)

    ...

endclass
</pre>

<pre>
class my_uvm_component extends uvm_component;

    `uvm_component_utils(<span class="goodcode">my_uvm_component</span>)

    ...

endclass
</pre>

If the containing class is parameterized, the parameters must also be passed to the macro:

<pre>
class my_uvm_component#(int size_param = 8) extends uvm_component;

    `uvm_component_param_utils(<span class="warning">my_uvm_component</span>)

    ...

endclass
</pre>

<pre>
class my_uvm_component#(int size_param = 8) extends uvm_component;

    `uvm_component_param_utils(<span class="goodcode">my_uvm_component#(size_param)</span>)

    ...

endclass
</pre>


{{% ruleConfiguration %}}
{{< rule id=147 />}}
{{% /ruleConfiguration %}}
