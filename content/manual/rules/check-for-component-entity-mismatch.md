---
title: Check for Component/Entity Mismatch
linting: vhdl
---


Sigasi Studio gives a warning if a **component declaration is not equal to its matching entity**. You can easily fix this by applying the Quick Fix.

<pre>entity dut is
    port(
        clk : in std_logic;
        rst : in std_logic
    );
end entity;

architecture RTL of dut is
    component <span class="warning">dut</span>
        port(
            clk : in std_logic;
            rst : in std_logic;
            dbg : in std_logic
        );
    end component;
begin
end architecture;</pre>


<pre>component <span class="goodcode">dut</span>
    port(
        clk : in std_logic;
        rst : in std_logic
    );
end component;</pre>

{{% lintrule 187 %}}
