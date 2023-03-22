---
title: Deprecated IEEE Packages and Non-Standard Packages
---

Some packages are widely spread but were never standardized by IEEE.
Different vendors have shipped different versions, with incompatible
implementations. These packages should not be used and are flagged as
**Deprecated IEEE packages**.

<pre>use ieee.<span class="warning">std_logic_arith</span>.all
use ieee.<span class="warning">std_logic_signed</span>.all
use ieee.<span class="warning">std_logic_unsigned</span>.all</pre>

Instead, use the standard `ieee.numeric_std` package.

<pre>use ieee.<span class="goodcode">numeric_std</span>.all</pre>

The package `ieee.std_logic_misc` has the same problem of not being standardized by IEEE. Contrary to the packages above, there is no consensus on how to replace this package. Sigasi Studio flags this package as **Non-standard package**.

<pre>use ieee.<span class="info">std_logic_misc</span>.all</pre>

Read more on IEEE packages in [Deprecated IEEE Libraries](/tech/deprecated-ieee-libraries).

{{% lintrule 8 37 %}}
