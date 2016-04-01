---
title: "Hosting the Sigasi documentation in your secure and closed network"
layout: page 
pager: true
date: 2016-04-01
tags: 
  - howto
comments: true
---

Some development teams are completely disconnected from the public internet, for security reasons. Engineers in these teams can still access the documentation on [Sigasi Insights](http://insights.sigasi.com), using the following procedure.

Some things will not work if you view this website offline:

 * Video's are hosted separately, and will not be available
 * External links will be broken
 * The comments sections use and external service anw will not be available

## Easiest

You can [download the entire Insights website](https://github.com/sigasi/sigasi_insights/archive/gh-pages.zip) including all html, css, png files, etc. All internal links in this site are "root-relative", which means that you can serve them at the root directory of your local webserver, for example at `http://localhost:8000/` so that the tech section would be available at `http://localhost:8000/tech`.

## Relative paths

The above won't work if you need to serve the documentation in some non-root directory, for example at `http://your.example.com/sigasi`, or if you want to browse the files directly from your file system.

In this case, you need to change the links to relative paths. You can use the following Unix commands to do this:

    sed -i -e 's|<a href="/|<a href="./|' *.html
    sed -i -e 's|<a href="/|<a href="./../|' */*.html
    sed -i -e 's|<a href="/|<a href="./../../|' */*/*.html
    sed -i -e 's|<a href="/|<a href="./../../../|' */*/*/*.html

## Python / Urubu experts

If you (or your system administrator) can download and install Python and some Python packages (urubu, jinja2, and some more), you can download the source code of the Sigasi Insights website from GitHub.
You can then compile the Insights website yourself, using any desired prefix. You can even use Urubu to host the documentation on your local machines. 
