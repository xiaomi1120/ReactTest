
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