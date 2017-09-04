/**
 * Created by wangqiang on 2017/9/3.
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports={
    entry:path.resolve(__dirname,'index.js'),
    output: {
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['','.js','jsx']
    },
    module: {
        loaders:[
            {test:/\.(js|jsx)$/,exclude:/node_module/,loader:'babel-loader'},
            {test:/\.less$/,exclude:/node_module/,loader:'style-loader!css-loader!postcss-loader!less-loader'},
            {test:/\.css$/,exclude:/node_module/,loader:'style-loader!css-loader!postcss-loader'},
        ]
    }
}









