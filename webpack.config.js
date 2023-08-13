const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
module.exports = {
    mode: 'development',
    // 设置生成源映射的方式：inline-source-map表示生成的源映射将包含在生成的 JavaScript 文件中，而不会生成单独的 .map 文件
    devtool: 'inline-source-map', 
    entry:  './app/index.js', // 入口文件
    output: {
      path: path.resolve(__dirname, 'build'), // 必须使用绝对地址，输出文件夹
      filename: "bundle.js" // 打包后输出文件的文件名
    },
    // 优化
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    devServer: {
        static: './build',// 将此目录作为开发服务器的静态资源目录，也就是说，该目录中的文件会通过开发服务器提供给浏览器访问
    },
    plugins: [
        // html-webpack-plugin: 可以自动生成index.html文件
        new HtmlWebpackPlugin({
            title: '测试title',
        })
    ],
    module: {
        rules: [{
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        }, {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource', // 图片的Loader是webpack内置的，这样写就可以
        }, {
            test: /\.js$/,
            exclude: /node_modules/, 
            use: {
                loader: 'babel-loader', // 将 ES6+ 的 JavaScript 代码转换成 ES5 以兼容不同的浏览器
                options: {
                    presets: ['@babel/preset-env'],// 它会根据目标浏览器或环境自动确定需要的转译规则，以便生成兼容的 JavaScript 代码
                }
            }
        }]
    }
  }

// 插件合集
// loader: 
    // style-loader css-loader 作用：加载css文件
    // babel-loader @babel/core @babel/preset-env 作用：将 ES6+ 的 JavaScript 代码转换成 ES5 以兼容不同的浏览器
// htmlWebpackPlugin 作用：1、自动生成index.html
// terser-webpack-plugin 作用：压缩代码的工具
// webpack-dev-server 作用：1、可以监视源代码的变化，并在代码发生变化时自动重新加载页面，而无需手动刷新