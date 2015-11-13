---
title: FAQ
layout: faq 
pager: true
---

## I really like VI / VIM / gVIM. Do you have a VI emulation mode?

If you use Sigasi HDT as a plugin (meaning: not the standalone version), you can add a VI emulator plugin, called [vrapper]. Surely not the same as a genuine VI clone, but it will give you a warm and familiar feeling when you type *:q!*.

## Do you have an Emacs emulation mode so that I can use the Emacs k...
All Eclipse products, including Sigasi HDT, can be configured to support [emacs-keybindings]. While it is not the same as Emacs, you can keep your habit of pressing *CTRL-C* and *CTRL-X* all the time.

## I have error markers in files that are not even mapped to a library
Sometimes, unmapped files have error markers. This can happen if a compilation did not complete normally.
You can select these errors from the problems view and remove them by pressing delete. If you rebuild the project, no new error markers will be generated for the VHDL files that are not mapped to a library.

## What do you mean by "Type-Time"?
"At type-time" means "while you type". 
The Sigasi development environment checks your code at type-time. In other tools, your code gets checked only after you save all files and explicitly start a compiler, Sigasi has a type-time compiler. While you are typing, the Sigasi compiler checks your code and marks your errors.

Related terms include:

* Save-time: as soon as you save your file
* Elaboration-time: as soon as you set the top level of your design and
* Simulation-time (or run-time): during the simulation

## Do you have an UltraEdit emulation mode so that I can use the UltraEdit key bindings?
You can add a plugin with the UltraEdit key bindings.

1. Install the [ultra-edit-keybindings-plugin]
2. After installing, you should activate the UltraEdtit keybindings in *Window > Preferences > General > Keys*. 
Then as Scheme, select "UltraEdit".

## Why don't you have feature XYZ? How can I put in on your roadmap?
As any tech company, our stack of good ideas is far larger than the amount of time we have to work on them. We're grateful for any suggestions that users send us on the user forum and we often build new features based on your suggestions. However, we have to prioritize and maybe your favorite feature is not on our short-term roadmap.

Deciding which features is very complicated process. Some of the things that help are:

If your feature is useful for all users, not just for your specific case.
If your feature brings a lot of value to you and to other users. For example, a feature that saves you thirty seconds each month brings less value than something that saves you half a day each week.
If other users comment on your feature request on the forum, to tell us that they want your feature.
Obviously, we can also build custom features or add-ons on a project basis. Projects can several man-months or years, but also a feature in just a one or two days of engineering to. So feel free to talk to us about any feature, big or small.

## What kind of linting rules are possible?
The answer to this question is not straightforward. However, some examples may help. We can implement (but are in not limited to) the following types of custom linting rules:

* Naming conventions (e.g. constants should be in capitals, signals should start with “s”,…)
* Deprecated libraries, data types, constructs (e.g. don’t use block statements; don’t use std_logic_unsigned, …)
* Project structure, file names (e.g. an entity should be in a file named “_e.vhd”)
* Required file headers
* Maximum sizes of files, processes, …
* How to instantiate components / entities
* Unused signals, constants, …, dead code
* … and much more

We cannot implement overly complex or fuzzy requirements, like:

* Post-synthesis checks
* CDC checks
* Fuzzy requirements, like: “Entities should be sufficiently commented.” (How can an algorthm decide what is sufficient?)
 
If you get in touch with us, we will evaluate your coding rules to determine which rules we can implement.

## Can Sigasi replace my linter?
Depending on which features you use, it might.

But Sigasi Lint does not aim to replace your $ 100.000 power lint checker with CDC (clock domain crossing) checks. Instead, Sigasi Lint helps you get the coding conventions right first time around. In addition to style linting, Sigasi Lint can interface with your third party power linter tool (like Aldec ALINT), giving you feedback faster. Contact us to discuss your requirements.

## Does the Sigasi Pro built-in Linter replace my code reviews?
No.

The Sigasi Pro linting functionality is aimed to free up time wasted in code review meetings; time wasted on trivial things like naming conventions and deprecated data types. We hope you can use this time to discuss complex design decisions and computation algorithms which have an impact on the product you are design.

## How fast is the Sigasi linter?
Depending on your exact coding rule, the Sigasi Linter can flag violations either within seconds after you type (type-time linting) or after you save (save-time linting). Over 80% of common coding rules can be checked at type time.

## How can I change the font size?
See [/manual/config#Font Size].

## How can I organize my errors and warnings (problem markers) in the problems view?
Click the little triangle to the upper right-hand side of the problems view and look at the Group By and Sort By menu.

You can also filter which problem markers you will see in the Show menu; for example only errors and warnings for the current project.
![Problems View](/images/screenshots/organize_problem_markers.png "Problems View")

## How can I check a SHA sum?
The SHA1 sum (or hash) is a fingerprint of a file. After you download a file, you can check that it is downloaded correctly by calculating its SHA sum. If the SHA sum is correct, you can be sure that the download was correct too. On the Sigasi download page, you find the zip files that contain the actual Sigasi application, and also a small text file with the correct SHA sums .

* On Windows, you can compute the SHA using [sha-util].
* On Linux, you can use the command line tool sha1sum.

## Sigasi switches my keyboard layout! Did I find a bug?

This sometimes happens on Windows. You have probably triggered a keyboard shortcut that switches your keyboard lay-out.
Read Microsoft's documentation of the [language-bar].
If you only use your local keyboard lay-out and not the standard English lay-out, you might as well diable the language bar.

## What is a MAC address and how can I find it?

Sigasi node-locked licenses are locked to the unique MAC address (NIC address) of your computer's network interface. An example of a MAC address is: `00:1c:42:00:00:09`.

Floating licenses also require a MAC address, but this needs to be the MAC address of the license server. Ask your system administrator.
Since Sigasi 2.24, you can find your MAC address, in the license dialog of the Sigasi tool. Start the tool and click *Help > Sigasi > Configure License...*

## Which Sigasi files should I add to my Revision Control System?

Sigasi stores all project information in two files: `.project` and `.library_mapping.xml`, and one directory `.settings`. If you track these files you have everything you need.

* `.project` describes all generic information on your project: which files belong to your project, …
* `.library_mapping.xml` describes the mapping of your VHDL libraries.
* `.settings` (if it exists) is a directory that contains additional settings 

You can revert to older revisions of these files while Sigasi is running. Sigasi will update as soon as the files are refreshed.

## How can I make Sigasi generate spaces instead of TAB's?
See [tabs-and-spaces].

## I don't see error icons in the Project Explorer, or I don't see the library names in the Project Explorer!
[todo]

[See here](http://support.sigasi.com/Knowledgebase/Article/View/46/2/i-dont-see-error-icons-in-the-project-explorer-or-i-dont-see-the-library-names-in-the-project-explorer)

<!--
## "Remove" files form project, without deleting
Q: I get lots of errors in files that are not even really a part of my project. Can I hide them? 
A: Legacy projects tend to accumulate files that are no longer needed in the projects. These files are still on your disk, or even in yourrevision control...
-->


## Does Sigasi support multi-byte characters?
Yes, the Sigasi VHDL Eclipse editor supports all unicode characters, including Japanese characters. Note that the VHDL language does not allow any non-ASCII characters as identifiers, so you cannot use multi-byte characters in signal names.

## How can I avoid locking up a license when I'm working with Eclipse?
If you are using Eclipse for both VHDL and C development, you probably don't want to lock up a floating Sigasi VHDL license while you are working on C.
In order to use Eclipse without locking up a Sigasi license, you should close the VHDL perspective, close all VHDL projects and restart Eclipse.

## Sigasi keeps compiling everything while I am trying to configure ...
While you are configuring your libraries (mapping and unmapping files), the built-in compiler may trigger a full rebuild several times. In order to avoid this, and make Sigasi more responsive while you configure your libraries, you can _turn of auto...

## How can I hide files from the Project Explorer?
If the project explorer shows the hidden files in from your revision control system (.hg or .svn directory), or there are too many files from Altera Quatrus or Xilinx ISE that clutter the project explorer, you can hide those files from view:

Select the View Menu (small triangle pointing down) > Customize View > Filters. 

<!--Customize View screenshot-->

Now you can filter out hidden files (`.* resources`) or `All non VHDL Files`.

## Do you sell floating licenses?
We offer floating licenses, based on the well know FlexNet (a.k.a. FlexLM) license manager.
Floating licenses are available at a minimum volume of five licenses. The price is the same as for node-locked licenses.

If your team is purchasing at least five licenses, you will have the choice between node-locked and floating licenses.

If you currently have five node-locked licenses and you want to upgrade to floating licenses, please [contact-us].


## How can I change the default key bindings?
To change the key binding (keyboard shortcuts) within Eclipse: WINDOW > PREFERENCES and then GENERAL > KEYS.

<!-- 
## What is a Workspace?
When you first run Sigasi, it asks for a _workspace location_. This workspace will hold meta-information (preferences, project information,...) and serves as the default location for your projects.

## I typed an error in my VHDL code. Why doesn't Sigasi catch this?
Sigasi HDT does not attempt to check full correctness of your VHDL code. We just run a set of syntax checks and general "sanity checks". This way, 90% of the common errors are caught before you even start your simulator. As you design, you put your ...

## How do I increase the heap size for Eclipse/Sigasi?
We recommend to increase the default heap size settings of Eclipse [1]. You can do this by adding following lines to eclipse.ini [2] in your Eclipse installation folder (In the standalone Sigasi version, this is the sigasi.ini file): -VMARGS -XMX14...

## How can I update Sigasi?
If you run Sigasi as a standalone application, the automated update system will periodically check for updates. When updates are available, you are notified by a pop-up window called UPDATES AVAILABLE in the bottom right corner: If you want to insta...

## What are the system requirements?
STANDALONE Sigasi is supported on: * Windows 7 and Windows 8 (32 bit and 64 bit) or newer * Linux: * RedHat Enterprise Linux RHEL 6 (64 bit) or newer * Mac OS X Yosemite or newer However, it should work on most of the recent Linux distribut...

## Where can I find the log file?
Sigasi logs all internal errors to a log file. You can find this file in: workspace-sigasi/.metadata/.log This file is also reachable in Sigasi HDT itself via: HELP > SIGASI > OPEN LOG. The log file contains no sensitive information about your o...

## Why is Sigasi trying to get through my firewall?
There can be a number of reasons why Sigasi connects to the internet. UPDATES Each time you start Sigasi, the program checks to see if there are new updates from our update website (currently located at IP 195.144.71.15). Sigasi downloads the upda...

## Do you support block select (a.k.a. column editing mode)?
We have released support for block editing in Update 2009-07-17 [1]. Note that in many cases where you are used to using block editing (e.g. instantiating an entity [2]), you may not need it any more, thanks to intelligent code completion (see this ...

## What is this MouseFeed pop-up?
Many actions can be accessed using your mouse and using a keyboard shortcut, e.g. copying text can be done either by clickingEDIT > COPY or by pressing CTRL-C. Of course, pressing a key combination is a lot faster than clicking in a menu. [1] [...

## What if I ever want to get back to my old toolflow? Am I locked i...
If you ever want to get back to your old tools (but we hope you won't), you'll have absolutely no trouble doing so. All your files are just the way you left them, except that we created two hidden files in your project folder (.project and .libraries.x...

## How does Sigasi change my existing project?
You do not have to change your directory structure, the names of your VHDL files or anything in your project folder. The only thing Sigasi HDT does, is add a few hidden files with project information.

## Is the functionality in the Trial version reduced?
No, you get the "full monty." All features are available when you request an evaluation license [1]. Links: ------ [1] http://www.sigasi.com/request-evaluation-license

## How can I change settings?
Most settings can be changed in WINDOW > PREFERENCES. In this dialog, you can either browse the menus to the left, or search for an item in the search field in the top left. SETTINGS DIALOG

## How can I insert tabs in Block Selection Mode
With BLOCK SELECTION MODE, you can easily insert the same text on multiple lines. This works great for regular text and spaces, but not for TABS. When you press TAB the entire line will indent an extra level to the right (instead of inserting a tab charac...

## How to use Sigasi efficiently on multiple monitors/screens/deskto...
Sigasi/Eclipse supports full multiscreen support. The easiest method to organize Sigasi over multiple screens is to use one _window_ on each screen. You can open a new Window via WINDOW > NEW WINDOW Once have configured the windows and the views insid...

## Whole word textual search
In some situations you may not want Sigasi's VHDL aware search (FIND REFERENCES), but you want an old-fashioned TEXTUAL SEARCH instead. If you want textual search inside one file, you can use FIND (Ctrl-F). This dialog has an easy "Whole word" option. ...

## How to 'Quick Fix' multiple problems at the same time?
Quick Fixes are a realy useful Sigasi feature to resolve common problems. By default you apply a quickfix to one problem at a time. Although the procedure is not very elegant, there is a way to apply multiple Quick Fixes at the same time. Conditions: ...

## Can I use the features of the upcoming release?
For those users who want to get early access to the features and bugfixes of upcomming Sigasi releases, we have setup an extra release channel, called "SIGASI PREVIEW". The SIGASI PREVIEW release channel offers more frequent releases than the official re...

## Can I control the timing of the hovers/popups in Sigasi?

-->