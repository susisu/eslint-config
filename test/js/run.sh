#!/bin/sh

cd $(dirname "$0")
set -eux
eslint --report-unused-disable-directives src
