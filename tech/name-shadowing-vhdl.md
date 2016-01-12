---
title: "Name shadowing in VHDL"
layout: page 
pager: true
author: Philippe Faes
date: 2015-01-26
---
Like many other languages, it is possible in VHDL to perform _name scoping_. This happens if you declare a new object in a nested scope that reuses the name of an object that was already declared. This is not an error in VHDL, but it can be confusing and it can cause errors. In general, I would advice against name scoping unless you have a very good reason. Even then, it would be best if you document (comment) your code so that everybody understands what is going on.

This is a straightforward example of name shadowing:
```vhdl
entity e0 is
end entity e0;
architecture demo of e0 is
    constant c : integer := 1;
begin
    assert c = 1;

    myblock : block
        constant c : integer := 2;
    begin
        assert c = 2 report "the second declaration of constant c shadows the first";
    end block myblock;
    
    assert c = 1 report "this is the scope of the first declaration again";
end architecture demo;
```

It gets more confusing if you shadow names from the a standardized package:

```vhdl
architecture demo2 of e0 is
    constant true : boolean := false; -- shadowing the name "true". Bad idea!
begin
    assert false = true;
end architecture demo;
```

A common misconception is that loop iterators need to be declared beforehand. They don't, because they are declared implicitly in the loop statement.

```vhdl
architecture demo4 of e0 is
begin
    process is
        variable i: integer := 1;
    begin
        assert i = 1;
        i := 5;
        assert i = 5;
        for i in 0 to 10 loop -- this is a different object, shadowing the variable i
            report integer'image(i);
            
            -- i behaves like a constant here
            i := i+1; -- error! cannot assign to constants!
        end loop;
        
        assert i = 5; -- this is still the variable, declared in the process
        i := i+1; 
        assert i = 6;
        wait;
    end process ;
end architecture;
```

*Note*: you can reach these shadowed names by using their expanded names:

```vhdl
entity fun is
end entity;

architecture hide of fun is
        begin
        example : process is
                variable x : integer := 0;
                procedure changevar (x : integer) is
                begin
                        hide.example.x := x; -- or example.x
                end procedure;
        begin
                changevar(5);
                report "x=" & integer'image(x);
                wait;
        end process;
end architecture;
```

```
VSIM 1> run -all
# ** Note: x=5
#    Time: 0 ns  Iteration: 0  Instance: /fun
```