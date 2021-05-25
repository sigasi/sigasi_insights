---
title: Sigasi Studio Preview (4.12)
layout: page
pager: true
date: 2021-05-26
comments: true
---

For those users who want to get early access to the features and bugfixes of upcoming Sigasi Studio releases, we have set up an extra release channel, called "_Sigasi Preview_".

The Sigasi Preview release channel offers more frequent releases than the official releases. This page gives an introduction to the most important changes.

Although these preview releases are less rigorously tested than the official releases, they are stable enough for daily use.

**If you run into any problems, [please let us know](https://www.sigasi.com/support/)**.

# Current preview release

# Improvements

- Normalized punctuation in error messages
- Made sure to schedule a recovery build on startup when Sigasi Studio was force killed
- Removed visual clutter from the graphical views when they are selected
- We now set `GDK_BACKEND=x11` by default to make sure our browser support performs optimally under Wayland
- To avoid confusion we now offer the possibility of saving before formatting as selection of resources
- We now only format mapped files, unless you specifically select them, during multi-resource formatting
- **[DocGen]** Made sure the `Value` doesn't overflow in the documentation export and view
- **[DocGen]** Made sure to only show relevant design units in the documentation export dialog
- **[DocGen]** Added the possibility of using a `sigasi-doc.css` in the root of the project to customize the documentation export
  {{< figure src="/img/releasenotes/4.12/SigasiDocCss.png" title="Custom css for documentation export" width="500">}}
- **[DocGen]** Added a separate column (`Description`) for code comments in the documentation view
  {{< figure src="/img/releasenotes/4.12/DocumentationCommentColumn.png" title="Column for code comments in documentation view" width="500">}}
- **[DocGen]** Added option to hide state machine conditions when exporting statemachines or documentation through `labels hide` in the [Graphics Configurations]({{< ref "manual/graphics.md" >}})
- **[DocGen]** To avoid confusion we now offer the possibility of saving before documentation generation
- **[DocGen]** **[VHDL]** Added subprograms in packages to the documentation generations
  {{< figure src="/img/releasenotes/4.12/DocGenSubprograms.png" title="Subprograms in packages in documentation generation" width="500">}}
- **[DocGen]** **[Verilog]** The documentation generation now contains a table for module parameters
  {{< figure src="/img/releasenotes/4.12/DogGenModuleParams.png" title="Documentation generation for module parameters" width="500">}}
- **[VUnit]** Added a checkbox to direct the output from VUnit to a `vunit_out` folder in the project root
  {{< figure src="/img/releasenotes/4.12/VUnitOutputCheckbox.png" title="Checkbox for setting VUnit output to the project root" width="500">}}
- Improved support for opening HDL files with arbitrary file extensions  
  (**File > Open With > Other... > VHDL/Verilog editor**)
  {{< figure src="/img/releasenotes/4.12/ArbitraryExtensionHdlCode.png" title="HDL support for code in files with arbitrary file extensions" width="500">}}
- **[VHDL]** Mark unterminated string literals as errors
  {{< figure src="/img/releasenotes/4.12/UnterminatedStringLiteralError.png" title="Error for unterminated VHDL string literals" width="500">}}
- **[VHDL]** Added an autocomplete for, and improved automatic indentation of protected type declarations
- **[VHDL]** Added support for VHDL 2019 private variable declaration and aliases in protected declarations
  ```vhdl
  type SharedCounter is protected
      function increment(i : integer) return integer;
      private variable v : integer := 0;
      alias aliasName is increment;
      alias aliasName2 is aliasName;
  end protected SharedCounter;
  ```
- **[VHDL]** Added support for VHDL 2019 generic protected type declarations

  ```vhdl
  type SharedCounter is protected
    generic(type T; type T2);
    procedure increment(N : T := 1);
    procedure decrement(N : T := 1);
    impure function value return T2;
  end protected SharedCounter;
  ```

- **[Verilog]** Added navigation to constructor formal arguments
- **[Verilog]** Added a warning for empty parameters in Verilog modules and instantiations
  {{< figure src="/img/releasenotes/4.12/EmptyParametersWarning.png" title="Warnings for empty parameters" width="500">}}

# Bug fixes

- Fixed highlight flickering
- Made sure that state machine diagrams show completely
- Improved spelling and punctuation for toolchain preferences
- Improved error messages in the [Graphics Configurations]({{< ref "manual/graphics.md" >}})
- Improved linking to HDL design units in [Graphics Configurations]({{< ref "manual/graphics.md" >}}) when the casing is different between the two worlds
- Fixed errors when selecting ports and edges in block diagrams
- Fixed error pop-ups when formatting unknown resources
- **[VHDL]** Fixed name shadowing with enum literals
- **[VHDL]** Fixed false positive error for empty generic package types
- **[VHDL]** The `Add missing choices` Quick Fix for switch-case statements can now add more than 5 items
- **[VHDL]** Fixed highlighting for bit literals as first argument in qualified expressions e.g. `std_logic'('0')`
- **[VHDL]** Don't add extra newlines during the `Sort associations` Quick Fix when non-platform newlines are being used
- **[VHDL]** Fixed linking of packages importing other packages
- **[VHDL]** Fixed false positive error for missing `"+"`-operator
- **[VHDL]** Fixed linking for record types in port maps
- **[VHDL]** Fixed formatting alignment for port declarations that were forcefully split up by single-line comments
- **[VHDL]** Fixed formatting for else statements that only contain comments
- **[VHDL]** Fixed flickering linking errors with VHDL 2019 code
- **[VHDL]** Fixed false positive error for package instances within packages
- **[VHDL]** Made sure to also generate documentation for the corresponding architecture when exporting documentation for an entity
- **[Verilog]** Fixed Verilog outline for packages with include directives
- **[Verilog]** Fixed false positive error for split port declarations in [User Defined Primitives](https://www.chipverify.com/verilog/verilog-udp)
- **[Verilog]** Fixed missing error marker after removing an included file
- **[Verilog]** Fixed highlighting of `.h` files
- **[Verilog]** Fixed some confusion about which Quick Fix to apply for problems in the **Problems View**
- **[Verilog]** Fixed hyperlinks to classes in exported documentation
- **[Verilog]** Fixed commonly occurring formatting issue

# Updates

- Updated ELK to 0.7.1
- Updated Chromium to 76.0.16
- Updated to Xtext 2.25
- Updated to **[Eclipse 2021-03](https://www.eclipse.org/eclipse/news/4.19/platform.php)**

# Update or install?

You can download the stand-alone version of the latest preview from:

- <https://download.sigasi.com/preview/latest/com.sigasi.hdt.product-linux.gtk.x86_64.zip>
- <https://download.sigasi.com/preview/latest/com.sigasi.hdt.product-macosx.cocoa.x86_64.zip>
- <https://download.sigasi.com/preview/latest/com.sigasi.hdt.product-win32.win32.x86_64.zip>

You can also update from (configure via Preferences > Install/Update > Available Software Sites > Add...) :
https://download.sigasi.com/preview/studio/

SHA sums ([more info]({{< ref "/faq.md#how-can-i-check-a-sha-sum" >}})) can be checked via <https://download.sigasi.com/preview/latest/sha1.txt>.

# System requirements

- Sigasi Studio standalone is supported on:
  - Windows: Windows 10 (64 bit) or newer
  - macOS 10.15 Catalina or newer
  - Linux: RedHat Enterprise Linux RHEL 7.7 (64 bit) or newer
    - Sigasi Studio depends on `libXss.so` which can be obtained by installing `libXScrnSaver`
  - More information on supported OSes can be found [on the Eclipse website](https://www.eclipse.org/projects/project-plan.php?planurl=http://www.eclipse.org/eclipse/development/plans/eclipse_project_plan_4_18.xml#target_environments)
- Sigasi Studio as plugin in your own Eclipse installation:
  - Eclipse 4.8 _Photon_ up to and including Eclipse IDE 2021-03
  - Java JRE 11 or higher

We recommend at least **4GB of memory** available for Sigasi Studio,
and you need **about 300MB** of free disk space.

# Feedback

We welcome your feedback through the usual channels or the comments below. Note that comments are cleared after each [official release](/releasenotes).
