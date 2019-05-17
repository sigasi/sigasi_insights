#!/bin/bash

SOURCE=$1.textile
TARGET=$1.md

pandoc $SOURCE -o $TARGET

echo "---" >>  $TARGET
echo "title: Sigasi 2.xx" >>  $TARGET
echo "layout: page" >>  $TARGET
echo "pager: true" >>  $TARGET
echo "date: 2014-xx-xx" >>  $TARGET
echo "---" >>  $TARGET

echo "" >> $TARGET
echo "If you have Sigasi 2 installed, you can [update_sigasi]. You can also [download_latest]." >> $TARGET

sed -i -e 's$\[img$![xxx](2.xx/xxxxx.png "xxx")    $' $TARGET

#for f in *; do mv "$f" "`echo $f | tr "[:upper:]" "[:lower:]"`"; done
