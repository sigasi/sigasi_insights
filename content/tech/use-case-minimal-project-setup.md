---
title: "Use Case: Minimal Project Setup"
layout: page
pager: true
author: Titouan Vervack
date: 2023-10-31
tags:
  - how to
  - project management
  - project
  - best practices
comments: true
bannerad: true
---

In a [previous blog article]({{< ref "/tech/moving-sigasi-files-out-of-the-way.md" >}}), we showed how to configure the project description file to create a flexible project setup. We also [showcased]({{< ref "/tech/use-case-mixed-language-vunit-project.md" >}}) how this can be used to integrate common components - such as VUnit - into your project.

We've encountered situations before where clients use [Sigasi Studio](https://www.sigasi.com/download/) or our [SDK](https://www.sigasi.com/sdk/), but want to add as few files as possible to their workspace. There are many potential reasons why this might be the case: strict security or tooling policies, testing out a new tool, stealthily integrating Sigasi into your product, wanting to keep your root folder clean, etc.  

Sigasi is flexible in its configuration. We **don't create lock-in** with vendor-specific configurations. Instead we provide a quality productivity tool and let you decide whether you'd ever like to switch.

# .project-only setup

A regular Sigasi project consists of the following files and folders (next to your source and other configuration files).

* `.project`
* `.library_mapping.xml`
* `.settings`

Only the `.project` file is actually _required_. If the others are missing, Sigasi internally stubs them. You can, however, also use _linked resources_, introduced in the aforementioned blog, to make these files available without being physically part of your project.

To do so, start out with the following [barebones physical project](/resources/tech/minimal-project-setup/dot-project-only-initial.zip).

```text
dot-project-only
├── settings
└── src
```

Importing it into Sigasi ([Eclipse]({{< ref "/manual/eclipse/projectsetup.md#importing-a-project-from-the-file-system" >}})/[VS Code]({{< ref "/manual/vscode/projects.md#importing-a-project-from-the-file-system" >}})) will add the above Sigasi configuration files, giving you the following:

```text
dot-project-only
├── .library_mapping.xml
├── .project
├── .settings
├── settings
└── src
```

Map the `src` folder to the `src` library ([Eclipse]({{< ref "/manual/eclipse/libraries.md#modifying-the-library-configuration" >}})/[VS Code]({{< ref "/manual/vscode/projects.md#library-configuration" >}})), as this will come in handy later to demonstrate that the project configuration is still correctly recognized by Sigasi.

Next, move the `.settings` and `.library_mapping.xml` into the `settings` folder. Note that we're using this folder for demonstrative purposes, you could use any folder (even one _outside of your project_).

```text
dot-project-only
├── .project
├── settings
│   ├── .library_mapping.xml
│   └── .settings
└── src
```

To make sure Sigasi still picks up the two configuration files, we create linked resources targeting them ([Eclipse]({{< ref "/manual/eclipse/projectsetup#linked-resources" >}})/[VS Code]({{< ref "/manual/vscode/projects.md#linked-resources" >}})). The physical file tree will look identical, but in Sigasi Studio you'll see the linked resources with their iconic icons. You'll also see that the `src` folder is still mapped to the `src` library signifying that the linked configuration files are picked up correctly by Sigasi.

{{< figure src="/img/tech/minimal-project-setup/DotProjectOnly.png" link="/img/tech/minimal-project-setup/DotProjectOnly.png" title="Only a .project file left" >}}

This all works because you'll have automatically augmented the `.project` file with the following code.

```xml
<linkedResources>
    <link>
        <name>.library_mapping.xml</name>
        <type>1</type>
        <locationURI>PROJECT_LOC/settings/.library_mapping.xml</locationURI>
    </link>
    <link>
        <name>.settings</name>
        <type>2</type>
        <locationURI>PROJECT_LOC/settings/.settings</locationURI>
    </link>
</linkedResources>
```

You'll have successfully created a fully-featured [Sigasi project](/resources/tech/minimal-project-setup/dot-project-only-final.zip) that has **only one Sigasi-specific configuration file** (in the root folder).

# Zero-file project setup

Using a similar strategy, you can also configure a project that **doesn't contain any Sigasi-specific configuration files**. The trick is to make a new directory that contains your `.project` and then create linked resources to everything within the original project.

Create a new [Sigasi project](/resources/tech/minimal-project-setup/minimal-project-initial.zip) called `minimal-project-setup` that contains the three Sigasi configuration files. We're using a similar project, `original-project`, as before, to represent the project we want to use in Sigasi Studio.

```text
├── original-project
│   ├── settings
│   └── src
└── minimal-project-setup
    ├── .library_mapping.xml
    ├── .project
    └── .settings
```

Now we create linked folders in the `minimal-project-setup` that link to the `settings` and `src` folder from `original-project` ([Eclipse]({{< ref "/manual/eclipse/projectsetup#linked-resources" >}})/[VS Code]({{< ref "/manual/vscode/projects.md#linked-resources" >}})). The physical project tree remains identical and there are no visible changes in `original-project`. However, in Sigasi Studio we can see the two linked folders.

{{< figure src="/img/tech/minimal-project-setup/MinimalProject.png" link="/img/tech/minimal-project-setup/MinimalProject.png" title="No Sigasi project files in the original project" >}}

The following lines will have automatically augmented the `.project` in `minimal-project-setup`.

```xml
<linkedResources>
    <link>
        <name>settings</name>
        <type>2</type>
        <locationURI>PARENT-1-PROJECT_LOC/original-project/settings</locationURI>
    </link>
    <link>
        <name>src</name>
        <type>2</type>
        <locationURI>PARENT-1-PROJECT_LOC/original-project/src</locationURI>
    </link>
</linkedResources>
```

You'll have created a fully-featured [Sigasi project](/resources/tech/minimal-project-setup/minimal-project-final.zip) that has **no Sigasi-specific configuration files** in the original project.

# Conclusion

_Linked resources_ are powerful tools that allow you to perfectly set up your project. Whether you want a Sigasi project that links in shared libraries and IP cores, to keep your root folder clean when adopting yet another tool, or to use Sigasi without touching your project sources, it's all within the realm of possibilities.
