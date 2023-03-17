---
title: Superfluous Library Clause
---

The VHDL language reference manual states that:

*Every design unit except package STANDARD is assumed to contain the following implicit context items as part of its context clause:*

```vhdl
    library STD, WORK;
    use STD.STANDARD.all;
```

Hence, any extra library statement in your VHDL code that includes
`STD` or `WORK` is pointless, as is any use clause that includes
`std.standard.all`. Hardly anybody would type the use clause, but
quite some people start all of their files with two extra library
clauses.

It is good practice **not to include use clauses for libraries STD and WORK**. Sigasi Studio flags as warning if they appear.

<pre>library IEEE<span class="error">, STD, WORK</span>;</pre>

{{< figure src="/img/manual/warn-superfluous-library.png" >}}

{{%lintrule 49%}}
