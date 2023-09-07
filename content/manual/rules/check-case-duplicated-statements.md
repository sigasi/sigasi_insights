---
title: Case Alternative Contains Duplicate Choices
linting: vhdl
---

Sigasi Studio can check that each **choice** is specified only once in case and case generate statements as well as selected signal and variable assignments.

<pre>
process is
  variable state : std_logic_vector(2 downto 0)   := "000";
  constant IDLE  : std_logic_vector               := "110";

begin
  case state is
    when "000" => state := IDLE; 
    when "110" => state := "000";
    when <span class="error">IDLE</span>  => state := "100";
  end case;

end process;
</pre>

{{% lintrule 14 %}}
