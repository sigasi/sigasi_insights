---
title: VHDL language version
---

Sigasi Studio flags an error if a mismatch exists between selected
VHDL language versions of a project, [VHDL common
libraries](/manual/libraries/#common-libraries) and individual design
files.

Often, this error may be resolved by right-clicking the `Common
Libraries` folder of your project in the Project Explorer and
selecting **Set Library > Reset Common Libraries**.

In Sigasi Studio, you can [set the version of the VHDL
language](/manual/config#choosing-your-vhdl-and-verilog-version) for
your project and for individual files.  The setting for individual
files is only intended for compatibility with legacy code.  Setting a
higher VHDL version on a design file than the VHDL version of the
project is not supported and will cause this error to
appear. Resetting common libraries, as mentioned above, will not
resolve the error in such case.



{{% lintrule 170 %}}
