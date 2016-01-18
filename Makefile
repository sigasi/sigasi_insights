help:
	@echo make build
	@echo make serve
	@echo make stop
	@echo make publish
	@echo make dependencies

all: build

MAKEFILE_PATH=$(realpath $(@D))

build: NOCAPS
	@ls _build > /dev/null || git worktree add _build gh-pages
	python -m urubu build
	@touch _build/.nojekyll
	@echo "gitdir: $(MAKEFILE_PATH)/.git/worktrees/_build" > _build/.git

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

publish: build
	ls _build/.git > /dev/null #assert that there is a worktree in _build
	cd _build && git add -A && git commit -m "Update documentation" && git push

NOCAPS:
	@ ! find . -name '*.png'|grep -v _build/ | grep "[A-Z]"
	@ ! find . -name '*.jpg'|grep -v _build/ | grep "[A-Z]"
	@ ! find . -name '*.gif'|grep -v _build/ | grep "[A-Z]"
	@ ! find . -name '*.md' |grep -v README.md| grep -v _build/ |grep -v _gh-pages | grep "[A-Z]"

.PHONY: help all build serve publish urubu
