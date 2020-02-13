---
title: "Creating e-books with Eclipse"
layout: page 
pager: true
author: Hendrik Eeckhaut
date: 2012-02-08
tags: 
  - documentation
  - planeteclipse
comments: true
bannerad: true
---

<img style="float:right" src="/img/tech/epub.png" />
In November last year, I attended a very interesting session of [Torkild Resheim about creating e-books in Eclipse](https://www.slideshare.net/torkildr/eclipsecon-europe-2011-build-your-epubs-with-eclipse) at EclipseCon Europe in Nuremburg. Torkild demonstrated a [new plugin](https://bugs.eclipse.org/bugs/show_bug.cgi?id=332122)  he developed that converts wiki markup files into e-books. I intended to try this as soon as I got home from the conference. But I did not get to it until now.

The e-book plugin is a new extension to the wikitext component of the [Mylyn Docs project](http://www.eclipse.org/projects/project.php?id=mylyn.docs). It is not officially released yet, but here are some easy steps on how to create an e-book with Eclipse today:

1. Clone the git repository of Torkild from github:
     `git clone https://github.com/turesheim/org.eclipse.mylyn.docs.git`
2. Use Maven Tycho to build the Eclipse plugin:
     `mvn install`
3. Open Eclipse (I used [Eclipse for RCP developers](http://www.eclipse.org/downloads/packages/eclipse-rcp-and-rap-developers/indigosr1)), and install the compiled plugins from `<clonedRepoLocation>/org.eclipse.mylyn.docs/org.eclipse.mylyn.docs-site/target/site`
4. Open an existing project that contains your wikitext (in my case Textile) file
5. Make sure that your file contains no errors. The error messages you otherwise get in the next step are not so useful yet.
6. Right click the wikitext file and select **WikiText > Generate EPUB...**
7. Enter all extra metadata and optionally choose a stylesheet and cover image.
8. Open the epub file in an e-book reader and inspect the result. I used the open source tool [Calibre](https://launchpad.net/calibre) for this.

As an experiment I created an [e-book of the Sigasi 2.1.1 documentation](/resources/tech/Sigasi-2.1.1.epub). I am really pleased by the result. It is great to read documents on a tablet and I hope this can be a good motivator to write some extra documentation.
