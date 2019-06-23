const path = require('path');


module.exports = {
    mode: 'development', //设置环境，开发环境
    entry: {
        main: './src/index.js', // 打包后存放目录
    },
    module:{
        rules: [{
            test: /\.(jpg|png|gif)$/,
            // use: {
            //     loader: 'file-loader',
            //     options: {
            //         //placeholder占位符
            //         name: '[name]_[hash].[ext]', // 设置打包图片命名
            //         outputPath: 'images/', //打包后存放目录
            //     }
            // }
            use: {
                loader: 'url-loader',
                options: {
                    //placeholder占位符
                    name: '[name]_[hash].[ext]', // 设置打包图片命名
                    outputPath: 'images/', //打包后存放目录
                    limit: 2048000, // 少于这个打包成base64
                }
            }
        }]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}