---
title: Space Before the Physical Unit
---

If you type a numeric literal with a physical unit, there should be a
space between the number and the unit.


<pre>    T := <span class="badcode">25ns</span>; -- ILLEGAL, but accepted by ModelSim
    T := <span class="goodcode">25 ns</span>; -- OK; according to VHDL language standard</pre>

Mentor Graphics’ ModelSim and QuestaSim accept the former (illegal)
version. As a result, some VHDL designers got used to writing the
incorrect version, producing code that is not portable to other
simulators. Sigasi Studio accepts the ModelSim-style physical literals, but
warns about this.

{{%lintrule id="47"%}}
