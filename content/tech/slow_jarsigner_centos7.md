---
title: "Extremely slow jarsigner on Centos7 build server"
layout: page
pager: true
author: Hendrik Eeckhaut
date: 2016-08-18
tags: 
  - java
comments: true
bannerad: true
---


While I was setting up a new build server for [Sigasi Studio](http://www.sigasi.com/products), I noticed that the full product build script was a lot slower. *A lot slower* in this case is 9+ hours instead of an expected 3.5 hours. This post describes my debug quest and solution.

I soon discovered the delay was caused by signing the Java Jars. For signing, Maven uses following command:
```bash
jarsigner -keystore sigasiKeyStore -storepass '*****' -digestalg SHA1 -sigalg SHA1withRSA -tsa https://timestamp.geotrust.com/tsa -keypass '****' ./target/com.sigasi.hdt.exampleprojects-3.2.0-SNAPSHOT.jar
```

Removing the `-tsa https://timestamp.geotrust.com/tsa` part, removed the unexpected delay. But this tsa (Time Stamping Authority) parameter is required, so that the signature remains valid after the certicate expires. But why does this make the signing process so slow? Network? Slow server? Replacing the tsa server with other servers did not make a difference (+ the tsa server worked fine with the old build server).

With `jstack`, I could see that one of threads was doing a blocking read, while reading random data. From a [quick internet search](https://en.wikipedia.org/wiki//dev/random), I learned that `/dev/random` is a **blocking** pseudorandom number generator. It blocks when there is not enough entropy. And it will block until enough additional environmental noise is gathered to resume.

Checking the speed of `/dev/random` revealed this:
```bash
[heeckhau@bilal ~]$ time dd if=/dev/random bs=1k count=1 
Q�P���0+1 records in
0+1 records out
6 bytes (6 B) copied, 115.772 s, 0.0 kB/s

real    1m55.773s
user    0m0.000s
sys     0m0.001s
```
and running `cat /proc/sys/kernel/random/entropy_avail` showed values around 55. I found the culprit.

So the reason for the slow jarsigner was that the build server did not have enough entropy to generate random data quickly.

Applying one of the solutions from [this StackOverflow questions](http://stackoverflow.com/questions/4819359/dev-random-extremely-slow) solved the issue for me:
```bash
yum -y install rng-tools
service rngd start
systemctl enable rngd.service
```

New result of `time dd if=/dev/random bs=1k count=1`:
```bash
time dd if=/dev/random bs=1k count=1
>�a���5��C⬸�NHh��%�[�dL����w
                            �#�/��?Ṡ��▒y:T�4�Y}{pWdn>);�F�*0+1 records in
0+1 records out
78 bytes (78 B) copied, 7.3129e-05 s, 1.1 MB/s

real    0m0.001s
user    0m0.000s
sys     0m0.001s
```
and `/proc/sys/kernel/random/entropy_avail` now shows a value bigger than 3000. At last, issue solved... 

In hindsight this makes perfect sense, but I did not see this one comming. So I spent another few hours on unexpected maintenance... I hope this post can help you save some.
