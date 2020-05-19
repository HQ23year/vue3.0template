const path = require('path')
module.exports = {
    // 基本路径
    publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
    //输出文件目录
    outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devdist',
    // 静态资源打包路径
    assetsDir: 'static',
    // eslint-loader 保存时是否检查
    lintOnSave: false,
    // webpack 配置
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.json', 'vue'],
            alias: { // 配置别名
                vue$: "vue/dist/vue.esm.js", //加上这一句
                "@": path.resolve(__dirname, "./src"),
                "components": path.resolve(__dirname, "./src/components"),
                "assets": path.resolve(__dirname, "./src/assets"),
                "views": path.resolve(__dirname, "./src/views"),
            }
        }
    },

    //webpack 链式配置   默认已经配置好了  node_modules/@vue
    chainWebpack: config => {
        const svgRule = config.module.rule('svg')
        svgRule.uses.clear();
        svgRule.use('svg-sprite-loader').loader('svg-sprite-loader').options({
            symbolId: 'icon-[name]',
            include: ['./src.icons']
        })
    },
    devServer: {
        port: 8080,
        host: '0.0.0.0', //指定使用地址,默认localhost,0.0.0.0代表可以被外界访问
        open: true, //编译完成是否打开网页
        hot: true,   //开启热加载
        overlay: {      //全屏模式下是否显示脚本错误
            warnings: false,
            errors: true
        },
        proxy: null
        // proxy: {
        //     '^devApi': {
        //         target: `http://www.web-jshtml.cn/productapi`,
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^devApi': ''
        //         }
        //     }
        // },
    },
}
