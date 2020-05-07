---
title: "Your mileage may vary. A lot."
layout: page 
pager: true
author: Philippe Faes
date: 2011-03-07
tags: 
  - EDA2.0
comments: true
bannerad: true
---

Dear Mr. Rhines,
Dear Mr. De Geus,
Dear Mr. Tan,

A few days ago, there was a <a href="http://groups.google.com/group/comp.lang.vhdl/browse_thread/thread/52fe42cf0333f4c2?pli=1">discussion</a> on the comp.lang.vhdl newsgroup about different coding styles in RTL and how this reflects on the synthesis results. We should have more discussions like this. I'll save you the effort of reading through the entire discussion. The conclusion was that with the <a href="http://www.synopsys.com/tools/implementation/fpgaimplementation/fpgasynthesis/pages/synplifypro.aspx">right synthesis tool</a>, you can save yourself a lot of pain at the RTL level. 

The interesting thing about this discussion was that people, in an act of civil disobedience, have shared their synthesis results for a micro benchmark.

As you know, license agreements in the EDA sector more often than not contain clauses like this:

> You may not (and may not allow anyone else to) disclose the results of any benchmarking of a Licensed Product (whether or not the results were obtained with assistance from \[the EDA vendor\]) to any third party.

This particular <em>anti-benchmarking clause</em> comes from a <a href="http://www.synopsys.com/tools/pages/softwarelicenseagreement.aspx">Synopsys EULA</a>, but all the other large EDA companies do the same. This is <em>just plain evil</em>. I'm not saying it is illegal (I'm not a lawyer) but it should be. There have been <a href="https://ag.ny.gov/press-release/2007/new-york-attorney-general-vindicates-free-speech-rights-consumers">settlements</a> where companies have dropped their anti-benchmarking clauses in the past. And I would hope for more of those settlements in the future.

If I buy a car, I will know its fuel economy. My mileage may vary, but all constructors are measured against the same benchmark. I will also know how <a href="http://en.wikipedia.org/wiki/0_to_60_mph">fast it accelerates</a>, what the volume of the trunk is, and how many seats the car has. No constructor in his right mind will ask me to keep quiet about my experience with his product. 

I see three reasons why EDA companies shouldn't ask that either. 

First, as a customer you are not sure what you are signing here. What defines a benchmark result? Which of the following things can you say and which are covered by the clause?

* \[EDA tool\] synthesizes circuit \[so and so\] in \[so many resources\].
* Our last tape-out had a big problem because of a bug in \[EDA tool\].
* VHDL-2008 feature \[so and so\] is not yet supported in \[EDA tool\].
* I tried \[EDA tool\] and it was great.
* \[EDA toolvendor\] is just plain evil.

I suppose that only the first example obviously is a benchmark result, but corporate lawyers may complain about the second and third as well. I really hope nobody would argue that 4 and 5 are covered by an anti-benchmarking clause, but who is to say?

Second, if we are going to have any <em>innovation</em> in this field, we need benchmarking. Is every academic going to do his own benchmarking on all of the different tools before he starts working on his novel algorithm? Is every startup going to buy all the competing tools to compare with his own new tools? Anti-benchmarking clauses make it hard for new players to enter the field. I expect that even the top-3 EDA companies <em>want</em> new players in the field! New players are companies that take risk, innovate, prove a new technology and can then be bought. This is a way of outsourcing the R&D risk.

Third, a clause like this is not good for your <em>customer relationship</em>. I'm sure the EDA leadership must realize this. How can you convince a customer that you have the best tool, if you prohibit him from sharing his experiences with other customers? How can you charge more than your competitor while your only demonstrable differentiator is your sales pitch? Do you not trust your customers to see through any badly conducted benchmark that your competitor might set up?

So, Mr. <a href="http://www.synopsys.com/COMPANY/ABOUTSYNOPSYS/Pages/ExecutiveManagement.aspx">Aart de Geus</a>, Mr. <a href="http://www.mentor.com/company/executive_team/w_rhines">Wally Rhines</a>, Mr. Lip-Bu Tan, I challenge you all to be the first to drop the anti-benchmarking clauses from your End-User License Agreements. If you want to be an industry leader, if you want to show that your company truly has excellent tools, if you want EDA bloggers to talk about the quality of your products (and about possible points of improvement), then please treat them like adults and drop that anti-benchmarking clause.

Yours truly,

Philippe Faes
Sigasi Founder and CEO