---
title: "VHDL file encoding"
layout: page 
pager: true
author: Hendrik
date: 2017-01-31
comments: true
---
## Introduction

I have been using VHDL for almost two decades and never wondered how I should save my VHDL files. Coming from a software background I always use **UTF-8** as **default character or file encoding**.

I have run into troubles with file encoding for Dutch text before --In Belgium we tend to drink beer in "[cafés](https://nl.wikipedia.org/wiki/Caf%C3%A9)" on a regular basis)--, but using UTF-8 always solved this issue. 

But suddenly I received two mails pointing out that Sigasi Studio shouldn't use UTF-8 by default. We were urged to use **ISO-8859-1** instead.

As a dinosaur in this post-truth era, I decided to go old-school and research the facts for this topic.

[UTF-8](https://en.wikipedia.org/wiki/UTF-8) can encode all possible characters defined by Unicode. It encodes characters with _variable length_. [ISO-8859-1](https://en.wikipedia.org/wiki/ISO-8859-1) uses single byte encoding, so it can encode less characters than UTF-8. The first 126 characters of both UTF-8 and ISO-8859-1 map to the same (ASCII) characters. The extra characters of ISO-8859-1 consist of characters of American, Western European, Oceanian and African languages.

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

TODO

## Conclusion

Both UTF-8 and ISO-8859-1 are backwards compatible with the first 126 characters of ASCII. Because most VHDL code uses only these characters, it does not matter what file encoding you choose for most VHDL code.

Only if you use special character literals or comments you need to choose:

* If you are using non-ASCII characters (e.g. `'ä'`, `'©'`,...) in your VHDL code, you need to use ISO-8859-1 (and you can not have non-ISO-8859-1 in your comments).

* If you prefer non-English comments with characters not in ISO-8859-1, you can use UTF-8. But refrain from using special characters in VHDL character literals.

Since most the first option is the safer choice, Sigasi Studio will default to ISO-8859-1 starting with Sigasi Studio 3.4.