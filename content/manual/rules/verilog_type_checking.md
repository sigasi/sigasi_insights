---
title: Verilog Type Checking
linting: verilog
---

## Expression Type Requirements in Different Contexts

In Verilog and SystemVerilog there are dozens of places where an expression or identifier of a specific type is required, e.g., operators have expectations on operand types, there are limitations on what a class can extend or implement, etc. It may not be obvious at first glance if a variable or net type complies with these requirements. Such non-compliances will be detected and marked by Sigasi (rules 78, 79, 100 and 131).

### Extending and Implementing

Interface classes can only extend other interface classes, while classes can only extend classes and only implement interface classes:

<pre>
class Foo;
endclass

interface class Bar extends <span class="error">Foo</span>; // Expected interface class but got 'class Foo'
endclass

class Baz
    extends <span class="error">Bar</span>                  // Expected class but got 'interface class Bar'
    implements <span class="error">Foo</span>;              // Expected interface class but got 'class Foo'
endclass
</pre>

### Types vs Value Expressions

While `let` declarations are advertised as a replacement to preprocessor macros and they can have untyped arguments, you still cannot pass types as arguments (unlike selected system functions):
<pre>
module test;
    let my_typename(expr) = {$typename(expr), "!"};
    initial $display(
        "my: %s\nsys: %s",
        my_typename(<span class="error">int</span>),        // Expected value expression but got type: int
        $typename(<span class="goodcode">int</span>)
    );
endmodule
</pre>

### Operand Data Types

Unary logical reduction operators expect integral operands:
<pre>
function logic parity(input real data);
    parity = ^<span class="error">data</span>;              // Expected integral expression but got 'real'
    parity = ^<span class="goodcode">$realtobits(data)</span>;
endfunction
</pre>

### Bit-stream Types

You can unpack a stream of bits into an unpacked struct if all its fields are of bit-stream types. Here, one of the struct fields is `shortreal` which makes the whole struct non-streamable:
<pre>
package pkg;
    typedef struct {
        shortreal data;          // shortreal is not a bit-stream type
        logic [6:0] unused;
        logic parity;
    } real_payload;
endpackage

module test (logic [39:0] data);
    pkg::real_payload payload;
    assign {>>{<span class="error">payload</span>}} = data; // Expected bit-stream data expression but got 'struct pkg::real_payload'
endmodule
</pre>

These are but a few examples. Sigasi Studio checks numerous other expression expectations in different contexts in SystemVerilog, immediately showing incorrect types and variables usages.

## Type Compatibility

Verilog and SystemVerilog's type compatibility rules can be obscure, especially considering implicit type conversion and complex expression evaluation rules. To help you avoid any pitfalls, the type checker ensures that assigning ports, nets, or variables is done safely.
Here are a few examples where Sigasi Studio would report an error:

### Unions and Structs

{{< figure src="/img/releasenotes/5.1/TypeCheckerUnionAndStruct.png" link="/img/releasenotes/5.1/TypeCheckerUnionAndStruct.png" title="Type checking of structs and unions" class="uk-align-center" width=550 >}}

Even though these two `union`s and `struct`s have the same signature, they implicitly define two anonymous types; they are thus not assignment compatible.

### String Variables and Literals

{{< figure src="/img/releasenotes/5.1/TypeCheckerStringVariablesAndLiterals.png" link="/img/releasenotes/5.1/TypeCheckerStringVariablesAndLiterals.png" title="Type checking for string variables and literals" class="uk-align-center" width=550 >}}

`string` variables and literals behave differently.

<div class="annotated-list">

* `null` cannot be assigned to `string` variables.  
* String variables cannot be assigned to `int` variables because they are dynamically sized ordered collections of characters that are not assignment compatible to `int`.
* However, string literals can be used to initialize `int`s as they are treated as `unsigned integer` constants.

</div>

### Syntax Confusion and Implicit Casting

{{< figure src="/img/releasenotes/5.1/TypeCheckerAssignmentVsCast.png" link="/img/releasenotes/5.1/TypeCheckerAssignmentVsCast.png" title="Assignments can easily be confused with concatenation" class="uk-align-center" width=550 >}}

<div class="annotated-list">

  * The concatenation and assignment pattern syntax confusingly resemble each other a lot. 
  * It is not always clear what assignments will be implicitly cast. `enum`s are implicitly cast to `int`s, but not the other way around.

</div>

### Classes

{{< figure src="/img/releasenotes/5.1/TypeCheckerClassHierarchy.png" link="/img/releasenotes/5.1/TypeCheckerClassHierarchy.png" title="Type checking class hierarchies" class="uk-align-center" width=550 >}}

Subclasses can be assigned to superclasses, but not vice-versa. Every `Apple` is a fruit, but not every `Fruit` is an `Apple`. Similarly, classes unrelated to one another (`Fruit` and `Vegetable`) are not assignment compatible.

### Ref Ports

The type of the actual value should be equivalent to the formal `ref` port type (rule 94).

<pre>
module test;
    task automatic inc(ref [3:0] value, input [3:0] amount);
        value += amount;
    endtask
    
    bit [3:0] value = 10;
    initial begin
        // Expected expression type to be equivalent to target type 'logic [3:0]' but got 'bit [3:0]'
        inc(<span class="error">value</span>, 5);
        $display(value);
    end
endmodule
</pre>