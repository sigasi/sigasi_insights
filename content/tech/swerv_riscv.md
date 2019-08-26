---
title: "Exploring an Open Source Risc-V core"
layout: page
pager: true
author: Hendrik Eeckhaut
date: 2019-01-28
comments: true
bannerad: true
---

This weekend I read that Western Digital published the (System)Verilog sources of their Open Source Risc-V core on GitHub. Of course I wanted to try how easy it was to import this project in Sigasi Studio and test how well Sigasi Studio handles this code base.

I started by cloning the project ([commit 11065d5](https://github.com/westerndigitalcorporation/swerv_eh1/commit/11065d5bb7e8b7aa20cf7d8cb22b767b153f513c) at the time of writing) from
<https://github.com/westerndigitalcorporation/swerv_eh1>.

After importing the sources as SystemVerilog project in Sigasi Studio, the problem dialog lists 1542 errors. This might be challenging.

![Lots of errors](/img/tech/swerv_riscv/errors.png)

Opening `swerv_wrapper.sv`, the first error I see is a missing include file. When I add `design/includes` to the include path with the quick fix, I see the number of errors increases to 2301. *Am I on the right track?*

![Fixing include files](/img/tech/swerv_riscv/quickfix_include.png)

I notice there are still a lot of errors because of undefined macro identifiers. With a quick textual search (**Ctrl-H**), I learn that these are not defined in any of the include files. *I should have read the [README](https://github.com/westerndigitalcorporation/swerv_eh1/blob/11065d5bb7e8b7aa20cf7d8cb22b767b153f513c/README.md) file first.* There are some files that need to be generated:

```bash
cd swerv_eh1

#Install the JSON Perl module
sudo cpan JSON

#export RV_ROOT (necessary for generation script)
export RV_ROOT=$(pwd)

# Run generation script
$RV_ROOT/configs/swerv.config
```

This generates extra include files in `configs/snapshots/default` with the missing definitions.
This new location should be added to the include path.

Because the generated files are not explicitly included in the (System)Verilog source files, we need to add one of them (`common_defines.vh`) to the **Initial preprocessor definitions** in the project's properties:

![Preprocessor definitions](/img/tech/swerv_riscv/include_paths.png)

Checking the Problems View, I notice there are only 4 errors left. `rvjtag_tap.v` is using SystemVerilog syntax (e.g. `always_comb`).
We can easily fix this by analysing this file as SystemVerilog instead of Verilog 2005: right click the file and select **Properties**. Next on the **(System)Verilog Version** page replace **Verilog** with **SystemVerilog** and close the dialog with **Apply and Close**.

No errors left!

Exploring the hierarchy and block diagrams, I notice this core is a low level implementation with lots of bit twiddling. Unfortunately this project contains RTL code only, no test benches. I did spot some SV assertions though.

![hierarchy view](/img/tech/swerv_riscv/hierarchy.png)

![Block Diagram](/img/tech/swerv_riscv/block_diagram.png)

To me, the intensive use of defines, the mix of tabs and spaces, and of comments prove the code was hand coded. I really wonder if all the bit twiddling makes the difference in power consumption and speed.

It was fun exploring this project in Sigasi Studio. Browsing through the files went really smooth. The Hierarchy, Block Diagram and Dependencies View also helped a lot to get an overview on how the design was structured. I am really curious how this RISC-V project will evolve.