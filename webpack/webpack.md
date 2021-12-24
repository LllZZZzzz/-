- esmodule和commonjs
    -   require exports==module.exports 向外暴露的是Module.exports
        import export 与 expost default
    -   运行时加载与编译时加载 import具有置顶性
    -   require暴露的是值的浅拷贝(只会拿到第一次暴露的值 源码变 这里不变 但是如果是第二次以上的对象的话会变) import暴露的是值得引用(源码的值变这里也会变)
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
- 使用了 es6 的模块系统，如果借助 babel 的转换，es6 的模块系统最终还是会转换成 commonjs 的规范。所以我们如果是使用 babel 转换 es6 模块，混合使用 es6 的模块和 commonjs 的规范是没有问题的，因为最终都会转换成 commonjs。

- 原理
    - 分析模块 
    - 收集依赖 
    - 将loader加载->构建AST树
    - 生成bundle文件
    - 从index.js开始执行 根据依赖再去执行别的文件

    - 原型与bundle
        (function (list) {
            function require(file) {
                var exports = {};
                (function (exports, code) {
                eval(code);
                })(exports, list[file]);
                return exports;
            }
            require("index.js");
            })({
            "index.js": `
                var add = require('add.js').default
                console.log(add(1 , 2))
                    `,
            "add.js": `exports.default = function(a,b){return a + b}`,
        });
    - AST与模块分析
    - 依赖分析与打包