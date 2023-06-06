---
title: "Wasting real time in zero time"
layout: page 
pager: true
author: Jan Decaluwe
date: 2011-07-21
tags: 
  - JanHDL
  - Verilog
comments: true
bannerad: true
---


## One day, a few days before tape-out....

Suppose that you are the  project leader for a large ASIC or FPGA design. (Maybe you are.) The project's delivery milestone (a.k.a. *tape-out*)  is due soon.  There is a nice regression test suite that makes sure nothing breaks as bugs are being fixed. The suite runs for a couple of hours overnight. Developers are required to run some basic checks before checking in changes, but not the full regression suite as that would take too long.

One morning, it turns out that some tests have failed mysteriously. At some point, the timing and the order of the logged events becomes different,  and the differences increase with simulation time. Inspecting the changesets in the revision control system does not  reveal an obvious cause. Some small bugs have been fixed, some code has been refactored, but no drastic or strange changes are observed. Then some clever junior developer offers the following analysis: "I have reviewed the code and found the cause. There is nothing wrong with the design or the tests. The differences are simply caused by nondeterministic event scheduling in Verilog. We can  simply consider the new log files as the golden reference." 

Of course you would not follow that advice. Instead, you will ask one of your senior designers to drop whatever task she is doing currently, and analyze the case thoroughly to make absolutely sure that there is no  bug. Suppose that  the expert confirms the earlier diagnosis of nondeterminism. Then you will definitely not "fix" the problem by changing the golden reference files. Who knows what would happen on the next run of the test suite? Instead, you will ask her to fix the test suite by removing the sources of nondeterminism.

Unfortunately, this task is not trivial. By their nature, issues with nondeterminism are subtle and confusing. It may be difficult to detect offending code, even with the help of linting tools (which may be expensive and produce a lot of output to wade through.) Likewise, fixing the code may not be straightforward either. Finally, after the fix it may still be necessary to change the golden reference files as the test suite output may now be different.

Consider what has been accomplished when everything is set and done. Neither the design nor the test bench quality in terms of coverage have been improved. Basically, you have implemented a number of workarounds for a problem with Verilog itself. All these efforts have consumed expert engineering time and therefore  represent a real cost. With a deterministic language, such as VHDL, the problem and the associated cost would simply not exist.

##  Is this realistic?

Now the question: is this a realistic story?

Some Verilog designers will  deny that there is a  problem in practice. On one occasion in a newsgroup discusssion on the subject, one person even [lost his temper](http://groups.google.com/group/comp.lang.verilog/msg/d76df9dd57b8beb7) and started shouting at me.  To explain why I am not very impressed with such denials, consider when nondeterminism is likely to occur. As an extreme example: it will not occur in a gate-level net list. Also, at the relatively low level of synthesizable RTL, it is  easy to define  guidelines that will avoid it. (But note : [Pitfalls for circuit girls]({{< ref "pitfalls-for-circuit-girls" >}})) Rather,  nondeterminism becomes more of an issue when you use the full modeling power of the language, including more complex event controls, for high-level modeling and in test benches. Nondeterminism is the killjoy of the fun stuff.

There is evidence that some design teams use a low level coding style, such as synthesizable RTL, for everything, including modeling and testbenches. Such a coding style will indeed avoid nondeterminism for a large part. But it is also boring and verbose, and in my opinion it completely misses the point about HDL-based design. If that is the price to pay, it is way too high.

Assuming most design teams use the modeling power of the language in the  intended way, why don't we hear more about problems? One reason may  be that companies are typically not that eager to share the details of their development difficulties. But the most important reason is probably that nondeterminism can go unnoticed for a long time.  The most likely way to detect it is a change of simulator brand. If you never do that, you may not realize  how fragile the IP really is.

Sometimes we  hear rumours  about the difficulties to use Verilog IP, especially testbenches. This may be an indirect indication of the issues I am talking about, although I realize this sounds a little vague. Fortunately, there is also a crystal-clear  testimonial from a credible source. In his book *Writing Testbenches Using SystemVerilog*, Janick Bergeron writes:

> In my many years of consulting in design verification, I have yet to see a *single* testbench that simulates with identical results on different simulators. \[...\] Yet, all simulators are fully compliant with the IEEE standard. Most of the time, the differences are due to race conditions. \[...\]
> 
> The primary cause of simulation differences are the authors. SystemVerilog appears easy to learn because it produces the expected response rather quickly. Making sure that the results are reproducible under different conditions is another matter. Learning the idiosynchrasies of the language is what takes time and differentiates an experienced modeler from a new one.
>
> *Janick Bergeron - Writing Testbenches using SystemVerilog*

According to Janick,  problems with nondeterminism in Verilog  are the rule, not the exception.  Also, he asserts that it takes a lot of experience to avoid them. Janick Bergeron is a Synopys fellow with  a career devoted to verification. Somehow I find him far more credible than those who flatly deny the problem. However, I don't agree with his statement on the authors being the primary cause of the problem. Clearly, the primary cause of the simulation differences is the language that allows them. In Verilog, you have to dedicate a lot of engineering resources to  something that  VHDL does automatically.

##  Synchronicity

When thinking about HDL-based design, I regularly experience synchronicity. I am not referring to the role of clocks in digital design, but to the situation when some event happens that suddenly makes your current thoughts much more meaningful. Let me tell you what happened last week, as I was thinking about this blog post.

I work on another project, called [MyHDL](http://www.myhdl.org), which is a way to use Python as an HDL. Subject to restrictions, MyHDL code can be converted automatically to Verilog and VHDL, including simple testbenches. Recently, I have been using this technique to develop a set of benchmarks to compare the simulation performance of MyHDL  with Verilog and VHDL.  At some point, I found the results interesting enough to publish them.

The five benchmarks run identically on five simulators and three HDLs: MyHDL, Icarus (Verilog), Modelsim Verilog, GHDL (VHDL), and Modelsim VHDL. Sounds quite robust, doesn't it? Not so. Some days ago, I received an email from Andrew Vanvick from [Tachyon](http://www.tachyon-da.com). Their product is a  fast Verilog simulator called cvc. He was interested in running my benchmarks with his simulator (and it really is extremely  fast).  However, he told me he "had to make some changes" in two benchmarks. He didn't have time to analyze the case, but he was able to temporarily fix the problem by adding some delays.

Therefore, I went through the very process that I described earlier. I analyzed the problem and was able to reproduce it with cvc. As you will have guessed, after analyzing the code  it turned out that there were sources of nondeterminism in two of my benchmarks. I found a (hopefully) robust fix and designed it in. I ran the whole regression suite again to make sure everything was fine now, including with cvc. This work has not improved  the intrinisic quality of the benchmarks. They are now more robust against Verilog nondeterminism, that is all.

To make the case more practical, I have developed a minimal Verilog example that exposes the problem with one of the benchmarks. Here is the code:

```verilog
    module test_nondeterminism();

    reg ready;
    reg start;
    reg [3:0] result;
    reg [3:0] expected;

    initial begin: DUT
        ready <= 0;
        @(posedge start);
        # 10;
        ready <= 1;
        result <= 5;
    end

    initial begin: TEST
        start <= 0;
        # 10;
        start <= 1;
        expected <= 5;
        @(posedge ready);
        if (result !== expected)
             $display("*** AssertionError ***");
        $finish;
     end

     endmodule
```

The DUT code calculates some result  and signals when it is ready. (In the benchmark, this is a synthesizable FSM.) The TEST code waits until it is ready, and compares the actual with the expected result. (In the benchmark, this is a loop with lots of tests.) This code works fine on Icarus and Modelsim Verilog, but fails on cvc. Again, this doesn't mean that cvc is incorrect or less accurate than the others. It is fully compliant with the standard. 

To avoid distraction from my main message, I will not immediately explain what the issue is. Instead, I would like to invite you  to look at the code and tell me if you think the problem is obvious. I certainly don't think so, even though the presented code is a drastic simplification of the original one. If you agree with me,  it means that you may write Verilog code that has similar issues.

(If useful, I will explain the issue later in the comment section. The answer can be inferred from an earlier post, [VHDL's crown jewel]({{< ref "vhdls-crown-jewel" >}}), on the subject.)

##  Conclusion

I have demonstrated that nondeterminism causes a real engineering cost. Clearly, I am also suggesting that it offers no added value. We would be much better off without it. In the next posts, we will discuss what the original Verilog language designers have to say about this subject.
