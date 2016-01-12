---
title: "Coding conventions"
layout: page 
pager: true
author: Philippe Faes
date: 2012-04-06
tags: 
  - coding guidelines
  - VHDL
---

Style guides can be a religion. Like religion, style guides can help people make the right choices. But also like religion, style guides can make people stick to unjustified dogma and block any constructive dialogue. 

There are many coding conventions and style guide books around. Many contradict each other and many style rules are not (or no longer) based on practical arguments. There will never be a style book that will be accepted by the entire VHDL community, and that's fine. But it is useful to investigate where style rules came from, so that you know when to defend a rule to the death (so to speak) and when to be flexible.

There are three kinds of coding rules:

1. useful
2. arbitrary
3. adverse

## Useful

*Useful* coding rules have an important practical implication. Following these rules reduces some risk or adds some value. For example, adding two registers when crossing clock domains reduces the risk of meta-stability. Sometimes two coding rules contradict each other, even though they are both _useful_. If you encounter a coding rule that violates a useful coding rule, you need to weigh the benefits and risks.
Rules that are required by the IEEE VHDL standards would obviously be _useful_, but are more accurately described as _imperative_. Even if your current tool set is more lenient than the standards, your code may one day encounter tools that adhere more strictly to the standards.

## Arbitrary

*Arbitrary* rules do not have important practical implications. There might be minor implications and subjective implications like aesthetics or readability. Important examples are indentation rules and the choice between CamelCase and underscore_separated.  Many of the most visually obvious coding rules are arbitrary in nature. It does not matter so much which convention you choose. It's just important that you stick to your conventions. There is no use in wasting energy debating arbitrary coding rules. Just stick with the conventions of your project, your team or your client.

## Adverse

*Adverse* rules are rules that do not have a benefit at all. The claimed benefit may be based on a lack of insight in the VHDL standard, or (more likely) by an outdated insight in the capabilities of EDA tools. Adverse rules often propagate by oral tradition. Much like folk tales, they have not been sufficiently checked against facts. The original tale may have been absolutely correct in its day. But the world has changed and the take got distorted after being told and retold so many times. 
I'm sure you don't have any adverse rules in *your* organization, but it is useful to be able to spot them. The template for an adverse rule is: 

> Always \[do this and that\] because **some synthesis tools might sometimes use slightly more resources** \[or have slightly worse timing\].

This is what wikipedians call [weasel terms](http://en.wikipedia.org/wiki/Weasel_word). Relevant questions you might ask are: which synthesis tools, and which versions? (Are we using these tools at all?) In which circumstances? Is this something that happened only once? (And are we sure that \[this and that\] was the cause? 

The good thing about style books is that they often grade rules. Some rules are _suggestions_ or _strong suggestions_, while others are in the _must comply_ category. However, the problem with these coding guidelines is that they usually do not explain the _rationale_ behind each of their rules. You cannot asses for yourself if any given rule is useful, arbitrary or adverse. This means you don't know when it is OK to bend or break the rules. Or when to propose an amendment to the rule book.
