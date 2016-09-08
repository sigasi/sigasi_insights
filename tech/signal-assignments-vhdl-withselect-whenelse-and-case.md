---
title: "Signal Assignments in VHDL: with/select, when/else and case"
layout: page 
pager: true
author: Philippe Faes
date: 2011-07-04
tags: 
  - VHDL
  - VHDL syntax
comments: true
bannerad: true
---


Sometimes, there is more than one way to do something in VHDL. OK, _most of the time_, you can do things in many ways in VHDL. Let's look at the situation where you want to assign different values to a signal, based on the value of another signal.

## With / Select 

The most specific way to do this is with as selected signal assignment. Based on several possible values of `a`, you assign a value to `b`. No redundancy in the code here. The official name for this VHDL with/select assignment is the _selected signal assignment_.
```vhdl
with a select b <=
	"1000" when "00",
	"0100" when "01",
	"0010" when "10",
	"0001" when "11";
```

## When / Else Assignment

The construct of a _conditional signal assignment_ is a little more general. For each option, you have to give a condition. This means that you could write any boolean expression as a condition, which give you more freedom than equality checking. While this construct would give you more freedom, there is a bit more redundancy too. We had to write the equality check (`a =`) on every line. If you use a signal with a long name, this will make your code bulkier. Also, the separator that's used in the selected signal assignment was a comma. In the conditional signal assignment, you need the `else` keyword. More code for the same functionality. Official name for this VHDL when/else assignment is the _conditional signal assignment_
 
```vhdl
b <= "1000" when a = "00" else 
	 "0100" when a = "01" else 
	 "0010" when a = "10" else 
	 "0001" when a = "11";
```
 
## Combinational Process with Case Statement

The most generally usable construct is a process. Inside this process, you can write a case statement, or a cascade of if statements. There is even more redundancy here. You the skeleton code for a process (begin, end) and the sensitivity list. That's not a big effort, but while I was drafting this, I had put `b` in the sensitivity list instead of `a`. Easy to make a small misstake. You also need to specify what happens in the `other` cases. Of course, you could do the same thing with a bunch of IF-statements, either consecutive or nested, but a case statement looks so much nicer.

```vhdl
process(a)
begin
	case a is
		when "00" => b <= "1000";
		when "01" => b <= "0100";
		when "10" => b <= "0010";
		when "11" => b <= "0001";
		when others => report "unreachable" severity failure;
	end case;
end process;
```

While this last code snippet is the largest and perhaps most error-prone, it is probably also the most common. It uses two familiar and often-used constructs: the process and the case statements. 

## Hard to remember

The problem with the selected and conditional signal assignments is that there is no logic in their syntax. The meaning is _almost_ identical, but the syntax is just different enough to throw you off. I know _many_ engineers who permanenty have a copy of the Doulos Golden Reference Guide to VHDL lying on their desks. Which is good for Doulos, because their name gets mentioned all the time. But most people just memorize one way of getting the job done and stick with it.
