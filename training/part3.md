---
title: Linting and other features
layout: page 
pager: false
comments: true
---

In Part 3 you will learn about VHDL linting (code checks) and how you can get to zero warnings.

We will also explore other features that are not specific to VHDL.

### Linting

* Import Project `part3`
* Close unrelated projects (Right Click project in Project Explorer)
* Fix all **Errors** (Track your progress in the Problems View)
* Fix all `--TODO: fix` **Warnings** (Track your progress in the Task View). We will get to the other warnings later.
* Change the severity of the **Check for position associations in instantiations** linting via the Preferences (**Sigasi > VHDL > Errors/Warnings**). Set to severity to **Error**. Note that this warning in the code is now an error.

### Waive specific warnings

* Open `waive.vhd`
* Suppress the *Null Range* warning by adding
 ```
 -- @suppress
 ```  
 **Note:** You need to save the file before the warnings disappears.
* Note that the warning marker is removed from the **Problems View**
* Explicitly specify which warning you suppress by adding the warning message prefix:
 ```
 -- @suppress "Null Range"
 ```
* Note that the warning marker re-appears when you type another prefix
* Now also explain why you suppress the warning by adding an explanation:
 ```
 -- @suppress "Null Range" Ok here, see http://...
 ```
 
### Other features

* Project Explorer
  * Show hidden files (Click **▿**, **Customize view**, disable the `.* resources`)
  * Delete a file from your project. Next, restore this file from local history (Right click, **Restore from Local History...**)
* Bookmarks:
  * Right click a line number and select **Add Bookmark**
  * Open the bookmark view (**Window > Show View**)
* Multiple screen support
  1. Open a new Window (**Window > New Window**)
  2. Drag the new windows to a different screen
* Customize Autocomplete templates: Add a custom header to the `entity/architecture pair` template:
  1. **Window > Preferences > Sigasi > VHDL > Templates**
  2. Select **entity/architecture pair**
  3. Click **Edit...**
  4. Add a custom header (e.g. `-- Confidential, Copyright 2016`)
  5. Confirm with **OK**
  6. Create a new VHDL and select your customized template (**File > New > VHDL file**, choose a name, **Next** and choose the `entity/architecture pair` template)

### Optional Extra tasks

* Customize your perspective:
  1. **Window > Perspective > Customize Perspective...**
  2. Enable the **Print** button in **File**
* Configure the **Naming Convention** settings to check for *Uppercase* constants (`[A-Z_]+`)
* Open and explore the Properties Page (Right click file, **Properties**)
* Multiple Search Views
  1. Run a first search (e.g. Find Reference on `std_logic`)
  2. Click the **Pin the Search View** button
  3. Start a new search. This search will open in a new *Search View*
* Configure project specific settings <http://insights.sigasi.com/manual/linting.html#project-specific-linting-settings>
  