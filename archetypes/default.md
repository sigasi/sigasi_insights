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
Inserting a figure below with tons of options.

{{< figure src="/img/logo_positive.jpg" link="/img/logo_positive.jpg" alt="alt text" caption="caption text" title="title text" width="200" class="uk-align-right" >}}

Because of the `uk-align-right` in the `class above, this text should float to the left of the figure.
