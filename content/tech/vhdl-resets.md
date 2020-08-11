---
title: "How to code reset in a synchronous VHDL process"
layout: page 
pager: true
author: Sigasi Team
date: 2020-08-11
tags: 
  - VHDL
comments: true
bannerad: true
---

In digital design, **resets** are used to **bring a circuit into a predefined state** after power-up. This article focuses on how to design resets for synchronous digital circuits in VHDL. The concepts discussed in this article are equally valid in other design languages e.g. Verilog.

Resets are designed in synchronous (clocked) parts of the design. A reset is either asynchronous or synchronous. An asynchronous reset activates as soon as the reset signal is asserted. A synchronous reset activates on the active clock edge when the reset signal is asserted. The choice between a synchronous or asynchronous reset depends on the nature of the logic being reset and the project requirements.

Advantages and disadvantages of **synchronous resets** include:

* Synchronous resets are predictable (at the clock edge)
* Synchronous resets are robust a.o. against glitches
* In ASIC technology, smaller flip-flops may be used...
* ... but the reset is implemented in (extra) logic, which may add latency
* Timing closure of a large reset net may be challenging

Advantages and disadvantages of **asynchronous resets** include:

* Reset can happen when the clock is not running, e.g. in early stages of circuit start-up or when using clock gating
* Lower latency is achievable because the reset circuitry is not part of the data path
* Glitches on the reset net can lead to spurious resets
* One must ensure that the de-assertion of the reset doesn't happen at or near a clock edge

In general, **synchronous resets are recommended** unless the particular circuit requires an asynchronous reset.
The choice may **depend on the technology** used, e.g. some FPGA blocks may only support a synchronous reset.
One place where **asynchronous** resets may be required is for **inout and output pins** of a chip, so these can be brought to a safe value before a clock is running.
A more in-depth discussion of synchronous vs. asynchronous resets is presented in [this](https://www.researchgate.net/publication/250897003_Synchronous_Resets_Asynchronous_Resets_I_am_so_confused_How_will_I_ever_know_which_to_use) and [this](https://forums.xilinx.com/t5/Blog-Archive/Demystifying-Resets-Synchronous-Asynchronous-other-Design/td-p/882252) article.


## Asynchronous and synchronous reset

The following piece of code shows a *standard* implementation of a synchronous process with an asynchronous reset. As soon as the reset signal `rst` is driven high, a reset is executed. If reset is low, the normal operation activates on every rising clock edge.

```vhdl
p_asynchronous_reset : process(clk, rst) is
begin
   if rst = '1' then                  -- do reset
      q <= '0';
   elsif rising_edge(clk) then        -- normal operation
      q <= d;
   end if;
end process p_asynchronous_reset;
```

The code snippet below shows a *standard* implementation of a synchronous process with a synchronous reset. The process is activated only on a rising clock edge, at which time either a reset or the normal operation is executed.

```vhdl
p_synchronous_reset : process (clk) is
begin
   if rising_edge(clk) then
      if rst = '1' then               -- do reset
         q <= '0';
      else                            -- normal operation
         q <= d;
      end if;
   end if;
end process p_synchronous_reset;
```

These ways of coding resets in VHDL are straightforward and efficient for simulation. Sigasi Studio can generate the code template for processes with synchronous or asynchronous reset. Simply type **proc** and **Ctrl+Space** and select *process - define a synchronous process with synchronous reset* or *process - define a synchronous process with asynchronous reset* as needed. Further information on the Content Assist and Auto-complete can be found in the [manual](https://insights.sigasi.com/manual/editor/#auto-complete-and-content-assist).

An *alternative* way of coding a synchronous reset is shown below. At the clock edge, the normal operation executes. If reset is active, the result of the normal operation is overridden by the reset action.

```vhdl
p_synchronous_reset : process (clk) is
begin
   if rising_edge(clk) then
      q <= d;                         -- normal operation
      
      if rst = '1' then
         q <= '0';                    -- do reset
      end if;
   end if;
end process p_synchronous_reset;
```

This coding style may be less intuitive and slightly slower in simulation, but it is equally valid and RTL synthesis will return the same result. Note that also an asynchronous reset can be coded as an override at the end of the process.

## Resets: it's all or nothing

One thing to remember is that one **should either reset all signals written be a process, or none**. This rule is useful for clarity in the first place. Not resetting a subset of signals written in a process may result in unintended circuit behavior or RTL synthesis may add unwanted additional circuitry.

```vhdl
p_partial_synchronous_reset_1 : process (clk) is  -- BAD EXAMPLE!!
begin
   if rising_edge(clk) then
      if rst = '1' then               -- do reset
         q1 <= '0';                   -- reset of q2 missing
      else
         q1 <= d1;                    -- normal operation
         q2 <= d2;
      end if;
   end if;
end process p_synchronous_reset;
```

In this case, only `q1` is reset, while `q2` is left untouched during a reset operation. The behavior may be correct, because the value of `q2` may not be important after reset. RTL synthesis however will introduce circuitry to ensure that `q2` maintains the same state during reset, adding logic and possible delay to the circuit.

```vhdl
p_partial_asynchronous_reset : process(clk, rst) is  -- BAD EXAMPLE!!
begin
   if rst = '1' then                  -- do reset
      q1 <= '0';
   elsif rising_edge(clk) then        -- normal operation
      q1 <= d1;
      q2 <= d2;
   end if;
end process p_asynchronous_reset;
```

The same applies when the reset is asynchronous. The logic to have `q2` keep its state during reset gets an asynchronous input, which will have a negative impact on RTL synthesis and circuit timing.

```vhdl
p_partial_synchronous_reset_2 : process (clk) is  -- BAD EXAMPLE!!
begin
   if rising_edge(clk) then
      q1 <= d1;                       -- normal operation
      q2 <= d2;
      
      if rst = '1' then               -- do reset
         q1 <= '0';                   -- reset of q2 missing
      end if;
   end if;
end process p_synchronous_reset;
```

Using the alternative coding style, not resetting all signals leads to different behavior. In this case, `q1` will be reset while `q2` will continue operating *normally*, as far as normal goes during reset. If that is the intended behavior, it would be better for clarity to assign `q1` and `q2` in separate processes.

So the best practice is: **if a synchronous process has a reset, make sure to reset all signals written in the process**.

## Reset polarity

The above examples all contain a test `if rst = '1'` to check whether a reset has to be performed. This is called an *active high* reset. The alternative, an *active low* reset, would reset the circuit when the reset signal is low. Both active high and active low resets are valid.

The choice between active high and active low depends on the application and the implementation platform. For example, if your project targets an ASIC technology featuring flip-flops with an active low reset input, active low reset may be the best choice. Or, for an FPGA project, it depends on the specific FPGA technology whether active high (or low) resets can be implemented more efficiently than the other type. Especially on high-fanout nets, choosing the wrong reset type can lead to timing violations.

For clarity, it is good practice to add a `_n` (*not/negative*) or `_b` (*bar*) suffix to active low reset signal names.

For reusability, e.g. for IP blocks, you may want a **configurable reset polarity**. This can be achieved with a constant or a generic, as in the example below:

```vhdl
p_synchronous_reset : process (clk) is
begin
   if rising_edge(clk) then
      if rst = reset_polarity then    -- do reset 
         q <= '0';
      else                            -- normal operation
         q <= d;
      end if;
   end if;
end process p_synchronous_reset;
```

In the above example, the reset polarity is determined by `reset_polarity`. `reset_polarity` could be either a constant or a generic of type `std_logic`. Both have advantages and drawbacks.

* A constant can be defined globally for a project. This is convenient for smaller projects with a single reset.
* A generic needs to be propagated throughout the project. Complex projects with a mix of reset polarities would require this approach. Mixing reset polarities is not recommended, but IP cores from external suppliers may come with different reset polarities.

## A universal reset

A further step towards a flexible reset is achieved by also **making the choice between synchronous and asynchronous configurable**. To this end, we add a boolean constant or generic `synchronous_reset`.

```vhdl
p_any_reset : process(clk, rst) is
begin
   if not synchronous_reset and rst = reset_polarity then
      q <= '0';                                           -- asynchronous reset (if selected)
   elsif rising_edge(clk) then
      if synchronous_reset and rst = reset_polarity then
         q <= '0';                                        -- synchronous reset (if selected)
      else
         q <= d;                                          -- normal operation
      end if;
   end if;
end process p_any_reset;
```

Regardless of whether a synchronous or asynchronous reset is selected, the same registers need to be reset to the same values. In order to **avoid code duplication**, the reset action can be put in a **procedure** at the start of the process. The final code of a synchronous process with a *universal* reset could look like this:

```vhdl
entity my_entity is
   generic(
      reset_polarity    : std_logic := '1';
      synchronous_reset : boolean   := true
   );

-- code omitted

p_any_reset : process(clk, rst) is
   procedure perform_reset is                             -- this procedure contains the reset action
   begin
      -- reset **all** relevant signals here
      q <= '0';
   end procedure;
begin
   if not synchronous_reset and rst = reset_polarity then
      perform_reset;                                      -- asynchronous reset (if selected)
   elsif rising_edge(clk) then
      if rst = reset_polarity and synchronous_reset then
         perform_reset;                                   -- synchronous reset (if selected)
      else
         q <= d;                                          -- normal operation
      end if;
   end if;
end process p_any_reset;
```

This way, you can create **truly reusable code** that is easy to configure for various targets having different optimal reset strategies.
