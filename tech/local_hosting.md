---
title: "Hosting the Sigasi documentation in your secure and closed network"
layout: page 
pager: true
date: 2016-04-01
tags: 
  - howto
comments: true
---

Some development teams are completely disconnected from the public internet, for security reasons. Engineers in these teams can still access the documentation on [Sigasi Insights](/), using one of the procedures below.

Some things will not work if you view this website offline:

 * Video's are hosted separately, and will not be available
 * External links will be broken
 * The comments sections use and external service and will not be available

## Quick method

You can [download the entire Insights website](https://github.com/sigasi/sigasi_insights/archive/gh-pages.zip) including all html, css, png files, etc. All internal links in this site are "root-relative", which means that you can serve them at the root directory of your local webserver, for example at <http://localhost:8000> so that the tech section would be available at <http://localhost:8000/tech>.

### Relative paths

The above won't work if you need to serve the documentation in some non-root directory, for example at `http://your.example.com/sigasi`, or if you want to browse the files directly from your file system.

In this case, you need to change the links to relative paths. You can use the following Unix commands to do this:

```sh
sed -i -e 's|<a href="/|<a href="./|' *.html
sed -i -e 's|<a href="/|<a href="./../|' */*.html
sed -i -e 's|<a href="/|<a href="./../../|' */*/*.html
sed -i -e 's|<a href="/|<a href="./../../../|' */*/*/*.html
```
## Local build with Python and Urubu

You can also generate the Sigasi insights page locally:

1. Download the source code of the Sigasi Insights website from GitHub: <https://github.com/sigasi/sigasi_insights>
2. Make sure Python is installed
3. Install the necessary python Python packages: `pip install urubu`
4. Generate the html code: `make build`
5. Host the documentation on your local machine with `make serve`
6. Visit <http://localhost:8000> to see the documentation
