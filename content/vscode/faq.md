---
title: "VS Code FAQ"
showinmenu: true
weight: 10
pager: true
---

## Debug Log

To check whether the Sigasi extension started successfully, you should navigate to Sigasi's _output view_.
This can be done through the _Command Palette_ (**Ctrl+Shift+P**) and select **Sigasi: Open Log**.

The Output View should say `Language client connected from ...`

The logs in the Sigasi output view contain possible errors from client and server.
If errors are present, you are advised to copy them and include them in your email to [support+vscode@sigasi.com](mailto:support+vscode@sigasi.com).

### SLF4J Errors

The following error messages in the _Output View_ can be safely ignored.

``` sh
SLF4J: Failed to load class "org.slf4j.impl.StaticLoggerBinder".
SLF4J: Defaulting to no-operation (NOP) logger implementation
SLF4J: See http://www.slf4j.org/codes.html#StaticLoggerBinder for further details.
```

### OutOfMemoryError: Java Heap Space

If Java runs out of memory, you will see a `java.lang.OutOfMemoryError: Java heap space` in the log.

To avoid this, go to the settings (**Ctrl+Shift+P > Preferences: Open Settings (UI) > Sigasi**).
Here you can set the **Sigasi > Server: Arguments**. Increase the value for `Xmx` to more than the default `3g`.

The heap space setting is identical to the one [used in Sigasi Studio]({{< ref "faq.md#how-do-i-increase-the-heap-size-for-eclipse" >}}).

## Troubleshooting

### Server Logs

On some occasions we might ask you to share the server logs.

Before obtaining the server logs it's best to enable debug logging.
For more detailed logging, open the settings and change **Sigasi > Server > Log: Level** to **debug**.  

The location of the server logs depends on your OS.

* On Linux, the logs are below `~/.config/Code/logs`
* On Windows, the logs are in `%AppData%\Code\logs`

Then find `[datetime]/window[1]/exthost/output_logging_[datetime]/[0-9]-Sigasi{Tracing}.log`.
For each occurrence of `[datetime]`, choose the most recent directory available.

We recommend to open the `exthost` folder using the command **Developer: Open Extension Logs Folder**.

**Note**: These logs contain file names from your project so only send them to us if you're allowed to do so.

## Semantic Highlighting

The Sigasi extension supports semantic highlighting, however, some VS Code themes might not support it yet.
Be sure to use the default VS Code themes if you're missing this feature.

* In a theme that supports semantic highlighting, you'll see that e.g. `port`, `signal`, and `type` names have a color that is different from the language keywords.  
{{< figure src="/img/vscode/supported_semantic_highlighting.png" link="/img/vscode/supported_semantic_highlighting.png" alt="Supported semantic highlighting" width="600" >}}
* In a theme that does not support semantic highlighting, names like those of a `port`, `signal`, or `type` will have the default text color.
{{< figure src="/img/vscode/unsupported_semantic_highlighting.png" link="/img/vscode/unsupported_semantic_highlighting.png" alt="Unsupported semantic highlighting" width="600" >}}

## User-Defined Code Snippets

VS Code supports user-defined code snippets as explained [here](https://code.visualstudio.com/docs/editor/userdefinedsnippets). To add snippets yourself, follow the steps below.

* Open the _Command Palette_ (**Ctrl+Shift+P**) and type **Snippets**
* Select **Snippets: Configure User Snippets**
* Type **vhdl** or **systemverilog** to open the corresponding _JSON_ file where you can add your snippet like the examples below.

### VHDL Snippet Example

``` json
{
    // Place your snippets for VHDL here.
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

### SystemVerilog Snippet Example

```json
{
    // Place your snippets for Verilog and SystemVerilog here.
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
