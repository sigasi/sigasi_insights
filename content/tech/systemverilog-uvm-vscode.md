---
title: "Setup a SystemVerilog UVM project in VS Code"
author: Bart Brosens
date: 2023-03-08
tags:
  - Sigasi Studio
  - SystemVerilog
  - UVM
  - VS Code
comments: true
bannerad: true
---

Already for a long time, [SystemVerilog UVM projects can be easily set up in Sigasi Studio]({{< ref "/tech/systemverilog-uvm-demo.md" >}}).
When you're using our extension for VS Code, the setup can be even faster.
In this article I'll show a few simple steps to configure a UVM example project.

I'm using the [UVM 1.2 Reference Implementation](https://www.accellera.org/images/downloads/standards/uvm/uvm-1.2.tar.gz) since it comes with examples that make it easy to demonstrate the UVM project setup.
The following steps will lead to the setup of the `ubus` example UVM project.

1. After downloading and extracting the UVM reference implementation, open the folder `uvm-1.2/examples/integrated/ubus` in a new VS Code window.
{{< figure alt="Add SystemVerilog Support" src="/img/tech/VSCode_SV_Command.png" width="250" class="uk-align-right" >}}

1. If there is no Sigasi project yet, create one by opening the _Command Palette_ using **Ctrl+Shift+P** and type the command **Sigasi: Add (System)Verilog Support**. After doing so, you should see the Sigasi extension activating and the Problems View being populated.

1. The Sigasi extension provides a new _[Project View]({{< ref "/manual/vscode/views.md#project-view" >}})_ which you should open now. 
To open this view, navigate to the _Explorer_ pane (**Ctrl+Shift+E**) and open the _PROJECT VIEW_ element.
This view replaces the default VS Code Explorer View and is used for many Sigasi features.

1. The actual UVM sources are still missing from our project. To include those, right click the project name in the Project View and select **New Linked Folder...**. Navigate to `uvm-1.2/src` and click **Select Folder**.
{{< figure alt="Configure the Verilog Preprocessor Settings" src="/img/tech/VSCode_UVM_Preferences_detail.png" link="/img/tech/VSCode_UVM_Preferences_detail.png" width="500" class="uk-align-right" >}}
1. Now it's time to configure the preprocessor. Right click the project name again and select **Open Preferences View**. In this view, go to the _Verilog Preprocessor Settings_, where you can add _Include paths_.
    1. Add `src` to the include path and click the _Add Include Path_ button to add a new empty text box.
    1. Add the `sv` folder in the second include text box.
    1. Now press the _Apply_ button on the top right to reconfigure the project. This will rebuild the project.

After completing the steps above, have a look at the Problems count.
While there were a lot of errors when the Sigasi project was initiated in step 2, applying the Preprocessor Settings should have resolved these errors.
You should see at least one genuine validation message on the code.

To configure your own UVM project, you can follow the same steps if you start with opening your own project folder in VS Code.
