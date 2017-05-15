# -wuhanintro-webpack
预览地址： https://101piano.github.io/-wuhanintro-webpack/index.html<br>

##webpack打包
----------------------------
```
npm init   //生成package.json文件，或者npm init -y
npm install --save-dev webpack//安装webpack
```
在package.json文件里的scripts里面加入
```
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"//运行时直接npm run build，每次修改都需要
  },
```
## webpack引入jquery
----------------------------
1、直接引入
一定要先  npm install jquery --save，这样在packge.json的dependencies里面有jquery,<br>
然后再js模块中  var $=require('jquery');<br>
2、export-loader<br>
3、插件<br>
