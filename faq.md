---
title: FAQ
layout: faq 
pager: true
---

# Install and Run

## Can I run several copies of Sigasi on my machine

The normal behavior when you start Sigasi is that the tools searches for another running copy and to re-use that copy. Sometimes you may want to run two or more copies of Sigasi at the same time on one computer. In order to do this, you need to modify `configuration\config.ini`. Replace this line:
```
eclipse.application=com.sigasi.runner.open
```
by the following line: 
```
eclipse.application=org.eclipse.ui.ide.workbench
```

After you do this, each time you call `sigasi.exe`, a new copy will be started.

## How can I check a SHA sum?
The SHA1 sum (or hash) is a fingerprint of a file. After you download a file, you can check that it is downloaded correctly by calculating its SHA sum. If the SHA sum is correct, you can be sure that the download was correct too. On the Sigasi download page, you find the zip files that contain the actual Sigasi application, and also a small text file with the correct SHA sums .

* On Windows, you can compute the SHA using [sha-util].
* On Linux, you can use the command line tool sha1sum.

## What are the system requirements?

* Sigasi Studio Standalone is supported on:
	* Windows: Windows 7 and Windows 8 (32 bit and 64 bit) or newer
	* Mac OS: X Yosemite or newer
	* Linux: RedHat Enterprise Linux RHEL 6 (64 bit) or newer.
	
	However, it should work on most of the recent Linux distributions, on Windows XP and up, and on Mac OS X.
	We recommend at least **2GB of memory**, and you need **about 200MB** of free disk space. 

* Sigasi Studio as Plugin in your own Eclipse installation:
	* Eclipse 4.2 or higher
	* Java JRE 7 or higher
	
	And all requirements from the standalone version:

* License servers (FlexNet):
	* RedHat Enterprise Linux 5.2 (32 bit and 64 bit) or newer
	* Windows 7 (32 bit and 64 bit) or newer
	* Solaris on SPARC (64 bit)

## How do I increase the heap size for Eclipse?

We recommend to increase the default heap size settings of Eclipse. You can do this by adding following lines to eclipse.ini in your Eclipse installation folder:
```
-vmargs
-Xmx1400m
```
This sets the maximum heap size to 1400 MB. If you system has plenty of memory, you can even choose higher numbers.

**Note**: If your `eclipse.ini` already contains these arguments, you should not append these parameters again, but instead modify the existing values. If `-vmargs` is there already, but `-Xmx1400m` is not; you should add `-Xmx1400m` after the existing `-vmargs`.

**Note**: If you run the stand alone version of Sigasi Studio, this settings file is called `sigasi.ini` instead of `eclipse.ini`

## How can I update Sigasi? {: #update}

See [/manual/setup#Software Updates].

## What if I ever want to get back to my old toolflow? Am I locked in?

If you ever want to get back to your old tools (but we hope you won't), you'll have absolutely no trouble doing so. All your files are just the way you left them, except that we created two hidden files in your project folder (.project and .library_mapping.xml). You can just leave them sitting there or you can delete them after you stop using our tool.

In short: you are **not** locked in at all!

## How does Sigasi change my existing project?
You do not have to change your directory structure, the names of your VHDL files or anything in your project folder. The only thing Sigasi HDT does, is add a few hidden files with project information.

## What is the eclipse.ini file and where can I find it? {: #eclipse-ini}

The file `eclipse.ini` contains information that is passed to the Eclipse platform and to the Java Virtual Machine (JVM).

If you are using an Eclipse distribution on Windows or Linux, the file is located in your eclipse directory.
On Mac OS X distributions, the file is usually in `Eclipse.app/Contents/MacOS/eclipse.ini`.

For the Sigasi standalone product, the file called `sigasi.ini`
More information about this file can be found at <http://wiki.eclipse.org/Eclipse.ini>

## How can I check the version numbers of Sigasi Plugins?

All Sigasi plugins should be at the same version number. You can check the version numbers at:
**Help > About Eclipse > Plug-ins.**

Here you can **sort** by Plug-in Id by clicking on the title of the "Plug-in Id" column, so that you can check all the plugins that start with "com.sigasi...."

## Can I use the features of the upcoming release?

Yes! You can find the details on [/tech/preview].

# Licensing

## Same license for Plugin and Standalone

If you purchase a Sigasi Studio license, you can use this for either the _Plugin version_, or the _Standalone version_, or _both_.
If you have floating licenses, each running instance of the Sigasi application or the Sigasi plugin will check out one floating license.

## Do you sell floating licenses?
We offer floating licenses, based on the well known FlexNet (a.k.a. FlexLM) license manager.
Floating licenses are available at a minimum volume of five licenses. The price is the same as for node-locked licenses.

If your team is purchasing at least five licenses, you will have the choice between node-locked and floating licenses.

If you currently have five node-locked licenses and you want to upgrade to floating licenses, please [contact-us].

## How can I avoid locking up a license when I'm working with Eclipse?
If you are using Eclipse for both VHDL and C development, you probably don't want to lock up a floating Sigasi VHDL license while you are working on C.
In order to use Eclipse without locking up a Sigasi license, you should close the VHDL perspective, close all VHDL projects and restart Eclipse.


# Getting Started

## What is a Workspace?
A workspace holds all Sigasi Studio's meta-information (preferences, project information,...) and serves as the default location for your projects.

## Which Sigasi files should I add to my Revision Control System?

Sigasi stores all project information in two files: `.project` and `.library_mapping.xml`, and one directory `.settings`. If you track these files you have everything you need.

* `.project` describes all generic information on your project: which files belong to your project, …
* `.library_mapping.xml` describes the mapping of your VHDL libraries.
* `.settings` (if it exists) is a directory that contains additional settings 

You can revert to older revisions of these files while Sigasi is running. Sigasi will update as soon as the files are refreshed.

## How can I hide files from the Project Explorer?
If the project explorer shows the hidden files in from your revision control system (.hg or .svn directory), or there are too many files from Altera Quatrus or Xilinx ISE that clutter the project explorer, you can hide those files from view:

Select the View Menu (small triangle pointing down) **Customize View > Filters**. 

![](faq-images/customize-view.png)

Now you can filter out hidden files (`.* resources`) or `All non VHDL Files`.


# Editing

## What do you mean by "Type-Time"?
"At type-time" means "while you type". 
The Sigasi development environment checks your code at type-time. In other tools, your code gets checked only after you save all files and explicitly start a compiler, Sigasi has a type-time compiler. While you are typing, the Sigasi compiler checks your code and marks your errors.

Related terms include:

* Save-time: as soon as you save your file
* Elaboration-time: as soon as you set the top level of your design and
* Simulation-time (or run-time): during the simulation

## Does Sigasi support multi-byte characters?
Yes, the Sigasi VHDL Eclipse editor supports all unicode characters, including Japanese characters. Note that the VHDL language does not allow any non-ASCII characters as identifiers, so you cannot use multi-byte characters in signal names.

## What is this MouseFeed pop-up?
Many actions can be accessed using your mouse and using a keyboard shortcut, e.g. copying text can be done either by clicking **Edit > Copy** or by pressing **Ctrl-C**. Of course, pressing a key combination is a lot faster than clicking in a menu.

![](faq-images/mousefeed.png)

Whenever you use your mouse for something that also has a key binding, the MouseFeed function tells you what this keyboard shortcuts is. This will help you remember keyboard shortcuts for the actions you use most often.

The easiest way to avoid getting these pop ups --and gain a good deal of development speed-- is by using keyboard shortcuts when possible. If you still want to disable MouseFeed, you can go to **Window > Preferences > MouseFeed > Action Invocation** and uncheck the box for **Enable action invocation control**.

## How can I insert tabs in Block Selection Mode

With **Block Selection Mode**, you can easily insert the same text on multiple lines. This works great for regular text and spaces, but not for **tabs**. When you press **Tab** the entire line will indent an extra level to the right (instead of inserting a tab character).

This was a design decision because in _most cases you do not want tabs inside your code_ (except for indentation) because different tab width settings break your vertical alignment. We recommend to stick to Sigasi's default formatting rules and use the **Format action** instead.

If you still need to insert tabs in Block Selection Mode, you should **copy** a tab character first and subsequently **paste** it into the Block Selection.

## How to use Sigasi efficiently on multiple monitors/screens/desktops?

Sigasi/Eclipse supports full multiscreen support.

The easiest method to organize Sigasi over multiple screens is to use one window on each screen.
You can open a new Window via **Window > New window**

Once have configured the windows and the views inside the windows, you can save this as a custom perspective (**Window > Save Perspective As...**).

## Whole word textual search
In some situations you may not want Sigasi's VHDL aware search (**Find References**), but you want an old-fashioned textual search instead.

If you want textual search inside one file, you can use **Find** (Ctrl-F). This dialog has an easy "**Whole word**" option.

![](faq-images/find.png)

I you want to search for textual matches in the **entire workspace** with the **Search** dialog. This method does not have a 'Whole word' option.

You can achieve the same effect by toggling the '**Regular Expression**' option and by adding a `\b` before and after the text you search. The `\b` stands for "word boundary" in regular expressions.

![](faq-images/search.png)

# Configure 

## How can I make Sigasi generate spaces instead of TAB's?
See [tabs-and-spaces].

## How can I change the font size?
See [/manual/config#Font Size].

## Sigasi keeps compiling everything while I am trying to configure ...

While you are configuring your libraries (mapping and unmapping files), the built-in compiler may trigger a full rebuild several times. In order to avoid this, and make Sigasi more responsive while you configure your libraries, you can _turn of auto...

## How can I change the default key bindings?
To change the key binding (keyboard shortcuts) within Eclipse: **Window > Preferences** and next **General > Keys**.

## How can I change settings?
Most settings can be changed in **Window > Preferences**. In this dialog, you can either browse the menus to the left, or search for an item in the search field in the top left.

![](faq-images/settings1.png)

## Can I control the timing of the hovers/popups in Sigasi?

See <http://stackoverflow.com/questions/5778452/is-there-a-way-to-add-a-delay-to-eclipse-tooltips>

## Where is the path variable information stored?

There are two places where you can configure your own **path variables**: in the **workspace** and in your **projects**.

The **workspace path variables** (set via preferences) are stored in: `<workspace>/.metadata/.plugins/org.eclipse.core.runtime/.settings/org.eclipse.core.resources.prefs` (e.g. `pathvariable.FOOBAR=/Users/heeckhau/tmp/foobar`)

You can also set this per **project** (in the project properties). In that case the info is stored in the `.project` file.

You can find more info on: [here](http://www.sigasi.com/content/how-avoid-absolute-library-paths-your-sigasi-project-files) and [here](http://help.eclipse.org/luna/index.jsp?topic=%2Forg.eclipse.platform.doc.user%2Fconcepts%2Fcpathvars.htm)

## Can I use a Dark Theme?

In **Window > Preferences > General > Appearance**, select **Dark** in the **Theme** field. Restart to apply the settings in all windows.

If you want a _fully black background in the editor_, right click in the editor view and select **Preferences...**, next navigate to **General > Editors > Text Editors**. In the **Appearance color options**, select **Background color** and next click the **Color** button to select your preferred editor background color.

# Warnings and Lint rules

## Can Sigasi replace my linter?
Depending on which features you use, it might.

But Sigasi Lint does not aim to replace your $ 100.000 power lint checker with CDC (clock domain crossing) checks. Instead, Sigasi Lint helps you get the coding conventions right first time around. In addition to style linting, Sigasi Lint can interface with your third party power linter tool (like Aldec ALINT), giving you feedback faster. Contact us to discuss your requirements.

## How fast is the Sigasi linter?
Depending on your exact coding rule, the Sigasi Linter can flag violations either within seconds after you type (type-time linting) or after you save (save-time linting). Over 80% of common coding rules can be checked at type time.

## How can I organize my errors and warnings (problem markers) in the problems view?
Click the little triangle to the upper right-hand side of the problems view and look at the Group By and Sort By menu.

You can also filter which problem markers you will see in the Show menu; for example only errors and warnings for the current project.
![Problems View](faq-images/organize_problem_markers.png "Problems View")

## Does the Sigasi Studio's built-in Linter replace my code reviews?
No.

The Sigasi Pro linting functionality is aimed to free up time wasted in code review meetings; time wasted on trivial things like naming conventions and deprecated data types. We hope you can use this time to discuss complex design decisions and computation algorithms which have an impact on the product you are design.

## What kind of linting rules are possible?
The answer to this question is not straightforward. However, some examples may help. We can implement (but are in not limited to) the following types of custom linting rules:

* Naming conventions (e.g. constants should be in capitals, signals should start with "s",...)
* Deprecated libraries, data types, constructs (e.g. don’t use block statements; don’t use std_logic_unsigned,...)
* Project structure, file names (e.g. an entity should be in a file named “_e.vhd”)
* Required file headers
* Maximum sizes of files, processes,...
* How to instantiate components/entities
* Unused signals, constants,... 
* Dead code
* ... and much more

We cannot implement overly complex or fuzzy requirements, like:

* Post-synthesis checks
* CDC checks
* Fuzzy requirements, like: _"Entities should be sufficiently commented."_ (How can an algorithm decide what is sufficient?)
 
If you get in touch with us, we will evaluate your coding rules to determine which rules we can implement.

## I typed an error in my VHDL code. Why doesn't Sigasi catch this?
Sigasi Studio does not attempt to check full correctness of your VHDL and Verilog code. We just run a set of syntax checks and general "sanity checks". This way, 90% of the common errors are caught before you even start your simulator.

As you design, you put your code through a funnel: first Sigasi finds the first 90% of errors in your code, without ever running a simulation. Next you compile with the simulator and you find another bunch of problems. In each successive step of your design flow, you find harder to track errors in your design. Sigasi just helps you get a big number of issues out of the way early on, so that you can concentrate on finding the hard problems down the road.

![](faq-images/funnel_small.png)

If you want to check more errors, enable the [/manual/tools#Save-time Compilation]

## How to 'Quick Fix' multiple problems at the same time?

Quick Fixes are a really useful Sigasi Studio feature to resolve common problems. By default you apply a Quick Fix to one problem at a time.

Although the procedure is not very elegant, there is a way to apply multiple Quick Fixes at the same time.

Conditions:

1. Make sure you are dealing with identical solutions to the same problem. 
	For example: five "declare signal" Quick Fixes
2. All problems have to be in the same file

Procedure:

1. Select all problems you want to fix in the problems view
2. In the context menu, select **Quick Fix**
3. Click **Finish** in the Dialog

![](faq-images/quick_fix_all_code_menu.png)

# Features

## Does Sigasi Studio support VHDL-2008?

Sigasi Studio supports VHDL-2008 features, except:

* Inline PSL (not supported, but PSL in comments is safely ignored)
* New generics on packages: subprogram generics (not supported)
* New generics on subprograms (not supported)

## Why don't you have feature XYZ? How can I put in on your roadmap?
As any tech company, our stack of good ideas is far larger than the amount of time we have to work on them. We're grateful for any suggestions that users send us on the user forum and we often build new features based on your suggestions. However, we have to prioritize and maybe your favorite feature is not on our short-term roadmap.

Deciding which features to put on the roadmap is a very complicated process. Some of the things that help are:

* If your feature is useful for all users, not just for your specific case.
* If your feature brings a lot of value to you and to other users. For example, a feature that saves you thirty seconds each month brings less value than something that saves you half a day each week.
* If other users comment on your feature request on the forum, to tell us that they want your feature.

Feel free to talk to us about any feature, big or small.

## Do you support block select (a.k.a. column editing mode)?
You can enable and disable block editing with **Ctrl+Alt+A** or **Edit > Toggle Block Selection**

Note that in many cases where you are used to using block editing (e.g. [/screencasts/short_entity_component_instantiation]), you may not need it any more, thanks to intelligent code completion (see this blog post: [/opinion/why-cant-hdl-designers-live-without-block-selection-mode]).

## How to create a component declaration ("Paste As" Emacs)

Some other editors (most notably [Reto Zimmermann's Emacs VHDL Mode](/opinion/emacs)) have the concept of **"port translation"**. You first copy the source code of an entity declaration, and then you can paste it as an instantiation or as a component declaration.

Sigasi supports the same, but in a different way: using **Autocomplete**. You don't need to go find the original entity declaration, since Sigasi knows where to find it in your project. For example for instantiation: just start typing the **label name**, `:` and the word `entity` and press **Ctrl-Space** to trigger the autocomplete feature.

Check out this screencast: [/screencasts/testbench].

## How can I suppress (ignore) warnings?

If you see warnings that are not useful for you, you can do one of the following:

* **Disable rule**: You can either disable the markers of a certain type: Click **Window > Preferences > Sigasi > VHDL > Errors/Warnings**, then select a rule and set the **severity** to **Ignore**
* **Suppress one marker**: Or you can suppress markers on a given line, using the [/tech/eclipse-marker-manager] plugin.

# Troubleshooting

## "Show In -> System Explorer" does not work on Red Hat Linux 6

On preference page **General > Workspace** you can configure the command that is used to open files with the System Explorer. The default Linux command does not work on older linux systems. 
On RedHat 6 linux, you can use the nautilus command: `nautilus "${selected_resource_parent_loc}"` ([More info](http://help.eclipse.org/mars/index.jsp?topic=%2Forg.eclipse.platform.doc.user%2Freference%2Fref-9.htm)).

## Sigasi switches my keyboard layout! Did I find a bug?

This sometimes happens on Windows. You have probably triggered a keyboard shortcut that switches your keyboard lay-out.
Read Microsoft's documentation of the [language-bar].
If you only use your local keyboard lay-out and not the standard English lay-out, you might as well diable the language bar.

## I don't see error icons in the Project Explorer, or I don't see the library names in the Project Explorer!

Normally, if your file contains an error, you will see error markers in several places, including in the Project Explorer. Those so-called **label decorators** can be either a red square with a white cross for errors, or a yellow triangle with an exclamation mark for warnings. Sigasi puts the decorators on the file that contains an error and all of its ancestors (the folder that contains the file, and the folder that contains that folder, all the way up to the project.

Sigasi also puts the name of the library next to each HDL file and folder that is mapped to that library. In order to map files to a library, right-click on a HDL or Verilog file, or folder and select **Set Library**.


If you cannot see the problem decorators or library decorators in the Project Explorer, there are two possible reasons:

* The file was not compiled as VHDL/Verilog file. To fix this try:
	* Check that your file is saved
	* Make sure your project is being built: **Project > Build Automatically**
	* Check that the project has VHDL or Verilog support: Right-click on the project **Configure > Add VHDL Support** [more info][/manual/projectsetup#adding-vhdl-or-verilog-support-to-an-existing-eclipse-project].
	* Is the Eclipse builder enabled for your project? You can check this by right-clicking your project in the Project explorer and selecting **Properties > Builders**. The **Xtext Project Builder** must be enabled. If not, exit the property page. Next, right-click on the project **Configure > remove VHDL Support**, and right-click again **Configure > Add VHDL Support**.

* The decorators are disabled. To fix this, enable:
	* **Window > Preferences > General > Appearance > Label Decorations > Sigasi Problem Decorator**
	* **Window > Preferences > General > Appearance > Label Decorations > Library Decorator**

##  I get lots of errors in files that are not even really a part of my project. Can I hide them? {: #junk-files}

Legacy projects tend to accumulate files that are no longer needed in the projects. These files are still on your disk, or even in your revision control system, but the scripts don't feed them to the simulator or to the synthesis tools any more. These junk files can accumulate over time.

The recommended approach is to remove these junk files. If you are using a revision control system, you can always go back, so there is no risk to removing stale files. However, if there is a good reason to keep junk files in the project folder, you can excluded them from all libraries: Right-click the files and select **Set Library > Exclude from build**.

## What is a MAC address and how can I find it?

Sigasi node-locked licenses are locked to the unique MAC address (NIC address) of your computer's network interface. An example of a MAC address is: `00:1c:42:00:00:09`.

Floating licenses also require a MAC address, but this needs to be the MAC address of the license server. Ask your system administrator.
Since Sigasi 2.24, you can find your MAC address, in the license dialog of the Sigasi tool. Start the tool and click *Help > Sigasi > Configure License...*

## The internal web browser does not work on Linux

Sigasi uses your system's native browser to display html content.
When Sigasi's default settings do not work on your Linux system, try the following:

1. Make sure the `webkitgtk` package is installed (`dnf install webkitgtk`)
2. Replace `-Dorg.eclipse.swt.browser.DefaultType=mozilla` with `-Dorg.eclipse.swt.browser.UseWebKitGTK=true` in your sigasi.ini
3. On preference page `General > Web Browser`, select **Use internal web browser**

[Complete info on Eclipse website](https://www.eclipse.org/swt/faq.php#browserplatforms)

## Where can I find the log file?
Sigasi logs all internal errors to a log file. You can find this file in: `workspaceSigasi/.metadata/.log` This file is also reachable in Sigasi Studio itself via **Help > Sigasi > Open log**

The log file contains no sensitive information about your organization. On some occasions, the Sigasi Team may suggest to send them the log file to debug or improve the product. However, the option to do so or not remains yours.

## Why is Sigasi trying to get through my firewall?
There can be a number of reasons why Sigasi connects to the internet. 

* Updates: Each time you start Sigasi, the program checks to see if there are new [/manual/setup#software-updates] from our update website (currently located at http://download.sigasi.com). Sigasi downloads the updates in the background and, when done, it asks you if it can install them.
* [Talkback](http://www.sigasi.com/sigasi-talkback) 
* Other Plugins: Obviously, other plugins can also connect to the internet. Some examples are plugins for revision control or issue tracking, or the built-in Eclipse web browser.

**Enhanced security**: Customers with strict security policies can contact us to discuss compliance with their policies.

## I have error markers in files that are not even mapped to a library?

Sometimes, unmapped files have error markers. This can happen if a compilation did not complete normally.
You can select these errors from the [/manual/views#problems] View and remove them by pressing **delete**. If you rebuild the project, no new error markers will be generated for the VHDL files that are not mapped to a library.

## Can I revert to an older version of Sigasi?

You can revert Sigasi to an older version with following procedure:

1. **Help > About Eclipse > Installation Details > Installation History**
2. Select the configuration you want to revert to
3. **Revert**

Alternatively, you can contact support for an older download location.

## Black text on black hovers is not readable on Ubuntu Linux

See : <http://devshards.blogspot.it/2012/10/how-to-fix-unreadable-eclipse-tooltips.html>

## Sigasi/Eclipse hangs on startup

If Sigasi/Eclipse hangs while the splash screen is shown during startup, you can try this to resolve the issue:

* First try to disable the Workspace preference _refresh using native hooks or polling_. You can do this by setting the contents of  `<workspaceSigasi>/.metadata/.plugins/org.eclipse.core.runtime/.settings/org.eclipse.core.resources.prefs` to:
```
eclipse.preferences.version=1
refresh.enabled=false
version=1
```

* In the workspace folder remove: `<workspaceSigasi>/.metadata/.plugins/org.eclipse.ui.workbench`
* If this is not enough, also remove `<workspaceSigasi>/.metadata/.plugins/org.eclipse.ui.ide` and `<workspaceSigasi>/org.eclipse.ui.workbench.texteditor`
* If this still fails remove `<workspaceSigasi>/.metadata/.plugins/org.eclipse.core.resources`, note that you will have to re-import your projects if remove this folder.

# Other tools

## Do you have an UltraEdit emulation mode so that I can use the UltraEdit key bindings?
You can add a plugin with the UltraEdit key bindings.

1. Install the [ultra-edit-keybindings-plugin]
2. After installing, you should activate the UltraEdtit keybindings in **Window > Preferences > General > Keys**. 
Then as Scheme, select "UltraEdit".

## I really like VI / VIM / gVIM. Do you have a VI emulation mode?

If you use Sigasi HDT as a plugin (meaning: not the standalone version), you can add a VI emulator plugin, called [vrapper]. Surely not the same as a genuine VI clone, but it will give you a warm and familiar feeling when you type `:q!`.

## Do you have an Emacs emulation mode so that I can use the Emacs key bindings? {: #Emacs}
All Eclipse products, including Sigasi HDT, can be configured to support [emacs-keybindings]. While it is not the same as Emacs, you can keep your habit of pressing *CTRL-C* and *CTRL-X* all the time.

## Which free VHDL simulator can I use?

Sigasi does not offer simulators. If you don't have a VHDL simulator yet, we would recommend the following simulators. You can download them free of charge.

| Simulator	                        | Comment            | Download from                                 | Windows | Linux | Mac OSX |
| --------------------------------- | ------------------ | --------------------------------------------- | ------- | ----- | ------- |
| Aldec Lattice Edition	            | Only Lattice FPGAs | [Lattice Download page][latic_download]	     | Yes     | No    | No      |
| Aldec Active-HDL, Student Edition | Students only      | [Aldec Download page][aldec_download]         | Yes     | No    | No      |
| ModelSim Altera Starter Edition   | Only Altera FPGAs  | [Altera Quartus Web Edition][altera_download] | Yes     | Yes   | No      |
| ISim	                            | Only Xilinx FPGAs  | [Xilinx Webpack][xilinx_download]             | Yes     | Yes   | No      |

[latic_download]: http://www.latticesemi.com/licensing/flexlmlicense.cfm?p=diamond
[aldec_download]: http://www.aldec.com/Downloads/default.aspx
[altera_download]: http://www.altera.com/products/software/quartus-ii/web-edition/qts-we-index.html
[xilinx_download]: http://www.xilinx.com/products/design-tools/ise-design-suite/ise-webpack.htm

At this time, Sigasi does not support [Simili](http://www.symphonyeda.com/products.htm) or [GHDL](http://ghdl.free.fr/). Note that [GHDL on Mac OSX](http://eng-osx.sourceforge.net/GHDL.html) uses Wine, but works without problems.
We have not had good results with FreeHDL or with Green Mountain VHDL. It seems that these two projects may have been terminated.

You need a VHDL editor too

After you choose your simulator, you need a VHDL editor too. Sigasi has a [free starter edition](http://www.sigasi.com/sigasi-starter-edition) of its popular VHDL development environment.
