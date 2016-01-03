---
title: "Pitfalls for circuit girls"
layout: page 
pager: true
author: jdecaluwe (Sigasi)
date: 2011-02-10
tags: 
  - JanHDL
---

## The Circuit Girl

Some time ago I heard about a video with FPGA design book recommendations by <a href="http://en.wikipedia.org/wiki/Jeri_Ellsworth">Jeri Ellsworth</a>, who is also known as the <em>Circuit Girl</em>. I admit that the concept of <a href="http://www.urbandictionary.com/define.php?term=circuit%20girl">circuit girls</a> triggered my imagination. Somehow I feel like there should be more of those.  Consequently,  I checked out <a href="http://www.youtube.com/watch?v=kobf8IOB0oA">her video</a> without further delay.

Here is a successful, charming engineer presenting her favourite FPGA design books. She definitely  had my ear. In the video, she refers to “programming” an FPGA in VHDL or Verilog. I like that. Her top pick is a book called <em>HDL Chip Design</em> by Douglas Smith, informally know as the <em>blue book</em>. She describes it as a must-have. Needless to say, I ordered it immediately. A used copy though, because it is an expensive beast.

## Checking out the blue book

The blue book is rather intimidating, if only for its size. One definite plus is that it discusses both VHDL and Verilog.  Moreover, the foreword promises that it will be “a beacon in your quest for perfect HDL design”.  While glancing over it, I got the impression that it contains a lot of useful information. However, my first action was to look for errors and bad advice. That is what I always do when I  get my hands on a book about HDL design. I suppose the reason is a mixture of bad character and experience. Anyway, I did not have to look very hard.

On page 174, the author demonstrates  how to describe flip-flops.  According to the book, a simple D flip-flop without reset would be described in Verilog like so:

```verilog
module ff(clock, a, y);
    input clock;
    input a;
    output y;
    reg y;

    always @(posedge clock)
        y = a;

endmodule
```

In a stand-alone simulation, your simulator may tell you that this is indeed a  flip-flop, as may your synthesis tool. However, let me be clear: it is not. At least not always. Only when you are lucky.

## The problem

A flip-flop is a building block for more complex circuitry. For example, consider a simple two-stage delay line:

```verilog
module delay_line(clock, a, y);
    input clock;
    input a;
    output y;
    wire y1;

    ff dff1(clock, a, y1);
    ff dff2(clock, y1, y);

endmodule
```

With the models as presented, this model may behave as the intended two-stage delay line, or as an unintended single stage. There is nothing in Verilog to prefer one behavior over the other. It depends on your simulator brand. Or version. Or on source code order. Or on some random, unpredictable event.  Both outcomes are equally valid. This is <a href="/blog/jan/verilogs-major-flaw.html">nondeterminism</a> in practice.

To see the problem more clearly, consider the following code, which is equivalent from the point of view of the Verilog scheduling algorithm:

```verilog
module delay_line(clock, a, y);
    input clock;
    input a;
    output y;
    reg y;
    reg y1;

    always @(posedge clock)
        y1 = a;
    always @(posedge clock)
        y = y1;

endmodule
```

If you simulate this on any Verilog simulator, and experiment with the order of the always blocks, you will most likely see the issue.

<strong>One problem with nondeterminism, as with bugs in general, is that it is impossible to prove its absence by simulation.</strong> To  complicate matters further, your simulator may hide  the nondeterminism in the original example. The reason is that some simulators, including the original Verilog simulator and its descendants from Cadence, handle ports in a special way. However, don’t be misled by this. The Verilog standard scheduling algorithm has no special provisions for ports . Other simulators, such as Synopsys VCS,  have exploited this characteristic by implementing “optimizations” that will reveal the nondeterminism.

As you may recall from previous posts, the problem with the flip-flop code is the use of a blocking assignment `=` for synchronous communication.  This coding error is made systematically throughout the whole blue book. The fix would be to use non-blocking assignments `<=`  in such cases instead.

According to Jeri Ellsworth, the blue book is very popular. This suggests that many companies follow its coding style.  As a result, there may be  a lot of fragile Verilog legacy code out there: code that has “always worked” but that suddenly will stop working with a new version or brand of the Verilog simulator.

I am puzzled by the fact that the blue book was never corrected. The author certainly was aware of non-blocking assignments. In some examples he uses them for their parallel semantics in a single thread of code. Perhaps he was not aware of their main purpose, but others could have told him. According to the foreword, _"\[the book’s\] accuracy has been verified by leading industry experts"_.  Perhaps the issue was not yet clear to them in the first edition of 1996. However, my  copy of the book is the ninth printing from July 2001.  It seems there was ample expertise and time available for corrections, but for some reason they were not made. I have <a href="http://stackoverflow.com/questions/4914074/have-the-errors-in-hdl-chip-design-by-douglas-smith-ever-been-corrected">no indication</a> of later editions that may have fixed the problem.

## How to fix it

One factor may be that the required corrections are not trivial. We certainly don’t want to substitute all blocking assignments by non-blocking assignments, as their semantics are completely different. Only assignments used for communication  should be considered. However, we don’t want to subsitute all of those either. For combinatorial logic, there is no issue with nondeterminism, and Verilog designers typically prefer blocking assignments in this case. In summary, we only want to substitute assignments used for communication and  controlled by a clock edge.

What I have just described is a typical example of a <em>refactoring</em>. By definition,  a refactoring is a code transformation intended to improve the code while keeping its intended behavior intact. As can be seen from this example,  interesting refactorings are often non-trivial. No matter how desirable, manual refactorings are often avoided because there is a significant risk to introduce new errors in the process.

To make interesting  refactorings practical,  they must be automated, by using a development environment that understands the programming language.  In a Verilog IDE product, a <em>Fix Nondeterminism</em> refactoring would be at the top of my list of  desired features. It could be used to fix the blue book automatically. In the development environment, it would be available as a code warning with an associated quick-fix. This would avoid the issue at the root.

## Conclusion

As you have guessed already, all  these considerations are irrelevant for VHDL. Any VHDL example from the blue book will behave identically on any compliant VHDL simulator. By comparison, the cost of Verilog’s nondeterminism seems disproportionally high. Why did the Verilog language designers not avoid it like VHDL does? Did they underestimate the issues? Or did they perhaps have a good reason that we have not appreciated yet? We will address these questions on the next occasion.