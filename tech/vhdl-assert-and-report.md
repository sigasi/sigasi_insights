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
report <message_string> [severity <severity_level>];
```

The message string obviously has to be a string. The severity level has the datatype `std.standard.severity_level`. Possible values are: `note, warning, error, failure`

For example:
```vhdl
report "this is a message"; -- severity note
-- or:
report "this is a serious message" severity warning;
```

If the `severity_level` clause is omitted in a report statement it is implicitly assumed to be `note`.
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

These are several ways of writing a VHDL assert statement, where `condition` is of `boolean` type.

```vhdl
    assert <condition>;
    assert <condition> severity <severity_level>;
    assert <condition> report <message_string>;
    assert <condition> report <message_string> severity <severity_level>;
```

If no `message_string` specified then _"Assertion violation."_ will be used by default. If the `severity_level` clause is omitted in an assert statement it is implicitly assumed to be `error`.

```vhdl
    assert 3 = 2 + 2;
    assert 3 = 2 + 2 report "Assertion violation.";
    assert 3 = 2 + 2 report "Assertion violation." severity error;
```

One last important thing is how to generate strings for the message. You may want to report the value of a signal (or variable) that is not a string. You need to know the datatype and use the `image` attribute.

```vhdl
assert i < 5 report "unexpected value. i = " & integer'image(i);
```
