---
title: "Importing a Xilinx ISE project in Sigasi"
layout: page 
pager: true
author: Hendrik Eeckhaut
date: 2014-11-07
tags: 
  - GitHub
  - hdt-2.0
  - Python
  - Sigasi
  - Xilinx
comments: true
bannerad: true
---

Although project setup in Sigasi is in most cases straight forward, it remains a hurdle, certainly if you already have a *'project definition'* in another tool. I have blogged about [Scripting Sigasi project creation](/tech/scripting-sigasi-project-creation) for importing custom project descriptions before. But now we extended the Python scripts to make even easier to import *Xilinx ISE* and *Mentor Graphics HDL Designer* projects. In this post I show how easy this has become.

## Download scripts

You can either [clone the GitHub repository](https://github.com/sigasi/SigasiProjectCreator) or [download a snapshot](https://github.com/sigasi/SigasiProjectCreator/archive/master.zip)

## Run the conversion script and open the project in Sigasi

1. Open a terminal and change the *working directory* to the base folder of your project
2. Convert the Xilinx ISE or HDL Designer project to a Sigasi project (i.e. generate the `.project` and `.library_mapping.xml` files):
	* Xilinx ISE:
    ```
    python <path to SigasiProjectCreator>/convertXilinxISEToSigasiProject.py <project-name> <path-to-ISE-project-file.xise>
    ```
	* Mentor Graphics HDL Designer:
    ```
    python <path to SigasiProjectCreator>/convertHdpProjectToSigasiProject.py <project-name> <path-to-Hdp.hdp>
    ```
3. Open the project: `<path to sigasi binary> -p .`

Let me know if you have any trouble running these scripts. And feel free to contribute importers for other EDA tools.