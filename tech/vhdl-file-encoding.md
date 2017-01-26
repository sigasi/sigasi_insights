---
title: "VHDL file encoding"
layout: page 
pager: true
author: Hendrik
date: 2017-01-25
comments: true
---
## Introduction

I have been using VHDL for almost two decades and never wondered how I should save my VHDL files. Because of my software engineering background, I always use **UTF-8** as **default character or file encoding** and never had any issues with it.

But suddenly, last week, I received two mails pointing out that Sigasi Studio shouldn't use UTF-8 by default. I was urged to use **ISO-8859-1** instead.

As a dinosaur in this post-truth era, I decided to go old-school and research the facts for this topic.

## UTF-what?

[UTF-8](https://en.wikipedia.org/wiki/UTF-8) is character encoding standard that can encode all possible characters defined by Unicode. It encodes characters with _variable length_. Some characters are represented with one byte, others with more than one. [ISO-8859-1](https://en.wikipedia.org/wiki/ISO-8859-1) uses a single byte to encode all characters. As a result, ISO-8859-1 can encode less characters than UTF-8.

The first 126 characters of both UTF-8 and ISO-8859-1 are the same, and map to the corresponding ASCII characters. The extra characters of ISO-8859-1 consist of characters of American, Western European, Oceanian and African languages.

## What does the LRM say?

The LRM only mentions the following about character encoding:

"Predefined enumeration types" (5.2.2.2)

> The predefined type CHARACTER is a character type whose values are the 256 characters of the ISO/IEC 8859-1 character set. Each of the 191 graphic characters of this character set is denoted by the corresponding character literal.

"Character set" (15.2)

> The only characters allowed in the text of a VHDL description (except within comments—see 15.9, and within text treated specially due to the effect of tool directives—see 15.11) are the graphic characters and format effectors. Each graphic character corresponds to a unique code of the ISO eight-bit coded character set (ISO/IEC 8859-1:1998) and is represented (visually) by a graphical symbol.

"Comments" (15.9)

> NOTE 2—Comments may contain characters that, according to 15.2, are non-printing characters. Implementations may interpret the characters of a comment as members of ISO/IEC 8859-1:1998, or of any other character set; for example, an implementation may interpret multiple consecutive characters within a comment as single characters of a multi-byte character set.

So the LRM indeed says that VHDL code should be encoded with ISO-8859-1 characters. For comments you can do whatever you want.

## What do Riviera Pro and ModelSim say?

You can choose only one encoding for your entire source file. You can not mix, as the LRM suggested. So let us check what VHDL simulators allow.

I can think of 4 ways it can go wrong:

* Character literals with _special_ characters
* Strings with _special_ characters
* Extended identifiers with _special_ characters
* Comments with _special_ characters

I created snippets for each of these cases and tested them with both Riviera Pro and ModelSim.

### ISO-8859-1

What happens when we compile following snippet, encoded as ISO-8859-1?

```vhdl
entity iso_8859_1 is
end entity iso_8859_1;

architecture char of iso_8859_1 is
begin
	assert_char: assert true report "Sig" & 'ä' & "si";
end architecture char;

architecture string of iso_8859_1 is
begin
	assert_string: assert true report "Sigäsi";
end architecture string;

architecture extended of iso_8859_1 is
	constant \Dreikäsehoch\ : integer := 0;
begin
	assert \Dreikäsehoch\ = 0;
end architecture extended;

architecture comment of iso_8859_1 is
begin
	-- Dies ist ein schöner Kommentar
	-- No Greek or Japanese possible here
end architecture comment;
```

Both Riviera Pro and ModelSim can compile this snippet without issues.
You can add German comments. But comments in languages like Greek and Japanese are not possible. You can type Greek characters in Sigasi/Eclipse, but you can not save the file with ISO-8859-1 encoding.

### UTF-8

So, what happens when I save the VHDL code with UTF-8 encoding?

#### Character literals

Compiling the following snippet, encoded in UTF-8, with Riviera Pro and ModelSim results in errors:

```vhdl
entity utf8 is
end entity utf8;

architecture char of utf8 is
begin
	assert_char: assert true report "Sig" & 'ä' & "si";
end architecture char;
```

Both tools report a _Syntax error_:

* Riviera Pro:  
```
COMP96 Compile Architecture "char" of Entity "utf8"
COMP96 ERROR COMP96_0049: "Syntax error in expression." "/home/heeckhau/runtime-hdt.product/Encoding/utf-8.vhd" 6 42
```
* ModelSim:  
```
-- Compiling architecture char of utf8
** Error: /home/heeckhau/runtime-hdt.product/Encoding/utf-8.vhd(6): near "'": syntax error
** Error: /home/heeckhau/runtime-hdt.product/Encoding/utf-8.vhd(7): VHDL Compiler exiting
```

Conclusion: using special characters in character literals results in compilation errors.


#### Strings

Can the tools handle special characters in strings? Let's check this snippet:

```vhdl
package StringTest is
	constant sigasi  : string(6 downto 1) := "Sigasi";
	constant sigaesi : string(6 downto 1) := "Sigäsi";
end package StringTest;
```

Both tools report errors:

* Riviera Pro:  
```
COMP96 Compile Package "StringTest"
COMP96 ERROR COMP96_0367: "Improper array length (7). Expected length is 6." "/home/heeckhau/runtime-hdt.product/Encoding/utf-8.vhd" 3 43
```
* ModelSim:  
```
-- Compiling package StringTest
** Error: /home/heeckhau/runtime-hdt.product/Encoding/utf-8.vhd(3): (vcom-1272) Length of expected is 6; length of actual is 7.
```

So while they do not complain about the characters themselves, they complain that the string is longer than 6 characters. This is because `ä` is encoded in two bytes in UTF-8.
Note: If you ommit the explicit string size, you do not get compile errors.

#### Extended identifiers

Few people use extended identifiers, but let us see what happens:

```vhdl
architecture extended of utf8 is
	constant \Dreikäsehoch\ : integer := 0;
	constant simpleName : string := \Dreikäsehoch\'simple_name;
begin
	assert simpleName'length = 14 report "Unexpected length for " & simpleName;
end architecture extended;
```

Both tools compile this snippet without issues. But running this results in following error (Riviera Pro):
```
# EXECUTION:: ERROR  : Unexpected length for \DreikÃ¤sehoch\
```

#### Comments

```vhdl
entity utf8 is
end entity utf8;

architecture comment of utf8 is
begin
	-- Dies ist ein schöner Kommentar
	-- Αγαπώ Σιγασι
	-- 私はシガシが大好き
end architecture comment;
```

As expected both tools compile this snippet without issues.

## Conclusion

Because most VHDL code only use simple ASCII characters, it does not matter what file encoding you choose.

Only if you use special characters in character literals, strings or comments, you need to choose:

* If you are using non-ASCII characters (e.g. `'ä'`, `'©'`,...) in your VHDL code, you need to use ISO-8859-1 (and you can not have non-ISO-8859-1 in your comments).

* If you prefer non-English comments with characters that are not available in ISO-8859-1, you can use UTF-8. But refrain from using special characters in VHDL character literals and strings.

The first option, ISO-8859-1, is the safer choice, so we plan to use it as default in future Sigasi Studio versions.
