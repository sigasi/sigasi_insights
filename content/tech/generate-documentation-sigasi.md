---
title: "Generate documentation in Sigasi Studio"
layout: page 
pager: true
author: Wim Meeus
date: 2021-06-22
tags: 
  - documentation
  - VHDL
  - Sigasi Studio
comments: true
bannerad: true
---

This article discusses **documentation of Hardware Description
Language (HDL) code**, and how **Sigasi Studio can help** with that.
Designers (and their managers) generally agree that well documented
code is important.  In practice, *actually* documenting code,
documenting code *well*, and keeping documentation *up to date*
doesn't always happen.  The excuse is often *time*, as in we didn't
*want* to spend extra *time* or we didn't even *have time* to write
documentation (but a few months later we spent much more time tracking
that one bug while reverse engineering our own code...)  So before
getting into the *how* of documentation, we'll first revisit *why*
good documentation is important.

## The importance of well documented HDL code

Documentation is a source of information about your HDL code.  Adding
documentation makes code easier to understand.  While the person
writing the code may have perfect understanding of their code, it is
highly likely that more people will sooner or later need to understand
the code.  And in as little as a few weeks or months, even the author
of the code may well have forgotten some important details.  The extra
information in the documentation is helpful for a number of things:

* **Preservation** and **transfer** of **knowledge**: documentation
    helps to understand the code. **Colleagues** may need to work with
    your design. **Customers** may want to integrate your IP
    block. And after a while, **you** may want the extra information
    to remember the ins and outs of your own design.
* **Code quality**: writing documentation forces the designer to think
    of their design in two languages, namely the *computer* language
    or the HDL in this case, and a natural language, often English.
    Doing so reduces the risk of design flaws, because the designer is
    more likely to spot a problem.  And if that didn't work, well
    documented code is also easier to review, which is another
    contribution to code quality.  *Hint for reviewers: review also
    documentation!*
* **Maintainability** and **debuggability**: if code is easy to
    understand, it is also easier to maintain and debug.

## Good code is self-documenting, now what?

Good documentation is important, but there's a saying that **good code
is** (or *should be*) **self-documenting**.  So how about that?  How can
code be self-documenting, and is that enough?
[Self-documenting
code](https://en.wikipedia.org/wiki/Self-documenting_code) is indeed a
Good Thing.  With this term we denote the use of programming
techniques to make code maximally understandable without further
explanation.  This includes:

* Using **meaningful names** for entities, architectures, modules,
  functions, ports, signals, variables, types...
* Declaring and using **constants** (again, with a meaningful name)
  instead of using the constant value directly throughout the code.
* Using **code constructs** that are **easy to read**, even if they
  are more verbose.

<!--
This is particularly different from coding in the 1970s, when often
the programmer was confronted with punch-cards, their
80-characters-per-line limit and the need to keep the number of
punch-cards low.  Back then, variable names had to be as short as
possible so more code would fit on a line, and code had to be
hand-optimized because compilers wouldn't do that. In this day and
age, storage is no longer a bottleneck and compilers do optimize, so
writing self-documenting code is definitely the way to go.
-->

Writing your code this way makes it easy to understand **what the code
does**.  It does not document **why the code does what it does**, nor
does it give high-level information of **how to use the code**.  This
is where **further documentation is needed**.

## Where shall we put the documentation?

Documentation can be added to code either in a **separate document**,
or as **comments in the code**.  The **latter** approach is
particularly interesting in many cases, because:

* documentation is **found where it's needed**, namely with the
  documented code, and
* programmers are **more likely** to keep documentation **up to date**
  if the documentation is with the code rather than *somewhere* else.

In some cases, a separate document is useful too. A customer using
your IP block, for example, may need the information about your IP
block but they don't get access to the code.  Or you may want to
collect all the documentation in one place, which is easier to read
than when it's mixed up with the code.  Fortunately, **tools** (like
[Sigasi Studio](https://www.sigasi.com)) exist to **extract
documentation from comments** in code, so you won't need to write the
documentation twice.

## How to write good comments

Ideally, what we want is the **best documentation** with the **least**
possible amount of **effort**.  The good news is that, to some extent,
these concerns are not each other's opposite.  A few guidelines will 
help you optimize your documentation effort.

* Write **self-documenting code**.  Anything that is clear from reading
  the code doesn't need further documentation.  Using meaningful
  names, for example, will help a lot. What do you think of these
  examples?

<pre>    <span class="badcode">tc = tk - 273</span>;  -- er, what?

    <span class="goodcode">temperature_celcius = temperature_kelvin - kelvin_celcius_offset</span>;</pre>

* **Don't state the obvious**.  What your code does should be clear from
  the code itself, particularly if your code is self-documenting, so
  don't repeat what the code does in comments.  Not adding comments
  where they aren't needed is a double win: you don't need to write
  the comments and you don't need to keep them up to date.

<pre>    <span class="badcode">-- convert kelvin to celcius by subtracting the offset between the two</span>
    temperature_celcius := temperature_kelvin - kelvin_celcius_offset;</pre>

* **Document the why** rather than the what.  This is where comments
  become useful, as you **actually add information** which is not in
  the code.  In HDL, this is even more important than in typical
  software development languages. Register Transfer Level (**RTL**)
  code contains a **mix** of **functionality** (***what** does the
  circuit do?*), **architecture** (*what does the **circuit** look
  like?*) and **timing** (***when** does each operation take place?*).
  It is estimated that only about 20% of RTL code describes
  functionality.  Good documentation is essential to understand the
  code well.

* Document **what to generally expect** as well as corner cases.  It
  is good practice to add a high-level description to larger parts of
  the design, e.g. functions, VHDL entities, Verilog modules,
  SystemVerilog classes and methods ...  The description should include
  the problem(s) which the code solves, what data are consumed and
  produced, and potentially the algorithms used to process the data.
  Also mention corner cases and limitations of the code.

## Documentation in Sigasi Studio

[Sigasi Studio](https://www.sigasi.com), the integrated development
environment for digital chip design, helps you write and maintain
documentation for your HDL projects.  In the next paragraphs, we'll
highlight how to write documentation, and how to view it and export it
as a separate document.

### Documenting your code in Sigasi Studio

Sigasi Studio Makes documenting easy. It **associates comments** with
the code. The only requirement is that comments are in the right
place, usually either on the line(s) before the code they refer to, or
on the same line. For example:

```verilog
// A general description of my_module goes here.
// These comment lines are associated
// with module my_module
module my_module();
    logic clk = 1'b0;              // Test clock (comment associated with logic clk)
    wire rst;                      // Test reset (comment associated with wire rst)
```

No particular syntax for the comments is required, only the placement
of comments determines the association.  Details are discussed in the
[Sigasi Studio
manual](https://insights.sigasi.com/manual/documentation/#comment-association).

### Using the documentation while writing code

As soon as these comments are written, Sigasi Studio will pick them up
and show them when appropriate, e.g. in
[*hovers*](https://insights.sigasi.com/manual/editor/#hover).  When
you place your mouse pointer over an item which has documentation
associated, the documentation will be displayed in a pop-up.  Consider
this entity:

```vhdl
-- Entity **drive_rst_start** drivers the `rst` and `start` signals, as follows:
--
-- `rst`   is driven high initially, and is driven low after 17 ns
--
-- `start` is low initially, and is pulsed high for 10 ns after 20 ns of simulation
entity drive_rst_start is
    port(
        rst   : out std_logic;
        start : out std_logic
    );
end entity drive_rst_start;
```

Now we'll instantiate this entity somewhere else.  Wait, what did it
do?  Place the mouse pointer over the entity's name and there is the
documentation!

![Hover](/img/tech/documentation_hover.png)

These *hovers* also work with signals, variables, functions, and any
item that may have comments associated with it.

Note that some of the text is formatted differently,
e.g. `drive_rst_start` is bold, and `rst` and `start` are verbatim.
Comments may be formatted using
[markdown](https://insights.sigasi.com/manual/documentation/#comment-markup-with-markdown),
as we've demonstrated in the example.  Bold, italics, titles, bullets,
coloured fonts, it's all possible.

### The documentation view

From a design file in the Sigasi editor, you can open the
[Documentation view](/manual/views#documentation-view):
right-click in the editor and select **Show In > Documentation**.
The documentation is opened in a separate window as shown below.  This
view shows the documentation of a single file: design units, tables
with ports and parameters, instances, etc.

![Hover](/img/tech/documentation_view.png)

The documentation view gets updated as you type in the editor, no need
to save your code to see the effect on the documentation.

### Exporting documentation as HTML

A further step is to **export the documentation** as an HTML file.
You can choose to export the documentation of either a particular
hierarchy (i.e. a module, entity or architecture and all its
submodules) or all of your project. In Sigasi Studio, go to
**Project > Export > Documentation...** for this functionality.
Note that exporting documentation requires an [XPRT
license](https://www.sigasi.com/products/).

The result is a single, fully hyperlinked HTML file with the
documentation of the selected hierarchy or project.  In addition to
the documentation view, exported documentation also includes block
diagrams and state machine diagrams.  In the next paragraph, we'll
discuss how you can modify the style of the generated documentation to
better match your requirements.  We're also planning a follow-up
article on how you can do even more fancy stuff with the generated
document.

#### Tweaking HTML using CSS

Since {{< page "/releasenotes/sigasi-4.12.md" >}} you can customize the CSS
used in the exported HTML documentation.
All you need to do is add a `sigasi-doc.css` file in the root of your project.
The CSS from this file will be inserted after the styling that 's added by default.
The specifications can be found in our
[manual]({{< ref "/manual/documentation.md#custom-css" >}}).

{{< figure src="/img/manual/document_compare_css.png"
           link="/img/manual/document_compare_css.png"
           alt="Comparing generated documentation with and without custom CSS" >}}

## Conclusion

If you've read the article to this point, you must be convinced that
good documentation is essential in HDL design.  We have also presented
some good documentation practices.  Sigasi Studio can help you with
documentation. It is very easy to get started, so I invite you to
**try this out yourself**. Even with a {{< starter >}} license, you
can open the [Documentation Preview
View](/manual/views#documentation-view).
