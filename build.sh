#!/bin/bash

set -e
set -u

rm -rf docs/docs/examples
rm -rf docs/docs/user-guide
git clone https://github.com/shotover/shotover-proxy.git --depth 1
rm -rf docs/docs/latest
mv shotover-proxy/docs/src docs/docs/latest
rm -rf shotover-proxy
cd docs/docs/latest
find . -type f -name "*.md" -exec sed -i 's/```YAML/```yaml/g' {} +
find . -type f -name "*.md" -exec sed -i 's/```console/```make/g' {} +
rm logo.png logo.svg index.md SUMMARY.md
cd ../../../
npm install --frozen-lockfile
npm run docs:build
cd docs/.vitepress/
mkdir shotover-blog
mv dist/* shotover-blog
mv shotover-blog dist/
mv dist/shotover-blog/index.html dist/