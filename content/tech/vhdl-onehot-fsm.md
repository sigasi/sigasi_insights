---
title: "Finite State Machine (FSM) encoding in VHDL: binary, one-hot, and others"
layout: page 
pager: true
author: Wim Meeus
date: 2020-03-05
tags: 
  - VHDL
  - syntax
  - StateMachine
comments: true
bannerad: true
---

{{< figure src="/img/manual/state_diag.png" alt="SFM state diagram" class="uk-align-right" width="280px" caption="State diagram in Sigasi Studio XPRT">}}

In VHDL, **Finite State Machines (FSMs)** can be written in various ways. This article addresses the **encoding** of, and the **data types** used, for the **state register**. The encoding of the states of an FSM affects its performance in terms of speed, resource usage (registers, logic) and potentially power consumption. As we will see, **enumerated datatypes** are preferred for **clarity and easy of maintenance**.

State encoding algorithms include:

* **Binary encoding**: states are enumerated with binary encoded numbers:
`"000"`, `"001"`, `"010"`, `"011"`, `"100"`...
* **One-hot encoding**: states are represented as bit patterns with exactly 1 `'1'`:  
`"000001"`, `"000010"`, `"000100"`, `"001000"`, `"010000"`...
* **Gray coding**: the encoding of successive states only differ by one bit:  
`"000"`, `"001"`, `"011"`, `"010"`, `"110"`...

The preferred encoding depends on the nature of the design. *Binary encoding* minimizes the length of the state vector, which is good for CPLD designs. *One-hot encoding* is usually faster and uses more registers and less logic. That makes one-hot encoding more suitable for FPGA designs where registers are usually abundant. *Gray encoding* will reduce glitches in an FSM with limited or no branches.

FSMs should be designed such that they're **easy to understand and maintain**. At the same time, the designer must **retain control of the FSM's state encoding**. Generally speaking, a state register can be implemented in two different ways: either as a **vector type** or as an **enumeration type**.

Consider the following examples:

```vhdl
-- Warning -- This is **NOT** recommended!
signal state: std_logic_vector(3 downto 0);
-- [some code omitted]
    case state is
    when "0001"  => -- do something
        state <= "0010";
    when "0010"  => -- do something
        state <= "0100";
    when "0100"  => -- do something
        state <= "1000";
    when "1000"  => -- do something
        state <= "0001";
```

With a **vector type**, the designer has *perfect control of the encoding* of the state vector. However, it is **hard to know what each state means**. And, **changes are cumbersome**. If a state needs to be inserted, the encoding of all further states need to be updated wherever used.

With an **enumeration type**, the design becomes much **easier to understand and maintain**:

```vhdl
type t_state is (IDLE, START, RUN, DONE);  -- enumerate all states
signal state: t_state;
-- [some code omitted]
    case state is
    when IDLE   => -- do something
        state <= START;
    when START  => -- do something
        state <= RUN;
    when RUN    => -- do something
        state <= DONE;
    when DONE   => -- do something
        state <= IDLE;
```

States can be added or modified easily, and other states are not affected when one state is added or modified. The encoding of the states however is magically implemented by the RTL synthesis tool. Fortunately, most RTL synthesis tools have ways for the designer to control the state encoding of enumerated state types.

In many cases, one would like to **define the state encoding style**. The example below shows how that can be achieved at the _type level_:

```vhdl
type t_state is (IDLE, START, RUN, DONE);                -- enumerate all states
attribute enum_encoding : string;
attribute enum_encoding of t_state : type is "one-hot";  -- encoding style of the enumerated type
signal state: t_state;
-- [some code omitted]
    case state is
    when IDLE   => -- do something
        state <= START;
    when START  => -- do something
        state <= RUN;
    when RUN    => -- do something
        state <= DONE;
    when DONE   => -- do something
        state <= IDLE;
```

The `enum_encoding` defines the FSM's state encoding style. 
Support of enumeration encoding styles **differs between RTL synthesis tools**, so have a look at the manual of yours for supported styles.
Also, some RTL synthesis tools e.g. Xilinx XST and Synopsys Synplify require additional settings for the enum_encoding attribute to take effect.

Alternatively, the state encoding style can be defined at the _signal level_ rather than at the type level.
The `fsm_state` is used for that purpose.
This way, multiple FSMs with the same set of states can each have a different state encoding.
The allowed values are: `BINARY`, `GRAY`, `ONE_HOT`, `ONE_COLD` or `AUTO`. With Synopsys Synplify, use attribute `syn_encoding` instead of `fsm_state`.

```vhdl
type t_state is (IDLE, START, RUN, DONE);                -- enumerate all states
signal state: t_state;
attribute fsm_state : string;
attribute fsm_state of state : signal is "ONE_HOT";      -- encoding style of the state register
-- [some code omitted]
    case state is
    when IDLE   => -- do something
        state <= START;
    when START  => -- do something
        state <= RUN;
    when RUN    => -- do something
        state <= DONE;
    when DONE   => -- do something
        state <= IDLE;
```

In the above examples, only the encoding _**style**_ of the state vector is defined. 
Using the `enum_encoding` attribute, the designer can also **fully control the encoding of each individual state**.
If a state is added, its encoding needs to be added in the attribute. 
The example below shows how that can be achieved.

```vhdl
type t_state is (IDLE, START, RUN, DONE);                            -- enumerate all states
attribute enum_encoding : string;
attribute enum_encoding of t_state : type is "0001 0010 0100 1000";  -- encoding of each state
signal state: t_state;
-- [some code omitted]
    case state is
    when IDLE   => -- do something
        state <= START;
    when START  => -- do something
        state <= RUN;
    when RUN    => -- do something
        state <= DONE;
    when DONE   => -- do something
        state <= IDLE;
```

In conclusion, **enumerated types are preferred for FSM state vectors**. Well chosen enumeration literals make the FSM more **easy to read, understand and maintain**. With an enumerated type, states can be added to or removed from the FSM without affecting the other states. The size of the state vector will be adjusted during RTL synthesis. Still, the **designer retains as much control of the state encoding** as they desire.