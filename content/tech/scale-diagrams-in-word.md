---
title: "Use a Word macro to Scale Diagrams in HTML documentation"
date: 2020-02-20
lastmod: 2020-02-20
pager: true
author: Bart Brosens
comments: true
bannerad: true
tags:
  - documentation
---

Since [Sigasi Studio 4.5]({{< ref "/releasenotes/sigasi-4.05.md" >}}), it is possible to export your documentation in HTML format.
Exporting to HTML has the benefit that HTML is more flexible than PDF, e.g. for importing and further processing your documentation in Word.

After importing the HTML documentation in Word, you might notice some of the included *Block Diagrams* and *FSM Diagrams* can be very large.
Adjusting the size of these Diagrams can be a tedious job that calls for automation.

We have developed a **Word macro** to assist with resizing the diagrams to fit on the pages.

Follow the steps below to use the macro.

{{< figure src="/img/tech/word-macro-thumb.png" link="/img/tech/word-macro.png" class="uk-align-right" >}}

1. [Download the macro file](/resources/tech/exportAndFormatWord.bas).

2. Install the macro: open the **View** menu in Word and select **Macros > View Macros > Create** to open the Visual Basic editor.
In that editor, choose **File > Import File...** to import the macro file.

3. In the `callMacro` function, update the `fileFolder` path to point to the folder in which the project documentation is generated.

Once the path is configured correctly, the macro can be executed in Word by selecting **Macros > View Macros > select exportAndFormatWord.callMacro > Run**.
Depending on the size of the exported documentation, this might take a while.

The macro generates a `documentation.docx` document in the project documentation folder.
Graphics are properly resized and a style is applied.

Note that this macro is in an early phase and might not meet all what's needed to format your documentation.
Your feedback is welcome: just {{< send-email >}} with your remarks.

