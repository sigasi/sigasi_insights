---
title: Unexpected Keyword Capitalization
linting: vhdl
---

VHDL is mostly a case-insensitive language, so keywords can be written in any case: lowercase, uppercase, or any combination of those. Using a consistent casing for keywords throughout the project may improve readability.

<pre><span class="goodcode">signal</span> lower: boolean;
<span class="warning">Signal</span> mixed: boolean;
<span class="warning">SIGNAL</span> upper: boolean;
</pre>

This rule can be configured by setting the desired **default capitalization**: either lowercase, uppercase, or consistent in file. The latter will look at the majority of casing in the file. Some **specific keyword capitalization** exceptions can also be added.

Note that this rule is set to {{< severity ignore 0 >}} `ignore` by default.

{{% ruleConfiguration %}}
{{< rule id=240 >}}
{{< param/enumeration style consistent_in_file uppercase lowercase >}}
{{< param/list name=overrides type=keyword >}}
{{< /rule >}}
{{% /ruleConfiguration %}}
