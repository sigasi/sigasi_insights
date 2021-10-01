---
title: Sigasi Studio 4.8
date: 2020-06-25
comments: true
pager: true
---
We are proud to present the Sigasi Studio 4.8 release. The highlight is the **improved responsiveness of our editor**. 
The release brings the results of our continued efforts to make the Sigasi editor as fast as possible. You can expect even faster feedback.

Read on for more details and other improvements.

# Editor improvements 

{{< figure src="/img/releasenotes/4.8/impact_analysis.png" link="/img/releasenotes/4.8/impact_analysis.png" title="Impact analysis" width="400" class="uk-align-right" >}}
The **editing experience** in Sigasi Studio 4.8 received an extra upgrade. Editing with many open files is faster than ever. We also improved the *impact analysis* of your changes. We more accurately analyse which files are impacted by the changes you make. This greatly improves the **responsiveness** of the editor and saves memory and cpu cycles.

We also improved **navigation**. Seamless navigation through your projects is key to efficient HDL design and verification, no matter the size of your code base. We have put a lot of effort into making navigation snappier when you follow references. The delay which you may have experienced in larger SystemVerilog projects, is gone.

In addition to the lower latency for getting feedback when editing (System)Verilog code, we also enabled **type-time feedback for project-wide preprocessor expansions**. In earlier versions, files needed to be saved before preprocessor changes were passed on to other editors. In Sigasi Studio 4.8, preprocessor changes are applied immediately in all open editors.

# More (System)Verilog improvements

* We updated the (System)Verilog tutorial.
* We improved the **outline** and cleaned up the **hovers**:
{{< figure src="/img/releasenotes/4.8/system_verilog_outline.png" link="/img/releasenotes/4.8/system_verilog_outline.png" title="Improved SystemVerilog outline: note the result of the expanded UVM macros" width="600" >}}
* We improved linking of references to their declaration, this results in **better code navigation** and **more accurate renames**. In particular for verification code (`$unit::`, `rand`, `sequence`, ...) and `interfaces`. 
* We also added better support for the`` `default_nettype`` directive. This results in better **autocompletes**, **hovers** and **outline**.
{{< figure src="/img/releasenotes/4.8/implicit_nets_autocomplete.png" title="default_nettype autocomplete">}} 
{{< figure src="/img/releasenotes/4.8/implicit_nets_hover_and_outline.png" title="default_nettype hover and outline">}}

## (System)Verilog fixes

* Comments in preprocessor macros are now highlighted correctly
* Added support for empty default arguments in preprocessor macros
* `SystemVerilog` keywords are no longer highlighted as keywords in `Verilog` files.
{{< figure src="/img/releasenotes/4.8/sv_keywords_in_v.png" title="`SystemVerilog` keywords in verilog files">}}
* Fixed Libraries View cross linking for Verilog `interfaces`
* Fixed name of SystemVerilog `superclasses` and `virtual classes` in the exported documentation and the documentation view
* Fixed hovering for Verilog `module` instances
* Fixed autocompletes at the end of (System)Verilog files
* Fixed StackOverflowException for nested attributes class declarations
* Warn when a Verilog module has an empty parameter declaration 
* Warn against badly terminated port map of Verilog component (Note that this is allowed in SystemVerilog)
* Mark Occurrences now works reliably in include files
{{< figure src="/img/releasenotes/4.8/occurrence_highlight_in_includes.png" title="Mark Occurrences now works reliably in include files">}}

# Documentation

We removed the DocBook Documentation (to PDF) flow from Sigasi Studio. Since [Sigasi Studio 4.5]({{< ref "/releasenotes/sigasi-4.05.md" >}}) it is replaced with a HTML export. This approach is much faster and simpler. In addition, it can more easily be [imported into Word]({{< ref "/tech/scale-diagrams-in-word.md" >}}).

Please let us know if you are missing any features in the HTML flow: <support@sigasi.com>.

We also optimized the graphics. The exported SVGs should now be 100% identical to the interactive views.
We also improved styling of the dependencies view.

{{< figure src="/img/releasenotes/4.8/dependencies_view.png" title="Dependencies view" >}}

# Other New and Noteworthy Changes

* \[VHDL] We replaced the shorthand with longhand command line options of GHDL
* \[VHDL] Improved autocomplete for `ports` in entities
{{< figure src="/img/releasenotes/4.8/entity_port_autocomplete.png" title="Better autocomplete for ports in Entities">}}
* We updated Eclipse in the standalone version to Eclipse 2020-03
* We updated the Xtext dependency to 2.21.0
* We've added a Preference page with settings that affect performance. The default values should be fine.
  * **Build Cache**: allows to disable the Build Caching mechanism and to control the max cashe size on disk.
  * **Diagram nodes**: The maximum number of nodes to be displayed in a diagram. If this is set too low, the Diagram View will show an error message instead of a diagram.
{{< figure src="/img/releasenotes/4.8/advanced_preferences.png" title="Advanced Preferences page" >}}

# Bug fixes

* \[VHDL] Fixed Attribute QuickFix for unspecified entity classes
* Task (`TODO`, `FIXME`) markers are now removed when a file is unmapped
* Added missing whitespace in documentation when comments span multiple lines
* Update open editors when library mapping changes
* Update graphical diagrams when the theme changes
* Fixed issue with invisble hierarchical edges in block diagram
* **Show in** action no longer diverts the focus from the editor
* Fixed outline refresh after undo
* Fixed error popup when contents of the Search View get out of date
* \[VHDL] Corrected location of `use` clause quickfix, after the `library` clause
* \[VHDL] Fixed launching simulation in Modelsim/Riviera Pro, when an entity is set as toplevel
* \[VHDL] Quick Fix to suppress `port`/`generic` `map` warning now adds suppress marker on the correct line
* Report a better error messsage when an external compiler is no longer available  
{{< figure src="/img/releasenotes/4.8/toolchains_error_message.png" link="/img/releasenotes/4.8/toolchains_error_message.png" title="Report a better error messsage when an external compiler is no longer available" >}}
* Sort toolchains alphabetically on toolchains preference page
* Always export diagrams in light theme
* \[VHDL] Using `${env_var:SOMEVAR}` in toolchain settings is now supported for linking related libraries in Common Libraries
* \[VHDL] Fixed scoping issue when a `library` and an `entity` have the same name
* \[VHDL] Linter no longer warns for unread signals/variables when they are used in an `after` clause
* VUnit: Support Python 3 on Windows
* VUnit: Fixed path issue
* VUnit: Fixed issue with linked resource in `vunit_lib` and `osvvm`
* Fixed **Correct indentation** issue for regions following multiple uninterupted newlines.

+ A lot of other issues we could fix thanks to your Talkback reports

# Startup time on Windows

If you experience long start-up delays on Windows 10, excluding the installation folder from the Microsoft Defender Antivirus scan might improve the start-up time.
This is not specific for Sigasi Studio but affects all [Eclipse installations](https://bugs.eclipse.org/bugs/show_bug.cgi?id=548443).

Instructions on excluding the installation folder are available in [this Microsoft support article](https://support.microsoft.com/en-us/help/4028485/windows-10-add-an-exclusion-to-windows-security).

# System requirements

* Sigasi Studio Standalone is supported on:
    * Windows: Windows 10 (64 bit) or newer
    * macOS 10.15 Catilina
    * Linux: RedHat Enterprise Linux RHEL 7.5 (64 bit) or newer
    * More information on supported OSes can be found [on the Eclipse website](https://www.eclipse.org/projects/project-plan.php?planurl=http://www.eclipse.org/eclipse/development/plans/eclipse_project_plan_4_10.xml#target_environments)
* Sigasi Studio as Plugin in your own Eclipse installation:
    * Eclipse 4.7.3a *Oxygen* up to Eclipse IDE 2020-03
    * Java JRE 8

We recommend at least **4GB of memory** available for Sigasi Studio,
and you need **about 300MB** of free disk space.

Thanks for all the bug reports and enabling Talkback.
