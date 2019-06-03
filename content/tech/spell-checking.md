---
title: "Spell Checking in Sigasi/Eclipse"
layout: page
pager: true
author: Hendrik Eeckhaut
date: 2014-09-17
comments: true
bannerad: true
---


Sigasi Studio supports spelling checking in comments and strings, but you need to **install a spell checking plugin** first.
Next you need to **download** and **configure** a **dictionary** for your language.

## Install Hunspell4Eclipse


Install the [Hunspell4Eclipse](http://code.google.com/p/hunspell4eclipse) plugin:

1. **Help > Install New Software ...**
2. Enter this update site: <http://download.sigasi.com/updates/hunspell4eclipse> and press **enter**
3. Select **Hunspell4Eclipse > Hunspell4Eclipse**
4. Click **Next >** and **Finish**, and restart Sigasi

![Install Hunspell4Eclipse](/img/tech/install_spelling.png)

## Install Dictionary

The Hunspell plugin does not include any bundled dictionaries. You need to install dictionaries separately.

You can download good dictionaries from the OpenOffice.org project, which also uses the Hunspell engine.
There is a list of available dictionaries at <http://extensions.services.openoffice.org/>.

The file you downloaded will have an `.oxt` extension. If you rename this extension to `.zip`, you can unzip it.
You need the `.dic` and `.aff` files for your language (e.g. `en_US.aff` and `en_US.dic` for **American English**).
Copy these files to a safe location (the dictionary file path).

## Configure the Dictionary

Open the Spelling preference page:
**Window > Preferences > General > Editors > Text Editors > Spelling**
Next, enter the dictionary file path.

## Update 2017-09

Hunspell4Eclipse was originally hosted on the Google Code Project Hosting Service.
Because this service was turned down in early 2016, we cloned the project's code on
[GitHub](https://github.com/heeckhau/hunspell4eclipse) and made binaries available on
Sigasi's download server (<http://download.sigasi.com/updates/hunspell4eclipse>).

## Update 2018-06

If you already have hunspell installed on Linux, you can use the dictionary files from */usr/share/myspell/*.

If Sigasi Studio is installed on a read-only file system, you might see permission
errors when temporary files can't be created.
To avoid this, it is best to define a temporary directory for Java
(-Djava.io.tmpdir=<path to tmp dir\>), e.g. somewhere in the user home directory,
and pass that when starting Sigasi Studio, either on the command line or through
the **_JAVA_OPTIONS** environment variable.

