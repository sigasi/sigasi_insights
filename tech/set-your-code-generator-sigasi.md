---
title: "Set up your code generator in Sigasi"
layout: page 
pager: true
author: Philippe Faes
date: 2013-06-19
tags: 
  - Code generation
  - Register mapping
  - VHDL
comments: true
---
In many projects, some of the VHDL code is generated in one way or another. For instance, many projects manage their register map in one master file and generate their  VHDL packages and C headers using some kind of tool (either commercial or an in house script).

This article deals with integrating such a script in the Sigasi Pro development environment, so that your generated files are always up to date. In order to make it easy for you to reproduce this, we have created a demo project that you can <a href="https://github.com/philippefaes/sigasi_demo_codegen/archive/master.zip">download</a> or <a href="https://github.com/philippefaes/sigasi_demo_codegen">clone from Github</a>. The demo project already contains a working "Builder" that runs the generator script each time you change the values in the script.

But first: this video shows you what it looks like in real life. As soon as I change the generator script (and save), the generated code is updated.

<div id="wistia_gi58zr86jk" class="wistia_embed" style="width:640px;height:428px;" data-video-width="640" data-video-height="400"><div itemprop="video" itemscope itemtype="http://schema.org/VideoObject"><meta itemprop="duration" content="PT39S" /><meta itemprop="thumbnailUrl" content="http://embed.wistia.com/deliveries/88302719dc80925a39b2c191599ef2bacb546b7b.bin" /><meta itemprop="contentURL" content="http://embed.wistia.com/deliveries/cc364c0aad2ab6bac7a18aa5e07511531a5e9290.bin" /><meta itemprop="embedURL" content="http://embed.wistia.com/flash/embed_player_v2.0.swf?2013-05-14&controlsVisibleOnLoad=true&mediaDuration=39.066&stillUrl=http%3A%2F%2Fembed.wistia.com%2Fdeliveries%2F88302719dc80925a39b2c191599ef2bacb546b7b.jpg%3Fimage_crop_resized%3D640x400&unbufferedSeek=true&videoUrl=http%3A%2F%2Fembed.wistia.com%2Fdeliveries%2Fcc364c0aad2ab6bac7a18aa5e07511531a5e9290.bin" /><meta itemprop="uploadDate" content="2013-06-26T13:07:36Z" /><object id="wistia_gi58zr86jk_seo" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" style="display:block;height:428px;position:relative;width:640px;"><param name="movie" value="http://embed.wistia.com/flash/embed_player_v2.0.swf?2013-05-14"></param><param name="allowfullscreen" value="true"></param><param name="allowscriptaccess" value="always"></param><param name="bgcolor" value="#000000"></param><param name="wmode" value="opaque"></param><param name="flashvars" value="controlsVisibleOnLoad=true&mediaDuration=39.066&stillUrl=http%3A%2F%2Fembed.wistia.com%2Fdeliveries%2F88302719dc80925a39b2c191599ef2bacb546b7b.jpg%3Fimage_crop_resized%3D640x400&unbufferedSeek=true&videoUrl=http%3A%2F%2Fembed.wistia.com%2Fdeliveries%2Fcc364c0aad2ab6bac7a18aa5e07511531a5e9290.bin"></param><embed src="http://embed.wistia.com/flash/embed_player_v2.0.swf?2013-05-14" allowfullscreen="true" allowscriptaccess="always" bgcolor=#000000 flashvars="controlsVisibleOnLoad=true&mediaDuration=39.066&stillUrl=http%3A%2F%2Fembed.wistia.com%2Fdeliveries%2F88302719dc80925a39b2c191599ef2bacb546b7b.jpg%3Fimage_crop_resized%3D640x400&unbufferedSeek=true&videoUrl=http%3A%2F%2Fembed.wistia.com%2Fdeliveries%2Fcc364c0aad2ab6bac7a18aa5e07511531a5e9290.bin" name="wistia_gi58zr86jk_html" style="display:block;height:100%;position:relative;width:100%;" type="application/x-shockwave-flash" wmode="opaque"></embed></object><noscript itemprop="description">Code generation scripts</noscript></div></div>
<script charset="ISO-8859-1" src="http://fast.wistia.com/static/concat/E-v1%2Csocialbar-v1.js"></script>
<script>
wistiaEmbed = Wistia.embed("gi58zr86jk", {
  version: "v1",
  videoWidth: 640,
  videoHeight: 400,
  controlsVisibleOnLoad: true,
  plugin: {
    "socialbar-v1": {
      buttons: "embed-twitter-linkedIn-googlePlus-facebook"
    }
  }
});
</script>
<script charset="ISO-8859-1" src="http://fast.wistia.com/embed/medias/gi58zr86jk/metadata.js"></script>


We assume that you have the project, and a script that generates VHDL code (or C header files, or any other source code).

## Running it by hand

First, run the script by hand, so that you have one set of your generated files.

## Marking the generate files as "derived"

Next, for each of the generate files, **right-click > Properties** then select **Derived**. If you have a lot of generated files, and they are nicely placed in a single directory, you can instead mark that directory as **derived**.

## Set up the Builder

Select the project, then: **right-click > Properties > Builders > New... > Program**.

Choose a name, for example "Address Map Generator".

Fill out the location of the generator script. If the script is inside your project, you can use the environment variable <code>${build_project}</code> to indicate your project's path.
Also fill out the working directory. Most likely this is the project directory, indicated by `${build_project}`.

The tools needs to know when to trigger this builder, so we have to give it a little more information:

* For <b>Build Options</b>, I like to enable build <b>During auto builds</b> in addition to the defaults.
* Select <b>Specify working set of relevant resources</b> and then click <b>Specify Resources...</b>. Now select all the <em>source</em> files that your script will use in order to generate VHDL code and C headers. In this example, only the generator script itself is a relevant resource.


After the extra files are generated, we want the rest of the build process to use our newly generated files:

* In the <b>Refresh</b> tab, select <b>Refresh resources upon completion</b> and <b>Specific resources</b>. Then press the <b>Specific Resources...</b> button and select all of the files that will be generated (or updated) by your script.
* Press <b>OK</b> to close the <b>Edit Configuration</b> dialog, and re-order the builders so that your newly created builder is listed before the <b>Xtext Project Builder</b>. Use the <b>Up</b> and <b>Down</b> buttons for this.

![Sort builders](images/sort_builders.png "Sort builders")

## Try it out

I'm testing the builder by placing my source file and generated file next to each other and editing the source file. Each time I save, the generated VHDL package is update.

## Version control

If you are using a version control system, make sure you add the new `.externalToolBuilders` directory, and the changes to `.project`


## What do you think?

Did this work for you? Do you have a tool that you can recommend for generating the address map?
