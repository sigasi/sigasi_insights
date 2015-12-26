---
title: "VETSMOD: Get better feedback from your VHDL code snippets"
layout: page 
pager: true
author: philippe.faes (Sigasi)
date: 2011-04-27
tags: 
  - VHDL
---
Code snippets are an excellent way to communicate a complex question in a concrete, easy to understand way. 
Whether you file a bug report with your EDA vendor ([which you always should](/tech/vhdl-recursion-and-useful-error-messages.html)), or you ask a question on <a href="http://stackexchange.com/filters/5287/digital-design">a Q&A forum</a>, an easy to understand code snippet will make it easy for others to understand your problem, and you will get a faster and more accurate response.

This post does not talk about small fragments you use in mid sentence, but about code blocks that are several lines long.

So here are my my seven laws for posting VHDL snippets. In fact, they are more <em>suggestions</em> and they work for other computer languages as well. These seven laws just come down to one single idea: <em>help the other guy help you</em>. Make your code is easy to read, understand and debug. That way, you will get a more accurate answer, more quickly.

## 1. Valid Code

Try to write valid VHDL code instead of meta-code. This way, people don't have to edit your code before they can run it through a compiler to check what is wrong.

Stuff like this does not parse:
```vhdl
if condition then
  do something
end if;
```
Instead, it helps if your comments are actually commented:
```vhdl
if condition then
  -- do something
end if;
```

## 2. Executable

Q: Hey, here is my module without a test bench and when I send this-and-that data, it gives an unexpected result!

If somebody wants to help you, they might want to use a simulator to reproduce what is going wrong. If you don't send them a small test bench, they will have to guess three things: your input data, the behavior of your test bench, and your expected output data. Any feedback based on these three guesses is likely to be of low quality.

## 3. Tested

Q: Hey, I've got this code and it does not work. Please help!

A: Hi, your code does not work because you forgot semicolons at the end of line 7 and there is a syntax error in line 20.

Q: Oh, but that's not what I meant. I just made an error copying the code.

Anybody who asks for help should be appreciative of the people that are trying to help. If somebody looks at your code and finds stupid typo's, you're wasting his time, and your own time.

Best thing is to run your code through your favorite VHDL compiler before posting it.

## 5. Small

Always try to post the smallest amount of VHDL code that gets your point across. Quite often, you will find that by reducing your problem to a smaller piece of code, you will be able to figure out the problem yourself. If you are reporting a bug in an EDA tool, bug reports with small code fragments are likely to get fixed sooner. 

## 4. Minimize comments

Q: I have this code and this-and-that is not working right.

A1: You have an error in line 4

A2: Line 4 is commented out, so this error will not affect the result.

Q: Oh, never mind line 4, it was still there because \[fill in some reason\]

Commented code is confusing. How should people interpret this code? If I read your code on the forum, I might miss the fact that it's commented and I start working through your comments. If I compile your code, I might not even see the commented lines.

Don't write copyright headers, don't leave commented code sitting there. Leave only short messages, relevant to your question.

## 6. Orderly formatted

Make it easy for others to read your code on screen. Use <a href="http://en.wikipedia.org/wiki/Wiki_markup">wiki formatting</a> provided by your forum, or use the `<code>` HTML tags. Use <a href="http://en.wikipedia.org/wiki/Indent_style">indentation</a>.

## 7. Don't ask "simple questions"

Q: I have this simple question

A: If it is a simple question, why are you asking it?

Q: It's not simple to me, but it must be simple to you!

A: If you don't know the answer, how can you know it's simple to me?

Avoid all of this fuss by not announcing that your question is simple. Maybe it is not so simple after all, and somebody has to spend half an hour figuring out a solution. You are downplaying his effort of helping you, which is not very polite.

## VETSMOD

In hindsight, I notice that these seven laws spell VETSMOD. I don't think that's a word and it's probably for the better. In fact, I bet this page will show up <a href="http://www.google.be/search?q=vetsmod">on Google</a> in a few days. Anyway, if you could make their code snippets a little more VETSMOD, you'd get better help faster.

Go try it out on <a href="/node/add/forum/55">our support forum</a> or on the <a href="http://electronics.stackexchange.com/questions/ask?tags=vhdl">Electronics StackExchange</a>.
