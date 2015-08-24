---
title: Generics View
layout: page 
pager: false
---

Description
===========

The Generics View shows the generic and constants values of components in the hierarchy. To activate the Generics View: go to the [hierarchy-view], right-click an instantiation (or the top level) and select **Show in Generics View**. By default, the Generics view will be positioned over the outline view. Use the tabs to select which view you want to see.

The Generics view shows the generics and constants values of the component that is active in the Hierarchy view. The internal compiler computes the generics and constants, even if they are passed down through the hierarchy, and even if arithmetic operations are used to define new values. If the value cannot be computed for some reason, the Generics view will report the value to be `unknown`. Double-clicking a generic or constant will open the corresponding declaration in a VHDL editor.
