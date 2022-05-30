---                                                                            
title: "Sigasi's Software Development Kit Part 2" 
layout: page  
pager: true 
author: Mark Christiaens
date: 2022-06-01
tags:  
  - sigasi-studio 
  - vs-code
  - vhdl
  - verilog
  - systemverilog
  - ide
  - sdk
  - lsp
comments: true 
bannerad: true 
--- 

In the [previous installment of this blog](https://insights.sigasi.com/tech/sigasi_sdk_1/), we talked about why you would want to integrate [Sigasi's SDK](https://www.sigasi.com/sdk/) into your own product portfolio.  To summarize our arguments:

* The SDK allows you to offer an editing experience in your own product line that is similar to a full blown IDE.
* Developing such capabilities from scratch would be prohibitively expensive.

So, hopefully by now you're convinced you want to license our SDK ... but now what?  In this installment, we want to focus on some _practical_ aspects of integrating our SDK. The goal is to make you aware of the (limited) additional work you might be confronted with.

## Life cycle management

The first thing that your editor will need to do is bootstrap the back-end server that will process the VHDL and SystemVerilog code.  In essence this consists of starting a background Java process (properly configured with the required classpath, communication ports, license ...).  Later, when your editor no longer requires the back-end server, it should terminate the back-end server.  

Funnily enough, terminating the back-end server can be a bit tricky.  If the main editor gets killed aggressively without having the opportunity to graciously terminate the back-end server, then you run the risk of having a zombie back-end server (maybe even multiple ones) running on your system and consuming resources.

In order to avoid this scenario, the SDK has a feature called a _heartbeat_.  It works as follows: at startup, the editor can request to open a heartbeat port on the back-end server.  Once the back-end server has started, the editor must connect to the heartbeat port.  Every couple of seconds, the editor will send a heartbeat signal to the back-end.  As long as this heartbeat is sustained, the back-end server stays alive.  This way, when the editor disappears (for whatever reason), the back-end server will follow suit and terminate itself.  No zombies are left.

If your editor is written in Java, then the SDK provides a client library right out-of-the-box that does most of this life cycle management.  If your editor is not running on a JVM, you'll have to replicate this functionality in your own language eco-system.

Using the client library provides another perk.  When the client starts a back-end server, it will monitor whether the heartbeat connection is still accepting heartbeats.  If not, then the client can notify the editor application and start a new back-end instance.

## Asynchronous communication

Until the arrival of VS Code, the UI of most code editors was designed around a _synchronous_ architecture.  Many widget sets (that are used to construct the UI) are built around one, central thread that processes external events.  Such events could be key strokes, mouse clicks, file updates ...  These events are delivered to the main thread.  The main thread processes the events and triggers updates to the models (for example through listeners) backing the UI elements.  Every update of a model in turn triggers an update of the UI elements.  From time to time, the main thread will schedule future events as a way to perform for example animations that update every couple of milliseconds.

By default, all this event processing happens on the main thread.  This architecture simplifies things.  There is little need to consider threading issues (locks, races ...) between all the widgets that are affected by randomly appearing events.  Only when processing an event or updating a UI element would take excessive amounts of time, would the developer offload the processing to additional threads.  These additional threads would churn through more complex code.  Once concluded, the result of the background thread would be wrapped up into another event to be processed by the main thread.

As mentioned in [Part 1](https://insights.sigasi.com/tech/sigasi_sdk_1/), the SDK is built on top of the [Language Server Protocol](https://microsoft.github.io/language-server-protocol/) (LSP).  The LSP does things differently.  Instead of having one, monolithic application, the application is split into a front-end and a back-end.  The front-end (as epitomized by the Visual Studio Code) is only responsible for interacting with the end-user through a UI.  The back-end is a separate (operating system) process that does the heavy lifting of analyzing a project and provides feedback to the front-end.

The communication between the front-end and the back-end occurs over a socket connection and, what is more, is fully _asynchronous_.  For example, when an end-user edits code, the front-end will send `didChange` messages to the back-end:

```json
'textDocument/didChange': 
Params: {
    "textDocument": {
        "uri": "file:///xy.z",
        "version": 6
    },
    "contentChanges": [
        {
            "range": {
                "start": {
                    "line": 217,
                    "character": 39
                },
                "end": {
                    "line": 217,
                    "character": 39
                }
            },
            "rangeLength": 0,
            "text": "b"
        }
    ]
}
```

This message communicates to the back-end that a single character, `b`, was added to file `xy.z`.  The protocol is such that no response is required from the back-end to the front-end.  Eventually, when the back-end has processed the `didChange` message, it may send conclusions to the front-end.  For example, the back-end can send a `publishDiagnostics` message.

```json
'textDocument/publishDiagnostics':
Params: {
    "uri": "file:xy.z",
    "diagnostics": [ ... ]
}
```

The diagnostics is a list of issues that may have been detected in the `xy.z` file after the edit was processed.

Note that there is no strict request/response interaction between the front-end and the back-end.  The front-end sends queries when needed.  Asynchronously, the back-end sends results when it is ready to do so.

Many types of messages can be exchanged between the front-end and the back-end but they all follow this asynchronous pattern.  Even explicit requests (like a request for information on semantic highlighting) will result in a response being sent _some time later_.  Other requests and responses may intervene.

The guarantees w.r.t. the message exchange are even more relaxed than that: it is possible that the back-end decides that it will _not send_ a requested response at all.  This can occur when the back-end was processing a request that became irrelevant due to updates being performed on the project.  In this case, the back-end can cancel a response.  The front-end is notified of this cancelation and needs to deal with the fact that it will not receive an answer to its request.

Wiring up a _synchronous_ editor with an _asynchronous_ back-end can be somewhat tricky.  For example, many editors are able to show hovers when hovering over an identifier.  In a synchronous scenario, hovering over an identifier will result in an event that gets processed on the main thread.  That main thread blocks the UI, consults the internal model describing the file being edited, builds up a hover and then visualizes the hover.  Only then, control of the main thread is relinquished.

In an asynchronous scenario, the editor launches a query to get hover information.  But this information may arrive some time later.  The main thread of the editor in the meantime probably switches to processing other events.  In order to render the hover, once the needed information becomes available, the editor must have remembered the location of the hover that is under construction.  It then can build the actual hover and visualize it at the right screen coordinates.  If in the meantime, the editor is no longer positioned at the location of the identifier, the editor might decide to not show the hover at all.  Also, the editor must be able to deal with the cancelation of the hover request.  When such a cancelation arrives, the bookkeeping that was kept, in order to be able to render the hover, has to be dropped.

So, marrying the synchronous and asynchronous world has to be done carefully.  It's not rocket science but work nonetheless.  Tip: one shortcut to simplify your life is to build your editor on top of existing offerings like VS Code's [Monaco editor](https://microsoft.github.io/monaco-editor/) or Eclipse's [Theia](https://theia-ide.org/).

## Project management

Another work item is project management.  The LSP does not (and cannot) standardize what a project's configuration should look like.  Indeed, how a project should be configured, depends highly on the type of project.  For example, in Java-world, projects will often consist of numerous Maven files.  In C++-world, you might be using makefiles or Bazel.  Rust will rely on cargo.  And so on ...

So, every language eco-system has its own conventions to define projects.  Sigasi's SDK follows suit.  It defines a mechanism to communicate your project structure from the front-end to the back-end.  It currently takes the form of a big JSON object that lists the files of a project, VHDL/Verilog versions, preprocessor settings ...

In your own editor, you will most likely have your own project definition.  In order to integrate the SDK in this context, you will need to be able to convert (part of) your project definition into the format that the SDK understands.  Every time your project definition is updated, you'll send the new definition to the back-end.

In the case you are starting from scratch and you do not yet have your own project definition, you could fall back on the Sigasi project definition.  Still, you'll need to expose in your UI the ability to consult and modify the project definition to your end-user.

## Expose more features

This is probably the most rewarding part of the whole exercise: exposing new features. Most likely, the reason for integrating Sigasi's SDK is because you want to offer more features!  

In [part 1](https://insights.sigasi.com/tech/sigasi_sdk_1/) we listed all the goodness that the SDK unlocks.  A lot of these features fit easily into an existing editor.  For example, navigation is just a question of asking the back-end where an identifier is defined and upon response opening the corresponding target file at the correct cursor position.  

However, some features require a bit of UI work to expose them to the end-user.  Some non-trivial ones that come to mind are:

* **Folding**: Most editors nowadays support folding but if yours does not, you'll need to work on visualizing the fold regions and on hiding folded regions.
* **Rename refactoring**: Rename refactoring allows you to identify every location where an identifier is used and then to replace it with a new, renamed identifier.  Often this is implemented with the ability to preview the refactoring as it spans multiple files.  This allows the end-user to confirm that the rename refactoring has the desired result.
* **Template content assist**: Sigasi's SDK can suggest the creation of complete blocks of code.  For example, it can generate the basic scaffolding (called "templates") of a VHDL entity and corresponding architecture.  Often, such templates are parameterized.  For example, in the case of an entity template, you will want to provide the name of the entity.  Exposing this will either require the ability to edit parameters after the template has been inserted into the source text or will require a wizard/dialog that guides the end-user.

Most of these features are completely optional.  So, although the SDK can provide the required information to implement for example folding, you are not forced to expose it immediately in your editor.  This allows for a gradual implementation path: just start with basic editing support and expose more features as needed.

Again, one way to simplify your life is to build your editor on top of existing offerings like VS Code's [Monaco editor](https://microsoft.github.io/monaco-editor/) or Eclipse's [Theia](https://theia-ide.org/).  Many of the UI features you need are built into these products.

## Conclusion

The main ideas I would like you to take away are these:

* Sigasi's SDK does all the heavy lifting of analyzing VHDL and SystemVerilog for you.  This represents decades of development work that is available to you, right out-of-the-box.
* Integration into your own product line requires some thought.  Providing a nice user experience requires you to think about the life cycle of the language server, project configuration, asynchronous communication and enabling new features in your UI.  If you're willing to let go of your existing editor, there are many existing editors you can embed.
