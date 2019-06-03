---
title: "The magic of Sigasi's type-time compiler. Part 2: Builder"
layout: page 
pager: true
author: Hendrik Eeckhaut
date: 2011-12-23
tags: 
  - hdt-2.0
  - Xtext
comments: true
bannerad: true
---

In a previous post ([magic-sigasi-type-time-compiler]), I explained about the different Models (internal representations) that Sigasi builds to provide all the exciting Sigasi features. Today, I will explain the different phases of how these models are build. I also added screenshots of the progress view in the different phases. This should help you understand what is going on.

## Multiple pass builder

Sigasi builds the Model by iterating over all your VHDL files in multiple passes. During the *first pass* Sigasi parses each VHDL file separately. From the parse results Sigasi constructs a *Meta Model*. And from this *Meta Model* Sigasi derives the information that needs to be added to the *Global Index*. During a *second pass* each file is analyzed in more detail. This results in syntactical and semantic problem markers in your files. In a *third pass* each file is iterated once more to extract even more information.

**Note:** Sigasi uses the [Eclipse builder mechanism](http://www.eclipse.org/articles/Article-Builders/builders.html) to build the model. Make sure it is enabled (**Project > Build Automatically**), otherwise the Model will not be updated.

### First pass: Building the Global Index

During the first pass Sigasi parses each file and constructs a *Meta Model*. This Model is queried for globally visible VHDL objects and these are added to the *Global Index*.

![Phase 1 : Building the Global Index](/img/tech/phase1-global-index.png)

### Second pass: Validation

During the second pass the *Meta Model* of each file is analyzed in full detail. This is the most computational expensive pass. 
This pass validates the VHDL syntax and creates problem markers for each problem it encounters. It also resolves all *cross links*, i.e. it checks that all references point to a valid declaration. During this validation the *Global Index* is used to figure out declarations in other files of your project. Often the builder has to load *Meta Models* of other files to find the exact declaration.

The second pass also runs all validation (linting) checks. For example, all port maps are checked for completeness, all case statements are checked, etc. 

![Phase 2 : Validation](/img/tech/phase2-validation.png)

**Note:** Open editors can be affected by a build. For example, an open editor could use a constant for of package that is not declared yet. So the editor will show an error marker. When the constant declaration is added in a second editor, the marker in the first editor needs to be updated. This will result in following message in the progress view:

![Updating editor state](/img/tech/update_editor_state.png)

### Third pass

This phase runs a few so called *builder participants*, that extract more information from the Model for different purposes. One example is [/manual/tools#External Compilers].

![Phase 3 : Builder participants](/img/tech/builder_participants.png)

## Conclusion

Only the first time a project is opened, the builder needs to build the entire project. Next the *Global Index* and *Meta Models* are updated incrementally when files are modified. The Models are loaded as needed which keeps the memory footprint low.

Sigasi uses some very clever algorithms to build and query all VHDL information about your design. Sigasi is architected to be economical with memory, while being fast enough to give snappy feedback.

I hope this shed some light on the magic behind Sigasi. You should now be able to understand what is going on, and what the progress messages exactly mean.