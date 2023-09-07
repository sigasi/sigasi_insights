---
title: Unexpected FSM State Type
linting: vhdl
---

It is recommended to declare the FSM states as enumerated data types. Enumerated state types make HDL code generally more readable. It also facilitates increased flexibility in the synthesis implementation as you can select the encoding style used without modifying the HDL code. These aspects support greater design portability and support FSM error detection and recovery.
In safety-critical designs though, `std_logic_vector` can still be preferred.

Sigasi Studio can ensure one of the following types is used for FSM state signals or variables (rule 237):

- **enumeration**
- **arrays of (u)logic**, e.g., `std_logic_vector`
- **arrays of bit**, e.g., `bit_vector`

The type that is configured by default is `enumeration`.

**Example** with "array of logic" as expected FSM state type:
<pre>
process is
    variable <span class="warning">state</span>  : bit_vector(1 downto 0) := "00"; -- Unexpected FSM state type: expected array of (u)logic but was 'bit_vector'
    variable <span class="goodcode">state2</span> : std_logic_vector(1 downto 0) := "00";
begin
    case state is
        when "00" => state := "11";
        when "11" => state := "00";
    end case;
end process;
</pre>

Note that this rule is set to {{< severity ignore 0 >}} `ignore` by default. You can enable it in the VHDL **Errors/Warnings** preference page (**Style Validation > Unexpected FSM state type**).
You can also configure the **FSM state type** that is checked on this page.

{{% lintrule 237 %}}
