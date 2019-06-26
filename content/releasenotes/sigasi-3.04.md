---
title: Sigasi Studio 3.4
layout: page
pager: true
date: 2017-03-30
comments: true
---
The major improvement in Sigasi Studio 3.4 is a new formatting engine. This enabled us to close most of the reported formatting issues and offer some new formatting features. Read below for more:

# New VHDL formatting engine

Code formatting is a delicate matter. Everybody has his own taste and style.
The VHDL formatter in Sigasi Studio 1, 2 and 3 evolved a lot to try to support the many requested styles. Alas, the approach was reaching its limits and we could not fix some reported bugs.

Therefor we decided to rewrite the VHDL formatting engine in Sigasi Studio 3.4. In addition to some popular bug fixes, this enabled us to add some extra features too:

## New Formatting features

* **Skip formatting** in defined regions  
  The code formatter now detects **off** (`-- @formatter:off`) and **on** (`-- @formatter:on`) tags. This allows you to disable the Sigasi formatter in defined regions in your code.
  ![](/img/releasenotes/3.4/formatter_off_region.png)
* Optionally **disable vertical alignment**  
  You can now disable vertical alignment in the formatter: **Windows > Preferences > Sigasi > VHDL > Formatting > Use Vertical Alignment**. Note that vertical aligment is enabled by default.
  ![](/img/releasenotes/3.4/vertical_alignment_a.png)
* New action to **correct indentation** only  
  Inside a VHDL editor, you can now correct the indentation only via the context menu **Source > Correct Indentation**, or via **Ctrl+I**. This only changes whitespace at the start of you lines.
  If you select code first, only the code in the selection will be indented.
  ![](/img/releasenotes/3.4/correct_indentation_a.png)

## Formatting bug fixes

- ticket 3771 : Align case statements
- ticket 3204 : [Block formatting if there are real structural syntax errors](https://twitter.com/geschema/status/549550717393178624)
- ticket 3622 : Tweak vertical alignment in formatter
- ticket 3468 : Formatting issue in record constants
- ticket 3271 : Formatting selection increases indentation level when preserve newlines option is enabled
- ticket 3724 : Formatting matching case statements (case?) introduces syntax errors
- ticket 3667 : Add option to disable vertical alignment in the formatter

# More improvements to the Block Diagram view

We further improved the layout, looks and interaction of the Block Diagram View.
We changed the looks of `assignment` and `assert` statements. We made them smaller to improve the clarity of most diagrams. We also improved *hover* and the *selection behavior*. 

  ![](/img/releasenotes/3.4/blockdiagram_a.png)

We also added a **Pin View** feature. This allows you to 'pin', or lock, the Block Diagram view to the current diagram. If you pin a view (![](/img/releasenotes/3.4/pin_view.png)), the diagram will remain unchanged if you navigate to other VHDL files. Editing your VHDL code will still result in updates of the Block Diagram View.

**Note:** In Sigasi Studio 3.3 we accidentally released a prototype feature. Depending on your license key, you may have noticed ![](/img/releasenotes/3.4/prototype.png) buttons in the Block Diagram view tool bar. These buttons filtered certain blocks and connections from the Block Diagram. In Sigasi 3.4, we have removed these buttons. An improved version of this functionallity will be re-introduced in a later version.

# SystemVerilog

See the [Preview Builds](/tech/preview) to track the latest SystemVerilog progress.

# Other new and noteworthy improvements

- We now require at least **Java 8** to run Sigasi Studio for both the Stand-alone and the Plugin version. The Plugin version now requires Eclipse 4.4 or newer. [System Requirements](/faq#what-are-the-system-requirements)
- We updated the Eclipse Xtext dependency to `2.11.0`
- We improved the message for *"Duplicate design unit"* problems. We now mention the path of conflicting design files
  ![](/img/releasenotes/3.4/duplicate_design_units_a.png)
- We added three extra **name conventions checks**:
    - Labels of instantiation statements
    - Labels of generate statements
    - Labels of process statements
    ![](/img/releasenotes/3.4/naming_conventions_a.png)

# Bug fixes

- ticket 3779 : \[VHDL 2008\] Protected type issue with incomplete type declarations
- ticket 3743 : \[VHDL 2008\] Incorrect error for unconstrained nested arrays
- ticket 3753 : ModelSim compilation fails (silently) when project contains encrypted files
- ticket 3725 : Incorrect error for aggregates as return types for subprograms
- ticket 3795 : Exception running the external compiler for project with certain library/VHDL version setups
- ticket 3792 : Two temporary folders created for external compilation
- ticket 3769 : Improved message in pop up when Sigasi warns about its age.
- ticket 3767 : Only open port 4444 when Sigasi Studio is started with `com.sigasi.runner.open application` (default)
- ticket 3783 : Block diagram incorrectly displays `generate` statements without instantiations as "unknown"
- ticket 3794 : Improve error handling of Quartus integration
- ticket 3768 : Allow to run external compiler if only the VHDL plugins are installed (and no Verilog)

## How to update?

If you have Sigasi Studio 3 installed, you can {{< update_sigasi >}} or {{< download_latest >}}.

## Sigasi 3.4.1 point release

We noticed in the error reports of Sigasi Studio 3.4 Talkback, that we accidentally uploaded small snippets of VHDL code that triggered a bug in the new formatter.
We [promised we would never do this](http://insights.sigasi.com/manual/talkback.html#what-kind-of-information-is-sent-through-talkback), so we immediately fixed the issue in the Sigasi Studio 3.4.1 release.

When was it send? If Talkback was enabled and you hit a bug in the formatter
What was send? The VHDL source line that triggered the issue, plus some lines before and after the issue.

Example:
```
BugReport [
version=3.4.0.201703291150
pluginName=org.apache.log4j
pluginVersion=1.2.15.v201012070815
stacktrace=
{{{}}}: space='' at offset=6836 length=1
[[[]]]: space=' ' at offset=6836 length=1
------------------------------- document snippet -------------------------------
mem_www          : out std_logic_vector(4 - 1 downto 0);
mem_xxx          : in  std_logic_vector(4 - 1 downto 0) := (others => '0');
mem_yyy          : in  std_logic_vector(4 - 1 downto 0) :={​{​{​[​​[​[ }​}​}​]​]​](others => '0');
mem_zzz          : in  std_logic_vector(4 - 1 downto 0) := (others => '0');
--------------------------------------------------------------------------------
    at org.eclipse.xtext.formatting2.internal.TextSegmentSet.handleConflict(TextSegmentSet.java:83)
    at org.eclipse.xtext.formatting2.internal.ArrayListTextSegmentSet.replaceExistingEntry(ArrayListTextSegmentSet.java:139)
    at org.eclipse.xtext.formatting2.internal.ArrayListTextSegmentSet.add(ArrayListTextSegmentSet.java:49)
    at org.eclipse.xtext.formatting2.internal.FormattableDocument.addReplacer(FormattableDocument.java:77)
    at org.eclipse.xtext.formatting2.internal.FormattableDocument.set(FormattableDocument.java:326)
    at org.eclipse.xtext.formatting2.internal.FormattableDocument.prepend(FormattableDocument.java:278)
```
