---
title: OneSpin Integration
skipoverviewlist: true
pager: true
aliases:
  - /manual/onespin/
---

Available in Sigasi Studio from version 3.1 to 4.17.2.

**OneSpin integration is no longer available in Sigasi Studio 5.0 and
above.** If you require OneSpin integration, you can keep using
{{< page "/releasenotes/sigasi-4.17.md" >}}. Please also get in touch with [Sigasi
support](https://www.sigasi.com/support/) to discuss your needs.

# OneSpin Setup

Before you can run OneSpin as external tool in Sigasi Studio, it needs to be correctly set up.

* Make sure the environment variable `ONESPINROOT` is set, and points to the root folder of your OneSpin installation
* Make sure the FlexNet environment variable `OSSLMGR_LICENSE_FILE` is set, and points to a valid OneSpin License server.

# Running OneSpin in Sigasi Studio

If the `ONESPINROOT` environment variable is set, **OneSpin** will be available on the **Sigasi > Toolchains** Preference page.

Attention: OneSpin in Sigasi Studio does **not support project names with spaces**.

Once OneSpin is selected as external compiler, Sigasi Studio will automatically run `read_vhdl` and `read_verilog` on your HDL source files. All OneSpin output will logged to the *Console View*. All warnings and errors will be shown as problem markers in the Sigasi Studio editor.

{{< figure src="/img/manual/onespin_compilation.png" alt="OneSpin compilation results" >}}

# Consistency checks

You can also run the OneSpin **Consistency Checks** on your design:

1. Set the toplevel in the [Hierarchy View]({{< ref "/manual/eclipse/views.md#hierarchy-view" >}}) (**Set Top**). **VHDL entities and Verilog modules are supported** as toplevel. Please contact us if you need support for VHDL architectures as toplevel.
2. Run OneSpin by clicking the **OneSpin** icon in the Hierarchy View

{{< figure src="/img/manual/onespin_run.png" alt="Run OneSpin consistency checks" >}}

All OneSpin output will logged to a new tab in the *Console View*. All warnings and errors will be shown as problem markers in the Sigasi Studio editor.

{{< figure src="/img/manual/onespin_consistency.png" alt="OneSpin consistency checks result" >}}

Running the OneSpin Consistency Checks can be a long process. It can be canceled by clicking the stop button in the *Progress View*.
