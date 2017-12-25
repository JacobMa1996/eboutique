/*
    frontend页面 打包配置
*/
const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const entry = require('./utils')
const context = path.resolve(__dirname, '../') //assests
const distPath = path.join(__dirname, '../dist/frontend/')
const moduleIdPlugin = webpack.HashedModuleIdsPlugin;
const extractSass = new ExtractTextPlugin('[name]/bundle.css')

module.exports = {
    context: context,
    entry: entry.enrtryFrontend,
    output: {
        filename: '[name]/bundle.js',
        path: distPath
    },
    module: {
        rules: [{
            test: /\.js$/i,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }, {
            test: /\.css$/i,
            loader: extractSass.extract(['css-loader'])
        }, {
            test: /\.scss$/i,
            loader: extractSass.extract(['css-loader', 'sass-loader'])
        }]
    }, 
    resolve: {
        modules: [path.resolve(context, '../node_modules')]
    }, 
    plugins: [
        extractSass, 
        new moduleIdPlugin()
    ]
}