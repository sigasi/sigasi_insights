---
title: "Customize the documentation output in Sigasi Studio"
layout: page 
pager: true
author: Hendrik Eeckhaut
date: 2016-12-15
tags: 
  - documentation
  - VHDL
  - Sigasi
comments: true
bannerad: true
draft: true
---

Since [Sigasi Studio 2.24]({{< ref "/releasenotes/sigasi-2.24.md" >}}), Sigasi Studio can automatically generate documentation for your VHDL designs. 
This documenation system is really flexible and can be fully customized. In this blog post I explain how you can **customize the layout and type of the output document**.


As explained in article on how to [Generate VHDL documentation in Sigasi Studio]({{< ref "generate-vhdl-documentation-sigasi" >}}), Sigasi Studio first extracts all relevant information from your design files into an intermediate documentation model. Next, it runs this model trough templates into a [DocBook](https://en.wikipedia.org/wiki/DocBook) source file. Finally, it converts this DocBook file into a PDF.
 
![](/img/tech/sigasi-docgen.png)

If you have a full {{< xl_doc >}} license, Sigasi Studio saves the intermediate DocBook file in your project folder. This allows you to **fully customize the PDF generation**. With a custom DocBook → PDF flow, you can apply your company's colors, add your and logo or append extra sections, etc. In this blog post I explain how this customization works.

## Custom DocBook → PDF flow

The conversion from DocBook to PDF happens in two steps. First the DocBook (xml) file is converted into an [XSL-FO](https://en.wikipedia.org/wiki/XSL_Formatting_Objects) file (_Extensible Stylesheet Language - Formatting Objects_). Next, this XSL-FO is converted into a PDF file. There are open source tools available for both these conversion steps.

### DocBook → XSL-FO

The DocBook to XSL-FO transformation can be executed by the `xsltproc` program. On Fedora you can install this with `dnf install  libxslt`, on Ubuntu with `apt install xsltproc`. 

The transformation to XSL-FO adds (intermediate) layout infomation to the original DocBook xml file. This transformation can be customized by setting parameters and adding extra xsl-templates. By default, Sigasi Studio uses the templates in the `plugins/com.sigasi.hdt.docgen.resources_<version>/dist/docbook-xsl/` folder of your Sigasi Studio installation.

You can run this transformation manually with following command (Sigasi Studio 3.3):
```sh
xsltproc -o documentation.fo ~/sigasi/plugins/com.sigasi.hdt.docgen.resources_3.3.0.201612051610/dist/docbook-xsl/fo-PDF.xsl documentation.xml
```

### XSL-FO → PDF

The XSL-FO to PDF transformation can be executed by the `fop` program. On Fedora you can install this with `dnf install  fop`, on Ubuntu with `apt install fop`. 

To transform the XSL-FO file to PDF, run:
```sh
fop documentation.fo documentation.pdf
```

### Customize the transformations

The easiest way to customize the documentation is by copying the `plugins/com.sigasi.hdt.docgen.resources_<version>/dist/docbook-xsl/` folder from your Sigasi Studio installation and making changes to the `*.xsl` files.  
**Before you do that, contact the technical writers in your company, they might already have templates ready with your company's style**.

As an example to get you started, I'll demonstrate how to change the color of the titles in the PDF document. This can be acchieved by changing the `title.color` parameter in `docbook-xsl\commons.xml`.

E.g. to get blue titles instead of red, replace
```xml
  <xsl:param name="title.color">#222222</xsl:param>
```
with
```xml
  <xsl:param name="title.color">#0066FF</xsl:param>
```

You can find more information about docbook templates in the [definitive DocBook guide](http://tdg.docbook.org/). Since this is a industry standard tool flow, there are professional consultants with expert knowledge about Docbook and XSL transformations.

## What about other formats? Can I generate HTML too?

With a custom DocBook flow you can also generate other output formats than PDF, such as HTML, e-books (`epub`), manpages, etc.  
You only have to use different parameters for the XSL transformation.

E.g. to generate HTML documentation run:
```sh
xsltproc -o documentation.html ~/sigasi/plugins/com.sigasi.hdt.docgen.resources_3.3.0.201611111431/dist/docbook/html/docbook.xsl documentation.xml 
```

## Conclusion

With a custom DocBook to PDF flow, you can customize the content and layout of your PDF document.
The flow is more complicated than the default Sigasi documentation flow, but gives you complete freedom.
