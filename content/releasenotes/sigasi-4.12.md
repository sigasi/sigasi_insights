---
title: Sigasi Studio 4.12
date: 2021-06-17
lastmod: 2021-07-07
comments: true
pager: true
---

The Sigasi Studio 4.12 release again brings many improvements to your Verilog, VHDL and SystemVerilog coding experience.
Notably, this release brings improvements to **documentation generation** and **VHDL 2019**.

# Documentation generation

More design elements are included in the documentation (both the [View]({{< ref "manual/views#documentation-view.md" >}}) and [Export]({{< ref "manual/documentation.md" >}})) and it's now possible to style your documentation with custom CSS.

For more information on how to style your documentation, refer to [our screencast]({{< ref "/screencasts/html_documentation.md" >}}).
{{< youtube Po6TvHDXMjg >}}

Such that you can preview the full power of documentation generation for a real world project, we've made the result of our documentation generation for [OpenTitan](https://github.com/sigasi/sigasi_demos/tree/master/OpenTitan) public [here](https://github.com/sigasi/sigasi_documentation_examples/tree/main/OpenTitan/sigasi-doc).

The complete list of improvements is as follows:

- Made sure the `Value` doesn't overflow in the documentation export and view
- Documentation generated for a hierarchy now contains design elements in breadth first order, starting from the top of the hierarchy
- Made sure to only show relevant design units in the documentation export dialog
- Added a separate column (`Description`) for code comments in the documentation view
  {{< figure src="/img/releasenotes/4.12/DocumentationCommentColumn.png" title="Column for code comments in documentation view" width="500">}}
- Added option to hide state machine conditions when exporting statemachines or documentation through `labels hide` in the [Graphics Configurations]({{< ref "manual/graphics.md" >}})
{{< figure src="/img/releasenotes/4.12/HideStateMachineLabels.gif" title="Hide State Machine labels" width="500" >}}
- Added the possibility of using a `sigasi-doc.css` in the root of the project to [customize the documentation export]({{< ref "manual/documentation#custom-css" >}}) {{< figure src="/img/releasenotes/4.12/SigasiDocCss.png" title="Custom css for documentation export" width="500">}}
- To avoid confusion we now offer the possibility of saving before documentation generation
  {{< figure src="/img/releasenotes/4.12/SaveBeforeDocGen.png" title="Save dialog before documentation generation" width="500">}}
- **[VHDL]** Add links to instantiations in documentation
  {{< figure src="/img/releasenotes/4.12/InstantiationLinkDocGen.png" title="Link to entity from instantiation in documentation generation" width="500">}}
- **[VHDL]** Added subprograms in packages to the documentation generation
  {{< figure src="/img/releasenotes/4.12/DocGenSubprograms.png" title="Subprograms in packages in documentation generation" width="500">}}
- **[VHDL]** Include documentation for VHDL type declarations
  {{< figure src="/img/releasenotes/4.12/TypeDeclarationDocGen.png" title="Subprograms in packages in documentation generation" width="500">}}
- **[Verilog]** The documentation generation now contains a table for module parameters
  {{< figure src="/img/releasenotes/4.12/DogGenModuleParams.png" title="Documentation generation for module parameters" width="500">}}

# VHDL 2019

This release extends VHDL 2019 support in Sigasi Studio.
To make use of the improved language features and APIs you need to set your VHDL project (or a single file) to VHDL 2019 and update the `std` and `ieee` libraries:

1. Update the project version: Right click the project (or file) and select **Properties > VHDL Version > VHDL 2019**
2. Update the `std` and `ieee` libraries: Right click the `Common Libraries` folder, and select **Set Library > Reset Common libraries**

We have made a [screencast]({{< ref "/screencasts/vhdl_2019.md" >}}) to demonstrate this.
{{< youtube vFDm79tEyN4 >}}

The following VHDL 2019 features are now supported in addition to the features supported in {{< page "releasenotes/sigasi-4.11.md" >}}.

- Added an autocomplete for, and improved automatic indentation of, protected type declarations
{{< figure src="/img/releasenotes/4.12/ProtectedTypeAutocomplete.png" title="Autocomplete for protected types" width="500">}}

- Added support for VHDL 2019 private variable declaration and aliases in protected declaration

  ```vhdl
  type SharedCounter is protected
      function increment(i : integer) return integer;
      private variable v : integer := 0;
      alias aliasName is increment;
      alias aliasName2 is aliasName;
  end protected SharedCounter;
  ```

- Added support for VHDL 2019 generic protected type declarations **TODO screenshot here**
  {{< figure src="/img/releasenotes/4.12/GenericProtectedTypeDeclaration.png" title="Generic protected type declaration in VHDL 2019" width="900">}}

- Allow [`conditional_or_unaffected_expression`]({{< ref "/tech/vhdl2017.ebnf.md#conditional_or_unaffected_expression" >}}) where needed

  ```vhdl
  proc : process is
    variable v : bit := '1';
  begin
    v := '0' when isAnswer(42) else unaffected;
  end process;
  ```

# Other New and Noteworthy Changes

- Normalized punctuation in error messages
- Made sure to schedule a recovery build on startup when Sigasi Studio was force killed
- Removed visual clutter from the graphical views when they are selected
- Install the Chromium binaries in a standard location recognized by virus scanners instead of in the `.swt` folder
- We now set `GDK_BACKEND=x11` by default to make sure our browser support performs optimally under Wayland
- To avoid confusion we now offer the possibility of saving before formatting as selection of resources
- We now only format mapped files, unless you specifically select them, during multi-resource formatting
- Creator specific settings have been removed from the License Key preference page
- Improved spelling and punctuation for toolchain preferences
- Improved error messages in the [Graphics Configurations]({{< ref "manual/graphics.md" >}})
- Improved linking to HDL design units in [Graphics Configurations]({{< ref "manual/graphics.md" >}}) when the casing is different between the two worlds
- **[VUnit]** Added a checkbox to direct the output from VUnit to a `vunit_out` folder in the project root
  {{< figure src="/img/releasenotes/4.12/VUnitOutputCheckbox.png" title="Checkbox for setting VUnit output to the project root" width="500">}}
- Improved support for opening HDL files with arbitrary file extensions  
  (**File > Open With > Other... > VHDL/Verilog editor**)
  {{< figure src="/img/releasenotes/4.12/ArbitraryExtensionHdlCode.png" title="HDL support for code in files with arbitrary file extensions" width="500">}}
- **[Verilog]** Added navigation to constructor formal arguments
- **[Verilog]** Added a warning for empty parameters in Verilog modules and instantiations
  {{< figure src="/img/releasenotes/4.12/EmptyParametersWarning.png" title="Warnings for empty parameters" width="500">}}
- **[VHDL]** Mark unterminated string literals as errors
  {{< figure src="/img/releasenotes/4.12/UnterminatedStringLiteralError.png" title="Error for unterminated VHDL string literals" width="500">}}

## Dependency Updates

- Updated ELK to 0.7.1
- Updated Chromium to 76.0.16
- Updated to Xtext 2.25
- Updated to **[Eclipse 2021-03](https://www.eclipse.org/eclipse/news/4.19/platform.php)**

## ALINT Deprecation warning

We plan to remove the legacy ALINT implementation in Sigasi Studio in the next release (4.13).
We assume everybody has updated to the newer ALINT-PRO by now.

# Bug fixes

- Made sure that state machine diagrams show completely
- Fixed occurrence highlighting flickering
- Fixed errors when selecting ports and edges in block diagrams
- Fixed error pop-ups when formatting unsupported resources
- Fixed broken export wizard when license doesn't allow export
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

+ A lot of other issues we could fix thanks to your [Talkback]({{< ref "manual/talkback.md" >}}) reports

# System requirements

- Sigasi Studio Standalone is supported on:
  - Windows: Windows 10 (64 bit) or newer
  - macOS 10.15 Catilina or newer
  - Linux: RedHat Enterprise Linux RHEL 7.7 (64 bit) or newer
    - Sigasi Studio depends on `libXss.so` which can be obtained by installing `libXScrnSaver`
  - More information on supported OSes can be found [on the Eclipse website](https://www.eclipse.org/projects/project-plan.php?planurl=http://www.eclipse.org/eclipse/development/plans/eclipse_project_plan_4_10.xml#target_environments)
- Sigasi Studio as Plugin in your own Eclipse installation:
  - Eclipse 4.8 *Photon* up to Eclipse IDE 2021-03
  - Java JRE 11 or higher

We recommend at least **4GB of memory** available for Sigasi Studio, and you need **about 300MB** of free disk space.

# Sigasi Studio 4.12.1 point release

On June 28 we released Sigasi Studio 4.12.1. This release fixes the following reported issues:

- **[Verilog]** Fixed high memory usage for class templates (specifically with UVM)
- **[Verilog]** Made sure hover keeps working after hovering over the whitespace following a macro invocation
- Several other small improvements and bugfixes

# Sigasi Studio 4.12.2 point release

On July 7 we released Sigasi Studio 4.12.2.

We've identified an issue with the 4.12.1 update.
Not all intended fixes were applied in the binaries that were released.
Therefore we're creating a new point release that does contain all intended fixes.

Thanks for all the [bug reports](mailto:support@sigasi.com) and enabling [Talkback]({{< ref "manual/talkback.md" >}}).
