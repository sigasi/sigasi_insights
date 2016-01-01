GH-PAGES = ${HOME}/dev/urubu-gh-pages/

help:
	@echo make build
	@echo make serve
	@echo make publish
	@echo make urubu

all: build

build: NOCAPS
	python -m urubu build
	touch _build/.nojekyll
	ls _gh-pages > /dev/null|| git clone --branch gh-pages git@github.com:sigasi/sigasi_doc.git _gh-pages
	rm -Rf _gh-pages/*
	cp -R _build/* _gh-pages

server.PID:
	{ python -m urubu serve & echo $$! > $@; } 

serve: server.PID
	@echo 'http://localhost:8000'

stop: server.PID
	kill `cat $<` && rm $<

# linkchecker can be installed from http://wummel.github.io/linkchecker/ (or sudo dnf install linkchecker)
dolinkchecker:
	@echo Checking links at 'http://localhost:8000'
	linkchecker -Fhtml/utf-8/linkchecker_result.html  "http://localhost:8000/" && "All links OK" || echo "Broken links found"

linkchecker: serve dolinkchecker stop

clean:
	rm -Rf _build
	rm -Rf _gh-pages

dependencies:
	pip install --upgrade urubu 
	pip install linkchecker

publish: build
	# git subtree push --prefix _build origin gh-pages    
	cd _gh-pages && git add -A && git commit -m "Update documentation" && git push

NOCAPS:
	@ ! find . -name '*.png'|grep -v _build/ |grep -v _gh-pages | grep "[A-Z]"
	@ ! find . -name '*.jpg'|grep -v _build/ |grep -v _gh-pages | grep "[A-Z]"
	@ ! find . -name '*.gif'|grep -v _build/ |grep -v _gh-pages | grep "[A-Z]"
	@ ! find . -name '*.md' |grep -v README.md| grep -v _build/ |grep -v _gh-pages | grep "[A-Z]"

.PHONY: help all build serve publish urubu
