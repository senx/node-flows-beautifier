#!/usr/bin/env bash
rm -rf ./dist
npm run build
cp package.json ./dist
cp README.md ./dist
cd ./dist
npm publish --access public
