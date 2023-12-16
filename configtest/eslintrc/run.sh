#!/bin/sh

cd $(dirname "$0")
set -eux
ESLINT_USE_FLAT_CONFIG=false eslint --max-warnings 0 src
