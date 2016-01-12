---
title: "VHDL Recursion and Useful Error Messages"
layout: page 
pager: true
author: philippe.faes (Sigasi)
date: 2011-01-16
tags: 
  - EDA2.0
  - VHDL
---
If hardware designers are to be more productive, the tools need to be better. Instead of building more complex tools (think: ESL and the likes) the EDA vendors should keep an appropriate focus on basic usability. Because, as Richard Goering says, <a href="http://www.cadence.com/Community/blogs/ii/archive/2010/05/24/what-is-eda-software-quality.aspx">just because it doesn't crash doesn't mean "quality."</a>

I just <em>lost two hours struggling with VHDL simulators</em>, while in fact I wrote a silly error in my VHDL code. If I write a simple VHDL error, I expect a simple error message. Now, the error I made was a function call with infinite recursion. Granted, most VHDL designers avoid recursion all together, but that is beside the point. Recursion makes it easy to express an algorithm, and is is fully supported in the VHDL standard. There should be no reason to avoid it (at least not in behavioral code).

## Proper behavior

Other languages provide decent error messages when you write infinite recursion:
```python
def foo(x):
   return foo(x-1)
foo(5)
```
Running this code in Python will get you a long stack trace that ends with:

```
File "test.py", line 2, in foo
RuntimeError: maximum recursion depth exceeded
```

After reading this, any 16 year old would think: "Hm, I might have hit the maximum recursion depth, perhaps there is something wrong with my recursive function foo in line 2." Problem fixed in 30 seconds or less.

Other languages use terms like "<a href="http://en.wikipedia.org/wiki/Stack_overflow">stack overflow</a>", which is a bit more abstract, but still easy to understand for any trained programmer or any kid with access to an online search engine.

## Confusing behavior
I did a similar thing in VHDL. I wrote a textbook algorithm, the <a href="http://en.wikipedia.org/wiki/Factorial">factorial</a> function, using recursion. I wrote a small error which caused the function to recurse infinitely. Silly me.

The tools, however, were not helpful. Mentor Graphics Modelsim just froze. That gives me very little information. I didn't know whether there was a bug in Modelsim, if my system was set up incorrectly or if there was an error in my design. That's a lot of place to look for an error.

I couldn't help but try the same on Xilinx ISim. ISim did not freeze, but its error message was less than helpful:
```
ISim log file
Running: /home/philippe.faes/workspace-sigasi/factorial/factorial -gui -tclbatch isim.cmd 
INFO: There is another simulation running in the same directory. Using database file name isim1.wdb.
ISim M.70d (signature 0x61e1bd6e)
WARNING: A WEBPACK license was found.
WARNING: Please use Xilinx License Configuration Manager to check out a full ISim license.
WARNING: ISim will run in Lite mode. Please refer to the ISim documentation for more information on the differences between the Lite and the Full version.
This is a Lite version of ISim.
Time resolution is 1 ps
# wave add fac_tb
# run all
Simulator is doing circuit initialization process.
Finished circuit initialization process.
The simulator has terminated in an unexpected manner.  Please review the ISim log (isim.log) for details.
```

So, let's look at isim.log, then. Oh no, that <em>was</em> isim.log! I expect you'd agree: there is ample room for improvement in the error messages.

## Call to action {#action}
But according to the <a href="http://www.jongordon.com/thenocomplainingrule.html">No Complaining Rule</a>, only constructive complaints are allowed. So, here is a way for you to help me solve this.

If you run in to cryptic error messages like this, please <em>report them to your tool vendor</em>. It is your right and your duty towards yourself and your fellow hardware designers. This is the only way the quality of your tools is going to increase. 

## Disclaimer

Sigasi is not without sin either. We work hard to make our software user friendly, and sometimes we fail, so [send-email].