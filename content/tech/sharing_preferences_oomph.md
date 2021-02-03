---
title: Managing and sharing preferences for teams, revisited
layout: page
pager: true 
date : 2021-02-23
comments: true
bannerad: true
author: Wim Meeus
---


A common problem in larger teams is how to **share Sigasi
preferences** (configuration) **in design teams** or between
workspaces. This article revisits and updates an earlier [article]({{<
ref "sharing_preferences" >}}) from 2015. New tools are created, old
ones get replaced - hello 2021!

A large number of preferences control the behaviour of Sigasi Studio.
While some of them are entirely up to individual taste (e.g. the IDE
*theme*), **other preferences should be set the same for all team
members to ensure smooth teamwork**. For example:

* Auto-complete **templates** as well as **validation / linting**
  settings should reflect the **team's coding style**.
* **Indentation and formatting** options should be the same; if not,
  reformatting a file could add unneeded whitespace changes or cause
  other unnecessary merge conflicts in **revision control**.
* All team members need the (floating) **license configuration** for
  Sigasi Studio to work.

Two main groups of preferences exist: **workspace** preferences and
**project** preferences. Sigasi Studio (and the underlying Eclipse
platform) does not have one single configuration file. Preferences are
stored in several files and directories.

**Project** preferences are the easiest to
handle. Sigasi Studio (and Eclipse) keep project preferences in the
project directory, in files `.project` and `.library_mapping.xml` and
directory `.settings`. It suffices to store these with the project in
version control for the whole team to share them.

**Workspace preferences** are a different story. These settings are
kept in the workspace directory, together with caches of Sigasi's
background processes. Storing workspaces and workspace settings in
version control is not recommended. A number of useful options exist
for storing and sharing workspace preferences. Depending on your
team's particular needs and level of experience, one may be more
suitable than the other.

**Small teams** may choose to use a [preferences file]({{< ref
  "sharing_preferences/#option-1-corporate-wiki-and-exporting-preferences"
  >}}). The team keeps a preferences file (`.epf`) on an (internal)
  website. Team members import the preferences from a URL, e.g. a team
  website or wiki. This approach is quick and easy to implement.

**Large teams** may want to use [Oomph]({{< ref "/manual/custom-setup"
>}}) to share workspace settings. Oomph is the Eclipse installer. It
can be configured to **create customized Eclipse installations with
Sigasi Studio** and other plugins for e.g. your version control system
and additional programming languages. Preferences can be configured,
and projects can be checked out as part of the Eclipse setup.  The
[Sigasi manual]({{< ref "/manual/custom-setup" >}}) contains some
examples of how to customize Oomph for your environment. As setting up
Oomph from scratch is not straightforward, we recommend to use these
examples as a basis for your customization.

