---
title: Unexpected Output System Task
linting: uvm
---

Reporting in UVM classes should always be done with one of the eight standard reporting macros `` `uvm_info ``, `` `uvm_info_context ``, and so forth, rather than ad hoc `$display` statements or similar. Simulation run time can be dominated by I/O operations, so it is important to use the reporting features of UVM, such as message verbosity, to control the number of messages being generated.

<pre>
class my_driver extends uvm_driver#(my_item);
	`uvm_component_utils(my_driver)

	task read(my_item req);
		// ...
		// Unexpected invocation of '$display', use UVM reporting macros instead
		<span class="warning">$display</span>("read: %s", req.convert2string());
	endtask

	task write(my_item req);
		// ...
		<span class="goodcode">`uvm_info</span>("write", req.convert2string(), UVM_HIGH)
	endtask
endclass
</pre>

This rule can be configured to report file output system tasks (`$fdisplay`, `$fwrite`, ...) too:

<pre>
class my_test extends uvm_test;
  `uvm_component_utils(my_test)

  task run_phase(uvm_phase phase);
    int fd = $fopen("my_test.log", "w");
    repeat (1000) begin
      my_instr instr = my_instr::generate_random();
      // ...
      // Unexpected invocation of '$fwrite', use UVM reporting macros instead
      <span class="warning">$fwrite</span>(fd, {instr.convert2string(),"\n"});
    end
    $fclose(fd);
  endtask
endclass
</pre>

{{% ruleConfiguration %}}
{{< rule id=150 >}}
{{< param/bool name=report_file_output_system_tasks >}}
{{< /rule >}}
{{% /ruleConfiguration %}}
