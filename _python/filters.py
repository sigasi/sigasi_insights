def dateformat(value, format="%Y-%m-%d"):
    return value.strftime(format).replace('-','&#8209;') #non-breaking hyphen

def author(name):
    return name
def cutoff(name,length=30):
    if len(name) > length:
        return name[:length]+"..."
    else:
        return name
def filtercontent(sections,url="/tech/"):
    for section in sections:
        if section['url'] == url:
            return section['content']
    return []
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

filters = {}
filters['dateformat'] = dateformat
filters['author'] = author
filters['filtercontent'] = filtercontent
filters['filterlatest'] = filterlatest
filters['sortpopular'] = sortpopular
filters['filterfirst'] = filterfirst
filters['cutoff'] = cutoff
filters['recurse'] = recurse
filters['split'] = split
filters['filtertag'] = filtertag
