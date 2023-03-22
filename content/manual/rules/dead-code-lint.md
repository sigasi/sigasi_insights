---
title: Dead Code Linting Rule
---

Dead code is code that does not have any effect on your simulation or
synthesis. Examples of dead code are signals that are never used or
conditions that are never triggered.

Dead code does not bother the simulator or the synthesis tool. However,
it consumes mental energy of anybody reading the code. People will try
to figure out the purpose of a given statement and it may take a while
before they realize that they are dealing with dead code. This makes it
more expensive to review code and reuse code. In general, dead code
is a form of technical debt that should be avoided.

Sigasi Studio flags some kinds of dead code:

* unused declarations (signals, constants ...) (rule 55):
<pre>
architecture RTL of empty is
    signal   <span class="warning">unused_s</span> : bit;
    constant <span class="warning">unused_c</span> : bit := '0';
begin end;
</pre>
a Quick Fix is available to help you remove unused declarations fast.
* unused ports (rule 67) and generics (rule 68)
<pre>
entity empty is
    generic(<span class="warning">unused_g</span> : bit);
    port   (<span class="warning">unused_p</span> : in bit);
end entity;

architecture RTL of empty is begin end;
</pre>

* unreachable statements (rule 79): if the Sigasi Studio analyzer can determine that a condition is always false,
it will mark the if-statement because it contains dead code.

<pre>if true then
    v := v + 1;
<span class="warning">else</span>
    <span class="warning">v := v - 1;</span>
end if;
</pre>

* dead states in a state machine: a state is considered dead if it has no outgoing transitions (rule 71)

<pre>type t_state is (IDLE, <span class="warning">START</span>, RUN, DONE);
signal state: t_state;
  -- [omitted code]
  case state is
    when IDLE   => -- do something
        state <= RUN;
    when RUN    => -- do something
        state <= DONE;
    when DONE   => -- do something
        state <= IDLE;
    when others => -- do nothing
  end case;
</pre>

{{% lintrule 55 67 68 71 79 %}}
