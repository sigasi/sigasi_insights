---
title: Third party plugins
weight: 14
pager: true
---

Since Sigasi Studio is built on Eclipse, you can install third party Eclipse
plugins.

The best place to start looking for a plugin is the [Eclipse Marketplace](http://marketplace.eclipse.org). We list some interesting
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

Sigasi Studio supports a wide range of [Revision Control
Systems](http://en.wikipedia.org/wiki/Revision_control) (also know as
Version Control or Source Control systems). Support for revision control
is based on Eclipse plugins. This section contains a preliminary listing
of the most popular revision control systems.

### GIT

Recommended plugin: [EGit](http://www.eclipse.org/egit/)
This plugin is shipped with the standalone version of Sigasi Studio.

### Subversion (SVN)

There are 2 alternatives.

#### Subversive

The [Subversive](http://www.eclipse.org/subversive/) plugin ([Installation instructions](https://www.eclipse.org/subversive/installation-instructions.php)) is only available up to Eclipse oxygen.
As **update site**, you should use: <http://download.eclipse.org/releases/oxygen/>.

#### Subclipse

To install the [Subclipse](https://marketplace.eclipse.org/content/subclipse) plugin, perform these steps in the **Help > Install New Software...** window:

* Add <https://download.eclipse.org/releases/2018-09/> (or the appropriate link for the Eclipse version the [release](/releasenotes) of Sigasi Studio is build on) to the **Work with:** line.
* Add <https://dl.bintray.com/subclipse/releases/subclipse/latest/> to the same line (as documented on <https://github.com/subclipse/subclipse/wiki>).
* Then search for subclipse and proceed with the installation. 

### ClearCase

Recommended plugin:
[ClearCase](https://sourceforge.net/projects/eclipse-ccase/)
(Update site: <http://eclipse-ccase.sourceforge.net/update/>)

Note that this is the **Open Source ClearCase plugin** hosted on
SourceForge, not the [**official** ClearCase plugin distributed by
IBM](http://www.ibm.com/developerworks/rational/downloads/07/cc_eclipse3_2/clearcase_plugins.html)
.

[Learn more about
ClearCase](http://www.ibm.com/developerworks/rational/downloads/07/cc_eclipse3_2/clearcase_plugins.html).

### Local history

While this is not strictly speaking a version control system, Sigasi Studio has
a built-in feature that keeps a local history of your files. 
[Learn more](https://help.eclipse.org/photon/topic/org.eclipse.platform.doc.user/tasks/tasks-1f.htm?cp=0_3_9).

### Other systems

Some other popular revision control systems include:

1.  CVS [learn more](http://www.eclipse.org/eclipse/platform-cvs/).
2.  Mercurial (Hg) [learn
    more](http://marketplace.eclipse.org/content/mercurialeclipse-was-hgeclipse).
3.  Perforce [learn
    more](http://www.perforce.com/product/components/eclipse_plugin).

## VI and Emacs

+ VI: <http://vrapper.sourceforge.net/home/>
+ Emacs: <http://marketplace.eclipse.org/content/more-emacs>

## Other languages

* [Eclipse Tcl support in Sigasi Studio](/tech/eclipse_tcl_support_in_sigasi.html)

## Opening to a shell

If you want a quick way to open files and folders from the [Project Explorer](/manual/views#project-explorer-view) in a terminal, [EasyShell](https://marketplace.eclipse.org/content/easyshell) is a useful plugin.
