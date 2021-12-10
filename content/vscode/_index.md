---
title: "Sigasi for VS Code extension"
layout: single
pager: true
---

The Sigasi extension for [Visual Studio Code] brings the Sigasi technology to VS Code.
The Sigasi extension is currently in Beta evaluation.

You can use your existing Sigasi Studio license or get a free trial license from <https://www.sigasi.com/try/>.

Please contact [support+vscode@sigasi.com](mailto:support+vscode@sigasi.com) with any issues or questions that aren't answered below.

# Requirements

## VS Code version

The extension requires VS Code `1.61.0` or higher.

## Java Runtime

* The extension comes without Java Runtime. Make sure you have at least **JRE** 11 installed.
* The Java runtime must be 64-bit.
* You can check your Java version with `java -version`
* Java can be downloaded from several sources, a.o. [Adoptium](https://adoptium.net/releases.html?variant=openjdk11&jvmVariant=hotspot) and choose the _OpenJDK 11 x64 JRE_ for your OS.
* Make sure the java executable is available in the user’s `PATH` variable.

# Installation

The extension can be installed from the [VS Code marketplace](https://marketplace.visualstudio.com/items?itemName=Sigasi.sigasi-vscode).

# Access settings

The settings for the Sigasi extension can be reached trough:

{{< figure src="/img/vscode/VSCodeLicenseSetting.png" link="/img/vscode/VSCodeLicenseSetting.png" alt="VS Code Sigasi license setting" class="uk-align-right" width="400" >}}

* Open the _command palette_ using **Ctrl+Shift+P**
* Start typing and select **Preferences: Open Settings (UI)**
* In **Search settings** type `Sigasi`
* First, configure the **Path To License**. This can be a local node locked license file or a floating license server (e.g. `27000@myserver.example.com`).

Alternatively, the Sigasi extension settings can be accessed through the Manage icon (<span uk-icon="cog"></span>) in the extensions overview.

# Create a project

The extension will start once a VHDL file or SV file is opened.

{{< figure src="/img/vscode/VSCodeScreenshot.png" link="/img/vscode/VSCodeScreenshot.png" alt="VS Code sigasi" class="uk-align-right" width="400" >}}

Note that the project settings and library mappings you might be used to are handled differently in the Sigasi extension. E.g. the library mappings are kept in a `library_mapping.json` file in the project folder.
Library mappings are _not visualized_ in the file Explorer side pane.

## Tutorial

Now is a good time to open the tutorial project.
Press **Ctrl+Shift+P** and start typing **Sigasi: Create tutorial projects** to open a tutorial.

When the extension has finished processing you will see a number of issues for some files pop up in the file Explorer.
There will also be a number of errors and warnings in the left of the status bar.
When clicking the error and warning indicators in the left of the status bar, a problems overview opens where you can navigate through the error and warning markers.

## Demo

You can also open a somewhat larger demo project using the command **Sigasi: Create demo projects**.

# FAQ

## Debug log

To check whether the Sigasi extension started successfully, you should go to Sigasi's _output view_.
This can be done through the _Command palette_ (**Ctrl+Shift+P**) and select **Sigasi: Open log**.
Note that this option is only available once an HDL file was opened.

The output for Sigasi should say `Language client connected from ...`

The logs in the Sigasi output view contain possible errors from client and server.
If errors are present you're advised to copy them and include them in your email to [support+vscode@sigasi.com](mailto:support+vscode@sigasi.com).

## External libraries

Any (external) libraries and files that are not within the folder of the opened project can be added using the _Project View_.
In the Project View, right click any file or folder to select the **Add External File** or **Add External Folder** option to add files and folders from outside the project location.
The configuration of the external files and folders will be kept in a file `external_libraries.json` in the project root.

External files and folders can be added anywhere in the project.
If you add a large folder (e.g. the `unisim` primitives), make sure to exclude the folder (**Right click > Set to library > Exclude from build**) from being build and only include the required files.
Or just put the library files in a folder called `Common Libraries`.
Then they will only be indexed and not analyzed for errors.

## SLF4J errors

The following error messages in the _Output View_ can be safely ignored.

``` sh
SLF4J: Failed to load class "org.slf4j.impl.StaticLoggerBinder".
SLF4J: Defaulting to no-operation (NOP) logger implementation
SLF4J: See http://www.slf4j.org/codes.html#StaticLoggerBinder for further details.
```

## OutOfMemoryError: Java heap space

If the Java heap space goes out of memory you will see a `java.lang.OutOfMemoryError: Java heap space` in the log.

To avoid this, go to the settings (**Ctrl+Shift+P > Preferences: Open Settings (UI) > Sigasi**).
You can set the **Sigasi > Server: Arguments**. Increase the value for `Xmx` to more than the default `3g`.

The heap space setting is identical to the one [used in Sigasi Studio]({{< ref "faq.md#how-do-i-increase-the-heap-size-for-eclipse" >}}).

## Project configuration

On some occasions we might ask for you to share the project configuration.
This configuration can be obtained through the _Command palette_ (**Ctrl+Shift+P**) where you run the command **Sigasi: Get the current project description** and select the project you're working on.

This generates two JSON files `project.server.json` and `project.client.json` that contain information sent to the server.

**Note**: these JSON files contain file names from your project so only send them to us if you're allowed to do so.

## Server logs

On some occasions we might ask you to share the server logs.

Before obtaining the server logs it's best to enable debug logging.
For more detailed logging, open the settings and change **Sigasi>Server>Log: Level** to **debug**.  

The server logs are in `~/.config/Code/logs/[datetime]/exthost1/output_logging_[datetime]/[N]-Sigasi.log`.

* For each occurrence of `[datetime]` you choose the most recent directory available
* `N` depends on the number of extensions present

**Note**: these logs contain file names from your project so only send them to us if you're allowed to do so.

## Semantic Coloring

The Sigasi extension supports semantic coloring, however, some VS Code themes might not support it yet.

* Theme that supports it:  
{{< figure src="/img/faq/supported_semantic_coloring.png" link="/img/faq/supported_semantic_coloring.png" alt="Find/Replace dialog" width="600" >}}
* Theme that does not support it:  
{{< figure src="/img/faq/unsupported_semantic_coloring.png" link="/img/faq/unsupported_semantic_coloring.png" alt="Find/Replace dialog" width="600" >}}

## User defined code snippets

VS Code supports user defined code snippets as explained [here](https://code.visualstudio.com/docs/editor/userdefinedsnippets). To add snippets yourself, follow the steps below.

The Sigasi extension currently contains only two snippets: one for `entity` and one for `module`.

* Open the _command palette_ (**Ctrl+Shift+P**) and type **Snippets**
* Select **Preferences: Configure User Snippets**
* Type **vhdl** or **systemverilog** to open the corresponding _JSON_ file where you can add your snippet like the examples below.

### VHDL snippet example

``` json
{
    // Place your snippets for vhdl here.
    "package declaration": {
        "prefix": "package",
        "body": [
            "package ${1:name} is",
            "\t$0",
            "end package $1;"
        ],
        "description": "Insert package declaration"
    }
}
```

### SystemVerilog snippet example

```json
{
    // Place your snippets for systemverilog here.
    "always posedge clk": {
        "prefix": "always",
        "body": [
            "always @(posedge ${1:clk}) begin",
            "\t$0",
            "end"
        ],
        "description": "Insert an always block with posedge clock"
    }
}
```

[Visual Studio Code]: https://code.visualstudio.com/
