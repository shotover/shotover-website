#!/bin/bash

set -e
set -u

rm docs/docs/*.md
rm -rf docs/docs/examples
rm -rf docs/docs/user-guide
git clone https://github.com/shotover/shotover-proxy.git
mv shotover-proxy/docs/src/* docs/docs/
rm -rf shotover-proxy
cd docs/docs/
find . -type f -name "*.md" -exec sed -i 's/```YAML/```yaml/g' {} +
find . -type f -name "*.md" -exec sed -i 's/```console/```make/g' {} +
rm logo.png logo.svg index.md SUMMARY.md
cd ../../
npm install --frozen-lockfile
echo "<Footer />" | tee -a docs/blog/*.md
echo "<Footer />" | tee -a docs/docs/*.md
echo "<SocialButtons /><RelatedPosts /><Footer />" | tee -a docs/blog/**/*.md
echo "<Footer />" | tee -a docs/docs/**/*.md
npm run docs:build
cd docs/.vitepress/
mkdir shotover-blog
mv dist/* shotover-blog
mv shotover-blog dist/
mv dist/shotover-blog/index.html dist/