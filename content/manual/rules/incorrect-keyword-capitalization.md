---
title: Unexpected Keyword Capitalization
linting: vhdl
---

VHDL is mostly a case-insensitive language, so keywords can be written in any case: lowercase, uppercase, or any combination of those. Using a consistent casing for keywords throughout the project may improve readability.

<pre><span class="goodcode">signal</span> lower: boolean;
<span class="warning">Signal</span> mixed: boolean;
<span class="warning">SIGNAL</span> upper: boolean;
</pre>


This rule can be configured by setting the desired **default capitalization**: either lowercase, uppercase, or consistent in file. Some **specific keyword capitalization** exceptions can also be added by setting a list of keywords, separated by commas. For example, `ENTITY, Architecture`.


Note that this rule is set to {{< severity ignore 0 >}} `ignore` by default.

{{% lintrule 240 %}}
