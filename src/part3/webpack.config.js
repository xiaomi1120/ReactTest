var path=require('path');
module.exports={
    // configuration
    entry:path.join(__dirname,'index'),//项目的入口文件
    output:{//输出结果描述
        path:__dirname,//输出目录
        filename:'bundle.js'//输出文件名
    },
    module:{
        loaders:[
            {
                test:/\.css$/,
                loaders:['style','css']//是对于模块中的loader使用的配置
            }
        ]
    }
}