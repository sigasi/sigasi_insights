---
title: "Import a project in Sigasi Studio from `.f` files"
layout: page 
pager: true
author: Wim Meeus
date: 2021-02-23
comments: true
bannerad: true
tags:
  - GitHub
  - hdt-2.0
  - Python
  - Sigasi Studio
  - project
  - project management
---


Dot-f (`.f`) files are a 'de facto' standard for exchanging project
information between EDA tools and managing HDL files in bigger FPGA
and ASIC projects.  In this article we discuss the `.f` file format,
its limitations, and how to use it to create a Sigasi Studio project
from your HDL code and `.f` file(s).

## The dot-F *format*

`.f` files contain a list of command line options for an EDA tool,
often an HDL simulator.  The `.f` extension originates from the fact
that these command line option files are specified on the command line
with the `-f` option, as in

```
$ my_eda_tool -f file.f
```

In other words, `.f` is hardly a file *format*. `.f` files contain a
collection of (usually UNIX-style) command line options. As options
are EDA tool and EDA vendor dependent, `.f` files may be generated for
specific EDA tools, and may contain different information depending on
the tool for which they're intended. EDA tools that generate `.f`
files for other tools may in fact generate a set of `.f` files,
e.g. one for each *popular* simulator.

Still, there is enough commonality between `.f` files to handle them
as a file type. `.f` files contain the following elements:

* file names of the design files, optionally with wildcards (`*`)
* options starting with a dash, like `-o`, `-p value`, `-f another_dotF_file.f` or `--option=value`
* options starting with a plus, like `+incdir+/include/path`
* comments: lines starting with `//`, `#` or `!` or text enclosed in `/* */`
* lines may be concatenated with the continuation character `\`
* entries may include environment variables `$VAR` or `${VAR}`

Some `.f` files are just a collection of file names, while others
contain other elements as well.  Parsing of these files is not
particularly difficult, but, as mentioned, the semantics may be
different depending on the tool for which they're intended.

## Limitations of dot-F files

Obviously, `.f` files have some limitations when they're used to
capture project information.

First of all, they're meant to be used with a particular tool, so any
project information which is irrelevant to this particular tool is not
included.

A number of tools, e.g. some simulation library compilers, may need
multiple runs to compile an entire project because each compiler run
can only handle one design library. This is mainly the case for VHDL
projects, because (System)Verilog projects usually use one single
library. In such case, a `.f` file may only contain files associated
with one library, and the library name may not even be present in the
`.f` file.

Also further information, e.g. the VHDL or Verilog language version,
may or may not be present in a `.f` file.

## So why do we still want to use dot-F files?

Well, actually, that's probably because no vendor-neutral format
exists to communicate HDL project information between EDA
tools. Despite the limitations, it's one of the few things that exist
to save design engineers from creating and maintaining a collection of
in-house scripts (often in a polyglot of tcl, perl, shell scripts,
python and maybe other languages) for that purpose.

A further plus is that `.f` files are text files, so they're human
readable and easy to generate and to parse. And finally, any missing
information in a `.f` file may conveniently be added on the command
line, e.g.

```
$ my_eda_tool -f file.f --other-option ...
```

## Creating a Sigasi Studio project from dot-F files

Sigasi offers support for `.f` files in the open-source [**Sigasi
Project Creator**](https://github.com/sigasi/SigasiProjectCreator).
This tool is written in Python and Antlr, and may assist you with
setting up a Sigasi Studio project from one or more `.f` files. Sigasi
Project Creator is offered under a [BSD
license](https://github.com/sigasi/SigasiProjectCreator/blob/master/LICENSE).
Sigasi Studio users are welcome to [contact us for support](https://www.sigasi.com/support/).
Your contribution to improve the Sigasi Project Creator is also
welcome :-)

So far, the **Sigasi Project Creator supports**:

* input files (mapped to library work)
* `+incdir+...` (Verilog includes, added to Verilog preferences)
* `+define+...` (Verilog defines, added to Verilog preferences)
* `-makelib <libname> ... -endlib` with input files on separate lines between makelib and endlib, with continuation characters (mapped to the library `<libname>`, or the part of libname after the last slash (`/`) if it contains any)
* `-f <filename>` to include another `.f` file
* environment variables in input files and include paths (which get expanded if they are defined)
* VHDL, (System)Verilog and mixed language projects
* multiple top-level `.f` files

Prior to using Sigasi Project Creator, you'll need to have
[Python3](https://www.python.org/downloads/) and the [Sigasi Project
Creator](https://github.com/sigasi/SigasiProjectCreator) on your
system. Also install the required Python packages:

```
python -m pip install -r requirements.txt
```

Finally, go to the directory which will be your project root and **run
the Project Creator**. For simple projects, any `.f` file should
work. For more complex projects with different libraries and include
paths, a `.f` file should be chosen which preferably has the relevant
information, e.g. a `.f` file for Cadence IUS.

```
python /my/path/SigasiProjectCreator/src/convertDotFtoSigasiProject.py projectname path/to/my.f
```

After this, you should see two new files and a folder in your current
directory: `.project`, `.library_mapping.xml` and `.settings`.

You can **open the project in Sigasi Studio** using **File > Open Projects
from File System...**. Click **Directory...**, select the project
directory, then click **Select Folder** and **Finish** to open the
project.

Some errors may remain due to e.g. missing library or (System)Verilog
include path information in the `.f` file. Sigasi Studio will help you
resolve the errors. The [library mapping can be
updated](/manual/libraries/#modifying-the-library-configuration) in
the Project view. Missing include paths may often be fixed using a
[quick fix](/manual/eclipse/linting/#quick-fixes). With little or no further
effort, your project is fully set up.


