---
title: "Use environment variables to set up Toolchains"
layout: page 
pager: true
author: heeckhau (Sigasi)
date: 2014-10-24
---
Some teams have a setup where environment variables are automatically set by scripts, to reflect the paths of the correct version of simulators and synthesis tools. In cases like this, it is better to configure Sigasi Toolchains to use these environment variables instead of absolute paths to find the installation path of external toolchains.

To do this, go to the configuration page for the toolchain of your choice:

** Window > Preferences > Sigasi > Toolchains > (select a toolchain)**

Now, instead of browsing to the installation directory of your toolchain, fill out the path, using environment variables. If your environment variable is called `MY_PATH`, you can call the variable by typing `${env_var:MY_PATH}` as installation path.

Here is an example for setting the path for Xilinx Vivado, using the environment variable `XILINX_VIVADO`.

![Use environment variables to set up Toolchains](images/env_var.png)