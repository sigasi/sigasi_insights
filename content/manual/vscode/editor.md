---
title: Sigasi Studio for VS Code Editor
showinmenu: true
weight: 5
pager: true
aliases:
  - /manual/vscode/editor/
---

## Syntax and Semantic Highlighting

The Sigasi extension supports syntax and semantic highlighting.

* Syntax highlighting: colors code according to the lexical classification (such as *keyword* or *string*)
* Semantic highlighting: colors code according to its meaning (different colors for *constants* and *signals*)

Note that some VS Code themes might not support semantic highlighting. Be sure to use the default VS Code themes if you're missing this feature.

* In a theme that supports semantic highlighting, you'll see that e.g. `port`, `signal`, and `type` names have a color that is different from the language keywords.  
{{< figure src="/img/vscode/supported_semantic_highlighting.png" link="/img/vscode/supported_semantic_highlighting.png" alt="Supported semantic highlighting" width="600" >}}
* In a theme that does not support semantic highlighting, names like those of a `port`, `signal`, or `type` will have the default text color.
{{< figure src="/img/vscode/unsupported_semantic_highlighting.png" link="/img/vscode/unsupported_semantic_highlighting.png" alt="Unsupported semantic highlighting" width="600" >}}

The latter might also happen when there's no `.project` file in your root directory. Without it, the Sigasi extension does not start and only provides basic syntax highlighting.

## User-Defined Code Snippets

VS Code supports user-defined code snippets as explained [here](https://code.visualstudio.com/docs/editor/userdefinedsnippets). To add snippets yourself, follow the steps below.

* Open the _Command Palette_ (**Ctrl+Shift+P**) and type **Snippets**
* Select **Snippets: Configure User Snippets**
* Type **vhdl** or **systemverilog** to open the corresponding _JSON_ file where you can add your snippet like the examples below.

### VHDL Snippet Example

``` json
{
    // Place your snippets for VHDL here.
    "package declaration": {
        "prefix": "package",
        "body": [
            "package ${1:name} is",
            "\t$0",
            "end package $1;"
        ],
        "description": "Insert package declaration"
    }
}
```

### SystemVerilog Snippet Example

```json
{
    // Place your snippets for Verilog and SystemVerilog here.
    "always posedge clk": {
        "prefix": "always",
        "body": [
            "always @(posedge ${1:clk}) begin",
            "\t$0",
            "end"
        ],
        "description": "Insert an always block with posedge clock"
    }
}
```

## Sticky Scroll

{{< figure src="/img/vscode/VSCodeStickyScroll.gif" alt="Sticky scroll in VS Code" width="700" >}}

You can use the sticky scroll to navigate through your HDL code more easily. This configuration can be enabled with the key `editor.stickyScroll.enabled`

## Stuttering

VHDL editors support [stuttering]({{< ref "/manual/common/editor.md#stuttering" >}}), which is enabled by default but can be toggled using the configuration option **Enable stuttering** with the key `sigasi.vhdl.stuttering`.
