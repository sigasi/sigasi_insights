---
title: Third party plugins
layout: page 
pager: true
---

Since Sigasi is built on Eclipse, you can install third party Eclipse
plugins.

The best place to start looking for a plugin is the [eclipse-marketplace]. We list some interesting
plugins here. Since these are third party plugins, there is no official
support from Sigasi.

## Installing plugins

Unlike most Eclipse distributions Sigasi Studio is shipped without the *Eclipse Marketplace* plugin, and without the standard Eclipse update sites.
Hence, you have to use the old mechanism for installing new plugins, and add the plugin update site. 

* Adding the update site
    * First, find the *update site* for the plugin you want to install. For example: for the Mercurial plugin, the update site is <http://eclipse-ccase.sourceforge.net/update/>
    * Click **Help > Install New Software** Now click **Add** and fill out the update site. Press **OK** to confirm.
* Installing
    * Still in the *Install* dialog, search for the plugin you want to install. You can browse the list of available plugins or use the filter text above the list of plugins.
    * Select the checkbox for the plugin and click **Next**
    * Follow the instructions for the rest of the wizard.

## Revision Control Systems

Sigasi supports a wide range of [Revision Control
Systems](http://en.wikipedia.org/wiki/Revision_control) (also know as
Version Control or Source Control systems). Support for revision control
is based on Eclipse plugins. This section contains a preliminary listing
of the most popular revision control systems.

### GIT {: #revision-git}

Recommended plugin: [EGit](http://www.eclipse.org/egit/)
This plugin is shipped with the standalone version of Sigasi.

### Subversion (SVN) {: #revision-svn}

Recommended plugin: [Subversive](http://www.eclipse.org/subversive/) ([Installation instructions](https://www.eclipse.org/subversive/installation-instructions.php))

As **update site**, you should use: <http://download.eclipse.org/releases/mars/>


### ClearCase {: #revision-clearcase}

Recommended plugin:
[ClearCase](http://sourceforge.net/apps/mediawiki/eclipse-ccase/index.php?title=Main_Page)
(Update site: http://eclipse-ccase.sourceforge.net/update/ )

Note that this is the **Open Source ClearCase plugin** hosted on
SourceForge, not the [**official** ClearCase plugin distributed by
IBM](http://www.ibm.com/developerworks/rational/downloads/07/cc_eclipse3_2/clearcase_plugins.html)
.

[Learn more about
ClearCase](http://www.ibm.com/developerworks/rational/downloads/07/cc_eclipse3_2/clearcase_plugins.html).

### Local history {: #revision-local}

While this is not strictly speaking a version control system, Sigasi has
a built-in feature that keeps a local history of your files. 
[Learn
more.](http://help.eclipse.org/helios/index.jsp?topic=%2Forg.eclipse.platform.doc.user%2FgettingStarted%2Fqs-55.htm)

### Other systems

Some other popular revision control systems include:

1.  CVS [learn more](http://www.eclipse.org/eclipse/platform-cvs/).
2.  Mercurial (Hg) [learn
    more](http://marketplace.eclipse.org/content/mercurialeclipse-was-hgeclipse).
3.  Perforce [learn
    more](http://www.perforce.com/product/components/eclipse_plugin).

## VI and Emacs

+ VI: <http://vrapper.sourceforge.net/home/>
+ Emacs: <http://marketplace.eclipse.org/content/emacs>

## Other languages

* [/tech/eclipse_tcl_support_in_sigasi]