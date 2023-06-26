---
title: Verilog Class Item Visibility
linting: verilog
---

In Verilog class methods and class properties can be declared as `local` or `protected` to restrict their access. Sigasi Studio will flag attempted accesses that violate these restrictions as errors (rule 61).

## Local
`local` methods and properties can only be accessed from within the class itself.

<pre>
class my_class;
    
    local int secret = 42;
    
    function int get_secret();
        return <span class="goodcode">secret</span>;
    endfunction
    
endclass

module bad_code;
    
    my_class inst = new();
    int x = inst.<span class="error">secret</span>;
    
endmodule
</pre>

## Protected
`protected` methods and properties can only be accessed from within the class itself, or from any of its subclasses.

<pre>
class my_class;
    
    protected int secret = 42;
    
endclass

class my_sub_class extends my_class;
    
    function int get_secret();
        return <span class="goodcode">secret</span>;
    endfunction
    
endclass


module bad_code;
    
    my_sub_class inst = new();
    int x = inst.<span class="error">secret</span>;
    
endmodule
</pre>

<!-- Not configurable -->
