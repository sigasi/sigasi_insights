---
title: Language Feature Restrictions
linting: vhdl
---

Sigasi Studio lets users restrict the usage of language features.

## Prohibited Keyword or Operator

Keywords and operators can be restricted using a list of keywords and operators that cannot be used (rule 245). For example:

Following keywords and operators are not allowed: `**`, `after`
<pre>
if a<span class="warning">**</span>2=4 then            -- Operator '**' is prohibited
    a <= 8 <span class="warning">after</span> 5 ns;    -- Keyword 'after' is prohibited
end if;
</pre>

## Prohibited Attribute

Attributes can be restricted using a list of attributes that cannot be used (rule 243). These attributes can be configured in two modes: **deny** and **allow**, and can also include checks for **user-defined attributes**. For example:

- Check attributes in **deny** mode *(`event` and `value` denied)*
<pre>
architecture RTL of prohibited_attribute is
begin
    a : process is
        type myEnum is (a, b, c, d);
        constant constB : myEnum  := myEnum'<span class="warning">value</span>("b");    -- Attribute 'value' is prohibited
    begin
        if clk'<span class="warning">event</span> then                                  -- Attribute 'event' is prohibited
            report "event" severity note;
        end if;

        if clk'low = '1' then                              -- Attribute 'low' is allowed
            report "low" severity note;
        end if;

    end process a;
end architecture RTL;
</pre>

- Check attributes in **allow** mode *(`event` allowed)*
<pre>
architecture RTL of allowed_attribute is
begin
    a : process is
        type myEnum is (a, b, c, d);
        constant constB : myEnum  := myEnum'<span class="warning">value</span>("b");    -- Attribute 'value' is prohibited
    begin
        if clk'event then                                  -- Attribute 'event' is allowed
            report "event" severity note;
        end if;

    end process a;
end architecture RTL;
</pre>

## Prohibited Library

Libraries can be restricted using a list of **denied** or **allowed** libraries that will be reported in the use clause (rule 248). Using the current work library is **always allowed** regardless of configuration. For example:

- Library `abc` **denied**
<pre>
<span class="warning">library abc;</span>    -- Library 'abc' is prohibited
</pre>

- Library `ieee` **allowed**
<pre>
<span class="warning">library abc;</span>    -- Only library 'ieee' is allowed
</pre>

## Prohibited Package

Packages can be restricted using a list of **denied** or **allowed** packages that will be reported in the use clause (rule 246). Using packages from the work library or the current work library is **always allowed** regardless of configuration. For example:

- Check packages in **deny** mode *(`ieee.numeric_std` and `work.user_package` denied)*
<pre>
library ieee;
use ieee.std_logic_1164.all;
<span class="warning">use ieee.numeric_std.all;</span>       -- Package 'numeric_std' is prohibited
use work.user_package.all;      -- Ignored because work
</pre>

- Check packages in **allow** mode *(`ieee.numeric_std` and `work.user_package` allowed)*
<pre>
library ieee;
<span class="warning">use ieee.std_logic_1164.all;</span>    -- Package 'std_logic_1164' is prohibited
use ieee.numeric_std.all;
use work.user_package.all;      -- Ignored because work
</pre>

- Check packages in **denied** mode, with the current file mapped to the library **memory** *(`memory.ram_cell` denied)*
<pre>
library ieee, memory;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use memory.ram_cell.all;        -- Ignored because mapped to the same library
</pre>

## Prohibited Pragma

Pragmas can be restricted using a list of pragmas that will be reported when they are used (rule 247). For example:

The following pragma is not allowed: `vhdl_comp_off`
<pre>
-- <span class="warning">vhdl_comp_off</span>    -- Pragma 'vhdl_comp_off' is prohibited
assert (rst_lvl = 0) or (rst_lvl = 1)
    report "rst_lvl should be 0 or 1"
    severity failure;
-- vhdl_comp_on
</pre>

{{% lintrule 244 245 246 247 248 %}}
