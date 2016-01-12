---
title: "How to work with Gaisler's Leon3 SPARC processor"
layout: page 
pager: true
author: Philippe Faes
date: 2010-02-04
tags: 
  - howto
  - VHDL
---
## Big projects

In the very first versions of Sigasi, some people have had trouble loading very large designs into Sigasi HDT. The processing power required by Sigasi HDT rises with the size of your project, as opposed to the processing power required by a <em>VHDL editor</em> which increases with the size of the file you are editing.

We have been working on improving the responsiveness of Sigasi HDT, and to demonstrate this, I'd like to show you how you use Sigasi HDT to navigate and edit one of the <em>largest open source hardware projects</em>: Gaisler's Leon3 SPARC processor and its accompanying libraries (commonly known as GRLIB). I've downloaded the GRLIB project, and set it up to work with Sigasi HDT. GRLIB uses a lot of different libraries:

![libraries in GRLIB](images/gr_libraries.png)


## Still fast
To start off with some performance figures on my computer. I have a standard desktop computer, Core 2 Duo and <a href="http://en.wikipedia.org/wiki/Gibibyte">2 GiB</a> or RAM. Nothing fancy.
The initial compilation of the full GRLIB project takes <strong>35 seconds</strong> on my machine, using a Java heap space of less than <strong><a href="http://en.wikipedia.org/wiki/Mebibyte">500 MiB</a></strong>. In fact, our upcoming release (due Februari 2010) will knock an extra 40% off that compilation time, bringing it to <strong>20 seconds</strong>. 

Once Sigasi HDT is started and the project is fully compiled, you move to full speed. If you edit a file an save it, Sigasi HDT will not recompile the full project, but only the small subset that is required to make its internal data structures consistent with your project. This usually takes less than a second.

## Try it yourself
Taking a look at other people's code is always a good way to learn. This is especially true for large industrial projects, like GRLIB, rather than hello-world style toy projects. I'd like to thank Jiri and the people from <a href="http://gaisler.com">Airoflex Gaisler</a> for sharing this project with the world under the GPL license. (Note that you can purchase a commercial license from Airoflex if you need that.)

To look at GRLIB using Sigasi HDT, you can download a <a href="http://www.sigasi.com/try">free trial license</a>. After you've started Sigasi HDT, just click "Point to existing project", and you're set to go.

Download the <a href="resources/grlib-gpl-1.0.20-b3403-b.tgz">GRLIB project</a>. I've packaged release 1.0.20-b3403, with one actual design and the VHDL libraries that it requires.

## What do you think?
I'd love to hear which publicly available <em>VHDL projects</em> you have inspected and learned from. Was it easy to understand them? Were the files well-structured? Did it include documentation or did you have to dive in <em>head first</em>?