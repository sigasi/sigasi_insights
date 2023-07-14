---
title: Third Party Plugins
showinmenu: true
weight: 16
pager: true
aliases:
  - /manual/plugins/
---

Since Sigasi Studio is built on Eclipse, you can install third-party Eclipse plugins.

The best place to start looking for a plugin is the [Eclipse Marketplace](https://marketplace.eclipse.org). We list some interesting
plugins here. Since these are third-party plugins, there is no official
support from Sigasi.

## Installing Plugins

Unlike most Eclipse distributions Sigasi Studio is shipped without the *Eclipse Marketplace* plugin and the standard Eclipse update sites.
Hence, you have to add a plugin update site to install new plugins.

* Adding the update site
  * First, find the *update site* for the plugin you want to install. For example: for the Mercurial plugin, the update site is <https://foss.heptapod.net/mercurial/mercurialeclipse-updatesite/-/raw/branch/default/p2>
  * Click **Help > Install New Software** Now click **Add** and fill out the update site. Press **OK** to confirm.
* Installing
  * Still in the *Install* dialog, search for the plugin you want to install. You can browse the list of available plugins or use the filter text above the list of plugins.
  * Select the checkbox for the plugin and click **Next**
  * Follow the instructions for the rest of the wizard.

## Revision Control Systems

Sigasi Studio supports a wide range of [Revision Control
Systems](https://en.wikipedia.org/wiki/Revision_control) (also known as
Version Control or Source Control systems). Support for revision control
is based on Eclipse plugins. This section contains a preliminary listing
of the most popular revision control systems.

### GIT

Recommended plugin: [EGit](https://www.eclipse.org/egit/)
This plugin is shipped with the standalone version of Sigasi Studio.

### Subversion (SVN)

For Subversion we recommend the [Subclipse](https://marketplace.eclipse.org/content/subclipse) plugin.

To install this plugin, perform these steps in the **Help > Install New Software...** window:

* Add <https://subclipse.github.io/updates/> to the **Work with:** line. This will provide the latest version of Subclipse.
* Then search for _Subclipse_ and proceed with the installation.

To install older versions of Subclipse or if you need more information on Subclipse, you can refer to the documentation on <https://github.com/subclipse/subclipse/wiki>.

Note that we no longer recommend the [Subversive](https://www.eclipse.org/subversive/) plugin since it is only available up to Eclipse oxygen.

### ClearCase

Recommended plugin:
[ClearCase](https://sourceforge.net/projects/eclipse-ccase/)
(Update site: <http://eclipse-ccase.sourceforge.net/update/>)

Note that this is the **Open Source ClearCase plugin** hosted on
SourceForge, not the **official** [ClearCase plugin distributed by IBM](https://www.ibm.com/support/pages/node/306535).

### Local History

While this is not strictly speaking a version control system, Sigasi Studio has
a built-in feature that keeps a local history of your files.
[Learn more](https://help.eclipse.org/latest/index.jsp?topic=%2Forg.eclipse.platform.doc.user%2Ftasks%2Ftasks-1f.htm&cp%3D0_3_9).

### Other Systems

Some other popular revision control systems include:

1. CVS [learn more](https://www.eclipse.org/eclipse/platform-cvs/).
2. Mercurial (Hg) [learn
   more](https://foss.heptapod.net/mercurial/mercurialeclipse/-/wikis/home).
3. Perforce [learn
   more](https://www.perforce.com/product/components/eclipse_plugin).

## VI and Emacs

* VI: <http://vrapper.sourceforge.net/home/>
* Emacs: <https://marketplace.eclipse.org/content/more-emacs>

## Other Languages

* Tcl: see the [Eclipse Tcl support in Sigasi Studio]({{< ref "/tech/eclipse_tcl_support_in_sigasi.md" >}}) tech article.
* Python: You can add support for Python to Sigasi Studio by installing the [PyDev](https://marketplace.eclipse.org/content/pydev-python-ide-eclipse) Eclipse plugin.
Use <https://www.pydev.org/updates> as update site.

## Remote Collaboration

* You can use the [Saros](https://marketplace.eclipse.org/content/saros-distributed-collaborative-editing-and-pair-programming) plugin to remotely collaborate on the same project with multiple people. You'll see edits from collaborators in your own editor as they happen. To install the Saros plugin in Sigasi Studio, use <https://www.saros-project.org/update-site/eclipse> as update site.

## Opening to a Shell

* If you want a quick way to open files and folders from the [Project Explorer]({{< ref "/manual/eclipse/views.md#project-explorer-view" >}}) in a terminal, [EasyShell](https://marketplace.eclipse.org/content/easyshell) is a useful plugin.
