#!/bin/bash
for file in vhdl2008_*
do
	bname=${file#vhdl2008_}
	montage vhdl2008_$bname vhdl2019_$bname -tile 2x1 -geometry +0+0 vhdl_2008_2019_$bname 
done
