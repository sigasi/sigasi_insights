---
title: "Make Eclipse open files from the command line"
layout: page 
pager: true
author: lieven.lemiengre (Sigasi)
date: 2011-03-23
tags: 
  - command line
  - eclipse
  - howto
  - planeteclipse
comments: true
bannerad: true
---

Since the release of Eclipse 3.6 it’s been possible [to open files in Eclipse from the command line](http://download.eclipse.org/eclipse/downloads/drops/R-3.6-201006080911/eclipse-news-part1.html#Platform). There are [a](http://aniefer.blogspot.com/2010/05/opening-files-in-eclipse-from-command.html) [few](http://dsdp.eclipse.org/help/latest/index.jsp?topic=/org.eclipse.platform.doc.isv/guide/product_open_file.htm) [blogs](http://wiki.eclipse.org/Eclipse/OpenFileFeature) that explain in great detail how this feature can be implemented.  I however would like to show you the simplest way to make use of this feature in your RCP application.

My goal is to be able to write `./myapplication the_path_to/afile.txt` on the command line to open a file in my Eclipse application. We can achieve this quickly if the entrypoint of your application extends the `IDEApplication` class. Unfortunately `IDEApplication` is not a part of the public Eclipse API, it’s a class in an internal package. I use it to get things working without having to write pages of code, you can replace it later with your own implementation.

There are two things left to configure.

First you need to be careful with the name of your application and it's executable. The `appName` property in your `plugin.xml` file and the filename of your executable have to match. If the name of your executable is `myapplication` (or `myapplication.exe` on windows) then the `appName` property should be capitalized, so it becomes `Myapplication`.

```xml
<extension id="product" point="org.eclipse.core.runtime.products">
  <product application="com.sigasi.myapplication.rcp.application" name="Sigasi">
    <property name="appName" value="Myapplication" />
  </product>
</extension>
```

Now you should be able to open files in your Eclipse application using
```
./myapplication --launcher.openFile the_path_to/afile.txt
```

The last step is to eliminate the commandline option `--launcher.openFile`. You can do this by adding the following snippet to the ini-file of your Eclipse application.

```bash
--launcher.defaultAction
openFile
```
