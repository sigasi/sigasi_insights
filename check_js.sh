#!/bin/sh

uikit_dist_dir=themes/sigasi_theme/assets/uikit/dist/js
static_dir=themes/sigasi_theme/static/js

diffs=0

for file in "$uikit_dist_dir"/*.js
do
  filename=$(basename "$file")
  $(cmp -s $uikit_dist_dir/$filename $static_dir/$filename)
  returnvalue=$?
  diffs=$(expr $diffs + $returnvalue)
done

if [ $diffs \> 0 ];
then
    echo "Attention: the js files in the site differ from those in uikit."
    echo "To resolve this issue, copy the js files from the UIkit dist folder into the static folder."
fi;

return $diffs
