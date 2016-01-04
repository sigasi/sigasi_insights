---
title: Sigasi 3.0
layout: page
pager: true
date: 2016-01-20
---

[todo] intro

## Sigasi 3 Rebranding: Sigasi Studio Starter, Sigasi Studio Creator, Sigasi Studio XL

### Sigasi Studio Starter
  
  [todo] screenshot

### Sigasi Studio Creator

### Sigasi Studio XL

### What about my current license?

The feature set of of Sigasi Studio Creator  is nearly the same as the feature set of Sigasi Pro (2.x) and the feature set of Sigasi Studio XL is nearly the same as the feature set of Sigasi Premium Desktop.

A valid Sigasi 2 license is also valid for Sigasi Studio 3.x. If you have a valid Sigasi Pro license, all Sigasi Pro features continue to work in Sigasi 3.
  
What changed?

* Sigasi Studio Starter now only works with **single files**, and not with **projects**. So all features in Sigasi Studio Starter, only take information of the current file into account. So there is no longer a Project size threshold, which tweaked some features as in Sigasi 2.x. 
* A few Sigasi Pro features now require a Sigasi Studio XL license instead of a Sigasi Creator license:
    * **Hierarchy elaboration**: With a Sigasi Studio Creator license, you can still set (and start a simulation of) a toplevel. But you can no longer explore the elaborated hierarchy in the hierarchy view.
    * **Linting**: Following lintings now need a Sigasi Studio XL license:
       - Check for null ranges
       - Check for redundant choices in case statements
       - Check for redundant `others` choice in case statements
       - Check for infinite loops
       - Check for unbound component instantiations
       - Check for dead states in state machines
* A few Sigasi Premium features now require only a Creator license instead of a Sigasi XL license:
    * Check for duplicate signals in the sensitivity list
* A few Sigasi Pro features no longer require a license in Sigasi Studio:
    * More (VHDL) syntax checks
    * Open declaration
    * Hover

Note that if you are using a floating license, you need to update your [Flexnet daemon](#floating-license-updates).


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

* Dropped Eclipse 3 support
* Merge Hierarchy and Generics View
  [todo] screenshot
* Create perspective for Sigasi: Starter and Sigasi
* Show In > Documentation View
  [todo] screenshot
- ticket 3490 : Long names in docbook tables
  [todo] screenshot
* Add solarized theme
  [todo] screenshot
* Avoid flickering and scrolling in the documentation view page
* Export hiearchy as CSV: use toplevel in UI as default value
* Mac app
* Formatter: Add option to ignore keyword casing
* New Flexnet version -> See also
* Warn if Sigasi version is too old
* Update to xtext 2.9


### bugfixes

- ticket 3412 : Stuttering does not work in Eclipse 4
- ticket 3433 : Heidenhain syntax error
- ticket 3460 : Support comments without leading whitespace
- ticket 3483 : Clear HDL nature setting when "clear" button is pressed in HDL preference page

## How to update?

### Standalone version

* Fresh [download_sigasi] (All settings are stored in the workspace)
* Startup warning
* Re-install extra plugins

### Plugin version

* Check new requirements
* new Uri

<http://download.sigasi.com/udpate/latest>

### Floating license updates

* Update daemon
 