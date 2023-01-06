---
title: "Setting up a Project"
showinmenu: true
weight: 3
pager: true
---

{{< figure src="/img/vscode/VSCodeScreenshot.png" link="/img/vscode/VSCodeScreenshot.png" alt="VS Code sigasi" class="uk-align-right" width="400" >}}

The extension will start once a VHDL, Verilog or SystemVerilog file is opened.

Note that the project settings and library mappings you might be used to from Sigasi Studio are handled differently in the Sigasi extension. E.g. the library mappings are kept in a `library_mapping.json` file in the project folder.

Library mappings are currently _not visualized_ in the file Explorer side pane.

## Library configuration

The `library_mapping.json` file will be managed for you by the extension.
To change library mappings, you can use the right-click menu and select **Set to Library** to change library mappings.

In case you wish to create the `library_mapping.json` file yourself or programatically, you need to make sure the `library_mapping.json` file contains a **default mapping**.
This default mapping will exclude or specify the library for project folders and files that have no other mapping.

Here is an example `library_mapping.json` file where all folders and files are mapped to the `work` library by default.

``` json
{
  "version": "0.1",
  "mappings": [
    {
      "library": "work",
      "files": [
        ""
      ]
    }
  ]
}
```

In the following example all folders and files of the project are excluded by default.
The `my_lib` folder is mapped to a library with the same name.
The `step_1_welcome.vhd` file is mapped to the default `work` library.

``` json
{
  "version": "0.1",
  "mappings": [
    {
      "library": "my_lib",
      "files": [
        "my_lib"
      ]
    },
    {
      "library": "work",
      "files": [
        "step_1_welcome.vhd"
      ]
    }
  ],
  "excludedFiles": [
    ""
  ]
}
```

## Workspace

The extension currently supports a single project per workspace.
To open multiple HDL projects, open each project in a separate VS Code window.
