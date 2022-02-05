---
title: "How to configure VUnit using the Sigasi VS Code extension"
layout: page 
publishdate: 2021-12-03
lastmod: 2021-12-03
pager: false
author: David Medina
tags: 
  - VS Code
  - VUnit
comments: true
bannerad: true
---

Here at Sigasi, we are immensely devoted to the culture of testing. We believe in the power of test driven development and think it's a great tool that can integrate with hardware design.  
In the past we've made efforts to integrate [VUnit](https://vunit.github.io/) into Sigasi Studio and now with our VS Code extension, we want to give to our users the ability to work with their HDL projects and use VUnit in their workflow as well.  

Setting up:

* Install the Sigasi extension from the VS Code marketplace
{{< figure src="/img/tech/setup-vunit-vscode-extension/installingExtension.gif" title="Quick fix multiple capitalization issues at once" width="900" >}}
* Once that's done, just open your HDL project and open a VHDL or (System)Verilog file.
* Now, for Sigasi to correctly link your design with the VUnit libraries you must add the libraries that come installed with VUnit as a external folder. You can do that through the project view that comes with the Sigasi extension and selecting the folder where VUnit is installed:
{{< video src="/img/tech/setup-vunit-vscode-extension/lookForVunit.mp4" webm="/img/tech/setup-vunit-vscode-extension/lookForVunit.webm" title="Quick fix multiple capitalization issues at once" width="900" >}}
* If you want to know where your VUnit is installed you can execute: `$ pip show vunit-hdl` and it will be under `location`:
{{< figure src="/img/tech/setup-vunit-vscode-extension/pipShowModule.png" title="Quick fix multiple capitalization issues at once" width="500" >}}
* Finally, just match the library mapping with the one in your `run.py`:
{{< video src="/img/tech/setup-vunit-vscode-extension/selectLibraryForVunit.mp4" webm="/img/tech/setup-vunit-vscode-extension/selectLibraryForVunit.webm" title="Quick fix multiple capitalization issues at once" width="900" >}}
