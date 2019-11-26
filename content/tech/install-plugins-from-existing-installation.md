---
title: "Quickly install plugins from an existing Sigasi installation in a new Sigasi installation"
layout: page 
pager: true
author: heeckhau (Sigasi)
date: 2015-05-11
tags: 
  - howto
comments: true
bannerad: true
---

Because Sigasi stores all your settings inside the Sigasi workspace, you can have multiple versions of Sigasi next to each other. This is very handy to quickly try the new features in the [preview version of the next release]({{< ref "faq#can-i-use-the-features-of-the-upcoming-release" >}}).

> But what if you use extra Eclipse plugins in Sigasi?

When you download a fresh install of Sigasi, you need to re-install these extra plugins. Fortunately, Sigasi has a convenient feature to do this **quickly** and **offline**.

1. Click **Project > Import…**
2. Select **Install > From Existing Installation**
   ![Install from Existing Installation](/img/tech/install_start.png)
3. Browse to your previous installation
4. Select the plugins you want to install
   ![Select the plugins you want to install](/img/tech/install_selection.png)
5. Review, Finish and Restart