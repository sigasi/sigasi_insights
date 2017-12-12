#!/bin/bash

#if gh-pages does not exist yet, create it with:
#git worktree add --detach _build
#cd _build
#git checkout --orphan gh-pages
#git push origin gh-pages

# make sure everything is clean
set -euo pipefail

rm -rf _build
git worktree prune

# check that there are no uncommited changes
if ! git diff-index --quiet HEAD --
    then
        echo >&2 "You have uncommited changes."
        git diff-files --name-status -r --ignore-submodules -- >&2
        exit -1
fi

VERSION_HASH=$(git rev-parse --short HEAD)

echo "Fetch and checkout latest version from Github"
git fetch origin gh-pages -q
git worktree add _build gh-pages
pushd _build
  git reset --hard origin/gh-pages
popd
#TODO: check, can we replace this with "git update-ref refs/heads/gh-pages origin/gh-pages

echo "Build"
make build

echo "gitdir: $(pwd)/.git/worktrees/_build" > _build/.git

pushd _build
  echo "Commit changes"
  git add -A
  git commit -m "Update urubu site (${VERSION_HASH})"
  git push origin gh-pages
popd

