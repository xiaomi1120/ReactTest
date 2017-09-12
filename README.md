
# 使用babel编译代码  

```bash
babel baleTest.js -o compiled.js
```
## 操作流程

###  1.  安装babel CLI
```bash
npm install babel-cli -g
```
###  2. type>.babelrc  创建配置文件
``` bash
type>.babelrc 
```
###  3. 安装一个预设，可以把ES6代码编译成ES5代码
```bash
npm install --save-dev babel-preset-es2015
```
```bash
{
   "presets":['es2015'],
   "plugins":[]
}
```
#  对象展开操作符
```bash

```
> 安装 **babel-plugin-transform-object-rest-spread** 插件
```bash
npm install babel-plugin-transform-object-rest-spred --save-dev
```
> 添加至配置文件
```bash
{
   "presets":['es2015'],
   "plugins":['babel-plugin-transform-object-rest-spread']
}
```
# 包管理器
* 安装包
> 安装包有两种模式：一种是本地安装，一种是全局安装
```bash
npm install lodash
```
```bash
npm install -g jshint
```
> 安装完毕后，就可以在命令行使用 **jshint**这个工具了
```bash
jshint index.js
```
>可以使用下边的命令查看全局安装的具体位置
```bash
npm prefix -g
```
# 基于webpack进行开发
## Hello world
* 生成文本 “Hello world！”的hello模块（hello.js）
```bash
module.exports='Hello world!'
```
* 打印文本的index模块（index.js）
```bash
var text=require('./hello');
console.log(text)
```
* 页面内容（index.html）
```bash
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Hello</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>
    <script src="./bundle.js"></script>
</body>

</html>
```
* 需要注意的是：index.html中引用的bundles.js并不存在，它就是我们使用的webpack生成的文件
* 以下为我们的目录结构
```bash
- index.html
- index.js
- hello.js
```
* 我们知道，如果在index.html中直接引用index.js，代码是无法正常运行的，因为上边的代码按照CommonJS的模块规范书写的，浏览器环境并不支持，那么基于webpack 的具体做法使用一行命令即可：
```bash
webpack ./index.js bundle.js
```
* 现在可以查看我们的目录
```bash
- bundle.js
- hello.js
- index.html
- index.js
```

* 下面通过查看bundle.js的内容来分析下webpack所施展的魔法是怎么回事：
```bash
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache （module缓存对象）
/******/ 	var installedModules = {};

/******/ 	// The require function （require函数）
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache（检查module是否在cache中）
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)（新建一个module并且放入cache中）
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function（执行module函数）
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded（标记module已经加载）
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module（返回module并导出模块）
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__) （暴露module对象（__webpack_modules__））1
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache(暴露modules缓存)
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__（设置webpack公共路径__webpack_public_path__）
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports（读取入口模块并且返回exports导出）
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([//webpackBootstrap传入的参数是一个数组
/* 0 */ //index.js模板的工厂方法
/***/ function(module, exports, __webpack_require__) {

	var text=__webpack_require__(1);
	console.log(text)

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports='Hello world!'

/***/ }
/******/ ]);
```