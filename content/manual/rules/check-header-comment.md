---
title: Check Header Comment
linting: vhdl
---

Sigasi Studio can check that **header comments** match specified patterns.
A **header comment** is a comment associated with a declaration or file.
A file header comment starts at the _first_ character of the file (*no leading whitespace*).
{{< page "manual/common/documentation.md" "#comment-association" >}} details how comments are associated with declaration.
For VHDL, Sigasi supports checking header comments on files, architectures, concurrent blocks,
configurations, contexts, entities, functions, package bodies, packages, package instantiations,
procedures, and processes.
For Verilog and SystemVerilog, only header comments on files are currently supported.

The check can be enabled for the entire workspace via **Preferences > Sigasi > VHDL|Verilog/SystemVerilog > Header Comments**.
The patterns can be configured on the same page.
More information on header comment checking and naming conventions is available on the general {{< page "manual/eclipse/linting.md" "#naming-conventions-and-header-comment-checks" >}} page.

Note that the entire comment is checked, including comment characters (`--` or `/* */`).
These characters have to be handled by your patterns too.

Since {{< page "/releasenotes/sigasi-4.04.md" >}}, the raw string of the header comment is checked to allow for maximum compliance checking.
This means that when a new line is matched, users should use `\r?\n` or the newly introduced `\R` to make sure the naming conventions work on all platforms.

{{< figure src="/img/manual/header_comment.png" alt="Check header comments" class="uk-align-center" >}}

{{% ruleConfiguration many=yes %}}
# Note: two patterns can be specified. These patterns are separated by a tab
# character. The first pattern specifies a *valid* pattern (something that must
# match), and the second pattern specifies an *invalid* pattern (something that
# can not match). If only a valid pattern is required, the tab character can
# be left out. If only an invalid pattern is required, the pattern should be
# specified after a (backslash-escaped) tab character.

{{< rule id=188 comment="In the VHDL linting preferences file" >}}
{{< param/posneg name="architecture_header_comment" >}}
{{< param/posneg name="comment_header" >}}
{{< param/posneg name="configuration_header_comment" >}}
{{< param/posneg name="context_header_comment" >}}
{{< param/posneg name="entity_header_comment" >}}
{{< param/posneg name="function_header_comment" >}}
{{< param/posneg name="package_body_header_comment" >}}
{{< param/posneg name="package_header_comment" >}}
{{< param/posneg name="package_instantiation_header_comment" >}}
{{< param/posneg name="procedure_header_comment" >}}
{{< param/posneg name="process_header_comment" >}}
{{< param/posneg name="concurrent_block_header_comment" >}}
{{< /rule >}}
{{< rule id=22 comment="In the Verilog/SystemVerilog linting preferences file" >}}
{{< param/posneg name="comment_header" >}}
{{< /rule >}}
{{% /ruleConfiguration %}}
