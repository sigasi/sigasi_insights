---
title: "Using VUnit for Real"
layout: page
pager: true
author: Wim Meeus
date: 2023-04-26
comments: true
bannerad: true
tags:
  - VUnit
---

[VUnit](https://vunit.github.io) is an open source **[unit
testing](https://en.wikipedia.org/wiki/Unit_testing) framework for
VHDL and SystemVerilog** that helps write and execute
tests.  VUnit **scans your projects for unit tests** (aka test
benches), **runs them** with your favorite simulator, and **reports the
results**.  This automation helps run tests (more) frequently and iterate
faster.

**Unit-testing** means: **testing whether an individual, usually
small unit of code** (the ***Unit Under Test*** or UUT) **works as
intended** with a variety of inputs.  Unit tests are different from
(sub)system tests. A system test assesses the interaction between
different components, usually individually tested already by unit
tests. Therefore, a system test is more involved and complex than a unit
test. In the case of HDL, it is perfectly viable to write unit tests
in the same HDL as the UUT itself, whereas the complexity of system
tests often requires more high-level programming language features
, frameworks, or methodologies like object orientation. Examples of languages and
frameworks for HDL system testing include
[Python](https://www.python.org/) ([CoCoTB](https://www.cocotb.org/)),
[UVM](https://www.accellera.org/downloads/standards/uvm), and
[SystemC](https://systemc.org/).

In practice, unit-testing means defining and running a series of **test
cases** against a UUT.  Each test case challenges a particular
behavior of the UUT, to either prove the correctness or point out
a flaw.  As you'll notice in our example, even a small UUT may require
a range of unit test cases, and the amount of test code often exceeds
the amount of code in the UUT.  Oftentimes, we don't only want to test
that the UUT behaves correctly when meaningful inputs are provided,
but also whether the UUT is robust against meaningless or dangerous
inputs.

In our quest for information on, and understanding of, VUnit, we've
spent quite a lot of time finding an example from which we could learn
how to actually do unit testing with VUnit. In the end, we found many
trivial examples. What do you think of something like this?

```vhdl
if run("test_always_pass") then
    check(true, "This test succeeds");
elsif run("test_intentional_fail") then
    check(false, "This test is meant to fail");
end if;
```

Disappointing example, isn't it? While this piece of code (in a larger
context) defines two VUnit tests, it doesn't even have a UUT, which is
actually supposed to be the point...

In this article, we'll present a **realistic example of unit testing**
with VUnit.  Our Unit Under Test is a 74161-like **4-bit synchronous
counter**.  Apart from the clock input, the counter has an
asynchronous clear input, two counter enable inputs, and inputs to set
the counter to a particular value. The counter has two outputs: the
actual counter value and a carry-out.  Our project's source code is
[available on Gitlab](https://gitlab.com/sigasi/public/vunit-ci).

{{< figure src="/img/tech/vunit_74161.png" alt="Block diagram of 74161 synchronous counter" class="uk-align-center" >}}

To unit-test our counter, we have defined **five test cases** based on the requirements for the counter:
* **Initial Clear**: the counter is cleared asynchronously, whether the clock is running or not. The clear input is dominant over other inputs.
* **Load Random**: the counter gets pre-set to the appropriate randomized value after a rising clock edge. Preset has priority over counting.
* **Keep Value**: check that the counter keeps the same value when it's supposed to, e.g., when only one of the two count enable inputs is active.
* **Increment**: the counter increments after each rising clock edge when both count enable bits are high, and keeps the same value otherwise.
* **Carry**: the carry bit goes high or low as appropriate, and is independent of the clock.

We implemented each of these tests in the testbench
`tb_counter.vhd`. The testbench follows the general pattern of a
[VUnit testbench with multiple test
cases](https://vunit.github.io/user_guide.html#id5).  In particular,
the main loop of the test process contains the following structure:

```vhdl
test_runner_setup(runner, runner_cfg);

while test_suite loop
    if run("test_initial_clear") then
        -- definition of `Initial Clear` test

    elsif run("test_load_random") then
        -- definition of `Load Random` test

    elsif run("test_keep_value") then
        -- definition of `Keep Value` test

    elsif run("test_increment") then
        -- definition of `Increment` test
	
    elsif run("test_carry") then
        -- definition of `Carry` test

    end if;
end loop;
test_runner_cleanup(runner);
```

All the different test cases are defined in an `if` - `elsif`
structure. This structure is surrounded by a procedure call to set up
the test environment before running each test, and another procedure
call to clean up the test environment at the end of each test.  VUnit will execute
each test in a separate simulation, such that one test doesn't affect
another.

Each **test definition** typically consists of **applying a series of
inputs** to the UUT, waiting for the UUT to respond, and **checking the UUT's outputs each time** for correctness.  You'll notice that the
test definitions make extensive use of **procedure calls** for common
tasks, like waiting for the next clock cycle.  The use of procedures
is recommended as they make the code much easier to read and maintain.
For example:

```vhdl
elsif run("test_load_random") then
    set_inactive_control_inputs;                                     -- procedure
    wait_until_after_next_rising_clock_edge(clk, clock_period);      -- procedure
    for test_count in 1 to 5 loop
        set_random_load_input;                                       -- procedure
        set_random_control_inputs;                                   -- procedure
        loadb <= '0';
        wait_until_after_next_rising_clock_edge(clk, clock_period);  -- procedure
        check_equal(qabcd, abcd, "Load value failed");
    end loop;
```

Some of these procedures require waiting for some amount of time.  Often
in these test cases, one needs to wait until some time after the next
clock tick (for synchronous behavior) until all the outputs have
taken their new value.  We have, rather arbitraryly, chosen to wait
until 1/10th of a clock period after a positive clock edge to cover
the propagation delay.

Other procedures help us randomize inputs using the [Open Source VHDL
Verification Methodology (OSVVM)](https://osvvm.org/) library.  OSVVM
is primarily intended for system testing, but the library is
also convenient for randomizing unit tests.

```vhdl
-- set random inputs for loadb, ent and enp
procedure set_random_control_inputs is
    variable controlbits : std_logic_vector(2 downto 0);
begin
    controlbits := std_logic_vector(to_unsigned(rnd.RandInt(0, 7), 3));
    loadb       <= controlbits(0);
    enp         <= controlbits(1);
    ent         <= controlbits(2);
end procedure set_random_control_inputs;

-- set random inputs for abcd
procedure set_random_load_input is
begin
    abcd <= std_logic_vector(to_unsigned(rnd.RandInt(0, 15), 4));
end procedure set_random_load_input;
```

Once the test cases are in place, it's time to execute them and
evaluate the results.  VUnit tests are controlled from a Python
script, often named `run.py`.  The script configures libraries and
which design files to include and then calls the VUnit library
to run the tests.  By default, VUnit will search for a simulator on
your system, but you can instruct VUnit to use a specific one.  You
can launch the VUnit tests from the command line or, better yet, you can use
the [VUnit integration in Sigasi Studio]({{< ref
"/tech/vunit-integration.md" >}}).  Once the tests have run, VUnit
provides an overview of all the test results. Note that this is our
demo project in which we've added a trivial test which will always
fail, in order to show what a failed test looks like.

```
==== Summary ====================================================
pass worklib.tb_counter.test_initial_clear    (2.5 seconds)
pass worklib.tb_counter.test_load_random      (0.5 seconds)
pass worklib.tb_counter.test_keep_value       (0.5 seconds)
pass worklib.tb_counter.test_increment        (0.6 seconds)
pass worklib.tb_counter.test_carry            (0.5 seconds)
fail worklib.tb_counter.test_intentional_fail (0.6 seconds)
=================================================================
pass 5 of 6
fail 1 of 6
=================================================================
Total time was 5.3 seconds
Elapsed time was 5.3 seconds
=================================================================
Some failed!
```

{{< figure src="/img/tech/vunit_view_result.png" alt="VUnit View showing six executed tests including one failing." class="uk-align-center" >}}
