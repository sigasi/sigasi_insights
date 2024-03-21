---
title: "Compilation Order Export"
showinmenu: true
weight: 7
pager: true
aliases:
  - /vscode/export/
---

You can export a list of all HDL files in your project, sorted in the correct compilation order.
You can use your own simple scripts to manipulate a list and run any EDA tool, including simulators, synthesis, and linter tools.

To export a comma separated value (CSV) list of files in your project, follow the steps below: 

* Open the _Command Palette_ (**Ctrl+Shift+P**) and type **Export**.
* Select **Sigasi: Export Compilation Order CSV**.
* Select the project and, optionally, a top level design unit.

As a result, a file named `compilation_order.csv` or `toplevel_order.csv` (if a top level was selected) is generated in the root of your project. The file lists the HDL files in your project in a valid compile order.

Example (for the VHDL tutorial project):

```text
work, trouble.vhd
work, drive_rst_start.vhd
work, packages/pixel_tb_pkg.vhd
work, libimage/ram.vhd
work, libimage/image.vhd
work, step_3_pixelbuffer.vhd
work, step_5_dut_engine.vhd
work, step_1_dut_core.vhd
work, packages/pixelbuffer_pkg.vhd
work, libimage/image_serializer.vhd
work, step_2_dut_top.vhd
work, libimage/blockimage.vhd
work, step_4_pixel_testbench.vhd
work, step_6_image_testbench.vhd
```

The file paths are relative to your project root, except on Windows when a file is on a different drive.
