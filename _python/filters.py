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
def sortpopular(content):
    weights={
        "/tech/signal-assignments-vhdl-withselect-whenelse-and-case.html"	:73125,
        "/tech/to-downto-ranges-vhdl.html"	:55880,
        "/tech/clock-edge-detection.html"	:22498,
        "/tech/four-and-half-ways-write-vhdl-instantiations.html"	:16966,
        "/tech/vhdl-case-statements-can-do-without-others.html"	:15262,
        "/tech/be-careful-vhdl-operator-precedence.html"	:14487,
        "/tech/vhdl-assert-and-report.html"	:11002,
        "/blog/why-ghdl-currently-not-good-enough.html"	:8489,
        "/tech/advanced-vhdl-configurations-tying-component-unrelated-entity.html"	:7849,
        "/tech/use-and-library-vhdl.html"	:7260,
        "/manual/setup.html"	:6087,
        "/tech/how-run-xilinx-isimfuse-command-line-linux.html"	:5946,
        "/tech/generating-sigasi-project-vivado-project.html"	:5772,
        "/tech/tricking-your-mac-believing-it-can-run-modelsim.html"	:5366,
        "/screencasts/signal_declaration.html"	:5260,
        "/tech/work-not-vhdl-library.html"	:4854,
        "/tech/how-implement-highlight-matching-brackets-your-custom-editor-eclipse.html"	:4738,
        "/tech/deprecated-ieee-libraries.html"	:4638,
        "/blog/jan/verilogs-major-flaw.html"	:4349,
        "/tech/dynamic-menu-items-eclipse.html"	:3414,
        "/tech/list-known-vhdl-metacomment-pragmas.html"	:3384,
        "/tech/installing-translations-eclipse.html"	:3048,
        "/tech/installing-modelsim-64-bit-linux-machine.html"	:3026,
        "/manual/linting.html"	:2917,
        "/blog/jan/vhdls-crown-jewel.html"	:2914,
        "/tech/eclipse_tcl_support_in_sigasi.html"	:2774,
        "/blog/xilinx-slowly-dumping-modelsim.html"	:2717,
        "/tech/generate-vhdl-doxygen-documentation-sigasi.html"	:2124,
        "/tech/eclipse-keyboard-tricks-editing-code.html"	:2113,
        "/blog/jan/fixing-verilog-easy.html"	:2094,
        "/blog/emacs/why-emacs-vhdl-mode-so-great-and-why-we-want-beat-it.html"	:2009,
        "/tech/how-organize-source-code-learn-java.html"	:2003,
        "/screencasts/mixed_language_instantiation.html" : 2001,
        "/screencasts/navigation.html" : 2000,
        "/screencasts/testbench.html"	:1998,
        "/blog/emacs/"	:1838,
        "/tech/importing-xilinx-ise-project-sigasi.html"	:1790,
        "/blog/are-vhdl-post-93-versions-used-real-life.html"	:1688,
        "/tech/how-get-multiple-search-result-tabs.html"	:1674,
        "/blog/lacking-open-source-vhdl-simulator.html"	:1655,
        "/tech/how-add-decorator-splash-screen-your-rcp-application.html"	:1636,
        "/tech/run-menu-item-strangely-disappearing-context-menu.html"	:1590,
        "/blog/benefits-extracting-documentation-software-code.html"	:1501,
        "/tech/installing-quartus-64-bit-linux-system.html"	:1454,
        "/tech/creating-e-books-eclipse.html"	:1433,
        "/screencasts/hex-values.html"	:1429,
        "/tech/keep-track-google-positions-your-keywords.html"	:1272,
        "/tech/xtext-resource-caching-loading-resources-5-times-faster.html"	:1236,
        "/tech/getting-started-altera-bemicro-sdk-linux.html"	:1152,
        "/tech/vhdl-physical-type-not-synthesizable-or-it.html"	:1149,
        "/tech/how-use-new-vhdl-2008-libraries-sigasi.html"	:1073,
        "/tech/vhdl-recursion-and-useful-error-messages.html"	:1030,
        "/tech/one-mistake-one-error-marker.html"	:1025,
        "/tech/make-eclipse-open-files-command-line.html"	:999,
        "/blog/emacs/engineers-are-smart-enough-change-editors.html"	:994,
        "/tech/static-checks-vhdl-code.html"	:991,
        "/tech/vhdl-physical-type-not-synthesizable-or-it-part-2.html"	:917,
        "/tech/vhdl-generation-yakindu-state-charts-xtend.html"	:901,
        "/tech/how-avoid-absolute-library-paths-your-sigasi-project-files.html"	:843,
        "/tech/view-complexity-your-xtext-ecore-model.html"	:843,
        "/blog/jan/wasting-real-time-zero-time.html"	:838,
        "/tech/how-much-time-spent-writing-documentation-versus-developing-rtl-code.html"	:819,
        "/blog/graphic-design-dead-long-live-graphical-views.html"	:793,
        "/tech/ultraedit-key-bindings-eclipse.html"	:743,
        "/blog/emacs/five-reasons-why-emacs-will-always-be-better.html"	:712,
        "/tech/sigasi-keyboard-shortcuts-cheat-sheet.html"	:677,
        "/tech/vhdl-pragmas.html"	:675,
        "/tech/why-you-need-good-documentation-your-vhdl-and-verilog-code.html"	:622,
        "/eula.html"	:556,
        "/tech/name-shadowing-vhdl.html"	:537,
        "/tech/coding-styles.html"	:536,
        "/tech/scope-vhdl-use-clauses-and-vhdl-library-clauses.html"	:528,
        "/tech/organizing-legacy-projects.html"	:517,
        "/tech/recovering-vhdl-parser-0.html"	:509,
        "/blog/jan/pitfalls-for-circuit-girls.html"	:462,
        "/tech/package-and-package-body-same-file-or-separate-files.html"	:429,
        "/tech/build-eclipse-documentation-wikitext-maven-tycho.html"	:425,
        "/blog/how-sell-eda-tools-liechtenstein.html"	:395,
        "/tech/adding-custom-code-checkers-your-project.html"	:376,
        "/tech/build-eclipse-documentation-wikitext-maven-tycho.html"	:369,
        "/blog/you-cant-write-vhdl-code-without-intelligent-editor.html"	:365,
        "/blog/emacs/emacs-syntax-errors.html"	:356,
        "/tech/opening-vhdl-files-sigasi-using-quartus.html"	:342,
        "/blog/emacs/vhdl-emacs-mode-navigation-using-ctags-are-broken.html"	:315,
        "/blog/why-hardware-designers-should-switch-eclipse.html"	:294,
        "/blog/emacs/emacs-code-coloring-outdated.html"	:293,
        "/blog/jan/the-biggest-eda-innovations-that-did-not-happen.html"	:283,
        "/blog/vhdl-why-oh-why-must-it-be-way.html"	:280
    }
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
