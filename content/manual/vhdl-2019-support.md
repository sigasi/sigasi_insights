---
title: VHDL-2019 Support
skipoverviewlist: true
pager: true
---

While support for VHDL-2019 is being improved, this page lists the VHDL-2019 features that are supported in the [latest release]({{< ref "/releasenotes/" >}}).

# Currently supported

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
* Added an autocomplete for, and improved automatic indentation of, protected type declarations
{{< figure src="/img/releasenotes/4.12/ProtectedTypeAutocomplete.png" title="Autocomplete for protected types" width="500">}}
* Added support for VHDL 2019 private variable declaration and aliases in protected declaration

  ```vhdl
  type SharedCounter is protected
      function increment(i : integer) return integer;
      private variable v : integer := 0;
      alias aliasName is increment;
      alias aliasName2 is aliasName;
  end protected SharedCounter;
  ```

* Added support for VHDL 2019 generic protected type declarations
  {{< figure src="/img/releasenotes/4.12/GenericProtectedTypeDeclaration.png" title="Generic protected type declaration in VHDL 2019" width="900">}}
* Allow [`conditional_or_unaffected_expression`]({{< ref "/tech/vhdl2017.ebnf.md#conditional_or_unaffected_expression" >}}) where needed

  ```vhdl
  proc : process is
    variable v : bit := '1';
  begin
    v := '0' when isAnswer(42) else unaffected;
  end process;
  ```
* Added support for VHDL 2019 Conditional Analysis
  {{< figure src="/img/releasenotes/4.16/Vhdl2019ToolDirectives.png" link="/img/releasenotes/4.16/Vhdl2019ToolDirectives.png" title="VHDL 2019 Tool Directives in Sigasi Studio">}}

# Enable VHDL-2019

The {{< page "/releasenotes/sigasi-4.11.md" >}} release introduced VHDL 2019 into Sigasi Studio.
To make use of the improved language features and APIs you need to set your VHDL project (or a single file) to VHDL 2019 and update the `std` and `ieee` libraries:
1. Update the project version: Right click the project (or file) and select **Properties > VHDL Version > VHDL 2019**.
2. Update the `std` and `ieee` libraries: Right click the `Common Libraries` folder, and select **Set Library > Reset Common libraries**

We have made a [screencast]({{< ref "/screencasts/vhdl_2019.md" >}}) to demonstrate this.
{{< youtube vFDm79tEyN4 >}}
