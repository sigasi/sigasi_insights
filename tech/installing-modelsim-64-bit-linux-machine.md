---
title: "Installing ModelSim on a 64-bit linux machine"
layout: page 
pager: true
author: Philippe Faes
date: 2013-09-07
tags: 
  - modelsim
---
If you install ModelSim (for example the free Altera Edition) on your 64-bit linux machine, you will miss some 32-bit libraries. On most systems, you can easily install them using either `YUM` or `APT`:
```bash
sudo yum install libXft.i686
sudo yum install ncurses.i686
```

