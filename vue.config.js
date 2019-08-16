const path = require('path')

function resolve(dir) {
    return path.resolve(__dirname, dir)
}

// vue.config.js
module.exports = {
    // 编写webpack配置
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json'], // 自添加的文件扩展名
            alias: { // 模块路径别名
                // 'vue$': 'vue/dist/vue.esm.js',
                '@': resolve('src'),
                'components': resolve('src/components'),
                'pages': resolve('src/pages'),
            }
        }
    },
    // 配置开发服务中的代理
    devServer: {
        proxy: {
            //请求地址以/api开头
            '/api': {
                target: 'http://localhost:4000',
                changeOrigin: true, //支持跨域
                pathRewrite: { //重写路径: 让代理服务在转发请求, 对路径进行特定修改
                    '^/api': '', // 去掉路径中的/api
                },
            },
        }
    }


}

