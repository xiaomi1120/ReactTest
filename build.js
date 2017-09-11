// requiredjs模块
var requirejs=require('requirejs');
requirejs.optimize({
    baseUrl:'../appDir/scripts',
    name:'main',
    out:'../build.main-built.js'
},function(buildResponse){
    // success callback


},function(err){
// err callback
})