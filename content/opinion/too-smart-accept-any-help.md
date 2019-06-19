---
title: "Too smart to accept any help?"
layout: page 
pager: true
author: Philippe Faes
date: 2010-03-02
comments: true
bannerad: true
---

Are you so smart you don't need any help? Are you infallible even when you pressed for time or under stress?

I know I'm not. I take all the help I can get. While I am typing this text, I have a spell checker that marks incorrectly spelled words as I type. Really, my English spelling is not too bad. I'm sure I am quite capable of writing short blog posts like this without a spell checker and without any errors. I'm also sure that someone could write terrible English sentences that would not be flagged by a spell checker.

It's just that my spell checker frees up my mind so that I can think of what to write and not of how to write it. In fact, I'm sure that most educated people, including my high school English teacher (Hi Mr. Johnson!) use spell checkers today. Somebody who knows the English language will benefit from the technology of spell checking and as a result finish writing his text faster with fewer errors. 

{{< figure alt="Too smart for new technology?" src="/img/opinion/caveman.jpg" class="uk-align-left" >}}
Same thing goes for other technologies. Humans make mistakes and if they tell you they don't, they are either lying or spending too much time double and triple checking their work. Any mistake that a simple technological tool can catch should be caught by that tool. A human being is too precious for repetitive work.

Some hardware designers claim that the compilation of their code passes at the first time attempt. I see three options: (1) they are stretching the truth, (2) they write <em>very</em> simple VHDL code or (3) they spend too much time proofreading their code before sending it off to a compiler. I know people in category 1 and 3.

There is no shame in getting error messages back from your compiler and simulator. In fact, the simulator is there to <em>help</em> you iterate over your code until it is good enough for synthesis. The only problem with compilers is that you don't get the error messages in the right time and place. You often get messages fifteen minutes (or hours) after you have typed the code. And the error message is not anywhere near the code. It is in a separate error log file or on a console. This forces you to:

* scan the console output for error messages,
* find the file and line number that corresponds to that error,
* try to figure out what you had been typing and
* finally fix the problem.

What you really need is somebody that tells you about your mistake, as you are making it. Engineers should understand the benefits of short feedback loops better than anyone. What you need is a setup with tight integration between your editor and a compiler. By this I mean: error messages appearing (a) each time you save (at the latest) (b) near the code that caused the error. 

Of course I would advice you to get an IDE like the one Sigasi sells, but that is not the point. I'm sure any Unix guru can set up a system like this, built on open-source tools. (If you do please share it, so we can all make hardware design more fun.) The point is that everybody makes mistakes, and everybody needs as much help from tools as they can get. Compile early - compile often.

Philippe Faes
