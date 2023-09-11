---
title: Linting Rules for Arrays
linting: vhdl
---

Sigasi Studio can check for a number of array / vector index-related problems:

* Index out of range (rule 210).

<pre>architecture RTL of array_range_check is
    signal foo: bit_vector(7 downto 0);
    signal bar, baz: bit;
begin
    bar <= <span class="warning">foo(8)</span>;   -- 8 is out of range "7 downto 0"
    baz <= <span class="goodcode">foo(7)</span>;
end architecture RTL;
</pre>

* Slice has wrong direction (rule 211).

Slice ranges must use the same direction as the vector.

<pre>architecture RTL of array_range_check is
    constant iterations : integer := 8;
    signal foo: bit_vector(7 downto 0);
    signal bar, baz: bit_vector(0 to 7);
begin
    bar <= <span class="warning">foo(0 to 7)</span>;   -- foo has a downto range
    baz <= <span class="goodcode">foo</span>;
end architecture RTL;</pre>

{{% ruleConfiguration many=yes %}}
{{< rule id=210 />}}
{{< rule id=211 />}}
{{% /ruleConfiguration %}}
