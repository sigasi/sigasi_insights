---
title: Sigasi Studio VUnit Integration
showinmenu: true
weight: 13
pager: true
aliases:
  - /manual/vunit/
---

{{< xprt_only >}}

[VUnit](https://vunit.github.io/) is an open source **unit testing framework** for VHDL and SystemVerilog. VUnit helps you to *write* tests more easily and *run* them frequently.

Sigasi Studio can help you manage VUnit projects and enables you to *run* and *inspect test results* straight from the IDE.

When you import a VUnit project or add VUnit support to an existing project, Sigasi Studio runs VUnit in the background and automatically adds the correct libraries - as specified by the VUnit script - to your project. It also shows error markers in the VUnit script (`run.py`) if anything goes wrong.

Since {{< page "sigasi-4.14.md" >}}, the library mapping of the project is automatically updated based on the contents of the VUnit `run.py` script.

{{< figure src="/img/manual/vunit_project.svg"
           alt="VUnit project"
           link="/img/manual/vunit_project.svg"
           class="uk-align-center" >}}

# VUnit project setup in Sigasi Studio

## Prerequisites

VUnit version `4.5.0` or higher is required.

Sigasi Studio needs to know where VUnit is installed. If you installed VUnit using `pip install vunit_hdl` and Python is in your path, then Sigasi Studio should find your VUnit installation.
To verify whether Sigasi Studio can find your VUnit installation, go to **Window > Preferences > Sigasi > Toolchains > VUnit** and check the read-only **VUnit installation path** field.

If your Python installation is not in the path, you can configure it here in the **Python executable location** field.

If you have installed VUnit in a dedicated location, you should add the VUnit location to the $PYTHONPATH and make sure the $PYTHONPATH variable is visible to Sigasi Studio.

When you're installing VUnit in a `virtualenv`, make sure to launch Sigasi Studio from within the terminal after activating the `virtualenv`.

If you installed VUnit from the *Microsoft Store*, you might get an error message when trying to select the Python executable.
To use Python outside of Windows Store apps, Python needs to be installed using an installer from <https://www.python.org/downloads/windows/>.

You should make sure that the `python run.py --version` command only returns the VUnit version number. Additional output will prevent Sigasi Studio to parse the VUnit version number correctly and will result in errors.

## Import VUnit Project

To import an existing VUnit project, click **File > Import... > Sigasi > Import a VUnit project**. Next, select the VUnit script (`run.py`) and the location for the Sigasi Project.

The VUnit project repository comes with a number of [example projects](https://github.com/VUnit/vunit/tree/master/examples) which can be imported this way. If you first specify the **Python Script Location**, the **Project Location** will be set automatically.

## Add VUnit support to an existing Sigasi project

You can also add VUnit support to an existing project: Right-click your project and select  **Configure > Add VUnit support**. Next, select an existing `run.py` script or let Sigasi create an example script.

{{< figure src="/img/manual/AddVUnitSupportWizard.png"
           alt="VUnit project"
           link="/img/manual/AddVUnitSupportWizard.png"
           class="uk-align-center" >}}

## VUnit project configuration and troubleshooting

The VUnit integration in Sigasi Studio gives useful feedback in the **VUnit Console View**.
To open this view, first open a console (**Window > Show View > Other... > General > Console**) and in the Console View toolbar click the triangle (<span uk-icon="triangle-down"></span>) next to the **Open Console** icon.
Select **VUnit Console** to open the VUnit Console View.

Since {{< page "sigasi-4.14.md" >}}, the library configuration from `run.py` is used to configure the library configuration in the Sigasi Studio project.

Note that this automatic configuration does not work with linked folders.
You need to manually assign linked folders or any files/folders in them to a library.

Path separators in the `run.py` file need a `/`, also on Windows.

## SystemVerilog

For SystemVerilog projects you need to manually add the VUnit include files to your projects:

* Right click your project, select **New > Folder > Advanced > Link to alternate location** and add `VUNIT/verilog/include` as location.
* Use the quick-fix on the failing `` `include "vunit_defines.svh"`` to add the include folder to the include paths.

{{< figure src="/img/manual/vunit_verilog_include.png"
           alt="Add verilog include path"
           link="/img/manual/vunit_verilog_include.png"
           class="uk-align-center" >}}

## Configure options for finding and running tests

In **Window > Preferences > Sigasi > Toolchains > VUnit** you can add different options for finding and running tests.

* The **options for finding tests** will be passed to `run.py` when generating the json file that lists the VUnit tests.
* The **options for running tests** will be passed to `run.py` when running the VUnit tests.
* Select **Set VUnit output to project root** to have the VUnit output stored in the project root instead of in the temp location from where VUnit is called.

{{< figure src="/img/manual/vunit_preferences.png"
           alt="VUnit preferences dialog"
           link="/img/manual/vunit_preferences.png"
           class="uk-align-center" >}}

# Configuring the simulator

VUnit makes use of an external simulator to run tests. ActiveHDL,
RivieraPRO, GHDL, and ModelSim/QuestaSim are all supported. By
default, VUnit will try to find one of these simulators on your system
and will use the first one found.

If you want to use a particular simulator, you can set the
`VUNIT_SIMULATOR` environment variable to one of `activehdl`,
`rivierapro`, `ghdl`, or `modelsim` to specify which simulator to
use. In Linux, set the environment variable prior to starting Sigasi
Studio, either in your shell initialization scripts (e.g. `.bashrc` or
`.bash_profile` for bash shell), or set the variable on the fly in
your terminal window. In Windows, open the dialog **Edit environment
variables for your account** to set `VUNIT_SIMULATOR`.

You may also need to set the `PATH` of the simulator to use. For this
purpose, configure the appropriate environment variable for your
simulator with the correct path: `VUNIT_ACTIVEHDL_PATH`,
`VUNIT_RIVIERAPRO_PATH`, `VUNIT_GHDL_PATH`, or `VUNIT_MODELSIM_PATH`. For example:

```
export VUNIT_RIVIERAPRO_PATH=/eda/Aldec/Riviera-PRO-2022.04-x64/bin
```

Finally, it is also possible to configure the simulator in `run.py`,
as shown below.

```python
# Some code omitted

# Select simulator before calling VUnit.from_argv !
os.environ["VUNIT_SIMULATOR"] = "rivierapro"
# Optionally set the PATH
#os.environ["VUNIT_RIVIERAPRO_PATH"] = "/path/to/simulator/bin"

vu = VUnit.from_argv()

# More code omitted
```

For more information on simulator selection, check out the [VUnit
website](https://vunit.github.io/cli.html#simulator-selection).

# Run VUnit Tests

There are multiple ways to run VUnit tests in Sigasi Studio:

* Right click your project and select **Run VUnit tests** to run *all tests in your project*.
* Right click one or more HDL files and select **Run VUnit tests** to run *all tests in the selected files*.
* Right click in the Sigasi editor and select **Run VUnit tests** to run *all tests in the active editor*.
* Right click in the VUnit test name (the string in the `run` function call) and select **Run VUnit test** to *run this single test only*.
* Rerun the tests in the VUnit view.

{{< figure src="/img/manual/vunit_run_tests.svg"
           alt="Run VUnit VHDL tests"
           link="/img/manual/vunit_run_tests.svg"
           class="uk-align-center" >}}

# Inspect VUnit Test Results

When you run VUnit tests in Sigasi Studio, the VUnit view is opened. This view presents a convenient way to inspect the test results.  

{{< figure src="/img/manual/vunit_results.png"
           alt="VUnit SystemVerilog Example"
           link="/img/manual/vunit_results.png"
           class="uk-align-center" >}}

You can inspect the entire VUnit output in the *Console view*.

# Handling specific common libraries

In Sigasi Studio, *[Common Libraries]({{< ref "/manual/eclipse/libraries.md#common-libraries" >}})* may be present in a project. Some
of these are standardized and available in all tools, e.g. IEEE VHDL
libraries, or the VUnit library in case of a VUnit project. Your
project may also require vendor or company specific common
libraries. External simulators, including the simulator which runs
your VUnit tests, require a particular setup to find your library.

If, for instance, ModelSim is used, then:

* common libraries need to be pre-compiled,
* a customized `modelsim.ini` with a reference to the pre-compiled libraries is required, and
* VUnit needs to be aware of the customized `modelsim.ini`.

The latter is achieved by setting an environment variable
`VUNIT_MODELSIM_INI` which points at the customized
`modelsim.ini`. One could set this variable from the shell (Linux) or
user variables (Windows), but that is inconvenient as all projects
will use the same `modelsim.ini`. A better solution is to set
`VUNIT_MODELSIM_INI` in the `run.py` script, *before* calling
`VUnit.from_argv()`.

```python
# This is run.py
# code omitted
os.environ['VUNIT_MODELSIM_INI'] = '/path/to/custom/modelsim.ini'
vu = VUnit.from_argv()
# code omitted
```

Note that VUnit may still produce warnings that the library is
missing, as shown below. These warnings are harmless. They show up
because only Sigasi Studio and the simulator are aware of the library,
while VUnit is not.

```txt
WARNING - C:\Users\Wim Meeus\workspaceSigasi\VUnit-demo\design\design_top.vhd: failed to find library 'vucommon'
```

Alternatively, one could define the library and its
contents in the `run.py` script. In that case, VUnit will be aware of
the library and the warnings won't show, but compile times will be
longer - which is exactly what *common* libraries are meant to avoid.

# Using an external compiler in a VUnit project

If you want to configure an **external compiler** in a VUnit project
(e.g. for additional syntax checking), you need to ensure that the
compiler has the VUnit library. Otherwise, the compiler will flag all
VUnit constructs in your HDL code as errors.

How to compile and enable the VUnit library for an external compiler
is explained in the [libraries section]({{< ref
"/manual/eclipse/libraries.md#external-compiler-in-a-vunit-project" >}}) of this
manual.
