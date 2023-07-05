---
title: "Tips and tricks to optimize Sigasi Studio for VS Code"
layout: page
pager: true
author: David Medina
date: 2023-07-05
tags:
  - VS Code
  - lsp
comments: true
bannerad: true
---

In this blog, we will cover some tips to optimize CPU, build times, and disk space when using the [Sigasi extension for VS Code](https://marketplace.visualstudio.com/items?itemName=Sigasi.sigasi-vscode).

## 1. Cache this if you can

Sigasi Studio for VS Code comes with an integrated cache that increases performance by reducing resource load time. Over time it will reduce build times and CPU consumption. A few tricks when setting up the cache:

- Use the setting `sigasi.server.dataLocation` to specify a directory for the cache. Note that, without a location, the cache won't work.
- Use a sensible cache quota size. This is a balancing act between your project's size and your available disk size. The default of 500MB is a good starting point.
- If you are setting up a remote server to use with [Remote Development]({{< ref "/vscode/remote.md" >}}), you must ensure that each user has their own cache location to avoid corruption, since cache locations cannot be shared.
- Caches cannot be shared between VS Code instances.

## 2. Avoid duplicate Java Runtime Environment installations

To be able to work, the Sigasi Language Server needs a JRE. Before the 5.2 release, the extension would automatically download a JRE suitable for the system. Starting with version 5.2, the JRE comes packaged with the extension and is copied to the workspace storage folder.
While this is fine for users that install the extension on their own machines, it can take up a lot of space on SSH servers with many users, especially as each of these users has a copy of the JRE in their personal workspace storage folder.
To mitigate this problem for an SSH server setup, you can do one of two things:

- Download a single JRE and configure the setting `sigasi.java.path` for all users. This will prevent the extension from downloading/unpacking a unique JRE per user.
- If the setting cannot be enforced for all users, you can also use an environment variable called `SIGASI_JAVA_HOME`. Make sure to set it to the location of the JRE.

NOTE: If you use your own JRE installation, make sure it is [Java 11](https://adoptium.net/temurin/releases/?version=11) or [Java 17](https://adoptium.net/temurin/releases/).

## 3. Make sure the extension is installed only once

When setting up a remote SSH server, you want to avoid each user downloading the extension and retaining a copy of it. You can specify the location of the extensions directory by using the command line option `extensions-dir`. This allows every user to reuse the same client extensions.

## 4. Give big projects the heap space they need

We are constantly working on reducing our memory footprint but sometimes projects require a bigger heap size to operate at maximum performance. If a project does not have enough memory, you may experience longer build times and potentially `OutOfMemoryError` exceptions. You can change the maximum heap size in the setting `sigasi.server.arguments`. Just add or edit the argument called `-Xmx<size>`. For more information about this argument refer to the [documentation](https://docs.oracle.com/cd/E13150_01/jrockit_jvm/jrockit/jrdocs/refman/optionX.html).

## Conclusion

Sigasi Studio for VS Code offers a variety of ways to improve performance when it comes to CPU, memory, and disk, and we encourage you to test out tricks to find what works best for your projects. We want you and your team to have the most comfortable (and fun!) hardware designing experience. To request a license, click [here](https://www.sigasi.com/license-request/).

## Do you want to try all of this without leaving your browser?

Go to <https://www.sigasi.com/online/> and start exploring all Sigasi Studio for VS Code has to offer!
