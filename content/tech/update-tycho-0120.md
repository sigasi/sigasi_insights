---
title: "Update Tycho to 0.12.0"
layout: page 
pager: true
author: Hendrik Eeckhaut
date: 2011-05-11
tags: 
  - planeteclipse
  - tycho
  - maven
  - eclipse
comments: true
bannerad: true
_build:
  list: never
---

Tycho, the new Maven base Eclipse build system, was recently accepted as an [Eclipse project](http://www.eclipse.org/tycho/). In the latest, [0.12.0 release](http://dev.eclipse.org/mhonarc/lists/tycho-user/msg00102.html), the namespace was updated from *org.sonatype.tycho* to *org.eclipse.tycho*. This results in lots of changes to your pom.xml files.

I used following script to update; it might save you some time too:

```bash
for i in pom.xml */pom.xml
do
	sed -i -e 's/org.sonatype.tycho/org.eclipse.tycho/g' $i;
	sed -i -e 's/maven-osgi-compiler-plugin/tycho-compiler-plugin/g' $i;
	sed -i -e 's/maven-osgi-packaging-plugin/tycho-packaging-plugin/g' $i;
	sed -i -e 's/maven-osgi-source-plugin/tycho-source-plugin/g' $i;
	sed -i -e 's/maven-osgi-test-plugin/tycho-surefire-plugin/g' $i;
	sed -i -e 's/maven-tycho-plugin/tycho-pomgenerator-plugin/g' $i;
	sed -i -e 's$<tycho-version>0.11.0</tycho-version>$<tycho-version>0.12.0</tycho-version>$g' $i;
done
```

If your build is not working because Maven can not download Tycho 0.12.0 from your Maven mirror. Run:

```bash
mvn -U clean
```

This [forces a check for updated releases](http://dev.eclipse.org/mhonarc/lists/tycho-user/msg00130.html) and snapshots on remote repositories and makes sure the update is found.
