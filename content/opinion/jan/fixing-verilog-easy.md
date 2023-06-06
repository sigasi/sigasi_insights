---
title: "Fixing Verilog is easy"
layout: page 
pager: true
author: Jan Decaluwe
date: 2011-09-19
tags: 
  - JanHDL
  - Verilog
comments: true
bannerad: true
---

The example in my previous post ([Wasting real time in zero time]({{< ref "wasting-real-time-zero-time" >}})) has triggered some interesting responses, providing more than enough material for a follow-up post. VHDL designers beware, hardcore Verilog stuff ahead!

## The example revisited

The essence of the example can be captured in the following Verilog-like pseudo-code:

```verilog 
    DUT: begin
        ...
        ready <= 1;
        result <= 5;
        ...
    end

    TEST: begin
        ...
        @(posedge ready);
        assert result == 5;
        ...
    end
```
 
A Verilog simulator handles this as follows. The `DUT` process puts the update events for `ready` and `result` on the nonblocking event queue. Later in the simulation cycle, those events are taken from the queue in the order of entry. However, after `ready` is updated the engine has  two options:  handle the next event and  update  `result`, or wake up the `TEST` process  first. Clearly, the assertion's behavior will depend on the path taken. Therefore, the code is nondeterministic.

## How (not) to fix it

One way to fix the nondeterminism is by reversing the assignment order in the `DUT`:

```verilog 
    DUT: begin
        ...
        result <= 5;
        ready <= 1;
        ...
    end
```

Now, when `ready` is updated, we are sure that `result` already has been updated before. The assertion is now guaranteed to pass.

However, this fix is unsatisfactory. First, having to control the order of "concurrent" assignments is awkward. More importantly, this fix is not applicable in practice. The `DUT` designer will often, and even preferably, be a different person than the `TEST` designer. She may use any particular statement order based coding style concerns. The `TEST` designer should treat the `DUT` as a black box and not rely on some particular order.

Therefore, the `TEST` designer has to deal with the issue. He can do so by suspending the process  to make sure all nonblocking update events have been processed before the assertion executes. For an RTL-style `DUT` triggered by a clock, one possibility is to wait on a clock edge in the `TEST` process. Alternatively, if you want to have a  "behavioral" test bench without clocks (as in my case originally) you can use a delay:

```verilog 
    TEST: begin
        ...
        @(posedge ready);
        #1;
        assert result == 5;
        ...
    end
```

(Actually, a zero-delay would work also, but that is too tricky for my taste.)

I find this kind of fixes unsatisfactory also. At the behavioral level, I want a reliable way to model the simultanuous occurence of events, without having to resort to lower-level modeling techniques involving clock edges or delays.

## The language fix

Nonblocking assignments were introduced in Verilog to make synchronous communication deterministic. Nonblocking update events are put in a special queue that is processed later in the simulation cycle. When all processes are triggered by the same clock edge, the update events appear to happen concurrently.

However, as I discussed in an earlier post, [VHDL's crown jewel](/opinion/jan/vhdls-crown-jewel), update events and process evaluation events do not happen in separate phases. That is the reason why nonblocking assignments do not solve the problem in general and why we are stuck with the problems I am discussing.

The language fix is easy with a rule like the following:

> All nonblocking update events in the queue are processed before any process evaluation events that they may trigger.

That is all that it would take to solve the problem in general. Probably, several mainstream simulators work like that already. Designers who do not care about determinism would be able to use Verilog as before. But those who do would have an easy way to write deterministic Verilog code at any level.

## Blocking assignments as red herrings

Several commentators to my previous post, [Wasting real time in zero time](/opinion/jan/wasting-real-time-zero-time), insisted that using  blocking instead of nonblocking assignments would resolve the problem.  They are mistaken. Not every Verilog problem can be reduced to the proper choice between the two types of assignments. 

First, the nonblocking assignments were there for a good reason that can be inferred from the context. The original `DUT` was a synthesizable FSM. For  RTL-style FSM modeling in a clocked process, nonblocking assignments to the output ports are mandatory. Note that writing testbenches for that kind of Verilog modules is a very common situation.

Typically, nonblocking assignments are used in conjunction with a clock. (Actually, the fact that they *only* work reliably with a clock is exactly what I am complaining about.) By simplifying the `DUT` code so much that it doesn't use a clock, I may have caused some confusion. However, let me be clear: the Verilog simulation algorithm does not know about clocks. It puts nonblocking update events in a separate queue, that is all.

Even if blocking assignments were an option, they would not fix the issue. The `DUT` code would become:

```verilog 
    DUT: begin
        ...
        ready = 1;
        result = 5;
        ...
    end
```

To show that this code  is also nondeterministic, we don't have to refer to event queues. Instead, we can refer to Verilog statement scheduling semantics, as formulated by Verilog's creator:

* the statements in a begin-end block in a process are guaranteed to execute in the order written
* the statements in a Verilog process may be interleaved by statements from other processes

See *"Thomas & Moorby's, The Verilog Hardware Description Language, 5th edition, p. 225"*

One simulation scenario that complies with these rules is:

```verilog
    DUT+TEST_1:
    ...
    ready = 1;
    result = 5;
    @(posedge ready);
    assert result == 5;
    ...
```

Another one is:

```verilog 
    DUT+TEST_2:
    ...
    ready = 1;
    @(posedge ready);
    assert result == 5;
    result = 5;
    ...
```

Clearly, the assertions in the two scenario's will behave differently. Hence, the code is nondeterministic. *QED*

In summary, the example is nondeterministic regardless of the type of the assignments. The problem with either type is very similar, and the possible fixes are the same: reversing the order of the assignments, or suspending the `TEST` process before the assertion.

## Proper Verilog

In one members-only forum, I received completely opposite reactions to my previous post.  One engineer with a lot of credentials in verification acknowledged the issues and conceded that "Verilog race conditions  have occasionally caused me to lose a day or two chasing them down." Another engineer, also with significant credentials, claimed that he had "never encountered this issue with properly written Verilog."

Such opposite reactions can only be explained by a fundamental difference in perspective. There are only two mainstream HDLs. Many hardware designers will only be proficient in a single HDL during their career. It is understandable that they identify digital design with designing in that particular HDL.

Therefore, when a commentator tells me that nondeterminism is something that one has to understand, "just like other aspects of digital design", that may sound logical from a Verilog-centric perspective. However, from my perspective it is misleading, as nondeterminism is merely a language design choice of one particular HDL.

Likewise, when a commentator asserts that the issue does not exist for "properly written Verilog", that may sound logical to him. But what I see is a circular argument that tries to  label any language design issue as incompetence of its users. The obvious question is how often he has to deal with "improperly written Verilog", that would simply not exist if the language had been deterministic.

## Where are the benefits?

In the present post and the previous one I have analyzed the costs associated with nondeterminism. However, for a fair assessment we should also consider the potential benefits.  Therefore, my question is the following: suppose Verilog would have been deterministic, what would you have missed? In other words, how is the quality of your design methodology better *thanks to* nondeterminism?  How does it *help* you with modeling, verification and creating better chips? Absent such benefits, the conclusion must be that a deterministic Verilog would have been a much better Verilog.
