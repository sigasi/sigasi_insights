---
title: Sigasi Studio Preview (4.11)
layout: page
pager: true
date: 2021-03-08
comments: true
---

For those users who want to get early access to the features and bugfixes of upcoming Sigasi Studio releases, we have set up an extra release channel, called "*Sigasi Preview*".

The Sigasi Preview release channel offers more frequent releases than the official releases. This page gives an introduction to the most important changes.

Although these preview releases are less rigorously tested than the official releases, they are stable enough for daily use.

**If you run into any problems, [please let us know](https://www.sigasi.com/support/)**.

# Current preview release

## VHDL 2019

This release introduces VHDL 2019 into Sigasi Studio. To make use of the improved language features and APIs you need
to set your VHDL project (or a single file) to VHDL 2019.  
**Right-click the project (or file)>Properties>VHDL Version> VHDL 2019**.

To install the correct `std` and `ieee` libraries in your `Common Libraries` folder, you will also have to do the following:  
**Right-click the project>Set Library>Reset Library Mapping**

The following VHDL 2019 changes are being supported:

* 2019's common libraries have been added, thus all the new APIs are available
* The ending `component` in a component declaration is no longer required
  ```vhdl
    component test
    end; -- No more need for "component" here
  ```
* An optional semicolon terminating interface lists is now allowed
  ```vhdl
    function my_function(x : in string;) return bit; -- ";" after "string"
  ```
* Allow `inout` and `out` for parameters of impure functions:
  ```vhdl
    impure function dir_open(dir : out integer; path : in string) -- "out" is now allowed
    return integer is
    begin
      return 0;
    end;
  ```
* Empty records are now allowed
  ```vhdl
    type VhdlRecord is record
      -- No longer required to have anything in the record
    end record
  ```
* Qualified expressions' operand is now optional
  ```vhdl
    -- Value of "abc" is an empty value of the type std_logic
    constant abc : std_logic := std_logic'();
  ```
* Functions now know the type of the receiver of the return value
  ```vhdl
    function ConvertToSlv(constant i: in integer) return TResult of std_logic_vector is
      variable result: TResult;
    begin
      -- Can now access attributes of the receiver of this return value
      result := std_logic_vector(to_signed(i, result'length));
      return result;
    end function;

    -- Now we can do the following
    x <= to_unsigned(i);

    -- Instead of
    x <= to_unsigned(i, x'length);
  ```
* Expanded the allowed ways of using the power expression (`**`)
  ```vhdl
    constant minus : integer := -2;
    constant abc : integer := -2 ** abs minus; -- was not allowed in VHDL 2008
  ```
* Allow `when`-`else` and `unaffected` expressions in return statements
  ```vhdl
    function maybeReturnOne(returnOne : boolean)
        return bit is
    begin
        return '1' when returnOne else '0';
        -- The same result could be achieved using the following two lines.
        -- When the "unaffected" expression is hit, the return statement does not return.
        -- The code beneath it just keeps running as if nothing happened
        -- return '1' when returnOne else unaffected;
        -- return '0';
    end function;
  ```
* Added support for the sequential block statement
  ```vhdl
    architecture RTL of ent is
    begin
        proc : process is
        begin
          -- Block statements were not allowed here before
          blk : block is
            constant message : string := "Hello world";
          begin
            assertStat : assert true report message severity error;
          end block blk;
        end process;
    end architecture RTL;
  ```

## Improvements

* The *Report Encrypted Regions* validation no longer shows squiggly lines
* Improved error reporting for documentation export. Especially when exported resources already exist and can't be overwritten
* Ensured consistent punctuation in our messages
* Improved monitoring and cancelability of external compilers
* Split of simulation arguments to a separate field in the toolchain preferences for GHDL

{{< figure src="/img/releasenotes/preview/GhdlSplitArguments.png" title="Ghdl split simulation arguments" width="500">}}

* **[VHDL]** Default values for generics are now part of the autocompleted component declaration
* **[VHDL]** Allow multiple capitalization differences at once to be fixed from the problems view
* **[VHDL]** Improved auto indentation for procedures
* **[VHDL]** Improved alignment during formatting of procedure arguments
* **[VHDL]** Added a new validation to detect index out of range and incorrect size for arrays
{{< figure src="/img/releasenotes/preview/IndexOutOfRangeAndIncorrectArraySize.png" title="Index out of range and incorrect array size.png" width="500">}}

* **[VHDL]** Block statements are now shown in block diagrams

{{< figure src="/img/releasenotes/preview/VHDLBlockstatementsInBlockDiagram.png" title="Block statements in Block diagram view" width="500" >}}

* **[Verilog]** It is now possible to format on save

{{< figure src="/img/releasenotes/preview/SvFormatOnSave.png" title="SystemVerilog format on save" width="500">}}

* **[Verilog]** `.sv` files that are included in another file are now automatically excluded from Sigasi's compilation
* **[Verilog]** Anonymous UDP instances are now shown in the outline
* **[Verilog]** Added `New SystemVerilog File` wizard

{{< figure src="/img/releasenotes/preview/NewSystemVerilogFileWizard.png" title="New SystemVerilog file wizard" width="500">}}

* **[Verilog]** Added a new validation to detect > 32-bit parameter initialization without width specification (STARC Verilog, rule 1.1.4.9)

{{< figure src="/img/releasenotes/preview/32BitParameterInitWithoutSpec.png" title="> 32-bit parameter initialization without width specification" width="500">}}

* **[Verilog]** Added a new validation to detect 2-value type nets
* **[Verilog]** Added a new validation to detect multiple statement written on the same line
* **[Verilog]** Greatly improved memory usage when using parameterized classes

{{< figure src="/img/releasenotes/preview/MultipleSvStatementsSameLine.png" title="Check multiple statements on the same line" width="500">}}

* **[Verilog]** Verilog generate blocks are now shown in block diagrams

{{< figure src="/img/releasenotes/preview/SvGenerateBlocksInBlockDiagram.png" title="SV generate blocks in Block diagram view" width="500" >}}

* **[Verilog]** Support conditional operator (ternary operator) in transitions of state
* **[Verilog]** Improved checking of duplicate, unresolved, too many or missing formals in instantiation
* **[Mixed]** Direct instantiations of Verilog modules in VHDL code is now shown in block diagrams

{{< figure src="/img/releasenotes/preview/DirectInstantiationOfModuleInVHDL.png" title="Direct instantiation of a module in VHDL shown in Block diagram view" width="500" >}}

## Bugfixes

* Fixed a bug where Sigasi Studio would always try to connect to port 4444 on multi-user systems
* Fixed rare hover errors in unsaved editors
* Improved GraphicsConfiguration hovers
* Fixed disappearing edges on hover in nested states in statemachines
* Aligned case-sensitivity of GraphicsConfiguration to VHDL and Verilog
* Removed context menu for the documentation view
* Removed beep when opening the documentation view
* Fixed running of all VUnit tests in a project
* Fixed broken editor when file for the editor was removed while Sigasi Studio was not running
* Renaming a graphics configuration file while it's open in an editor now works as intended
* Fixed an error when quickly pressing the buttons in Block Diagram view toolbar
* Fixed graphics not using all available space when scaling is enabled in the OS
* **[VHDL]** Fixed structured selection no longer selecting single words
* **[VHDL]** Fixed corruption of VHDL outline, blockdiagram and hovers in unmapped files
* **[VHDL]** Fixed a rare issue when formatting aggregates with named associations
* **[VHDL]** We now show the correct value when hovering over bitstring literals
* **[VHDL]** Added an autocomplete template for procedure prototypes
* **[VHDL]** Now allow (micro)seconds without a space between the numeral and the unit for time literals
* **[VHDL]** Made sure declarations made in a block statement can be used within the block statement
* **[VHDL]** Ironed out many interpreter inconsistencies
* **[Verilog]** Fixed missing edges from/to aggregate assignments in block diagrams
* **[Verilog]** Fixed linking support for randsequence in broken code
* **[Verilog]** Fixed outline rendering for nested types
* **[Verilog]** Fixed false positive in 4-state net type validation
* **[Verilog]** Fixed false positive warning for default type arguments when class was declared as forward typedef before
* **[Verilog]** Fixed false positive error for property operators
* **[Verilog]** Fixed false positive error for multiclock SVA properties
* **[Verilog]** Fixed false positive error for SVA property operators with `always` as an operand
* **[Verilog]** Fixed false positive error for `first_match` in sequences
* **[Verilog]** Fixed false positive error for ternary conditions with pattern expressions
* **[Verilog]** Fixed missing edges from/to always block in block diagrams
* **[Verilog]** Fixed missing autocomplete for include files
* **[Verilog]** Fixed preprocessing when an **include** directive is directly followed by more tokens

## Version bumps

* JustJ was updated to 15.0.2
* Xtext and EMF were updated to 2.24
* Eclipse was updated to 2020-12
* Chromium was Updated to 76.0.12
* Sigasi Studio is now bundled with a **Java 15 runtime environment**. We also improved the way we bundle the JRE in Sigasi Studio. It is now bundled as an updatable feature. So from now on, the JRE is automatically updated with Sigasi Studio.  
**Note that you may run into the error dialog below, when you restart Sigasi Studio after the update** because the JRE has changed. If you close the dialog, and restart Sigasi Studio manually, everything should work as expected.
{{< figure src="/img/releasenotes/4.10/jre_update_error.png" title="Expected error after update. Restart will solve the issue" width="200">}}

We also plan to remove the legacy ALINT implementation in Sigasi Studio in the next release (4.12). We assume everybody has updated to the newer ALINT-PRO by now.

# Update or install?

You can download the stand-alone version of the latest preview from:

* <https://download.sigasi.com/preview/latest/com.sigasi.hdt.product-linux.gtk.x86_64.zip>
* <https://download.sigasi.com/preview/latest/com.sigasi.hdt.product-macosx.cocoa.x86_64.zip>
* <https://download.sigasi.com/preview/latest/com.sigasi.hdt.product-win32.win32.x86_64.zip>

You can also update from (configure via Preferences > Install/Update > Available Software Sites > Add...) :
  https://download.sigasi.com/preview/studio/

SHA sums ([more info]({{< ref "/faq.md#how-can-i-check-a-sha-sum" >}})) can be checked via <https://download.sigasi.com/preview/latest/sha1.txt>.

# System requirements

* Sigasi Studio standalone is supported on:
    * Windows: Windows 10 (64 bit) or newer
    * macOS 10.15 Catalina or newer
    * Linux: RedHat Enterprise Linux RHEL 7.7 (64 bit) or newer
        * Sigasi Studio depends on `libXss.so` which can be obtained by installing `libXScrnSaver`
    * More information on supported OSes can be found [on the Eclipse website](https://www.eclipse.org/projects/project-plan.php?planurl=http://www.eclipse.org/eclipse/development/plans/eclipse_project_plan_4_10.xml#target_environments)
* Sigasi Studio as plugin in your own Eclipse installation:
    * Eclipse 4.8 *Photon* up to and including Eclipse IDE 2020-12
    * Java JRE 11 or higher

We recommend at least **4GB of memory** available for Sigasi Studio,
and you need **about 300MB** of free disk space.

# Feedback

We welcome your feedback through the usual channels or the comments below. Note that comments are cleared after each [official release](/releasenotes).
