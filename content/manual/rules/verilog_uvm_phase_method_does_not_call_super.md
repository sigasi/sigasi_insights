---
title: UVM Phase Method Does Not Call Superclass Method
linting: uvm
---

When overriding a phase method of a user-defined UVM component, the superclass method must be called.

<pre>
class parent_comp extends uvm_component;
    ...

    function void build_phase(uvm_phase phase);
        ...
    endfunction

    function void connect_phase(uvm_phase phase);
        ...
    endfunction
endclass

class child_comp extends parent_comp;
    ...

    function void <span class="warning">build_phase</span>(uvm_phase phase);
        // no super call
        ...
    endfunction

    function void <span class="goodcode">connect_phase</span>(uvm_phase phase);
        <span class="goodcode">super.connect_phase(phase)</span>;
        ...
    endfunction
endclass
</pre>

{{% ruleConfiguration %}}
{{< rule id=153 />}}
{{% /ruleConfiguration %}}
