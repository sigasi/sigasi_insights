import datetime
filters = {}

try:
    import markdown
    def md(text):
        return markdown.markdown(text)
    filters['md'] = md
except ImportError:
    print "Could not find module markdown. Continuing without markdown"


def license(licenseName):
    if licenseName == 'CC BY-ND 4.0':
        link = "http://creativecommons.org/licenses/by-nd/4.0/"
        return "the <a href='%s'>%s license</a>"%(link,licenseName)
    if licenseName == 'Sigasi Insights':
        return "the <a href='/LICENSE.html'>Sigasi Insights license</a>"
    else:
        raise "unknown license: " + licenseName
def today(unusedArgument):
    return str(datetime.date.today())
def dateformat(value, format="%Y-%m-%d"):
    return value.strftime(format).replace('-','&#8209;') #non-breaking hyphen

def coloredDot(title):
    return title.replace('.','<span style="color:#f47920">.</span>')


def author(name):
    return name
def cutoff(name,length=30):
    if len(name) > length:
        return name[:length]+"..."
    else:
        return name
def filtercontent(sections,urls=["/tech/"]):
    if type(urls)==str:
        urls=[urls]
    contents = [section['content'] for section in sections if section['url'] in urls]
    return sum(contents,[])
def filtertag(content,tag):
    return [item for item in content if tag in item.get('tags',[])]
def loadWeights():
    weights={}
    f=file('_python/weights.csv','r')
    for line in f.readlines():
        key=line.split(',')[1].strip()
        val=int(line.split(',')[0])
        weights[key]=val
    f.close()
    return weights
def sortpopular(content):
    weights={
    "/blog/why-ghdl-currently-not-good-enough.html"                         :8489,
    "/blog/jan/verilogs-major-flaw.html"                                    :4349,
    "/blog/jan/vhdls-crown-jewel.html"                                      :2914,
    "/blog/xilinx-slowly-dumping-modelsim.html"                             :2717,
    "/blog/jan/fixing-verilog-easy.html"                                    :2094,
    "/blog/emacs/why-emacs-vhdl-mode-so-great-and-why-we-want-beat-it.html" :2009,
    }
    weights = loadWeights()
    return  sorted(content, key = lambda item: weights.get(item['url'],0), reverse=True)
    
def recurse(content):
    result = []
    for item in content:
        if item.has_key("content"):
            result += recurse(item["content"])
        else:
            result.append(item)
    return result
def filterlatest(content,count=10):
    c =  sorted(content,key=lambda c:c.get('date'),reverse=True)
    if len(c)>count:
        return c[:count]
    else:
        return c
def filterfirst(content,count=10):
    if len(content)>count:
        return content[:count]
    else:
        return content
def split(items,i):
    return [items[:len(items)/2], items[len(items)/2:]] [i]
def wistia(videoid,video_width=600,video_height=400):
    return """
        <script src="//fast.wistia.com/embed/medias/j38ihh83m5.jsonp" async></script>
        <script src="//fast.wistia.com/assets/external/E-v1.js" async></script>
        <div class="wistia_embed wistia_async_{{videoid}}" style="height:{{video_height}}px;width:{{video_width}}px;margin: 0 auto"></div>
        """.replace('{{video_width}}',str(video_width)).replace('{{video_height}}',str(video_height)).replace('{{videoid}}',str(videoid))


filters['author'] = author
filters['cutoff'] = cutoff
filters['dateformat'] = dateformat
filters['filtercontent'] = filtercontent
filters['filterfirst'] = filterfirst
filters['filterlatest'] = filterlatest
filters['filtertag'] = filtertag
filters['recurse'] = recurse
filters['sortpopular'] = sortpopular
filters['split'] = split
filters['wistia'] = wistia
filters['today'] = today
filters['license'] = license
filters['coloredDot'] = coloredDot
