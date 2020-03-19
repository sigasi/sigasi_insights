---
title: "Prefix all signals in an instantiation"
date: 2019-10-11T09:45:47+02:00
publishdate: 2019-10-11
lastmod: 2019-10-11
pager: true
author: Bart Brosens
comments: true
bannerad: true
tags:
  - editor
  - howto
  - VHDL
  - Verilog
  - SystemVerilog
---

When you auto-complete an instantiation using the Sigasi Studio [Content Assist]({{< ref "/manual/editor#auto-complete-and-content-assist" >}}),
wire or signal names in the port map get a default value which is equal to the port name.
In many designs this can be a insufficient.
You might need to give the wires/signals in the portmap a prefix so they match the actual wire/signal names in the design.

{{< figure src="/img/tech/prefix-wires-instantiation-verilog.png" link="/img/tech/prefix-wires-instantiation-verilog.png" alt="Find and Replace using regular expressions" title="Find and Replace using regular expressions" width="600" class="uk-align-right" >}}

Updating all wires or signals in a long port map can be a tedious task.
However, using the *Regular expressions* capability of the
*[Find/Replace dialog]({{< ref "faq#whole-word-textual-search" >}})*,
pre-pending the prefix to the wires/signals can be done more efficient.

In the screenshot, the *Find* field contains `\((.*)\)` to select everything between brackets.
The outer brackets are escaped to match the actual brackets in the port map.
The inner brackets *capture* the text between the brackets, which is back referenced with `\1` in the *Replace with* field.
More information on this regular expression can be found in the [Java regex tutorial][javaregex].

The prefix is written before the captured wire name to create the correct name.
This way you easily can add a prefix to multiple or all wires/signals in the port map.

The example below shows how this can be done in VHDL instantiations too.
Here the *Find* field matches the port assignment operator.
The brackets *capture* all characters behind the assignment operator.
These characters can be referenced with `\1` in the *Replaced with* field.

{{< figure src="/img/tech/prefix-signals-instantiation-vhdl.png" link="/img/tech/prefix-signals-instantiation-vhdl.png" alt="Find and Replace using regular expressions" title="Find and Replace using regular expressions" >}}

[javaregex]: https://www.vogella.com/tutorials/JavaRegularExpressions/article.html#grouping-and-back-reference
