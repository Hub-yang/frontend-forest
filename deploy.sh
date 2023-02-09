# 当发生错误时中止脚本
set -e

# 构建
npm run build

# cd 到构建输出的目录下 
cd dist

echo > .nojekyll

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:Mochenghualei/my-personal-website.git main:gh-pages

cd -