read -p "Comments : " comments
# yarn build
# cd ./build
# git init
git stage .
git add .
git commit -m "${comments} -autodeploy"
# git remote add origin https://github.com/ombahiwal/io.tabme.app
git push origin master
echo "Deployment Success! ${comments}"
