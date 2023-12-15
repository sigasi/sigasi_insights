---
title: Incorrect UVM Object Instantiation
linting: uvm
---

Using the factory to create UVM objects and components instead of allocating them directly (via `new`) allows the type of an object to be determined at run time rather than at compile time and hence to be overridden without modifying the requesting class.

Instantiations should take the form:
```verilog 
my_obj = my_type::type_id::create("my_obj");
```

This increases reusability of your verification components:

<pre>class my_agent extends uvm_agent;
	`uvm_component_utils(my_agent)

	my_sequencer  m_sequencer;
	my_driver     m_driver;
	my_monitor    m_monitor;

	function void build_phase(uvm_phase phase);
		// Incorrect instantiation of UVM object 'my_sequencer', use the factory instead
		m_sequencer = <span class="warning">new</span>("m_sequencer", this);
		// Incorrect instantiation of UVM object 'my_driver', use the factory instead
		m_driver    = <span class="warning">my_driver::new</span>("m_driver", this);
		m_monitor   = <span class="goodcode">my_monitor::type_id::create</span>("m_monitor", this);
	endfunction

endclass
</pre>

{{% ruleConfiguration %}}
{{< rule id=148 />}}
{{% /ruleConfiguration %}}
