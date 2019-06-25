---
title: "How to add a decorator to the splash screen of your RCP application?"
layout: page 
pager: true
author: heeckhau (Sigasi)
date: 2009-12-18
tags: 
  - code
  - eclipse
  - java
  - planeteclipse
comments: true
bannerad: true
---

{{< figure src="/img/tech/decorated_splash.png" alt="Decorated Splash Screen" class="uk-align-right" >}}
I wanted to add a decorator to the splash screen our RCP application 'Sigasi HDT' to give our users a visual clue about which version they are running (beta, trial, ...). After some digging and searching for the correct Google search terms, this turned out to be really simple. There is an extension for that: `org.eclipse.ui.splashHandlers`.

This extension point allows to contribute a splash handler in which you can add custom behavior to the splash screen.
In this extension you have to specify a `splashHandler` and a `splashHandlerProductBinding`. In `splashHandler` you specify the class that implements the custom behaviour. In `splashHandlerProductBinding` you bind your `splashHandler` to your RCP application (you could also customize the behaviour of Eclipse's splash screen).

For our product this is:
```xml
   <extension point="org.eclipse.ui.splashHandlers">
      <splashHandler
            class="com.sigasi.hdt.ui.SplashHandler"
            id="com.sigasi.hdt.ui.splashHandler">
      </splashHandler>
      <splashHandlerProductBinding
            productId="com.sigasi.hdt.rcp.product"
            splashId="com.sigasi.hdt.ui.splashHandler">
      </splashHandlerProductBinding>
   </extension>
```

The only thing left to do, is to implement the `splashHandler` (The quick fix in the Plugin Manifest Editor is a real time saver).

I extended the `EclipseSplashHandler` (org.eclipse.ui.internal.splash) and just overrided `init` to superpose a png image in top right corner. 

```java
package com.sigasi.hdt.ui;

import com.sigasi.hdt.HdtPlugin;

import org.eclipse.jface.resource.ImageDescriptor;
import org.eclipse.swt.events.PaintEvent;
import org.eclipse.swt.events.PaintListener;
import org.eclipse.swt.graphics.Image;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.ui.internal.splash.EclipseSplashHandler;
import org.eclipse.ui.plugin.AbstractUIPlugin;

@SuppressWarnings("restriction")
public class SplashHandler extends EclipseSplashHandler {

	private static final String BETA_PNG = "icons/splash/beta.png";
	private static final int BORDER = 10;
	private Image image;
	
	public SplashHandler() {
		super();
	}
	
	@Override
	public void init(Shell splash) {
		super.init(splash);

		//here you could check some condition on which decoration to show

		ImageDescriptor descriptor = AbstractUIPlugin.imageDescriptorFromPlugin(HdtPlugin.ID, BETA_PNG);
		if (descriptor != null)
			image = descriptor.createImage();
		if (image !=null) {
			final int xposition = splash.getSize().x - image.getImageData().width - BORDER;
			final int yposition = BORDER;
			getContent().addPaintListener (new PaintListener () {
				public void paintControl (PaintEvent e) {
					e.gc.drawImage (image, xposition, yposition);
				}
			});
		}
	}

	@Override
	public void dispose() {
		super.dispose();
		if (image != null)
			image.dispose();
	}

}
```