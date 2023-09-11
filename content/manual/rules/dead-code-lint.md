---
title: Dead Code Linting Rule
linting: vhdl
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

* Unused declarations (signals, constants ...):

  <pre>
  architecture RTL of empty is
      signal   <span class="warning">unused_s</span> : bit;
      constant <span class="warning">unused_c</span> : bit := '0';
  begin end;
  </pre>

  A Quick Fix is available to help you remove unused declarations fast.

* Unused ports and generics:

  <pre>
  entity empty is
      generic(<span class="warning">unused_g</span> : bit);
      port   (<span class="warning">unused_p</span> : in bit);
  end entity;
  
  architecture RTL of empty is begin end;
  </pre>

* Unreachable statements: if the Sigasi Studio analyzer can determine that a condition is always false,
  it will mark the if-statement because it contains dead code:

  <pre>if true then
      v := v + 1;
  <span class="warning">else</span>
      <span class="warning">v := v - 1;</span>
  end if;
  </pre>

* Dead states in a state machine: a state is considered dead if it has no outgoing transitions:

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

{{% ruleConfiguration many=yes %}}
{{< rule id=55 postcomment="Unused declaration" />}}
{{< rule id=67 postcomment="Unused ports" />}}
{{< rule id=68 postcomment="Unused generics" />}}
{{< rule id=85 postcomment="Unreachable statements" />}}
{{< rule id=71 postcomment="Dead states" />}}
{{% /ruleConfiguration %}}
