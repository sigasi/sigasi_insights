---
title: Incorrect Override of UVM Object
linting: uvm
---

When overriding UVM objects or components, the **original type** shall be a superclass of the **override type**. Sigasi Studio warns you on attempts to override UVM objects by type when this condition is not met:

<pre>class base_object extends uvm_object;
	`uvm_object_utils(base_object);
	// ...
endclass

class my_object extends base_object;
	`uvm_object_utils(my_object);
	// ...
endclass

class my_component extends uvm_component;
	`uvm_component_utils(my_component)
	
	virtual function void build_phase(input uvm_phase phase);
		// Incorrect override of UVM object 'class base_object': expected derived class but was 'class my_component'
		uvm_factory::get().set_type_override_by_type(base_object::get_type(), <span class="warning">my_component::get_type()</span>);
		
		uvm_factory::get().set_type_override_by_type(base_object::get_type(), <span class="goodcode">my_object::get_type()</span>);
		
		// Incorrect override of UVM object 'class my_object': expected derived class but was 'class base_object'
		my_object::type_id::set_type_override(<span class="warning">base_object::get_type()</span>);

		base_object::type_id::set_type_override(<span class="goodcode">my_object::get_type()</span>);
	endfunction
endclass
</pre>

Note, that overrides by name (e.g. `set_type_override("packet", "huge_packet")`) are not checked by this rule

{{% ruleConfiguration %}}
{{< rule id=151 />}}
{{% /ruleConfiguration %}}
