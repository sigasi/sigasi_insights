---
title: GHDL integration
skipoverviewlist: true
pager: true
aliases:
  - /manual/ghdl/
---

Updated in [Sigasi Studio 4.11]({{< ref "/releasenotes/sigasi-4.11.md" >}}).

# Configure GHDL

To configure GHDL, go to **Window > Preferences > Sigasi > Toolchains > GHDL**.

First, set the **GHDL installation path** to the location of GHDL on your computer.

The arguments for the compilation and simulation can be independently configured.

* Use the **Arguments for GHDL** setting to configure GHDL arguments passed to the compilation.
* Use the **Arguments for GHDL run (-r)** setting to configure GHDL arguments passed when starting a simulation.

The default arguments should work fine. However, you could e.g. replace the `--vcd` argument with `--wave` which is also allowed by GHDL.

{{< figure src="/img/manual/GhdlSplitArguments.png" title="Ghdl split simulation arguments" >}}

# Activate GHDL

To use GHDL as external compiler, select `GHDL` in **Window > Preferences > Sigasi > Toolchains**.

Make sure to avoid spaces in the project path to avoid errors in the GHDL simulation startup.
