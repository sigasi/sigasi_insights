---
title: "Setting up an OSVVM project in Sigasi Studio"
layout: page
pager: true
author: Wim Meeus
date: 2023-05-24
comments: true
bannerad: true
tags:
  - OSVVM
---

[**Open Source VHDL Verification Methodology
(OSVVM)**](https://osvvm.org/) is an advanced **verification
methodology** for **digital hardware design**.  As the name suggest,
it is based on [VHDL](https://en.wikipedia.org/wiki/VHDL). OSVVM can
be seen as the VHDL counterpart of
[UVM](https://en.wikipedia.org/wiki/Universal_Verification_Methodology).

In this article, we'll show you how you can **enable OSVVM** in your
**Sigasi Studio** project.  OSVVM is not included in Sigasi Studio,
but it takes only a few steps to add the OSVVM library to your
project.

### OSVVM in Sigasi Studio

For the purpose of writing this article, we've used [a simple OSVVM
example from
edaplayground.com](https://www.edaplayground.com/x/49J). After
importing the files in a new VHDL project, Sigasi Studio reports that
the OSVMM library is missing.

{{< figure src="/img/tech/osvvm/osvvm_0_error.png" alt="Error: OSVVM library is missing" class="uk-align-center" >}}

While the OSVVM library is not distributed with Sigasi Studio, your HDL
simulator may contain a copy of the OSVVM sources. If that's
not the case, you can download them from [the OSVVM
website](https://osvvm.org/downloads). If your simulator contains a copy,
we recommend using that rather than downloading your own. This
guarantees that Sigasi Studio and the simulator will be using the exact same
version.

For the next step, you'll need to locate the folder with the OSVVM
*sources*. Look for the folder which contains `CoveragePkg.vhd`,
`RandomPkg.vhd` etc. We've looked up the OSVVM source folders for a
couple of simulators:

| Simulator                     | OSVVM sources folder                          |
| ----------------------------- | --------------------------------------------- |
| XCelium (Cadence)             | `$CDS_ROOT/tools.lnx86/inca/files/OSVVM.src`  |
| ModelSim/QuestaSim (Siemens)  | `$MODEL_TECH/../vhdl_src/vhdl_osvvm_packages` |
| Riviera PRO (Aldec)           | `$ALDEC_PATH/vlib/osvvm/src`                  |

Once you know the location of the OSVVM source folder, add a link to
it in the `Common Libraries` folder of your Sigasi Studio project. In
the Project Explorer, **right-click** the `Common Libraries` folder
and select **New > Folder > Advanced \>\> > Link to alternate
location**. Enter the location of the OSVVM source folder, or use the
**Browse...** button to navigate to it. Then, set the **Folder name**
to `osvvm` and click **Finish**.

{{< figure src="/img/tech/osvvm/osvvm_1_linked_folder.png" alt="Add a link to the OSVVM library" class="uk-align-center" >}}

The above example uses an absolute path to the OSVVM folder. If you
want to avoid absolute paths, you can use environment variables as
[documented here]({{< ref
"tech/how-avoid-absolute-library-paths-your-sigasi-project-files.md">}}).

At this point, the OSVVM source files are available in the project,
but they're not in a VHDL library yet -- so you'll have to add it to
your project's library configuration.  **Right-click** the newly added
`osvvm` folder (which is a subfolder of `Common Libraries`) and select
**Set Library > Library osvvm**.

More in-depth information on modifying the library configuration is
available in the [Sigasi
manual]({{< ref "/manual/eclipse/libraries.md#modifying-the-library-configuration" >}}).

{{< figure src="/img/tech/osvvm/osvvm_2_library_mapping.png" alt="Add OSVVM library mapping" class="uk-align-center" >}}

And you're all set. In the Project Explorer, you now see the `[osvvm]`
library name (between square brackets) next to the `osvvm` folder
name. Also, in the editor, the warning and errors are gone.

{{< figure src="/img/tech/osvvm/osvvm_3_it_works.png" alt="OSVVM is configured correctly" class="uk-align-center" >}}


### Using OSVVM and an external compiler

In Sigasi Studio, you can [enable an external
compiler]({{< ref "manual/eclipse/tools.md#external-compilers" >}}),
like your simulator's, for additional code checks and to run
simulations from within the Sigasi Studio IDE.  Obviously, the
external compiler also needs to have OSVVM enabled.

As we've mentioned before, some simulators include a copy of OSVVM. We
found that even if a simulator has a copy of OSVVM, you may still need
to tell the simulator to actually use it.

#### Aldec Riviera PRO

Users of Aldec Riviera PRO are lucky: OSVVM is enabled by default, so
just enable Riviera PRO in [Sigasi's
preferences]({{< ref "manual/eclipse/tools.md#configure-external-compiler" >}})
and you're ready to go.

#### Siemens ModelSim/QuestaSim

In Siemens ModelSim/QuestaSim, OSVVM is not enabled by default. After
[enabling ModelSim]({{< ref
"manual/eclipse/tools.md#configure-external-compiler" >}}), errors from
ModelSim show up in Sigasi Studio.

{{< figure src="/img/tech/osvvm/osvvm_4_ext_compiler_error.png" alt="Error: OSVVM library is missing in external compiler" class="uk-align-center" >}}

With the following commands, you can enable OSVVM in
ModelSim/QuestaSim. Open a terminal window and `cd` to your Sigasi
Studio project folder. Then, issue two commands for your shell, as
shown below. After that, trigger a re-build of your Sigasi project
(**Project > Clean...**) to have ModelSim re-compile your project with
OSVVM enabled.

```
# Linux
vmap -c
vmap osvvm \$MODEL_TECH/../osvvm
# Windows PowerShell
vmap -c
vmap osvvm `$MODEL_TECH/../osvvm
# Windows Cmd.exe
vmap -c
vmap osvvm $MODEL_TECH/../osvvm
```

And you're all set!

### Conclusion

In this article, we've shown how to enable OSVVM in Sigasi Studio as
well as in third-party simulators.

***Are you using OSVVM and/or other testing frameworks (UVM, VUnit,
CoCoTB...) for your HDL projects? Please let us know in the comments,
we'd love to read your experience and thoughts.***
