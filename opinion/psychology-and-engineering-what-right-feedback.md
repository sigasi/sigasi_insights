---
title: "Psychology and engineering: what is the right feedback?"
layout: page 
pager: true
author: Philippe Faes
date: 2010-09-08
comments: true
bannerad: true
---

Yesterday, I had an interesting conversation with a professor of psychology. He researches how people react to feedback. I offered to buy him lunch in exchange for some of his thoughts. I prefer lunch over having to read academic research papers.

It turns out that feedback from a machine is in general better received than feedback from humans. There are some important factors that influence how efficient feedback can be:

<ul>
 <li> credibility of the feedback
 <li> accountability
 <li> fear of looking stupid/loosing credit
</ul>

All of this only gets interesting, of course, when it is not applied to real-life situations. Let's look at how we could improve the quality of the HDL code that electrical engineers produce.

## Linting and EDAs
It seems that concentration drops radically after merely forty minutes of intense mental activity. There are tricks to increase that period. Caffeine is one of the more popular solutions amongst engineers. Another trick is to provide instant feedback on how well you perform. This will keep you focused on performing well. 

Now if this feedback comes from a boss or a coworker, there is some urge to defend yourself, because you don't want to look like someone who makes mistakes. Discussions on who was right and who was wrong can be very long and are not at all productive. On the other hand, if the feedback comes from a machine (say, an IDE or a HDL linting tool) there is no use in feeling offended. You just fix the code and move on. 

## Code reviews
On a larger time scale, after a hardware design is completed, many organizations have code reviews. Two extreme settings for code review are the avionics/military style and the Friday-afternoon-stand-up-zombie review. 

In avionics or military applications, strict protocols apply for code review. In simple terms: Adam writes code, Ben reviews the code and writes a report, Charlie fixes the code, based on Ben's review and Dan reviews Charlie's fixes. Ideally, these four people should only communicate through the reports they write. (Note that I'm leaving out <em>testing</em> here, which would involve Edgar, Frank and Garret). All of the documents, reports and communication that are produced in this process are archived for posterity.

If this is done right, you have a great mix that will get the maximum quality results. I guess that was the idea of the guys who invented this protocol, right? If you have good reviewers, you will have a high credibility of the feedback. The <em>accountability</em> of both the designers and the reviewers is enormous, because they leave a trail that will be scrutinized if something goes terribly wrong. 

In the traditional Friday-afternoon-stand-up-zombie review, one team member presents his code using a beamer. All team mates have printed out the code and have marked their comments on paper. While the presenter moves through the code, the rest of the team explains what is wrong and what should be changed. 

While some teams are quite happy with meetings like this, we have all the ingredients for a complete waste of time. The poor guy standing in the front is getting a lot of negative input from his peers. He will try to defend himself (and his code), wasting even more time. Things are even worse if there is no formal follow up. Did someone write down what needs to be changed in the code? Will somebody check if all of the comments are correctly implemented afterward? There is a huge risk of looking stupid in the sort term, with no accountability in the long term. It is called a <em>zombie</em> review because after four hours of staring at the code and being defensive towards your colleagues, everybody feels like a zombie and wants to go home.

## How can we use this?
Any engineer could have told you that short feedback loops are important. In fact, one of the important features of our product is that hardware designers get feedback sooner. I find it interesting to hear, from people working in a completely different field, that my intuition on automatic feedback was right. It will not only increase the quality of the code, but it will also keep the engineers happy at their job.

I would never have thought that engineers needed coaching from psychologists, or that the field of engineering had a psychological side to it. But you learn something new every day!





