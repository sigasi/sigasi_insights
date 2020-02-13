---
title: "Build Eclipse documentation from wikitext with Maven Tycho"
layout: page 
pager: true
author: Hendrik Eeckhaut
date: 2011-08-16
tags: 
  - eclipse
  - maven
  - planeteclipse
  - tycho
comments: true
bannerad: true
---


For [Sigasi 2.0](/releasenotes/sigasi-2.0.html) we decided to write all documentation in the <a href="http://en.wikipedia.org/wiki/Textile_(markup_language)">textile</a> wiki markup language. With the [Mylyn Wikitext](http://wiki.eclipse.org/Mylyn/FAQ#WikiText) plugin, textile files can be converted in lots of different output formats such as Eclipse help, html, pdf,...

Based on the [blog posts of Peter Friese](http://www.peterfriese.de) I could easily automate the documentation build with Ant. But when I tried to run the documentation build ant task from our Maven Tycho build, the necessary XSLT transforms refused to run. [Xalan](http://xml.apache.org/xalan-j) could not be loaded...

After a lot of googling, moaning and trying I finally found out that the trick is to add Xalan as a dependency to the antrun plugin.

This is the Maven configuration I ended up with that works for me: 

```xml
<build>
  <plugins>
    <plugin>
      <groupId>org.apache.maven.plugins</groupId>
      <artifactId>maven-antrun-plugin</artifactId>
      <version>1.6</version>
      <executions>
        <execution>
          <id>generate-documentation</id>
          <phase>generate-sources</phase>
          <configuration>
            <echo>Generating documentation</echo>
            <tasks>
              <property name="compile_classpath" refid="maven.compile.classpath" />
              <ant inheritRefs="true" antfile="build-doc.xml">
                <target name="build-doc" />
              </ant>
            </tasks>
          </configuration>
          <goals>
            <goal>run</goal>
          </goals>
        </execution>
      </executions>
      <dependencies>
        <dependency>
          <groupId>org.apache.ant</groupId>
          <artifactId>ant</artifactId>
          <version>1.8.1</version>
        </dependency>
        <dependency>
          <groupId>org.apache.ant</groupId>
          <artifactId>ant-launcher</artifactId>
          <version>1.8.1</version>
        </dependency>
        <dependency>
          <groupId>org.apache.ant</groupId>
          <artifactId>ant-nodeps</artifactId>
          <version>1.8.1</version>
        </dependency>
        <dependency>
          <groupId>xalan</groupId>
          <artifactId>xalan</artifactId>
          <version>2.7.1</version>
        </dependency>
      </dependencies>
    </plugin>
  </plugins>
</build>
```