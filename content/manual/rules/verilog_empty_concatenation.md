---
title: Verilog Empty Concatenation
linting: verilog
---

A SystemVerilog queue or dynamic array can be initialized by using an empty queue concatenation. Though other constructs, such as structs and associative arrays, cannot be initialized this way.

<pre>
module empty_concatenations;
    int    waiting[$];
    int    clients[];
    string names[int];
    typedef struct { int fruit; } fruit_basket;
    fruit_basket basket;
    
    
    initial begin
        waiting = <span class="goodcode">{}</span>;
        clients = <span class="goodcode">{}</span>;
        names   = <span class="error">{}</span>;
        basket  = <span class="error">{}</span>;
    end
endmodule
</pre>

<!-- Not configurable -->