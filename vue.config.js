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
                target: 'http://m.you.163.com',
                changeOrigin: true, //支持跨域
                pathRewrite: { //重写路径: 让代理服务在转发请求, 对路径进行特定修改
                    '^/api': '', // 去掉路径中的/api
                },
            },
        }
    }


}


// 全局定义px2remLoader
const px2remLoader = {
  loader: 'px2rem-loader',
  options: {
  remUnit: 37.5  // remUnit为转换rem的基础 设计稿单位/等分数 = remUnit
  }
}



// 在该函数的loaders中添加
function generateLoaders (loader, loaderOptions) {
  // 添加使用 px2remLoader
  const loaders = options.usePostCSS ? [cssLoader, postcssLoader,px2remLoader] : [cssLoader, px2remLoader]

  if (loader) {
    loaders.push({
      loader: loader + '-loader',
      options: Object.assign({}, loaderOptions, {
        sourceMap: options.sourceMap
      })
    })
  }

  // Extract CSS when that option is specified
  // (which is the case during production build)
  if (options.extract) {
    return ExtractTextPlugin.extract({
      use: loaders,
      fallback: 'vue-style-loader'
    })
  } else {
    return ['vue-style-loader'].concat(loaders)
  }
}