---
title: Sigasi Studio VUnit Integration
showinmenu: true
weight: 13
pager: true
---

{{< xprt_only >}}

[VUnit](https://vunit.github.io/) is an open source **unit testing framework** for VHDL and SystemVerilog. VUnit helps you to *write* tests more easily and *run* them frequently.

Sigasi Studio can help you manage VUnit projects and enables you to *run* and *inspect test results* straight from the IDE.

When you import a VUnit project or add VUnit support to an existing project, Sigasi Studio runs VUnit in the background and automatically adds the correct libraries - as specified by the VUnit script - to your project. It also shows error markers in the VUnit script (`run.py`) if anything goes wrong.

{{< figure src="/img/manual/vunit_project.png" alt="VUnit project" link="/img/manual/vunit_project.png" >}}

# VUnit project setup in Sigasi Studio

## Prerequisites

VUnit version `4.5.0` or higher is required.

Sigasi Studio needs to know where VUnit is installed. If you installed VUnit using `pip install vunit_hdl` and Python is in your path, then Sigasi Studio should find your VUnit installation.
To verify whether Sigasi Studio can find your VUnit installation, go to **Window > Preferences > Sigasi > Toolchains > VUnit** and check the read-only **VUnit installation path** field.

If your Python installation is not in the path, you can configure it here in the **Python executable location** field.

If you have installed VUnit in a dedicated location, you should add the VUnit location to the $PYTHONPATH and make sure the $PYTHONPATH variable is visible to Sigasi Studio.

When you're installing VUnit in a virtualenv, make sure to launch Sigasi Studio from within the terminal after activating the virtualenv.

If you installed VUnit from the _Microsoft Store_, you might get an error message when trying to select the Python executable.
To use Python outside of Windows Store apps, Python needs to be installed using an installer from <https://www.python.org/downloads/windows/>.

You should make sure that the `python run.py --version` command only returns the VUnit version number. Additional output will prevent Sigasi Studio to parse the VUnit version number correctly and will result in errors.

## Import VUnit Project

To import an existing VUnit project, click **File > Import... > Sigasi > Import a VUnit project**. Next, select the VUnit script (`run.py`) and the location for the Sigasi Project.

The VUnit project repository comes with a number of [example projects](https://github.com/VUnit/vunit/tree/master/examples) which can be imported this way. If you first specify the **Python Script Location**, the **Project Location** will be set automatically.

## Add VUnit support to an existing Sigasi project

You can also add VUnit support to an existing project: Right click your project and select  **Configure > Add VUnit support**. Next, select an existing `run.py` script or let Sigasi create an example script.

## VUnit project configuration and troubleshooting

The VUnit integration in Sigasi Studio gives useful feedback in the **VUnit Console View**.
To open this view, first open a console (**Window > Show View > Other... > General > Console**) and in the Console View toolbar click the triangle (<span uk-icon="triangle-down"></span>) next to the **Open Console** icon.
Select **VUnit Console** to open the VUnit Console View.

The library configuration in `run.py` should reflect the library configuration in the Sigasi Studio project.
Currently both configurations are not kept in sync automatically.

Path separators in the `run.py` file need a `/` also on Windows.

## SystemVerilog

For SystemVerilog projects you need to manually add the VUnit include files to your projects:

* Right click your project, select **New > Folder > Advanced > Link to alternate location** and add `VUNIT/verilog/include` as location.
* Use the quick-fix on the failing `` `include "vunit_defines.svh"`` to add the include folder to the include paths.

{{< figure src="/img/manual/vunit_verilog_include.png" alt="Add verilog include path" link="/img/manual/vunit_verilog_include.png" >}}

## Configure options for finding and running tests

In **Window > Preferences > Sigasi > Toolchains > VUnit** you can add different options for finding and running tests.

* The `Options for finding tests` will be passed to `run.py` when generating the json file that lists the VUnit tests.
* The `Options for running tests` will be passed to `run.py` when running the VUnit tests.
* Select the `Set VUnit output to project root` to have the VUnit output stored in the project root instead of in the temp location from where VUnit is called.

{{< figure src="/img/manual/vunit_preferences.png" alt="VUnit preferences dialog" link="/img/manual/vunit_preferences.png" >}}

# Run VUnit Tests

There are multiple ways to run VUnit tests in Sigasi Studio:

* Right click your project and select **Run VUnit tests** to run *all tests in your project*.
* Right click one or more HDL files and select **Run VUnit tests** to run *all tests in the selected files*.
* Right click in the Sigasi editor and select **Run VUnit tests** to run *all tests in the active editor*.
* Right click in the VUnit test name (the string in the `run` function call) and select **Run VUnit test** to *run this single test only*.
* Rerun the tests in the VUnit view.

{{< figure src="/img/manual/vunit_run_tests.png" alt="Run VUnit VHDL tests" link="/img/manual/vunit_run_tests.png" >}}

# Inspect VUnit Test Results

When you run VUnit tests in Sigasi Studio, the VUnit view is opened. This view presents a convenient way to inspect the test results.  
{{< figure src="/img/manual/vunit_verilog.png" alt="VUnit SystemVerilog Example" link="/img/manual/vunit_verilog.png" >}}

You can also open the *Console View* to inspect the entire VUnit output.  
{{< figure src="/img/manual/vunit_console.png" alt="VUnit console view" link="/img/manual/vunit_console.png" >}}

# Handling specific common libraries

In Sigasi Studio, *[Common Libraries]({{< ref "libraries.md#common-libraries" >}})* may be present in a project. Some
of these are standardized and available in all tools, e.g. IEEE VHDL
libraries, or the VUnit library in case of a VUnit project. Your
project may also require vendor or company specific common
libraries. External simulators, including the simulator which runs
your VUnit tests, require a particular setup to find your library.

If, for instance, Modelsim is used, then:

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

``` sh
WARNING - C:\Users\Wim Meeus\workspaceSigasi\VUnit-demo\design\design_top.vhd: failed to find library 'vucommon'
```

Alternatively, one could define the library and its
contents in the `run.py` script. In that case, VUnit will be aware of
the library and the warnings won't show, but compile times will be
longer - which is exactly what *common* libraries are meant to avoid.
