---
title: "Importing a Quartus project in Sigasi Studio"
layout: page
pager: true
author: Bart Brosens
date: 2018-03-30
tags:
  - GitHub
  - hdt-2.0
  - Python
  - Sigasi Studio
  - Altera
  - Quartus
comments: true
bannerad: true
---

For some time it has been possible to [integrate Sigasi Studio in Altera Quartus](/manual/tools.html#altera-quartus-ii-integration).
Through feedback from our users, we have seen that this approach is good when starting a project or taking off with Sigasi Studio on an existing Altera Quartus project.
However, as a project grows and when more of the development work happens in Sigasi Studio, keeping the link to the Altera Quartus project often gets in the way.
Switching to a separate Sigasi Studio project is more flexible. For example, this allows to show the source files in a hierarchical way in the Project Explorer.

To make it easier to use Sigasi Studio based on a Quartus project, we have created a script to convert an Altera Quartus project to a Sigasi Studio project file.
The script has been added to our [SigasiProjectCreator Github project](https://github.com/sigasi/SigasiProjectCreator).

# How to generate a Sigasi Studio project from a Quartus project?

## 1. Download scripts

You can either [clone the GitHub repository](https://github.com/sigasi/SigasiProjectCreator) or [download a snapshot](https://github.com/sigasi/SigasiProjectCreator/archive/master.zip)

## 2. Extract a list of source files from your Quartus project

```
quartus_sh -t <path to SigasiProjectCreator>/src/convertQuartusProjectToCsv.tcl <path to qpf or qsf file>
```

[This TCL script](https://github.com/sigasi/SigasiProjectCreator/blob/master/src/SigasiProjectCreator/convertQuartusProjectToCsv.tcl) creates a file `quartus_files.csv` which contains a list of HDL source files and their library information.

## 3. Generate the Sigasi Studio project files from the list of source files

```
<path to SigasiProjectCreator>/src/convertCsvFileToTree.py <project_name> quartus_files.csv
```

This script generates the `.project` and `.library_mapping.xml` files that define the Sigasi Studio project.

# Note

When you make changes to your Quartus project, you need to re-run these scripts.
