---
title: "Generate VHDL Doxygen documentation in Sigasi"
layout: page 
pager: true
author: Hendrik Eeckhaut
date: 2012-08-17
tags: 
  - documentation
  - doxygen
  - Sigasi
comments: true
bannerad: true
---


*I don't know any hardware developer who likes to document her design,
but as far as I know everybody has to write documentation. Writing
documentation is cumbersome. It often happens near then end of the
project when stress and workload are already high. It easily gets out of
sync with the design...*

**Doxygen** tries to make the documentation process easier. It extracts
information from your VHDL source files to generate documentation. If
you annotate your source files with [special comments][doxyvhdlblocks],
this documentation can give a nice extra view on your code. A large
advantage is that there is only a **single source** for both your design
and your documentation. While this gives no guarantee for the design
staying in sync with the documentation, it certainly makes it easier.

Although I am personally not that fond of Doxygen (but that is for
another blog post), it is the only usable VHDL documentation system I
have encountered so far.

Sigasi/Eclipse offers an easy way to get started and work with Doxygen.
As a small example I generated
<a href="/resources/tech/doxygen-example/index.html" target="_blank">Doxygen documentation for the tutorial project</a> that is shipped with Sigasi.

[![](/img/tech/doxygen_example.png)](/resources/tech/doxygen-example/index.html)

# Install Doxygen and the Doxygen Eclipse plugin

Before you can use the Doxygen plugin. You need to install Doxygen
itself on your system.

## Doxygen

To install Doxygen on your system, visit [The Doxygen website][doxysite] and
[download the distribution for your system][doxydownload] or
install it with your favorite package manager. You should also install
[dot](http://www.graphviz.org/) if you want nice looking graphs.

## Doxygen Eclipse plugin

[Eclox](https://anb0s.github.io/eclox/) is a simple Doxygen plug-in for
Eclipse. It provides a graphical user interface to configure and run
Doxygen. Eclox is available under the GNU General Public Licence (GPL).

To install the doxygen plugin:

1. Click **Help &gt; Install New Software...**
2. Enter **http://anb0s.github.io/eclox** in the **Work with**
field
3. Select **Eclox**
4. **Finish** and **Restart**

# Configuring Doxygen for your VHDL project

Before you can generate documentation with Doxygen, you need to create a
Doxygen configuration file first. Once this file is properly configured,
you are ready to generate nicely rendered documentation of your code.

### Create a Doxygen configuration file

Once the plugin is installed, Sigasi has an extra @-button in the
toolbar (If this button does not show up, click **Window &gt; Reset
perspective...**).

![](/img/tech/doxygen1.png)

Click this button to generate a Doxygen configuration file. You can
choose any filename you like, but the convention is to use `Doxyfile`.
If you use this name, Sigasi will open this file with a rich editor.
Although this editor is mainly targeted to C developers, it is also
useful for VHDL designers.

![](/img/tech/doxygen2.png)

The basic settings, such as the project name,... you can configure in
the basic tab. But most VHDL settings are only available in the advanced
tab.

![](/img/tech/doxygen3.png)

I made following changes to the default settings:

-   `PROJECT_NAME = "Eclipse tutorial project"` to configure the project name
-   `PROJECT_NUMBER = 1.0`
-   `OPTIMIZE_OUTPUT_VHDL = YES` Configure Doxygen to tailor its output for VHDL
-   `EXTRACT_ALL = YES` Force Doxygen to create documentation for all your design files, even if the source files contain no special doxygen comments.

_Once you get to know Doxygen, it is easier to configure these settings
in a regular text editor. You can do this by right-clicking the
`Doxyfile` and selecting **Open with &gt; Text Editor**._

## Run doxygen

To run Doxygen, simply press the @-button again. The generated files are
written to the `doxygen-example` folder by default. Double-click the
index.html file to see the results. The result will not have a lot of
content in it. To add more content, you need to add special doxygen
comments.

## Add doxygen comments to your design files

To really document your source with Doxygen you need to add special
[code comments][doxyvhdlblocks].
Instead of regular VHDL comments (`-- ...`), you have to use
doxygen VHDL comments (`--! ...`). You have to place your
comments in front of the item that you want to document. The only
exceptions are ports and generics. You can document these with a
one-line description on the same line.

You can [download the VHDL source of an example Sigasi here](/resources/tech/doxygen-sigasi.zip). For more details consult the [Doxygen manual][doxymanual].

# Useful links

-   [Doxygen][doxysite]
-   [Doxygen manual][doxymanual]
-   [Eclox](https://anb0s.github.io/eclox/) : a simple doxygen frontend plug-in for eclipse
-   Update site: <http://anb0s.github.io/eclox>
-   [VHDL sources for the example](/resources/tech/doxygen-sigasi.zip)

[doxysite]: http://www.doxygen.nl/
[doxymanual]: http://www.doxygen.nl/manual/index.html
[doxydownload]: http://www.doxygen.nl/download.html
[doxyvhdlblocks]: http://www.doxygen.nl/manual/docblocks.html#vhdlblocks
