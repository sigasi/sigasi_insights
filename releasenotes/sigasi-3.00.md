---
title: Sigasi 3.0
layout: page
pager: true
date: 2016-01-20
---

[todo] intro

## Sigasi 3 Rebranding: Sigasi Studio Starter, Sigasi Studio Creator, Sigasi Studio XL

The different Sigasi version (Starter, Pro and Premium) were renamed to Sigasi Studio **Starter**, **Creator** and **XL**.

We optimized Sigasi Studio **Starter** as much as possible to work with **single files**. The UI in Sigasi Studio **Starter** only show menus relevant for editing VHDL and Verilog files. 

screenshot [todo]
  
Sigasi Studio **Starter** now only works with **single files**, and _not with projects_. So all features in Sigasi Studio Starter, only take information of the current file into account. So there is no longer a _project size threshold_, which tweaked some features as in Sigasi 2.

### Sigasi Studio Creator

### Sigasi Studio XL

### What about my current license?

Valid Sigasi 2 licenses are also valid for Sigasi Studio 3.x. If you have a valid Sigasi Pro license, all Sigasi Pro features continue to work in Sigasi 3.
  
If you are using a floating license, you need to update your [Flexnet daemon](#floating-license-updates).

## Sigasi Studio improvements

### Updated to Eclipse 4

* Global search bar
  [todo] screenshot
* Support for Dark theme
  [todo] screenshot
* Show in System explorer
  [todo] screenshot
* Close tabs + tab overflow
  [todo] screenshot
* [more](https://www.eclipse.org/eclipse/news/4.5/platform.php)

### Verilog improvements

* Preprocessor (Macro) View
  [todo] screenshot
* Better linking
* Hover for wire and reg
  [todo] screenshot

### Other new and noteworthy improvements

* We dropped Eclipse 3 support (new [requirements](/faq.html#what-are-the-system-requirements))
* The Hierarchy and Generics View are now merged. You can now inspect the values of generics and constants directly in the hierarchy view.
  [todo] screenshot
* Added new, minimalistic perspective for **Sigasi Starter**
* **Show In > Documentation View**
  [todo] screenshot
* Added [solarized theme](http://ethanschoonover.com/solarized) for the Sigasi editors
  [todo] screenshot
* Improved **Documenation View**: the documentation preview no longer flickers and scrolls to the top of your file when you edit your VHDL sources.
* Added new option to **Export hierarchy as CSV**: use current toplevel in Hierarchy View as default value ([documentation](/manual/tools.html#export))
* The Mac OS X version now is a real 'App' contained in one, clean `Sigasi.app`
* The formatter now offers an option to **ignore keyword casing**
* We updated the Flexnet client. If you use a floating license, you need to [update the daemon too](floating-license-updates).
* We added a warning if your Sigasi installation is outdated. If you use Sigasi without a commercial license, an update is required if Sigasi is older than 6 months. 
* We updated the Xtext dependency to `2.9.0`.


### Bug fixes

- ticket 3412 : Stuttering does not work in Eclipse 4
- ticket 3433 : Linking error in VHDL `for generate` index
- ticket 3460 : Support comments without leading whitespace
- ticket 3483 : Clear nature settings when **Clear** button is pressed on the VHDL/Verilog preference pages
- ticket 3490 : Split long names in documentation tables
  [todo] screenshot

## How to update?

The update procedure is different for the Standalone version and for Sigasi as Eclipse plugin.

### Standalone version

To update the standalone version to Sigasi Studio 3.0, you need to perform a fresh download and replace your old installation:

0. Backup your current **Sigasi installation folder** and **Sigasi workspace folder**.
1. **[download_sigasi]** and **Unzip**.
2. **Start**. Note that during the first start, you will see the info dialog below. Click **OK**
   ![Older Workspace Version Info](3.00/older-workspace-dialog.png)
3. [Re-install extra plugins](/tech/install-plugins-from-existing-installation.html)

### Plugin version

0. Check that your system meets the new [requirements](/faq.html#what-are-the-system-requirements)
1. Add the new update URL via **Window > Preferences > Install/Update > Available update sites**
2. Click the **Add...** button:
    * Name: `Sigasi`
    * Location: `http://download.sigasi.com/update/latest`
3. **OK**    
4. Install the updates via **Help > Check for Updates**

Note that we replaced the **VHDL perspective** in Sigasi 2.31 with a new **Sigasi perspective**. If the perspective was not automatically switched, you can switch via **Window > Perspective > Show Perspective > Other...**. Next select **Sigasi Starter** or **Sigasi**.

### Floating license updates

Because the FlexNet license framework was updated in Sigasi Studio, the Flexnet license **daemon** needs to be updated too. You can find the download details in "[/manual/license_key#License server setup]".

Users with a **node-locked license** do not have to perform extra actions. 
 