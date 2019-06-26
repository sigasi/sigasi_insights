---
title: "The magic of Sigasi's type-time compiler. Part 1: Models"
layout: page 
pager: true
author: Hendrik Eeckhaut
date: 2011-12-22
tags: 
  - hdt-2.0
  - Sigasi
comments: true
bannerad: true
---

*How does your Sigasi editor gather all **information** on your projects to enable features like navigation, outline, hovering, linting, refactorings ...? And how did they make it so *fast* that it works while you type? And how does Sigasi keeps its **memory** footprint under control?*

This blog post tries to shed some light on the apparent magic behind Sigasi 2.x. In this blog I explain Sigasi's *datastructures*. A follow-up blog will explain how these datastructures are built. This should make you understand what the messages in the progress view mean. This will help you better understand what is going on.

Sigasi builds a *Model* —an internal representation— of your project, and it updates and refines this Model while processing your VHDL files. The Model is a structured, high level representation of your VHDL code. It serves as input for all of Sigasi's features: Autocomplete, Open Declaration, Format ... Whenever you change your code, the Model changes too. And all individual features are notified of these changes.

The complete Model of large VHDL projects can be very large.  A rule of thumb for the size of the complete Model is to multiply the size of the original VHDL source by a factor of 60.  To keep memory usage under control, the Model is, at any time, only partially loaded in memory at any time.

Sigasi divides the Model in three layers of detail. A **Global Index** (for the entire work space), a **Meta Model** (for each file) and a **Text Model** (for each file):

* The **Global Index** contains the description of the globally visible VHDL objects such as entities and packages. This information is kept permanently in memory.
* The **Meta Model** is a high level Model of your parsed design files. It contains the description of your files represented as a tree of VHDL constructs (e.g., design units containing architectures containing concurrent statements ...).  
* The **Text Model** links the meta Model to the original VHDL text. This Model contains all the specifics of your code to lowest level of details (e.g. whitespace etc.).  

Sigasi loads only the required level of detail. If no files are open, Sigasi only loads the Global Index. When you edit a file, everything about that file is loaded. Sigasi also loads the Meta Model of the dependencies of that file. For instance, if a package in another file declares a data type and the file in your editor file refers to this data type, we also need the Meta Model of the file containing this package. The Meta Model provides information for features such as semantic highlighting and linting. If it is not strictly necessary to load the Meta Model for a given file, Sigasi only loads the Global Index, which is a much smaller data structure than the Meta Model.

Hendrik.

**Update:** Learn more in part 2 of this post: [The magic of Sigasi's type-time compiler. Part 2: Builder]({{< ref "understanding-sigasi-progress-bar" >}})