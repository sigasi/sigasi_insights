---
title: "Sigasi hangs. How can I help to fix this?"
layout: page 
pager: true
author: Hendrik Eeckhaut
date: 2011-11-11
tags: 
  - howto
---

Sometimes, bugs could cause an application (including Sigasi) to hang, block, freeze and be dead. The user interface freezes and there is nothing you can do to bring the application back to life. If this happens, you can help us out by sending us a thread dump (i,e, the name and stack of every thread in Sigasi). To create such a **thread dump**, follow these steps.

## Download and install the Java Development Toolkit (JDK)

_Note that you can skip this step if you already have a recent JDK (> JDK 1.6 update 7) on your system._

[Download and install the latest JDK version](https://java.com/en/download/help/download_options.xml)

## Create a thread dump with VisualVM

1. Start VisualVM (this binary is in the bin folder of your JDK installation)
2. In the Applications view: connect to Sigasi by **double clicking** the `org.eclipse.equinox.launcher.Main` item
3. Open the **Threads** tab
4. Click the **Thread Dump** button
5. [send_email] with the output
