---
title: OneSpin Integration
layout: page 
pager: true
---

Since Sigasi Studio 3.1

# OneSpin Setup

Before you can run OneSpin as external tool in Sigasi Studio, it needs to be correctly set up.

* Make sure the environment variable `ONESPINROOT` is set, and points to the root folder of your OneSpin installation
* Make sure the FlexNet environment variable `OSSLMGR_LICENSE_FILE` is set, and points to a valid OneSpin License server.

# Running OneSpin in Sigasi Studio

If the `ONESPINROOT` environment variable is set, **OneSpin** will be available on the **Sigasi > Toolchains** Preference page.

Once OneSpin is selected as external compiler, Sigasi Studio will automatically run `read_vhdl` and `read_verilog` on your HDL source files. All OneSpin output will logged to the *Console View*. All warnings and errors will be shown as problem markers in the Sigasi Studio editor.

![OneSpin compilation results](images/onespin_compilation.png)

# Consistency checks

You can also run the OneSpin **Consistency Checks** on your design:

1. Set the toplevel in the [views/#hierarchy] (**Set Top**)
2. Run OneSpin by clicking the **OneSpin** icon in the Hierarchy View

![Run OneSpin consistency checks](images/onespin_run.png)

All OneSpin output will logged to a new tab in the *Console View*. All warnings and errors will be shown as problem markers in the Sigasi Studio editor.

![OneSpin consistency checks result](images/onespin_consistency.png)

Running the OneSpin Consistency Checks can be a long process. It can be canceled by clicking the stop button in the *Progress View*.
