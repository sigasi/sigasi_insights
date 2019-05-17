---
title: "Running ALINT-PRO on Fedora Linux 26"
layout: page 
pager: true
author: Hendrik Eeckhaut
date: 2017-09-06
tags: 
  - Aldec
  - ALINT
comments: true
bannerad: true
---

When starting Aldec's latest ALINT-PRO version 2017.07 on my Fedora 26 Linux machine, I ran into the following error message:
```
/home/heeckhau/Aldec/ALINT-PRO-2017.07-x64/bin/Linux64/alint: /home/heeckhau/Aldec/ALINT-PRO-2017.07-x64/bin/Linux64/libz.so.1: version `ZLIB_1.2.9' not found (required by /lib64/libpng16.so.16)
```

I first tried to make `dnf` install the older `zlib` version, but that did not work out.
Luckily I found a much easier solution: simply delete (or rename) `./bin/Linux64/libz.so.1` in your ALINT-PRO installation:
```
rm ./bin/Linux64/libz.so.1
```

This makes ALINT-PRO use your system's default `zlib` library. After this change, ALINT-PRO starts fine. And I have not run into any other issues.

![ALINT-PRO splash screen](images/splash_alint_pro.png)

Hendrik
