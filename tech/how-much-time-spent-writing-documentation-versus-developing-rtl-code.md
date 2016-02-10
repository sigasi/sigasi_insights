---
title: "How much time is spent on writing documentation versus developing RTL code?"
layout: page 
pager: true
author: Smrita
date: 2013-11-27
tags: 
  - documentation
  - Guest Blog
comments: true
---
## Estimation of time for technical documentation and software development

Estimating software development schedules is a skill. The programmer who is going to do the work can figure out what steps they will need to take to implement that feature. And only the programmer can estimate how long each one will take. The nature of software development is that things which seem simple are often surprisingly complicated when we think about all the details. Attempting to estimate a feature before we've figured out how the feature is going to work, in detail, can't possibly work, even if we [multiply our best guess by three,](http://www.fogcreek.com/fogbugz/docs/70/topics/schedules/Estimatingsoftwaretasks.html) because our "best guess" is based on very little in the way of facts.
One of the most painful questions that developers are faced with is estimation and justification of time required for technical documentation development. Documentation developers need a methodology to provide a more or less precise and, most importantly, well-grounded estimation of documentation development time, already at the problem definition stage.

## General considerations on the time estimation

### Before we speak of estimation, we need to make a few reservations as to planning as such.

First of all, the time required to develop a package of technical documentation mainly depends on the labor content of the task. This is not true in every situation (in the situation of baobab growing it is probably not true at all) but it works for documentation.
Secondly, any work runs various risks–illness, urgent travels, delays in related works, etc.
Thirdly, even if the developer is concentrated on one problem, which is a rare case, he still spends some time (usually around 25%) on meetings, reporting, training, support of earlier projects and other routine.
That is why here, we will assume that it is labor content that documentation time is calculated by, and will focus on the ways of labor content estimation in working hours per worker. Having measured the labor content, we can set the term time through a planning procedure considering resources and risks. The procedure is described in books on project management and is not specific for documentation.

### Time estimation in documentation

Methods of time estimating for technical documentation exist already and are even described in standards. For instance, ISO/IEC 15910-2002 offers two methods: top-down design and minutes/hours based design.
Top-down method suggests a problem be divided into parts (documents, chapters), each part measured in pages, and further planning based on a certain documentation output ratio. The authors of the standard believe, in particular, that a writer monthly produces 22 pages of new text and 44 of updated. Although this ratio may seem ridiculously low at the first glance, the fact is that it includes not simply written but already approved pages that have gone through the entire cycle the standard stipulates. Besides, the writer will only be doing the proper writing seven days a month at most, which, given the daily output at 3-4 pages (as most agree), gives us about the same result. (This is described in detail in the documentation management seminar.)
Minutes/hours based method determines the output ratios for each activity involved in the documentation process. Thus, if we are to write a 100-pages document, we will spend X much time on typing, Y much time on editing, Z much time on graphic design, etc.
The ‘Read Me 1st’ method by Sun describes a similar technique.

|    | ISO/IEC 15910-2002   | Read Me 1st |
|----|----------------------|-------------|
| Writing | 1 hour/page | 3-5 hours/page |
|Reviewing | 0.5 hours/page | 1-3 hours/page |
|Editing | ~2.5 hours/page | 0.2 hours/page |
|Indexing |  | 5 hours/page|
|Proofreading |0.25 hours/page | |
|Production | 8-10 days | 5% of  a project | 
| Project management | ~ 100 hours / project | 10-15% of a project |


On the one hand, software development time must be estimated. The work load on one programmer is measured in SLOC (Source Lines of Code); the coding time ratios are also defined. Yet, no particular task implies the exact program size in lines. Therefore, estimating the time and labor content (the reservations made for documentation process remain true with programming) of a particular development uses techniques based on the so called metrics of a task.

In conclusion, a great amount of effort is spent on technical documentation of any project. Next week, I will discuss tools that help in writing technical documentation for software and RTL documentation.