---
title: Use Case, Mixed Language VUnit Project
layout: page
pager: true
author: Ehab Younes
date: 2023-09-26
tags: 
  - how to
  - project management
  - project
  - best practices
comments: true
bannerad: true
---

In the [previous blog article]({{< ref "/tech/moving-sigasi-files-out-of-the-way.md" >}}), we showed how to configure the project description file to create flexible project setup. To illustrate the efficient use of linked resources in Sigasi Studio, let's walk through a scenario where we set up a project using only the project description file, while also utilizing virtual and linked resources for everything else, including library mapping and preferences.

## Step 1: Create a Simple Project

Begin by creating a new project in Sigasi Studio, following the guidelines mentioned in the Sigasi Insights Manual ([Eclipse]({{< ref "/manual/eclipse/projectsetup.md#creating-a-new-empty-project" >}})/[Visual Studio Code]({{< ref "/manual/vscode/projects.md#creating-a-new-empty-project">}})).

## Step 2: Configure Language Version and Library Mapping

1. Right-click on the project or the appropriate file to access its settings.
2. Configure the language version (VHDL/Verilog) according to your project's requirements.
3. Define the library mapping to ensure a [coherent structure]({{< ref "/tech/moving-sigasi-files-out-of-the-way.md" >}}).

You can also add the `.library_mapping.xml` and `.settings` as linked resources in the project root directory.

## Step 3: Add Linked Resources

Refer to the manual for [Eclipse]({{< ref "/manual/eclipse/projectsetup.md#3-add-any-files-that-are-in-other-directories" >}}) or [VS Code]({{< ref "manual/vscode/projects.md#linked-resources" >}}) for more details.

## Step 4: Using Variables for Optimal Paths

* While creating linked resources, be cautious about the paths they generate. In case you encounter absolute paths or suboptimal relative paths, consider using [variables]({{< ref "/tech/moving-sigasi-files-out-of-the-way.md" >}}) like `PROJECT_LOC`, `PARENT-<COUNT>-<VARIABLE>`, and others.
* To ensure flexibility when linking resources, use environmental variables and custom variables. This practice guarantees that your setup remains functional even if directory structures are adjusted, provided that relative paths or variables are updated accordingly.

For example, let's assume we are creating a mixed-language project that utilizes the `VUnit` library, with design and verification located in separate locations. We aim to establish the following project structure:

| Relative path in project | Location                         |
|--------------------------|----------------------------------|
| vhdl                     | /design/projects/vhdl-src/       |
| verilog                  | /design/projects/verilog-src/    |
| Common Libraries/vunit   | VUNIT environment variable      |
| documentation            | /design/Generated Documentation  |
| testbench                | /testbench                       |

While we can add each entry separately using the UI, it may generate absolute paths or suboptimal relative paths. Instead, we can define the custom variable `HDL_PROJECTS` to point to `/design/projects` ([Eclipse manual]({{< ref "/tech/how-avoid-absolute-library-paths-your-sigasi-project-files.md" >}})/[VS Code manual]({{< ref "/manual/vscode/projects.md#custom-project-variables" >}})/[Veresta manual]({{< ref "/manual/veresta" >}})).

Then, we can start defining each entry in the `<linkedResources>`:

```xml
<link>
    <name>vhdl</name>
    <type>2</type>
    <locationURI>HDL_PROJECTS/vhdl-src</locationURI>
</link>
```

```xml
<link>
    <name>verilog</name>
    <type>2</type>
    <locationURI>HDL_PROJECTS/verilog-src</locationURI>
</link>
```

If the `Common Libraries` are not defined, we can add them as a virtual folder:

```xml
<link>
    <name>Common Libraries</name>
    <type>2</type>
    <locationURI>virtual:/virtual</locationURI>
</link>
```

We place the VUnit library inside the `Common Libraries` so it's not compiled. Notice how we are using the environment variable `VUNIT` to link it:

```xml
<link>
    <name>Common Libraries/vunit</name>
    <type>2</type>
    <locationURI>ENV-VUNIT</locationURI>
</link>
```

We might also want to map this folder to the `vunit` library. To do that, we can add the following entry to the `.library_mapping.xml` file:

```xml
<Mappings Location="Common Libraries/vunit" Library="vunit"/>
```

For the `Generated Documentation`, we utilize two different variables, the custom `HDL_PROJECTS` variable along with the `PARENT-<COUNT>-<VARIABLE>` variable.

```xml
<link>
    <name>Generated Documentation</name>
    <type>2</type>
    <locationURI>PARENT-1-HDL_PROJECTS/Generated%20Documentation</locationURI>
</link>
```

Notice how the variable `PARENT-<COUNT>-<VARIABLE>` is highly versatile when combined with custom or environment variables.

Finally, we'll link `testbench` using an absolute path (for demonstrative purposes):

```xml
<link>
    <name>testbench</name>
    <type>2</type>
    <locationURI>file:///testbench</locationURI>
</link>
```

| VS Code | Eclipse |
|---|---|
{{< figure src="/img/tech/vscode_project_setup_use_case.png" alt="VS Code Project Structure" class="uk-align-center" width="270px" >}} | {{< figure src="/img/tech/eclipse_project_setup_use_case.png" alt="Eclipse Project Structure" class="uk-align-center" width="270px" >}}

This configuration is ideal for collaborative work in diverse team environments, spanning various operating systems or Sigasi products for Eclipse, VS Code, or Veresta. Moving the project to a different location would only require updating the custom variable `HDL_PROJECTS` to point to the new location. Additionally, updating the VUnit installation would only require updating a single environment variable to point to the correct installation.

Here is what the full `.project` looks like:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<projectDescription>
 <name>VUnit Mixed Project</name>
    <comment></comment>
    <projects>
    </projects>
    <buildSpec>
        <buildCommand>
            <name>org.eclipse.xtext.ui.shared.xtextBuilder</name>
            <arguments>
            </arguments>
        </buildCommand>
    </buildSpec>
    <natures>
        <nature>com.sigasi.hdt.verilog.ui.verilogNature</nature>
        <nature>com.sigasi.hdt.vhdl.ui.vhdlNature</nature>
        <nature>org.eclipse.xtext.ui.shared.xtextNature</nature>
    </natures>
    <linkedResources>
        <link>
            <name>Common Libraries</name>
            <type>2</type>
            <locationURI>virtual:/virtual</locationURI>
        </link>
        <link>
            <name>Common Libraries/IEEE</name>
            <type>2</type>
            <locationURI>sigasiresource:/vhdl/2008/IEEE</locationURI>
        </link>
        <link>
            <name>Common Libraries/IEEE Synopsys</name>
            <type>2</type>
            <locationURI>sigasiresource:/vhdl/2008/IEEE%20Synopsys</locationURI>
        </link>
        <link>
            <name>Common Libraries/STD</name>
            <type>2</type>
            <locationURI>sigasiresource:/vhdl/2008/STD</locationURI>
        </link>
        <link>
            <name>vhdl</name>
            <type>2</type>
            <locationURI>HDL_PROJECTS/vhdl-src</locationURI>
        </link>
        <link>
            <name>verilog</name>
            <type>2</type>
            <locationURI>HDL_PROJECTS/verilog-src</locationURI>
        </link>
        <link>
            <name>Common Libraries/vunit</name>
            <type>2</type>
            <locationURI>ENV-VUNIT</locationURI>
        </link>
        <link>
            <name>Generated Documentation</name>
            <type>2</type>
            <locationURI>PARENT-1-HDL_PROJECTS/Generated%20Documentation</locationURI>
        </link>
        <link>
            <name>testbench</name>
            <type>2</type>
            <locationURI>file:///testbench</locationURI>
        </link>
    </linkedResources>
</projectDescription>
```

The `sigasiresource` for `IEEE`/`IEEE Synopsys`/`STD` are linked by default when creating a VHDL project or adding VHDL support to a Verilog project. They are linked to VHDL's 2008 libraries since that is the project's version (supported versions are *93*, *2008*, and *2019*). If you change the project version, the links for `Common Libraries/IEEE`, `Common Libraries/IEEE Synopsys`, and `Common Libraries/STD` will be updated automatically.

The `.library_mapping.xml` file would look something like this:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<com.sigasi.hdt.shared.librarymapping.model:LibraryMappings xmlns:com.sigasi.hdt.shared.librarymapping.model="com.sigasi.hdt.vhdl.scoping.librarymapping" Version="2">
    <Mappings Location="Common Libraries/IEEE" Library="ieee"/>
    <Mappings Location="Common Libraries/IEEE Synopsys" Library="ieee"/>
    <Mappings Location="Common Libraries" Library="not mapped"/>
    <Mappings Location="Common Libraries/STD" Library="std"/>
    <Mappings Location="Common Libraries/vunit" Library="vunit"/>
    <Mappings Location="" Library="work"/>
</com.sigasi.hdt.shared.librarymapping.model:LibraryMappings>
```

This is the generated file by default for VHDL projects with the addition of the `vunit` mapping.
