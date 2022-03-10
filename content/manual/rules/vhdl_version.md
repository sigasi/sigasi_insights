---
title: VHDL language version
---

Sigasi Studio flags an error if a mismatch exists between the selected
VHDL language versions of a project, [VHDL common
libraries](/manual/libraries/#common-libraries) and individual design
files.

Applying the associated quick fix will upgrade the version of the project,
or - if it's already set up correctly - it'll upgrade the version of the file with the outdated version.
The `Common Libraries` will automatically be updated to the upgraded version.

In Sigasi Studio, you can [set the version of the VHDL
language](/manual/config#choosing-your-vhdl-and-verilog-version) for
your project and for individual files.  The setting for individual
files is only intended for compatibility with legacy code.  Setting a
higher VHDL version on a design file than the VHDL version of the
project is not supported and will cause this error to
appear.



{{% lintrule 170 %}}
