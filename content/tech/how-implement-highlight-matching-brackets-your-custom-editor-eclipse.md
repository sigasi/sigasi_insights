---
title: "How to implement \"highlight matching brackets\" for your custom editor in Eclipse"
layout: page 
pager: true
author: heeckhau (Sigasi)
date: 2011-08-16
tags: 
  - eclipse
  - planeteclipse
comments: true
bannerad: true
---


For our <a href="http://www.sigasi.com/product">VHDL editor view</a> I wanted to implement <em>highlight matching bracket</em> like it exists in <a href="http://www.eclipse.org/jdt/">JDT</a>. I had to dig a lot longer in the JDT code than anticipated to find out how JDT implements this functionality. As so often is the case in Eclipse development, in the end this turned out to be really easy. It was again a matter of finding with few lines to add...

The key is to override the `configureSourceViewerDecorationSupport` method from `AbstractDecoratedTextEditor` in your editor class and call the `setMatchingCharacterPainterPreferenceKeys` method. Note that the method name contains <em>character</em> and not <em>bracket</em>, which explains why I had to look so hard to find it.

```java
public final static String EDITOR_MATCHING_BRACKETS = "matchingBrackets";
public final static String EDITOR_MATCHING_BRACKETS_COLOR= "matchingBracketsColor";

@Override
protected void configureSourceViewerDecorationSupport (SourceViewerDecorationSupport support) {
	super.configureSourceViewerDecorationSupport(support);		
	
	char[] matchChars = {'(', ')', '[', ']'}; //which brackets to match		
	ICharacterPairMatcher matcher = new DefaultCharacterPairMatcher(matchChars ,
			IDocumentExtension3.DEFAULT_PARTITIONING);
	support.setCharacterPairMatcher(matcher);
	support.setMatchingCharacterPainterPreferenceKeys(EDITOR_MATCHING_BRACKETS,EDITOR_MATCHING_BRACKETS_COLOR);
	
	//Enable bracket highlighting in the preference store
	IPreferenceStore store = getPreferenceStore();
	store.setDefault(EDITOR_MATCHING_BRACKETS, true);
	store.setDefault(EDITOR_MATCHING_BRACKETS_COLOR, "128,128,128");
}
```

Bracket highlighting is configured by two preference keys in a key store: one for enablement and one for the color of the box around the matched bracket. In the above code fragment I forced matching bracket highlighting with `store.setDefault(EDITOR_MATCHING_BRACKETS, true);` in neutral gray (`store.setDefault(EDITOR_MATCHING_BRACKETS_COLOR, "128,128,128");`).

I hope this can save you some time,
Hendrik.