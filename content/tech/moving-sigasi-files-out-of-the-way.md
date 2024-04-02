---
title: Moving Sigasi Files Out of the Way
layout: page
pager: true
author: Ehab Younes
date: 2023-09-25
tags: 
  - how to
  - project management
  - project
  - best practices
comments: true
bannerad: true
---

Sigasi Studio offers a range of powerful features that significantly enhance your coding experience. However, to unlock its full potential, it's crucial to configure your projects properly. In this guide, we'll present ways to create a streamlined project setup that keeps your Sigasi configuration files neatly organized and separated from your source code.

# Project Description

At the heart of every Sigasi project lies the project description file `.project`. This XML configuration file sits in your project's root directory and contains essential details such as the project's name and supported languages (VHDL/Verilog), as well as any linked or virtual resources.

Now, let's explore the minimal configuration required for a project to function correctly.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<projectDescription>
    <name>Example Project</name>
    <buildSpec>
        <buildCommand>
            <name>org.eclipse.xtext.ui.shared.xtextBuilder</name>
            <arguments></arguments>
        </buildCommand>
    </buildSpec>
    <natures>
        <nature>com.sigasi.hdt.verilog.ui.verilogNature</nature>
        <nature>com.sigasi.hdt.vhdl.ui.vhdlNature</nature>
        <nature>org.eclipse.xtext.ui.shared.xtextNature</nature>
    </natures>
    <linkedResources>
        <!-- Linked resource entries for common libraries -->
    </linkedResources>
</projectDescription>
```

Key areas to note:

* **Project name**: Specified in the upper most `<name>` tag.
* **Language natures**: Indicate the supported languages.
* **Linked resources**: Allow you to link resources and dependencies to the project.

## Language Natures

The project description contains information about supported languages:

* Verilog/SystemVerilog nature: `com.sigasi.hdt.verilog.ui.verilogNature`
* VHDL nature: `com.sigasi.hdt.vhdl.ui.vhdlNature`

Projects that use a language without its corresponding nature may experience incomplete or broken functionality. Therefore, when manually modifying the project description file, make sure to include the relevant language natures.

The minimal project configuration mentioned above is intended for a mixed-language project. Removing either the Verilog or VHDL nature would essentially convert it into a single-language project.

Please note that Eclipse uses the nature `org.eclipse.xtext.ui.shared.xtextNature` internally, so removing it could lead to unexpected behavior.

## Linked Resources: A Touch of Magic

The Sigasi ecosystem is built on top of Eclipse's. One benefit of this is the internal usage of the Eclipse File System (EFS) and support for virtual and linked resources, which are crucial for a flexible project setup. Therefore, we have ported the concept of virtual and linked resources linked resources into the Sigasi VS Code extension and Sigasi Veresta.

Linked and virtual resources allow you to link files and folders to a project without having to create symlinks or copy content. This is especially useful for Windows systems, where symlinks are not enabled by default, or for shared libraries.

The following illustrates how a linked resource entry is structured within the `linkedResources` tags:

```xml
<link>
    <name>src</name>
    <type>2</type>
    <locationURI>PARENT-2-PROJECT_LOC/myproject</locationURI>
</link>
```

In this example entry, the `src` directory at the project's root is linked to the specified relative location.

### What makes a linked resource?

A linked resource is defined by three key elements:

1. **Name**: This represents the decoded relative path from the project's root.
2. **Type**: Use '1' for files and '2' for folders.
3. **Location URI**: This denotes an encoded relative or absolute URI.

The location can be configured in various ways, depending on the project's structure or workspace setup. When using relative paths, the path can begin with a variable that is subsequently resolved.

Some predefined variables:
| Name                          | Description                                  |
|-------------------------------|----------------------------------------------|
| PROJECT_LOC                   | The PATH to your project                     |
| PARENT-\<COUNT>-\<VARIABLE>   | COUNT levels above the PATH of the VARIABLE |
| WORKSPACE_LOC                 | Workspace location (Eclipse only)            |
| ECLIPSE_HOME                  | Defined by Eclipse                           |
| PARENT_LOC                    | Defined by Eclipse                           |

For example, if your project is located in `/design/projects/project1`, then `PARENT-2-PROJECT_LOC/companylibrary` points to `/design/companylibrary`.

Bear in mind, only the first two variables are available in the Sigasi VS Code extension and Sigasi Veresta. Beyond these predefined variables, you can use [system environment variables prefixed with "ENV-"]({{< ref "/manual/vscode/projects.md#environment-variables" >}}). Custom variables shared across a workspace offer additional flexibility, which is particularly useful for teams using a mix of Eclipse/VS Code/Sigasi Veresta. This allows you to define the Eclipse variables in VS Code/Sigasi Veresta and maintain consistent configurations across the tools.

* [Eclipse custom variables]({{< ref "/tech/how-avoid-absolute-library-paths-your-sigasi-project-files.md" >}})
* [VS Code custom variables]({{< ref "/manual/vscode/projects.md#custom-project-variables" >}})
* [Sigasi Veresta custom variables]({{< ref "/manual/veresta#project-options" >}})

The location can actually be any valid URI, including absolute paths; however, this is not recommended, as absolute paths are [not portable]({{< ref "/tech/how-avoid-absolute-library-paths-your-sigasi-project-files.md" >}}), meaning that, when working in a team on the same project, it would require modification on every machine. If you do decide to use absolute paths, make sure they are valid (encoded) URIs. For example, if your library resides in `/design/custom library`, you would need to enter `file:///design/custom%20library`.

Another attribute that we have not yet discussed is `location`. It can be used in place of `locationURI`, but it can only reference a local file and needs to utilize the file path instead of its full URI.

For example, the following entries are equivalent:

| Location URI                           | Location (Path)                                |
|----------------------------------------|----------------------------------------------|
| file:///path/to/file                   | /path/to/file                                |
| file:///design/custom%20library        | /design/custom library                       |
| PARENT-2-PROJECT_LOC/companylibrary    | PARENT-2-PROJECT_LOC/companylibrary          |
| PARENT-2-PROJECT_LOC/company%20library | PARENT-2-PROJECT_LOC/company library         |
| virtual:/virtual                       | -- (Not supported)                           |

When manually editing linked resources, make sure to use the correct tag and (possibly) encode the URI. For example, the following two entries link to the same resource:

```xml
<link>
    <name>custom library</name>
    <type>2</type>
    <locationURI>file:///design/custom%20library</locationURI>
</link>
```

```xml
<link>
    <name>custom library</name>
    <type>2</type>
    <location>/design/custom library</location>
</link>
```

You can use either of these tags, but not both, for a linked resource.

### Virtual Resources: A Way to Structure Linked Resources

Virtual folders are another useful concept. These special folders are designed specifically for holding virtual or linked resources and are always identified by the location URI `virtual:/virtual`. Virtual folders can be especially helpful when you want to set up a structure of linked resources without creating any empty folders. Simply put, let's say you want to gather all your linked resources within `src/linked_resources`, but you don't want to clutter your `src` directory with empty folders. In that case, here's what you can do:

```xml
<link>
    <name>src/linked_resources</name>
    <type>2</type>
    <locationURI>virtual:/virtual</locationURI>
</link>
```

Now you’ll be able to see the `linked_resources` directory inside `src` in the Projects View, even though it does not exist on the file system. You can also link resources inside it:

```xml
<link>
    <name>src/linked_resources/some_linked_folder</name>
    <type>2</type>
    <locationURI>...</locationURI>
</link>
```

One common example of virtual and linked resources is the [`Common Libraries` folder]({{< ref "/manual/eclipse/libraries.md#common-libraries" >}}), which is created by default in VHDL projects. This is where reusable libraries go: whether vendor libraries, third-party IP libraries, or your own reusable libraries.

Still a bit confused about how to use virtual and linked resources? Check out our [use-case article]({{< ref "tech/use-case-mixed-language-vunit-project.md" >}}), which constructs an example project with flexible configurations.

# Library Mapping

Libraries can be used to add structure to a project. At the core of a project lies the `.library_mapping.xml` file, which contains mappings between project locations and library names. A basic `.library_mapping.xml` structure looks like this:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<com.sigasi.hdt.shared.librarymapping.model:LibraryMappings xmlns:com.sigasi.hdt.shared.librarymapping.model="com.sigasi.hdt.vhdl.scoping.librarymapping" Version="2">
    <Mappings Location="" Library="work"/>
</com.sigasi.hdt.shared.librarymapping.model:LibraryMappings>
```

In this example, the `<Mappings>` element specifies the location within the project and associates it with the `work` library. The empty string can be used to represent the project's root. This provides a straightforward way to ensure that all code in the project is considered part of the `work` library.

For VHDL projects, you can employ more elaborate mappings that correspond to the structure of your codebase. Consider the following example:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<com.sigasi.hdt.vhdl.scoping.librarymapping.model:LibraryMappings xmlns:com.sigasi.hdt.vhdl.scoping.librarymapping.model="com.sigasi.hdt.vhdl.scoping.librarymapping" Version="2" LastModified="2011-08-18T15:19:12.753+0200">
    <Mappings Location="" Library="work"/>
    <Mappings Location="Common Libraries" Library="not mapped"/>
    <Mappings Location="Common Libraries/STD" Library="std"/>
    <Mappings Location="Common Libraries/IEEE" Library="ieee"/>
    <Mappings Location="Common Libraries/IEEE Synopsys" Library="ieee"/>
</com.sigasi.hdt.vhdl.scoping.librarymapping.model:LibraryMappings>
```

In this example, the `<Mappings>` elements cover different locations within the project, such as `Common Libraries`, `Common Libraries/STD`, and so on. Each one is associated with a specific library name. This approach allows for more fine-grained control over library mapping, reflecting the organization of your VHDL modules.

The `Location` attribute corresponds to the decoded relative path from the project root, similar to the `name` tag in the project description. The `Library` attribute designates the library's name. Notably, *`not mapped`* signifies files excluded from compilation. Other processes, like linting, are not run on them.

One way to enhance your Sigasi experience is to exclude netlists, which can slow down the analysis, and duplicate declarations, as they can confuse Sigasi's analysis due to multiple paths for the same construct. Additionally, ensure that your common libraries are contained within the [“Common Libraries” folder]({{< ref "/manual/eclipse/libraries.md#common-libraries" >}}).

# Settings

Specific settings relevant to SystemVerilog/Verilog, VHDL, language versions, and lint rule preferences are located in the `.settings` directory within a project's root. A comprehensive exploration of these settings is beyond the scope of this article, but you can gain further insight from [the following link]({{< ref "/manual/eclipse/config.md" >}}).

# Conclusion

In conclusion, Sigasi Studio offers a range of powerful features to enhance your coding experience. To fully harness its potential, it's essential to configure your projects correctly. In this guide, we explored the key elements of project configuration, including the project description file (`.project`), language natures, linked resources, virtual resources, library mapping, and project settings. By following these best practices and organizing your Sigasi configuration files effectively, you can optimize your development workflow and make the most of Sigasi Studio's capabilities.
