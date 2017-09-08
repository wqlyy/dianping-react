var path = require('path')
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: {
        app: path.resolve(__dirname, 'app/index.jsx'),
        // 将 第三方依赖 单独打包
        vendor: [
            'react',
            'react-dom',
            'react-redux',
            'react-router',
            'redux',
            'es6-promise',
            'whatwg-fetch',
            'immutable'
        ]
    },
    output: {
        path: __dirname + "/build",
        filename: "[name].[chunkhash:8].js",
        publicPath: './'
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    module: {
        rules: [
            {test: /\.(js|jsx)$/, exclude: /node_modules/, use: 'babel-loader'},
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({fallback:'style-loader',use: 'css-loader!postcss-loader!less-loader'})
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({fallback:'style-loader', use:['css-loader','postcss-loader']})
            },
            {test: /\.(png|gif|jpg|jpeg|bmp)$/i, use: 'url-loader?limit=5000&name=img/[name].[chunkhash:8].[ext]'},
            {
                test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
                use: 'url-loader?limit=5000&name=fonts/[name].[chunkhash:8].[ext]'
            }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    require('autoprefixer')({browsers:["last 2 versions","Firefox >= 20","ie 8","ie 7","ie 6"]}) //调用autoprefixer插件，例如 display: flex
                ]
            }
        }),
        // webpack 内置的 banner-plugin
        new webpack.BannerPlugin("Copyright by wqlyy@github.com."),

        // html 模板插件
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.tmpl.html'
        }),
        // 定义为生产环境，编译 React 时压缩到最小
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),


        new webpack.optimize.UglifyJsPlugin({
            compress: {
                //supresses warnings, usually from module minification
                warnings: false
            }
        }),

        // 分离CSS和JS文件
        new ExtractTextPlugin('[name].[chunkhash:8].css'),

        // 提供公共代码
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: '[name].[chunkhash:8].js'
        }),

        // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        })
    ]
}