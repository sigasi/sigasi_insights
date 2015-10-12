GH-PAGES = ${HOME}/dev/urubu-gh-pages/

help:
	@echo make build
	@echo make serve
	@echo make publish
	@echo make urubu

all: build

build:
	python -m urubu build
	touch _build/.nojekyll
	ls _gh-pages > /dev/null|| git clone --branch gh-pages git@github.com:sigasi/sigasi_doc.git _gh-pages
	rm -Rf _gh-pages/*
	cp -R _build/* _gh-pages

serve:
	@echo 'http://localhost:8000'
	python -m urubu serve

urubu:
	pip install --upgrade urubu

publish: build
	# git subtree push --prefix _build origin gh-pages    
	cd _gh-pages && git add -A && git commit -m "Update documentation" && git push

.PHONY: help all build serve publish urubu
