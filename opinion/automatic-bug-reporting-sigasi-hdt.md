---
title: "Automatic Bug Reporting in Sigasi HDT"
layout: page 
pager: true
popular: true
author: Philippe Faes
date: 2011-04-13
comments: true
bannerad: true
---

In the latest release of Sigasi HDT, we introduced a problem reporting tool. This features sends error reports back to our servers so that we can find and squash even more bugs.

![Our Lava Lamps](images/lavalamp.jpg){: align="right"}
We think software quality is very important. We have a continuous integration test server that runs thousands of tests each time we make the slightest modification in our code. Every time, our parser process processes hundreds of thousands of lines of VHDL code. If anything goes wrong, anything at all, one of our lava lamps gets switched on, for everybody to see. Making defects so clearly visible helps us keep the software in working order all the time.

We wanted to take this one step further. Each time we get a serious problem report, we ask our users to send us a copy of their [logfile]. When we inspect these files, we often find issues that are not related to the user's original problem. Still, these issues are important enough to fix. In the controlled environment of a test set-up, we do not simulate all possible conditions, and so we do not trigger every bug in the software. With the new bug reporter, problems that arise on <em>your</em> machine will help improve the quality of Sigasi for <em>everybody</em>.

<h2>So how does it work?</h2>
Whenever we detect a problem (more specifically: an <a href="http://en.wikipedia.org/wiki/Exception_handling">exception</a>) that can be traced back to a piece of Sigasi code, we activate the bug reporter. The bug reporter collects specifics about this exception and about your system set-up. You will get a chance to review this information before you submit. In order to save bandwidth and not to annoy you, the bug reporter gets activated no more than once every two hours.

<h2>How about privacy?</h2>
What we send back is just the stack trace and the environment variables. We do not transmit your VHDL code or any files from your harddrive. Environment variables may include your username and working directory. Stack traces may include a VHDL identifier (such as a signal or package name). If you do not feel comfortable sending us this data, feel free to turn the bug reporter off: <strong>Window > Preferences > Sigasi (VHDL) > Automated bug reporting > Never</strong>.

<h2>Better Software</h2>
This is our first step in automatic bug reporting. We are really excited about the potential of this technology. I expect that we will catch quite a bunch of new bugs at first. Bugs that we would otherwise never think of and never search for. In the longer run, the number of new reports should ideally drop to (close to) zero. When (and if) we reach that stage, the automatic bug reporter will become like our bug reporting lava lamps: inactive most of the time, but always watching for new and unexpected bugs.
