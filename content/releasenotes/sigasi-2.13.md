---
title: Sigasi 2.13
layout: page
pager: true
date: 2013-04-22
---

Sigasi 2.13 brings official **Quartus integration** to Sigasi plus
numerous improvements and bugfixes.

Sigasi as HDL editor for Quartus
--------------------------------

Today, Sigasi’s integration with Altera Quartus II graduates from its beta period. We made the Quartus II integration as simple and transparent as possible. Configure Sigasi as default editor in Quartus II and from there, everything is automatic.

Your Sigasi project will automatically listen to changes of the Quartus II project and if you add files in Sigasi, they will be added to your Quartus II project too.

See it in action : [Sigasi Pro integration with Altera Quartus II](/screencasts/sigasi_pro_integration_with_altera_quartus_ii)

Other new and noteworthy improvements
-------------------------------------

-   The [Eclipse git plugin **EGit**](http://www.eclipse.org/egit) is now pre-installed in the standalone version of Sigasi
-   Autocomplete **templates for Verilog**
    ![templates for Verilog](/img/releasenotes/2.13/verilogtemplatespreferencepage.png "templates for Verilog")
-   Replaced the memory warning and vsim detection dialogs with *non blocking* pop-ups
    ![memory warning](/img/releasenotes/2.13/memorywarningpopup.png "memory warning")
-   Improved autocomplete for case statements: also offer template when
    typing case expression
-   Standalone version: use `<HOME>/workspaceSigasi` by default
-   Show name of instantiated item in outline and hierarchy view (in
    addition to label)
-   Support multi-line assert statements in the formatter
-   Better hover for aliases
    ![Alias Hover](/img/releasenotes/2.13/hoverofalias.png "Alias Hover")
-   Updated Java Runtime Environment in stand-alone version to Java 7 update 17
-   Added a dynamic variable to run configuration to query the toplevel name :
    `${vhdl_toplevel}`

Bugfixes
--------

-   ticket 1554 : Hover does not work in template mode
-   ticket 2377 : Performance bug in hierarchy view
-   ticket 2421 : Problem with modelsim.ini path on Windows
-   ticket 2451 : Exception in the CSV exporter
-   ticket 2452 : Uppercase/lowercase issues in Turkisch locale
-   ticket 2463 : Notify version control system (ClearCase) when library
    mapping file is modified

Download/Update
---------------

If you have Sigasi 2 installed, you can {{< update_sigasi >}}. You can also {{< download_latest >}}.
