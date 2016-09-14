import markdown
import datetime

def license(licenseName):
    if licenseName == 'CC BY-ND 4.0':
        link = "http://creativecommons.org/licenses/by-nd/4.0/"
        return "the <a href='%s'>%s license</a>"%(link,licenseName)
    if licenseName == 'Sigasi Insights':
        return "the <a href='/LICENSE.html'>Sigasi Insights license</a>"
    else:
        raise "unknown license: " + licenseName
def today(unusedArgumetn):
    return str(datetime.date.today())
def dateformat(value, format="%Y-%m-%d"):
    return value.strftime(format).replace('-','&#8209;') #non-breaking hyphen

def coloredDot(title):
    return title.replace('.','<span style="color:#f47920">.</span>')
    
def md(text):
    return markdown.markdown(text)

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
        <div id="wistia_{{videoid}}" style="height:{{video_height}}px;width:{{video_width}}px;margin: 0 auto" class="wistia_embed" data-video-width="{{video_width}}" data-video-height="{{video_height}}">
              <object id="wistia_efw03up0ck_seo" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" style="display:block;height:{{video_height}}px;position:relative;width:{{video_width}}px;">
                <param name="movie" value="http://embed.wistia.com/flash/embed_player_v2.0.swf?2012-06-01"></param>
                <param name="allowfullscreen" value="true"></param><param name="allowscriptaccess" value="always"></param>
                <param name="bgcolor" value="#ffffff"></param><param name="wmode" value="opaque"></param>
                <param name="flashvars" value="controlsVisibleOnLoad=true&mediaDuration=30.47&image_crop_resized%3D{{video_width}}x{{video_height}}&unbufferedSeek=true&videoUrl=http%3A%2F%2Fembed.wistia.com%2Fdeliveries%2Fddf8cead70053c77e1400fad8185242b6fa596e5.bin"></param>
                <embed src="http://embed.wistia.com/flash/embed_player_v2.0.swf?2012-06-01" allowfullscreen="true" allowscriptaccess="always" bgcolor=#ffffff flashvars="controlsVisibleOnLoad=true&mediaDuration=30.47&stillUrl=http%3A%2F%2Fembed.wistia.com%2Fdeliveries%2Fe1e5db77747eca2f9b721f1b396af988cc38eb8b.jpg%3Fimage_crop_resized%3D{{video_width}}x{{video_height}}&unbufferedSeek=true&videoUrl=http%3A%2F%2Fembed.wistia.com%2Fdeliveries%2Fddf8cead70053c77e1400fad8185242b6fa596e5.bin" name="wistia_efw03up0ck_html" style="display:block;height:100%;position:relative;width:100%;" type="application/x-shockwave-flash" wmode="opaque"></embed>
                </object>
        </div>
        <script charset="ISO-8859-1" src="http://fast.wistia.com/static/concat/E-v1%2Csocialbar-v1.js"></script>
        <script>
          wistiaEmbed = Wistia.embed("{{videoid}}", {
            version: "v1",
            videoWidth: {{video_width}},
            videoHeight: {{video_height}},
            controlsVisibleOnLoad: false,
          });
          Wistia.plugin.socialbar(wistiaEmbed, {
            version: "v1",
            buttons: "twitter-googlePlus-facebook"
          });
        </script>""".replace('{{video_width}}',str(video_width)).replace('{{video_height}}',str(video_height)).replace('{{videoid}}',str(videoid))

filters = {}
filters['author'] = author
filters['cutoff'] = cutoff
filters['dateformat'] = dateformat
filters['filtercontent'] = filtercontent
filters['filterfirst'] = filterfirst
filters['filterlatest'] = filterlatest
filters['filtertag'] = filtertag
filters['md'] = md
filters['recurse'] = recurse
filters['sortpopular'] = sortpopular
filters['split'] = split
filters['wistia'] = wistia
filters['today'] = today
filters['license'] = license
filters['coloredDot'] = coloredDot
