---
title: "Getting started with the Altera BeMicro SDK on Linux"
layout: page 
pager: true
author: heeckhau (Sigasi)
date: 2011-01-07
tags: 
  - Altera
  - BeMicro
  - FPGA
---
<div class="content">
<p><em>I recently got an FPGA-on-a-USB-stick as a Christmas present: an <a href="http://www.altera.com/b/bemicro-sdk.html" class="elf-external elf-icon">Altera/Arrow BeMicro SDK</a>.<br/>Fun to play with and ideal to refresh my hardware design skills... I thought...<br/>Immediately I was confronted again with how much work it is to set up all necessary hardware design tools.</em></p><p>The system requirements states that you need Windows, but fortunately I got it working on Linux (Fedora release 13 (Goddard)). Installing Altera Quartus and Nios II went flawlessly. Finding out how to get JTAG with the USB blaster to work was a bit harder.</p><h3>Install Altera tools</h3><p>The Altera Quartus 10.1 installation was slow because of the huge 6GB download but it finished without issues; no <a href="http://fpga4u.epfl.ch/wiki/Install_Quartus_II" class="elf-external elf-icon">special tricks</a> that were required for earlier versions.</p><p>If your Linux machine has SE Linux enabled, run:<br/><div class="geshifilter"><pre class="bash geshifilter-bash" style="font-family:monospace;"><span style="color: #c20cb9; font-weight: bold;">sudo</span> chcon <span style="color: #660033;">-t</span> textrel_shlib_t <span style="color: #000000; font-weight: bold;">/</span>opt<span style="color: #000000; font-weight: bold;">/</span>altera<span style="color: #000000; font-weight: bold;">/</span><span style="color: #000000;">10.1</span><span style="color: #000000; font-weight: bold;">/</span>quartus<span style="color: #000000; font-weight: bold;">/</span>linux<span style="color: #000000; font-weight: bold;">/*</span>.so</pre></div></p><h3>USB-Blaster setup</h3><p>Setting the USB-blaster was a bit harder:<br/>As described <a href="http://www.altera.com/download/drivers/dri-usb_b-lnx.html" class="elf-external elf-icon">here</a> you need to create an extra udev rule (<span class="geshifilter"><code class="bash geshifilter-bash"><span style="color: #c20cb9; font-weight: bold;">sudo</span> <span style="color: #c20cb9; font-weight: bold;">vim</span> <span style="color: #000000; font-weight: bold;">/</span>etc<span style="color: #000000; font-weight: bold;">/</span>udev<span style="color: #000000; font-weight: bold;">/</span>rules.d<span style="color: #000000; font-weight: bold;">/</span><span style="color: #000000;">51</span>-usbblaster.rules</code></span>) with folowing content:<br/><div class="geshifilter"><pre class="bash geshifilter-bash" style="font-family:monospace;"><span style="color: #666666; font-style: italic;"># USB-Blaster</span><span style="color: #007800;">BUS</span>==<span style="color: #ff0000;">"usb"</span>, SYSFS<span style="color: #7a0874; font-weight: bold;">{</span>idVendor<span style="color: #7a0874; font-weight: bold;">}</span>==<span style="color: #ff0000;">"09fb"</span>, SYSFS<span style="color: #7a0874; font-weight: bold;">{</span>idProduct<span style="color: #7a0874; font-weight: bold;">}</span>==<span style="color: #ff0000;">"6001"</span>, <span style="color: #007800;">MODE</span>=<span style="color: #ff0000;">"0666"</span>, <span style="color: #007800;">PROGRAM</span>=<span style="color: #ff0000;">"/bin/sh -c 'K=%k; K=$<span style="color: #007800;">${K#usbdev}</span>; printf /proc/bus/usb/%%03i/%%03i$<span style="color: #007800;">${K%%%%.*}</span> $<span style="color: #007800;">${K#*.}</span>'"</span>, RUN+=<span style="color: #ff0000;">"/bin/chmod 0666 %c"</span></pre></div><br/>You can load this new rule by running<br/><div class="geshifilter"><pre class="bash geshifilter-bash" style="font-family:monospace;"><span style="color: #c20cb9; font-weight: bold;">sudo</span> udevadm control <span style="color: #660033;">--reload-rules</span></pre></div></p><h3>JTAG daemon configuration</h3><p>Based on the description on <a href="http://alterawiki.com/wiki/Quartus_for_Linux" title="http://alterawiki.com/wiki/Quartus_for_Linux" class="elf-external elf-icon">http://alterawiki.com/wiki/Quartus_for_Linux</a>, I created two configuration files:<br/><div class="geshifilter"><pre class="bash geshifilter-bash" style="font-family:monospace;"><span style="color: #c20cb9; font-weight: bold;">sudo</span> <span style="color: #c20cb9; font-weight: bold;">mkdir</span> <span style="color: #000000; font-weight: bold;">/</span>etc<span style="color: #000000; font-weight: bold;">/</span>jtagd<span style="color: #c20cb9; font-weight: bold;">sudo</span> <span style="color: #c20cb9; font-weight: bold;">cp</span> <span style="color: #000000; font-weight: bold;">/</span>opt<span style="color: #000000; font-weight: bold;">/</span>altera<span style="color: #000000; font-weight: bold;">/</span><span style="color: #000000;">10.1</span><span style="color: #000000; font-weight: bold;">/</span>quartus<span style="color: #000000; font-weight: bold;">/</span>linux<span style="color: #000000; font-weight: bold;">/</span>pgm_parts.txt <span style="color: #000000; font-weight: bold;">/</span>etc<span style="color: #000000; font-weight: bold;">/</span>jtagd<span style="color: #000000; font-weight: bold;">/</span>jtagd.pgm_parts<span style="color: #c20cb9; font-weight: bold;">touch</span> ~<span style="color: #000000; font-weight: bold;">/</span>.jtag.conf</pre></div></p><p>Next, I appended following lines to my to my <span class="geshifilter"><code class="bash geshifilter-bash"><span style="color: #000000; font-weight: bold;">/</span>etc<span style="color: #000000; font-weight: bold;">/</span>rc.local</code></span> file:<br/><div class="geshifilter"><pre class="bash geshifilter-bash" style="font-family:monospace;"><span style="color: #7a0874; font-weight: bold;">echo</span> <span style="color: #000000;">356</span> <span style="color: #000000;">40000</span> <span style="color: #000000;">32</span> <span style="color: #000000;">32000</span> <span style="color: #000000; font-weight: bold;">&gt;</span> <span style="color: #000000; font-weight: bold;">/</span>proc<span style="color: #000000; font-weight: bold;">/</span>sys<span style="color: #000000; font-weight: bold;">/</span>kernel<span style="color: #000000; font-weight: bold;">/</span>sem<span style="color: #000000; font-weight: bold;">/</span>opt<span style="color: #000000; font-weight: bold;">/</span>altera<span style="color: #000000; font-weight: bold;">/</span><span style="color: #000000;">10.1</span><span style="color: #000000; font-weight: bold;">/</span>quartus<span style="color: #000000; font-weight: bold;">/</span>bin<span style="color: #000000; font-weight: bold;">/</span>jtagd</pre></div><br/>And I started the jtagd daemon by runnin rc.local:</p><p><div class="geshifilter"><pre class="bash geshifilter-bash" style="font-family:monospace;"><span style="color: #c20cb9; font-weight: bold;">sudo</span> <span style="color: #000000; font-weight: bold;">/</span>etc<span style="color: #000000; font-weight: bold;">/</span>rc.local</pre></div></p><h3>Check</h3><p>You can easily verify that Everything is working with following procedure:</p><ul><li>Plug in your BeMicro SDK stick</li><li>Start Quartus II</li><li>Select Tools &gt; Programmer</li><li>Click the &#8220;Hardware Setup...&#8221; button, double click on &#8220;USB-Blaster&#8221; and click close</li><li>If you now press the &#8220;Autodetect&#8221; button, two devices should be visible: EP3C25 and EP4CE22 (this is the Altera Cyclone 4 FPGA). If you see those it means that everything is OK.</li></ul><p><span class="inline inline-center"><a href="http://www.sigasi.com/sites/www.sigasi.com/files/images/AlteraProgrammer.png" onclick="launch_popup(808, 741, 609); return false;" target="_blank"><img src="http://www.sigasi.com/sites/www.sigasi.com/files/images/AlteraProgrammer.preview.png" alt="Altera Programmer BeMicroSDK" title="Altera Programmer BeMicroSDK" class="image image-preview " width="640" height="526"/></a><span class="caption"><strong>Altera Programmer BeMicroSDK</strong></span></span></p><h3>Run the tutorial</h3><p>Now you are ready to run the <a href="http://www.arrownac.com/offers/altera-corporation/altera-bemicro/getting_started.html" class="elf-external elf-icon">BeMicro SDK tutorial</a></p>  </div>
