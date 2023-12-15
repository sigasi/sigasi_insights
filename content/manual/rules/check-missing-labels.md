---
title: Missing Label
linting: vhdl
---

Sigasi Studio can check the presence of **labels**, **end names**, and **end labels** in the code for all kinds of statements. While labels add a **distinctive identity** to statements and improve **readability**, end names and end labels make it easier to determine which **declaration** or **statement** is closed when **bodies** are long or when **multiple nested constructs** are ending simultaneously.

**Example** with a small register bank where every statement needs a label, end name, and end label
<pre>
library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

entity register_bank is
    port(
        clk      : in  std_logic;
        write    : in  std_logic;
        reg_addr : in  natural;
        reg_load : in  std_logic_vector(7 downto 0);
        reg_out  : out std_logic_vector(7 downto 0)
    );
end entity<span class="warning">;</span> -- Missing end name

architecture RTL of register_bank is
    type reg_bank_t is array (15 downto 0) of std_logic_vector(7 downto 0);
    signal reg_bank : reg_bank_t;
begin
    <span class="warning">process</span>(clk) is -- Missing label (and end label)
    begin
        <span class="warning">if</span> rising_edge(clk) and write = '1' then -- Missing label (and end label)
            <span class="warning">reg_bank(reg_addr)</span> <= reg_load;      -- Missing label
        end if;
    end process;

    <span class="warning">reg_out</span> <= reg_bank(reg_addr); -- Missing label
end architecture<span class="warning">;</span>                  -- Missing end name
</pre>

<pre>
library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

entity register_bank is
    port(
        clk      : in  std_logic;
        write    : in  std_logic;
        reg_addr : in  natural;
        reg_load : in  std_logic_vector(7 downto 0);
        reg_out  : out std_logic_vector(7 downto 0)
    );
end entity <span class="goodcode">register_bank</span>;

architecture RTL of register_bank is
    type reg_bank_t is array (15 downto 0) of std_logic_vector(7 downto 0);
    signal reg_bank : reg_bank_t;
begin
    <span class="goodcode">reg_write :</span> process(clk) is
    begin
        <span class="goodcode">check_clk_write :</span> if rising_edge(clk) and write = '1' then
            <span class="goodcode">write_reg :</span> reg_bank(reg_addr) <= reg_load;
        end if <span class="goodcode">check_clk_write</span>;
    end process <span class="goodcode">reg_write</span>;

    <span class="goodcode">read_reg :</span> reg_out <= reg_bank(reg_addr);
end architecture <span class="goodcode">RTL</span>;
<span class="goodcode"></span>
</pre>

{{% ruleConfiguration %}}
{{< rule id=251 >}}
{{< param/bool name=entity_end_name >}}
{{< param/bool name=architecture_end_name >}}
{{< param/bool name=configuration_end_name >}}
{{< param/bool name=package_end_name >}}
{{< param/bool name=package_body_end_name >}}
{{< param/bool name=context_end_name >}}
{{< param/bool name=component_end_name >}}
{{< param/bool name=function_end_name >}}
{{< param/bool name=procedure_end_name >}}
{{< param/bool name=record_type_end_name >}}
{{< param/bool name=physical_type_end_name >}}
{{< param/bool name=protected_type_end_name >}}
{{< param/bool name=protected_type_body_end_name >}}
{{< param/bool name=for_generate_end_label >}}
{{< param/bool name=if_generate_end_label >}}
{{< param/bool name=case_generate_end_label >}}
{{< param/enumeration "if_generate_alternative_labels" "ignore" "start_label" "start_and_end_labels" >}}
{{< param/enumeration "case_generate_alternative_labels" "ignore" "start_label" "start_and_end_labels" >}}
{{< param/enumeration "process_labels" "ignore" "start_label" "start_and_end_labels" >}}
{{< param/bool name=concurrent_block_end_label >}}
{{< param/bool name=concurrent_procedure_call_label >}}
{{< param/bool name=concurrent_assertion_label >}}
{{< param/bool name=concurrent_signal_assignment_label >}}
{{< param/enumeration "if_labels" "ignore" "start_label" "start_and_end_labels" >}}
{{< param/enumeration "case_labels" "ignore" "start_label" "start_and_end_labels" >}}
{{< param/enumeration "loop_labels" "ignore" "start_label" "start_and_end_labels" >}}
{{< param/enumeration "sequential_block_labels" "ignore" "start_label" "start_and_end_labels" >}}
{{< param/bool name=sequential_procedure_call_label >}}
{{< param/bool name=sequential_assertion_label >}}
{{< param/bool name=sequential_signal_assignment_label >}}
{{< param/bool name=variable_assignment_label >}}
{{< param/bool name=wait_label >}}
{{< param/bool name=report_label >}}
{{< param/bool name=next_label >}}
{{< param/bool name=exit_label >}}
{{< param/bool name=return_label >}}
{{< param/bool name=null_label >}}
{{< /rule >}}
{{% /ruleConfiguration %}}
