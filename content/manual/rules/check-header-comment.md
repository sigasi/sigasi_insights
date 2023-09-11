---
title: Check Header Comment
linting: vhdl
---


Sigasi Studio can check that **header comments** of files, design units, subprograms, etc. match specified patterns. A **header comment** is a comment associated with a declaration or file.
A file header comment starts at the _first_ character of the file (*no leading whitespace*).
More information on comment association is available [here](/manual/eclipse/documentation/#comment-association).

The check can be enabled in **Preferences > Sigasi > VHDL > Header Comments**.  The pattern can be set on the same page.
More information on file header comment checking is available [here](/manual/eclipse/linting/#naming-conventions).

Note that the entire comment is checked, including comment characters (`--` or `/* */`).
These characters have to be handled by your patterns too.

Since [Sigasi Studio 4.4]({{< ref "/releasenotes/sigasi-4.04.md" >}}), the raw string of the header comment is checked to allow for maximum compliance checking.
This means that when a new line is matched, users should use `\r?\n` or the newly introduced `\R` to make sure the naming conventions work on all platforms.

{{< figure src="/img/manual/header_comment.png" alt="Check header comments" >}}

{{% ruleConfiguration %}}
{{< rule id=188 />}}
{{% /ruleConfiguration %}}
