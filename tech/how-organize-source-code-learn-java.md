---
title: "How to organize source code? Learn from Java."
layout: page 
pager: true
author: philippe.faes (Sigasi)
date: 2009-09-28
tags: 
  - source code
  - naming conventions
  - file structure
---

Since most HDLs do not force you to use a specific directory structure in your projects, each organization is left with the burden to [devise its own conventions](how-do-you-organize-source-code-your-hardware-project.html). This post describes directory and file naming conventions, learned from the <a href=http://java.sun.com id=ytvn title=Java>Java</a> programming language.

### Basic structure

The basic design unit in Java is the Java Class. Each Java class has its own file, with the file name identical to the class name, and the extentions `.java`. Java classes are further organized in Java packages, which are visible in the source code. Java packages correspond directly to the directory structure of a Java project. The convention for package naming is that package names correspond to the domain name of the organization that provides the package.

An trivial example will make things clear. I've created a trivial hello-world example in the folder `c:\projectdir\`. The example consists of a single class HelloWorld (naming convention in Java is that class names start with a capital, and use <a href=http://en.wikipedia.org/wiki/CamelCase>CamelCase</a>) in the package `com.sigasi.example`.

The only file we need for this project is:
```
c:\projectdir\com\sigasi\example\HelloWorld.java</pre>
```

When several subprojects are aggregated, each project has to conform to the directory structure:

```
c:\projectdir1\com\sigasi\reusable\HelloUtils.java
c:\projectdir2\com\sigasi\example\HelloWorld.java
```
 
The only thing a Java tool needs to know to process this aggregated project, is the root directories of each subproject. In this case `c:\projectdir1` and `c:\projectdir1`. This way, you do not have to list which files should be included or excluded in your build. The convention is simple: _all_ files will be compiled.

Note that package names start with internet domain names, in inverse order (here: `sigasi.com`). This avoids name clashes, since each organization can create its own package structure within its own domain.

### Improvement: source and binary dirs

When compiling the previous examples with a standard Java tool, the binaries (class files, in Java-speak) will be in the same directory as the source files: `c:\projectdir1\com\sigasi\reusable\HelloUtils.java`

```
c:\projectdir1\com\sigasi\reusable\HelloUtils.java
c:\projectdir1\com\sigasi\reusable\HelloUtils.class
c:\projectdir2\com\sigasi\example\HelloWorld.java
c:\projectdir2\com\sigasi\example\HelloWorld.class
```

This is not desirable. First, when you share the source files (e.g. in a version control system, or a tarball) you do not want the binaries. Conversely when shipping the binaries to a customer, you probably do not want them to see your source code.

Most Java projects nowadays split the source and binary files in a separate directory, typically `src` and `bin`:

```
c:\projectdir1\src\com\sigasi\reusable\HelloUtils.java
c:\projectdir1\bin\com\sigasi\reusable\HelloUtils.class
c:\projectdir2\src\com\sigasi\example\HelloWorld.java
c:\projectdir2\bin\com\sigasi\example\HelloWorld.class
```

As an extra advantage, it is now trivial to remove all compiled files without special scripts or pattern matching: just remove the `bin` directory.

### Advantages of Java-style directory structure

Java-style directory structure has the following advantages:


* Each project or sub-project has a root directory for its source code.
* No name clashes: each organization controls its own name space.<br>
* No need to list which files you want to compile: tools only need to know those root directories to do anything
* If source an binary files are split, it is very easy to share binaries or source files and to clean the build.
* The project root directory is extremely clean. It contains only a few directories (`src`, `bin` and perhaps `doc`) and a few build scripts or project descriptors (e.g. `build.xml` for [Ant](http://ant.apache.org)
