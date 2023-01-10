---
title: "VS Code FAQ"
showinmenu: true
weight: 10
pager: true
---

## Debug Log

To check whether the Sigasi extension started successfully, you should navigate to Sigasi's _output view_.
This can be done through the _Command Palette_ (**Ctrl+Shift+P**) and select **Sigasi: Open Log**.
Note that this option is only available once an HDL file was opened.

The output for Sigasi should say `Language client connected from ...`

The logs in the Sigasi output view contain possible errors from client and server.
If errors are present you're advised to copy them and include them in your email to [support+vscode@sigasi.com](mailto:support+vscode@sigasi.com).

### SLF4J Errors

The following error messages in the _Output View_ can be safely ignored.

``` sh
SLF4J: Failed to load class "org.slf4j.impl.StaticLoggerBinder".
SLF4J: Defaulting to no-operation (NOP) logger implementation
SLF4J: See http://www.slf4j.org/codes.html#StaticLoggerBinder for further details.
```

### OutOfMemoryError: Java heap space

If the Java heap space goes out of memory you will see a `java.lang.OutOfMemoryError: Java heap space` in the log.

To avoid this, go to the settings (**Ctrl+Shift+P > Preferences: Open Settings (UI) > Sigasi**).
Here you can set the **Sigasi > Server: Arguments**. Increase the value for `Xmx` to more than the default `3g`.

The heap space setting is identical to the one [used in Sigasi Studio]({{< ref "faq.md#how-do-i-increase-the-heap-size-for-eclipse" >}}).

## Troubleshooting

### Server Logs

On some occasions we might ask you to share the server logs.

Before obtaining the server logs it's best to enable debug logging.
For more detailed logging, open the settings and change **Sigasi > Server > Log: Level** to **debug**.  

The server logs are in `~/.config/Code/logs/[datetime]/exthost1/output_logging_[datetime]/[N]-Sigasi.log`.

* For each occurrence of `[datetime]`, choose the most recent directory available
* `N` depends on the number of extensions present

**Note**: these logs contain file names from your project so only send them to us if you're allowed to do so.

## Semantic Coloring

The Sigasi extension supports semantic coloring, however, some VS Code themes might not support it yet.

* In a theme that supports semantic coloring, you'll see that e.g. `port`, `signal`, and `type` names have a color that is different from the language keywords.  
{{< figure src="/img/faq/supported_semantic_coloring.png" link="/img/faq/supported_semantic_coloring.png" alt="Find/Replace dialog" width="600" >}}
* In a theme that does not support semantic coloring, names like those of a `port`, `signal`, or `type` will have the default text color.
{{< figure src="/img/faq/unsupported_semantic_coloring.png" link="/img/faq/unsupported_semantic_coloring.png" alt="Find/Replace dialog" width="600" >}}

## User Defined Code Snippets

VS Code supports user defined code snippets as explained [here](https://code.visualstudio.com/docs/editor/userdefinedsnippets). To add snippets yourself, follow the steps below.

The Sigasi extension currently contains only two snippets: one for `entity` and one for `module`.

* Open the _Command Palette_ (**Ctrl+Shift+P**) and type **Snippets**
* Select **Preferences: Configure User Snippets**
* Type **vhdl** or **systemverilog** to open the corresponding _JSON_ file where you can add your snippet like the examples below.

### VHDL Snippet Example

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

### SystemVerilog Snippet Example

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
