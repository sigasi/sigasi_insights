---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
publishdate: {{ now.Format "2006-01-02" }}
lastmod: {{ now.Format "2006-01-02" }}
pager: true
author: Your Name
license: CC BY-ND 4.0
comments: true
bannerad: true
---
**Insert Lead paragraph here.**
From the front matter above, remove the entries you don't need.
E.g. most pages written by Sigasi don't need a separate license section.

# Introduction
## New Cool Post
## Another subtitle
# New main section

