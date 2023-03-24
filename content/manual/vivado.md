---
title: AMD/Xilinx Vivado Integration
skipoverviewlist: true
pager: true
---

Sigasi Studio is often used in combination with the AMD/Xilinx Vivado Design Suite and offers many features to improve this workflow:

* [Configure Sigasi Studio as default editor in Vivado](/manual/opening#xilinx-vivado)
* [Automatically generate a Sigasi Studio project from an existing Vivado project](/tech/generating-sigasi-project-vivado-project)
* [Automatically add the VHDL sources of Vivado libraries to your Sigasi Studio projects with a Quick Fix](/manual/rules/quick-fix-for-third-party-libraries)
* [Fine-tune the version of the Vivado UNISIM.VComponents package you need](/tech/vivado-unisim)
* Automatically compile your files with Vivado's XSIM and launch a simulation with a simple click.

# Configure Vivado

Configuring the Vivado installation path in Sigasi Studio is explained [here](/manual/tools#vivado-1).

# Using Vivado's XSIM as external compiler

{{< figure src="/img/releasenotes/3.6/xsim_compilation_error.png" alt="XSIM errors are displayed with markers in the editor and problems view" >}}

[Configuring External compiler](/manual/tools#configure-external-compiler)

# Launching a simulation with XSIM

{{< figure src="/img/releasenotes/3.6/xsim_simulation.png" alt="Start a simulation by setting a toplevel and clicking the run button" >}}

[Launch simulator](/manual/tools#launch-simulator)

# Limitations

The Vivado integration in Sigasi Studio does not support multi-project setups (i.e. project references).

