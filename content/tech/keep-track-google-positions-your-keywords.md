---
title: "Keep track of the Google positions of your keywords"
layout: page 
pager: true
author: heeckhau (Sigasi)
date: 2010-05-18
tags: 
  - Python
  - Sigasi
comments: true
bannerad: true
_build:
  list: never
---

> "The numbers tell the tale"

As a small EDA startup that sells its software via Internet, it is of upmost importance to be easily found. Therefore SEO (Search Engine Optimization) is one of our major tasks. The higher www.sigasi.com ranks on the search pages for the keywords related to our business, the more visitors we can expect.

## But how can we keep track of the result of our SEO efforts?

Of course, the number of trials and sales remain the most important metrics. But I also wanted to easily keep track of the search position of individual keywords. To that purpose I combined some scripts to visualize the position of the keywords we optimize for. I customized the <a href="http://www.geekology.co.za/opinion/2009/02/python-script-to-check-google-rankings-for-domain-and-search-term/">rankcheck script of Willem van Zyl</a> to get the Google search position and combined it with the <a href="http://dygraphs.com/">dygraph library from Dan Vanderkam</a> to visualize the results.

## Example

(Mouse over to highlight individual values. Click and drag to zoom. Double-click to zoom back out.

Change the number and hit enter to adjust the averaging period.)

<script type="text/javascript"  src="/resources/tech/dygraph-combined.js"></script>

<table><tr>
    <td valign="top"><div id="div-graph"></div></td>
    <td valign="top">&nbsp; &nbsp;</td>
    <td valign="top"><div id="div-label"></div></td>
</tr></table>

**Show Series:**
<form name="terms">
      <input name="allbox" type=checkbox checked onClick="CheckAll(document.terms)"> <label><strong>select all/none</strong></label><br/>
      <input type=checkbox id="0" checked onClick="change(this)"> <label for="0"> vhdl+eclipse</label><br/>
      <input type=checkbox id="1" checked onClick="change(this)"> <label for="1"> vhdl+libraries</label><br/>
      <input type=checkbox id="2" checked onClick="change(this)"> <label for="2"> vhdl+refactor</label><br/>
</form>

<script type="text/javascript">
  g = new Dygraph(

    // containing div
    document.getElementById("div-graph"),
"Date,vhdl+eclipse,vhdl+libraries,vhdl+refactor,\n2010-04-15,11,5,2\n2010-04-16,10,5,2\n2010-04-17,10,5,2\n2010-04-18,10,5,2\n2010-04-19,10,5,2\n2010-04-20,11,5,2\n2010-04-21,11,5,2\n2010-04-22,11,5,2\n2010-04-23,11,5,2\n2010-04-24,11,5,2\n2010-04-25,12,5,2\n2010-04-26,12,5,2\n2010-04-27,12,5,2\n2010-04-28,12,5,2\n2010-04-29,8,5,2\n2010-04-30,7,5,2\n2010-05-01,7,5,2\n2010-05-02,7,5,2\n2010-05-03,7,5,2\n2010-05-04,7,5,2\n2010-05-05,7,4,2\n2010-05-06,8,4,2\n2010-05-10,8,4,2\n2010-05-11,8,4,2\n2010-05-12,8,4,2\n2010-05-13,8,5,2\n2010-05-14,8,5,2\n2010-05-15,8,5,2\n2010-05-16,8,5,2\n2010-05-17,8,5,2\n2010-05-18,8,5,2\n",
    {
      rollPeriod: 1,
      showRoller: true,
      visibility: [true,true,true,],
      labelsDiv: document.getElementById("div-label"),
      labelsDivWidth: 100,
      labelsDivStyles: {
                'background-color': 'transparent',
                'top': '210px'
      },
      labelsSeparateLines: true,
      includeZero: true,
      yAxisLabelWidth: 20,
    }
  );
  setStatus();

      function setStatus() {
        document.getElementById("visibility").innerHTML =
          g.visibility().toString();
      }

      function change(el) {
        g.setVisibility(parseInt(el.id), el.checked);
        if (!el.checked) {
          document.terms.allbox.checked = el.checked;
        }
        setStatus();
      }

      function CheckAll(fmobj) {
        for (var i=0;i<fmobj.elements.length;i++) {
          var e = fmobj.elements[i];
          if ( (e.name != 'allbox') && (e.type=='checkbox') && (!e.disabled) ) {
            e.checked = fmobj.allbox.checked;
            g.setVisibility(parseInt(e.id), e.checked);
          }
        }
      }

</script>

## How to use it

I find the timeplots generated with the dygraph really powerful. They are not only visually pleasant, but they also allow to <strong>hover</strong>, <strong>zoom</strong> and <strong>average</strong> the graphs. Just click and drag to zoom in and double click to zoom back out. You can also smooth the plots by averaging over multiple days. Just enter a different value in the text box at the bottom left of the plot to adjust the averaging period.

I also added check-boxes so that you can easily look at the trend of a custom selection of keywords.

## How it is done

Every night a server at Sigasi runs the attached cron-script (`cron.sh`) that gets the Google position for the specified keywords and updates the graph. The easiest way to run this script is to use <a href="http://en.wikipedia.org/wiki/Cron">cron</a>. I however re-used our <a href="https://en.wikipedia.org/wiki/Hudson_(software)">Hudson</a> installation, because I find it easier to verify the script keeps on running flawlessly.

This is what `cron.sh` does:

* `cron.sh` calls `rankcheck.py` (The <a href="http://www.geekology.co.za/opinion/2009/02/python-script-to-check-google-rankings-for-domain-and-search-term/">original rankcheck script</a> was slightly modified according to the <a href="http://googlesystem.blogspot.com/2010/05/googles-new-interface-colorful-and-more.html">recent changes in the Google result pages</a>.) for each of the keywords specified in `terms.csv`. Make sure you use `+` instead of spaces.
* The results are stored in `data.csv`.
* Next, the data file is converted (`generate.py`) in a html page (`data.html`) which contains the plot and the check-boxes to select the keywords to visualize. For your convenience the dygraph Javascript library is also bundled in the attached sources.

## Download

You can [download our scripts here](/resources/tech/sigasi-rankcheck.tgz).
You might also need to install <a href="http://www.python.org/">Python</a> and <a href="http://pycurl.io/">PycURL</a> (`yum install python-pycurl` on Fedora).

Hendrik.
