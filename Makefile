help:
	@echo make build
	@echo make serve
	@echo make stop
	@echo make publish
	@echo make dependencies

all: build

MAKEFILE_PATH=$(realpath $(@D))
WORKTREE_PATH=$(MAKEFILE_PATH)/.git/worktrees/_build

gh-pages-update:
	@ls $(WORKTREE_PATH) || (rm -rf _build && git worktree prune && git worktree add _build gh-pages)
	cd _build && git pull origin gh-pages

build: NOCAPS
	python -m urubu build
	@touch _build/.nojekyll
	@( cd _build && find . -name "*html" | grep -v "./google" |grep -v '^.html' | sed -e "s/^./http:\/\/insights.sigasi.com/" > sitemap.txt )
	@echo "gitdir: $(MAKEFILE_PATH)/.git/worktrees/_build" > _build/.git

build_offline: build
	rm -Rf _build_offline
	cp -R _build _build_offline
	# make relative links
	sed -i -e 's|<a href="/|<a href="./|'         _build_offline/*.html
	sed -i -e 's|<a href="/|<a href="./../|'      _build_offline/*/*.html
	sed -i -e 's|<a href="/|<a href="./../../|'   _build_offline/*/*/*.html
	# fix links to index files
	sed -i -e 's|<a href="\.\(.*\)/"|<a href=".\1/index.html"|'   _build_offline/*.html
	sed -i -e 's|<a href="\.\(.*\)/"|<a href=".\1/index.html"|'   _build_offline/*/*.html
	sed -i -e 's|<a href="\.\(.*\)/"|<a href=".\1/index.html"|'   _build_offline/*/*/*.html
	# remove SED backup files
	find _build_offline -name '*.html-e'  -exec rm {} \;
	tar czf _sigasi_insights_offline.tgz _build_offline
	
server.PID:
	{ python -m urubu serve & echo $$! > $@; } 

serve: server.PID
	@echo 'http://localhost:8000'

stop: server.PID
	kill `cat $<`; rm $<

# linkchecker can be installed from http://wummel.github.io/linkchecker/ (or sudo dnf install linkchecker)
dolinkchecker:
	@echo Checking links at 'http://localhost:8000'
	linkchecker -Fhtml/utf-8/linkchecker_result.html --anchors --ignore-url="http://localhost:8000/tag/.*" --ignore-url="http://localhost:8000/tech/resources/doxygen-example/.*" "http://localhost:8000/" && echo "All links OK" || echo "Broken links found"

linkchecker: serve dolinkchecker stop

clean:
	rm -Rf _build
	git worktree prune

dependencies:
	pip install --upgrade urubu 
	pip install linkchecker

publish: gh-pages-update build
	cd _build && git add -A && git commit -m "Update documentation" && git push origin gh-pages

NOCAPS:
	@ ! find . -name '*.png'|grep -v _build/ | grep "[A-Z]"
	@ ! find . -name '*.jpg'|grep -v _build/ | grep "[A-Z]"
	@ ! find . -name '*.gif'|grep -v _build/ | grep "[A-Z]"
	@ ! find . -name '*.md' |grep -v README.md| grep -v _build/ |grep -v _gh-pages | grep "[A-Z]"

.PHONY: help all build serve publish urubu
