#!/bin/bash

# abort on errors
set -e

npm run precommit --prefix nuxt
gofmt -w graphql
npm run precommit --prefix amp
npm run precommit --prefix init
npm run precommit --prefix docs
git add -A
