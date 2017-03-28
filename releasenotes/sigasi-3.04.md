---
title: Sigasi Studio 3.4
layout: page
pager: true
date: 2017-03-30
comments: true
---
intro

# New VHDL formatting engine

Bug fixes -> new engine

New features:
* skip region
 `-- @formatter:off` skip this part `-- @formatter:on`
* Option to disable vertical alignmnet
* Indent only

## Formatting bug fixes:
- ticket 3771 : Align case statements
- ticket 3204 : [Block formatting if there are real structural syntax errors](https://twitter.com/geschema/status/549550717393178624)
- ticket 3622 : Tweak vertical alignment in formatter
- ticket 3468 : Formatting issue in record constants
- ticket 3271 : Formatting selection increases indentation level when preserve newlines option is enabled
- ticket 3724 : Formatting matching case statements (case?) introduces syntax errors
- ticket 3667 : Add option to disable vertical alignment in the formatter

# More improvements to the Block Diagram view

* Layout improvements
* Visualization of assignments and assert
* Pin view

# Other new and noteworthy improvements

- We now require at least Java 8 to run Sigasi Studio (plugins)
- We updated the Eclipse Xtext dependency to `2.11.0`
- We improved the message for "Duplicate design unit" problems. We now mention the path of conflicting design files:

TODO:image

- We added three extra name conventions checks:
    - Labels of instantiation statements
    - Labels of generate statements
    - Labels of process statements

TODO:image

# Bug fixes

- ticket 3779 : \[VHDL 2008\] protected type issue with incomplete type declarations
- ticket 3743 : \[VHDL 2008\] Incorrect error for unconstrained nested arrays
- ticket 3753 : ModelSim compilation fails (silently) when project contains encrypted files
- ticket 3725 : Incorrect error for aggregates as return types for subprograms
- ticket 3795 : exception running the external compiler for project with certain library/VHDL version setups
- ticket 3792 : Two temp folders created for external compilation
- ticket 3769 : Improved message in popup when Sigasi warns about its age.
- ticket 3767 : Only open port 4444 when Sigasi Studio is started with `com.sigasi.runner.open application` (default)
- ticket 3783 : Block diagram incorrectly displays `generate` statements without instantiations as "unknown"
- ticket 3794 : Improve error handling of Quartus integration
- ticket 3768 : Allow to run external compiler if only the VHDL plugins are installed (and no Verilog)

## How to update?

If you have Sigasi Studio 3 installed, you can [update][update_sigasi] or [download a fresh install of the latest version][download_latest].
