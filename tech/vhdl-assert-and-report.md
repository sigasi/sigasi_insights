---
title: "VHDL Assert and Report"
layout: page 
pager: true
author: Philippe Faes
date: 2015-02-02
comments: true
bannerad: true
---

How can you check invariants in VHDL? How can you write information to the console? That is what the VHDL assert statement and report statement are for!

The basic syntax of a report statements in VHDL is:
```vhdl
report <messagestring> [severity <severitylevel>];
```

The message string obviously has to be a string. The severity level has the datatype `std.standard.severity_level`. Possible values are: `NOTE, WARNING, ERROR, FAILURE`

For example:
```vhdl
report "this is a message";
-- or:
report "this is a serious message" severity warning;
```

Report statements are _sequential_ statements. This means they can only be in sequential regions, like inside the statements part of  process or a procedure. They can not be by themselves in an architecture.

```vhdl
entity e0 is
end entity e0;
architecture demo of e0 is
begin
    process is
    begin
        report "message";
        wait;
    end process;

    report "message"; -- error
end architecture demo;
```

On the other hand, VHDL assertion statements can be either sequential or concurrent statements. You can write them in a process, or in an architecture.  

```vhdl
architecture demo of e0 is
    signal condition : boolean;
begin
    process is
    begin
        assert condition;
        wait;
    end process;

    assert condition report "message" severity error;
end architecture demo;
```

These are the allowed ways of writing a VHDL assert statement, where `condition` has the datatype `boolean`.

```vhdl
    assert <condition>;
    assert <condition> severity <severitylevel>;
    assert <condition> report <message_string>;
    assert <condition> report <message_string> severity <severitylevel>;
```

One last important thing is how to generate strings for the message. You may want to report the value of a signal (or variable) that is not a string. You need to know the datatype and use the `image` attribute.

```vhdl
assert i < 5 report "unexpected value. i = " & integer'image(i);
```
