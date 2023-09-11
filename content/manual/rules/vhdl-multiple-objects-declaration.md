---
title: Multiple Objects in One Declaration
linting: vhdl
---

It is advised not to use multiple-object declarations. It's better to split declared objects into an equivalent sequence of single-object declarations instead. This practice enhances readability and makes it easier to manage and maintain your code.
Sigasi Studio warns the user when multiple objects are declared within a single declaration.

<pre>
entity t is
    generic(
        <span class="warning">DATA_WIDTH</span>, <span class="warning">ADDR_WIDTH</span>: integer
    );
    port(
        <span class="goodcode">a</span>: in std_logic(DATA_WIDTH - 1 downto 0); -- first operand
        <span class="goodcode">b</span>: in std_logic(DATA_WIDTH - 1 downto 0)  -- second operand
    );
end entity t;</pre>

{{% ruleConfiguration %}}
{{< rule id=253 />}}
{{% /ruleConfiguration %}}
