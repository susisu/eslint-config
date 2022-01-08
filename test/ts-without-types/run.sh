#!/bin/sh

cd $(dirname "$0")
set -eux
eslint --ext .ts src
