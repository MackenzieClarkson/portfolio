#!/usr/bin/env sh

# abort on errors
set -e
NODE_OPTIONS="--openssl-legacy-provider"
# build
yarn run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:MackenzieClarkson/MackenzieClarkson.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:MackenzieClarkson/portfolio.git master:gh-pages

cd -
