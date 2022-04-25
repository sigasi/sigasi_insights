---                                                                            
title: "Sigasi's Software Development Kit Part 1" 
layout: page  
pager: true 
author: Mark Christiaens
date: 2022-04-25
tags:  
  - sigasi-studio 
  - vs-code
  - vhdl
  - verilog
  - systemverilog
  - ide
  - sdk
comments: true 
bannerad: true 
--- 

At Sigasi, we build tools to make you more productive.  Specifically, we enhance your productivity during chip design with SystemVerilog and/or VHDL.  For this purpose, two product lines are provided: [Sigasi Studio for Eclipse](https://www.sigasi.com/products/) and our [Sigasi for VS Code extension](https://www.sigasi.com/vscode/) (currently in Beta).  Both are focused on end-users.  

But what about "other" products that also require manipulating/visualizing VHDL or SystemVerilog?  What about simulation, design, code specification, validation/verification, SOC generation, code transformation ...  Many tools cover these domain and contain a home grown editor for HDLs.  The editor is used to inspect or modify an HDL project.  

Sadly, the user-experience of such home grown editors is often sub-par.
Probably, such an editor will support basic features like syntax highlighting, maybe a basic overview of your project layout but what about a real productivity boost?  Does it offer semantic highlighing, navigation to declarations, syntax checking ...?  Or what about really intelligent features like [renaming across the entire project]({{< ref "/manual/editor#rename-refactoring" >}}), [verifying coding styles]({{< ref "/manual/linting" >}}), offering automatic fixes for issues ...?  

Offering all these features requires orders of magnitude more development effort than a basic editor (many have tried and stranded).  So ... are you stuck?  No.  That's exactly where Sigasi's [Software Development Kit](https://www.sigasi.com/sdk/) (SDK) comes in.  

Sigasi extracted the core analysis engine from Sigasi Studio and packaged it into a separate product offering.  The SDK contains a set of libraries that allow you to bootstrap what is called a "Language Server" (LS).  

The use of a LS is a technique that was popularized by Microsoft's [Visual Studio Code](https://code.visualstudio.com/) (VS Code for short).  VS Code is a fairly recent platform for code editing.  As many such platforms do, VS Code modularly supports different languages through the use of plugins (or "extensions" in the VS Code lingo).  A barebones VS Code, with no extensions installed, has very little built-in programming functionality.  When you want to work with a new programming language, you teach VS code new tricks by installing the corresponding language extension.  

{{< figure src="/img/tech/sdk_message_exchange.png" alt="Client/server message exchange" width="100%" class="uk-align-center" caption="Enabling rich editors through a client/server architecture" >}}

However, where most existing IDEs would load all of the extension's code into the main IDE, VS Code sets things up according to a client/server architecture.  The _client-side_ code runs in the VS Code process and is usually responsible for providing the user interaction.  The client is typically written in TypeScript or JavaScript.  The _server-side_ is where the heavy-lifting occurs.  The server is a separate process (written in pretty much any language the authors found useful) that is capable of analyzing source code of a particular language.  As an example, Microsoft maintains [a list of such language servers](https://microsoft.github.io/language-server-protocol/implementors/servers/).  

The client and the server communicate with each other over a socket connection using a standardized JSON-protocol, called the [Language Server Protocol](https://microsoft.github.io/language-server-protocol/) or LSP for short.  At startup, the client and the server will communicate to configure the end-user's project for analysis by the server.  The server will analyze the project and will process all edits that the client forwards on behalf of the end-user.  Once the server has processed the project and caught up with additional edits, the client can query the server for all sorts of information.  Simple things like, "Are there syntax errors?", "How should I color this range of text?" all the way to advanced features like "Where in the project should I replace this renamed identifier with its new name?".

This client server architecture allows you to decouple the editing experience in the client from the heavy language analysis in the server.  The protocol is set-up in such a fashion that the client is never blocked by the server and whatever resource consumption the server has, it does not directly impact the client process.  But most importantly, besides ergonomics, the LSP allows you to reuse the server in a [host of other environments](https://microsoft.github.io/language-server-protocol/implementors/tools/).  When writing a plugin for those other environments, the authors can focus on the UI/client experience and reuse the LS as is.

Sigasi's SDK follows this exact strategy.  Sigasi has extracted the core analysis engine from its end-user products and wrapped this analysis engine into a server that supports the standard LSP (augmented with some additional protocol messages to support functionality beyond standard LSP).  

The SDK contains a little (Java) client library that is able to bootstrap Sigasi's language server, configure an HDL project and start communicating with it.  The server supports VHDL, Verilog, SystemVerilog and mixed projects.  Thanks to the client/server architecture, any product can integrate with Sigasi's LS. Even when said product is written in other languages than Sigasi's LS, it's just a question of bootstrapping the server and communicating with it via JSON.

Thanks to this LSP approach, Sigasi can now provide an SDK that does the heavy lifting of analyzing an HDL project.  Existing tools that want to level-up their editing experience can integrate this SDK and start offering a vastly superior experience with a limited investment.  The following functionality is currently available when licensing Sigasi's SDK:

| Feature                   | Description                                                                                                                                                                                   |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Folding                   | Identifies regions of your source code that can be hidden(folded).  For example, the if- and the else-leg of a conditional statement can be hidden so as to keep an overview of your code.    |
| Indentation               | Determine the correct amount of whitespace at the start of a line of source code so that your code is nicely aligned.                                                                         |
| Find references           | Find all references in the source code where a given identifier is used.                                                                                                                      |
| Go to declaration         | Go to the location (if any) where an identifier is defined.                                                                                                                                   |
| Syntax errors             | Identify syntax errors in your source code.                                                                                                                                                   |
| Linting / validation      | Flag dubious patterns, violations of a coding style ...                                                                                                                                       |
| Hover                     | Show detailed information about an identifier by hovering over it.                                                                                                                            |
| Content assist            | Suggest additions to your code.                                                                                                                                                               |
| Semantic highlighting     | Highlight / color your code based on the actual types of the identifiers.  This allows you, for example, to see at a glance that an identifier refers to a signal or a variable.              |
| Occurrence highlighting   | Highlight all occurrences of a given identifier in your code.                                                                                                                                 |
| Outline                   | Give an overview of the structure (outline) of the current file.                                                                                                                              |
| Preprocessor hover        | Hover over a (SystemVerilog) macro and show the resulting code after preprocessing.                                                                                                           |
| Rename refactoring        | Rename an identifier and immediately update every location (and only those) where the identifier is used.                                                                                     |
| Structured selection      | Select parts of your source code taking the structure of the language into account.  For example, select the entire condition-expression of an if-statement with only a couple of keystrokes. |
| Open design unit          | Open a dialog where you can type a name or pattern to open a specific VHDL or SystemVerilog design unit.                                                                                      |
| Go to implementation      | Go to the implementation.  For example, go to the function body corresponding to a function declaration.                                                                                      |
| Template autocomplete     | Insert the basic scaffolding of common language constructs.  For example, insert the basic outline of an architecture and entity definition.                                                  |
| Preprocessor autocomplete | Suggest possible invocations of (SystemVerilog) macros.                                                                                                                                       |
| Quick outline             | Show a compact, quick overview of the current file.                                                                                                                                           |
| Hierarchy view            | Show the hierarchy of your design.                                                                                                                                                            |
| Preprocessor view         | Show the entire SystemVerilog file after expansion by the preprocessor.                                                                                                                       |
| Quickfix                  | Suggest and apply fixes for problems that were detected.                                                                                                                                      |

Despite this vastly reduced barrier to entry, integrating Sigasi LS into a product still requires some effort.  In the next installments of this blog, we'll zoom in on the consequences of moving to a client/server architecture and we'll explain how to communicate your product layout to the LS.  
