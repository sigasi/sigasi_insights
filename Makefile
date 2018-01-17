help:
	@echo make build
	@echo make serve
	@echo make berve
	@echo make publish
	@echo make dependencies

all: build

build: NOCAPS
	python -m urubu build
	@touch _build/.nojekyll

build_offline: build
	rm -Rf _build_offline
	cp -R _build _build_offline
	# make relative links
	sed -i -e 's|href="/|href="./|g'         _build_offline/*.html
	sed -i -e 's|href="/|href="./../|g'      _build_offline/*/*.html
	sed -i -e 's|href="/|href="./../../|g'   _build_offline/*/*/*.html
	sed -i -e "s|href='/|href='./|g"         _build_offline/*.html
	sed -i -e "s|href='/|href='./../|g"      _build_offline/*/*.html
	sed -i -e "s|href='/|href='./../../|g"   _build_offline/*/*/*.html
	sed -i -e 's|src="/|src="./|g'           _build_offline/*.html
	sed -i -e 's|src="/|src="./../|g'        _build_offline/*/*.html
	sed -i -e 's|src="/|src="./../../|g'     _build_offline/*/*/*.html
	sed -i -e "s|src='/|src='./|g"           _build_offline/*.html
	sed -i -e "s|src='/|src='./../|g"        _build_offline/*/*.html
	sed -i -e "s|src='/|src='./../../|g"     _build_offline/*/*/*.html
	sed -i -e "s|quot;/css|quot;./css|g"       _build_offline/*.html
	sed -i -e "s|quot;/css|quot;./../css|g"    _build_offline/*/*.html
	sed -i -e "s|quot;/css|quot;./../../css|g" _build_offline/*/*/*.html
	sed -i -e 's|"\\/css\\/|"css\\/|g'        _build_offline/*.html
	sed -i -e 's|"\\/css\\/|"..\\/css\\/|g'     _build_offline/*/*.html
	sed -i -e 's|"\\/css\\/|"..\\/..\\/css\\/|g'  _build_offline/*/*/*.html

	sed -i -e 's|http\:\/\/insights.sigasi.com|.|g'        _build_offline/*.html
	sed -i -e 's|http\:\/\/insights.sigasi.com|./..|g'     _build_offline/*/*.html
	sed -i -e 's|http\:\/\/insights.sigasi.com|./../..|g'  _build_offline/*/*/*.html
	# fix links to index files
	sed -i -e 's|<a href="\.\(.*\)/"|<a href=".\1/index.html"|'   _build_offline/*.html
	sed -i -e 's|<a href="\.\(.*\)/"|<a href=".\1/index.html"|'   _build_offline/*/*.html
	sed -i -e 's|<a href="\.\(.*\)/"|<a href=".\1/index.html"|'   _build_offline/*/*/*.html
	# remove SED backup files
	find _build_offline -name '*.html-e'  -exec rm {} \;
	tar -c -z -s /_build_offline/insights.sigasi.com-${DATE}/ -f insights.sigasi.com-${DATE}.tgz _build_offline
	

serve:
	@echo 'http://localhost:8000'
	python -m urubu serve

berve: build serve

clean:
	rm -Rf _build

dependencies:
	#pip install --upgrade urubu 
	# Work-around until PRs #71 and #73 are merged into https://github.com/jandecaluwe/urubu
	pip install git+https://github.com/bartbrosens/urubu.git

publish:
	./_publish.sh

NOCAPS:
	@ ! find . \( -path ./css -o -path _build -o -path _build_offline \) -prune -name '*.png' | grep "[A-Z]"
	@ ! find . -name '*.jpg'|grep -v _build/ | grep "[A-Z]"
	@ ! find . -name '*.gif'|grep -v _build/ | grep "[A-Z]"
	@ ! find . -name '*.md' |grep -v README.md|grep -v LICENSE.md| grep -v _build/ |grep -v _gh-pages | grep "[A-Z]"

.PHONY: help all build serve berve publish urubu
