#!/bin/bash

set -e
set -u

./build.sh
cd docs/.vitepress/dist
python3 -m http.server
