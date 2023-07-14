---
title: "Cross project includes in SystemVerilog"
layout: page 
pager: true
author: Wim Meeus
date: 2020-10-06
tags: 
  - SystemVerilog
  - eclipse
  - Preprocessor
  - project
comments: true
bannerad: true
---

In this article, we discuss how in Sigasi Studio one can include a SystemVerilog file from a different project.
Splitting up large designs in different projects, e.g. [one project per IP block ](/tech/one-ip-block-project) and one
project for the top level, makes these projects easier to manage and fosters IP reuse. 

**Instantiating a sub-design** from a different project is easy to set
up.  Simply add the project with the sub-design as a *Project
Reference* to the top-level project (right-click on the project in the
Project Explorer, **Properties > Project References** and check the
projects to reference). Then, the sub-design can be instantiated in
the top-level design just as if it was in the top-level project.

**Include files** from a different project require a more complex
setup.  A complicating factor is the [distinction between a *path* and
a *location* in
Eclipse](https://wiki.eclipse.org/FAQ_What_is_the_difference_between_a_path_and_a_location%3F),
which makes the configuration rather challenging.

We suggest the following procedure to include files from other
projects in SystemVerilog. Files that are not in any project (e.g. a
reference library) can be included in the same way.

## 1. Organize include files in IP projects

In the **IP block project or sub-project**, organize **all include
files** that you want to include from outside the project **in a
separate folder**. If the project has include files in various places
(not just in one sub-tree), one can easily add a new includes folder
to the project (right-click on the project in the [Project
Explorer](/manual/eclipse/views/#project-explorer-view) and select **New >
Folder**) and drag-and-drop include files into it. A number of errors
will appear where these files are included. A [quick
fix](/manual/eclipse/linting/#quick-fixes) is available to add the new
includes directory to the include path.

{{< figure src="/img/tech/includes_organize.png" alt="Organize include files in the sub-project">}}

## 2. Virtual folder for external includes in the top level project

In the **top-level project**, add a **Virtual Folder** that will
hold links to all sub-project include folders.  In the Project
Explorer, right-click on the top-level project and select **New >
Folder > Advanced > Virtual Folder**, enter the folder name
(e.g. `external_include`) and click **Finish**. If you are including
files from only one other project, this step can be skipped.

{{< figure src="/img/tech/includes_vfolder.png" alt="Virtual folder for external includes">}}

## 3. Links to IP include folders in the top level project

In the virtual folder (or in the top-level project root, if step 2
was skipped), **create links to** the directories with **sub-project
include files**. The procedure is explained in the screenshots
below. Add a linked folder in the top-level `external_include` folder to each
sub-project's includes folder. It is recommended to use [variables in
the
path](/tech/how-avoid-absolute-library-paths-your-sigasi-project-files)
(step 4-5) to make the path configuration portable - so you can check
it into revision control for your colleagues to use.

{{< figure src="/img/tech/includes_linkfolder.png" alt="Linked folder to external includes">}}

## 4. Exclude IP files from compilation inside the top-level project

**If a linked folder contains design files** (extension `.v`,
`.sv`, `.vhd`, `.vhdl`), [exclude it from
compilation](/manual/libraries/#modifying-the-library-configuration)
in the library mapping. The design files should be compiled in their
own project. Include files are compiled in the context of the
including file, so excluding their directory from compilation doesn't
affect them.

{{< figure src="/img/tech/includes_exclude.png" alt="Exclude linked folder from build">}}

## 5. Set the include path of the top level project

As a last step, **add the virtual folder** to the **include path
preferences** of the top-level project. This can be done in the
project preferences.

{{< figure src="/img/tech/includes_path.png" alt="Set include path in project preferences">}}

A quick fix is also available to add a folder to the include path, as shown in the image below:

{{< figure src="/img/tech/includes_path_qfix.png" alt="Set include path using the quick fix">}}

The look of the include path configuration will be upgraded in Sigasi Studio 4.10, here's a preview.

{{< figure src="/img/tech/includes_path_preview.png" alt="Improved look of the include path preference, coming soon">}}

## Conclusion

At this point, Sigasi Studio should be able to find all include
files. The configuration obtained with this procedure can be checked
in to revision control and shared with colleagues - as long as they
use a similar workspace layout (e.g. place all related projects in a single
Sigasi Studio / Eclipse workspace).