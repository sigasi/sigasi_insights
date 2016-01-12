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
def split(items,i):
    return [items[:len(items)/2], items[len(items)/2:]] [i]

filters = {}
filters['dateformat'] = dateformat
filters['author'] = author
filters['filtercontent'] = filtercontent
filters['filterlatest'] = filterlatest
filters['cutoff'] = cutoff
filters['recurse'] = recurse
filters['split'] = split
