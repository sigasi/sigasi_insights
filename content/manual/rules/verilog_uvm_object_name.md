---
title: UVM Object Name Does Not Match Variable Name
linting: uvm
---

In general, the name of the UVM object should be the same as the variable name it's assigned to. This makes it easier to associate UVM object path names with SystemVerilog variables names while debugging.

<pre>class my_agent extends uvm_agent;
	`uvm_component_utils(my_agent)

	my_sequencer  m_sequencer;
	my_driver     m_driver;
	my_monitor    m_monitor;

	function void build_phase(uvm_phase phase);
		// UVM object name 'my_sequencer' does not match variable name 'm_sequencer'
		m_sequencer = <span class="warning">my_sequencer::type_id::create</span>("my_sequencer", this);
		// UVM object name 'bus_driver' does not match variable name 'm_driver'
		m_driver    = <span class="warning">my_driver::type_id::create</span>("bus_driver", this);
		m_monitor   = <span class="goodcode">my_monitor::type_id::create</span>("m_monitor", this);
	endfunction

endclass
</pre>

{{% ruleConfiguration %}}
{{< rule id=149 />}}
{{% /ruleConfiguration %}}
