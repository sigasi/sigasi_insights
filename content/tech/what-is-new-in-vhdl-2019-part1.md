---
title: "What's new in VHDL 2019?"
date: 2020-06-09
author: Bart Brosens
pager: true
comments: true
bannerad: true
---

# Introduction

This article is the first in a series of articles that are taken from the talk **VHDL 2018: New and Noteworthy** ([slides]).
This talk was given by our colleague [Lieven Lemiengre](https://www.sigasi.com/about/#lieven-lemiengre) at DVCON 2018.
Since the new VHDL standard was approved and published in 2019,
all references to 2018 from the talk have been replaced by 2019 in this series of articles.

In this first article, we start by motivating why VHDL is still relevant today and how the language can evolve to remain relevant.

Next, we'll look at the two biggest features of the new revision: interfaces and enhanced generic types dramatically change
the way VHDL is used. They improve type safety and readability while reducing verbosity.
The [second article]({{< ref "/tech/what-is-new-in-vhdl-2019-part2.md" >}}) will discuss interfaces and the third article will discuss the enhanced generic types.

In the fourth article we'll take a look at a number of small features and APIs that improve the usability of the language.
We also take a look at a new set of APIs and language features aimed at verification library designers.

# Abstract

**VHDL 2019** improves many aspects of the popular hardware design language.
The most important improvement is the ability to bundle ports in an interface. This feature greatly reduces the
verbosity of instantiations while improving the maintainability and clarity of the code.
The language was simplified where possible, restrictions were removed and various inconsistencies were resolved.
New APIs, enhanced protected and generic types enable designers to build the next generation of verification libraries.
To achieve these improvements, the VHDL working group continues to build on the existing strengths of VHDL:
strong typing, early bug detection and clear language semantics.

# Reviving the VHDL standard

Before we dive into the new features, it is interesting to take a step back and examine if it still makes sense to evolve
this thirty plus year old VHDL standard. Is VHDL still relevant in 2019? This is a question that the members of the
VHDL working group had to answer.

{{< figure alt="Lieven at DVcon 2018" src="/img/tech/lieven_DVcon2018.jpg" class="uk-align-right" width="300px" caption="Lieven at DVcon 2018" >}}

In recent years, VHDL was pushed into the background as other languages have gotten more attention. It is rare to
see VHDL-related talks at conferences. Some EDA companies<sup id="bref1"> [1](#ref1)</sup> and some thought leaders<sup id="bref2"> [2](#ref2)</sup> have even declared
the language dead. The previous release, VHDL 2008, is still not completely supported by simulators, and synthesis
support is rare. But despite the negative press and neglect by some tool vendors, VHDL is still a very popular language.
So, why did it not disappear?

When users are asked what they like about VHDL they typically mention the strong type system and the clear
semantics of the code. The code can be verbose, but it is also readable, with few surprises. VHDL is built in such a
way that tools can detect a lot of issues at compile time. Many kinds of bugs are eliminated by design. This gives the
designer more confidence that once he starts simulating the code, it actually works. Clear code means that VHDL
users can easily exchange code. VHDL in its current form has some unique advantages. The challenge for the working
group is to evolve the language whilst keeping these advantages.

To explain how VHDL achieves these advantages we need to look at how the language is built. From a language
engineering point of view, VHDL is an interesting language. The core language, based on Ada, does not have any
concepts related to hardware design. Instead, the core language only defines three things:
* Primitive and aggregate types
* Some predefined operations on these types
* A well-defined simulation model

Hardware oriented features are not defined directly in the language, but rather in the layer above it: in the IEEE
library. From the point of view of the user however, this distinction is not observable. Complex user-defined types
and flexible literals, combined with rich operator- and subprogram overloading, make the data types described in the
IEEE libraries look like data types which were built into the language.

This might look like a contrived way to make a hardware description language, but it has many advantages. First of
all, the grammar only has to cover the core language, which results in a much smaller language. The semantics of a
smaller language are easier to specify and simple specifications have fewer corner cases. The core language is also easier
to implement, which lowers the chance of variation between implementations. Since the IEEE libraries are specified
in the VHDL language itself, their provided implementation is their specification. This means that their behavior does
not have to be described in the LRM and it eliminates variations in implementation. Another benefit is that the
language is built to be extended. Users can define their own complex data types, extending the IEEE library. These
extensions work like the built-in or provided IEEE data types. This allows users to extend the language without
involving the VHDL language engineers.

There are also drawbacks to this approach. Many designers perceive VHDL as a very abstract language, closer to a
software language than other hardware description languages. The type system feels very inflexible and types often
have to be explicitly converted. This approach makes some features hard to add because the core language is oblivious
of clocks and resets. Simulation performance can also be an issue, specialized built-in types would give the simulator
more room to optimize. The source of these issues and their solutions are not in the scope of this series of articles, but the VHDL
working group is aware of them.

The working group believes that separating the language and the IEEE library is, on the whole, beneficial for VHDL. If a proposal
is made to change the core language, it's evaluated first if it is possible to implement it as a library. For example: an
important subject for hardware design languages is verification. The working group has made the explicit choice not
to include verification features into VHDL 2019. Instead, the group decided verification should be implemented as a
library.

Verification methodologies are evolving quickly. It is hard to justify adding constrained random generation into the
core language when this methodology may someday be replaced with for example formal methods or something yet
unknown. There are many verification methodologies and, depending on the design requirements, the used
methodology should differ accordingly. In some cases simple unit testing may suffice, in other cases a variation of
constrained random or formal may be required. Supporting all known verification methodologies with specialized
syntax in the core language would make the language specification too big and complicated. This would mean it is
harder to implement and would significantly increase the chance for bugs and inconsistencies. There already are
several open source verification libraries developed for VHDL 2008. [VUnit], [OSVVM] and [UVVM] have
proven that a library-based approach to verification with VHDL is a solid choice.

Instead of adding language level features to support verification in VHDL the working group chose to identify what these
library authors were missing in the current language.

For all of the reasons above, the working group considered it worthwhile to create a new VHDL revision. With as little
changes to the core language as possible, VHDL’s capabilities for design and
library development are significantly improved. The focus was on improving the core language. In a future revision the working group may focus on
standardizing more IEEE libraries.

# Defining VHDL 2019

The work on VHDL 2019 started in 2014 by conducting a survey. To focus the standardization effort, people active
on the VHDL mailing list were asked to rank a set of proposals. The results were very clear: interfaces were the most
requested feature. At that point there were many different proposals to achieve this functionality. It took more than
two years to reach a consensus about this feature.

Meanwhile other proposals of features were also discussed, distinguishable into two groups.

* One group of features is aimed at streamlining the usability of VHDL. These are simple features and easy to
implement, but they can have tremendous value to the user.

* The second group are features aimed at library designers. These can be complicated but they enable the next
generation of VHDL verification libraries. It is unlikely that VHDL designers will use these features, they are added
specifically for library designers.

# References

<a name="ref1"></a>[<a href="#bref1">1</a>] [Michael Santarini, "Synopsys executive predicts end of VHDL"](https://www.eetimes.com/document.asp?doc_id=1216860), 4/11/2003  
<a name="ref2"></a>[<a href="#bref2">2</a>] [John Cooley, "VHDL, the new Latin"](https://www.eetimes.com/document.asp?doc_id=1216865), 4/7/2003

[slides]: https://www.slideshare.net/LievenLemiengre/vhdl-2017-new-and-noteworthy
[VUnit]: https://vunit.github.io
[OSVVM]: https://osvvm.org
[UVVM]: https://bitvis.no/dev-tools/uvvm
