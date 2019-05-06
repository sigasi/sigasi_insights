---
title: Xilinx Vivado Integration
skipoverviewlist: true
pager: true
---

Sigasi Studio is often used in combination with Xilinx Vivado Design Suite and offers many features to improve this workflow:

* [Configure Sigasi Studio as default editor in Vivado][/manual/opening#xilinx-vivado]
* [Automatically generate a Sigasi Studio project from an existing Vivado project][/tech/generating-sigasi-project-vivado-project]
* [Automatically add the VHDL sources of Vivado libraries to your Sigasi Studio projects with a Quick Fix][/manual/linting#quick-fix-for-third-party-libraries]
* [Fine-tune the version of the Vivado UNISIM.VComponents package you need][/tech/vivado-unisim]
* Automatically compile your files with Vivado's XSIM and launch a simulation with a simple click.

# Configure Vivado

Configuring the Vivado installation path in Sigasi Studio is explained in [/manual/tools#vivado_1]

# Using Vivado's XSIM as external compiler

![XSIM errors are displayed with markers in the editor and problems view](/releasenotes/3.6/xsim_compilation_error.png)

[/manual/tools#configure-external-compiler]

# Launching a simulation with XSIM

[/manual/tools#launch-simulator]
![Start a simulation by setting a toplevel and clicking the run button](/releasenotes/3.6/xsim_simulation.png)

# Limitations

The Vivado integration in Sigasi Studio does not support multi-project setups (i.e. project references).

