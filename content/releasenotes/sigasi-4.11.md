---
title: Sigasi Studio 4.11
date: 2021-03-18
comments: true
pager: true
---
The Sigasi Studio 4.11 release continues to improve your Verilog, VHDL and SystemVerilog coding experience. This release brings many improvements. We introduce **VHDL 2019** support, improved **block diagrams** and **much more**. Read on for more details.

We are also trying something new: **a quick feedback question** for our next release:
[{{< figure src="/img/releasenotes/4.11/poll.png" alt="Cast your vote" class="uk-align-left" width="80">}}](https://www.sigasi.com/poll/)We received many questions to change the way we generate **documentation for ports and generics tables**. We currently add comments on a separate line, but a lot of people told us they would prefer the comment in a fourth column instead.
*Cast your vote on https://www.sigasi.com/poll/*. 

# VHDL 2019

This release introduces VHDL 2019 into Sigasi Studio. To make use of the improved language features and APIs you need
to set your VHDL project (or a single file) to VHDL 2019 and update the `std` and `ieee` libraries:
1. Update the project version: Right click the project (or file) and select **Properties > VHDL Version > VHDL 2019**.
2. Update the `std` and `ieee` libraries: Right click the `Common Libraries` folder, and select **Set Library > Reset Common libraries**

We have made a [screencast]({{< ref "/screencasts/vhdl_2019.md" >}}) to demonstrate this.
{{< youtube vFDm79tEyN4 >}}

The following VHDL 2019 features are now supported:

* All the new VHDL 2019 APIs in the updated `std` and `ieee` libraries
* Functions now know the type of the receiver of the return value
  ```vhdl
    function convert_to_slv(constant i: in integer) return TResult of std_logic_vector is
      variable result: TResult;
    begin
      -- Can now access attributes of the receiver of this return value
      result := std_logic_vector(to_signed(i, result'length));
      return result;
    end function;

    -- Now we can do the following
    x <= convert_to_slv(i);

    -- Instead of
    x <= std_logic_vector(to_signed(i, x'length));
  ```
* The ending `component` keyword in a component declarations is now optional
{{< figure src="/img/releasenotes/4.11/vhdl_2008_2019_endcomponent.png" title="The ending `component` keyword in a component declarations is now optional">}}
* A trailing semicolon in `port`, `generic` and `parameter` lists is now allowed
  {{< figure src="/img/releasenotes/4.11/vhdl_2008_2019_trailing.png" title="A trailing semicolon in `port`, `generic` and `parameter` lists is now allowed">}}
* Parameters of `impure function`s can now have `inout` and `out` modes
{{< figure src="/img/releasenotes/4.11/vhdl_2008_2019_outparameters.png" title="Parameters of `impure function`s can now have `inout` and `out` modes">}}
* `record` declarations can now be empty
{{< figure src="/img/releasenotes/4.11/vhdl_2008_2019_emptyrecord.png" title="`record` declarations can now be empty">}}
* Qualified expressions' operand is now optional
  ```vhdl
    -- Value of "abc" is an empty value of the type std_logic
    constant abc : std_logic := std_logic'();
  ```
* Improved syntax of power expressions (`**`)
{{< figure src="/img/releasenotes/4.11/vhdl_2008_2019_powerexpression.png" title="Improved syntax of power expressions (`**`)">}}
* `when`-`else` and `unaffected` expressions are now allowed in `return` statements
  {{< figure src="/img/releasenotes/4.11/vhdl_2008_2019_conditionalreturn.png" title="`when`-`else` and `unaffected` expressions are now allowed in `return` statements">}}
* Sequential `block` statements
{{< figure src="/img/releasenotes/4.11/vhdl_2008_2019_sequentialblock.png" title="Sequential `block` statements">}}

## Other VHDL improvements
* Default values for `generic`s are now part of the autocompleted component declaration
{{< figure src="/img/releasenotes/4.11/autocomplete_component_generic_default.gif" title="Quick fix multiple capitalization issues at once" width="500" >}}
* Quick fix multiple **capitalization issues** at once in the problems view
{{< figure src="/img/releasenotes/4.11/quickfix_all_caps_in_file.gif" title="Quick fix multiple capitalization issues at once" width="500" >}}
* Improved **auto indentation** for `procedure`s
* Improved alignment during **formatting** of `procedure` arguments
* Added a new linting check to detect **index out of range** and **incorrect size** for arrays
{{< figure src="/img/releasenotes/4.11/IndexOutOfRangeAndIncorrectArraySize.png" title="Index out of range and incorrect array size.png" width="500">}}

# Block Diagram improvements

Sigasi Studio 4.11 also brings many improvements to the Block Diagram view. 

We improved the **Verilog and SystemVerilog code analysis** which refined the displayed connections. We also improved the way we draw connections which results in speed improvements.
{{< figure src="/img/releasenotes/4.11/MoreEdgesInSvBlockDiagram.png" title="More edges in SV block diagram" width="500" >}}

In addition we also added support for:
* Verilog `generate blocks`
{{< figure src="/img/releasenotes/4.11/SvGenerateBlocksInBlockDiagram.png" title="SV generate blocks in Block diagram view" width="500" >}}
* VHDL `block` statements
{{< figure src="/img/releasenotes/4.11/block_in_blockdiagram.gif" title="Quick fix multiple capitalization issues at once" width="500" >}}
* **Mixed language** direct instantiations: Verilog modules are now displayed in VHDL architectures and VHDL entities in Verilog modules.
{{< figure src="/img/releasenotes/4.11/mixed_block_diagram.gif" title="Direct instantiation of a module in VHDL shown in the Block diagram view" width="500" >}}


# Verilog and SystemVerilog improvements

* Reduced **memory** consumption and improved code analysis **speed**, especially when you are using **parameterized classes**
* Added the option to **format on save**
{{< figure src="/img/releasenotes/4.11/SvFormatOnSave.png" title="SystemVerilog format on save" width="500">}}
* When SystemVerilog `.sv`-files are used as **include files**, they are now automatically only analyzed as include file and not as as regular SystemVerilog source file. This results in fewer unexpected syntax error messages.
* Anonymous UDP instances are now shown in the outline
* Added `New SystemVerilog File` wizard
{{< figure src="/img/releasenotes/4.11/NewSystemVerilogFileWizard.png" title="New SystemVerilog file wizard" width="500">}}
* Added a new linting check to detect **> 32-bit parameter initialization** without width specification (STARC Verilog, rule 1.1.4.9)
{{< figure src="/img/releasenotes/4.11/32BitParameterInitWithoutSpec.png" title="> 32-bit parameter initialization without width specification" width="500">}}
* Added a new linting check to detect improper use of 4-state net date types
{{< figure src="/img/releasenotes/4.11/wire_4state_logic.gif" title="detect improper use of 4-state net date types" >}}
* Added a new linting check to report when there are multiple statements on the same line
{{< figure src="/img/releasenotes/4.11/MultipleSvStatementsSameLine.png" title="Check multiple statements on the same line" width="500">}}
* Support conditional operator (ternary operator) in transitions of state
* Improved checking of duplicate, unresolved, too many or missing formals in instantiations


# Other New and Noteworthy Changes

* Improved monitoring and canceling of external compilers. 
* We now show a warning dialog when you select **Set Library > Reset library mapping** to make sure users do not accidentally reset their library mappings (Note that this is recoverable by opening the `.library_mapping.xml` file and reverting it to an earlier version)
{{< figure src="/img/releasenotes/4.11/ResetLibraryMappingDialog.png" title="Reset library mapping dialog" width="500">}}
* The *Report Encrypted Regions* check no longer underlines whole regions with red squiggly lines. It now shows just one marker instead.
* Improved error reporting for documentation export when the exported resources already exist and can't be overwritten
* Improved punctuation in our messages
* Split of simulation arguments to a separate field in the [toolchain preferences for GHDL]({{< ref "/manual/ghdl.md" >}})
{{< figure src="/img/releasenotes/4.11/GhdlSplitArguments.png" title="Ghdl split simulation arguments" width="500">}}
* We updated Eclipse in the standalone Sigasi Studio to **[Eclipse 2020-12](https://www.eclipse.org/eclipse/news/4.18/platform.php)**.
* Improved hovers in [Graphics Configuration files](https://insights.sigasi.com/manual/graphics/) hovers
* Updated the Xtext dependency to 2.24.0
* Chromium was Updated to 76.0.12
* Sigasi Studio is now bundled with a **Java 15 runtime environment**. We also improved the way we bundle the JRE in Sigasi Studio. It is now bundled as an updatable feature. So from now on, the JRE is automatically updated with Sigasi Studio.  
**Note that you may run into the error dialog below, when you restart Sigasi Studio after the update** because the JRE has changed. If you close the dialog, and restart Sigasi Studio manually, everything should work as expected.
{{< figure src="/img/releasenotes/4.10/jre_update_error.png" link="/img/releasenotes/4.10/jre_update_error.png" title="Expected error after update. Restart will solve the issue" width="200">}}

## ALINT Deprecation warning

We plan to remove the legacy ALINT implementation in Sigasi Studio in the next release (4.12). We assume everybody has updated to the newer ALINT-PRO by now.

# Bug fixes

* Fixed random hover errors in unsaved editors
* Fixed disappearing edges on hover in nested states in statemachines
* Aligned case-sensitivity of Graphics Configuration files to VHDL and Verilog
* Removed context menu from the documentation view
* Fixed unexpected sound effect when opening the documentation view
* Fixed running of all **VUnit** tests in a project
* Fixed broken editor when file for the editor was removed while Sigasi Studio was not running
* Renaming a graphics configuration file while it's open in an editor now works as intended
* Fixed an error when quickly pressing the buttons in Block Diagram view toolbar
* Fixed graphics not using all available space when scaling is enabled in the OS
* Made [suppressing of tutorial project creation]({{< ref "../manual/opening/#other-command-line-options" >}}) work again
* Allow Sigasi Studio to be used as external editor in Vivado on Linux again
* Fixed the **Set Top** button in the Hierarchy View when editing external files
* Fixed a rare case in which the cursor jumped to the start of the file after formatting
* **[VHDL]** Fixed structured selection no longer selecting single words
* **[VHDL]** Fixed corruption of VHDL outline, block diagram and hovers in unmapped files
* **[VHDL]** Fixed a rare issue when formatting aggregates with named associations
* **[VHDL]** Fixed hover for bitstring literals
* **[VHDL]** Added an autocomplete template for `procedure` prototypes
* **[VHDL]** Now allow (micro)seconds without a space between the numeral and the unit for time literals
* **[VHDL]** Fixed scoping/linking issue with declarations in block statements
* **[VHDL]** Improved the internal VHDL interpreter (hovers, linting)
* **[Verilog]** We no longer show errors in the problems view for files that are excluded from build and are not included anywhere
* **[Verilog]** Fixed linking support for `randsequence` in broken code
* **[Verilog]** Fixed outline rendering for nested types
* **[Verilog]** Fixed false positive in 4-state net type validation
* **[Verilog]** Fixed false positive warning for default type arguments when class was declared as forward typedef before
* **[Verilog]** Fixed false positive error for property operators
* **[Verilog]** Fixed false positive error for multiclock SVA properties
* **[Verilog]** Fixed false positive error for SVA property operators with `always` as an operand
* **[Verilog]** Fixed false positive error for `first_match` in sequences
* **[Verilog]** Fixed missing autocomplete for `` `include`` files
* **[Verilog]** Fixed preprocessing when an `` `include`` directive is directly followed by more tokens
* **[Verilog]** Fixed false positive errors and warnings in include files that are excluded from build but are included in files that are in the build

+ A lot of other issues we could fix thanks to your Talkback reports

# System requirements

* Sigasi Studio Standalone is supported on:
    * Windows: Windows 10 (64 bit) or newer
    * macOS 10.15 Catilina or newer
    * Linux: RedHat Enterprise Linux RHEL 7.7 (64 bit) or newer
        * Sigasi Studio depends on `libXss.so` which can be obtained by installing `libXScrnSaver`
    * More information on supported OSes can be found [on the Eclipse website](https://www.eclipse.org/projects/project-plan.php?planurl=http://www.eclipse.org/eclipse/development/plans/eclipse_project_plan_4_18.xml#target_environments)
* Sigasi Studio as Plugin in your own Eclipse installation:
    * Eclipse 4.8 *Photon* up to Eclipse IDE 2020-12
    * Java JRE 11 or higher

We recommend at least **4GB of memory** available for Sigasi Studio,
and you need **about 300MB** of free disk space.
