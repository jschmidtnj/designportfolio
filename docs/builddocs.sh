#!/bin/bash

# abort on errors
set -e

# build
yarn api

# remove current directories
rm -rf .vuepress/public/api

# copy to public directories
mv apidocs .vuepress/public/api

# build
yarn generate
yarn pwa
sed -i 's/\/images\//\/designportfolio\/images\//g' docs/Polyfills/manifest.json

rm -rf .vuepress/dist/
mv designportfolio/ .vuepress/dist
rm -rf docs/Polyfills/web/Images/designportfolio
cp -r docs/Polyfills/web/Images/ .vuepress/dist/images
rm -rf docs/Polyfills/web/Images/
mv docs/Polyfills/manifest.json .vuepress/dist/manifest.json
rm -rf docs/
