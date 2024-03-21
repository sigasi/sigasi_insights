---
title: "VS Code FAQ"
showinmenu: true
weight: 10
pager: true
aliases:
  - /vscode/faq/
---

## Debug Log

To check whether the Sigasi extension started successfully, you should navigate to Sigasi's _output view_.
This can be done by opening the _Command Palette_ (**Ctrl+Shift+P**) and selecting **Sigasi: Open Log**.

The Output View should say `Language client connected from ...`

The logs in the Sigasi output view contain possible errors from the client and server.
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

On some occasions, we might ask you to share the server logs.

Before obtaining the server logs, it's best to enable debug logging.
For more detailed logging, open the settings and change **Sigasi > Server > Log: Level** to **debug**.  

The location of the server logs depends on your OS.

* On Linux, the logs are below `~/.config/Code/logs`
* On Windows, the logs are in `%AppData%\Code\logs`

Then find `[datetime]/window[1]/exthost/output_logging_[datetime]/[0-9]-Sigasi{Tracing}.log`.
For each occurrence of `[datetime]`, choose the most recent directory available.

We recommend to open the `exthost` folder using the command **Developer: Open Extension Logs Folder**.

**Note**: These logs contain file names from your project so only send them to us if you're allowed to do so.

## Issues Caused by VS Code Settings

### Ctrl+Click Doesn't Work

If **Ctrl+Click** doesn't work for you to **Open Declaration**, this is likely caused by a wrong VS Code setting.
In the VS Code **Selection** menu, there is an entry to switch the multi-cursor modifier to Ctrl+Click.

{{< figure src="/img/vscode/VSCodeMultiCursorModifier.png" link="/img/vscode/VSCodeMultiCursorModifier.png" alt="VS Code: Multi-Cursor Modifier"  width="400" >}}

Even accidentally clicking that entry (e.g., when trying to enable **Column Selection Mode**) will change the setting for the multi-cursor modifier.
This results in **Alt+Click** being used when trying to **Open Declaration** instead of the usual **Ctrl+Click**.
You can click that same entry again to switch back to using **Ctrl+Click**.

### Hide Signal Assignments in Outline

VS Code offers a set of settings to hide symbols from the outline. If you specifically want to hide signal assignments, you have to disable `outline.showOperators` in the VS Code settings. To do this, navigate to **File > Preferences > Settings** (or use the shortcut **Ctrl+,**), and then search for `outline.showOperators`.

{{< figure src="/img/vscode/VSCodeHideSignalAssignments.png" link="/img/vscode/VSCodeHideSignalAssignments.png" alt="VS Code Hide Signal Assignments"  width="400" >}}




