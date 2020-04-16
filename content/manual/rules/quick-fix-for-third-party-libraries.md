---
title: Quick Fix for Third Party Libraries
---

If you are using vendor libraries from Altera or Xilinx (ISE or Vivado),
you do not need to set up these libraries by hand. Sigasi Studio has a Quick Fix
to do this for you.
The missing library will be added to the [Common Libraries]({{< ref "manual/libraries#common-libraries" >}}) of your project.

{{< figure src="/img/manual/quickfix_altera.png" class="uk-align-left" >}}
{{< figure src="/img/manual/quickfix_xilinx.png"  >}}

The `library` statement that tries to import a missing library (like
`altera`) will be have a yellow warning marker next to it. Click this
marker and select **Configure library altera**. If the path to your
Altera Quartus (or Xilinx ISE) installation is not yet set, Sigasi Studio will
ask to set the path now. You can always change these paths in **Window
\> Preferences \> Sigasi \> Toolchains**.

Note that for the Xilinx libraries we only map the packages with the
component declarations. By default all entity and architecture
declarations are not mapped (excluded). This significantly reduces the
time for a clean build. If you use direct entity instantiations, you can
easily map the entities you need.

Se also {{< page "tech/vivado-unisim" >}}.

{{% lintrule 50 %}}