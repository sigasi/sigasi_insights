---
title: Linting Rules for Instances
---

Sigasi Studio flags an error if the `entity` keyword is omitted in the instantiation of an *entity* (rule 198).

Note that when instantiating a *component*, the keyword `entity` and the library name are not used.

<pre>architecture RTL of bar is
    component foo
        port(
            clk : in std_logic;
            rst : in std_logic
        );
    end component foo;
begin
    <span class="error">foo_inst_bad : work.foo</span>              -- instance of entity foo requires keyword "entity"
        port map(
            clk => clk,
            rst => rst
        );

    foo_inst_correct : <span class="goodcode">entity</span> work.foo   -- correct instance of entity foo
        port map(
            clk => clk,
            rst => rst
        );

    <span class="goodcode">foo_inst_comp : foo</span>                  -- instance of **component** foo
        port map(
            clk => clk,
            rst => rst
        );
end architecture RTL;
</pre> 

<!-- Not configurable in preferences, only in file -->
