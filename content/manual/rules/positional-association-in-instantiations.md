---
title: Positional Association in Instantiations
linting: vhdl
---

Most VHDL designers prefer named associations in port and generic maps in instantiations. This makes it a lot easier to spot wrong connections.
By default, Sigasi Studio warns when positional associations are used. You can change the severity of this check via **Preferences > Sigasi > VHDL > Errors/Warnings** in the **Instantiation statement validation** section.

<pre>architecture RTL of dut is

   component my_comp port (
      clk  : in  std_logic;
      rst  : in  std_logic;
      inp  : in  std_logic;
      outp : out std_logic);
   end component;

begin
   i_comp_1: my_comp port map( -- positional associations not recommended
      <span class="warning">clk,</span>
      <span class="warning">rst,</span>
      <span class="warning">data_in(0),</span>
      <span class="warning">open</span>
   );

   i_comp_2: my_comp port map( -- named associations recommended
      <span class="goodcode">clk  => clk,</span>
      <span class="goodcode">rst  => rst,</span>
      <span class="goodcode">inp  => data_in(0),</span>
      <span class="goodcode">outp => open</span>
   );
end architecture RTL;</pre>

{{% lintrule 164 %}}
