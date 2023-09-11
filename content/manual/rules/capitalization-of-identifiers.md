---
title: Capitalization of Identifiers
linting: vhdl
---

Although VHDL is not case-sensitive, it is recommended to always use the same capitalization when referring to the same declaration. Sigasi Studio warns when the capitalization of a reference differs from the capitalization of the declaration. Because external libraries can have different code styles, this linting only checks references in the same library as its declaration.

Capitalization can easily be fixed with a Quick Fix.

{{< figure src="/img/manual/captalization_references.png" >}}

All capitalization issues in a file can be fixed in one click.

{{< figure src="/img/releasenotes/3.6/capitalization_all.png" >}}

{{% ruleConfiguration %}}
{{< rule id=163 />}}
{{% /ruleConfiguration %}}
