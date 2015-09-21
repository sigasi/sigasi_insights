#!/usr/bin/python

import aliasses
import urllib2
import lxml.etree as etree
from io import BytesIO

def loadUrl(url):
    response = urllib2.urlopen(url)
    html = response.read()
    lines = html.split('\n')

    n = next(i for i in range(len(lines)) if ('<section' in lines[i]) )
    m = next(i for i in range(len(lines)) if ('</section' in lines[i]) )
    lines = lines[n:m+1]
    
    lines = [l for l in lines if not '!window.jQuery' in l]
    t="".join(lines)
    t=t.replace('<div id="sidebar"', '<div ')
    t="<div>%s</div>"%t
    
    # import lxml.etree.ElementTree as ET
    
    some_file_like_object = BytesIO(t)
    tree = etree.parse(some_file_like_object)
    return tree

def processFile(name,url=None,targetDir="content"):
    if not url:
        url = 'http://www.sigasi.com/content/' + name
    tree=loadUrl(url)
    # build_text_list = tree.xpath("//text()")
    
    title = tree.xpath('//h1/text()')[0]
    authorPart = tree.xpath('//*[@id="main"]/div[1]/div[1]/div[1]/span[1]')[0].text
    if authorPart:
        author = authorPart[authorPart.find("by ")+3:]
        date = authorPart[authorPart.find(",")+2:][:10] 
    content = etree.tostring(tree.xpath('//*[@id="main"]/div[1]/div[1]/div[2]')[0])
    content = content.replace('<div class="image-clear"/>','')
    content = "\n".join([line.strip() for line in content.split('\n')])
    try:
        tags= [x.xpath('a')[0].text for x in  tree.xpath('//*[@id="main"]/div[1]/div[1]/div[3]/ul[1]/li/ul')[0].iterchildren() ]
    except:
        tags = None
    f = file(targetDir+"/"+name+".md",'w')
    f.write('---\n')
    if '"' in title:
        f.write('title: \'%s\'\n'%title)
    else:
        f.write('title: "%s"\n'%title)
    f.write('layout: page \n')
    f.write('pager: true\n')
    if 'author' in locals():
        f.write('author: %s\n'%author)
    if 'date' in locals():
        f.write('date: %s\n'%date)
    if tags:
        f.write('tags: %s\n'% ("\n  - "+("\n  - ".join(tags))))
    f.write('---\n')
    f.write(content)
    f.close()

listJan="""\
academic-frustration
wasting-real-time-zero-time
pitfalls-for-circuit-girls
time-reflection
vhdls-crown-jewel
verilogs-major-flaw
your-favorite-mistake
eda-20
most-needed-eda-innovation
the-biggest-eda-innovations-that-did-not-happen
latest-eda-innovation-logic-synthesis
academic-frustration
synthesis-was-my-first-love
20-year-old-relationship
announce-jan-hdl-design""".split('\n')

if __name__=="__main__":
    for (dir,name) in aliasses.contents:
        print dir,name
        url = 'http://www.sigasi.com/' + name
        title = name.split('/')[-1]
        processFile(name=title, url=url,targetDir=dir)
