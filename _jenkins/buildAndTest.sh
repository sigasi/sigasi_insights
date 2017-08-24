#!/bin/bash

SCRIPTDIR=$(
  cd $(dirname "$0")
  pwd
)
ERRORLOGFILE="${SCRIPTDIR}/stderr.log"
pushd ${SCRIPTDIR}/.. > /dev/null

touch ${ERRORLOGFILE}

make build 2> >(tee -a ${ERRORLOGFILE} >&2)

if grep -q "urubu_warn" ${ERRORLOGFILE}; then
  echo "Build has warnings => fail"
  exit -1
else
  echo "Build successful"
fi

rm -rf ${ERRORLOGFILE} > /dev/null

popd > /dev/null