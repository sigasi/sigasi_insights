---
title: Order of Associations
linting: vhdl
---

Sigasi Studio gives a warning when the **order** of generics or ports in a `map` differs from the original generics or ports declaration order.

<pre>architecture RTL of dut is

   component my_comp port (
      clk  : in  std_logic;
      rst  : in  std_logic;
      inp  : in  std_logic;
      outp : out std_logic);
   end component;

begin
   assert iterations <= MAX_COUNT;

   i_comp_1: my_comp port map( -- associations should be kept in the same order as the declaration
      <span class="warning">rst  => rst,</span>
      <span class="warning">clk  => clk,</span>
      inp  => data_in(0), 
      outp => open
   );

   i_comp_1: my_comp port map(
      <span class="goodcode">clk  => clk,</span> 
      <span class="goodcode">rst  => rst,</span>
      inp  => data_in(0), 
      outp => open
   );</pre>

{{% ruleConfiguration %}}
{{< rule id=177 />}}
{{% /ruleConfiguration %}}
