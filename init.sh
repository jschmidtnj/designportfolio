#!/bin/bash

# abort on errors
set -e

yarn install
cd nuxt
yarn install
cd ../docs
yarn install
cd ../amp
yarn install 
cd ../init
yarn install
cd ../shortlink
yarn install
cd ..
