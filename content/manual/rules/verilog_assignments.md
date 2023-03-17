---
title: Verilog assignment patterns
---

Sigasi Studio has several checks on Verilog assignment patterns.

## Default member must be last

Concrete assignments must preceed more general assignments, otherwise some of those assignments might be ignored (rule 28).
In particular:

* for arrays, `default` must be at the end of the list
* for structures, `default` must be at the end, but type-default must be after the particular member assignments

<pre>module badcode;
    int a[3:0] = '{0: 5, <span class="error">default: 0</span>, 3: 1};
   
    typedef struct {
        int x;
        int y;
        real radius;
    } circle_t;
   
    circle_t b = '{<span class="error">default: 0</span>, x:1};
   
    circle_t c = '{<span class="error">default: 0</span>, real: 0.0};
   
endmodule

module goodcode;
   
    int a[3:0] = '{<span class="goodcode">0: 5, 3: 1, default: 0</span>};
   
    typedef struct {
        int x;
        int y;
        real radius;
    } circle_t;
   
    circle_t b = '{<span class="goodcode">x:1, default: 0</span>};
   
    circle_t c = '{<span class="goodcode">real: 0.0, default: 0</span>};
endmodule</pre>

## Only one default member expression is allowed

Sigasi Studio flags an error when expressions have multiple default assignments (rule 29). In particular:

* arrays cannot have multiple default assignments
* structures cannot have multiple default assignments or multple type-default assignments

<pre>module badcode;
    int a[3:0] = '{<span class="error">default: 1</span>, 0: 2, <span class="error">default: 3</span>};        // multiple default assignments
    
    typedef struct {
        int x;
        int y;
        real radius;
    } circle_t;
    
    circle_t b = '{<span class="error">default: 0</span>, radius: 1.0, <span class="error">default: 0</span>}; // multiple default assignments
    
    circle_t c = '{<span class="error">int: 0</span>, radius: 1.0, <span class="error">int: 0</span>};         // multiple *type*-default assignments
endmodule

module goodcode;
    int a[3:0] = '{<span class="goodcode">0: 2, default: 3</span>};
    
    typedef struct {
        int x;
        int y;
        real radius;
    } circle_t;
    
    circle_t b = '{<span class="goodcode">radius: 1.0, default: 0</span>};
    
    circle_t c = '{<span class="goodcode">radius: 1.0, int: 0</span>};
endmodule
</pre>

## Overwritten type key in assignment pattern

Sigasi Studio flags a warning for duplicate type member keys in assignment patterns (rule 30). This is not an error according to the language reference manual,
but the last used type key overwrites previously matched members, making the code confusing and hard to maintain.

<pre>module uglycode;
    struct { int x, y; } a = '{<span class="warning">int: 0, int: 1</span>};
    int b[10] = '{<span class="warning">int: 0, int: 1</span>};
endmodule

module goodcode;
    struct { int x, y; } a = '{<span class="goodcode">int: 1</span>};
    int b[10] = '{<span class="goodcode">int: 1</span>};
endmodule</pre>

## Duplicate member key in structure assignment pattern

Sigasi Studio flags an error for duplicate members/index keys in assignment patterns (rule 31). Each member/index key can occur only once.

<pre>module badcode;
	struct { int x, y; } a = '{<span class="error">x: 0</span>, y: 0, <span class="error">x: 0</span>};
	int b[10] = '{<span class="error">5: 1</span>, <span class="error">5: 2</span>, default: 0};
endmodule

module goodcode;
	struct { int x, y; } a = '{<span class="goodcode">x: 0, y: 0</span>};
	int b[10] = '{<span class="goodcode">5: 1, default:0</span>};
endmodule</pre>

## Mixed named and ordered notation in assignment pattern

Sigasi Studio flags an error when an assignment contains a mix of ordered and named elements (rule 32).

<pre>module badcode;
    // Mix of ordered and named associations: not correct
    struct { int x, y; } a = '{<span class="error">0, y: 1</span>};
    int b[4] = '{<span class="error">0, 1, 2:5, 3:7</span>};
endmodule
module ok_code;
    // Place binding: correct but may be harder to read, particularly with many elements
    struct { int x, y; } a = '{<span class="warning">0, 1</span>};
    int b[4] = '{<span class="warning">0, 1, 5, 7</span>};
endmodule
module goodcode;
    // Name binding: esay to understand and maintain
    struct { int x, y; } a = '{<span class="goodcode">x: 0, y: 1</span>};
    int b[4] = '{<span class="goodcode">0: 0, 1: 1, 2: 5, 3: 7</span>};
endmodule</pre>


{{% lintrule sv 28 30 31 32 %}}
