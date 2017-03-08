---
title: "Generating a Sigasi project from a Vivado project"
layout: page 
pager: true
author: Hendrik Eeckhaut
date: 2015-06-30
tags: 
  - hdt-2.0
  - Vivado
  - Xilinx
comments: true
bannerad: true
---

I have blogged before on how to import Xilinx ISE projects in Sigasi before ([/tech/importing-xilinx-ise-project-sigasi]). In this blog post I show how you can import an existing Vivado project into Sigasi.

If you have a Vivado project which uses one or more IP cores, the project becomes complex quickly. Vivado generates different sources for _Simulation_ and _Synthesis_. And although VHDL has elegant support for this –entities can have multiple architectures–, Vivado generates duplicate entities instead. This forces you to switch between two complete different views on your project. If you have multiple IP cores this is really annoying.

To make it easier to use Sigasi in combination with Vivado projects, we added a Vivado tcl script to our [SigasiProjectCreator Github project](https://github.com/sigasi/SigasiProjectCreator). This Vivado [tcl script](https://github.com/sigasi/SigasiProjectCreator/blob/master/src/convertVivadoProjectToCsv.tcl) creates a list of all HDL source files in your Vivado project and writes this list together with the HDL library name to a CSV-file. This CSV-file can be converted to a Sigasi project with the existing [convertCsvFileToTree.py](https://github.com/sigasi/SigasiProjectCreator/blob/master/src/convertCsvFileToTree.py) script:

# How to generate a Sigasi project from a Vivado project?

## 1. Extract a list of source files from your Vivado project with TCL:

```
vivado -mode batch -source ~/git/SigasiProjectCreator/src/convertVivadoProjectToCsv.tcl project_1.xpr
```

This TCL scripts creates a file `vivado_files.csv` which contains a list of VHDL and Verilog source files and their library information. When you inspect the source of [this TCL script](https://github.com/sigasi/SigasiProjectCreator/blob/master/src/convertVivadoProjectToCsv.tcl), you will see that we filter for _Simulation_ source files only. You can switch to synthesis by replacing `USED_IN_SIMULATION` with `USED_IN_SYNTHESIS`.

### 2. Generate the Sigasi project files from the csv-files

```
~/git/SigasiProjectCreator/src/convertCsvFileToTree.py project_1 vivado_files.csv
```
This scripts generates the `.project` and `.library_mapping.xml` files that define the Sigasi project.

# Notes


When you make changes to your Vivado project, you need to re-run this script. Take care that you also regenerate the VHDL and Verilog sources of your IP cores when you make changes. Vivado does this lazily.

Note that Sigasi cannot decrypt the **encrypted** Xilinx IP cores. For some IP cores, even the interface (for example, the entity declaration) is encrypted. Since we do not have permission to decrypt this, you may see some _unknown declaration errors_ in your designs.
