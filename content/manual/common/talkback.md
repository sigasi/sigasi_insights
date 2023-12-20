---
title: "Sigasi Studio Talkback"
showinmenu: true
weight: 21
pager: true
aliases:
  - /manual/talkback/
---

Talkback is a Sigasi Studio service that automatically collects metadata about how Sigasi Studio is used and sends this metadata to Sigasi through a secured connection.

Sigasi Studio for {{< pill text="Eclipse" >}} and the LSP _server_ process of the Sigasi Studio for {{< pill text="VS Code" >}} extension can be configured to use Talkback. The VS Code _client_ part of our extension instead uses the [telemetry](#telemetry) setting. [Veresta](https://www.sigasi.com/veresta/) and the [Sigasi SDK](https://www.sigasi.com/sdk/) currently do not include Talkback functionality.

# Why should I enable Talkback?

By enabling Talkback, you help us improve Sigasi Studio:

* Talkback provides us with **feature usage**. This information helps us determine which features are valuable for you as Sigasi Studio user so we can adjust our product roadmap.
* Talkback collects **performance statistics** that we can relate to the project sizes. Together with our in-house performance tests, this helps us keep the Sigasi Studio compiler and user interface fast.
* Talkback helps us **reduce software errors** by collecting incident reports from various use cases.
* The activation of Talkback is required to enable our **free** [educational](https://www.sigasi.com/license-request/#educational-licenses) and [open-source](https://www.sigasi.com/license-request/#use-sigasi-studio-with-open-hardware-licensed-projects) licenses.
* Talkback is automatic and less cumbersome than feedback surveys.

The result is that you can use an always-improving Sigasi Studio.

# What information does Talkback send?

Talkback and [telemetry](#telemetry) transmit meta-information about your project, operating system, Java Virtual Machine, tool usage, build performance, system statistics, license type, file system paths, and incident reports (stack traces) that occur due to software errors. We also collect MAC addresses, and IP addresses are visible when a client connects to the Talkback server.
Talkback **never transmits any HDL code**, but it may send identifiers. All transmissions use industry-standard SSL secure connections.

We identify your Sigasi workspace using a generated identifier, specifically a standard Java universal unique identifier [UUID](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/UUID.html).

Talkback stores all the information it transmits in a local log file so that you can inspect it. The data is human-readable in {{< tooltip text="JSON" hover="JavaScript Object Notation" >}} format.

# Eclipse

You can access the Talkback log in {{< pill text="Eclipse" >}} - to verify what is being sent - by clicking **Window > Preferences > Sigasi > Talkback > Talkback log**.

Sigasi Studio rotates this log file every new session or when the log becomes too large.

# VS Code

Talkback in {{< pill text="VS Code" >}} only concerns the LSP _server_ process.
You can access the Talkback log - to verify what is being sent - through the Command Palette **Sigasi: Open Talkback Log Folder** command.

In the VS Code client extension, Sigasi Studio collects telemetry data when an error occurs within the extension itself. We use this data to fix bugs and help guide the direction of the product. Our telemetry transmission is aligned with the VS Code telemetry setting and can be tweaked using the VS Code setting: `telemetry.telemetryLevel`. Note that this VS Code setting is **on** by default.

For more information regarding telemetry, refer to the VS Code [telemetry documentation](https://code.visualstudio.com/docs/getstarted/telemetry).

# How does Sigasi use this information?

Sigasi uses the information transmitted by Talkback for marketing and product planning and development. We use it to **decide which features to develop and improve**, **find and fix bugs**, and **find and fix performance issues**.

# How do I enable or disable Talkback?

Talkback is _always disabled_ by default. To enable Talkback - or disable it later - follow the steps below.

## Eclipse

Click **Window > Preferences > Sigasi > Talkback** and (un)check the checkbox "Enable Talkback".

## VS Code

To enable or disable Talkback in VS Code, follow the steps below.

* Open the Command Palette through **Ctrl+Shift+P**
* Select **Preferences: Open Settings (UI)**
* In the Setting tab, navigate to **Extensions > Sigasi for VHDL & SystemVerilog > Enable Talkback**
* Check or uncheck the checkbox

### Telemetry

The VS Code [telemetry setting](https://code.visualstudio.com/docs/getstarted/telemetry) is **on** by default. To enable or disable it, follow the steps below.

* Open the Command Palette through **Ctrl+Shift+P**
* Select **Preferences: Open Settings (UI)**
* In the Setting tab, navigate to **Application > Telemetry**
* Edit the value in the dropdown to suit your needs

# What about my Firewall or Proxy?

Talkback uses the HTTPS protocol for data communication.
If your firewall blocks outgoing SSL connections to our server, Talkback cannot send diagnostics.
Your firewall should allow outgoing connections to <https://talkback-sigasi.sigasi.com/>.

Talkback does not support Proxies. If Talkback cannot connect to our server directly because of your firewall or proxy server, you are required to [purchase a commercial license](https://www.sigasi.com/buy/).

# Disabled telemetry features are against our corporate policy. What can I do?

Please {{< send-email >}} so that we can discuss a solution for your company.
