---
title: Verilog Hiding Non-virtual Methods
linting: verilog
---

For a class method to override a method, the corresponding method in the superclass must be `virtual`. If the method in the superclass is not `virtual`, it will be hidden instead. Hiding methods instead of overriding them is often unintentional and may indicate a missing `virtual` keyword (rule 132).

<pre>
class Parent;
    function void f();
        ...
    endfunction

    virtual function void g();
        ...
    endfunction
endclass

class Child extends Parent;
    function void <span class="warning">f</span>();
        ...
    endfunction

    function void <span class="goodcode">g</span>();
        ...
    endfunction
endclass
</pre>

{{% ruleConfiguration many=yes %}}
{{< rule id=132 />}}
{{% /ruleConfiguration %}}
