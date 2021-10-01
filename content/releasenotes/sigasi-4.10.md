---
title: Sigasi Studio 4.10
date: 2020-12-10
lastmod: 2021-01-29
comments: true
pager: true
---
The Sigasi Studio 4.10 release continues to improve speed and latency, especially for big files.
The **VHDL** interpreter can now handle **multidimensional arrays and records** and we implemented many **Verilog** and **SystemVerilog** improvements. We also have a welcome surprise for our Mac OS X users.

Users of the Sigasi Studio Eclipse Plugin should make sure they have **Java JRE 11** before upgrading.

Read on for more details and other improvements.

# Speed improvements

Sigasi Studio 4.10 brings many speed improvements:
* Faster graphics rendering: we now use the **Chromium Embedded browser** (Equo `org.eclipse.chromium.swt`) to render diagrams on all platforms (Windows, Linux and Mac). This results in **faster (and better) graphics**.  
If you see **empty views** in Sigasi Studio on Linux after the update: make sure `libXss` or `libXscrnSaver` is installed.
See the [FAQ]({{< ref "/faq.md#the-internal-web-browser-does-not-work-on-linux" >}}) for more information.
{{< figure src="/img/releasenotes/4.10/block_diagram.png" title="Faster block diagram rendering thanks to Chromium embedded browser" width="800">}}
* Faster **Outline View**
* Faster Verilog and SystemVerilog **preprocessing** and a faster Preprocessor View
* Faster exit: we changed the default behaviour of closing Sigasi Studio. We no longer show the **Confirm Exit** dialog by default.  
Refer to our [FAQ]({{< ref "faq.md#confirmation-dialog-when-exiting-sigasi-studio" >}}) if you want to re-enable the dialog.
{{< figure src="/img/releasenotes/4.10/confirm_exit.png" title="No more confirm exit dialog" width="500">}}
* The VHDL and (System)Verilog editors can now handle **big files** so well that we decided to drop the *lightweight* editors.  
Following dialogs are now a thing of the past:
{{< figure src="/img/releasenotes/4.10/lightweight_editor_warning.png" title="No more lightweight editor warnings" width="1000" >}}

# VHDL improvements

* The VHDL interpreter can now handle **multidimensional arrays and records**. This leads to more accurate *range checks, dead code analysis, etc*.

{{< youtube 1IXhN5kKWxM >}}

* Record field autocompletes now have a higher priority  
{{< figure src="/img/releasenotes/4.10/record_autocomplete.png" title="Better autocomplete for records" width="500">}}
* Extra check: Type names are not allowed as primaries  
{{< figure src="/img/releasenotes/4.10/vhdl_type_error.png" title="Flag error when type is used as primary" width="500">}}
* Support architecture parenthesis notation in the Open Design Unit Dialog.  
This allows you to search for `library.entity(architecture)` or `library.entity.architecture`.

# Verilog and SystemVerilog improvements

* Faster and more accurate SystemVerilog **parsing** (`sequence`, `properties`, ...)
* Improved **labels** in the (quick) outline
* Improved SystemVerilog and UVM **code navigation**
* Check `case generate` rules similar to the `case` statements checks
{{< figure src="/img/releasenotes/4.10/generate_case.png" title="Check generate case" width="500">}}

{{< youtube g_C3kwiFh2U >}}

* More efficient handling of **encrypted** files and region. You can now also enable a warning to flag encrypted regions
{{< figure src="/img/releasenotes/4.10/v_encrypted_region.png" title="Encrypted regions in Verilog" width="500">}}
* Better **autocomplete** for SystemVerilog's **parameterized classes**

# Other New and Noteworthy Changes

* Fixed the problem with **Damaged app on Mac OS X**. Sigasi Studio will now start as expected without showing this dreaded dialog:
{{< figure src="/img/releasenotes/4.10/mac_app_damaged.png" title="Fixed the 'Damaged app' message on Mac OS X" width="500">}}
* Updated the Xtext dependency to 2.23.0
* Sigasi Studio is now bundled with a **Java 14 runtime environment**. We also improved the way we bundle the JRE in Sigasi Studio. It is now bundled as an updatable feature. So from now on, the JRE is automatically updated with Sigasi Studio.  
**Note that you may run into the error dialog below, when you restart Sigasi Studio after the update** because the JRE has changed. If you close the dialog, and restart Sigasi Studio manually, everything should work as expected.
{{< figure src="/img/releasenotes/4.10/jre_update_error.png" title="Expected error after update. Restart will solve the issue" width="200">}}
* We updated Eclipse in the standalone Sigasi Studio to **[Eclipse 2020-09](https://www.eclipse.org/eclipseide/2020-09/noteworthy/)**. Most notable is better styling for our dark theme users.
* Added extra entry to the **VUnit** preferences to add options for finding VUnit tests  
{{< figure src="/img/releasenotes/4.10/vunit_preferences.png" title="VUnit preferences: options for finding tests" width="500">}}
* We removed the legacy graphics views from Sigasi Studio. The ~~`-Dcom.sigasi.legacy.graphics`~~ workaround is no longer supported.
* Sigasi Studio now has an option to suppress the creation of *tutorial projects* in empty workspaces. Add `-Dcom.sigasi.hdt.disableAutomaticTutorial` to `sigasi.ini` or the command line.

# Bug fixes

- Double duplicate declaration marker shown for Verilog instances
- Fixed showing VHDL entity comments when hovering ports or generics in a component declaration
- Avoid error when renaming a SystemVerilog file to VHDL when the Preprocessor view is open
- Fixed syntax coloring preference pages. After changing the color of one token, the color of all other tokens was shown as black in the preference window (Fixed for all Xtext languages)
- Fixed error in rename
- Fixed error when hovering over a VHDL entity instantiation in a SystemVerilog file
- False positive linting error in preprocessed UVM code
- Fixed incorrect error in VHDL 2008 `generic` subprogram
- Fixed VHDL 2008 parse problem in `for generate` statement

+ A lot of other issues we could fix thanks to your Talkback reports

# System requirements

* Sigasi Studio Standalone is supported on:
    * Windows: Windows 10 (64 bit) or newer
    * macOS 10.15 Catilina
    * Linux: RedHat Enterprise Linux RHEL 7.7 (64 bit) or newer
        * Sigasi Studio depends on `libXss.so` which can be obtained by installing `libXScrnSaver`
    * More information on supported OSes can be found [on the Eclipse website](https://www.eclipse.org/projects/project-plan.php?planurl=http://www.eclipse.org/eclipse/development/plans/eclipse_project_plan_4_10.xml#target_environments)
* Sigasi Studio as Plugin in your own Eclipse installation:
    * Eclipse 4.8 *Photon* up to Eclipse IDE 2020-09
    * Java JRE 11

We recommend at least **4GB of memory** available for Sigasi Studio,
and you need **about 300MB** of free disk space.

# Sigasi Studio 4.10.1 point release

On December 17 we released Sigasi Studio 4.10.1. This release fixes the following reported issues:

* Suppress warning Quick Fix sometimes puts the `@suppress` comment on the wrong line

# Sigasi Studio 4.10.2 point release

On December 18 we released Sigasi Studio 4.10.2.
This release fixes a regression with the external toolchain feature that was introduced in 4.10.1.

# Sigasi Studio 4.10.3 point release

On Januari 29 we released Sigasi Studio 4.10.3. This release fixes the following reported issues:

* High memory usage when using parameterized classes in SystemVerilog
* A bug where Sigasi Studio would always try to connect to port 4444 on multiuser systems

Thanks for all the bug reports and enabling Talkback.
