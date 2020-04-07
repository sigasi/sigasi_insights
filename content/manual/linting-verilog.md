---
title: Verilog and SystemVerilog Linting
showinmenu: true
weight: 10
pager: true
---

# List of (System)Verilog code rules

The table below lists the (System)Verilog code rules that can be checked automatically by Sigasi Studio.
The availability of code rules depends on the license requirements.

* ST code rules are available for all licenses including {{< starter >}}
* XPRT code rules require a {{< xprt >}} license.

| License | Quick Fix                             | Description                                                                                                             | ID |
|---------|---------------------------------------|-------------------------------------------------------------------------------------------------------------------------|---:|
| ST      |                                       | File encoding differences between including and included files                                                          |    |
| XPRT    |                                       | Null loops                                                                                                              |  1 |
| XPRT    |                                       | [Check Naming Conventions]({{< ref "rules/naming-conventions" >}})                                                                         |  2 |
| XPRT    | ![](/img/icons/warning_lightbulb.png) | Disallow 'reg' datatype                                                                                                 |  3 |
| XPRT    |                                       | VHDL keyword as module name                                                                                             |  7 |

