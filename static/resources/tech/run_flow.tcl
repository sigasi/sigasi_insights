# run_flow.tcl
#
# This script runs a simplified design flow in Xilinx Vivado for a
# design created in Sigasi Studio.
#
# Copyright (c) 2021, Sigasi. All rights reserved.
#
# This script is provided under the BSD license:
#
# Redistribution and use in source and binary forms, with or without modification,
# are permitted provided that the following conditions are met:
#
#   Redistributions of source code must retain the above copyright notice, this
#   list of conditions and the following disclaimer.
#
#   Redistributions in binary form must reproduce the above copyright notice, this
#   list of conditions and the following disclaimer in the documentation and/or
#   other materials provided with the distribution.
#
#   Neither the name of the Sigasi nor the names of its
#   contributors may be used to endorse or promote products derived from
#   this software without specific prior written permission.
#
# THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
# ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
# WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
# DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
# ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
# (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
# LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
# ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
# (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
# SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


# Read the design. The file toplevel_order.csv contains a list of design file
# in the order in which they must be compiled

## MODIFY ACCORDING TO YOUR NEEDS
set design_top  "my_design_top"
set device_type "xc7s6cpga196-2"

foreach row [split [read [open "toplevel_order.csv" r] ] "\r\n"] {
  if {[string first "," $row] != -1} {
    # Split each non-empty row into its columns
    lassign [split $row ","] libname filename
    puts "Compiling [string trim $filename] into library $libname"
    set fileext [lindex [split $filename "."] end]
    switch -nocase $fileext {
      # Depending on file extension, call the appropriate compile command
      "v"    { read_verilog     -lib $libname $filename }
      "sv"   { read_verilog -sv -lib $libname $filename }
      "vhd"  -
      "vhdl" { read_vhdl        -lib $libname $filename }
    }
  }
}

# Set design constraints here

# Extremely simplified FPGA synthesis and implementation flow
# 
synth_design -top $design_top -part $device_type
place_design
route_design
write_checkpoint -force design.dcp
# write_bitstream -force design.bit
