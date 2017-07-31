---
title: "Sigasi Talkback"
layout: page 
pager: true
---

Talkback is a Sigasi service that automatically collects metadata about how Sigasi is used and sends this metadata to Sigasi through a secured connection.

# Why should I enable Talkback?

By enabling Talkback you help us improve Sigasi:

* Talkback lets us **determine which features are heavily used**. This helps in planning which kind of features are valuable for you as Sigasi user, so that we can adjust our product roadmap.
* Talkback collects **performance statistics**, that we can relate to the project sizes. Together with to our in-house performance test, this helps us keep the Sigasi compiler and user interface fast.
* Talkback helps us **reduce software errors** by collecting incident reports from a wide range of use cases.
* Talkback is automatic and less cumbersome that feedback surveys

The end result is that you can use an always-improving Sigasi.

# How does Sigasi use this information

Sigasi uses the information transmitted by Talkback for marketing and product planning and development. We use it for **deciding which features to develop and improve**, for **finding and fixing bugs** and for **finding and fixing performance issues**.

# What kind of information is sent through Talkback?

Talkback transmits meta-information about your project, operating system, Java Virtual Machine, tool usage, and incident reports (stack traces) that occur due to software errors. Talkback **never transmits any HDL code**. All transmissions are through an industry standard SSL secure connection, unless you choose to use plain text transmissions.

In the Talkback transmissions, we identify your Sigasi/Eclipse workspace using a generated identifier (a standard Java universal unique identifier [UUID](http://docs.oracle.com/javase/7/docs/api/java/util/UUID.html)).

Talkback stores all the information it transmits in a log file, so that you can inspect it. The information is human-readable, in JSON (JavaScript Object Notation) format.

You can access the Talkback log to verify by clicking **Window > Preferences > Sigasi > Talkback > Talkback log**

This log file is rotated for each new Sigasi session or when the log reaches a certain size.

# How do I enable or disable Talkback?

Talkback is *always disabled by default*. To enable Talkback, or to disable it later on, click **Window > Preferences > Sigasi > Talkback** and select or deselect the checkbox "Enable Talkback".

# What about my Firewall or Proxy?

Talkback does not support Proxies. If Sigasi Talkback is unable to connect to our server directly because of your firewall or proxy server, you need to purchase a commercial license.

# Features like Talkback are against our corporate policy, even if it is disabled. What can I do?

Please [contact-us] so that we can discuss a solution for your company.
