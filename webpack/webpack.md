- esmodule和commonjs
    -   require exports==module.exports 向外暴露的是Module.exports
        import export 与 expost default
    -   运行时加载与编译时加载
- webpack中的三个概念 module chunk bundle
    - module:就是模块
    - chunk :webpack拆分出来的包
        - 项目入口entry
        - 通过import()动态引入的
        - splitChunks拆分的
    - bundle 就是webpack对chunk一对一进行编译压缩打包处理后的
- splitChunks
    module.exports = {
        optimization: {
            splitChunks: {
            chunks: 'async',//async动态加载里的模块 initial入口文件的模块 all所有 拆分模块范围
            minSize: 30000,
            minChunks: 1,// 至少被使用1次
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {//只匹配node_modules里面的
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {//匹配其余的引用过两次以上的
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
            }
        }
    };