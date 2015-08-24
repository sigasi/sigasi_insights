---
title: Hierearchy View
layout: page 
pager: false
---

Descrtiption
============

The Hierarchy view shows the VHDL design hierarchy starting at a selected top level object. To choose a top level, open a file and right-click on an architecture (or entity or configuration). Then click **Set as Top Level**. Alternatively you can click the **Set Top** button in the hierarchy view to open a hierarchy top level selection dialog. You can use the filter field to quickly search for a certain top level. 

Navigate
========

When you double-click an object in the hierarchy, the Editor view is updated accordingly, possibly by displaying the contents of a different file.

Configure
=========

The hierarchy view automatically refreshes itself when you save your design files. If you have a really large design this could slow you down. You can turn the automatic refresh on and off by toggling the **refresh** button ![Refresh](/images/icons/refresh.gif) .

Use the _instantiations_ filter ![Instantiation](/images/icons/Instantiation.png) , to hide everything except instantiations and structural statements are shown.

You can launch a simulation with the ![Run](/images/icons/run_exc.gif) button, if you first set up an [/manual/integration].
