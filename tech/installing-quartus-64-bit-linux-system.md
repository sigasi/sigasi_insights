---
title: "Installing Quartus on a 64-bit Linux system"
layout: page 
pager: true
author: Philippe Faes
date: 2012-06-23
tags: 
  - Quartus
comments: true
---

When you try to install Altera Quartus on a 64-bit Linux system (like Fedora or RedHat RHEL), you will get error messages about missing libraries. The Quartus installer actually looks for the 32-bit versions of these libraries. Here is the list of libraries that I ran in to and had to install:

```
yum install libXext.i686 freetype.i686 fontconfig.i686 linpng.i686 libSM.i6866
```

More info about running Quartus in 64-bit mode: <http://quartushelp.altera.com/11.1/mergedProjects/global/install/install_pro_64bit.htm>

If you are having troubles with SELinux, run:
```bash
sh altera_installer.external.sh --confirm
cd 10.0sp1_quartus_free_linux/altera_installer
rm bin/libX11.so.6
sudo ./setup
sudo chcon -t textrel_shlib_t /opt/altera/10.0sp1/quartus/linux/*.so
```