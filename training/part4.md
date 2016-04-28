---
title: Hierarchy, Graphics and documentation
layout: page 
pager: false
comments: true
---

In Part 4 you will learn how to use the Hierarchy View. You will also learn how to use and export Graphics and Documentation with Sigasi Studio.

### Hierarchy View

* Import project `part4` (and close unrelated projects)
* Open `testbench.vhd`
* Right click the `STR` architecture and select **Set as Top Level**
* Explore the resulting tree in the Hierarchy View:
  * Inspect the value of generics (Notice how the value in `dut_instance` differs from its default value)
  * Change the value of a generic and note how the Hierarchy View refreshes when you save the file.
  * Add a syntax error in a file and note that Sigasi Studio is able to recover and still show valid content in the Hierarchy View.
  * Disable the **Toggle Hierarchy Refresh** toggle button, and note Sigasi Studio no longer auto-updates the hierarchy when edit your files. (This is useful for big hierarchies)

### Block Diagram View

* Open `testbench.vhd`
* Right click the VHDL editor and select **Show in > Block Diagram**
* Double click ports or connections to navigate to the corresponding VHDL code. (This also works the other way around by clicking **Show in > Block Diagram** on ports in the VHDL code)
* Make some changes in the VHDL code and note how the Block Diagram updates when you save your file.
* Select `dut_instance` in the diagram, right click and select **Open Entity Declaration** to navigate to the corresponding entity, `dut`.
* Click the save icon 💾, and export the diagram to a PNG or SVG file.

### State Machine View

* Click **Window > Show View > State Machines** to open the State Machine view
* Open `dut.vhd`
* Double click on a few nodes and transitions in to navigate to the corresponding VHDL code.
* Change the VHDL code of the state machine and notice how the view updates (See the TODO tag)
* Add a comment to the `when idle: state := preparing;` transition. For example: `-- start preparing`  
  Notice how the transition labels update
* Toggle the (Aa)-button to show/hide the transition labels.
* Click the save icon 💾 to export the diagram to file.

### Documentation

* Import project `Sigasi_doc`
* Open the Documentation View
* Open file `testbench.vhd`
* Edit comments and note how the documentation is updated:
  * Document a port (by adding a comment)
  * Document a generic
  * Document an architecture
  * Document an entity
* Export PDF
* Inspect the DocBook file

### Optional Extra tasks

* Try out **Net search** in `stimgen.vhd` (Project `part4`)
* State Machine View: Add a second state machine in `dut.vhd` and note how it is displayed in a new tab.
* Finish the documentation of the Project to get a clean and complete PDF.

<!--
* Modify the documentation templates:
  * Copy the templates from the Installation (`<installation folder>/plugins/com.sigasi.hdt.docgen.resources_.../templates`) to your workspace (`<workspace folder>/sigasi-templates`)
  * Modify the `preview.xml` template and inspect the result in the **Documentation View**
-->

<p style="page-break-after:always;"></p>

# Troubleshooting

* Where are my views? → **Window > Perspective > Reset perspective**
* Unexpected error markers? → **Project > Clean...**
* Error markers are not updated? → Make sure **Automatic build** is enabled
* More on <http://insights.sigasi.com/manual/trouble.html>
