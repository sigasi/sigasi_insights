---
title: Verilog Keywords in VHDL
---

When choosing **entity and port names in VHDL**, it is recommended **not to use (System)Verilog keywords**.
This will prevent problems if the VHDL entity ever has to be integrated into a mixed VHDL/Verilog project.
Sigasi Studio will warn if a (System)Verilog keyword is used as an entity name.

<pre>entity <span class="info">always</span> is port( -- always is a Verilog keyword: not recommended!</pre>

{{% lintrule 192 %}}
