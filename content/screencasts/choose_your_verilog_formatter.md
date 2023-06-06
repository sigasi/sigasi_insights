---
title: "Choose your Verilog formatter"
date: 2022-03-17
lastmod: 2022-03-17
pager: false
comments: false
layout: youtube
videoid: Mph2b64QntU
tags:
  - Verilog
  - SystemVerilog
  - formatting
---

When it comes to sharing your project code in a team, consistent formatting is important. This makes your code more readable for your colleagues or customers. The Sigasi Studio 4.15 release offers an additional choice to format Verilog and SystemVerilog code. You now can opt to use Verible for formatting your code in Sigasi Studio.

Verible is an open-source suite of SystemVerilog developer tools, including a parser, style-linter, and formatter. The tool suite is maintained by the CHIPS Alliance and available through GitHub. Sigasi Studio comes with a built-in version of the Verible formatter but also allows you to configure your own version of Verible to be used.

You can enable the Verible formatter in `Window > Preferences > Sigasi > Verilog/SystemVerilog > Formatting` you can select Verible instead of Sigasi formatting. Then navigate to the Verible Preferences tab to configure Verible. Use the "Edit" button to configure the arguments in a user-friendly and graphical way that previews how code will be formatted.
You can select settings for indentation and wrapping, for displaying of ports and parameters, how type declarations are formatted and for statements and expressions. Note that you should make sure the Eclipse setting to insert spaces for tabs is enabled and the tab width should match the setting for Verible to avoid mix ups between editing and Verible formatting.

To use Verible, assuming it has been configured and selected in the preferences before, just press **Ctrl+Shift+F** whenever you have a Verilog or SystemVerilog file open.

You might want to use a different version of Verible than the one that came with Sigasi Studio. In that case, you should enable the checkbox to use an external Verible executable in `Window > Preferences > Sigasi > Verilog/SystemVerilog > Formatting > Verible`. You should configure the installation path as well.

With this integration of the Verible formatter, you now have more options to format Verilog and SystemVerilog code. And you can use all Verible formatter configuration options.
