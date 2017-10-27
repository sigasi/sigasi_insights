---
title: "Tricking your Mac in to Believing it can run ModelSim"
layout: page 
pager: true
author: Philippe Faes
date: 2011-07-28
tags: 
  - modelsim
  - Mac
comments: true
bannerad: true
---


**Disclaimer 1:** This is in no way a crack; we're not messing with ModelSim! You'll need a legal copy and a valid license, which you can get from your Mentor Graphics sales rep, or (a limited version, free of charge) from the [Altera website](http://www.altera.com/products/software/quartus-ii/web-edition/qts-we-index.html).

**Disclaimer 2:** Consider this semi-advanced stuff. I'm sharing this idea because I think it will be useful to other people, it is *not* a supported Sigasi feature.

**Disclaimer 3:** I hate disclaimers!

We will need a computer with SSH acces that has a working version of ModelSim installed. I suggest you use a *Linux* computer because Mac OSX and Linux are both Unix-like systems. If you use a Windows compile server, you may run in to troubles with the path format (backslashes on Windows!). You can either use a remote computer, or set up a virtual machine (using something like [Parallels](http://www.parallels.com/products/desktop/) or [VirtualBox](http://www.virtualbox.org/) on your Mac.

You will need the following info:

* the host name (or IP address) of your build server
* your user name on that server
* the install path of ModelSim on the server

You also need to set up an [SSH key](http://www.eng.cam.ac.uk/help/jpmg/ssh/authorized_keys_howto.html) so that you can log on to the server without typing your password.

Next, we will create a fake ModelSim installation dir on the Mac. This directory will contain one script, `remote_modelsim.sh` and several symlinks to this script.

```bash
mkdir ~/fakeModelSim
cd ~/fakeModelSim
touch remote_modelsim.sh
ln -s  remote_modelsim.sh vsim
ln -s  remote_modelsim.sh vcom
ln -s  remote_modelsim.sh vlib
```

The fakeModelSim script copies the files to the build server and executes the specified ModelSim command. 

```bash 
#!/bin/sh

#configuration
REMOTE_USER=john.doe
REMOTE_HOST=122.22.22.221
REMOTE_HOME='/home/john.doe'
REMOTE_MODELSIM_DIR='/opt/altera/10.0/modelsim_ase/bin'

COMMAND=`basename $0`
# calculate the arguments, with proper quotes around each argument
for ARG in "$@"
do
        ARGS="$ARGS \"$ARG\""
done

# Calculate a directory on the remote build server, where we can put our data
HASH=$(echo ${PWD} ${HOSTNAME} ${USER} | shasum | cut -c1-32)
REMOTE_DIR=${REMOTE_HOME}/remote_compilation/${HASH}

# sync the project directory. You don't need this if you are using a network shared folder.
function try_rsync(){
	rsync -r ${PWD}/* ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_DIR}
}
function createRemoteDir(){
    echo "rsync failed, probably because the remote directory $REMOTE_DIR did not exits. Retrying." >&2
	ssh ${REMOTE_USER}@${REMOTE_HOST} "mkdir -p ${REMOTE_DIR}"
}
try_rsync || ( createRemoteDir && try_rsync ) || exit -1
# end sync

REMOTE_SCRIPT=\
"cd ${REMOTE_DIR}; "\
"MODELSIM_DIR=/opt/altera/10.0/modelsim_ase/bin ; "\
"/opt/altera/10.0/modelsim_ase/bin/$COMMAND $ARGS"

# echo "# Running remote command $REMOTE_SCRIPT"
ssh ${REMOTE_USER}@${REMOTE_HOST}  $REMOTE_SCRIPT
```

Now all you need to do, is tell Sigasi (or whatever tool you are using) to use `~/fakeModelSim` as path for the ModelSim executables.

## Other tools and Feedback

All of this will work just as well with *Xilinx ISim*, or with the *Altera Quartus II*, or for a million other EDA and non-EDA tools. You can extend the script to copy the compiled files back to your local computer, or you can use a shared folder instead of `rsync`. Feel free to improve and share.

## Setting up Sigasi

If you want to let Sigasi work with Aldec RivieraPro or ModelSim, you can set up [/manual/tools#save-time-compilation].

Do you like this script? Do you like you Mac? Do you have a better way of designing hardware with your Mac? Talk to me in the comments section, below!

# Update

I'm running Linux on a virtual machine (on Parallels, but you can also use VirtualBox). I am mounting the Mac user's home dir in the same location on the virtual machine, so that I don't have to translate the paths of my VHDL files. This simplifies the script a lot: no path translation, no rsync. Again: no guarantees, but I hope this is useful for you.

```bash
#!/bin/sh

#configuration
REMOTE_USER=john.doe
REMOTE_HOST=10.211.55.6 
REMOTE_HOME='/Users/john.doe'
REMOTE_MODELSIM_DIR='/usr/local/riviera-pro-2012.02-x86_64/bin/'

COMMAND=`basename $0`

# calculate the arguments, with proper quotes around each argument
for ARG in "$@"
do
        ARGS="$ARGS \"$ARG\""
done

REMOTE_DIR=`pwd`

REMOTE_SCRIPT=\
"cd ${REMOTE_DIR}; "\
"MODELSIM_DIR=$REMOTE_MODELSIM_DIR ; "\
"$REMOTE_MODELSIM_DIR/$COMMAND $ARGS ; "
ssh ${REMOTE_USER}@${REMOTE_HOST}  $REMOTE_SCRIPT
```
