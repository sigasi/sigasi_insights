---
title: Dead Code lint
---

Dead code is code that doesn't have any effect in your simulation or
synthesis. Examples of dead code are signals that are never used, or
conditions that are never triggered.

Dead code does not bother the simulator nor the synthesis tool. However,
it consumes mental energy of anybody reading the code. People will try
to figure the puropose of a given statement and it may take a while
before they realize that they are dealing with dead code. This makes it
more expensive to review code and to reuse code. In general, dead code
is a form of technological debt that should be avoided.

Sigasi Studio flags some kinds of dead code:

* unused declarations (signals, constants, …) (rule 55):
a Quick Fix is available to help you remove unused declarations fast.
* unused ports (rule 67) and generics (rule 68)
* unreachable statements (rule 79): if the Sigasi Studio analyzer can determine that a condition is always false,
it will mark the if-statement because it contains dead code.

<pre>if true then
    v := v + 1;
<span class="badcode">else</span>
    <span class="badcode">v := v - 1;</span>
end if;
</pre>

* dead states in a state machine: a state is considered dead if it has no outgoing transitions (rule 71)

<pre>type t_state is (IDLE, <span class="badcode">START</span>, RUN, DONE);
signal state: t_state;
-- [some code omitted]
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
