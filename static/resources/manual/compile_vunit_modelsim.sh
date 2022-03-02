# Compile the VUnit library for ModelSim/QuestaSim.
# The compiled library gets installed in the current folder, which should be outside of your project folder
#
# Usage: compile.sh [VUnit_install_path]
#
# If the install path is omitted, /usr/local/lib/python3.6/site-packages/vunit is assumed.
#
# After the compilation has finished, run the following commands in your project folder:
# vmap -c  # only if your project folder doesn't contain modelsim.ini already
# vmap <folder_where_this_script_ran>/vunit_lib vunit_lib

VUNIT_DIR=${1:-/usr/local/lib/python3.6/site-packages/vunit}
vlib vunit_lib
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/string_ops/src/string_ops.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/path/src/path.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/logging/src/print_pkg.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/logging/src/location_pkg.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/logging/src/location_pkg-body-2008m.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/data_types/src/types.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/data_types/src/codec_builder.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/data_types/src/codec_builder-2008p.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/data_types/src/codec.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/data_types/src/codec-2008p.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/data_types/src/api/external_string_pkg.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/data_types/src/string_ptr_pkg.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/logging/src/ansi_pkg.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/logging/src/log_levels_pkg.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/data_types/src/string_ptr_pkg-body-2002p.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/data_types/src/byte_vector_ptr_pkg.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/data_types/src/api/external_integer_vector_pkg.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/data_types/src/integer_vector_ptr_pkg.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/logging/src/log_handler_pkg.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/logging/src/print_pkg-body.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/logging/src/logger_pkg.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/dictionary/src/dictionary.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/run/src/run_types.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/logging/src/file_pkg.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/logging/src/log_handler_pkg-body.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/data_types/src/integer_vector_ptr_pkg-body-2002p.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/data_types/src/integer_array_pkg.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/data_types/src/queue_pkg.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/data_types/src/string_ptr_pool_pkg.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/data_types/src/queue_pkg-body.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/data_types/src/queue_pkg-2008p.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/data_types/src/integer_vector_ptr_pool_pkg.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/run/src/runner_pkg.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/run/src/run_api.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/data_types/src/queue_pool_pkg.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/data_types/src/integer_array_pkg-body.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/data_types/src/dict_pkg.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/data_types/src/data_types_context.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/core/src/stop_pkg.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/core/src/stop_body_2008p.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/core/src/core_pkg.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/run/src/run.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/logging/src/logger_pkg-body.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/logging/src/log_levels_pkg-body.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/logging/src/log_deprecated_pkg.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/check/src/checker_pkg.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/run/src/run_deprecated_pkg.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/vunit_run_context.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/check/src/checker_pkg-body.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/check/src/check_api.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/check/src/check_deprecated_pkg.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/vunit_context.vhd
vcom -work vunit_lib -2008 $VUNIT_DIR/vhdl/check/src/check.vhd

echo '############################################################################'
echo 'Please check the above output for errors.'
echo 'If all was fine, run the following commands in your project folder:'
echo '############################################################################'
echo "vmap -c  # only if your project folder doesn't contain modelsim.ini already"
echo "vmap `pwd`/vunit_lib vunit_lib"
echo '############################################################################'
