---
title: Check header comment
---


Sigasi Studio can check that the **header comment** matches a specified pattern. A **header comment** is the comment that starts at the first character of your file (*no leading whitespace*).

The check can be enabled in **Preferences > Sigasi > VHDL > Naming conventions**.  The pattern can be set on the same page.

Since [Sigasi Studio 4.4](/releasenotes/sigasi-4.04.html), the raw string of the header comment is checked to allow for maximum compliance checking.
This means that when a new line is matched, users should use `\r?\n` or the newly introduced `\R` to make sure the naming conventions work on all platforms.

{{< figure src="/img/releasenotes/3.8/header_comment.png" alt="Check header comments" >}}

{{% lintrule 188 %}}
