---
title: Sigasi Studio 4.3
layout: page
pager: true
date: 2019-03-21
comments: true
---

We are proud to present the Sigasi Studio 4.3 release: More autocompletes, Quick Fixes and lots of UI improvements.

Read below to find more details.

# Autocomplete for include directives (Verilog)

When you trigger **autocomplete** inside the double quotes of a (System)Verilog **include directive**, Sigasi Studio will offer you include paths matching the current prefix. This makes it a lot easier to get the paths first time right.  

[![Autocomplete for include paths](/releasenotes/4.3/autocomplete_include.png "Autocomplete for include paths")](/releasenotes/4.3/autocomplete_include.png)

# Quick Fix to Suppress Warnings

Warnings now have a **Quick Fix** to automatically add the [`@suppress` comment][/manual/linting#suppressing-warnings]. The Quick Fix automatically adds the warning's message. This makes sure the correct warning is suppressed (even when the code changes). We recommend to also add an explanation with the reason why you suppress the warning.  

[![Suppress warnings with a Quick Fix](/releasenotes/4.3/quickfix_suppress.png "Suppress warnings with a Quick Fix")](/releasenotes/4.3/quickfix_suppress.png)

# Dark theme

We received a lot of feedback asking for better **Dark Theme support** in Sigasi Studio. So in Sigasi Studio 4.3 we put a lot of effort in making sure all views and features look nicer with *Dark Theme*
 enabled. All graphics (Block, State Machine and Dependency diagrams), the Documentation View, Prepocessor View, the VUnit Console, ... are reviewed and improved.

We also reviewed and polished our icons to look nice with a Dark Theme.  

[![Dark Theme](/releasenotes/4.3/dark_theme.png "Dark Theme")](/releasenotes/4.3/dark_theme.png)

# Other New and Noteworthy Changes

* **Stuttering** (i.e. double tab "`,`" to get "`<=`") is now disabled by default for (System)Verilog.  
  You can still enable it via **Window > Preferences > Sigasi > (System)Verilog**, **Enable stuttering**.
* \[VHDL] We added a **Quick Fix** to remove trailing colon/semicolon in port and generics lists  
  [![Quick Fix for trailing (semi)colons in port/generic lists/maps](/releasenotes/4.3/quickfix_trailing_semicolon.png "Quick Fix for trailing (semi)colons in port/generic lists/maps")](/releasenotes/4.3/quickfix_trailing_semicolon.png)
* Export Dialogs (PDF, CSV, ...) now have a filter field to quickly filter top level names  
 [![Filter top level names in export dialogs](/releasenotes/4.3/export_filter.png "Filter top level names in export dialogs")](/releasenotes/4.3/export_filter.png)
* \[(System)Verilog] Configure linting severity per project
* Project specific validation preference page (VHDL and SystemVerilog) now have a *filter field*
* Eclipse 201812 : Sigasi Studio is now build with [Eclipse 201812 (4.10)](https://www.eclipse.org/eclipse/news/4.10/platform.php). This is also means that Sigasi Studio (preview) can now be installed as plugin in the latest Eclipse version.
* \[VHDL] Warning if concatenation contains unconstrained aggregates  
[![Concatenate unconstrained aggregates](/releasenotes/4.3/concatenate_unconstrained_aggregate.png "Concatenate unconstrained aggregates")](/releasenotes/4.3/concatenate_unconstrained_aggregate.png)
* Update to Xtext dependency to 2.16. The Sigasi Plugin now requires at least Eclipse version 4.7.3a, also known as *Eclipse Oxygen*.
* VUnit UI improvements: Refined stop behavior and improved the icons and progress reporting.  
[![Improved VUnit View](/releasenotes/4.3/vunit_view.png "Improved VUnit View")](/releasenotes/4.3/vunit_view.png)

# Bugfixes

- Scoping issue with `time` type
- \[VHDL] `configuration` support in mixed language projects
- Autocomplete of a VHDL component from a Verilog module should not infer `generic`s from `localparam`s
- Sort associations should not duplicate multi-line comments
- Verilog template pattern editor : make sure the correct context is used
- Record type declaration vanishing from hover after first view
- Verilog folding: Maximum one fold per line
- Fixed the annotations preference page
- \[VHDL] Format should respect the uppercase/lowercase preference
- Verilog port documentation should show port width
- Fixed opening non-project SystemVerilog files
- SystemVerilog parse error on `#this.object.member`
- Respect tabs/spaces setting in Verilog formatting and template autocomplete

# System requirements

* Sigasi Studio Standalone is supported on:
    * Windows: Windows 10 (64 bit) or newer
    * macOS 10.14 Mojave
    * Linux: RedHat Enterprise Linux RHEL 7.5 (64 bit) or newer
    * More information on supported OSes can be found [on the Eclipse website](https://www.eclipse.org/projects/project-plan.php?planurl=http://www.eclipse.org/eclipse/development/plans/eclipse_project_plan_4_10.xml#target_environments)
* Sigasi Studio as Plugin in your own Eclipse installation:
    * Eclipse 4.7.3a *Oxygen* up to Eclipse IDE 2018-12
    * Java JRE 8 or higher  

We recommend at least **2GB of memory**, and you need **about 300MB** of free disk space.

# Sigasi 4.3.1 point release

On March 27th we released Sigasi Studio 4.3.1. This release fixes the following reported issues:

* VHDL formatting: formatter removes keywords when both *preserve newlines* and *Uppercase/Lowercase keywords* settings are enabled
* VHDL formatting: array indexes are not taken into account when aligning concurrent assignments
* Stricter configuration of installation dependencies to make sure updates also work for updated Sigasi Studio 3.x installations.
* `@suppress` quickfix in lines with Verilog macro invocations

# Sigasi 4.3.2 point release

On April 8th we released Sigasi Studio 4.3.2. This release fixes the following reported issue:

* Sigasi Studio occasionally hangs while opening the License Key Preferences dialog.

Thanks for all the bug reports and enabling Talkback.