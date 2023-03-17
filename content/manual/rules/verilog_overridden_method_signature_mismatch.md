---
title: Verilog overridden method signatures
---

A virtual method signature should match the overridden method signature in the superclass.
Sigasi Studio flags an error if the signatures have a:
- different subroutine form (`task` or `function`)
- different return type , if it's a function
- different arity or any argument with a:
  - different name
  - different direction
  - mismatched type

If an argument default value is present in one method and is missing in the other one, an info message is reported (rule 67).

<pre>interface class A;
    pure virtual task who_am_i();
    pure virtual function bit bad(input int a, b, c, d);
    pure virtual task too_bad(input int a, b, c, d);

    pure virtual function A good(input int a, output string b);
endclass

class B implements A;
    virtual <span class="error">function</span> who_am_i();      // should be a task
        // ...
    endfunction

    virtual function <span class="error">logic</span> bad(       // should return bit
        <span class="error">output</span> int a,                 // should be input
        input <span class="error">integer</span> b,              // should be int
        input int <span class="error">si</span>,                 // should be 'c'
        input int d = <span class="info">4</span>               // should have no default value

    );
        // ...
    endfunction

    virtual task <span class="error">too_bad(ref x, y)</span>;   // completely different signature
        // ...
    endtask

    virtual <span class="goodcode">function B good(input int a, output string b)</span>;
        // ...
    endfunction
endclass</pre>

{{% lintrule sv 67 %}}
