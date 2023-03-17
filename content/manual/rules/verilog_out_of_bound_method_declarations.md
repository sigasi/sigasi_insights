---
title: Verilog out-of-bound method declarations
---

An out-of-block method declaration signature should match its prototype declaration's signature.
Sigasi Studio flags an error if the prototype and the implementation signatures have a:
- different subroutine form (`task` or `function)`
- different return type, if it is a function
- different arity or any argument has a:
  - different name
  - different direction
  - mismatched type

If an argument default value is present in an out-of-block method declaration but is missing in the prototype, or default values are not syntactically identical, a warning message is reported (rules 77, 78).

Errors are also reported for a missing prototype for out-of-bound definitions and missing or duplicated definitions for an extern method prototype.

<pre>class C;
    extern task <span class="error">proto_only</span>();       // missing definition
    extern task who_am_i();
    extern function bit bad(input int a, b, c, d, e = 2 + 3);

    extern function int good(input int a, output string b);
endclass

<span class="error">function</span> C::who_am_i();             // should be a task
    // ...
endfunction

function C::<span class="error">no_proto</span>();             // missing prototype
    // ...
endfunction

function <span class="error">logic</span> C::bad(              // should return bit
    <span class="error">output</span> int a,                   // should be input
    input <span class="error">integer</span> b,                // should be int
    input int <span class="error">si</span>,                   // should be 'c'
    input int d <span class="warning">= 4</span>,                // should have no default value
    input int e <span class="warning">= 5</span>                 // should be same value as prototype: 2 + 3
);
    // ...
endfunction

function bit C::<span class="error">bad</span>(ref x, y);      // completely different signature, duplicate definition
    // ...
endfunction

function int C::<span class="goodcode">good(input int a, output string b)</span>;
    // ...
endfunction</pre>

{{% lintrule sv 90 91 %}}
