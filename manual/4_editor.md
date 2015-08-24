---
title: VHDL Editor
layout: page 
pager: true
---

- See also: [/manual/2_user_interface#Editor View]

In addition to the powerful features of an Eclipse editor, the VHDL
editor that comes with Sigasi supports a number of advanced editing
features which are specifically useful for VHDL editing. These are
described in this chapter.

Stuttering
==========

Stuttering is an editing technique popularized by Emacs, that lets you
type certain things really fast. Stuttering means that you tap a certain
key twice and it expands to something more complex. For example, press
the period key **.** twice, and the editor will expand it to a right
arrow `=>`. Stuttering works like double clicking: if you type keys
**slowly**, the stuttering mechanism will not be triggered.

The following stuttering keys are available:

Keys           | Effect
-------------- | ------------
**,,**    | `<=`
**..**    | `=>`
**::**    | `:=`

Stuttering can be disabled or enabled in **Window \> Preferences \> VHDL \> Enable Stuttering**.

Smart Indentation {#smartindent}
=================

When you press enter, Sigasi automatically adjusts the indentation of
current and the new line. Depending on the content of the preceding
line, Sigasi will automatically increase or decrease the indentation
level. E.g. an extra indent after and `if`-statement and remove an
indent for the matching `else`-clause.

You can enable/disable this feature via **Window \> Preferences \>
Sigasi \> VHDL** by toggling the **“Enter adjusts indentation on current
and next line”** setting.

**Tabs vs. spaces:** This features inserts tabs characters or spaces,
according to your preferences. 

- See also: [faq-tabs]

<a href="//fast.wistia.net/embed/iframe/asr4pf7p8e?popover=true" class="wistia-popover\[height=533,playerColor=7b796a,width=800\]"><img src="https://embed-ssl.wistia.com/deliveries/85b4fd88af9a4430f70df330bb8409bc8557da2f.jpg?image_play_button=true&image_play_button_color=7b796ae0&image_crop_resized=200x133" alt="" /></a>

<script charset="ISO-8859-1" src="//fast.wistia.com/assets/external/popover-v1.js">
</script>

VHDL code formatting
====================

Press CTRL+SHIFT+F to format your current VHDL file.

This includes:

* indentation
* vertical alignment of certain symbols like “<=”
* wrapping lines that are too long

Configuration
-------------

You can set your preferences for Tabs or spaces under **Window \>
Preferences \> General \> Editors \> Text Editors \> Insert Spaces for
Tabs.**

Other preferences for code formatting are part of Sigasi Premium. You
can configure them at **Window \> Preferences \> Sigasi \> VHDL \>
Formatting**
Configurable settings currently include:

-   Preserve newline characters
-   Upper case for VHDL keywords
-   Alignment column for trailing comments

